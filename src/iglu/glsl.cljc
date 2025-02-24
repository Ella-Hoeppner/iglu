(ns iglu.glsl
  (:require [clojure.string :as str]
            [iglu.parse :as parse]))

;; multimethods

(defmulti ->function-call
  (fn [fn-name args]
    (cond
      (number? fn-name) ::number
      ('#{? if} fn-name) ::inline-conditional
      ('#{+ - * / % < > <= >= == != || && "^^"} fn-name) ::operator
      ('#{= += -= *= "/="} fn-name) ::assignment
      (#{"if" "else if" "switch" "for" "while"} fn-name) ::block-with-expression
      (string? fn-name) ::block
      (-> fn-name str (str/starts-with? "=")) ::local-assignment
      (-> fn-name str (str/starts-with? ".")) ::property
      :else fn-name)))

(defmulti ->subexpression
  (fn [val] (first val)))

(defmulti ->statement
  (fn [val] (first val)))

;; ->function-call

(defmethod ->function-call ::assignment [fn-name args]
  (when-not (= 2 (count args))
    (throw (ex-info (str fn-name " requires 2 args") {})))
  (let [[sym val] args]
    (str (->subexpression sym) " " fn-name " " (->subexpression val))))

(defmethod ->function-call ::local-assignment [fn-name args]
  (when-not (= 2 (count args))
    (throw (ex-info (str fn-name " requires 2 args") {})))
  (let [[sym val] args]
    (str
     (-> fn-name str (subs 1))
     " "
     (->subexpression sym)
     " = "
     (->subexpression val))))

(defmethod ->function-call ::block-with-expression [fn-name args]
  (when (< (count args) 1)
    (throw (ex-info (str fn-name " requires 1 arg") {})))
  (let [[condition & body] args]
    (cond-> (str fn-name " " (->subexpression condition))
      (seq body)
      (cons (mapv ->statement body)))))

(defmethod ->function-call ::block [fn-name args]
  (when (< (count args) 1)
    (throw (ex-info (str fn-name " requires 1 arg") {})))
  (cons fn-name (mapv ->statement args)))

(defmethod ->function-call ::inline-conditional [fn-name args]
  (when-not (= 3 (count args))
    (throw (ex-info (str fn-name " requires 3 args") {})))
  (let [[condition true-case false-case] args]
    (str
     (->subexpression condition)
     " ? " (->subexpression true-case)
     " : " (->subexpression false-case))))

(defmethod ->function-call ::operator [fn-name args]
  (str/join (str " " fn-name " ") (mapv ->subexpression args)))

(defmethod ->function-call ::property [fn-name args]
  (when (not= (count args) 1)
    (throw (ex-info (str fn-name " requires exactly one arg") {})))
  (str (-> args first ->subexpression) "." (-> fn-name str (subs 1))))

(defmethod ->function-call ::number [fn-name args]
  (when (not= (count args) 1)
    (throw (ex-info (str fn-name " requires exactly one arg") {})))
  (str (->subexpression (first args)) "[" fn-name "]"))

(defmethod ->function-call :default [fn-name args]
  (str fn-name "(" (str/join ", " (mapv ->subexpression args)) ")"))

;; ->statement

(defmethod ->statement :expression [[_ expression]]
  (let [{:keys [fn-name args]} expression]
    (->function-call fn-name args)))

(defmethod ->statement :default [val]
  (->subexpression val))

;; ->expression

(defmethod ->subexpression :expression [[_ expression]]
  (let [{:keys [fn-name args]} expression
        ret (->function-call fn-name args)]
    (if (string? ret)
      (str "(" ret ")")
      ret)))

(defmethod ->subexpression :accessor [[_ expression]]
  (let [{:keys [fn-name args]} expression]
    (->> args
         (map #(str "[" (->subexpression %) "]"))
         str/join
         (str fn-name))))

(defmethod ->subexpression :number [[_ number]]
  (str number))

(defmethod ->subexpression :symbol [[_ symbol]]
  (str symbol))

(defmethod ->subexpression :string [[_ string]]
  string)

;; var definitions

(defn- parse-type [[k v]]
  (case k
    :type-name v
    :array (str (:type-name v) "[" (:size v) "]")))

(defn ->in [[name type]]
  (str "in " (parse-type type) " " name))

(defn ->uniform [[name type]]
  (str "uniform " (parse-type type) " " name))

(defn ->attribute [[name type]]
  (str "attribute " (parse-type type) " " name))

(defn ->varying [[name type]]
  (str "varying " (parse-type type) " " name))

(defn ->out [[name type]]
  (when type
    (str "out " (parse-type type) " " name)))

(defn ->function [signatures [name {:keys [args body]}]]
  (if-let [{:keys [in out]} (get signatures name)]
    (let [_ (when (not= (count in) (count args))
              (throw (ex-info "Function has args signature of a different length than its args definition"
                              {:fn name
                               :signature in
                               :definition args})))
          args-list (str/join ", "
                              (mapv (fn [type name]
                                      (str type " " name))
                                    in args))
          signature (str out " " name "(" args-list ")")]
      (into [signature]
            (let [body-lines (mapv ->statement body)]
              (if (= 'void out)
                body-lines
                (conj
                 (vec (butlast body-lines))
                 (str "return " (last body-lines)))))))
    (throw (ex-info "Nothing found in :signatures for function" {:fn name}))))

;; compiler fn

(defn indent [level line]
  (str (str/join (repeat (* level 2) " "))
       line))

(defn stringify [level lines line]
  (cond
    (string? line)
    (conj lines
          (if (or (str/starts-with? line "#")
                  (str/ends-with? line ";"))
            line
            (str (indent level line) ";")))
    (string? (first line))
    (-> lines
        (conj (indent level (first line)))
        (conj (indent level "{"))
        (into (reduce (partial stringify (inc level)) [] (rest line)))
        (conj (indent level "}")))
    :else
    (into lines (reduce (partial stringify level) [] line))))

(defn sort-fns [functions fn-deps]
  (->> functions
       seq
       (sort-by first
                (fn [a b]
                  (cond
                    (contains? (fn-deps a) b) 1
                    (contains? (fn-deps b) a) -1
                    :else 0)))))

(defn iglu->glsl [{:keys [version precision
                          uniforms attributes varyings inputs outputs
                          signatures functions fn-deps]
                   :as shader}]
  (let [[fn-kind fn-val] functions]
    (->> (cond-> []
           version (conj (str "#version " version))
           precision (conj (str "precision " precision))
           uniforms (into (mapv ->uniform uniforms))
           attributes (into (mapv ->attribute attributes))
           varyings (into (mapv ->varying varyings))
           inputs (into (mapv ->in inputs))
           outputs (into (mapv ->out outputs))
           (= fn-kind :iglu) (into (mapv (partial ->function signatures)
                                         (sort-fns fn-val fn-deps))))
         (reduce (partial stringify 0) [])
         (str/join \newline)
         ((fn [output]
            (if (= fn-kind :glsl)
              (str output \newline fn-val)
              output))))))

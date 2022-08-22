goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__40568){
var map__40571 = p__40568;
var map__40571__$1 = cljs.core.__destructure_map(map__40571);
var m = map__40571__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40571__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40571__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__5043__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return [(function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__40576_41176 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__40577_41177 = null;
var count__40578_41178 = (0);
var i__40579_41179 = (0);
while(true){
if((i__40579_41179 < count__40578_41178)){
var f_41180 = chunk__40577_41177.cljs$core$IIndexed$_nth$arity$2(null,i__40579_41179);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_41180], 0));


var G__41181 = seq__40576_41176;
var G__41182 = chunk__40577_41177;
var G__41183 = count__40578_41178;
var G__41184 = (i__40579_41179 + (1));
seq__40576_41176 = G__41181;
chunk__40577_41177 = G__41182;
count__40578_41178 = G__41183;
i__40579_41179 = G__41184;
continue;
} else {
var temp__5804__auto___41185 = cljs.core.seq(seq__40576_41176);
if(temp__5804__auto___41185){
var seq__40576_41186__$1 = temp__5804__auto___41185;
if(cljs.core.chunked_seq_QMARK_(seq__40576_41186__$1)){
var c__5565__auto___41187 = cljs.core.chunk_first(seq__40576_41186__$1);
var G__41188 = cljs.core.chunk_rest(seq__40576_41186__$1);
var G__41189 = c__5565__auto___41187;
var G__41190 = cljs.core.count(c__5565__auto___41187);
var G__41191 = (0);
seq__40576_41176 = G__41188;
chunk__40577_41177 = G__41189;
count__40578_41178 = G__41190;
i__40579_41179 = G__41191;
continue;
} else {
var f_41192 = cljs.core.first(seq__40576_41186__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_41192], 0));


var G__41193 = cljs.core.next(seq__40576_41186__$1);
var G__41194 = null;
var G__41195 = (0);
var G__41196 = (0);
seq__40576_41176 = G__41193;
chunk__40577_41177 = G__41194;
count__40578_41178 = G__41195;
i__40579_41179 = G__41196;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_41197 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5043__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_41197], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_41197)))?cljs.core.second(arglists_41197):arglists_41197)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__40589_41198 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__40590_41199 = null;
var count__40591_41200 = (0);
var i__40592_41201 = (0);
while(true){
if((i__40592_41201 < count__40591_41200)){
var vec__40617_41202 = chunk__40590_41199.cljs$core$IIndexed$_nth$arity$2(null,i__40592_41201);
var name_41203 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40617_41202,(0),null);
var map__40620_41204 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40617_41202,(1),null);
var map__40620_41205__$1 = cljs.core.__destructure_map(map__40620_41204);
var doc_41206 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40620_41205__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_41207 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40620_41205__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_41203], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_41207], 0));

if(cljs.core.truth_(doc_41206)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_41206], 0));
} else {
}


var G__41209 = seq__40589_41198;
var G__41210 = chunk__40590_41199;
var G__41211 = count__40591_41200;
var G__41212 = (i__40592_41201 + (1));
seq__40589_41198 = G__41209;
chunk__40590_41199 = G__41210;
count__40591_41200 = G__41211;
i__40592_41201 = G__41212;
continue;
} else {
var temp__5804__auto___41213 = cljs.core.seq(seq__40589_41198);
if(temp__5804__auto___41213){
var seq__40589_41214__$1 = temp__5804__auto___41213;
if(cljs.core.chunked_seq_QMARK_(seq__40589_41214__$1)){
var c__5565__auto___41215 = cljs.core.chunk_first(seq__40589_41214__$1);
var G__41216 = cljs.core.chunk_rest(seq__40589_41214__$1);
var G__41217 = c__5565__auto___41215;
var G__41218 = cljs.core.count(c__5565__auto___41215);
var G__41219 = (0);
seq__40589_41198 = G__41216;
chunk__40590_41199 = G__41217;
count__40591_41200 = G__41218;
i__40592_41201 = G__41219;
continue;
} else {
var vec__40635_41220 = cljs.core.first(seq__40589_41214__$1);
var name_41221 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40635_41220,(0),null);
var map__40638_41222 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40635_41220,(1),null);
var map__40638_41223__$1 = cljs.core.__destructure_map(map__40638_41222);
var doc_41224 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40638_41223__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_41225 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40638_41223__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_41221], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_41225], 0));

if(cljs.core.truth_(doc_41224)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_41224], 0));
} else {
}


var G__41231 = cljs.core.next(seq__40589_41214__$1);
var G__41232 = null;
var G__41233 = (0);
var G__41234 = (0);
seq__40589_41198 = G__41231;
chunk__40590_41199 = G__41232;
count__40591_41200 = G__41233;
i__40592_41201 = G__41234;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5804__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5804__auto__)){
var fnspec = temp__5804__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__40651 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__40652 = null;
var count__40653 = (0);
var i__40654 = (0);
while(true){
if((i__40654 < count__40653)){
var role = chunk__40652.cljs$core$IIndexed$_nth$arity$2(null,i__40654);
var temp__5804__auto___41236__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___41236__$1)){
var spec_41237 = temp__5804__auto___41236__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_41237)], 0));
} else {
}


var G__41238 = seq__40651;
var G__41239 = chunk__40652;
var G__41240 = count__40653;
var G__41241 = (i__40654 + (1));
seq__40651 = G__41238;
chunk__40652 = G__41239;
count__40653 = G__41240;
i__40654 = G__41241;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq(seq__40651);
if(temp__5804__auto____$1){
var seq__40651__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__40651__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__40651__$1);
var G__41242 = cljs.core.chunk_rest(seq__40651__$1);
var G__41243 = c__5565__auto__;
var G__41244 = cljs.core.count(c__5565__auto__);
var G__41245 = (0);
seq__40651 = G__41242;
chunk__40652 = G__41243;
count__40653 = G__41244;
i__40654 = G__41245;
continue;
} else {
var role = cljs.core.first(seq__40651__$1);
var temp__5804__auto___41246__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___41246__$2)){
var spec_41247 = temp__5804__auto___41246__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_41247)], 0));
} else {
}


var G__41248 = cljs.core.next(seq__40651__$1);
var G__41249 = null;
var G__41250 = (0);
var G__41251 = (0);
seq__40651 = G__41248;
chunk__40652 = G__41249;
count__40653 = G__41250;
i__40654 = G__41251;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5804__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5804__auto__)){
var msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5804__auto__)){
var ed = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__41253 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__41254 = cljs.core.ex_cause(t);
via = G__41253;
t = G__41254;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5804__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5804__auto__)){
var root_msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5804__auto__)){
var data = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5804__auto__)){
var phase = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__40913 = datafied_throwable;
var map__40913__$1 = cljs.core.__destructure_map(map__40913);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40913__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40913__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__40913__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__40914 = cljs.core.last(via);
var map__40914__$1 = cljs.core.__destructure_map(map__40914);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40914__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40914__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40914__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__40915 = data;
var map__40915__$1 = cljs.core.__destructure_map(map__40915);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40915__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40915__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40915__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__40916 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__40916__$1 = cljs.core.__destructure_map(map__40916);
var top_data = map__40916__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40916__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__40918 = phase;
var G__40918__$1 = (((G__40918 instanceof cljs.core.Keyword))?G__40918.fqn:null);
switch (G__40918__$1) {
case "read-source":
var map__40919 = data;
var map__40919__$1 = cljs.core.__destructure_map(map__40919);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40919__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40919__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__40924 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__40924__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40924,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__40924);
var G__40924__$2 = (cljs.core.truth_((function (){var fexpr__40952 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__40952.cljs$core$IFn$_invoke$arity$1 ? fexpr__40952.cljs$core$IFn$_invoke$arity$1(source) : fexpr__40952.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__40924__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__40924__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40924__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__40924__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__40953 = top_data;
var G__40953__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40953,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__40953);
var G__40953__$2 = (cljs.core.truth_((function (){var fexpr__40954 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__40954.cljs$core$IFn$_invoke$arity$1 ? fexpr__40954.cljs$core$IFn$_invoke$arity$1(source) : fexpr__40954.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__40953__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__40953__$1);
var G__40953__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40953__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__40953__$2);
var G__40953__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40953__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__40953__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40953__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__40953__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__40957 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40957,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40957,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40957,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40957,(3),null);
var G__40960 = top_data;
var G__40960__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40960,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__40960);
var G__40960__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40960__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__40960__$1);
var G__40960__$3 = (cljs.core.truth_((function (){var and__5041__auto__ = source__$1;
if(cljs.core.truth_(and__5041__auto__)){
return method;
} else {
return and__5041__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40960__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__40960__$2);
var G__40960__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40960__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__40960__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40960__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__40960__$4;
}

break;
case "execution":
var vec__40961 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40961,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40961,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40961,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40961,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__40861_SHARP_){
var or__5043__auto__ = (p1__40861_SHARP_ == null);
if(or__5043__auto__){
return or__5043__auto__;
} else {
var fexpr__40964 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__40964.cljs$core$IFn$_invoke$arity$1 ? fexpr__40964.cljs$core$IFn$_invoke$arity$1(p1__40861_SHARP_) : fexpr__40964.call(null,p1__40861_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5043__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return line;
}
})();
var G__40965 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__40965__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40965,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__40965);
var G__40965__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40965__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__40965__$1);
var G__40965__$3 = (cljs.core.truth_((function (){var or__5043__auto__ = fn;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
var and__5041__auto__ = source__$1;
if(cljs.core.truth_(and__5041__auto__)){
return method;
} else {
return and__5041__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40965__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5043__auto__ = fn;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__40965__$2);
var G__40965__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40965__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__40965__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40965__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__40965__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__40918__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__40980){
var map__40981 = p__40980;
var map__40981__$1 = cljs.core.__destructure_map(map__40981);
var triage_data = map__40981__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40981__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40981__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40981__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40981__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40981__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40981__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40981__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40981__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5043__auto__ = source;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5043__auto__ = line;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__5043__auto__ = class$;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__40989 = phase;
var G__40989__$1 = (((G__40989 instanceof cljs.core.Keyword))?G__40989.fqn:null);
switch (G__40989__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__40990 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__40991 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__40992 = loc;
var G__40993 = (cljs.core.truth_(spec)?(function (){var sb__5687__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__41004_41271 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__41005_41272 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__41006_41273 = true;
var _STAR_print_fn_STAR__temp_val__41007_41274 = (function (x__5688__auto__){
return sb__5687__auto__.append(x__5688__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__41006_41273);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__41007_41274);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__40975_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__40975_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__41005_41272);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__41004_41271);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5687__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__40990,G__40991,G__40992,G__40993) : format.call(null,G__40990,G__40991,G__40992,G__40993));

break;
case "macroexpansion":
var G__41121 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__41122 = cause_type;
var G__41123 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__41124 = loc;
var G__41125 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__41121,G__41122,G__41123,G__41124,G__41125) : format.call(null,G__41121,G__41122,G__41123,G__41124,G__41125));

break;
case "compile-syntax-check":
var G__41129 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__41130 = cause_type;
var G__41131 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__41132 = loc;
var G__41133 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__41129,G__41130,G__41131,G__41132,G__41133) : format.call(null,G__41129,G__41130,G__41131,G__41132,G__41133));

break;
case "compilation":
var G__41138 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__41139 = cause_type;
var G__41140 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__41141 = loc;
var G__41142 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__41138,G__41139,G__41140,G__41141,G__41142) : format.call(null,G__41138,G__41139,G__41140,G__41141,G__41142));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__41143 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__41144 = symbol;
var G__41145 = loc;
var G__41146 = (function (){var sb__5687__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__41149_41275 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__41150_41276 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__41151_41277 = true;
var _STAR_print_fn_STAR__temp_val__41152_41278 = (function (x__5688__auto__){
return sb__5687__auto__.append(x__5688__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__41151_41277);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__41152_41278);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__40978_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__40978_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__41150_41276);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__41149_41275);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5687__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__41143,G__41144,G__41145,G__41146) : format.call(null,G__41143,G__41144,G__41145,G__41146));
} else {
var G__41154 = "Execution error%s at %s(%s).\n%s\n";
var G__41155 = cause_type;
var G__41156 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__41157 = loc;
var G__41158 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__41154,G__41155,G__41156,G__41157,G__41158) : format.call(null,G__41154,G__41155,G__41156,G__41157,G__41158));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__40989__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map

goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5772__auto__ = [];
var len__5766__auto___42852 = arguments.length;
var i__5767__auto___42853 = (0);
while(true){
if((i__5767__auto___42853 < len__5766__auto___42852)){
args__5772__auto__.push((arguments[i__5767__auto___42853]));

var G__42854 = (i__5767__auto___42853 + (1));
i__5767__auto___42853 = G__42854;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq42472){
var G__42473 = cljs.core.first(seq42472);
var seq42472__$1 = cljs.core.next(seq42472);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42473,seq42472__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__42485 = cljs.core.seq(sources);
var chunk__42486 = null;
var count__42487 = (0);
var i__42488 = (0);
while(true){
if((i__42488 < count__42487)){
var map__42506 = chunk__42486.cljs$core$IIndexed$_nth$arity$2(null,i__42488);
var map__42506__$1 = cljs.core.__destructure_map(map__42506);
var src = map__42506__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42506__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42506__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42506__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42506__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e42507){var e_42855 = e42507;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_42855);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_42855.message)].join('')));
}

var G__42856 = seq__42485;
var G__42857 = chunk__42486;
var G__42858 = count__42487;
var G__42859 = (i__42488 + (1));
seq__42485 = G__42856;
chunk__42486 = G__42857;
count__42487 = G__42858;
i__42488 = G__42859;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__42485);
if(temp__5804__auto__){
var seq__42485__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__42485__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__42485__$1);
var G__42860 = cljs.core.chunk_rest(seq__42485__$1);
var G__42861 = c__5565__auto__;
var G__42862 = cljs.core.count(c__5565__auto__);
var G__42863 = (0);
seq__42485 = G__42860;
chunk__42486 = G__42861;
count__42487 = G__42862;
i__42488 = G__42863;
continue;
} else {
var map__42508 = cljs.core.first(seq__42485__$1);
var map__42508__$1 = cljs.core.__destructure_map(map__42508);
var src = map__42508__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42508__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42508__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42508__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42508__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e42510){var e_42864 = e42510;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_42864);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_42864.message)].join('')));
}

var G__42865 = cljs.core.next(seq__42485__$1);
var G__42866 = null;
var G__42867 = (0);
var G__42868 = (0);
seq__42485 = G__42865;
chunk__42486 = G__42866;
count__42487 = G__42867;
i__42488 = G__42868;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__42514 = cljs.core.seq(js_requires);
var chunk__42515 = null;
var count__42516 = (0);
var i__42517 = (0);
while(true){
if((i__42517 < count__42516)){
var js_ns = chunk__42515.cljs$core$IIndexed$_nth$arity$2(null,i__42517);
var require_str_42869 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_42869);


var G__42870 = seq__42514;
var G__42871 = chunk__42515;
var G__42872 = count__42516;
var G__42873 = (i__42517 + (1));
seq__42514 = G__42870;
chunk__42515 = G__42871;
count__42516 = G__42872;
i__42517 = G__42873;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__42514);
if(temp__5804__auto__){
var seq__42514__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__42514__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__42514__$1);
var G__42874 = cljs.core.chunk_rest(seq__42514__$1);
var G__42875 = c__5565__auto__;
var G__42876 = cljs.core.count(c__5565__auto__);
var G__42877 = (0);
seq__42514 = G__42874;
chunk__42515 = G__42875;
count__42516 = G__42876;
i__42517 = G__42877;
continue;
} else {
var js_ns = cljs.core.first(seq__42514__$1);
var require_str_42878 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_42878);


var G__42879 = cljs.core.next(seq__42514__$1);
var G__42880 = null;
var G__42881 = (0);
var G__42882 = (0);
seq__42514 = G__42879;
chunk__42515 = G__42880;
count__42516 = G__42881;
i__42517 = G__42882;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__42519){
var map__42520 = p__42519;
var map__42520__$1 = cljs.core.__destructure_map(map__42520);
var msg = map__42520__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42520__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42520__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5520__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__42525(s__42526){
return (new cljs.core.LazySeq(null,(function (){
var s__42526__$1 = s__42526;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__42526__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var map__42532 = cljs.core.first(xs__6360__auto__);
var map__42532__$1 = cljs.core.__destructure_map(map__42532);
var src = map__42532__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42532__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42532__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5516__auto__ = ((function (s__42526__$1,map__42532,map__42532__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__42520,map__42520__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__42525_$_iter__42527(s__42528){
return (new cljs.core.LazySeq(null,((function (s__42526__$1,map__42532,map__42532__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__42520,map__42520__$1,msg,info,reload_info){
return (function (){
var s__42528__$1 = s__42528;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__42528__$1);
if(temp__5804__auto____$1){
var s__42528__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__42528__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__42528__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__42530 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__42529 = (0);
while(true){
if((i__42529 < size__5519__auto__)){
var warning = cljs.core._nth(c__5518__auto__,i__42529);
cljs.core.chunk_append(b__42530,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__42883 = (i__42529 + (1));
i__42529 = G__42883;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__42530),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__42525_$_iter__42527(cljs.core.chunk_rest(s__42528__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__42530),null);
}
} else {
var warning = cljs.core.first(s__42528__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__42525_$_iter__42527(cljs.core.rest(s__42528__$2)));
}
} else {
return null;
}
break;
}
});})(s__42526__$1,map__42532,map__42532__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__42520,map__42520__$1,msg,info,reload_info))
,null,null));
});})(s__42526__$1,map__42532,map__42532__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__42520,map__42520__$1,msg,info,reload_info))
;
var fs__5517__auto__ = cljs.core.seq(iterys__5516__auto__(warnings));
if(fs__5517__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5517__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__42525(cljs.core.rest(s__42526__$1)));
} else {
var G__42884 = cljs.core.rest(s__42526__$1);
s__42526__$1 = G__42884;
continue;
}
} else {
var G__42885 = cljs.core.rest(s__42526__$1);
s__42526__$1 = G__42885;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__42533_42886 = cljs.core.seq(warnings);
var chunk__42534_42887 = null;
var count__42535_42888 = (0);
var i__42536_42889 = (0);
while(true){
if((i__42536_42889 < count__42535_42888)){
var map__42539_42890 = chunk__42534_42887.cljs$core$IIndexed$_nth$arity$2(null,i__42536_42889);
var map__42539_42891__$1 = cljs.core.__destructure_map(map__42539_42890);
var w_42892 = map__42539_42891__$1;
var msg_42893__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42539_42891__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_42894 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42539_42891__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_42895 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42539_42891__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_42896 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42539_42891__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_42896)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_42894),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_42895),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_42893__$1)].join(''));


var G__42897 = seq__42533_42886;
var G__42898 = chunk__42534_42887;
var G__42899 = count__42535_42888;
var G__42900 = (i__42536_42889 + (1));
seq__42533_42886 = G__42897;
chunk__42534_42887 = G__42898;
count__42535_42888 = G__42899;
i__42536_42889 = G__42900;
continue;
} else {
var temp__5804__auto___42901 = cljs.core.seq(seq__42533_42886);
if(temp__5804__auto___42901){
var seq__42533_42902__$1 = temp__5804__auto___42901;
if(cljs.core.chunked_seq_QMARK_(seq__42533_42902__$1)){
var c__5565__auto___42903 = cljs.core.chunk_first(seq__42533_42902__$1);
var G__42904 = cljs.core.chunk_rest(seq__42533_42902__$1);
var G__42905 = c__5565__auto___42903;
var G__42906 = cljs.core.count(c__5565__auto___42903);
var G__42907 = (0);
seq__42533_42886 = G__42904;
chunk__42534_42887 = G__42905;
count__42535_42888 = G__42906;
i__42536_42889 = G__42907;
continue;
} else {
var map__42541_42908 = cljs.core.first(seq__42533_42902__$1);
var map__42541_42909__$1 = cljs.core.__destructure_map(map__42541_42908);
var w_42910 = map__42541_42909__$1;
var msg_42911__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42541_42909__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_42912 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42541_42909__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_42913 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42541_42909__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_42914 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42541_42909__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_42914)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_42912),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_42913),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_42911__$1)].join(''));


var G__42915 = cljs.core.next(seq__42533_42902__$1);
var G__42916 = null;
var G__42917 = (0);
var G__42918 = (0);
seq__42533_42886 = G__42915;
chunk__42534_42887 = G__42916;
count__42535_42888 = G__42917;
i__42536_42889 = G__42918;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__42518_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__42518_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__5041__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__5041__auto__){
var and__5041__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__5041__auto____$1){
return new$;
} else {
return and__5041__auto____$1;
}
} else {
return and__5041__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__42542){
var map__42543 = p__42542;
var map__42543__$1 = cljs.core.__destructure_map(map__42543);
var msg = map__42543__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42543__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42543__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__42544 = cljs.core.seq(updates);
var chunk__42546 = null;
var count__42547 = (0);
var i__42548 = (0);
while(true){
if((i__42548 < count__42547)){
var path = chunk__42546.cljs$core$IIndexed$_nth$arity$2(null,i__42548);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__42724_42919 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__42728_42920 = null;
var count__42729_42921 = (0);
var i__42730_42922 = (0);
while(true){
if((i__42730_42922 < count__42729_42921)){
var node_42923 = chunk__42728_42920.cljs$core$IIndexed$_nth$arity$2(null,i__42730_42922);
if(cljs.core.not(node_42923.shadow$old)){
var path_match_42924 = shadow.cljs.devtools.client.browser.match_paths(node_42923.getAttribute("href"),path);
if(cljs.core.truth_(path_match_42924)){
var new_link_42925 = (function (){var G__42756 = node_42923.cloneNode(true);
G__42756.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_42924),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__42756;
})();
(node_42923.shadow$old = true);

(new_link_42925.onload = ((function (seq__42724_42919,chunk__42728_42920,count__42729_42921,i__42730_42922,seq__42544,chunk__42546,count__42547,i__42548,new_link_42925,path_match_42924,node_42923,path,map__42543,map__42543__$1,msg,updates,reload_info){
return (function (e){
var seq__42757_42926 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__42759_42927 = null;
var count__42760_42928 = (0);
var i__42761_42929 = (0);
while(true){
if((i__42761_42929 < count__42760_42928)){
var map__42765_42930 = chunk__42759_42927.cljs$core$IIndexed$_nth$arity$2(null,i__42761_42929);
var map__42765_42931__$1 = cljs.core.__destructure_map(map__42765_42930);
var task_42932 = map__42765_42931__$1;
var fn_str_42933 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42765_42931__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_42934 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42765_42931__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_42935 = goog.getObjectByName(fn_str_42933,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_42934)].join(''));

(fn_obj_42935.cljs$core$IFn$_invoke$arity$2 ? fn_obj_42935.cljs$core$IFn$_invoke$arity$2(path,new_link_42925) : fn_obj_42935.call(null,path,new_link_42925));


var G__42936 = seq__42757_42926;
var G__42937 = chunk__42759_42927;
var G__42938 = count__42760_42928;
var G__42939 = (i__42761_42929 + (1));
seq__42757_42926 = G__42936;
chunk__42759_42927 = G__42937;
count__42760_42928 = G__42938;
i__42761_42929 = G__42939;
continue;
} else {
var temp__5804__auto___42940 = cljs.core.seq(seq__42757_42926);
if(temp__5804__auto___42940){
var seq__42757_42941__$1 = temp__5804__auto___42940;
if(cljs.core.chunked_seq_QMARK_(seq__42757_42941__$1)){
var c__5565__auto___42942 = cljs.core.chunk_first(seq__42757_42941__$1);
var G__42943 = cljs.core.chunk_rest(seq__42757_42941__$1);
var G__42944 = c__5565__auto___42942;
var G__42945 = cljs.core.count(c__5565__auto___42942);
var G__42946 = (0);
seq__42757_42926 = G__42943;
chunk__42759_42927 = G__42944;
count__42760_42928 = G__42945;
i__42761_42929 = G__42946;
continue;
} else {
var map__42766_42947 = cljs.core.first(seq__42757_42941__$1);
var map__42766_42948__$1 = cljs.core.__destructure_map(map__42766_42947);
var task_42949 = map__42766_42948__$1;
var fn_str_42950 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42766_42948__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_42951 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42766_42948__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_42952 = goog.getObjectByName(fn_str_42950,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_42951)].join(''));

(fn_obj_42952.cljs$core$IFn$_invoke$arity$2 ? fn_obj_42952.cljs$core$IFn$_invoke$arity$2(path,new_link_42925) : fn_obj_42952.call(null,path,new_link_42925));


var G__42953 = cljs.core.next(seq__42757_42941__$1);
var G__42954 = null;
var G__42955 = (0);
var G__42956 = (0);
seq__42757_42926 = G__42953;
chunk__42759_42927 = G__42954;
count__42760_42928 = G__42955;
i__42761_42929 = G__42956;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_42923);
});})(seq__42724_42919,chunk__42728_42920,count__42729_42921,i__42730_42922,seq__42544,chunk__42546,count__42547,i__42548,new_link_42925,path_match_42924,node_42923,path,map__42543,map__42543__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_42924], 0));

goog.dom.insertSiblingAfter(new_link_42925,node_42923);


var G__42957 = seq__42724_42919;
var G__42958 = chunk__42728_42920;
var G__42959 = count__42729_42921;
var G__42960 = (i__42730_42922 + (1));
seq__42724_42919 = G__42957;
chunk__42728_42920 = G__42958;
count__42729_42921 = G__42959;
i__42730_42922 = G__42960;
continue;
} else {
var G__42961 = seq__42724_42919;
var G__42962 = chunk__42728_42920;
var G__42963 = count__42729_42921;
var G__42964 = (i__42730_42922 + (1));
seq__42724_42919 = G__42961;
chunk__42728_42920 = G__42962;
count__42729_42921 = G__42963;
i__42730_42922 = G__42964;
continue;
}
} else {
var G__42965 = seq__42724_42919;
var G__42966 = chunk__42728_42920;
var G__42967 = count__42729_42921;
var G__42968 = (i__42730_42922 + (1));
seq__42724_42919 = G__42965;
chunk__42728_42920 = G__42966;
count__42729_42921 = G__42967;
i__42730_42922 = G__42968;
continue;
}
} else {
var temp__5804__auto___42969 = cljs.core.seq(seq__42724_42919);
if(temp__5804__auto___42969){
var seq__42724_42970__$1 = temp__5804__auto___42969;
if(cljs.core.chunked_seq_QMARK_(seq__42724_42970__$1)){
var c__5565__auto___42971 = cljs.core.chunk_first(seq__42724_42970__$1);
var G__42972 = cljs.core.chunk_rest(seq__42724_42970__$1);
var G__42973 = c__5565__auto___42971;
var G__42974 = cljs.core.count(c__5565__auto___42971);
var G__42975 = (0);
seq__42724_42919 = G__42972;
chunk__42728_42920 = G__42973;
count__42729_42921 = G__42974;
i__42730_42922 = G__42975;
continue;
} else {
var node_42976 = cljs.core.first(seq__42724_42970__$1);
if(cljs.core.not(node_42976.shadow$old)){
var path_match_42977 = shadow.cljs.devtools.client.browser.match_paths(node_42976.getAttribute("href"),path);
if(cljs.core.truth_(path_match_42977)){
var new_link_42978 = (function (){var G__42767 = node_42976.cloneNode(true);
G__42767.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_42977),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__42767;
})();
(node_42976.shadow$old = true);

(new_link_42978.onload = ((function (seq__42724_42919,chunk__42728_42920,count__42729_42921,i__42730_42922,seq__42544,chunk__42546,count__42547,i__42548,new_link_42978,path_match_42977,node_42976,seq__42724_42970__$1,temp__5804__auto___42969,path,map__42543,map__42543__$1,msg,updates,reload_info){
return (function (e){
var seq__42768_42979 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__42770_42980 = null;
var count__42771_42981 = (0);
var i__42772_42982 = (0);
while(true){
if((i__42772_42982 < count__42771_42981)){
var map__42776_42983 = chunk__42770_42980.cljs$core$IIndexed$_nth$arity$2(null,i__42772_42982);
var map__42776_42984__$1 = cljs.core.__destructure_map(map__42776_42983);
var task_42985 = map__42776_42984__$1;
var fn_str_42986 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42776_42984__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_42987 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42776_42984__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_42988 = goog.getObjectByName(fn_str_42986,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_42987)].join(''));

(fn_obj_42988.cljs$core$IFn$_invoke$arity$2 ? fn_obj_42988.cljs$core$IFn$_invoke$arity$2(path,new_link_42978) : fn_obj_42988.call(null,path,new_link_42978));


var G__42989 = seq__42768_42979;
var G__42990 = chunk__42770_42980;
var G__42991 = count__42771_42981;
var G__42992 = (i__42772_42982 + (1));
seq__42768_42979 = G__42989;
chunk__42770_42980 = G__42990;
count__42771_42981 = G__42991;
i__42772_42982 = G__42992;
continue;
} else {
var temp__5804__auto___42993__$1 = cljs.core.seq(seq__42768_42979);
if(temp__5804__auto___42993__$1){
var seq__42768_42994__$1 = temp__5804__auto___42993__$1;
if(cljs.core.chunked_seq_QMARK_(seq__42768_42994__$1)){
var c__5565__auto___42995 = cljs.core.chunk_first(seq__42768_42994__$1);
var G__42996 = cljs.core.chunk_rest(seq__42768_42994__$1);
var G__42997 = c__5565__auto___42995;
var G__42998 = cljs.core.count(c__5565__auto___42995);
var G__42999 = (0);
seq__42768_42979 = G__42996;
chunk__42770_42980 = G__42997;
count__42771_42981 = G__42998;
i__42772_42982 = G__42999;
continue;
} else {
var map__42777_43000 = cljs.core.first(seq__42768_42994__$1);
var map__42777_43001__$1 = cljs.core.__destructure_map(map__42777_43000);
var task_43002 = map__42777_43001__$1;
var fn_str_43003 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42777_43001__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_43004 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42777_43001__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_43005 = goog.getObjectByName(fn_str_43003,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_43004)].join(''));

(fn_obj_43005.cljs$core$IFn$_invoke$arity$2 ? fn_obj_43005.cljs$core$IFn$_invoke$arity$2(path,new_link_42978) : fn_obj_43005.call(null,path,new_link_42978));


var G__43006 = cljs.core.next(seq__42768_42994__$1);
var G__43007 = null;
var G__43008 = (0);
var G__43009 = (0);
seq__42768_42979 = G__43006;
chunk__42770_42980 = G__43007;
count__42771_42981 = G__43008;
i__42772_42982 = G__43009;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_42976);
});})(seq__42724_42919,chunk__42728_42920,count__42729_42921,i__42730_42922,seq__42544,chunk__42546,count__42547,i__42548,new_link_42978,path_match_42977,node_42976,seq__42724_42970__$1,temp__5804__auto___42969,path,map__42543,map__42543__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_42977], 0));

goog.dom.insertSiblingAfter(new_link_42978,node_42976);


var G__43010 = cljs.core.next(seq__42724_42970__$1);
var G__43011 = null;
var G__43012 = (0);
var G__43013 = (0);
seq__42724_42919 = G__43010;
chunk__42728_42920 = G__43011;
count__42729_42921 = G__43012;
i__42730_42922 = G__43013;
continue;
} else {
var G__43014 = cljs.core.next(seq__42724_42970__$1);
var G__43015 = null;
var G__43016 = (0);
var G__43017 = (0);
seq__42724_42919 = G__43014;
chunk__42728_42920 = G__43015;
count__42729_42921 = G__43016;
i__42730_42922 = G__43017;
continue;
}
} else {
var G__43018 = cljs.core.next(seq__42724_42970__$1);
var G__43019 = null;
var G__43020 = (0);
var G__43021 = (0);
seq__42724_42919 = G__43018;
chunk__42728_42920 = G__43019;
count__42729_42921 = G__43020;
i__42730_42922 = G__43021;
continue;
}
}
} else {
}
}
break;
}


var G__43022 = seq__42544;
var G__43023 = chunk__42546;
var G__43024 = count__42547;
var G__43025 = (i__42548 + (1));
seq__42544 = G__43022;
chunk__42546 = G__43023;
count__42547 = G__43024;
i__42548 = G__43025;
continue;
} else {
var G__43026 = seq__42544;
var G__43027 = chunk__42546;
var G__43028 = count__42547;
var G__43029 = (i__42548 + (1));
seq__42544 = G__43026;
chunk__42546 = G__43027;
count__42547 = G__43028;
i__42548 = G__43029;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__42544);
if(temp__5804__auto__){
var seq__42544__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__42544__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__42544__$1);
var G__43030 = cljs.core.chunk_rest(seq__42544__$1);
var G__43031 = c__5565__auto__;
var G__43032 = cljs.core.count(c__5565__auto__);
var G__43033 = (0);
seq__42544 = G__43030;
chunk__42546 = G__43031;
count__42547 = G__43032;
i__42548 = G__43033;
continue;
} else {
var path = cljs.core.first(seq__42544__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__42778_43034 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__42782_43035 = null;
var count__42783_43036 = (0);
var i__42784_43037 = (0);
while(true){
if((i__42784_43037 < count__42783_43036)){
var node_43038 = chunk__42782_43035.cljs$core$IIndexed$_nth$arity$2(null,i__42784_43037);
if(cljs.core.not(node_43038.shadow$old)){
var path_match_43039 = shadow.cljs.devtools.client.browser.match_paths(node_43038.getAttribute("href"),path);
if(cljs.core.truth_(path_match_43039)){
var new_link_43040 = (function (){var G__42810 = node_43038.cloneNode(true);
G__42810.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_43039),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__42810;
})();
(node_43038.shadow$old = true);

(new_link_43040.onload = ((function (seq__42778_43034,chunk__42782_43035,count__42783_43036,i__42784_43037,seq__42544,chunk__42546,count__42547,i__42548,new_link_43040,path_match_43039,node_43038,path,seq__42544__$1,temp__5804__auto__,map__42543,map__42543__$1,msg,updates,reload_info){
return (function (e){
var seq__42811_43041 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__42813_43042 = null;
var count__42814_43043 = (0);
var i__42815_43044 = (0);
while(true){
if((i__42815_43044 < count__42814_43043)){
var map__42819_43045 = chunk__42813_43042.cljs$core$IIndexed$_nth$arity$2(null,i__42815_43044);
var map__42819_43046__$1 = cljs.core.__destructure_map(map__42819_43045);
var task_43047 = map__42819_43046__$1;
var fn_str_43048 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42819_43046__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_43049 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42819_43046__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_43050 = goog.getObjectByName(fn_str_43048,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_43049)].join(''));

(fn_obj_43050.cljs$core$IFn$_invoke$arity$2 ? fn_obj_43050.cljs$core$IFn$_invoke$arity$2(path,new_link_43040) : fn_obj_43050.call(null,path,new_link_43040));


var G__43051 = seq__42811_43041;
var G__43052 = chunk__42813_43042;
var G__43053 = count__42814_43043;
var G__43054 = (i__42815_43044 + (1));
seq__42811_43041 = G__43051;
chunk__42813_43042 = G__43052;
count__42814_43043 = G__43053;
i__42815_43044 = G__43054;
continue;
} else {
var temp__5804__auto___43055__$1 = cljs.core.seq(seq__42811_43041);
if(temp__5804__auto___43055__$1){
var seq__42811_43056__$1 = temp__5804__auto___43055__$1;
if(cljs.core.chunked_seq_QMARK_(seq__42811_43056__$1)){
var c__5565__auto___43057 = cljs.core.chunk_first(seq__42811_43056__$1);
var G__43058 = cljs.core.chunk_rest(seq__42811_43056__$1);
var G__43059 = c__5565__auto___43057;
var G__43060 = cljs.core.count(c__5565__auto___43057);
var G__43061 = (0);
seq__42811_43041 = G__43058;
chunk__42813_43042 = G__43059;
count__42814_43043 = G__43060;
i__42815_43044 = G__43061;
continue;
} else {
var map__42820_43062 = cljs.core.first(seq__42811_43056__$1);
var map__42820_43063__$1 = cljs.core.__destructure_map(map__42820_43062);
var task_43064 = map__42820_43063__$1;
var fn_str_43065 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42820_43063__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_43066 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42820_43063__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_43067 = goog.getObjectByName(fn_str_43065,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_43066)].join(''));

(fn_obj_43067.cljs$core$IFn$_invoke$arity$2 ? fn_obj_43067.cljs$core$IFn$_invoke$arity$2(path,new_link_43040) : fn_obj_43067.call(null,path,new_link_43040));


var G__43068 = cljs.core.next(seq__42811_43056__$1);
var G__43069 = null;
var G__43070 = (0);
var G__43071 = (0);
seq__42811_43041 = G__43068;
chunk__42813_43042 = G__43069;
count__42814_43043 = G__43070;
i__42815_43044 = G__43071;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_43038);
});})(seq__42778_43034,chunk__42782_43035,count__42783_43036,i__42784_43037,seq__42544,chunk__42546,count__42547,i__42548,new_link_43040,path_match_43039,node_43038,path,seq__42544__$1,temp__5804__auto__,map__42543,map__42543__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_43039], 0));

goog.dom.insertSiblingAfter(new_link_43040,node_43038);


var G__43072 = seq__42778_43034;
var G__43073 = chunk__42782_43035;
var G__43074 = count__42783_43036;
var G__43075 = (i__42784_43037 + (1));
seq__42778_43034 = G__43072;
chunk__42782_43035 = G__43073;
count__42783_43036 = G__43074;
i__42784_43037 = G__43075;
continue;
} else {
var G__43076 = seq__42778_43034;
var G__43077 = chunk__42782_43035;
var G__43078 = count__42783_43036;
var G__43079 = (i__42784_43037 + (1));
seq__42778_43034 = G__43076;
chunk__42782_43035 = G__43077;
count__42783_43036 = G__43078;
i__42784_43037 = G__43079;
continue;
}
} else {
var G__43080 = seq__42778_43034;
var G__43081 = chunk__42782_43035;
var G__43082 = count__42783_43036;
var G__43083 = (i__42784_43037 + (1));
seq__42778_43034 = G__43080;
chunk__42782_43035 = G__43081;
count__42783_43036 = G__43082;
i__42784_43037 = G__43083;
continue;
}
} else {
var temp__5804__auto___43084__$1 = cljs.core.seq(seq__42778_43034);
if(temp__5804__auto___43084__$1){
var seq__42778_43085__$1 = temp__5804__auto___43084__$1;
if(cljs.core.chunked_seq_QMARK_(seq__42778_43085__$1)){
var c__5565__auto___43086 = cljs.core.chunk_first(seq__42778_43085__$1);
var G__43087 = cljs.core.chunk_rest(seq__42778_43085__$1);
var G__43088 = c__5565__auto___43086;
var G__43089 = cljs.core.count(c__5565__auto___43086);
var G__43090 = (0);
seq__42778_43034 = G__43087;
chunk__42782_43035 = G__43088;
count__42783_43036 = G__43089;
i__42784_43037 = G__43090;
continue;
} else {
var node_43091 = cljs.core.first(seq__42778_43085__$1);
if(cljs.core.not(node_43091.shadow$old)){
var path_match_43092 = shadow.cljs.devtools.client.browser.match_paths(node_43091.getAttribute("href"),path);
if(cljs.core.truth_(path_match_43092)){
var new_link_43093 = (function (){var G__42821 = node_43091.cloneNode(true);
G__42821.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_43092),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__42821;
})();
(node_43091.shadow$old = true);

(new_link_43093.onload = ((function (seq__42778_43034,chunk__42782_43035,count__42783_43036,i__42784_43037,seq__42544,chunk__42546,count__42547,i__42548,new_link_43093,path_match_43092,node_43091,seq__42778_43085__$1,temp__5804__auto___43084__$1,path,seq__42544__$1,temp__5804__auto__,map__42543,map__42543__$1,msg,updates,reload_info){
return (function (e){
var seq__42822_43094 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__42824_43095 = null;
var count__42825_43096 = (0);
var i__42826_43097 = (0);
while(true){
if((i__42826_43097 < count__42825_43096)){
var map__42830_43098 = chunk__42824_43095.cljs$core$IIndexed$_nth$arity$2(null,i__42826_43097);
var map__42830_43099__$1 = cljs.core.__destructure_map(map__42830_43098);
var task_43100 = map__42830_43099__$1;
var fn_str_43101 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42830_43099__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_43102 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42830_43099__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_43103 = goog.getObjectByName(fn_str_43101,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_43102)].join(''));

(fn_obj_43103.cljs$core$IFn$_invoke$arity$2 ? fn_obj_43103.cljs$core$IFn$_invoke$arity$2(path,new_link_43093) : fn_obj_43103.call(null,path,new_link_43093));


var G__43104 = seq__42822_43094;
var G__43105 = chunk__42824_43095;
var G__43106 = count__42825_43096;
var G__43107 = (i__42826_43097 + (1));
seq__42822_43094 = G__43104;
chunk__42824_43095 = G__43105;
count__42825_43096 = G__43106;
i__42826_43097 = G__43107;
continue;
} else {
var temp__5804__auto___43108__$2 = cljs.core.seq(seq__42822_43094);
if(temp__5804__auto___43108__$2){
var seq__42822_43109__$1 = temp__5804__auto___43108__$2;
if(cljs.core.chunked_seq_QMARK_(seq__42822_43109__$1)){
var c__5565__auto___43110 = cljs.core.chunk_first(seq__42822_43109__$1);
var G__43111 = cljs.core.chunk_rest(seq__42822_43109__$1);
var G__43112 = c__5565__auto___43110;
var G__43113 = cljs.core.count(c__5565__auto___43110);
var G__43114 = (0);
seq__42822_43094 = G__43111;
chunk__42824_43095 = G__43112;
count__42825_43096 = G__43113;
i__42826_43097 = G__43114;
continue;
} else {
var map__42831_43115 = cljs.core.first(seq__42822_43109__$1);
var map__42831_43116__$1 = cljs.core.__destructure_map(map__42831_43115);
var task_43117 = map__42831_43116__$1;
var fn_str_43118 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42831_43116__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_43119 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42831_43116__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_43120 = goog.getObjectByName(fn_str_43118,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_43119)].join(''));

(fn_obj_43120.cljs$core$IFn$_invoke$arity$2 ? fn_obj_43120.cljs$core$IFn$_invoke$arity$2(path,new_link_43093) : fn_obj_43120.call(null,path,new_link_43093));


var G__43121 = cljs.core.next(seq__42822_43109__$1);
var G__43122 = null;
var G__43123 = (0);
var G__43124 = (0);
seq__42822_43094 = G__43121;
chunk__42824_43095 = G__43122;
count__42825_43096 = G__43123;
i__42826_43097 = G__43124;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_43091);
});})(seq__42778_43034,chunk__42782_43035,count__42783_43036,i__42784_43037,seq__42544,chunk__42546,count__42547,i__42548,new_link_43093,path_match_43092,node_43091,seq__42778_43085__$1,temp__5804__auto___43084__$1,path,seq__42544__$1,temp__5804__auto__,map__42543,map__42543__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_43092], 0));

goog.dom.insertSiblingAfter(new_link_43093,node_43091);


var G__43125 = cljs.core.next(seq__42778_43085__$1);
var G__43126 = null;
var G__43127 = (0);
var G__43128 = (0);
seq__42778_43034 = G__43125;
chunk__42782_43035 = G__43126;
count__42783_43036 = G__43127;
i__42784_43037 = G__43128;
continue;
} else {
var G__43129 = cljs.core.next(seq__42778_43085__$1);
var G__43130 = null;
var G__43131 = (0);
var G__43132 = (0);
seq__42778_43034 = G__43129;
chunk__42782_43035 = G__43130;
count__42783_43036 = G__43131;
i__42784_43037 = G__43132;
continue;
}
} else {
var G__43133 = cljs.core.next(seq__42778_43085__$1);
var G__43134 = null;
var G__43135 = (0);
var G__43136 = (0);
seq__42778_43034 = G__43133;
chunk__42782_43035 = G__43134;
count__42783_43036 = G__43135;
i__42784_43037 = G__43136;
continue;
}
}
} else {
}
}
break;
}


var G__43137 = cljs.core.next(seq__42544__$1);
var G__43138 = null;
var G__43139 = (0);
var G__43140 = (0);
seq__42544 = G__43137;
chunk__42546 = G__43138;
count__42547 = G__43139;
i__42548 = G__43140;
continue;
} else {
var G__43141 = cljs.core.next(seq__42544__$1);
var G__43142 = null;
var G__43143 = (0);
var G__43144 = (0);
seq__42544 = G__43141;
chunk__42546 = G__43142;
count__42547 = G__43143;
i__42548 = G__43144;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__42832){
var map__42833 = p__42832;
var map__42833__$1 = cljs.core.__destructure_map(map__42833);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42833__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__42834){
var map__42835 = p__42834;
var map__42835__$1 = cljs.core.__destructure_map(map__42835);
var _ = map__42835__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42835__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__42836,done,error){
var map__42837 = p__42836;
var map__42837__$1 = cljs.core.__destructure_map(map__42837);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42837__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__42838,done,error){
var map__42839 = p__42838;
var map__42839__$1 = cljs.core.__destructure_map(map__42839);
var msg = map__42839__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42839__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42839__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42839__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__42840){
var map__42841 = p__42840;
var map__42841__$1 = cljs.core.__destructure_map(map__42841);
var src = map__42841__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42841__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5041__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5041__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__42842 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__42842) : done.call(null,G__42842));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__42843){
var map__42844 = p__42843;
var map__42844__$1 = cljs.core.__destructure_map(map__42844);
var msg__$1 = map__42844__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42844__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e42845){var ex = e42845;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__42846){
var map__42847 = p__42846;
var map__42847__$1 = cljs.core.__destructure_map(map__42847);
var env = map__42847__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42847__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__42848){
var map__42849 = p__42848;
var map__42849__$1 = cljs.core.__destructure_map(map__42849);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42849__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42849__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__42850){
var map__42851 = p__42850;
var map__42851__$1 = cljs.core.__destructure_map(map__42851);
var svc = map__42851__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42851__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map

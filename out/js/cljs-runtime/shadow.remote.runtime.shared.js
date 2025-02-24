goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
return shadow.remote.runtime.api.relay_msg(runtime,msg);
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__37434,res){
var map__37435 = p__37434;
var map__37435__$1 = cljs.core.__destructure_map(map__37435);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37435__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37435__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__37436 = res;
var G__37436__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37436,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__37436);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37436__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__37436__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__37438 = arguments.length;
switch (G__37438) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__37446,msg,handlers,timeout_after_ms){
var map__37447 = p__37446;
var map__37447__$1 = cljs.core.__destructure_map(map__37447);
var runtime = map__37447__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37447__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__5772__auto__ = [];
var len__5766__auto___37826 = arguments.length;
var i__5767__auto___37827 = (0);
while(true){
if((i__5767__auto___37827 < len__5766__auto___37826)){
args__5772__auto__.push((arguments[i__5767__auto___37827]));

var G__37828 = (i__5767__auto___37827 + (1));
i__5767__auto___37827 = G__37828;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((2) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5773__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__37531,ev,args){
var map__37536 = p__37531;
var map__37536__$1 = cljs.core.__destructure_map(map__37536);
var runtime = map__37536__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37536__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__37543 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__37547 = null;
var count__37548 = (0);
var i__37549 = (0);
while(true){
if((i__37549 < count__37548)){
var ext = chunk__37547.cljs$core$IIndexed$_nth$arity$2(null,i__37549);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__37832 = seq__37543;
var G__37833 = chunk__37547;
var G__37834 = count__37548;
var G__37835 = (i__37549 + (1));
seq__37543 = G__37832;
chunk__37547 = G__37833;
count__37548 = G__37834;
i__37549 = G__37835;
continue;
} else {
var G__37836 = seq__37543;
var G__37837 = chunk__37547;
var G__37838 = count__37548;
var G__37839 = (i__37549 + (1));
seq__37543 = G__37836;
chunk__37547 = G__37837;
count__37548 = G__37838;
i__37549 = G__37839;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__37543);
if(temp__5804__auto__){
var seq__37543__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37543__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__37543__$1);
var G__37841 = cljs.core.chunk_rest(seq__37543__$1);
var G__37842 = c__5565__auto__;
var G__37843 = cljs.core.count(c__5565__auto__);
var G__37844 = (0);
seq__37543 = G__37841;
chunk__37547 = G__37842;
count__37548 = G__37843;
i__37549 = G__37844;
continue;
} else {
var ext = cljs.core.first(seq__37543__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__37845 = cljs.core.next(seq__37543__$1);
var G__37846 = null;
var G__37847 = (0);
var G__37848 = (0);
seq__37543 = G__37845;
chunk__37547 = G__37846;
count__37548 = G__37847;
i__37549 = G__37848;
continue;
} else {
var G__37850 = cljs.core.next(seq__37543__$1);
var G__37851 = null;
var G__37852 = (0);
var G__37853 = (0);
seq__37543 = G__37850;
chunk__37547 = G__37851;
count__37548 = G__37852;
i__37549 = G__37853;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq37448){
var G__37449 = cljs.core.first(seq37448);
var seq37448__$1 = cljs.core.next(seq37448);
var G__37450 = cljs.core.first(seq37448__$1);
var seq37448__$2 = cljs.core.next(seq37448__$1);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37449,G__37450,seq37448__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__37621,p__37622){
var map__37626 = p__37621;
var map__37626__$1 = cljs.core.__destructure_map(map__37626);
var runtime = map__37626__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37626__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__37627 = p__37622;
var map__37627__$1 = cljs.core.__destructure_map(map__37627);
var msg = map__37627__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37627__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__37628 = cljs.core.deref(state_ref);
var map__37628__$1 = cljs.core.__destructure_map(map__37628);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37628__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37628__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__37634){
var map__37636 = p__37634;
var map__37636__$1 = cljs.core.__destructure_map(map__37636);
var runtime = map__37636__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37636__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__5043__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__37646,msg){
var map__37647 = p__37646;
var map__37647__$1 = cljs.core.__destructure_map(map__37647);
var runtime = map__37647__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37647__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__37652,key,p__37653){
var map__37654 = p__37652;
var map__37654__$1 = cljs.core.__destructure_map(map__37654);
var state = map__37654__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37654__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__37655 = p__37653;
var map__37655__$1 = cljs.core.__destructure_map(map__37655);
var spec = map__37655__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37655__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__37668,key,spec){
var map__37669 = p__37668;
var map__37669__$1 = cljs.core.__destructure_map(map__37669);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37669__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__37672_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__37672_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__37673_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__37673_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__37674_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__37674_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__37676_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__37676_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__37678_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__37678_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__37690,key){
var map__37691 = p__37690;
var map__37691__$1 = cljs.core.__destructure_map(map__37691);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37691__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__37697,msg){
var map__37698 = p__37697;
var map__37698__$1 = cljs.core.__destructure_map(map__37698);
var runtime = map__37698__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37698__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__37710,p__37711){
var map__37713 = p__37710;
var map__37713__$1 = cljs.core.__destructure_map(map__37713);
var runtime = map__37713__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37713__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__37714 = p__37711;
var map__37714__$1 = cljs.core.__destructure_map(map__37714);
var msg = map__37714__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37714__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37714__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__37721 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__37723 = null;
var count__37724 = (0);
var i__37725 = (0);
while(true){
if((i__37725 < count__37724)){
var map__37770 = chunk__37723.cljs$core$IIndexed$_nth$arity$2(null,i__37725);
var map__37770__$1 = cljs.core.__destructure_map(map__37770);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37770__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__37865 = seq__37721;
var G__37866 = chunk__37723;
var G__37867 = count__37724;
var G__37868 = (i__37725 + (1));
seq__37721 = G__37865;
chunk__37723 = G__37866;
count__37724 = G__37867;
i__37725 = G__37868;
continue;
} else {
var G__37869 = seq__37721;
var G__37870 = chunk__37723;
var G__37871 = count__37724;
var G__37872 = (i__37725 + (1));
seq__37721 = G__37869;
chunk__37723 = G__37870;
count__37724 = G__37871;
i__37725 = G__37872;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__37721);
if(temp__5804__auto__){
var seq__37721__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37721__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__37721__$1);
var G__37874 = cljs.core.chunk_rest(seq__37721__$1);
var G__37875 = c__5565__auto__;
var G__37876 = cljs.core.count(c__5565__auto__);
var G__37877 = (0);
seq__37721 = G__37874;
chunk__37723 = G__37875;
count__37724 = G__37876;
i__37725 = G__37877;
continue;
} else {
var map__37795 = cljs.core.first(seq__37721__$1);
var map__37795__$1 = cljs.core.__destructure_map(map__37795);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37795__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__37878 = cljs.core.next(seq__37721__$1);
var G__37879 = null;
var G__37880 = (0);
var G__37881 = (0);
seq__37721 = G__37878;
chunk__37723 = G__37879;
count__37724 = G__37880;
i__37725 = G__37881;
continue;
} else {
var G__37882 = cljs.core.next(seq__37721__$1);
var G__37883 = null;
var G__37884 = (0);
var G__37885 = (0);
seq__37721 = G__37882;
chunk__37723 = G__37883;
count__37724 = G__37884;
i__37725 = G__37885;
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

//# sourceMappingURL=shadow.remote.runtime.shared.js.map

goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__41468,p__41469){
var map__41471 = p__41468;
var map__41471__$1 = cljs.core.__destructure_map(map__41471);
var svc = map__41471__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41471__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41471__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41471__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__41472 = p__41469;
var map__41472__$1 = cljs.core.__destructure_map(map__41472);
var msg = map__41472__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41472__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41472__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41472__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__41472__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history__$1)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__41483,p__41484){
var map__41485 = p__41483;
var map__41485__$1 = cljs.core.__destructure_map(map__41485);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41485__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__41486 = p__41484;
var map__41486__$1 = cljs.core.__destructure_map(map__41486);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41486__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__41492,p__41493){
var map__41494 = p__41492;
var map__41494__$1 = cljs.core.__destructure_map(map__41494);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41494__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41494__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__41495 = p__41493;
var map__41495__$1 = cljs.core.__destructure_map(map__41495);
var msg = map__41495__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__41495__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__41501,tid){
var map__41502 = p__41501;
var map__41502__$1 = cljs.core.__destructure_map(map__41502);
var svc = map__41502__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41502__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__41511 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__41512 = null;
var count__41513 = (0);
var i__41514 = (0);
while(true){
if((i__41514 < count__41513)){
var vec__41521 = chunk__41512.cljs$core$IIndexed$_nth$arity$2(null,i__41514);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41521,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41521,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__41545 = seq__41511;
var G__41546 = chunk__41512;
var G__41547 = count__41513;
var G__41548 = (i__41514 + (1));
seq__41511 = G__41545;
chunk__41512 = G__41546;
count__41513 = G__41547;
i__41514 = G__41548;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__41511);
if(temp__5804__auto__){
var seq__41511__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__41511__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__41511__$1);
var G__41549 = cljs.core.chunk_rest(seq__41511__$1);
var G__41550 = c__5565__auto__;
var G__41551 = cljs.core.count(c__5565__auto__);
var G__41552 = (0);
seq__41511 = G__41549;
chunk__41512 = G__41550;
count__41513 = G__41551;
i__41514 = G__41552;
continue;
} else {
var vec__41530 = cljs.core.first(seq__41511__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41530,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41530,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__41553 = cljs.core.next(seq__41511__$1);
var G__41554 = null;
var G__41555 = (0);
var G__41556 = (0);
seq__41511 = G__41553;
chunk__41512 = G__41554;
count__41513 = G__41555;
i__41514 = G__41556;
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
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__41506_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__41506_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__41507_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__41507_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__41508_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__41508_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__41509_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__41509_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__41535){
var map__41536 = p__41535;
var map__41536__$1 = cljs.core.__destructure_map(map__41536);
var svc = map__41536__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41536__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41536__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map

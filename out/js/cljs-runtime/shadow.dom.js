goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_40567 = (function (this$){
var x__5390__auto__ = (((this$ == null))?null:this$);
var m__5391__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5391__auto__.call(null,this$));
} else {
var m__5389__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5389__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_40567(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_40570 = (function (this$){
var x__5390__auto__ = (((this$ == null))?null:this$);
var m__5391__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5391__auto__.call(null,this$));
} else {
var m__5389__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5389__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_40570(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__39627 = coll;
var G__39628 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__39627,G__39628) : shadow.dom.lazy_native_coll_seq.call(null,G__39627,G__39628));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__5043__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__39668 = arguments.length;
switch (G__39668) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__39672 = arguments.length;
switch (G__39672) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__39684 = arguments.length;
switch (G__39684) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__39689 = arguments.length;
switch (G__39689) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__39744 = arguments.length;
switch (G__39744) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__39783 = arguments.length;
switch (G__39783) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__5043__auto__ = (!((typeof document !== 'undefined')));
if(or__5043__auto__){
return or__5043__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e39825){if((e39825 instanceof Object)){
var e = e39825;
return console.log("didnt support attachEvent",el,e);
} else {
throw e39825;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__5043__auto__ = (!((typeof document !== 'undefined')));
if(or__5043__auto__){
return or__5043__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__39834 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__39835 = null;
var count__39836 = (0);
var i__39837 = (0);
while(true){
if((i__39837 < count__39836)){
var el = chunk__39835.cljs$core$IIndexed$_nth$arity$2(null,i__39837);
var handler_40597__$1 = ((function (seq__39834,chunk__39835,count__39836,i__39837,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__39834,chunk__39835,count__39836,i__39837,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_40597__$1);


var G__40598 = seq__39834;
var G__40599 = chunk__39835;
var G__40600 = count__39836;
var G__40601 = (i__39837 + (1));
seq__39834 = G__40598;
chunk__39835 = G__40599;
count__39836 = G__40600;
i__39837 = G__40601;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__39834);
if(temp__5804__auto__){
var seq__39834__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__39834__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__39834__$1);
var G__40602 = cljs.core.chunk_rest(seq__39834__$1);
var G__40603 = c__5565__auto__;
var G__40604 = cljs.core.count(c__5565__auto__);
var G__40605 = (0);
seq__39834 = G__40602;
chunk__39835 = G__40603;
count__39836 = G__40604;
i__39837 = G__40605;
continue;
} else {
var el = cljs.core.first(seq__39834__$1);
var handler_40607__$1 = ((function (seq__39834,chunk__39835,count__39836,i__39837,el,seq__39834__$1,temp__5804__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__39834,chunk__39835,count__39836,i__39837,el,seq__39834__$1,temp__5804__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_40607__$1);


var G__40608 = cljs.core.next(seq__39834__$1);
var G__40609 = null;
var G__40610 = (0);
var G__40611 = (0);
seq__39834 = G__40608;
chunk__39835 = G__40609;
count__39836 = G__40610;
i__39837 = G__40611;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__39848 = arguments.length;
switch (G__39848) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__39849 = cljs.core.seq(events);
var chunk__39850 = null;
var count__39851 = (0);
var i__39852 = (0);
while(true){
if((i__39852 < count__39851)){
var vec__39859 = chunk__39850.cljs$core$IIndexed$_nth$arity$2(null,i__39852);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39859,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39859,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__40622 = seq__39849;
var G__40623 = chunk__39850;
var G__40624 = count__39851;
var G__40625 = (i__39852 + (1));
seq__39849 = G__40622;
chunk__39850 = G__40623;
count__39851 = G__40624;
i__39852 = G__40625;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__39849);
if(temp__5804__auto__){
var seq__39849__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__39849__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__39849__$1);
var G__40626 = cljs.core.chunk_rest(seq__39849__$1);
var G__40627 = c__5565__auto__;
var G__40628 = cljs.core.count(c__5565__auto__);
var G__40629 = (0);
seq__39849 = G__40626;
chunk__39850 = G__40627;
count__39851 = G__40628;
i__39852 = G__40629;
continue;
} else {
var vec__39862 = cljs.core.first(seq__39849__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39862,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39862,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__40630 = cljs.core.next(seq__39849__$1);
var G__40631 = null;
var G__40632 = (0);
var G__40633 = (0);
seq__39849 = G__40630;
chunk__39850 = G__40631;
count__39851 = G__40632;
i__39852 = G__40633;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__39865 = cljs.core.seq(styles);
var chunk__39866 = null;
var count__39867 = (0);
var i__39868 = (0);
while(true){
if((i__39868 < count__39867)){
var vec__39875 = chunk__39866.cljs$core$IIndexed$_nth$arity$2(null,i__39868);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39875,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39875,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__40639 = seq__39865;
var G__40640 = chunk__39866;
var G__40641 = count__39867;
var G__40642 = (i__39868 + (1));
seq__39865 = G__40639;
chunk__39866 = G__40640;
count__39867 = G__40641;
i__39868 = G__40642;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__39865);
if(temp__5804__auto__){
var seq__39865__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__39865__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__39865__$1);
var G__40643 = cljs.core.chunk_rest(seq__39865__$1);
var G__40644 = c__5565__auto__;
var G__40645 = cljs.core.count(c__5565__auto__);
var G__40646 = (0);
seq__39865 = G__40643;
chunk__39866 = G__40644;
count__39867 = G__40645;
i__39868 = G__40646;
continue;
} else {
var vec__39878 = cljs.core.first(seq__39865__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39878,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39878,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__40647 = cljs.core.next(seq__39865__$1);
var G__40648 = null;
var G__40649 = (0);
var G__40650 = (0);
seq__39865 = G__40647;
chunk__39866 = G__40648;
count__39867 = G__40649;
i__39868 = G__40650;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__39892_40655 = key;
var G__39892_40656__$1 = (((G__39892_40655 instanceof cljs.core.Keyword))?G__39892_40655.fqn:null);
switch (G__39892_40656__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_40658 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5043__auto__ = goog.string.startsWith(ks_40658,"data-");
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return goog.string.startsWith(ks_40658,"aria-");
}
})())){
el.setAttribute(ks_40658,value);
} else {
(el[ks_40658] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__39947){
var map__39951 = p__39947;
var map__39951__$1 = cljs.core.__destructure_map(map__39951);
var props = map__39951__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39951__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__39956 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39956,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39956,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39956,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__39962 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__39962,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__39962;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__39969 = arguments.length;
switch (G__39969) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__40015){
var vec__40017 = p__40015;
var seq__40018 = cljs.core.seq(vec__40017);
var first__40019 = cljs.core.first(seq__40018);
var seq__40018__$1 = cljs.core.next(seq__40018);
var nn = first__40019;
var first__40019__$1 = cljs.core.first(seq__40018__$1);
var seq__40018__$2 = cljs.core.next(seq__40018__$1);
var np = first__40019__$1;
var nc = seq__40018__$2;
var node = vec__40017;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__40027 = nn;
var G__40028 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__40027,G__40028) : create_fn.call(null,G__40027,G__40028));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__40029 = nn;
var G__40030 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__40029,G__40030) : create_fn.call(null,G__40029,G__40030));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__40035 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40035,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40035,(1),null);
var seq__40038_40724 = cljs.core.seq(node_children);
var chunk__40039_40725 = null;
var count__40040_40726 = (0);
var i__40041_40727 = (0);
while(true){
if((i__40041_40727 < count__40040_40726)){
var child_struct_40728 = chunk__40039_40725.cljs$core$IIndexed$_nth$arity$2(null,i__40041_40727);
var children_40729 = shadow.dom.dom_node(child_struct_40728);
if(cljs.core.seq_QMARK_(children_40729)){
var seq__40079_40730 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_40729));
var chunk__40081_40731 = null;
var count__40082_40732 = (0);
var i__40083_40733 = (0);
while(true){
if((i__40083_40733 < count__40082_40732)){
var child_40734 = chunk__40081_40731.cljs$core$IIndexed$_nth$arity$2(null,i__40083_40733);
if(cljs.core.truth_(child_40734)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_40734);


var G__40735 = seq__40079_40730;
var G__40736 = chunk__40081_40731;
var G__40737 = count__40082_40732;
var G__40738 = (i__40083_40733 + (1));
seq__40079_40730 = G__40735;
chunk__40081_40731 = G__40736;
count__40082_40732 = G__40737;
i__40083_40733 = G__40738;
continue;
} else {
var G__40746 = seq__40079_40730;
var G__40747 = chunk__40081_40731;
var G__40748 = count__40082_40732;
var G__40749 = (i__40083_40733 + (1));
seq__40079_40730 = G__40746;
chunk__40081_40731 = G__40747;
count__40082_40732 = G__40748;
i__40083_40733 = G__40749;
continue;
}
} else {
var temp__5804__auto___40750 = cljs.core.seq(seq__40079_40730);
if(temp__5804__auto___40750){
var seq__40079_40751__$1 = temp__5804__auto___40750;
if(cljs.core.chunked_seq_QMARK_(seq__40079_40751__$1)){
var c__5565__auto___40752 = cljs.core.chunk_first(seq__40079_40751__$1);
var G__40753 = cljs.core.chunk_rest(seq__40079_40751__$1);
var G__40754 = c__5565__auto___40752;
var G__40755 = cljs.core.count(c__5565__auto___40752);
var G__40756 = (0);
seq__40079_40730 = G__40753;
chunk__40081_40731 = G__40754;
count__40082_40732 = G__40755;
i__40083_40733 = G__40756;
continue;
} else {
var child_40757 = cljs.core.first(seq__40079_40751__$1);
if(cljs.core.truth_(child_40757)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_40757);


var G__40758 = cljs.core.next(seq__40079_40751__$1);
var G__40759 = null;
var G__40760 = (0);
var G__40761 = (0);
seq__40079_40730 = G__40758;
chunk__40081_40731 = G__40759;
count__40082_40732 = G__40760;
i__40083_40733 = G__40761;
continue;
} else {
var G__40762 = cljs.core.next(seq__40079_40751__$1);
var G__40763 = null;
var G__40764 = (0);
var G__40765 = (0);
seq__40079_40730 = G__40762;
chunk__40081_40731 = G__40763;
count__40082_40732 = G__40764;
i__40083_40733 = G__40765;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_40729);
}


var G__40771 = seq__40038_40724;
var G__40772 = chunk__40039_40725;
var G__40773 = count__40040_40726;
var G__40774 = (i__40041_40727 + (1));
seq__40038_40724 = G__40771;
chunk__40039_40725 = G__40772;
count__40040_40726 = G__40773;
i__40041_40727 = G__40774;
continue;
} else {
var temp__5804__auto___40776 = cljs.core.seq(seq__40038_40724);
if(temp__5804__auto___40776){
var seq__40038_40782__$1 = temp__5804__auto___40776;
if(cljs.core.chunked_seq_QMARK_(seq__40038_40782__$1)){
var c__5565__auto___40783 = cljs.core.chunk_first(seq__40038_40782__$1);
var G__40787 = cljs.core.chunk_rest(seq__40038_40782__$1);
var G__40788 = c__5565__auto___40783;
var G__40789 = cljs.core.count(c__5565__auto___40783);
var G__40790 = (0);
seq__40038_40724 = G__40787;
chunk__40039_40725 = G__40788;
count__40040_40726 = G__40789;
i__40041_40727 = G__40790;
continue;
} else {
var child_struct_40791 = cljs.core.first(seq__40038_40782__$1);
var children_40792 = shadow.dom.dom_node(child_struct_40791);
if(cljs.core.seq_QMARK_(children_40792)){
var seq__40120_40793 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_40792));
var chunk__40122_40794 = null;
var count__40123_40795 = (0);
var i__40124_40796 = (0);
while(true){
if((i__40124_40796 < count__40123_40795)){
var child_40801 = chunk__40122_40794.cljs$core$IIndexed$_nth$arity$2(null,i__40124_40796);
if(cljs.core.truth_(child_40801)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_40801);


var G__40806 = seq__40120_40793;
var G__40807 = chunk__40122_40794;
var G__40808 = count__40123_40795;
var G__40809 = (i__40124_40796 + (1));
seq__40120_40793 = G__40806;
chunk__40122_40794 = G__40807;
count__40123_40795 = G__40808;
i__40124_40796 = G__40809;
continue;
} else {
var G__40810 = seq__40120_40793;
var G__40811 = chunk__40122_40794;
var G__40812 = count__40123_40795;
var G__40813 = (i__40124_40796 + (1));
seq__40120_40793 = G__40810;
chunk__40122_40794 = G__40811;
count__40123_40795 = G__40812;
i__40124_40796 = G__40813;
continue;
}
} else {
var temp__5804__auto___40814__$1 = cljs.core.seq(seq__40120_40793);
if(temp__5804__auto___40814__$1){
var seq__40120_40815__$1 = temp__5804__auto___40814__$1;
if(cljs.core.chunked_seq_QMARK_(seq__40120_40815__$1)){
var c__5565__auto___40816 = cljs.core.chunk_first(seq__40120_40815__$1);
var G__40817 = cljs.core.chunk_rest(seq__40120_40815__$1);
var G__40818 = c__5565__auto___40816;
var G__40819 = cljs.core.count(c__5565__auto___40816);
var G__40820 = (0);
seq__40120_40793 = G__40817;
chunk__40122_40794 = G__40818;
count__40123_40795 = G__40819;
i__40124_40796 = G__40820;
continue;
} else {
var child_40821 = cljs.core.first(seq__40120_40815__$1);
if(cljs.core.truth_(child_40821)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_40821);


var G__40822 = cljs.core.next(seq__40120_40815__$1);
var G__40823 = null;
var G__40824 = (0);
var G__40825 = (0);
seq__40120_40793 = G__40822;
chunk__40122_40794 = G__40823;
count__40123_40795 = G__40824;
i__40124_40796 = G__40825;
continue;
} else {
var G__40826 = cljs.core.next(seq__40120_40815__$1);
var G__40827 = null;
var G__40828 = (0);
var G__40829 = (0);
seq__40120_40793 = G__40826;
chunk__40122_40794 = G__40827;
count__40123_40795 = G__40828;
i__40124_40796 = G__40829;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_40792);
}


var G__40834 = cljs.core.next(seq__40038_40782__$1);
var G__40835 = null;
var G__40836 = (0);
var G__40837 = (0);
seq__40038_40724 = G__40834;
chunk__40039_40725 = G__40835;
count__40040_40726 = G__40836;
i__40041_40727 = G__40837;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__40175 = cljs.core.seq(node);
var chunk__40176 = null;
var count__40177 = (0);
var i__40178 = (0);
while(true){
if((i__40178 < count__40177)){
var n = chunk__40176.cljs$core$IIndexed$_nth$arity$2(null,i__40178);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__40840 = seq__40175;
var G__40841 = chunk__40176;
var G__40842 = count__40177;
var G__40843 = (i__40178 + (1));
seq__40175 = G__40840;
chunk__40176 = G__40841;
count__40177 = G__40842;
i__40178 = G__40843;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__40175);
if(temp__5804__auto__){
var seq__40175__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__40175__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__40175__$1);
var G__40845 = cljs.core.chunk_rest(seq__40175__$1);
var G__40846 = c__5565__auto__;
var G__40847 = cljs.core.count(c__5565__auto__);
var G__40848 = (0);
seq__40175 = G__40845;
chunk__40176 = G__40846;
count__40177 = G__40847;
i__40178 = G__40848;
continue;
} else {
var n = cljs.core.first(seq__40175__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__40849 = cljs.core.next(seq__40175__$1);
var G__40850 = null;
var G__40851 = (0);
var G__40852 = (0);
seq__40175 = G__40849;
chunk__40176 = G__40850;
count__40177 = G__40851;
i__40178 = G__40852;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__40198 = arguments.length;
switch (G__40198) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__40202 = arguments.length;
switch (G__40202) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__40211 = arguments.length;
switch (G__40211) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__5043__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__5772__auto__ = [];
var len__5766__auto___40862 = arguments.length;
var i__5767__auto___40863 = (0);
while(true){
if((i__5767__auto___40863 < len__5766__auto___40862)){
args__5772__auto__.push((arguments[i__5767__auto___40863]));

var G__40864 = (i__5767__auto___40863 + (1));
i__5767__auto___40863 = G__40864;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__40238_40865 = cljs.core.seq(nodes);
var chunk__40239_40866 = null;
var count__40240_40867 = (0);
var i__40241_40868 = (0);
while(true){
if((i__40241_40868 < count__40240_40867)){
var node_40869 = chunk__40239_40866.cljs$core$IIndexed$_nth$arity$2(null,i__40241_40868);
fragment.appendChild(shadow.dom._to_dom(node_40869));


var G__40870 = seq__40238_40865;
var G__40871 = chunk__40239_40866;
var G__40872 = count__40240_40867;
var G__40873 = (i__40241_40868 + (1));
seq__40238_40865 = G__40870;
chunk__40239_40866 = G__40871;
count__40240_40867 = G__40872;
i__40241_40868 = G__40873;
continue;
} else {
var temp__5804__auto___40874 = cljs.core.seq(seq__40238_40865);
if(temp__5804__auto___40874){
var seq__40238_40875__$1 = temp__5804__auto___40874;
if(cljs.core.chunked_seq_QMARK_(seq__40238_40875__$1)){
var c__5565__auto___40876 = cljs.core.chunk_first(seq__40238_40875__$1);
var G__40877 = cljs.core.chunk_rest(seq__40238_40875__$1);
var G__40878 = c__5565__auto___40876;
var G__40879 = cljs.core.count(c__5565__auto___40876);
var G__40880 = (0);
seq__40238_40865 = G__40877;
chunk__40239_40866 = G__40878;
count__40240_40867 = G__40879;
i__40241_40868 = G__40880;
continue;
} else {
var node_40881 = cljs.core.first(seq__40238_40875__$1);
fragment.appendChild(shadow.dom._to_dom(node_40881));


var G__40882 = cljs.core.next(seq__40238_40875__$1);
var G__40883 = null;
var G__40884 = (0);
var G__40885 = (0);
seq__40238_40865 = G__40882;
chunk__40239_40866 = G__40883;
count__40240_40867 = G__40884;
i__40241_40868 = G__40885;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq40232){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq40232));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__40256_40887 = cljs.core.seq(scripts);
var chunk__40257_40888 = null;
var count__40258_40889 = (0);
var i__40259_40890 = (0);
while(true){
if((i__40259_40890 < count__40258_40889)){
var vec__40280_40891 = chunk__40257_40888.cljs$core$IIndexed$_nth$arity$2(null,i__40259_40890);
var script_tag_40892 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40280_40891,(0),null);
var script_body_40893 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40280_40891,(1),null);
eval(script_body_40893);


var G__40894 = seq__40256_40887;
var G__40895 = chunk__40257_40888;
var G__40896 = count__40258_40889;
var G__40897 = (i__40259_40890 + (1));
seq__40256_40887 = G__40894;
chunk__40257_40888 = G__40895;
count__40258_40889 = G__40896;
i__40259_40890 = G__40897;
continue;
} else {
var temp__5804__auto___40898 = cljs.core.seq(seq__40256_40887);
if(temp__5804__auto___40898){
var seq__40256_40899__$1 = temp__5804__auto___40898;
if(cljs.core.chunked_seq_QMARK_(seq__40256_40899__$1)){
var c__5565__auto___40900 = cljs.core.chunk_first(seq__40256_40899__$1);
var G__40901 = cljs.core.chunk_rest(seq__40256_40899__$1);
var G__40902 = c__5565__auto___40900;
var G__40903 = cljs.core.count(c__5565__auto___40900);
var G__40904 = (0);
seq__40256_40887 = G__40901;
chunk__40257_40888 = G__40902;
count__40258_40889 = G__40903;
i__40259_40890 = G__40904;
continue;
} else {
var vec__40289_40906 = cljs.core.first(seq__40256_40899__$1);
var script_tag_40907 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40289_40906,(0),null);
var script_body_40908 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40289_40906,(1),null);
eval(script_body_40908);


var G__40909 = cljs.core.next(seq__40256_40899__$1);
var G__40910 = null;
var G__40911 = (0);
var G__40912 = (0);
seq__40256_40887 = G__40909;
chunk__40257_40888 = G__40910;
count__40258_40889 = G__40911;
i__40259_40890 = G__40912;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__40293){
var vec__40294 = p__40293;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40294,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40294,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__40311 = arguments.length;
switch (G__40311) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__40332 = cljs.core.seq(style_keys);
var chunk__40333 = null;
var count__40334 = (0);
var i__40335 = (0);
while(true){
if((i__40335 < count__40334)){
var it = chunk__40333.cljs$core$IIndexed$_nth$arity$2(null,i__40335);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__40920 = seq__40332;
var G__40921 = chunk__40333;
var G__40922 = count__40334;
var G__40923 = (i__40335 + (1));
seq__40332 = G__40920;
chunk__40333 = G__40921;
count__40334 = G__40922;
i__40335 = G__40923;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__40332);
if(temp__5804__auto__){
var seq__40332__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__40332__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__40332__$1);
var G__40925 = cljs.core.chunk_rest(seq__40332__$1);
var G__40926 = c__5565__auto__;
var G__40927 = cljs.core.count(c__5565__auto__);
var G__40928 = (0);
seq__40332 = G__40925;
chunk__40333 = G__40926;
count__40334 = G__40927;
i__40335 = G__40928;
continue;
} else {
var it = cljs.core.first(seq__40332__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__40929 = cljs.core.next(seq__40332__$1);
var G__40930 = null;
var G__40931 = (0);
var G__40932 = (0);
seq__40332 = G__40929;
chunk__40333 = G__40930;
count__40334 = G__40931;
i__40335 = G__40932;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5340__auto__,k__5341__auto__){
var self__ = this;
var this__5340__auto____$1 = this;
return this__5340__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5341__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5342__auto__,k40345,else__5343__auto__){
var self__ = this;
var this__5342__auto____$1 = this;
var G__40356 = k40345;
var G__40356__$1 = (((G__40356 instanceof cljs.core.Keyword))?G__40356.fqn:null);
switch (G__40356__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k40345,else__5343__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5360__auto__,f__5361__auto__,init__5362__auto__){
var self__ = this;
var this__5360__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5363__auto__,p__40361){
var vec__40362 = p__40361;
var k__5364__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40362,(0),null);
var v__5365__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40362,(1),null);
return (f__5361__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5361__auto__.cljs$core$IFn$_invoke$arity$3(ret__5363__auto__,k__5364__auto__,v__5365__auto__) : f__5361__auto__.call(null,ret__5363__auto__,k__5364__auto__,v__5365__auto__));
}),init__5362__auto__,this__5360__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5355__auto__,writer__5356__auto__,opts__5357__auto__){
var self__ = this;
var this__5355__auto____$1 = this;
var pr_pair__5358__auto__ = (function (keyval__5359__auto__){
return cljs.core.pr_sequential_writer(writer__5356__auto__,cljs.core.pr_writer,""," ","",opts__5357__auto__,keyval__5359__auto__);
});
return cljs.core.pr_sequential_writer(writer__5356__auto__,pr_pair__5358__auto__,"#shadow.dom.Coordinate{",", ","}",opts__5357__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__40344){
var self__ = this;
var G__40344__$1 = this;
return (new cljs.core.RecordIter((0),G__40344__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5335__auto__){
var self__ = this;
var this__5335__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5344__auto__){
var self__ = this;
var this__5344__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
var h__5152__auto__ = self__.__hash;
if((!((h__5152__auto__ == null)))){
return h__5152__auto__;
} else {
var h__5152__auto____$1 = (function (coll__5337__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__5337__auto__));
})(this__5336__auto____$1);
(self__.__hash = h__5152__auto____$1);

return h__5152__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this40346,other40347){
var self__ = this;
var this40346__$1 = this;
return (((!((other40347 == null)))) && ((((this40346__$1.constructor === other40347.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this40346__$1.x,other40347.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this40346__$1.y,other40347.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this40346__$1.__extmap,other40347.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5350__auto__,k__5351__auto__){
var self__ = this;
var this__5350__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__5351__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5350__auto____$1),self__.__meta),k__5351__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5351__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5347__auto__,k40345){
var self__ = this;
var this__5347__auto____$1 = this;
var G__40385 = k40345;
var G__40385__$1 = (((G__40385 instanceof cljs.core.Keyword))?G__40385.fqn:null);
switch (G__40385__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k40345);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5348__auto__,k__5349__auto__,G__40344){
var self__ = this;
var this__5348__auto____$1 = this;
var pred__40392 = cljs.core.keyword_identical_QMARK_;
var expr__40393 = k__5349__auto__;
if(cljs.core.truth_((pred__40392.cljs$core$IFn$_invoke$arity$2 ? pred__40392.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__40393) : pred__40392.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__40393)))){
return (new shadow.dom.Coordinate(G__40344,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__40392.cljs$core$IFn$_invoke$arity$2 ? pred__40392.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__40393) : pred__40392.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__40393)))){
return (new shadow.dom.Coordinate(self__.x,G__40344,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5349__auto__,G__40344),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5353__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5339__auto__,G__40344){
var self__ = this;
var this__5339__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__40344,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5345__auto__,entry__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5346__auto__)){
return this__5345__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5346__auto__,(0)),cljs.core._nth(entry__5346__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5345__auto____$1,entry__5346__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__5386__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__5386__auto__,writer__5387__auto__){
return cljs.core._write(writer__5387__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__40353){
var extmap__5382__auto__ = (function (){var G__40397 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__40353,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__40353)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__40397);
} else {
return G__40397;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__40353),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__40353),null,cljs.core.not_empty(extmap__5382__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5340__auto__,k__5341__auto__){
var self__ = this;
var this__5340__auto____$1 = this;
return this__5340__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5341__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5342__auto__,k40410,else__5343__auto__){
var self__ = this;
var this__5342__auto____$1 = this;
var G__40420 = k40410;
var G__40420__$1 = (((G__40420 instanceof cljs.core.Keyword))?G__40420.fqn:null);
switch (G__40420__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k40410,else__5343__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5360__auto__,f__5361__auto__,init__5362__auto__){
var self__ = this;
var this__5360__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5363__auto__,p__40421){
var vec__40422 = p__40421;
var k__5364__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40422,(0),null);
var v__5365__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40422,(1),null);
return (f__5361__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5361__auto__.cljs$core$IFn$_invoke$arity$3(ret__5363__auto__,k__5364__auto__,v__5365__auto__) : f__5361__auto__.call(null,ret__5363__auto__,k__5364__auto__,v__5365__auto__));
}),init__5362__auto__,this__5360__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5355__auto__,writer__5356__auto__,opts__5357__auto__){
var self__ = this;
var this__5355__auto____$1 = this;
var pr_pair__5358__auto__ = (function (keyval__5359__auto__){
return cljs.core.pr_sequential_writer(writer__5356__auto__,cljs.core.pr_writer,""," ","",opts__5357__auto__,keyval__5359__auto__);
});
return cljs.core.pr_sequential_writer(writer__5356__auto__,pr_pair__5358__auto__,"#shadow.dom.Size{",", ","}",opts__5357__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__40409){
var self__ = this;
var G__40409__$1 = this;
return (new cljs.core.RecordIter((0),G__40409__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5335__auto__){
var self__ = this;
var this__5335__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5344__auto__){
var self__ = this;
var this__5344__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
var h__5152__auto__ = self__.__hash;
if((!((h__5152__auto__ == null)))){
return h__5152__auto__;
} else {
var h__5152__auto____$1 = (function (coll__5337__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__5337__auto__));
})(this__5336__auto____$1);
(self__.__hash = h__5152__auto____$1);

return h__5152__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this40411,other40412){
var self__ = this;
var this40411__$1 = this;
return (((!((other40412 == null)))) && ((((this40411__$1.constructor === other40412.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this40411__$1.w,other40412.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this40411__$1.h,other40412.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this40411__$1.__extmap,other40412.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5350__auto__,k__5351__auto__){
var self__ = this;
var this__5350__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__5351__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5350__auto____$1),self__.__meta),k__5351__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5351__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5347__auto__,k40410){
var self__ = this;
var this__5347__auto____$1 = this;
var G__40439 = k40410;
var G__40439__$1 = (((G__40439 instanceof cljs.core.Keyword))?G__40439.fqn:null);
switch (G__40439__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k40410);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5348__auto__,k__5349__auto__,G__40409){
var self__ = this;
var this__5348__auto____$1 = this;
var pred__40443 = cljs.core.keyword_identical_QMARK_;
var expr__40444 = k__5349__auto__;
if(cljs.core.truth_((pred__40443.cljs$core$IFn$_invoke$arity$2 ? pred__40443.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__40444) : pred__40443.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__40444)))){
return (new shadow.dom.Size(G__40409,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__40443.cljs$core$IFn$_invoke$arity$2 ? pred__40443.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__40444) : pred__40443.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__40444)))){
return (new shadow.dom.Size(self__.w,G__40409,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5349__auto__,G__40409),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5353__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5339__auto__,G__40409){
var self__ = this;
var this__5339__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__40409,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5345__auto__,entry__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5346__auto__)){
return this__5345__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5346__auto__,(0)),cljs.core._nth(entry__5346__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5345__auto____$1,entry__5346__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__5386__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__5386__auto__,writer__5387__auto__){
return cljs.core._write(writer__5387__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__40414){
var extmap__5382__auto__ = (function (){var G__40446 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__40414,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__40414)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__40446);
} else {
return G__40446;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__40414),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__40414),null,cljs.core.not_empty(extmap__5382__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__5630__auto__ = opts;
var l__5631__auto__ = a__5630__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__5631__auto__)){
var G__40976 = (i + (1));
var G__40977 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__40976;
ret = G__40977;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__40458){
var vec__40459 = p__40458;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40459,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40459,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__40463 = arguments.length;
switch (G__40463) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5802__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5802__auto__)){
var child = temp__5802__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__40994 = ps;
var G__40995 = (i + (1));
el__$1 = G__40994;
i = G__40995;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__40473 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40473,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40473,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40473,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__40478_40996 = cljs.core.seq(props);
var chunk__40479_40997 = null;
var count__40480_40998 = (0);
var i__40481_40999 = (0);
while(true){
if((i__40481_40999 < count__40480_40998)){
var vec__40488_41001 = chunk__40479_40997.cljs$core$IIndexed$_nth$arity$2(null,i__40481_40999);
var k_41002 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40488_41001,(0),null);
var v_41003 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40488_41001,(1),null);
el.setAttributeNS((function (){var temp__5804__auto__ = cljs.core.namespace(k_41002);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_41002),v_41003);


var G__41008 = seq__40478_40996;
var G__41009 = chunk__40479_40997;
var G__41010 = count__40480_40998;
var G__41011 = (i__40481_40999 + (1));
seq__40478_40996 = G__41008;
chunk__40479_40997 = G__41009;
count__40480_40998 = G__41010;
i__40481_40999 = G__41011;
continue;
} else {
var temp__5804__auto___41012 = cljs.core.seq(seq__40478_40996);
if(temp__5804__auto___41012){
var seq__40478_41013__$1 = temp__5804__auto___41012;
if(cljs.core.chunked_seq_QMARK_(seq__40478_41013__$1)){
var c__5565__auto___41014 = cljs.core.chunk_first(seq__40478_41013__$1);
var G__41015 = cljs.core.chunk_rest(seq__40478_41013__$1);
var G__41016 = c__5565__auto___41014;
var G__41017 = cljs.core.count(c__5565__auto___41014);
var G__41018 = (0);
seq__40478_40996 = G__41015;
chunk__40479_40997 = G__41016;
count__40480_40998 = G__41017;
i__40481_40999 = G__41018;
continue;
} else {
var vec__40491_41019 = cljs.core.first(seq__40478_41013__$1);
var k_41020 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40491_41019,(0),null);
var v_41021 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40491_41019,(1),null);
el.setAttributeNS((function (){var temp__5804__auto____$1 = cljs.core.namespace(k_41020);
if(cljs.core.truth_(temp__5804__auto____$1)){
var ns = temp__5804__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_41020),v_41021);


var G__41022 = cljs.core.next(seq__40478_41013__$1);
var G__41023 = null;
var G__41024 = (0);
var G__41025 = (0);
seq__40478_40996 = G__41022;
chunk__40479_40997 = G__41023;
count__40480_40998 = G__41024;
i__40481_40999 = G__41025;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__40495 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40495,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40495,(1),null);
var seq__40498_41028 = cljs.core.seq(node_children);
var chunk__40500_41029 = null;
var count__40501_41030 = (0);
var i__40502_41031 = (0);
while(true){
if((i__40502_41031 < count__40501_41030)){
var child_struct_41032 = chunk__40500_41029.cljs$core$IIndexed$_nth$arity$2(null,i__40502_41031);
if((!((child_struct_41032 == null)))){
if(typeof child_struct_41032 === 'string'){
var text_41033 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_41033),child_struct_41032].join(''));
} else {
var children_41036 = shadow.dom.svg_node(child_struct_41032);
if(cljs.core.seq_QMARK_(children_41036)){
var seq__40523_41037 = cljs.core.seq(children_41036);
var chunk__40525_41038 = null;
var count__40526_41039 = (0);
var i__40527_41040 = (0);
while(true){
if((i__40527_41040 < count__40526_41039)){
var child_41041 = chunk__40525_41038.cljs$core$IIndexed$_nth$arity$2(null,i__40527_41040);
if(cljs.core.truth_(child_41041)){
node.appendChild(child_41041);


var G__41042 = seq__40523_41037;
var G__41043 = chunk__40525_41038;
var G__41044 = count__40526_41039;
var G__41045 = (i__40527_41040 + (1));
seq__40523_41037 = G__41042;
chunk__40525_41038 = G__41043;
count__40526_41039 = G__41044;
i__40527_41040 = G__41045;
continue;
} else {
var G__41046 = seq__40523_41037;
var G__41047 = chunk__40525_41038;
var G__41048 = count__40526_41039;
var G__41049 = (i__40527_41040 + (1));
seq__40523_41037 = G__41046;
chunk__40525_41038 = G__41047;
count__40526_41039 = G__41048;
i__40527_41040 = G__41049;
continue;
}
} else {
var temp__5804__auto___41050 = cljs.core.seq(seq__40523_41037);
if(temp__5804__auto___41050){
var seq__40523_41051__$1 = temp__5804__auto___41050;
if(cljs.core.chunked_seq_QMARK_(seq__40523_41051__$1)){
var c__5565__auto___41052 = cljs.core.chunk_first(seq__40523_41051__$1);
var G__41053 = cljs.core.chunk_rest(seq__40523_41051__$1);
var G__41054 = c__5565__auto___41052;
var G__41055 = cljs.core.count(c__5565__auto___41052);
var G__41056 = (0);
seq__40523_41037 = G__41053;
chunk__40525_41038 = G__41054;
count__40526_41039 = G__41055;
i__40527_41040 = G__41056;
continue;
} else {
var child_41057 = cljs.core.first(seq__40523_41051__$1);
if(cljs.core.truth_(child_41057)){
node.appendChild(child_41057);


var G__41058 = cljs.core.next(seq__40523_41051__$1);
var G__41059 = null;
var G__41060 = (0);
var G__41061 = (0);
seq__40523_41037 = G__41058;
chunk__40525_41038 = G__41059;
count__40526_41039 = G__41060;
i__40527_41040 = G__41061;
continue;
} else {
var G__41062 = cljs.core.next(seq__40523_41051__$1);
var G__41063 = null;
var G__41064 = (0);
var G__41065 = (0);
seq__40523_41037 = G__41062;
chunk__40525_41038 = G__41063;
count__40526_41039 = G__41064;
i__40527_41040 = G__41065;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_41036);
}
}


var G__41066 = seq__40498_41028;
var G__41067 = chunk__40500_41029;
var G__41068 = count__40501_41030;
var G__41069 = (i__40502_41031 + (1));
seq__40498_41028 = G__41066;
chunk__40500_41029 = G__41067;
count__40501_41030 = G__41068;
i__40502_41031 = G__41069;
continue;
} else {
var G__41070 = seq__40498_41028;
var G__41071 = chunk__40500_41029;
var G__41072 = count__40501_41030;
var G__41073 = (i__40502_41031 + (1));
seq__40498_41028 = G__41070;
chunk__40500_41029 = G__41071;
count__40501_41030 = G__41072;
i__40502_41031 = G__41073;
continue;
}
} else {
var temp__5804__auto___41074 = cljs.core.seq(seq__40498_41028);
if(temp__5804__auto___41074){
var seq__40498_41075__$1 = temp__5804__auto___41074;
if(cljs.core.chunked_seq_QMARK_(seq__40498_41075__$1)){
var c__5565__auto___41076 = cljs.core.chunk_first(seq__40498_41075__$1);
var G__41077 = cljs.core.chunk_rest(seq__40498_41075__$1);
var G__41078 = c__5565__auto___41076;
var G__41079 = cljs.core.count(c__5565__auto___41076);
var G__41080 = (0);
seq__40498_41028 = G__41077;
chunk__40500_41029 = G__41078;
count__40501_41030 = G__41079;
i__40502_41031 = G__41080;
continue;
} else {
var child_struct_41081 = cljs.core.first(seq__40498_41075__$1);
if((!((child_struct_41081 == null)))){
if(typeof child_struct_41081 === 'string'){
var text_41082 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_41082),child_struct_41081].join(''));
} else {
var children_41083 = shadow.dom.svg_node(child_struct_41081);
if(cljs.core.seq_QMARK_(children_41083)){
var seq__40529_41084 = cljs.core.seq(children_41083);
var chunk__40531_41085 = null;
var count__40532_41086 = (0);
var i__40533_41087 = (0);
while(true){
if((i__40533_41087 < count__40532_41086)){
var child_41088 = chunk__40531_41085.cljs$core$IIndexed$_nth$arity$2(null,i__40533_41087);
if(cljs.core.truth_(child_41088)){
node.appendChild(child_41088);


var G__41089 = seq__40529_41084;
var G__41090 = chunk__40531_41085;
var G__41091 = count__40532_41086;
var G__41092 = (i__40533_41087 + (1));
seq__40529_41084 = G__41089;
chunk__40531_41085 = G__41090;
count__40532_41086 = G__41091;
i__40533_41087 = G__41092;
continue;
} else {
var G__41093 = seq__40529_41084;
var G__41094 = chunk__40531_41085;
var G__41095 = count__40532_41086;
var G__41096 = (i__40533_41087 + (1));
seq__40529_41084 = G__41093;
chunk__40531_41085 = G__41094;
count__40532_41086 = G__41095;
i__40533_41087 = G__41096;
continue;
}
} else {
var temp__5804__auto___41097__$1 = cljs.core.seq(seq__40529_41084);
if(temp__5804__auto___41097__$1){
var seq__40529_41098__$1 = temp__5804__auto___41097__$1;
if(cljs.core.chunked_seq_QMARK_(seq__40529_41098__$1)){
var c__5565__auto___41099 = cljs.core.chunk_first(seq__40529_41098__$1);
var G__41100 = cljs.core.chunk_rest(seq__40529_41098__$1);
var G__41101 = c__5565__auto___41099;
var G__41102 = cljs.core.count(c__5565__auto___41099);
var G__41103 = (0);
seq__40529_41084 = G__41100;
chunk__40531_41085 = G__41101;
count__40532_41086 = G__41102;
i__40533_41087 = G__41103;
continue;
} else {
var child_41104 = cljs.core.first(seq__40529_41098__$1);
if(cljs.core.truth_(child_41104)){
node.appendChild(child_41104);


var G__41105 = cljs.core.next(seq__40529_41098__$1);
var G__41106 = null;
var G__41107 = (0);
var G__41108 = (0);
seq__40529_41084 = G__41105;
chunk__40531_41085 = G__41106;
count__40532_41086 = G__41107;
i__40533_41087 = G__41108;
continue;
} else {
var G__41109 = cljs.core.next(seq__40529_41098__$1);
var G__41110 = null;
var G__41111 = (0);
var G__41112 = (0);
seq__40529_41084 = G__41109;
chunk__40531_41085 = G__41110;
count__40532_41086 = G__41111;
i__40533_41087 = G__41112;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_41083);
}
}


var G__41113 = cljs.core.next(seq__40498_41075__$1);
var G__41114 = null;
var G__41115 = (0);
var G__41116 = (0);
seq__40498_41028 = G__41113;
chunk__40500_41029 = G__41114;
count__40501_41030 = G__41115;
i__40502_41031 = G__41116;
continue;
} else {
var G__41117 = cljs.core.next(seq__40498_41075__$1);
var G__41118 = null;
var G__41119 = (0);
var G__41120 = (0);
seq__40498_41028 = G__41117;
chunk__40500_41029 = G__41118;
count__40501_41030 = G__41119;
i__40502_41031 = G__41120;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__5772__auto__ = [];
var len__5766__auto___41127 = arguments.length;
var i__5767__auto___41128 = (0);
while(true){
if((i__5767__auto___41128 < len__5766__auto___41127)){
args__5772__auto__.push((arguments[i__5767__auto___41128]));

var G__41136 = (i__5767__auto___41128 + (1));
i__5767__auto___41128 = G__41136;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq40539){
var G__40540 = cljs.core.first(seq40539);
var seq40539__$1 = cljs.core.next(seq40539);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40540,seq40539__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__40545 = arguments.length;
switch (G__40545) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__5041__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__5041__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__5041__auto__;
}
})())){
var c__35985__auto___41153 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35986__auto__ = (function (){var switch__35471__auto__ = (function (state_40550){
var state_val_40551 = (state_40550[(1)]);
if((state_val_40551 === (1))){
var state_40550__$1 = state_40550;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40550__$1,(2),once_or_cleanup);
} else {
if((state_val_40551 === (2))){
var inst_40547 = (state_40550[(2)]);
var inst_40548 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_40550__$1 = (function (){var statearr_40556 = state_40550;
(statearr_40556[(7)] = inst_40547);

return statearr_40556;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_40550__$1,inst_40548);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__35472__auto__ = null;
var shadow$dom$state_machine__35472__auto____0 = (function (){
var statearr_40561 = [null,null,null,null,null,null,null,null];
(statearr_40561[(0)] = shadow$dom$state_machine__35472__auto__);

(statearr_40561[(1)] = (1));

return statearr_40561;
});
var shadow$dom$state_machine__35472__auto____1 = (function (state_40550){
while(true){
var ret_value__35473__auto__ = (function (){try{while(true){
var result__35474__auto__ = switch__35471__auto__(state_40550);
if(cljs.core.keyword_identical_QMARK_(result__35474__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35474__auto__;
}
break;
}
}catch (e40562){var ex__35475__auto__ = e40562;
var statearr_40563_41162 = state_40550;
(statearr_40563_41162[(2)] = ex__35475__auto__);


if(cljs.core.seq((state_40550[(4)]))){
var statearr_40564_41163 = state_40550;
(statearr_40564_41163[(1)] = cljs.core.first((state_40550[(4)])));

} else {
throw ex__35475__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35473__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41164 = state_40550;
state_40550 = G__41164;
continue;
} else {
return ret_value__35473__auto__;
}
break;
}
});
shadow$dom$state_machine__35472__auto__ = function(state_40550){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__35472__auto____0.call(this);
case 1:
return shadow$dom$state_machine__35472__auto____1.call(this,state_40550);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__35472__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__35472__auto____0;
shadow$dom$state_machine__35472__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__35472__auto____1;
return shadow$dom$state_machine__35472__auto__;
})()
})();
var state__35987__auto__ = (function (){var statearr_40565 = f__35986__auto__();
(statearr_40565[(6)] = c__35985__auto___41153);

return statearr_40565;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35987__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map

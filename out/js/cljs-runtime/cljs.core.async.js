goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__36140 = arguments.length;
switch (G__36140) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36157 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36157 = (function (f,blockable,meta36158){
this.f = f;
this.blockable = blockable;
this.meta36158 = meta36158;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36157.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36159,meta36158__$1){
var self__ = this;
var _36159__$1 = this;
return (new cljs.core.async.t_cljs$core$async36157(self__.f,self__.blockable,meta36158__$1));
}));

(cljs.core.async.t_cljs$core$async36157.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36159){
var self__ = this;
var _36159__$1 = this;
return self__.meta36158;
}));

(cljs.core.async.t_cljs$core$async36157.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36157.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async36157.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async36157.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async36157.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta36158","meta36158",-626328086,null)], null);
}));

(cljs.core.async.t_cljs$core$async36157.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36157.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36157");

(cljs.core.async.t_cljs$core$async36157.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"cljs.core.async/t_cljs$core$async36157");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36157.
 */
cljs.core.async.__GT_t_cljs$core$async36157 = (function cljs$core$async$__GT_t_cljs$core$async36157(f__$1,blockable__$1,meta36158){
return (new cljs.core.async.t_cljs$core$async36157(f__$1,blockable__$1,meta36158));
});

}

return (new cljs.core.async.t_cljs$core$async36157(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__36178 = arguments.length;
switch (G__36178) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__36202 = arguments.length;
switch (G__36202) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__36209 = arguments.length;
switch (G__36209) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_39503 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_39503) : fn1.call(null,val_39503));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_39503) : fn1.call(null,val_39503));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__36230 = arguments.length;
switch (G__36230) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5802__auto__)){
var ret = temp__5802__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5802__auto__)){
var retb = temp__5802__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5633__auto___39506 = n;
var x_39507 = (0);
while(true){
if((x_39507 < n__5633__auto___39506)){
(a[x_39507] = x_39507);

var G__39509 = (x_39507 + (1));
x_39507 = G__39509;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36297 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36297 = (function (flag,meta36298){
this.flag = flag;
this.meta36298 = meta36298;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36297.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36299,meta36298__$1){
var self__ = this;
var _36299__$1 = this;
return (new cljs.core.async.t_cljs$core$async36297(self__.flag,meta36298__$1));
}));

(cljs.core.async.t_cljs$core$async36297.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36299){
var self__ = this;
var _36299__$1 = this;
return self__.meta36298;
}));

(cljs.core.async.t_cljs$core$async36297.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36297.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async36297.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async36297.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async36297.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta36298","meta36298",1385637801,null)], null);
}));

(cljs.core.async.t_cljs$core$async36297.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36297.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36297");

(cljs.core.async.t_cljs$core$async36297.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"cljs.core.async/t_cljs$core$async36297");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36297.
 */
cljs.core.async.__GT_t_cljs$core$async36297 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async36297(flag__$1,meta36298){
return (new cljs.core.async.t_cljs$core$async36297(flag__$1,meta36298));
});

}

return (new cljs.core.async.t_cljs$core$async36297(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36309 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36309 = (function (flag,cb,meta36310){
this.flag = flag;
this.cb = cb;
this.meta36310 = meta36310;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36309.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36311,meta36310__$1){
var self__ = this;
var _36311__$1 = this;
return (new cljs.core.async.t_cljs$core$async36309(self__.flag,self__.cb,meta36310__$1));
}));

(cljs.core.async.t_cljs$core$async36309.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36311){
var self__ = this;
var _36311__$1 = this;
return self__.meta36310;
}));

(cljs.core.async.t_cljs$core$async36309.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36309.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async36309.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async36309.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async36309.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta36310","meta36310",-1787906238,null)], null);
}));

(cljs.core.async.t_cljs$core$async36309.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36309.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36309");

(cljs.core.async.t_cljs$core$async36309.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"cljs.core.async/t_cljs$core$async36309");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36309.
 */
cljs.core.async.__GT_t_cljs$core$async36309 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async36309(flag__$1,cb__$1,meta36310){
return (new cljs.core.async.t_cljs$core$async36309(flag__$1,cb__$1,meta36310));
});

}

return (new cljs.core.async.t_cljs$core$async36309(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__36314_SHARP_){
var G__36329 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__36314_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__36329) : fret.call(null,G__36329));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__36315_SHARP_){
var G__36330 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__36315_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__36330) : fret.call(null,G__36330));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5043__auto__ = wport;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return port;
}
})()], null));
} else {
var G__39512 = (i + (1));
i = G__39512;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5043__auto__ = ret;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5804__auto__ = (function (){var and__5041__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__5041__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var got = temp__5804__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5772__auto__ = [];
var len__5766__auto___39515 = arguments.length;
var i__5767__auto___39516 = (0);
while(true){
if((i__5767__auto___39516 < len__5766__auto___39515)){
args__5772__auto__.push((arguments[i__5767__auto___39516]));

var G__39517 = (i__5767__auto___39516 + (1));
i__5767__auto___39516 = G__39517;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__36344){
var map__36349 = p__36344;
var map__36349__$1 = cljs.core.__destructure_map(map__36349);
var opts = map__36349__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq36331){
var G__36332 = cljs.core.first(seq36331);
var seq36331__$1 = cljs.core.next(seq36331);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36332,seq36331__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__36373 = arguments.length;
switch (G__36373) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__35985__auto___39523 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35986__auto__ = (function (){var switch__35471__auto__ = (function (state_36455){
var state_val_36466 = (state_36455[(1)]);
if((state_val_36466 === (7))){
var inst_36448 = (state_36455[(2)]);
var state_36455__$1 = state_36455;
var statearr_36478_39524 = state_36455__$1;
(statearr_36478_39524[(2)] = inst_36448);

(statearr_36478_39524[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36466 === (1))){
var state_36455__$1 = state_36455;
var statearr_36479_39525 = state_36455__$1;
(statearr_36479_39525[(2)] = null);

(statearr_36479_39525[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36466 === (4))){
var inst_36424 = (state_36455[(7)]);
var inst_36424__$1 = (state_36455[(2)]);
var inst_36429 = (inst_36424__$1 == null);
var state_36455__$1 = (function (){var statearr_36482 = state_36455;
(statearr_36482[(7)] = inst_36424__$1);

return statearr_36482;
})();
if(cljs.core.truth_(inst_36429)){
var statearr_36483_39526 = state_36455__$1;
(statearr_36483_39526[(1)] = (5));

} else {
var statearr_36484_39527 = state_36455__$1;
(statearr_36484_39527[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36466 === (13))){
var state_36455__$1 = state_36455;
var statearr_36485_39528 = state_36455__$1;
(statearr_36485_39528[(2)] = null);

(statearr_36485_39528[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36466 === (6))){
var inst_36424 = (state_36455[(7)]);
var state_36455__$1 = state_36455;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36455__$1,(11),to,inst_36424);
} else {
if((state_val_36466 === (3))){
var inst_36451 = (state_36455[(2)]);
var state_36455__$1 = state_36455;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36455__$1,inst_36451);
} else {
if((state_val_36466 === (12))){
var state_36455__$1 = state_36455;
var statearr_36487_39529 = state_36455__$1;
(statearr_36487_39529[(2)] = null);

(statearr_36487_39529[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36466 === (2))){
var state_36455__$1 = state_36455;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36455__$1,(4),from);
} else {
if((state_val_36466 === (11))){
var inst_36441 = (state_36455[(2)]);
var state_36455__$1 = state_36455;
if(cljs.core.truth_(inst_36441)){
var statearr_36491_39530 = state_36455__$1;
(statearr_36491_39530[(1)] = (12));

} else {
var statearr_36492_39531 = state_36455__$1;
(statearr_36492_39531[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36466 === (9))){
var state_36455__$1 = state_36455;
var statearr_36493_39532 = state_36455__$1;
(statearr_36493_39532[(2)] = null);

(statearr_36493_39532[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36466 === (5))){
var state_36455__$1 = state_36455;
if(cljs.core.truth_(close_QMARK_)){
var statearr_36494_39533 = state_36455__$1;
(statearr_36494_39533[(1)] = (8));

} else {
var statearr_36495_39534 = state_36455__$1;
(statearr_36495_39534[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36466 === (14))){
var inst_36446 = (state_36455[(2)]);
var state_36455__$1 = state_36455;
var statearr_36496_39535 = state_36455__$1;
(statearr_36496_39535[(2)] = inst_36446);

(statearr_36496_39535[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36466 === (10))){
var inst_36438 = (state_36455[(2)]);
var state_36455__$1 = state_36455;
var statearr_36497_39536 = state_36455__$1;
(statearr_36497_39536[(2)] = inst_36438);

(statearr_36497_39536[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36466 === (8))){
var inst_36432 = cljs.core.async.close_BANG_(to);
var state_36455__$1 = state_36455;
var statearr_36498_39537 = state_36455__$1;
(statearr_36498_39537[(2)] = inst_36432);

(statearr_36498_39537[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__35472__auto__ = null;
var cljs$core$async$state_machine__35472__auto____0 = (function (){
var statearr_36508 = [null,null,null,null,null,null,null,null];
(statearr_36508[(0)] = cljs$core$async$state_machine__35472__auto__);

(statearr_36508[(1)] = (1));

return statearr_36508;
});
var cljs$core$async$state_machine__35472__auto____1 = (function (state_36455){
while(true){
var ret_value__35473__auto__ = (function (){try{while(true){
var result__35474__auto__ = switch__35471__auto__(state_36455);
if(cljs.core.keyword_identical_QMARK_(result__35474__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35474__auto__;
}
break;
}
}catch (e36509){var ex__35475__auto__ = e36509;
var statearr_36510_39538 = state_36455;
(statearr_36510_39538[(2)] = ex__35475__auto__);


if(cljs.core.seq((state_36455[(4)]))){
var statearr_36513_39539 = state_36455;
(statearr_36513_39539[(1)] = cljs.core.first((state_36455[(4)])));

} else {
throw ex__35475__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35473__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39540 = state_36455;
state_36455 = G__39540;
continue;
} else {
return ret_value__35473__auto__;
}
break;
}
});
cljs$core$async$state_machine__35472__auto__ = function(state_36455){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35472__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35472__auto____1.call(this,state_36455);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35472__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35472__auto____0;
cljs$core$async$state_machine__35472__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35472__auto____1;
return cljs$core$async$state_machine__35472__auto__;
})()
})();
var state__35987__auto__ = (function (){var statearr_36520 = f__35986__auto__();
(statearr_36520[(6)] = c__35985__auto___39523);

return statearr_36520;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35987__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process__$1 = (function (p__36547){
var vec__36548 = p__36547;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36548,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36548,(1),null);
var job = vec__36548;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__35985__auto___39546 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35986__auto__ = (function (){var switch__35471__auto__ = (function (state_36556){
var state_val_36557 = (state_36556[(1)]);
if((state_val_36557 === (1))){
var state_36556__$1 = state_36556;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36556__$1,(2),res,v);
} else {
if((state_val_36557 === (2))){
var inst_36552 = (state_36556[(2)]);
var inst_36553 = cljs.core.async.close_BANG_(res);
var state_36556__$1 = (function (){var statearr_36563 = state_36556;
(statearr_36563[(7)] = inst_36552);

return statearr_36563;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_36556__$1,inst_36553);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__35472__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__35472__auto____0 = (function (){
var statearr_36564 = [null,null,null,null,null,null,null,null];
(statearr_36564[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__35472__auto__);

(statearr_36564[(1)] = (1));

return statearr_36564;
});
var cljs$core$async$pipeline_STAR__$_state_machine__35472__auto____1 = (function (state_36556){
while(true){
var ret_value__35473__auto__ = (function (){try{while(true){
var result__35474__auto__ = switch__35471__auto__(state_36556);
if(cljs.core.keyword_identical_QMARK_(result__35474__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35474__auto__;
}
break;
}
}catch (e36565){var ex__35475__auto__ = e36565;
var statearr_36566_39547 = state_36556;
(statearr_36566_39547[(2)] = ex__35475__auto__);


if(cljs.core.seq((state_36556[(4)]))){
var statearr_36567_39548 = state_36556;
(statearr_36567_39548[(1)] = cljs.core.first((state_36556[(4)])));

} else {
throw ex__35475__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35473__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39549 = state_36556;
state_36556 = G__39549;
continue;
} else {
return ret_value__35473__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__35472__auto__ = function(state_36556){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__35472__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__35472__auto____1.call(this,state_36556);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__35472__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__35472__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__35472__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__35472__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__35472__auto__;
})()
})();
var state__35987__auto__ = (function (){var statearr_36577 = f__35986__auto__();
(statearr_36577[(6)] = c__35985__auto___39546);

return statearr_36577;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35987__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__36582){
var vec__36583 = p__36582;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36583,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36583,(1),null);
var job = vec__36583;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__5633__auto___39550 = n;
var __39551 = (0);
while(true){
if((__39551 < n__5633__auto___39550)){
var G__36588_39552 = type;
var G__36588_39553__$1 = (((G__36588_39552 instanceof cljs.core.Keyword))?G__36588_39552.fqn:null);
switch (G__36588_39553__$1) {
case "compute":
var c__35985__auto___39556 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__39551,c__35985__auto___39556,G__36588_39552,G__36588_39553__$1,n__5633__auto___39550,jobs,results,process__$1,async){
return (function (){
var f__35986__auto__ = (function (){var switch__35471__auto__ = ((function (__39551,c__35985__auto___39556,G__36588_39552,G__36588_39553__$1,n__5633__auto___39550,jobs,results,process__$1,async){
return (function (state_36601){
var state_val_36602 = (state_36601[(1)]);
if((state_val_36602 === (1))){
var state_36601__$1 = state_36601;
var statearr_36604_39558 = state_36601__$1;
(statearr_36604_39558[(2)] = null);

(statearr_36604_39558[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36602 === (2))){
var state_36601__$1 = state_36601;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36601__$1,(4),jobs);
} else {
if((state_val_36602 === (3))){
var inst_36599 = (state_36601[(2)]);
var state_36601__$1 = state_36601;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36601__$1,inst_36599);
} else {
if((state_val_36602 === (4))){
var inst_36591 = (state_36601[(2)]);
var inst_36592 = process__$1(inst_36591);
var state_36601__$1 = state_36601;
if(cljs.core.truth_(inst_36592)){
var statearr_36607_39559 = state_36601__$1;
(statearr_36607_39559[(1)] = (5));

} else {
var statearr_36608_39560 = state_36601__$1;
(statearr_36608_39560[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36602 === (5))){
var state_36601__$1 = state_36601;
var statearr_36609_39561 = state_36601__$1;
(statearr_36609_39561[(2)] = null);

(statearr_36609_39561[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36602 === (6))){
var state_36601__$1 = state_36601;
var statearr_36610_39562 = state_36601__$1;
(statearr_36610_39562[(2)] = null);

(statearr_36610_39562[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36602 === (7))){
var inst_36597 = (state_36601[(2)]);
var state_36601__$1 = state_36601;
var statearr_36612_39563 = state_36601__$1;
(statearr_36612_39563[(2)] = inst_36597);

(statearr_36612_39563[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__39551,c__35985__auto___39556,G__36588_39552,G__36588_39553__$1,n__5633__auto___39550,jobs,results,process__$1,async))
;
return ((function (__39551,switch__35471__auto__,c__35985__auto___39556,G__36588_39552,G__36588_39553__$1,n__5633__auto___39550,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__35472__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__35472__auto____0 = (function (){
var statearr_36613 = [null,null,null,null,null,null,null];
(statearr_36613[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__35472__auto__);

(statearr_36613[(1)] = (1));

return statearr_36613;
});
var cljs$core$async$pipeline_STAR__$_state_machine__35472__auto____1 = (function (state_36601){
while(true){
var ret_value__35473__auto__ = (function (){try{while(true){
var result__35474__auto__ = switch__35471__auto__(state_36601);
if(cljs.core.keyword_identical_QMARK_(result__35474__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35474__auto__;
}
break;
}
}catch (e36614){var ex__35475__auto__ = e36614;
var statearr_36615_39564 = state_36601;
(statearr_36615_39564[(2)] = ex__35475__auto__);


if(cljs.core.seq((state_36601[(4)]))){
var statearr_36618_39565 = state_36601;
(statearr_36618_39565[(1)] = cljs.core.first((state_36601[(4)])));

} else {
throw ex__35475__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35473__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39566 = state_36601;
state_36601 = G__39566;
continue;
} else {
return ret_value__35473__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__35472__auto__ = function(state_36601){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__35472__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__35472__auto____1.call(this,state_36601);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__35472__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__35472__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__35472__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__35472__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__35472__auto__;
})()
;})(__39551,switch__35471__auto__,c__35985__auto___39556,G__36588_39552,G__36588_39553__$1,n__5633__auto___39550,jobs,results,process__$1,async))
})();
var state__35987__auto__ = (function (){var statearr_36637 = f__35986__auto__();
(statearr_36637[(6)] = c__35985__auto___39556);

return statearr_36637;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35987__auto__);
});})(__39551,c__35985__auto___39556,G__36588_39552,G__36588_39553__$1,n__5633__auto___39550,jobs,results,process__$1,async))
);


break;
case "async":
var c__35985__auto___39567 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__39551,c__35985__auto___39567,G__36588_39552,G__36588_39553__$1,n__5633__auto___39550,jobs,results,process__$1,async){
return (function (){
var f__35986__auto__ = (function (){var switch__35471__auto__ = ((function (__39551,c__35985__auto___39567,G__36588_39552,G__36588_39553__$1,n__5633__auto___39550,jobs,results,process__$1,async){
return (function (state_36651){
var state_val_36652 = (state_36651[(1)]);
if((state_val_36652 === (1))){
var state_36651__$1 = state_36651;
var statearr_36656_39568 = state_36651__$1;
(statearr_36656_39568[(2)] = null);

(statearr_36656_39568[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36652 === (2))){
var state_36651__$1 = state_36651;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36651__$1,(4),jobs);
} else {
if((state_val_36652 === (3))){
var inst_36649 = (state_36651[(2)]);
var state_36651__$1 = state_36651;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36651__$1,inst_36649);
} else {
if((state_val_36652 === (4))){
var inst_36641 = (state_36651[(2)]);
var inst_36642 = async(inst_36641);
var state_36651__$1 = state_36651;
if(cljs.core.truth_(inst_36642)){
var statearr_36658_39570 = state_36651__$1;
(statearr_36658_39570[(1)] = (5));

} else {
var statearr_36659_39571 = state_36651__$1;
(statearr_36659_39571[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36652 === (5))){
var state_36651__$1 = state_36651;
var statearr_36663_39572 = state_36651__$1;
(statearr_36663_39572[(2)] = null);

(statearr_36663_39572[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36652 === (6))){
var state_36651__$1 = state_36651;
var statearr_36665_39573 = state_36651__$1;
(statearr_36665_39573[(2)] = null);

(statearr_36665_39573[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36652 === (7))){
var inst_36647 = (state_36651[(2)]);
var state_36651__$1 = state_36651;
var statearr_36666_39574 = state_36651__$1;
(statearr_36666_39574[(2)] = inst_36647);

(statearr_36666_39574[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__39551,c__35985__auto___39567,G__36588_39552,G__36588_39553__$1,n__5633__auto___39550,jobs,results,process__$1,async))
;
return ((function (__39551,switch__35471__auto__,c__35985__auto___39567,G__36588_39552,G__36588_39553__$1,n__5633__auto___39550,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__35472__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__35472__auto____0 = (function (){
var statearr_36690 = [null,null,null,null,null,null,null];
(statearr_36690[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__35472__auto__);

(statearr_36690[(1)] = (1));

return statearr_36690;
});
var cljs$core$async$pipeline_STAR__$_state_machine__35472__auto____1 = (function (state_36651){
while(true){
var ret_value__35473__auto__ = (function (){try{while(true){
var result__35474__auto__ = switch__35471__auto__(state_36651);
if(cljs.core.keyword_identical_QMARK_(result__35474__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35474__auto__;
}
break;
}
}catch (e36691){var ex__35475__auto__ = e36691;
var statearr_36692_39575 = state_36651;
(statearr_36692_39575[(2)] = ex__35475__auto__);


if(cljs.core.seq((state_36651[(4)]))){
var statearr_36695_39577 = state_36651;
(statearr_36695_39577[(1)] = cljs.core.first((state_36651[(4)])));

} else {
throw ex__35475__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35473__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39579 = state_36651;
state_36651 = G__39579;
continue;
} else {
return ret_value__35473__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__35472__auto__ = function(state_36651){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__35472__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__35472__auto____1.call(this,state_36651);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__35472__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__35472__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__35472__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__35472__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__35472__auto__;
})()
;})(__39551,switch__35471__auto__,c__35985__auto___39567,G__36588_39552,G__36588_39553__$1,n__5633__auto___39550,jobs,results,process__$1,async))
})();
var state__35987__auto__ = (function (){var statearr_36700 = f__35986__auto__();
(statearr_36700[(6)] = c__35985__auto___39567);

return statearr_36700;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35987__auto__);
});})(__39551,c__35985__auto___39567,G__36588_39552,G__36588_39553__$1,n__5633__auto___39550,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36588_39553__$1)].join('')));

}

var G__39583 = (__39551 + (1));
__39551 = G__39583;
continue;
} else {
}
break;
}

var c__35985__auto___39585 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35986__auto__ = (function (){var switch__35471__auto__ = (function (state_36730){
var state_val_36731 = (state_36730[(1)]);
if((state_val_36731 === (7))){
var inst_36726 = (state_36730[(2)]);
var state_36730__$1 = state_36730;
var statearr_36743_39586 = state_36730__$1;
(statearr_36743_39586[(2)] = inst_36726);

(statearr_36743_39586[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36731 === (1))){
var state_36730__$1 = state_36730;
var statearr_36744_39587 = state_36730__$1;
(statearr_36744_39587[(2)] = null);

(statearr_36744_39587[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36731 === (4))){
var inst_36707 = (state_36730[(7)]);
var inst_36707__$1 = (state_36730[(2)]);
var inst_36708 = (inst_36707__$1 == null);
var state_36730__$1 = (function (){var statearr_36749 = state_36730;
(statearr_36749[(7)] = inst_36707__$1);

return statearr_36749;
})();
if(cljs.core.truth_(inst_36708)){
var statearr_36750_39588 = state_36730__$1;
(statearr_36750_39588[(1)] = (5));

} else {
var statearr_36751_39589 = state_36730__$1;
(statearr_36751_39589[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36731 === (6))){
var inst_36707 = (state_36730[(7)]);
var inst_36713 = (state_36730[(8)]);
var inst_36713__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_36714 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_36715 = [inst_36707,inst_36713__$1];
var inst_36716 = (new cljs.core.PersistentVector(null,2,(5),inst_36714,inst_36715,null));
var state_36730__$1 = (function (){var statearr_36752 = state_36730;
(statearr_36752[(8)] = inst_36713__$1);

return statearr_36752;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36730__$1,(8),jobs,inst_36716);
} else {
if((state_val_36731 === (3))){
var inst_36728 = (state_36730[(2)]);
var state_36730__$1 = state_36730;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36730__$1,inst_36728);
} else {
if((state_val_36731 === (2))){
var state_36730__$1 = state_36730;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36730__$1,(4),from);
} else {
if((state_val_36731 === (9))){
var inst_36723 = (state_36730[(2)]);
var state_36730__$1 = (function (){var statearr_36756 = state_36730;
(statearr_36756[(9)] = inst_36723);

return statearr_36756;
})();
var statearr_36757_39590 = state_36730__$1;
(statearr_36757_39590[(2)] = null);

(statearr_36757_39590[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36731 === (5))){
var inst_36711 = cljs.core.async.close_BANG_(jobs);
var state_36730__$1 = state_36730;
var statearr_36759_39592 = state_36730__$1;
(statearr_36759_39592[(2)] = inst_36711);

(statearr_36759_39592[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36731 === (8))){
var inst_36713 = (state_36730[(8)]);
var inst_36718 = (state_36730[(2)]);
var state_36730__$1 = (function (){var statearr_36765 = state_36730;
(statearr_36765[(10)] = inst_36718);

return statearr_36765;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36730__$1,(9),results,inst_36713);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__35472__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__35472__auto____0 = (function (){
var statearr_36773 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36773[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__35472__auto__);

(statearr_36773[(1)] = (1));

return statearr_36773;
});
var cljs$core$async$pipeline_STAR__$_state_machine__35472__auto____1 = (function (state_36730){
while(true){
var ret_value__35473__auto__ = (function (){try{while(true){
var result__35474__auto__ = switch__35471__auto__(state_36730);
if(cljs.core.keyword_identical_QMARK_(result__35474__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35474__auto__;
}
break;
}
}catch (e36775){var ex__35475__auto__ = e36775;
var statearr_36777_39599 = state_36730;
(statearr_36777_39599[(2)] = ex__35475__auto__);


if(cljs.core.seq((state_36730[(4)]))){
var statearr_36778_39605 = state_36730;
(statearr_36778_39605[(1)] = cljs.core.first((state_36730[(4)])));

} else {
throw ex__35475__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35473__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39606 = state_36730;
state_36730 = G__39606;
continue;
} else {
return ret_value__35473__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__35472__auto__ = function(state_36730){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__35472__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__35472__auto____1.call(this,state_36730);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__35472__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__35472__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__35472__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__35472__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__35472__auto__;
})()
})();
var state__35987__auto__ = (function (){var statearr_36794 = f__35986__auto__();
(statearr_36794[(6)] = c__35985__auto___39585);

return statearr_36794;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35987__auto__);
}));


var c__35985__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35986__auto__ = (function (){var switch__35471__auto__ = (function (state_36837){
var state_val_36838 = (state_36837[(1)]);
if((state_val_36838 === (7))){
var inst_36833 = (state_36837[(2)]);
var state_36837__$1 = state_36837;
var statearr_36843_39607 = state_36837__$1;
(statearr_36843_39607[(2)] = inst_36833);

(statearr_36843_39607[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36838 === (20))){
var state_36837__$1 = state_36837;
var statearr_36844_39608 = state_36837__$1;
(statearr_36844_39608[(2)] = null);

(statearr_36844_39608[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36838 === (1))){
var state_36837__$1 = state_36837;
var statearr_36845_39609 = state_36837__$1;
(statearr_36845_39609[(2)] = null);

(statearr_36845_39609[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36838 === (4))){
var inst_36799 = (state_36837[(7)]);
var inst_36799__$1 = (state_36837[(2)]);
var inst_36800 = (inst_36799__$1 == null);
var state_36837__$1 = (function (){var statearr_36846 = state_36837;
(statearr_36846[(7)] = inst_36799__$1);

return statearr_36846;
})();
if(cljs.core.truth_(inst_36800)){
var statearr_36847_39610 = state_36837__$1;
(statearr_36847_39610[(1)] = (5));

} else {
var statearr_36848_39611 = state_36837__$1;
(statearr_36848_39611[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36838 === (15))){
var inst_36812 = (state_36837[(8)]);
var state_36837__$1 = state_36837;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36837__$1,(18),to,inst_36812);
} else {
if((state_val_36838 === (21))){
var inst_36828 = (state_36837[(2)]);
var state_36837__$1 = state_36837;
var statearr_36849_39612 = state_36837__$1;
(statearr_36849_39612[(2)] = inst_36828);

(statearr_36849_39612[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36838 === (13))){
var inst_36830 = (state_36837[(2)]);
var state_36837__$1 = (function (){var statearr_36850 = state_36837;
(statearr_36850[(9)] = inst_36830);

return statearr_36850;
})();
var statearr_36851_39613 = state_36837__$1;
(statearr_36851_39613[(2)] = null);

(statearr_36851_39613[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36838 === (6))){
var inst_36799 = (state_36837[(7)]);
var state_36837__$1 = state_36837;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36837__$1,(11),inst_36799);
} else {
if((state_val_36838 === (17))){
var inst_36823 = (state_36837[(2)]);
var state_36837__$1 = state_36837;
if(cljs.core.truth_(inst_36823)){
var statearr_36853_39614 = state_36837__$1;
(statearr_36853_39614[(1)] = (19));

} else {
var statearr_36854_39615 = state_36837__$1;
(statearr_36854_39615[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36838 === (3))){
var inst_36835 = (state_36837[(2)]);
var state_36837__$1 = state_36837;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36837__$1,inst_36835);
} else {
if((state_val_36838 === (12))){
var inst_36809 = (state_36837[(10)]);
var state_36837__$1 = state_36837;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36837__$1,(14),inst_36809);
} else {
if((state_val_36838 === (2))){
var state_36837__$1 = state_36837;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36837__$1,(4),results);
} else {
if((state_val_36838 === (19))){
var state_36837__$1 = state_36837;
var statearr_36855_39616 = state_36837__$1;
(statearr_36855_39616[(2)] = null);

(statearr_36855_39616[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36838 === (11))){
var inst_36809 = (state_36837[(2)]);
var state_36837__$1 = (function (){var statearr_36856 = state_36837;
(statearr_36856[(10)] = inst_36809);

return statearr_36856;
})();
var statearr_36861_39617 = state_36837__$1;
(statearr_36861_39617[(2)] = null);

(statearr_36861_39617[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36838 === (9))){
var state_36837__$1 = state_36837;
var statearr_36862_39618 = state_36837__$1;
(statearr_36862_39618[(2)] = null);

(statearr_36862_39618[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36838 === (5))){
var state_36837__$1 = state_36837;
if(cljs.core.truth_(close_QMARK_)){
var statearr_36864_39619 = state_36837__$1;
(statearr_36864_39619[(1)] = (8));

} else {
var statearr_36865_39620 = state_36837__$1;
(statearr_36865_39620[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36838 === (14))){
var inst_36814 = (state_36837[(11)]);
var inst_36812 = (state_36837[(8)]);
var inst_36812__$1 = (state_36837[(2)]);
var inst_36813 = (inst_36812__$1 == null);
var inst_36814__$1 = cljs.core.not(inst_36813);
var state_36837__$1 = (function (){var statearr_36866 = state_36837;
(statearr_36866[(11)] = inst_36814__$1);

(statearr_36866[(8)] = inst_36812__$1);

return statearr_36866;
})();
if(inst_36814__$1){
var statearr_36867_39621 = state_36837__$1;
(statearr_36867_39621[(1)] = (15));

} else {
var statearr_36868_39622 = state_36837__$1;
(statearr_36868_39622[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36838 === (16))){
var inst_36814 = (state_36837[(11)]);
var state_36837__$1 = state_36837;
var statearr_36869_39623 = state_36837__$1;
(statearr_36869_39623[(2)] = inst_36814);

(statearr_36869_39623[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36838 === (10))){
var inst_36806 = (state_36837[(2)]);
var state_36837__$1 = state_36837;
var statearr_36870_39624 = state_36837__$1;
(statearr_36870_39624[(2)] = inst_36806);

(statearr_36870_39624[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36838 === (18))){
var inst_36820 = (state_36837[(2)]);
var state_36837__$1 = state_36837;
var statearr_36871_39625 = state_36837__$1;
(statearr_36871_39625[(2)] = inst_36820);

(statearr_36871_39625[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36838 === (8))){
var inst_36803 = cljs.core.async.close_BANG_(to);
var state_36837__$1 = state_36837;
var statearr_36872_39626 = state_36837__$1;
(statearr_36872_39626[(2)] = inst_36803);

(statearr_36872_39626[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__35472__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__35472__auto____0 = (function (){
var statearr_36879 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36879[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__35472__auto__);

(statearr_36879[(1)] = (1));

return statearr_36879;
});
var cljs$core$async$pipeline_STAR__$_state_machine__35472__auto____1 = (function (state_36837){
while(true){
var ret_value__35473__auto__ = (function (){try{while(true){
var result__35474__auto__ = switch__35471__auto__(state_36837);
if(cljs.core.keyword_identical_QMARK_(result__35474__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35474__auto__;
}
break;
}
}catch (e36880){var ex__35475__auto__ = e36880;
var statearr_36881_39633 = state_36837;
(statearr_36881_39633[(2)] = ex__35475__auto__);


if(cljs.core.seq((state_36837[(4)]))){
var statearr_36882_39634 = state_36837;
(statearr_36882_39634[(1)] = cljs.core.first((state_36837[(4)])));

} else {
throw ex__35475__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35473__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39639 = state_36837;
state_36837 = G__39639;
continue;
} else {
return ret_value__35473__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__35472__auto__ = function(state_36837){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__35472__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__35472__auto____1.call(this,state_36837);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__35472__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__35472__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__35472__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__35472__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__35472__auto__;
})()
})();
var state__35987__auto__ = (function (){var statearr_36883 = f__35986__auto__();
(statearr_36883[(6)] = c__35985__auto__);

return statearr_36883;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35987__auto__);
}));

return c__35985__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__36885 = arguments.length;
switch (G__36885) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__36909 = arguments.length;
switch (G__36909) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__36912 = arguments.length;
switch (G__36912) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__35985__auto___39643 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35986__auto__ = (function (){var switch__35471__auto__ = (function (state_36980){
var state_val_36982 = (state_36980[(1)]);
if((state_val_36982 === (7))){
var inst_36976 = (state_36980[(2)]);
var state_36980__$1 = state_36980;
var statearr_36984_39644 = state_36980__$1;
(statearr_36984_39644[(2)] = inst_36976);

(statearr_36984_39644[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36982 === (1))){
var state_36980__$1 = state_36980;
var statearr_36985_39645 = state_36980__$1;
(statearr_36985_39645[(2)] = null);

(statearr_36985_39645[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36982 === (4))){
var inst_36957 = (state_36980[(7)]);
var inst_36957__$1 = (state_36980[(2)]);
var inst_36958 = (inst_36957__$1 == null);
var state_36980__$1 = (function (){var statearr_36992 = state_36980;
(statearr_36992[(7)] = inst_36957__$1);

return statearr_36992;
})();
if(cljs.core.truth_(inst_36958)){
var statearr_36994_39646 = state_36980__$1;
(statearr_36994_39646[(1)] = (5));

} else {
var statearr_36995_39647 = state_36980__$1;
(statearr_36995_39647[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36982 === (13))){
var state_36980__$1 = state_36980;
var statearr_36997_39648 = state_36980__$1;
(statearr_36997_39648[(2)] = null);

(statearr_36997_39648[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36982 === (6))){
var inst_36957 = (state_36980[(7)]);
var inst_36963 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_36957) : p.call(null,inst_36957));
var state_36980__$1 = state_36980;
if(cljs.core.truth_(inst_36963)){
var statearr_37000_39649 = state_36980__$1;
(statearr_37000_39649[(1)] = (9));

} else {
var statearr_37002_39650 = state_36980__$1;
(statearr_37002_39650[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36982 === (3))){
var inst_36978 = (state_36980[(2)]);
var state_36980__$1 = state_36980;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36980__$1,inst_36978);
} else {
if((state_val_36982 === (12))){
var state_36980__$1 = state_36980;
var statearr_37003_39651 = state_36980__$1;
(statearr_37003_39651[(2)] = null);

(statearr_37003_39651[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36982 === (2))){
var state_36980__$1 = state_36980;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36980__$1,(4),ch);
} else {
if((state_val_36982 === (11))){
var inst_36957 = (state_36980[(7)]);
var inst_36967 = (state_36980[(2)]);
var state_36980__$1 = state_36980;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36980__$1,(8),inst_36967,inst_36957);
} else {
if((state_val_36982 === (9))){
var state_36980__$1 = state_36980;
var statearr_37008_39653 = state_36980__$1;
(statearr_37008_39653[(2)] = tc);

(statearr_37008_39653[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36982 === (5))){
var inst_36960 = cljs.core.async.close_BANG_(tc);
var inst_36961 = cljs.core.async.close_BANG_(fc);
var state_36980__$1 = (function (){var statearr_37010 = state_36980;
(statearr_37010[(8)] = inst_36960);

return statearr_37010;
})();
var statearr_37011_39654 = state_36980__$1;
(statearr_37011_39654[(2)] = inst_36961);

(statearr_37011_39654[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36982 === (14))){
var inst_36974 = (state_36980[(2)]);
var state_36980__$1 = state_36980;
var statearr_37013_39655 = state_36980__$1;
(statearr_37013_39655[(2)] = inst_36974);

(statearr_37013_39655[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36982 === (10))){
var state_36980__$1 = state_36980;
var statearr_37015_39656 = state_36980__$1;
(statearr_37015_39656[(2)] = fc);

(statearr_37015_39656[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36982 === (8))){
var inst_36969 = (state_36980[(2)]);
var state_36980__$1 = state_36980;
if(cljs.core.truth_(inst_36969)){
var statearr_37018_39657 = state_36980__$1;
(statearr_37018_39657[(1)] = (12));

} else {
var statearr_37020_39658 = state_36980__$1;
(statearr_37020_39658[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__35472__auto__ = null;
var cljs$core$async$state_machine__35472__auto____0 = (function (){
var statearr_37021 = [null,null,null,null,null,null,null,null,null];
(statearr_37021[(0)] = cljs$core$async$state_machine__35472__auto__);

(statearr_37021[(1)] = (1));

return statearr_37021;
});
var cljs$core$async$state_machine__35472__auto____1 = (function (state_36980){
while(true){
var ret_value__35473__auto__ = (function (){try{while(true){
var result__35474__auto__ = switch__35471__auto__(state_36980);
if(cljs.core.keyword_identical_QMARK_(result__35474__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35474__auto__;
}
break;
}
}catch (e37030){var ex__35475__auto__ = e37030;
var statearr_37031_39661 = state_36980;
(statearr_37031_39661[(2)] = ex__35475__auto__);


if(cljs.core.seq((state_36980[(4)]))){
var statearr_37032_39662 = state_36980;
(statearr_37032_39662[(1)] = cljs.core.first((state_36980[(4)])));

} else {
throw ex__35475__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35473__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39663 = state_36980;
state_36980 = G__39663;
continue;
} else {
return ret_value__35473__auto__;
}
break;
}
});
cljs$core$async$state_machine__35472__auto__ = function(state_36980){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35472__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35472__auto____1.call(this,state_36980);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35472__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35472__auto____0;
cljs$core$async$state_machine__35472__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35472__auto____1;
return cljs$core$async$state_machine__35472__auto__;
})()
})();
var state__35987__auto__ = (function (){var statearr_37043 = f__35986__auto__();
(statearr_37043[(6)] = c__35985__auto___39643);

return statearr_37043;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35987__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__35985__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35986__auto__ = (function (){var switch__35471__auto__ = (function (state_37099){
var state_val_37100 = (state_37099[(1)]);
if((state_val_37100 === (7))){
var inst_37095 = (state_37099[(2)]);
var state_37099__$1 = state_37099;
var statearr_37101_39669 = state_37099__$1;
(statearr_37101_39669[(2)] = inst_37095);

(statearr_37101_39669[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37100 === (1))){
var inst_37074 = init;
var inst_37075 = inst_37074;
var state_37099__$1 = (function (){var statearr_37102 = state_37099;
(statearr_37102[(7)] = inst_37075);

return statearr_37102;
})();
var statearr_37103_39670 = state_37099__$1;
(statearr_37103_39670[(2)] = null);

(statearr_37103_39670[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37100 === (4))){
var inst_37079 = (state_37099[(8)]);
var inst_37079__$1 = (state_37099[(2)]);
var inst_37080 = (inst_37079__$1 == null);
var state_37099__$1 = (function (){var statearr_37104 = state_37099;
(statearr_37104[(8)] = inst_37079__$1);

return statearr_37104;
})();
if(cljs.core.truth_(inst_37080)){
var statearr_37105_39673 = state_37099__$1;
(statearr_37105_39673[(1)] = (5));

} else {
var statearr_37106_39674 = state_37099__$1;
(statearr_37106_39674[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37100 === (6))){
var inst_37083 = (state_37099[(9)]);
var inst_37075 = (state_37099[(7)]);
var inst_37079 = (state_37099[(8)]);
var inst_37083__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_37075,inst_37079) : f.call(null,inst_37075,inst_37079));
var inst_37084 = cljs.core.reduced_QMARK_(inst_37083__$1);
var state_37099__$1 = (function (){var statearr_37111 = state_37099;
(statearr_37111[(9)] = inst_37083__$1);

return statearr_37111;
})();
if(inst_37084){
var statearr_37112_39675 = state_37099__$1;
(statearr_37112_39675[(1)] = (8));

} else {
var statearr_37113_39676 = state_37099__$1;
(statearr_37113_39676[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37100 === (3))){
var inst_37097 = (state_37099[(2)]);
var state_37099__$1 = state_37099;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37099__$1,inst_37097);
} else {
if((state_val_37100 === (2))){
var state_37099__$1 = state_37099;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37099__$1,(4),ch);
} else {
if((state_val_37100 === (9))){
var inst_37083 = (state_37099[(9)]);
var inst_37075 = inst_37083;
var state_37099__$1 = (function (){var statearr_37157 = state_37099;
(statearr_37157[(7)] = inst_37075);

return statearr_37157;
})();
var statearr_37161_39677 = state_37099__$1;
(statearr_37161_39677[(2)] = null);

(statearr_37161_39677[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37100 === (5))){
var inst_37075 = (state_37099[(7)]);
var state_37099__$1 = state_37099;
var statearr_37163_39678 = state_37099__$1;
(statearr_37163_39678[(2)] = inst_37075);

(statearr_37163_39678[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37100 === (10))){
var inst_37093 = (state_37099[(2)]);
var state_37099__$1 = state_37099;
var statearr_37166_39679 = state_37099__$1;
(statearr_37166_39679[(2)] = inst_37093);

(statearr_37166_39679[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37100 === (8))){
var inst_37083 = (state_37099[(9)]);
var inst_37089 = cljs.core.deref(inst_37083);
var state_37099__$1 = state_37099;
var statearr_37167_39680 = state_37099__$1;
(statearr_37167_39680[(2)] = inst_37089);

(statearr_37167_39680[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__35472__auto__ = null;
var cljs$core$async$reduce_$_state_machine__35472__auto____0 = (function (){
var statearr_37168 = [null,null,null,null,null,null,null,null,null,null];
(statearr_37168[(0)] = cljs$core$async$reduce_$_state_machine__35472__auto__);

(statearr_37168[(1)] = (1));

return statearr_37168;
});
var cljs$core$async$reduce_$_state_machine__35472__auto____1 = (function (state_37099){
while(true){
var ret_value__35473__auto__ = (function (){try{while(true){
var result__35474__auto__ = switch__35471__auto__(state_37099);
if(cljs.core.keyword_identical_QMARK_(result__35474__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35474__auto__;
}
break;
}
}catch (e37169){var ex__35475__auto__ = e37169;
var statearr_37170_39682 = state_37099;
(statearr_37170_39682[(2)] = ex__35475__auto__);


if(cljs.core.seq((state_37099[(4)]))){
var statearr_37171_39683 = state_37099;
(statearr_37171_39683[(1)] = cljs.core.first((state_37099[(4)])));

} else {
throw ex__35475__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35473__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39685 = state_37099;
state_37099 = G__39685;
continue;
} else {
return ret_value__35473__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__35472__auto__ = function(state_37099){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__35472__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__35472__auto____1.call(this,state_37099);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__35472__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__35472__auto____0;
cljs$core$async$reduce_$_state_machine__35472__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__35472__auto____1;
return cljs$core$async$reduce_$_state_machine__35472__auto__;
})()
})();
var state__35987__auto__ = (function (){var statearr_37180 = f__35986__auto__();
(statearr_37180[(6)] = c__35985__auto__);

return statearr_37180;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35987__auto__);
}));

return c__35985__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__35985__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35986__auto__ = (function (){var switch__35471__auto__ = (function (state_37196){
var state_val_37197 = (state_37196[(1)]);
if((state_val_37197 === (1))){
var inst_37190 = cljs.core.async.reduce(f__$1,init,ch);
var state_37196__$1 = state_37196;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37196__$1,(2),inst_37190);
} else {
if((state_val_37197 === (2))){
var inst_37192 = (state_37196[(2)]);
var inst_37194 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_37192) : f__$1.call(null,inst_37192));
var state_37196__$1 = state_37196;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37196__$1,inst_37194);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__35472__auto__ = null;
var cljs$core$async$transduce_$_state_machine__35472__auto____0 = (function (){
var statearr_37203 = [null,null,null,null,null,null,null];
(statearr_37203[(0)] = cljs$core$async$transduce_$_state_machine__35472__auto__);

(statearr_37203[(1)] = (1));

return statearr_37203;
});
var cljs$core$async$transduce_$_state_machine__35472__auto____1 = (function (state_37196){
while(true){
var ret_value__35473__auto__ = (function (){try{while(true){
var result__35474__auto__ = switch__35471__auto__(state_37196);
if(cljs.core.keyword_identical_QMARK_(result__35474__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35474__auto__;
}
break;
}
}catch (e37204){var ex__35475__auto__ = e37204;
var statearr_37206_39686 = state_37196;
(statearr_37206_39686[(2)] = ex__35475__auto__);


if(cljs.core.seq((state_37196[(4)]))){
var statearr_37212_39687 = state_37196;
(statearr_37212_39687[(1)] = cljs.core.first((state_37196[(4)])));

} else {
throw ex__35475__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35473__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39690 = state_37196;
state_37196 = G__39690;
continue;
} else {
return ret_value__35473__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__35472__auto__ = function(state_37196){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__35472__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__35472__auto____1.call(this,state_37196);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__35472__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__35472__auto____0;
cljs$core$async$transduce_$_state_machine__35472__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__35472__auto____1;
return cljs$core$async$transduce_$_state_machine__35472__auto__;
})()
})();
var state__35987__auto__ = (function (){var statearr_37215 = f__35986__auto__();
(statearr_37215[(6)] = c__35985__auto__);

return statearr_37215;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35987__auto__);
}));

return c__35985__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__37224 = arguments.length;
switch (G__37224) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__35985__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35986__auto__ = (function (){var switch__35471__auto__ = (function (state_37258){
var state_val_37259 = (state_37258[(1)]);
if((state_val_37259 === (7))){
var inst_37237 = (state_37258[(2)]);
var state_37258__$1 = state_37258;
var statearr_37264_39692 = state_37258__$1;
(statearr_37264_39692[(2)] = inst_37237);

(statearr_37264_39692[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37259 === (1))){
var inst_37231 = cljs.core.seq(coll);
var inst_37232 = inst_37231;
var state_37258__$1 = (function (){var statearr_37268 = state_37258;
(statearr_37268[(7)] = inst_37232);

return statearr_37268;
})();
var statearr_37269_39693 = state_37258__$1;
(statearr_37269_39693[(2)] = null);

(statearr_37269_39693[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37259 === (4))){
var inst_37232 = (state_37258[(7)]);
var inst_37235 = cljs.core.first(inst_37232);
var state_37258__$1 = state_37258;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37258__$1,(7),ch,inst_37235);
} else {
if((state_val_37259 === (13))){
var inst_37252 = (state_37258[(2)]);
var state_37258__$1 = state_37258;
var statearr_37273_39694 = state_37258__$1;
(statearr_37273_39694[(2)] = inst_37252);

(statearr_37273_39694[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37259 === (6))){
var inst_37240 = (state_37258[(2)]);
var state_37258__$1 = state_37258;
if(cljs.core.truth_(inst_37240)){
var statearr_37274_39695 = state_37258__$1;
(statearr_37274_39695[(1)] = (8));

} else {
var statearr_37275_39696 = state_37258__$1;
(statearr_37275_39696[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37259 === (3))){
var inst_37256 = (state_37258[(2)]);
var state_37258__$1 = state_37258;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37258__$1,inst_37256);
} else {
if((state_val_37259 === (12))){
var state_37258__$1 = state_37258;
var statearr_37285_39697 = state_37258__$1;
(statearr_37285_39697[(2)] = null);

(statearr_37285_39697[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37259 === (2))){
var inst_37232 = (state_37258[(7)]);
var state_37258__$1 = state_37258;
if(cljs.core.truth_(inst_37232)){
var statearr_37286_39698 = state_37258__$1;
(statearr_37286_39698[(1)] = (4));

} else {
var statearr_37287_39699 = state_37258__$1;
(statearr_37287_39699[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37259 === (11))){
var inst_37249 = cljs.core.async.close_BANG_(ch);
var state_37258__$1 = state_37258;
var statearr_37294_39700 = state_37258__$1;
(statearr_37294_39700[(2)] = inst_37249);

(statearr_37294_39700[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37259 === (9))){
var state_37258__$1 = state_37258;
if(cljs.core.truth_(close_QMARK_)){
var statearr_37295_39701 = state_37258__$1;
(statearr_37295_39701[(1)] = (11));

} else {
var statearr_37296_39702 = state_37258__$1;
(statearr_37296_39702[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37259 === (5))){
var inst_37232 = (state_37258[(7)]);
var state_37258__$1 = state_37258;
var statearr_37297_39703 = state_37258__$1;
(statearr_37297_39703[(2)] = inst_37232);

(statearr_37297_39703[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37259 === (10))){
var inst_37254 = (state_37258[(2)]);
var state_37258__$1 = state_37258;
var statearr_37298_39704 = state_37258__$1;
(statearr_37298_39704[(2)] = inst_37254);

(statearr_37298_39704[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37259 === (8))){
var inst_37232 = (state_37258[(7)]);
var inst_37244 = cljs.core.next(inst_37232);
var inst_37232__$1 = inst_37244;
var state_37258__$1 = (function (){var statearr_37299 = state_37258;
(statearr_37299[(7)] = inst_37232__$1);

return statearr_37299;
})();
var statearr_37300_39705 = state_37258__$1;
(statearr_37300_39705[(2)] = null);

(statearr_37300_39705[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__35472__auto__ = null;
var cljs$core$async$state_machine__35472__auto____0 = (function (){
var statearr_37361 = [null,null,null,null,null,null,null,null];
(statearr_37361[(0)] = cljs$core$async$state_machine__35472__auto__);

(statearr_37361[(1)] = (1));

return statearr_37361;
});
var cljs$core$async$state_machine__35472__auto____1 = (function (state_37258){
while(true){
var ret_value__35473__auto__ = (function (){try{while(true){
var result__35474__auto__ = switch__35471__auto__(state_37258);
if(cljs.core.keyword_identical_QMARK_(result__35474__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35474__auto__;
}
break;
}
}catch (e37365){var ex__35475__auto__ = e37365;
var statearr_37366_39706 = state_37258;
(statearr_37366_39706[(2)] = ex__35475__auto__);


if(cljs.core.seq((state_37258[(4)]))){
var statearr_37367_39707 = state_37258;
(statearr_37367_39707[(1)] = cljs.core.first((state_37258[(4)])));

} else {
throw ex__35475__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35473__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39708 = state_37258;
state_37258 = G__39708;
continue;
} else {
return ret_value__35473__auto__;
}
break;
}
});
cljs$core$async$state_machine__35472__auto__ = function(state_37258){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35472__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35472__auto____1.call(this,state_37258);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35472__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35472__auto____0;
cljs$core$async$state_machine__35472__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35472__auto____1;
return cljs$core$async$state_machine__35472__auto__;
})()
})();
var state__35987__auto__ = (function (){var statearr_37370 = f__35986__auto__();
(statearr_37370[(6)] = c__35985__auto__);

return statearr_37370;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35987__auto__);
}));

return c__35985__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__37388 = arguments.length;
switch (G__37388) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_39711 = (function (_){
var x__5390__auto__ = (((_ == null))?null:_);
var m__5391__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5391__auto__.call(null,_));
} else {
var m__5389__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5389__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_39711(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_39712 = (function (m,ch,close_QMARK_){
var x__5390__auto__ = (((m == null))?null:m);
var m__5391__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5391__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__5389__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5389__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_39712(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_39713 = (function (m,ch){
var x__5390__auto__ = (((m == null))?null:m);
var m__5391__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5391__auto__.call(null,m,ch));
} else {
var m__5389__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5389__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_39713(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_39714 = (function (m){
var x__5390__auto__ = (((m == null))?null:m);
var m__5391__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5391__auto__.call(null,m));
} else {
var m__5389__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5389__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_39714(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async37441 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37441 = (function (ch,cs,meta37442){
this.ch = ch;
this.cs = cs;
this.meta37442 = meta37442;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async37441.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37443,meta37442__$1){
var self__ = this;
var _37443__$1 = this;
return (new cljs.core.async.t_cljs$core$async37441(self__.ch,self__.cs,meta37442__$1));
}));

(cljs.core.async.t_cljs$core$async37441.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37443){
var self__ = this;
var _37443__$1 = this;
return self__.meta37442;
}));

(cljs.core.async.t_cljs$core$async37441.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37441.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async37441.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37441.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async37441.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async37441.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async37441.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta37442","meta37442",1637113735,null)], null);
}));

(cljs.core.async.t_cljs$core$async37441.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async37441.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37441");

(cljs.core.async.t_cljs$core$async37441.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"cljs.core.async/t_cljs$core$async37441");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async37441.
 */
cljs.core.async.__GT_t_cljs$core$async37441 = (function cljs$core$async$mult_$___GT_t_cljs$core$async37441(ch__$1,cs__$1,meta37442){
return (new cljs.core.async.t_cljs$core$async37441(ch__$1,cs__$1,meta37442));
});

}

return (new cljs.core.async.t_cljs$core$async37441(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__35985__auto___39718 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35986__auto__ = (function (){var switch__35471__auto__ = (function (state_37596){
var state_val_37597 = (state_37596[(1)]);
if((state_val_37597 === (7))){
var inst_37591 = (state_37596[(2)]);
var state_37596__$1 = state_37596;
var statearr_37602_39719 = state_37596__$1;
(statearr_37602_39719[(2)] = inst_37591);

(statearr_37602_39719[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37597 === (20))){
var inst_37485 = (state_37596[(7)]);
var inst_37497 = cljs.core.first(inst_37485);
var inst_37498 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_37497,(0),null);
var inst_37499 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_37497,(1),null);
var state_37596__$1 = (function (){var statearr_37609 = state_37596;
(statearr_37609[(8)] = inst_37498);

return statearr_37609;
})();
if(cljs.core.truth_(inst_37499)){
var statearr_37610_39720 = state_37596__$1;
(statearr_37610_39720[(1)] = (22));

} else {
var statearr_37611_39721 = state_37596__$1;
(statearr_37611_39721[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37597 === (27))){
var inst_37527 = (state_37596[(9)]);
var inst_37535 = (state_37596[(10)]);
var inst_37454 = (state_37596[(11)]);
var inst_37529 = (state_37596[(12)]);
var inst_37535__$1 = cljs.core._nth(inst_37527,inst_37529);
var inst_37537 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_37535__$1,inst_37454,done);
var state_37596__$1 = (function (){var statearr_37614 = state_37596;
(statearr_37614[(10)] = inst_37535__$1);

return statearr_37614;
})();
if(cljs.core.truth_(inst_37537)){
var statearr_37615_39722 = state_37596__$1;
(statearr_37615_39722[(1)] = (30));

} else {
var statearr_37616_39723 = state_37596__$1;
(statearr_37616_39723[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37597 === (1))){
var state_37596__$1 = state_37596;
var statearr_37617_39724 = state_37596__$1;
(statearr_37617_39724[(2)] = null);

(statearr_37617_39724[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37597 === (24))){
var inst_37485 = (state_37596[(7)]);
var inst_37504 = (state_37596[(2)]);
var inst_37505 = cljs.core.next(inst_37485);
var inst_37463 = inst_37505;
var inst_37464 = null;
var inst_37465 = (0);
var inst_37466 = (0);
var state_37596__$1 = (function (){var statearr_37619 = state_37596;
(statearr_37619[(13)] = inst_37463);

(statearr_37619[(14)] = inst_37465);

(statearr_37619[(15)] = inst_37466);

(statearr_37619[(16)] = inst_37504);

(statearr_37619[(17)] = inst_37464);

return statearr_37619;
})();
var statearr_37620_39725 = state_37596__$1;
(statearr_37620_39725[(2)] = null);

(statearr_37620_39725[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37597 === (39))){
var state_37596__$1 = state_37596;
var statearr_37629_39726 = state_37596__$1;
(statearr_37629_39726[(2)] = null);

(statearr_37629_39726[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37597 === (4))){
var inst_37454 = (state_37596[(11)]);
var inst_37454__$1 = (state_37596[(2)]);
var inst_37455 = (inst_37454__$1 == null);
var state_37596__$1 = (function (){var statearr_37630 = state_37596;
(statearr_37630[(11)] = inst_37454__$1);

return statearr_37630;
})();
if(cljs.core.truth_(inst_37455)){
var statearr_37631_39727 = state_37596__$1;
(statearr_37631_39727[(1)] = (5));

} else {
var statearr_37632_39728 = state_37596__$1;
(statearr_37632_39728[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37597 === (15))){
var inst_37463 = (state_37596[(13)]);
var inst_37465 = (state_37596[(14)]);
var inst_37466 = (state_37596[(15)]);
var inst_37464 = (state_37596[(17)]);
var inst_37481 = (state_37596[(2)]);
var inst_37482 = (inst_37466 + (1));
var tmp37623 = inst_37463;
var tmp37624 = inst_37465;
var tmp37625 = inst_37464;
var inst_37463__$1 = tmp37623;
var inst_37464__$1 = tmp37625;
var inst_37465__$1 = tmp37624;
var inst_37466__$1 = inst_37482;
var state_37596__$1 = (function (){var statearr_37633 = state_37596;
(statearr_37633[(13)] = inst_37463__$1);

(statearr_37633[(14)] = inst_37465__$1);

(statearr_37633[(15)] = inst_37466__$1);

(statearr_37633[(18)] = inst_37481);

(statearr_37633[(17)] = inst_37464__$1);

return statearr_37633;
})();
var statearr_37635_39729 = state_37596__$1;
(statearr_37635_39729[(2)] = null);

(statearr_37635_39729[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37597 === (21))){
var inst_37508 = (state_37596[(2)]);
var state_37596__$1 = state_37596;
var statearr_37641_39730 = state_37596__$1;
(statearr_37641_39730[(2)] = inst_37508);

(statearr_37641_39730[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37597 === (31))){
var inst_37535 = (state_37596[(10)]);
var inst_37540 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_37535);
var state_37596__$1 = state_37596;
var statearr_37648_39731 = state_37596__$1;
(statearr_37648_39731[(2)] = inst_37540);

(statearr_37648_39731[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37597 === (32))){
var inst_37527 = (state_37596[(9)]);
var inst_37528 = (state_37596[(19)]);
var inst_37529 = (state_37596[(12)]);
var inst_37526 = (state_37596[(20)]);
var inst_37542 = (state_37596[(2)]);
var inst_37546 = (inst_37529 + (1));
var tmp37638 = inst_37527;
var tmp37639 = inst_37528;
var tmp37640 = inst_37526;
var inst_37526__$1 = tmp37640;
var inst_37527__$1 = tmp37638;
var inst_37528__$1 = tmp37639;
var inst_37529__$1 = inst_37546;
var state_37596__$1 = (function (){var statearr_37650 = state_37596;
(statearr_37650[(9)] = inst_37527__$1);

(statearr_37650[(21)] = inst_37542);

(statearr_37650[(19)] = inst_37528__$1);

(statearr_37650[(12)] = inst_37529__$1);

(statearr_37650[(20)] = inst_37526__$1);

return statearr_37650;
})();
var statearr_37651_39732 = state_37596__$1;
(statearr_37651_39732[(2)] = null);

(statearr_37651_39732[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37597 === (40))){
var inst_37564 = (state_37596[(22)]);
var inst_37568 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_37564);
var state_37596__$1 = state_37596;
var statearr_37656_39733 = state_37596__$1;
(statearr_37656_39733[(2)] = inst_37568);

(statearr_37656_39733[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37597 === (33))){
var inst_37555 = (state_37596[(23)]);
var inst_37557 = cljs.core.chunked_seq_QMARK_(inst_37555);
var state_37596__$1 = state_37596;
if(inst_37557){
var statearr_37658_39734 = state_37596__$1;
(statearr_37658_39734[(1)] = (36));

} else {
var statearr_37659_39735 = state_37596__$1;
(statearr_37659_39735[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37597 === (13))){
var inst_37475 = (state_37596[(24)]);
var inst_37478 = cljs.core.async.close_BANG_(inst_37475);
var state_37596__$1 = state_37596;
var statearr_37665_39736 = state_37596__$1;
(statearr_37665_39736[(2)] = inst_37478);

(statearr_37665_39736[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37597 === (22))){
var inst_37498 = (state_37596[(8)]);
var inst_37501 = cljs.core.async.close_BANG_(inst_37498);
var state_37596__$1 = state_37596;
var statearr_37696_39737 = state_37596__$1;
(statearr_37696_39737[(2)] = inst_37501);

(statearr_37696_39737[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37597 === (36))){
var inst_37555 = (state_37596[(23)]);
var inst_37559 = cljs.core.chunk_first(inst_37555);
var inst_37560 = cljs.core.chunk_rest(inst_37555);
var inst_37561 = cljs.core.count(inst_37559);
var inst_37526 = inst_37560;
var inst_37527 = inst_37559;
var inst_37528 = inst_37561;
var inst_37529 = (0);
var state_37596__$1 = (function (){var statearr_37699 = state_37596;
(statearr_37699[(9)] = inst_37527);

(statearr_37699[(19)] = inst_37528);

(statearr_37699[(12)] = inst_37529);

(statearr_37699[(20)] = inst_37526);

return statearr_37699;
})();
var statearr_37702_39743 = state_37596__$1;
(statearr_37702_39743[(2)] = null);

(statearr_37702_39743[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37597 === (41))){
var inst_37555 = (state_37596[(23)]);
var inst_37570 = (state_37596[(2)]);
var inst_37571 = cljs.core.next(inst_37555);
var inst_37526 = inst_37571;
var inst_37527 = null;
var inst_37528 = (0);
var inst_37529 = (0);
var state_37596__$1 = (function (){var statearr_37707 = state_37596;
(statearr_37707[(9)] = inst_37527);

(statearr_37707[(25)] = inst_37570);

(statearr_37707[(19)] = inst_37528);

(statearr_37707[(12)] = inst_37529);

(statearr_37707[(20)] = inst_37526);

return statearr_37707;
})();
var statearr_37708_39745 = state_37596__$1;
(statearr_37708_39745[(2)] = null);

(statearr_37708_39745[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37597 === (43))){
var state_37596__$1 = state_37596;
var statearr_37709_39746 = state_37596__$1;
(statearr_37709_39746[(2)] = null);

(statearr_37709_39746[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37597 === (29))){
var inst_37579 = (state_37596[(2)]);
var state_37596__$1 = state_37596;
var statearr_37712_39747 = state_37596__$1;
(statearr_37712_39747[(2)] = inst_37579);

(statearr_37712_39747[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37597 === (44))){
var inst_37588 = (state_37596[(2)]);
var state_37596__$1 = (function (){var statearr_37715 = state_37596;
(statearr_37715[(26)] = inst_37588);

return statearr_37715;
})();
var statearr_37716_39748 = state_37596__$1;
(statearr_37716_39748[(2)] = null);

(statearr_37716_39748[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37597 === (6))){
var inst_37518 = (state_37596[(27)]);
var inst_37517 = cljs.core.deref(cs);
var inst_37518__$1 = cljs.core.keys(inst_37517);
var inst_37519 = cljs.core.count(inst_37518__$1);
var inst_37520 = cljs.core.reset_BANG_(dctr,inst_37519);
var inst_37525 = cljs.core.seq(inst_37518__$1);
var inst_37526 = inst_37525;
var inst_37527 = null;
var inst_37528 = (0);
var inst_37529 = (0);
var state_37596__$1 = (function (){var statearr_37717 = state_37596;
(statearr_37717[(9)] = inst_37527);

(statearr_37717[(27)] = inst_37518__$1);

(statearr_37717[(28)] = inst_37520);

(statearr_37717[(19)] = inst_37528);

(statearr_37717[(12)] = inst_37529);

(statearr_37717[(20)] = inst_37526);

return statearr_37717;
})();
var statearr_37718_39749 = state_37596__$1;
(statearr_37718_39749[(2)] = null);

(statearr_37718_39749[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37597 === (28))){
var inst_37555 = (state_37596[(23)]);
var inst_37526 = (state_37596[(20)]);
var inst_37555__$1 = cljs.core.seq(inst_37526);
var state_37596__$1 = (function (){var statearr_37720 = state_37596;
(statearr_37720[(23)] = inst_37555__$1);

return statearr_37720;
})();
if(inst_37555__$1){
var statearr_37729_39750 = state_37596__$1;
(statearr_37729_39750[(1)] = (33));

} else {
var statearr_37731_39751 = state_37596__$1;
(statearr_37731_39751[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37597 === (25))){
var inst_37528 = (state_37596[(19)]);
var inst_37529 = (state_37596[(12)]);
var inst_37532 = (inst_37529 < inst_37528);
var inst_37533 = inst_37532;
var state_37596__$1 = state_37596;
if(cljs.core.truth_(inst_37533)){
var statearr_37733_39752 = state_37596__$1;
(statearr_37733_39752[(1)] = (27));

} else {
var statearr_37734_39753 = state_37596__$1;
(statearr_37734_39753[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37597 === (34))){
var state_37596__$1 = state_37596;
var statearr_37736_39754 = state_37596__$1;
(statearr_37736_39754[(2)] = null);

(statearr_37736_39754[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37597 === (17))){
var state_37596__$1 = state_37596;
var statearr_37737_39755 = state_37596__$1;
(statearr_37737_39755[(2)] = null);

(statearr_37737_39755[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37597 === (3))){
var inst_37593 = (state_37596[(2)]);
var state_37596__$1 = state_37596;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37596__$1,inst_37593);
} else {
if((state_val_37597 === (12))){
var inst_37513 = (state_37596[(2)]);
var state_37596__$1 = state_37596;
var statearr_37749_39756 = state_37596__$1;
(statearr_37749_39756[(2)] = inst_37513);

(statearr_37749_39756[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37597 === (2))){
var state_37596__$1 = state_37596;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37596__$1,(4),ch);
} else {
if((state_val_37597 === (23))){
var state_37596__$1 = state_37596;
var statearr_37752_39757 = state_37596__$1;
(statearr_37752_39757[(2)] = null);

(statearr_37752_39757[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37597 === (35))){
var inst_37577 = (state_37596[(2)]);
var state_37596__$1 = state_37596;
var statearr_37754_39758 = state_37596__$1;
(statearr_37754_39758[(2)] = inst_37577);

(statearr_37754_39758[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37597 === (19))){
var inst_37485 = (state_37596[(7)]);
var inst_37489 = cljs.core.chunk_first(inst_37485);
var inst_37490 = cljs.core.chunk_rest(inst_37485);
var inst_37491 = cljs.core.count(inst_37489);
var inst_37463 = inst_37490;
var inst_37464 = inst_37489;
var inst_37465 = inst_37491;
var inst_37466 = (0);
var state_37596__$1 = (function (){var statearr_37756 = state_37596;
(statearr_37756[(13)] = inst_37463);

(statearr_37756[(14)] = inst_37465);

(statearr_37756[(15)] = inst_37466);

(statearr_37756[(17)] = inst_37464);

return statearr_37756;
})();
var statearr_37757_39759 = state_37596__$1;
(statearr_37757_39759[(2)] = null);

(statearr_37757_39759[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37597 === (11))){
var inst_37463 = (state_37596[(13)]);
var inst_37485 = (state_37596[(7)]);
var inst_37485__$1 = cljs.core.seq(inst_37463);
var state_37596__$1 = (function (){var statearr_37759 = state_37596;
(statearr_37759[(7)] = inst_37485__$1);

return statearr_37759;
})();
if(inst_37485__$1){
var statearr_37768_39760 = state_37596__$1;
(statearr_37768_39760[(1)] = (16));

} else {
var statearr_37769_39761 = state_37596__$1;
(statearr_37769_39761[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37597 === (9))){
var inst_37515 = (state_37596[(2)]);
var state_37596__$1 = state_37596;
var statearr_37779_39762 = state_37596__$1;
(statearr_37779_39762[(2)] = inst_37515);

(statearr_37779_39762[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37597 === (5))){
var inst_37461 = cljs.core.deref(cs);
var inst_37462 = cljs.core.seq(inst_37461);
var inst_37463 = inst_37462;
var inst_37464 = null;
var inst_37465 = (0);
var inst_37466 = (0);
var state_37596__$1 = (function (){var statearr_37780 = state_37596;
(statearr_37780[(13)] = inst_37463);

(statearr_37780[(14)] = inst_37465);

(statearr_37780[(15)] = inst_37466);

(statearr_37780[(17)] = inst_37464);

return statearr_37780;
})();
var statearr_37781_39763 = state_37596__$1;
(statearr_37781_39763[(2)] = null);

(statearr_37781_39763[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37597 === (14))){
var state_37596__$1 = state_37596;
var statearr_37782_39764 = state_37596__$1;
(statearr_37782_39764[(2)] = null);

(statearr_37782_39764[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37597 === (45))){
var inst_37585 = (state_37596[(2)]);
var state_37596__$1 = state_37596;
var statearr_37783_39765 = state_37596__$1;
(statearr_37783_39765[(2)] = inst_37585);

(statearr_37783_39765[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37597 === (26))){
var inst_37518 = (state_37596[(27)]);
var inst_37581 = (state_37596[(2)]);
var inst_37582 = cljs.core.seq(inst_37518);
var state_37596__$1 = (function (){var statearr_37786 = state_37596;
(statearr_37786[(29)] = inst_37581);

return statearr_37786;
})();
if(inst_37582){
var statearr_37788_39766 = state_37596__$1;
(statearr_37788_39766[(1)] = (42));

} else {
var statearr_37789_39767 = state_37596__$1;
(statearr_37789_39767[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37597 === (16))){
var inst_37485 = (state_37596[(7)]);
var inst_37487 = cljs.core.chunked_seq_QMARK_(inst_37485);
var state_37596__$1 = state_37596;
if(inst_37487){
var statearr_37791_39768 = state_37596__$1;
(statearr_37791_39768[(1)] = (19));

} else {
var statearr_37792_39769 = state_37596__$1;
(statearr_37792_39769[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37597 === (38))){
var inst_37574 = (state_37596[(2)]);
var state_37596__$1 = state_37596;
var statearr_37793_39770 = state_37596__$1;
(statearr_37793_39770[(2)] = inst_37574);

(statearr_37793_39770[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37597 === (30))){
var state_37596__$1 = state_37596;
var statearr_37794_39771 = state_37596__$1;
(statearr_37794_39771[(2)] = null);

(statearr_37794_39771[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37597 === (10))){
var inst_37466 = (state_37596[(15)]);
var inst_37464 = (state_37596[(17)]);
var inst_37474 = cljs.core._nth(inst_37464,inst_37466);
var inst_37475 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_37474,(0),null);
var inst_37476 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_37474,(1),null);
var state_37596__$1 = (function (){var statearr_37814 = state_37596;
(statearr_37814[(24)] = inst_37475);

return statearr_37814;
})();
if(cljs.core.truth_(inst_37476)){
var statearr_37815_39772 = state_37596__$1;
(statearr_37815_39772[(1)] = (13));

} else {
var statearr_37819_39773 = state_37596__$1;
(statearr_37819_39773[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37597 === (18))){
var inst_37511 = (state_37596[(2)]);
var state_37596__$1 = state_37596;
var statearr_37821_39775 = state_37596__$1;
(statearr_37821_39775[(2)] = inst_37511);

(statearr_37821_39775[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37597 === (42))){
var state_37596__$1 = state_37596;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37596__$1,(45),dchan);
} else {
if((state_val_37597 === (37))){
var inst_37564 = (state_37596[(22)]);
var inst_37555 = (state_37596[(23)]);
var inst_37454 = (state_37596[(11)]);
var inst_37564__$1 = cljs.core.first(inst_37555);
var inst_37565 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_37564__$1,inst_37454,done);
var state_37596__$1 = (function (){var statearr_37822 = state_37596;
(statearr_37822[(22)] = inst_37564__$1);

return statearr_37822;
})();
if(cljs.core.truth_(inst_37565)){
var statearr_37824_39776 = state_37596__$1;
(statearr_37824_39776[(1)] = (39));

} else {
var statearr_37825_39777 = state_37596__$1;
(statearr_37825_39777[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37597 === (8))){
var inst_37465 = (state_37596[(14)]);
var inst_37466 = (state_37596[(15)]);
var inst_37468 = (inst_37466 < inst_37465);
var inst_37469 = inst_37468;
var state_37596__$1 = state_37596;
if(cljs.core.truth_(inst_37469)){
var statearr_37830_39778 = state_37596__$1;
(statearr_37830_39778[(1)] = (10));

} else {
var statearr_37831_39779 = state_37596__$1;
(statearr_37831_39779[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__35472__auto__ = null;
var cljs$core$async$mult_$_state_machine__35472__auto____0 = (function (){
var statearr_37849 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37849[(0)] = cljs$core$async$mult_$_state_machine__35472__auto__);

(statearr_37849[(1)] = (1));

return statearr_37849;
});
var cljs$core$async$mult_$_state_machine__35472__auto____1 = (function (state_37596){
while(true){
var ret_value__35473__auto__ = (function (){try{while(true){
var result__35474__auto__ = switch__35471__auto__(state_37596);
if(cljs.core.keyword_identical_QMARK_(result__35474__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35474__auto__;
}
break;
}
}catch (e37854){var ex__35475__auto__ = e37854;
var statearr_37855_39801 = state_37596;
(statearr_37855_39801[(2)] = ex__35475__auto__);


if(cljs.core.seq((state_37596[(4)]))){
var statearr_37856_39802 = state_37596;
(statearr_37856_39802[(1)] = cljs.core.first((state_37596[(4)])));

} else {
throw ex__35475__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35473__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39803 = state_37596;
state_37596 = G__39803;
continue;
} else {
return ret_value__35473__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__35472__auto__ = function(state_37596){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__35472__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__35472__auto____1.call(this,state_37596);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__35472__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__35472__auto____0;
cljs$core$async$mult_$_state_machine__35472__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__35472__auto____1;
return cljs$core$async$mult_$_state_machine__35472__auto__;
})()
})();
var state__35987__auto__ = (function (){var statearr_37859 = f__35986__auto__();
(statearr_37859[(6)] = c__35985__auto___39718);

return statearr_37859;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35987__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__37861 = arguments.length;
switch (G__37861) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_39826 = (function (m,ch){
var x__5390__auto__ = (((m == null))?null:m);
var m__5391__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5391__auto__.call(null,m,ch));
} else {
var m__5389__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5389__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_39826(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_39829 = (function (m,ch){
var x__5390__auto__ = (((m == null))?null:m);
var m__5391__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5391__auto__.call(null,m,ch));
} else {
var m__5389__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5389__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_39829(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_39830 = (function (m){
var x__5390__auto__ = (((m == null))?null:m);
var m__5391__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5391__auto__.call(null,m));
} else {
var m__5389__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5389__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_39830(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_39831 = (function (m,state_map){
var x__5390__auto__ = (((m == null))?null:m);
var m__5391__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5391__auto__.call(null,m,state_map));
} else {
var m__5389__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5389__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_39831(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_39833 = (function (m,mode){
var x__5390__auto__ = (((m == null))?null:m);
var m__5391__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5391__auto__.call(null,m,mode));
} else {
var m__5389__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5389__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_39833(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5772__auto__ = [];
var len__5766__auto___39838 = arguments.length;
var i__5767__auto___39839 = (0);
while(true){
if((i__5767__auto___39839 < len__5766__auto___39838)){
args__5772__auto__.push((arguments[i__5767__auto___39839]));

var G__39840 = (i__5767__auto___39839 + (1));
i__5767__auto___39839 = G__39840;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((3) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5773__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__37901){
var map__37902 = p__37901;
var map__37902__$1 = cljs.core.__destructure_map(map__37902);
var opts = map__37902__$1;
var statearr_37903_39841 = state;
(statearr_37903_39841[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_37904_39842 = state;
(statearr_37904_39842[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_37905_39843 = state;
(statearr_37905_39843[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq37897){
var G__37898 = cljs.core.first(seq37897);
var seq37897__$1 = cljs.core.next(seq37897);
var G__37899 = cljs.core.first(seq37897__$1);
var seq37897__$2 = cljs.core.next(seq37897__$1);
var G__37900 = cljs.core.first(seq37897__$2);
var seq37897__$3 = cljs.core.next(seq37897__$2);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37898,G__37899,G__37900,seq37897__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async37915 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37915 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta37916){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta37916 = meta37916;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async37915.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37917,meta37916__$1){
var self__ = this;
var _37917__$1 = this;
return (new cljs.core.async.t_cljs$core$async37915(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta37916__$1));
}));

(cljs.core.async.t_cljs$core$async37915.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37917){
var self__ = this;
var _37917__$1 = this;
return self__.meta37916;
}));

(cljs.core.async.t_cljs$core$async37915.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37915.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async37915.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37915.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async37915.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async37915.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async37915.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async37915.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async37915.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta37916","meta37916",-343291631,null)], null);
}));

(cljs.core.async.t_cljs$core$async37915.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async37915.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37915");

(cljs.core.async.t_cljs$core$async37915.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"cljs.core.async/t_cljs$core$async37915");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async37915.
 */
cljs.core.async.__GT_t_cljs$core$async37915 = (function cljs$core$async$mix_$___GT_t_cljs$core$async37915(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta37916){
return (new cljs.core.async.t_cljs$core$async37915(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta37916));
});

}

return (new cljs.core.async.t_cljs$core$async37915(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__35985__auto___39897 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35986__auto__ = (function (){var switch__35471__auto__ = (function (state_38053){
var state_val_38054 = (state_38053[(1)]);
if((state_val_38054 === (7))){
var inst_37990 = (state_38053[(2)]);
var state_38053__$1 = state_38053;
if(cljs.core.truth_(inst_37990)){
var statearr_38056_39898 = state_38053__$1;
(statearr_38056_39898[(1)] = (8));

} else {
var statearr_38057_39899 = state_38053__$1;
(statearr_38057_39899[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38054 === (20))){
var inst_37981 = (state_38053[(7)]);
var state_38053__$1 = state_38053;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38053__$1,(23),out,inst_37981);
} else {
if((state_val_38054 === (1))){
var inst_37964 = calc_state();
var inst_37965 = cljs.core.__destructure_map(inst_37964);
var inst_37966 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_37965,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_37967 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_37965,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_37968 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_37965,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_37969 = inst_37964;
var state_38053__$1 = (function (){var statearr_38061 = state_38053;
(statearr_38061[(8)] = inst_37968);

(statearr_38061[(9)] = inst_37967);

(statearr_38061[(10)] = inst_37966);

(statearr_38061[(11)] = inst_37969);

return statearr_38061;
})();
var statearr_38062_39900 = state_38053__$1;
(statearr_38062_39900[(2)] = null);

(statearr_38062_39900[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38054 === (24))){
var inst_37972 = (state_38053[(12)]);
var inst_37969 = inst_37972;
var state_38053__$1 = (function (){var statearr_38063 = state_38053;
(statearr_38063[(11)] = inst_37969);

return statearr_38063;
})();
var statearr_38064_39901 = state_38053__$1;
(statearr_38064_39901[(2)] = null);

(statearr_38064_39901[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38054 === (4))){
var inst_37983 = (state_38053[(13)]);
var inst_37981 = (state_38053[(7)]);
var inst_37980 = (state_38053[(2)]);
var inst_37981__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_37980,(0),null);
var inst_37982 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_37980,(1),null);
var inst_37983__$1 = (inst_37981__$1 == null);
var state_38053__$1 = (function (){var statearr_38065 = state_38053;
(statearr_38065[(13)] = inst_37983__$1);

(statearr_38065[(7)] = inst_37981__$1);

(statearr_38065[(14)] = inst_37982);

return statearr_38065;
})();
if(cljs.core.truth_(inst_37983__$1)){
var statearr_38066_39902 = state_38053__$1;
(statearr_38066_39902[(1)] = (5));

} else {
var statearr_38068_39903 = state_38053__$1;
(statearr_38068_39903[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38054 === (15))){
var inst_38008 = (state_38053[(15)]);
var inst_37973 = (state_38053[(16)]);
var inst_38008__$1 = cljs.core.empty_QMARK_(inst_37973);
var state_38053__$1 = (function (){var statearr_38072 = state_38053;
(statearr_38072[(15)] = inst_38008__$1);

return statearr_38072;
})();
if(inst_38008__$1){
var statearr_38073_39905 = state_38053__$1;
(statearr_38073_39905[(1)] = (17));

} else {
var statearr_38074_39906 = state_38053__$1;
(statearr_38074_39906[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38054 === (21))){
var inst_37972 = (state_38053[(12)]);
var inst_37969 = inst_37972;
var state_38053__$1 = (function (){var statearr_38075 = state_38053;
(statearr_38075[(11)] = inst_37969);

return statearr_38075;
})();
var statearr_38077_39907 = state_38053__$1;
(statearr_38077_39907[(2)] = null);

(statearr_38077_39907[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38054 === (13))){
var inst_37997 = (state_38053[(2)]);
var inst_37998 = calc_state();
var inst_37969 = inst_37998;
var state_38053__$1 = (function (){var statearr_38078 = state_38053;
(statearr_38078[(17)] = inst_37997);

(statearr_38078[(11)] = inst_37969);

return statearr_38078;
})();
var statearr_38079_39909 = state_38053__$1;
(statearr_38079_39909[(2)] = null);

(statearr_38079_39909[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38054 === (22))){
var inst_38047 = (state_38053[(2)]);
var state_38053__$1 = state_38053;
var statearr_38080_39910 = state_38053__$1;
(statearr_38080_39910[(2)] = inst_38047);

(statearr_38080_39910[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38054 === (6))){
var inst_37982 = (state_38053[(14)]);
var inst_37988 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_37982,change);
var state_38053__$1 = state_38053;
var statearr_38096_39911 = state_38053__$1;
(statearr_38096_39911[(2)] = inst_37988);

(statearr_38096_39911[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38054 === (25))){
var state_38053__$1 = state_38053;
var statearr_38100_39912 = state_38053__$1;
(statearr_38100_39912[(2)] = null);

(statearr_38100_39912[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38054 === (17))){
var inst_37974 = (state_38053[(18)]);
var inst_37982 = (state_38053[(14)]);
var inst_38028 = (inst_37974.cljs$core$IFn$_invoke$arity$1 ? inst_37974.cljs$core$IFn$_invoke$arity$1(inst_37982) : inst_37974.call(null,inst_37982));
var inst_38029 = cljs.core.not(inst_38028);
var state_38053__$1 = state_38053;
var statearr_38101_39913 = state_38053__$1;
(statearr_38101_39913[(2)] = inst_38029);

(statearr_38101_39913[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38054 === (3))){
var inst_38051 = (state_38053[(2)]);
var state_38053__$1 = state_38053;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38053__$1,inst_38051);
} else {
if((state_val_38054 === (12))){
var state_38053__$1 = state_38053;
var statearr_38102_39914 = state_38053__$1;
(statearr_38102_39914[(2)] = null);

(statearr_38102_39914[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38054 === (2))){
var inst_37969 = (state_38053[(11)]);
var inst_37972 = (state_38053[(12)]);
var inst_37972__$1 = cljs.core.__destructure_map(inst_37969);
var inst_37973 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_37972__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_37974 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_37972__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_37975 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_37972__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_38053__$1 = (function (){var statearr_38104 = state_38053;
(statearr_38104[(18)] = inst_37974);

(statearr_38104[(16)] = inst_37973);

(statearr_38104[(12)] = inst_37972__$1);

return statearr_38104;
})();
return cljs.core.async.ioc_alts_BANG_(state_38053__$1,(4),inst_37975);
} else {
if((state_val_38054 === (23))){
var inst_38037 = (state_38053[(2)]);
var state_38053__$1 = state_38053;
if(cljs.core.truth_(inst_38037)){
var statearr_38107_39915 = state_38053__$1;
(statearr_38107_39915[(1)] = (24));

} else {
var statearr_38108_39917 = state_38053__$1;
(statearr_38108_39917[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38054 === (19))){
var inst_38032 = (state_38053[(2)]);
var state_38053__$1 = state_38053;
var statearr_38109_39919 = state_38053__$1;
(statearr_38109_39919[(2)] = inst_38032);

(statearr_38109_39919[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38054 === (11))){
var inst_37982 = (state_38053[(14)]);
var inst_37994 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_37982);
var state_38053__$1 = state_38053;
var statearr_38110_39920 = state_38053__$1;
(statearr_38110_39920[(2)] = inst_37994);

(statearr_38110_39920[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38054 === (9))){
var inst_38001 = (state_38053[(19)]);
var inst_37973 = (state_38053[(16)]);
var inst_37982 = (state_38053[(14)]);
var inst_38001__$1 = (inst_37973.cljs$core$IFn$_invoke$arity$1 ? inst_37973.cljs$core$IFn$_invoke$arity$1(inst_37982) : inst_37973.call(null,inst_37982));
var state_38053__$1 = (function (){var statearr_38112 = state_38053;
(statearr_38112[(19)] = inst_38001__$1);

return statearr_38112;
})();
if(cljs.core.truth_(inst_38001__$1)){
var statearr_38114_39921 = state_38053__$1;
(statearr_38114_39921[(1)] = (14));

} else {
var statearr_38115_39922 = state_38053__$1;
(statearr_38115_39922[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38054 === (5))){
var inst_37983 = (state_38053[(13)]);
var state_38053__$1 = state_38053;
var statearr_38116_39923 = state_38053__$1;
(statearr_38116_39923[(2)] = inst_37983);

(statearr_38116_39923[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38054 === (14))){
var inst_38001 = (state_38053[(19)]);
var state_38053__$1 = state_38053;
var statearr_38117_39924 = state_38053__$1;
(statearr_38117_39924[(2)] = inst_38001);

(statearr_38117_39924[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38054 === (26))){
var inst_38043 = (state_38053[(2)]);
var state_38053__$1 = state_38053;
var statearr_38118_39925 = state_38053__$1;
(statearr_38118_39925[(2)] = inst_38043);

(statearr_38118_39925[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38054 === (16))){
var inst_38034 = (state_38053[(2)]);
var state_38053__$1 = state_38053;
if(cljs.core.truth_(inst_38034)){
var statearr_38119_39926 = state_38053__$1;
(statearr_38119_39926[(1)] = (20));

} else {
var statearr_38120_39927 = state_38053__$1;
(statearr_38120_39927[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38054 === (10))){
var inst_38049 = (state_38053[(2)]);
var state_38053__$1 = state_38053;
var statearr_38121_39928 = state_38053__$1;
(statearr_38121_39928[(2)] = inst_38049);

(statearr_38121_39928[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38054 === (18))){
var inst_38008 = (state_38053[(15)]);
var state_38053__$1 = state_38053;
var statearr_38122_39929 = state_38053__$1;
(statearr_38122_39929[(2)] = inst_38008);

(statearr_38122_39929[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38054 === (8))){
var inst_37981 = (state_38053[(7)]);
var inst_37992 = (inst_37981 == null);
var state_38053__$1 = state_38053;
if(cljs.core.truth_(inst_37992)){
var statearr_38123_39930 = state_38053__$1;
(statearr_38123_39930[(1)] = (11));

} else {
var statearr_38124_39931 = state_38053__$1;
(statearr_38124_39931[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__35472__auto__ = null;
var cljs$core$async$mix_$_state_machine__35472__auto____0 = (function (){
var statearr_38125 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38125[(0)] = cljs$core$async$mix_$_state_machine__35472__auto__);

(statearr_38125[(1)] = (1));

return statearr_38125;
});
var cljs$core$async$mix_$_state_machine__35472__auto____1 = (function (state_38053){
while(true){
var ret_value__35473__auto__ = (function (){try{while(true){
var result__35474__auto__ = switch__35471__auto__(state_38053);
if(cljs.core.keyword_identical_QMARK_(result__35474__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35474__auto__;
}
break;
}
}catch (e38126){var ex__35475__auto__ = e38126;
var statearr_38127_39932 = state_38053;
(statearr_38127_39932[(2)] = ex__35475__auto__);


if(cljs.core.seq((state_38053[(4)]))){
var statearr_38128_39933 = state_38053;
(statearr_38128_39933[(1)] = cljs.core.first((state_38053[(4)])));

} else {
throw ex__35475__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35473__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39934 = state_38053;
state_38053 = G__39934;
continue;
} else {
return ret_value__35473__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__35472__auto__ = function(state_38053){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__35472__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__35472__auto____1.call(this,state_38053);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__35472__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__35472__auto____0;
cljs$core$async$mix_$_state_machine__35472__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__35472__auto____1;
return cljs$core$async$mix_$_state_machine__35472__auto__;
})()
})();
var state__35987__auto__ = (function (){var statearr_38136 = f__35986__auto__();
(statearr_38136[(6)] = c__35985__auto___39897);

return statearr_38136;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35987__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_39935 = (function (p,v,ch,close_QMARK_){
var x__5390__auto__ = (((p == null))?null:p);
var m__5391__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5391__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__5389__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5389__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_39935(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_39939 = (function (p,v,ch){
var x__5390__auto__ = (((p == null))?null:p);
var m__5391__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5391__auto__.call(null,p,v,ch));
} else {
var m__5389__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5389__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_39939(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_39940 = (function() {
var G__39941 = null;
var G__39941__1 = (function (p){
var x__5390__auto__ = (((p == null))?null:p);
var m__5391__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5391__auto__.call(null,p));
} else {
var m__5389__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5389__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__39941__2 = (function (p,v){
var x__5390__auto__ = (((p == null))?null:p);
var m__5391__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5391__auto__.call(null,p,v));
} else {
var m__5389__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5389__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__39941 = function(p,v){
switch(arguments.length){
case 1:
return G__39941__1.call(this,p);
case 2:
return G__39941__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__39941.cljs$core$IFn$_invoke$arity$1 = G__39941__1;
G__39941.cljs$core$IFn$_invoke$arity$2 = G__39941__2;
return G__39941;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__38166 = arguments.length;
switch (G__38166) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_39940(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_39940(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__38172 = arguments.length;
switch (G__38172) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5043__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__38170_SHARP_){
if(cljs.core.truth_((p1__38170_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__38170_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__38170_SHARP_.call(null,topic)))){
return p1__38170_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__38170_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async38175 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38175 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta38176){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta38176 = meta38176;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async38175.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38177,meta38176__$1){
var self__ = this;
var _38177__$1 = this;
return (new cljs.core.async.t_cljs$core$async38175(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta38176__$1));
}));

(cljs.core.async.t_cljs$core$async38175.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38177){
var self__ = this;
var _38177__$1 = this;
return self__.meta38176;
}));

(cljs.core.async.t_cljs$core$async38175.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38175.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async38175.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38175.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async38175.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5804__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5804__auto__)){
var m = temp__5804__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async38175.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async38175.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async38175.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta38176","meta38176",-1353815147,null)], null);
}));

(cljs.core.async.t_cljs$core$async38175.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async38175.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38175");

(cljs.core.async.t_cljs$core$async38175.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"cljs.core.async/t_cljs$core$async38175");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async38175.
 */
cljs.core.async.__GT_t_cljs$core$async38175 = (function cljs$core$async$__GT_t_cljs$core$async38175(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta38176){
return (new cljs.core.async.t_cljs$core$async38175(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta38176));
});

}

return (new cljs.core.async.t_cljs$core$async38175(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__35985__auto___39963 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35986__auto__ = (function (){var switch__35471__auto__ = (function (state_38302){
var state_val_38303 = (state_38302[(1)]);
if((state_val_38303 === (7))){
var inst_38298 = (state_38302[(2)]);
var state_38302__$1 = state_38302;
var statearr_38308_39964 = state_38302__$1;
(statearr_38308_39964[(2)] = inst_38298);

(statearr_38308_39964[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38303 === (20))){
var state_38302__$1 = state_38302;
var statearr_38309_39966 = state_38302__$1;
(statearr_38309_39966[(2)] = null);

(statearr_38309_39966[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38303 === (1))){
var state_38302__$1 = state_38302;
var statearr_38310_39967 = state_38302__$1;
(statearr_38310_39967[(2)] = null);

(statearr_38310_39967[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38303 === (24))){
var inst_38279 = (state_38302[(7)]);
var inst_38290 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_38279);
var state_38302__$1 = state_38302;
var statearr_38311_39968 = state_38302__$1;
(statearr_38311_39968[(2)] = inst_38290);

(statearr_38311_39968[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38303 === (4))){
var inst_38221 = (state_38302[(8)]);
var inst_38221__$1 = (state_38302[(2)]);
var inst_38222 = (inst_38221__$1 == null);
var state_38302__$1 = (function (){var statearr_38312 = state_38302;
(statearr_38312[(8)] = inst_38221__$1);

return statearr_38312;
})();
if(cljs.core.truth_(inst_38222)){
var statearr_38313_39980 = state_38302__$1;
(statearr_38313_39980[(1)] = (5));

} else {
var statearr_38314_39981 = state_38302__$1;
(statearr_38314_39981[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38303 === (15))){
var inst_38273 = (state_38302[(2)]);
var state_38302__$1 = state_38302;
var statearr_38315_39982 = state_38302__$1;
(statearr_38315_39982[(2)] = inst_38273);

(statearr_38315_39982[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38303 === (21))){
var inst_38295 = (state_38302[(2)]);
var state_38302__$1 = (function (){var statearr_38320 = state_38302;
(statearr_38320[(9)] = inst_38295);

return statearr_38320;
})();
var statearr_38321_39983 = state_38302__$1;
(statearr_38321_39983[(2)] = null);

(statearr_38321_39983[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38303 === (13))){
var inst_38245 = (state_38302[(10)]);
var inst_38247 = cljs.core.chunked_seq_QMARK_(inst_38245);
var state_38302__$1 = state_38302;
if(inst_38247){
var statearr_38326_39984 = state_38302__$1;
(statearr_38326_39984[(1)] = (16));

} else {
var statearr_38327_39985 = state_38302__$1;
(statearr_38327_39985[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38303 === (22))){
var inst_38287 = (state_38302[(2)]);
var state_38302__$1 = state_38302;
if(cljs.core.truth_(inst_38287)){
var statearr_38329_39986 = state_38302__$1;
(statearr_38329_39986[(1)] = (23));

} else {
var statearr_38330_39987 = state_38302__$1;
(statearr_38330_39987[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38303 === (6))){
var inst_38221 = (state_38302[(8)]);
var inst_38281 = (state_38302[(11)]);
var inst_38279 = (state_38302[(7)]);
var inst_38279__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_38221) : topic_fn.call(null,inst_38221));
var inst_38280 = cljs.core.deref(mults);
var inst_38281__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_38280,inst_38279__$1);
var state_38302__$1 = (function (){var statearr_38331 = state_38302;
(statearr_38331[(11)] = inst_38281__$1);

(statearr_38331[(7)] = inst_38279__$1);

return statearr_38331;
})();
if(cljs.core.truth_(inst_38281__$1)){
var statearr_38332_39988 = state_38302__$1;
(statearr_38332_39988[(1)] = (19));

} else {
var statearr_38333_39989 = state_38302__$1;
(statearr_38333_39989[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38303 === (25))){
var inst_38292 = (state_38302[(2)]);
var state_38302__$1 = state_38302;
var statearr_38335_39990 = state_38302__$1;
(statearr_38335_39990[(2)] = inst_38292);

(statearr_38335_39990[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38303 === (17))){
var inst_38245 = (state_38302[(10)]);
var inst_38264 = cljs.core.first(inst_38245);
var inst_38265 = cljs.core.async.muxch_STAR_(inst_38264);
var inst_38266 = cljs.core.async.close_BANG_(inst_38265);
var inst_38267 = cljs.core.next(inst_38245);
var inst_38231 = inst_38267;
var inst_38232 = null;
var inst_38233 = (0);
var inst_38234 = (0);
var state_38302__$1 = (function (){var statearr_38336 = state_38302;
(statearr_38336[(12)] = inst_38234);

(statearr_38336[(13)] = inst_38266);

(statearr_38336[(14)] = inst_38231);

(statearr_38336[(15)] = inst_38232);

(statearr_38336[(16)] = inst_38233);

return statearr_38336;
})();
var statearr_38337_39991 = state_38302__$1;
(statearr_38337_39991[(2)] = null);

(statearr_38337_39991[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38303 === (3))){
var inst_38300 = (state_38302[(2)]);
var state_38302__$1 = state_38302;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38302__$1,inst_38300);
} else {
if((state_val_38303 === (12))){
var inst_38275 = (state_38302[(2)]);
var state_38302__$1 = state_38302;
var statearr_38347_39992 = state_38302__$1;
(statearr_38347_39992[(2)] = inst_38275);

(statearr_38347_39992[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38303 === (2))){
var state_38302__$1 = state_38302;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38302__$1,(4),ch);
} else {
if((state_val_38303 === (23))){
var state_38302__$1 = state_38302;
var statearr_38349_39996 = state_38302__$1;
(statearr_38349_39996[(2)] = null);

(statearr_38349_39996[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38303 === (19))){
var inst_38221 = (state_38302[(8)]);
var inst_38281 = (state_38302[(11)]);
var inst_38285 = cljs.core.async.muxch_STAR_(inst_38281);
var state_38302__$1 = state_38302;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38302__$1,(22),inst_38285,inst_38221);
} else {
if((state_val_38303 === (11))){
var inst_38245 = (state_38302[(10)]);
var inst_38231 = (state_38302[(14)]);
var inst_38245__$1 = cljs.core.seq(inst_38231);
var state_38302__$1 = (function (){var statearr_38354 = state_38302;
(statearr_38354[(10)] = inst_38245__$1);

return statearr_38354;
})();
if(inst_38245__$1){
var statearr_38355_40007 = state_38302__$1;
(statearr_38355_40007[(1)] = (13));

} else {
var statearr_38356_40008 = state_38302__$1;
(statearr_38356_40008[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38303 === (9))){
var inst_38277 = (state_38302[(2)]);
var state_38302__$1 = state_38302;
var statearr_38357_40009 = state_38302__$1;
(statearr_38357_40009[(2)] = inst_38277);

(statearr_38357_40009[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38303 === (5))){
var inst_38228 = cljs.core.deref(mults);
var inst_38229 = cljs.core.vals(inst_38228);
var inst_38230 = cljs.core.seq(inst_38229);
var inst_38231 = inst_38230;
var inst_38232 = null;
var inst_38233 = (0);
var inst_38234 = (0);
var state_38302__$1 = (function (){var statearr_38358 = state_38302;
(statearr_38358[(12)] = inst_38234);

(statearr_38358[(14)] = inst_38231);

(statearr_38358[(15)] = inst_38232);

(statearr_38358[(16)] = inst_38233);

return statearr_38358;
})();
var statearr_38359_40014 = state_38302__$1;
(statearr_38359_40014[(2)] = null);

(statearr_38359_40014[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38303 === (14))){
var state_38302__$1 = state_38302;
var statearr_38364_40016 = state_38302__$1;
(statearr_38364_40016[(2)] = null);

(statearr_38364_40016[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38303 === (16))){
var inst_38245 = (state_38302[(10)]);
var inst_38258 = cljs.core.chunk_first(inst_38245);
var inst_38259 = cljs.core.chunk_rest(inst_38245);
var inst_38260 = cljs.core.count(inst_38258);
var inst_38231 = inst_38259;
var inst_38232 = inst_38258;
var inst_38233 = inst_38260;
var inst_38234 = (0);
var state_38302__$1 = (function (){var statearr_38365 = state_38302;
(statearr_38365[(12)] = inst_38234);

(statearr_38365[(14)] = inst_38231);

(statearr_38365[(15)] = inst_38232);

(statearr_38365[(16)] = inst_38233);

return statearr_38365;
})();
var statearr_38366_40020 = state_38302__$1;
(statearr_38366_40020[(2)] = null);

(statearr_38366_40020[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38303 === (10))){
var inst_38234 = (state_38302[(12)]);
var inst_38231 = (state_38302[(14)]);
var inst_38232 = (state_38302[(15)]);
var inst_38233 = (state_38302[(16)]);
var inst_38239 = cljs.core._nth(inst_38232,inst_38234);
var inst_38240 = cljs.core.async.muxch_STAR_(inst_38239);
var inst_38241 = cljs.core.async.close_BANG_(inst_38240);
var inst_38242 = (inst_38234 + (1));
var tmp38361 = inst_38231;
var tmp38362 = inst_38232;
var tmp38363 = inst_38233;
var inst_38231__$1 = tmp38361;
var inst_38232__$1 = tmp38362;
var inst_38233__$1 = tmp38363;
var inst_38234__$1 = inst_38242;
var state_38302__$1 = (function (){var statearr_38367 = state_38302;
(statearr_38367[(12)] = inst_38234__$1);

(statearr_38367[(14)] = inst_38231__$1);

(statearr_38367[(15)] = inst_38232__$1);

(statearr_38367[(17)] = inst_38241);

(statearr_38367[(16)] = inst_38233__$1);

return statearr_38367;
})();
var statearr_38368_40023 = state_38302__$1;
(statearr_38368_40023[(2)] = null);

(statearr_38368_40023[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38303 === (18))){
var inst_38270 = (state_38302[(2)]);
var state_38302__$1 = state_38302;
var statearr_38369_40024 = state_38302__$1;
(statearr_38369_40024[(2)] = inst_38270);

(statearr_38369_40024[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38303 === (8))){
var inst_38234 = (state_38302[(12)]);
var inst_38233 = (state_38302[(16)]);
var inst_38236 = (inst_38234 < inst_38233);
var inst_38237 = inst_38236;
var state_38302__$1 = state_38302;
if(cljs.core.truth_(inst_38237)){
var statearr_38371_40025 = state_38302__$1;
(statearr_38371_40025[(1)] = (10));

} else {
var statearr_38372_40026 = state_38302__$1;
(statearr_38372_40026[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__35472__auto__ = null;
var cljs$core$async$state_machine__35472__auto____0 = (function (){
var statearr_38373 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38373[(0)] = cljs$core$async$state_machine__35472__auto__);

(statearr_38373[(1)] = (1));

return statearr_38373;
});
var cljs$core$async$state_machine__35472__auto____1 = (function (state_38302){
while(true){
var ret_value__35473__auto__ = (function (){try{while(true){
var result__35474__auto__ = switch__35471__auto__(state_38302);
if(cljs.core.keyword_identical_QMARK_(result__35474__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35474__auto__;
}
break;
}
}catch (e38374){var ex__35475__auto__ = e38374;
var statearr_38375_40031 = state_38302;
(statearr_38375_40031[(2)] = ex__35475__auto__);


if(cljs.core.seq((state_38302[(4)]))){
var statearr_38376_40032 = state_38302;
(statearr_38376_40032[(1)] = cljs.core.first((state_38302[(4)])));

} else {
throw ex__35475__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35473__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40033 = state_38302;
state_38302 = G__40033;
continue;
} else {
return ret_value__35473__auto__;
}
break;
}
});
cljs$core$async$state_machine__35472__auto__ = function(state_38302){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35472__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35472__auto____1.call(this,state_38302);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35472__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35472__auto____0;
cljs$core$async$state_machine__35472__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35472__auto____1;
return cljs$core$async$state_machine__35472__auto__;
})()
})();
var state__35987__auto__ = (function (){var statearr_38377 = f__35986__auto__();
(statearr_38377[(6)] = c__35985__auto___39963);

return statearr_38377;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35987__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__38380 = arguments.length;
switch (G__38380) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__38383 = arguments.length;
switch (G__38383) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__38386 = arguments.length;
switch (G__38386) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__35985__auto___40050 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35986__auto__ = (function (){var switch__35471__auto__ = (function (state_38446){
var state_val_38447 = (state_38446[(1)]);
if((state_val_38447 === (7))){
var state_38446__$1 = state_38446;
var statearr_38448_40051 = state_38446__$1;
(statearr_38448_40051[(2)] = null);

(statearr_38448_40051[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38447 === (1))){
var state_38446__$1 = state_38446;
var statearr_38449_40052 = state_38446__$1;
(statearr_38449_40052[(2)] = null);

(statearr_38449_40052[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38447 === (4))){
var inst_38404 = (state_38446[(7)]);
var inst_38405 = (state_38446[(8)]);
var inst_38407 = (inst_38405 < inst_38404);
var state_38446__$1 = state_38446;
if(cljs.core.truth_(inst_38407)){
var statearr_38450_40053 = state_38446__$1;
(statearr_38450_40053[(1)] = (6));

} else {
var statearr_38451_40054 = state_38446__$1;
(statearr_38451_40054[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38447 === (15))){
var inst_38430 = (state_38446[(9)]);
var inst_38435 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_38430);
var state_38446__$1 = state_38446;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38446__$1,(17),out,inst_38435);
} else {
if((state_val_38447 === (13))){
var inst_38430 = (state_38446[(9)]);
var inst_38430__$1 = (state_38446[(2)]);
var inst_38431 = cljs.core.some(cljs.core.nil_QMARK_,inst_38430__$1);
var state_38446__$1 = (function (){var statearr_38452 = state_38446;
(statearr_38452[(9)] = inst_38430__$1);

return statearr_38452;
})();
if(cljs.core.truth_(inst_38431)){
var statearr_38453_40055 = state_38446__$1;
(statearr_38453_40055[(1)] = (14));

} else {
var statearr_38454_40056 = state_38446__$1;
(statearr_38454_40056[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38447 === (6))){
var state_38446__$1 = state_38446;
var statearr_38456_40057 = state_38446__$1;
(statearr_38456_40057[(2)] = null);

(statearr_38456_40057[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38447 === (17))){
var inst_38437 = (state_38446[(2)]);
var state_38446__$1 = (function (){var statearr_38464 = state_38446;
(statearr_38464[(10)] = inst_38437);

return statearr_38464;
})();
var statearr_38465_40058 = state_38446__$1;
(statearr_38465_40058[(2)] = null);

(statearr_38465_40058[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38447 === (3))){
var inst_38442 = (state_38446[(2)]);
var state_38446__$1 = state_38446;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38446__$1,inst_38442);
} else {
if((state_val_38447 === (12))){
var _ = (function (){var statearr_38469 = state_38446;
(statearr_38469[(4)] = cljs.core.rest((state_38446[(4)])));

return statearr_38469;
})();
var state_38446__$1 = state_38446;
var ex38460 = (state_38446__$1[(2)]);
var statearr_38470_40059 = state_38446__$1;
(statearr_38470_40059[(5)] = ex38460);


if((ex38460 instanceof Object)){
var statearr_38471_40060 = state_38446__$1;
(statearr_38471_40060[(1)] = (11));

(statearr_38471_40060[(5)] = null);

} else {
throw ex38460;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38447 === (2))){
var inst_38403 = cljs.core.reset_BANG_(dctr,cnt);
var inst_38404 = cnt;
var inst_38405 = (0);
var state_38446__$1 = (function (){var statearr_38472 = state_38446;
(statearr_38472[(7)] = inst_38404);

(statearr_38472[(8)] = inst_38405);

(statearr_38472[(11)] = inst_38403);

return statearr_38472;
})();
var statearr_38473_40061 = state_38446__$1;
(statearr_38473_40061[(2)] = null);

(statearr_38473_40061[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38447 === (11))){
var inst_38409 = (state_38446[(2)]);
var inst_38410 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_38446__$1 = (function (){var statearr_38474 = state_38446;
(statearr_38474[(12)] = inst_38409);

return statearr_38474;
})();
var statearr_38475_40062 = state_38446__$1;
(statearr_38475_40062[(2)] = inst_38410);

(statearr_38475_40062[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38447 === (9))){
var inst_38405 = (state_38446[(8)]);
var _ = (function (){var statearr_38476 = state_38446;
(statearr_38476[(4)] = cljs.core.cons((12),(state_38446[(4)])));

return statearr_38476;
})();
var inst_38416 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_38405) : chs__$1.call(null,inst_38405));
var inst_38417 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_38405) : done.call(null,inst_38405));
var inst_38418 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_38416,inst_38417);
var ___$1 = (function (){var statearr_38478 = state_38446;
(statearr_38478[(4)] = cljs.core.rest((state_38446[(4)])));

return statearr_38478;
})();
var state_38446__$1 = state_38446;
var statearr_38479_40063 = state_38446__$1;
(statearr_38479_40063[(2)] = inst_38418);

(statearr_38479_40063[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38447 === (5))){
var inst_38428 = (state_38446[(2)]);
var state_38446__$1 = (function (){var statearr_38483 = state_38446;
(statearr_38483[(13)] = inst_38428);

return statearr_38483;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38446__$1,(13),dchan);
} else {
if((state_val_38447 === (14))){
var inst_38433 = cljs.core.async.close_BANG_(out);
var state_38446__$1 = state_38446;
var statearr_38485_40064 = state_38446__$1;
(statearr_38485_40064[(2)] = inst_38433);

(statearr_38485_40064[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38447 === (16))){
var inst_38440 = (state_38446[(2)]);
var state_38446__$1 = state_38446;
var statearr_38486_40065 = state_38446__$1;
(statearr_38486_40065[(2)] = inst_38440);

(statearr_38486_40065[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38447 === (10))){
var inst_38405 = (state_38446[(8)]);
var inst_38421 = (state_38446[(2)]);
var inst_38422 = (inst_38405 + (1));
var inst_38405__$1 = inst_38422;
var state_38446__$1 = (function (){var statearr_38490 = state_38446;
(statearr_38490[(14)] = inst_38421);

(statearr_38490[(8)] = inst_38405__$1);

return statearr_38490;
})();
var statearr_38491_40066 = state_38446__$1;
(statearr_38491_40066[(2)] = null);

(statearr_38491_40066[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38447 === (8))){
var inst_38426 = (state_38446[(2)]);
var state_38446__$1 = state_38446;
var statearr_38493_40073 = state_38446__$1;
(statearr_38493_40073[(2)] = inst_38426);

(statearr_38493_40073[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__35472__auto__ = null;
var cljs$core$async$state_machine__35472__auto____0 = (function (){
var statearr_38494 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38494[(0)] = cljs$core$async$state_machine__35472__auto__);

(statearr_38494[(1)] = (1));

return statearr_38494;
});
var cljs$core$async$state_machine__35472__auto____1 = (function (state_38446){
while(true){
var ret_value__35473__auto__ = (function (){try{while(true){
var result__35474__auto__ = switch__35471__auto__(state_38446);
if(cljs.core.keyword_identical_QMARK_(result__35474__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35474__auto__;
}
break;
}
}catch (e38498){var ex__35475__auto__ = e38498;
var statearr_38499_40074 = state_38446;
(statearr_38499_40074[(2)] = ex__35475__auto__);


if(cljs.core.seq((state_38446[(4)]))){
var statearr_38500_40075 = state_38446;
(statearr_38500_40075[(1)] = cljs.core.first((state_38446[(4)])));

} else {
throw ex__35475__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35473__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40076 = state_38446;
state_38446 = G__40076;
continue;
} else {
return ret_value__35473__auto__;
}
break;
}
});
cljs$core$async$state_machine__35472__auto__ = function(state_38446){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35472__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35472__auto____1.call(this,state_38446);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35472__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35472__auto____0;
cljs$core$async$state_machine__35472__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35472__auto____1;
return cljs$core$async$state_machine__35472__auto__;
})()
})();
var state__35987__auto__ = (function (){var statearr_38505 = f__35986__auto__();
(statearr_38505[(6)] = c__35985__auto___40050);

return statearr_38505;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35987__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__38513 = arguments.length;
switch (G__38513) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__35985__auto___40078 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35986__auto__ = (function (){var switch__35471__auto__ = (function (state_38571){
var state_val_38572 = (state_38571[(1)]);
if((state_val_38572 === (7))){
var inst_38538 = (state_38571[(7)]);
var inst_38540 = (state_38571[(8)]);
var inst_38538__$1 = (state_38571[(2)]);
var inst_38540__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_38538__$1,(0),null);
var inst_38542 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_38538__$1,(1),null);
var inst_38544 = (inst_38540__$1 == null);
var state_38571__$1 = (function (){var statearr_38600 = state_38571;
(statearr_38600[(7)] = inst_38538__$1);

(statearr_38600[(9)] = inst_38542);

(statearr_38600[(8)] = inst_38540__$1);

return statearr_38600;
})();
if(cljs.core.truth_(inst_38544)){
var statearr_38601_40087 = state_38571__$1;
(statearr_38601_40087[(1)] = (8));

} else {
var statearr_38604_40088 = state_38571__$1;
(statearr_38604_40088[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38572 === (1))){
var inst_38527 = cljs.core.vec(chs);
var inst_38528 = inst_38527;
var state_38571__$1 = (function (){var statearr_38606 = state_38571;
(statearr_38606[(10)] = inst_38528);

return statearr_38606;
})();
var statearr_38607_40089 = state_38571__$1;
(statearr_38607_40089[(2)] = null);

(statearr_38607_40089[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38572 === (4))){
var inst_38528 = (state_38571[(10)]);
var state_38571__$1 = state_38571;
return cljs.core.async.ioc_alts_BANG_(state_38571__$1,(7),inst_38528);
} else {
if((state_val_38572 === (6))){
var inst_38559 = (state_38571[(2)]);
var state_38571__$1 = state_38571;
var statearr_38624_40090 = state_38571__$1;
(statearr_38624_40090[(2)] = inst_38559);

(statearr_38624_40090[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38572 === (3))){
var inst_38561 = (state_38571[(2)]);
var state_38571__$1 = state_38571;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38571__$1,inst_38561);
} else {
if((state_val_38572 === (2))){
var inst_38528 = (state_38571[(10)]);
var inst_38531 = cljs.core.count(inst_38528);
var inst_38532 = (inst_38531 > (0));
var state_38571__$1 = state_38571;
if(cljs.core.truth_(inst_38532)){
var statearr_38630_40091 = state_38571__$1;
(statearr_38630_40091[(1)] = (4));

} else {
var statearr_38631_40092 = state_38571__$1;
(statearr_38631_40092[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38572 === (11))){
var inst_38528 = (state_38571[(10)]);
var inst_38552 = (state_38571[(2)]);
var tmp38625 = inst_38528;
var inst_38528__$1 = tmp38625;
var state_38571__$1 = (function (){var statearr_38632 = state_38571;
(statearr_38632[(11)] = inst_38552);

(statearr_38632[(10)] = inst_38528__$1);

return statearr_38632;
})();
var statearr_38633_40094 = state_38571__$1;
(statearr_38633_40094[(2)] = null);

(statearr_38633_40094[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38572 === (9))){
var inst_38540 = (state_38571[(8)]);
var state_38571__$1 = state_38571;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38571__$1,(11),out,inst_38540);
} else {
if((state_val_38572 === (5))){
var inst_38557 = cljs.core.async.close_BANG_(out);
var state_38571__$1 = state_38571;
var statearr_38641_40105 = state_38571__$1;
(statearr_38641_40105[(2)] = inst_38557);

(statearr_38641_40105[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38572 === (10))){
var inst_38555 = (state_38571[(2)]);
var state_38571__$1 = state_38571;
var statearr_38642_40106 = state_38571__$1;
(statearr_38642_40106[(2)] = inst_38555);

(statearr_38642_40106[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38572 === (8))){
var inst_38538 = (state_38571[(7)]);
var inst_38528 = (state_38571[(10)]);
var inst_38542 = (state_38571[(9)]);
var inst_38540 = (state_38571[(8)]);
var inst_38547 = (function (){var cs = inst_38528;
var vec__38534 = inst_38538;
var v = inst_38540;
var c = inst_38542;
return (function (p1__38508_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__38508_SHARP_);
});
})();
var inst_38548 = cljs.core.filterv(inst_38547,inst_38528);
var inst_38528__$1 = inst_38548;
var state_38571__$1 = (function (){var statearr_38643 = state_38571;
(statearr_38643[(10)] = inst_38528__$1);

return statearr_38643;
})();
var statearr_38644_40107 = state_38571__$1;
(statearr_38644_40107[(2)] = null);

(statearr_38644_40107[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__35472__auto__ = null;
var cljs$core$async$state_machine__35472__auto____0 = (function (){
var statearr_38645 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38645[(0)] = cljs$core$async$state_machine__35472__auto__);

(statearr_38645[(1)] = (1));

return statearr_38645;
});
var cljs$core$async$state_machine__35472__auto____1 = (function (state_38571){
while(true){
var ret_value__35473__auto__ = (function (){try{while(true){
var result__35474__auto__ = switch__35471__auto__(state_38571);
if(cljs.core.keyword_identical_QMARK_(result__35474__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35474__auto__;
}
break;
}
}catch (e38646){var ex__35475__auto__ = e38646;
var statearr_38647_40108 = state_38571;
(statearr_38647_40108[(2)] = ex__35475__auto__);


if(cljs.core.seq((state_38571[(4)]))){
var statearr_38648_40109 = state_38571;
(statearr_38648_40109[(1)] = cljs.core.first((state_38571[(4)])));

} else {
throw ex__35475__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35473__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40110 = state_38571;
state_38571 = G__40110;
continue;
} else {
return ret_value__35473__auto__;
}
break;
}
});
cljs$core$async$state_machine__35472__auto__ = function(state_38571){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35472__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35472__auto____1.call(this,state_38571);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35472__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35472__auto____0;
cljs$core$async$state_machine__35472__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35472__auto____1;
return cljs$core$async$state_machine__35472__auto__;
})()
})();
var state__35987__auto__ = (function (){var statearr_38650 = f__35986__auto__();
(statearr_38650[(6)] = c__35985__auto___40078);

return statearr_38650;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35987__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__38652 = arguments.length;
switch (G__38652) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__35985__auto___40113 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35986__auto__ = (function (){var switch__35471__auto__ = (function (state_38717){
var state_val_38718 = (state_38717[(1)]);
if((state_val_38718 === (7))){
var inst_38696 = (state_38717[(7)]);
var inst_38696__$1 = (state_38717[(2)]);
var inst_38697 = (inst_38696__$1 == null);
var inst_38698 = cljs.core.not(inst_38697);
var state_38717__$1 = (function (){var statearr_38720 = state_38717;
(statearr_38720[(7)] = inst_38696__$1);

return statearr_38720;
})();
if(inst_38698){
var statearr_38721_40114 = state_38717__$1;
(statearr_38721_40114[(1)] = (8));

} else {
var statearr_38722_40115 = state_38717__$1;
(statearr_38722_40115[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38718 === (1))){
var inst_38690 = (0);
var state_38717__$1 = (function (){var statearr_38723 = state_38717;
(statearr_38723[(8)] = inst_38690);

return statearr_38723;
})();
var statearr_38724_40116 = state_38717__$1;
(statearr_38724_40116[(2)] = null);

(statearr_38724_40116[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38718 === (4))){
var state_38717__$1 = state_38717;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38717__$1,(7),ch);
} else {
if((state_val_38718 === (6))){
var inst_38709 = (state_38717[(2)]);
var state_38717__$1 = state_38717;
var statearr_38725_40117 = state_38717__$1;
(statearr_38725_40117[(2)] = inst_38709);

(statearr_38725_40117[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38718 === (3))){
var inst_38711 = (state_38717[(2)]);
var inst_38712 = cljs.core.async.close_BANG_(out);
var state_38717__$1 = (function (){var statearr_38728 = state_38717;
(statearr_38728[(9)] = inst_38711);

return statearr_38728;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_38717__$1,inst_38712);
} else {
if((state_val_38718 === (2))){
var inst_38690 = (state_38717[(8)]);
var inst_38693 = (inst_38690 < n);
var state_38717__$1 = state_38717;
if(cljs.core.truth_(inst_38693)){
var statearr_38729_40119 = state_38717__$1;
(statearr_38729_40119[(1)] = (4));

} else {
var statearr_38730_40126 = state_38717__$1;
(statearr_38730_40126[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38718 === (11))){
var inst_38690 = (state_38717[(8)]);
var inst_38701 = (state_38717[(2)]);
var inst_38702 = (inst_38690 + (1));
var inst_38690__$1 = inst_38702;
var state_38717__$1 = (function (){var statearr_38731 = state_38717;
(statearr_38731[(8)] = inst_38690__$1);

(statearr_38731[(10)] = inst_38701);

return statearr_38731;
})();
var statearr_38732_40127 = state_38717__$1;
(statearr_38732_40127[(2)] = null);

(statearr_38732_40127[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38718 === (9))){
var state_38717__$1 = state_38717;
var statearr_38733_40128 = state_38717__$1;
(statearr_38733_40128[(2)] = null);

(statearr_38733_40128[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38718 === (5))){
var state_38717__$1 = state_38717;
var statearr_38735_40129 = state_38717__$1;
(statearr_38735_40129[(2)] = null);

(statearr_38735_40129[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38718 === (10))){
var inst_38706 = (state_38717[(2)]);
var state_38717__$1 = state_38717;
var statearr_38737_40130 = state_38717__$1;
(statearr_38737_40130[(2)] = inst_38706);

(statearr_38737_40130[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38718 === (8))){
var inst_38696 = (state_38717[(7)]);
var state_38717__$1 = state_38717;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38717__$1,(11),out,inst_38696);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__35472__auto__ = null;
var cljs$core$async$state_machine__35472__auto____0 = (function (){
var statearr_38746 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_38746[(0)] = cljs$core$async$state_machine__35472__auto__);

(statearr_38746[(1)] = (1));

return statearr_38746;
});
var cljs$core$async$state_machine__35472__auto____1 = (function (state_38717){
while(true){
var ret_value__35473__auto__ = (function (){try{while(true){
var result__35474__auto__ = switch__35471__auto__(state_38717);
if(cljs.core.keyword_identical_QMARK_(result__35474__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35474__auto__;
}
break;
}
}catch (e38748){var ex__35475__auto__ = e38748;
var statearr_38749_40131 = state_38717;
(statearr_38749_40131[(2)] = ex__35475__auto__);


if(cljs.core.seq((state_38717[(4)]))){
var statearr_38752_40132 = state_38717;
(statearr_38752_40132[(1)] = cljs.core.first((state_38717[(4)])));

} else {
throw ex__35475__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35473__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40133 = state_38717;
state_38717 = G__40133;
continue;
} else {
return ret_value__35473__auto__;
}
break;
}
});
cljs$core$async$state_machine__35472__auto__ = function(state_38717){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35472__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35472__auto____1.call(this,state_38717);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35472__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35472__auto____0;
cljs$core$async$state_machine__35472__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35472__auto____1;
return cljs$core$async$state_machine__35472__auto__;
})()
})();
var state__35987__auto__ = (function (){var statearr_38757 = f__35986__auto__();
(statearr_38757[(6)] = c__35985__auto___40113);

return statearr_38757;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35987__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async38769 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38769 = (function (f,ch,meta38770){
this.f = f;
this.ch = ch;
this.meta38770 = meta38770;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async38769.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38771,meta38770__$1){
var self__ = this;
var _38771__$1 = this;
return (new cljs.core.async.t_cljs$core$async38769(self__.f,self__.ch,meta38770__$1));
}));

(cljs.core.async.t_cljs$core$async38769.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38771){
var self__ = this;
var _38771__$1 = this;
return self__.meta38770;
}));

(cljs.core.async.t_cljs$core$async38769.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38769.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async38769.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async38769.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38769.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async38778 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38778 = (function (f,ch,meta38770,_,fn1,meta38779){
this.f = f;
this.ch = ch;
this.meta38770 = meta38770;
this._ = _;
this.fn1 = fn1;
this.meta38779 = meta38779;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async38778.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38780,meta38779__$1){
var self__ = this;
var _38780__$1 = this;
return (new cljs.core.async.t_cljs$core$async38778(self__.f,self__.ch,self__.meta38770,self__._,self__.fn1,meta38779__$1));
}));

(cljs.core.async.t_cljs$core$async38778.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38780){
var self__ = this;
var _38780__$1 = this;
return self__.meta38779;
}));

(cljs.core.async.t_cljs$core$async38778.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38778.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async38778.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async38778.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__38768_SHARP_){
var G__38818 = (((p1__38768_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__38768_SHARP_) : self__.f.call(null,p1__38768_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__38818) : f1.call(null,G__38818));
});
}));

(cljs.core.async.t_cljs$core$async38778.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta38770","meta38770",-1082383120,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async38769","cljs.core.async/t_cljs$core$async38769",-91276713,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta38779","meta38779",-17029813,null)], null);
}));

(cljs.core.async.t_cljs$core$async38778.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async38778.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38778");

(cljs.core.async.t_cljs$core$async38778.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"cljs.core.async/t_cljs$core$async38778");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async38778.
 */
cljs.core.async.__GT_t_cljs$core$async38778 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async38778(f__$1,ch__$1,meta38770__$1,___$2,fn1__$1,meta38779){
return (new cljs.core.async.t_cljs$core$async38778(f__$1,ch__$1,meta38770__$1,___$2,fn1__$1,meta38779));
});

}

return (new cljs.core.async.t_cljs$core$async38778(self__.f,self__.ch,self__.meta38770,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__5041__auto__ = ret;
if(cljs.core.truth_(and__5041__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5041__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__38853 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__38853) : self__.f.call(null,G__38853));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async38769.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38769.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async38769.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta38770","meta38770",-1082383120,null)], null);
}));

(cljs.core.async.t_cljs$core$async38769.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async38769.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38769");

(cljs.core.async.t_cljs$core$async38769.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"cljs.core.async/t_cljs$core$async38769");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async38769.
 */
cljs.core.async.__GT_t_cljs$core$async38769 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async38769(f__$1,ch__$1,meta38770){
return (new cljs.core.async.t_cljs$core$async38769(f__$1,ch__$1,meta38770));
});

}

return (new cljs.core.async.t_cljs$core$async38769(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async38886 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38886 = (function (f,ch,meta38887){
this.f = f;
this.ch = ch;
this.meta38887 = meta38887;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async38886.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38888,meta38887__$1){
var self__ = this;
var _38888__$1 = this;
return (new cljs.core.async.t_cljs$core$async38886(self__.f,self__.ch,meta38887__$1));
}));

(cljs.core.async.t_cljs$core$async38886.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38888){
var self__ = this;
var _38888__$1 = this;
return self__.meta38887;
}));

(cljs.core.async.t_cljs$core$async38886.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38886.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async38886.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38886.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async38886.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38886.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async38886.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta38887","meta38887",199987112,null)], null);
}));

(cljs.core.async.t_cljs$core$async38886.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async38886.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38886");

(cljs.core.async.t_cljs$core$async38886.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"cljs.core.async/t_cljs$core$async38886");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async38886.
 */
cljs.core.async.__GT_t_cljs$core$async38886 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async38886(f__$1,ch__$1,meta38887){
return (new cljs.core.async.t_cljs$core$async38886(f__$1,ch__$1,meta38887));
});

}

return (new cljs.core.async.t_cljs$core$async38886(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async38944 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38944 = (function (p,ch,meta38945){
this.p = p;
this.ch = ch;
this.meta38945 = meta38945;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async38944.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38946,meta38945__$1){
var self__ = this;
var _38946__$1 = this;
return (new cljs.core.async.t_cljs$core$async38944(self__.p,self__.ch,meta38945__$1));
}));

(cljs.core.async.t_cljs$core$async38944.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38946){
var self__ = this;
var _38946__$1 = this;
return self__.meta38945;
}));

(cljs.core.async.t_cljs$core$async38944.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38944.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async38944.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async38944.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38944.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async38944.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38944.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async38944.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta38945","meta38945",908624120,null)], null);
}));

(cljs.core.async.t_cljs$core$async38944.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async38944.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38944");

(cljs.core.async.t_cljs$core$async38944.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"cljs.core.async/t_cljs$core$async38944");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async38944.
 */
cljs.core.async.__GT_t_cljs$core$async38944 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async38944(p__$1,ch__$1,meta38945){
return (new cljs.core.async.t_cljs$core$async38944(p__$1,ch__$1,meta38945));
});

}

return (new cljs.core.async.t_cljs$core$async38944(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__38969 = arguments.length;
switch (G__38969) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__35985__auto___40135 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35986__auto__ = (function (){var switch__35471__auto__ = (function (state_39004){
var state_val_39006 = (state_39004[(1)]);
if((state_val_39006 === (7))){
var inst_38999 = (state_39004[(2)]);
var state_39004__$1 = state_39004;
var statearr_39024_40136 = state_39004__$1;
(statearr_39024_40136[(2)] = inst_38999);

(statearr_39024_40136[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39006 === (1))){
var state_39004__$1 = state_39004;
var statearr_39025_40137 = state_39004__$1;
(statearr_39025_40137[(2)] = null);

(statearr_39025_40137[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39006 === (4))){
var inst_38985 = (state_39004[(7)]);
var inst_38985__$1 = (state_39004[(2)]);
var inst_38986 = (inst_38985__$1 == null);
var state_39004__$1 = (function (){var statearr_39026 = state_39004;
(statearr_39026[(7)] = inst_38985__$1);

return statearr_39026;
})();
if(cljs.core.truth_(inst_38986)){
var statearr_39028_40138 = state_39004__$1;
(statearr_39028_40138[(1)] = (5));

} else {
var statearr_39029_40139 = state_39004__$1;
(statearr_39029_40139[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39006 === (6))){
var inst_38985 = (state_39004[(7)]);
var inst_38990 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_38985) : p.call(null,inst_38985));
var state_39004__$1 = state_39004;
if(cljs.core.truth_(inst_38990)){
var statearr_39030_40140 = state_39004__$1;
(statearr_39030_40140[(1)] = (8));

} else {
var statearr_39031_40141 = state_39004__$1;
(statearr_39031_40141[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39006 === (3))){
var inst_39001 = (state_39004[(2)]);
var state_39004__$1 = state_39004;
return cljs.core.async.impl.ioc_helpers.return_chan(state_39004__$1,inst_39001);
} else {
if((state_val_39006 === (2))){
var state_39004__$1 = state_39004;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39004__$1,(4),ch);
} else {
if((state_val_39006 === (11))){
var inst_38993 = (state_39004[(2)]);
var state_39004__$1 = state_39004;
var statearr_39039_40142 = state_39004__$1;
(statearr_39039_40142[(2)] = inst_38993);

(statearr_39039_40142[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39006 === (9))){
var state_39004__$1 = state_39004;
var statearr_39041_40143 = state_39004__$1;
(statearr_39041_40143[(2)] = null);

(statearr_39041_40143[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39006 === (5))){
var inst_38988 = cljs.core.async.close_BANG_(out);
var state_39004__$1 = state_39004;
var statearr_39047_40144 = state_39004__$1;
(statearr_39047_40144[(2)] = inst_38988);

(statearr_39047_40144[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39006 === (10))){
var inst_38996 = (state_39004[(2)]);
var state_39004__$1 = (function (){var statearr_39050 = state_39004;
(statearr_39050[(8)] = inst_38996);

return statearr_39050;
})();
var statearr_39052_40145 = state_39004__$1;
(statearr_39052_40145[(2)] = null);

(statearr_39052_40145[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39006 === (8))){
var inst_38985 = (state_39004[(7)]);
var state_39004__$1 = state_39004;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39004__$1,(11),out,inst_38985);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__35472__auto__ = null;
var cljs$core$async$state_machine__35472__auto____0 = (function (){
var statearr_39057 = [null,null,null,null,null,null,null,null,null];
(statearr_39057[(0)] = cljs$core$async$state_machine__35472__auto__);

(statearr_39057[(1)] = (1));

return statearr_39057;
});
var cljs$core$async$state_machine__35472__auto____1 = (function (state_39004){
while(true){
var ret_value__35473__auto__ = (function (){try{while(true){
var result__35474__auto__ = switch__35471__auto__(state_39004);
if(cljs.core.keyword_identical_QMARK_(result__35474__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35474__auto__;
}
break;
}
}catch (e39061){var ex__35475__auto__ = e39061;
var statearr_39063_40146 = state_39004;
(statearr_39063_40146[(2)] = ex__35475__auto__);


if(cljs.core.seq((state_39004[(4)]))){
var statearr_39065_40147 = state_39004;
(statearr_39065_40147[(1)] = cljs.core.first((state_39004[(4)])));

} else {
throw ex__35475__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35473__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40148 = state_39004;
state_39004 = G__40148;
continue;
} else {
return ret_value__35473__auto__;
}
break;
}
});
cljs$core$async$state_machine__35472__auto__ = function(state_39004){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35472__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35472__auto____1.call(this,state_39004);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35472__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35472__auto____0;
cljs$core$async$state_machine__35472__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35472__auto____1;
return cljs$core$async$state_machine__35472__auto__;
})()
})();
var state__35987__auto__ = (function (){var statearr_39069 = f__35986__auto__();
(statearr_39069[(6)] = c__35985__auto___40135);

return statearr_39069;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35987__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__39072 = arguments.length;
switch (G__39072) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__35985__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35986__auto__ = (function (){var switch__35471__auto__ = (function (state_39163){
var state_val_39164 = (state_39163[(1)]);
if((state_val_39164 === (7))){
var inst_39159 = (state_39163[(2)]);
var state_39163__$1 = state_39163;
var statearr_39169_40150 = state_39163__$1;
(statearr_39169_40150[(2)] = inst_39159);

(statearr_39169_40150[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39164 === (20))){
var inst_39128 = (state_39163[(7)]);
var inst_39140 = (state_39163[(2)]);
var inst_39141 = cljs.core.next(inst_39128);
var inst_39111 = inst_39141;
var inst_39112 = null;
var inst_39113 = (0);
var inst_39114 = (0);
var state_39163__$1 = (function (){var statearr_39171 = state_39163;
(statearr_39171[(8)] = inst_39112);

(statearr_39171[(9)] = inst_39140);

(statearr_39171[(10)] = inst_39113);

(statearr_39171[(11)] = inst_39111);

(statearr_39171[(12)] = inst_39114);

return statearr_39171;
})();
var statearr_39172_40151 = state_39163__$1;
(statearr_39172_40151[(2)] = null);

(statearr_39172_40151[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39164 === (1))){
var state_39163__$1 = state_39163;
var statearr_39173_40152 = state_39163__$1;
(statearr_39173_40152[(2)] = null);

(statearr_39173_40152[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39164 === (4))){
var inst_39096 = (state_39163[(13)]);
var inst_39096__$1 = (state_39163[(2)]);
var inst_39101 = (inst_39096__$1 == null);
var state_39163__$1 = (function (){var statearr_39174 = state_39163;
(statearr_39174[(13)] = inst_39096__$1);

return statearr_39174;
})();
if(cljs.core.truth_(inst_39101)){
var statearr_39175_40153 = state_39163__$1;
(statearr_39175_40153[(1)] = (5));

} else {
var statearr_39176_40154 = state_39163__$1;
(statearr_39176_40154[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39164 === (15))){
var state_39163__$1 = state_39163;
var statearr_39184_40155 = state_39163__$1;
(statearr_39184_40155[(2)] = null);

(statearr_39184_40155[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39164 === (21))){
var state_39163__$1 = state_39163;
var statearr_39188_40156 = state_39163__$1;
(statearr_39188_40156[(2)] = null);

(statearr_39188_40156[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39164 === (13))){
var inst_39112 = (state_39163[(8)]);
var inst_39113 = (state_39163[(10)]);
var inst_39111 = (state_39163[(11)]);
var inst_39114 = (state_39163[(12)]);
var inst_39121 = (state_39163[(2)]);
var inst_39122 = (inst_39114 + (1));
var tmp39181 = inst_39112;
var tmp39182 = inst_39113;
var tmp39183 = inst_39111;
var inst_39111__$1 = tmp39183;
var inst_39112__$1 = tmp39181;
var inst_39113__$1 = tmp39182;
var inst_39114__$1 = inst_39122;
var state_39163__$1 = (function (){var statearr_39190 = state_39163;
(statearr_39190[(8)] = inst_39112__$1);

(statearr_39190[(10)] = inst_39113__$1);

(statearr_39190[(11)] = inst_39111__$1);

(statearr_39190[(14)] = inst_39121);

(statearr_39190[(12)] = inst_39114__$1);

return statearr_39190;
})();
var statearr_39191_40157 = state_39163__$1;
(statearr_39191_40157[(2)] = null);

(statearr_39191_40157[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39164 === (22))){
var state_39163__$1 = state_39163;
var statearr_39196_40158 = state_39163__$1;
(statearr_39196_40158[(2)] = null);

(statearr_39196_40158[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39164 === (6))){
var inst_39096 = (state_39163[(13)]);
var inst_39109 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_39096) : f.call(null,inst_39096));
var inst_39110 = cljs.core.seq(inst_39109);
var inst_39111 = inst_39110;
var inst_39112 = null;
var inst_39113 = (0);
var inst_39114 = (0);
var state_39163__$1 = (function (){var statearr_39197 = state_39163;
(statearr_39197[(8)] = inst_39112);

(statearr_39197[(10)] = inst_39113);

(statearr_39197[(11)] = inst_39111);

(statearr_39197[(12)] = inst_39114);

return statearr_39197;
})();
var statearr_39201_40159 = state_39163__$1;
(statearr_39201_40159[(2)] = null);

(statearr_39201_40159[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39164 === (17))){
var inst_39128 = (state_39163[(7)]);
var inst_39132 = cljs.core.chunk_first(inst_39128);
var inst_39133 = cljs.core.chunk_rest(inst_39128);
var inst_39134 = cljs.core.count(inst_39132);
var inst_39111 = inst_39133;
var inst_39112 = inst_39132;
var inst_39113 = inst_39134;
var inst_39114 = (0);
var state_39163__$1 = (function (){var statearr_39203 = state_39163;
(statearr_39203[(8)] = inst_39112);

(statearr_39203[(10)] = inst_39113);

(statearr_39203[(11)] = inst_39111);

(statearr_39203[(12)] = inst_39114);

return statearr_39203;
})();
var statearr_39204_40160 = state_39163__$1;
(statearr_39204_40160[(2)] = null);

(statearr_39204_40160[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39164 === (3))){
var inst_39161 = (state_39163[(2)]);
var state_39163__$1 = state_39163;
return cljs.core.async.impl.ioc_helpers.return_chan(state_39163__$1,inst_39161);
} else {
if((state_val_39164 === (12))){
var inst_39149 = (state_39163[(2)]);
var state_39163__$1 = state_39163;
var statearr_39209_40161 = state_39163__$1;
(statearr_39209_40161[(2)] = inst_39149);

(statearr_39209_40161[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39164 === (2))){
var state_39163__$1 = state_39163;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39163__$1,(4),in$);
} else {
if((state_val_39164 === (23))){
var inst_39157 = (state_39163[(2)]);
var state_39163__$1 = state_39163;
var statearr_39210_40163 = state_39163__$1;
(statearr_39210_40163[(2)] = inst_39157);

(statearr_39210_40163[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39164 === (19))){
var inst_39144 = (state_39163[(2)]);
var state_39163__$1 = state_39163;
var statearr_39211_40164 = state_39163__$1;
(statearr_39211_40164[(2)] = inst_39144);

(statearr_39211_40164[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39164 === (11))){
var inst_39111 = (state_39163[(11)]);
var inst_39128 = (state_39163[(7)]);
var inst_39128__$1 = cljs.core.seq(inst_39111);
var state_39163__$1 = (function (){var statearr_39212 = state_39163;
(statearr_39212[(7)] = inst_39128__$1);

return statearr_39212;
})();
if(inst_39128__$1){
var statearr_39213_40167 = state_39163__$1;
(statearr_39213_40167[(1)] = (14));

} else {
var statearr_39214_40168 = state_39163__$1;
(statearr_39214_40168[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39164 === (9))){
var inst_39151 = (state_39163[(2)]);
var inst_39152 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_39163__$1 = (function (){var statearr_39215 = state_39163;
(statearr_39215[(15)] = inst_39151);

return statearr_39215;
})();
if(cljs.core.truth_(inst_39152)){
var statearr_39216_40169 = state_39163__$1;
(statearr_39216_40169[(1)] = (21));

} else {
var statearr_39217_40170 = state_39163__$1;
(statearr_39217_40170[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39164 === (5))){
var inst_39103 = cljs.core.async.close_BANG_(out);
var state_39163__$1 = state_39163;
var statearr_39218_40171 = state_39163__$1;
(statearr_39218_40171[(2)] = inst_39103);

(statearr_39218_40171[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39164 === (14))){
var inst_39128 = (state_39163[(7)]);
var inst_39130 = cljs.core.chunked_seq_QMARK_(inst_39128);
var state_39163__$1 = state_39163;
if(inst_39130){
var statearr_39219_40172 = state_39163__$1;
(statearr_39219_40172[(1)] = (17));

} else {
var statearr_39220_40173 = state_39163__$1;
(statearr_39220_40173[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39164 === (16))){
var inst_39147 = (state_39163[(2)]);
var state_39163__$1 = state_39163;
var statearr_39221_40174 = state_39163__$1;
(statearr_39221_40174[(2)] = inst_39147);

(statearr_39221_40174[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39164 === (10))){
var inst_39112 = (state_39163[(8)]);
var inst_39114 = (state_39163[(12)]);
var inst_39119 = cljs.core._nth(inst_39112,inst_39114);
var state_39163__$1 = state_39163;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39163__$1,(13),out,inst_39119);
} else {
if((state_val_39164 === (18))){
var inst_39128 = (state_39163[(7)]);
var inst_39138 = cljs.core.first(inst_39128);
var state_39163__$1 = state_39163;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39163__$1,(20),out,inst_39138);
} else {
if((state_val_39164 === (8))){
var inst_39113 = (state_39163[(10)]);
var inst_39114 = (state_39163[(12)]);
var inst_39116 = (inst_39114 < inst_39113);
var inst_39117 = inst_39116;
var state_39163__$1 = state_39163;
if(cljs.core.truth_(inst_39117)){
var statearr_39222_40180 = state_39163__$1;
(statearr_39222_40180[(1)] = (10));

} else {
var statearr_39223_40181 = state_39163__$1;
(statearr_39223_40181[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__35472__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__35472__auto____0 = (function (){
var statearr_39224 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39224[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__35472__auto__);

(statearr_39224[(1)] = (1));

return statearr_39224;
});
var cljs$core$async$mapcat_STAR__$_state_machine__35472__auto____1 = (function (state_39163){
while(true){
var ret_value__35473__auto__ = (function (){try{while(true){
var result__35474__auto__ = switch__35471__auto__(state_39163);
if(cljs.core.keyword_identical_QMARK_(result__35474__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35474__auto__;
}
break;
}
}catch (e39225){var ex__35475__auto__ = e39225;
var statearr_39226_40182 = state_39163;
(statearr_39226_40182[(2)] = ex__35475__auto__);


if(cljs.core.seq((state_39163[(4)]))){
var statearr_39227_40183 = state_39163;
(statearr_39227_40183[(1)] = cljs.core.first((state_39163[(4)])));

} else {
throw ex__35475__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35473__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40193 = state_39163;
state_39163 = G__40193;
continue;
} else {
return ret_value__35473__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__35472__auto__ = function(state_39163){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__35472__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__35472__auto____1.call(this,state_39163);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__35472__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__35472__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__35472__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__35472__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__35472__auto__;
})()
})();
var state__35987__auto__ = (function (){var statearr_39228 = f__35986__auto__();
(statearr_39228[(6)] = c__35985__auto__);

return statearr_39228;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35987__auto__);
}));

return c__35985__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__39230 = arguments.length;
switch (G__39230) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__39236 = arguments.length;
switch (G__39236) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__39239 = arguments.length;
switch (G__39239) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__35985__auto___40200 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35986__auto__ = (function (){var switch__35471__auto__ = (function (state_39265){
var state_val_39266 = (state_39265[(1)]);
if((state_val_39266 === (7))){
var inst_39260 = (state_39265[(2)]);
var state_39265__$1 = state_39265;
var statearr_39267_40205 = state_39265__$1;
(statearr_39267_40205[(2)] = inst_39260);

(statearr_39267_40205[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39266 === (1))){
var inst_39242 = null;
var state_39265__$1 = (function (){var statearr_39268 = state_39265;
(statearr_39268[(7)] = inst_39242);

return statearr_39268;
})();
var statearr_39269_40206 = state_39265__$1;
(statearr_39269_40206[(2)] = null);

(statearr_39269_40206[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39266 === (4))){
var inst_39245 = (state_39265[(8)]);
var inst_39245__$1 = (state_39265[(2)]);
var inst_39246 = (inst_39245__$1 == null);
var inst_39247 = cljs.core.not(inst_39246);
var state_39265__$1 = (function (){var statearr_39270 = state_39265;
(statearr_39270[(8)] = inst_39245__$1);

return statearr_39270;
})();
if(inst_39247){
var statearr_39271_40207 = state_39265__$1;
(statearr_39271_40207[(1)] = (5));

} else {
var statearr_39272_40208 = state_39265__$1;
(statearr_39272_40208[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39266 === (6))){
var state_39265__$1 = state_39265;
var statearr_39273_40209 = state_39265__$1;
(statearr_39273_40209[(2)] = null);

(statearr_39273_40209[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39266 === (3))){
var inst_39262 = (state_39265[(2)]);
var inst_39263 = cljs.core.async.close_BANG_(out);
var state_39265__$1 = (function (){var statearr_39274 = state_39265;
(statearr_39274[(9)] = inst_39262);

return statearr_39274;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_39265__$1,inst_39263);
} else {
if((state_val_39266 === (2))){
var state_39265__$1 = state_39265;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39265__$1,(4),ch);
} else {
if((state_val_39266 === (11))){
var inst_39245 = (state_39265[(8)]);
var inst_39254 = (state_39265[(2)]);
var inst_39242 = inst_39245;
var state_39265__$1 = (function (){var statearr_39275 = state_39265;
(statearr_39275[(10)] = inst_39254);

(statearr_39275[(7)] = inst_39242);

return statearr_39275;
})();
var statearr_39276_40212 = state_39265__$1;
(statearr_39276_40212[(2)] = null);

(statearr_39276_40212[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39266 === (9))){
var inst_39245 = (state_39265[(8)]);
var state_39265__$1 = state_39265;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39265__$1,(11),out,inst_39245);
} else {
if((state_val_39266 === (5))){
var inst_39242 = (state_39265[(7)]);
var inst_39245 = (state_39265[(8)]);
var inst_39249 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_39245,inst_39242);
var state_39265__$1 = state_39265;
if(inst_39249){
var statearr_39279_40213 = state_39265__$1;
(statearr_39279_40213[(1)] = (8));

} else {
var statearr_39280_40214 = state_39265__$1;
(statearr_39280_40214[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39266 === (10))){
var inst_39257 = (state_39265[(2)]);
var state_39265__$1 = state_39265;
var statearr_39281_40215 = state_39265__$1;
(statearr_39281_40215[(2)] = inst_39257);

(statearr_39281_40215[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39266 === (8))){
var inst_39242 = (state_39265[(7)]);
var tmp39277 = inst_39242;
var inst_39242__$1 = tmp39277;
var state_39265__$1 = (function (){var statearr_39282 = state_39265;
(statearr_39282[(7)] = inst_39242__$1);

return statearr_39282;
})();
var statearr_39283_40216 = state_39265__$1;
(statearr_39283_40216[(2)] = null);

(statearr_39283_40216[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__35472__auto__ = null;
var cljs$core$async$state_machine__35472__auto____0 = (function (){
var statearr_39285 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_39285[(0)] = cljs$core$async$state_machine__35472__auto__);

(statearr_39285[(1)] = (1));

return statearr_39285;
});
var cljs$core$async$state_machine__35472__auto____1 = (function (state_39265){
while(true){
var ret_value__35473__auto__ = (function (){try{while(true){
var result__35474__auto__ = switch__35471__auto__(state_39265);
if(cljs.core.keyword_identical_QMARK_(result__35474__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35474__auto__;
}
break;
}
}catch (e39286){var ex__35475__auto__ = e39286;
var statearr_39287_40217 = state_39265;
(statearr_39287_40217[(2)] = ex__35475__auto__);


if(cljs.core.seq((state_39265[(4)]))){
var statearr_39288_40219 = state_39265;
(statearr_39288_40219[(1)] = cljs.core.first((state_39265[(4)])));

} else {
throw ex__35475__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35473__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40220 = state_39265;
state_39265 = G__40220;
continue;
} else {
return ret_value__35473__auto__;
}
break;
}
});
cljs$core$async$state_machine__35472__auto__ = function(state_39265){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35472__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35472__auto____1.call(this,state_39265);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35472__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35472__auto____0;
cljs$core$async$state_machine__35472__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35472__auto____1;
return cljs$core$async$state_machine__35472__auto__;
})()
})();
var state__35987__auto__ = (function (){var statearr_39289 = f__35986__auto__();
(statearr_39289[(6)] = c__35985__auto___40200);

return statearr_39289;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35987__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__39291 = arguments.length;
switch (G__39291) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__35985__auto___40223 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35986__auto__ = (function (){var switch__35471__auto__ = (function (state_39331){
var state_val_39332 = (state_39331[(1)]);
if((state_val_39332 === (7))){
var inst_39327 = (state_39331[(2)]);
var state_39331__$1 = state_39331;
var statearr_39333_40224 = state_39331__$1;
(statearr_39333_40224[(2)] = inst_39327);

(statearr_39333_40224[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39332 === (1))){
var inst_39292 = (new Array(n));
var inst_39293 = inst_39292;
var inst_39294 = (0);
var state_39331__$1 = (function (){var statearr_39334 = state_39331;
(statearr_39334[(7)] = inst_39294);

(statearr_39334[(8)] = inst_39293);

return statearr_39334;
})();
var statearr_39335_40225 = state_39331__$1;
(statearr_39335_40225[(2)] = null);

(statearr_39335_40225[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39332 === (4))){
var inst_39297 = (state_39331[(9)]);
var inst_39297__$1 = (state_39331[(2)]);
var inst_39298 = (inst_39297__$1 == null);
var inst_39299 = cljs.core.not(inst_39298);
var state_39331__$1 = (function (){var statearr_39336 = state_39331;
(statearr_39336[(9)] = inst_39297__$1);

return statearr_39336;
})();
if(inst_39299){
var statearr_39337_40226 = state_39331__$1;
(statearr_39337_40226[(1)] = (5));

} else {
var statearr_39339_40227 = state_39331__$1;
(statearr_39339_40227[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39332 === (15))){
var inst_39321 = (state_39331[(2)]);
var state_39331__$1 = state_39331;
var statearr_39340_40228 = state_39331__$1;
(statearr_39340_40228[(2)] = inst_39321);

(statearr_39340_40228[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39332 === (13))){
var state_39331__$1 = state_39331;
var statearr_39342_40229 = state_39331__$1;
(statearr_39342_40229[(2)] = null);

(statearr_39342_40229[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39332 === (6))){
var inst_39294 = (state_39331[(7)]);
var inst_39317 = (inst_39294 > (0));
var state_39331__$1 = state_39331;
if(cljs.core.truth_(inst_39317)){
var statearr_39343_40230 = state_39331__$1;
(statearr_39343_40230[(1)] = (12));

} else {
var statearr_39344_40231 = state_39331__$1;
(statearr_39344_40231[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39332 === (3))){
var inst_39329 = (state_39331[(2)]);
var state_39331__$1 = state_39331;
return cljs.core.async.impl.ioc_helpers.return_chan(state_39331__$1,inst_39329);
} else {
if((state_val_39332 === (12))){
var inst_39293 = (state_39331[(8)]);
var inst_39319 = cljs.core.vec(inst_39293);
var state_39331__$1 = state_39331;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39331__$1,(15),out,inst_39319);
} else {
if((state_val_39332 === (2))){
var state_39331__$1 = state_39331;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39331__$1,(4),ch);
} else {
if((state_val_39332 === (11))){
var inst_39311 = (state_39331[(2)]);
var inst_39312 = (new Array(n));
var inst_39293 = inst_39312;
var inst_39294 = (0);
var state_39331__$1 = (function (){var statearr_39345 = state_39331;
(statearr_39345[(7)] = inst_39294);

(statearr_39345[(10)] = inst_39311);

(statearr_39345[(8)] = inst_39293);

return statearr_39345;
})();
var statearr_39346_40233 = state_39331__$1;
(statearr_39346_40233[(2)] = null);

(statearr_39346_40233[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39332 === (9))){
var inst_39293 = (state_39331[(8)]);
var inst_39309 = cljs.core.vec(inst_39293);
var state_39331__$1 = state_39331;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39331__$1,(11),out,inst_39309);
} else {
if((state_val_39332 === (5))){
var inst_39303 = (state_39331[(11)]);
var inst_39294 = (state_39331[(7)]);
var inst_39293 = (state_39331[(8)]);
var inst_39297 = (state_39331[(9)]);
var inst_39302 = (inst_39293[inst_39294] = inst_39297);
var inst_39303__$1 = (inst_39294 + (1));
var inst_39304 = (inst_39303__$1 < n);
var state_39331__$1 = (function (){var statearr_39347 = state_39331;
(statearr_39347[(11)] = inst_39303__$1);

(statearr_39347[(12)] = inst_39302);

return statearr_39347;
})();
if(cljs.core.truth_(inst_39304)){
var statearr_39348_40234 = state_39331__$1;
(statearr_39348_40234[(1)] = (8));

} else {
var statearr_39349_40235 = state_39331__$1;
(statearr_39349_40235[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39332 === (14))){
var inst_39324 = (state_39331[(2)]);
var inst_39325 = cljs.core.async.close_BANG_(out);
var state_39331__$1 = (function (){var statearr_39351 = state_39331;
(statearr_39351[(13)] = inst_39324);

return statearr_39351;
})();
var statearr_39352_40236 = state_39331__$1;
(statearr_39352_40236[(2)] = inst_39325);

(statearr_39352_40236[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39332 === (10))){
var inst_39315 = (state_39331[(2)]);
var state_39331__$1 = state_39331;
var statearr_39353_40237 = state_39331__$1;
(statearr_39353_40237[(2)] = inst_39315);

(statearr_39353_40237[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39332 === (8))){
var inst_39303 = (state_39331[(11)]);
var inst_39293 = (state_39331[(8)]);
var tmp39350 = inst_39293;
var inst_39293__$1 = tmp39350;
var inst_39294 = inst_39303;
var state_39331__$1 = (function (){var statearr_39354 = state_39331;
(statearr_39354[(7)] = inst_39294);

(statearr_39354[(8)] = inst_39293__$1);

return statearr_39354;
})();
var statearr_39355_40242 = state_39331__$1;
(statearr_39355_40242[(2)] = null);

(statearr_39355_40242[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__35472__auto__ = null;
var cljs$core$async$state_machine__35472__auto____0 = (function (){
var statearr_39356 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39356[(0)] = cljs$core$async$state_machine__35472__auto__);

(statearr_39356[(1)] = (1));

return statearr_39356;
});
var cljs$core$async$state_machine__35472__auto____1 = (function (state_39331){
while(true){
var ret_value__35473__auto__ = (function (){try{while(true){
var result__35474__auto__ = switch__35471__auto__(state_39331);
if(cljs.core.keyword_identical_QMARK_(result__35474__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35474__auto__;
}
break;
}
}catch (e39358){var ex__35475__auto__ = e39358;
var statearr_39360_40243 = state_39331;
(statearr_39360_40243[(2)] = ex__35475__auto__);


if(cljs.core.seq((state_39331[(4)]))){
var statearr_39361_40244 = state_39331;
(statearr_39361_40244[(1)] = cljs.core.first((state_39331[(4)])));

} else {
throw ex__35475__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35473__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40245 = state_39331;
state_39331 = G__40245;
continue;
} else {
return ret_value__35473__auto__;
}
break;
}
});
cljs$core$async$state_machine__35472__auto__ = function(state_39331){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35472__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35472__auto____1.call(this,state_39331);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35472__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35472__auto____0;
cljs$core$async$state_machine__35472__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35472__auto____1;
return cljs$core$async$state_machine__35472__auto__;
})()
})();
var state__35987__auto__ = (function (){var statearr_39362 = f__35986__auto__();
(statearr_39362[(6)] = c__35985__auto___40223);

return statearr_39362;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35987__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__39364 = arguments.length;
switch (G__39364) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__35985__auto___40247 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35986__auto__ = (function (){var switch__35471__auto__ = (function (state_39418){
var state_val_39419 = (state_39418[(1)]);
if((state_val_39419 === (7))){
var inst_39414 = (state_39418[(2)]);
var state_39418__$1 = state_39418;
var statearr_39420_40248 = state_39418__$1;
(statearr_39420_40248[(2)] = inst_39414);

(statearr_39420_40248[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39419 === (1))){
var inst_39370 = [];
var inst_39371 = inst_39370;
var inst_39372 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_39418__$1 = (function (){var statearr_39421 = state_39418;
(statearr_39421[(7)] = inst_39372);

(statearr_39421[(8)] = inst_39371);

return statearr_39421;
})();
var statearr_39425_40249 = state_39418__$1;
(statearr_39425_40249[(2)] = null);

(statearr_39425_40249[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39419 === (4))){
var inst_39375 = (state_39418[(9)]);
var inst_39375__$1 = (state_39418[(2)]);
var inst_39376 = (inst_39375__$1 == null);
var inst_39377 = cljs.core.not(inst_39376);
var state_39418__$1 = (function (){var statearr_39426 = state_39418;
(statearr_39426[(9)] = inst_39375__$1);

return statearr_39426;
})();
if(inst_39377){
var statearr_39427_40250 = state_39418__$1;
(statearr_39427_40250[(1)] = (5));

} else {
var statearr_39428_40251 = state_39418__$1;
(statearr_39428_40251[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39419 === (15))){
var inst_39371 = (state_39418[(8)]);
var inst_39406 = cljs.core.vec(inst_39371);
var state_39418__$1 = state_39418;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39418__$1,(18),out,inst_39406);
} else {
if((state_val_39419 === (13))){
var inst_39399 = (state_39418[(2)]);
var state_39418__$1 = state_39418;
var statearr_39429_40252 = state_39418__$1;
(statearr_39429_40252[(2)] = inst_39399);

(statearr_39429_40252[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39419 === (6))){
var inst_39371 = (state_39418[(8)]);
var inst_39403 = inst_39371.length;
var inst_39404 = (inst_39403 > (0));
var state_39418__$1 = state_39418;
if(cljs.core.truth_(inst_39404)){
var statearr_39430_40253 = state_39418__$1;
(statearr_39430_40253[(1)] = (15));

} else {
var statearr_39431_40254 = state_39418__$1;
(statearr_39431_40254[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39419 === (17))){
var inst_39411 = (state_39418[(2)]);
var inst_39412 = cljs.core.async.close_BANG_(out);
var state_39418__$1 = (function (){var statearr_39432 = state_39418;
(statearr_39432[(10)] = inst_39411);

return statearr_39432;
})();
var statearr_39433_40255 = state_39418__$1;
(statearr_39433_40255[(2)] = inst_39412);

(statearr_39433_40255[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39419 === (3))){
var inst_39416 = (state_39418[(2)]);
var state_39418__$1 = state_39418;
return cljs.core.async.impl.ioc_helpers.return_chan(state_39418__$1,inst_39416);
} else {
if((state_val_39419 === (12))){
var inst_39371 = (state_39418[(8)]);
var inst_39392 = cljs.core.vec(inst_39371);
var state_39418__$1 = state_39418;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39418__$1,(14),out,inst_39392);
} else {
if((state_val_39419 === (2))){
var state_39418__$1 = state_39418;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39418__$1,(4),ch);
} else {
if((state_val_39419 === (11))){
var inst_39371 = (state_39418[(8)]);
var inst_39375 = (state_39418[(9)]);
var inst_39380 = (state_39418[(11)]);
var inst_39389 = inst_39371.push(inst_39375);
var tmp39434 = inst_39371;
var inst_39371__$1 = tmp39434;
var inst_39372 = inst_39380;
var state_39418__$1 = (function (){var statearr_39442 = state_39418;
(statearr_39442[(7)] = inst_39372);

(statearr_39442[(8)] = inst_39371__$1);

(statearr_39442[(12)] = inst_39389);

return statearr_39442;
})();
var statearr_39443_40260 = state_39418__$1;
(statearr_39443_40260[(2)] = null);

(statearr_39443_40260[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39419 === (9))){
var inst_39372 = (state_39418[(7)]);
var inst_39385 = cljs.core.keyword_identical_QMARK_(inst_39372,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_39418__$1 = state_39418;
var statearr_39450_40261 = state_39418__$1;
(statearr_39450_40261[(2)] = inst_39385);

(statearr_39450_40261[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39419 === (5))){
var inst_39372 = (state_39418[(7)]);
var inst_39375 = (state_39418[(9)]);
var inst_39382 = (state_39418[(13)]);
var inst_39380 = (state_39418[(11)]);
var inst_39380__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_39375) : f.call(null,inst_39375));
var inst_39382__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_39380__$1,inst_39372);
var state_39418__$1 = (function (){var statearr_39457 = state_39418;
(statearr_39457[(13)] = inst_39382__$1);

(statearr_39457[(11)] = inst_39380__$1);

return statearr_39457;
})();
if(inst_39382__$1){
var statearr_39458_40262 = state_39418__$1;
(statearr_39458_40262[(1)] = (8));

} else {
var statearr_39459_40263 = state_39418__$1;
(statearr_39459_40263[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39419 === (14))){
var inst_39375 = (state_39418[(9)]);
var inst_39380 = (state_39418[(11)]);
var inst_39394 = (state_39418[(2)]);
var inst_39395 = [];
var inst_39396 = inst_39395.push(inst_39375);
var inst_39371 = inst_39395;
var inst_39372 = inst_39380;
var state_39418__$1 = (function (){var statearr_39460 = state_39418;
(statearr_39460[(7)] = inst_39372);

(statearr_39460[(14)] = inst_39396);

(statearr_39460[(8)] = inst_39371);

(statearr_39460[(15)] = inst_39394);

return statearr_39460;
})();
var statearr_39461_40264 = state_39418__$1;
(statearr_39461_40264[(2)] = null);

(statearr_39461_40264[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39419 === (16))){
var state_39418__$1 = state_39418;
var statearr_39462_40265 = state_39418__$1;
(statearr_39462_40265[(2)] = null);

(statearr_39462_40265[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39419 === (10))){
var inst_39387 = (state_39418[(2)]);
var state_39418__$1 = state_39418;
if(cljs.core.truth_(inst_39387)){
var statearr_39463_40266 = state_39418__$1;
(statearr_39463_40266[(1)] = (11));

} else {
var statearr_39464_40267 = state_39418__$1;
(statearr_39464_40267[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39419 === (18))){
var inst_39408 = (state_39418[(2)]);
var state_39418__$1 = state_39418;
var statearr_39465_40268 = state_39418__$1;
(statearr_39465_40268[(2)] = inst_39408);

(statearr_39465_40268[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39419 === (8))){
var inst_39382 = (state_39418[(13)]);
var state_39418__$1 = state_39418;
var statearr_39466_40272 = state_39418__$1;
(statearr_39466_40272[(2)] = inst_39382);

(statearr_39466_40272[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__35472__auto__ = null;
var cljs$core$async$state_machine__35472__auto____0 = (function (){
var statearr_39477 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39477[(0)] = cljs$core$async$state_machine__35472__auto__);

(statearr_39477[(1)] = (1));

return statearr_39477;
});
var cljs$core$async$state_machine__35472__auto____1 = (function (state_39418){
while(true){
var ret_value__35473__auto__ = (function (){try{while(true){
var result__35474__auto__ = switch__35471__auto__(state_39418);
if(cljs.core.keyword_identical_QMARK_(result__35474__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35474__auto__;
}
break;
}
}catch (e39481){var ex__35475__auto__ = e39481;
var statearr_39482_40273 = state_39418;
(statearr_39482_40273[(2)] = ex__35475__auto__);


if(cljs.core.seq((state_39418[(4)]))){
var statearr_39483_40274 = state_39418;
(statearr_39483_40274[(1)] = cljs.core.first((state_39418[(4)])));

} else {
throw ex__35475__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35473__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40275 = state_39418;
state_39418 = G__40275;
continue;
} else {
return ret_value__35473__auto__;
}
break;
}
});
cljs$core$async$state_machine__35472__auto__ = function(state_39418){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35472__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35472__auto____1.call(this,state_39418);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35472__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35472__auto____0;
cljs$core$async$state_machine__35472__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35472__auto____1;
return cljs$core$async$state_machine__35472__auto__;
})()
})();
var state__35987__auto__ = (function (){var statearr_39484 = f__35986__auto__();
(statearr_39484[(6)] = c__35985__auto___40247);

return statearr_39484;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35987__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map

goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17625 = (function (f,blockable,meta17626){
this.f = f;
this.blockable = blockable;
this.meta17626 = meta17626;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17625.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17627,meta17626__$1){
var self__ = this;
var _17627__$1 = this;
return (new cljs.core.async.t_cljs$core$async17625(self__.f,self__.blockable,meta17626__$1));
}));

(cljs.core.async.t_cljs$core$async17625.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17627){
var self__ = this;
var _17627__$1 = this;
return self__.meta17626;
}));

(cljs.core.async.t_cljs$core$async17625.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17625.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async17625.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async17625.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async17625.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta17626","meta17626",-776489657,null)], null);
}));

(cljs.core.async.t_cljs$core$async17625.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17625.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17625");

(cljs.core.async.t_cljs$core$async17625.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async17625");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17625.
 */
cljs.core.async.__GT_t_cljs$core$async17625 = (function cljs$core$async$__GT_t_cljs$core$async17625(f,blockable,meta17626){
return (new cljs.core.async.t_cljs$core$async17625(f,blockable,meta17626));
});


cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__17624 = arguments.length;
switch (G__17624) {
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
return (new cljs.core.async.t_cljs$core$async17625(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__17630 = arguments.length;
switch (G__17630) {
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
var G__17632 = arguments.length;
switch (G__17632) {
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
var G__17636 = arguments.length;
switch (G__17636) {
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
var val_19875 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_19875) : fn1.call(null,val_19875));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_19875) : fn1.call(null,val_19875));
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
var G__17638 = arguments.length;
switch (G__17638) {
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
var n__5636__auto___19877 = n;
var x_19878 = (0);
while(true){
if((x_19878 < n__5636__auto___19877)){
(a[x_19878] = x_19878);

var G__19880 = (x_19878 + (1));
x_19878 = G__19880;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17650 = (function (flag,meta17651){
this.flag = flag;
this.meta17651 = meta17651;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17650.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17652,meta17651__$1){
var self__ = this;
var _17652__$1 = this;
return (new cljs.core.async.t_cljs$core$async17650(self__.flag,meta17651__$1));
}));

(cljs.core.async.t_cljs$core$async17650.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17652){
var self__ = this;
var _17652__$1 = this;
return self__.meta17651;
}));

(cljs.core.async.t_cljs$core$async17650.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17650.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async17650.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async17650.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async17650.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta17651","meta17651",1611394668,null)], null);
}));

(cljs.core.async.t_cljs$core$async17650.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17650.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17650");

(cljs.core.async.t_cljs$core$async17650.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async17650");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17650.
 */
cljs.core.async.__GT_t_cljs$core$async17650 = (function cljs$core$async$__GT_t_cljs$core$async17650(flag,meta17651){
return (new cljs.core.async.t_cljs$core$async17650(flag,meta17651));
});


cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (new cljs.core.async.t_cljs$core$async17650(flag,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17667 = (function (flag,cb,meta17668){
this.flag = flag;
this.cb = cb;
this.meta17668 = meta17668;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17667.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17669,meta17668__$1){
var self__ = this;
var _17669__$1 = this;
return (new cljs.core.async.t_cljs$core$async17667(self__.flag,self__.cb,meta17668__$1));
}));

(cljs.core.async.t_cljs$core$async17667.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17669){
var self__ = this;
var _17669__$1 = this;
return self__.meta17668;
}));

(cljs.core.async.t_cljs$core$async17667.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17667.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async17667.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async17667.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async17667.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta17668","meta17668",-814882132,null)], null);
}));

(cljs.core.async.t_cljs$core$async17667.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17667.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17667");

(cljs.core.async.t_cljs$core$async17667.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async17667");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17667.
 */
cljs.core.async.__GT_t_cljs$core$async17667 = (function cljs$core$async$__GT_t_cljs$core$async17667(flag,cb,meta17668){
return (new cljs.core.async.t_cljs$core$async17667(flag,cb,meta17668));
});


cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
return (new cljs.core.async.t_cljs$core$async17667(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__17670_SHARP_){
var G__17672 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__17670_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__17672) : fret.call(null,G__17672));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__17671_SHARP_){
var G__17673 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__17671_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__17673) : fret.call(null,G__17673));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5045__auto__ = wport;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return port;
}
})()], null));
} else {
var G__19881 = (i + (1));
i = G__19881;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5045__auto__ = ret;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5804__auto__ = (function (){var and__5043__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__5043__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__5043__auto__;
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
var args__5775__auto__ = [];
var len__5769__auto___19884 = arguments.length;
var i__5770__auto___19885 = (0);
while(true){
if((i__5770__auto___19885 < len__5769__auto___19884)){
args__5775__auto__.push((arguments[i__5770__auto___19885]));

var G__19886 = (i__5770__auto___19885 + (1));
i__5770__auto___19885 = G__19886;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__17676){
var map__17677 = p__17676;
var map__17677__$1 = cljs.core.__destructure_map(map__17677);
var opts = map__17677__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq17674){
var G__17675 = cljs.core.first(seq17674);
var seq17674__$1 = cljs.core.next(seq17674);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17675,seq17674__$1);
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
var G__17684 = arguments.length;
switch (G__17684) {
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
var c__17547__auto___19895 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17548__auto__ = (function (){var switch__17198__auto__ = (function (state_17732){
var state_val_17738 = (state_17732[(1)]);
if((state_val_17738 === (7))){
var inst_17720 = (state_17732[(2)]);
var state_17732__$1 = state_17732;
var statearr_17758_19897 = state_17732__$1;
(statearr_17758_19897[(2)] = inst_17720);

(statearr_17758_19897[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17738 === (1))){
var state_17732__$1 = state_17732;
var statearr_17759_19898 = state_17732__$1;
(statearr_17759_19898[(2)] = null);

(statearr_17759_19898[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17738 === (4))){
var inst_17695 = (state_17732[(7)]);
var inst_17695__$1 = (state_17732[(2)]);
var inst_17696 = (inst_17695__$1 == null);
var state_17732__$1 = (function (){var statearr_17781 = state_17732;
(statearr_17781[(7)] = inst_17695__$1);

return statearr_17781;
})();
if(cljs.core.truth_(inst_17696)){
var statearr_17783_19899 = state_17732__$1;
(statearr_17783_19899[(1)] = (5));

} else {
var statearr_17785_19900 = state_17732__$1;
(statearr_17785_19900[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17738 === (13))){
var state_17732__$1 = state_17732;
var statearr_17787_19901 = state_17732__$1;
(statearr_17787_19901[(2)] = null);

(statearr_17787_19901[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17738 === (6))){
var inst_17695 = (state_17732[(7)]);
var state_17732__$1 = state_17732;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17732__$1,(11),to,inst_17695);
} else {
if((state_val_17738 === (3))){
var inst_17726 = (state_17732[(2)]);
var state_17732__$1 = state_17732;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17732__$1,inst_17726);
} else {
if((state_val_17738 === (12))){
var state_17732__$1 = state_17732;
var statearr_17790_19903 = state_17732__$1;
(statearr_17790_19903[(2)] = null);

(statearr_17790_19903[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17738 === (2))){
var state_17732__$1 = state_17732;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17732__$1,(4),from);
} else {
if((state_val_17738 === (11))){
var inst_17713 = (state_17732[(2)]);
var state_17732__$1 = state_17732;
if(cljs.core.truth_(inst_17713)){
var statearr_17791_19906 = state_17732__$1;
(statearr_17791_19906[(1)] = (12));

} else {
var statearr_17792_19908 = state_17732__$1;
(statearr_17792_19908[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17738 === (9))){
var state_17732__$1 = state_17732;
var statearr_17794_19909 = state_17732__$1;
(statearr_17794_19909[(2)] = null);

(statearr_17794_19909[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17738 === (5))){
var state_17732__$1 = state_17732;
if(cljs.core.truth_(close_QMARK_)){
var statearr_17795_19910 = state_17732__$1;
(statearr_17795_19910[(1)] = (8));

} else {
var statearr_17796_19911 = state_17732__$1;
(statearr_17796_19911[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17738 === (14))){
var inst_17718 = (state_17732[(2)]);
var state_17732__$1 = state_17732;
var statearr_17797_19912 = state_17732__$1;
(statearr_17797_19912[(2)] = inst_17718);

(statearr_17797_19912[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17738 === (10))){
var inst_17710 = (state_17732[(2)]);
var state_17732__$1 = state_17732;
var statearr_17802_19913 = state_17732__$1;
(statearr_17802_19913[(2)] = inst_17710);

(statearr_17802_19913[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17738 === (8))){
var inst_17702 = cljs.core.async.close_BANG_(to);
var state_17732__$1 = state_17732;
var statearr_17811_19918 = state_17732__$1;
(statearr_17811_19918[(2)] = inst_17702);

(statearr_17811_19918[(1)] = (10));


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
var cljs$core$async$state_machine__17199__auto__ = null;
var cljs$core$async$state_machine__17199__auto____0 = (function (){
var statearr_17821 = [null,null,null,null,null,null,null,null];
(statearr_17821[(0)] = cljs$core$async$state_machine__17199__auto__);

(statearr_17821[(1)] = (1));

return statearr_17821;
});
var cljs$core$async$state_machine__17199__auto____1 = (function (state_17732){
while(true){
var ret_value__17200__auto__ = (function (){try{while(true){
var result__17201__auto__ = switch__17198__auto__(state_17732);
if(cljs.core.keyword_identical_QMARK_(result__17201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17201__auto__;
}
break;
}
}catch (e17822){var ex__17202__auto__ = e17822;
var statearr_17823_19921 = state_17732;
(statearr_17823_19921[(2)] = ex__17202__auto__);


if(cljs.core.seq((state_17732[(4)]))){
var statearr_17824_19922 = state_17732;
(statearr_17824_19922[(1)] = cljs.core.first((state_17732[(4)])));

} else {
throw ex__17202__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19923 = state_17732;
state_17732 = G__19923;
continue;
} else {
return ret_value__17200__auto__;
}
break;
}
});
cljs$core$async$state_machine__17199__auto__ = function(state_17732){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17199__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17199__auto____1.call(this,state_17732);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17199__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17199__auto____0;
cljs$core$async$state_machine__17199__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17199__auto____1;
return cljs$core$async$state_machine__17199__auto__;
})()
})();
var state__17549__auto__ = (function (){var statearr_17825 = f__17548__auto__();
(statearr_17825[(6)] = c__17547__auto___19895);

return statearr_17825;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17549__auto__);
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
var process__$1 = (function (p__17827){
var vec__17828 = p__17827;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17828,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17828,(1),null);
var job = vec__17828;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__17547__auto___19929 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17548__auto__ = (function (){var switch__17198__auto__ = (function (state_17836){
var state_val_17837 = (state_17836[(1)]);
if((state_val_17837 === (1))){
var state_17836__$1 = state_17836;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17836__$1,(2),res,v);
} else {
if((state_val_17837 === (2))){
var inst_17833 = (state_17836[(2)]);
var inst_17834 = cljs.core.async.close_BANG_(res);
var state_17836__$1 = (function (){var statearr_17838 = state_17836;
(statearr_17838[(7)] = inst_17833);

return statearr_17838;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_17836__$1,inst_17834);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__17199__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__17199__auto____0 = (function (){
var statearr_17839 = [null,null,null,null,null,null,null,null];
(statearr_17839[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17199__auto__);

(statearr_17839[(1)] = (1));

return statearr_17839;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17199__auto____1 = (function (state_17836){
while(true){
var ret_value__17200__auto__ = (function (){try{while(true){
var result__17201__auto__ = switch__17198__auto__(state_17836);
if(cljs.core.keyword_identical_QMARK_(result__17201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17201__auto__;
}
break;
}
}catch (e17841){var ex__17202__auto__ = e17841;
var statearr_17842_19931 = state_17836;
(statearr_17842_19931[(2)] = ex__17202__auto__);


if(cljs.core.seq((state_17836[(4)]))){
var statearr_17843_19933 = state_17836;
(statearr_17843_19933[(1)] = cljs.core.first((state_17836[(4)])));

} else {
throw ex__17202__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19934 = state_17836;
state_17836 = G__19934;
continue;
} else {
return ret_value__17200__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17199__auto__ = function(state_17836){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17199__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17199__auto____1.call(this,state_17836);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__17199__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17199__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17199__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17199__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17199__auto__;
})()
})();
var state__17549__auto__ = (function (){var statearr_17844 = f__17548__auto__();
(statearr_17844[(6)] = c__17547__auto___19929);

return statearr_17844;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17549__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__17845){
var vec__17846 = p__17845;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17846,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17846,(1),null);
var job = vec__17846;
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
var n__5636__auto___19935 = n;
var __19937 = (0);
while(true){
if((__19937 < n__5636__auto___19935)){
var G__17850_19939 = type;
var G__17850_19940__$1 = (((G__17850_19939 instanceof cljs.core.Keyword))?G__17850_19939.fqn:null);
switch (G__17850_19940__$1) {
case "compute":
var c__17547__auto___19942 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__19937,c__17547__auto___19942,G__17850_19939,G__17850_19940__$1,n__5636__auto___19935,jobs,results,process__$1,async){
return (function (){
var f__17548__auto__ = (function (){var switch__17198__auto__ = ((function (__19937,c__17547__auto___19942,G__17850_19939,G__17850_19940__$1,n__5636__auto___19935,jobs,results,process__$1,async){
return (function (state_17863){
var state_val_17864 = (state_17863[(1)]);
if((state_val_17864 === (1))){
var state_17863__$1 = state_17863;
var statearr_17865_19943 = state_17863__$1;
(statearr_17865_19943[(2)] = null);

(statearr_17865_19943[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17864 === (2))){
var state_17863__$1 = state_17863;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17863__$1,(4),jobs);
} else {
if((state_val_17864 === (3))){
var inst_17861 = (state_17863[(2)]);
var state_17863__$1 = state_17863;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17863__$1,inst_17861);
} else {
if((state_val_17864 === (4))){
var inst_17853 = (state_17863[(2)]);
var inst_17854 = process__$1(inst_17853);
var state_17863__$1 = state_17863;
if(cljs.core.truth_(inst_17854)){
var statearr_17867_19944 = state_17863__$1;
(statearr_17867_19944[(1)] = (5));

} else {
var statearr_17868_19945 = state_17863__$1;
(statearr_17868_19945[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17864 === (5))){
var state_17863__$1 = state_17863;
var statearr_17869_19946 = state_17863__$1;
(statearr_17869_19946[(2)] = null);

(statearr_17869_19946[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17864 === (6))){
var state_17863__$1 = state_17863;
var statearr_17870_19947 = state_17863__$1;
(statearr_17870_19947[(2)] = null);

(statearr_17870_19947[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17864 === (7))){
var inst_17859 = (state_17863[(2)]);
var state_17863__$1 = state_17863;
var statearr_17871_19948 = state_17863__$1;
(statearr_17871_19948[(2)] = inst_17859);

(statearr_17871_19948[(1)] = (3));


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
});})(__19937,c__17547__auto___19942,G__17850_19939,G__17850_19940__$1,n__5636__auto___19935,jobs,results,process__$1,async))
;
return ((function (__19937,switch__17198__auto__,c__17547__auto___19942,G__17850_19939,G__17850_19940__$1,n__5636__auto___19935,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__17199__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__17199__auto____0 = (function (){
var statearr_17872 = [null,null,null,null,null,null,null];
(statearr_17872[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17199__auto__);

(statearr_17872[(1)] = (1));

return statearr_17872;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17199__auto____1 = (function (state_17863){
while(true){
var ret_value__17200__auto__ = (function (){try{while(true){
var result__17201__auto__ = switch__17198__auto__(state_17863);
if(cljs.core.keyword_identical_QMARK_(result__17201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17201__auto__;
}
break;
}
}catch (e17874){var ex__17202__auto__ = e17874;
var statearr_17875_19949 = state_17863;
(statearr_17875_19949[(2)] = ex__17202__auto__);


if(cljs.core.seq((state_17863[(4)]))){
var statearr_17876_19950 = state_17863;
(statearr_17876_19950[(1)] = cljs.core.first((state_17863[(4)])));

} else {
throw ex__17202__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19951 = state_17863;
state_17863 = G__19951;
continue;
} else {
return ret_value__17200__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17199__auto__ = function(state_17863){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17199__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17199__auto____1.call(this,state_17863);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__17199__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17199__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17199__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17199__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17199__auto__;
})()
;})(__19937,switch__17198__auto__,c__17547__auto___19942,G__17850_19939,G__17850_19940__$1,n__5636__auto___19935,jobs,results,process__$1,async))
})();
var state__17549__auto__ = (function (){var statearr_17877 = f__17548__auto__();
(statearr_17877[(6)] = c__17547__auto___19942);

return statearr_17877;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17549__auto__);
});})(__19937,c__17547__auto___19942,G__17850_19939,G__17850_19940__$1,n__5636__auto___19935,jobs,results,process__$1,async))
);


break;
case "async":
var c__17547__auto___19952 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__19937,c__17547__auto___19952,G__17850_19939,G__17850_19940__$1,n__5636__auto___19935,jobs,results,process__$1,async){
return (function (){
var f__17548__auto__ = (function (){var switch__17198__auto__ = ((function (__19937,c__17547__auto___19952,G__17850_19939,G__17850_19940__$1,n__5636__auto___19935,jobs,results,process__$1,async){
return (function (state_17891){
var state_val_17892 = (state_17891[(1)]);
if((state_val_17892 === (1))){
var state_17891__$1 = state_17891;
var statearr_17893_19953 = state_17891__$1;
(statearr_17893_19953[(2)] = null);

(statearr_17893_19953[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17892 === (2))){
var state_17891__$1 = state_17891;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17891__$1,(4),jobs);
} else {
if((state_val_17892 === (3))){
var inst_17888 = (state_17891[(2)]);
var state_17891__$1 = state_17891;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17891__$1,inst_17888);
} else {
if((state_val_17892 === (4))){
var inst_17880 = (state_17891[(2)]);
var inst_17881 = async(inst_17880);
var state_17891__$1 = state_17891;
if(cljs.core.truth_(inst_17881)){
var statearr_17894_19954 = state_17891__$1;
(statearr_17894_19954[(1)] = (5));

} else {
var statearr_17895_19955 = state_17891__$1;
(statearr_17895_19955[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17892 === (5))){
var state_17891__$1 = state_17891;
var statearr_17896_19956 = state_17891__$1;
(statearr_17896_19956[(2)] = null);

(statearr_17896_19956[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17892 === (6))){
var state_17891__$1 = state_17891;
var statearr_17897_19957 = state_17891__$1;
(statearr_17897_19957[(2)] = null);

(statearr_17897_19957[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17892 === (7))){
var inst_17886 = (state_17891[(2)]);
var state_17891__$1 = state_17891;
var statearr_17898_19958 = state_17891__$1;
(statearr_17898_19958[(2)] = inst_17886);

(statearr_17898_19958[(1)] = (3));


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
});})(__19937,c__17547__auto___19952,G__17850_19939,G__17850_19940__$1,n__5636__auto___19935,jobs,results,process__$1,async))
;
return ((function (__19937,switch__17198__auto__,c__17547__auto___19952,G__17850_19939,G__17850_19940__$1,n__5636__auto___19935,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__17199__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__17199__auto____0 = (function (){
var statearr_17899 = [null,null,null,null,null,null,null];
(statearr_17899[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17199__auto__);

(statearr_17899[(1)] = (1));

return statearr_17899;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17199__auto____1 = (function (state_17891){
while(true){
var ret_value__17200__auto__ = (function (){try{while(true){
var result__17201__auto__ = switch__17198__auto__(state_17891);
if(cljs.core.keyword_identical_QMARK_(result__17201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17201__auto__;
}
break;
}
}catch (e17901){var ex__17202__auto__ = e17901;
var statearr_17902_19959 = state_17891;
(statearr_17902_19959[(2)] = ex__17202__auto__);


if(cljs.core.seq((state_17891[(4)]))){
var statearr_17903_19960 = state_17891;
(statearr_17903_19960[(1)] = cljs.core.first((state_17891[(4)])));

} else {
throw ex__17202__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19963 = state_17891;
state_17891 = G__19963;
continue;
} else {
return ret_value__17200__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17199__auto__ = function(state_17891){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17199__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17199__auto____1.call(this,state_17891);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__17199__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17199__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17199__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17199__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17199__auto__;
})()
;})(__19937,switch__17198__auto__,c__17547__auto___19952,G__17850_19939,G__17850_19940__$1,n__5636__auto___19935,jobs,results,process__$1,async))
})();
var state__17549__auto__ = (function (){var statearr_17904 = f__17548__auto__();
(statearr_17904[(6)] = c__17547__auto___19952);

return statearr_17904;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17549__auto__);
});})(__19937,c__17547__auto___19952,G__17850_19939,G__17850_19940__$1,n__5636__auto___19935,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__17850_19940__$1)].join('')));

}

var G__19964 = (__19937 + (1));
__19937 = G__19964;
continue;
} else {
}
break;
}

var c__17547__auto___19965 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17548__auto__ = (function (){var switch__17198__auto__ = (function (state_17927){
var state_val_17928 = (state_17927[(1)]);
if((state_val_17928 === (7))){
var inst_17923 = (state_17927[(2)]);
var state_17927__$1 = state_17927;
var statearr_17930_19966 = state_17927__$1;
(statearr_17930_19966[(2)] = inst_17923);

(statearr_17930_19966[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17928 === (1))){
var state_17927__$1 = state_17927;
var statearr_17931_19967 = state_17927__$1;
(statearr_17931_19967[(2)] = null);

(statearr_17931_19967[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17928 === (4))){
var inst_17907 = (state_17927[(7)]);
var inst_17907__$1 = (state_17927[(2)]);
var inst_17908 = (inst_17907__$1 == null);
var state_17927__$1 = (function (){var statearr_17932 = state_17927;
(statearr_17932[(7)] = inst_17907__$1);

return statearr_17932;
})();
if(cljs.core.truth_(inst_17908)){
var statearr_17933_19968 = state_17927__$1;
(statearr_17933_19968[(1)] = (5));

} else {
var statearr_17934_19969 = state_17927__$1;
(statearr_17934_19969[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17928 === (6))){
var inst_17912 = (state_17927[(8)]);
var inst_17907 = (state_17927[(7)]);
var inst_17912__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_17914 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_17915 = [inst_17907,inst_17912__$1];
var inst_17916 = (new cljs.core.PersistentVector(null,2,(5),inst_17914,inst_17915,null));
var state_17927__$1 = (function (){var statearr_17935 = state_17927;
(statearr_17935[(8)] = inst_17912__$1);

return statearr_17935;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17927__$1,(8),jobs,inst_17916);
} else {
if((state_val_17928 === (3))){
var inst_17925 = (state_17927[(2)]);
var state_17927__$1 = state_17927;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17927__$1,inst_17925);
} else {
if((state_val_17928 === (2))){
var state_17927__$1 = state_17927;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17927__$1,(4),from);
} else {
if((state_val_17928 === (9))){
var inst_17920 = (state_17927[(2)]);
var state_17927__$1 = (function (){var statearr_17937 = state_17927;
(statearr_17937[(9)] = inst_17920);

return statearr_17937;
})();
var statearr_17938_19970 = state_17927__$1;
(statearr_17938_19970[(2)] = null);

(statearr_17938_19970[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17928 === (5))){
var inst_17910 = cljs.core.async.close_BANG_(jobs);
var state_17927__$1 = state_17927;
var statearr_17939_19971 = state_17927__$1;
(statearr_17939_19971[(2)] = inst_17910);

(statearr_17939_19971[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17928 === (8))){
var inst_17912 = (state_17927[(8)]);
var inst_17918 = (state_17927[(2)]);
var state_17927__$1 = (function (){var statearr_17940 = state_17927;
(statearr_17940[(10)] = inst_17918);

return statearr_17940;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17927__$1,(9),results,inst_17912);
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
var cljs$core$async$pipeline_STAR__$_state_machine__17199__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__17199__auto____0 = (function (){
var statearr_17941 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17941[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17199__auto__);

(statearr_17941[(1)] = (1));

return statearr_17941;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17199__auto____1 = (function (state_17927){
while(true){
var ret_value__17200__auto__ = (function (){try{while(true){
var result__17201__auto__ = switch__17198__auto__(state_17927);
if(cljs.core.keyword_identical_QMARK_(result__17201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17201__auto__;
}
break;
}
}catch (e17942){var ex__17202__auto__ = e17942;
var statearr_17943_19972 = state_17927;
(statearr_17943_19972[(2)] = ex__17202__auto__);


if(cljs.core.seq((state_17927[(4)]))){
var statearr_17945_19973 = state_17927;
(statearr_17945_19973[(1)] = cljs.core.first((state_17927[(4)])));

} else {
throw ex__17202__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19974 = state_17927;
state_17927 = G__19974;
continue;
} else {
return ret_value__17200__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17199__auto__ = function(state_17927){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17199__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17199__auto____1.call(this,state_17927);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__17199__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17199__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17199__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17199__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17199__auto__;
})()
})();
var state__17549__auto__ = (function (){var statearr_17946 = f__17548__auto__();
(statearr_17946[(6)] = c__17547__auto___19965);

return statearr_17946;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17549__auto__);
}));


var c__17547__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17548__auto__ = (function (){var switch__17198__auto__ = (function (state_17985){
var state_val_17986 = (state_17985[(1)]);
if((state_val_17986 === (7))){
var inst_17981 = (state_17985[(2)]);
var state_17985__$1 = state_17985;
var statearr_17987_19975 = state_17985__$1;
(statearr_17987_19975[(2)] = inst_17981);

(statearr_17987_19975[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17986 === (20))){
var state_17985__$1 = state_17985;
var statearr_17988_19976 = state_17985__$1;
(statearr_17988_19976[(2)] = null);

(statearr_17988_19976[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17986 === (1))){
var state_17985__$1 = state_17985;
var statearr_17989_19977 = state_17985__$1;
(statearr_17989_19977[(2)] = null);

(statearr_17989_19977[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17986 === (4))){
var inst_17949 = (state_17985[(7)]);
var inst_17949__$1 = (state_17985[(2)]);
var inst_17950 = (inst_17949__$1 == null);
var state_17985__$1 = (function (){var statearr_17991 = state_17985;
(statearr_17991[(7)] = inst_17949__$1);

return statearr_17991;
})();
if(cljs.core.truth_(inst_17950)){
var statearr_17992_19978 = state_17985__$1;
(statearr_17992_19978[(1)] = (5));

} else {
var statearr_17993_19979 = state_17985__$1;
(statearr_17993_19979[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17986 === (15))){
var inst_17962 = (state_17985[(8)]);
var state_17985__$1 = state_17985;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17985__$1,(18),to,inst_17962);
} else {
if((state_val_17986 === (21))){
var inst_17976 = (state_17985[(2)]);
var state_17985__$1 = state_17985;
var statearr_17994_19980 = state_17985__$1;
(statearr_17994_19980[(2)] = inst_17976);

(statearr_17994_19980[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17986 === (13))){
var inst_17978 = (state_17985[(2)]);
var state_17985__$1 = (function (){var statearr_17995 = state_17985;
(statearr_17995[(9)] = inst_17978);

return statearr_17995;
})();
var statearr_17996_19982 = state_17985__$1;
(statearr_17996_19982[(2)] = null);

(statearr_17996_19982[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17986 === (6))){
var inst_17949 = (state_17985[(7)]);
var state_17985__$1 = state_17985;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17985__$1,(11),inst_17949);
} else {
if((state_val_17986 === (17))){
var inst_17971 = (state_17985[(2)]);
var state_17985__$1 = state_17985;
if(cljs.core.truth_(inst_17971)){
var statearr_17997_19983 = state_17985__$1;
(statearr_17997_19983[(1)] = (19));

} else {
var statearr_17998_19984 = state_17985__$1;
(statearr_17998_19984[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17986 === (3))){
var inst_17983 = (state_17985[(2)]);
var state_17985__$1 = state_17985;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17985__$1,inst_17983);
} else {
if((state_val_17986 === (12))){
var inst_17959 = (state_17985[(10)]);
var state_17985__$1 = state_17985;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17985__$1,(14),inst_17959);
} else {
if((state_val_17986 === (2))){
var state_17985__$1 = state_17985;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17985__$1,(4),results);
} else {
if((state_val_17986 === (19))){
var state_17985__$1 = state_17985;
var statearr_18000_19985 = state_17985__$1;
(statearr_18000_19985[(2)] = null);

(statearr_18000_19985[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17986 === (11))){
var inst_17959 = (state_17985[(2)]);
var state_17985__$1 = (function (){var statearr_18001 = state_17985;
(statearr_18001[(10)] = inst_17959);

return statearr_18001;
})();
var statearr_18002_19987 = state_17985__$1;
(statearr_18002_19987[(2)] = null);

(statearr_18002_19987[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17986 === (9))){
var state_17985__$1 = state_17985;
var statearr_18003_19988 = state_17985__$1;
(statearr_18003_19988[(2)] = null);

(statearr_18003_19988[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17986 === (5))){
var state_17985__$1 = state_17985;
if(cljs.core.truth_(close_QMARK_)){
var statearr_18004_19990 = state_17985__$1;
(statearr_18004_19990[(1)] = (8));

} else {
var statearr_18005_19991 = state_17985__$1;
(statearr_18005_19991[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17986 === (14))){
var inst_17964 = (state_17985[(11)]);
var inst_17962 = (state_17985[(8)]);
var inst_17962__$1 = (state_17985[(2)]);
var inst_17963 = (inst_17962__$1 == null);
var inst_17964__$1 = cljs.core.not(inst_17963);
var state_17985__$1 = (function (){var statearr_18007 = state_17985;
(statearr_18007[(11)] = inst_17964__$1);

(statearr_18007[(8)] = inst_17962__$1);

return statearr_18007;
})();
if(inst_17964__$1){
var statearr_18008_19992 = state_17985__$1;
(statearr_18008_19992[(1)] = (15));

} else {
var statearr_18009_19993 = state_17985__$1;
(statearr_18009_19993[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17986 === (16))){
var inst_17964 = (state_17985[(11)]);
var state_17985__$1 = state_17985;
var statearr_18010_19994 = state_17985__$1;
(statearr_18010_19994[(2)] = inst_17964);

(statearr_18010_19994[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17986 === (10))){
var inst_17956 = (state_17985[(2)]);
var state_17985__$1 = state_17985;
var statearr_18011_19995 = state_17985__$1;
(statearr_18011_19995[(2)] = inst_17956);

(statearr_18011_19995[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17986 === (18))){
var inst_17967 = (state_17985[(2)]);
var state_17985__$1 = state_17985;
var statearr_18012_19996 = state_17985__$1;
(statearr_18012_19996[(2)] = inst_17967);

(statearr_18012_19996[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17986 === (8))){
var inst_17953 = cljs.core.async.close_BANG_(to);
var state_17985__$1 = state_17985;
var statearr_18013_19997 = state_17985__$1;
(statearr_18013_19997[(2)] = inst_17953);

(statearr_18013_19997[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__17199__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__17199__auto____0 = (function (){
var statearr_18015 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18015[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17199__auto__);

(statearr_18015[(1)] = (1));

return statearr_18015;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17199__auto____1 = (function (state_17985){
while(true){
var ret_value__17200__auto__ = (function (){try{while(true){
var result__17201__auto__ = switch__17198__auto__(state_17985);
if(cljs.core.keyword_identical_QMARK_(result__17201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17201__auto__;
}
break;
}
}catch (e18016){var ex__17202__auto__ = e18016;
var statearr_18017_20000 = state_17985;
(statearr_18017_20000[(2)] = ex__17202__auto__);


if(cljs.core.seq((state_17985[(4)]))){
var statearr_18018_20001 = state_17985;
(statearr_18018_20001[(1)] = cljs.core.first((state_17985[(4)])));

} else {
throw ex__17202__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20002 = state_17985;
state_17985 = G__20002;
continue;
} else {
return ret_value__17200__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17199__auto__ = function(state_17985){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17199__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17199__auto____1.call(this,state_17985);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__17199__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17199__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17199__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17199__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17199__auto__;
})()
})();
var state__17549__auto__ = (function (){var statearr_18019 = f__17548__auto__();
(statearr_18019[(6)] = c__17547__auto__);

return statearr_18019;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17549__auto__);
}));

return c__17547__auto__;
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
var G__18021 = arguments.length;
switch (G__18021) {
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
var G__18024 = arguments.length;
switch (G__18024) {
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
var G__18027 = arguments.length;
switch (G__18027) {
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
var c__17547__auto___20010 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17548__auto__ = (function (){var switch__17198__auto__ = (function (state_18055){
var state_val_18056 = (state_18055[(1)]);
if((state_val_18056 === (7))){
var inst_18051 = (state_18055[(2)]);
var state_18055__$1 = state_18055;
var statearr_18058_20011 = state_18055__$1;
(statearr_18058_20011[(2)] = inst_18051);

(statearr_18058_20011[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18056 === (1))){
var state_18055__$1 = state_18055;
var statearr_18059_20012 = state_18055__$1;
(statearr_18059_20012[(2)] = null);

(statearr_18059_20012[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18056 === (4))){
var inst_18032 = (state_18055[(7)]);
var inst_18032__$1 = (state_18055[(2)]);
var inst_18033 = (inst_18032__$1 == null);
var state_18055__$1 = (function (){var statearr_18060 = state_18055;
(statearr_18060[(7)] = inst_18032__$1);

return statearr_18060;
})();
if(cljs.core.truth_(inst_18033)){
var statearr_18061_20013 = state_18055__$1;
(statearr_18061_20013[(1)] = (5));

} else {
var statearr_18062_20014 = state_18055__$1;
(statearr_18062_20014[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18056 === (13))){
var state_18055__$1 = state_18055;
var statearr_18063_20015 = state_18055__$1;
(statearr_18063_20015[(2)] = null);

(statearr_18063_20015[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18056 === (6))){
var inst_18032 = (state_18055[(7)]);
var inst_18038 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_18032) : p.call(null,inst_18032));
var state_18055__$1 = state_18055;
if(cljs.core.truth_(inst_18038)){
var statearr_18065_20016 = state_18055__$1;
(statearr_18065_20016[(1)] = (9));

} else {
var statearr_18066_20017 = state_18055__$1;
(statearr_18066_20017[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18056 === (3))){
var inst_18053 = (state_18055[(2)]);
var state_18055__$1 = state_18055;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18055__$1,inst_18053);
} else {
if((state_val_18056 === (12))){
var state_18055__$1 = state_18055;
var statearr_18067_20018 = state_18055__$1;
(statearr_18067_20018[(2)] = null);

(statearr_18067_20018[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18056 === (2))){
var state_18055__$1 = state_18055;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18055__$1,(4),ch);
} else {
if((state_val_18056 === (11))){
var inst_18032 = (state_18055[(7)]);
var inst_18042 = (state_18055[(2)]);
var state_18055__$1 = state_18055;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18055__$1,(8),inst_18042,inst_18032);
} else {
if((state_val_18056 === (9))){
var state_18055__$1 = state_18055;
var statearr_18068_20019 = state_18055__$1;
(statearr_18068_20019[(2)] = tc);

(statearr_18068_20019[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18056 === (5))){
var inst_18035 = cljs.core.async.close_BANG_(tc);
var inst_18036 = cljs.core.async.close_BANG_(fc);
var state_18055__$1 = (function (){var statearr_18069 = state_18055;
(statearr_18069[(8)] = inst_18035);

return statearr_18069;
})();
var statearr_18070_20020 = state_18055__$1;
(statearr_18070_20020[(2)] = inst_18036);

(statearr_18070_20020[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18056 === (14))){
var inst_18049 = (state_18055[(2)]);
var state_18055__$1 = state_18055;
var statearr_18072_20021 = state_18055__$1;
(statearr_18072_20021[(2)] = inst_18049);

(statearr_18072_20021[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18056 === (10))){
var state_18055__$1 = state_18055;
var statearr_18073_20022 = state_18055__$1;
(statearr_18073_20022[(2)] = fc);

(statearr_18073_20022[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18056 === (8))){
var inst_18044 = (state_18055[(2)]);
var state_18055__$1 = state_18055;
if(cljs.core.truth_(inst_18044)){
var statearr_18074_20023 = state_18055__$1;
(statearr_18074_20023[(1)] = (12));

} else {
var statearr_18075_20024 = state_18055__$1;
(statearr_18075_20024[(1)] = (13));

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
var cljs$core$async$state_machine__17199__auto__ = null;
var cljs$core$async$state_machine__17199__auto____0 = (function (){
var statearr_18076 = [null,null,null,null,null,null,null,null,null];
(statearr_18076[(0)] = cljs$core$async$state_machine__17199__auto__);

(statearr_18076[(1)] = (1));

return statearr_18076;
});
var cljs$core$async$state_machine__17199__auto____1 = (function (state_18055){
while(true){
var ret_value__17200__auto__ = (function (){try{while(true){
var result__17201__auto__ = switch__17198__auto__(state_18055);
if(cljs.core.keyword_identical_QMARK_(result__17201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17201__auto__;
}
break;
}
}catch (e18077){var ex__17202__auto__ = e18077;
var statearr_18078_20025 = state_18055;
(statearr_18078_20025[(2)] = ex__17202__auto__);


if(cljs.core.seq((state_18055[(4)]))){
var statearr_18079_20026 = state_18055;
(statearr_18079_20026[(1)] = cljs.core.first((state_18055[(4)])));

} else {
throw ex__17202__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20027 = state_18055;
state_18055 = G__20027;
continue;
} else {
return ret_value__17200__auto__;
}
break;
}
});
cljs$core$async$state_machine__17199__auto__ = function(state_18055){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17199__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17199__auto____1.call(this,state_18055);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17199__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17199__auto____0;
cljs$core$async$state_machine__17199__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17199__auto____1;
return cljs$core$async$state_machine__17199__auto__;
})()
})();
var state__17549__auto__ = (function (){var statearr_18081 = f__17548__auto__();
(statearr_18081[(6)] = c__17547__auto___20010);

return statearr_18081;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17549__auto__);
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
var c__17547__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17548__auto__ = (function (){var switch__17198__auto__ = (function (state_18116){
var state_val_18117 = (state_18116[(1)]);
if((state_val_18117 === (7))){
var inst_18112 = (state_18116[(2)]);
var state_18116__$1 = state_18116;
var statearr_18124_20033 = state_18116__$1;
(statearr_18124_20033[(2)] = inst_18112);

(statearr_18124_20033[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18117 === (1))){
var inst_18092 = init;
var inst_18093 = inst_18092;
var state_18116__$1 = (function (){var statearr_18125 = state_18116;
(statearr_18125[(7)] = inst_18093);

return statearr_18125;
})();
var statearr_18126_20035 = state_18116__$1;
(statearr_18126_20035[(2)] = null);

(statearr_18126_20035[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18117 === (4))){
var inst_18096 = (state_18116[(8)]);
var inst_18096__$1 = (state_18116[(2)]);
var inst_18097 = (inst_18096__$1 == null);
var state_18116__$1 = (function (){var statearr_18127 = state_18116;
(statearr_18127[(8)] = inst_18096__$1);

return statearr_18127;
})();
if(cljs.core.truth_(inst_18097)){
var statearr_18128_20036 = state_18116__$1;
(statearr_18128_20036[(1)] = (5));

} else {
var statearr_18129_20037 = state_18116__$1;
(statearr_18129_20037[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18117 === (6))){
var inst_18093 = (state_18116[(7)]);
var inst_18101 = (state_18116[(9)]);
var inst_18096 = (state_18116[(8)]);
var inst_18101__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_18093,inst_18096) : f.call(null,inst_18093,inst_18096));
var inst_18103 = cljs.core.reduced_QMARK_(inst_18101__$1);
var state_18116__$1 = (function (){var statearr_18131 = state_18116;
(statearr_18131[(9)] = inst_18101__$1);

return statearr_18131;
})();
if(inst_18103){
var statearr_18132_20038 = state_18116__$1;
(statearr_18132_20038[(1)] = (8));

} else {
var statearr_18133_20039 = state_18116__$1;
(statearr_18133_20039[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18117 === (3))){
var inst_18114 = (state_18116[(2)]);
var state_18116__$1 = state_18116;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18116__$1,inst_18114);
} else {
if((state_val_18117 === (2))){
var state_18116__$1 = state_18116;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18116__$1,(4),ch);
} else {
if((state_val_18117 === (9))){
var inst_18101 = (state_18116[(9)]);
var inst_18093 = inst_18101;
var state_18116__$1 = (function (){var statearr_18138 = state_18116;
(statearr_18138[(7)] = inst_18093);

return statearr_18138;
})();
var statearr_18139_20040 = state_18116__$1;
(statearr_18139_20040[(2)] = null);

(statearr_18139_20040[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18117 === (5))){
var inst_18093 = (state_18116[(7)]);
var state_18116__$1 = state_18116;
var statearr_18143_20041 = state_18116__$1;
(statearr_18143_20041[(2)] = inst_18093);

(statearr_18143_20041[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18117 === (10))){
var inst_18110 = (state_18116[(2)]);
var state_18116__$1 = state_18116;
var statearr_18145_20042 = state_18116__$1;
(statearr_18145_20042[(2)] = inst_18110);

(statearr_18145_20042[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18117 === (8))){
var inst_18101 = (state_18116[(9)]);
var inst_18106 = cljs.core.deref(inst_18101);
var state_18116__$1 = state_18116;
var statearr_18147_20043 = state_18116__$1;
(statearr_18147_20043[(2)] = inst_18106);

(statearr_18147_20043[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__17199__auto__ = null;
var cljs$core$async$reduce_$_state_machine__17199__auto____0 = (function (){
var statearr_18151 = [null,null,null,null,null,null,null,null,null,null];
(statearr_18151[(0)] = cljs$core$async$reduce_$_state_machine__17199__auto__);

(statearr_18151[(1)] = (1));

return statearr_18151;
});
var cljs$core$async$reduce_$_state_machine__17199__auto____1 = (function (state_18116){
while(true){
var ret_value__17200__auto__ = (function (){try{while(true){
var result__17201__auto__ = switch__17198__auto__(state_18116);
if(cljs.core.keyword_identical_QMARK_(result__17201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17201__auto__;
}
break;
}
}catch (e18152){var ex__17202__auto__ = e18152;
var statearr_18155_20044 = state_18116;
(statearr_18155_20044[(2)] = ex__17202__auto__);


if(cljs.core.seq((state_18116[(4)]))){
var statearr_18157_20046 = state_18116;
(statearr_18157_20046[(1)] = cljs.core.first((state_18116[(4)])));

} else {
throw ex__17202__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20047 = state_18116;
state_18116 = G__20047;
continue;
} else {
return ret_value__17200__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__17199__auto__ = function(state_18116){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__17199__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__17199__auto____1.call(this,state_18116);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__17199__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__17199__auto____0;
cljs$core$async$reduce_$_state_machine__17199__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__17199__auto____1;
return cljs$core$async$reduce_$_state_machine__17199__auto__;
})()
})();
var state__17549__auto__ = (function (){var statearr_18159 = f__17548__auto__();
(statearr_18159[(6)] = c__17547__auto__);

return statearr_18159;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17549__auto__);
}));

return c__17547__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__17547__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17548__auto__ = (function (){var switch__17198__auto__ = (function (state_18172){
var state_val_18173 = (state_18172[(1)]);
if((state_val_18173 === (1))){
var inst_18167 = cljs.core.async.reduce(f__$1,init,ch);
var state_18172__$1 = state_18172;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18172__$1,(2),inst_18167);
} else {
if((state_val_18173 === (2))){
var inst_18169 = (state_18172[(2)]);
var inst_18170 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_18169) : f__$1.call(null,inst_18169));
var state_18172__$1 = state_18172;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18172__$1,inst_18170);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__17199__auto__ = null;
var cljs$core$async$transduce_$_state_machine__17199__auto____0 = (function (){
var statearr_18179 = [null,null,null,null,null,null,null];
(statearr_18179[(0)] = cljs$core$async$transduce_$_state_machine__17199__auto__);

(statearr_18179[(1)] = (1));

return statearr_18179;
});
var cljs$core$async$transduce_$_state_machine__17199__auto____1 = (function (state_18172){
while(true){
var ret_value__17200__auto__ = (function (){try{while(true){
var result__17201__auto__ = switch__17198__auto__(state_18172);
if(cljs.core.keyword_identical_QMARK_(result__17201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17201__auto__;
}
break;
}
}catch (e18180){var ex__17202__auto__ = e18180;
var statearr_18183_20052 = state_18172;
(statearr_18183_20052[(2)] = ex__17202__auto__);


if(cljs.core.seq((state_18172[(4)]))){
var statearr_18185_20053 = state_18172;
(statearr_18185_20053[(1)] = cljs.core.first((state_18172[(4)])));

} else {
throw ex__17202__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20054 = state_18172;
state_18172 = G__20054;
continue;
} else {
return ret_value__17200__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__17199__auto__ = function(state_18172){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__17199__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__17199__auto____1.call(this,state_18172);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__17199__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__17199__auto____0;
cljs$core$async$transduce_$_state_machine__17199__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__17199__auto____1;
return cljs$core$async$transduce_$_state_machine__17199__auto__;
})()
})();
var state__17549__auto__ = (function (){var statearr_18187 = f__17548__auto__();
(statearr_18187[(6)] = c__17547__auto__);

return statearr_18187;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17549__auto__);
}));

return c__17547__auto__;
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
var G__18193 = arguments.length;
switch (G__18193) {
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
var c__17547__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17548__auto__ = (function (){var switch__17198__auto__ = (function (state_18229){
var state_val_18230 = (state_18229[(1)]);
if((state_val_18230 === (7))){
var inst_18208 = (state_18229[(2)]);
var state_18229__$1 = state_18229;
var statearr_18235_20057 = state_18229__$1;
(statearr_18235_20057[(2)] = inst_18208);

(statearr_18235_20057[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18230 === (1))){
var inst_18201 = cljs.core.seq(coll);
var inst_18202 = inst_18201;
var state_18229__$1 = (function (){var statearr_18236 = state_18229;
(statearr_18236[(7)] = inst_18202);

return statearr_18236;
})();
var statearr_18238_20058 = state_18229__$1;
(statearr_18238_20058[(2)] = null);

(statearr_18238_20058[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18230 === (4))){
var inst_18202 = (state_18229[(7)]);
var inst_18206 = cljs.core.first(inst_18202);
var state_18229__$1 = state_18229;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18229__$1,(7),ch,inst_18206);
} else {
if((state_val_18230 === (13))){
var inst_18220 = (state_18229[(2)]);
var state_18229__$1 = state_18229;
var statearr_18242_20059 = state_18229__$1;
(statearr_18242_20059[(2)] = inst_18220);

(statearr_18242_20059[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18230 === (6))){
var inst_18211 = (state_18229[(2)]);
var state_18229__$1 = state_18229;
if(cljs.core.truth_(inst_18211)){
var statearr_18244_20060 = state_18229__$1;
(statearr_18244_20060[(1)] = (8));

} else {
var statearr_18247_20061 = state_18229__$1;
(statearr_18247_20061[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18230 === (3))){
var inst_18225 = (state_18229[(2)]);
var state_18229__$1 = state_18229;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18229__$1,inst_18225);
} else {
if((state_val_18230 === (12))){
var state_18229__$1 = state_18229;
var statearr_18250_20062 = state_18229__$1;
(statearr_18250_20062[(2)] = null);

(statearr_18250_20062[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18230 === (2))){
var inst_18202 = (state_18229[(7)]);
var state_18229__$1 = state_18229;
if(cljs.core.truth_(inst_18202)){
var statearr_18251_20063 = state_18229__$1;
(statearr_18251_20063[(1)] = (4));

} else {
var statearr_18254_20064 = state_18229__$1;
(statearr_18254_20064[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18230 === (11))){
var inst_18217 = cljs.core.async.close_BANG_(ch);
var state_18229__$1 = state_18229;
var statearr_18256_20065 = state_18229__$1;
(statearr_18256_20065[(2)] = inst_18217);

(statearr_18256_20065[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18230 === (9))){
var state_18229__$1 = state_18229;
if(cljs.core.truth_(close_QMARK_)){
var statearr_18258_20066 = state_18229__$1;
(statearr_18258_20066[(1)] = (11));

} else {
var statearr_18259_20067 = state_18229__$1;
(statearr_18259_20067[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18230 === (5))){
var inst_18202 = (state_18229[(7)]);
var state_18229__$1 = state_18229;
var statearr_18263_20072 = state_18229__$1;
(statearr_18263_20072[(2)] = inst_18202);

(statearr_18263_20072[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18230 === (10))){
var inst_18222 = (state_18229[(2)]);
var state_18229__$1 = state_18229;
var statearr_18264_20073 = state_18229__$1;
(statearr_18264_20073[(2)] = inst_18222);

(statearr_18264_20073[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18230 === (8))){
var inst_18202 = (state_18229[(7)]);
var inst_18213 = cljs.core.next(inst_18202);
var inst_18202__$1 = inst_18213;
var state_18229__$1 = (function (){var statearr_18266 = state_18229;
(statearr_18266[(7)] = inst_18202__$1);

return statearr_18266;
})();
var statearr_18269_20074 = state_18229__$1;
(statearr_18269_20074[(2)] = null);

(statearr_18269_20074[(1)] = (2));


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
var cljs$core$async$state_machine__17199__auto__ = null;
var cljs$core$async$state_machine__17199__auto____0 = (function (){
var statearr_18272 = [null,null,null,null,null,null,null,null];
(statearr_18272[(0)] = cljs$core$async$state_machine__17199__auto__);

(statearr_18272[(1)] = (1));

return statearr_18272;
});
var cljs$core$async$state_machine__17199__auto____1 = (function (state_18229){
while(true){
var ret_value__17200__auto__ = (function (){try{while(true){
var result__17201__auto__ = switch__17198__auto__(state_18229);
if(cljs.core.keyword_identical_QMARK_(result__17201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17201__auto__;
}
break;
}
}catch (e18273){var ex__17202__auto__ = e18273;
var statearr_18274_20075 = state_18229;
(statearr_18274_20075[(2)] = ex__17202__auto__);


if(cljs.core.seq((state_18229[(4)]))){
var statearr_18277_20076 = state_18229;
(statearr_18277_20076[(1)] = cljs.core.first((state_18229[(4)])));

} else {
throw ex__17202__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20077 = state_18229;
state_18229 = G__20077;
continue;
} else {
return ret_value__17200__auto__;
}
break;
}
});
cljs$core$async$state_machine__17199__auto__ = function(state_18229){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17199__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17199__auto____1.call(this,state_18229);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17199__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17199__auto____0;
cljs$core$async$state_machine__17199__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17199__auto____1;
return cljs$core$async$state_machine__17199__auto__;
})()
})();
var state__17549__auto__ = (function (){var statearr_18280 = f__17548__auto__();
(statearr_18280[(6)] = c__17547__auto__);

return statearr_18280;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17549__auto__);
}));

return c__17547__auto__;
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
var G__18291 = arguments.length;
switch (G__18291) {
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

var cljs$core$async$Mux$muxch_STAR_$dyn_20079 = (function (_){
var x__5393__auto__ = (((_ == null))?null:_);
var m__5394__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5394__auto__.call(null,_));
} else {
var m__5392__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5392__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_20079(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_20080 = (function (m,ch,close_QMARK_){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5394__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__5392__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5392__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_20080(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_20081 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_20081(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_20084 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5394__auto__.call(null,m));
} else {
var m__5392__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5392__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_20084(m);
}
});


/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18351 = (function (ch,cs,meta18352){
this.ch = ch;
this.cs = cs;
this.meta18352 = meta18352;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18351.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18353,meta18352__$1){
var self__ = this;
var _18353__$1 = this;
return (new cljs.core.async.t_cljs$core$async18351(self__.ch,self__.cs,meta18352__$1));
}));

(cljs.core.async.t_cljs$core$async18351.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18353){
var self__ = this;
var _18353__$1 = this;
return self__.meta18352;
}));

(cljs.core.async.t_cljs$core$async18351.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18351.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async18351.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18351.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async18351.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async18351.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async18351.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta18352","meta18352",-1994369061,null)], null);
}));

(cljs.core.async.t_cljs$core$async18351.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18351.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18351");

(cljs.core.async.t_cljs$core$async18351.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async18351");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18351.
 */
cljs.core.async.__GT_t_cljs$core$async18351 = (function cljs$core$async$__GT_t_cljs$core$async18351(ch,cs,meta18352){
return (new cljs.core.async.t_cljs$core$async18351(ch,cs,meta18352));
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
var m = (new cljs.core.async.t_cljs$core$async18351(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__17547__auto___20085 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17548__auto__ = (function (){var switch__17198__auto__ = (function (state_18530){
var state_val_18531 = (state_18530[(1)]);
if((state_val_18531 === (7))){
var inst_18526 = (state_18530[(2)]);
var state_18530__$1 = state_18530;
var statearr_18540_20086 = state_18530__$1;
(statearr_18540_20086[(2)] = inst_18526);

(statearr_18540_20086[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18531 === (20))){
var inst_18414 = (state_18530[(7)]);
var inst_18432 = cljs.core.first(inst_18414);
var inst_18433 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18432,(0),null);
var inst_18434 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18432,(1),null);
var state_18530__$1 = (function (){var statearr_18541 = state_18530;
(statearr_18541[(8)] = inst_18433);

return statearr_18541;
})();
if(cljs.core.truth_(inst_18434)){
var statearr_18542_20091 = state_18530__$1;
(statearr_18542_20091[(1)] = (22));

} else {
var statearr_18546_20092 = state_18530__$1;
(statearr_18546_20092[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18531 === (27))){
var inst_18462 = (state_18530[(9)]);
var inst_18471 = (state_18530[(10)]);
var inst_18464 = (state_18530[(11)]);
var inst_18378 = (state_18530[(12)]);
var inst_18471__$1 = cljs.core._nth(inst_18462,inst_18464);
var inst_18472 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_18471__$1,inst_18378,done);
var state_18530__$1 = (function (){var statearr_18548 = state_18530;
(statearr_18548[(10)] = inst_18471__$1);

return statearr_18548;
})();
if(cljs.core.truth_(inst_18472)){
var statearr_18552_20096 = state_18530__$1;
(statearr_18552_20096[(1)] = (30));

} else {
var statearr_18553_20097 = state_18530__$1;
(statearr_18553_20097[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18531 === (1))){
var state_18530__$1 = state_18530;
var statearr_18555_20098 = state_18530__$1;
(statearr_18555_20098[(2)] = null);

(statearr_18555_20098[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18531 === (24))){
var inst_18414 = (state_18530[(7)]);
var inst_18439 = (state_18530[(2)]);
var inst_18440 = cljs.core.next(inst_18414);
var inst_18388 = inst_18440;
var inst_18389 = null;
var inst_18390 = (0);
var inst_18391 = (0);
var state_18530__$1 = (function (){var statearr_18556 = state_18530;
(statearr_18556[(13)] = inst_18439);

(statearr_18556[(14)] = inst_18389);

(statearr_18556[(15)] = inst_18391);

(statearr_18556[(16)] = inst_18388);

(statearr_18556[(17)] = inst_18390);

return statearr_18556;
})();
var statearr_18560_20102 = state_18530__$1;
(statearr_18560_20102[(2)] = null);

(statearr_18560_20102[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18531 === (39))){
var state_18530__$1 = state_18530;
var statearr_18566_20103 = state_18530__$1;
(statearr_18566_20103[(2)] = null);

(statearr_18566_20103[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18531 === (4))){
var inst_18378 = (state_18530[(12)]);
var inst_18378__$1 = (state_18530[(2)]);
var inst_18379 = (inst_18378__$1 == null);
var state_18530__$1 = (function (){var statearr_18575 = state_18530;
(statearr_18575[(12)] = inst_18378__$1);

return statearr_18575;
})();
if(cljs.core.truth_(inst_18379)){
var statearr_18576_20108 = state_18530__$1;
(statearr_18576_20108[(1)] = (5));

} else {
var statearr_18581_20109 = state_18530__$1;
(statearr_18581_20109[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18531 === (15))){
var inst_18389 = (state_18530[(14)]);
var inst_18391 = (state_18530[(15)]);
var inst_18388 = (state_18530[(16)]);
var inst_18390 = (state_18530[(17)]);
var inst_18409 = (state_18530[(2)]);
var inst_18411 = (inst_18391 + (1));
var tmp18562 = inst_18389;
var tmp18563 = inst_18388;
var tmp18564 = inst_18390;
var inst_18388__$1 = tmp18563;
var inst_18389__$1 = tmp18562;
var inst_18390__$1 = tmp18564;
var inst_18391__$1 = inst_18411;
var state_18530__$1 = (function (){var statearr_18589 = state_18530;
(statearr_18589[(14)] = inst_18389__$1);

(statearr_18589[(15)] = inst_18391__$1);

(statearr_18589[(16)] = inst_18388__$1);

(statearr_18589[(17)] = inst_18390__$1);

(statearr_18589[(18)] = inst_18409);

return statearr_18589;
})();
var statearr_18592_20110 = state_18530__$1;
(statearr_18592_20110[(2)] = null);

(statearr_18592_20110[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18531 === (21))){
var inst_18443 = (state_18530[(2)]);
var state_18530__$1 = state_18530;
var statearr_18600_20114 = state_18530__$1;
(statearr_18600_20114[(2)] = inst_18443);

(statearr_18600_20114[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18531 === (31))){
var inst_18471 = (state_18530[(10)]);
var inst_18475 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_18471);
var state_18530__$1 = state_18530;
var statearr_18609_20115 = state_18530__$1;
(statearr_18609_20115[(2)] = inst_18475);

(statearr_18609_20115[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18531 === (32))){
var inst_18462 = (state_18530[(9)]);
var inst_18461 = (state_18530[(19)]);
var inst_18464 = (state_18530[(11)]);
var inst_18463 = (state_18530[(20)]);
var inst_18477 = (state_18530[(2)]);
var inst_18478 = (inst_18464 + (1));
var tmp18593 = inst_18462;
var tmp18594 = inst_18461;
var tmp18595 = inst_18463;
var inst_18461__$1 = tmp18594;
var inst_18462__$1 = tmp18593;
var inst_18463__$1 = tmp18595;
var inst_18464__$1 = inst_18478;
var state_18530__$1 = (function (){var statearr_18613 = state_18530;
(statearr_18613[(9)] = inst_18462__$1);

(statearr_18613[(21)] = inst_18477);

(statearr_18613[(19)] = inst_18461__$1);

(statearr_18613[(11)] = inst_18464__$1);

(statearr_18613[(20)] = inst_18463__$1);

return statearr_18613;
})();
var statearr_18615_20116 = state_18530__$1;
(statearr_18615_20116[(2)] = null);

(statearr_18615_20116[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18531 === (40))){
var inst_18490 = (state_18530[(22)]);
var inst_18502 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_18490);
var state_18530__$1 = state_18530;
var statearr_18616_20121 = state_18530__$1;
(statearr_18616_20121[(2)] = inst_18502);

(statearr_18616_20121[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18531 === (33))){
var inst_18481 = (state_18530[(23)]);
var inst_18483 = cljs.core.chunked_seq_QMARK_(inst_18481);
var state_18530__$1 = state_18530;
if(inst_18483){
var statearr_18620_20125 = state_18530__$1;
(statearr_18620_20125[(1)] = (36));

} else {
var statearr_18622_20126 = state_18530__$1;
(statearr_18622_20126[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18531 === (13))){
var inst_18403 = (state_18530[(24)]);
var inst_18406 = cljs.core.async.close_BANG_(inst_18403);
var state_18530__$1 = state_18530;
var statearr_18623_20127 = state_18530__$1;
(statearr_18623_20127[(2)] = inst_18406);

(statearr_18623_20127[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18531 === (22))){
var inst_18433 = (state_18530[(8)]);
var inst_18436 = cljs.core.async.close_BANG_(inst_18433);
var state_18530__$1 = state_18530;
var statearr_18625_20128 = state_18530__$1;
(statearr_18625_20128[(2)] = inst_18436);

(statearr_18625_20128[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18531 === (36))){
var inst_18481 = (state_18530[(23)]);
var inst_18485 = cljs.core.chunk_first(inst_18481);
var inst_18486 = cljs.core.chunk_rest(inst_18481);
var inst_18487 = cljs.core.count(inst_18485);
var inst_18461 = inst_18486;
var inst_18462 = inst_18485;
var inst_18463 = inst_18487;
var inst_18464 = (0);
var state_18530__$1 = (function (){var statearr_18626 = state_18530;
(statearr_18626[(9)] = inst_18462);

(statearr_18626[(19)] = inst_18461);

(statearr_18626[(11)] = inst_18464);

(statearr_18626[(20)] = inst_18463);

return statearr_18626;
})();
var statearr_18627_20132 = state_18530__$1;
(statearr_18627_20132[(2)] = null);

(statearr_18627_20132[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18531 === (41))){
var inst_18481 = (state_18530[(23)]);
var inst_18504 = (state_18530[(2)]);
var inst_18506 = cljs.core.next(inst_18481);
var inst_18461 = inst_18506;
var inst_18462 = null;
var inst_18463 = (0);
var inst_18464 = (0);
var state_18530__$1 = (function (){var statearr_18632 = state_18530;
(statearr_18632[(9)] = inst_18462);

(statearr_18632[(19)] = inst_18461);

(statearr_18632[(11)] = inst_18464);

(statearr_18632[(20)] = inst_18463);

(statearr_18632[(25)] = inst_18504);

return statearr_18632;
})();
var statearr_18636_20133 = state_18530__$1;
(statearr_18636_20133[(2)] = null);

(statearr_18636_20133[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18531 === (43))){
var state_18530__$1 = state_18530;
var statearr_18638_20137 = state_18530__$1;
(statearr_18638_20137[(2)] = null);

(statearr_18638_20137[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18531 === (29))){
var inst_18514 = (state_18530[(2)]);
var state_18530__$1 = state_18530;
var statearr_18639_20138 = state_18530__$1;
(statearr_18639_20138[(2)] = inst_18514);

(statearr_18639_20138[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18531 === (44))){
var inst_18523 = (state_18530[(2)]);
var state_18530__$1 = (function (){var statearr_18643 = state_18530;
(statearr_18643[(26)] = inst_18523);

return statearr_18643;
})();
var statearr_18645_20139 = state_18530__$1;
(statearr_18645_20139[(2)] = null);

(statearr_18645_20139[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18531 === (6))){
var inst_18453 = (state_18530[(27)]);
var inst_18452 = cljs.core.deref(cs);
var inst_18453__$1 = cljs.core.keys(inst_18452);
var inst_18454 = cljs.core.count(inst_18453__$1);
var inst_18455 = cljs.core.reset_BANG_(dctr,inst_18454);
var inst_18460 = cljs.core.seq(inst_18453__$1);
var inst_18461 = inst_18460;
var inst_18462 = null;
var inst_18463 = (0);
var inst_18464 = (0);
var state_18530__$1 = (function (){var statearr_18650 = state_18530;
(statearr_18650[(9)] = inst_18462);

(statearr_18650[(19)] = inst_18461);

(statearr_18650[(27)] = inst_18453__$1);

(statearr_18650[(11)] = inst_18464);

(statearr_18650[(28)] = inst_18455);

(statearr_18650[(20)] = inst_18463);

return statearr_18650;
})();
var statearr_18654_20143 = state_18530__$1;
(statearr_18654_20143[(2)] = null);

(statearr_18654_20143[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18531 === (28))){
var inst_18461 = (state_18530[(19)]);
var inst_18481 = (state_18530[(23)]);
var inst_18481__$1 = cljs.core.seq(inst_18461);
var state_18530__$1 = (function (){var statearr_18656 = state_18530;
(statearr_18656[(23)] = inst_18481__$1);

return statearr_18656;
})();
if(inst_18481__$1){
var statearr_18657_20144 = state_18530__$1;
(statearr_18657_20144[(1)] = (33));

} else {
var statearr_18658_20145 = state_18530__$1;
(statearr_18658_20145[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18531 === (25))){
var inst_18464 = (state_18530[(11)]);
var inst_18463 = (state_18530[(20)]);
var inst_18467 = (inst_18464 < inst_18463);
var inst_18468 = inst_18467;
var state_18530__$1 = state_18530;
if(cljs.core.truth_(inst_18468)){
var statearr_18659_20146 = state_18530__$1;
(statearr_18659_20146[(1)] = (27));

} else {
var statearr_18660_20147 = state_18530__$1;
(statearr_18660_20147[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18531 === (34))){
var state_18530__$1 = state_18530;
var statearr_18661_20148 = state_18530__$1;
(statearr_18661_20148[(2)] = null);

(statearr_18661_20148[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18531 === (17))){
var state_18530__$1 = state_18530;
var statearr_18662_20149 = state_18530__$1;
(statearr_18662_20149[(2)] = null);

(statearr_18662_20149[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18531 === (3))){
var inst_18528 = (state_18530[(2)]);
var state_18530__$1 = state_18530;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18530__$1,inst_18528);
} else {
if((state_val_18531 === (12))){
var inst_18448 = (state_18530[(2)]);
var state_18530__$1 = state_18530;
var statearr_18663_20154 = state_18530__$1;
(statearr_18663_20154[(2)] = inst_18448);

(statearr_18663_20154[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18531 === (2))){
var state_18530__$1 = state_18530;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18530__$1,(4),ch);
} else {
if((state_val_18531 === (23))){
var state_18530__$1 = state_18530;
var statearr_18668_20155 = state_18530__$1;
(statearr_18668_20155[(2)] = null);

(statearr_18668_20155[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18531 === (35))){
var inst_18512 = (state_18530[(2)]);
var state_18530__$1 = state_18530;
var statearr_18669_20156 = state_18530__$1;
(statearr_18669_20156[(2)] = inst_18512);

(statearr_18669_20156[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18531 === (19))){
var inst_18414 = (state_18530[(7)]);
var inst_18421 = cljs.core.chunk_first(inst_18414);
var inst_18425 = cljs.core.chunk_rest(inst_18414);
var inst_18426 = cljs.core.count(inst_18421);
var inst_18388 = inst_18425;
var inst_18389 = inst_18421;
var inst_18390 = inst_18426;
var inst_18391 = (0);
var state_18530__$1 = (function (){var statearr_18670 = state_18530;
(statearr_18670[(14)] = inst_18389);

(statearr_18670[(15)] = inst_18391);

(statearr_18670[(16)] = inst_18388);

(statearr_18670[(17)] = inst_18390);

return statearr_18670;
})();
var statearr_18672_20157 = state_18530__$1;
(statearr_18672_20157[(2)] = null);

(statearr_18672_20157[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18531 === (11))){
var inst_18414 = (state_18530[(7)]);
var inst_18388 = (state_18530[(16)]);
var inst_18414__$1 = cljs.core.seq(inst_18388);
var state_18530__$1 = (function (){var statearr_18673 = state_18530;
(statearr_18673[(7)] = inst_18414__$1);

return statearr_18673;
})();
if(inst_18414__$1){
var statearr_18674_20158 = state_18530__$1;
(statearr_18674_20158[(1)] = (16));

} else {
var statearr_18675_20159 = state_18530__$1;
(statearr_18675_20159[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18531 === (9))){
var inst_18450 = (state_18530[(2)]);
var state_18530__$1 = state_18530;
var statearr_18676_20160 = state_18530__$1;
(statearr_18676_20160[(2)] = inst_18450);

(statearr_18676_20160[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18531 === (5))){
var inst_18386 = cljs.core.deref(cs);
var inst_18387 = cljs.core.seq(inst_18386);
var inst_18388 = inst_18387;
var inst_18389 = null;
var inst_18390 = (0);
var inst_18391 = (0);
var state_18530__$1 = (function (){var statearr_18677 = state_18530;
(statearr_18677[(14)] = inst_18389);

(statearr_18677[(15)] = inst_18391);

(statearr_18677[(16)] = inst_18388);

(statearr_18677[(17)] = inst_18390);

return statearr_18677;
})();
var statearr_18678_20161 = state_18530__$1;
(statearr_18678_20161[(2)] = null);

(statearr_18678_20161[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18531 === (14))){
var state_18530__$1 = state_18530;
var statearr_18679_20162 = state_18530__$1;
(statearr_18679_20162[(2)] = null);

(statearr_18679_20162[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18531 === (45))){
var inst_18520 = (state_18530[(2)]);
var state_18530__$1 = state_18530;
var statearr_18680_20163 = state_18530__$1;
(statearr_18680_20163[(2)] = inst_18520);

(statearr_18680_20163[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18531 === (26))){
var inst_18453 = (state_18530[(27)]);
var inst_18516 = (state_18530[(2)]);
var inst_18517 = cljs.core.seq(inst_18453);
var state_18530__$1 = (function (){var statearr_18681 = state_18530;
(statearr_18681[(29)] = inst_18516);

return statearr_18681;
})();
if(inst_18517){
var statearr_18683_20164 = state_18530__$1;
(statearr_18683_20164[(1)] = (42));

} else {
var statearr_18684_20165 = state_18530__$1;
(statearr_18684_20165[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18531 === (16))){
var inst_18414 = (state_18530[(7)]);
var inst_18418 = cljs.core.chunked_seq_QMARK_(inst_18414);
var state_18530__$1 = state_18530;
if(inst_18418){
var statearr_18686_20166 = state_18530__$1;
(statearr_18686_20166[(1)] = (19));

} else {
var statearr_18687_20167 = state_18530__$1;
(statearr_18687_20167[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18531 === (38))){
var inst_18509 = (state_18530[(2)]);
var state_18530__$1 = state_18530;
var statearr_18688_20168 = state_18530__$1;
(statearr_18688_20168[(2)] = inst_18509);

(statearr_18688_20168[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18531 === (30))){
var state_18530__$1 = state_18530;
var statearr_18689_20169 = state_18530__$1;
(statearr_18689_20169[(2)] = null);

(statearr_18689_20169[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18531 === (10))){
var inst_18389 = (state_18530[(14)]);
var inst_18391 = (state_18530[(15)]);
var inst_18402 = cljs.core._nth(inst_18389,inst_18391);
var inst_18403 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18402,(0),null);
var inst_18404 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18402,(1),null);
var state_18530__$1 = (function (){var statearr_18690 = state_18530;
(statearr_18690[(24)] = inst_18403);

return statearr_18690;
})();
if(cljs.core.truth_(inst_18404)){
var statearr_18691_20170 = state_18530__$1;
(statearr_18691_20170[(1)] = (13));

} else {
var statearr_18692_20171 = state_18530__$1;
(statearr_18692_20171[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18531 === (18))){
var inst_18446 = (state_18530[(2)]);
var state_18530__$1 = state_18530;
var statearr_18693_20172 = state_18530__$1;
(statearr_18693_20172[(2)] = inst_18446);

(statearr_18693_20172[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18531 === (42))){
var state_18530__$1 = state_18530;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18530__$1,(45),dchan);
} else {
if((state_val_18531 === (37))){
var inst_18481 = (state_18530[(23)]);
var inst_18490 = (state_18530[(22)]);
var inst_18378 = (state_18530[(12)]);
var inst_18490__$1 = cljs.core.first(inst_18481);
var inst_18491 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_18490__$1,inst_18378,done);
var state_18530__$1 = (function (){var statearr_18694 = state_18530;
(statearr_18694[(22)] = inst_18490__$1);

return statearr_18694;
})();
if(cljs.core.truth_(inst_18491)){
var statearr_18695_20173 = state_18530__$1;
(statearr_18695_20173[(1)] = (39));

} else {
var statearr_18696_20174 = state_18530__$1;
(statearr_18696_20174[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18531 === (8))){
var inst_18391 = (state_18530[(15)]);
var inst_18390 = (state_18530[(17)]);
var inst_18393 = (inst_18391 < inst_18390);
var inst_18394 = inst_18393;
var state_18530__$1 = state_18530;
if(cljs.core.truth_(inst_18394)){
var statearr_18697_20175 = state_18530__$1;
(statearr_18697_20175[(1)] = (10));

} else {
var statearr_18698_20176 = state_18530__$1;
(statearr_18698_20176[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__17199__auto__ = null;
var cljs$core$async$mult_$_state_machine__17199__auto____0 = (function (){
var statearr_18699 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18699[(0)] = cljs$core$async$mult_$_state_machine__17199__auto__);

(statearr_18699[(1)] = (1));

return statearr_18699;
});
var cljs$core$async$mult_$_state_machine__17199__auto____1 = (function (state_18530){
while(true){
var ret_value__17200__auto__ = (function (){try{while(true){
var result__17201__auto__ = switch__17198__auto__(state_18530);
if(cljs.core.keyword_identical_QMARK_(result__17201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17201__auto__;
}
break;
}
}catch (e18700){var ex__17202__auto__ = e18700;
var statearr_18701_20177 = state_18530;
(statearr_18701_20177[(2)] = ex__17202__auto__);


if(cljs.core.seq((state_18530[(4)]))){
var statearr_18702_20178 = state_18530;
(statearr_18702_20178[(1)] = cljs.core.first((state_18530[(4)])));

} else {
throw ex__17202__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20179 = state_18530;
state_18530 = G__20179;
continue;
} else {
return ret_value__17200__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__17199__auto__ = function(state_18530){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__17199__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__17199__auto____1.call(this,state_18530);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__17199__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__17199__auto____0;
cljs$core$async$mult_$_state_machine__17199__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__17199__auto____1;
return cljs$core$async$mult_$_state_machine__17199__auto__;
})()
})();
var state__17549__auto__ = (function (){var statearr_18703 = f__17548__auto__();
(statearr_18703[(6)] = c__17547__auto___20085);

return statearr_18703;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17549__auto__);
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
var G__18705 = arguments.length;
switch (G__18705) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_20186 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_20186(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_20190 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_20190(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_20194 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5394__auto__.call(null,m));
} else {
var m__5392__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5392__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_20194(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_20195 = (function (m,state_map){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5394__auto__.call(null,m,state_map));
} else {
var m__5392__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5392__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_20195(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_20196 = (function (m,mode){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5394__auto__.call(null,m,mode));
} else {
var m__5392__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5392__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_20196(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___20197 = arguments.length;
var i__5770__auto___20198 = (0);
while(true){
if((i__5770__auto___20198 < len__5769__auto___20197)){
args__5775__auto__.push((arguments[i__5770__auto___20198]));

var G__20199 = (i__5770__auto___20198 + (1));
i__5770__auto___20198 = G__20199;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__18714){
var map__18715 = p__18714;
var map__18715__$1 = cljs.core.__destructure_map(map__18715);
var opts = map__18715__$1;
var statearr_18716_20201 = state;
(statearr_18716_20201[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_18717_20205 = state;
(statearr_18717_20205[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_18718_20206 = state;
(statearr_18718_20206[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq18710){
var G__18711 = cljs.core.first(seq18710);
var seq18710__$1 = cljs.core.next(seq18710);
var G__18712 = cljs.core.first(seq18710__$1);
var seq18710__$2 = cljs.core.next(seq18710__$1);
var G__18713 = cljs.core.first(seq18710__$2);
var seq18710__$3 = cljs.core.next(seq18710__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18711,G__18712,G__18713,seq18710__$3);
}));


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18721 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta18722){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta18722 = meta18722;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18721.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18723,meta18722__$1){
var self__ = this;
var _18723__$1 = this;
return (new cljs.core.async.t_cljs$core$async18721(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta18722__$1));
}));

(cljs.core.async.t_cljs$core$async18721.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18723){
var self__ = this;
var _18723__$1 = this;
return self__.meta18722;
}));

(cljs.core.async.t_cljs$core$async18721.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18721.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async18721.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18721.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async18721.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async18721.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async18721.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async18721.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async18721.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta18722","meta18722",823875238,null)], null);
}));

(cljs.core.async.t_cljs$core$async18721.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18721.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18721");

(cljs.core.async.t_cljs$core$async18721.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async18721");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18721.
 */
cljs.core.async.__GT_t_cljs$core$async18721 = (function cljs$core$async$__GT_t_cljs$core$async18721(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta18722){
return (new cljs.core.async.t_cljs$core$async18721(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta18722));
});


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
var m = (new cljs.core.async.t_cljs$core$async18721(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
var c__17547__auto___20232 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17548__auto__ = (function (){var switch__17198__auto__ = (function (state_18800){
var state_val_18801 = (state_18800[(1)]);
if((state_val_18801 === (7))){
var inst_18757 = (state_18800[(2)]);
var state_18800__$1 = state_18800;
if(cljs.core.truth_(inst_18757)){
var statearr_18804_20233 = state_18800__$1;
(statearr_18804_20233[(1)] = (8));

} else {
var statearr_18805_20234 = state_18800__$1;
(statearr_18805_20234[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18801 === (20))){
var inst_18750 = (state_18800[(7)]);
var state_18800__$1 = state_18800;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18800__$1,(23),out,inst_18750);
} else {
if((state_val_18801 === (1))){
var inst_18729 = calc_state();
var inst_18730 = cljs.core.__destructure_map(inst_18729);
var inst_18732 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18730,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_18733 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18730,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_18734 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18730,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_18738 = inst_18729;
var state_18800__$1 = (function (){var statearr_18809 = state_18800;
(statearr_18809[(8)] = inst_18733);

(statearr_18809[(9)] = inst_18738);

(statearr_18809[(10)] = inst_18734);

(statearr_18809[(11)] = inst_18732);

return statearr_18809;
})();
var statearr_18810_20235 = state_18800__$1;
(statearr_18810_20235[(2)] = null);

(statearr_18810_20235[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18801 === (24))){
var inst_18741 = (state_18800[(12)]);
var inst_18738 = inst_18741;
var state_18800__$1 = (function (){var statearr_18811 = state_18800;
(statearr_18811[(9)] = inst_18738);

return statearr_18811;
})();
var statearr_18812_20242 = state_18800__$1;
(statearr_18812_20242[(2)] = null);

(statearr_18812_20242[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18801 === (4))){
var inst_18752 = (state_18800[(13)]);
var inst_18750 = (state_18800[(7)]);
var inst_18749 = (state_18800[(2)]);
var inst_18750__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18749,(0),null);
var inst_18751 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18749,(1),null);
var inst_18752__$1 = (inst_18750__$1 == null);
var state_18800__$1 = (function (){var statearr_18813 = state_18800;
(statearr_18813[(14)] = inst_18751);

(statearr_18813[(13)] = inst_18752__$1);

(statearr_18813[(7)] = inst_18750__$1);

return statearr_18813;
})();
if(cljs.core.truth_(inst_18752__$1)){
var statearr_18820_20243 = state_18800__$1;
(statearr_18820_20243[(1)] = (5));

} else {
var statearr_18822_20244 = state_18800__$1;
(statearr_18822_20244[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18801 === (15))){
var inst_18742 = (state_18800[(15)]);
var inst_18772 = (state_18800[(16)]);
var inst_18772__$1 = cljs.core.empty_QMARK_(inst_18742);
var state_18800__$1 = (function (){var statearr_18829 = state_18800;
(statearr_18829[(16)] = inst_18772__$1);

return statearr_18829;
})();
if(inst_18772__$1){
var statearr_18830_20245 = state_18800__$1;
(statearr_18830_20245[(1)] = (17));

} else {
var statearr_18831_20246 = state_18800__$1;
(statearr_18831_20246[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18801 === (21))){
var inst_18741 = (state_18800[(12)]);
var inst_18738 = inst_18741;
var state_18800__$1 = (function (){var statearr_18838 = state_18800;
(statearr_18838[(9)] = inst_18738);

return statearr_18838;
})();
var statearr_18839_20247 = state_18800__$1;
(statearr_18839_20247[(2)] = null);

(statearr_18839_20247[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18801 === (13))){
var inst_18765 = (state_18800[(2)]);
var inst_18766 = calc_state();
var inst_18738 = inst_18766;
var state_18800__$1 = (function (){var statearr_18840 = state_18800;
(statearr_18840[(9)] = inst_18738);

(statearr_18840[(17)] = inst_18765);

return statearr_18840;
})();
var statearr_18841_20248 = state_18800__$1;
(statearr_18841_20248[(2)] = null);

(statearr_18841_20248[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18801 === (22))){
var inst_18793 = (state_18800[(2)]);
var state_18800__$1 = state_18800;
var statearr_18842_20249 = state_18800__$1;
(statearr_18842_20249[(2)] = inst_18793);

(statearr_18842_20249[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18801 === (6))){
var inst_18751 = (state_18800[(14)]);
var inst_18755 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_18751,change);
var state_18800__$1 = state_18800;
var statearr_18847_20250 = state_18800__$1;
(statearr_18847_20250[(2)] = inst_18755);

(statearr_18847_20250[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18801 === (25))){
var state_18800__$1 = state_18800;
var statearr_18851_20251 = state_18800__$1;
(statearr_18851_20251[(2)] = null);

(statearr_18851_20251[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18801 === (17))){
var inst_18751 = (state_18800[(14)]);
var inst_18743 = (state_18800[(18)]);
var inst_18774 = (inst_18743.cljs$core$IFn$_invoke$arity$1 ? inst_18743.cljs$core$IFn$_invoke$arity$1(inst_18751) : inst_18743.call(null,inst_18751));
var inst_18775 = cljs.core.not(inst_18774);
var state_18800__$1 = state_18800;
var statearr_18855_20252 = state_18800__$1;
(statearr_18855_20252[(2)] = inst_18775);

(statearr_18855_20252[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18801 === (3))){
var inst_18797 = (state_18800[(2)]);
var state_18800__$1 = state_18800;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18800__$1,inst_18797);
} else {
if((state_val_18801 === (12))){
var state_18800__$1 = state_18800;
var statearr_18859_20259 = state_18800__$1;
(statearr_18859_20259[(2)] = null);

(statearr_18859_20259[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18801 === (2))){
var inst_18738 = (state_18800[(9)]);
var inst_18741 = (state_18800[(12)]);
var inst_18741__$1 = cljs.core.__destructure_map(inst_18738);
var inst_18742 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18741__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_18743 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18741__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_18744 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18741__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_18800__$1 = (function (){var statearr_18860 = state_18800;
(statearr_18860[(15)] = inst_18742);

(statearr_18860[(12)] = inst_18741__$1);

(statearr_18860[(18)] = inst_18743);

return statearr_18860;
})();
return cljs.core.async.ioc_alts_BANG_(state_18800__$1,(4),inst_18744);
} else {
if((state_val_18801 === (23))){
var inst_18784 = (state_18800[(2)]);
var state_18800__$1 = state_18800;
if(cljs.core.truth_(inst_18784)){
var statearr_18861_20260 = state_18800__$1;
(statearr_18861_20260[(1)] = (24));

} else {
var statearr_18862_20261 = state_18800__$1;
(statearr_18862_20261[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18801 === (19))){
var inst_18778 = (state_18800[(2)]);
var state_18800__$1 = state_18800;
var statearr_18863_20262 = state_18800__$1;
(statearr_18863_20262[(2)] = inst_18778);

(statearr_18863_20262[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18801 === (11))){
var inst_18751 = (state_18800[(14)]);
var inst_18762 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_18751);
var state_18800__$1 = state_18800;
var statearr_18868_20263 = state_18800__$1;
(statearr_18868_20263[(2)] = inst_18762);

(statearr_18868_20263[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18801 === (9))){
var inst_18751 = (state_18800[(14)]);
var inst_18742 = (state_18800[(15)]);
var inst_18769 = (state_18800[(19)]);
var inst_18769__$1 = (inst_18742.cljs$core$IFn$_invoke$arity$1 ? inst_18742.cljs$core$IFn$_invoke$arity$1(inst_18751) : inst_18742.call(null,inst_18751));
var state_18800__$1 = (function (){var statearr_18869 = state_18800;
(statearr_18869[(19)] = inst_18769__$1);

return statearr_18869;
})();
if(cljs.core.truth_(inst_18769__$1)){
var statearr_18870_20264 = state_18800__$1;
(statearr_18870_20264[(1)] = (14));

} else {
var statearr_18871_20265 = state_18800__$1;
(statearr_18871_20265[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18801 === (5))){
var inst_18752 = (state_18800[(13)]);
var state_18800__$1 = state_18800;
var statearr_18872_20266 = state_18800__$1;
(statearr_18872_20266[(2)] = inst_18752);

(statearr_18872_20266[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18801 === (14))){
var inst_18769 = (state_18800[(19)]);
var state_18800__$1 = state_18800;
var statearr_18873_20267 = state_18800__$1;
(statearr_18873_20267[(2)] = inst_18769);

(statearr_18873_20267[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18801 === (26))){
var inst_18789 = (state_18800[(2)]);
var state_18800__$1 = state_18800;
var statearr_18874_20268 = state_18800__$1;
(statearr_18874_20268[(2)] = inst_18789);

(statearr_18874_20268[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18801 === (16))){
var inst_18781 = (state_18800[(2)]);
var state_18800__$1 = state_18800;
if(cljs.core.truth_(inst_18781)){
var statearr_18875_20269 = state_18800__$1;
(statearr_18875_20269[(1)] = (20));

} else {
var statearr_18876_20270 = state_18800__$1;
(statearr_18876_20270[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18801 === (10))){
var inst_18795 = (state_18800[(2)]);
var state_18800__$1 = state_18800;
var statearr_18877_20271 = state_18800__$1;
(statearr_18877_20271[(2)] = inst_18795);

(statearr_18877_20271[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18801 === (18))){
var inst_18772 = (state_18800[(16)]);
var state_18800__$1 = state_18800;
var statearr_18878_20272 = state_18800__$1;
(statearr_18878_20272[(2)] = inst_18772);

(statearr_18878_20272[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18801 === (8))){
var inst_18750 = (state_18800[(7)]);
var inst_18760 = (inst_18750 == null);
var state_18800__$1 = state_18800;
if(cljs.core.truth_(inst_18760)){
var statearr_18879_20273 = state_18800__$1;
(statearr_18879_20273[(1)] = (11));

} else {
var statearr_18880_20280 = state_18800__$1;
(statearr_18880_20280[(1)] = (12));

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
var cljs$core$async$mix_$_state_machine__17199__auto__ = null;
var cljs$core$async$mix_$_state_machine__17199__auto____0 = (function (){
var statearr_18881 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18881[(0)] = cljs$core$async$mix_$_state_machine__17199__auto__);

(statearr_18881[(1)] = (1));

return statearr_18881;
});
var cljs$core$async$mix_$_state_machine__17199__auto____1 = (function (state_18800){
while(true){
var ret_value__17200__auto__ = (function (){try{while(true){
var result__17201__auto__ = switch__17198__auto__(state_18800);
if(cljs.core.keyword_identical_QMARK_(result__17201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17201__auto__;
}
break;
}
}catch (e18882){var ex__17202__auto__ = e18882;
var statearr_18883_20281 = state_18800;
(statearr_18883_20281[(2)] = ex__17202__auto__);


if(cljs.core.seq((state_18800[(4)]))){
var statearr_18885_20282 = state_18800;
(statearr_18885_20282[(1)] = cljs.core.first((state_18800[(4)])));

} else {
throw ex__17202__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20283 = state_18800;
state_18800 = G__20283;
continue;
} else {
return ret_value__17200__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__17199__auto__ = function(state_18800){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__17199__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__17199__auto____1.call(this,state_18800);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__17199__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__17199__auto____0;
cljs$core$async$mix_$_state_machine__17199__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__17199__auto____1;
return cljs$core$async$mix_$_state_machine__17199__auto__;
})()
})();
var state__17549__auto__ = (function (){var statearr_18889 = f__17548__auto__();
(statearr_18889[(6)] = c__17547__auto___20232);

return statearr_18889;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17549__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_20284 = (function (p,v,ch,close_QMARK_){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5394__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__5392__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5392__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_20284(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_20285 = (function (p,v,ch){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5394__auto__.call(null,p,v,ch));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5392__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_20285(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_20288 = (function() {
var G__20289 = null;
var G__20289__1 = (function (p){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5394__auto__.call(null,p));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5392__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__20289__2 = (function (p,v){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5394__auto__.call(null,p,v));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5392__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__20289 = function(p,v){
switch(arguments.length){
case 1:
return G__20289__1.call(this,p);
case 2:
return G__20289__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__20289.cljs$core$IFn$_invoke$arity$1 = G__20289__1;
G__20289.cljs$core$IFn$_invoke$arity$2 = G__20289__2;
return G__20289;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__18902 = arguments.length;
switch (G__18902) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_20288(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_20288(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);



/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18911 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta18912){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta18912 = meta18912;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18911.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18913,meta18912__$1){
var self__ = this;
var _18913__$1 = this;
return (new cljs.core.async.t_cljs$core$async18911(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta18912__$1));
}));

(cljs.core.async.t_cljs$core$async18911.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18913){
var self__ = this;
var _18913__$1 = this;
return self__.meta18912;
}));

(cljs.core.async.t_cljs$core$async18911.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18911.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async18911.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18911.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async18911.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async18911.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async18911.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async18911.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta18912","meta18912",209055019,null)], null);
}));

(cljs.core.async.t_cljs$core$async18911.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18911.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18911");

(cljs.core.async.t_cljs$core$async18911.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async18911");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18911.
 */
cljs.core.async.__GT_t_cljs$core$async18911 = (function cljs$core$async$__GT_t_cljs$core$async18911(ch,topic_fn,buf_fn,mults,ensure_mult,meta18912){
return (new cljs.core.async.t_cljs$core$async18911(ch,topic_fn,buf_fn,mults,ensure_mult,meta18912));
});


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
var G__18905 = arguments.length;
switch (G__18905) {
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
var or__5045__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__18903_SHARP_){
if(cljs.core.truth_((p1__18903_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__18903_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__18903_SHARP_.call(null,topic)))){
return p1__18903_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__18903_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (new cljs.core.async.t_cljs$core$async18911(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
var c__17547__auto___20302 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17548__auto__ = (function (){var switch__17198__auto__ = (function (state_18996){
var state_val_18997 = (state_18996[(1)]);
if((state_val_18997 === (7))){
var inst_18992 = (state_18996[(2)]);
var state_18996__$1 = state_18996;
var statearr_19002_20303 = state_18996__$1;
(statearr_19002_20303[(2)] = inst_18992);

(statearr_19002_20303[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18997 === (20))){
var state_18996__$1 = state_18996;
var statearr_19003_20304 = state_18996__$1;
(statearr_19003_20304[(2)] = null);

(statearr_19003_20304[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18997 === (1))){
var state_18996__$1 = state_18996;
var statearr_19004_20305 = state_18996__$1;
(statearr_19004_20305[(2)] = null);

(statearr_19004_20305[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18997 === (24))){
var inst_18972 = (state_18996[(7)]);
var inst_18984 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_18972);
var state_18996__$1 = state_18996;
var statearr_19005_20306 = state_18996__$1;
(statearr_19005_20306[(2)] = inst_18984);

(statearr_19005_20306[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18997 === (4))){
var inst_18923 = (state_18996[(8)]);
var inst_18923__$1 = (state_18996[(2)]);
var inst_18924 = (inst_18923__$1 == null);
var state_18996__$1 = (function (){var statearr_19006 = state_18996;
(statearr_19006[(8)] = inst_18923__$1);

return statearr_19006;
})();
if(cljs.core.truth_(inst_18924)){
var statearr_19007_20307 = state_18996__$1;
(statearr_19007_20307[(1)] = (5));

} else {
var statearr_19008_20310 = state_18996__$1;
(statearr_19008_20310[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18997 === (15))){
var inst_18965 = (state_18996[(2)]);
var state_18996__$1 = state_18996;
var statearr_19009_20311 = state_18996__$1;
(statearr_19009_20311[(2)] = inst_18965);

(statearr_19009_20311[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18997 === (21))){
var inst_18989 = (state_18996[(2)]);
var state_18996__$1 = (function (){var statearr_19010 = state_18996;
(statearr_19010[(9)] = inst_18989);

return statearr_19010;
})();
var statearr_19011_20314 = state_18996__$1;
(statearr_19011_20314[(2)] = null);

(statearr_19011_20314[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18997 === (13))){
var inst_18947 = (state_18996[(10)]);
var inst_18949 = cljs.core.chunked_seq_QMARK_(inst_18947);
var state_18996__$1 = state_18996;
if(inst_18949){
var statearr_19012_20317 = state_18996__$1;
(statearr_19012_20317[(1)] = (16));

} else {
var statearr_19013_20318 = state_18996__$1;
(statearr_19013_20318[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18997 === (22))){
var inst_18981 = (state_18996[(2)]);
var state_18996__$1 = state_18996;
if(cljs.core.truth_(inst_18981)){
var statearr_19014_20320 = state_18996__$1;
(statearr_19014_20320[(1)] = (23));

} else {
var statearr_19015_20322 = state_18996__$1;
(statearr_19015_20322[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18997 === (6))){
var inst_18923 = (state_18996[(8)]);
var inst_18972 = (state_18996[(7)]);
var inst_18977 = (state_18996[(11)]);
var inst_18972__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_18923) : topic_fn.call(null,inst_18923));
var inst_18976 = cljs.core.deref(mults);
var inst_18977__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18976,inst_18972__$1);
var state_18996__$1 = (function (){var statearr_19016 = state_18996;
(statearr_19016[(7)] = inst_18972__$1);

(statearr_19016[(11)] = inst_18977__$1);

return statearr_19016;
})();
if(cljs.core.truth_(inst_18977__$1)){
var statearr_19018_20323 = state_18996__$1;
(statearr_19018_20323[(1)] = (19));

} else {
var statearr_19019_20324 = state_18996__$1;
(statearr_19019_20324[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18997 === (25))){
var inst_18986 = (state_18996[(2)]);
var state_18996__$1 = state_18996;
var statearr_19021_20325 = state_18996__$1;
(statearr_19021_20325[(2)] = inst_18986);

(statearr_19021_20325[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18997 === (17))){
var inst_18947 = (state_18996[(10)]);
var inst_18956 = cljs.core.first(inst_18947);
var inst_18957 = cljs.core.async.muxch_STAR_(inst_18956);
var inst_18958 = cljs.core.async.close_BANG_(inst_18957);
var inst_18959 = cljs.core.next(inst_18947);
var inst_18933 = inst_18959;
var inst_18934 = null;
var inst_18935 = (0);
var inst_18936 = (0);
var state_18996__$1 = (function (){var statearr_19022 = state_18996;
(statearr_19022[(12)] = inst_18958);

(statearr_19022[(13)] = inst_18936);

(statearr_19022[(14)] = inst_18935);

(statearr_19022[(15)] = inst_18934);

(statearr_19022[(16)] = inst_18933);

return statearr_19022;
})();
var statearr_19023_20327 = state_18996__$1;
(statearr_19023_20327[(2)] = null);

(statearr_19023_20327[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18997 === (3))){
var inst_18994 = (state_18996[(2)]);
var state_18996__$1 = state_18996;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18996__$1,inst_18994);
} else {
if((state_val_18997 === (12))){
var inst_18967 = (state_18996[(2)]);
var state_18996__$1 = state_18996;
var statearr_19024_20333 = state_18996__$1;
(statearr_19024_20333[(2)] = inst_18967);

(statearr_19024_20333[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18997 === (2))){
var state_18996__$1 = state_18996;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18996__$1,(4),ch);
} else {
if((state_val_18997 === (23))){
var state_18996__$1 = state_18996;
var statearr_19028_20335 = state_18996__$1;
(statearr_19028_20335[(2)] = null);

(statearr_19028_20335[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18997 === (19))){
var inst_18923 = (state_18996[(8)]);
var inst_18977 = (state_18996[(11)]);
var inst_18979 = cljs.core.async.muxch_STAR_(inst_18977);
var state_18996__$1 = state_18996;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18996__$1,(22),inst_18979,inst_18923);
} else {
if((state_val_18997 === (11))){
var inst_18947 = (state_18996[(10)]);
var inst_18933 = (state_18996[(16)]);
var inst_18947__$1 = cljs.core.seq(inst_18933);
var state_18996__$1 = (function (){var statearr_19029 = state_18996;
(statearr_19029[(10)] = inst_18947__$1);

return statearr_19029;
})();
if(inst_18947__$1){
var statearr_19030_20336 = state_18996__$1;
(statearr_19030_20336[(1)] = (13));

} else {
var statearr_19031_20337 = state_18996__$1;
(statearr_19031_20337[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18997 === (9))){
var inst_18969 = (state_18996[(2)]);
var state_18996__$1 = state_18996;
var statearr_19032_20338 = state_18996__$1;
(statearr_19032_20338[(2)] = inst_18969);

(statearr_19032_20338[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18997 === (5))){
var inst_18930 = cljs.core.deref(mults);
var inst_18931 = cljs.core.vals(inst_18930);
var inst_18932 = cljs.core.seq(inst_18931);
var inst_18933 = inst_18932;
var inst_18934 = null;
var inst_18935 = (0);
var inst_18936 = (0);
var state_18996__$1 = (function (){var statearr_19033 = state_18996;
(statearr_19033[(13)] = inst_18936);

(statearr_19033[(14)] = inst_18935);

(statearr_19033[(15)] = inst_18934);

(statearr_19033[(16)] = inst_18933);

return statearr_19033;
})();
var statearr_19034_20339 = state_18996__$1;
(statearr_19034_20339[(2)] = null);

(statearr_19034_20339[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18997 === (14))){
var state_18996__$1 = state_18996;
var statearr_19038_20340 = state_18996__$1;
(statearr_19038_20340[(2)] = null);

(statearr_19038_20340[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18997 === (16))){
var inst_18947 = (state_18996[(10)]);
var inst_18951 = cljs.core.chunk_first(inst_18947);
var inst_18952 = cljs.core.chunk_rest(inst_18947);
var inst_18953 = cljs.core.count(inst_18951);
var inst_18933 = inst_18952;
var inst_18934 = inst_18951;
var inst_18935 = inst_18953;
var inst_18936 = (0);
var state_18996__$1 = (function (){var statearr_19039 = state_18996;
(statearr_19039[(13)] = inst_18936);

(statearr_19039[(14)] = inst_18935);

(statearr_19039[(15)] = inst_18934);

(statearr_19039[(16)] = inst_18933);

return statearr_19039;
})();
var statearr_19040_20341 = state_18996__$1;
(statearr_19040_20341[(2)] = null);

(statearr_19040_20341[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18997 === (10))){
var inst_18936 = (state_18996[(13)]);
var inst_18935 = (state_18996[(14)]);
var inst_18934 = (state_18996[(15)]);
var inst_18933 = (state_18996[(16)]);
var inst_18941 = cljs.core._nth(inst_18934,inst_18936);
var inst_18942 = cljs.core.async.muxch_STAR_(inst_18941);
var inst_18943 = cljs.core.async.close_BANG_(inst_18942);
var inst_18944 = (inst_18936 + (1));
var tmp19035 = inst_18935;
var tmp19036 = inst_18934;
var tmp19037 = inst_18933;
var inst_18933__$1 = tmp19037;
var inst_18934__$1 = tmp19036;
var inst_18935__$1 = tmp19035;
var inst_18936__$1 = inst_18944;
var state_18996__$1 = (function (){var statearr_19041 = state_18996;
(statearr_19041[(17)] = inst_18943);

(statearr_19041[(13)] = inst_18936__$1);

(statearr_19041[(14)] = inst_18935__$1);

(statearr_19041[(15)] = inst_18934__$1);

(statearr_19041[(16)] = inst_18933__$1);

return statearr_19041;
})();
var statearr_19042_20343 = state_18996__$1;
(statearr_19042_20343[(2)] = null);

(statearr_19042_20343[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18997 === (18))){
var inst_18962 = (state_18996[(2)]);
var state_18996__$1 = state_18996;
var statearr_19043_20344 = state_18996__$1;
(statearr_19043_20344[(2)] = inst_18962);

(statearr_19043_20344[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18997 === (8))){
var inst_18936 = (state_18996[(13)]);
var inst_18935 = (state_18996[(14)]);
var inst_18938 = (inst_18936 < inst_18935);
var inst_18939 = inst_18938;
var state_18996__$1 = state_18996;
if(cljs.core.truth_(inst_18939)){
var statearr_19044_20350 = state_18996__$1;
(statearr_19044_20350[(1)] = (10));

} else {
var statearr_19045_20351 = state_18996__$1;
(statearr_19045_20351[(1)] = (11));

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
var cljs$core$async$state_machine__17199__auto__ = null;
var cljs$core$async$state_machine__17199__auto____0 = (function (){
var statearr_19046 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19046[(0)] = cljs$core$async$state_machine__17199__auto__);

(statearr_19046[(1)] = (1));

return statearr_19046;
});
var cljs$core$async$state_machine__17199__auto____1 = (function (state_18996){
while(true){
var ret_value__17200__auto__ = (function (){try{while(true){
var result__17201__auto__ = switch__17198__auto__(state_18996);
if(cljs.core.keyword_identical_QMARK_(result__17201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17201__auto__;
}
break;
}
}catch (e19047){var ex__17202__auto__ = e19047;
var statearr_19048_20356 = state_18996;
(statearr_19048_20356[(2)] = ex__17202__auto__);


if(cljs.core.seq((state_18996[(4)]))){
var statearr_19049_20357 = state_18996;
(statearr_19049_20357[(1)] = cljs.core.first((state_18996[(4)])));

} else {
throw ex__17202__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20358 = state_18996;
state_18996 = G__20358;
continue;
} else {
return ret_value__17200__auto__;
}
break;
}
});
cljs$core$async$state_machine__17199__auto__ = function(state_18996){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17199__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17199__auto____1.call(this,state_18996);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17199__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17199__auto____0;
cljs$core$async$state_machine__17199__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17199__auto____1;
return cljs$core$async$state_machine__17199__auto__;
})()
})();
var state__17549__auto__ = (function (){var statearr_19050 = f__17548__auto__();
(statearr_19050[(6)] = c__17547__auto___20302);

return statearr_19050;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17549__auto__);
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
var G__19052 = arguments.length;
switch (G__19052) {
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
var G__19054 = arguments.length;
switch (G__19054) {
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
var G__19057 = arguments.length;
switch (G__19057) {
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
var c__17547__auto___20378 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17548__auto__ = (function (){var switch__17198__auto__ = (function (state_19107){
var state_val_19108 = (state_19107[(1)]);
if((state_val_19108 === (7))){
var state_19107__$1 = state_19107;
var statearr_19109_20383 = state_19107__$1;
(statearr_19109_20383[(2)] = null);

(statearr_19109_20383[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19108 === (1))){
var state_19107__$1 = state_19107;
var statearr_19110_20393 = state_19107__$1;
(statearr_19110_20393[(2)] = null);

(statearr_19110_20393[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19108 === (4))){
var inst_19063 = (state_19107[(7)]);
var inst_19064 = (state_19107[(8)]);
var inst_19066 = (inst_19064 < inst_19063);
var state_19107__$1 = state_19107;
if(cljs.core.truth_(inst_19066)){
var statearr_19111_20394 = state_19107__$1;
(statearr_19111_20394[(1)] = (6));

} else {
var statearr_19112_20395 = state_19107__$1;
(statearr_19112_20395[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19108 === (15))){
var inst_19093 = (state_19107[(9)]);
var inst_19098 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_19093);
var state_19107__$1 = state_19107;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19107__$1,(17),out,inst_19098);
} else {
if((state_val_19108 === (13))){
var inst_19093 = (state_19107[(9)]);
var inst_19093__$1 = (state_19107[(2)]);
var inst_19094 = cljs.core.some(cljs.core.nil_QMARK_,inst_19093__$1);
var state_19107__$1 = (function (){var statearr_19127 = state_19107;
(statearr_19127[(9)] = inst_19093__$1);

return statearr_19127;
})();
if(cljs.core.truth_(inst_19094)){
var statearr_19128_20404 = state_19107__$1;
(statearr_19128_20404[(1)] = (14));

} else {
var statearr_19129_20408 = state_19107__$1;
(statearr_19129_20408[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19108 === (6))){
var state_19107__$1 = state_19107;
var statearr_19136_20409 = state_19107__$1;
(statearr_19136_20409[(2)] = null);

(statearr_19136_20409[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19108 === (17))){
var inst_19100 = (state_19107[(2)]);
var state_19107__$1 = (function (){var statearr_19152 = state_19107;
(statearr_19152[(10)] = inst_19100);

return statearr_19152;
})();
var statearr_19153_20410 = state_19107__$1;
(statearr_19153_20410[(2)] = null);

(statearr_19153_20410[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19108 === (3))){
var inst_19105 = (state_19107[(2)]);
var state_19107__$1 = state_19107;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19107__$1,inst_19105);
} else {
if((state_val_19108 === (12))){
var _ = (function (){var statearr_19160 = state_19107;
(statearr_19160[(4)] = cljs.core.rest((state_19107[(4)])));

return statearr_19160;
})();
var state_19107__$1 = state_19107;
var ex19145 = (state_19107__$1[(2)]);
var statearr_19161_20411 = state_19107__$1;
(statearr_19161_20411[(5)] = ex19145);


if((ex19145 instanceof Object)){
var statearr_19164_20412 = state_19107__$1;
(statearr_19164_20412[(1)] = (11));

(statearr_19164_20412[(5)] = null);

} else {
throw ex19145;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19108 === (2))){
var inst_19062 = cljs.core.reset_BANG_(dctr,cnt);
var inst_19063 = cnt;
var inst_19064 = (0);
var state_19107__$1 = (function (){var statearr_19169 = state_19107;
(statearr_19169[(7)] = inst_19063);

(statearr_19169[(11)] = inst_19062);

(statearr_19169[(8)] = inst_19064);

return statearr_19169;
})();
var statearr_19170_20424 = state_19107__$1;
(statearr_19170_20424[(2)] = null);

(statearr_19170_20424[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19108 === (11))){
var inst_19072 = (state_19107[(2)]);
var inst_19073 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_19107__$1 = (function (){var statearr_19171 = state_19107;
(statearr_19171[(12)] = inst_19072);

return statearr_19171;
})();
var statearr_19172_20428 = state_19107__$1;
(statearr_19172_20428[(2)] = inst_19073);

(statearr_19172_20428[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19108 === (9))){
var inst_19064 = (state_19107[(8)]);
var _ = (function (){var statearr_19173 = state_19107;
(statearr_19173[(4)] = cljs.core.cons((12),(state_19107[(4)])));

return statearr_19173;
})();
var inst_19079 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_19064) : chs__$1.call(null,inst_19064));
var inst_19080 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_19064) : done.call(null,inst_19064));
var inst_19081 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_19079,inst_19080);
var ___$1 = (function (){var statearr_19174 = state_19107;
(statearr_19174[(4)] = cljs.core.rest((state_19107[(4)])));

return statearr_19174;
})();
var state_19107__$1 = state_19107;
var statearr_19175_20440 = state_19107__$1;
(statearr_19175_20440[(2)] = inst_19081);

(statearr_19175_20440[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19108 === (5))){
var inst_19091 = (state_19107[(2)]);
var state_19107__$1 = (function (){var statearr_19176 = state_19107;
(statearr_19176[(13)] = inst_19091);

return statearr_19176;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19107__$1,(13),dchan);
} else {
if((state_val_19108 === (14))){
var inst_19096 = cljs.core.async.close_BANG_(out);
var state_19107__$1 = state_19107;
var statearr_19177_20454 = state_19107__$1;
(statearr_19177_20454[(2)] = inst_19096);

(statearr_19177_20454[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19108 === (16))){
var inst_19103 = (state_19107[(2)]);
var state_19107__$1 = state_19107;
var statearr_19178_20455 = state_19107__$1;
(statearr_19178_20455[(2)] = inst_19103);

(statearr_19178_20455[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19108 === (10))){
var inst_19064 = (state_19107[(8)]);
var inst_19084 = (state_19107[(2)]);
var inst_19085 = (inst_19064 + (1));
var inst_19064__$1 = inst_19085;
var state_19107__$1 = (function (){var statearr_19179 = state_19107;
(statearr_19179[(14)] = inst_19084);

(statearr_19179[(8)] = inst_19064__$1);

return statearr_19179;
})();
var statearr_19180_20460 = state_19107__$1;
(statearr_19180_20460[(2)] = null);

(statearr_19180_20460[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19108 === (8))){
var inst_19089 = (state_19107[(2)]);
var state_19107__$1 = state_19107;
var statearr_19181_20464 = state_19107__$1;
(statearr_19181_20464[(2)] = inst_19089);

(statearr_19181_20464[(1)] = (5));


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
var cljs$core$async$state_machine__17199__auto__ = null;
var cljs$core$async$state_machine__17199__auto____0 = (function (){
var statearr_19182 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19182[(0)] = cljs$core$async$state_machine__17199__auto__);

(statearr_19182[(1)] = (1));

return statearr_19182;
});
var cljs$core$async$state_machine__17199__auto____1 = (function (state_19107){
while(true){
var ret_value__17200__auto__ = (function (){try{while(true){
var result__17201__auto__ = switch__17198__auto__(state_19107);
if(cljs.core.keyword_identical_QMARK_(result__17201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17201__auto__;
}
break;
}
}catch (e19183){var ex__17202__auto__ = e19183;
var statearr_19184_20465 = state_19107;
(statearr_19184_20465[(2)] = ex__17202__auto__);


if(cljs.core.seq((state_19107[(4)]))){
var statearr_19185_20471 = state_19107;
(statearr_19185_20471[(1)] = cljs.core.first((state_19107[(4)])));

} else {
throw ex__17202__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20478 = state_19107;
state_19107 = G__20478;
continue;
} else {
return ret_value__17200__auto__;
}
break;
}
});
cljs$core$async$state_machine__17199__auto__ = function(state_19107){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17199__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17199__auto____1.call(this,state_19107);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17199__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17199__auto____0;
cljs$core$async$state_machine__17199__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17199__auto____1;
return cljs$core$async$state_machine__17199__auto__;
})()
})();
var state__17549__auto__ = (function (){var statearr_19186 = f__17548__auto__();
(statearr_19186[(6)] = c__17547__auto___20378);

return statearr_19186;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17549__auto__);
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
var G__19189 = arguments.length;
switch (G__19189) {
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
var c__17547__auto___20492 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17548__auto__ = (function (){var switch__17198__auto__ = (function (state_19221){
var state_val_19222 = (state_19221[(1)]);
if((state_val_19222 === (7))){
var inst_19201 = (state_19221[(7)]);
var inst_19200 = (state_19221[(8)]);
var inst_19200__$1 = (state_19221[(2)]);
var inst_19201__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19200__$1,(0),null);
var inst_19202 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19200__$1,(1),null);
var inst_19203 = (inst_19201__$1 == null);
var state_19221__$1 = (function (){var statearr_19223 = state_19221;
(statearr_19223[(7)] = inst_19201__$1);

(statearr_19223[(9)] = inst_19202);

(statearr_19223[(8)] = inst_19200__$1);

return statearr_19223;
})();
if(cljs.core.truth_(inst_19203)){
var statearr_19224_20497 = state_19221__$1;
(statearr_19224_20497[(1)] = (8));

} else {
var statearr_19225_20498 = state_19221__$1;
(statearr_19225_20498[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19222 === (1))){
var inst_19190 = cljs.core.vec(chs);
var inst_19191 = inst_19190;
var state_19221__$1 = (function (){var statearr_19226 = state_19221;
(statearr_19226[(10)] = inst_19191);

return statearr_19226;
})();
var statearr_19227_20499 = state_19221__$1;
(statearr_19227_20499[(2)] = null);

(statearr_19227_20499[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19222 === (4))){
var inst_19191 = (state_19221[(10)]);
var state_19221__$1 = state_19221;
return cljs.core.async.ioc_alts_BANG_(state_19221__$1,(7),inst_19191);
} else {
if((state_val_19222 === (6))){
var inst_19217 = (state_19221[(2)]);
var state_19221__$1 = state_19221;
var statearr_19228_20504 = state_19221__$1;
(statearr_19228_20504[(2)] = inst_19217);

(statearr_19228_20504[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19222 === (3))){
var inst_19219 = (state_19221[(2)]);
var state_19221__$1 = state_19221;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19221__$1,inst_19219);
} else {
if((state_val_19222 === (2))){
var inst_19191 = (state_19221[(10)]);
var inst_19193 = cljs.core.count(inst_19191);
var inst_19194 = (inst_19193 > (0));
var state_19221__$1 = state_19221;
if(cljs.core.truth_(inst_19194)){
var statearr_19230_20506 = state_19221__$1;
(statearr_19230_20506[(1)] = (4));

} else {
var statearr_19231_20507 = state_19221__$1;
(statearr_19231_20507[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19222 === (11))){
var inst_19191 = (state_19221[(10)]);
var inst_19210 = (state_19221[(2)]);
var tmp19229 = inst_19191;
var inst_19191__$1 = tmp19229;
var state_19221__$1 = (function (){var statearr_19234 = state_19221;
(statearr_19234[(10)] = inst_19191__$1);

(statearr_19234[(11)] = inst_19210);

return statearr_19234;
})();
var statearr_19238_20508 = state_19221__$1;
(statearr_19238_20508[(2)] = null);

(statearr_19238_20508[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19222 === (9))){
var inst_19201 = (state_19221[(7)]);
var state_19221__$1 = state_19221;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19221__$1,(11),out,inst_19201);
} else {
if((state_val_19222 === (5))){
var inst_19215 = cljs.core.async.close_BANG_(out);
var state_19221__$1 = state_19221;
var statearr_19245_20511 = state_19221__$1;
(statearr_19245_20511[(2)] = inst_19215);

(statearr_19245_20511[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19222 === (10))){
var inst_19213 = (state_19221[(2)]);
var state_19221__$1 = state_19221;
var statearr_19246_20513 = state_19221__$1;
(statearr_19246_20513[(2)] = inst_19213);

(statearr_19246_20513[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19222 === (8))){
var inst_19191 = (state_19221[(10)]);
var inst_19201 = (state_19221[(7)]);
var inst_19202 = (state_19221[(9)]);
var inst_19200 = (state_19221[(8)]);
var inst_19205 = (function (){var cs = inst_19191;
var vec__19196 = inst_19200;
var v = inst_19201;
var c = inst_19202;
return (function (p1__19187_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__19187_SHARP_);
});
})();
var inst_19206 = cljs.core.filterv(inst_19205,inst_19191);
var inst_19191__$1 = inst_19206;
var state_19221__$1 = (function (){var statearr_19247 = state_19221;
(statearr_19247[(10)] = inst_19191__$1);

return statearr_19247;
})();
var statearr_19248_20514 = state_19221__$1;
(statearr_19248_20514[(2)] = null);

(statearr_19248_20514[(1)] = (2));


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
var cljs$core$async$state_machine__17199__auto__ = null;
var cljs$core$async$state_machine__17199__auto____0 = (function (){
var statearr_19249 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19249[(0)] = cljs$core$async$state_machine__17199__auto__);

(statearr_19249[(1)] = (1));

return statearr_19249;
});
var cljs$core$async$state_machine__17199__auto____1 = (function (state_19221){
while(true){
var ret_value__17200__auto__ = (function (){try{while(true){
var result__17201__auto__ = switch__17198__auto__(state_19221);
if(cljs.core.keyword_identical_QMARK_(result__17201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17201__auto__;
}
break;
}
}catch (e19250){var ex__17202__auto__ = e19250;
var statearr_19251_20515 = state_19221;
(statearr_19251_20515[(2)] = ex__17202__auto__);


if(cljs.core.seq((state_19221[(4)]))){
var statearr_19252_20516 = state_19221;
(statearr_19252_20516[(1)] = cljs.core.first((state_19221[(4)])));

} else {
throw ex__17202__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20517 = state_19221;
state_19221 = G__20517;
continue;
} else {
return ret_value__17200__auto__;
}
break;
}
});
cljs$core$async$state_machine__17199__auto__ = function(state_19221){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17199__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17199__auto____1.call(this,state_19221);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17199__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17199__auto____0;
cljs$core$async$state_machine__17199__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17199__auto____1;
return cljs$core$async$state_machine__17199__auto__;
})()
})();
var state__17549__auto__ = (function (){var statearr_19253 = f__17548__auto__();
(statearr_19253[(6)] = c__17547__auto___20492);

return statearr_19253;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17549__auto__);
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
var G__19255 = arguments.length;
switch (G__19255) {
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
var c__17547__auto___20527 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17548__auto__ = (function (){var switch__17198__auto__ = (function (state_19281){
var state_val_19282 = (state_19281[(1)]);
if((state_val_19282 === (7))){
var inst_19263 = (state_19281[(7)]);
var inst_19263__$1 = (state_19281[(2)]);
var inst_19264 = (inst_19263__$1 == null);
var inst_19265 = cljs.core.not(inst_19264);
var state_19281__$1 = (function (){var statearr_19285 = state_19281;
(statearr_19285[(7)] = inst_19263__$1);

return statearr_19285;
})();
if(inst_19265){
var statearr_19286_20529 = state_19281__$1;
(statearr_19286_20529[(1)] = (8));

} else {
var statearr_19287_20533 = state_19281__$1;
(statearr_19287_20533[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19282 === (1))){
var inst_19257 = (0);
var state_19281__$1 = (function (){var statearr_19288 = state_19281;
(statearr_19288[(8)] = inst_19257);

return statearr_19288;
})();
var statearr_19289_20534 = state_19281__$1;
(statearr_19289_20534[(2)] = null);

(statearr_19289_20534[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19282 === (4))){
var state_19281__$1 = state_19281;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19281__$1,(7),ch);
} else {
if((state_val_19282 === (6))){
var inst_19276 = (state_19281[(2)]);
var state_19281__$1 = state_19281;
var statearr_19291_20536 = state_19281__$1;
(statearr_19291_20536[(2)] = inst_19276);

(statearr_19291_20536[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19282 === (3))){
var inst_19278 = (state_19281[(2)]);
var inst_19279 = cljs.core.async.close_BANG_(out);
var state_19281__$1 = (function (){var statearr_19292 = state_19281;
(statearr_19292[(9)] = inst_19278);

return statearr_19292;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_19281__$1,inst_19279);
} else {
if((state_val_19282 === (2))){
var inst_19257 = (state_19281[(8)]);
var inst_19260 = (inst_19257 < n);
var state_19281__$1 = state_19281;
if(cljs.core.truth_(inst_19260)){
var statearr_19293_20540 = state_19281__$1;
(statearr_19293_20540[(1)] = (4));

} else {
var statearr_19294_20541 = state_19281__$1;
(statearr_19294_20541[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19282 === (11))){
var inst_19257 = (state_19281[(8)]);
var inst_19268 = (state_19281[(2)]);
var inst_19269 = (inst_19257 + (1));
var inst_19257__$1 = inst_19269;
var state_19281__$1 = (function (){var statearr_19295 = state_19281;
(statearr_19295[(8)] = inst_19257__$1);

(statearr_19295[(10)] = inst_19268);

return statearr_19295;
})();
var statearr_19297_20545 = state_19281__$1;
(statearr_19297_20545[(2)] = null);

(statearr_19297_20545[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19282 === (9))){
var state_19281__$1 = state_19281;
var statearr_19298_20546 = state_19281__$1;
(statearr_19298_20546[(2)] = null);

(statearr_19298_20546[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19282 === (5))){
var state_19281__$1 = state_19281;
var statearr_19299_20547 = state_19281__$1;
(statearr_19299_20547[(2)] = null);

(statearr_19299_20547[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19282 === (10))){
var inst_19273 = (state_19281[(2)]);
var state_19281__$1 = state_19281;
var statearr_19300_20549 = state_19281__$1;
(statearr_19300_20549[(2)] = inst_19273);

(statearr_19300_20549[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19282 === (8))){
var inst_19263 = (state_19281[(7)]);
var state_19281__$1 = state_19281;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19281__$1,(11),out,inst_19263);
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
var cljs$core$async$state_machine__17199__auto__ = null;
var cljs$core$async$state_machine__17199__auto____0 = (function (){
var statearr_19303 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19303[(0)] = cljs$core$async$state_machine__17199__auto__);

(statearr_19303[(1)] = (1));

return statearr_19303;
});
var cljs$core$async$state_machine__17199__auto____1 = (function (state_19281){
while(true){
var ret_value__17200__auto__ = (function (){try{while(true){
var result__17201__auto__ = switch__17198__auto__(state_19281);
if(cljs.core.keyword_identical_QMARK_(result__17201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17201__auto__;
}
break;
}
}catch (e19304){var ex__17202__auto__ = e19304;
var statearr_19305_20554 = state_19281;
(statearr_19305_20554[(2)] = ex__17202__auto__);


if(cljs.core.seq((state_19281[(4)]))){
var statearr_19306_20555 = state_19281;
(statearr_19306_20555[(1)] = cljs.core.first((state_19281[(4)])));

} else {
throw ex__17202__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20556 = state_19281;
state_19281 = G__20556;
continue;
} else {
return ret_value__17200__auto__;
}
break;
}
});
cljs$core$async$state_machine__17199__auto__ = function(state_19281){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17199__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17199__auto____1.call(this,state_19281);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17199__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17199__auto____0;
cljs$core$async$state_machine__17199__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17199__auto____1;
return cljs$core$async$state_machine__17199__auto__;
})()
})();
var state__17549__auto__ = (function (){var statearr_19307 = f__17548__auto__();
(statearr_19307[(6)] = c__17547__auto___20527);

return statearr_19307;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17549__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);


/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19315 = (function (f,ch,meta19310,_,fn1,meta19316){
this.f = f;
this.ch = ch;
this.meta19310 = meta19310;
this._ = _;
this.fn1 = fn1;
this.meta19316 = meta19316;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async19315.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19317,meta19316__$1){
var self__ = this;
var _19317__$1 = this;
return (new cljs.core.async.t_cljs$core$async19315(self__.f,self__.ch,self__.meta19310,self__._,self__.fn1,meta19316__$1));
}));

(cljs.core.async.t_cljs$core$async19315.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19317){
var self__ = this;
var _19317__$1 = this;
return self__.meta19316;
}));

(cljs.core.async.t_cljs$core$async19315.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19315.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async19315.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async19315.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__19308_SHARP_){
var G__19328 = (((p1__19308_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__19308_SHARP_) : self__.f.call(null,p1__19308_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__19328) : f1.call(null,G__19328));
});
}));

(cljs.core.async.t_cljs$core$async19315.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta19310","meta19310",-68225620,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async19309","cljs.core.async/t_cljs$core$async19309",1377833156,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta19316","meta19316",-826501688,null)], null);
}));

(cljs.core.async.t_cljs$core$async19315.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async19315.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19315");

(cljs.core.async.t_cljs$core$async19315.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async19315");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19315.
 */
cljs.core.async.__GT_t_cljs$core$async19315 = (function cljs$core$async$__GT_t_cljs$core$async19315(f,ch,meta19310,_,fn1,meta19316){
return (new cljs.core.async.t_cljs$core$async19315(f,ch,meta19310,_,fn1,meta19316));
});



/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19309 = (function (f,ch,meta19310){
this.f = f;
this.ch = ch;
this.meta19310 = meta19310;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async19309.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19311,meta19310__$1){
var self__ = this;
var _19311__$1 = this;
return (new cljs.core.async.t_cljs$core$async19309(self__.f,self__.ch,meta19310__$1));
}));

(cljs.core.async.t_cljs$core$async19309.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19311){
var self__ = this;
var _19311__$1 = this;
return self__.meta19310;
}));

(cljs.core.async.t_cljs$core$async19309.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19309.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async19309.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async19309.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19309.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(new cljs.core.async.t_cljs$core$async19315(self__.f,self__.ch,self__.meta19310,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY)));
if(cljs.core.truth_((function (){var and__5043__auto__ = ret;
if(cljs.core.truth_(and__5043__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5043__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__19339 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__19339) : self__.f.call(null,G__19339));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async19309.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19309.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async19309.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta19310","meta19310",-68225620,null)], null);
}));

(cljs.core.async.t_cljs$core$async19309.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async19309.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19309");

(cljs.core.async.t_cljs$core$async19309.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async19309");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19309.
 */
cljs.core.async.__GT_t_cljs$core$async19309 = (function cljs$core$async$__GT_t_cljs$core$async19309(f,ch,meta19310){
return (new cljs.core.async.t_cljs$core$async19309(f,ch,meta19310));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
return (new cljs.core.async.t_cljs$core$async19309(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19353 = (function (f,ch,meta19354){
this.f = f;
this.ch = ch;
this.meta19354 = meta19354;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async19353.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19355,meta19354__$1){
var self__ = this;
var _19355__$1 = this;
return (new cljs.core.async.t_cljs$core$async19353(self__.f,self__.ch,meta19354__$1));
}));

(cljs.core.async.t_cljs$core$async19353.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19355){
var self__ = this;
var _19355__$1 = this;
return self__.meta19354;
}));

(cljs.core.async.t_cljs$core$async19353.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19353.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async19353.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19353.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async19353.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19353.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async19353.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta19354","meta19354",-354226462,null)], null);
}));

(cljs.core.async.t_cljs$core$async19353.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async19353.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19353");

(cljs.core.async.t_cljs$core$async19353.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async19353");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19353.
 */
cljs.core.async.__GT_t_cljs$core$async19353 = (function cljs$core$async$__GT_t_cljs$core$async19353(f,ch,meta19354){
return (new cljs.core.async.t_cljs$core$async19353(f,ch,meta19354));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
return (new cljs.core.async.t_cljs$core$async19353(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19365 = (function (p,ch,meta19366){
this.p = p;
this.ch = ch;
this.meta19366 = meta19366;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async19365.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19367,meta19366__$1){
var self__ = this;
var _19367__$1 = this;
return (new cljs.core.async.t_cljs$core$async19365(self__.p,self__.ch,meta19366__$1));
}));

(cljs.core.async.t_cljs$core$async19365.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19367){
var self__ = this;
var _19367__$1 = this;
return self__.meta19366;
}));

(cljs.core.async.t_cljs$core$async19365.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19365.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async19365.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async19365.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19365.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async19365.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19365.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async19365.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta19366","meta19366",376507926,null)], null);
}));

(cljs.core.async.t_cljs$core$async19365.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async19365.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19365");

(cljs.core.async.t_cljs$core$async19365.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async19365");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19365.
 */
cljs.core.async.__GT_t_cljs$core$async19365 = (function cljs$core$async$__GT_t_cljs$core$async19365(p,ch,meta19366){
return (new cljs.core.async.t_cljs$core$async19365(p,ch,meta19366));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
return (new cljs.core.async.t_cljs$core$async19365(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__19369 = arguments.length;
switch (G__19369) {
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
var c__17547__auto___20581 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17548__auto__ = (function (){var switch__17198__auto__ = (function (state_19392){
var state_val_19393 = (state_19392[(1)]);
if((state_val_19393 === (7))){
var inst_19388 = (state_19392[(2)]);
var state_19392__$1 = state_19392;
var statearr_19396_20583 = state_19392__$1;
(statearr_19396_20583[(2)] = inst_19388);

(statearr_19396_20583[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19393 === (1))){
var state_19392__$1 = state_19392;
var statearr_19406_20584 = state_19392__$1;
(statearr_19406_20584[(2)] = null);

(statearr_19406_20584[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19393 === (4))){
var inst_19374 = (state_19392[(7)]);
var inst_19374__$1 = (state_19392[(2)]);
var inst_19375 = (inst_19374__$1 == null);
var state_19392__$1 = (function (){var statearr_19407 = state_19392;
(statearr_19407[(7)] = inst_19374__$1);

return statearr_19407;
})();
if(cljs.core.truth_(inst_19375)){
var statearr_19408_20589 = state_19392__$1;
(statearr_19408_20589[(1)] = (5));

} else {
var statearr_19409_20590 = state_19392__$1;
(statearr_19409_20590[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19393 === (6))){
var inst_19374 = (state_19392[(7)]);
var inst_19379 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_19374) : p.call(null,inst_19374));
var state_19392__$1 = state_19392;
if(cljs.core.truth_(inst_19379)){
var statearr_19410_20591 = state_19392__$1;
(statearr_19410_20591[(1)] = (8));

} else {
var statearr_19412_20592 = state_19392__$1;
(statearr_19412_20592[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19393 === (3))){
var inst_19390 = (state_19392[(2)]);
var state_19392__$1 = state_19392;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19392__$1,inst_19390);
} else {
if((state_val_19393 === (2))){
var state_19392__$1 = state_19392;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19392__$1,(4),ch);
} else {
if((state_val_19393 === (11))){
var inst_19382 = (state_19392[(2)]);
var state_19392__$1 = state_19392;
var statearr_19414_20596 = state_19392__$1;
(statearr_19414_20596[(2)] = inst_19382);

(statearr_19414_20596[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19393 === (9))){
var state_19392__$1 = state_19392;
var statearr_19415_20597 = state_19392__$1;
(statearr_19415_20597[(2)] = null);

(statearr_19415_20597[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19393 === (5))){
var inst_19377 = cljs.core.async.close_BANG_(out);
var state_19392__$1 = state_19392;
var statearr_19416_20599 = state_19392__$1;
(statearr_19416_20599[(2)] = inst_19377);

(statearr_19416_20599[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19393 === (10))){
var inst_19385 = (state_19392[(2)]);
var state_19392__$1 = (function (){var statearr_19417 = state_19392;
(statearr_19417[(8)] = inst_19385);

return statearr_19417;
})();
var statearr_19418_20601 = state_19392__$1;
(statearr_19418_20601[(2)] = null);

(statearr_19418_20601[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19393 === (8))){
var inst_19374 = (state_19392[(7)]);
var state_19392__$1 = state_19392;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19392__$1,(11),out,inst_19374);
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
var cljs$core$async$state_machine__17199__auto__ = null;
var cljs$core$async$state_machine__17199__auto____0 = (function (){
var statearr_19419 = [null,null,null,null,null,null,null,null,null];
(statearr_19419[(0)] = cljs$core$async$state_machine__17199__auto__);

(statearr_19419[(1)] = (1));

return statearr_19419;
});
var cljs$core$async$state_machine__17199__auto____1 = (function (state_19392){
while(true){
var ret_value__17200__auto__ = (function (){try{while(true){
var result__17201__auto__ = switch__17198__auto__(state_19392);
if(cljs.core.keyword_identical_QMARK_(result__17201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17201__auto__;
}
break;
}
}catch (e19420){var ex__17202__auto__ = e19420;
var statearr_19421_20602 = state_19392;
(statearr_19421_20602[(2)] = ex__17202__auto__);


if(cljs.core.seq((state_19392[(4)]))){
var statearr_19422_20605 = state_19392;
(statearr_19422_20605[(1)] = cljs.core.first((state_19392[(4)])));

} else {
throw ex__17202__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20608 = state_19392;
state_19392 = G__20608;
continue;
} else {
return ret_value__17200__auto__;
}
break;
}
});
cljs$core$async$state_machine__17199__auto__ = function(state_19392){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17199__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17199__auto____1.call(this,state_19392);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17199__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17199__auto____0;
cljs$core$async$state_machine__17199__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17199__auto____1;
return cljs$core$async$state_machine__17199__auto__;
})()
})();
var state__17549__auto__ = (function (){var statearr_19423 = f__17548__auto__();
(statearr_19423[(6)] = c__17547__auto___20581);

return statearr_19423;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17549__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__19425 = arguments.length;
switch (G__19425) {
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
var c__17547__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17548__auto__ = (function (){var switch__17198__auto__ = (function (state_19490){
var state_val_19491 = (state_19490[(1)]);
if((state_val_19491 === (7))){
var inst_19486 = (state_19490[(2)]);
var state_19490__$1 = state_19490;
var statearr_19492_20612 = state_19490__$1;
(statearr_19492_20612[(2)] = inst_19486);

(statearr_19492_20612[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19491 === (20))){
var inst_19455 = (state_19490[(7)]);
var inst_19467 = (state_19490[(2)]);
var inst_19468 = cljs.core.next(inst_19455);
var inst_19441 = inst_19468;
var inst_19442 = null;
var inst_19443 = (0);
var inst_19444 = (0);
var state_19490__$1 = (function (){var statearr_19502 = state_19490;
(statearr_19502[(8)] = inst_19442);

(statearr_19502[(9)] = inst_19467);

(statearr_19502[(10)] = inst_19444);

(statearr_19502[(11)] = inst_19441);

(statearr_19502[(12)] = inst_19443);

return statearr_19502;
})();
var statearr_19503_20615 = state_19490__$1;
(statearr_19503_20615[(2)] = null);

(statearr_19503_20615[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19491 === (1))){
var state_19490__$1 = state_19490;
var statearr_19504_20617 = state_19490__$1;
(statearr_19504_20617[(2)] = null);

(statearr_19504_20617[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19491 === (4))){
var inst_19428 = (state_19490[(13)]);
var inst_19428__$1 = (state_19490[(2)]);
var inst_19430 = (inst_19428__$1 == null);
var state_19490__$1 = (function (){var statearr_19505 = state_19490;
(statearr_19505[(13)] = inst_19428__$1);

return statearr_19505;
})();
if(cljs.core.truth_(inst_19430)){
var statearr_19506_20619 = state_19490__$1;
(statearr_19506_20619[(1)] = (5));

} else {
var statearr_19507_20620 = state_19490__$1;
(statearr_19507_20620[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19491 === (15))){
var state_19490__$1 = state_19490;
var statearr_19512_20621 = state_19490__$1;
(statearr_19512_20621[(2)] = null);

(statearr_19512_20621[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19491 === (21))){
var state_19490__$1 = state_19490;
var statearr_19513_20623 = state_19490__$1;
(statearr_19513_20623[(2)] = null);

(statearr_19513_20623[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19491 === (13))){
var inst_19442 = (state_19490[(8)]);
var inst_19444 = (state_19490[(10)]);
var inst_19441 = (state_19490[(11)]);
var inst_19443 = (state_19490[(12)]);
var inst_19451 = (state_19490[(2)]);
var inst_19452 = (inst_19444 + (1));
var tmp19508 = inst_19442;
var tmp19509 = inst_19441;
var tmp19510 = inst_19443;
var inst_19441__$1 = tmp19509;
var inst_19442__$1 = tmp19508;
var inst_19443__$1 = tmp19510;
var inst_19444__$1 = inst_19452;
var state_19490__$1 = (function (){var statearr_19514 = state_19490;
(statearr_19514[(8)] = inst_19442__$1);

(statearr_19514[(10)] = inst_19444__$1);

(statearr_19514[(11)] = inst_19441__$1);

(statearr_19514[(14)] = inst_19451);

(statearr_19514[(12)] = inst_19443__$1);

return statearr_19514;
})();
var statearr_19515_20629 = state_19490__$1;
(statearr_19515_20629[(2)] = null);

(statearr_19515_20629[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19491 === (22))){
var state_19490__$1 = state_19490;
var statearr_19516_20630 = state_19490__$1;
(statearr_19516_20630[(2)] = null);

(statearr_19516_20630[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19491 === (6))){
var inst_19428 = (state_19490[(13)]);
var inst_19439 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_19428) : f.call(null,inst_19428));
var inst_19440 = cljs.core.seq(inst_19439);
var inst_19441 = inst_19440;
var inst_19442 = null;
var inst_19443 = (0);
var inst_19444 = (0);
var state_19490__$1 = (function (){var statearr_19517 = state_19490;
(statearr_19517[(8)] = inst_19442);

(statearr_19517[(10)] = inst_19444);

(statearr_19517[(11)] = inst_19441);

(statearr_19517[(12)] = inst_19443);

return statearr_19517;
})();
var statearr_19518_20639 = state_19490__$1;
(statearr_19518_20639[(2)] = null);

(statearr_19518_20639[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19491 === (17))){
var inst_19455 = (state_19490[(7)]);
var inst_19460 = cljs.core.chunk_first(inst_19455);
var inst_19461 = cljs.core.chunk_rest(inst_19455);
var inst_19462 = cljs.core.count(inst_19460);
var inst_19441 = inst_19461;
var inst_19442 = inst_19460;
var inst_19443 = inst_19462;
var inst_19444 = (0);
var state_19490__$1 = (function (){var statearr_19519 = state_19490;
(statearr_19519[(8)] = inst_19442);

(statearr_19519[(10)] = inst_19444);

(statearr_19519[(11)] = inst_19441);

(statearr_19519[(12)] = inst_19443);

return statearr_19519;
})();
var statearr_19520_20640 = state_19490__$1;
(statearr_19520_20640[(2)] = null);

(statearr_19520_20640[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19491 === (3))){
var inst_19488 = (state_19490[(2)]);
var state_19490__$1 = state_19490;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19490__$1,inst_19488);
} else {
if((state_val_19491 === (12))){
var inst_19476 = (state_19490[(2)]);
var state_19490__$1 = state_19490;
var statearr_19521_20641 = state_19490__$1;
(statearr_19521_20641[(2)] = inst_19476);

(statearr_19521_20641[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19491 === (2))){
var state_19490__$1 = state_19490;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19490__$1,(4),in$);
} else {
if((state_val_19491 === (23))){
var inst_19484 = (state_19490[(2)]);
var state_19490__$1 = state_19490;
var statearr_19522_20647 = state_19490__$1;
(statearr_19522_20647[(2)] = inst_19484);

(statearr_19522_20647[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19491 === (19))){
var inst_19471 = (state_19490[(2)]);
var state_19490__$1 = state_19490;
var statearr_19525_20653 = state_19490__$1;
(statearr_19525_20653[(2)] = inst_19471);

(statearr_19525_20653[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19491 === (11))){
var inst_19441 = (state_19490[(11)]);
var inst_19455 = (state_19490[(7)]);
var inst_19455__$1 = cljs.core.seq(inst_19441);
var state_19490__$1 = (function (){var statearr_19526 = state_19490;
(statearr_19526[(7)] = inst_19455__$1);

return statearr_19526;
})();
if(inst_19455__$1){
var statearr_19527_20659 = state_19490__$1;
(statearr_19527_20659[(1)] = (14));

} else {
var statearr_19528_20660 = state_19490__$1;
(statearr_19528_20660[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19491 === (9))){
var inst_19478 = (state_19490[(2)]);
var inst_19479 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_19490__$1 = (function (){var statearr_19529 = state_19490;
(statearr_19529[(15)] = inst_19478);

return statearr_19529;
})();
if(cljs.core.truth_(inst_19479)){
var statearr_19530_20665 = state_19490__$1;
(statearr_19530_20665[(1)] = (21));

} else {
var statearr_19532_20666 = state_19490__$1;
(statearr_19532_20666[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19491 === (5))){
var inst_19433 = cljs.core.async.close_BANG_(out);
var state_19490__$1 = state_19490;
var statearr_19533_20671 = state_19490__$1;
(statearr_19533_20671[(2)] = inst_19433);

(statearr_19533_20671[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19491 === (14))){
var inst_19455 = (state_19490[(7)]);
var inst_19458 = cljs.core.chunked_seq_QMARK_(inst_19455);
var state_19490__$1 = state_19490;
if(inst_19458){
var statearr_19535_20672 = state_19490__$1;
(statearr_19535_20672[(1)] = (17));

} else {
var statearr_19536_20673 = state_19490__$1;
(statearr_19536_20673[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19491 === (16))){
var inst_19474 = (state_19490[(2)]);
var state_19490__$1 = state_19490;
var statearr_19537_20674 = state_19490__$1;
(statearr_19537_20674[(2)] = inst_19474);

(statearr_19537_20674[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19491 === (10))){
var inst_19442 = (state_19490[(8)]);
var inst_19444 = (state_19490[(10)]);
var inst_19449 = cljs.core._nth(inst_19442,inst_19444);
var state_19490__$1 = state_19490;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19490__$1,(13),out,inst_19449);
} else {
if((state_val_19491 === (18))){
var inst_19455 = (state_19490[(7)]);
var inst_19465 = cljs.core.first(inst_19455);
var state_19490__$1 = state_19490;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19490__$1,(20),out,inst_19465);
} else {
if((state_val_19491 === (8))){
var inst_19444 = (state_19490[(10)]);
var inst_19443 = (state_19490[(12)]);
var inst_19446 = (inst_19444 < inst_19443);
var inst_19447 = inst_19446;
var state_19490__$1 = state_19490;
if(cljs.core.truth_(inst_19447)){
var statearr_19538_20681 = state_19490__$1;
(statearr_19538_20681[(1)] = (10));

} else {
var statearr_19539_20682 = state_19490__$1;
(statearr_19539_20682[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__17199__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__17199__auto____0 = (function (){
var statearr_19540 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19540[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__17199__auto__);

(statearr_19540[(1)] = (1));

return statearr_19540;
});
var cljs$core$async$mapcat_STAR__$_state_machine__17199__auto____1 = (function (state_19490){
while(true){
var ret_value__17200__auto__ = (function (){try{while(true){
var result__17201__auto__ = switch__17198__auto__(state_19490);
if(cljs.core.keyword_identical_QMARK_(result__17201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17201__auto__;
}
break;
}
}catch (e19541){var ex__17202__auto__ = e19541;
var statearr_19542_20683 = state_19490;
(statearr_19542_20683[(2)] = ex__17202__auto__);


if(cljs.core.seq((state_19490[(4)]))){
var statearr_19543_20685 = state_19490;
(statearr_19543_20685[(1)] = cljs.core.first((state_19490[(4)])));

} else {
throw ex__17202__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20686 = state_19490;
state_19490 = G__20686;
continue;
} else {
return ret_value__17200__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__17199__auto__ = function(state_19490){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__17199__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__17199__auto____1.call(this,state_19490);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__17199__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__17199__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__17199__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__17199__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__17199__auto__;
})()
})();
var state__17549__auto__ = (function (){var statearr_19544 = f__17548__auto__();
(statearr_19544[(6)] = c__17547__auto__);

return statearr_19544;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17549__auto__);
}));

return c__17547__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__19546 = arguments.length;
switch (G__19546) {
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
var G__19548 = arguments.length;
switch (G__19548) {
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
var G__19558 = arguments.length;
switch (G__19558) {
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
var c__17547__auto___20701 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17548__auto__ = (function (){var switch__17198__auto__ = (function (state_19595){
var state_val_19596 = (state_19595[(1)]);
if((state_val_19596 === (7))){
var inst_19590 = (state_19595[(2)]);
var state_19595__$1 = state_19595;
var statearr_19604_20708 = state_19595__$1;
(statearr_19604_20708[(2)] = inst_19590);

(statearr_19604_20708[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19596 === (1))){
var inst_19568 = null;
var state_19595__$1 = (function (){var statearr_19606 = state_19595;
(statearr_19606[(7)] = inst_19568);

return statearr_19606;
})();
var statearr_19607_20716 = state_19595__$1;
(statearr_19607_20716[(2)] = null);

(statearr_19607_20716[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19596 === (4))){
var inst_19573 = (state_19595[(8)]);
var inst_19573__$1 = (state_19595[(2)]);
var inst_19576 = (inst_19573__$1 == null);
var inst_19577 = cljs.core.not(inst_19576);
var state_19595__$1 = (function (){var statearr_19608 = state_19595;
(statearr_19608[(8)] = inst_19573__$1);

return statearr_19608;
})();
if(inst_19577){
var statearr_19609_20722 = state_19595__$1;
(statearr_19609_20722[(1)] = (5));

} else {
var statearr_19610_20723 = state_19595__$1;
(statearr_19610_20723[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19596 === (6))){
var state_19595__$1 = state_19595;
var statearr_19611_20724 = state_19595__$1;
(statearr_19611_20724[(2)] = null);

(statearr_19611_20724[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19596 === (3))){
var inst_19592 = (state_19595[(2)]);
var inst_19593 = cljs.core.async.close_BANG_(out);
var state_19595__$1 = (function (){var statearr_19614 = state_19595;
(statearr_19614[(9)] = inst_19592);

return statearr_19614;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_19595__$1,inst_19593);
} else {
if((state_val_19596 === (2))){
var state_19595__$1 = state_19595;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19595__$1,(4),ch);
} else {
if((state_val_19596 === (11))){
var inst_19573 = (state_19595[(8)]);
var inst_19584 = (state_19595[(2)]);
var inst_19568 = inst_19573;
var state_19595__$1 = (function (){var statearr_19620 = state_19595;
(statearr_19620[(7)] = inst_19568);

(statearr_19620[(10)] = inst_19584);

return statearr_19620;
})();
var statearr_19621_20730 = state_19595__$1;
(statearr_19621_20730[(2)] = null);

(statearr_19621_20730[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19596 === (9))){
var inst_19573 = (state_19595[(8)]);
var state_19595__$1 = state_19595;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19595__$1,(11),out,inst_19573);
} else {
if((state_val_19596 === (5))){
var inst_19568 = (state_19595[(7)]);
var inst_19573 = (state_19595[(8)]);
var inst_19579 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_19573,inst_19568);
var state_19595__$1 = state_19595;
if(inst_19579){
var statearr_19623_20738 = state_19595__$1;
(statearr_19623_20738[(1)] = (8));

} else {
var statearr_19624_20743 = state_19595__$1;
(statearr_19624_20743[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19596 === (10))){
var inst_19587 = (state_19595[(2)]);
var state_19595__$1 = state_19595;
var statearr_19626_20748 = state_19595__$1;
(statearr_19626_20748[(2)] = inst_19587);

(statearr_19626_20748[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19596 === (8))){
var inst_19568 = (state_19595[(7)]);
var tmp19622 = inst_19568;
var inst_19568__$1 = tmp19622;
var state_19595__$1 = (function (){var statearr_19627 = state_19595;
(statearr_19627[(7)] = inst_19568__$1);

return statearr_19627;
})();
var statearr_19628_20758 = state_19595__$1;
(statearr_19628_20758[(2)] = null);

(statearr_19628_20758[(1)] = (2));


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
var cljs$core$async$state_machine__17199__auto__ = null;
var cljs$core$async$state_machine__17199__auto____0 = (function (){
var statearr_19633 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19633[(0)] = cljs$core$async$state_machine__17199__auto__);

(statearr_19633[(1)] = (1));

return statearr_19633;
});
var cljs$core$async$state_machine__17199__auto____1 = (function (state_19595){
while(true){
var ret_value__17200__auto__ = (function (){try{while(true){
var result__17201__auto__ = switch__17198__auto__(state_19595);
if(cljs.core.keyword_identical_QMARK_(result__17201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17201__auto__;
}
break;
}
}catch (e19634){var ex__17202__auto__ = e19634;
var statearr_19635_20763 = state_19595;
(statearr_19635_20763[(2)] = ex__17202__auto__);


if(cljs.core.seq((state_19595[(4)]))){
var statearr_19636_20764 = state_19595;
(statearr_19636_20764[(1)] = cljs.core.first((state_19595[(4)])));

} else {
throw ex__17202__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20771 = state_19595;
state_19595 = G__20771;
continue;
} else {
return ret_value__17200__auto__;
}
break;
}
});
cljs$core$async$state_machine__17199__auto__ = function(state_19595){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17199__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17199__auto____1.call(this,state_19595);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17199__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17199__auto____0;
cljs$core$async$state_machine__17199__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17199__auto____1;
return cljs$core$async$state_machine__17199__auto__;
})()
})();
var state__17549__auto__ = (function (){var statearr_19637 = f__17548__auto__();
(statearr_19637[(6)] = c__17547__auto___20701);

return statearr_19637;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17549__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__19640 = arguments.length;
switch (G__19640) {
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
var c__17547__auto___20788 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17548__auto__ = (function (){var switch__17198__auto__ = (function (state_19688){
var state_val_19689 = (state_19688[(1)]);
if((state_val_19689 === (7))){
var inst_19682 = (state_19688[(2)]);
var state_19688__$1 = state_19688;
var statearr_19692_20789 = state_19688__$1;
(statearr_19692_20789[(2)] = inst_19682);

(statearr_19692_20789[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19689 === (1))){
var inst_19649 = (new Array(n));
var inst_19650 = inst_19649;
var inst_19651 = (0);
var state_19688__$1 = (function (){var statearr_19693 = state_19688;
(statearr_19693[(7)] = inst_19651);

(statearr_19693[(8)] = inst_19650);

return statearr_19693;
})();
var statearr_19694_20790 = state_19688__$1;
(statearr_19694_20790[(2)] = null);

(statearr_19694_20790[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19689 === (4))){
var inst_19654 = (state_19688[(9)]);
var inst_19654__$1 = (state_19688[(2)]);
var inst_19655 = (inst_19654__$1 == null);
var inst_19656 = cljs.core.not(inst_19655);
var state_19688__$1 = (function (){var statearr_19696 = state_19688;
(statearr_19696[(9)] = inst_19654__$1);

return statearr_19696;
})();
if(inst_19656){
var statearr_19697_20794 = state_19688__$1;
(statearr_19697_20794[(1)] = (5));

} else {
var statearr_19698_20795 = state_19688__$1;
(statearr_19698_20795[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19689 === (15))){
var inst_19676 = (state_19688[(2)]);
var state_19688__$1 = state_19688;
var statearr_19700_20797 = state_19688__$1;
(statearr_19700_20797[(2)] = inst_19676);

(statearr_19700_20797[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19689 === (13))){
var state_19688__$1 = state_19688;
var statearr_19701_20798 = state_19688__$1;
(statearr_19701_20798[(2)] = null);

(statearr_19701_20798[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19689 === (6))){
var inst_19651 = (state_19688[(7)]);
var inst_19672 = (inst_19651 > (0));
var state_19688__$1 = state_19688;
if(cljs.core.truth_(inst_19672)){
var statearr_19702_20799 = state_19688__$1;
(statearr_19702_20799[(1)] = (12));

} else {
var statearr_19703_20800 = state_19688__$1;
(statearr_19703_20800[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19689 === (3))){
var inst_19684 = (state_19688[(2)]);
var state_19688__$1 = state_19688;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19688__$1,inst_19684);
} else {
if((state_val_19689 === (12))){
var inst_19650 = (state_19688[(8)]);
var inst_19674 = cljs.core.vec(inst_19650);
var state_19688__$1 = state_19688;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19688__$1,(15),out,inst_19674);
} else {
if((state_val_19689 === (2))){
var state_19688__$1 = state_19688;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19688__$1,(4),ch);
} else {
if((state_val_19689 === (11))){
var inst_19666 = (state_19688[(2)]);
var inst_19667 = (new Array(n));
var inst_19650 = inst_19667;
var inst_19651 = (0);
var state_19688__$1 = (function (){var statearr_19704 = state_19688;
(statearr_19704[(7)] = inst_19651);

(statearr_19704[(10)] = inst_19666);

(statearr_19704[(8)] = inst_19650);

return statearr_19704;
})();
var statearr_19705_20805 = state_19688__$1;
(statearr_19705_20805[(2)] = null);

(statearr_19705_20805[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19689 === (9))){
var inst_19650 = (state_19688[(8)]);
var inst_19664 = cljs.core.vec(inst_19650);
var state_19688__$1 = state_19688;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19688__$1,(11),out,inst_19664);
} else {
if((state_val_19689 === (5))){
var inst_19651 = (state_19688[(7)]);
var inst_19659 = (state_19688[(11)]);
var inst_19650 = (state_19688[(8)]);
var inst_19654 = (state_19688[(9)]);
var inst_19658 = (inst_19650[inst_19651] = inst_19654);
var inst_19659__$1 = (inst_19651 + (1));
var inst_19660 = (inst_19659__$1 < n);
var state_19688__$1 = (function (){var statearr_19706 = state_19688;
(statearr_19706[(11)] = inst_19659__$1);

(statearr_19706[(12)] = inst_19658);

return statearr_19706;
})();
if(cljs.core.truth_(inst_19660)){
var statearr_19707_20808 = state_19688__$1;
(statearr_19707_20808[(1)] = (8));

} else {
var statearr_19708_20809 = state_19688__$1;
(statearr_19708_20809[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19689 === (14))){
var inst_19679 = (state_19688[(2)]);
var inst_19680 = cljs.core.async.close_BANG_(out);
var state_19688__$1 = (function (){var statearr_19714 = state_19688;
(statearr_19714[(13)] = inst_19679);

return statearr_19714;
})();
var statearr_19715_20810 = state_19688__$1;
(statearr_19715_20810[(2)] = inst_19680);

(statearr_19715_20810[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19689 === (10))){
var inst_19670 = (state_19688[(2)]);
var state_19688__$1 = state_19688;
var statearr_19716_20811 = state_19688__$1;
(statearr_19716_20811[(2)] = inst_19670);

(statearr_19716_20811[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19689 === (8))){
var inst_19659 = (state_19688[(11)]);
var inst_19650 = (state_19688[(8)]);
var tmp19713 = inst_19650;
var inst_19650__$1 = tmp19713;
var inst_19651 = inst_19659;
var state_19688__$1 = (function (){var statearr_19717 = state_19688;
(statearr_19717[(7)] = inst_19651);

(statearr_19717[(8)] = inst_19650__$1);

return statearr_19717;
})();
var statearr_19718_20815 = state_19688__$1;
(statearr_19718_20815[(2)] = null);

(statearr_19718_20815[(1)] = (2));


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
var cljs$core$async$state_machine__17199__auto__ = null;
var cljs$core$async$state_machine__17199__auto____0 = (function (){
var statearr_19720 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19720[(0)] = cljs$core$async$state_machine__17199__auto__);

(statearr_19720[(1)] = (1));

return statearr_19720;
});
var cljs$core$async$state_machine__17199__auto____1 = (function (state_19688){
while(true){
var ret_value__17200__auto__ = (function (){try{while(true){
var result__17201__auto__ = switch__17198__auto__(state_19688);
if(cljs.core.keyword_identical_QMARK_(result__17201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17201__auto__;
}
break;
}
}catch (e19734){var ex__17202__auto__ = e19734;
var statearr_19735_20816 = state_19688;
(statearr_19735_20816[(2)] = ex__17202__auto__);


if(cljs.core.seq((state_19688[(4)]))){
var statearr_19736_20817 = state_19688;
(statearr_19736_20817[(1)] = cljs.core.first((state_19688[(4)])));

} else {
throw ex__17202__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20821 = state_19688;
state_19688 = G__20821;
continue;
} else {
return ret_value__17200__auto__;
}
break;
}
});
cljs$core$async$state_machine__17199__auto__ = function(state_19688){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17199__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17199__auto____1.call(this,state_19688);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17199__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17199__auto____0;
cljs$core$async$state_machine__17199__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17199__auto____1;
return cljs$core$async$state_machine__17199__auto__;
})()
})();
var state__17549__auto__ = (function (){var statearr_19743 = f__17548__auto__();
(statearr_19743[(6)] = c__17547__auto___20788);

return statearr_19743;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17549__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__19751 = arguments.length;
switch (G__19751) {
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
var c__17547__auto___20823 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17548__auto__ = (function (){var switch__17198__auto__ = (function (state_19808){
var state_val_19809 = (state_19808[(1)]);
if((state_val_19809 === (7))){
var inst_19804 = (state_19808[(2)]);
var state_19808__$1 = state_19808;
var statearr_19810_20824 = state_19808__$1;
(statearr_19810_20824[(2)] = inst_19804);

(statearr_19810_20824[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19809 === (1))){
var inst_19754 = [];
var inst_19755 = inst_19754;
var inst_19756 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_19808__$1 = (function (){var statearr_19812 = state_19808;
(statearr_19812[(7)] = inst_19755);

(statearr_19812[(8)] = inst_19756);

return statearr_19812;
})();
var statearr_19813_20825 = state_19808__$1;
(statearr_19813_20825[(2)] = null);

(statearr_19813_20825[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19809 === (4))){
var inst_19759 = (state_19808[(9)]);
var inst_19759__$1 = (state_19808[(2)]);
var inst_19760 = (inst_19759__$1 == null);
var inst_19761 = cljs.core.not(inst_19760);
var state_19808__$1 = (function (){var statearr_19814 = state_19808;
(statearr_19814[(9)] = inst_19759__$1);

return statearr_19814;
})();
if(inst_19761){
var statearr_19816_20827 = state_19808__$1;
(statearr_19816_20827[(1)] = (5));

} else {
var statearr_19817_20828 = state_19808__$1;
(statearr_19817_20828[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19809 === (15))){
var inst_19755 = (state_19808[(7)]);
var inst_19791 = cljs.core.vec(inst_19755);
var state_19808__$1 = state_19808;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19808__$1,(18),out,inst_19791);
} else {
if((state_val_19809 === (13))){
var inst_19786 = (state_19808[(2)]);
var state_19808__$1 = state_19808;
var statearr_19818_20833 = state_19808__$1;
(statearr_19818_20833[(2)] = inst_19786);

(statearr_19818_20833[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19809 === (6))){
var inst_19755 = (state_19808[(7)]);
var inst_19788 = inst_19755.length;
var inst_19789 = (inst_19788 > (0));
var state_19808__$1 = state_19808;
if(cljs.core.truth_(inst_19789)){
var statearr_19824_20834 = state_19808__$1;
(statearr_19824_20834[(1)] = (15));

} else {
var statearr_19825_20835 = state_19808__$1;
(statearr_19825_20835[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19809 === (17))){
var inst_19796 = (state_19808[(2)]);
var inst_19802 = cljs.core.async.close_BANG_(out);
var state_19808__$1 = (function (){var statearr_19826 = state_19808;
(statearr_19826[(10)] = inst_19796);

return statearr_19826;
})();
var statearr_19827_20836 = state_19808__$1;
(statearr_19827_20836[(2)] = inst_19802);

(statearr_19827_20836[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19809 === (3))){
var inst_19806 = (state_19808[(2)]);
var state_19808__$1 = state_19808;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19808__$1,inst_19806);
} else {
if((state_val_19809 === (12))){
var inst_19755 = (state_19808[(7)]);
var inst_19779 = cljs.core.vec(inst_19755);
var state_19808__$1 = state_19808;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19808__$1,(14),out,inst_19779);
} else {
if((state_val_19809 === (2))){
var state_19808__$1 = state_19808;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19808__$1,(4),ch);
} else {
if((state_val_19809 === (11))){
var inst_19755 = (state_19808[(7)]);
var inst_19759 = (state_19808[(9)]);
var inst_19763 = (state_19808[(11)]);
var inst_19776 = inst_19755.push(inst_19759);
var tmp19828 = inst_19755;
var inst_19755__$1 = tmp19828;
var inst_19756 = inst_19763;
var state_19808__$1 = (function (){var statearr_19829 = state_19808;
(statearr_19829[(7)] = inst_19755__$1);

(statearr_19829[(12)] = inst_19776);

(statearr_19829[(8)] = inst_19756);

return statearr_19829;
})();
var statearr_19830_20839 = state_19808__$1;
(statearr_19830_20839[(2)] = null);

(statearr_19830_20839[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19809 === (9))){
var inst_19756 = (state_19808[(8)]);
var inst_19767 = cljs.core.keyword_identical_QMARK_(inst_19756,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_19808__$1 = state_19808;
var statearr_19832_20840 = state_19808__$1;
(statearr_19832_20840[(2)] = inst_19767);

(statearr_19832_20840[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19809 === (5))){
var inst_19764 = (state_19808[(13)]);
var inst_19759 = (state_19808[(9)]);
var inst_19756 = (state_19808[(8)]);
var inst_19763 = (state_19808[(11)]);
var inst_19763__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_19759) : f.call(null,inst_19759));
var inst_19764__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_19763__$1,inst_19756);
var state_19808__$1 = (function (){var statearr_19836 = state_19808;
(statearr_19836[(13)] = inst_19764__$1);

(statearr_19836[(11)] = inst_19763__$1);

return statearr_19836;
})();
if(inst_19764__$1){
var statearr_19837_20841 = state_19808__$1;
(statearr_19837_20841[(1)] = (8));

} else {
var statearr_19838_20842 = state_19808__$1;
(statearr_19838_20842[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19809 === (14))){
var inst_19759 = (state_19808[(9)]);
var inst_19763 = (state_19808[(11)]);
var inst_19781 = (state_19808[(2)]);
var inst_19782 = [];
var inst_19783 = inst_19782.push(inst_19759);
var inst_19755 = inst_19782;
var inst_19756 = inst_19763;
var state_19808__$1 = (function (){var statearr_19839 = state_19808;
(statearr_19839[(7)] = inst_19755);

(statearr_19839[(14)] = inst_19783);

(statearr_19839[(15)] = inst_19781);

(statearr_19839[(8)] = inst_19756);

return statearr_19839;
})();
var statearr_19840_20844 = state_19808__$1;
(statearr_19840_20844[(2)] = null);

(statearr_19840_20844[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19809 === (16))){
var state_19808__$1 = state_19808;
var statearr_19841_20845 = state_19808__$1;
(statearr_19841_20845[(2)] = null);

(statearr_19841_20845[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19809 === (10))){
var inst_19769 = (state_19808[(2)]);
var state_19808__$1 = state_19808;
if(cljs.core.truth_(inst_19769)){
var statearr_19849_20846 = state_19808__$1;
(statearr_19849_20846[(1)] = (11));

} else {
var statearr_19850_20847 = state_19808__$1;
(statearr_19850_20847[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19809 === (18))){
var inst_19793 = (state_19808[(2)]);
var state_19808__$1 = state_19808;
var statearr_19851_20848 = state_19808__$1;
(statearr_19851_20848[(2)] = inst_19793);

(statearr_19851_20848[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19809 === (8))){
var inst_19764 = (state_19808[(13)]);
var state_19808__$1 = state_19808;
var statearr_19855_20849 = state_19808__$1;
(statearr_19855_20849[(2)] = inst_19764);

(statearr_19855_20849[(1)] = (10));


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
var cljs$core$async$state_machine__17199__auto__ = null;
var cljs$core$async$state_machine__17199__auto____0 = (function (){
var statearr_19856 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19856[(0)] = cljs$core$async$state_machine__17199__auto__);

(statearr_19856[(1)] = (1));

return statearr_19856;
});
var cljs$core$async$state_machine__17199__auto____1 = (function (state_19808){
while(true){
var ret_value__17200__auto__ = (function (){try{while(true){
var result__17201__auto__ = switch__17198__auto__(state_19808);
if(cljs.core.keyword_identical_QMARK_(result__17201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17201__auto__;
}
break;
}
}catch (e19857){var ex__17202__auto__ = e19857;
var statearr_19858_20850 = state_19808;
(statearr_19858_20850[(2)] = ex__17202__auto__);


if(cljs.core.seq((state_19808[(4)]))){
var statearr_19859_20851 = state_19808;
(statearr_19859_20851[(1)] = cljs.core.first((state_19808[(4)])));

} else {
throw ex__17202__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20853 = state_19808;
state_19808 = G__20853;
continue;
} else {
return ret_value__17200__auto__;
}
break;
}
});
cljs$core$async$state_machine__17199__auto__ = function(state_19808){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17199__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17199__auto____1.call(this,state_19808);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17199__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17199__auto____0;
cljs$core$async$state_machine__17199__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17199__auto____1;
return cljs$core$async$state_machine__17199__auto__;
})()
})();
var state__17549__auto__ = (function (){var statearr_19860 = f__17548__auto__();
(statearr_19860[(6)] = c__17547__auto___20823);

return statearr_19860;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17549__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map

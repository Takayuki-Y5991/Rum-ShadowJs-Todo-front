goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__17633){
var map__17634 = p__17633;
var map__17634__$1 = cljs.core.__destructure_map(map__17634);
var runtime = map__17634__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17634__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__5045__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
var self_id_17752 = shadow.remote.runtime.shared.get_client_id(runtime);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(msg),self_id_17752)){
shadow.remote.runtime.api.relay_msg(runtime,msg);
} else {
Promise.resolve((1)).then((function (){
var G__17639 = runtime;
var G__17640 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"from","from",1815293044),self_id_17752);
return (shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2 ? shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2(G__17639,G__17640) : shadow.remote.runtime.shared.process.call(null,G__17639,G__17640));
}));
}

return msg;
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__17641,res){
var map__17642 = p__17641;
var map__17642__$1 = cljs.core.__destructure_map(map__17642);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17642__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17642__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__17643 = res;
var G__17643__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__17643,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__17643);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__17643__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__17643__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__17646 = arguments.length;
switch (G__17646) {
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

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__17647,msg,handlers,timeout_after_ms){
var map__17648 = p__17647;
var map__17648__$1 = cljs.core.__destructure_map(map__17648);
var runtime = map__17648__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17648__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
if(cljs.core.map_QMARK_(msg)){
} else {
throw (new Error("Assert failed: (map? msg)"));
}

if(cljs.core.map_QMARK_(handlers)){
} else {
throw (new Error("Assert failed: (map? handlers)"));
}

if(cljs.core.nat_int_QMARK_(timeout_after_ms)){
} else {
throw (new Error("Assert failed: (nat-int? timeout-after-ms)"));
}

var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___17755 = arguments.length;
var i__5770__auto___17756 = (0);
while(true){
if((i__5770__auto___17756 < len__5769__auto___17755)){
args__5775__auto__.push((arguments[i__5770__auto___17756]));

var G__17757 = (i__5770__auto___17756 + (1));
i__5770__auto___17756 = G__17757;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__17656,ev,args){
var map__17657 = p__17656;
var map__17657__$1 = cljs.core.__destructure_map(map__17657);
var runtime = map__17657__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17657__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__17659 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__17662 = null;
var count__17663 = (0);
var i__17664 = (0);
while(true){
if((i__17664 < count__17663)){
var ext = chunk__17662.cljs$core$IIndexed$_nth$arity$2(null,i__17664);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__17760 = seq__17659;
var G__17761 = chunk__17662;
var G__17762 = count__17663;
var G__17763 = (i__17664 + (1));
seq__17659 = G__17760;
chunk__17662 = G__17761;
count__17663 = G__17762;
i__17664 = G__17763;
continue;
} else {
var G__17764 = seq__17659;
var G__17765 = chunk__17662;
var G__17766 = count__17663;
var G__17767 = (i__17664 + (1));
seq__17659 = G__17764;
chunk__17662 = G__17765;
count__17663 = G__17766;
i__17664 = G__17767;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__17659);
if(temp__5804__auto__){
var seq__17659__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17659__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__17659__$1);
var G__17769 = cljs.core.chunk_rest(seq__17659__$1);
var G__17770 = c__5568__auto__;
var G__17771 = cljs.core.count(c__5568__auto__);
var G__17772 = (0);
seq__17659 = G__17769;
chunk__17662 = G__17770;
count__17663 = G__17771;
i__17664 = G__17772;
continue;
} else {
var ext = cljs.core.first(seq__17659__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__17773 = cljs.core.next(seq__17659__$1);
var G__17774 = null;
var G__17775 = (0);
var G__17776 = (0);
seq__17659 = G__17773;
chunk__17662 = G__17774;
count__17663 = G__17775;
i__17664 = G__17776;
continue;
} else {
var G__17777 = cljs.core.next(seq__17659__$1);
var G__17778 = null;
var G__17779 = (0);
var G__17780 = (0);
seq__17659 = G__17777;
chunk__17662 = G__17778;
count__17663 = G__17779;
i__17664 = G__17780;
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
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq17653){
var G__17654 = cljs.core.first(seq17653);
var seq17653__$1 = cljs.core.next(seq17653);
var G__17655 = cljs.core.first(seq17653__$1);
var seq17653__$2 = cljs.core.next(seq17653__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17654,G__17655,seq17653__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__17678,p__17679){
var map__17680 = p__17678;
var map__17680__$1 = cljs.core.__destructure_map(map__17680);
var runtime = map__17680__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17680__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__17681 = p__17679;
var map__17681__$1 = cljs.core.__destructure_map(map__17681);
var msg = map__17681__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17681__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__17682 = cljs.core.deref(state_ref);
var map__17682__$1 = cljs.core.__destructure_map(map__17682);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17682__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17682__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__17685,msg){
var map__17686 = p__17685;
var map__17686__$1 = cljs.core.__destructure_map(map__17686);
var runtime = map__17686__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17686__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__17689,key,p__17690){
var map__17691 = p__17689;
var map__17691__$1 = cljs.core.__destructure_map(map__17691);
var state = map__17691__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17691__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__17692 = p__17690;
var map__17692__$1 = cljs.core.__destructure_map(map__17692);
var spec = map__17692__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17692__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
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
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__17700,key,spec){
var map__17701 = p__17700;
var map__17701__$1 = cljs.core.__destructure_map(map__17701);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17701__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__17703_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__17703_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__17704_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__17704_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__17705_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__17705_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__17706_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__17706_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__17708_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__17708_SHARP_);
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
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__17722,key){
var map__17723 = p__17722;
var map__17723__$1 = cljs.core.__destructure_map(map__17723);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17723__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__17729,msg){
var map__17730 = p__17729;
var map__17730__$1 = cljs.core.__destructure_map(map__17730);
var runtime = map__17730__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17730__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__17733,p__17734){
var map__17735 = p__17733;
var map__17735__$1 = cljs.core.__destructure_map(map__17735);
var runtime = map__17735__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17735__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__17736 = p__17734;
var map__17736__$1 = cljs.core.__destructure_map(map__17736);
var msg = map__17736__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17736__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17736__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
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
var seq__17739 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__17741 = null;
var count__17742 = (0);
var i__17743 = (0);
while(true){
if((i__17743 < count__17742)){
var map__17748 = chunk__17741.cljs$core$IIndexed$_nth$arity$2(null,i__17743);
var map__17748__$1 = cljs.core.__destructure_map(map__17748);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17748__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__17798 = seq__17739;
var G__17799 = chunk__17741;
var G__17800 = count__17742;
var G__17801 = (i__17743 + (1));
seq__17739 = G__17798;
chunk__17741 = G__17799;
count__17742 = G__17800;
i__17743 = G__17801;
continue;
} else {
var G__17803 = seq__17739;
var G__17804 = chunk__17741;
var G__17805 = count__17742;
var G__17806 = (i__17743 + (1));
seq__17739 = G__17803;
chunk__17741 = G__17804;
count__17742 = G__17805;
i__17743 = G__17806;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__17739);
if(temp__5804__auto__){
var seq__17739__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17739__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__17739__$1);
var G__17807 = cljs.core.chunk_rest(seq__17739__$1);
var G__17808 = c__5568__auto__;
var G__17809 = cljs.core.count(c__5568__auto__);
var G__17810 = (0);
seq__17739 = G__17807;
chunk__17741 = G__17808;
count__17742 = G__17809;
i__17743 = G__17810;
continue;
} else {
var map__17749 = cljs.core.first(seq__17739__$1);
var map__17749__$1 = cljs.core.__destructure_map(map__17749);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17749__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__17812 = cljs.core.next(seq__17739__$1);
var G__17813 = null;
var G__17814 = (0);
var G__17815 = (0);
seq__17739 = G__17812;
chunk__17741 = G__17813;
count__17742 = G__17814;
i__17743 = G__17815;
continue;
} else {
var G__17816 = cljs.core.next(seq__17739__$1);
var G__17817 = null;
var G__17818 = (0);
var G__17819 = (0);
seq__17739 = G__17816;
chunk__17741 = G__17817;
count__17742 = G__17818;
i__17743 = G__17819;
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

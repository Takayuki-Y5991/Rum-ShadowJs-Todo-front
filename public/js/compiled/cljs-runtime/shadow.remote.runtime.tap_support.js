goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__21500,p__21501){
var map__21504 = p__21500;
var map__21504__$1 = cljs.core.__destructure_map(map__21504);
var svc = map__21504__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21504__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21504__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21504__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__21505 = p__21501;
var map__21505__$1 = cljs.core.__destructure_map(map__21505);
var msg = map__21505__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21505__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21505__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21505__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__21505__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history__$1)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__21516,p__21517){
var map__21519 = p__21516;
var map__21519__$1 = cljs.core.__destructure_map(map__21519);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21519__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__21520 = p__21517;
var map__21520__$1 = cljs.core.__destructure_map(map__21520);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21520__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__21528,p__21529){
var map__21531 = p__21528;
var map__21531__$1 = cljs.core.__destructure_map(map__21531);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21531__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21531__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__21532 = p__21529;
var map__21532__$1 = cljs.core.__destructure_map(map__21532);
var msg = map__21532__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__21532__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__21534,tid){
var map__21535 = p__21534;
var map__21535__$1 = cljs.core.__destructure_map(map__21535);
var svc = map__21535__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21535__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__21546 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__21547 = null;
var count__21548 = (0);
var i__21549 = (0);
while(true){
if((i__21549 < count__21548)){
var vec__21561 = chunk__21547.cljs$core$IIndexed$_nth$arity$2(null,i__21549);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21561,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21561,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__21574 = seq__21546;
var G__21575 = chunk__21547;
var G__21576 = count__21548;
var G__21577 = (i__21549 + (1));
seq__21546 = G__21574;
chunk__21547 = G__21575;
count__21548 = G__21576;
i__21549 = G__21577;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__21546);
if(temp__5804__auto__){
var seq__21546__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21546__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__21546__$1);
var G__21578 = cljs.core.chunk_rest(seq__21546__$1);
var G__21579 = c__5568__auto__;
var G__21580 = cljs.core.count(c__5568__auto__);
var G__21581 = (0);
seq__21546 = G__21578;
chunk__21547 = G__21579;
count__21548 = G__21580;
i__21549 = G__21581;
continue;
} else {
var vec__21565 = cljs.core.first(seq__21546__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21565,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21565,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__21583 = cljs.core.next(seq__21546__$1);
var G__21584 = null;
var G__21585 = (0);
var G__21586 = (0);
seq__21546 = G__21583;
chunk__21547 = G__21584;
count__21548 = G__21585;
i__21549 = G__21586;
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
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__21541_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__21541_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__21542_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__21542_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__21543_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__21543_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__21544_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__21544_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__21568){
var map__21569 = p__21568;
var map__21569__$1 = cljs.core.__destructure_map(map__21569);
var svc = map__21569__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21569__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21569__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map

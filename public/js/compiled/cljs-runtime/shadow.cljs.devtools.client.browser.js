goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___24464 = arguments.length;
var i__5770__auto___24465 = (0);
while(true){
if((i__5770__auto___24465 < len__5769__auto___24464)){
args__5775__auto__.push((arguments[i__5770__auto___24465]));

var G__24467 = (i__5770__auto___24465 + (1));
i__5770__auto___24465 = G__24467;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
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
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq23885){
var G__23886 = cljs.core.first(seq23885);
var seq23885__$1 = cljs.core.next(seq23885);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23886,seq23885__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__23906 = cljs.core.seq(sources);
var chunk__23907 = null;
var count__23908 = (0);
var i__23909 = (0);
while(true){
if((i__23909 < count__23908)){
var map__23922 = chunk__23907.cljs$core$IIndexed$_nth$arity$2(null,i__23909);
var map__23922__$1 = cljs.core.__destructure_map(map__23922);
var src = map__23922__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23922__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23922__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23922__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23922__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e23923){var e_24469 = e23923;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_24469);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_24469.message)].join('')));
}

var G__24470 = seq__23906;
var G__24471 = chunk__23907;
var G__24472 = count__23908;
var G__24473 = (i__23909 + (1));
seq__23906 = G__24470;
chunk__23907 = G__24471;
count__23908 = G__24472;
i__23909 = G__24473;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__23906);
if(temp__5804__auto__){
var seq__23906__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23906__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__23906__$1);
var G__24474 = cljs.core.chunk_rest(seq__23906__$1);
var G__24475 = c__5568__auto__;
var G__24476 = cljs.core.count(c__5568__auto__);
var G__24477 = (0);
seq__23906 = G__24474;
chunk__23907 = G__24475;
count__23908 = G__24476;
i__23909 = G__24477;
continue;
} else {
var map__23927 = cljs.core.first(seq__23906__$1);
var map__23927__$1 = cljs.core.__destructure_map(map__23927);
var src = map__23927__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23927__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23927__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23927__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23927__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e23928){var e_24478 = e23928;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_24478);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_24478.message)].join('')));
}

var G__24479 = cljs.core.next(seq__23906__$1);
var G__24480 = null;
var G__24481 = (0);
var G__24482 = (0);
seq__23906 = G__24479;
chunk__23907 = G__24480;
count__23908 = G__24481;
i__23909 = G__24482;
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
var seq__23932 = cljs.core.seq(js_requires);
var chunk__23933 = null;
var count__23934 = (0);
var i__23935 = (0);
while(true){
if((i__23935 < count__23934)){
var js_ns = chunk__23933.cljs$core$IIndexed$_nth$arity$2(null,i__23935);
var require_str_24483 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_24483);


var G__24484 = seq__23932;
var G__24485 = chunk__23933;
var G__24486 = count__23934;
var G__24487 = (i__23935 + (1));
seq__23932 = G__24484;
chunk__23933 = G__24485;
count__23934 = G__24486;
i__23935 = G__24487;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__23932);
if(temp__5804__auto__){
var seq__23932__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23932__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__23932__$1);
var G__24488 = cljs.core.chunk_rest(seq__23932__$1);
var G__24489 = c__5568__auto__;
var G__24490 = cljs.core.count(c__5568__auto__);
var G__24491 = (0);
seq__23932 = G__24488;
chunk__23933 = G__24489;
count__23934 = G__24490;
i__23935 = G__24491;
continue;
} else {
var js_ns = cljs.core.first(seq__23932__$1);
var require_str_24492 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_24492);


var G__24493 = cljs.core.next(seq__23932__$1);
var G__24494 = null;
var G__24495 = (0);
var G__24496 = (0);
seq__23932 = G__24493;
chunk__23933 = G__24494;
count__23934 = G__24495;
i__23935 = G__24496;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__23940){
var map__23941 = p__23940;
var map__23941__$1 = cljs.core.__destructure_map(map__23941);
var msg = map__23941__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23941__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23941__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5523__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__23942(s__23943){
return (new cljs.core.LazySeq(null,(function (){
var s__23943__$1 = s__23943;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__23943__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var map__23948 = cljs.core.first(xs__6360__auto__);
var map__23948__$1 = cljs.core.__destructure_map(map__23948);
var src = map__23948__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23948__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23948__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5519__auto__ = ((function (s__23943__$1,map__23948,map__23948__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__23941,map__23941__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__23942_$_iter__23944(s__23945){
return (new cljs.core.LazySeq(null,((function (s__23943__$1,map__23948,map__23948__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__23941,map__23941__$1,msg,info,reload_info){
return (function (){
var s__23945__$1 = s__23945;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__23945__$1);
if(temp__5804__auto____$1){
var s__23945__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__23945__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__23945__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__23947 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__23946 = (0);
while(true){
if((i__23946 < size__5522__auto__)){
var warning = cljs.core._nth(c__5521__auto__,i__23946);
cljs.core.chunk_append(b__23947,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__24499 = (i__23946 + (1));
i__23946 = G__24499;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__23947),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__23942_$_iter__23944(cljs.core.chunk_rest(s__23945__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__23947),null);
}
} else {
var warning = cljs.core.first(s__23945__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__23942_$_iter__23944(cljs.core.rest(s__23945__$2)));
}
} else {
return null;
}
break;
}
});})(s__23943__$1,map__23948,map__23948__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__23941,map__23941__$1,msg,info,reload_info))
,null,null));
});})(s__23943__$1,map__23948,map__23948__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__23941,map__23941__$1,msg,info,reload_info))
;
var fs__5520__auto__ = cljs.core.seq(iterys__5519__auto__(warnings));
if(fs__5520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5520__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__23942(cljs.core.rest(s__23943__$1)));
} else {
var G__24500 = cljs.core.rest(s__23943__$1);
s__23943__$1 = G__24500;
continue;
}
} else {
var G__24501 = cljs.core.rest(s__23943__$1);
s__23943__$1 = G__24501;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__23957_24502 = cljs.core.seq(warnings);
var chunk__23958_24503 = null;
var count__23959_24504 = (0);
var i__23960_24505 = (0);
while(true){
if((i__23960_24505 < count__23959_24504)){
var map__23969_24506 = chunk__23958_24503.cljs$core$IIndexed$_nth$arity$2(null,i__23960_24505);
var map__23969_24507__$1 = cljs.core.__destructure_map(map__23969_24506);
var w_24508 = map__23969_24507__$1;
var msg_24509__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23969_24507__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_24510 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23969_24507__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_24511 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23969_24507__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_24512 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23969_24507__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_24512)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_24510),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_24511),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_24509__$1)].join(''));


var G__24513 = seq__23957_24502;
var G__24514 = chunk__23958_24503;
var G__24515 = count__23959_24504;
var G__24516 = (i__23960_24505 + (1));
seq__23957_24502 = G__24513;
chunk__23958_24503 = G__24514;
count__23959_24504 = G__24515;
i__23960_24505 = G__24516;
continue;
} else {
var temp__5804__auto___24517 = cljs.core.seq(seq__23957_24502);
if(temp__5804__auto___24517){
var seq__23957_24518__$1 = temp__5804__auto___24517;
if(cljs.core.chunked_seq_QMARK_(seq__23957_24518__$1)){
var c__5568__auto___24519 = cljs.core.chunk_first(seq__23957_24518__$1);
var G__24524 = cljs.core.chunk_rest(seq__23957_24518__$1);
var G__24525 = c__5568__auto___24519;
var G__24526 = cljs.core.count(c__5568__auto___24519);
var G__24527 = (0);
seq__23957_24502 = G__24524;
chunk__23958_24503 = G__24525;
count__23959_24504 = G__24526;
i__23960_24505 = G__24527;
continue;
} else {
var map__23973_24528 = cljs.core.first(seq__23957_24518__$1);
var map__23973_24529__$1 = cljs.core.__destructure_map(map__23973_24528);
var w_24530 = map__23973_24529__$1;
var msg_24531__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23973_24529__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_24532 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23973_24529__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_24533 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23973_24529__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_24534 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23973_24529__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_24534)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_24532),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_24533),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_24531__$1)].join(''));


var G__24535 = cljs.core.next(seq__23957_24518__$1);
var G__24536 = null;
var G__24537 = (0);
var G__24538 = (0);
seq__23957_24502 = G__24535;
chunk__23958_24503 = G__24536;
count__23959_24504 = G__24537;
i__23960_24505 = G__24538;
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

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__23939_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__23939_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
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
var and__5043__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__5043__auto__){
var and__5043__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__5043__auto____$1){
return new$;
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__23975){
var map__23976 = p__23975;
var map__23976__$1 = cljs.core.__destructure_map(map__23976);
var msg = map__23976__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23976__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23976__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__23977 = cljs.core.seq(updates);
var chunk__23979 = null;
var count__23980 = (0);
var i__23981 = (0);
while(true){
if((i__23981 < count__23980)){
var path = chunk__23979.cljs$core$IIndexed$_nth$arity$2(null,i__23981);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__24173_24541 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__24177_24542 = null;
var count__24178_24543 = (0);
var i__24179_24544 = (0);
while(true){
if((i__24179_24544 < count__24178_24543)){
var node_24545 = chunk__24177_24542.cljs$core$IIndexed$_nth$arity$2(null,i__24179_24544);
if(cljs.core.not(node_24545.shadow$old)){
var path_match_24546 = shadow.cljs.devtools.client.browser.match_paths(node_24545.getAttribute("href"),path);
if(cljs.core.truth_(path_match_24546)){
var new_link_24547 = (function (){var G__24258 = node_24545.cloneNode(true);
G__24258.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_24546),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__24258;
})();
(node_24545.shadow$old = true);

(new_link_24547.onload = ((function (seq__24173_24541,chunk__24177_24542,count__24178_24543,i__24179_24544,seq__23977,chunk__23979,count__23980,i__23981,new_link_24547,path_match_24546,node_24545,path,map__23976,map__23976__$1,msg,updates,reload_info){
return (function (e){
var seq__24259_24549 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__24261_24550 = null;
var count__24262_24551 = (0);
var i__24263_24552 = (0);
while(true){
if((i__24263_24552 < count__24262_24551)){
var map__24272_24553 = chunk__24261_24550.cljs$core$IIndexed$_nth$arity$2(null,i__24263_24552);
var map__24272_24554__$1 = cljs.core.__destructure_map(map__24272_24553);
var task_24556 = map__24272_24554__$1;
var fn_str_24557 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24272_24554__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_24558 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24272_24554__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_24561 = goog.getObjectByName(fn_str_24557,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_24558)].join(''));

(fn_obj_24561.cljs$core$IFn$_invoke$arity$2 ? fn_obj_24561.cljs$core$IFn$_invoke$arity$2(path,new_link_24547) : fn_obj_24561.call(null,path,new_link_24547));


var G__24562 = seq__24259_24549;
var G__24563 = chunk__24261_24550;
var G__24564 = count__24262_24551;
var G__24565 = (i__24263_24552 + (1));
seq__24259_24549 = G__24562;
chunk__24261_24550 = G__24563;
count__24262_24551 = G__24564;
i__24263_24552 = G__24565;
continue;
} else {
var temp__5804__auto___24566 = cljs.core.seq(seq__24259_24549);
if(temp__5804__auto___24566){
var seq__24259_24567__$1 = temp__5804__auto___24566;
if(cljs.core.chunked_seq_QMARK_(seq__24259_24567__$1)){
var c__5568__auto___24568 = cljs.core.chunk_first(seq__24259_24567__$1);
var G__24569 = cljs.core.chunk_rest(seq__24259_24567__$1);
var G__24570 = c__5568__auto___24568;
var G__24571 = cljs.core.count(c__5568__auto___24568);
var G__24572 = (0);
seq__24259_24549 = G__24569;
chunk__24261_24550 = G__24570;
count__24262_24551 = G__24571;
i__24263_24552 = G__24572;
continue;
} else {
var map__24276_24573 = cljs.core.first(seq__24259_24567__$1);
var map__24276_24574__$1 = cljs.core.__destructure_map(map__24276_24573);
var task_24575 = map__24276_24574__$1;
var fn_str_24576 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24276_24574__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_24577 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24276_24574__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_24578 = goog.getObjectByName(fn_str_24576,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_24577)].join(''));

(fn_obj_24578.cljs$core$IFn$_invoke$arity$2 ? fn_obj_24578.cljs$core$IFn$_invoke$arity$2(path,new_link_24547) : fn_obj_24578.call(null,path,new_link_24547));


var G__24579 = cljs.core.next(seq__24259_24567__$1);
var G__24580 = null;
var G__24581 = (0);
var G__24582 = (0);
seq__24259_24549 = G__24579;
chunk__24261_24550 = G__24580;
count__24262_24551 = G__24581;
i__24263_24552 = G__24582;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_24545);
});})(seq__24173_24541,chunk__24177_24542,count__24178_24543,i__24179_24544,seq__23977,chunk__23979,count__23980,i__23981,new_link_24547,path_match_24546,node_24545,path,map__23976,map__23976__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_24546], 0));

goog.dom.insertSiblingAfter(new_link_24547,node_24545);


var G__24583 = seq__24173_24541;
var G__24584 = chunk__24177_24542;
var G__24585 = count__24178_24543;
var G__24586 = (i__24179_24544 + (1));
seq__24173_24541 = G__24583;
chunk__24177_24542 = G__24584;
count__24178_24543 = G__24585;
i__24179_24544 = G__24586;
continue;
} else {
var G__24587 = seq__24173_24541;
var G__24588 = chunk__24177_24542;
var G__24589 = count__24178_24543;
var G__24590 = (i__24179_24544 + (1));
seq__24173_24541 = G__24587;
chunk__24177_24542 = G__24588;
count__24178_24543 = G__24589;
i__24179_24544 = G__24590;
continue;
}
} else {
var G__24591 = seq__24173_24541;
var G__24592 = chunk__24177_24542;
var G__24593 = count__24178_24543;
var G__24594 = (i__24179_24544 + (1));
seq__24173_24541 = G__24591;
chunk__24177_24542 = G__24592;
count__24178_24543 = G__24593;
i__24179_24544 = G__24594;
continue;
}
} else {
var temp__5804__auto___24595 = cljs.core.seq(seq__24173_24541);
if(temp__5804__auto___24595){
var seq__24173_24596__$1 = temp__5804__auto___24595;
if(cljs.core.chunked_seq_QMARK_(seq__24173_24596__$1)){
var c__5568__auto___24597 = cljs.core.chunk_first(seq__24173_24596__$1);
var G__24598 = cljs.core.chunk_rest(seq__24173_24596__$1);
var G__24599 = c__5568__auto___24597;
var G__24600 = cljs.core.count(c__5568__auto___24597);
var G__24601 = (0);
seq__24173_24541 = G__24598;
chunk__24177_24542 = G__24599;
count__24178_24543 = G__24600;
i__24179_24544 = G__24601;
continue;
} else {
var node_24602 = cljs.core.first(seq__24173_24596__$1);
if(cljs.core.not(node_24602.shadow$old)){
var path_match_24603 = shadow.cljs.devtools.client.browser.match_paths(node_24602.getAttribute("href"),path);
if(cljs.core.truth_(path_match_24603)){
var new_link_24604 = (function (){var G__24278 = node_24602.cloneNode(true);
G__24278.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_24603),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__24278;
})();
(node_24602.shadow$old = true);

(new_link_24604.onload = ((function (seq__24173_24541,chunk__24177_24542,count__24178_24543,i__24179_24544,seq__23977,chunk__23979,count__23980,i__23981,new_link_24604,path_match_24603,node_24602,seq__24173_24596__$1,temp__5804__auto___24595,path,map__23976,map__23976__$1,msg,updates,reload_info){
return (function (e){
var seq__24279_24608 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__24281_24609 = null;
var count__24282_24610 = (0);
var i__24283_24611 = (0);
while(true){
if((i__24283_24611 < count__24282_24610)){
var map__24287_24612 = chunk__24281_24609.cljs$core$IIndexed$_nth$arity$2(null,i__24283_24611);
var map__24287_24613__$1 = cljs.core.__destructure_map(map__24287_24612);
var task_24614 = map__24287_24613__$1;
var fn_str_24615 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24287_24613__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_24616 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24287_24613__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_24617 = goog.getObjectByName(fn_str_24615,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_24616)].join(''));

(fn_obj_24617.cljs$core$IFn$_invoke$arity$2 ? fn_obj_24617.cljs$core$IFn$_invoke$arity$2(path,new_link_24604) : fn_obj_24617.call(null,path,new_link_24604));


var G__24618 = seq__24279_24608;
var G__24619 = chunk__24281_24609;
var G__24620 = count__24282_24610;
var G__24621 = (i__24283_24611 + (1));
seq__24279_24608 = G__24618;
chunk__24281_24609 = G__24619;
count__24282_24610 = G__24620;
i__24283_24611 = G__24621;
continue;
} else {
var temp__5804__auto___24622__$1 = cljs.core.seq(seq__24279_24608);
if(temp__5804__auto___24622__$1){
var seq__24279_24623__$1 = temp__5804__auto___24622__$1;
if(cljs.core.chunked_seq_QMARK_(seq__24279_24623__$1)){
var c__5568__auto___24624 = cljs.core.chunk_first(seq__24279_24623__$1);
var G__24625 = cljs.core.chunk_rest(seq__24279_24623__$1);
var G__24626 = c__5568__auto___24624;
var G__24627 = cljs.core.count(c__5568__auto___24624);
var G__24628 = (0);
seq__24279_24608 = G__24625;
chunk__24281_24609 = G__24626;
count__24282_24610 = G__24627;
i__24283_24611 = G__24628;
continue;
} else {
var map__24288_24629 = cljs.core.first(seq__24279_24623__$1);
var map__24288_24630__$1 = cljs.core.__destructure_map(map__24288_24629);
var task_24631 = map__24288_24630__$1;
var fn_str_24632 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24288_24630__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_24633 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24288_24630__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_24634 = goog.getObjectByName(fn_str_24632,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_24633)].join(''));

(fn_obj_24634.cljs$core$IFn$_invoke$arity$2 ? fn_obj_24634.cljs$core$IFn$_invoke$arity$2(path,new_link_24604) : fn_obj_24634.call(null,path,new_link_24604));


var G__24635 = cljs.core.next(seq__24279_24623__$1);
var G__24636 = null;
var G__24637 = (0);
var G__24638 = (0);
seq__24279_24608 = G__24635;
chunk__24281_24609 = G__24636;
count__24282_24610 = G__24637;
i__24283_24611 = G__24638;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_24602);
});})(seq__24173_24541,chunk__24177_24542,count__24178_24543,i__24179_24544,seq__23977,chunk__23979,count__23980,i__23981,new_link_24604,path_match_24603,node_24602,seq__24173_24596__$1,temp__5804__auto___24595,path,map__23976,map__23976__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_24603], 0));

goog.dom.insertSiblingAfter(new_link_24604,node_24602);


var G__24640 = cljs.core.next(seq__24173_24596__$1);
var G__24641 = null;
var G__24642 = (0);
var G__24643 = (0);
seq__24173_24541 = G__24640;
chunk__24177_24542 = G__24641;
count__24178_24543 = G__24642;
i__24179_24544 = G__24643;
continue;
} else {
var G__24644 = cljs.core.next(seq__24173_24596__$1);
var G__24645 = null;
var G__24646 = (0);
var G__24647 = (0);
seq__24173_24541 = G__24644;
chunk__24177_24542 = G__24645;
count__24178_24543 = G__24646;
i__24179_24544 = G__24647;
continue;
}
} else {
var G__24648 = cljs.core.next(seq__24173_24596__$1);
var G__24650 = null;
var G__24651 = (0);
var G__24652 = (0);
seq__24173_24541 = G__24648;
chunk__24177_24542 = G__24650;
count__24178_24543 = G__24651;
i__24179_24544 = G__24652;
continue;
}
}
} else {
}
}
break;
}


var G__24654 = seq__23977;
var G__24655 = chunk__23979;
var G__24656 = count__23980;
var G__24657 = (i__23981 + (1));
seq__23977 = G__24654;
chunk__23979 = G__24655;
count__23980 = G__24656;
i__23981 = G__24657;
continue;
} else {
var G__24658 = seq__23977;
var G__24659 = chunk__23979;
var G__24660 = count__23980;
var G__24661 = (i__23981 + (1));
seq__23977 = G__24658;
chunk__23979 = G__24659;
count__23980 = G__24660;
i__23981 = G__24661;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__23977);
if(temp__5804__auto__){
var seq__23977__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23977__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__23977__$1);
var G__24662 = cljs.core.chunk_rest(seq__23977__$1);
var G__24663 = c__5568__auto__;
var G__24664 = cljs.core.count(c__5568__auto__);
var G__24665 = (0);
seq__23977 = G__24662;
chunk__23979 = G__24663;
count__23980 = G__24664;
i__23981 = G__24665;
continue;
} else {
var path = cljs.core.first(seq__23977__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__24289_24666 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__24293_24667 = null;
var count__24294_24668 = (0);
var i__24295_24669 = (0);
while(true){
if((i__24295_24669 < count__24294_24668)){
var node_24670 = chunk__24293_24667.cljs$core$IIndexed$_nth$arity$2(null,i__24295_24669);
if(cljs.core.not(node_24670.shadow$old)){
var path_match_24671 = shadow.cljs.devtools.client.browser.match_paths(node_24670.getAttribute("href"),path);
if(cljs.core.truth_(path_match_24671)){
var new_link_24672 = (function (){var G__24361 = node_24670.cloneNode(true);
G__24361.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_24671),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__24361;
})();
(node_24670.shadow$old = true);

(new_link_24672.onload = ((function (seq__24289_24666,chunk__24293_24667,count__24294_24668,i__24295_24669,seq__23977,chunk__23979,count__23980,i__23981,new_link_24672,path_match_24671,node_24670,path,seq__23977__$1,temp__5804__auto__,map__23976,map__23976__$1,msg,updates,reload_info){
return (function (e){
var seq__24368_24673 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__24370_24674 = null;
var count__24371_24675 = (0);
var i__24372_24676 = (0);
while(true){
if((i__24372_24676 < count__24371_24675)){
var map__24381_24677 = chunk__24370_24674.cljs$core$IIndexed$_nth$arity$2(null,i__24372_24676);
var map__24381_24678__$1 = cljs.core.__destructure_map(map__24381_24677);
var task_24679 = map__24381_24678__$1;
var fn_str_24680 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24381_24678__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_24681 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24381_24678__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_24683 = goog.getObjectByName(fn_str_24680,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_24681)].join(''));

(fn_obj_24683.cljs$core$IFn$_invoke$arity$2 ? fn_obj_24683.cljs$core$IFn$_invoke$arity$2(path,new_link_24672) : fn_obj_24683.call(null,path,new_link_24672));


var G__24684 = seq__24368_24673;
var G__24686 = chunk__24370_24674;
var G__24687 = count__24371_24675;
var G__24688 = (i__24372_24676 + (1));
seq__24368_24673 = G__24684;
chunk__24370_24674 = G__24686;
count__24371_24675 = G__24687;
i__24372_24676 = G__24688;
continue;
} else {
var temp__5804__auto___24689__$1 = cljs.core.seq(seq__24368_24673);
if(temp__5804__auto___24689__$1){
var seq__24368_24691__$1 = temp__5804__auto___24689__$1;
if(cljs.core.chunked_seq_QMARK_(seq__24368_24691__$1)){
var c__5568__auto___24692 = cljs.core.chunk_first(seq__24368_24691__$1);
var G__24694 = cljs.core.chunk_rest(seq__24368_24691__$1);
var G__24695 = c__5568__auto___24692;
var G__24696 = cljs.core.count(c__5568__auto___24692);
var G__24697 = (0);
seq__24368_24673 = G__24694;
chunk__24370_24674 = G__24695;
count__24371_24675 = G__24696;
i__24372_24676 = G__24697;
continue;
} else {
var map__24383_24698 = cljs.core.first(seq__24368_24691__$1);
var map__24383_24699__$1 = cljs.core.__destructure_map(map__24383_24698);
var task_24700 = map__24383_24699__$1;
var fn_str_24701 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24383_24699__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_24702 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24383_24699__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_24703 = goog.getObjectByName(fn_str_24701,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_24702)].join(''));

(fn_obj_24703.cljs$core$IFn$_invoke$arity$2 ? fn_obj_24703.cljs$core$IFn$_invoke$arity$2(path,new_link_24672) : fn_obj_24703.call(null,path,new_link_24672));


var G__24704 = cljs.core.next(seq__24368_24691__$1);
var G__24705 = null;
var G__24706 = (0);
var G__24707 = (0);
seq__24368_24673 = G__24704;
chunk__24370_24674 = G__24705;
count__24371_24675 = G__24706;
i__24372_24676 = G__24707;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_24670);
});})(seq__24289_24666,chunk__24293_24667,count__24294_24668,i__24295_24669,seq__23977,chunk__23979,count__23980,i__23981,new_link_24672,path_match_24671,node_24670,path,seq__23977__$1,temp__5804__auto__,map__23976,map__23976__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_24671], 0));

goog.dom.insertSiblingAfter(new_link_24672,node_24670);


var G__24719 = seq__24289_24666;
var G__24720 = chunk__24293_24667;
var G__24721 = count__24294_24668;
var G__24722 = (i__24295_24669 + (1));
seq__24289_24666 = G__24719;
chunk__24293_24667 = G__24720;
count__24294_24668 = G__24721;
i__24295_24669 = G__24722;
continue;
} else {
var G__24723 = seq__24289_24666;
var G__24724 = chunk__24293_24667;
var G__24725 = count__24294_24668;
var G__24726 = (i__24295_24669 + (1));
seq__24289_24666 = G__24723;
chunk__24293_24667 = G__24724;
count__24294_24668 = G__24725;
i__24295_24669 = G__24726;
continue;
}
} else {
var G__24728 = seq__24289_24666;
var G__24729 = chunk__24293_24667;
var G__24730 = count__24294_24668;
var G__24731 = (i__24295_24669 + (1));
seq__24289_24666 = G__24728;
chunk__24293_24667 = G__24729;
count__24294_24668 = G__24730;
i__24295_24669 = G__24731;
continue;
}
} else {
var temp__5804__auto___24733__$1 = cljs.core.seq(seq__24289_24666);
if(temp__5804__auto___24733__$1){
var seq__24289_24735__$1 = temp__5804__auto___24733__$1;
if(cljs.core.chunked_seq_QMARK_(seq__24289_24735__$1)){
var c__5568__auto___24736 = cljs.core.chunk_first(seq__24289_24735__$1);
var G__24737 = cljs.core.chunk_rest(seq__24289_24735__$1);
var G__24738 = c__5568__auto___24736;
var G__24739 = cljs.core.count(c__5568__auto___24736);
var G__24740 = (0);
seq__24289_24666 = G__24737;
chunk__24293_24667 = G__24738;
count__24294_24668 = G__24739;
i__24295_24669 = G__24740;
continue;
} else {
var node_24741 = cljs.core.first(seq__24289_24735__$1);
if(cljs.core.not(node_24741.shadow$old)){
var path_match_24742 = shadow.cljs.devtools.client.browser.match_paths(node_24741.getAttribute("href"),path);
if(cljs.core.truth_(path_match_24742)){
var new_link_24743 = (function (){var G__24384 = node_24741.cloneNode(true);
G__24384.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_24742),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__24384;
})();
(node_24741.shadow$old = true);

(new_link_24743.onload = ((function (seq__24289_24666,chunk__24293_24667,count__24294_24668,i__24295_24669,seq__23977,chunk__23979,count__23980,i__23981,new_link_24743,path_match_24742,node_24741,seq__24289_24735__$1,temp__5804__auto___24733__$1,path,seq__23977__$1,temp__5804__auto__,map__23976,map__23976__$1,msg,updates,reload_info){
return (function (e){
var seq__24386_24747 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__24388_24748 = null;
var count__24389_24749 = (0);
var i__24390_24750 = (0);
while(true){
if((i__24390_24750 < count__24389_24749)){
var map__24395_24752 = chunk__24388_24748.cljs$core$IIndexed$_nth$arity$2(null,i__24390_24750);
var map__24395_24753__$1 = cljs.core.__destructure_map(map__24395_24752);
var task_24754 = map__24395_24753__$1;
var fn_str_24755 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24395_24753__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_24756 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24395_24753__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_24757 = goog.getObjectByName(fn_str_24755,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_24756)].join(''));

(fn_obj_24757.cljs$core$IFn$_invoke$arity$2 ? fn_obj_24757.cljs$core$IFn$_invoke$arity$2(path,new_link_24743) : fn_obj_24757.call(null,path,new_link_24743));


var G__24759 = seq__24386_24747;
var G__24760 = chunk__24388_24748;
var G__24761 = count__24389_24749;
var G__24762 = (i__24390_24750 + (1));
seq__24386_24747 = G__24759;
chunk__24388_24748 = G__24760;
count__24389_24749 = G__24761;
i__24390_24750 = G__24762;
continue;
} else {
var temp__5804__auto___24765__$2 = cljs.core.seq(seq__24386_24747);
if(temp__5804__auto___24765__$2){
var seq__24386_24766__$1 = temp__5804__auto___24765__$2;
if(cljs.core.chunked_seq_QMARK_(seq__24386_24766__$1)){
var c__5568__auto___24767 = cljs.core.chunk_first(seq__24386_24766__$1);
var G__24769 = cljs.core.chunk_rest(seq__24386_24766__$1);
var G__24770 = c__5568__auto___24767;
var G__24771 = cljs.core.count(c__5568__auto___24767);
var G__24772 = (0);
seq__24386_24747 = G__24769;
chunk__24388_24748 = G__24770;
count__24389_24749 = G__24771;
i__24390_24750 = G__24772;
continue;
} else {
var map__24399_24773 = cljs.core.first(seq__24386_24766__$1);
var map__24399_24774__$1 = cljs.core.__destructure_map(map__24399_24773);
var task_24775 = map__24399_24774__$1;
var fn_str_24776 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24399_24774__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_24777 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24399_24774__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_24778 = goog.getObjectByName(fn_str_24776,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_24777)].join(''));

(fn_obj_24778.cljs$core$IFn$_invoke$arity$2 ? fn_obj_24778.cljs$core$IFn$_invoke$arity$2(path,new_link_24743) : fn_obj_24778.call(null,path,new_link_24743));


var G__24779 = cljs.core.next(seq__24386_24766__$1);
var G__24780 = null;
var G__24781 = (0);
var G__24782 = (0);
seq__24386_24747 = G__24779;
chunk__24388_24748 = G__24780;
count__24389_24749 = G__24781;
i__24390_24750 = G__24782;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_24741);
});})(seq__24289_24666,chunk__24293_24667,count__24294_24668,i__24295_24669,seq__23977,chunk__23979,count__23980,i__23981,new_link_24743,path_match_24742,node_24741,seq__24289_24735__$1,temp__5804__auto___24733__$1,path,seq__23977__$1,temp__5804__auto__,map__23976,map__23976__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_24742], 0));

goog.dom.insertSiblingAfter(new_link_24743,node_24741);


var G__24783 = cljs.core.next(seq__24289_24735__$1);
var G__24784 = null;
var G__24785 = (0);
var G__24786 = (0);
seq__24289_24666 = G__24783;
chunk__24293_24667 = G__24784;
count__24294_24668 = G__24785;
i__24295_24669 = G__24786;
continue;
} else {
var G__24787 = cljs.core.next(seq__24289_24735__$1);
var G__24788 = null;
var G__24789 = (0);
var G__24790 = (0);
seq__24289_24666 = G__24787;
chunk__24293_24667 = G__24788;
count__24294_24668 = G__24789;
i__24295_24669 = G__24790;
continue;
}
} else {
var G__24791 = cljs.core.next(seq__24289_24735__$1);
var G__24792 = null;
var G__24793 = (0);
var G__24794 = (0);
seq__24289_24666 = G__24791;
chunk__24293_24667 = G__24792;
count__24294_24668 = G__24793;
i__24295_24669 = G__24794;
continue;
}
}
} else {
}
}
break;
}


var G__24795 = cljs.core.next(seq__23977__$1);
var G__24796 = null;
var G__24797 = (0);
var G__24798 = (0);
seq__23977 = G__24795;
chunk__23979 = G__24796;
count__23980 = G__24797;
i__23981 = G__24798;
continue;
} else {
var G__24799 = cljs.core.next(seq__23977__$1);
var G__24800 = null;
var G__24801 = (0);
var G__24802 = (0);
seq__23977 = G__24799;
chunk__23979 = G__24800;
count__23980 = G__24801;
i__23981 = G__24802;
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
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__24406){
var map__24407 = p__24406;
var map__24407__$1 = cljs.core.__destructure_map(map__24407);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24407__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
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

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__24419){
var map__24420 = p__24419;
var map__24420__$1 = cljs.core.__destructure_map(map__24420);
var _ = map__24420__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24420__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__24421,done,error){
var map__24422 = p__24421;
var map__24422__$1 = cljs.core.__destructure_map(map__24422);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24422__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__24425,done,error){
var map__24426 = p__24425;
var map__24426__$1 = cljs.core.__destructure_map(map__24426);
var msg = map__24426__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24426__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24426__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24426__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__24427){
var map__24428 = p__24427;
var map__24428__$1 = cljs.core.__destructure_map(map__24428);
var src = map__24428__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24428__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5043__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5043__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__24431 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__24431) : done.call(null,G__24431));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__24432){
var map__24433 = p__24432;
var map__24433__$1 = cljs.core.__destructure_map(map__24433);
var msg__$1 = map__24433__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24433__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e24434){var ex = e24434;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__24435){
var map__24436 = p__24435;
var map__24436__$1 = cljs.core.__destructure_map(map__24436);
var env = map__24436__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24436__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
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
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__24458){
var map__24459 = p__24458;
var map__24459__$1 = cljs.core.__destructure_map(map__24459);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24459__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24459__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
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
}),(function (p__24462){
var map__24463 = p__24462;
var map__24463__$1 = cljs.core.__destructure_map(map__24463);
var svc = map__24463__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24463__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map

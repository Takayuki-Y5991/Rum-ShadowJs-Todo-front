goog.provide('sablono.core');
/**
 * Add an optional attribute argument to a function that returns a element vector.
 */
sablono.core.wrap_attrs = (function sablono$core$wrap_attrs(func){
return (function() { 
var G__24021__delegate = function (args){
if(cljs.core.map_QMARK_(cljs.core.first(args))){
var vec__23714 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,cljs.core.rest(args));
var seq__23715 = cljs.core.seq(vec__23714);
var first__23716 = cljs.core.first(seq__23715);
var seq__23715__$1 = cljs.core.next(seq__23715);
var tag = first__23716;
var body = seq__23715__$1;
if(cljs.core.map_QMARK_(cljs.core.first(body))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.first(body),cljs.core.first(args)], 0))], null),cljs.core.rest(body));
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.first(args)], null),body);
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,args);
}
};
var G__24021 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24023__i = 0, G__24023__a = new Array(arguments.length -  0);
while (G__24023__i < G__24023__a.length) {G__24023__a[G__24023__i] = arguments[G__24023__i + 0]; ++G__24023__i;}
  args = new cljs.core.IndexedSeq(G__24023__a,0,null);
} 
return G__24021__delegate.call(this,args);};
G__24021.cljs$lang$maxFixedArity = 0;
G__24021.cljs$lang$applyTo = (function (arglist__24024){
var args = cljs.core.seq(arglist__24024);
return G__24021__delegate(args);
});
G__24021.cljs$core$IFn$_invoke$arity$variadic = G__24021__delegate;
return G__24021;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__5523__auto__ = (function sablono$core$update_arglists_$_iter__23735(s__23736){
return (new cljs.core.LazySeq(null,(function (){
var s__23736__$1 = s__23736;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__23736__$1);
if(temp__5804__auto__){
var s__23736__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__23736__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__23736__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__23739 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__23738 = (0);
while(true){
if((i__23738 < size__5522__auto__)){
var args = cljs.core._nth(c__5521__auto__,i__23738);
cljs.core.chunk_append(b__23739,cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__24025 = (i__23738 + (1));
i__23738 = G__24025;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__23739),sablono$core$update_arglists_$_iter__23735(cljs.core.chunk_rest(s__23736__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__23739),null);
}
} else {
var args = cljs.core.first(s__23736__$2);
return cljs.core.cons(cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__23735(cljs.core.rest(s__23736__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(arglists);
});
/**
 * Include a list of external stylesheet files.
 */
sablono.core.include_css = (function sablono$core$include_css(var_args){
var args__5775__auto__ = [];
var len__5769__auto___24026 = arguments.length;
var i__5770__auto___24027 = (0);
while(true){
if((i__5770__auto___24027 < len__5769__auto___24026)){
args__5775__auto__.push((arguments[i__5770__auto___24027]));

var G__24028 = (i__5770__auto___24027 + (1));
i__5770__auto___24027 = G__24028;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__5523__auto__ = (function sablono$core$iter__23747(s__23748){
return (new cljs.core.LazySeq(null,(function (){
var s__23748__$1 = s__23748;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__23748__$1);
if(temp__5804__auto__){
var s__23748__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__23748__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__23748__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__23750 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__23749 = (0);
while(true){
if((i__23749 < size__5522__auto__)){
var style = cljs.core._nth(c__5521__auto__,i__23749);
cljs.core.chunk_append(b__23750,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([style], 0)),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__24030 = (i__23749 + (1));
i__23749 = G__24030;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__23750),sablono$core$iter__23747(cljs.core.chunk_rest(s__23748__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__23750),null);
}
} else {
var style = cljs.core.first(s__23748__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([style], 0)),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__23747(cljs.core.rest(s__23748__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(styles);
}));

(sablono.core.include_css.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sablono.core.include_css.cljs$lang$applyTo = (function (seq23746){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq23746));
}));

/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function sablono$core$include_js(src){
return goog.dom.appendChild(goog.dom.getDocument().body,goog.dom.createDom("script",({"src": src})));
});
/**
 * Include Facebook's React JavaScript library.
 */
sablono.core.include_react = (function sablono$core$include_react(){
return sablono.core.include_js("http://fb.me/react-0.12.2.js");
});
/**
 * Wraps some content in a HTML hyperlink with the supplied URL.
 */
sablono.core.link_to23767 = (function sablono$core$link_to23767(var_args){
var args__5775__auto__ = [];
var len__5769__auto___24031 = arguments.length;
var i__5770__auto___24032 = (0);
while(true){
if((i__5770__auto___24032 < len__5769__auto___24031)){
args__5775__auto__.push((arguments[i__5770__auto___24032]));

var G__24033 = (i__5770__auto___24032 + (1));
i__5770__auto___24032 = G__24033;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to23767.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(sablono.core.link_to23767.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([url], 0))], null),content], null);
}));

(sablono.core.link_to23767.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.link_to23767.cljs$lang$applyTo = (function (seq23768){
var G__23769 = cljs.core.first(seq23768);
var seq23768__$1 = cljs.core.next(seq23768);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23769,seq23768__$1);
}));


sablono.core.link_to = sablono.core.wrap_attrs(sablono.core.link_to23767);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to23776 = (function sablono$core$mail_to23776(var_args){
var args__5775__auto__ = [];
var len__5769__auto___24035 = arguments.length;
var i__5770__auto___24036 = (0);
while(true){
if((i__5770__auto___24036 < len__5769__auto___24035)){
args__5775__auto__.push((arguments[i__5770__auto___24036]));

var G__24037 = (i__5770__auto___24036 + (1));
i__5770__auto___24036 = G__24037;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to23776.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(sablono.core.mail_to23776.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__23801){
var vec__23802 = p__23801;
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23802,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),["mailto:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail)].join('')], null),(function (){var or__5045__auto__ = content;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return e_mail;
}
})()], null);
}));

(sablono.core.mail_to23776.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.mail_to23776.cljs$lang$applyTo = (function (seq23779){
var G__23780 = cljs.core.first(seq23779);
var seq23779__$1 = cljs.core.next(seq23779);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23780,seq23779__$1);
}));


sablono.core.mail_to = sablono.core.wrap_attrs(sablono.core.mail_to23776);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list23805 = (function sablono$core$unordered_list23805(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__5523__auto__ = (function sablono$core$unordered_list23805_$_iter__23806(s__23807){
return (new cljs.core.LazySeq(null,(function (){
var s__23807__$1 = s__23807;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__23807__$1);
if(temp__5804__auto__){
var s__23807__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__23807__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__23807__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__23809 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__23808 = (0);
while(true){
if((i__23808 < size__5522__auto__)){
var x = cljs.core._nth(c__5521__auto__,i__23808);
cljs.core.chunk_append(b__23809,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__24039 = (i__23808 + (1));
i__23808 = G__24039;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__23809),sablono$core$unordered_list23805_$_iter__23806(cljs.core.chunk_rest(s__23807__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__23809),null);
}
} else {
var x = cljs.core.first(s__23807__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list23805_$_iter__23806(cljs.core.rest(s__23807__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs(sablono.core.unordered_list23805);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list23817 = (function sablono$core$ordered_list23817(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__5523__auto__ = (function sablono$core$ordered_list23817_$_iter__23818(s__23819){
return (new cljs.core.LazySeq(null,(function (){
var s__23819__$1 = s__23819;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__23819__$1);
if(temp__5804__auto__){
var s__23819__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__23819__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__23819__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__23821 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__23820 = (0);
while(true){
if((i__23820 < size__5522__auto__)){
var x = cljs.core._nth(c__5521__auto__,i__23820);
cljs.core.chunk_append(b__23821,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__24046 = (i__23820 + (1));
i__23820 = G__24046;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__23821),sablono$core$ordered_list23817_$_iter__23818(cljs.core.chunk_rest(s__23819__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__23821),null);
}
} else {
var x = cljs.core.first(s__23819__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list23817_$_iter__23818(cljs.core.rest(s__23819__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs(sablono.core.ordered_list23817);
/**
 * Create an image element.
 */
sablono.core.image23827 = (function sablono$core$image23827(var_args){
var G__23829 = arguments.length;
switch (G__23829) {
case 1:
return sablono.core.image23827.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image23827.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.image23827.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([src], 0))], null)], null);
}));

(sablono.core.image23827.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([src], 0)),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
}));

(sablono.core.image23827.cljs$lang$maxFixedArity = 2);


sablono.core.image = sablono.core.wrap_attrs(sablono.core.image23827);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__23831_SHARP_,p2__23832_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__23831_SHARP_),"[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__23832_SHARP_),"]"].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([name], 0))));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__23834_SHARP_,p2__23835_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__23834_SHARP_),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__23835_SHARP_)].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([name], 0))));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(var_args){
var G__23840 = arguments.length;
switch (G__23840) {
case 2:
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (type,name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null)], null);
}));

(sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (type,name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__5045__auto__ = value;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return undefined;
}
})()], null)], null);
}));

(sablono.core.input_field_STAR_.cljs$lang$maxFixedArity = 3);

/**
 * Creates a color input field.
 */
sablono.core.color_field23842 = (function sablono$core$color_field23842(var_args){
var G__23847 = arguments.length;
switch (G__23847) {
case 1:
return sablono.core.color_field23842.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field23842.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.color_field23842.cljs$core$IFn$_invoke$arity$1 = (function (name__23704__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null)),name__23704__auto__);
}));

(sablono.core.color_field23842.cljs$core$IFn$_invoke$arity$2 = (function (name__23704__auto__,value__23705__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null)),name__23704__auto__,value__23705__auto__);
}));

(sablono.core.color_field23842.cljs$lang$maxFixedArity = 2);


sablono.core.color_field = sablono.core.wrap_attrs(sablono.core.color_field23842);

/**
 * Creates a date input field.
 */
sablono.core.date_field23855 = (function sablono$core$date_field23855(var_args){
var G__23857 = arguments.length;
switch (G__23857) {
case 1:
return sablono.core.date_field23855.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field23855.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.date_field23855.cljs$core$IFn$_invoke$arity$1 = (function (name__23704__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null)),name__23704__auto__);
}));

(sablono.core.date_field23855.cljs$core$IFn$_invoke$arity$2 = (function (name__23704__auto__,value__23705__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null)),name__23704__auto__,value__23705__auto__);
}));

(sablono.core.date_field23855.cljs$lang$maxFixedArity = 2);


sablono.core.date_field = sablono.core.wrap_attrs(sablono.core.date_field23855);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field23860 = (function sablono$core$datetime_field23860(var_args){
var G__23862 = arguments.length;
switch (G__23862) {
case 1:
return sablono.core.datetime_field23860.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field23860.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.datetime_field23860.cljs$core$IFn$_invoke$arity$1 = (function (name__23704__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null)),name__23704__auto__);
}));

(sablono.core.datetime_field23860.cljs$core$IFn$_invoke$arity$2 = (function (name__23704__auto__,value__23705__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null)),name__23704__auto__,value__23705__auto__);
}));

(sablono.core.datetime_field23860.cljs$lang$maxFixedArity = 2);


sablono.core.datetime_field = sablono.core.wrap_attrs(sablono.core.datetime_field23860);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field23863 = (function sablono$core$datetime_local_field23863(var_args){
var G__23868 = arguments.length;
switch (G__23868) {
case 1:
return sablono.core.datetime_local_field23863.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field23863.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.datetime_local_field23863.cljs$core$IFn$_invoke$arity$1 = (function (name__23704__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null)),name__23704__auto__);
}));

(sablono.core.datetime_local_field23863.cljs$core$IFn$_invoke$arity$2 = (function (name__23704__auto__,value__23705__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null)),name__23704__auto__,value__23705__auto__);
}));

(sablono.core.datetime_local_field23863.cljs$lang$maxFixedArity = 2);


sablono.core.datetime_local_field = sablono.core.wrap_attrs(sablono.core.datetime_local_field23863);

/**
 * Creates a email input field.
 */
sablono.core.email_field23869 = (function sablono$core$email_field23869(var_args){
var G__23874 = arguments.length;
switch (G__23874) {
case 1:
return sablono.core.email_field23869.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field23869.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.email_field23869.cljs$core$IFn$_invoke$arity$1 = (function (name__23704__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null)),name__23704__auto__);
}));

(sablono.core.email_field23869.cljs$core$IFn$_invoke$arity$2 = (function (name__23704__auto__,value__23705__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null)),name__23704__auto__,value__23705__auto__);
}));

(sablono.core.email_field23869.cljs$lang$maxFixedArity = 2);


sablono.core.email_field = sablono.core.wrap_attrs(sablono.core.email_field23869);

/**
 * Creates a file input field.
 */
sablono.core.file_field23877 = (function sablono$core$file_field23877(var_args){
var G__23879 = arguments.length;
switch (G__23879) {
case 1:
return sablono.core.file_field23877.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field23877.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.file_field23877.cljs$core$IFn$_invoke$arity$1 = (function (name__23704__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null)),name__23704__auto__);
}));

(sablono.core.file_field23877.cljs$core$IFn$_invoke$arity$2 = (function (name__23704__auto__,value__23705__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null)),name__23704__auto__,value__23705__auto__);
}));

(sablono.core.file_field23877.cljs$lang$maxFixedArity = 2);


sablono.core.file_field = sablono.core.wrap_attrs(sablono.core.file_field23877);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field23882 = (function sablono$core$hidden_field23882(var_args){
var G__23884 = arguments.length;
switch (G__23884) {
case 1:
return sablono.core.hidden_field23882.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field23882.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.hidden_field23882.cljs$core$IFn$_invoke$arity$1 = (function (name__23704__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null)),name__23704__auto__);
}));

(sablono.core.hidden_field23882.cljs$core$IFn$_invoke$arity$2 = (function (name__23704__auto__,value__23705__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null)),name__23704__auto__,value__23705__auto__);
}));

(sablono.core.hidden_field23882.cljs$lang$maxFixedArity = 2);


sablono.core.hidden_field = sablono.core.wrap_attrs(sablono.core.hidden_field23882);

/**
 * Creates a month input field.
 */
sablono.core.month_field23887 = (function sablono$core$month_field23887(var_args){
var G__23889 = arguments.length;
switch (G__23889) {
case 1:
return sablono.core.month_field23887.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field23887.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.month_field23887.cljs$core$IFn$_invoke$arity$1 = (function (name__23704__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null)),name__23704__auto__);
}));

(sablono.core.month_field23887.cljs$core$IFn$_invoke$arity$2 = (function (name__23704__auto__,value__23705__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null)),name__23704__auto__,value__23705__auto__);
}));

(sablono.core.month_field23887.cljs$lang$maxFixedArity = 2);


sablono.core.month_field = sablono.core.wrap_attrs(sablono.core.month_field23887);

/**
 * Creates a number input field.
 */
sablono.core.number_field23890 = (function sablono$core$number_field23890(var_args){
var G__23892 = arguments.length;
switch (G__23892) {
case 1:
return sablono.core.number_field23890.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field23890.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.number_field23890.cljs$core$IFn$_invoke$arity$1 = (function (name__23704__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null)),name__23704__auto__);
}));

(sablono.core.number_field23890.cljs$core$IFn$_invoke$arity$2 = (function (name__23704__auto__,value__23705__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null)),name__23704__auto__,value__23705__auto__);
}));

(sablono.core.number_field23890.cljs$lang$maxFixedArity = 2);


sablono.core.number_field = sablono.core.wrap_attrs(sablono.core.number_field23890);

/**
 * Creates a password input field.
 */
sablono.core.password_field23893 = (function sablono$core$password_field23893(var_args){
var G__23895 = arguments.length;
switch (G__23895) {
case 1:
return sablono.core.password_field23893.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field23893.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.password_field23893.cljs$core$IFn$_invoke$arity$1 = (function (name__23704__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null)),name__23704__auto__);
}));

(sablono.core.password_field23893.cljs$core$IFn$_invoke$arity$2 = (function (name__23704__auto__,value__23705__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null)),name__23704__auto__,value__23705__auto__);
}));

(sablono.core.password_field23893.cljs$lang$maxFixedArity = 2);


sablono.core.password_field = sablono.core.wrap_attrs(sablono.core.password_field23893);

/**
 * Creates a range input field.
 */
sablono.core.range_field23896 = (function sablono$core$range_field23896(var_args){
var G__23898 = arguments.length;
switch (G__23898) {
case 1:
return sablono.core.range_field23896.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field23896.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.range_field23896.cljs$core$IFn$_invoke$arity$1 = (function (name__23704__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null)),name__23704__auto__);
}));

(sablono.core.range_field23896.cljs$core$IFn$_invoke$arity$2 = (function (name__23704__auto__,value__23705__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null)),name__23704__auto__,value__23705__auto__);
}));

(sablono.core.range_field23896.cljs$lang$maxFixedArity = 2);


sablono.core.range_field = sablono.core.wrap_attrs(sablono.core.range_field23896);

/**
 * Creates a search input field.
 */
sablono.core.search_field23899 = (function sablono$core$search_field23899(var_args){
var G__23901 = arguments.length;
switch (G__23901) {
case 1:
return sablono.core.search_field23899.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field23899.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.search_field23899.cljs$core$IFn$_invoke$arity$1 = (function (name__23704__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null)),name__23704__auto__);
}));

(sablono.core.search_field23899.cljs$core$IFn$_invoke$arity$2 = (function (name__23704__auto__,value__23705__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null)),name__23704__auto__,value__23705__auto__);
}));

(sablono.core.search_field23899.cljs$lang$maxFixedArity = 2);


sablono.core.search_field = sablono.core.wrap_attrs(sablono.core.search_field23899);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field23902 = (function sablono$core$tel_field23902(var_args){
var G__23904 = arguments.length;
switch (G__23904) {
case 1:
return sablono.core.tel_field23902.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field23902.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.tel_field23902.cljs$core$IFn$_invoke$arity$1 = (function (name__23704__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null)),name__23704__auto__);
}));

(sablono.core.tel_field23902.cljs$core$IFn$_invoke$arity$2 = (function (name__23704__auto__,value__23705__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null)),name__23704__auto__,value__23705__auto__);
}));

(sablono.core.tel_field23902.cljs$lang$maxFixedArity = 2);


sablono.core.tel_field = sablono.core.wrap_attrs(sablono.core.tel_field23902);

/**
 * Creates a text input field.
 */
sablono.core.text_field23905 = (function sablono$core$text_field23905(var_args){
var G__23911 = arguments.length;
switch (G__23911) {
case 1:
return sablono.core.text_field23905.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field23905.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.text_field23905.cljs$core$IFn$_invoke$arity$1 = (function (name__23704__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null)),name__23704__auto__);
}));

(sablono.core.text_field23905.cljs$core$IFn$_invoke$arity$2 = (function (name__23704__auto__,value__23705__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null)),name__23704__auto__,value__23705__auto__);
}));

(sablono.core.text_field23905.cljs$lang$maxFixedArity = 2);


sablono.core.text_field = sablono.core.wrap_attrs(sablono.core.text_field23905);

/**
 * Creates a time input field.
 */
sablono.core.time_field23914 = (function sablono$core$time_field23914(var_args){
var G__23916 = arguments.length;
switch (G__23916) {
case 1:
return sablono.core.time_field23914.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field23914.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.time_field23914.cljs$core$IFn$_invoke$arity$1 = (function (name__23704__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null)),name__23704__auto__);
}));

(sablono.core.time_field23914.cljs$core$IFn$_invoke$arity$2 = (function (name__23704__auto__,value__23705__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null)),name__23704__auto__,value__23705__auto__);
}));

(sablono.core.time_field23914.cljs$lang$maxFixedArity = 2);


sablono.core.time_field = sablono.core.wrap_attrs(sablono.core.time_field23914);

/**
 * Creates a url input field.
 */
sablono.core.url_field23919 = (function sablono$core$url_field23919(var_args){
var G__23921 = arguments.length;
switch (G__23921) {
case 1:
return sablono.core.url_field23919.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field23919.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.url_field23919.cljs$core$IFn$_invoke$arity$1 = (function (name__23704__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null)),name__23704__auto__);
}));

(sablono.core.url_field23919.cljs$core$IFn$_invoke$arity$2 = (function (name__23704__auto__,value__23705__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null)),name__23704__auto__,value__23705__auto__);
}));

(sablono.core.url_field23919.cljs$lang$maxFixedArity = 2);


sablono.core.url_field = sablono.core.wrap_attrs(sablono.core.url_field23919);

/**
 * Creates a week input field.
 */
sablono.core.week_field23924 = (function sablono$core$week_field23924(var_args){
var G__23926 = arguments.length;
switch (G__23926) {
case 1:
return sablono.core.week_field23924.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field23924.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.week_field23924.cljs$core$IFn$_invoke$arity$1 = (function (name__23704__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null)),name__23704__auto__);
}));

(sablono.core.week_field23924.cljs$core$IFn$_invoke$arity$2 = (function (name__23704__auto__,value__23705__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null)),name__23704__auto__,value__23705__auto__);
}));

(sablono.core.week_field23924.cljs$lang$maxFixedArity = 2);


sablono.core.week_field = sablono.core.wrap_attrs(sablono.core.week_field23924);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box23929 = (function sablono$core$check_box23929(var_args){
var G__23931 = arguments.length;
switch (G__23931) {
case 1:
return sablono.core.check_box23929.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box23929.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box23929.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.check_box23929.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null)], null);
}));

(sablono.core.check_box23929.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.check_box23929.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.check_box23929.cljs$lang$maxFixedArity = 3);


sablono.core.check_box = sablono.core.wrap_attrs(sablono.core.check_box23929);
/**
 * Creates a radio button.
 */
sablono.core.radio_button23936 = (function sablono$core$radio_button23936(var_args){
var G__23938 = arguments.length;
switch (G__23938) {
case 1:
return sablono.core.radio_button23936.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button23936.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button23936.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.radio_button23936.cljs$core$IFn$_invoke$arity$1 = (function (group){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0)))], null)], null);
}));

(sablono.core.radio_button23936.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0))),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.radio_button23936.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id([sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0)),"-",sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value], 0))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.radio_button23936.cljs$lang$maxFixedArity = 3);


sablono.core.radio_button = sablono.core.wrap_attrs(sablono.core.radio_button23936);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x], 0)));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options23949 = (function sablono$core$select_options23949(coll){
var iter__5523__auto__ = (function sablono$core$select_options23949_$_iter__23950(s__23951){
return (new cljs.core.LazySeq(null,(function (){
var s__23951__$1 = s__23951;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__23951__$1);
if(temp__5804__auto__){
var s__23951__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__23951__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__23951__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__23953 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__23952 = (0);
while(true){
if((i__23952 < size__5522__auto__)){
var x = cljs.core._nth(c__5521__auto__,i__23952);
cljs.core.chunk_append(b__23953,((cljs.core.sequential_QMARK_(x))?(function (){var vec__23954 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23954,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23954,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23954,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),(sablono.core.select_options23949.cljs$core$IFn$_invoke$arity$1 ? sablono.core.select_options23949.cljs$core$IFn$_invoke$arity$1(val) : sablono.core.select_options23949.call(null,val))], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__24184 = (i__23952 + (1));
i__23952 = G__24184;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__23953),sablono$core$select_options23949_$_iter__23950(cljs.core.chunk_rest(s__23951__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__23953),null);
}
} else {
var x = cljs.core.first(s__23951__$2);
return cljs.core.cons(((cljs.core.sequential_QMARK_(x))?(function (){var vec__23962 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23962,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23962,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23962,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),(sablono.core.select_options23949.cljs$core$IFn$_invoke$arity$1 ? sablono.core.select_options23949.cljs$core$IFn$_invoke$arity$1(val) : sablono.core.select_options23949.call(null,val))], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options23949_$_iter__23950(cljs.core.rest(s__23951__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(coll);
});

sablono.core.select_options = sablono.core.wrap_attrs(sablono.core.select_options23949);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down23966 = (function sablono$core$drop_down23966(var_args){
var G__23968 = arguments.length;
switch (G__23968) {
case 2:
return sablono.core.drop_down23966.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down23966.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.drop_down23966.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down23966.cljs$core$IFn$_invoke$arity$3(name,options,null);
}));

(sablono.core.drop_down23966.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null),sablono.core.select_options(options,selected)], null);
}));

(sablono.core.drop_down23966.cljs$lang$maxFixedArity = 3);


sablono.core.drop_down = sablono.core.wrap_attrs(sablono.core.drop_down23966);
/**
 * Creates a text area element.
 */
sablono.core.text_area23970 = (function sablono$core$text_area23970(var_args){
var G__23972 = arguments.length;
switch (G__23972) {
case 1:
return sablono.core.text_area23970.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area23970.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.text_area23970.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null)], null);
}));

(sablono.core.text_area23970.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__5045__auto__ = value;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return undefined;
}
})()], null)], null);
}));

(sablono.core.text_area23970.cljs$lang$maxFixedArity = 2);


sablono.core.text_area = sablono.core.wrap_attrs(sablono.core.text_area23970);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label23974 = (function sablono$core$label23974(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id(name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs(sablono.core.label23974);
/**
 * Creates a submit button.
 */
sablono.core.submit_button24000 = (function sablono$core$submit_button24000(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs(sablono.core.submit_button24000);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button24004 = (function sablono$core$reset_button24004(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs(sablono.core.reset_button24004);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to24010 = (function sablono$core$form_to24010(var_args){
var args__5775__auto__ = [];
var len__5769__auto___24198 = arguments.length;
var i__5770__auto___24199 = (0);
while(true){
if((i__5770__auto___24199 < len__5769__auto___24198)){
args__5775__auto__.push((arguments[i__5770__auto___24199]));

var G__24202 = (i__5770__auto___24199 + (1));
i__5770__auto___24199 = G__24202;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to24010.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(sablono.core.form_to24010.cljs$core$IFn$_invoke$arity$variadic = (function (p__24016,body){
var vec__24017 = p__24016;
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24017,(0),null);
var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24017,(1),null);
var method_str = clojure.string.upper_case(cljs.core.name(method));
var action_uri = sablono.util.to_uri(action);
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
}));

(sablono.core.form_to24010.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.form_to24010.cljs$lang$applyTo = (function (seq24014){
var G__24015 = cljs.core.first(seq24014);
var seq24014__$1 = cljs.core.next(seq24014);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24015,seq24014__$1);
}));


sablono.core.form_to = sablono.core.wrap_attrs(sablono.core.form_to24010);

//# sourceMappingURL=sablono.core.js.map

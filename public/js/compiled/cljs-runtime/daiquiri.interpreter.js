goog.provide('daiquiri.interpreter');
goog.scope(function(){
  daiquiri.interpreter.goog$module$goog$object = goog.module.get('goog.object');
});
/**
 * Create a React element. Returns a JavaScript object when running
 *   under ClojureScript, and a om.dom.Element record in Clojure.
 */
daiquiri.interpreter.create_element = (function daiquiri$interpreter$create_element(type,attrs,children){
return React.createElement.apply(null,[type,attrs].concat(children));
});
daiquiri.interpreter.component_attributes = (function daiquiri$interpreter$component_attributes(attrs){
var x = daiquiri.util.camel_case_keys_STAR_(attrs);
var m = ({});
var seq__12028_12061 = cljs.core.seq(x);
var chunk__12029_12062 = null;
var count__12030_12063 = (0);
var i__12031_12064 = (0);
while(true){
if((i__12031_12064 < count__12030_12063)){
var vec__12038_12065 = chunk__12029_12062.cljs$core$IIndexed$_nth$arity$2(null,i__12031_12064);
var k_12066 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12038_12065,(0),null);
var v_12067 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12038_12065,(1),null);
daiquiri.interpreter.goog$module$goog$object.set(m,cljs.core.name(k_12066),v_12067);


var G__12068 = seq__12028_12061;
var G__12069 = chunk__12029_12062;
var G__12070 = count__12030_12063;
var G__12071 = (i__12031_12064 + (1));
seq__12028_12061 = G__12068;
chunk__12029_12062 = G__12069;
count__12030_12063 = G__12070;
i__12031_12064 = G__12071;
continue;
} else {
var temp__5804__auto___12072 = cljs.core.seq(seq__12028_12061);
if(temp__5804__auto___12072){
var seq__12028_12073__$1 = temp__5804__auto___12072;
if(cljs.core.chunked_seq_QMARK_(seq__12028_12073__$1)){
var c__5568__auto___12074 = cljs.core.chunk_first(seq__12028_12073__$1);
var G__12075 = cljs.core.chunk_rest(seq__12028_12073__$1);
var G__12076 = c__5568__auto___12074;
var G__12077 = cljs.core.count(c__5568__auto___12074);
var G__12078 = (0);
seq__12028_12061 = G__12075;
chunk__12029_12062 = G__12076;
count__12030_12063 = G__12077;
i__12031_12064 = G__12078;
continue;
} else {
var vec__12041_12079 = cljs.core.first(seq__12028_12073__$1);
var k_12080 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12041_12079,(0),null);
var v_12081 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12041_12079,(1),null);
daiquiri.interpreter.goog$module$goog$object.set(m,cljs.core.name(k_12080),v_12081);


var G__12082 = cljs.core.next(seq__12028_12073__$1);
var G__12083 = null;
var G__12084 = (0);
var G__12085 = (0);
seq__12028_12061 = G__12082;
chunk__12029_12062 = G__12083;
count__12030_12063 = G__12084;
i__12031_12064 = G__12085;
continue;
}
} else {
}
}
break;
}

return m;
});
daiquiri.interpreter.element_attributes = (function daiquiri$interpreter$element_attributes(attrs){
var temp__5804__auto__ = cljs.core.clj__GT_js(daiquiri.util.html_to_dom_attrs(attrs));
if(cljs.core.truth_(temp__5804__auto__)){
var js_attrs = temp__5804__auto__;
var class$ = js_attrs.className;
var class$__$1 = ((cljs.core.array_QMARK_(class$))?clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",class$):class$);
if(cljs.core.truth_(js_attrs.onChange)){
(js_attrs.onChange = rum.core.mark_sync_update(js_attrs.onChange));
} else {
}

if(clojure.string.blank_QMARK_(class$__$1)){
delete js_attrs["className"];
} else {
(js_attrs.className = class$__$1);
}

return js_attrs;
} else {
return null;
}
});
/**
 * Eagerly interpret the seq `x` as HTML elements.
 */
daiquiri.interpreter.interpret_seq = (function daiquiri$interpreter$interpret_seq(x){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret,x__$1){
ret.push((daiquiri.interpreter.interpret.cljs$core$IFn$_invoke$arity$1 ? daiquiri.interpreter.interpret.cljs$core$IFn$_invoke$arity$1(x__$1) : daiquiri.interpreter.interpret.call(null,x__$1)));

return ret;
}),[],x);
});
/**
 * Render an element vector as a HTML element.
 */
daiquiri.interpreter.element = (function daiquiri$interpreter$element(element){
var vec__12044 = daiquiri.normalize.element(element);
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12044,(0),null);
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12044,(1),null);
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12044,(2),null);
return daiquiri.interpreter.create_element(type,daiquiri.interpreter.element_attributes(attrs),daiquiri.interpreter.interpret_seq(content));
});
daiquiri.interpreter.fragment = (function daiquiri$interpreter$fragment(p__12047){
var vec__12048 = p__12047;
var seq__12049 = cljs.core.seq(vec__12048);
var first__12050 = cljs.core.first(seq__12049);
var seq__12049__$1 = cljs.core.next(seq__12049);
var _ = first__12050;
var first__12050__$1 = cljs.core.first(seq__12049__$1);
var seq__12049__$2 = cljs.core.next(seq__12049__$1);
var attrs = first__12050__$1;
var children = seq__12049__$2;
var vec__12051 = ((cljs.core.map_QMARK_(attrs))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [daiquiri.interpreter.component_attributes(attrs),daiquiri.interpreter.interpret_seq(children)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,daiquiri.interpreter.interpret_seq(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs], null),children))], null));
var attrs__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12051,(0),null);
var children__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12051,(1),null);
return daiquiri.interpreter.create_element(React.Fragment,attrs__$1,children__$1);
});
daiquiri.interpreter.interop = (function daiquiri$interpreter$interop(p__12054){
var vec__12055 = p__12054;
var seq__12056 = cljs.core.seq(vec__12055);
var first__12057 = cljs.core.first(seq__12056);
var seq__12056__$1 = cljs.core.next(seq__12056);
var _ = first__12057;
var first__12057__$1 = cljs.core.first(seq__12056__$1);
var seq__12056__$2 = cljs.core.next(seq__12056__$1);
var component = first__12057__$1;
var first__12057__$2 = cljs.core.first(seq__12056__$2);
var seq__12056__$3 = cljs.core.next(seq__12056__$2);
var attrs = first__12057__$2;
var children = seq__12056__$3;
var vec__12058 = ((cljs.core.map_QMARK_(attrs))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [daiquiri.interpreter.component_attributes(attrs),daiquiri.interpreter.interpret_seq(children)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,daiquiri.interpreter.interpret_seq(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs], null),children))], null));
var attrs__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12058,(0),null);
var children__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12058,(1),null);
return daiquiri.interpreter.create_element(component,attrs__$1,children__$1);
});
/**
 * Interpret the vector `x` as an HTML element or a the children of an
 *   element.
 */
daiquiri.interpreter.interpret_vec = (function daiquiri$interpreter$interpret_vec(x){
if(daiquiri.util.fragment_QMARK_(x)){
return daiquiri.interpreter.fragment(x);
} else {
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword(null,">",">",-555517146),cljs.core.nth.cljs$core$IFn$_invoke$arity$3(x,(0),null))){
return daiquiri.interpreter.interop(x);
} else {
if(daiquiri.util.element_QMARK_(x)){
return daiquiri.interpreter.element(x);
} else {
return daiquiri.interpreter.interpret_seq(x);

}
}
}
});
daiquiri.interpreter.interpret = (function daiquiri$interpreter$interpret(v){
if(cljs.core.vector_QMARK_(v)){
return daiquiri.interpreter.interpret_vec(v);
} else {
if(cljs.core.seq_QMARK_(v)){
return daiquiri.interpreter.interpret_seq(v);
} else {
return v;

}
}
});

//# sourceMappingURL=daiquiri.interpreter.js.map

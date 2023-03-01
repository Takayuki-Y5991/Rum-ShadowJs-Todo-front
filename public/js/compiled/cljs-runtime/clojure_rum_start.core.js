goog.provide('clojure_rum_start.core');
if((typeof clojure_rum_start !== 'undefined') && (typeof clojure_rum_start.core !== 'undefined') && (typeof clojure_rum_start.core.todos !== 'undefined')){
} else {
clojure_rum_start.core.todos = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
clojure_rum_start.core.hello_world = rum.core.lazy_build(rum.core.build_defc,(function (){
rum.core.use_effect_BANG_.cljs$core$IFn$_invoke$arity$2((function (){
clojure_rum_start.client.client.fetch_all(clojure_rum_start.core.todos);

return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.deref(clojure_rum_start.core.todos)], 0));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(clojure_rum_start.core.todos)], null));

return daiquiri.core.create_element("div",null,[daiquiri.core.create_element("div",{'className':"heading"},[daiquiri.core.create_element("h1",null,["MY TODO"])]),clojure_rum_start.part.todoForm.todo_form(clojure_rum_start.core.todos),daiquiri.core.create_element("div",null,[daiquiri.core.create_element("ul",{'style':{'listStyle':"none"},'className':"container"},[cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__5523__auto__ = (function clojure_rum_start$core$iter__14495(s__14496){
return (new cljs.core.LazySeq(null,(function (){
var s__14496__$1 = s__14496;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__14496__$1);
if(temp__5804__auto__){
var s__14496__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__14496__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__14496__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__14498 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__14497 = (0);
while(true){
if((i__14497 < size__5522__auto__)){
var todo = cljs.core._nth(c__5521__auto__,i__14497);
cljs.core.chunk_append(b__14498,clojure_rum_start.part.todoItem.todo_item(todo,clojure_rum_start.core.todos));

var G__14499 = (i__14497 + (1));
i__14497 = G__14499;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__14498),clojure_rum_start$core$iter__14495(cljs.core.chunk_rest(s__14496__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__14498),null);
}
} else {
var todo = cljs.core.first(s__14496__$2);
return cljs.core.cons(clojure_rum_start.part.todoItem.todo_item(todo,clojure_rum_start.core.todos),clojure_rum_start$core$iter__14495(cljs.core.rest(s__14496__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(cljs.core.deref(clojure_rum_start.core.todos));
})())])])]);
}),null,"clojure-rum-start.core/hello-world");
clojure_rum_start.core.start = (function clojure_rum_start$core$start(){
return rum.core.mount(clojure_rum_start.core.hello_world(),document.getElementById("app"));
});
clojure_rum_start.core.init = (function clojure_rum_start$core$init(){
return clojure_rum_start.core.start();
});
goog.exportSymbol('clojure_rum_start.core.init', clojure_rum_start.core.init);
clojure_rum_start.core.stop = (function clojure_rum_start$core$stop(){
return console.log("stop");
});

//# sourceMappingURL=clojure_rum_start.core.js.map

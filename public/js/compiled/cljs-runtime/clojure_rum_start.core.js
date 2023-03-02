goog.provide('clojure_rum_start.core');
clojure_rum_start.core.hello_world = rum.core.lazy_build(rum.core.build_defc,(function (){
var vec__16064 = rum.core.use_state(cljs.core.PersistentVector.EMPTY);
var todos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16064,(0),null);
var set_todos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16064,(1),null);
rum.core.use_effect_BANG_.cljs$core$IFn$_invoke$arity$2((function (){
clojure_rum_start.client.client.fetchAll((function (new_todos){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new_todos,todos)){
return null;
} else {
return (set_todos.cljs$core$IFn$_invoke$arity$1 ? set_todos.cljs$core$IFn$_invoke$arity$1(new_todos) : set_todos.call(null,new_todos));
}
}));

return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([todos], 0));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [todos], null));

return daiquiri.core.create_element("div",null,[daiquiri.core.create_element("div",{'className':"heading"},[daiquiri.core.create_element("h1",null,["MY TODO"])]),clojure_rum_start.part.todoForm.todo_form(todos,set_todos),daiquiri.core.create_element("div",null,[daiquiri.core.create_element("ul",{'style':{'listStyle':"none"},'className':"container"},[cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__5523__auto__ = (function clojure_rum_start$core$iter__16069(s__16070){
return (new cljs.core.LazySeq(null,(function (){
var s__16070__$1 = s__16070;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__16070__$1);
if(temp__5804__auto__){
var s__16070__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__16070__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__16070__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__16072 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__16071 = (0);
while(true){
if((i__16071 < size__5522__auto__)){
var todo = cljs.core._nth(c__5521__auto__,i__16071);
cljs.core.chunk_append(b__16072,clojure_rum_start.part.todoItem.todo_item(todo,todos,set_todos));

var G__16073 = (i__16071 + (1));
i__16071 = G__16073;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16072),clojure_rum_start$core$iter__16069(cljs.core.chunk_rest(s__16070__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16072),null);
}
} else {
var todo = cljs.core.first(s__16070__$2);
return cljs.core.cons(clojure_rum_start.part.todoItem.todo_item(todo,todos,set_todos),clojure_rum_start$core$iter__16069(cljs.core.rest(s__16070__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(todos);
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

goog.provide('clojure_rum_start.part.todoItem');
clojure_rum_start.part.todoItem.updateTodos = (function clojure_rum_start$part$todoItem$updateTodos(todo_id,complete_status,now_todos,set_todos_atom){
var new_todos = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__15929_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__15929_SHARP_),todo_id)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__15929_SHARP_,new cljs.core.Keyword(null,"completed","completed",-486056503),complete_status);
} else {
return p1__15929_SHARP_;
}
}),now_todos);
return (set_todos_atom.cljs$core$IFn$_invoke$arity$1 ? set_todos_atom.cljs$core$IFn$_invoke$arity$1(new_todos) : set_todos_atom.call(null,new_todos));
});
clojure_rum_start.part.todoItem.deleteTodos = (function clojure_rum_start$part$todoItem$deleteTodos(todo_id,now_todos,set_todos_atom){
var new_todos = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__15933_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__15933_SHARP_),todo_id);
}),now_todos);
return (set_todos_atom.cljs$core$IFn$_invoke$arity$1 ? set_todos_atom.cljs$core$IFn$_invoke$arity$1(new_todos) : set_todos_atom.call(null,new_todos));
});
clojure_rum_start.part.todoItem.todo_item = rum.core.lazy_build(rum.core.build_defc,(function (todo,todos_atom,set_todos_atom){
var todo_id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(todo);
var completed_status = new cljs.core.Keyword(null,"completed","completed",-486056503).cljs$core$IFn$_invoke$arity$1(todo);
return daiquiri.core.create_element("li",{'key':todo_id,'style':{'color':(cljs.core.truth_(completed_status)?"green":"red")},'className':"card"},[(function (){var attrs15939 = new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(todo);
return daiquiri.core.create_element("h3",((cljs.core.map_QMARK_(attrs15939))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["todo-content"], null)], null),attrs15939], 0))):{'className':"todo-content"}),((cljs.core.map_QMARK_(attrs15939))?null:[daiquiri.interpreter.interpret(attrs15939)]));
})(),daiquiri.core.create_element("div",{'className':"todo-limit"},["\u671F\u9650 : ",daiquiri.interpreter.interpret(new cljs.core.Keyword(null,"limit_date","limit_date",-1761169423).cljs$core$IFn$_invoke$arity$1(todo))]),daiquiri.core.create_element("div",{'className':"update-button"},[daiquiri.core.create_element("input",{'type':"button",'value':(cljs.core.truth_(completed_status)?"\u5B8C\u4E86":"\u672A\u5B8C\u4E86"),'onClick':(function (){
clojure_rum_start.client.client.updateStatus(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"status","status",-1997798413),cljs.core.not(completed_status)], null),todo_id);

return clojure_rum_start.part.todoItem.updateTodos(todo_id,cljs.core.not(completed_status),todos_atom,set_todos_atom);
})},[]),daiquiri.core.create_element("input",{'type':"button",'value':"\u524A\u9664",'onClick':(function (){
clojure_rum_start.client.client.delete$(todo_id);

return clojure_rum_start.part.todoItem.deleteTodos(todo_id,todos_atom,set_todos_atom);
})},[])])]);
}),null,"clojure-rum-start.part.todoItem/todo-item");

//# sourceMappingURL=clojure_rum_start.part.todoItem.js.map

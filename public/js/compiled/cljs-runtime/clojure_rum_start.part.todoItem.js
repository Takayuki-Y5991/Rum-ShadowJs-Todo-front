goog.provide('clojure_rum_start.part.todoItem');
clojure_rum_start.part.todoItem.remove_todo = (function clojure_rum_start$part$todoItem$remove_todo(todos,todo_id){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__14481_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__14481_SHARP_),todo_id);
}),todos);
});
clojure_rum_start.part.todoItem.todo_item = rum.core.lazy_build(rum.core.build_defc,(function (todo,todos){
var vec__14482 = rum.core.use_state(new cljs.core.Keyword(null,"completed","completed",-486056503).cljs$core$IFn$_invoke$arity$1(todo));
var completed_status = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14482,(0),null);
var is_completed_status_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14482,(1),null);
var todo_id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(todo);
return daiquiri.core.create_element("li",{'key':todo_id,'style':{'color':(cljs.core.truth_(completed_status)?"green":"red")},'className':"card"},[(function (){var attrs14485 = new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(todo);
return daiquiri.core.create_element("h3",((cljs.core.map_QMARK_(attrs14485))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["todo-content"], null)], null),attrs14485], 0))):{'className':"todo-content"}),((cljs.core.map_QMARK_(attrs14485))?null:[daiquiri.interpreter.interpret(attrs14485)]));
})(),daiquiri.core.create_element("div",{'className':"todo-limit"},["\u671F\u9650 : ",daiquiri.interpreter.interpret(new cljs.core.Keyword(null,"limit_date","limit_date",-1761169423).cljs$core$IFn$_invoke$arity$1(todo))]),daiquiri.core.create_element("div",{'className':"update-button"},[daiquiri.core.create_element("input",{'type':"button",'value':(cljs.core.truth_(completed_status)?"\u5B8C\u4E86":"\u672A\u5B8C\u4E86"),'onClick':(function (){
return clojure_rum_start.client.client.update_status(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"status","status",-1997798413),cljs.core.not(completed_status)], null),todo_id);
})},[]),daiquiri.core.create_element("input",{'type':"button",'value':"\u524A\u9664",'onClick':(function (){
return clojure_rum_start.client.client.delete$(todo_id);
})},[])])]);
}),null,"clojure-rum-start.part.todoItem/todo-item");

//# sourceMappingURL=clojure_rum_start.part.todoItem.js.map

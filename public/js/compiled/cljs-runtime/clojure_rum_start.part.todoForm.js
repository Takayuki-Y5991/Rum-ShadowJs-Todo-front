goog.provide('clojure_rum_start.part.todoForm');
clojure_rum_start.part.todoForm.todo_form = rum.core.lazy_build(rum.core.build_defc,(function (todos,set_todos){
var new_todo_atom = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
return daiquiri.core.create_element("div",{'className':"add-content"},[daiquiri.core.create_element("h3",null,["ADD TODO"]),daiquiri.core.create_element("form",{'onSubmit':(function (p1__16051_SHARP_){
p1__16051_SHARP_.preventDefault();

clojure_rum_start.client.client.createTodo(cljs.core.deref(new_todo_atom));

var G__16056_16063 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(todos,cljs.core.deref(new_todo_atom)));
(set_todos.cljs$core$IFn$_invoke$arity$1 ? set_todos.cljs$core$IFn$_invoke$arity$1(G__16056_16063) : set_todos.call(null,G__16056_16063));

return cljs.core.reset_BANG_(new_todo_atom,cljs.core.PersistentArrayMap.EMPTY);
})},[daiquiri.core.create_element("span",{'style':{'margin':"0 20px"}},["TODO\u540D: "]),daiquiri.core.create_element("input",{'type':"text",'value':new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new_todo_atom)),'placeholder':"Add a new item",'onChange':rum.core.mark_sync_update((function (p1__16052_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new_todo_atom,cljs.core.assoc,new cljs.core.Keyword(null,"title","title",636505583),p1__16052_SHARP_.target.value);
}))},[]),daiquiri.core.create_element("span",{'style':{'margin':"0 20px"}},["\u671F\u9650 :"]),daiquiri.core.create_element("input",{'type':"date",'value':new cljs.core.Keyword(null,"limit_date","limit_date",-1761169423).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new_todo_atom)),'onChange':rum.core.mark_sync_update((function (p1__16053_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new_todo_atom,cljs.core.assoc,new cljs.core.Keyword(null,"limit_date","limit_date",-1761169423),p1__16053_SHARP_.target.value);
}))},[]),daiquiri.core.create_element("input",{'type':"submit",'value':"\u767B\u9332",'style':{'margin':"0 20px"}},null)])]);
}),null,"clojure-rum-start.part.todoForm/todo-form");

//# sourceMappingURL=clojure_rum_start.part.todoForm.js.map

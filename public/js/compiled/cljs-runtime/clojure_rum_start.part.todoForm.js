goog.provide('clojure_rum_start.part.todoForm');
clojure_rum_start.part.todoForm.todo_form = rum.core.lazy_build(rum.core.build_defc,(function (todos){
var vec__14231 = rum.core.use_state("");
var task = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14231,(0),null);
var set_task_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14231,(1),null);
var vec__14234 = rum.core.use_state(clojure_rum_start.util.generator.create_date());
var limit = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14234,(0),null);
var set_limit_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14234,(1),null);
return daiquiri.core.create_element("div",{'className':"add-content"},[daiquiri.core.create_element("h3",null,["ADD TODO"]),daiquiri.core.create_element("form",null,[daiquiri.core.create_element("span",{'style':{'margin':"0 20px"}},["TODO\u540D: "]),daiquiri.core.create_element("input",{'type':"text",'value':task,'placeholder':"Add a new item",'onChange':rum.core.mark_sync_update((function (p1__14229_SHARP_){
var G__14243 = p1__14229_SHARP_.target.value;
return (set_task_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_task_BANG_.cljs$core$IFn$_invoke$arity$1(G__14243) : set_task_BANG_.call(null,G__14243));
}))},[]),daiquiri.core.create_element("span",{'style':{'margin':"0 20px"}},["\u671F\u9650 :"]),daiquiri.core.create_element("input",{'type':"date",'value':limit,'onChange':rum.core.mark_sync_update((function (p1__14230_SHARP_){
var G__14244 = p1__14230_SHARP_.target.value;
return (set_limit_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_limit_BANG_.cljs$core$IFn$_invoke$arity$1(G__14244) : set_limit_BANG_.call(null,G__14244));
}))},[]),daiquiri.core.create_element("input",{'type':"submit",'value':"\u767B\u9332",'style':{'margin':"0 20px"},'onClick':(function (e){
e.preventDefault();

var new_todo = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),task,new cljs.core.Keyword(null,"limit_date","limit_date",-1761169423),limit], null);
clojure_rum_start.client.client.create_todo(new_todo);

(set_task_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_task_BANG_.cljs$core$IFn$_invoke$arity$1("") : set_task_BANG_.call(null,""));

var G__14245_14246 = clojure_rum_start.util.generator.create_date();
(set_limit_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_limit_BANG_.cljs$core$IFn$_invoke$arity$1(G__14245_14246) : set_limit_BANG_.call(null,G__14245_14246));

return cljs.core.reset_BANG_(todos,null);
})},[])])]);
}),null,"clojure-rum-start.part.todoForm/todo-form");

//# sourceMappingURL=clojure_rum_start.part.todoForm.js.map

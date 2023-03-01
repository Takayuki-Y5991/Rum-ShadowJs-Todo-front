goog.provide('clojure_rum_start.core');
clojure_rum_start.core.create_date = (function clojure_rum_start$core$create_date(){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).getFullYear()),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).getMonth()),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).getDate())].join('');
});
if((typeof clojure_rum_start !== 'undefined') && (typeof clojure_rum_start.core !== 'undefined') && (typeof clojure_rum_start.core.todos !== 'undefined')){
} else {
clojure_rum_start.core.todos = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
clojure_rum_start.core.format_date = (function clojure_rum_start$core$format_date(date_str){
var temp__5802__auto__ = date_str;
if(cljs.core.truth_(temp__5802__auto__)){
var date_str__$1 = temp__5802__auto__;
var date = (new Date(date_str__$1));
if(cljs.core.not(isNaN(date))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(date.getFullYear()),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1((date.getMonth() + (1))),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(date.getDate())].join('');
} else {
return "invalid date";
}
} else {
return "";
}
});
clojure_rum_start.core.create_todo = (function clojure_rum_start$core$create_todo(todo){
var url = "http://localhost:3000/todo";
var options = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"mode","mode",654403691),"cors",new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Symbol(null,"POST'","POST'",333990036,null),new cljs.core.Keyword(null,"body","body",-2049205669),JSON.stringify(todo),new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.PersistentArrayMap(null, 1, ["Content-Type","application/json"], null)], null);
return fetch(url,options).then((function (p1__12945_SHARP_){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((204),p1__12945_SHARP_.status())){
throw (new Error("Failed to create todo"));
} else {
return null;
}
}));
});
clojure_rum_start.core.update_status = (function clojure_rum_start$core$update_status(todo,id){
var url = ["http://localhost:3000/todo/changeStatus/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join('');
var options = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"mode","mode",654403691),"cors",new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Symbol(null,"PATCH'","PATCH'",1833513300,null),new cljs.core.Keyword(null,"body","body",-2049205669),JSON.stringify(todo),new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.PersistentArrayMap(null, 1, ["Content-Type","application/json"], null)], null);
return fetch(url,options).then((function (p1__12946_SHARP_){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((200),p1__12946_SHARP_.status())){
throw (new Error("Failed to update status todo"));
} else {
return null;
}
}));
});
clojure_rum_start.core.delete$ = (function clojure_rum_start$core$delete(id){
var url = ["http://localhost:3000/todo/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join('');
var options = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"mode","mode",654403691),"cors",new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Symbol(null,"DELETE'","DELETE'",1890334618,null),new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.PersistentArrayMap(null, 1, ["Content-Type","application/json"], null)], null);
return fetch(url,options).then((function (p1__12947_SHARP_){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((204),p1__12947_SHARP_.status())){
throw (new Error("Failed to Delete todo"));
} else {
return null;
}
}));
});
clojure_rum_start.core.remove_todo = (function clojure_rum_start$core$remove_todo(todos,todo_id){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__12948_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__12948_SHARP_),todo_id);
}),todos);
});
clojure_rum_start.core.todo_item = rum.core.lazy_build(rum.core.build_defc,(function (todo){
var vec__12949 = rum.core.use_state(new cljs.core.Keyword(null,"completed","completed",-486056503).cljs$core$IFn$_invoke$arity$1(todo));
var completed_status = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12949,(0),null);
var is_completed_status_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12949,(1),null);
var todo_id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(todo);
return daiquiri.core.create_element("li",{'key':todo_id,'style':{'color':(cljs.core.truth_(completed_status)?"green":"red")},'className':"card"},[(function (){var attrs12952 = new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(todo);
return daiquiri.core.create_element("h3",((cljs.core.map_QMARK_(attrs12952))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["todo-content"], null)], null),attrs12952], 0))):{'className':"todo-content"}),((cljs.core.map_QMARK_(attrs12952))?null:[daiquiri.interpreter.interpret(attrs12952)]));
})(),daiquiri.core.create_element("div",{'className':"todo-limit"},["\u671F\u9650 : ",daiquiri.interpreter.interpret(new cljs.core.Keyword(null,"limit_date","limit_date",-1761169423).cljs$core$IFn$_invoke$arity$1(todo))]),daiquiri.core.create_element("div",{'className':"update-button"},[daiquiri.core.create_element("input",{'type':"button",'value':(cljs.core.truth_(completed_status)?"\u5B8C\u4E86":"\u672A\u5B8C\u4E86"),'onClick':(function (){
return clojure_rum_start.core.update_status(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"status","status",-1997798413),cljs.core.not(completed_status)], null),todo_id);
})},[]),daiquiri.core.create_element("input",{'type':"button",'value':"\u524A\u9664",'onClick':(function (){
return clojure_rum_start.core.delete$(todo_id);
})},[])])]);
}),null,"clojure-rum-start.core/todo-item");
clojure_rum_start.core.todo_form = rum.core.lazy_build(rum.core.build_defc,(function (){
var vec__12955 = rum.core.use_state("");
var task = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12955,(0),null);
var set_task_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12955,(1),null);
var vec__12958 = rum.core.use_state(clojure_rum_start.core.create_date());
var limit = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12958,(0),null);
var set_limit_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12958,(1),null);
return daiquiri.core.create_element("div",{'className':"add-content"},[daiquiri.core.create_element("h3",null,["ADD TODO"]),daiquiri.core.create_element("form",null,[daiquiri.core.create_element("span",{'style':{'margin':"0 20px"}},["TODO\u540D: "]),daiquiri.core.create_element("input",{'type':"text",'value':task,'placeholder':"Add a new item",'onChange':rum.core.mark_sync_update((function (p1__12953_SHARP_){
var G__12967 = p1__12953_SHARP_.target.value;
return (set_task_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_task_BANG_.cljs$core$IFn$_invoke$arity$1(G__12967) : set_task_BANG_.call(null,G__12967));
}))},[]),daiquiri.core.create_element("span",{'style':{'margin':"0 20px"}},["\u671F\u9650 :"]),daiquiri.core.create_element("input",{'type':"date",'value':limit,'onChange':rum.core.mark_sync_update((function (p1__12954_SHARP_){
var G__12968 = p1__12954_SHARP_.target.value;
return (set_limit_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_limit_BANG_.cljs$core$IFn$_invoke$arity$1(G__12968) : set_limit_BANG_.call(null,G__12968));
}))},[]),daiquiri.core.create_element("input",{'type':"submit",'value':"\u767B\u9332",'style':{'margin':"0 20px"},'onClick':(function (e){
e.preventDefault();

var new_todo = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),task,new cljs.core.Keyword(null,"limit_date","limit_date",-1761169423),limit], null);
clojure_rum_start.core.create_todo(new_todo);

(set_task_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_task_BANG_.cljs$core$IFn$_invoke$arity$1("") : set_task_BANG_.call(null,""));

var G__12969 = clojure_rum_start.core.create_date();
return (set_limit_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_limit_BANG_.cljs$core$IFn$_invoke$arity$1(G__12969) : set_limit_BANG_.call(null,G__12969));
})},[])])]);
}),null,"clojure-rum-start.core/todo-form");
clojure_rum_start.core.hello_world = rum.core.lazy_build(rum.core.build_defc,(function (){
rum.core.use_effect_BANG_.cljs$core$IFn$_invoke$arity$2((function (){
return console.log(cljs.core.deref(clojure_rum_start.core.todos));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(clojure_rum_start.core.todos)], null));

return daiquiri.core.create_element("div",null,[daiquiri.core.create_element("div",{'className':"heading"},[daiquiri.core.create_element("h1",null,["MY TODO"])]),clojure_rum_start.core.todo_form(),daiquiri.core.create_element("div",null,[daiquiri.core.create_element("ul",{'style':{'listStyle':"none"},'className':"container"},[cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__5523__auto__ = (function clojure_rum_start$core$iter__12972(s__12973){
return (new cljs.core.LazySeq(null,(function (){
var s__12973__$1 = s__12973;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__12973__$1);
if(temp__5804__auto__){
var s__12973__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__12973__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__12973__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__12975 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__12974 = (0);
while(true){
if((i__12974 < size__5522__auto__)){
var todo = cljs.core._nth(c__5521__auto__,i__12974);
cljs.core.chunk_append(b__12975,clojure_rum_start.core.todo_item(todo));

var G__12977 = (i__12974 + (1));
i__12974 = G__12977;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__12975),clojure_rum_start$core$iter__12972(cljs.core.chunk_rest(s__12973__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__12975),null);
}
} else {
var todo = cljs.core.first(s__12973__$2);
return cljs.core.cons(clojure_rum_start.core.todo_item(todo),clojure_rum_start$core$iter__12972(cljs.core.rest(s__12973__$2)));
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
clojure_rum_start.core.fetchAll = (function clojure_rum_start$core$fetchAll(){
return fetch("http://localhost:3000/todos",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mode","mode",654403691),"cors"], null)).then((function (response){
return response.json();
})).then((function (json){
var clj_json = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(json,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
var todos_with_dates = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__12976_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__12976_SHARP_,new cljs.core.Keyword(null,"limit_date","limit_date",-1761169423),clojure_rum_start.core.format_date(new cljs.core.Keyword(null,"limit_date","limit_date",-1761169423).cljs$core$IFn$_invoke$arity$1(p1__12976_SHARP_)));
}),clj_json);
cljs.core.reset_BANG_(clojure_rum_start.core.todos,todos_with_dates);

return rum.core.mount(clojure_rum_start.core.hello_world(),document.getElementById("app"));
}));
});
clojure_rum_start.core.fetchAll();

//# sourceMappingURL=clojure_rum_start.core.js.map

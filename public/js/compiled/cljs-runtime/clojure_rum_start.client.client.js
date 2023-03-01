goog.provide('clojure_rum_start.client.client');
clojure_rum_start.client.client.create_todo = (function clojure_rum_start$client$client$create_todo(todo){
var url = "http://localhost:3000/todo";
var options = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"mode","mode",654403691),"cors",new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"body","body",-2049205669),JSON.stringify(cljs.core.clj__GT_js(todo)),new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.PersistentArrayMap(null, 1, ["Content-Type","application/json"], null)], null);
return fetch(url,cljs.core.clj__GT_js(options)).catch((function (p1__15265_SHARP_){
return clojure_rum_start.util.common.error_handler(p1__15265_SHARP_);
}));
});
clojure_rum_start.client.client.update_status = (function clojure_rum_start$client$client$update_status(todo,id){
var url = ["http://localhost:3000/todo/changeStatus/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join('');
var options = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"mode","mode",654403691),"cors",new cljs.core.Keyword(null,"method","method",55703592),"PATCH",new cljs.core.Keyword(null,"body","body",-2049205669),JSON.stringify(cljs.core.clj__GT_js(todo)),new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.PersistentArrayMap(null, 1, ["Content-Type","application/json"], null)], null);
return fetch(url,cljs.core.clj__GT_js(options)).catch((function (p1__15266_SHARP_){
return clojure_rum_start.util.common.error_handler(p1__15266_SHARP_);
}));
});
clojure_rum_start.client.client.delete$ = (function clojure_rum_start$client$client$delete(id){
var url = ["http://localhost:3000/todo/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join('');
var options = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"mode","mode",654403691),"cors",new cljs.core.Keyword(null,"method","method",55703592),"DELETE",new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.PersistentArrayMap(null, 1, ["Content-Type","application/json"], null)], null);
return fetch(url,cljs.core.clj__GT_js(options)).catch((function (p1__15267_SHARP_){
return clojure_rum_start.util.common.error_handler(p1__15267_SHARP_);
}));
});
clojure_rum_start.client.client.fetch_all = (function clojure_rum_start$client$client$fetch_all(todos){
return fetch("http://localhost:3000/todos",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mode","mode",654403691),"cors",new cljs.core.Keyword(null,"method","method",55703592),"GET"], null)).then((function (response){
return response.json();
})).then((function (json){
var clj_json = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(json,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
var todos_with_dates = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__15268_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__15268_SHARP_,new cljs.core.Keyword(null,"limit_date","limit_date",-1761169423),clojure_rum_start.util.parser.format_date(new cljs.core.Keyword(null,"limit_date","limit_date",-1761169423).cljs$core$IFn$_invoke$arity$1(p1__15268_SHARP_)));
}),clj_json);
return cljs.core.reset_BANG_(todos,todos_with_dates);
}));
});

//# sourceMappingURL=clojure_rum_start.client.client.js.map

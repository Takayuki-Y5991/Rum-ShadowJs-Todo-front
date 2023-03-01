goog.provide('clojure_rum_start.util.parser');
clojure_rum_start.util.parser.format_date = (function clojure_rum_start$util$parser$format_date(date_str){
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

//# sourceMappingURL=clojure_rum_start.util.parser.js.map

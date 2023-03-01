goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__20319){
var map__20321 = p__20319;
var map__20321__$1 = cljs.core.__destructure_map(map__20321);
var m = map__20321__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20321__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20321__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__5045__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return [(function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__20329_20697 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__20330_20698 = null;
var count__20331_20699 = (0);
var i__20332_20700 = (0);
while(true){
if((i__20332_20700 < count__20331_20699)){
var f_20702 = chunk__20330_20698.cljs$core$IIndexed$_nth$arity$2(null,i__20332_20700);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_20702], 0));


var G__20703 = seq__20329_20697;
var G__20704 = chunk__20330_20698;
var G__20705 = count__20331_20699;
var G__20706 = (i__20332_20700 + (1));
seq__20329_20697 = G__20703;
chunk__20330_20698 = G__20704;
count__20331_20699 = G__20705;
i__20332_20700 = G__20706;
continue;
} else {
var temp__5804__auto___20707 = cljs.core.seq(seq__20329_20697);
if(temp__5804__auto___20707){
var seq__20329_20709__$1 = temp__5804__auto___20707;
if(cljs.core.chunked_seq_QMARK_(seq__20329_20709__$1)){
var c__5568__auto___20710 = cljs.core.chunk_first(seq__20329_20709__$1);
var G__20711 = cljs.core.chunk_rest(seq__20329_20709__$1);
var G__20712 = c__5568__auto___20710;
var G__20713 = cljs.core.count(c__5568__auto___20710);
var G__20714 = (0);
seq__20329_20697 = G__20711;
chunk__20330_20698 = G__20712;
count__20331_20699 = G__20713;
i__20332_20700 = G__20714;
continue;
} else {
var f_20715 = cljs.core.first(seq__20329_20709__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_20715], 0));


var G__20717 = cljs.core.next(seq__20329_20709__$1);
var G__20718 = null;
var G__20719 = (0);
var G__20720 = (0);
seq__20329_20697 = G__20717;
chunk__20330_20698 = G__20718;
count__20331_20699 = G__20719;
i__20332_20700 = G__20720;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_20721 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_20721], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_20721)))?cljs.core.second(arglists_20721):arglists_20721)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__20345_20726 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__20346_20727 = null;
var count__20347_20728 = (0);
var i__20348_20729 = (0);
while(true){
if((i__20348_20729 < count__20347_20728)){
var vec__20365_20731 = chunk__20346_20727.cljs$core$IIndexed$_nth$arity$2(null,i__20348_20729);
var name_20732 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20365_20731,(0),null);
var map__20368_20733 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20365_20731,(1),null);
var map__20368_20734__$1 = cljs.core.__destructure_map(map__20368_20733);
var doc_20735 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20368_20734__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_20736 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20368_20734__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_20732], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_20736], 0));

if(cljs.core.truth_(doc_20735)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_20735], 0));
} else {
}


var G__20739 = seq__20345_20726;
var G__20740 = chunk__20346_20727;
var G__20741 = count__20347_20728;
var G__20742 = (i__20348_20729 + (1));
seq__20345_20726 = G__20739;
chunk__20346_20727 = G__20740;
count__20347_20728 = G__20741;
i__20348_20729 = G__20742;
continue;
} else {
var temp__5804__auto___20744 = cljs.core.seq(seq__20345_20726);
if(temp__5804__auto___20744){
var seq__20345_20745__$1 = temp__5804__auto___20744;
if(cljs.core.chunked_seq_QMARK_(seq__20345_20745__$1)){
var c__5568__auto___20746 = cljs.core.chunk_first(seq__20345_20745__$1);
var G__20747 = cljs.core.chunk_rest(seq__20345_20745__$1);
var G__20749 = c__5568__auto___20746;
var G__20750 = cljs.core.count(c__5568__auto___20746);
var G__20751 = (0);
seq__20345_20726 = G__20747;
chunk__20346_20727 = G__20749;
count__20347_20728 = G__20750;
i__20348_20729 = G__20751;
continue;
} else {
var vec__20370_20752 = cljs.core.first(seq__20345_20745__$1);
var name_20753 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20370_20752,(0),null);
var map__20373_20754 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20370_20752,(1),null);
var map__20373_20755__$1 = cljs.core.__destructure_map(map__20373_20754);
var doc_20756 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20373_20755__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_20757 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20373_20755__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_20753], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_20757], 0));

if(cljs.core.truth_(doc_20756)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_20756], 0));
} else {
}


var G__20759 = cljs.core.next(seq__20345_20745__$1);
var G__20760 = null;
var G__20761 = (0);
var G__20762 = (0);
seq__20345_20726 = G__20759;
chunk__20346_20727 = G__20760;
count__20347_20728 = G__20761;
i__20348_20729 = G__20762;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5804__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5804__auto__)){
var fnspec = temp__5804__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__20396 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__20397 = null;
var count__20398 = (0);
var i__20399 = (0);
while(true){
if((i__20399 < count__20398)){
var role = chunk__20397.cljs$core$IIndexed$_nth$arity$2(null,i__20399);
var temp__5804__auto___20765__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___20765__$1)){
var spec_20769 = temp__5804__auto___20765__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_20769)], 0));
} else {
}


var G__20772 = seq__20396;
var G__20773 = chunk__20397;
var G__20774 = count__20398;
var G__20775 = (i__20399 + (1));
seq__20396 = G__20772;
chunk__20397 = G__20773;
count__20398 = G__20774;
i__20399 = G__20775;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq(seq__20396);
if(temp__5804__auto____$1){
var seq__20396__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__20396__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__20396__$1);
var G__20776 = cljs.core.chunk_rest(seq__20396__$1);
var G__20777 = c__5568__auto__;
var G__20778 = cljs.core.count(c__5568__auto__);
var G__20779 = (0);
seq__20396 = G__20776;
chunk__20397 = G__20777;
count__20398 = G__20778;
i__20399 = G__20779;
continue;
} else {
var role = cljs.core.first(seq__20396__$1);
var temp__5804__auto___20781__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___20781__$2)){
var spec_20783 = temp__5804__auto___20781__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_20783)], 0));
} else {
}


var G__20784 = cljs.core.next(seq__20396__$1);
var G__20785 = null;
var G__20786 = (0);
var G__20787 = (0);
seq__20396 = G__20784;
chunk__20397 = G__20785;
count__20398 = G__20786;
i__20399 = G__20787;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5804__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5804__auto__)){
var msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5804__auto__)){
var ed = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__20791 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__20792 = cljs.core.ex_cause(t);
via = G__20791;
t = G__20792;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5804__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5804__auto__)){
var root_msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5804__auto__)){
var data = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5804__auto__)){
var phase = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__20557 = datafied_throwable;
var map__20557__$1 = cljs.core.__destructure_map(map__20557);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20557__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20557__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__20557__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__20558 = cljs.core.last(via);
var map__20558__$1 = cljs.core.__destructure_map(map__20558);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20558__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20558__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20558__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__20559 = data;
var map__20559__$1 = cljs.core.__destructure_map(map__20559);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20559__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20559__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20559__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__20560 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__20560__$1 = cljs.core.__destructure_map(map__20560);
var top_data = map__20560__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20560__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__20571 = phase;
var G__20571__$1 = (((G__20571 instanceof cljs.core.Keyword))?G__20571.fqn:null);
switch (G__20571__$1) {
case "read-source":
var map__20572 = data;
var map__20572__$1 = cljs.core.__destructure_map(map__20572);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20572__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20572__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__20573 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__20573__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20573,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__20573);
var G__20573__$2 = (cljs.core.truth_((function (){var fexpr__20574 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__20574.cljs$core$IFn$_invoke$arity$1 ? fexpr__20574.cljs$core$IFn$_invoke$arity$1(source) : fexpr__20574.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__20573__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__20573__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20573__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__20573__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__20575 = top_data;
var G__20575__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20575,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__20575);
var G__20575__$2 = (cljs.core.truth_((function (){var fexpr__20576 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__20576.cljs$core$IFn$_invoke$arity$1 ? fexpr__20576.cljs$core$IFn$_invoke$arity$1(source) : fexpr__20576.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__20575__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__20575__$1);
var G__20575__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20575__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__20575__$2);
var G__20575__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20575__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__20575__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20575__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__20575__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__20578 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20578,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20578,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20578,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20578,(3),null);
var G__20582 = top_data;
var G__20582__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20582,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__20582);
var G__20582__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20582__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__20582__$1);
var G__20582__$3 = (cljs.core.truth_((function (){var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20582__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__20582__$2);
var G__20582__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20582__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__20582__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20582__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__20582__$4;
}

break;
case "execution":
var vec__20593 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20593,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20593,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20593,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20593,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__20510_SHARP_){
var or__5045__auto__ = (p1__20510_SHARP_ == null);
if(or__5045__auto__){
return or__5045__auto__;
} else {
var fexpr__20598 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__20598.cljs$core$IFn$_invoke$arity$1 ? fexpr__20598.cljs$core$IFn$_invoke$arity$1(p1__20510_SHARP_) : fexpr__20598.call(null,p1__20510_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5045__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return line;
}
})();
var G__20600 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__20600__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20600,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__20600);
var G__20600__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20600__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__20600__$1);
var G__20600__$3 = (cljs.core.truth_((function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20600__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__20600__$2);
var G__20600__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20600__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__20600__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20600__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__20600__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__20571__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__20614){
var map__20616 = p__20614;
var map__20616__$1 = cljs.core.__destructure_map(map__20616);
var triage_data = map__20616__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20616__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20616__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20616__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20616__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20616__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20616__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20616__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20616__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = source;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = line;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__5045__auto__ = class$;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__20628 = phase;
var G__20628__$1 = (((G__20628 instanceof cljs.core.Keyword))?G__20628.fqn:null);
switch (G__20628__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__20631 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__20632 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__20633 = loc;
var G__20634 = (cljs.core.truth_(spec)?(function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__20635_20854 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__20636_20855 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__20637_20856 = true;
var _STAR_print_fn_STAR__temp_val__20638_20857 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__20637_20856);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__20638_20857);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__20611_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__20611_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__20636_20855);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__20635_20854);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__20631,G__20632,G__20633,G__20634) : format.call(null,G__20631,G__20632,G__20633,G__20634));

break;
case "macroexpansion":
var G__20642 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__20643 = cause_type;
var G__20644 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__20645 = loc;
var G__20646 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__20642,G__20643,G__20644,G__20645,G__20646) : format.call(null,G__20642,G__20643,G__20644,G__20645,G__20646));

break;
case "compile-syntax-check":
var G__20648 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__20649 = cause_type;
var G__20650 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__20651 = loc;
var G__20652 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__20648,G__20649,G__20650,G__20651,G__20652) : format.call(null,G__20648,G__20649,G__20650,G__20651,G__20652));

break;
case "compilation":
var G__20654 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__20655 = cause_type;
var G__20656 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__20657 = loc;
var G__20658 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__20654,G__20655,G__20656,G__20657,G__20658) : format.call(null,G__20654,G__20655,G__20656,G__20657,G__20658));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__20661 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__20662 = symbol;
var G__20663 = loc;
var G__20664 = (function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__20667_20877 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__20668_20878 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__20669_20879 = true;
var _STAR_print_fn_STAR__temp_val__20670_20880 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__20669_20879);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__20670_20880);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__20613_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__20613_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__20668_20878);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__20667_20877);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__20661,G__20662,G__20663,G__20664) : format.call(null,G__20661,G__20662,G__20663,G__20664));
} else {
var G__20675 = "Execution error%s at %s(%s).\n%s\n";
var G__20676 = cause_type;
var G__20677 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__20678 = loc;
var G__20679 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__20675,G__20676,G__20677,G__20678,G__20679) : format.call(null,G__20675,G__20676,G__20677,G__20678,G__20679));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__20628__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map

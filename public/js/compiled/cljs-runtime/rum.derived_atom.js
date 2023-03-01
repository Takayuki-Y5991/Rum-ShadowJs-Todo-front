goog.provide('rum.derived_atom');
rum.derived_atom.derived_atom = (function rum$derived_atom$derived_atom(var_args){
var G__11949 = arguments.length;
switch (G__11949) {
case 3:
return rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$3 = (function (refs,key,f){
return rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$4(refs,key,f,cljs.core.PersistentArrayMap.EMPTY);
}));

(rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$4 = (function (refs,key,f,opts){
var map__11957 = opts;
var map__11957__$1 = cljs.core.__destructure_map(map__11957);
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11957__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
var check_equals_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__11957__$1,new cljs.core.Keyword(null,"check-equals?","check-equals?",-2005755315),true);
var recalc = (function (){var G__11959 = cljs.core.count(refs);
switch (G__11959) {
case (1):
var vec__11961 = refs;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11961,(0),null);
return (function (){
var G__11964 = cljs.core.deref(a);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__11964) : f.call(null,G__11964));
});

break;
case (2):
var vec__11965 = refs;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11965,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11965,(1),null);
return (function (){
var G__11969 = cljs.core.deref(a);
var G__11970 = cljs.core.deref(b);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__11969,G__11970) : f.call(null,G__11969,G__11970));
});

break;
case (3):
var vec__11971 = refs;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11971,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11971,(1),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11971,(2),null);
return (function (){
var G__11974 = cljs.core.deref(a);
var G__11975 = cljs.core.deref(b);
var G__11976 = cljs.core.deref(c);
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__11974,G__11975,G__11976) : f.call(null,G__11974,G__11975,G__11976));
});

break;
default:
return (function (){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.deref,refs));
});

}
})();
var sink = (cljs.core.truth_(ref)?(function (){var G__11977 = ref;
cljs.core.reset_BANG_(G__11977,(recalc.cljs$core$IFn$_invoke$arity$0 ? recalc.cljs$core$IFn$_invoke$arity$0() : recalc.call(null)));

return G__11977;
})():cljs.core.atom.cljs$core$IFn$_invoke$arity$1((recalc.cljs$core$IFn$_invoke$arity$0 ? recalc.cljs$core$IFn$_invoke$arity$0() : recalc.call(null))));
var watch = (cljs.core.truth_(check_equals_QMARK_)?(function (_,___$1,___$2,___$3){
var new_val = (recalc.cljs$core$IFn$_invoke$arity$0 ? recalc.cljs$core$IFn$_invoke$arity$0() : recalc.call(null));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(sink),new_val)){
return cljs.core.reset_BANG_(sink,new_val);
} else {
return null;
}
}):(function (_,___$1,___$2,___$3){
return cljs.core.reset_BANG_(sink,(recalc.cljs$core$IFn$_invoke$arity$0 ? recalc.cljs$core$IFn$_invoke$arity$0() : recalc.call(null)));
}));
var seq__11978_11985 = cljs.core.seq(refs);
var chunk__11979_11986 = null;
var count__11980_11987 = (0);
var i__11981_11988 = (0);
while(true){
if((i__11981_11988 < count__11980_11987)){
var ref_11989__$1 = chunk__11979_11986.cljs$core$IIndexed$_nth$arity$2(null,i__11981_11988);
cljs.core.add_watch(ref_11989__$1,key,watch);


var G__11990 = seq__11978_11985;
var G__11991 = chunk__11979_11986;
var G__11992 = count__11980_11987;
var G__11993 = (i__11981_11988 + (1));
seq__11978_11985 = G__11990;
chunk__11979_11986 = G__11991;
count__11980_11987 = G__11992;
i__11981_11988 = G__11993;
continue;
} else {
var temp__5804__auto___11994 = cljs.core.seq(seq__11978_11985);
if(temp__5804__auto___11994){
var seq__11978_11995__$1 = temp__5804__auto___11994;
if(cljs.core.chunked_seq_QMARK_(seq__11978_11995__$1)){
var c__5568__auto___11996 = cljs.core.chunk_first(seq__11978_11995__$1);
var G__11997 = cljs.core.chunk_rest(seq__11978_11995__$1);
var G__11998 = c__5568__auto___11996;
var G__11999 = cljs.core.count(c__5568__auto___11996);
var G__12000 = (0);
seq__11978_11985 = G__11997;
chunk__11979_11986 = G__11998;
count__11980_11987 = G__11999;
i__11981_11988 = G__12000;
continue;
} else {
var ref_12001__$1 = cljs.core.first(seq__11978_11995__$1);
cljs.core.add_watch(ref_12001__$1,key,watch);


var G__12002 = cljs.core.next(seq__11978_11995__$1);
var G__12003 = null;
var G__12004 = (0);
var G__12005 = (0);
seq__11978_11985 = G__12002;
chunk__11979_11986 = G__12003;
count__11980_11987 = G__12004;
i__11981_11988 = G__12005;
continue;
}
} else {
}
}
break;
}

return sink;
}));

(rum.derived_atom.derived_atom.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=rum.derived_atom.js.map

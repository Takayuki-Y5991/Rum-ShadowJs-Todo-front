goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_20989 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_20989(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_20997 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_20997(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__19961 = coll;
var G__19962 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__19961,G__19962) : shadow.dom.lazy_native_coll_seq.call(null,G__19961,G__19962));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__5045__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__19989 = arguments.length;
switch (G__19989) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__19999 = arguments.length;
switch (G__19999) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__20005 = arguments.length;
switch (G__20005) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__20009 = arguments.length;
switch (G__20009) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__20034 = arguments.length;
switch (G__20034) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__20048 = arguments.length;
switch (G__20048) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__5045__auto__ = (!((typeof document !== 'undefined')));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e20056){if((e20056 instanceof Object)){
var e = e20056;
return console.log("didnt support attachEvent",el,e);
} else {
throw e20056;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__5045__auto__ = (!((typeof document !== 'undefined')));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__20068 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__20069 = null;
var count__20070 = (0);
var i__20071 = (0);
while(true){
if((i__20071 < count__20070)){
var el = chunk__20069.cljs$core$IIndexed$_nth$arity$2(null,i__20071);
var handler_21030__$1 = ((function (seq__20068,chunk__20069,count__20070,i__20071,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__20068,chunk__20069,count__20070,i__20071,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_21030__$1);


var G__21032 = seq__20068;
var G__21033 = chunk__20069;
var G__21035 = count__20070;
var G__21036 = (i__20071 + (1));
seq__20068 = G__21032;
chunk__20069 = G__21033;
count__20070 = G__21035;
i__20071 = G__21036;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20068);
if(temp__5804__auto__){
var seq__20068__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20068__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__20068__$1);
var G__21037 = cljs.core.chunk_rest(seq__20068__$1);
var G__21038 = c__5568__auto__;
var G__21039 = cljs.core.count(c__5568__auto__);
var G__21040 = (0);
seq__20068 = G__21037;
chunk__20069 = G__21038;
count__20070 = G__21039;
i__20071 = G__21040;
continue;
} else {
var el = cljs.core.first(seq__20068__$1);
var handler_21043__$1 = ((function (seq__20068,chunk__20069,count__20070,i__20071,el,seq__20068__$1,temp__5804__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__20068,chunk__20069,count__20070,i__20071,el,seq__20068__$1,temp__5804__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_21043__$1);


var G__21046 = cljs.core.next(seq__20068__$1);
var G__21047 = null;
var G__21048 = (0);
var G__21049 = (0);
seq__20068 = G__21046;
chunk__20069 = G__21047;
count__20070 = G__21048;
i__20071 = G__21049;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__20083 = arguments.length;
switch (G__20083) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__20087 = cljs.core.seq(events);
var chunk__20088 = null;
var count__20089 = (0);
var i__20090 = (0);
while(true){
if((i__20090 < count__20089)){
var vec__20104 = chunk__20088.cljs$core$IIndexed$_nth$arity$2(null,i__20090);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20104,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20104,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__21059 = seq__20087;
var G__21060 = chunk__20088;
var G__21061 = count__20089;
var G__21062 = (i__20090 + (1));
seq__20087 = G__21059;
chunk__20088 = G__21060;
count__20089 = G__21061;
i__20090 = G__21062;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20087);
if(temp__5804__auto__){
var seq__20087__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20087__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__20087__$1);
var G__21063 = cljs.core.chunk_rest(seq__20087__$1);
var G__21064 = c__5568__auto__;
var G__21065 = cljs.core.count(c__5568__auto__);
var G__21066 = (0);
seq__20087 = G__21063;
chunk__20088 = G__21064;
count__20089 = G__21065;
i__20090 = G__21066;
continue;
} else {
var vec__20111 = cljs.core.first(seq__20087__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20111,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20111,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__21067 = cljs.core.next(seq__20087__$1);
var G__21068 = null;
var G__21069 = (0);
var G__21070 = (0);
seq__20087 = G__21067;
chunk__20088 = G__21068;
count__20089 = G__21069;
i__20090 = G__21070;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__20117 = cljs.core.seq(styles);
var chunk__20118 = null;
var count__20119 = (0);
var i__20120 = (0);
while(true){
if((i__20120 < count__20119)){
var vec__20134 = chunk__20118.cljs$core$IIndexed$_nth$arity$2(null,i__20120);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20134,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20134,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__21071 = seq__20117;
var G__21072 = chunk__20118;
var G__21073 = count__20119;
var G__21074 = (i__20120 + (1));
seq__20117 = G__21071;
chunk__20118 = G__21072;
count__20119 = G__21073;
i__20120 = G__21074;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20117);
if(temp__5804__auto__){
var seq__20117__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20117__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__20117__$1);
var G__21075 = cljs.core.chunk_rest(seq__20117__$1);
var G__21076 = c__5568__auto__;
var G__21077 = cljs.core.count(c__5568__auto__);
var G__21078 = (0);
seq__20117 = G__21075;
chunk__20118 = G__21076;
count__20119 = G__21077;
i__20120 = G__21078;
continue;
} else {
var vec__20140 = cljs.core.first(seq__20117__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20140,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20140,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__21079 = cljs.core.next(seq__20117__$1);
var G__21080 = null;
var G__21081 = (0);
var G__21082 = (0);
seq__20117 = G__21079;
chunk__20118 = G__21080;
count__20119 = G__21081;
i__20120 = G__21082;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__20150_21083 = key;
var G__20150_21084__$1 = (((G__20150_21083 instanceof cljs.core.Keyword))?G__20150_21083.fqn:null);
switch (G__20150_21084__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_21087 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5045__auto__ = goog.string.startsWith(ks_21087,"data-");
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return goog.string.startsWith(ks_21087,"aria-");
}
})())){
el.setAttribute(ks_21087,value);
} else {
(el[ks_21087] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__20181){
var map__20182 = p__20181;
var map__20182__$1 = cljs.core.__destructure_map(map__20182);
var props = map__20182__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20182__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__20183 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20183,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20183,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20183,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__20188 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__20188,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__20188;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__20193 = arguments.length;
switch (G__20193) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__20200){
var vec__20202 = p__20200;
var seq__20203 = cljs.core.seq(vec__20202);
var first__20204 = cljs.core.first(seq__20203);
var seq__20203__$1 = cljs.core.next(seq__20203);
var nn = first__20204;
var first__20204__$1 = cljs.core.first(seq__20203__$1);
var seq__20203__$2 = cljs.core.next(seq__20203__$1);
var np = first__20204__$1;
var nc = seq__20203__$2;
var node = vec__20202;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__20207 = nn;
var G__20208 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__20207,G__20208) : create_fn.call(null,G__20207,G__20208));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__20209 = nn;
var G__20210 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__20209,G__20210) : create_fn.call(null,G__20209,G__20210));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__20211 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20211,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20211,(1),null);
var seq__20214_21090 = cljs.core.seq(node_children);
var chunk__20215_21091 = null;
var count__20216_21092 = (0);
var i__20217_21093 = (0);
while(true){
if((i__20217_21093 < count__20216_21092)){
var child_struct_21094 = chunk__20215_21091.cljs$core$IIndexed$_nth$arity$2(null,i__20217_21093);
var children_21095 = shadow.dom.dom_node(child_struct_21094);
if(cljs.core.seq_QMARK_(children_21095)){
var seq__20253_21096 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_21095));
var chunk__20255_21097 = null;
var count__20256_21098 = (0);
var i__20257_21099 = (0);
while(true){
if((i__20257_21099 < count__20256_21098)){
var child_21100 = chunk__20255_21097.cljs$core$IIndexed$_nth$arity$2(null,i__20257_21099);
if(cljs.core.truth_(child_21100)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_21100);


var G__21101 = seq__20253_21096;
var G__21102 = chunk__20255_21097;
var G__21103 = count__20256_21098;
var G__21104 = (i__20257_21099 + (1));
seq__20253_21096 = G__21101;
chunk__20255_21097 = G__21102;
count__20256_21098 = G__21103;
i__20257_21099 = G__21104;
continue;
} else {
var G__21105 = seq__20253_21096;
var G__21106 = chunk__20255_21097;
var G__21107 = count__20256_21098;
var G__21108 = (i__20257_21099 + (1));
seq__20253_21096 = G__21105;
chunk__20255_21097 = G__21106;
count__20256_21098 = G__21107;
i__20257_21099 = G__21108;
continue;
}
} else {
var temp__5804__auto___21109 = cljs.core.seq(seq__20253_21096);
if(temp__5804__auto___21109){
var seq__20253_21110__$1 = temp__5804__auto___21109;
if(cljs.core.chunked_seq_QMARK_(seq__20253_21110__$1)){
var c__5568__auto___21111 = cljs.core.chunk_first(seq__20253_21110__$1);
var G__21112 = cljs.core.chunk_rest(seq__20253_21110__$1);
var G__21113 = c__5568__auto___21111;
var G__21114 = cljs.core.count(c__5568__auto___21111);
var G__21115 = (0);
seq__20253_21096 = G__21112;
chunk__20255_21097 = G__21113;
count__20256_21098 = G__21114;
i__20257_21099 = G__21115;
continue;
} else {
var child_21116 = cljs.core.first(seq__20253_21110__$1);
if(cljs.core.truth_(child_21116)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_21116);


var G__21117 = cljs.core.next(seq__20253_21110__$1);
var G__21118 = null;
var G__21119 = (0);
var G__21120 = (0);
seq__20253_21096 = G__21117;
chunk__20255_21097 = G__21118;
count__20256_21098 = G__21119;
i__20257_21099 = G__21120;
continue;
} else {
var G__21121 = cljs.core.next(seq__20253_21110__$1);
var G__21122 = null;
var G__21123 = (0);
var G__21124 = (0);
seq__20253_21096 = G__21121;
chunk__20255_21097 = G__21122;
count__20256_21098 = G__21123;
i__20257_21099 = G__21124;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_21095);
}


var G__21125 = seq__20214_21090;
var G__21126 = chunk__20215_21091;
var G__21127 = count__20216_21092;
var G__21128 = (i__20217_21093 + (1));
seq__20214_21090 = G__21125;
chunk__20215_21091 = G__21126;
count__20216_21092 = G__21127;
i__20217_21093 = G__21128;
continue;
} else {
var temp__5804__auto___21129 = cljs.core.seq(seq__20214_21090);
if(temp__5804__auto___21129){
var seq__20214_21130__$1 = temp__5804__auto___21129;
if(cljs.core.chunked_seq_QMARK_(seq__20214_21130__$1)){
var c__5568__auto___21131 = cljs.core.chunk_first(seq__20214_21130__$1);
var G__21132 = cljs.core.chunk_rest(seq__20214_21130__$1);
var G__21133 = c__5568__auto___21131;
var G__21134 = cljs.core.count(c__5568__auto___21131);
var G__21135 = (0);
seq__20214_21090 = G__21132;
chunk__20215_21091 = G__21133;
count__20216_21092 = G__21134;
i__20217_21093 = G__21135;
continue;
} else {
var child_struct_21136 = cljs.core.first(seq__20214_21130__$1);
var children_21137 = shadow.dom.dom_node(child_struct_21136);
if(cljs.core.seq_QMARK_(children_21137)){
var seq__20274_21138 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_21137));
var chunk__20276_21139 = null;
var count__20277_21140 = (0);
var i__20278_21141 = (0);
while(true){
if((i__20278_21141 < count__20277_21140)){
var child_21142 = chunk__20276_21139.cljs$core$IIndexed$_nth$arity$2(null,i__20278_21141);
if(cljs.core.truth_(child_21142)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_21142);


var G__21143 = seq__20274_21138;
var G__21144 = chunk__20276_21139;
var G__21145 = count__20277_21140;
var G__21146 = (i__20278_21141 + (1));
seq__20274_21138 = G__21143;
chunk__20276_21139 = G__21144;
count__20277_21140 = G__21145;
i__20278_21141 = G__21146;
continue;
} else {
var G__21147 = seq__20274_21138;
var G__21148 = chunk__20276_21139;
var G__21149 = count__20277_21140;
var G__21150 = (i__20278_21141 + (1));
seq__20274_21138 = G__21147;
chunk__20276_21139 = G__21148;
count__20277_21140 = G__21149;
i__20278_21141 = G__21150;
continue;
}
} else {
var temp__5804__auto___21152__$1 = cljs.core.seq(seq__20274_21138);
if(temp__5804__auto___21152__$1){
var seq__20274_21153__$1 = temp__5804__auto___21152__$1;
if(cljs.core.chunked_seq_QMARK_(seq__20274_21153__$1)){
var c__5568__auto___21154 = cljs.core.chunk_first(seq__20274_21153__$1);
var G__21155 = cljs.core.chunk_rest(seq__20274_21153__$1);
var G__21156 = c__5568__auto___21154;
var G__21157 = cljs.core.count(c__5568__auto___21154);
var G__21158 = (0);
seq__20274_21138 = G__21155;
chunk__20276_21139 = G__21156;
count__20277_21140 = G__21157;
i__20278_21141 = G__21158;
continue;
} else {
var child_21159 = cljs.core.first(seq__20274_21153__$1);
if(cljs.core.truth_(child_21159)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_21159);


var G__21160 = cljs.core.next(seq__20274_21153__$1);
var G__21161 = null;
var G__21162 = (0);
var G__21163 = (0);
seq__20274_21138 = G__21160;
chunk__20276_21139 = G__21161;
count__20277_21140 = G__21162;
i__20278_21141 = G__21163;
continue;
} else {
var G__21164 = cljs.core.next(seq__20274_21153__$1);
var G__21165 = null;
var G__21166 = (0);
var G__21167 = (0);
seq__20274_21138 = G__21164;
chunk__20276_21139 = G__21165;
count__20277_21140 = G__21166;
i__20278_21141 = G__21167;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_21137);
}


var G__21168 = cljs.core.next(seq__20214_21130__$1);
var G__21169 = null;
var G__21170 = (0);
var G__21171 = (0);
seq__20214_21090 = G__21168;
chunk__20215_21091 = G__21169;
count__20216_21092 = G__21170;
i__20217_21093 = G__21171;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__20298 = cljs.core.seq(node);
var chunk__20299 = null;
var count__20300 = (0);
var i__20301 = (0);
while(true){
if((i__20301 < count__20300)){
var n = chunk__20299.cljs$core$IIndexed$_nth$arity$2(null,i__20301);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__21176 = seq__20298;
var G__21177 = chunk__20299;
var G__21178 = count__20300;
var G__21179 = (i__20301 + (1));
seq__20298 = G__21176;
chunk__20299 = G__21177;
count__20300 = G__21178;
i__20301 = G__21179;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20298);
if(temp__5804__auto__){
var seq__20298__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20298__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__20298__$1);
var G__21180 = cljs.core.chunk_rest(seq__20298__$1);
var G__21181 = c__5568__auto__;
var G__21182 = cljs.core.count(c__5568__auto__);
var G__21183 = (0);
seq__20298 = G__21180;
chunk__20299 = G__21181;
count__20300 = G__21182;
i__20301 = G__21183;
continue;
} else {
var n = cljs.core.first(seq__20298__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__21185 = cljs.core.next(seq__20298__$1);
var G__21186 = null;
var G__21187 = (0);
var G__21188 = (0);
seq__20298 = G__21185;
chunk__20299 = G__21186;
count__20300 = G__21187;
i__20301 = G__21188;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__20309 = arguments.length;
switch (G__20309) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__20316 = arguments.length;
switch (G__20316) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__20334 = arguments.length;
switch (G__20334) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__5045__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__5775__auto__ = [];
var len__5769__auto___21198 = arguments.length;
var i__5770__auto___21199 = (0);
while(true){
if((i__5770__auto___21199 < len__5769__auto___21198)){
args__5775__auto__.push((arguments[i__5770__auto___21199]));

var G__21201 = (i__5770__auto___21199 + (1));
i__5770__auto___21199 = G__21201;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__20500_21203 = cljs.core.seq(nodes);
var chunk__20501_21204 = null;
var count__20502_21205 = (0);
var i__20503_21206 = (0);
while(true){
if((i__20503_21206 < count__20502_21205)){
var node_21207 = chunk__20501_21204.cljs$core$IIndexed$_nth$arity$2(null,i__20503_21206);
fragment.appendChild(shadow.dom._to_dom(node_21207));


var G__21208 = seq__20500_21203;
var G__21209 = chunk__20501_21204;
var G__21210 = count__20502_21205;
var G__21211 = (i__20503_21206 + (1));
seq__20500_21203 = G__21208;
chunk__20501_21204 = G__21209;
count__20502_21205 = G__21210;
i__20503_21206 = G__21211;
continue;
} else {
var temp__5804__auto___21213 = cljs.core.seq(seq__20500_21203);
if(temp__5804__auto___21213){
var seq__20500_21214__$1 = temp__5804__auto___21213;
if(cljs.core.chunked_seq_QMARK_(seq__20500_21214__$1)){
var c__5568__auto___21215 = cljs.core.chunk_first(seq__20500_21214__$1);
var G__21216 = cljs.core.chunk_rest(seq__20500_21214__$1);
var G__21217 = c__5568__auto___21215;
var G__21218 = cljs.core.count(c__5568__auto___21215);
var G__21219 = (0);
seq__20500_21203 = G__21216;
chunk__20501_21204 = G__21217;
count__20502_21205 = G__21218;
i__20503_21206 = G__21219;
continue;
} else {
var node_21221 = cljs.core.first(seq__20500_21214__$1);
fragment.appendChild(shadow.dom._to_dom(node_21221));


var G__21223 = cljs.core.next(seq__20500_21214__$1);
var G__21224 = null;
var G__21225 = (0);
var G__21226 = (0);
seq__20500_21203 = G__21223;
chunk__20501_21204 = G__21224;
count__20502_21205 = G__21225;
i__20503_21206 = G__21226;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq20483){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq20483));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__20519_21233 = cljs.core.seq(scripts);
var chunk__20520_21234 = null;
var count__20521_21235 = (0);
var i__20522_21236 = (0);
while(true){
if((i__20522_21236 < count__20521_21235)){
var vec__20537_21237 = chunk__20520_21234.cljs$core$IIndexed$_nth$arity$2(null,i__20522_21236);
var script_tag_21238 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20537_21237,(0),null);
var script_body_21239 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20537_21237,(1),null);
eval(script_body_21239);


var G__21243 = seq__20519_21233;
var G__21244 = chunk__20520_21234;
var G__21245 = count__20521_21235;
var G__21246 = (i__20522_21236 + (1));
seq__20519_21233 = G__21243;
chunk__20520_21234 = G__21244;
count__20521_21235 = G__21245;
i__20522_21236 = G__21246;
continue;
} else {
var temp__5804__auto___21247 = cljs.core.seq(seq__20519_21233);
if(temp__5804__auto___21247){
var seq__20519_21248__$1 = temp__5804__auto___21247;
if(cljs.core.chunked_seq_QMARK_(seq__20519_21248__$1)){
var c__5568__auto___21249 = cljs.core.chunk_first(seq__20519_21248__$1);
var G__21250 = cljs.core.chunk_rest(seq__20519_21248__$1);
var G__21251 = c__5568__auto___21249;
var G__21252 = cljs.core.count(c__5568__auto___21249);
var G__21253 = (0);
seq__20519_21233 = G__21250;
chunk__20520_21234 = G__21251;
count__20521_21235 = G__21252;
i__20522_21236 = G__21253;
continue;
} else {
var vec__20542_21254 = cljs.core.first(seq__20519_21248__$1);
var script_tag_21255 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20542_21254,(0),null);
var script_body_21256 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20542_21254,(1),null);
eval(script_body_21256);


var G__21257 = cljs.core.next(seq__20519_21248__$1);
var G__21258 = null;
var G__21259 = (0);
var G__21260 = (0);
seq__20519_21233 = G__21257;
chunk__20520_21234 = G__21258;
count__20521_21235 = G__21259;
i__20522_21236 = G__21260;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__20548){
var vec__20550 = p__20548;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20550,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20550,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__20562 = arguments.length;
switch (G__20562) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__20585 = cljs.core.seq(style_keys);
var chunk__20586 = null;
var count__20587 = (0);
var i__20588 = (0);
while(true){
if((i__20588 < count__20587)){
var it = chunk__20586.cljs$core$IIndexed$_nth$arity$2(null,i__20588);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__21265 = seq__20585;
var G__21266 = chunk__20586;
var G__21267 = count__20587;
var G__21268 = (i__20588 + (1));
seq__20585 = G__21265;
chunk__20586 = G__21266;
count__20587 = G__21267;
i__20588 = G__21268;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20585);
if(temp__5804__auto__){
var seq__20585__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20585__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__20585__$1);
var G__21269 = cljs.core.chunk_rest(seq__20585__$1);
var G__21270 = c__5568__auto__;
var G__21271 = cljs.core.count(c__5568__auto__);
var G__21272 = (0);
seq__20585 = G__21269;
chunk__20586 = G__21270;
count__20587 = G__21271;
i__20588 = G__21272;
continue;
} else {
var it = cljs.core.first(seq__20585__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__21273 = cljs.core.next(seq__20585__$1);
var G__21274 = null;
var G__21275 = (0);
var G__21276 = (0);
seq__20585 = G__21273;
chunk__20586 = G__21274;
count__20587 = G__21275;
i__20588 = G__21276;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k20604,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__20618 = k20604;
var G__20618__$1 = (((G__20618 instanceof cljs.core.Keyword))?G__20618.fqn:null);
switch (G__20618__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k20604,else__5346__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__20624){
var vec__20625 = p__20624;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20625,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20625,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#shadow.dom.Coordinate{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__20603){
var self__ = this;
var G__20603__$1 = this;
return (new cljs.core.RecordIter((0),G__20603__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this20606,other20607){
var self__ = this;
var this20606__$1 = this;
return (((!((other20607 == null)))) && ((((this20606__$1.constructor === other20607.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this20606__$1.x,other20607.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this20606__$1.y,other20607.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this20606__$1.__extmap,other20607.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k20604){
var self__ = this;
var this__5350__auto____$1 = this;
var G__20684 = k20604;
var G__20684__$1 = (((G__20684 instanceof cljs.core.Keyword))?G__20684.fqn:null);
switch (G__20684__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k20604);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__20603){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__20688 = cljs.core.keyword_identical_QMARK_;
var expr__20689 = k__5352__auto__;
if(cljs.core.truth_((pred__20688.cljs$core$IFn$_invoke$arity$2 ? pred__20688.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__20689) : pred__20688.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__20689)))){
return (new shadow.dom.Coordinate(G__20603,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__20688.cljs$core$IFn$_invoke$arity$2 ? pred__20688.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__20689) : pred__20688.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__20689)))){
return (new shadow.dom.Coordinate(self__.x,G__20603,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__20603),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__20603){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__20603,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__20610){
var extmap__5385__auto__ = (function (){var G__20725 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__20610,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__20610)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__20725);
} else {
return G__20725;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__20610),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__20610),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k20767,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__20793 = k20767;
var G__20793__$1 = (((G__20793 instanceof cljs.core.Keyword))?G__20793.fqn:null);
switch (G__20793__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k20767,else__5346__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__20801){
var vec__20802 = p__20801;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20802,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20802,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#shadow.dom.Size{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__20766){
var self__ = this;
var G__20766__$1 = this;
return (new cljs.core.RecordIter((0),G__20766__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this20768,other20770){
var self__ = this;
var this20768__$1 = this;
return (((!((other20770 == null)))) && ((((this20768__$1.constructor === other20770.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this20768__$1.w,other20770.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this20768__$1.h,other20770.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this20768__$1.__extmap,other20770.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k20767){
var self__ = this;
var this__5350__auto____$1 = this;
var G__20826 = k20767;
var G__20826__$1 = (((G__20826 instanceof cljs.core.Keyword))?G__20826.fqn:null);
switch (G__20826__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k20767);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__20766){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__20830 = cljs.core.keyword_identical_QMARK_;
var expr__20831 = k__5352__auto__;
if(cljs.core.truth_((pred__20830.cljs$core$IFn$_invoke$arity$2 ? pred__20830.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__20831) : pred__20830.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__20831)))){
return (new shadow.dom.Size(G__20766,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__20830.cljs$core$IFn$_invoke$arity$2 ? pred__20830.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__20831) : pred__20830.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__20831)))){
return (new shadow.dom.Size(self__.w,G__20766,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__20766),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__20766){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__20766,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__20782){
var extmap__5385__auto__ = (function (){var G__20843 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__20782,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__20782)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__20843);
} else {
return G__20843;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__20782),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__20782),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__5633__auto__ = opts;
var l__5634__auto__ = a__5633__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__5634__auto__)){
var G__21306 = (i + (1));
var G__21307 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__21306;
ret = G__21307;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__20862){
var vec__20863 = p__20862;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20863,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20863,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__20870 = arguments.length;
switch (G__20870) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5802__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5802__auto__)){
var child = temp__5802__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__21309 = ps;
var G__21310 = (i + (1));
el__$1 = G__21309;
i = G__21310;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__20882 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20882,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20882,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20882,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__20885_21313 = cljs.core.seq(props);
var chunk__20886_21314 = null;
var count__20887_21315 = (0);
var i__20888_21316 = (0);
while(true){
if((i__20888_21316 < count__20887_21315)){
var vec__20895_21317 = chunk__20886_21314.cljs$core$IIndexed$_nth$arity$2(null,i__20888_21316);
var k_21318 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20895_21317,(0),null);
var v_21319 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20895_21317,(1),null);
el.setAttributeNS((function (){var temp__5804__auto__ = cljs.core.namespace(k_21318);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_21318),v_21319);


var G__21322 = seq__20885_21313;
var G__21323 = chunk__20886_21314;
var G__21324 = count__20887_21315;
var G__21325 = (i__20888_21316 + (1));
seq__20885_21313 = G__21322;
chunk__20886_21314 = G__21323;
count__20887_21315 = G__21324;
i__20888_21316 = G__21325;
continue;
} else {
var temp__5804__auto___21326 = cljs.core.seq(seq__20885_21313);
if(temp__5804__auto___21326){
var seq__20885_21327__$1 = temp__5804__auto___21326;
if(cljs.core.chunked_seq_QMARK_(seq__20885_21327__$1)){
var c__5568__auto___21328 = cljs.core.chunk_first(seq__20885_21327__$1);
var G__21329 = cljs.core.chunk_rest(seq__20885_21327__$1);
var G__21330 = c__5568__auto___21328;
var G__21331 = cljs.core.count(c__5568__auto___21328);
var G__21332 = (0);
seq__20885_21313 = G__21329;
chunk__20886_21314 = G__21330;
count__20887_21315 = G__21331;
i__20888_21316 = G__21332;
continue;
} else {
var vec__20898_21333 = cljs.core.first(seq__20885_21327__$1);
var k_21334 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20898_21333,(0),null);
var v_21335 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20898_21333,(1),null);
el.setAttributeNS((function (){var temp__5804__auto____$1 = cljs.core.namespace(k_21334);
if(cljs.core.truth_(temp__5804__auto____$1)){
var ns = temp__5804__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_21334),v_21335);


var G__21336 = cljs.core.next(seq__20885_21327__$1);
var G__21337 = null;
var G__21338 = (0);
var G__21339 = (0);
seq__20885_21313 = G__21336;
chunk__20886_21314 = G__21337;
count__20887_21315 = G__21338;
i__20888_21316 = G__21339;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__20902 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20902,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20902,(1),null);
var seq__20905_21343 = cljs.core.seq(node_children);
var chunk__20907_21344 = null;
var count__20908_21345 = (0);
var i__20909_21346 = (0);
while(true){
if((i__20909_21346 < count__20908_21345)){
var child_struct_21347 = chunk__20907_21344.cljs$core$IIndexed$_nth$arity$2(null,i__20909_21346);
if((!((child_struct_21347 == null)))){
if(typeof child_struct_21347 === 'string'){
var text_21348 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_21348),child_struct_21347].join(''));
} else {
var children_21349 = shadow.dom.svg_node(child_struct_21347);
if(cljs.core.seq_QMARK_(children_21349)){
var seq__20927_21350 = cljs.core.seq(children_21349);
var chunk__20929_21351 = null;
var count__20930_21352 = (0);
var i__20931_21353 = (0);
while(true){
if((i__20931_21353 < count__20930_21352)){
var child_21354 = chunk__20929_21351.cljs$core$IIndexed$_nth$arity$2(null,i__20931_21353);
if(cljs.core.truth_(child_21354)){
node.appendChild(child_21354);


var G__21355 = seq__20927_21350;
var G__21356 = chunk__20929_21351;
var G__21357 = count__20930_21352;
var G__21358 = (i__20931_21353 + (1));
seq__20927_21350 = G__21355;
chunk__20929_21351 = G__21356;
count__20930_21352 = G__21357;
i__20931_21353 = G__21358;
continue;
} else {
var G__21359 = seq__20927_21350;
var G__21360 = chunk__20929_21351;
var G__21361 = count__20930_21352;
var G__21362 = (i__20931_21353 + (1));
seq__20927_21350 = G__21359;
chunk__20929_21351 = G__21360;
count__20930_21352 = G__21361;
i__20931_21353 = G__21362;
continue;
}
} else {
var temp__5804__auto___21363 = cljs.core.seq(seq__20927_21350);
if(temp__5804__auto___21363){
var seq__20927_21364__$1 = temp__5804__auto___21363;
if(cljs.core.chunked_seq_QMARK_(seq__20927_21364__$1)){
var c__5568__auto___21365 = cljs.core.chunk_first(seq__20927_21364__$1);
var G__21366 = cljs.core.chunk_rest(seq__20927_21364__$1);
var G__21367 = c__5568__auto___21365;
var G__21368 = cljs.core.count(c__5568__auto___21365);
var G__21369 = (0);
seq__20927_21350 = G__21366;
chunk__20929_21351 = G__21367;
count__20930_21352 = G__21368;
i__20931_21353 = G__21369;
continue;
} else {
var child_21370 = cljs.core.first(seq__20927_21364__$1);
if(cljs.core.truth_(child_21370)){
node.appendChild(child_21370);


var G__21371 = cljs.core.next(seq__20927_21364__$1);
var G__21372 = null;
var G__21373 = (0);
var G__21374 = (0);
seq__20927_21350 = G__21371;
chunk__20929_21351 = G__21372;
count__20930_21352 = G__21373;
i__20931_21353 = G__21374;
continue;
} else {
var G__21375 = cljs.core.next(seq__20927_21364__$1);
var G__21376 = null;
var G__21377 = (0);
var G__21378 = (0);
seq__20927_21350 = G__21375;
chunk__20929_21351 = G__21376;
count__20930_21352 = G__21377;
i__20931_21353 = G__21378;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_21349);
}
}


var G__21379 = seq__20905_21343;
var G__21380 = chunk__20907_21344;
var G__21381 = count__20908_21345;
var G__21382 = (i__20909_21346 + (1));
seq__20905_21343 = G__21379;
chunk__20907_21344 = G__21380;
count__20908_21345 = G__21381;
i__20909_21346 = G__21382;
continue;
} else {
var G__21383 = seq__20905_21343;
var G__21384 = chunk__20907_21344;
var G__21385 = count__20908_21345;
var G__21386 = (i__20909_21346 + (1));
seq__20905_21343 = G__21383;
chunk__20907_21344 = G__21384;
count__20908_21345 = G__21385;
i__20909_21346 = G__21386;
continue;
}
} else {
var temp__5804__auto___21387 = cljs.core.seq(seq__20905_21343);
if(temp__5804__auto___21387){
var seq__20905_21388__$1 = temp__5804__auto___21387;
if(cljs.core.chunked_seq_QMARK_(seq__20905_21388__$1)){
var c__5568__auto___21389 = cljs.core.chunk_first(seq__20905_21388__$1);
var G__21390 = cljs.core.chunk_rest(seq__20905_21388__$1);
var G__21391 = c__5568__auto___21389;
var G__21392 = cljs.core.count(c__5568__auto___21389);
var G__21393 = (0);
seq__20905_21343 = G__21390;
chunk__20907_21344 = G__21391;
count__20908_21345 = G__21392;
i__20909_21346 = G__21393;
continue;
} else {
var child_struct_21394 = cljs.core.first(seq__20905_21388__$1);
if((!((child_struct_21394 == null)))){
if(typeof child_struct_21394 === 'string'){
var text_21395 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_21395),child_struct_21394].join(''));
} else {
var children_21396 = shadow.dom.svg_node(child_struct_21394);
if(cljs.core.seq_QMARK_(children_21396)){
var seq__20934_21397 = cljs.core.seq(children_21396);
var chunk__20936_21398 = null;
var count__20937_21399 = (0);
var i__20938_21400 = (0);
while(true){
if((i__20938_21400 < count__20937_21399)){
var child_21401 = chunk__20936_21398.cljs$core$IIndexed$_nth$arity$2(null,i__20938_21400);
if(cljs.core.truth_(child_21401)){
node.appendChild(child_21401);


var G__21402 = seq__20934_21397;
var G__21403 = chunk__20936_21398;
var G__21404 = count__20937_21399;
var G__21405 = (i__20938_21400 + (1));
seq__20934_21397 = G__21402;
chunk__20936_21398 = G__21403;
count__20937_21399 = G__21404;
i__20938_21400 = G__21405;
continue;
} else {
var G__21406 = seq__20934_21397;
var G__21407 = chunk__20936_21398;
var G__21408 = count__20937_21399;
var G__21409 = (i__20938_21400 + (1));
seq__20934_21397 = G__21406;
chunk__20936_21398 = G__21407;
count__20937_21399 = G__21408;
i__20938_21400 = G__21409;
continue;
}
} else {
var temp__5804__auto___21410__$1 = cljs.core.seq(seq__20934_21397);
if(temp__5804__auto___21410__$1){
var seq__20934_21411__$1 = temp__5804__auto___21410__$1;
if(cljs.core.chunked_seq_QMARK_(seq__20934_21411__$1)){
var c__5568__auto___21412 = cljs.core.chunk_first(seq__20934_21411__$1);
var G__21413 = cljs.core.chunk_rest(seq__20934_21411__$1);
var G__21414 = c__5568__auto___21412;
var G__21415 = cljs.core.count(c__5568__auto___21412);
var G__21416 = (0);
seq__20934_21397 = G__21413;
chunk__20936_21398 = G__21414;
count__20937_21399 = G__21415;
i__20938_21400 = G__21416;
continue;
} else {
var child_21417 = cljs.core.first(seq__20934_21411__$1);
if(cljs.core.truth_(child_21417)){
node.appendChild(child_21417);


var G__21418 = cljs.core.next(seq__20934_21411__$1);
var G__21419 = null;
var G__21420 = (0);
var G__21421 = (0);
seq__20934_21397 = G__21418;
chunk__20936_21398 = G__21419;
count__20937_21399 = G__21420;
i__20938_21400 = G__21421;
continue;
} else {
var G__21422 = cljs.core.next(seq__20934_21411__$1);
var G__21423 = null;
var G__21424 = (0);
var G__21425 = (0);
seq__20934_21397 = G__21422;
chunk__20936_21398 = G__21423;
count__20937_21399 = G__21424;
i__20938_21400 = G__21425;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_21396);
}
}


var G__21426 = cljs.core.next(seq__20905_21388__$1);
var G__21427 = null;
var G__21428 = (0);
var G__21429 = (0);
seq__20905_21343 = G__21426;
chunk__20907_21344 = G__21427;
count__20908_21345 = G__21428;
i__20909_21346 = G__21429;
continue;
} else {
var G__21430 = cljs.core.next(seq__20905_21388__$1);
var G__21431 = null;
var G__21432 = (0);
var G__21433 = (0);
seq__20905_21343 = G__21430;
chunk__20907_21344 = G__21431;
count__20908_21345 = G__21432;
i__20909_21346 = G__21433;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___21434 = arguments.length;
var i__5770__auto___21435 = (0);
while(true){
if((i__5770__auto___21435 < len__5769__auto___21434)){
args__5775__auto__.push((arguments[i__5770__auto___21435]));

var G__21436 = (i__5770__auto___21435 + (1));
i__5770__auto___21435 = G__21436;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq20955){
var G__20956 = cljs.core.first(seq20955);
var seq20955__$1 = cljs.core.next(seq20955);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20956,seq20955__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__20958 = arguments.length;
switch (G__20958) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__5043__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__5043__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__5043__auto__;
}
})())){
var c__17547__auto___21440 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17548__auto__ = (function (){var switch__17198__auto__ = (function (state_20964){
var state_val_20965 = (state_20964[(1)]);
if((state_val_20965 === (1))){
var state_20964__$1 = state_20964;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20964__$1,(2),once_or_cleanup);
} else {
if((state_val_20965 === (2))){
var inst_20961 = (state_20964[(2)]);
var inst_20962 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_20964__$1 = (function (){var statearr_20966 = state_20964;
(statearr_20966[(7)] = inst_20961);

return statearr_20966;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_20964__$1,inst_20962);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__17199__auto__ = null;
var shadow$dom$state_machine__17199__auto____0 = (function (){
var statearr_20971 = [null,null,null,null,null,null,null,null];
(statearr_20971[(0)] = shadow$dom$state_machine__17199__auto__);

(statearr_20971[(1)] = (1));

return statearr_20971;
});
var shadow$dom$state_machine__17199__auto____1 = (function (state_20964){
while(true){
var ret_value__17200__auto__ = (function (){try{while(true){
var result__17201__auto__ = switch__17198__auto__(state_20964);
if(cljs.core.keyword_identical_QMARK_(result__17201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17201__auto__;
}
break;
}
}catch (e20972){var ex__17202__auto__ = e20972;
var statearr_20973_21442 = state_20964;
(statearr_20973_21442[(2)] = ex__17202__auto__);


if(cljs.core.seq((state_20964[(4)]))){
var statearr_20974_21445 = state_20964;
(statearr_20974_21445[(1)] = cljs.core.first((state_20964[(4)])));

} else {
throw ex__17202__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21446 = state_20964;
state_20964 = G__21446;
continue;
} else {
return ret_value__17200__auto__;
}
break;
}
});
shadow$dom$state_machine__17199__auto__ = function(state_20964){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__17199__auto____0.call(this);
case 1:
return shadow$dom$state_machine__17199__auto____1.call(this,state_20964);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__17199__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__17199__auto____0;
shadow$dom$state_machine__17199__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__17199__auto____1;
return shadow$dom$state_machine__17199__auto__;
})()
})();
var state__17549__auto__ = (function (){var statearr_20979 = f__17548__auto__();
(statearr_20979[(6)] = c__17547__auto___21440);

return statearr_20979;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17549__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map

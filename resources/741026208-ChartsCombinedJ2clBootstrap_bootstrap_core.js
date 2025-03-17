"use strict";this.default_ChartsCombinedJ2clBootstrap=this.default_ChartsCombinedJ2clBootstrap||{};(function(_){var window=this;
_._F_toggles_initialize=function(a){(typeof globalThis!=="undefined"?globalThis:typeof self!=="undefined"?self:this)._F_toggles=a||[]};(0,_._F_toggles_initialize)([]);
/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
/*

 Copyright Google LLC
 SPDX-License-Identifier: Apache-2.0
*/
var h=function(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}},k=function(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("a");},n=function(a,b){if(b)a:{var c=l;a=a.split(".");for(var d=0;d<a.length-1;d++){var f=a[d];if(!(f in c))break a;c=c[f]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&b!=null&&m(c,a,
{configurable:!0,writable:!0,value:b})}},p=function(a){a={next:a};a[Symbol.iterator]=function(){return this};return a},q=function(a){var b=typeof Symbol!="undefined"&&Symbol.iterator&&a[Symbol.iterator];if(b)return b.call(a);if(typeof a.length=="number")return{next:h(a)};throw Error("d`"+String(a));},u=function(a){return t(a,a)},t=function(a,b){a.raw=b;Object.freeze&&(Object.freeze(a),Object.freeze(b));return a},v=function(){for(var a=Number(this),b=[],c=a;c<arguments.length;c++)b[c-a]=arguments[c];
return b},w=function(a,b){a instanceof String&&(a+="");var c=0,d=!1,f={next:function(){if(!d&&c<a.length){var e=c++;return{value:b(e,a[e]),done:!1}}d=!0;return{done:!0,value:void 0}}};f[Symbol.iterator]=function(){return f};return f},x=function(a){var b=typeof a;b=b!="object"?b:a?Array.isArray(a)?"array":b:"null";return b=="array"||b=="object"&&typeof a.length=="number"},y=function(a){var b=typeof a;return b=="object"&&a!=null||b=="function"},z=function(a){var b=a.length;if(b>0){for(var c=Array(b),
d=0;d<b;d++)c[d]=a[d];return c}return[]},A=function(a,b){for(var c in a)b.call(void 0,a[c],c,a)},C=function(){var a=null;if(!B)return a;try{var b=function(c){return c};a=B.createPolicy("goog#html",{createHTML:b,createScript:b,createScriptURL:b})}catch(c){}return a},E=function(){D===void 0&&(D=C());return D},F=function(a){this.g=a},G=function(a){var b=E();return new F(b?b.createScriptURL(a):a)},H=function(a){if(a instanceof F)return a.g;throw Error("e");},I=function(a){this.g=a},J=function(a){var b=
E();return new I(b?b.createHTML(a):a)},K=function(a){if(a instanceof I)return a.g;throw Error("e");},L=function(a,b){a.src=H(b);var c;b=a.ownerDocument;b=b===void 0?document:b;var d;b=(d=(c=b).querySelector)==null?void 0:d.call(c,"script[nonce]");(c=b==null?"":b.nonce||b.getAttribute("nonce")||"")&&a.setAttribute("nonce",c)},M=function(a){return a instanceof I?a:J(String(a).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&apos;"))},N=function(a){var b=
M("");return J(a.map(function(c){return K(M(c))}).join(K(b).toString()))},aa=function(a){if(!O.test(a))throw Error("e");if(P.indexOf(a.toUpperCase())!==-1)throw Error("e");},Q=function(a,b){var c={};aa(a);var d="<"+a;c&&(d+=ba(c));Array.isArray(b)||(b=b===void 0?[]:[b]);ca.indexOf(a.toUpperCase())!==-1?d+=">":(b=N(b.map(function(f){return f instanceof I?f:M(String(f))})),d+=">"+b.toString()+"</"+a+">");return J(d)},ba=function(a){for(var b="",c=Object.keys(a),d=0;d<c.length;d++){var f=c[d],e=a[f];
if(!O.test(f))throw Error("e");if(e!==void 0&&e!==null){if(/^on./i.test(f))throw Error("e");da.indexOf(f.toLowerCase())!==-1&&(e=String(e),e=ea.test(e)?e:void 0,e=e||"about:invalid#zClosurez");f=f+'="'+M(String(e))+'"';b+=" "+f}}return b},R=function(a){var b=v.apply(1,arguments);if(b.length===0)return G(a[0]);for(var c=a[0],d=0;d<b.length;d++)c+=encodeURIComponent(b[d])+a[d+1];return G(c)},U=function(a){return a?new S(a.nodeType==9?a:a.ownerDocument||a.document):T||(T=new S)},fa=function(a,b){A(b,
function(c,d){d=="style"?a.style.cssText=c:d=="class"?a.className=c:d=="for"?a.htmlFor=c:V.hasOwnProperty(d)?a.setAttribute(V[d],c):d.lastIndexOf("aria-",0)==0||d.lastIndexOf("data-",0)==0?a.setAttribute(d,c):a[d]=c})},ia=function(a,b,c){function d(r){r&&b.appendChild(typeof r==="string"?a.createTextNode(r):r)}for(var f=2;f<c.length;f++){var e=c[f];if(!x(e)||y(e)&&e.nodeType>0)d(e);else{a:{if(e&&typeof e.length=="number"){if(y(e)){var g=typeof e.item=="function"||typeof e.item=="string";break a}if(typeof e===
"function"){g=typeof e.item=="function";break a}}g=!1}ha(g?z(e):e,d)}}},W=function(a,b){b=String(b);a.contentType==="application/xhtml+xml"&&(b=b.toLowerCase());return a.createElement(b)},S=function(a){this.g=a||ja.document||document},X=function(a,b){this.j=a;this.i=b;this.h=this.g=null},ka=function(a){var b=document.head||document.body||document,c=U(b),d=Q("html",N([Q("head"),Q("body")]));d=N([J("<!DOCTYPE html>"),d]);c=c.h("IFRAME",{frameborder:0,style:"border:0;vertical-align:bottom;position:absolute; width:0; height:0; border:none;left: -1000px; top: -1000px;"});
c.src=H(Y).toString();b.appendChild(c);b=d;d=c.contentDocument||c.contentWindow.document;d.open();d.write(K(b));d.close();c.id=a.j;c.tabIndex=-1;a.h=c},Z=function(a){return(typeof document.readyState=="undefined"?typeof document.body!="undefined"&&document.body!=null:/loaded|complete/.test(document.readyState))?(a.g!=null&&(clearInterval(a.g),a.g=null),a.i(a.h),!0):!1},m=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;
a[b]=c.value;return a},l=k(this);n("Symbol",function(a){function b(e){if(this instanceof b)throw new TypeError("b");return new c(d+(e||"")+"_"+f++,e)}function c(e,g){this.g=e;m(this,"description",{configurable:!0,writable:!0,value:g})}if(a)return a;c.prototype.toString=function(){return this.g};var d="jscomp_symbol_"+(Math.random()*1E9>>>0)+"_",f=0;return b});
n("Symbol.iterator",function(a){if(a)return a;a=Symbol("c");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var d=l[b[c]];typeof d==="function"&&typeof d.prototype[a]!="function"&&m(d.prototype,a,{configurable:!0,writable:!0,value:function(){return p(h(this))}})}return a});n("globalThis",function(a){return a||l});n("Array.prototype.keys",function(a){return a?a:function(){return w(this,function(b){return b})}});var ja=this||self;var T;var ha=Array.prototype.forEach?function(a,b){Array.prototype.forEach.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=typeof a==="string"?a.split(""):a,f=0;f<c;f++)f in d&&b.call(void 0,d[f],f,a)};var B=globalThis.trustedTypes,D;F.prototype.toString=function(){return this.g+""};var ea=/^\s*(?!javascript:)(?:[\w+.-]+:|[^:/?#]*(?:[/?#]|$))/i;I.prototype.toString=function(){return this.g+""};var O=/^[a-z][a-z\d-]*$/i,P="APPLET BASE EMBED IFRAME LINK MATH META OBJECT SCRIPT STYLE SVG TEMPLATE".split(" "),ca="AREA BR COL COMMAND HR IMG INPUT KEYGEN PARAM SOURCE TRACK WBR".split(" "),da=["action","formaction","href"];var V={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",nonce:"nonce",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"};S.prototype.h=function(a,b,c){var d=this.g,f=arguments,e=f[1],g=W(d,String(f[0]));e&&(typeof e==="string"?g.className=e:Array.isArray(e)?g.className=e.join(" "):fa(g,e));f.length>2&&ia(d,g,f);return g};var la=u(["about:blank"]),ma=u(["javascript:undefined"]),Y=R(la);H(Y);var na=R(ma);H(na);X.prototype.load=function(){var a=this;ka(this);Z(this)||(this.g=setInterval(function(){return void Z(a)},50))};window.tvizScriptLoader=new X("charts-export-frame",function(a){var b=a.contentDocument;a.contentWindow.ritzspreadsheetconstants=window.ritzspreadsheetconstants;a.contentWindow.__serializedchartmessages=window.__serializedchartmessages;a=q(window.CHARTS_EXPORT_URI);for(var c=a.next();!c.done;c=a.next()){c=c.value;var d=W(U(b).g,"SCRIPT");d.type="text/javascript";d.async=!1;L(d,G(c));b.body.appendChild(d)}});
window.gvizScriptLoader=new X("charts-gviz-rendering-frame",function(a){var b=a.contentDocument;a.contentWindow.ritzspreadsheetconstants=window.ritzspreadsheetconstants;a=q(window.CHARTS_RENDER_URI);for(var c=a.next();!c.done;c=a.next()){c=c.value;var d=W(U(b).g,"SCRIPT");d.type="text/javascript";d.async=!1;L(d,G(c));b.body.appendChild(d)}});
window.visualizationScriptLoader=new X("visualization-export-frame",function(a){var b=a.contentDocument;a.contentWindow.ritzspreadsheetconstants=window.ritzspreadsheetconstants;a=q(window.VISUALIZATION_EXPORT_URI);for(var c=a.next();!c.done;c=a.next()){c=c.value;var d=W(U(b).g,"SCRIPT");d.type="text/javascript";d.async=!1;L(d,G(c));b.body.appendChild(d)}});
}).call(this,this.default_ChartsCombinedJ2clBootstrap);
// Google Inc.

//# sourceMappingURL=ChartsCombinedJ2clBootstrap_bootstrap_core.sourcemap

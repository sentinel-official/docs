"use strict";(self.webpackChunksentinel_docs=self.webpackChunksentinel_docs||[]).push([[653],{30653:(e,t,r)=>{r.d(t,{c:()=>Ae});var n=r(61604),c=r(49583),o=(0,n.r)(c.r,"WeakMap");var a=(0,n.s)(Object.keys,Object),u=Object.prototype.hasOwnProperty;function b(e){return(0,n.i)(e)?(0,n.u)(e):function(e){if(!(0,n.t)(e))return a(e);var t=[];for(var r in Object(e))u.call(e,r)&&"constructor"!=r&&t.push(r);return t}(e)}function i(e,t){for(var r=-1,n=t.length,c=e.length;++r<n;)e[c+r]=t[r];return e}function s(){return[]}var j=Object.prototype.propertyIsEnumerable,f=Object.getOwnPropertySymbols,l=f?function(e){return null==e?[]:(e=Object(e),function(e,t){for(var r=-1,n=null==e?0:e.length,c=0,o=[];++r<n;){var a=e[r];t(a,r,e)&&(o[c++]=a)}return o}(f(e),(function(t){return j.call(e,t)})))}:s;var y=Object.getOwnPropertySymbols?function(e){for(var t=[];e;)i(t,l(e)),e=(0,n.g)(e);return t}:s;function v(e,t,r){var c=t(e);return(0,n.f)(e)?c:i(c,r(e))}function p(e){return v(e,b,l)}function w(e){return v(e,n.k,y)}var A=(0,n.r)(c.r,"DataView"),d=(0,n.r)(c.r,"Promise"),O=(0,n.r)(c.r,"Set"),h="[object Map]",g="[object Promise]",S="[object Set]",m="[object WeakMap]",k="[object DataView]",M=(0,n.v)(A),x=(0,n.v)(n.M),I=(0,n.v)(d),U=(0,n.v)(O),C=(0,n.v)(o),D=c.b;(A&&D(new A(new ArrayBuffer(1)))!=k||n.M&&D(new n.M)!=h||d&&D(d.resolve())!=g||O&&D(new O)!=S||o&&D(new o)!=m)&&(D=function(e){var t=(0,c.b)(e),r="[object Object]"==t?e.constructor:void 0,o=r?(0,n.v)(r):"";if(o)switch(o){case M:return k;case x:return h;case I:return g;case U:return S;case C:return m}return t});const E=D;var F=Object.prototype.hasOwnProperty;var P=/\w*$/;var B=c.S?c.S.prototype:void 0,V=B?B.valueOf:void 0;var W="[object Boolean]",N="[object Date]",R="[object Map]",_="[object Number]",z="[object RegExp]",G="[object Set]",L="[object String]",$="[object Symbol]",q="[object ArrayBuffer]",H="[object DataView]",J="[object Float32Array]",K="[object Float64Array]",Q="[object Int8Array]",T="[object Int16Array]",X="[object Int32Array]",Y="[object Uint8Array]",Z="[object Uint8ClampedArray]",ee="[object Uint16Array]",te="[object Uint32Array]";function re(e,t,r){var c,o,a,u=e.constructor;switch(t){case q:return(0,n.w)(e);case W:case N:return new u(+e);case H:return function(e,t){var r=t?(0,n.w)(e.buffer):e.buffer;return new e.constructor(r,e.byteOffset,e.byteLength)}(e,r);case J:case K:case Q:case T:case X:case Y:case Z:case ee:case te:return(0,n.l)(e,r);case R:return new u;case _:case L:return new u(e);case z:return(a=new(o=e).constructor(o.source,P.exec(o))).lastIndex=o.lastIndex,a;case G:return new u;case $:return c=e,V?Object(V.call(c)):{}}}var ne=n.y&&n.y.isMap,ce=ne?(0,n.x)(ne):function(e){return(0,c.i)(e)&&"[object Map]"==E(e)};var oe=n.y&&n.y.isSet,ae=oe?(0,n.x)(oe):function(e){return(0,c.i)(e)&&"[object Set]"==E(e)},ue=1,be=2,ie=4,se="[object Arguments]",je="[object Function]",fe="[object GeneratorFunction]",le="[object Object]",ye={};function ve(e,t,r,o,a,u){var i,s=t&ue,j=t&be,f=t&ie;if(r&&(i=a?r(e,o,a,u):r(e)),void 0!==i)return i;if(!(0,c.a)(e))return e;var v=(0,n.f)(e);if(v){if(i=function(e){var t=e.length,r=new e.constructor(t);return t&&"string"==typeof e[0]&&F.call(e,"index")&&(r.index=e.index,r.input=e.input),r}(e),!s)return(0,n.h)(e,i)}else{var A=E(e),d=A==je||A==fe;if((0,n.a)(e))return(0,n.j)(e,s);if(A==le||A==se||d&&!a){if(i=j||d?{}:(0,n.o)(e),!s)return j?function(e,t){return(0,n.c)(e,y(e),t)}(e,function(e,t){return e&&(0,n.c)(t,(0,n.k)(t),e)}(i,e)):function(e,t){return(0,n.c)(e,l(e),t)}(e,function(e,t){return e&&(0,n.c)(t,b(t),e)}(i,e))}else{if(!ye[A])return a?e:{};i=re(e,A,s)}}u||(u=new n.S);var O=u.get(e);if(O)return O;u.set(e,i),ae(e)?e.forEach((function(n){i.add(ve(n,t,r,n,e,u))})):ce(e)&&e.forEach((function(n,c){i.set(c,ve(n,t,r,c,e,u))}));var h=f?j?w:p:j?n.k:b,g=v?void 0:h(e);return function(e,t){for(var r=-1,n=null==e?0:e.length;++r<n&&!1!==t(e[r],r,e););}(g||e,(function(c,o){g&&(c=e[o=c]),(0,n.z)(i,o,ve(c,t,r,o,e,u))})),i}ye[se]=ye["[object Array]"]=ye["[object ArrayBuffer]"]=ye["[object DataView]"]=ye["[object Boolean]"]=ye["[object Date]"]=ye["[object Float32Array]"]=ye["[object Float64Array]"]=ye["[object Int8Array]"]=ye["[object Int16Array]"]=ye["[object Int32Array]"]=ye["[object Map]"]=ye["[object Number]"]=ye[le]=ye["[object RegExp]"]=ye["[object Set]"]=ye["[object String]"]=ye["[object Symbol]"]=ye["[object Uint8Array]"]=ye["[object Uint8ClampedArray]"]=ye["[object Uint16Array]"]=ye["[object Uint32Array]"]=!0,ye["[object Error]"]=ye[je]=ye["[object WeakMap]"]=!1;var pe=1,we=4;function Ae(e){return structuredClone?structuredClone(e):ve(e,pe|we)}}}]);
"use strict";var x=function(o,e){return function(){try{return e||o((e={exports:{}}).exports,e),e.exports}catch(u){throw (e=0, u)}};};var P=x(function(G,m){
function w(o,e,u,v,r,i,g){var s,a,n,f,c,t,l,p;for(s=e.data,a=r.data,n=e.accessors[0],c=r.accessors[0],f=r.accessors[1],t=v,l=g,p=0;p<o;p++)f(a,l,n(s,t)-c(a,l)),t+=u,l+=i;return r}m.exports=w
});var b=x(function(H,k){
var j=require('@stdlib/array-base-arraylike2object/dist'),z=P(),q=5;function A(o,e,u,v,r,i,g){var s,a,n,f,c,t;if(o<=0)return r;if(n=j(e),f=j(r),n.accessorProtocol||f.accessorProtocol)return z(o,n,u,v,f,i,g),r;if(s=v,a=g,u===1&&i===1){if(c=o%q,c>0)for(t=0;t<c;t++)r[a]=e[s]-r[a],s+=u,a+=i;if(o<q)return r;for(t=c;t<o;t+=q)r[a]=e[s]-r[a],r[a+1]=e[s+1]-r[a+1],r[a+2]=e[s+2]-r[a+2],r[a+3]=e[s+3]-r[a+3],r[a+4]=e[s+4]-r[a+4],s+=q,a+=q;return r}for(t=0;t<o;t++)r[a]=e[s]-r[a],s+=u,a+=i;return r}k.exports=A
});var R=x(function(I,O){
var M=require('@stdlib/strided-base-stride2offset/dist'),B=b();function C(o,e,u,v,r){return B(o,e,u,M(o,u),v,r,M(o,r))}O.exports=C
});var D=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),h=R(),E=b();D(h,"ndarray",E);module.exports=h;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map

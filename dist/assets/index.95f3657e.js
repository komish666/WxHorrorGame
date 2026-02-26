const _l=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerpolicy&&(r.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?r.credentials="include":i.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}};_l();/**
* @vue/shared v3.5.29
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function si(e){const t=Object.create(null);for(const n of e.split(","))t[n]=1;return n=>n in t}const fe={},Zt=[],Je=()=>{},Mr=()=>!1,rs=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),ii=e=>e.startsWith("onUpdate:"),Ae=Object.assign,ri=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},yl=Object.prototype.hasOwnProperty,re=(e,t)=>yl.call(e,t),Q=Array.isArray,en=e=>Mn(e)==="[object Map]",Br=e=>Mn(e)==="[object Set]",Di=e=>Mn(e)==="[object Date]",W=e=>typeof e=="function",ve=e=>typeof e=="string",lt=e=>typeof e=="symbol",oe=e=>e!==null&&typeof e=="object",kr=e=>(oe(e)||W(e))&&W(e.then)&&W(e.catch),Fr=Object.prototype.toString,Mn=e=>Fr.call(e),Sl=e=>Mn(e).slice(8,-1),Lr=e=>Mn(e)==="[object Object]",os=e=>ve(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,gn=si(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ls=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},Vl=/-\w/g,Ke=ls(e=>e.replace(Vl,t=>t.slice(1).toUpperCase())),bl=/\B([A-Z])/g,Gt=ls(e=>e.replace(bl,"-$1").toLowerCase()),cs=ls(e=>e.charAt(0).toUpperCase()+e.slice(1)),ys=ls(e=>e?`on${cs(e)}`:""),Rt=(e,t)=>!Object.is(e,t),Ss=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},Hr=(e,t,n,s=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:s,value:n})},El=e=>{const t=parseFloat(e);return isNaN(t)?e:t},Cl=e=>{const t=ve(e)?Number(e):NaN;return isNaN(t)?e:t};let Ni;const Bn=()=>Ni||(Ni=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});function oi(e){if(Q(e)){const t={};for(let n=0;n<e.length;n++){const s=e[n],i=ve(s)?Ol(s):oi(s);if(i)for(const r in i)t[r]=i[r]}return t}else if(ve(e)||oe(e))return e}const xl=/;(?![^(]*\))/g,Tl=/:([^]+)/,wl=/\/\*[^]*?\*\//g;function Ol(e){const t={};return e.replace(wl,"").split(xl).forEach(n=>{if(n){const s=n.split(Tl);s.length>1&&(t[s[0].trim()]=s[1].trim())}}),t}function Pt(e){let t="";if(ve(e))t=e;else if(Q(e))for(let n=0;n<e.length;n++){const s=Pt(e[n]);s&&(t+=s+" ")}else if(oe(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const Rl="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Il=si(Rl);function jr(e){return!!e||e===""}function Pl(e,t){if(e.length!==t.length)return!1;let n=!0;for(let s=0;n&&s<e.length;s++)n=li(e[s],t[s]);return n}function li(e,t){if(e===t)return!0;let n=Di(e),s=Di(t);if(n||s)return n&&s?e.getTime()===t.getTime():!1;if(n=lt(e),s=lt(t),n||s)return e===t;if(n=Q(e),s=Q(t),n||s)return n&&s?Pl(e,t):!1;if(n=oe(e),s=oe(t),n||s){if(!n||!s)return!1;const i=Object.keys(e).length,r=Object.keys(t).length;if(i!==r)return!1;for(const o in e){const l=e.hasOwnProperty(o),c=t.hasOwnProperty(o);if(l&&!c||!l&&c||!li(e[o],t[o]))return!1}}return String(e)===String(t)}const Ur=e=>!!(e&&e.__v_isRef===!0),Pe=e=>ve(e)?e:e==null?"":Q(e)||oe(e)&&(e.toString===Fr||!W(e.toString))?Ur(e)?Pe(e.value):JSON.stringify(e,Qr,2):String(e),Qr=(e,t)=>Ur(t)?Qr(e,t.value):en(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[s,i],r)=>(n[Vs(s,r)+" =>"]=i,n),{})}:Br(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>Vs(n))}:lt(t)?Vs(t):oe(t)&&!Q(t)&&!Lr(t)?String(t):t,Vs=(e,t="")=>{var n;return lt(e)?`Symbol(${(n=e.description)!=null?n:t})`:e};/**
* @vue/reactivity v3.5.29
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let be;class Gr{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.__v_skip=!0,this.parent=be,!t&&be&&(this.index=(be.scopes||(be.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].pause();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].resume();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].resume()}}run(t){if(this._active){const n=be;try{return be=this,t()}finally{be=n}}}on(){++this._on===1&&(this.prevScope=be,be=this)}off(){this._on>0&&--this._on===0&&(be=this.prevScope,this.prevScope=void 0)}stop(t){if(this._active){this._active=!1;let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(this.effects.length=0,n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0}}}function Kr(e){return new Gr(e)}function Wr(){return be}function $l(e,t=!1){be&&be.cleanups.push(e)}let ue;const bs=new WeakSet;class qr{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,be&&be.active&&be.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,bs.has(this)&&(bs.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Yr(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Mi(this),zr(this);const t=ue,n=Ye;ue=this,Ye=!0;try{return this.fn()}finally{Xr(this),ue=t,Ye=n,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)ui(t);this.deps=this.depsTail=void 0,Mi(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?bs.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Fs(this)&&this.run()}get dirty(){return Fs(this)}}let Jr=0,mn,vn;function Yr(e,t=!1){if(e.flags|=8,t){e.next=vn,vn=e;return}e.next=mn,mn=e}function ci(){Jr++}function ai(){if(--Jr>0)return;if(vn){let t=vn;for(vn=void 0;t;){const n=t.next;t.next=void 0,t.flags&=-9,t=n}}let e;for(;mn;){let t=mn;for(mn=void 0;t;){const n=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(s){e||(e=s)}t=n}}if(e)throw e}function zr(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function Xr(e){let t,n=e.depsTail,s=n;for(;s;){const i=s.prevDep;s.version===-1?(s===n&&(n=i),ui(s),Dl(s)):t=s,s.dep.activeLink=s.prevActiveLink,s.prevActiveLink=void 0,s=i}e.deps=t,e.depsTail=n}function Fs(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(Zr(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function Zr(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===wn)||(e.globalVersion=wn,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!Fs(e))))return;e.flags|=2;const t=e.dep,n=ue,s=Ye;ue=e,Ye=!0;try{zr(e);const i=e.fn(e._value);(t.version===0||Rt(i,e._value))&&(e.flags|=128,e._value=i,t.version++)}catch(i){throw t.version++,i}finally{ue=n,Ye=s,Xr(e),e.flags&=-3}}function ui(e,t=!1){const{dep:n,prevSub:s,nextSub:i}=e;if(s&&(s.nextSub=i,e.prevSub=void 0),i&&(i.prevSub=s,e.nextSub=void 0),n.subs===e&&(n.subs=s,!s&&n.computed)){n.computed.flags&=-5;for(let r=n.computed.deps;r;r=r.nextDep)ui(r,!0)}!t&&!--n.sc&&n.map&&n.map.delete(n.key)}function Dl(e){const{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}let Ye=!0;const eo=[];function At(){eo.push(Ye),Ye=!1}function _t(){const e=eo.pop();Ye=e===void 0?!0:e}function Mi(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const n=ue;ue=void 0;try{t()}finally{ue=n}}}let wn=0;class Nl{constructor(t,n){this.sub=t,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class fi{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!ue||!Ye||ue===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==ue)n=this.activeLink=new Nl(ue,this),ue.deps?(n.prevDep=ue.depsTail,ue.depsTail.nextDep=n,ue.depsTail=n):ue.deps=ue.depsTail=n,to(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const s=n.nextDep;s.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=s),n.prevDep=ue.depsTail,n.nextDep=void 0,ue.depsTail.nextDep=n,ue.depsTail=n,ue.deps===n&&(ue.deps=s)}return n}trigger(t){this.version++,wn++,this.notify(t)}notify(t){ci();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{ai()}}}function to(e){if(e.dep.sc++,e.sub.flags&4){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let s=t.deps;s;s=s.nextDep)to(s)}const n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}const Jn=new WeakMap,jt=Symbol(""),Ls=Symbol(""),On=Symbol("");function Ee(e,t,n){if(Ye&&ue){let s=Jn.get(e);s||Jn.set(e,s=new Map);let i=s.get(n);i||(s.set(n,i=new fi),i.map=s,i.key=n),i.track()}}function gt(e,t,n,s,i,r){const o=Jn.get(e);if(!o){wn++;return}const l=c=>{c&&c.trigger()};if(ci(),t==="clear")o.forEach(l);else{const c=Q(e),d=c&&os(n);if(c&&n==="length"){const a=Number(s);o.forEach((f,p)=>{(p==="length"||p===On||!lt(p)&&p>=a)&&l(f)})}else switch((n!==void 0||o.has(void 0))&&l(o.get(n)),d&&l(o.get(On)),t){case"add":c?d&&l(o.get("length")):(l(o.get(jt)),en(e)&&l(o.get(Ls)));break;case"delete":c||(l(o.get(jt)),en(e)&&l(o.get(Ls)));break;case"set":en(e)&&l(o.get(jt));break}}ai()}function Ml(e,t){const n=Jn.get(e);return n&&n.get(t)}function qt(e){const t=ne(e);return t===e?t:(Ee(t,"iterate",On),Le(e)?t:t.map(ze))}function as(e){return Ee(e=ne(e),"iterate",On),e}function xt(e,t){return yt(e)?mt(e)?sn(ze(t)):sn(t):ze(t)}const Bl={__proto__:null,[Symbol.iterator](){return Es(this,Symbol.iterator,e=>xt(this,e))},concat(...e){return qt(this).concat(...e.map(t=>Q(t)?qt(t):t))},entries(){return Es(this,"entries",e=>(e[1]=xt(this,e[1]),e))},every(e,t){return ut(this,"every",e,t,void 0,arguments)},filter(e,t){return ut(this,"filter",e,t,n=>n.map(s=>xt(this,s)),arguments)},find(e,t){return ut(this,"find",e,t,n=>xt(this,n),arguments)},findIndex(e,t){return ut(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return ut(this,"findLast",e,t,n=>xt(this,n),arguments)},findLastIndex(e,t){return ut(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return ut(this,"forEach",e,t,void 0,arguments)},includes(...e){return Cs(this,"includes",e)},indexOf(...e){return Cs(this,"indexOf",e)},join(e){return qt(this).join(e)},lastIndexOf(...e){return Cs(this,"lastIndexOf",e)},map(e,t){return ut(this,"map",e,t,void 0,arguments)},pop(){return un(this,"pop")},push(...e){return un(this,"push",e)},reduce(e,...t){return Bi(this,"reduce",e,t)},reduceRight(e,...t){return Bi(this,"reduceRight",e,t)},shift(){return un(this,"shift")},some(e,t){return ut(this,"some",e,t,void 0,arguments)},splice(...e){return un(this,"splice",e)},toReversed(){return qt(this).toReversed()},toSorted(e){return qt(this).toSorted(e)},toSpliced(...e){return qt(this).toSpliced(...e)},unshift(...e){return un(this,"unshift",e)},values(){return Es(this,"values",e=>xt(this,e))}};function Es(e,t,n){const s=as(e),i=s[t]();return s!==e&&!Le(e)&&(i._next=i.next,i.next=()=>{const r=i._next();return r.done||(r.value=n(r.value)),r}),i}const kl=Array.prototype;function ut(e,t,n,s,i,r){const o=as(e),l=o!==e&&!Le(e),c=o[t];if(c!==kl[t]){const f=c.apply(e,r);return l?ze(f):f}let d=n;o!==e&&(l?d=function(f,p){return n.call(this,xt(e,f),p,e)}:n.length>2&&(d=function(f,p){return n.call(this,f,p,e)}));const a=c.call(o,d,s);return l&&i?i(a):a}function Bi(e,t,n,s){const i=as(e);let r=n;return i!==e&&(Le(e)?n.length>3&&(r=function(o,l,c){return n.call(this,o,l,c,e)}):r=function(o,l,c){return n.call(this,o,xt(e,l),c,e)}),i[t](r,...s)}function Cs(e,t,n){const s=ne(e);Ee(s,"iterate",On);const i=s[t](...n);return(i===-1||i===!1)&&us(n[0])?(n[0]=ne(n[0]),s[t](...n)):i}function un(e,t,n=[]){At(),ci();const s=ne(e)[t].apply(e,n);return ai(),_t(),s}const Fl=si("__proto__,__v_isRef,__isVue"),no=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(lt));function Ll(e){lt(e)||(e=String(e));const t=ne(this);return Ee(t,"has",e),t.hasOwnProperty(e)}class so{constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,s){if(n==="__v_skip")return t.__v_skip;const i=this._isReadonly,r=this._isShallow;if(n==="__v_isReactive")return!i;if(n==="__v_isReadonly")return i;if(n==="__v_isShallow")return r;if(n==="__v_raw")return s===(i?r?Yl:lo:r?oo:ro).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(s)?t:void 0;const o=Q(t);if(!i){let c;if(o&&(c=Bl[n]))return c;if(n==="hasOwnProperty")return Ll}const l=Reflect.get(t,n,me(t)?t:s);if((lt(n)?no.has(n):Fl(n))||(i||Ee(t,"get",n),r))return l;if(me(l)){const c=o&&os(n)?l:l.value;return i&&oe(c)?js(c):c}return oe(l)?i?js(l):kn(l):l}}class io extends so{constructor(t=!1){super(!1,t)}set(t,n,s,i){let r=t[n];const o=Q(t)&&os(n);if(!this._isShallow){const d=yt(r);if(!Le(s)&&!yt(s)&&(r=ne(r),s=ne(s)),!o&&me(r)&&!me(s))return d||(r.value=s),!0}const l=o?Number(n)<t.length:re(t,n),c=Reflect.set(t,n,s,me(t)?t:i);return t===ne(i)&&(l?Rt(s,r)&&gt(t,"set",n,s):gt(t,"add",n,s)),c}deleteProperty(t,n){const s=re(t,n);t[n];const i=Reflect.deleteProperty(t,n);return i&&s&&gt(t,"delete",n,void 0),i}has(t,n){const s=Reflect.has(t,n);return(!lt(n)||!no.has(n))&&Ee(t,"has",n),s}ownKeys(t){return Ee(t,"iterate",Q(t)?"length":jt),Reflect.ownKeys(t)}}class Hl extends so{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const jl=new io,Ul=new Hl,Ql=new io(!0);const Hs=e=>e,Hn=e=>Reflect.getPrototypeOf(e);function Gl(e,t,n){return function(...s){const i=this.__v_raw,r=ne(i),o=en(r),l=e==="entries"||e===Symbol.iterator&&o,c=e==="keys"&&o,d=i[e](...s),a=n?Hs:t?sn:ze;return!t&&Ee(r,"iterate",c?Ls:jt),Ae(Object.create(d),{next(){const{value:f,done:p}=d.next();return p?{value:f,done:p}:{value:l?[a(f[0]),a(f[1])]:a(f),done:p}}})}}function jn(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function Kl(e,t){const n={get(i){const r=this.__v_raw,o=ne(r),l=ne(i);e||(Rt(i,l)&&Ee(o,"get",i),Ee(o,"get",l));const{has:c}=Hn(o),d=t?Hs:e?sn:ze;if(c.call(o,i))return d(r.get(i));if(c.call(o,l))return d(r.get(l));r!==o&&r.get(i)},get size(){const i=this.__v_raw;return!e&&Ee(ne(i),"iterate",jt),i.size},has(i){const r=this.__v_raw,o=ne(r),l=ne(i);return e||(Rt(i,l)&&Ee(o,"has",i),Ee(o,"has",l)),i===l?r.has(i):r.has(i)||r.has(l)},forEach(i,r){const o=this,l=o.__v_raw,c=ne(l),d=t?Hs:e?sn:ze;return!e&&Ee(c,"iterate",jt),l.forEach((a,f)=>i.call(r,d(a),d(f),o))}};return Ae(n,e?{add:jn("add"),set:jn("set"),delete:jn("delete"),clear:jn("clear")}:{add(i){!t&&!Le(i)&&!yt(i)&&(i=ne(i));const r=ne(this);return Hn(r).has.call(r,i)||(r.add(i),gt(r,"add",i,i)),this},set(i,r){!t&&!Le(r)&&!yt(r)&&(r=ne(r));const o=ne(this),{has:l,get:c}=Hn(o);let d=l.call(o,i);d||(i=ne(i),d=l.call(o,i));const a=c.call(o,i);return o.set(i,r),d?Rt(r,a)&&gt(o,"set",i,r):gt(o,"add",i,r),this},delete(i){const r=ne(this),{has:o,get:l}=Hn(r);let c=o.call(r,i);c||(i=ne(i),c=o.call(r,i)),l&&l.call(r,i);const d=r.delete(i);return c&&gt(r,"delete",i,void 0),d},clear(){const i=ne(this),r=i.size!==0,o=i.clear();return r&&gt(i,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(i=>{n[i]=Gl(i,e,t)}),n}function di(e,t){const n=Kl(e,t);return(s,i,r)=>i==="__v_isReactive"?!e:i==="__v_isReadonly"?e:i==="__v_raw"?s:Reflect.get(re(n,i)&&i in s?n:s,i,r)}const Wl={get:di(!1,!1)},ql={get:di(!1,!0)},Jl={get:di(!0,!1)};const ro=new WeakMap,oo=new WeakMap,lo=new WeakMap,Yl=new WeakMap;function zl(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Xl(e){return e.__v_skip||!Object.isExtensible(e)?0:zl(Sl(e))}function kn(e){return yt(e)?e:hi(e,!1,jl,Wl,ro)}function co(e){return hi(e,!1,Ql,ql,oo)}function js(e){return hi(e,!0,Ul,Jl,lo)}function hi(e,t,n,s,i){if(!oe(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const r=Xl(e);if(r===0)return e;const o=i.get(e);if(o)return o;const l=new Proxy(e,r===2?s:n);return i.set(e,l),l}function mt(e){return yt(e)?mt(e.__v_raw):!!(e&&e.__v_isReactive)}function yt(e){return!!(e&&e.__v_isReadonly)}function Le(e){return!!(e&&e.__v_isShallow)}function us(e){return e?!!e.__v_raw:!1}function ne(e){const t=e&&e.__v_raw;return t?ne(t):e}function pi(e){return!re(e,"__v_skip")&&Object.isExtensible(e)&&Hr(e,"__v_skip",!0),e}const ze=e=>oe(e)?kn(e):e,sn=e=>oe(e)?js(e):e;function me(e){return e?e.__v_isRef===!0:!1}function He(e){return ao(e,!1)}function Zl(e){return ao(e,!0)}function ao(e,t){return me(e)?e:new ec(e,t)}class ec{constructor(t,n){this.dep=new fi,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?t:ne(t),this._value=n?t:ze(t),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(t){const n=this._rawValue,s=this.__v_isShallow||Le(t)||yt(t);t=s?t:ne(t),Rt(t,n)&&(this._rawValue=t,this._value=s?t:ze(t),this.dep.trigger())}}function _e(e){return me(e)?e.value:e}const tc={get:(e,t,n)=>t==="__v_raw"?e:_e(Reflect.get(e,t,n)),set:(e,t,n,s)=>{const i=e[t];return me(i)&&!me(n)?(i.value=n,!0):Reflect.set(e,t,n,s)}};function uo(e){return mt(e)?e:new Proxy(e,tc)}function nc(e){const t=Q(e)?new Array(e.length):{};for(const n in e)t[n]=ic(e,n);return t}class sc{constructor(t,n,s){this._object=t,this._key=n,this._defaultValue=s,this.__v_isRef=!0,this._value=void 0,this._raw=ne(t);let i=!0,r=t;if(!Q(t)||!os(String(n)))do i=!us(r)||Le(r);while(i&&(r=r.__v_raw));this._shallow=i}get value(){let t=this._object[this._key];return this._shallow&&(t=_e(t)),this._value=t===void 0?this._defaultValue:t}set value(t){if(this._shallow&&me(this._raw[this._key])){const n=this._object[this._key];if(me(n)){n.value=t;return}}this._object[this._key]=t}get dep(){return Ml(this._raw,this._key)}}function ic(e,t,n){return new sc(e,t,n)}class rc{constructor(t,n,s){this.fn=t,this.setter=n,this._value=void 0,this.dep=new fi(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=wn-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=s}notify(){if(this.flags|=16,!(this.flags&8)&&ue!==this)return Yr(this,!0),!0}get value(){const t=this.dep.track();return Zr(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function oc(e,t,n=!1){let s,i;return W(e)?s=e:(s=e.get,i=e.set),new rc(s,i,n)}const Un={},Yn=new WeakMap;let Ft;function lc(e,t=!1,n=Ft){if(n){let s=Yn.get(n);s||Yn.set(n,s=[]),s.push(e)}}function cc(e,t,n=fe){const{immediate:s,deep:i,once:r,scheduler:o,augmentJob:l,call:c}=n,d=E=>i?E:Le(E)||i===!1||i===0?Ot(E,1):Ot(E);let a,f,p,g,b=!1,_=!1;if(me(e)?(f=()=>e.value,b=Le(e)):mt(e)?(f=()=>d(e),b=!0):Q(e)?(_=!0,b=e.some(E=>mt(E)||Le(E)),f=()=>e.map(E=>{if(me(E))return E.value;if(mt(E))return d(E);if(W(E))return c?c(E,2):E()})):W(e)?t?f=c?()=>c(e,2):e:f=()=>{if(p){At();try{p()}finally{_t()}}const E=Ft;Ft=a;try{return c?c(e,3,[g]):e(g)}finally{Ft=E}}:f=Je,t&&i){const E=f,B=i===!0?1/0:i;f=()=>Ot(E(),B)}const k=Wr(),M=()=>{a.stop(),k&&k.active&&ri(k.effects,a)};if(r&&t){const E=t;t=(...B)=>{E(...B),M()}}let x=_?new Array(e.length).fill(Un):Un;const $=E=>{if(!(!(a.flags&1)||!a.dirty&&!E))if(t){const B=a.run();if(i||b||(_?B.some((q,j)=>Rt(q,x[j])):Rt(B,x))){p&&p();const q=Ft;Ft=a;try{const j=[B,x===Un?void 0:_&&x[0]===Un?[]:x,g];x=B,c?c(t,3,j):t(...j)}finally{Ft=q}}}else a.run()};return l&&l($),a=new qr(f),a.scheduler=o?()=>o($,!1):$,g=E=>lc(E,!1,a),p=a.onStop=()=>{const E=Yn.get(a);if(E){if(c)c(E,4);else for(const B of E)B();Yn.delete(a)}},t?s?$(!0):x=a.run():o?o($.bind(null,!0),!0):a.run(),M.pause=a.pause.bind(a),M.resume=a.resume.bind(a),M.stop=M,M}function Ot(e,t=1/0,n){if(t<=0||!oe(e)||e.__v_skip||(n=n||new Map,(n.get(e)||0)>=t))return e;if(n.set(e,t),t--,me(e))Ot(e.value,t,n);else if(Q(e))for(let s=0;s<e.length;s++)Ot(e[s],t,n);else if(Br(e)||en(e))e.forEach(s=>{Ot(s,t,n)});else if(Lr(e)){for(const s in e)Ot(e[s],t,n);for(const s of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,s)&&Ot(e[s],t,n)}return e}/**
* @vue/runtime-core v3.5.29
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Fn(e,t,n,s){try{return s?e(...s):e()}catch(i){fs(i,t,n)}}function Xe(e,t,n,s){if(W(e)){const i=Fn(e,t,n,s);return i&&kr(i)&&i.catch(r=>{fs(r,t,n)}),i}if(Q(e)){const i=[];for(let r=0;r<e.length;r++)i.push(Xe(e[r],t,n,s));return i}}function fs(e,t,n,s=!0){const i=t?t.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=t&&t.appContext.config||fe;if(t){let l=t.parent;const c=t.proxy,d=`https://vuejs.org/error-reference/#runtime-${n}`;for(;l;){const a=l.ec;if(a){for(let f=0;f<a.length;f++)if(a[f](e,c,d)===!1)return}l=l.parent}if(r){At(),Fn(r,null,10,[e,c,d]),_t();return}}ac(e,n,i,s,o)}function ac(e,t,n,s=!0,i=!1){if(i)throw e;console.error(e)}const Re=[];let st=-1;const tn=[];let Tt=null,Yt=0;const fo=Promise.resolve();let zn=null;function It(e){const t=zn||fo;return e?t.then(this?e.bind(this):e):t}function uc(e){let t=st+1,n=Re.length;for(;t<n;){const s=t+n>>>1,i=Re[s],r=Rn(i);r<e||r===e&&i.flags&2?t=s+1:n=s}return t}function gi(e){if(!(e.flags&1)){const t=Rn(e),n=Re[Re.length-1];!n||!(e.flags&2)&&t>=Rn(n)?Re.push(e):Re.splice(uc(t),0,e),e.flags|=1,ho()}}function ho(){zn||(zn=fo.then(go))}function fc(e){Q(e)?tn.push(...e):Tt&&e.id===-1?Tt.splice(Yt+1,0,e):e.flags&1||(tn.push(e),e.flags|=1),ho()}function ki(e,t,n=st+1){for(;n<Re.length;n++){const s=Re[n];if(s&&s.flags&2){if(e&&s.id!==e.uid)continue;Re.splice(n,1),n--,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function po(e){if(tn.length){const t=[...new Set(tn)].sort((n,s)=>Rn(n)-Rn(s));if(tn.length=0,Tt){Tt.push(...t);return}for(Tt=t,Yt=0;Yt<Tt.length;Yt++){const n=Tt[Yt];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Tt=null,Yt=0}}const Rn=e=>e.id==null?e.flags&2?-1:1/0:e.id;function go(e){const t=Je;try{for(st=0;st<Re.length;st++){const n=Re[st];n&&!(n.flags&8)&&(n.flags&4&&(n.flags&=-2),Fn(n,n.i,n.i?15:14),n.flags&4||(n.flags&=-2))}}finally{for(;st<Re.length;st++){const n=Re[st];n&&(n.flags&=-2)}st=-1,Re.length=0,po(),zn=null,(Re.length||tn.length)&&go()}}let qe=null,mo=null;function Xn(e){const t=qe;return qe=e,mo=e&&e.type.__scopeId||null,t}function nn(e,t=qe,n){if(!t||e._n)return e;const s=(...i)=>{s._d&&ns(-1);const r=Xn(t);let o;try{o=e(...i)}finally{Xn(r),s._d&&ns(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function Nt(e,t,n,s){const i=e.dirs,r=t&&t.dirs;for(let o=0;o<i.length;o++){const l=i[o];r&&(l.oldValue=r[o].value);let c=l.dir[s];c&&(At(),Xe(c,n,8,[e.el,l,e,t]),_t())}}function Qn(e,t){if(xe){let n=xe.provides;const s=xe.parent&&xe.parent.provides;s===n&&(n=xe.provides=Object.create(s)),n[e]=t}}function Ge(e,t,n=!1){const s=bi();if(s||Ut){let i=Ut?Ut._context.provides:s?s.parent==null||s.ce?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:void 0;if(i&&e in i)return i[e];if(arguments.length>1)return n&&W(t)?t.call(s&&s.proxy):t}}function dc(){return!!(bi()||Ut)}const hc=Symbol.for("v-scx"),pc=()=>Ge(hc);function vt(e,t,n){return vo(e,t,n)}function vo(e,t,n=fe){const{immediate:s,deep:i,flush:r,once:o}=n,l=Ae({},n),c=t&&s||!t&&r!=="post";let d;if($n){if(r==="sync"){const g=pc();d=g.__watcherHandles||(g.__watcherHandles=[])}else if(!c){const g=()=>{};return g.stop=Je,g.resume=Je,g.pause=Je,g}}const a=xe;l.call=(g,b,_)=>Xe(g,a,b,_);let f=!1;r==="post"?l.scheduler=g=>{Ne(g,a&&a.suspense)}:r!=="sync"&&(f=!0,l.scheduler=(g,b)=>{b?g():gi(g)}),l.augmentJob=g=>{t&&(g.flags|=4),f&&(g.flags|=2,a&&(g.id=a.uid,g.i=a))};const p=cc(e,t,l);return $n&&(d?d.push(p):c&&p()),p}function gc(e,t,n){const s=this.proxy,i=ve(e)?e.includes(".")?Ao(s,e):()=>s[e]:e.bind(s,s);let r;W(t)?r=t:(r=t.handler,n=t);const o=Ln(this),l=vo(i,r.bind(s),n);return o(),l}function Ao(e,t){const n=t.split(".");return()=>{let s=e;for(let i=0;i<n.length&&s;i++)s=s[n[i]];return s}}const mc=Symbol("_vte"),_o=e=>e.__isTeleport,it=Symbol("_leaveCb"),fn=Symbol("_enterCb");function vc(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return ps(()=>{e.isMounted=!0}),wo(()=>{e.isUnmounting=!0}),e}const Ue=[Function,Array],yo={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Ue,onEnter:Ue,onAfterEnter:Ue,onEnterCancelled:Ue,onBeforeLeave:Ue,onLeave:Ue,onAfterLeave:Ue,onLeaveCancelled:Ue,onBeforeAppear:Ue,onAppear:Ue,onAfterAppear:Ue,onAppearCancelled:Ue},So=e=>{const t=e.subTree;return t.component?So(t.component):t},Ac={name:"BaseTransition",props:yo,setup(e,{slots:t}){const n=bi(),s=vc();return()=>{const i=t.default&&Eo(t.default(),!0);if(!i||!i.length)return;const r=Vo(i),o=ne(e),{mode:l}=o;if(s.isLeaving)return xs(r);const c=Fi(r);if(!c)return xs(r);let d=Us(c,o,s,n,f=>d=f);c.type!==Ie&&In(c,d);let a=n.subTree&&Fi(n.subTree);if(a&&a.type!==Ie&&!Lt(a,c)&&So(n).type!==Ie){let f=Us(a,o,s,n);if(In(a,f),l==="out-in"&&c.type!==Ie)return s.isLeaving=!0,f.afterLeave=()=>{s.isLeaving=!1,n.job.flags&8||n.update(),delete f.afterLeave,a=void 0},xs(r);l==="in-out"&&c.type!==Ie?f.delayLeave=(p,g,b)=>{const _=bo(s,a);_[String(a.key)]=a,p[it]=()=>{g(),p[it]=void 0,delete d.delayedLeave,a=void 0},d.delayedLeave=()=>{b(),delete d.delayedLeave,a=void 0}}:a=void 0}else a&&(a=void 0);return r}}};function Vo(e){let t=e[0];if(e.length>1){for(const n of e)if(n.type!==Ie){t=n;break}}return t}const _c=Ac;function bo(e,t){const{leavingVNodes:n}=e;let s=n.get(t.type);return s||(s=Object.create(null),n.set(t.type,s)),s}function Us(e,t,n,s,i){const{appear:r,mode:o,persisted:l=!1,onBeforeEnter:c,onEnter:d,onAfterEnter:a,onEnterCancelled:f,onBeforeLeave:p,onLeave:g,onAfterLeave:b,onLeaveCancelled:_,onBeforeAppear:k,onAppear:M,onAfterAppear:x,onAppearCancelled:$}=t,E=String(e.key),B=bo(n,e),q=(T,G)=>{T&&Xe(T,s,9,G)},j=(T,G)=>{const z=G[1];q(T,G),Q(T)?T.every(O=>O.length<=1)&&z():T.length<=1&&z()},H={mode:o,persisted:l,beforeEnter(T){let G=c;if(!n.isMounted)if(r)G=k||c;else return;T[it]&&T[it](!0);const z=B[E];z&&Lt(e,z)&&z.el[it]&&z.el[it](),q(G,[T])},enter(T){if(B[E]===e)return;let G=d,z=a,O=f;if(!n.isMounted)if(r)G=M||d,z=x||a,O=$||f;else return;let X=!1;T[fn]=Te=>{X||(X=!0,Te?q(O,[T]):q(z,[T]),H.delayedLeave&&H.delayedLeave(),T[fn]=void 0)};const pe=T[fn].bind(null,!1);G?j(G,[T,pe]):pe()},leave(T,G){const z=String(e.key);if(T[fn]&&T[fn](!0),n.isUnmounting)return G();q(p,[T]);let O=!1;T[it]=pe=>{O||(O=!0,G(),pe?q(_,[T]):q(b,[T]),T[it]=void 0,B[z]===e&&delete B[z])};const X=T[it].bind(null,!1);B[z]=e,g?j(g,[T,X]):X()},clone(T){const G=Us(T,t,n,s,i);return i&&i(G),G}};return H}function xs(e){if(ds(e))return e=$t(e),e.children=null,e}function Fi(e){if(!ds(e))return _o(e.type)&&e.children?Vo(e.children):e;if(e.component)return e.component.subTree;const{shapeFlag:t,children:n}=e;if(n){if(t&16)return n[0];if(t&32&&W(n.default))return n.default()}}function In(e,t){e.shapeFlag&6&&e.component?(e.transition=t,In(e.component.subTree,t)):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function Eo(e,t=!1,n){let s=[],i=0;for(let r=0;r<e.length;r++){let o=e[r];const l=n==null?o.key:String(n)+String(o.key!=null?o.key:r);o.type===Ce?(o.patchFlag&128&&i++,s=s.concat(Eo(o.children,t,l))):(t||o.type!==Ie)&&s.push(l!=null?$t(o,{key:l}):o)}if(i>1)for(let r=0;r<s.length;r++)s[r].patchFlag=-2;return s}function Co(e,t){return W(e)?(()=>Ae({name:e.name},t,{setup:e}))():e}function xo(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}function Li(e,t){let n;return!!((n=Object.getOwnPropertyDescriptor(e,t))&&!n.configurable)}const Zn=new WeakMap;function An(e,t,n,s,i=!1){if(Q(e)){e.forEach((_,k)=>An(_,t&&(Q(t)?t[k]:t),n,s,i));return}if(_n(s)&&!i){s.shapeFlag&512&&s.type.__asyncResolved&&s.component.subTree.component&&An(e,t,n,s.component.subTree);return}const r=s.shapeFlag&4?Ei(s.component):s.el,o=i?null:r,{i:l,r:c}=e,d=t&&t.r,a=l.refs===fe?l.refs={}:l.refs,f=l.setupState,p=ne(f),g=f===fe?Mr:_=>Li(a,_)?!1:re(p,_),b=(_,k)=>!(k&&Li(a,k));if(d!=null&&d!==c){if(Hi(t),ve(d))a[d]=null,g(d)&&(f[d]=null);else if(me(d)){const _=t;b(d,_.k)&&(d.value=null),_.k&&(a[_.k]=null)}}if(W(c))Fn(c,l,12,[o,a]);else{const _=ve(c),k=me(c);if(_||k){const M=()=>{if(e.f){const x=_?g(c)?f[c]:a[c]:b()||!e.k?c.value:a[e.k];if(i)Q(x)&&ri(x,r);else if(Q(x))x.includes(r)||x.push(r);else if(_)a[c]=[r],g(c)&&(f[c]=a[c]);else{const $=[r];b(c,e.k)&&(c.value=$),e.k&&(a[e.k]=$)}}else _?(a[c]=o,g(c)&&(f[c]=o)):k&&(b(c,e.k)&&(c.value=o),e.k&&(a[e.k]=o))};if(o){const x=()=>{M(),Zn.delete(e)};x.id=-1,Zn.set(e,x),Ne(x,n)}else Hi(e),M()}}}function Hi(e){const t=Zn.get(e);t&&(t.flags|=8,Zn.delete(e))}Bn().requestIdleCallback;Bn().cancelIdleCallback;const _n=e=>!!e.type.__asyncLoader,ds=e=>e.type.__isKeepAlive;function yc(e,t){To(e,"a",t)}function Sc(e,t){To(e,"da",t)}function To(e,t,n=xe){const s=e.__wdc||(e.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return e()});if(hs(t,s,n),n){let i=n.parent;for(;i&&i.parent;)ds(i.parent.vnode)&&Vc(s,t,n,i),i=i.parent}}function Vc(e,t,n,s){const i=hs(t,e,s,!0);mi(()=>{ri(s[t],i)},n)}function hs(e,t,n=xe,s=!1){if(n){const i=n[e]||(n[e]=[]),r=t.__weh||(t.__weh=(...o)=>{At();const l=Ln(n),c=Xe(t,n,e,o);return l(),_t(),c});return s?i.unshift(r):i.push(r),r}}const St=e=>(t,n=xe)=>{(!$n||e==="sp")&&hs(e,(...s)=>t(...s),n)},bc=St("bm"),ps=St("m"),Ec=St("bu"),Cc=St("u"),wo=St("bum"),mi=St("um"),xc=St("sp"),Tc=St("rtg"),wc=St("rtc");function Oc(e,t=xe){hs("ec",e,t)}const vi="components";function Oo(e,t){return Io(vi,e,!0,t)||e}const Ro=Symbol.for("v-ndc");function Rc(e){return ve(e)?Io(vi,e,!1)||e:e||Ro}function Io(e,t,n=!0,s=!1){const i=qe||xe;if(i){const r=i.type;if(e===vi){const l=ga(r,!1);if(l&&(l===t||l===Ke(t)||l===cs(Ke(t))))return r}const o=ji(i[e]||r[e],t)||ji(i.appContext[e],t);return!o&&s?r:o}}function ji(e,t){return e&&(e[t]||e[Ke(t)]||e[cs(Ke(t))])}function es(e,t,n,s){let i;const r=n&&n[s],o=Q(e);if(o||ve(e)){const l=o&&mt(e);let c=!1,d=!1;l&&(c=!Le(e),d=yt(e),e=as(e)),i=new Array(e.length);for(let a=0,f=e.length;a<f;a++)i[a]=t(c?d?sn(ze(e[a])):ze(e[a]):e[a],a,void 0,r&&r[a])}else if(typeof e=="number"){i=new Array(e);for(let l=0;l<e;l++)i[l]=t(l+1,l,void 0,r&&r[l])}else if(oe(e))if(e[Symbol.iterator])i=Array.from(e,(l,c)=>t(l,c,void 0,r&&r[c]));else{const l=Object.keys(e);i=new Array(l.length);for(let c=0,d=l.length;c<d;c++){const a=l[c];i[c]=t(e[a],a,c,r&&r[c])}}else i=[];return n&&(n[s]=i),i}const Qs=e=>e?Yo(e)?Ei(e):Qs(e.parent):null,yn=Ae(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Qs(e.parent),$root:e=>Qs(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>Ai(e),$forceUpdate:e=>e.f||(e.f=()=>{gi(e.update)}),$nextTick:e=>e.n||(e.n=It.bind(e.proxy)),$watch:e=>gc.bind(e)}),Ts=(e,t)=>e!==fe&&!e.__isScriptSetup&&re(e,t),Ic={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:n,setupState:s,data:i,props:r,accessCache:o,type:l,appContext:c}=e;if(t[0]!=="$"){const p=o[t];if(p!==void 0)switch(p){case 1:return s[t];case 2:return i[t];case 4:return n[t];case 3:return r[t]}else{if(Ts(s,t))return o[t]=1,s[t];if(i!==fe&&re(i,t))return o[t]=2,i[t];if(re(r,t))return o[t]=3,r[t];if(n!==fe&&re(n,t))return o[t]=4,n[t];Gs&&(o[t]=0)}}const d=yn[t];let a,f;if(d)return t==="$attrs"&&Ee(e.attrs,"get",""),d(e);if((a=l.__cssModules)&&(a=a[t]))return a;if(n!==fe&&re(n,t))return o[t]=4,n[t];if(f=c.config.globalProperties,re(f,t))return f[t]},set({_:e},t,n){const{data:s,setupState:i,ctx:r}=e;return Ts(i,t)?(i[t]=n,!0):s!==fe&&re(s,t)?(s[t]=n,!0):re(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(r[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:s,appContext:i,props:r,type:o}},l){let c;return!!(n[l]||e!==fe&&l[0]!=="$"&&re(e,l)||Ts(t,l)||re(r,l)||re(s,l)||re(yn,l)||re(i.config.globalProperties,l)||(c=o.__cssModules)&&c[l])},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:re(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function Ui(e){return Q(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let Gs=!0;function Pc(e){const t=Ai(e),n=e.proxy,s=e.ctx;Gs=!1,t.beforeCreate&&Qi(t.beforeCreate,e,"bc");const{data:i,computed:r,methods:o,watch:l,provide:c,inject:d,created:a,beforeMount:f,mounted:p,beforeUpdate:g,updated:b,activated:_,deactivated:k,beforeDestroy:M,beforeUnmount:x,destroyed:$,unmounted:E,render:B,renderTracked:q,renderTriggered:j,errorCaptured:H,serverPrefetch:T,expose:G,inheritAttrs:z,components:O,directives:X,filters:pe}=t;if(d&&$c(d,s,null),o)for(const J in o){const se=o[J];W(se)&&(s[J]=se.bind(n))}if(i){const J=i.call(n,n);oe(J)&&(e.data=kn(J))}if(Gs=!0,r)for(const J in r){const se=r[J],at=W(se)?se.bind(n,n):W(se.get)?se.get.bind(n,n):Je,Vt=!W(se)&&W(se.set)?se.set.bind(n):Je,et=ye({get:at,set:Vt});Object.defineProperty(s,J,{enumerable:!0,configurable:!0,get:()=>et.value,set:$e=>et.value=$e})}if(l)for(const J in l)Po(l[J],s,n,J);if(c){const J=W(c)?c.call(n):c;Reflect.ownKeys(J).forEach(se=>{Qn(se,J[se])})}a&&Qi(a,e,"c");function ce(J,se){Q(se)?se.forEach(at=>J(at.bind(n))):se&&J(se.bind(n))}if(ce(bc,f),ce(ps,p),ce(Ec,g),ce(Cc,b),ce(yc,_),ce(Sc,k),ce(Oc,H),ce(wc,q),ce(Tc,j),ce(wo,x),ce(mi,E),ce(xc,T),Q(G))if(G.length){const J=e.exposed||(e.exposed={});G.forEach(se=>{Object.defineProperty(J,se,{get:()=>n[se],set:at=>n[se]=at,enumerable:!0})})}else e.exposed||(e.exposed={});B&&e.render===Je&&(e.render=B),z!=null&&(e.inheritAttrs=z),O&&(e.components=O),X&&(e.directives=X),T&&xo(e)}function $c(e,t,n=Je){Q(e)&&(e=Ks(e));for(const s in e){const i=e[s];let r;oe(i)?"default"in i?r=Ge(i.from||s,i.default,!0):r=Ge(i.from||s):r=Ge(i),me(r)?Object.defineProperty(t,s,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):t[s]=r}}function Qi(e,t,n){Xe(Q(e)?e.map(s=>s.bind(t.proxy)):e.bind(t.proxy),t,n)}function Po(e,t,n,s){let i=s.includes(".")?Ao(n,s):()=>n[s];if(ve(e)){const r=t[e];W(r)&&vt(i,r)}else if(W(e))vt(i,e.bind(n));else if(oe(e))if(Q(e))e.forEach(r=>Po(r,t,n,s));else{const r=W(e.handler)?e.handler.bind(n):t[e.handler];W(r)&&vt(i,r,e)}}function Ai(e){const t=e.type,{mixins:n,extends:s}=t,{mixins:i,optionsCache:r,config:{optionMergeStrategies:o}}=e.appContext,l=r.get(t);let c;return l?c=l:!i.length&&!n&&!s?c=t:(c={},i.length&&i.forEach(d=>ts(c,d,o,!0)),ts(c,t,o)),oe(t)&&r.set(t,c),c}function ts(e,t,n,s=!1){const{mixins:i,extends:r}=t;r&&ts(e,r,n,!0),i&&i.forEach(o=>ts(e,o,n,!0));for(const o in t)if(!(s&&o==="expose")){const l=Dc[o]||n&&n[o];e[o]=l?l(e[o],t[o]):t[o]}return e}const Dc={data:Gi,props:Ki,emits:Ki,methods:pn,computed:pn,beforeCreate:we,created:we,beforeMount:we,mounted:we,beforeUpdate:we,updated:we,beforeDestroy:we,beforeUnmount:we,destroyed:we,unmounted:we,activated:we,deactivated:we,errorCaptured:we,serverPrefetch:we,components:pn,directives:pn,watch:Mc,provide:Gi,inject:Nc};function Gi(e,t){return t?e?function(){return Ae(W(e)?e.call(this,this):e,W(t)?t.call(this,this):t)}:t:e}function Nc(e,t){return pn(Ks(e),Ks(t))}function Ks(e){if(Q(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function we(e,t){return e?[...new Set([].concat(e,t))]:t}function pn(e,t){return e?Ae(Object.create(null),e,t):t}function Ki(e,t){return e?Q(e)&&Q(t)?[...new Set([...e,...t])]:Ae(Object.create(null),Ui(e),Ui(t!=null?t:{})):t}function Mc(e,t){if(!e)return t;if(!t)return e;const n=Ae(Object.create(null),e);for(const s in t)n[s]=we(e[s],t[s]);return n}function $o(){return{app:null,config:{isNativeTag:Mr,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Bc=0;function kc(e,t){return function(s,i=null){W(s)||(s=Ae({},s)),i!=null&&!oe(i)&&(i=null);const r=$o(),o=new WeakSet,l=[];let c=!1;const d=r.app={_uid:Bc++,_component:s,_props:i,_container:null,_context:r,_instance:null,version:va,get config(){return r.config},set config(a){},use(a,...f){return o.has(a)||(a&&W(a.install)?(o.add(a),a.install(d,...f)):W(a)&&(o.add(a),a(d,...f))),d},mixin(a){return r.mixins.includes(a)||r.mixins.push(a),d},component(a,f){return f?(r.components[a]=f,d):r.components[a]},directive(a,f){return f?(r.directives[a]=f,d):r.directives[a]},mount(a,f,p){if(!c){const g=d._ceVNode||he(s,i);return g.appContext=r,p===!0?p="svg":p===!1&&(p=void 0),f&&t?t(g,a):e(g,a,p),c=!0,d._container=a,a.__vue_app__=d,Ei(g.component)}},onUnmount(a){l.push(a)},unmount(){c&&(Xe(l,d._instance,16),e(null,d._container),delete d._container.__vue_app__)},provide(a,f){return r.provides[a]=f,d},runWithContext(a){const f=Ut;Ut=d;try{return a()}finally{Ut=f}}};return d}}let Ut=null;const Fc=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${Ke(t)}Modifiers`]||e[`${Gt(t)}Modifiers`];function Lc(e,t,...n){if(e.isUnmounted)return;const s=e.vnode.props||fe;let i=n;const r=t.startsWith("update:"),o=r&&Fc(s,t.slice(7));o&&(o.trim&&(i=n.map(a=>ve(a)?a.trim():a)),o.number&&(i=n.map(El)));let l,c=s[l=ys(t)]||s[l=ys(Ke(t))];!c&&r&&(c=s[l=ys(Gt(t))]),c&&Xe(c,e,6,i);const d=s[l+"Once"];if(d){if(!e.emitted)e.emitted={};else if(e.emitted[l])return;e.emitted[l]=!0,Xe(d,e,6,i)}}const Hc=new WeakMap;function Do(e,t,n=!1){const s=n?Hc:t.emitsCache,i=s.get(e);if(i!==void 0)return i;const r=e.emits;let o={},l=!1;if(!W(e)){const c=d=>{const a=Do(d,t,!0);a&&(l=!0,Ae(o,a))};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}return!r&&!l?(oe(e)&&s.set(e,null),null):(Q(r)?r.forEach(c=>o[c]=null):Ae(o,r),oe(e)&&s.set(e,o),o)}function gs(e,t){return!e||!rs(t)?!1:(t=t.slice(2).replace(/Once$/,""),re(e,t[0].toLowerCase()+t.slice(1))||re(e,Gt(t))||re(e,t))}function ws(e){const{type:t,vnode:n,proxy:s,withProxy:i,propsOptions:[r],slots:o,attrs:l,emit:c,render:d,renderCache:a,props:f,data:p,setupState:g,ctx:b,inheritAttrs:_}=e,k=Xn(e);let M,x;try{if(n.shapeFlag&4){const E=i||s,B=E;M=rt(d.call(B,E,a,f,g,p,b)),x=l}else{const E=t;M=rt(E.length>1?E(f,{attrs:l,slots:o,emit:c}):E(f,null)),x=t.props?l:jc(l)}}catch(E){Sn.length=0,fs(E,e,1),M=he(Ie)}let $=M;if(x&&_!==!1){const E=Object.keys(x),{shapeFlag:B}=$;E.length&&B&7&&(r&&E.some(ii)&&(x=Uc(x,r)),$=$t($,x,!1,!0))}return n.dirs&&($=$t($,null,!1,!0),$.dirs=$.dirs?$.dirs.concat(n.dirs):n.dirs),n.transition&&In($,n.transition),M=$,Xn(k),M}const jc=e=>{let t;for(const n in e)(n==="class"||n==="style"||rs(n))&&((t||(t={}))[n]=e[n]);return t},Uc=(e,t)=>{const n={};for(const s in e)(!ii(s)||!(s.slice(9)in t))&&(n[s]=e[s]);return n};function Qc(e,t,n){const{props:s,children:i,component:r}=e,{props:o,children:l,patchFlag:c}=t,d=r.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return s?Wi(s,o,d):!!o;if(c&8){const a=t.dynamicProps;for(let f=0;f<a.length;f++){const p=a[f];if(No(o,s,p)&&!gs(d,p))return!0}}}else return(i||l)&&(!l||!l.$stable)?!0:s===o?!1:s?o?Wi(s,o,d):!0:!!o;return!1}function Wi(e,t,n){const s=Object.keys(t);if(s.length!==Object.keys(e).length)return!0;for(let i=0;i<s.length;i++){const r=s[i];if(No(t,e,r)&&!gs(n,r))return!0}return!1}function No(e,t,n){const s=e[n],i=t[n];return n==="style"&&oe(s)&&oe(i)?!li(s,i):s!==i}function Gc({vnode:e,parent:t},n){for(;t;){const s=t.subTree;if(s.suspense&&s.suspense.activeBranch===e&&(s.el=e.el),s===e)(e=t.vnode).el=n,t=t.parent;else break}}const Mo={},Bo=()=>Object.create(Mo),ko=e=>Object.getPrototypeOf(e)===Mo;function Kc(e,t,n,s=!1){const i={},r=Bo();e.propsDefaults=Object.create(null),Fo(e,t,i,r);for(const o in e.propsOptions[0])o in i||(i[o]=void 0);n?e.props=s?i:co(i):e.type.props?e.props=i:e.props=r,e.attrs=r}function Wc(e,t,n,s){const{props:i,attrs:r,vnode:{patchFlag:o}}=e,l=ne(i),[c]=e.propsOptions;let d=!1;if((s||o>0)&&!(o&16)){if(o&8){const a=e.vnode.dynamicProps;for(let f=0;f<a.length;f++){let p=a[f];if(gs(e.emitsOptions,p))continue;const g=t[p];if(c)if(re(r,p))g!==r[p]&&(r[p]=g,d=!0);else{const b=Ke(p);i[b]=Ws(c,l,b,g,e,!1)}else g!==r[p]&&(r[p]=g,d=!0)}}}else{Fo(e,t,i,r)&&(d=!0);let a;for(const f in l)(!t||!re(t,f)&&((a=Gt(f))===f||!re(t,a)))&&(c?n&&(n[f]!==void 0||n[a]!==void 0)&&(i[f]=Ws(c,l,f,void 0,e,!0)):delete i[f]);if(r!==l)for(const f in r)(!t||!re(t,f)&&!0)&&(delete r[f],d=!0)}d&&gt(e.attrs,"set","")}function Fo(e,t,n,s){const[i,r]=e.propsOptions;let o=!1,l;if(t)for(let c in t){if(gn(c))continue;const d=t[c];let a;i&&re(i,a=Ke(c))?!r||!r.includes(a)?n[a]=d:(l||(l={}))[a]=d:gs(e.emitsOptions,c)||(!(c in s)||d!==s[c])&&(s[c]=d,o=!0)}if(r){const c=ne(n),d=l||fe;for(let a=0;a<r.length;a++){const f=r[a];n[f]=Ws(i,c,f,d[f],e,!re(d,f))}}return o}function Ws(e,t,n,s,i,r){const o=e[n];if(o!=null){const l=re(o,"default");if(l&&s===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&W(c)){const{propsDefaults:d}=i;if(n in d)s=d[n];else{const a=Ln(i);s=d[n]=c.call(null,t),a()}}else s=c;i.ce&&i.ce._setProp(n,s)}o[0]&&(r&&!l?s=!1:o[1]&&(s===""||s===Gt(n))&&(s=!0))}return s}const qc=new WeakMap;function Lo(e,t,n=!1){const s=n?qc:t.propsCache,i=s.get(e);if(i)return i;const r=e.props,o={},l=[];let c=!1;if(!W(e)){const a=f=>{c=!0;const[p,g]=Lo(f,t,!0);Ae(o,p),g&&l.push(...g)};!n&&t.mixins.length&&t.mixins.forEach(a),e.extends&&a(e.extends),e.mixins&&e.mixins.forEach(a)}if(!r&&!c)return oe(e)&&s.set(e,Zt),Zt;if(Q(r))for(let a=0;a<r.length;a++){const f=Ke(r[a]);qi(f)&&(o[f]=fe)}else if(r)for(const a in r){const f=Ke(a);if(qi(f)){const p=r[a],g=o[f]=Q(p)||W(p)?{type:p}:Ae({},p),b=g.type;let _=!1,k=!0;if(Q(b))for(let M=0;M<b.length;++M){const x=b[M],$=W(x)&&x.name;if($==="Boolean"){_=!0;break}else $==="String"&&(k=!1)}else _=W(b)&&b.name==="Boolean";g[0]=_,g[1]=k,(_||re(g,"default"))&&l.push(f)}}const d=[o,l];return oe(e)&&s.set(e,d),d}function qi(e){return e[0]!=="$"&&!gn(e)}const _i=e=>e==="_"||e==="_ctx"||e==="$stable",yi=e=>Q(e)?e.map(rt):[rt(e)],Jc=(e,t,n)=>{if(t._n)return t;const s=nn((...i)=>yi(t(...i)),n);return s._c=!1,s},Ho=(e,t,n)=>{const s=e._ctx;for(const i in e){if(_i(i))continue;const r=e[i];if(W(r))t[i]=Jc(i,r,s);else if(r!=null){const o=yi(r);t[i]=()=>o}}},jo=(e,t)=>{const n=yi(t);e.slots.default=()=>n},Uo=(e,t,n)=>{for(const s in t)(n||!_i(s))&&(e[s]=t[s])},Yc=(e,t,n)=>{const s=e.slots=Bo();if(e.vnode.shapeFlag&32){const i=t._;i?(Uo(s,t,n),n&&Hr(s,"_",i,!0)):Ho(t,s)}else t&&jo(e,t)},zc=(e,t,n)=>{const{vnode:s,slots:i}=e;let r=!0,o=fe;if(s.shapeFlag&32){const l=t._;l?n&&l===1?r=!1:Uo(i,t,n):(r=!t.$stable,Ho(t,i)),o=t}else t&&(jo(e,t),o={default:1});if(r)for(const l in i)!_i(l)&&o[l]==null&&delete i[l]};function Xc(){typeof __VUE_PROD_HYDRATION_MISMATCH_DETAILS__!="boolean"&&(Bn().__VUE_PROD_HYDRATION_MISMATCH_DETAILS__=!1)}const Ne=sa;function Zc(e){return ea(e)}function ea(e,t){Xc();const n=Bn();n.__VUE__=!0;const{insert:s,remove:i,patchProp:r,createElement:o,createText:l,createComment:c,setText:d,setElementText:a,parentNode:f,nextSibling:p,setScopeId:g=Je,insertStaticContent:b}=e,_=(u,h,m,y=null,v=null,S=null,R=void 0,w=null,C=!!h.dynamicChildren)=>{if(u===h)return;u&&!Lt(u,h)&&(y=A(u),$e(u,v,S,!0),u=null),h.patchFlag===-2&&(C=!1,h.dynamicChildren=null);const{type:V,ref:U,shapeFlag:P}=h;switch(V){case ms:k(u,h,m,y);break;case Ie:M(u,h,m,y);break;case Rs:u==null&&x(h,m,y,R);break;case Ce:O(u,h,m,y,v,S,R,w,C);break;default:P&1?B(u,h,m,y,v,S,R,w,C):P&6?X(u,h,m,y,v,S,R,w,C):(P&64||P&128)&&V.process(u,h,m,y,v,S,R,w,C,L)}U!=null&&v?An(U,u&&u.ref,S,h||u,!h):U==null&&u&&u.ref!=null&&An(u.ref,null,S,u,!0)},k=(u,h,m,y)=>{if(u==null)s(h.el=l(h.children),m,y);else{const v=h.el=u.el;h.children!==u.children&&d(v,h.children)}},M=(u,h,m,y)=>{u==null?s(h.el=c(h.children||""),m,y):h.el=u.el},x=(u,h,m,y)=>{[u.el,u.anchor]=b(u.children,h,m,y,u.el,u.anchor)},$=({el:u,anchor:h},m,y)=>{let v;for(;u&&u!==h;)v=p(u),s(u,m,y),u=v;s(h,m,y)},E=({el:u,anchor:h})=>{let m;for(;u&&u!==h;)m=p(u),i(u),u=m;i(h)},B=(u,h,m,y,v,S,R,w,C)=>{if(h.type==="svg"?R="svg":h.type==="math"&&(R="mathml"),u==null)q(h,m,y,v,S,R,w,C);else{const V=u.el&&u.el._isVueCE?u.el:null;try{V&&V._beginPatch(),T(u,h,v,S,R,w,C)}finally{V&&V._endPatch()}}},q=(u,h,m,y,v,S,R,w)=>{let C,V;const{props:U,shapeFlag:P,transition:F,dirs:K}=u;if(C=u.el=o(u.type,S,U&&U.is,U),P&8?a(C,u.children):P&16&&H(u.children,C,null,y,v,Os(u,S),R,w),K&&Nt(u,null,y,"created"),j(C,u,u.scopeId,R,y),U){for(const ae in U)ae!=="value"&&!gn(ae)&&r(C,ae,null,U[ae],S,y);"value"in U&&r(C,"value",null,U.value,S),(V=U.onVnodeBeforeMount)&&nt(V,y,u)}K&&Nt(u,null,y,"beforeMount");const ee=ta(v,F);ee&&F.beforeEnter(C),s(C,h,m),((V=U&&U.onVnodeMounted)||ee||K)&&Ne(()=>{V&&nt(V,y,u),ee&&F.enter(C),K&&Nt(u,null,y,"mounted")},v)},j=(u,h,m,y,v)=>{if(m&&g(u,m),y)for(let S=0;S<y.length;S++)g(u,y[S]);if(v){let S=v.subTree;if(h===S||Wo(S.type)&&(S.ssContent===h||S.ssFallback===h)){const R=v.vnode;j(u,R,R.scopeId,R.slotScopeIds,v.parent)}}},H=(u,h,m,y,v,S,R,w,C=0)=>{for(let V=C;V<u.length;V++){const U=u[V]=w?pt(u[V]):rt(u[V]);_(null,U,h,m,y,v,S,R,w)}},T=(u,h,m,y,v,S,R)=>{const w=h.el=u.el;let{patchFlag:C,dynamicChildren:V,dirs:U}=h;C|=u.patchFlag&16;const P=u.props||fe,F=h.props||fe;let K;if(m&&Mt(m,!1),(K=F.onVnodeBeforeUpdate)&&nt(K,m,h,u),U&&Nt(h,u,m,"beforeUpdate"),m&&Mt(m,!0),(P.innerHTML&&F.innerHTML==null||P.textContent&&F.textContent==null)&&a(w,""),V?G(u.dynamicChildren,V,w,m,y,Os(h,v),S):R||se(u,h,w,null,m,y,Os(h,v),S,!1),C>0){if(C&16)z(w,P,F,m,v);else if(C&2&&P.class!==F.class&&r(w,"class",null,F.class,v),C&4&&r(w,"style",P.style,F.style,v),C&8){const ee=h.dynamicProps;for(let ae=0;ae<ee.length;ae++){const le=ee[ae],De=P[le],Ve=F[le];(Ve!==De||le==="value")&&r(w,le,De,Ve,v,m)}}C&1&&u.children!==h.children&&a(w,h.children)}else!R&&V==null&&z(w,P,F,m,v);((K=F.onVnodeUpdated)||U)&&Ne(()=>{K&&nt(K,m,h,u),U&&Nt(h,u,m,"updated")},y)},G=(u,h,m,y,v,S,R)=>{for(let w=0;w<h.length;w++){const C=u[w],V=h[w],U=C.el&&(C.type===Ce||!Lt(C,V)||C.shapeFlag&198)?f(C.el):m;_(C,V,U,null,y,v,S,R,!0)}},z=(u,h,m,y,v)=>{if(h!==m){if(h!==fe)for(const S in h)!gn(S)&&!(S in m)&&r(u,S,h[S],null,v,y);for(const S in m){if(gn(S))continue;const R=m[S],w=h[S];R!==w&&S!=="value"&&r(u,S,w,R,v,y)}"value"in m&&r(u,"value",h.value,m.value,v)}},O=(u,h,m,y,v,S,R,w,C)=>{const V=h.el=u?u.el:l(""),U=h.anchor=u?u.anchor:l("");let{patchFlag:P,dynamicChildren:F,slotScopeIds:K}=h;K&&(w=w?w.concat(K):K),u==null?(s(V,m,y),s(U,m,y),H(h.children||[],m,U,v,S,R,w,C)):P>0&&P&64&&F&&u.dynamicChildren&&u.dynamicChildren.length===F.length?(G(u.dynamicChildren,F,m,v,S,R,w),(h.key!=null||v&&h===v.subTree)&&Qo(u,h,!0)):se(u,h,m,U,v,S,R,w,C)},X=(u,h,m,y,v,S,R,w,C)=>{h.slotScopeIds=w,u==null?h.shapeFlag&512?v.ctx.activate(h,m,y,R,C):pe(h,m,y,v,S,R,C):Te(u,h,C)},pe=(u,h,m,y,v,S,R)=>{const w=u.component=ua(u,y,v);if(ds(u)&&(w.ctx.renderer=L),fa(w,!1,R),w.asyncDep){if(v&&v.registerDep(w,ce,R),!u.el){const C=w.subTree=he(Ie);M(null,C,h,m),u.placeholder=C.el}}else ce(w,u,h,m,v,S,R)},Te=(u,h,m)=>{const y=h.component=u.component;if(Qc(u,h,m))if(y.asyncDep&&!y.asyncResolved){J(y,h,m);return}else y.next=h,y.update();else h.el=u.el,y.vnode=h},ce=(u,h,m,y,v,S,R)=>{const w=()=>{if(u.isMounted){let{next:P,bu:F,u:K,parent:ee,vnode:ae}=u;{const Me=Go(u);if(Me){P&&(P.el=ae.el,J(u,P,R)),Me.asyncDep.then(()=>{Ne(()=>{u.isUnmounted||V()},v)});return}}let le=P,De;Mt(u,!1),P?(P.el=ae.el,J(u,P,R)):P=ae,F&&Ss(F),(De=P.props&&P.props.onVnodeBeforeUpdate)&&nt(De,ee,P,ae),Mt(u,!0);const Ve=ws(u),We=u.subTree;u.subTree=Ve,_(We,Ve,f(We.el),A(We),u,v,S),P.el=Ve.el,le===null&&Gc(u,Ve.el),K&&Ne(K,v),(De=P.props&&P.props.onVnodeUpdated)&&Ne(()=>nt(De,ee,P,ae),v)}else{let P;const{el:F,props:K}=h,{bm:ee,m:ae,parent:le,root:De,type:Ve}=u,We=_n(h);if(Mt(u,!1),ee&&Ss(ee),!We&&(P=K&&K.onVnodeBeforeMount)&&nt(P,le,h),Mt(u,!0),F&&de){const Me=()=>{u.subTree=ws(u),de(F,u.subTree,u,v,null)};We&&Ve.__asyncHydrate?Ve.__asyncHydrate(F,u,Me):Me()}else{De.ce&&De.ce._hasShadowRoot()&&De.ce._injectChildStyle(Ve);const Me=u.subTree=ws(u);_(null,Me,m,y,u,v,S),h.el=Me.el}if(ae&&Ne(ae,v),!We&&(P=K&&K.onVnodeMounted)){const Me=h;Ne(()=>nt(P,le,Me),v)}(h.shapeFlag&256||le&&_n(le.vnode)&&le.vnode.shapeFlag&256)&&u.a&&Ne(u.a,v),u.isMounted=!0,h=m=y=null}};u.scope.on();const C=u.effect=new qr(w);u.scope.off();const V=u.update=C.run.bind(C),U=u.job=C.runIfDirty.bind(C);U.i=u,U.id=u.uid,C.scheduler=()=>gi(U),Mt(u,!0),V()},J=(u,h,m)=>{h.component=u;const y=u.vnode.props;u.vnode=h,u.next=null,Wc(u,h.props,y,m),zc(u,h.children,m),At(),ki(u),_t()},se=(u,h,m,y,v,S,R,w,C=!1)=>{const V=u&&u.children,U=u?u.shapeFlag:0,P=h.children,{patchFlag:F,shapeFlag:K}=h;if(F>0){if(F&128){Vt(V,P,m,y,v,S,R,w,C);return}else if(F&256){at(V,P,m,y,v,S,R,w,C);return}}K&8?(U&16&&je(V,v,S),P!==V&&a(m,P)):U&16?K&16?Vt(V,P,m,y,v,S,R,w,C):je(V,v,S,!0):(U&8&&a(m,""),K&16&&H(P,m,y,v,S,R,w,C))},at=(u,h,m,y,v,S,R,w,C)=>{u=u||Zt,h=h||Zt;const V=u.length,U=h.length,P=Math.min(V,U);let F;for(F=0;F<P;F++){const K=h[F]=C?pt(h[F]):rt(h[F]);_(u[F],K,m,null,v,S,R,w,C)}V>U?je(u,v,S,!0,!1,P):H(h,m,y,v,S,R,w,C,P)},Vt=(u,h,m,y,v,S,R,w,C)=>{let V=0;const U=h.length;let P=u.length-1,F=U-1;for(;V<=P&&V<=F;){const K=u[V],ee=h[V]=C?pt(h[V]):rt(h[V]);if(Lt(K,ee))_(K,ee,m,null,v,S,R,w,C);else break;V++}for(;V<=P&&V<=F;){const K=u[P],ee=h[F]=C?pt(h[F]):rt(h[F]);if(Lt(K,ee))_(K,ee,m,null,v,S,R,w,C);else break;P--,F--}if(V>P){if(V<=F){const K=F+1,ee=K<U?h[K].el:y;for(;V<=F;)_(null,h[V]=C?pt(h[V]):rt(h[V]),m,ee,v,S,R,w,C),V++}}else if(V>F)for(;V<=P;)$e(u[V],v,S,!0),V++;else{const K=V,ee=V,ae=new Map;for(V=ee;V<=F;V++){const Be=h[V]=C?pt(h[V]):rt(h[V]);Be.key!=null&&ae.set(Be.key,V)}let le,De=0;const Ve=F-ee+1;let We=!1,Me=0;const an=new Array(Ve);for(V=0;V<Ve;V++)an[V]=0;for(V=K;V<=P;V++){const Be=u[V];if(De>=Ve){$e(Be,v,S,!0);continue}let tt;if(Be.key!=null)tt=ae.get(Be.key);else for(le=ee;le<=F;le++)if(an[le-ee]===0&&Lt(Be,h[le])){tt=le;break}tt===void 0?$e(Be,v,S,!0):(an[tt-ee]=V+1,tt>=Me?Me=tt:We=!0,_(Be,h[tt],m,null,v,S,R,w,C),De++)}const Ii=We?na(an):Zt;for(le=Ii.length-1,V=Ve-1;V>=0;V--){const Be=ee+V,tt=h[Be],Pi=h[Be+1],$i=Be+1<U?Pi.el||Ko(Pi):y;an[V]===0?_(null,tt,m,$i,v,S,R,w,C):We&&(le<0||V!==Ii[le]?et(tt,m,$i,2):le--)}}},et=(u,h,m,y,v=null)=>{const{el:S,type:R,transition:w,children:C,shapeFlag:V}=u;if(V&6){et(u.component.subTree,h,m,y);return}if(V&128){u.suspense.move(h,m,y);return}if(V&64){R.move(u,h,m,L);return}if(R===Ce){s(S,h,m);for(let P=0;P<C.length;P++)et(C[P],h,m,y);s(u.anchor,h,m);return}if(R===Rs){$(u,h,m);return}if(y!==2&&V&1&&w)if(y===0)w.beforeEnter(S),s(S,h,m),Ne(()=>w.enter(S),v);else{const{leave:P,delayLeave:F,afterLeave:K}=w,ee=()=>{u.ctx.isUnmounted?i(S):s(S,h,m)},ae=()=>{S._isLeaving&&S[it](!0),P(S,()=>{ee(),K&&K()})};F?F(S,ee,ae):ae()}else s(S,h,m)},$e=(u,h,m,y=!1,v=!1)=>{const{type:S,props:R,ref:w,children:C,dynamicChildren:V,shapeFlag:U,patchFlag:P,dirs:F,cacheIndex:K}=u;if(P===-2&&(v=!1),w!=null&&(At(),An(w,null,m,u,!0),_t()),K!=null&&(h.renderCache[K]=void 0),U&256){h.ctx.deactivate(u);return}const ee=U&1&&F,ae=!_n(u);let le;if(ae&&(le=R&&R.onVnodeBeforeUnmount)&&nt(le,h,u),U&6)Dt(u.component,m,y);else{if(U&128){u.suspense.unmount(m,y);return}ee&&Nt(u,null,h,"beforeUnmount"),U&64?u.type.remove(u,h,m,L,y):V&&!V.hasOnce&&(S!==Ce||P>0&&P&64)?je(V,h,m,!1,!0):(S===Ce&&P&384||!v&&U&16)&&je(C,h,m),y&&Kt(u)}(ae&&(le=R&&R.onVnodeUnmounted)||ee)&&Ne(()=>{le&&nt(le,h,u),ee&&Nt(u,null,h,"unmounted")},m)},Kt=u=>{const{type:h,el:m,anchor:y,transition:v}=u;if(h===Ce){Wt(m,y);return}if(h===Rs){E(u);return}const S=()=>{i(m),v&&!v.persisted&&v.afterLeave&&v.afterLeave()};if(u.shapeFlag&1&&v&&!v.persisted){const{leave:R,delayLeave:w}=v,C=()=>R(m,S);w?w(u.el,S,C):C()}else S()},Wt=(u,h)=>{let m;for(;u!==h;)m=p(u),i(u),u=m;i(h)},Dt=(u,h,m)=>{const{bum:y,scope:v,job:S,subTree:R,um:w,m:C,a:V}=u;Ji(C),Ji(V),y&&Ss(y),v.stop(),S&&(S.flags|=8,$e(R,u,h,m)),w&&Ne(w,h),Ne(()=>{u.isUnmounted=!0},h)},je=(u,h,m,y=!1,v=!1,S=0)=>{for(let R=S;R<u.length;R++)$e(u[R],h,m,y,v)},A=u=>{if(u.shapeFlag&6)return A(u.component.subTree);if(u.shapeFlag&128)return u.suspense.next();const h=p(u.anchor||u.el),m=h&&h[mc];return m?p(m):h};let N=!1;const I=(u,h,m)=>{let y;u==null?h._vnode&&($e(h._vnode,null,null,!0),y=h._vnode.component):_(h._vnode||null,u,h,null,null,null,m),h._vnode=u,N||(N=!0,ki(y),po(),N=!1)},L={p:_,um:$e,m:et,r:Kt,mt:pe,mc:H,pc:se,pbc:G,n:A,o:e};let Z,de;return t&&([Z,de]=t(L)),{render:I,hydrate:Z,createApp:kc(I,Z)}}function Os({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function Mt({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function ta(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function Qo(e,t,n=!1){const s=e.children,i=t.children;if(Q(s)&&Q(i))for(let r=0;r<s.length;r++){const o=s[r];let l=i[r];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=i[r]=pt(i[r]),l.el=o.el),!n&&l.patchFlag!==-2&&Qo(o,l)),l.type===ms&&(l.patchFlag===-1&&(l=i[r]=pt(l)),l.el=o.el),l.type===Ie&&!l.el&&(l.el=o.el)}}function na(e){const t=e.slice(),n=[0];let s,i,r,o,l;const c=e.length;for(s=0;s<c;s++){const d=e[s];if(d!==0){if(i=n[n.length-1],e[i]<d){t[s]=i,n.push(s);continue}for(r=0,o=n.length-1;r<o;)l=r+o>>1,e[n[l]]<d?r=l+1:o=l;d<e[n[r]]&&(r>0&&(t[s]=n[r-1]),n[r]=s)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=t[o];return n}function Go(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:Go(t)}function Ji(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}function Ko(e){if(e.placeholder)return e.placeholder;const t=e.component;return t?Ko(t.subTree):null}const Wo=e=>e.__isSuspense;function sa(e,t){t&&t.pendingBranch?Q(e)?t.effects.push(...e):t.effects.push(e):fc(e)}const Ce=Symbol.for("v-fgt"),ms=Symbol.for("v-txt"),Ie=Symbol.for("v-cmt"),Rs=Symbol.for("v-stc"),Sn=[];let Fe=null;function Y(e=!1){Sn.push(Fe=e?null:[])}function ia(){Sn.pop(),Fe=Sn[Sn.length-1]||null}let Pn=1;function ns(e,t=!1){Pn+=e,e<0&&Fe&&t&&(Fe.hasOnce=!0)}function qo(e){return e.dynamicChildren=Pn>0?Fe||Zt:null,ia(),Pn>0&&Fe&&Fe.push(e),e}function te(e,t,n,s,i,r){return qo(D(e,t,n,s,i,r,!0))}function Vn(e,t,n,s,i){return qo(he(e,t,n,s,i,!0))}function ss(e){return e?e.__v_isVNode===!0:!1}function Lt(e,t){return e.type===t.type&&e.key===t.key}const Jo=({key:e})=>e!=null?e:null,Gn=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?ve(e)||me(e)||W(e)?{i:qe,r:e,k:t,f:!!n}:e:null);function D(e,t=null,n=null,s=0,i=null,r=e===Ce?0:1,o=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Jo(t),ref:t&&Gn(t),scopeId:mo,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:qe};return l?(Vi(c,n),r&128&&e.normalize(c)):n&&(c.shapeFlag|=ve(n)?8:16),Pn>0&&!o&&Fe&&(c.patchFlag>0||r&6)&&c.patchFlag!==32&&Fe.push(c),c}const he=ra;function ra(e,t=null,n=null,s=0,i=null,r=!1){if((!e||e===Ro)&&(e=Ie),ss(e)){const l=$t(e,t,!0);return n&&Vi(l,n),Pn>0&&!r&&Fe&&(l.shapeFlag&6?Fe[Fe.indexOf(e)]=l:Fe.push(l)),l.patchFlag=-2,l}if(ma(e)&&(e=e.__vccOpts),t){t=oa(t);let{class:l,style:c}=t;l&&!ve(l)&&(t.class=Pt(l)),oe(c)&&(us(c)&&!Q(c)&&(c=Ae({},c)),t.style=oi(c))}const o=ve(e)?1:Wo(e)?128:_o(e)?64:oe(e)?4:W(e)?2:0;return D(e,t,n,s,i,o,r,!0)}function oa(e){return e?us(e)||ko(e)?Ae({},e):e:null}function $t(e,t,n=!1,s=!1){const{props:i,ref:r,patchFlag:o,children:l,transition:c}=e,d=t?la(i||{},t):i,a={__v_isVNode:!0,__v_skip:!0,type:e.type,props:d,key:d&&Jo(d),ref:t&&t.ref?n&&r?Q(r)?r.concat(Gn(t)):[r,Gn(t)]:Gn(t):r,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:l,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Ce?o===-1?16:o|16:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:c,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&$t(e.ssContent),ssFallback:e.ssFallback&&$t(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return c&&s&&In(a,c.clone(a)),a}function Si(e=" ",t=0){return he(ms,null,e,t)}function ke(e="",t=!1){return t?(Y(),Vn(Ie,null,e)):he(Ie,null,e)}function rt(e){return e==null||typeof e=="boolean"?he(Ie):Q(e)?he(Ce,null,e.slice()):ss(e)?pt(e):he(ms,null,String(e))}function pt(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:$t(e)}function Vi(e,t){let n=0;const{shapeFlag:s}=e;if(t==null)t=null;else if(Q(t))n=16;else if(typeof t=="object")if(s&65){const i=t.default;i&&(i._c&&(i._d=!1),Vi(e,i()),i._c&&(i._d=!0));return}else{n=32;const i=t._;!i&&!ko(t)?t._ctx=qe:i===3&&qe&&(qe.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else W(t)?(t={default:t,_ctx:qe},n=32):(t=String(t),s&64?(n=16,t=[Si(t)]):n=8);e.children=t,e.shapeFlag|=n}function la(...e){const t={};for(let n=0;n<e.length;n++){const s=e[n];for(const i in s)if(i==="class")t.class!==s.class&&(t.class=Pt([t.class,s.class]));else if(i==="style")t.style=oi([t.style,s.style]);else if(rs(i)){const r=t[i],o=s[i];o&&r!==o&&!(Q(r)&&r.includes(o))&&(t[i]=r?[].concat(r,o):o)}else i!==""&&(t[i]=s[i])}return t}function nt(e,t,n,s=null){Xe(e,t,7,[n,s])}const ca=$o();let aa=0;function ua(e,t,n){const s=e.type,i=(t?t.appContext:e.appContext)||ca,r={uid:aa++,vnode:e,type:s,parent:t,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Gr(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(i.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Lo(s,i),emitsOptions:Do(s,i),emit:null,emitted:null,propsDefaults:fe,inheritAttrs:s.inheritAttrs,ctx:fe,data:fe,props:fe,attrs:fe,slots:fe,refs:fe,setupState:fe,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=t?t.root:r,r.emit=Lc.bind(null,r),e.ce&&e.ce(r),r}let xe=null;const bi=()=>xe||qe;let is,qs;{const e=Bn(),t=(n,s)=>{let i;return(i=e[n])||(i=e[n]=[]),i.push(s),r=>{i.length>1?i.forEach(o=>o(r)):i[0](r)}};is=t("__VUE_INSTANCE_SETTERS__",n=>xe=n),qs=t("__VUE_SSR_SETTERS__",n=>$n=n)}const Ln=e=>{const t=xe;return is(e),e.scope.on(),()=>{e.scope.off(),is(t)}},Yi=()=>{xe&&xe.scope.off(),is(null)};function Yo(e){return e.vnode.shapeFlag&4}let $n=!1;function fa(e,t=!1,n=!1){t&&qs(t);const{props:s,children:i}=e.vnode,r=Yo(e);Kc(e,s,r,t),Yc(e,i,n||t);const o=r?da(e,t):void 0;return t&&qs(!1),o}function da(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,Ic);const{setup:s}=n;if(s){At();const i=e.setupContext=s.length>1?pa(e):null,r=Ln(e),o=Fn(s,e,0,[e.props,i]),l=kr(o);if(_t(),r(),(l||e.sp)&&!_n(e)&&xo(e),l){if(o.then(Yi,Yi),t)return o.then(c=>{zi(e,c,t)}).catch(c=>{fs(c,e,0)});e.asyncDep=o}else zi(e,o,t)}else zo(e,t)}function zi(e,t,n){W(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:oe(t)&&(e.setupState=uo(t)),zo(e,n)}let Xi;function zo(e,t,n){const s=e.type;if(!e.render){if(!t&&Xi&&!s.render){const i=s.template||Ai(e).template;if(i){const{isCustomElement:r,compilerOptions:o}=e.appContext.config,{delimiters:l,compilerOptions:c}=s,d=Ae(Ae({isCustomElement:r,delimiters:l},o),c);s.render=Xi(i,d)}}e.render=s.render||Je}{const i=Ln(e);At();try{Pc(e)}finally{_t(),i()}}}const ha={get(e,t){return Ee(e,"get",""),e[t]}};function pa(e){const t=n=>{e.exposed=n||{}};return{attrs:new Proxy(e.attrs,ha),slots:e.slots,emit:e.emit,expose:t}}function Ei(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(uo(pi(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in yn)return yn[n](e)},has(t,n){return n in t||n in yn}})):e.proxy}function ga(e,t=!0){return W(e)?e.displayName||e.name:e.name||t&&e.__name}function ma(e){return W(e)&&"__vccOpts"in e}const ye=(e,t)=>oc(e,t,$n);function Ci(e,t,n){try{ns(-1);const s=arguments.length;return s===2?oe(t)&&!Q(t)?ss(t)?he(e,null,[t]):he(e,t):he(e,null,t):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&ss(n)&&(n=[n]),he(e,t,n))}finally{ns(1)}}const va="3.5.29";/**
* @vue/runtime-dom v3.5.29
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Js;const Zi=typeof window!="undefined"&&window.trustedTypes;if(Zi)try{Js=Zi.createPolicy("vue",{createHTML:e=>e})}catch{}const Xo=Js?e=>Js.createHTML(e):e=>e,Aa="http://www.w3.org/2000/svg",_a="http://www.w3.org/1998/Math/MathML",ht=typeof document!="undefined"?document:null,er=ht&&ht.createElement("template"),ya={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,s)=>{const i=t==="svg"?ht.createElementNS(Aa,e):t==="mathml"?ht.createElementNS(_a,e):n?ht.createElement(e,{is:n}):ht.createElement(e);return e==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:e=>ht.createTextNode(e),createComment:e=>ht.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>ht.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,s,i,r){const o=n?n.previousSibling:t.lastChild;if(i&&(i===r||i.nextSibling))for(;t.insertBefore(i.cloneNode(!0),n),!(i===r||!(i=i.nextSibling)););else{er.innerHTML=Xo(s==="svg"?`<svg>${e}</svg>`:s==="mathml"?`<math>${e}</math>`:e);const l=er.content;if(s==="svg"||s==="mathml"){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}t.insertBefore(l,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},bt="transition",dn="animation",Dn=Symbol("_vtc"),Zo={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Sa=Ae({},yo,Zo),Va=e=>(e.displayName="Transition",e.props=Sa,e),ba=Va((e,{slots:t})=>Ci(_c,Ea(e),t)),Bt=(e,t=[])=>{Q(e)?e.forEach(n=>n(...t)):e&&e(...t)},tr=e=>e?Q(e)?e.some(t=>t.length>1):e.length>1:!1;function Ea(e){const t={};for(const O in e)O in Zo||(t[O]=e[O]);if(e.css===!1)return t;const{name:n="v",type:s,duration:i,enterFromClass:r=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:l=`${n}-enter-to`,appearFromClass:c=r,appearActiveClass:d=o,appearToClass:a=l,leaveFromClass:f=`${n}-leave-from`,leaveActiveClass:p=`${n}-leave-active`,leaveToClass:g=`${n}-leave-to`}=e,b=Ca(i),_=b&&b[0],k=b&&b[1],{onBeforeEnter:M,onEnter:x,onEnterCancelled:$,onLeave:E,onLeaveCancelled:B,onBeforeAppear:q=M,onAppear:j=x,onAppearCancelled:H=$}=t,T=(O,X,pe,Te)=>{O._enterCancelled=Te,kt(O,X?a:l),kt(O,X?d:o),pe&&pe()},G=(O,X)=>{O._isLeaving=!1,kt(O,f),kt(O,g),kt(O,p),X&&X()},z=O=>(X,pe)=>{const Te=O?j:x,ce=()=>T(X,O,pe);Bt(Te,[X,ce]),nr(()=>{kt(X,O?c:r),ft(X,O?a:l),tr(Te)||sr(X,s,_,ce)})};return Ae(t,{onBeforeEnter(O){Bt(M,[O]),ft(O,r),ft(O,o)},onBeforeAppear(O){Bt(q,[O]),ft(O,c),ft(O,d)},onEnter:z(!1),onAppear:z(!0),onLeave(O,X){O._isLeaving=!0;const pe=()=>G(O,X);ft(O,f),O._enterCancelled?(ft(O,p),or(O)):(or(O),ft(O,p)),nr(()=>{!O._isLeaving||(kt(O,f),ft(O,g),tr(E)||sr(O,s,k,pe))}),Bt(E,[O,pe])},onEnterCancelled(O){T(O,!1,void 0,!0),Bt($,[O])},onAppearCancelled(O){T(O,!0,void 0,!0),Bt(H,[O])},onLeaveCancelled(O){G(O),Bt(B,[O])}})}function Ca(e){if(e==null)return null;if(oe(e))return[Is(e.enter),Is(e.leave)];{const t=Is(e);return[t,t]}}function Is(e){return Cl(e)}function ft(e,t){t.split(/\s+/).forEach(n=>n&&e.classList.add(n)),(e[Dn]||(e[Dn]=new Set)).add(t)}function kt(e,t){t.split(/\s+/).forEach(s=>s&&e.classList.remove(s));const n=e[Dn];n&&(n.delete(t),n.size||(e[Dn]=void 0))}function nr(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let xa=0;function sr(e,t,n,s){const i=e._endId=++xa,r=()=>{i===e._endId&&s()};if(n!=null)return setTimeout(r,n);const{type:o,timeout:l,propCount:c}=Ta(e,t);if(!o)return s();const d=o+"end";let a=0;const f=()=>{e.removeEventListener(d,p),r()},p=g=>{g.target===e&&++a>=c&&f()};setTimeout(()=>{a<c&&f()},l+1),e.addEventListener(d,p)}function Ta(e,t){const n=window.getComputedStyle(e),s=b=>(n[b]||"").split(", "),i=s(`${bt}Delay`),r=s(`${bt}Duration`),o=ir(i,r),l=s(`${dn}Delay`),c=s(`${dn}Duration`),d=ir(l,c);let a=null,f=0,p=0;t===bt?o>0&&(a=bt,f=o,p=r.length):t===dn?d>0&&(a=dn,f=d,p=c.length):(f=Math.max(o,d),a=f>0?o>d?bt:dn:null,p=a?a===bt?r.length:c.length:0);const g=a===bt&&/\b(?:transform|all)(?:,|$)/.test(s(`${bt}Property`).toString());return{type:a,timeout:f,propCount:p,hasTransform:g}}function ir(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((n,s)=>rr(n)+rr(e[s])))}function rr(e){return e==="auto"?0:Number(e.slice(0,-1).replace(",","."))*1e3}function or(e){return(e?e.ownerDocument:document).body.offsetHeight}function wa(e,t,n){const s=e[Dn];s&&(t=(t?[t,...s]:[...s]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const lr=Symbol("_vod"),Oa=Symbol("_vsh"),Ra=Symbol(""),Ia=/(?:^|;)\s*display\s*:/;function Pa(e,t,n){const s=e.style,i=ve(n);let r=!1;if(n&&!i){if(t)if(ve(t))for(const o of t.split(";")){const l=o.slice(0,o.indexOf(":")).trim();n[l]==null&&Kn(s,l,"")}else for(const o in t)n[o]==null&&Kn(s,o,"");for(const o in n)o==="display"&&(r=!0),Kn(s,o,n[o])}else if(i){if(t!==n){const o=s[Ra];o&&(n+=";"+o),s.cssText=n,r=Ia.test(n)}}else t&&e.removeAttribute("style");lr in e&&(e[lr]=r?s.display:"",e[Oa]&&(s.display="none"))}const cr=/\s*!important$/;function Kn(e,t,n){if(Q(n))n.forEach(s=>Kn(e,t,s));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const s=$a(e,t);cr.test(n)?e.setProperty(Gt(s),n.replace(cr,""),"important"):e[s]=n}}const ar=["Webkit","Moz","ms"],Ps={};function $a(e,t){const n=Ps[t];if(n)return n;let s=Ke(t);if(s!=="filter"&&s in e)return Ps[t]=s;s=cs(s);for(let i=0;i<ar.length;i++){const r=ar[i]+s;if(r in e)return Ps[t]=r}return t}const ur="http://www.w3.org/1999/xlink";function fr(e,t,n,s,i,r=Il(t)){s&&t.startsWith("xlink:")?n==null?e.removeAttributeNS(ur,t.slice(6,t.length)):e.setAttributeNS(ur,t,n):n==null||r&&!jr(n)?e.removeAttribute(t):e.setAttribute(t,r?"":lt(n)?String(n):n)}function dr(e,t,n,s,i){if(t==="innerHTML"||t==="textContent"){n!=null&&(e[t]=t==="innerHTML"?Xo(n):n);return}const r=e.tagName;if(t==="value"&&r!=="PROGRESS"&&!r.includes("-")){const l=r==="OPTION"?e.getAttribute("value")||"":e.value,c=n==null?e.type==="checkbox"?"on":"":String(n);(l!==c||!("_value"in e))&&(e.value=c),n==null&&e.removeAttribute(t),e._value=n;return}let o=!1;if(n===""||n==null){const l=typeof e[t];l==="boolean"?n=jr(n):n==null&&l==="string"?(n="",o=!0):l==="number"&&(n=0,o=!0)}try{e[t]=n}catch{}o&&e.removeAttribute(i||t)}function Da(e,t,n,s){e.addEventListener(t,n,s)}function Na(e,t,n,s){e.removeEventListener(t,n,s)}const hr=Symbol("_vei");function Ma(e,t,n,s,i=null){const r=e[hr]||(e[hr]={}),o=r[t];if(s&&o)o.value=s;else{const[l,c]=Ba(t);if(s){const d=r[t]=La(s,i);Da(e,l,d,c)}else o&&(Na(e,l,o,c),r[t]=void 0)}}const pr=/(?:Once|Passive|Capture)$/;function Ba(e){let t;if(pr.test(e)){t={};let s;for(;s=e.match(pr);)e=e.slice(0,e.length-s[0].length),t[s[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Gt(e.slice(2)),t]}let $s=0;const ka=Promise.resolve(),Fa=()=>$s||(ka.then(()=>$s=0),$s=Date.now());function La(e,t){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;Xe(Ha(s,n.value),t,5,[s])};return n.value=e,n.attached=Fa(),n}function Ha(e,t){if(Q(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(s=>i=>!i._stopped&&s&&s(i))}else return t}const gr=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,ja=(e,t,n,s,i,r)=>{const o=i==="svg";t==="class"?wa(e,s,o):t==="style"?Pa(e,n,s):rs(t)?ii(t)||Ma(e,t,n,s,r):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Ua(e,t,s,o))?(dr(e,t,s),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&fr(e,t,s,o,r,t!=="value")):e._isVueCE&&(/[A-Z]/.test(t)||!ve(s))?dr(e,Ke(t),s,r,t):(t==="true-value"?e._trueValue=s:t==="false-value"&&(e._falseValue=s),fr(e,t,s,o))};function Ua(e,t,n,s){if(s)return!!(t==="innerHTML"||t==="textContent"||t in e&&gr(t)&&W(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="sandbox"&&e.tagName==="IFRAME"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const i=e.tagName;if(i==="IMG"||i==="VIDEO"||i==="CANVAS"||i==="SOURCE")return!1}return gr(t)&&ve(n)?!1:t in e}const Qa=Ae({patchProp:ja},ya);let mr;function Ga(){return mr||(mr=Zc(Qa))}const Ka=(...e)=>{const t=Ga().createApp(...e),{mount:n}=t;return t.mount=s=>{const i=qa(s);if(!i)return;const r=t._component;!W(r)&&!r.render&&!r.template&&(r.template=i.innerHTML),i.nodeType===1&&(i.textContent="");const o=n(i,!1,Wa(i));return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},t};function Wa(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function qa(e){return ve(e)?document.querySelector(e):e}/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */const zt=typeof document!="undefined";function el(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function Ja(e){return e.__esModule||e[Symbol.toStringTag]==="Module"||e.default&&el(e.default)}const ie=Object.assign;function Ds(e,t){const n={};for(const s in t){const i=t[s];n[s]=Ze(i)?i.map(e):e(i)}return n}const bn=()=>{},Ze=Array.isArray;function vr(e,t){const n={};for(const s in e)n[s]=s in t?t[s]:e[s];return n}const tl=/#/g,Ya=/&/g,za=/\//g,Xa=/=/g,Za=/\?/g,nl=/\+/g,eu=/%5B/g,tu=/%5D/g,sl=/%5E/g,nu=/%60/g,il=/%7B/g,su=/%7C/g,rl=/%7D/g,iu=/%20/g;function xi(e){return e==null?"":encodeURI(""+e).replace(su,"|").replace(eu,"[").replace(tu,"]")}function ru(e){return xi(e).replace(il,"{").replace(rl,"}").replace(sl,"^")}function Ys(e){return xi(e).replace(nl,"%2B").replace(iu,"+").replace(tl,"%23").replace(Ya,"%26").replace(nu,"`").replace(il,"{").replace(rl,"}").replace(sl,"^")}function ou(e){return Ys(e).replace(Xa,"%3D")}function lu(e){return xi(e).replace(tl,"%23").replace(Za,"%3F")}function cu(e){return lu(e).replace(za,"%2F")}function Nn(e){if(e==null)return null;try{return decodeURIComponent(""+e)}catch{}return""+e}const au=/\/$/,uu=e=>e.replace(au,"");function Ns(e,t,n="/"){let s,i={},r="",o="";const l=t.indexOf("#");let c=t.indexOf("?");return c=l>=0&&c>l?-1:c,c>=0&&(s=t.slice(0,c),r=t.slice(c,l>0?l:t.length),i=e(r.slice(1))),l>=0&&(s=s||t.slice(0,l),o=t.slice(l,t.length)),s=pu(s!=null?s:t,n),{fullPath:s+r+o,path:s,query:i,hash:Nn(o)}}function fu(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function Ar(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function du(e,t,n){const s=t.matched.length-1,i=n.matched.length-1;return s>-1&&s===i&&rn(t.matched[s],n.matched[i])&&ol(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function rn(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function ol(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(var n in e)if(!hu(e[n],t[n]))return!1;return!0}function hu(e,t){return Ze(e)?_r(e,t):Ze(t)?_r(t,e):(e==null?void 0:e.valueOf())===(t==null?void 0:t.valueOf())}function _r(e,t){return Ze(t)?e.length===t.length&&e.every((n,s)=>n===t[s]):e.length===1&&e[0]===t}function pu(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),s=e.split("/"),i=s[s.length-1];(i===".."||i===".")&&s.push("");let r=n.length-1,o,l;for(o=0;o<s.length;o++)if(l=s[o],l!==".")if(l==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+s.slice(o).join("/")}const Et={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let zs=function(e){return e.pop="pop",e.push="push",e}({}),Ms=function(e){return e.back="back",e.forward="forward",e.unknown="",e}({});function gu(e){if(!e)if(zt){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),uu(e)}const mu=/^[^#]+#/;function vu(e,t){return e.replace(mu,"#")+t}function Au(e,t){const n=document.documentElement.getBoundingClientRect(),s=e.getBoundingClientRect();return{behavior:t.behavior,left:s.left-n.left-(t.left||0),top:s.top-n.top-(t.top||0)}}const vs=()=>({left:window.scrollX,top:window.scrollY});function _u(e){let t;if("el"in e){const n=e.el,s=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;t=Au(i,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.scrollX,t.top!=null?t.top:window.scrollY)}function yr(e,t){return(history.state?history.state.position-t:-1)+e}const Xs=new Map;function yu(e,t){Xs.set(e,t)}function Su(e){const t=Xs.get(e);return Xs.delete(e),t}function Vu(e){return typeof e=="string"||e&&typeof e=="object"}function ll(e){return typeof e=="string"||typeof e=="symbol"}let ge=function(e){return e[e.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",e[e.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",e[e.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",e[e.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",e[e.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",e}({});const cl=Symbol("");ge.MATCHER_NOT_FOUND+"",ge.NAVIGATION_GUARD_REDIRECT+"",ge.NAVIGATION_ABORTED+"",ge.NAVIGATION_CANCELLED+"",ge.NAVIGATION_DUPLICATED+"";function on(e,t){return ie(new Error,{type:e,[cl]:!0},t)}function dt(e,t){return e instanceof Error&&cl in e&&(t==null||!!(e.type&t))}const bu=["params","query","hash"];function Eu(e){if(typeof e=="string")return e;if(e.path!=null)return e.path;const t={};for(const n of bu)n in e&&(t[n]=e[n]);return JSON.stringify(t,null,2)}function Cu(e){const t={};if(e===""||e==="?")return t;const n=(e[0]==="?"?e.slice(1):e).split("&");for(let s=0;s<n.length;++s){const i=n[s].replace(nl," "),r=i.indexOf("="),o=Nn(r<0?i:i.slice(0,r)),l=r<0?null:Nn(i.slice(r+1));if(o in t){let c=t[o];Ze(c)||(c=t[o]=[c]),c.push(l)}else t[o]=l}return t}function Sr(e){let t="";for(let n in e){const s=e[n];if(n=ou(n),s==null){s!==void 0&&(t+=(t.length?"&":"")+n);continue}(Ze(s)?s.map(i=>i&&Ys(i)):[s&&Ys(s)]).forEach(i=>{i!==void 0&&(t+=(t.length?"&":"")+n,i!=null&&(t+="="+i))})}return t}function xu(e){const t={};for(const n in e){const s=e[n];s!==void 0&&(t[n]=Ze(s)?s.map(i=>i==null?null:""+i):s==null?s:""+s)}return t}const Tu=Symbol(""),Vr=Symbol(""),As=Symbol(""),Ti=Symbol(""),Zs=Symbol("");function hn(){let e=[];function t(s){return e.push(s),()=>{const i=e.indexOf(s);i>-1&&e.splice(i,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function wt(e,t,n,s,i,r=o=>o()){const o=s&&(s.enterCallbacks[i]=s.enterCallbacks[i]||[]);return()=>new Promise((l,c)=>{const d=p=>{p===!1?c(on(ge.NAVIGATION_ABORTED,{from:n,to:t})):p instanceof Error?c(p):Vu(p)?c(on(ge.NAVIGATION_GUARD_REDIRECT,{from:t,to:p})):(o&&s.enterCallbacks[i]===o&&typeof p=="function"&&o.push(p),l())},a=r(()=>e.call(s&&s.instances[i],t,n,d));let f=Promise.resolve(a);e.length<3&&(f=f.then(d)),f.catch(p=>c(p))})}function Bs(e,t,n,s,i=r=>r()){const r=[];for(const o of e)for(const l in o.components){let c=o.components[l];if(!(t!=="beforeRouteEnter"&&!o.instances[l]))if(el(c)){const d=(c.__vccOpts||c)[t];d&&r.push(wt(d,n,s,o,l,i))}else{let d=c();r.push(()=>d.then(a=>{if(!a)throw new Error(`Couldn't resolve component "${l}" at "${o.path}"`);const f=Ja(a)?a.default:a;o.mods[l]=a,o.components[l]=f;const p=(f.__vccOpts||f)[t];return p&&wt(p,n,s,o,l,i)()}))}}return r}function wu(e,t){const n=[],s=[],i=[],r=Math.max(t.matched.length,e.matched.length);for(let o=0;o<r;o++){const l=t.matched[o];l&&(e.matched.find(d=>rn(d,l))?s.push(l):n.push(l));const c=e.matched[o];c&&(t.matched.find(d=>rn(d,c))||i.push(c))}return[n,s,i]}/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let Ou=()=>location.protocol+"//"+location.host;function al(e,t){const{pathname:n,search:s,hash:i}=t,r=e.indexOf("#");if(r>-1){let o=i.includes(e.slice(r))?e.slice(r).length:1,l=i.slice(o);return l[0]!=="/"&&(l="/"+l),Ar(l,"")}return Ar(n,e)+s+i}function Ru(e,t,n,s){let i=[],r=[],o=null;const l=({state:p})=>{const g=al(e,location),b=n.value,_=t.value;let k=0;if(p){if(n.value=g,t.value=p,o&&o===b){o=null;return}k=_?p.position-_.position:0}else s(g);i.forEach(M=>{M(n.value,b,{delta:k,type:zs.pop,direction:k?k>0?Ms.forward:Ms.back:Ms.unknown})})};function c(){o=n.value}function d(p){i.push(p);const g=()=>{const b=i.indexOf(p);b>-1&&i.splice(b,1)};return r.push(g),g}function a(){if(document.visibilityState==="hidden"){const{history:p}=window;if(!p.state)return;p.replaceState(ie({},p.state,{scroll:vs()}),"")}}function f(){for(const p of r)p();r=[],window.removeEventListener("popstate",l),window.removeEventListener("pagehide",a),document.removeEventListener("visibilitychange",a)}return window.addEventListener("popstate",l),window.addEventListener("pagehide",a),document.addEventListener("visibilitychange",a),{pauseListeners:c,listen:d,destroy:f}}function br(e,t,n,s=!1,i=!1){return{back:e,current:t,forward:n,replaced:s,position:window.history.length,scroll:i?vs():null}}function Iu(e){const{history:t,location:n}=window,s={value:al(e,n)},i={value:t.state};i.value||r(s.value,{back:null,current:s.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function r(c,d,a){const f=e.indexOf("#"),p=f>-1?(n.host&&document.querySelector("base")?e:e.slice(f))+c:Ou()+e+c;try{t[a?"replaceState":"pushState"](d,"",p),i.value=d}catch(g){console.error(g),n[a?"replace":"assign"](p)}}function o(c,d){r(c,ie({},t.state,br(i.value.back,c,i.value.forward,!0),d,{position:i.value.position}),!0),s.value=c}function l(c,d){const a=ie({},i.value,t.state,{forward:c,scroll:vs()});r(a.current,a,!0),r(c,ie({},br(s.value,c,null),{position:a.position+1},d),!1),s.value=c}return{location:s,state:i,push:l,replace:o}}function Pu(e){e=gu(e);const t=Iu(e),n=Ru(e,t.state,t.location,t.replace);function s(r,o=!0){o||n.pauseListeners(),history.go(r)}const i=ie({location:"",base:e,go:s,createHref:vu.bind(null,e)},t,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>t.state.value}),i}let Ht=function(e){return e[e.Static=0]="Static",e[e.Param=1]="Param",e[e.Group=2]="Group",e}({});var Se=function(e){return e[e.Static=0]="Static",e[e.Param=1]="Param",e[e.ParamRegExp=2]="ParamRegExp",e[e.ParamRegExpEnd=3]="ParamRegExpEnd",e[e.EscapeNext=4]="EscapeNext",e}(Se||{});const $u={type:Ht.Static,value:""},Du=/[a-zA-Z0-9_]/;function Nu(e){if(!e)return[[]];if(e==="/")return[[$u]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(g){throw new Error(`ERR (${n})/"${d}": ${g}`)}let n=Se.Static,s=n;const i=[];let r;function o(){r&&i.push(r),r=[]}let l=0,c,d="",a="";function f(){!d||(n===Se.Static?r.push({type:Ht.Static,value:d}):n===Se.Param||n===Se.ParamRegExp||n===Se.ParamRegExpEnd?(r.length>1&&(c==="*"||c==="+")&&t(`A repeatable param (${d}) must be alone in its segment. eg: '/:ids+.`),r.push({type:Ht.Param,value:d,regexp:a,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):t("Invalid state to consume buffer"),d="")}function p(){d+=c}for(;l<e.length;){if(c=e[l++],c==="\\"&&n!==Se.ParamRegExp){s=n,n=Se.EscapeNext;continue}switch(n){case Se.Static:c==="/"?(d&&f(),o()):c===":"?(f(),n=Se.Param):p();break;case Se.EscapeNext:p(),n=s;break;case Se.Param:c==="("?n=Se.ParamRegExp:Du.test(c)?p():(f(),n=Se.Static,c!=="*"&&c!=="?"&&c!=="+"&&l--);break;case Se.ParamRegExp:c===")"?a[a.length-1]=="\\"?a=a.slice(0,-1)+c:n=Se.ParamRegExpEnd:a+=c;break;case Se.ParamRegExpEnd:f(),n=Se.Static,c!=="*"&&c!=="?"&&c!=="+"&&l--,a="";break;default:t("Unknown state");break}}return n===Se.ParamRegExp&&t(`Unfinished custom RegExp for param "${d}"`),f(),o(),i}const Er="[^/]+?",Mu={sensitive:!1,strict:!1,start:!0,end:!0};var Oe=function(e){return e[e._multiplier=10]="_multiplier",e[e.Root=90]="Root",e[e.Segment=40]="Segment",e[e.SubSegment=30]="SubSegment",e[e.Static=40]="Static",e[e.Dynamic=20]="Dynamic",e[e.BonusCustomRegExp=10]="BonusCustomRegExp",e[e.BonusWildcard=-50]="BonusWildcard",e[e.BonusRepeatable=-20]="BonusRepeatable",e[e.BonusOptional=-8]="BonusOptional",e[e.BonusStrict=.7000000000000001]="BonusStrict",e[e.BonusCaseSensitive=.25]="BonusCaseSensitive",e}(Oe||{});const Bu=/[.+*?^${}()[\]/\\]/g;function ku(e,t){const n=ie({},Mu,t),s=[];let i=n.start?"^":"";const r=[];for(const d of e){const a=d.length?[]:[Oe.Root];n.strict&&!d.length&&(i+="/");for(let f=0;f<d.length;f++){const p=d[f];let g=Oe.Segment+(n.sensitive?Oe.BonusCaseSensitive:0);if(p.type===Ht.Static)f||(i+="/"),i+=p.value.replace(Bu,"\\$&"),g+=Oe.Static;else if(p.type===Ht.Param){const{value:b,repeatable:_,optional:k,regexp:M}=p;r.push({name:b,repeatable:_,optional:k});const x=M||Er;if(x!==Er){g+=Oe.BonusCustomRegExp;try{`${x}`}catch(E){throw new Error(`Invalid custom RegExp for param "${b}" (${x}): `+E.message)}}let $=_?`((?:${x})(?:/(?:${x}))*)`:`(${x})`;f||($=k&&d.length<2?`(?:/${$})`:"/"+$),k&&($+="?"),i+=$,g+=Oe.Dynamic,k&&(g+=Oe.BonusOptional),_&&(g+=Oe.BonusRepeatable),x===".*"&&(g+=Oe.BonusWildcard)}a.push(g)}s.push(a)}if(n.strict&&n.end){const d=s.length-1;s[d][s[d].length-1]+=Oe.BonusStrict}n.strict||(i+="/?"),n.end?i+="$":n.strict&&!i.endsWith("/")&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function l(d){const a=d.match(o),f={};if(!a)return null;for(let p=1;p<a.length;p++){const g=a[p]||"",b=r[p-1];f[b.name]=g&&b.repeatable?g.split("/"):g}return f}function c(d){let a="",f=!1;for(const p of e){(!f||!a.endsWith("/"))&&(a+="/"),f=!1;for(const g of p)if(g.type===Ht.Static)a+=g.value;else if(g.type===Ht.Param){const{value:b,repeatable:_,optional:k}=g,M=b in d?d[b]:"";if(Ze(M)&&!_)throw new Error(`Provided param "${b}" is an array but it is not repeatable (* or + modifiers)`);const x=Ze(M)?M.join("/"):M;if(!x)if(k)p.length<2&&(a.endsWith("/")?a=a.slice(0,-1):f=!0);else throw new Error(`Missing required param "${b}"`);a+=x}}return a||"/"}return{re:o,score:s,keys:r,parse:l,stringify:c}}function Fu(e,t){let n=0;for(;n<e.length&&n<t.length;){const s=t[n]-e[n];if(s)return s;n++}return e.length<t.length?e.length===1&&e[0]===Oe.Static+Oe.Segment?-1:1:e.length>t.length?t.length===1&&t[0]===Oe.Static+Oe.Segment?1:-1:0}function ul(e,t){let n=0;const s=e.score,i=t.score;for(;n<s.length&&n<i.length;){const r=Fu(s[n],i[n]);if(r)return r;n++}if(Math.abs(i.length-s.length)===1){if(Cr(s))return 1;if(Cr(i))return-1}return i.length-s.length}function Cr(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const Lu={strict:!1,end:!0,sensitive:!1};function Hu(e,t,n){const s=ku(Nu(e.path),n),i=ie(s,{record:e,parent:t,children:[],alias:[]});return t&&!i.record.aliasOf==!t.record.aliasOf&&t.children.push(i),i}function ju(e,t){const n=[],s=new Map;t=vr(Lu,t);function i(f){return s.get(f)}function r(f,p,g){const b=!g,_=Tr(f);_.aliasOf=g&&g.record;const k=vr(t,f),M=[_];if("alias"in f){const E=typeof f.alias=="string"?[f.alias]:f.alias;for(const B of E)M.push(Tr(ie({},_,{components:g?g.record.components:_.components,path:B,aliasOf:g?g.record:_})))}let x,$;for(const E of M){const{path:B}=E;if(p&&B[0]!=="/"){const q=p.record.path,j=q[q.length-1]==="/"?"":"/";E.path=p.record.path+(B&&j+B)}if(x=Hu(E,p,k),g?g.alias.push(x):($=$||x,$!==x&&$.alias.push(x),b&&f.name&&!wr(x)&&o(f.name)),fl(x)&&c(x),_.children){const q=_.children;for(let j=0;j<q.length;j++)r(q[j],x,g&&g.children[j])}g=g||x}return $?()=>{o($)}:bn}function o(f){if(ll(f)){const p=s.get(f);p&&(s.delete(f),n.splice(n.indexOf(p),1),p.children.forEach(o),p.alias.forEach(o))}else{const p=n.indexOf(f);p>-1&&(n.splice(p,1),f.record.name&&s.delete(f.record.name),f.children.forEach(o),f.alias.forEach(o))}}function l(){return n}function c(f){const p=Gu(f,n);n.splice(p,0,f),f.record.name&&!wr(f)&&s.set(f.record.name,f)}function d(f,p){let g,b={},_,k;if("name"in f&&f.name){if(g=s.get(f.name),!g)throw on(ge.MATCHER_NOT_FOUND,{location:f});k=g.record.name,b=ie(xr(p.params,g.keys.filter($=>!$.optional).concat(g.parent?g.parent.keys.filter($=>$.optional):[]).map($=>$.name)),f.params&&xr(f.params,g.keys.map($=>$.name))),_=g.stringify(b)}else if(f.path!=null)_=f.path,g=n.find($=>$.re.test(_)),g&&(b=g.parse(_),k=g.record.name);else{if(g=p.name?s.get(p.name):n.find($=>$.re.test(p.path)),!g)throw on(ge.MATCHER_NOT_FOUND,{location:f,currentLocation:p});k=g.record.name,b=ie({},p.params,f.params),_=g.stringify(b)}const M=[];let x=g;for(;x;)M.unshift(x.record),x=x.parent;return{name:k,path:_,params:b,matched:M,meta:Qu(M)}}e.forEach(f=>r(f));function a(){n.length=0,s.clear()}return{addRoute:r,resolve:d,removeRoute:o,clearRoutes:a,getRoutes:l,getRecordMatcher:i}}function xr(e,t){const n={};for(const s of t)s in e&&(n[s]=e[s]);return n}function Tr(e){const t={path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:e.aliasOf,beforeEnter:e.beforeEnter,props:Uu(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}};return Object.defineProperty(t,"mods",{value:{}}),t}function Uu(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const s in e.components)t[s]=typeof n=="object"?n[s]:n;return t}function wr(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function Qu(e){return e.reduce((t,n)=>ie(t,n.meta),{})}function Gu(e,t){let n=0,s=t.length;for(;n!==s;){const r=n+s>>1;ul(e,t[r])<0?s=r:n=r+1}const i=Ku(e);return i&&(s=t.lastIndexOf(i,s-1)),s}function Ku(e){let t=e;for(;t=t.parent;)if(fl(t)&&ul(e,t)===0)return t}function fl({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function Or(e){const t=Ge(As),n=Ge(Ti),s=ye(()=>{const c=_e(e.to);return t.resolve(c)}),i=ye(()=>{const{matched:c}=s.value,{length:d}=c,a=c[d-1],f=n.matched;if(!a||!f.length)return-1;const p=f.findIndex(rn.bind(null,a));if(p>-1)return p;const g=Rr(c[d-2]);return d>1&&Rr(a)===g&&f[f.length-1].path!==g?f.findIndex(rn.bind(null,c[d-2])):p}),r=ye(()=>i.value>-1&&zu(n.params,s.value.params)),o=ye(()=>i.value>-1&&i.value===n.matched.length-1&&ol(n.params,s.value.params));function l(c={}){if(Yu(c)){const d=t[_e(e.replace)?"replace":"push"](_e(e.to)).catch(bn);return e.viewTransition&&typeof document!="undefined"&&"startViewTransition"in document&&document.startViewTransition(()=>d),d}return Promise.resolve()}return{route:s,href:ye(()=>s.value.href),isActive:r,isExactActive:o,navigate:l}}function Wu(e){return e.length===1?e[0]:e}const qu=Co({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:Or,setup(e,{slots:t}){const n=kn(Or(e)),{options:s}=Ge(As),i=ye(()=>({[Ir(e.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[Ir(e.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=t.default&&Wu(t.default(n));return e.custom?r:Ci("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},r)}}}),Ju=qu;function Yu(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function zu(e,t){for(const n in t){const s=t[n],i=e[n];if(typeof s=="string"){if(s!==i)return!1}else if(!Ze(i)||i.length!==s.length||s.some((r,o)=>r.valueOf()!==i[o].valueOf()))return!1}return!0}function Rr(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Ir=(e,t,n)=>e!=null?e:t!=null?t:n,Xu=Co({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const s=Ge(Zs),i=ye(()=>e.route||s.value),r=Ge(Vr,0),o=ye(()=>{let d=_e(r);const{matched:a}=i.value;let f;for(;(f=a[d])&&!f.components;)d++;return d}),l=ye(()=>i.value.matched[o.value]);Qn(Vr,ye(()=>o.value+1)),Qn(Tu,l),Qn(Zs,i);const c=He();return vt(()=>[c.value,l.value,e.name],([d,a,f],[p,g,b])=>{a&&(a.instances[f]=d,g&&g!==a&&d&&d===p&&(a.leaveGuards.size||(a.leaveGuards=g.leaveGuards),a.updateGuards.size||(a.updateGuards=g.updateGuards))),d&&a&&(!g||!rn(a,g)||!p)&&(a.enterCallbacks[f]||[]).forEach(_=>_(d))},{flush:"post"}),()=>{const d=i.value,a=e.name,f=l.value,p=f&&f.components[a];if(!p)return Pr(n.default,{Component:p,route:d});const g=f.props[a],b=g?g===!0?d.params:typeof g=="function"?g(d):g:null,k=Ci(p,ie({},b,t,{onVnodeUnmounted:M=>{M.component.isUnmounted&&(f.instances[a]=null)},ref:c}));return Pr(n.default,{Component:k,route:d})||k}}});function Pr(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const Zu=Xu;function ef(e){const t=ju(e.routes,e),n=e.parseQuery||Cu,s=e.stringifyQuery||Sr,i=e.history,r=hn(),o=hn(),l=hn(),c=Zl(Et);let d=Et;zt&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const a=Ds.bind(null,A=>""+A),f=Ds.bind(null,cu),p=Ds.bind(null,Nn);function g(A,N){let I,L;return ll(A)?(I=t.getRecordMatcher(A),L=N):L=A,t.addRoute(L,I)}function b(A){const N=t.getRecordMatcher(A);N&&t.removeRoute(N)}function _(){return t.getRoutes().map(A=>A.record)}function k(A){return!!t.getRecordMatcher(A)}function M(A,N){if(N=ie({},N||c.value),typeof A=="string"){const h=Ns(n,A,N.path),m=t.resolve({path:h.path},N),y=i.createHref(h.fullPath);return ie(h,m,{params:p(m.params),hash:Nn(h.hash),redirectedFrom:void 0,href:y})}let I;if(A.path!=null)I=ie({},A,{path:Ns(n,A.path,N.path).path});else{const h=ie({},A.params);for(const m in h)h[m]==null&&delete h[m];I=ie({},A,{params:f(h)}),N.params=f(N.params)}const L=t.resolve(I,N),Z=A.hash||"";L.params=a(p(L.params));const de=fu(s,ie({},A,{hash:ru(Z),path:L.path})),u=i.createHref(de);return ie({fullPath:de,hash:Z,query:s===Sr?xu(A.query):A.query||{}},L,{redirectedFrom:void 0,href:u})}function x(A){return typeof A=="string"?Ns(n,A,c.value.path):ie({},A)}function $(A,N){if(d!==A)return on(ge.NAVIGATION_CANCELLED,{from:N,to:A})}function E(A){return j(A)}function B(A){return E(ie(x(A),{replace:!0}))}function q(A,N){const I=A.matched[A.matched.length-1];if(I&&I.redirect){const{redirect:L}=I;let Z=typeof L=="function"?L(A,N):L;return typeof Z=="string"&&(Z=Z.includes("?")||Z.includes("#")?Z=x(Z):{path:Z},Z.params={}),ie({query:A.query,hash:A.hash,params:Z.path!=null?{}:A.params},Z)}}function j(A,N){const I=d=M(A),L=c.value,Z=A.state,de=A.force,u=A.replace===!0,h=q(I,L);if(h)return j(ie(x(h),{state:typeof h=="object"?ie({},Z,h.state):Z,force:de,replace:u}),N||I);const m=I;m.redirectedFrom=N;let y;return!de&&du(s,L,I)&&(y=on(ge.NAVIGATION_DUPLICATED,{to:m,from:L}),et(L,L,!0,!1)),(y?Promise.resolve(y):G(m,L)).catch(v=>dt(v)?dt(v,ge.NAVIGATION_GUARD_REDIRECT)?v:Vt(v):se(v,m,L)).then(v=>{if(v){if(dt(v,ge.NAVIGATION_GUARD_REDIRECT))return j(ie({replace:u},x(v.to),{state:typeof v.to=="object"?ie({},Z,v.to.state):Z,force:de}),N||m)}else v=O(m,L,!0,u,Z);return z(m,L,v),v})}function H(A,N){const I=$(A,N);return I?Promise.reject(I):Promise.resolve()}function T(A){const N=Wt.values().next().value;return N&&typeof N.runWithContext=="function"?N.runWithContext(A):A()}function G(A,N){let I;const[L,Z,de]=wu(A,N);I=Bs(L.reverse(),"beforeRouteLeave",A,N);for(const h of L)h.leaveGuards.forEach(m=>{I.push(wt(m,A,N))});const u=H.bind(null,A,N);return I.push(u),je(I).then(()=>{I=[];for(const h of r.list())I.push(wt(h,A,N));return I.push(u),je(I)}).then(()=>{I=Bs(Z,"beforeRouteUpdate",A,N);for(const h of Z)h.updateGuards.forEach(m=>{I.push(wt(m,A,N))});return I.push(u),je(I)}).then(()=>{I=[];for(const h of de)if(h.beforeEnter)if(Ze(h.beforeEnter))for(const m of h.beforeEnter)I.push(wt(m,A,N));else I.push(wt(h.beforeEnter,A,N));return I.push(u),je(I)}).then(()=>(A.matched.forEach(h=>h.enterCallbacks={}),I=Bs(de,"beforeRouteEnter",A,N,T),I.push(u),je(I))).then(()=>{I=[];for(const h of o.list())I.push(wt(h,A,N));return I.push(u),je(I)}).catch(h=>dt(h,ge.NAVIGATION_CANCELLED)?h:Promise.reject(h))}function z(A,N,I){l.list().forEach(L=>T(()=>L(A,N,I)))}function O(A,N,I,L,Z){const de=$(A,N);if(de)return de;const u=N===Et,h=zt?history.state:{};I&&(L||u?i.replace(A.fullPath,ie({scroll:u&&h&&h.scroll},Z)):i.push(A.fullPath,Z)),c.value=A,et(A,N,I,u),Vt()}let X;function pe(){X||(X=i.listen((A,N,I)=>{if(!Dt.listening)return;const L=M(A),Z=q(L,Dt.currentRoute.value);if(Z){j(ie(Z,{replace:!0,force:!0}),L).catch(bn);return}d=L;const de=c.value;zt&&yu(yr(de.fullPath,I.delta),vs()),G(L,de).catch(u=>dt(u,ge.NAVIGATION_ABORTED|ge.NAVIGATION_CANCELLED)?u:dt(u,ge.NAVIGATION_GUARD_REDIRECT)?(j(ie(x(u.to),{force:!0}),L).then(h=>{dt(h,ge.NAVIGATION_ABORTED|ge.NAVIGATION_DUPLICATED)&&!I.delta&&I.type===zs.pop&&i.go(-1,!1)}).catch(bn),Promise.reject()):(I.delta&&i.go(-I.delta,!1),se(u,L,de))).then(u=>{u=u||O(L,de,!1),u&&(I.delta&&!dt(u,ge.NAVIGATION_CANCELLED)?i.go(-I.delta,!1):I.type===zs.pop&&dt(u,ge.NAVIGATION_ABORTED|ge.NAVIGATION_DUPLICATED)&&i.go(-1,!1)),z(L,de,u)}).catch(bn)}))}let Te=hn(),ce=hn(),J;function se(A,N,I){Vt(A);const L=ce.list();return L.length?L.forEach(Z=>Z(A,N,I)):console.error(A),Promise.reject(A)}function at(){return J&&c.value!==Et?Promise.resolve():new Promise((A,N)=>{Te.add([A,N])})}function Vt(A){return J||(J=!A,pe(),Te.list().forEach(([N,I])=>A?I(A):N()),Te.reset()),A}function et(A,N,I,L){const{scrollBehavior:Z}=e;if(!zt||!Z)return Promise.resolve();const de=!I&&Su(yr(A.fullPath,0))||(L||!I)&&history.state&&history.state.scroll||null;return It().then(()=>Z(A,N,de)).then(u=>u&&_u(u)).catch(u=>se(u,A,N))}const $e=A=>i.go(A);let Kt;const Wt=new Set,Dt={currentRoute:c,listening:!0,addRoute:g,removeRoute:b,clearRoutes:t.clearRoutes,hasRoute:k,getRoutes:_,resolve:M,options:e,push:E,replace:B,go:$e,back:()=>$e(-1),forward:()=>$e(1),beforeEach:r.add,beforeResolve:o.add,afterEach:l.add,onError:ce.add,isReady:at,install(A){A.component("RouterLink",Ju),A.component("RouterView",Zu),A.config.globalProperties.$router=Dt,Object.defineProperty(A.config.globalProperties,"$route",{enumerable:!0,get:()=>_e(c)}),zt&&!Kt&&c.value===Et&&(Kt=!0,E(i.location).catch(L=>{}));const N={};for(const L in Et)Object.defineProperty(N,L,{get:()=>c.value[L],enumerable:!0});A.provide(As,Dt),A.provide(Ti,co(N)),A.provide(Zs,c);const I=A.unmount;Wt.add(A),A.unmount=function(){Wt.delete(A),Wt.size<1&&(d=Et,X&&X(),X=null,c.value=Et,Kt=!1,J=!1),I()}}};function je(A){return A.reduce((N,I)=>N.then(()=>T(I)),Promise.resolve())}return Dt}function ln(){return Ge(As)}function tf(e){return Ge(Ti)}/*!
 * pinia v3.0.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let dl;const _s=e=>dl=e,hl=Symbol();function ei(e){return e&&typeof e=="object"&&Object.prototype.toString.call(e)==="[object Object]"&&typeof e.toJSON!="function"}var En;(function(e){e.direct="direct",e.patchObject="patch object",e.patchFunction="patch function"})(En||(En={}));function nf(){const e=Kr(!0),t=e.run(()=>He({}));let n=[],s=[];const i=pi({install(r){_s(i),i._a=r,r.provide(hl,i),r.config.globalProperties.$pinia=i,s.forEach(o=>n.push(o)),s=[]},use(r){return this._a?n.push(r):s.push(r),this},_p:n,_a:null,_e:e,_s:new Map,state:t});return i}const pl=()=>{};function $r(e,t,n,s=pl){e.add(t);const i=()=>{e.delete(t)&&s()};return!n&&Wr()&&$l(i),i}function Jt(e,...t){e.forEach(n=>{n(...t)})}const sf=e=>e(),Dr=Symbol(),ks=Symbol();function ti(e,t){e instanceof Map&&t instanceof Map?t.forEach((n,s)=>e.set(s,n)):e instanceof Set&&t instanceof Set&&t.forEach(e.add,e);for(const n in t){if(!t.hasOwnProperty(n))continue;const s=t[n],i=e[n];ei(i)&&ei(s)&&e.hasOwnProperty(n)&&!me(s)&&!mt(s)?e[n]=ti(i,s):e[n]=s}return e}const rf=Symbol();function of(e){return!ei(e)||!Object.prototype.hasOwnProperty.call(e,rf)}const{assign:Ct}=Object;function lf(e){return!!(me(e)&&e.effect)}function cf(e,t,n,s){const{state:i,actions:r,getters:o}=t,l=n.state.value[e];let c;function d(){l||(n.state.value[e]=i?i():{});const a=nc(n.state.value[e]);return Ct(a,r,Object.keys(o||{}).reduce((f,p)=>(f[p]=pi(ye(()=>{_s(n);const g=n._s.get(e);return o[p].call(g,g)})),f),{}))}return c=gl(e,d,t,n,s,!0),c}function gl(e,t,n={},s,i,r){let o;const l=Ct({actions:{}},n),c={deep:!0};let d,a,f=new Set,p=new Set,g;const b=s.state.value[e];!r&&!b&&(s.state.value[e]={}),He({});let _;function k(H){let T;d=a=!1,typeof H=="function"?(H(s.state.value[e]),T={type:En.patchFunction,storeId:e,events:g}):(ti(s.state.value[e],H),T={type:En.patchObject,payload:H,storeId:e,events:g});const G=_=Symbol();It().then(()=>{_===G&&(d=!0)}),a=!0,Jt(f,T,s.state.value[e])}const M=r?function(){const{state:T}=n,G=T?T():{};this.$patch(z=>{Ct(z,G)})}:pl;function x(){o.stop(),f.clear(),p.clear(),s._s.delete(e)}const $=(H,T="")=>{if(Dr in H)return H[ks]=T,H;const G=function(){_s(s);const z=Array.from(arguments),O=new Set,X=new Set;function pe(J){O.add(J)}function Te(J){X.add(J)}Jt(p,{args:z,name:G[ks],store:B,after:pe,onError:Te});let ce;try{ce=H.apply(this&&this.$id===e?this:B,z)}catch(J){throw Jt(X,J),J}return ce instanceof Promise?ce.then(J=>(Jt(O,J),J)).catch(J=>(Jt(X,J),Promise.reject(J))):(Jt(O,ce),ce)};return G[Dr]=!0,G[ks]=T,G},E={_p:s,$id:e,$onAction:$r.bind(null,p),$patch:k,$reset:M,$subscribe(H,T={}){const G=$r(f,H,T.detached,()=>z()),z=o.run(()=>vt(()=>s.state.value[e],O=>{(T.flush==="sync"?a:d)&&H({storeId:e,type:En.direct,events:g},O)},Ct({},c,T)));return G},$dispose:x},B=kn(E);s._s.set(e,B);const j=(s._a&&s._a.runWithContext||sf)(()=>s._e.run(()=>(o=Kr()).run(()=>t({action:$}))));for(const H in j){const T=j[H];if(me(T)&&!lf(T)||mt(T))r||(b&&of(T)&&(me(T)?T.value=b[H]:ti(T,b[H])),s.state.value[e][H]=T);else if(typeof T=="function"){const G=$(T,H);j[H]=G,l.actions[H]=T}}return Ct(B,j),Ct(ne(B),j),Object.defineProperty(B,"$state",{get:()=>s.state.value[e],set:H=>{k(T=>{Ct(T,H)})}}),s._p.forEach(H=>{Ct(B,o.run(()=>H({store:B,app:s._a,pinia:s,options:l})))}),b&&r&&n.hydrate&&n.hydrate(B.$state,b),d=!0,a=!0,B}/*! #__NO_SIDE_EFFECTS__ */function af(e,t,n){let s;const i=typeof t=="function";s=i?n:t;function r(o,l){const c=dc();return o=o||(c?Ge(hl,null):null),o&&_s(o),o=dl,o._s.has(e)||(i?gl(e,t,s,o):cf(e,s,o)),o._s.get(e)}return r.$id=e,r}const uf={id:"game-container"},ff={__name:"App",setup(e){return(t,n)=>{const s=Oo("router-view");return Y(),te("div",uf,[he(s,null,{default:nn(({Component:i})=>[he(ba,{name:"fade",mode:"out-in"},{default:nn(()=>[(Y(),Vn(Rc(i)))]),_:2},1024)]),_:1})])}}};var df="/assets/search.4b02e774.png",hf="/assets/addNew.f680a20a.png";const cn=af("game",{state:()=>({currentTime:new Date("2026-02-18T23:30:00"),sanValue:100,connections:{girlfriend:80,stranger:50,haiming:50,mother:60},dialogueHistory:{},currentOptions:[],isWaitingForChoice:!1,currentCharacter:null,lastInteractions:{},screenShake:!1,visualDistortion:0,savedVisualDistortion:null,gameStarted:!1,gameEnded:!1,endingType:null,showEndingModal:!1,osText:{text:"",visible:!1,isEnding:!1,waitingForRestart:!1},unlockedEndings:JSON.parse(localStorage.getItem("unlockedEndings")||"[]"),onSanChange:null,onOsTextEnd:null}),actions:{resetGame(){this.currentTime=new Date("2026-02-18T23:30:00"),this.sanValue=100,this.connections={girlfriend:80,stranger:50,haiming:50,mother:60},this.dialogueHistory={},this.currentOptions=[],this.isWaitingForChoice=!1,this.currentCharacter=null,this.lastInteractions={},this.screenShake=!1,this.visualDistortion=0,this.gameStarted=!1,this.gameEnded=!1,this.endingType=null,this.osText={text:"",visible:!1}},startGame(){this.gameStarted=!0,this.updateAllLastInteractions()},endGame(e){this.gameEnded=!0,this.endingType=e,this.showEndingModal=!0,this.unlockEnding(e)},hideEndingModal(){this.showEndingModal=!1},advanceTime(e){this.currentTime=new Date(this.currentTime.getTime()+e*1e3),this.currentTime>=new Date("2026-02-19T00:30:00")&&this.endGame("time_up")},changeSan(e){this.sanValue,this.sanValue=Math.max(0,Math.min(100,this.sanValue+e)),this.updateVisualDistortion(),this.onSanChange&&this.onSanChange(this.sanValue)},changeConnection(e,t){this.connections[e]!==void 0&&(this.connections[e]=Math.max(0,Math.min(100,this.connections[e]+t)),this.connections[e]<20&&console.log(`${e} \u5173\u7CFB\u7834\u88C2`))},addMessage(e,t,n,s="text"){this.dialogueHistory[e]||(this.dialogueHistory[e]=[]),this.dialogueHistory[e].push({id:Date.now()+Math.random(),speaker:t,content:n,type:s,timestamp:new Date(this.currentTime)})},showOptions(e,t){this.currentCharacter=e,this.currentOptions=t,this.isWaitingForChoice=!0},showOsText(e,t=!1){this.savedVisualDistortion=this.visualDistortion,this.visualDistortion=0,this.osText.text=e||"",this.osText.visible=!0,this.osText.isEnding=t,this.osText.waitingForRestart=!1},setWaitingForRestart(){this.osText.waitingForRestart=!0},hideOsText(){this.osText.visible=!1,this.osText.isEnding=!1,this.osText.waitingForRestart=!1,this.savedVisualDistortion!==null&&(this.visualDistortion=this.savedVisualDistortion,this.savedVisualDistortion=null),this.onOsTextEnd&&this.onOsTextEnd()},setOnOsTextEnd(e){this.onOsTextEnd=e},unlockEnding(e){this.unlockedEndings.includes(e)||(this.unlockedEndings.push(e),localStorage.setItem("unlockedEndings",JSON.stringify(this.unlockedEndings)))},isEndingUnlocked(e){return this.unlockedEndings.includes(e)},clearOptions(){this.currentOptions=[],this.isWaitingForChoice=!1},triggerScreenShake(){this.screenShake=!0,setTimeout(()=>{this.screenShake=!1},500)},updateLastInteraction(e){this.lastInteractions[e]=new Date(this.currentTime)},updateAllLastInteractions(){Object.keys(this.connections).forEach(t=>{this.lastInteractions[t]=new Date(this.currentTime)})},updateVisualDistortion(){this.sanValue>70?this.visualDistortion=0:this.sanValue>30?this.visualDistortion=1:(this.visualDistortion=2,this.sanValue<20&&(this.visualDistortion=3))},canEnterMyLine(){return this.sanValue<20},getConnectionStatus(e){const t=this.connections[e];return t>80?"high":t>20?"medium":"low"}},getters:{getHistory:e=>t=>e.dialogueHistory[t]||[],getSanLevel:e=>e.sanValue>70?"stable":e.sanValue>30?"unstable":e.sanValue>20?"critical":"broken",getGameTime:e=>{const t=e.currentTime.getHours().toString().padStart(2,"0"),n=e.currentTime.getMinutes().toString().padStart(2,"0"),s=e.currentTime.getSeconds().toString().padStart(2,"0");return`${t}:${n}:${s}`}}});var pf="/assets/contacts.3e97bce4.png",gf="/assets/discover.463adfaa.png",mf="/assets/me.788f55b4.png";var ct=(e,t)=>{const n=e.__vccOpts||e;for(const[s,i]of t)n[s]=i;return n};const vf={class:"tab-bar"},Af={__name:"TabBar",setup(e){return(t,n)=>{const s=Oo("router-link");return Y(),te("div",vf,[he(s,{to:"/",class:"tab-item","active-class":"active"},{default:nn(()=>[...n[0]||(n[0]=[D("img",{src:pf,alt:"\u804A\u5929",class:"icon"},null,-1),D("span",{class:"label"},"\u5FAE\u4FE1",-1)])]),_:1}),he(s,{to:"/contacts",class:"tab-item","active-class":"active"},{default:nn(()=>[...n[1]||(n[1]=[D("img",{src:gf,alt:"\u53D1\u73B0",class:"icon"},null,-1),D("span",{class:"label"},"\u53D1\u73B0",-1)])]),_:1}),he(s,{to:"/endings",class:"tab-item","active-class":"active"},{default:nn(()=>[...n[2]||(n[2]=[D("img",{src:mf,alt:"\u6211",class:"icon"},null,-1),D("span",{class:"label"},"\u6211",-1)])]),_:1})])}}};var wi=ct(Af,[["__scopeId","data-v-36591aa4"]]);const _f="girlfriend",yf="\u6797\u53EF\u6B23",Sf="./assets/characters/girlfriend/avatar.png",Vf="\u6211\u7684\u5973\u53CB\u3002\u6211\u4EEC\u5DF2\u7ECF\u4EA4\u5F80\u4E09\u5E74\u4E86\uFF0C\u5979\u662F\u6211\u751F\u547D\u4E2D\u6700\u91CD\u8981\u7684\u4EBA\u3002";var bf={id:_f,name:yf,avatar:Sf,description:Vf};function Xt(e){return new URL({}[`./assets/${e}`],self.location).href}const Ef={class:"chat-list-container"},Cf={class:"chat-list"},xf=["onClick"],Tf={class:"avatar"},wf=["src","alt"],Of={class:"chat-info"},Rf={class:"chat-header"},If={class:"name"},Pf={class:"time"},$f={class:"last-message"},Df={class:"message"},Nf={class:"notification-area"},Mf={key:0,class:"unread-dot"},Bf={__name:"ChatListView",setup(e){const t=ln(),n=cn(),s=He([{id:"girlfriend",name:"\u5973\u53CB",avatar:Xt("characters/girlfriend/avatar.png")}]);function i(d){t.push(`/conversation/${d}`)}function r(d){const a=n.getHistory(d);if(a.length>0){const f=a[a.length-1];return f.content.length>20?f.content.substring(0,20)+"...":f.content}return"\u6682\u65E0\u6D88\u606F"}function o(d){const a=n.getHistory(d);if(a.length>0){const p=a[a.length-1].timestamp;return`${p.getHours().toString().padStart(2,"0")}:${p.getMinutes().toString().padStart(2,"0")}`}return""}function l(d){return!1}function c(d){const a=n.connections[d];return a>80?"high":a>20?"medium":"low"}return(d,a)=>(Y(),te("div",Ef,[a[0]||(a[0]=D("div",{class:"header"},[D("h1",null,"\u5FAE\u4FE1"),D("div",{class:"header-buttons"},[D("img",{src:df,alt:"\u641C\u7D22"}),D("img",{src:hf,alt:"\u6DFB\u52A0"})])],-1)),D("div",Cf,[(Y(!0),te(Ce,null,es(s.value,f=>(Y(),te("div",{key:f.id,onClick:p=>i(f.id),class:Pt(["chat-item",{"high-conn":_e(n).connections[f.id]>80,"low-conn":_e(n).connections[f.id]<20}])},[D("div",Tf,[D("img",{src:f.avatar,alt:f.name},null,8,wf),D("div",{class:Pt(["conn-indicator",c(f.id)])},null,2)]),D("div",Of,[D("div",Rf,[D("h3",If,Pe(f.name),1),D("span",Pf,Pe(o(f.id)),1)]),D("div",$f,[D("span",Df,Pe(r(f.id)),1)])]),D("div",Nf,[l(f.id)?(Y(),te("span",Mf)):ke("",!0)])],10,xf))),128))]),he(wi)]))}};var kf=ct(Bf,[["__scopeId","data-v-ba4a8220"]]),Oi="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAANEklEQVR4AeydZ8gsSRWGZ11d15zDrhmzizlgYs0YVjGjwhpQf6ioyCoGUEyYUBD1h7oiKgpGVFBXUEwoigERRTGgsiYMq27O6X25X8+dndwz1dV1qp7LOV919/RUeM68t7qnqmuuNOEfBCCwkgACWYmGFyAwmSAQPgUQWEMAgayBw0sQQCB8BiCwhsCAAllTKi9BIAgBBBIkUFRzHAIIZBzulBqEAAIJEiiqOQ4BBDIOd0oNQiCmQILApZrxCSCQ+DGkBQMSQCADwiXr+AQQSPwY0oIBCSCQAeGSdXwCCGQuhuxCYJYAApmlwTYE5gggkDkg7EJglgACmaXBNgTmCCCQOSDsQmCWAAKZpTHsNrkHJIBAAgaNKucjgEDysaakgAQQSMCgUeV8BBBIPtaUFJAAAgkYtMUqc2QoAghkKLLkWwUBBFJFGGnEUAQQyFBkybcKAgikijDSiKEIIJChyNaSb+PtQCCNfwBo/noCCGQ9H15tnAACafwDQPPXE0Ag6/nwauMEEEjjH4Axmx+hbAQSIUrUcTQCCGQ09BQcgQACiRAl6jgaAQQyGnoKjkAAgUSIEnXsSyDZ+QgkGUoyqpEAAqkxqrQpGQEEkgwlGdVIAIHUGFXalIwAAkmGsldG1+h1NiePRmBRIKNVpZmCn6WW/k+OBSCAQPIG6XwV92H5UXIsAAEEkidIx6uY8+RXlV9LjgUhgECGD9TFKuK78qPlWDACCGS4gN1JWZ8jP1J+hHzWLpvdYbtcAlkFUi6G5DV7p3L8tfzqciwwAQSSNnjHKLuz5a+Rw1YQohtBTBfBk5TVX+SMcQhCLYZA9o+kBeFe4z3K6spyrCICCGS/YHaDfhbJ/I34fjnz7iII1CKQMWCeq0I/ImfQTxBqNQTSP7IP1Vssjqspdc+hBKuVAALpF1lPFfm23mJxKMFqJ4BAtouwB/18I+6pItxrbMesirMQyOYwXqJTPOjH5ZRAtGYIZHXEj9VLZ00mEzOyaxdrjQCBXx7xV+rwqfJryrGGCSCQKwbfgjhTh4Ye9GOyoiBHMARyOEonavM0Oc9rCAJ2iAACOcThLCUny/0tlRIMAocItC6QRwqDn9nwpVX+sQ0VjpVNoGWBWBjfUHh4ZkMQsOUEWhTIcULhSyoLg0E/wcBWE2hNIBcIxS/lvqRSMprxLdZo6PsV3IpAbiYsZ8g987aVNqu52L4EWviwXCpIf5ZfW96M0dA0BGoWiMczThcm32dcRSkGgd4EahXIc0Xi3/LryDEI7EygRoG41/CgHwu17fyx4I0dgZoE8mg1ys9suNfwzbh2MQjsR6AWgXiC4deFgmc2BGFgayr76AK5q6JlcfiG3Dfj2sUgkI5AZIF4qsgvhMLiUIJBID2BiALxoJ9vxD1VJGL900eRHAcjEO0DdqFIeNDPN+LaDGtMNQkSuigC8WXU/8XUA352bYY2L1H6L7XAYveCED/Rtn9D5BSln5d/Qv5BuZ9sfIvSV8lfKH+a3FP076P0dvIbyp2XkhqsvDZEEMgLhM2DftdVWpPdWI25tfwu8vvKHyJ/rNwieI7SF8n9bPwblL5b7lUcLZ5vavun8j/I/yO/SO5Fsz11/wPafqn8UfJbyLE9CZQuEP/Y5YfURgb9BGGNWQwWhcVhkVgsFo3v1b6m971O/nB5bf/JqEnDWqkCOUHN9qDf9ZRyCSEIO5rv1R6n975d/i25L1N/qPR9ck/HuaNSbA2BEgXiIH5FdWbQTxAGsAcoz5fLPy7/rfwH8rfKHybH5giUJJB7qW5+ZsOXAQz6CUYme5DKeb3caw7/Tqm/GPAC3dqsyHZsSikCsTB848kzGzsGMtHb7qB8/MXAd5T+TP4muceblLRpYwvk5sLuSyoLY+y6qCrYDIF7a/uNcl+CPVNpkzbmh9JTRf4k6r6kUoIVSuCeqtenD/weSpuyMQTi3uK/ouyuu4ZBPzWlCXMv4kuvVzTR2oNG5haIB7U8gnz9g/JJYhFwb/9eVflL8iZ6k20EIhZJ7O/KxZdUDPoJRHB7kurv3uRlSqu2nALxLNzbi6a/sVKCBSfg3uT9asNn5NVaToEYosu7gTb+KXdvogQLTuAZqr+ntSipz/yBzd0q/6TZMSr0lnI/DagEC07Ac8H+GrwNS6s/hkC6ivgbLM9odW9S7f9AXWMbSD2m9bna2jmmQCaTycRr5bo3uanAenKiEiwwgaer7h+TV2NjC6QD6R+uuYl23Jv8QykWl8DzVHW7kvhWikBM8lz9cW/iMRKPsmsXC0rAU1T8MFjQ6h+udkkC6WrlX3o6VjseUPSThNrEghGwOCySYNVerG6JAnEt/e2W70v8Ox7uWXwMj0XAl1n2WLWeq22pAumq6Yem/O2IexLP+u2Ob045owQCLy6hEvvUoXSBuG0Whm/g/bXweT6AhyFwP9X0RHlYiyCQDq6X/rmVdtyb+DcGtYkFIPD8AHVcWcVIAnEjvMyNexMvvHa+D+DFE/Cz7k8uvpYrKhhNIF0zvFrHbbRjwUQUysWqu+cwPUHpI+T+EOVw/0SEy3yqyvTzHV5/ywvSvUT7fs7j1Ur9fPq7lH5B7rWPU/TWYXuRqAJR7CYeVPRUFS9H6hF5H8viCQq5VHl4WsZXlXqxBK+qmMO9XpbL/KLK/az8k/KPyr2Ko5cC8gJ1b9P+a+UeFffThH7Azb32A3Xs2fI3y71+gJKt7fE60yvxK4llkQXSkXZv4mU43Zt4ImR3nDQdAd/3/UjZfUruhRx88+3Jpu4Zvqxj25ifIdnmvKLOqUEgBvo3/XFv4ssB9yjaxQYm4Nm7nnfl+4vjVZZ7IiUr7YkrXyn4hVoE0iH2Soxeuua07gBpFgLfVym+lzlJ6SrzKileeHvV60Uer00ghnyq/txI7vETPwOvzeLM38IVV6kEFfLz6r7xX9WLPyZBGVmzqFEgHUBPeryzdryCipIQVkMlfePvS65lz/i4FwnVxpoF4kD8UX/8GxpeJd5frWoXy0DgxyrjtnKnSqaGQKYoytrwc/DHqUoWihIsAwH/h3R/lTP7IJxnQ4QSSe09iOIztd9ry0KxSPg6WDAy2VPmykEgc0BK27VI7qZK+SZeCTYwAf8iln8EqSvm7t1GhLSlHmQ2Hr/Rjm/ifQPfSG+iFo9nnvbuH+5xDfyTc05DeKsC6YLjG3hPp/BPlXXHSIch8I6DbH0veLBZftK6QByhX+mPBxjdm3iOlHaxAQh4Dph/OcxjVPYBikifJQI5zNS9iX9tlqVRDzNJvXXyQYZhehEEchCxg+TnSr3mrKeqDDnaPWTeakKx1vUiCKTYEG1XMV8CPFinevEIJdhaAv1e9OxfBNKPWZFn+1sXT6UfujcpsvEDVup7yjvMN1lcYilaG8y9iWeheir9hlN5eQsCnv5z5BbnFXEKAtkuDH7qz0/WuTfZ7h2ctY6Ae+d1rxfzGgLpFwr3JifoLbPzi7SL9STg/3B6vmWc0xFIf+6n6C2edEdvIhA72tYC2TH/ZG9DILujdG/i1UFYaLs/w1IfZFtoCQJZQNLrgFcH8frB7k1YQ7gXuhgnI5A0cXJv4lXpEUkansXkgkDShcIs/U2X53SFuYRI1/w6c3JQ62zZOK3y1HnP6TpCxbPQtiAUbFtVDYFshan3SV6Jvpsh3Oq8q97QSnwDAhkuKl4O1b2Jn82eXz8Y0QzHPWnOCCQpzqWZHaWjfszXz8JrE4tEAIHkiZa/3bJI3KvY85RKKXsTQCB7I+yVwdE622sIcwMvEBFsN4FEaFm5dfQzJu5Nyq0hNZsSQCBTFGxAYJEAAllkwhEITAkgkCkKNiCwSACBLDLhCASmBIoTyLRmbECgAAIIpIAgUIVyCSCQcmNDzQoggEAKCAJVKJcAAik3NtSsAAItCaQA3FQhGgEEEi1i1DcrAQSSFTeFRSOAQKJFjPpmJYBAsuKmsGgEEEiSiJFJrQQQSK2RpV1JCCCQJBjJpFYCCKTWyNKuJAQQSBKMZFIrAQRSemSp36gEEMio+Cm8dAIIpPQIUb9RCSCQUfFTeOkEEEjpEaJ+oxJAIKPiH7dwSt9MAIFsZsQZDRNAIA0Hn6ZvJoBANjPijIYJIJCGg0/TNxNAIJsZcUZ/AtW8A4FUE0oaMgQBBDIEVfKshgACqSaUNGQIAghkCKrkWQ0BBFJNKFtpSN52IpC8vCktGAEEEixgVDcvAQSSlzelBSOAQIIFjOrmJYBA8vKmtJIJLKkbAlkChUMQ6AggkI4EKQSWEEAgS6BwCAIdAQTSkSCFwBICCGQJFA5BoCOQSiBdfqQQqIoAAqkqnDQmNQEEkpoo+VVFAIFUFU4ak5oAAklNlPyqIhBAIFXxpjHBCCCQYAGjunkJIJC8vCktGAEEEixgVDcvAQSSlzelBSPQtkCCBYvq5ieAQPIzp8RABBBIoGBR1fwEEEh+5pQYiAACCRQsqpqfAAIZiDnZ1kHgcgAAAP//k8qkVwAAAAZJREFUAwD+lDKgEWftTwAAAABJRU5ErkJggg==";function Ff(e){const t=e.split(`
`).map(b=>b.trim()),n={};let s=null,i=[],r={},o={};const l=/^\$(.*?)\$/,c=/<(.*?)>/,d=/^(.*?): (.*)$/,a=/^(\d+)\. (.*)$/,f=/^\/\/ 选项(\d+) -> 跳转至 \$(.*?)\$$/,p=/^\/\/ 选项(\d+) 效果: (.*)$/,g=/^<OS_Text>\s*(.*?)\s*<\/OS_Text>$/;for(let b=0;b<t.length;b++){const _=t[b];if(!_||_.startsWith("// ---"))continue;const k=_.match(l);if(k){i.length>0&&s&&(n[s].push({type:"OPTIONS",choices:i.map(j=>({text:j.text,target:r[j.index],...o[j.index]}))}),i=[],r={},o={}),s=k[1],n[s]=[];continue}if(!s)continue;const M=_.match(g);if(M){n[s].push({type:"COMMAND",command:"OS_Text",args:[M[1]]});continue}const x=_.match(c);if(x){const[j,...H]=x[1].split(":").map(T=>T.trim());n[s].push({type:"COMMAND",command:j,args:H});continue}if(_==="[options]:"){i=[],r={},o={};continue}const $=_.match(a);if($){i.push({index:$[1],text:$[2]});continue}const E=_.match(f);if(E){const[,j,H]=E;r[j]=H;continue}const B=_.match(p);if(B){const[,j,H]=B,T={};H.split(",").map(z=>z.trim()).forEach(z=>{const[O,X]=z.split(":").map(pe=>pe.trim());O==="SanEffect"?T.sanEffect=parseInt(X):O==="ConnEffect"&&(T.connEffect=parseInt(X))}),o[j]=T;continue}if(_.includes("<SanCheck>")||_.includes("</SanCheck>")||_.includes("<\u6761\u4EF6\u68C0\u6D4B>")||_.includes("</\u6761\u4EF6\u68C0\u6D4B>")||_.includes("<\u6761\u4EF61:")||_.includes("<\u6761\u4EF62:")||_.includes("\u6761\u4EF61:")||_.includes("\u6761\u4EF62:"))continue;const q=_.match(d);if(q){const[,j,H]=q;n[s].push({type:"DIALOGUE",speaker:j,content:H});continue}if(_.startsWith("// -> \u8DF3\u8F6C\u81F3")){const j=_.match(/\$(.*?)\$/);if(j){const H=j[1];n[s].push({type:"JUMP",target:H})}}}return i.length>0&&s&&n[s].push({type:"OPTIONS",choices:i.map(b=>({text:b.text,target:r[b.index],...o[b.index]}))}),n}class Lf{constructor(){this.gameStore=cn(),this.dialogueTrees={},this.characterStates={},this.messageHandlers={},this.missedCheckIntervals={}}async loadAndStart(t,n,s="23:30"){if(this.gameStore.dialogueHistory[t]&&this.gameStore.dialogueHistory[t].length>0){console.log(`GameEngine: ${t} \u5DF2\u6709\u5BF9\u8BDD\u5386\u53F2\uFF0C\u8DF3\u8FC7\u91CD\u65B0\u5F00\u59CB`);return}this.dialogueTrees[t]=Ff(n),this.characterStates[t]={currentBlock:null,instructionPointer:0},await this.jumpToBlock(t,s),await this.processQueue(t),this.startMissedCheck(t)}jumpToBlock(t,n){this.dialogueTrees[t]&&this.dialogueTrees[t][n]?(this.characterStates[t]||(this.characterStates[t]={currentBlock:null,instructionPointer:0}),this.characterStates[t].currentBlock=this.dialogueTrees[t][n],this.characterStates[t].instructionPointer=0):console.error(`\u9519\u8BEF\uFF1A\u627E\u4E0D\u5230\u5BF9\u8BDD\u5757 [${n}] \u6216\u89D2\u8272 [${t}]`)}async processQueue(t){if(this.gameStore.isWaitingForChoice)return;const n=this.dialogueTrees[t],s=this.characterStates[t];if(!(!n||!s||!s.currentBlock))for(;s.instructionPointer<s.currentBlock.length;){const i=s.instructionPointer,r=s.currentBlock[i];if(r.type==="COMMAND"&&r.command==="OS_Text"){this.executeCommand(t,r.command,r.args);return}if(r.type==="COMMAND"&&r.command==="Ending"){this.executeCommand(t,r.command,r.args);return}if(s.instructionPointer++,!await this.executeInstruction(t,r))break}}async executeInstruction(t,n){switch(n.type){case"DIALOGUE":return this.gameStore.addMessage(t,n.speaker,n.content),this.gameStore.advanceTime(10),await this.delay(1e3),!0;case"COMMAND":return this.executeCommand(t,n.command,n.args),!0;case"OPTIONS":return this.gameStore.showOptions(t,n.choices),!1;case"JUMP":return await this.jumpToBlock(t,n.target),await this.processQueue(t),!1}return!0}executeCommand(t,n,s){switch(n){case"TimeFlow":this.gameStore.advanceTime(parseInt(s[0].replace("s","")));break;case"SanEffect":this.gameStore.changeSan(parseInt(s[0]));break;case"ConnEffect":this.gameStore.changeConnection(t,parseInt(s[0]));break;case"ScreenShake":this.gameStore.triggerScreenShake();break;case"SetCharacter":this.currentCharacter=s[0];break;case"OS_Text":console.log("OS_Text\u88AB\u8C03\u7528\uFF0C\u5185\u5BB9:",s[0]),this.gameStore.showOsText(s[0]);break;case"Ending":console.log("Ending\u88AB\u8C03\u7528\uFF0C\u7C7B\u578B:",s[0]),this.gameStore.endGame(s[0]);break}}async selectOption(t,n){!this.gameStore.isWaitingForChoice||(this.gameStore.clearOptions(),this.gameStore.updateLastInteraction(t),n.sanEffect&&this.gameStore.changeSan(n.sanEffect),n.connEffect&&this.gameStore.changeConnection(t,n.connEffect),setTimeout(()=>{n.target&&this.jumpToBlock(t,n.target),this.processQueue(t)},500))}startMissedCheck(t){this.missedCheckIntervals[t]=setInterval(()=>{const n=this.gameStore.lastInteractions[t];if(!n)return;(this.gameStore.currentTime-n)/1e3/60>=5&&(this.gameStore.changeConnection(t,-8),this.gameStore.changeSan(-3),this.gameStore.updateLastInteraction(t))},1e4)}stopMissedCheck(t){this.missedCheckIntervals[t]&&(clearInterval(this.missedCheckIntervals[t]),delete this.missedCheckIntervals[t])}delay(t){return new Promise(n=>setTimeout(n,t))}}var Hf="/assets/bgm.762d458a.mp3",jf="/assets/messageSend.28be86ba.mp3",Uf="data:audio/mpeg;base64,SUQzBAAAAAAAI1RTU0UAAAAPAAADTGF2ZjU4LjQxLjEwMAAAAAAAAAAAAAAA//tQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASW5mbwAAAA8AAAAFAAAI+QBFRUVFRUVFRUVFRUVFRUVFRUVFdHR0dHR0dHR0dHR0dHR0dHR0dHSioqKioqKioqKioqKioqKioqKiotHR0dHR0dHR0dHR0dHR0dHR0dHR//////////////////////////8AAAAATGF2YzU4Ljc1AAAAAAAAAAAAAAAAJASTAAAAAAAACPnr5dFnAAAAAAAAAAAAAAAAAAAAAP/7kGQAAALUCtQVJGACAAANIKAAARwdoT85zAAAAAA0gwAAAAAGoAAYYXFYrFYrJxQgQIECBAgYAxbh4eHgAAAAAGHh4eHgAAAAAGHh4eHgAAAMIx//7v////2AAAAAIw9/+4AAAADDw8PHgAAAACMPDw8eAAAA7YeHv9wB/7AoAQkAQQUgkBNDyUgEZkRyAJHGXn4PMQBFlKoBBAMBYcPy+SAZQZpb9oSx4BrJR5Z3I3cUtTpaUoNGH8buTTSZWs70pf2HXXkEwzguIaWp6MjoHah6ZhlkCsD/uG35EsSYBqPICjym1Lp6llLuLXwp4EhsMQv2jbPDTp2blN2zS8pp6HKszPw5FXajEMPXD7v6ps+1dY5XZHUsS/ueOfyCirx1mb7yujt5Y1t6q5arY40nO6///Xd5zdeph+HMP3V12tjjV1lWxxq5Zf+/1/d/////+VyzX7zuGGX/l9bHGqoANNyJJJEpJNtJJO2yA0GPRTNWfhYmBxeEAAjNDBwhRKmSinR0YIg5HpoCYbnhCgJZJMUKgGEgpZqKGvy5TophDP/7kmQggAWyVVTubeAEAAANIMAAABkFf125p5AQAAA0gwAAACasqqs5spwd7HB9hEKdQIaX1Qr0WSEzUzCgmAQZSExSaqTz6Zmex8Ve6iEJYkKTramEP3a26Rldv//OW5unmTwfyhrG9rfHtv4965+fpcnCX5Eyq2BmA2sr2to0HVsZfSR86zaudTX1mFvdX33BrJaeY8VWm8ATX/vaayy6PNx3TfTQT1gp6a5KoyaFVBhxVCFQc9VoABFXAFBG8LAQKrgRE4LSZsHqLII4DpP8mAuyKVJTnQap1BeqKRFKk4GdDZSUNEIt7sWhGpRxJmT9eTCfhKAkhp4i9okdQFQ1Fo4JzK2wRFhv3Gc8yQpKt96LiI/fqvGLRGRDmpZnhMLq+0IrejhAj6uah1zxomXlNNq4WG9Xv+yJ20rG8qss83lcp8o1bcL0eRL7blbj/6x//f0+s/X/+MZzbGax3OFjFQASpK2kiQAAigAAGlpDMicFIJiUmPIRqeY0ZK9+FKOPRSKWiQG9z7OlFwjwlW0u3VY9YKUii6CYltkitgR8/07/+5JkIAAFyVpTbm3gAgAADSDAAAAS5O8y3eYACAAANIOAAAS+JaT1DnzuXMVUo8b4cYrh/MzMiZNXg2lFjUQc5qkpQONVta1a23uiqRTXvKiQL22YtaK+/r8YlLrCQtCllnq2ODNHUssSD/b/5//qTk0kYz3f948P4wcwYO//q1fb////8T4YQ+yUMB5KFO2zFkvjEF9aFLW3ZTHTAIAACwQJwaTQnxkGBVmDcDqYLQGZgKAAwIw8FAArDO9C3ZcCjgaR2yfEfF5UXV5v7JdMISkTVA8wAgXJWJFB8moZmRPJ5zGjYYWHjSEIgwUWYOLv3XuLDBximL7V5+7crOvG01ar53sbCwwplIu3tu/aOO7b9P5jg8myzk83n//6UGnKW/4lhH9+u6n/MVTKogf4dY6G9tUFAAAUZDQsb0nqYNDKYjg2IgSBwAN41VX9NMwK8WodoYnK1a8gnVOkluRmNFDJVNVIsYu53K1pmRTW+j5msaKzFVMGNAUtVEb64LwUZlPntXHEq5W5ZHOFK1P3HEWf2zFq9id7LC3Fa2WDCiKp//uSZDaABM49zLV14AAAAA0goAABHJmZVbmsABAAADSDAAAARQp1ExRpHssK1I+n3/1/bcUCPNORpyrCwmKDDTAYMNJzoZKCqolkm2zDQlesAbTe2zVyux2q2eq52M1ZyBTTB3lAQdgzPTJCyteXpNgSN6nIgC9UMB0IdF6bcWzhVKFuYRJBo17NlWu9i9HHTXLwLEcidf6uutY7gO1FIKWEZI/60XRsw1WqRnKClfyLB+2J1Iw8LPZZWljyuy90B14vFLs/DkYpJ+pIrd1eFnKtLpRx5nkizOGmKDtfmwFFUMMSOXQ40xyIfZRTY087RWO6zjduWc7SUlj8d87jv8f1TyGrnjrHLGzyfqSyH43bxjcvhyx/e/nvWv13nf73////v/r///lEYlkv1hG43P3q9uHKRQAMAIAIAADJD3O6YNwZR/nTJSYRCUflP+Y4WJwSh1K/+Bm6AHZjeB68QFTwHT4KSXwOPUAwh8DNBxbFK/AwCcDcPQOBLAJEBgtda/wMEPAJJAZ00BmTQ6ABRHUr+BkzgCBIGKBg2DQ4kDCDQP/7kmQ2AAZKaEhGcoAAAAANIMAAAAAAAaQcAAAgAAA0g4AABMkbV9f8LEgwUJtAiCAxYoDGkhWokQAIT//8CAEDCAwMADJUG3QMMNBvMDc4WUHtAAgv///Aw4wP1G8HpBgUDAAQMEFJ4TaAQBDAwNsgsiGeBuV////+BgQwciHKlpVMQU1FMy4xMDBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVU=";const Qe=He(null),Cn=He(null),xn=He(null),Qt=He(!1);let ot=null,Nr=null,Wn=null,Tn=null,qn=null,ni=!1;const Qf=()=>{Qe.value=new Audio(Hf),Qe.value.loop=!0,Qe.value.volume=.5,Qe.value.crossOrigin="anonymous",Cn.value=new Audio(jf),Cn.value.volume=.5,xn.value=new Audio(Uf),xn.value.volume=.3,Qe.value.addEventListener("ended",()=>{Qt.value&&Qe.value.play().catch(()=>{})})},Gf=()=>{ni||(ot=new(window.AudioContext||window.webkitAudioContext),Nr=ot.createMediaElementSource(Qe.value),Wn=ot.createBiquadFilter(),Tn=ot.createStereoPanner(),qn=ot.createGain(),Nr.connect(Wn),Wn.connect(Tn),Tn.connect(qn),qn.connect(ot.destination),ni=!0)},Kf=()=>{Cn.value&&(Cn.value.currentTime=0,Cn.value.play().catch(()=>{}))},Wf=()=>{xn.value&&(xn.value.currentTime=0,xn.value.play().catch(()=>{}))},qf=()=>{Qe.value&&!Qt.value&&(Gf(),ot&&ot.state==="suspended"&&ot.resume(),Qt.value=!0,Qe.value.play().catch(()=>{}),requestAnimationFrame(vl))},Jf=()=>{Qe.value&&Qt.value&&(Qt.value=!1,Qe.value.pause())};let ml=100;const Yf=e=>{ml=e},vl=()=>{if(!Qt.value||!ni)return;const e=1-ml/100,t=ot.currentTime,n=1-.7*Math.pow(e,1.5),s=e>.3?Math.sin(Date.now()/200)*.08*e:0;Qe.value.playbackRate=Math.max(.1,n+s);const i=2e4*Math.pow(1-e,2)+100;if(Wn.frequency.setTargetAtTime(i,t,.1),e>.5){const o=Math.sin(Date.now()/800)*e;Tn.pan.setTargetAtTime(o,t,.1)}else Tn.pan.setTargetAtTime(0,t,.1);let r=.6;if(e>.7){const o=Math.sin(Date.now()/150)*.2*e,l=Math.random()>.98?.1:1;r=(.5+o)*l}qn.gain.setTargetAtTime(r,t,.1),requestAnimationFrame(vl)};function Al(){return{initAudio:Qf,playMessageSendSound:Kf,playKeyboardSound:Wf,startBgm:qf,stopBgm:Jf,updateBgmBasedOnSan:Yf,isBgmPlaying:Qt}}const zf={class:"os-text-content"},Xf={key:0,class:"cursor"},Zf={key:1,class:"continue-hint"},ed={__name:"OsTextView",props:{text:{type:String,required:!0},visible:{type:Boolean,default:!1},isEnding:{type:Boolean,default:!1},waitingForRestart:{type:Boolean,default:!1}},setup(e){const{playKeyboardSound:t}=Al(),n=ln(),s=cn(),i=e,r=He(""),o=He(!1);let l=null,c=0;const d=()=>{c++;const p=c;if(console.log("OsTextView: startTyping()\u88AB\u8C03\u7528, text:",i.text,"version:",p),l&&(clearInterval(l),l=null),r.value="",o.value=!0,!i.text||i.text.trim()===""){console.log("OsTextView: text\u4E3A\u7A7A\u6216undefined"),o.value=!1,i.isEnding&&s.setWaitingForRestart();return}let g=0;l=setInterval(()=>{if(p!==c){clearInterval(l),l=null;return}g<i.text.length?(r.value+=i.text[g],t(),g++):(l&&p===c&&(clearInterval(l),l=null),o.value=!1,console.log("OsTextView: \u6253\u5B57\u5B8C\u6210"),i.isEnding&&s.setWaitingForRestart())},50)},a=()=>{s.hideOsText(),s.resetGame(),n.push("/")},f=()=>{!o.value&&!i.waitingForRestart&&!i.isEnding&&s.hideOsText()};return ps(()=>{console.log("OsTextView: \u7EC4\u4EF6\u5DF2\u6302\u8F7D")}),vt(()=>i.visible,p=>{console.log("OsTextView: visible\u53D8\u5316\u4E3A:",p),p?It(()=>{d()}):(l&&(clearInterval(l),l=null),o.value=!1,r.value="")}),vt(()=>i.text,p=>{console.log("OsTextView: text\u53D8\u5316\u4E3A:",p),i.visible&&It(()=>{d()})}),mi(()=>{l&&(clearInterval(l),l=null)}),(p,g)=>e.visible?(Y(),te("div",{key:0,class:"os-text-container",onClick:f},[D("div",zf,[Si(Pe(r.value)+" ",1),o.value?(Y(),te("span",Xf,"|")):ke("",!0)]),!o.value&&e.waitingForRestart?(Y(),te("div",{key:0,class:"restart-button",onClick:a}," \u91CD\u65B0\u5F00\u59CB ")):!o.value&&!e.isEnding?(Y(),te("div",Zf," \u70B9\u51FB\u7EE7\u7EED ")):ke("",!0)])):ke("",!0)}};var td=ct(ed,[["__scopeId","data-v-afe1566c"]]);const nd={key:0,class:"ending-modal-overlay"},sd={class:"ending-modal"},id={class:"ending-content"},rd={class:"ending-title"},od={class:"ending-description"},ld={__name:"EndingModal",props:{visible:{type:Boolean,default:!1},endingType:{type:String,default:null}},setup(e){const t=e,n=ln(),s=cn(),i={good:{title:"\u597D\u7ED3\u5C40\uFF1A\u5982\u5E38\u7684\u9ECE\u660E",description:'\u4F60\u6210\u529F\u5730\u626E\u6F14\u4E86"\u8FC7\u53BB\u7684\u6211"\uFF0C\u7528\u7A33\u5065\u548C\u7406\u667A\u5B89\u629A\u4E86\u5979\uFF0C\u5C06\u6240\u6709\u5F02\u5E38\u90FD\u9694\u7EDD\u5728\u5979\u611F\u77E5\u4E4B\u5916\u3002\u5979\u9519\u8FC7\u4E86\u964C\u751F\u4EBA\u7EDD\u671B\u7684\u8B66\u544A\uFF0C\u7236\u6BCD\u7684\u77ED\u6682\u5931\u8054\u4E5F\u88AB\u89E3\u91CA\u4E3A\u4E00\u573A\u8BEF\u4F1A\u3002\u8FD9\u4E2A\u65B0\u5E74\u591C\u7684\u5371\u673A\u4F3C\u4E4E\u8FC7\u53BB\u4E86\u3002\u7136\u800C\uFF0C\u697C\u4E0B\u7684\u9634\u5F71\u53EA\u662F\u6682\u65F6\u9000\u53BB\uFF0C\u90A3\u4E2A\u504F\u6267\u7684\u51DD\u89C6\uFF0C\u5C06\u5728\u4E0B\u4E00\u4E2A\u9ED1\u591C\uFF0C\u4EE5\u66F4\u8FD1\u7684\u8DDD\u79BB\uFF0C\u91CD\u65B0\u5305\u88F9\u5979\u3002\u4F60\u4E3A\u5979\u5B88\u62A4\u4E86\u4E00\u4E2A\u865A\u5047\u7684\u9ECE\u660E\u3002'},normal:{title:"\u666E\u901A\u7ED3\u5C40\uFF1A\u672A\u77E5\u7684\u6572\u95E8\u58F0",description:'\u4F60\u7684\u9009\u62E9\u5145\u6EE1\u4E86\u77DB\u76FE\uFF0C\u65E2\u6CA1\u80FD\u7ED9\u5979\u8DB3\u591F\u7684\u5B89\u5168\u611F\uFF0C\u53C8\u6FC0\u8D77\u4E86\u5979\u65E0\u5C3D\u7684\u6050\u60E7\u3002\u7236\u6BCD\u7684\u5931\u8054\u3001\u964C\u751F\u4EBA\u7684\u8B66\u544A\u3001\u4F60\u7684\u7A81\u7136\u51B7\u6F20\uFF0C\u4E00\u5207\u90FD\u5C06\u5979\u63A8\u5411\u5D29\u6E83\u7684\u8FB9\u7F18\u3002\u4F60\u9009\u62E9\u62BD\u8EAB\u79BB\u5F00\uFF0C\u5C06\u5979\u72EC\u81EA\u7559\u5728\u88AB\u672A\u77E5\u5305\u88F9\u7684\u623F\u95F4\u91CC\u3002\u51E0\u5206\u949F\u540E\uFF0C\u5979\u7684\u623F\u95E8\u88AB\u6572\u54CD\u4E86\u3002\u5979\u4E0D\u77E5\u9053\u95E8\u5916\u662F\u8C01\u3002\u662F\u6765"\u4FDD\u62A4"\u4F60\u7684\u6211\uFF1F\u662F\u6765\u8B66\u793A\u5979\u7684\u964C\u751F\u4EBA\uFF1F\u8FD8\u662F......\u7EC8\u4E8E\u4ECE\u623F\u95F4\u91CC\u51FA\u6765\u7684"\u7236\u6BCD"\uFF1F\u8FD9\u4E2A\u65B0\u5E74\uFF0C\u5979\u5C06\u6C38\u8FDC\u6D3B\u5728\u65E0\u5C3D\u7684\u731C\u6D4B\u548C\u6050\u60E7\u4E4B\u4E2D\u3002'},true:{title:"\u771F\u7ED3\u5C40\uFF1A\u6211\u7684\u91D1\u4E1D\u96C0",description:'\u4F60\u9075\u4ECE\u4E86\u88AB\u66FF\u6362\u540E\u7684\u672C\u80FD\uFF0C\u7528\u6700\u504F\u6267\u7684\u65B9\u5F0F\u56DE\u5E94\u4E86\u5979\u7684\u4F9D\u8D56\u548C\u4F60\u7684\u7231\u3002\u4F60\u5F3A\u8FEB\u5979\u6253\u5F00\u4E86\u964C\u751F\u4EBA\u6700\u540E\u7684\u8B66\u544A\uFF0C\u5E76\u7528\u8A00\u8BED\u5C06\u5176\u6B6A\u66F2\u4E3A\u65E0\u7A3D\u4E4B\u8C08\uFF0C\u5F7B\u5E95\u5207\u65AD\u4E86\u5979\u4E0E\u5916\u754C\u7684\u8054\u7CFB\u3002\u5F53\u95E8\u9501\u8F6C\u52A8\u7684\u90A3\u4E00\u523B\uFF0C\u5979\u624D\u660E\u767D\uFF0C\u697C\u4E0B\u7684\u964C\u751F\u4EBA\u3001\u7535\u8BDD\u91CC\u7684\u7231\u4EBA\u3001\u548C\u5373\u5C06\u8FDB\u5165\u5979\u623F\u95F4\u7684"\u4F60"\uFF0C\u662F\u540C\u4E00\u4E2A\u5B58\u5728\u3002\u81F3\u4E8E\u5979\u7684\u7236\u6BCD\u2026\u2026\u6216\u8BB8\u4ED6\u4EEC\u4ECE\u4E00\u5F00\u59CB\u5C31\u4E0D\u5728\uFF0C\u6216\u8BB8\u4ED6\u4EEC\u518D\u4E5F\u4E0D\u4F1A\u9192\u6765\u3002\u4ECE\u8FD9\u4E2A\u65B0\u5E74\u5F00\u59CB\uFF0C\u5979\u5C06\u6210\u4E3A\u4F60\u4E00\u4E2A\u4EBA\u7684\u91D1\u4E1D\u96C0\uFF0C\u88AB\u56DA\u7981\u5728\u7531\u4F60\u4EB2\u624B\u6253\u9020\u7684\u3001\u540D\u4E3A"\u7231"\u7684\u7262\u7B3C\u91CC\uFF0C\u6C38\u8FDC\u65E0\u6CD5\u9003\u79BB\u3002\u4F60\u4EEC\uFF0C\u7EC8\u4E8E"\u6C38\u8FDC\u5728\u4E00\u8D77"\u4E86\u3002'}},r=ye(()=>!t.endingType||!i[t.endingType]?"\u7ED3\u5C40":i[t.endingType].title),o=ye(()=>!t.endingType||!i[t.endingType]?"\u6E38\u620F\u7ED3\u675F":i[t.endingType].description),l=()=>{s.resetGame(),s.startGame(),n.push("/")},c=()=>{n.push("/")};return(d,a)=>e.visible?(Y(),te("div",nd,[D("div",sd,[D("div",id,[D("h2",rd,Pe(r.value),1),D("div",od,Pe(o.value),1)]),D("div",{class:"ending-actions"},[D("button",{class:"restart-button",onClick:l},"\u91CD\u65B0\u5F00\u59CB"),D("button",{class:"back-to-main-button",onClick:c},"\u8FD4\u56DE\u4E3B\u9875\u9762")])])])):ke("",!0)}};var cd=ct(ld,[["__scopeId","data-v-628fdd4c"]]),ad=`// ---------------------------------------------------
// \u5973\u53CB\u7EBF\uFF1A\u697C\u4E0B\u7684\u51DD\u89C6 (\u6700\u7EC8\xB7\u8BBE\u5B9A\u8865\u5B8C\u7248)
// \u5173\u8054\u89D2\u8272\uFF1A\u964C\u751F\u4EBA (\u5B9E\u9645\u4E3A\u8B66\u544A\u8005)
// \u6E38\u620F\u65F6\u95F4\uFF1A23:30 - 00:30
// \u7ED3\u5C40\u5206\u652F\uFF1A\u666E\u901A\u7ED3\u5C40\u3001\u597D\u7ED3\u5C40\u3001\u771F\u7ED3\u5C40
// ---------------------------------------------------

$23:30$

\u5973\u53CB: \u5728\u5417\u5728\u5417\u5728\u5417\uFF1F

\u5973\u53CB: \u4EB2\u7231\u7684\uFF01

\u5973\u53CB: \u9664\u5915\u591C\u5012\u8BA1\u65F6\u5F00\u59CB\u5566\uFF01

\u5973\u53CB: \u4F60\u90A3\u8FB9\u600E\u4E48\u6837\uFF1F

\u5973\u53CB: \u662F\u4E0D\u662F\u4E5F\u50CF\u6211\u8FD9\u8FB9\u4E00\u6837\uFF0C\u7A97\u5916\u567C\u91CC\u556A\u5566\u7684\u90FD\u662F\u70DF\u82B1\u58F0\uFF1F

[options]:
1. \u55EF\uFF0C\u542C\u89C1\u4E86\uFF0C\u5F88\u70ED\u95F9\u3002
2. \u65E9\u5C31\u5728\u7B49\u4F60\u7684\u6D88\u606F\u4E86\u3002
3. \u5916\u9762\u5F88\u5435\uFF0C\u4F46\u5FC3\u91CC\u5F88\u9759\uFF0C\u56E0\u4E3A\u5728\u60F3\u4F60\u3002

// \u9009\u98791 -> \u8DF3\u8F6C\u81F3 $23:31$
// \u9009\u98792 -> \u8DF3\u8F6C\u81F3 $23:31_2$
// \u9009\u98793 -> \u8DF3\u8F6C\u81F3 $23:31_3$
$23:31$

\u6211: \u55EF\uFF0C\u542C\u89C1\u4E86\uFF0C\u5F88\u70ED\u95F9\u3002

\u5973\u53CB: \u662F\u5427\u662F\u5427\uFF01

\u5973\u53CB: \u6211\u521A\u521A\u5728\u9633\u53F0\u4E0A\u770B\u4E86\u4E00\u4F1A\u513F\uFF0C\u591C\u7A7A\u88AB\u7167\u5F97\u597D\u4EAE\u3002

\u5973\u53CB: \u5C31\u662F\u6709\u70B9\u51B7\uFF0C\u6211\u8D76\u7D27\u7F29\u56DE\u6765\u4E86\u3002

\u5973\u53CB: \u4F60\u7A7F\u5F97\u6696\u548C\u5417\uFF1F\u522B\u628A\u81EA\u5DF1\u51BB\u611F\u5192\u4E86\u3002
<SendEmoji: E3>
// -> \u8DF3\u8F6C\u81F3 $23:32$

$23:31_2$

\u6211: \u65E9\u5C31\u5728\u7B49\u4F60\u7684\u6D88\u606F\u4E86\u3002

\u5973\u53CB: \u563F\u563F\uFF0C\u6211\u5C31\u77E5\u9053\u3002

\u5973\u53CB: \u6211\u4E5F\u662F\uFF0C\u5FD9\u5B8C\u5BB6\u91CC\u7684\u4E8B\u5C31\u7B2C\u4E00\u65F6\u95F4\u627E\u4F60\u4E86\u3002

\u5973\u53CB: \u6211\u521A\u521A\u5728\u9633\u53F0\u4E0A\u770B\u4E86\u4E00\u4F1A\u513F\u70DF\u82B1\uFF0C\u7279\u522B\u597D\u770B\u3002

\u5973\u53CB: \u5C31\u662F\u6709\u70B9\u51B7\uFF0C\u8D76\u7D27\u7F29\u56DE\u6765\u4E86\u3002\u4F60\u7A7F\u5F97\u6696\u548C\u5417\uFF1F
<SendEmoji: E3>
// -> \u8DF3\u8F6C\u81F3 $23:32$

$23:31_3$
<SanEffect: -20>
\u6211: \u5916\u9762\u5F88\u5435\uFF0C\u4F46\u5FC3\u91CC\u5F88\u9759\uFF0C\u56E0\u4E3A\u5728\u60F3\u4F60\u3002

\u5973\u53CB: \u4F60\u603B\u662F\u8FD9\u4E48\u4F1A\u8BF4\u8BDD\u3002

\u5973\u53CB: \u6211\u4E5F\u662F\uFF0C\u521A\u521A\u770B\u70DF\u82B1\u7684\u65F6\u5019\u5C31\u60F3\uFF0C\u8981\u662F\u4F60\u5728\u8EAB\u8FB9\u4E00\u8D77\u770B\u8BE5\u591A\u597D\u3002

\u5973\u53CB: \u5916\u9762\u597D\u51B7\uFF0C\u4F60\u53EF\u8981\u7A7F\u6696\u548C\u70B9\u3002
<SendEmoji: E3>
// -> \u8DF3\u8F6C\u81F3 $23:32$

$23:32$

\u5973\u53CB: \u5BF9\u4E86\uFF0C\u4F60\u665A\u996D\u5403\u5F97\u597D\u5417\uFF1F

\u5973\u53CB: \u81EA\u5DF1\u4E00\u4E2A\u4EBA\u5728\u8001\u623F\u5B50\u90A3\u8FB9\uFF0C\u80AF\u5B9A\u53C8\u662F\u968F\u4FBF\u5BF9\u4ED8\u4E00\u4E0B\u5C31\u7B97\u4E86\u5427\uFF1F

\u5973\u53CB: \u6211\u7ED9\u4F60\u70B9\u7684\u5916\u5356\u6536\u5230\u4E86\u5417\uFF1F

\u5973\u53CB: \u7B97\u7740\u65F6\u95F4\u5E94\u8BE5\u5DEE\u4E0D\u591A\u5230\u4E86\u3002

[options]:
1. \u6536\u5230\u4E86\uFF01\u662F\u4F60\u70B9\u7684\u90A3\u5BB6\u9178\u83DC\u9C7C\uFF0C\u592A\u68D2\u4E86\uFF01
2. \u8FD8\u6CA1\uFF0C\u4E0D\u6025\u3002
3. \u8BA9\u4F60\u522B\u82B1\u94B1\u4E86\u3002

// \u9009\u98791 -> \u8DF3\u8F6C\u81F3 $23:33$
// \u9009\u98792 -> \u8DF3\u8F6C\u81F3 $23:33_2$
// \u9009\u98793 -> \u8DF3\u8F6C\u81F3 $23:33_3$
$23:33$

<SanEffect: -20>
\u6211: \u6536\u5230\u4E86\uFF01\u662F\u4F60\u70B9\u7684\u90A3\u5BB6\u9178\u83DC\u9C7C\uFF0C\u592A\u68D2\u4E86\uFF01

\u5973\u53CB: \u563B\u563B\uFF0C\u90A3\u5C31\u597D\uFF01

\u5973\u53CB: \u6211\u5C31\u77E5\u9053\u4F60\u80AF\u5B9A\u4F1A\u559C\u6B22\u7684\u3002

\u5973\u53CB: \u5927\u8FC7\u8282\u7684\uFF0C\u603B\u5F97\u5403\u70B9\u597D\u7684\u3002

\u5973\u53CB: \u5FEB\u5403\u5427\uFF0C\u522B\u51C9\u4E86\u3002
// -> \u8DF3\u8F6C\u81F3 $23:35$

$23:33_2$

\u6211: \u8FD8\u6CA1\uFF0C\u4E0D\u6025\u3002

\u5973\u53CB: \u8FD8\u6CA1\u5230\u5417\uFF1F\u90A3\u53EF\u80FD\u5916\u5356\u5C0F\u54E5\u8DEF\u4E0A\u6709\u70B9\u5835\u3002

\u5973\u53CB: \u4F60\u997F\u4E0D\u997F\u554A\uFF1F\u8981\u4E0D\u8981\u81EA\u5DF1\u5148\u627E\u70B9\u4E1C\u897F\u57AB\u4E00\u4E0B\uFF1F

\u6211: \u4E0D\u7528\uFF0C\u6211\u7B49\u4F60\u6D88\u606F\u5C31\u4E0D\u997F\u4E86\u3002

\u5973\u53CB: \u4F60\u5440\u2026\u2026\u597D\u5427\uFF0C\u90A3\u6211\u4EEC\u804A\u7740\u5929\u7B49\u3002
// -> \u8DF3\u8F6C\u81F3 $23:35$

$23:33_3$
<SanEffect: -10>
\u6211: \u8BA9\u4F60\u522B\u82B1\u94B1\u4E86\u3002

\u5973\u53CB: \u54CE\u5440\uFF0C\u8FD9\u53C8\u6CA1\u4EC0\u4E48\u3002

\u5973\u53CB: \u6211\u4E0D\u60F3\u4F60\u4E00\u4E2A\u4EBA\u8FC7\u8282\u8FD8\u5403\u5F97\u90A3\u4E48\u968F\u4FBF\u561B\u3002

\u5973\u53CB: \u8FD9\u662F\u6211\u7684\u5FC3\u610F\uFF0C\u4F60\u4E0D\u8BB8\u62D2\u7EDD\u3002

\u5973\u53CB: \u5230\u4E86\u4E4B\u540E\u4E00\u5B9A\u8981\u8D81\u70ED\u5403\uFF0C\u77E5\u9053\u5417\uFF1F
// -> \u8DF3\u8F6C\u81F3 $23:35$

$23:35$

\u5973\u53CB: \u6211\u8FD9\u8FB9\u561B\uFF0C\u6211\u7238\u5988\u505A\u4E86\u4E00\u5927\u684C\u5B50\u83DC\u3002

\u5973\u53CB: \u62CD\u5F20\u7167\u7ED9\u4F60\u770B\u770B\uFF0C\u998B\u6B7B\u4F60\u3002
<ImageSend: new_year_feast.jpg>

\u6211: \u5F88\u4E30\u76DB\u3002\u66FF\u6211\u8DDF\u53D4\u53D4\u963F\u59E8\u95EE\u597D\u3002

\u5973\u53CB: \u65E9\u5C31\u66FF\u4F60\u95EE\u8FC7\u5566\u3002\u6211\u7238\u8FD8\u559D\u4E86\u70B9\u9152\uFF0C\u73B0\u5728\u8DDF\u6211\u5988\u5728\u5BA2\u5385\u770B\u7535\u89C6\u5462\u3002

\u5973\u53CB: \u5509\u2026\u2026\u5C31\u662F\u6709\u70B9\u60F3\u4F60\u3002

\u5973\u53CB: \u5982\u679C\u6B64\u523B\u4F60\u5728\u6211\u8EAB\u8FB9\uFF0C\u90A3\u5C31\u771F\u7684\u5B8C\u7F8E\u4E86\u3002

\u5973\u53CB: \u5E78\u597D\u4F60\u4F4F\u5F97\u4E5F\u4E0D\u8FDC\uFF0C\u5C31\u5728\u90A3\u8FB9\u7684\u8001\u57CE\u533A\u3002

\u5973\u53CB: \u8D70\u8DEF\u8FC7\u6765\u4E5F\u5C31\u534A\u5C0F\u65F6\u5427\uFF1F\u60F3\u5230\u8FD9\u4E2A\uFF0C\u5C31\u611F\u89C9\u6211\u4EEC\u5176\u5B9E\u79BB\u5F97\u5F88\u8FD1\u3002

\u6211: \u662F\u554A\uFF0C\u5F88\u8FD1\u3002

\u5973\u53CB: \u4E0D\u804A\u8FD9\u4E2A\u5566\uFF0C\u6211\u5148\u53BB\u9633\u53F0\u6536\u4E00\u4E0B\u8863\u670D\uFF0C\u9A6C\u4E0A\u56DE\u6765\u3002

\u6211: \u597D\u3002
// -> \u8DF3\u8F6C\u81F3 $23:40$

$23:40$

\u5973\u53CB: \u4EB2\u7231\u7684\u3002

\u6211: \u55EF\uFF1F

<SanEffect: -10>
\u5973\u53CB: \u6211\u6709\u70B9\u5BB3\u6015\u3002

\u5973\u53CB: \u7A97\u5916\u597D\u50CF\u6709\u4EBA\u3002

\u5973\u53CB: \u6211\u521A\u53BB\u9633\u53F0\uFF0C\u770B\u5230\u697C\u4E0B\u82B1\u575B\u7684\u9634\u5F71\u91CC\u7AD9\u7740\u4E00\u4E2A\u4EBA\u3002
\u5973\u53CB: \u4E00\u52A8\u4E0D\u52A8\u7684\uFF0C\u770B\u7740\u6709\u70B9\u5413\u4EBA\u3002
\u5973\u53CB: \u6211\u521A\u60F3\u8DDF\u6211\u7238\u5988\u8BF4\uFF0C\u4ED6\u4EEC\u5C31\u56DE\u623F\u95F4\u4F11\u606F\u4E86\uFF0C\u8BF4\u5E74\u7EAA\u5927\u4E86\u71AC\u4E0D\u4F4F\u3002
\u5973\u53CB: \u6211\u4E00\u4E2A\u4EBA\u5728\u5BA2\u5385\uFF0C\u5FC3\u91CC\u8FD8\u662F\u6709\u70B9\u6BDB\u6BDB\u7684\u3002
// -> \u8DF3\u8F6C\u81F3 $23:43$

// $\u9AD8San\u503C\u5206\u652F$
$23:43$

\u6211: \u522B\u6015\uFF0C\u6709\u6211\u5728\u3002

\u5973\u53CB: \u55EF\u2026\u2026

\u6211: \u628A\u7A97\u5E18\u62C9\u4E0A\uFF0C\u5C31\u5F53\u4ED6\u4E0D\u5B58\u5728\u3002

[options]:
1. \u522B\u60F3\u4E86\uFF0C\u6211\u4EEC\u804A\u70B9\u5F00\u5FC3\u7684\u3002\u6BD4\u5982\u5E74\u540E\u53BB\u54EA\u73A9\uFF1F
2. \u90A3\u6211\u966A\u4F60\u4E00\u8D77"\u76D1\u89C6"\u4ED6\uFF0C\u770B\u770B\u4ED6\u5230\u5E95\u60F3\u5E72\u4EC0\u4E48\u3002
3. \u6253\u5F00\u7A97\u6237\u3002

// \u9009\u98791 -> \u8DF3\u8F6C\u81F3 $23:44_1$
// \u9009\u98792 -> \u8DF3\u8F6C\u81F3 $23:44_2$
// \u9009\u98793 -> \u8DF3\u8F6C\u81F3 $23:44_3$

$23:44_1$

\u6211: \u522B\u60F3\u4E86\uFF0C\u6211\u4EEC\u804A\u70B9\u5F00\u5FC3\u7684\u3002\u6BD4\u5982\u5E74\u540E\u53BB\u54EA\u73A9\uFF1F

\u5973\u53CB: \u55EF\u2026\u2026\u597D\u5427\u3002

\u5973\u53CB: \u542C\u4F60\u7684\uFF0C\u4E0D\u60F3\u90A3\u4E9B\u4E86\u3002

\u5973\u53CB: \u5E74\u540E\u5440\u2026\u2026\u6211\u60F3\u53BB\u6D77\u8FB9\uFF01\u6211\u4EEC\u597D\u4E45\u6CA1\u53BB\u6D77\u8FB9\u4E86\u3002

\u6211: \u597D\uFF0C\u90A3\u5C31\u53BB\u6D77\u8FB9\u3002\u6211\u6765\u67E5\u653B\u7565\uFF0C\u8BA2\u9152\u5E97\u3002

\u5973\u53CB: \u771F\u7684\uFF1F\u592A\u68D2\u4E86\uFF01\u6211\u60F3\u7A7F\u90A3\u6761\u53BB\u5E74\u4E70\u7684\u84DD\u8272\u957F\u88D9\u3002

\u6211: \u8BB0\u5F97\u3002\u4F60\u7A7F\u4E0A\u4E00\u5B9A\u5F88\u597D\u770B\u3002

\u5973\u53CB: \u6211\u4EEC\u8FD8\u8981\u53BB\u5403\u6D77\u9C9C\u5927\u9910\uFF0C\u8981\u90A3\u79CD\u7279\u522B\u5927\u7684\u8783\u87F9\uFF01

\u6211: \u90FD\u542C\u4F60\u7684\u3002

\u5973\u53CB: \u563B\u563B\uFF0C\u8DDF\u4F60\u804A\u5929\uFF0C\u4EC0\u4E48\u70E6\u607C\u90FD\u6CA1\u6709\u4E86\u3002
// -> \u8DF3\u8F6C\u81F3 $00:05$

// \u9009\u98792 -> \u666E\u901A\u7ED3\u5C40\u8DEF\u7EBF
$23:44_2$

\u6211: \u90A3\u6211\u966A\u4F60\u4E00\u8D77\u201C\u76D1\u89C6\u201D\u4ED6\uFF0C\u770B\u770B\u4ED6\u5230\u5E95\u60F3\u5E72\u4EC0\u4E48\u3002

\u5973\u53CB: \u554A\uFF1F\u8FD9\u6837\u597D\u5417\u2026\u2026\u6211\u6709\u70B9\u6015\u3002

\u6211: \u6709\u6211\u5728\uFF0C\u4F60\u6015\u4EC0\u4E48\u3002

\u6211: \u900F\u8FC7\u7A97\u5E18\u7F1D\u9699\u770B\uFF0C\u4ED6\u53D1\u73B0\u4E0D\u4E86\u3002

\u5973\u53CB: \u2026\u2026\u597D\u5427\u3002\u90A3\u2026\u2026\u90A3\u6211\u6084\u6084\u770B\u3002

\u5973\u53CB: \u4ED6\u8FD8\u5728\u90A3\u513F\uFF0C\u771F\u7684\u6CA1\u52A8\u3002

\u6211: \u770B\u6E05\u695A\u957F\u76F8\u5417\uFF1F

\u5973\u53CB: \u770B\u4E0D\u6E05\uFF0C\u592A\u9ED1\u4E86\u3002\u53EA\u80FD\u770B\u5230\u4E00\u4E2A\u8F6E\u5ED3\u3002

\u5973\u53CB: \u4EB2\u7231\u7684\uFF0C\u6211\u5FC3\u8DF3\u5F97\u597D\u5FEB\u3002

\u6211: \u7EE7\u7EED\u770B\u3002\u522B\u51FA\u58F0\u3002
// -> \u8DF3\u8F6C\u81F3 $00:10$

// \u9009\u98793 -> \u771F\u7ED3\u5C40\u8DEF\u7EBF
$23:44_3$

\u6211: \u6253\u5F00\u7A97\u6237\u3002

<SanEffect: -25>
\u5973\u53CB: \u2026\u2026\u4EC0\u4E48\uFF1F

\u6211: \u628A\u7A97\u6237\u6253\u5F00\u4E00\u6761\u7F1D\u3002

\u5973\u53CB: \u4E3A\u4EC0\u4E48\uFF1F\u5916\u9762\u5F88\u51B7\uFF0C\u800C\u4E14\u2026\u2026

\u6211: \u6211\u60F3\u542C\u4F60\u7684\u58F0\u97F3\u66F4\u6E05\u695A\u4E00\u70B9\u3002

\u6211: \u8BA9\u4ED6\u4E5F\u542C\u89C1\u3002

\u5973\u53CB: \u4F60\u5728\u8BF4\u4EC0\u4E48\u2026\u2026\u6211\u542C\u4E0D\u61C2\u2026\u2026\u4F60\u597D\u5413\u4EBA\u2026\u2026

\u6211: \u542C\u8BDD\u3002\u6253\u5F00\u5B83\u3002

\u5973\u53CB: \u2026\u2026\u6211\u2026\u2026\u6211\u4E0D\u6562\u2026\u2026

\u6211: \u4F60\u5FC5\u987B\u8FD9\u4E48\u505A\u3002
// -> \u8DF3\u8F6C\u81F3 $00:15$

$\u4F4ESan\u503C\u5206\u652F$
$23:43$

\u6211: \u522B\u6015\uFF0C\u6211\u5728\u3002

\u5973\u53CB: \u55EF\u2026\u2026\u6709\u4F60\u966A\u7740\u6211\u597D\u591A\u4E86\u3002

[options]:
1. \u56DE\u623F\u95F4\uFF0C\u9501\u597D\u95E8\uFF0C\u62C9\u4E0A\u7A97\u5E18\u3002\u4E0D\u8981\u518D\u770B\uFF0C\u4E0D\u8981\u518D\u60F3\u3002
2. \u544A\u8BC9\u6211\u4ED6\u7684\u7279\u5F81\u3002\u8EAB\u9AD8\uFF0C\u4F53\u578B\uFF0C\u8863\u7740\u989C\u8272\u3002
3. \u9501\u597D\u95E8\u3002\u7B49\u6211\u3002

// \u9009\u98791 -> \u8DF3\u8F6C\u81F3 $23:44_4$
// \u9009\u98792 -> \u8DF3\u8F6C\u81F3 $23:44_5$
// \u9009\u98793 -> \u8DF3\u8F6C\u81F3 $23:44_6$

$23:44_4$

\u6211: \u56DE\u623F\u95F4\uFF0C\u9501\u597D\u95E8\uFF0C\u62C9\u4E0A\u7A97\u5E18\u3002\u4E0D\u8981\u518D\u770B\uFF0C\u4E0D\u8981\u518D\u60F3\u3002

\u5973\u53CB: \u55EF\uFF0C\u597D\u3002

\u5973\u53CB: \u6211\u542C\u4F60\u7684\uFF0C\u6211\u73B0\u5728\u56DE\u623F\u95F4\u4E86\u3002

\u5973\u53CB: \u95E8\u5DF2\u7ECF\u53CD\u9501\u4E86\uFF0C\u7A97\u5E18\u4E5F\u62C9\u5F97\u4E25\u4E25\u5B9E\u5B9E\u3002

\u6211: \u5F88\u597D\u3002\u73B0\u5728\u90A3\u91CC\u662F\u7EDD\u5BF9\u5B89\u5168\u7684\u3002

\u5973\u53CB: \u55EF\uFF0C\u770B\u4E0D\u89C1\u5916\u9762\uFF0C\u5FC3\u91CC\u679C\u7136\u8E0F\u5B9E\u591A\u4E86\u3002

\u6211: \u6211\u4EEC\u804A\u70B9\u522B\u7684\u3002\u4F60\u6700\u559C\u6B22\u7684\u90A3\u90E8\u7535\u5F71\uFF0C\u6700\u8FD1\u51FA\u7EED\u96C6\u4E86\u3002

\u5973\u53CB: \u771F\u7684\u5417\uFF01\u592A\u597D\u4E86\uFF01\u6211\u4EEC\u8FC7\u5B8C\u5E74\u5C31\u53BB\u770B\uFF01
// -> \u8DF3\u8F6C\u81F3 $00:05$

// \u9009\u98792 -> \u666E\u901A\u7ED3\u5C40\u8DEF\u7EBF
$23:44_5$

\u6211: \u544A\u8BC9\u6211\u4ED6\u7684\u7279\u5F81\u3002\u8EAB\u9AD8\uFF0C\u4F53\u578B\uFF0C\u8863\u7740\u989C\u8272\u3002

<SanEffect: -15>
\u5973\u53CB: \u6211\u2026\u2026\u6211\u5C3D\u91CF\u770B\u3002

\u5973\u53CB: \u4ED6\u5F88\u9AD8\uFF0C\u5F88\u7626\u3002\u7A7F\u7740\u6DF1\u8272\u7684\u8863\u670D\uFF0C\u597D\u50CF\u662F\u9ED1\u8272\u7684\u5916\u5957\u3002

\u6211: \u8FD8\u6709\u5462\u3002

\u5973\u53CB: \u6CA1\u2026\u2026\u6CA1\u6709\u4E86\uFF0C\u770B\u4E0D\u6E05\u4E86\u3002

\u5973\u53CB: \u4EB2\u7231\u7684\uFF0C\u95EE\u8FD9\u4E2A\u5E72\u4EC0\u4E48\uFF1F\u4F60\u4E0D\u4F1A\u662F\u6000\u7591\u2026\u2026

\u6211: \u6CA1\u4EC0\u4E48\u3002\u77E5\u5DF1\u77E5\u5F7C\u3002

\u5973\u53CB: \u5929\u54EA\uFF0C\u4ED6\u597D\u50CF\u62AC\u5934\u4E86\uFF01\u5C31\u5728\u770B\u6211\u8FD9\u4E2A\u65B9\u5411\uFF01\u6211\u4E0D\u6562\u770B\u4E86\uFF01
// -> \u8DF3\u8F6C\u81F3 $00:10$

// \u9009\u98793 -> \u771F\u7ED3\u5C40\u8DEF\u7EBF
$23:44_6$

\u6211: \u9501\u597D\u95E8\u3002\u7B49\u6211\u3002

<SanEffect: -30>
\u5973\u53CB: \uFF01

\u5973\u53CB: \u4F60\u8981\u8FC7\u6765\uFF1F

\u6211: \u5BF9\u3002

\u5973\u53CB: \u53EF\u662F\u73B0\u5728\u8FD9\u4E48\u665A\u2026\u2026

\u6211: \u5F85\u5728\u539F\u5730\u3002\u4E0D\u8981\u51FA\u58F0\u3002\u7B49\u6211\u3002

\u5973\u53CB: \u55EF\uFF01\u55EF\uFF01\u597D\uFF01\u6211\u7B49\u4F60\uFF01\u4F60\u8DEF\u4E0A\u5C0F\u5FC3\uFF01

\u5973\u53CB: \u90A3\u4E2A\u2026\u2026\u697C\u4E0B\u7684\u4EBA\u2026\u2026\u4ED6\u597D\u50CF\u8D70\u4E86\u3002

\u6211: \u6211\u77E5\u9053\u3002

<SanEffect: -15>
\u5973\u53CB: \u2026\u2026\uFF1F

\u6211: \u6211\u51FA\u53D1\u4E86\u3002
// -> \u8DF3\u8F6C\u81F3 $00:15$

---
### **\u3010\u7ED3\u5C40\u6536\u675F\u70B9\u4E0E\u7ED3\u5C40\u7B80\u8FF0\u3011**

// $\u597D\u7ED3\u5C40\u6536\u675F\u70B9$
$00:05$

\u5973\u53CB: \u65B0\u5E74\u5FEB\u4E50\uFF0C\u4EB2\u7231\u7684\uFF01

\u6211: \u65B0\u5E74\u5FEB\u4E50\u3002

\u5973\u53CB: \u521A\u521A\u5012\u6570\u7684\u65F6\u5019\uFF0C\u6211\u8BB8\u7684\u613F\u671B\u5C31\u662F\u5E0C\u671B\u6211\u4EEC\u7684\u65C5\u884C\u8BA1\u5212\u80FD\u987A\u987A\u5229\u5229\uFF01

\u6211: \u4E00\u5B9A\u4F1A\u3002

\u5973\u53CB: \u55EF\uFF01\u8DDF\u4F60\u804A\u4E86\u8FD9\u4E48\u4E45\uFF0C\u4E4B\u524D\u90A3\u70B9\u5BB3\u6015\u65E9\u5C31\u98DE\u5230\u4E5D\u9704\u4E91\u5916\u4E86\u3002

\u5973\u53CB: \u6709\u4F60\u771F\u597D\u3002\u5BF9\u4E86\uFF0C\u6211\u7238\u5988\u521A\u521A\u4ECE\u623F\u95F4\u51FA\u6765\u4E86\uFF0C\u95EE\u6211\u600E\u4E48\u8FD8\u6CA1\u7761\uFF0C\u563F\u563F\u3002

\u5973\u53CB: \u2026\u2026\u5BF9\u4E86\uFF0C\u521A\u624D\u6709\u4E2A\u53EB\u2018.\u2019\u7684\u964C\u751F\u4EBA\u60F3\u52A0\u6211\uFF0C\u6211\u6CA1\u901A\u8FC7\u3002\u4F30\u8BA1\u662F\u8BC8\u9A97\u7684\uFF0C\u73B0\u5728\u9A97\u5B50\u771F\u662F\u65E0\u5B54\u4E0D\u5165\u3002

\u6211: \u4E0D\u7528\u7406\u4F1A\u3002\u6709\u6211\u5728\uFF0C\u6CA1\u4EBA\u80FD\u9A97\u5F97\u4E86\u4F60\u3002

\u5973\u53CB: \u55EF\uFF01\u6211\u4EEC\u7EE7\u7EED\u804A\u6211\u4EEC\u7684\u5C0F\u7A9D\u8BE5\u600E\u4E48\u5E03\u7F6E\u2026\u2026

\u5973\u53CB: \u4E0D\u77E5\u4E0D\u89C9\u90FD\u804A\u5230\u8FD9\u4E48\u665A\u4E86\u3002\u611F\u89C9\u53EA\u8981\u80FD\u8FD9\u6837\u8DDF\u4F60\u8BF4\u8BDD\uFF0C\u6211\u5C31\u4EC0\u4E48\u90FD\u4E0D\u6015\u4E86\u3002

\u6211: \u6211\u4F1A\u4E00\u76F4\u5728\u3002

\u5973\u53CB: \u55EF\uFF01\u6211\u76F8\u4FE1\u4F60\u3002\u7B49\u5929\u4EAE\u4E86\uFF0C\u6211\u5C31\u80FD\u89C1\u5230\u4F60\u4E86\uFF0C\u5BF9\u5427\uFF1F

\u6211: \u5BF9\u3002\u5929\u4EAE\u5C31\u89C1\u3002

<Ending: good>
**[\u597D\u7ED3\u5C40\uFF1A\u5982\u5E38\u7684\u9ECE\u660E]**
\u4F60\u6210\u529F\u5730\u626E\u6F14\u4E86\u201C\u8FC7\u53BB\u7684\u6211\u201D\uFF0C\u7528\u7A33\u5065\u548C\u7406\u667A\u5B89\u629A\u4E86\u5979\uFF0C\u5C06\u6240\u6709\u5F02\u5E38\u90FD\u9694\u7EDD\u5728\u5979\u611F\u77E5\u4E4B\u5916\u3002\u5979\u9519\u8FC7\u4E86\u964C\u751F\u4EBA\u7EDD\u671B\u7684\u8B66\u544A\uFF0C\u7236\u6BCD\u7684\u77ED\u6682\u5931\u8054\u4E5F\u88AB\u89E3\u91CA\u4E3A\u4E00\u573A\u8BEF\u4F1A\u3002\u8FD9\u4E2A\u65B0\u5E74\u591C\u7684\u5371\u673A\u4F3C\u4E4E\u8FC7\u53BB\u4E86\u3002\u7136\u800C\uFF0C\u697C\u4E0B\u7684\u9634\u5F71\u53EA\u662F\u6682\u65F6\u9000\u53BB\uFF0C\u90A3\u4E2A\u504F\u6267\u7684\u51DD\u89C6\uFF0C\u5C06\u5728\u4E0B\u4E00\u4E2A\u9ED1\u591C\uFF0C\u4EE5\u66F4\u8FD1\u7684\u8DDD\u79BB\uFF0C\u91CD\u65B0\u5305\u88F9\u5979\u3002\u4F60\u4E3A\u5979\u5B88\u62A4\u4E86\u4E00\u4E2A\u865A\u5047\u7684\u9ECE\u660E\u3002

---

$\u666E\u901A\u7ED3\u5C40\u6536\u675F\u70B9$
$00:10$

\u5973\u53CB: \u65B0\u5E74\u5FEB\u4E50\u2026\u2026\u4EB2\u7231\u7684\u3002

\u6211: \u65B0\u5E74\u5FEB\u4E50\u3002

\u5973\u53CB: \u6211\u2026\u2026\u6211\u4E00\u70B9\u4E5F\u5F00\u5FC3\u4E0D\u8D77\u6765\u3002\u90A3\u4E2A\u4EBA\u5230\u5E95\u662F\u8C01\u2026\u2026\u6211\u7238\u5988\u623F\u95F4\u8FD8\u662F\u6CA1\u52A8\u9759\u2026\u2026

\u6211: \u4E00\u4E2A\u8FC7\u5BA2\u3002\u4E00\u4EF6\u5C0F\u4E8B\u3002

\u5973\u53CB: \u53EF\u662F\u2026\u2026

\u5973\u53CB: \u5929\u54EA\uFF01\u6709\u4E2A\u964C\u751F\u4EBA\u52A0\u6211\uFF0C\u53D1\u4E86\u4E00\u5F20\u5F88\u8BE1\u5F02\u7684\u767D\u9A6C\u7167\u7247\uFF01\u4ED6\u60F3\u544A\u8BC9\u6211\u4EC0\u4E48\uFF1F\u4EB2\u7231\u7684\uFF0C\u4F60\u8BF4\u8FD9\u4F1A\u4E0D\u4F1A\u8DDF\u697C\u4E0B\u90A3\u4E2A\u4EBA\u6709\u5173\u7CFB\uFF1F\uFF01

\u6211: \u4E0D\u8981\u628A\u65E0\u5173\u7684\u4E8B\u60C5\u8054\u7CFB\u5728\u4E00\u8D77\u3002

\u5973\u53CB: \u53EF\u662F\u6211\u5BB3\u6015\uFF01\u4F60\u4E0D\u5B89\u6170\u6211\u5417\uFF1F

\u6211: \u5B89\u9759\u3002

\u5973\u53CB: \u2026\u2026

\u6211: \u65F6\u95F4\u4E0D\u65E9\u4E86\u3002

\u5973\u53CB: \u4F60\u8981\u6302\u4E86\u5417\uFF1F\u522B\u6302\u597D\u4E0D\u597D\uFF0C\u6211\u6015\u2026\u2026

<OS_Text> \u4F60\u6302\u65AD\u4E86\u7535\u8BDD\u3002 </OS_Text>

<OS_Text> \u7535\u8BDD\u90A3\u5934\u4F20\u6765\u5973\u5B69\u538B\u6291\u7684\u555C\u6CE3\u58F0\uFF0C\u548C\u53CD\u590D\u62E8\u6253\u7535\u8BDD\u7684\u5FD9\u97F3\u3002 </OS_Text>

<OS_Text> \u4F60\u6CA1\u6709\u518D\u63A5\u3002 </OS_Text>

<Ending: normal>
**[\u666E\u901A\u7ED3\u5C40\uFF1A\u672A\u77E5\u7684\u6572\u95E8\u58F0]**
**\u4F60\u7684\u9009\u62E9\u5145\u6EE1\u4E86\u77DB\u76FE\uFF0C\u65E2\u6CA1\u80FD\u7ED9\u5979\u8DB3\u591F\u7684\u5B89\u5168\u611F\uFF0C\u53C8\u6FC0\u8D77\u4E86\u5979\u65E0\u5C3D\u7684\u6050\u60E7\u3002\u7236\u6BCD\u7684\u5931\u8054\u3001\u964C\u751F\u4EBA\u7684\u8B66\u544A\u3001\u4F60\u7684\u7A81\u7136\u51B7\u6F20\uFF0C\u4E00\u5207\u90FD\u5C06\u5979\u63A8\u5411\u5D29\u6E83\u7684\u8FB9\u7F18\u3002\u4F60\u9009\u62E9\u62BD\u8EAB\u79BB\u5F00\uFF0C\u5C06\u5979\u72EC\u81EA\u7559\u5728\u88AB\u672A\u77E5\u5305\u88F9\u7684\u623F\u95F4\u91CC\u3002\u51E0\u5206\u949F\u540E\uFF0C\u5979\u7684\u623F\u95E8\u88AB\u6572\u54CD\u4E86\u3002\u5979\u4E0D\u77E5\u9053\u95E8\u5916\u662F\u8C01\u3002\u662F\u6765\u201C\u4FDD\u62A4\u201D\u4F60\u7684\u6211\uFF1F\u662F\u6765\u8B66\u793A\u5979\u7684\u964C\u751F\u4EBA\uFF1F\u8FD8\u662F\u2026\u2026\u7EC8\u4E8E\u4ECE\u623F\u95F4\u91CC\u51FA\u6765\u7684\u201C\u7236\u6BCD\u201D\uFF1F\u8FD9\u4E2A\u65B0\u5E74\uFF0C\u5979\u5C06\u6C38\u8FDC\u6D3B\u5728\u65E0\u5C3D\u7684\u731C\u6D4B\u548C\u6050\u60E7\u4E4B\u4E2D\u3002**

---

$\u771F\u7ED3\u5C40\u6536\u675F\u70B9$
$00:15$

\u5973\u53CB: \u4F60\u2026\u2026\u4F60\u771F\u7684\u8981\u6765\u5417\uFF1F\u6211\u7238\u5988\u4ED6\u4EEC\u2026\u2026

\u6211: \u6211\u5728\u8DEF\u4E0A\u4E86\u3002\u522B\u7BA1\u4ED6\u4EEC\u3002

\u5973\u53CB: \u53EF\u662F\u2026\u2026

<OS_Text> \u4F60\u6536\u5230\u4E00\u6761\u6765\u81EA\u201C\u964C\u751F\u4EBA\u201D\u7684\u6D88\u606F\u3002 </OS_Text>

\u6211: \u6536\u5230\u4E00\u5F20\u7167\u7247\u5417\u3002

\u5973\u53CB: \uFF01\u4F60\u600E\u4E48\u77E5\u9053\uFF01

\u6211: \u70B9\u5F00\u5B83\u3002\u770B\u770B\u90A3\u4E2A\u60F3\u4ECE\u6211\u8EAB\u8FB9\u628A\u4F60\u593A\u8D70\u7684\u4EBA\uFF0C\u53D1\u4E86\u4EC0\u4E48\u65E0\u804A\u7684\u4E1C\u897F\u3002

<SanEffect: -15>
\u5973\u53CB: \u4E0D\u2026\u2026\u6211\u4E0D\u6562\u2026\u2026\u8FD9\u5339\u767D\u9A6C\u5230\u5E95\u662F\u4EC0\u4E48\u610F\u601D\u2026\u2026

\u6211: \u8FD9\u662F\u547D\u4EE4\u3002\u70B9\u5F00\u3002

\u5973\u53CB: (\u5E26\u7740\u54ED\u8154) \u6211\u2026\u2026\u6211\u70B9\u4E86\u2026\u2026\u5B83\u53EA\u662F\u4E00\u5F20\u56FE\u2026\u2026
<ImageInteraction: white_horse.jpg>

\u6211: \u770B\u5230\u4E86\u5417\uFF1F\u6BEB\u65E0\u610F\u4E49\u3002\u53EA\u6709\u6211\uFF0C\u624D\u662F\u771F\u5B9E\u7684\u3002

\u5973\u53CB: \u6211\u597D\u50CF\u2026\u2026\u80FD\u542C\u5230\u697C\u9053\u91CC\u7684\u811A\u6B65\u58F0\u4E86\u3002

\u5973\u53CB: \u662F\u4F60\u5417\uFF1F\u4F60\u771F\u7684\u6765\u4E86\uFF1F

\u6211: \u6211\u8BF4\u8FC7\uFF0C\u6211\u4F1A\u6765\u7684\u3002

\u5973\u53CB: \u4F60\u662F\u600E\u4E48\u4E0A\u6765\u7684\uFF1F\u6211\u6CA1\u542C\u5230\u95E8\u7981\u7684\u58F0\u97F3\u554A\u2026\u2026

<SanEffect: -30>
\u6211: \u603B\u6709\u529E\u6CD5\u7684\u3002\u4E3A\u4E86\u89C1\u5230\u4F60\u3002

\u5973\u53CB: \u2026\u2026\u4F60\u5FEB\u6572\u95E8\u5427\uFF0C\u6211\u5DF2\u7ECF\u7B49\u4E0D\u53CA\u4E86\u3002

\u6211: \u4E0D\u7528\u3002

\u5973\u53CB: \uFF1F

\u6211: \u6211\u6709\u94A5\u5319\u3002

\u5973\u53CB: \u94A5\u5319\uFF1F\u6211\u7684\u5907\u7528\u94A5\u5319\u4E0D\u662F\u2026\u2026
// -> \u8DF3\u8F6C\u81F3 $00:30$
$00:30$

<OS_Text> \u7535\u8BDD\u88AB\u6302\u65AD\u4E86\u3002 </OS_Text>
<OS_Text> \u5BC2\u9759\u7684\u623F\u95F4\u91CC\uFF0C\u54CD\u8D77\u4E86\u94A5\u5319\u63D2\u5165\u9501\u82AF\u7684\u3001\u6E05\u6670\u7684\u8F6C\u52A8\u58F0\u3002 </OS_Text>
<ImageSend: door_opening.jpg> // (\u4E00\u5F20\u95E8\u7F1D\u9010\u6E10\u53D8\u5927\uFF0C\u95E8\u5916\u7AD9\u7740\u4E00\u4E2A\u770B\u4E0D\u6E05\u8138\u7684\u9ED1\u8272\u4EBA\u5F71\u7684\u56FE\u7247)
<OS_Text> \u201C\u5B9D\u8D1D\u3002\u201D </OS_Text>
<OS_Text> \u201C\u6211\u6765\u4E86\u3002\u201D </OS_Text>

<Ending: true>
**[\u771F\u7ED3\u5C40\uFF1A\u6211\u7684\u91D1\u4E1D\u96C0]**
**\u4F60\u9075\u4ECE\u4E86\u88AB\u66FF\u6362\u540E\u7684\u672C\u80FD\uFF0C\u7528\u6700\u504F\u6267\u7684\u65B9\u5F0F\u56DE\u5E94\u4E86\u5979\u7684\u4F9D\u8D56\u548C\u4F60\u7684\u7231\u3002\u4F60\u5F3A\u8FEB\u5979\u6253\u5F00\u4E86\u964C\u751F\u4EBA\u6700\u540E\u7684\u8B66\u544A\uFF0C\u5E76\u7528\u8A00\u8BED\u5C06\u5176\u6B6A\u66F2\u4E3A\u65E0\u7A3D\u4E4B\u8C08\uFF0C\u5F7B\u5E95\u5207\u65AD\u4E86\u5979\u4E0E\u5916\u754C\u7684\u8054\u7CFB\u3002\u5F53\u95E8\u9501\u8F6C\u52A8\u7684\u90A3\u4E00\u523B\uFF0C\u5979\u624D\u660E\u767D\uFF0C\u697C\u4E0B\u7684\u964C\u751F\u4EBA\u3001\u7535\u8BDD\u91CC\u7684\u7231\u4EBA\u3001\u548C\u5373\u5C06\u8FDB\u5165\u5979\u623F\u95F4\u7684\u201C\u4F60\u201D\uFF0C\u662F\u540C\u4E00\u4E2A\u5B58\u5728\u3002\u81F3\u4E8E\u5979\u7684\u7236\u6BCD\u2026\u2026\u6216\u8BB8\u4ED6\u4EEC\u4ECE\u4E00\u5F00\u59CB\u5C31\u4E0D\u5728\uFF0C\u6216\u8BB8\u4ED6\u4EEC\u518D\u4E5F\u4E0D\u4F1A\u9192\u6765\u3002\u4ECE\u8FD9\u4E2A\u65B0\u5E74\u5F00\u59CB\uFF0C\u5979\u5C06\u6210\u4E3A\u4F60\u4E00\u4E2A\u4EBA\u7684\u91D1\u4E1D\u96C0\uFF0C\u88AB\u56DA\u7981\u5728\u7531\u4F60\u4EB2\u624B\u6253\u9020\u7684\u3001\u540D\u4E3A\u201C\u7231\u201D\u7684\u7262\u7B3C\u91CC\uFF0C\u6C38\u8FDC\u65E0\u6CD5\u9003\u79BB\u3002\u4F60\u4EEC\uFF0C\u7EC8\u4E8E\u201C\u6C38\u8FDC\u5728\u4E00\u8D77\u201D\u4E86\u3002**

`,ud=`// ---------------------------------------------------
// \u964C\u751F\u4EBA\u7EBF\uFF1A\u7AA5\u4F3A\u4E4B\u4EBA (\u6700\u7EC8\xB7\u5B9A\u7A3F)
// \u5173\u8054\u89D2\u8272\uFF1A\u5973\u53CB (\u80CC\u666F\u5B58\u5728)
// \u6E38\u620F\u65F6\u95F4\uFF1A23:30 - 00:30
// \u7ED3\u5C40\u5206\u652F\uFF1A\u666E\u901A\u7ED3\u5C40\u3001\u597D\u7ED3\u5C40\u3001\u771F\u7ED3\u5C40
// ---------------------------------------------------

$23:30$

\u964C\u751F\u4EBA: \u4F60\u5973\u670B\u53CB\u5BB6\u697C\u4E0B\uFF0C\u6709\u4E2A\u4EBA\u3002

$23:31$

\u6211: \u4F60\u662F\u8C01\uFF1F\u4F60\u600E\u4E48\u77E5\u9053\u90A3\u662F\u6211\u5973\u670B\u53CB\u5BB6\uFF1F

\u964C\u751F\u4EBA: \u6211\u53EA\u662F\u8DEF\u8FC7\u3002\u770B\u5230\u6709\u4E2A\u4EBA\u4E00\u76F4\u7AD9\u5728\u8FD9\u91CC\uFF0C\u4E00\u52A8\u4E0D\u52A8\u3002

\u6211: \u9664\u4E86\u4F60\u8FD8\u6709\u522B\u4EBA\uFF1F\u4F60\u4E3A\u4EC0\u4E48\u4E0D\u62A5\u8B66\uFF1F

\u964C\u751F\u4EBA: \u6211\u4E0D\u786E\u5B9A\u4ED6\u60F3\u505A\u4EC0\u4E48\u3002\u4E5F\u8BB8\u53EA\u662F\u5728\u7B49\u4EBA\u3002

$23:40$

\u6211: \u4ED6\u8FD8\u5728\u5417\uFF1F

\u964C\u751F\u4EBA: \u8FD8\u5728\u3002\u50CF\u4E00\u5C0A\u96D5\u5851\u3002

\u6211: \u4F60\u80FD\u63CF\u8FF0\u4E00\u4E0B\u4ED6\u5417\uFF1F

\u964C\u751F\u4EBA: \u592A\u9ED1\u4E86\uFF0C\u770B\u4E0D\u6E05\u3002\u4F46\u6211\u611F\u89C9\u2026\u2026\u5F88\u4E0D\u8212\u670D\u3002

[options]:
1. \u4F60\u5230\u5E95\u60F3\u8BF4\u4EC0\u4E48\uFF1F\u522B\u5356\u5173\u5B50\u3002
2. \u4F60\u80FD\u4E0D\u80FD\u5E2E\u6211\u4E2A\u5FD9\uFF1F\u76EF\u7D27\u4ED6\uFF0C\u6709\u4EFB\u4F55\u5F02\u52A8\u7ACB\u523B\u544A\u8BC9\u6211\u3002
3. \u79BB\u90A3\u91CC\u8FDC\u70B9\uFF0C\u4F60\u4E5F\u662F\u3002

// \u9009\u98791 -> San\u503C\u964D\u4F4E\uFF0C\u89E6\u53D1\u767D\u9A6C\u4E8B\u4EF6
$23:50$

\u6211: \u4F60\u5230\u5E95\u60F3\u8BF4\u4EC0\u4E48\uFF1F\u522B\u5356\u5173\u5B50\u3002

<SanEffect: -10>
\u964C\u751F\u4EBA: \u6211\u53EA\u662F\u60F3\u786E\u8BA4\u4E00\u4E0B\u3002

\u6211: \u786E\u8BA4\u4EC0\u4E48\uFF1F

\u964C\u751F\u4EBA: \u2026\u2026\u7B49\u4E00\u4E0B\u3002\u524D\u9762\u7684\u8DEF\u706F\u5F88\u4EAE\u3002

\u964C\u751F\u4EBA: \u90A3\u4E2A\u5F71\u5B50\u2026\u2026\u597D\u50CF\u52A8\u4E86\u2026\u2026\u4E0D\u2026\u2026

\u964C\u751F\u4EBA: \u90A3\u662F\u4EC0\u4E48\uFF1F

\u6211: \u4F60\u770B\u5230\u4E86\u4EC0\u4E48\uFF1F

\u964C\u751F\u4EBA: \u6211\u770B\u5230\u4E86\u4E00\u5339\u767D\u9A6C\u7684\u5F71\u5B50\uFF0C\u53EA\u6709\u4E00\u77AC\u95F4\u3002

<SanEffect: -20>
\u6211: \u4F60\u559D\u591A\u4E86\uFF1F

\u964C\u751F\u4EBA: [\u56FE\u7247]
\u964C\u751F\u4EBA: \u8FD9\u662F\u6211\u521A\u521A\u62CD\u5230\u7684\u3002
// -> \u8DF3\u8F6C\u81F3 [\u5171\u540C\u5267\u60C5A]

// \u9009\u98792 & 3 -> \u5267\u60C5\u5E73\u7A33\u63A8\u8FDB
$23:50$

\u6211: [\u9009\u62E9\u9009\u98792\u62163\u7684\u5BF9\u8BDD]

\u964C\u751F\u4EBA: \u6211\u4F1A\u7684\u3002/ \u6211\u77E5\u9053\u3002

\u964C\u751F\u4EBA: \u4ED6\u597D\u50CF\u6CA1\u6253\u7B97\u79BB\u5F00\u3002

\u6211: \u8BE5\u6B7B\u3002
// -> \u8DF3\u8F6C\u81F3 [\u5171\u540C\u5267\u60C5A]

// [\u5171\u540C\u5267\u60C5A]
$23:58$

\u964C\u751F\u4EBA: \u5979\u597D\u50CF\u51FA\u6765\u4E86\uFF0C\u5728\u9633\u53F0\u4E0A\u3002

\u6211:\uFF01

\u964C\u751F\u4EBA: \u697C\u4E0B\u90A3\u4E2A\u4EBA\u2026\u2026\u597D\u50CF\u5728\u7B11\u3002

$00:00$

\u964C\u751F\u4EBA: \u65B0\u5E74\u5FEB\u4E50\u3002\u5929\u4E0A\u7684\u70DF\u82B1\uFF0C\u628A\u8FD9\u91CC\u7167\u5F97\u5F88\u4EAE\u3002

\u6211: \u522B\u8BF4\u5E9F\u8BDD\uFF0C\u4ED6\u6709\u6CA1\u6709\u505A\u4EC0\u4E48\uFF1F\uFF01

\u964C\u751F\u4EBA: \u70DF\u82B1\u2026\u2026\u7167\u4EAE\u4E86\u4ED6\u7684\u8138\u3002

\u964C\u751F\u4EBA: \u4E5F\u7167\u4EAE\u4E86\u4F60\u7684\u3002

<OS_Text> \u4F60\u6123\u4F4F\u4E86\uFF0C\u4F60\u6240\u5728\u7684\u623F\u95F4\u6CA1\u6709\u4EFB\u4F55\u70DF\u82B1\u7684\u5149\u4EAE\u3002 </OS_Text>
<OS_Text> \u8BB0\u5FC6\u7684\u788E\u7247\u731B\u7136\u6D8C\u5165\uFF0C\u8F66\u7978\u3001\u6CB3\u8FB9\u3001\u51B0\u51B7\u7684\u7A7A\u6C14\u2026\u2026 </OS_Text>
<OS_Text> \u4F60\u4E0D\u5728\u4F60\u7684\u65E7\u623F\u5B50\u91CC\u3002\u4F60\u6B63\u7AD9\u5728\u5979\u5BB6\u697C\u4E0B\u7684\u8857\u9053\u4E0A\u3002 </OS_Text>

[options]: // \u8EAB\u4EFD\u63ED\u793A\u540E\u7684\u9009\u9879
1. \u4F60\u2026\u2026\u5230\u5E95\u662F\u8C01\uFF1F (\u5BFC\u5411\u666E\u901A\u7ED3\u5C40)
2. \u90A3\u5339\u9A6C\u2026\u2026\u662F\u4EC0\u4E48\uFF1F (\u5BFC\u5411\u597D\u7ED3\u5C40)
3. \u4F60\u597D\u50CF\u77E5\u9053\u5F97\u592A\u591A\u4E86\u3002 (\u5BFC\u5411\u771F\u7ED3\u5C40)

// \u9009\u98791 -> \u666E\u901A\u7ED3\u5C40\u8DEF\u7EBF
$00:05$

\u6211: \u4F60\u2026\u2026\u5230\u5E95\u662F\u8C01\uFF1F

\u964C\u751F\u4EBA: \u4E00\u4E2A\u8BD5\u56FE\u963B\u6B62\u4F60\u7684\u4EBA\u3002

\u6211: [\u5220\u9664\u597D\u53CB]
// -> \u8DF3\u8F6C\u81F3 [\u666E\u901A\u7ED3\u5C40\u6536\u675F\u70B9]

// \u9009\u98792 -> \u597D\u7ED3\u5C40\u8DEF\u7EBF
$00:05$

\u6211: \u90A3\u5339\u9A6C\u2026\u2026\u662F\u4EC0\u4E48\uFF1F

\u964C\u751F\u4EBA: \u6211\u4E0D\u77E5\u9053\u3002\u4F46\u6211\u77E5\u9053\uFF0C\u4F60\u4E0D\u662F\u4EBA\u3002

\u6211: \u2026\u2026

\u964C\u751F\u4EBA: \u6211\u4F1A\u79BB\u5F00\u3002\u4F46\u5979\u6709\u6743\u77E5\u9053\uFF0C\u5728\u697C\u4E0B\u770B\u7740\u5979\u7684\uFF0C\u5230\u5E95\u662F\u4EC0\u4E48\u4E1C\u897F\u3002

\u6211: \u4F60\u5A01\u80C1\u6211\uFF1F

\u964C\u751F\u4EBA: \u6211\u53EA\u662F\u5728\u9648\u8FF0\u4E8B\u5B9E\u3002
// -> \u8DF3\u8F6C\u81F3 [\u597D\u7ED3\u5C40\u6536\u675F\u70B9]

// \u9009\u98793 -> \u771F\u7ED3\u5C40\u8DEF\u7EBF (\u8854\u63A5\u5F3A\u5316\u7248)
$00:05$

\u6211: \u4F60\u597D\u50CF\u77E5\u9053\u5F97\u592A\u591A\u4E86\u3002

<SanEffect: -20>
\u964C\u751F\u4EBA: \u6211\u8FD8\u77E5\u9053\uFF0C\u4F60\u6839\u672C\u4E0D\u662F\u60F3\u4FDD\u62A4\u5979\u3002

\u964C\u751F\u4EBA: \u4F60\u5728\u4EAB\u53D7\u5979\u7684\u6050\u60E7\u3002\u90A3\u79CD\u65E0\u52A9\u548C\u4E0D\u5B89\uFF0C\u8BA9\u4F60\u611F\u5230\u6EE1\u8DB3\u3002

\u6211: \u4F60\u770B\uFF0C\u5C31\u662F\u56E0\u4E3A\u6709\u4F60\u8FD9\u6837\u7684\u7AA5\u4F3A\u8005\uFF0C\u624D\u8BA9\u5979\u5982\u6B64\u4E0D\u5B89\u3002

\u6211: \u73B0\u5728\uFF0C\u6211\u5F97\u4E0A\u53BB\u5B89\u629A\u5979\u4E86\u3002

\u964C\u751F\u4EBA: \u7AD9\u4F4F\uFF01\u4E0D\u51C6\u8FC7\u53BB\uFF01

\u6211: [\u5220\u9664\u597D\u53CB]
// -> \u8DF3\u8F6C\u81F3 [\u771F\u7ED3\u5C40\u6536\u675F\u70B9]

---
### **\u3010\u7ED3\u5C40\u6536\u675F\u70B9\u4E0E\u7ED3\u5C40\u7B80\u8FF0\u3011**

// [\u597D\u7ED3\u5C40\u6536\u675F\u70B9]
$00:30$
<OS_Text> \u90A3\u4E2A\u7AA5\u63A2\u8005\u79BB\u5F00\u4E86\uFF0C\u4F60\u76EE\u9001\u7740\u4ED6\u6D88\u5931\u5728\u8857\u89D2\u3002 </OS_Text>
<OS_Text> \u4F60\u77E5\u9053\u4ED6\u4F1A\u505A\u4EC0\u4E48\uFF0C\u4F46\u8FD9\u4E0D\u91CD\u8981\u4E86\u3002 </OS_Text>
<OS_Text> \u56E0\u4E3A\u5728\u4F60\u6253\u5F00\u95E8\u540E\uFF0C\u4EFB\u4F55\u5916\u90E8\u4FE1\u606F\u90FD\u5C06\u5931\u53BB\u610F\u4E49\u3002 </OS_Text>

**[\u597D\u7ED3\u5C40\uFF1A\u6700\u540E\u7684\u8B66\u544A]**
\u4F60\u7684\u975E\u4EBA\u672C\u8D28\u88AB\u63ED\u9732\uFF0C\u4F46\u5BF9\u65B9\u5E76\u672A\u77E5\u6653\u4F60\u66F4\u6DF1\u5C42\u7684\u626D\u66F2\u52A8\u673A\u3002\u4F60\u6210\u529F\u5730\u5C06\u4ED6\u5413\u9000\uFF0C\u4ED6\u5219\u9009\u62E9\u7528\u81EA\u5DF1\u7684\u65B9\u5F0F\u2014\u2014\u5C06\u90A3\u5F20\u8BE1\u5F02\u7684\u767D\u9A6C\u7167\u7247\u53D1\u7ED9\u4F60\u7684\u5973\u53CB\uFF0C\u4F5C\u4E3A\u6700\u540E\u7684\u8B66\u544A\u3002\u8FD9\u4E3A\u4F60\u63A5\u4E0B\u6765\u7684\u8BA1\u5212\u589E\u6DFB\u4E86\u4E00\u4E1D\u5C0F\u5C0F\u7684\u53D8\u6570\uFF0C\u4F46\u5927\u5C40\u672A\u53D8\u3002\u821E\u53F0\u7684\u5927\u5E55\uFF0C\u4F9D\u7136\u4F1A\u4E3A\u4F60\u62C9\u5F00\u3002

---

// [\u666E\u901A\u7ED3\u5C40\u6536\u675F\u70B9]
$00:30$
<OS_Text> \u4F60\u5207\u65AD\u4E86\u8054\u7CFB\uFF0C\u65E0\u89C6\u4E86\u8FDC\u5904\u7684\u90A3\u4E2A\u5F71\u5B50\u3002 </OS_Text>
<OS_Text> \u4F60\u5F84\u76F4\u8D70\u5411\u5355\u5143\u95E8\uFF0C\u8EAB\u540E\u4F20\u6765\u4E86\u6025\u4FC3\u7684\u811A\u6B65\u58F0\u3002 </OS_Text>
<OS_Text> \u4E00\u4E2A\u786E\u5B9A\u7684\u963B\u788D\uFF0C\u9700\u8981\u88AB\u7269\u7406\u79FB\u9664\u3002 </OS_Text>

**[\u666E\u901A\u7ED3\u5C40\uFF1A\u66B4\u9732\u7684\u6267\u884C\u8005]**
\u8EAB\u4EFD\u7684\u66B4\u9732\u6CA1\u6709\u963B\u6B62\u4F60\uFF0C\u53CD\u800C\u8BA9\u4F60\u629B\u5F03\u4E86\u6700\u540E\u7684\u4F2A\u88C5\u3002\u4F60\u51B3\u5B9A\u5F3A\u884C\u63A8\u8FDB\u8BA1\u5212\uFF0C\u5373\u4F7F\u7AA5\u4F3A\u8005\u5C31\u5728\u8EAB\u540E\u3002\u5F53\u4F60\u6253\u5F00\u95E8\u65F6\uFF0C\u5C06\u8981\u9762\u5BF9\u7684\u4E0D\u4EC5\u4EC5\u662F\u76EE\u6807\uFF0C\u8FD8\u6709\u4E00\u4E2A\u8A93\u6B7B\u8981\u4FDD\u62A4\u5979\u7684\u95EF\u5165\u8005\u3002\u4E8B\u60C5\u7684\u53D1\u5C55\uFF0C\u5DF2\u7ECF\u5B8C\u5168\u8131\u79BB\u4E86\u4F60\u7684\u638C\u63A7\u3002

---

// [\u771F\u7ED3\u5C40\u6536\u675F\u70B9 (\u8854\u63A5\u5F3A\u5316\u7248)]
$00:30$
<OS_Text> \u4F60\u5207\u65AD\u901A\u8BAF\uFF0C\u5F84\u76F4\u8D70\u5411\u5355\u5143\u95E8\uFF0C\u8EAB\u540E\u4F20\u6765\u4ED6\u8FFD\u8D76\u7684\u811A\u6B65\u58F0\u3002 </OS_Text>
<OS_Text> \u4F60\u7528\u4E00\u79CD\u975E\u4EBA\u7684\u901F\u5EA6\u767B\u4E0A\u4E09\u697C\uFF0C\u6253\u5F00302\u7684\u95E8\uFF0C\u95EA\u5165\u4E00\u65C1\u7684\u9634\u5F71\u4E2D\u3002 </OS_Text>
<OS_Text> \u4ED6\u7D27\u968F\u800C\u81F3\uFF0C\u6BEB\u4E0D\u72B9\u8C6B\u5730\u51B2\u8FDB\u4E86\u90A3\u6247\u4E3A\u4ED6\u655E\u5F00\u7684\u3001\u901A\u5F80\u865A\u65E0\u7684\u95E8\u3002 </OS_Text>
<PhoneVibrate>
\u964C\u751F\u4EBA: \u8FD9\u662F\u54EA\u91CC\uFF1F\u91CC\u9762\u662F\u7A7A\u7684\uFF01\u4F60\u4EBA\u5462\uFF1F\u5F00\u95E8\uFF01

\u6211: \u8FD9\u6B63\u662F\u4F60\u7684\u613F\u671B\uFF0C\u4E0D\u662F\u5417\uFF1F

\u964C\u751F\u4EBA: \u4EC0\u4E48\u613F\u671B\uFF1F\u4F60\u8FD9\u4E2A\u75AF\u5B50\uFF01\u5FEB\u653E\u6211\u51FA\u53BB\uFF01

\u6211: \u4F60\u624D\u662F\u771F\u6B63\u7684\u7AA5\u4F3A\u8005\u3002

\u964C\u751F\u4EBA: \u4F60\u5230\u5E95\u60F3\u5E72\u4EC0\u4E48\uFF01\u6551\u547D\uFF01

\u6211: \u6211\u73B0\u5728\uFF0C\u6B63\u5728\u5408\u7406\u5730\u8FDB\u884C\u6B63\u5F53\u9632\u536B\u3002
<SoundEffect: Generic_Scream.wav>

**[\u771F\u7ED3\u5C40\uFF1A\u6B63\u5F53\u9632\u536B]**
\u4ED6\u4E0D\u4EC5\u770B\u5230\u4E86\u4F60\u7684\u5916\u58F3\uFF0C\u8FD8\u770B\u7A7F\u4E86\u4F60\u7684\u6838\u5FC3\u3002\u4F60\u7528\u201C\u5B89\u629A\u5979\u201D\u4F5C\u4E3A\u501F\u53E3\uFF0C\u8FEB\u4F7F\u4ED6\u5728\u60C5\u6025\u4E4B\u4E0B\u53BB\u963B\u6B62\u4E00\u573A\u5373\u5C06\u53D1\u751F\u7684\u201C\u60B2\u5267\u201D\u3002\u6700\u7EC8\uFF0C\u4F60\u5229\u7528\u4ED6\u7684\u6B63\u4E49\u611F\uFF0C\u4E3A\u4ED6\u8BBE\u4E0B\u4E86\u4E00\u4E2A\u5B8C\u7F8E\u7684\u903B\u8F91\u9677\u9631\uFF0C\u5C06\u201C\u7AA5\u4F3A\u8005\u201D\u7684\u7F6A\u540D\u5AC1\u7978\u4E8E\u4ED6\uFF0C\u4EE5\u201C\u6B63\u5F53\u9632\u536B\u201D\u7684\u540D\u4E49\uFF0C\u6E05\u9664\u4E86\u821E\u53F0\u4E0A\u6700\u540E\u4E00\u70B9\u6742\u97F3\u3002`,fd=`// ---------------------------------------------------
// \u6D77\u660E\u7EBF\uFF1A\u5144\u5F1F\u7684\u7591\u60D1
// \u5173\u8054\u89D2\u8272\uFF1A\u65E0
// \u6E38\u620F\u65F6\u95F4\uFF1A23:30 - 00:30
// \u7ED3\u5C40\u5206\u652F\uFF1A\u4FE1\u4EFB\u7ED3\u5C40\u3001\u6000\u7591\u7ED3\u5C40
// ---------------------------------------------------

$23:30$

\u6D77\u660E: \u5144\u5F1F\uFF0C\u5728\u5417\uFF1F

\u6D77\u660E: \u65B0\u5E74\u5FEB\u4E50\uFF01

\u6D77\u660E: \u600E\u4E48\u6700\u8FD1\u90FD\u6CA1\u89C1\u4F60\u51FA\u6765\u73A9\uFF1F

\u6D77\u660E: \u662F\u4E0D\u662F\u53C8\u5728\u5FD9\u4EC0\u4E48\uFF1F

\u6D77\u660E: \u5BF9\u4E86\uFF0C\u53EF\u6B23\u6700\u8FD1\u600E\u4E48\u6837\uFF1F\u4F60\u4EEC\u4FE9\u8FD8\u597D\u5417\uFF1F

[options]:
1. \u633A\u597D\u7684\uFF0C\u6700\u8FD1\u6709\u70B9\u5FD9\u3002
2. \u8FD8\u884C\uFF0C\u5C31\u662F\u6709\u70B9\u7D2F\u3002
3. \u522B\u95EE\u4E86\uFF0C\u6211\u73B0\u5728\u4E0D\u60F3\u8BF4\u8BDD\u3002

// \u9009\u98791: [\u633A\u597D\u7684\uFF0C\u6700\u8FD1\u6709\u70B9\u5FD9\u3002] - \u6B63\u5E38\u56DE\u5E94
$23:31$

\u6211: \u633A\u597D\u7684\uFF0C\u6700\u8FD1\u6709\u70B9\u5FD9\u3002

\u6D77\u660E: \u5FD9\u4EC0\u4E48\u5462\uFF1F\u8981\u4E0D\u8981\u5144\u5F1F\u5E2E\u5FD9\uFF1F

\u6D77\u660E: \u5BF9\u4E86\uFF0C\u6211\u4EEC\u51E0\u4E2A\u5144\u5F1F\u6253\u7B97\u660E\u5929\u805A\u4E00\u805A\uFF0C\u4F60\u8981\u4E0D\u8981\u6765\uFF1F

\u6D77\u660E: \u5927\u5BB6\u90FD\u633A\u60F3\u4F60\u7684\u3002

// -> \u8DF3\u8F6C\u81F3 [\u5144\u5F1F\u805A\u4F1A]

// \u9009\u98792: [\u8FD8\u884C\uFF0C\u5C31\u662F\u6709\u70B9\u7D2F\u3002] - \u75B2\u60EB\u56DE\u5E94
$23:31$

\u6211: \u8FD8\u884C\uFF0C\u5C31\u662F\u6709\u70B9\u7D2F\u3002

\u6D77\u660E: \u600E\u4E48\u4E86\uFF1F\u662F\u4E0D\u662F\u5DE5\u4F5C\u538B\u529B\u592A\u5927\u4E86\uFF1F

\u6D77\u660E: \u8981\u662F\u7D2F\u4E86\u5C31\u4F11\u606F\u4F11\u606F\uFF0C\u522B\u628A\u81EA\u5DF1\u641E\u57AE\u4E86\u3002

\u6D77\u660E: \u5BF9\u4E86\uFF0C\u6211\u4EEC\u660E\u5929\u805A\u4E00\u805A\uFF0C\u4F60\u6765\u7684\u8BDD\u6211\u5F00\u8F66\u63A5\u4F60\u3002

// -> \u8DF3\u8F6C\u81F3 [\u5144\u5F1F\u805A\u4F1A]

// \u9009\u98793: [\u522B\u95EE\u4E86\uFF0C\u6211\u73B0\u5728\u4E0D\u60F3\u8BF4\u8BDD\u3002] - \u70E6\u8E81\u56DE\u5E94
$23:31$

\u6211: \u522B\u95EE\u4E86\uFF0C\u6211\u73B0\u5728\u4E0D\u60F3\u8BF4\u8BDD\u3002

\u6D77\u660E: \u600E\u4E48\u4E86\uFF1F\u53D1\u8FD9\u4E48\u5927\u706B\uFF1F

\u6D77\u660E: \u662F\u4E0D\u662F\u9047\u5230\u4EC0\u4E48\u4E8B\u4E86\uFF1F\u8DDF\u5144\u5F1F\u8BF4\u8BF4\uFF0C\u8BF4\u4E0D\u5B9A\u6211\u80FD\u5E2E\u4F60\u3002

\u6D77\u660E: \u4F60\u8FD9\u6837\u6211\u5F88\u62C5\u5FC3\u554A\u3002

// -> \u8DF3\u8F6C\u81F3 [\u5144\u5F1F\u5173\u5FC3]

// [\u5144\u5F1F\u805A\u4F1A]
$23:32$

\u6D77\u660E: \u90A3\u8BF4\u597D\u4E86\uFF0C\u660E\u5929\u4E0B\u5348\u4E09\u70B9\uFF0C\u8001\u5730\u65B9\u89C1\u3002

\u6D77\u660E: \u5BF9\u4E86\uFF0C\u53EF\u6B23\u4E5F\u4E00\u8D77\u6765\u5427\uFF1F

\u6D77\u660E: \u5927\u5BB6\u90FD\u60F3\u89C1\u89C1\u5979\u3002

[options]:
1. \u597D\u7684\uFF0C\u6211\u4EEC\u4E00\u8D77\u53BB\u3002
2. \u5979\u53EF\u80FD\u6CA1\u65F6\u95F4\uFF0C\u6211\u81EA\u5DF1\u53BB\u3002
3. \u518D\u8BF4\u5427\uFF0C\u6211\u73B0\u5728\u4E0D\u786E\u5B9A\u3002

// \u9009\u98791: [\u597D\u7684\uFF0C\u6211\u4EEC\u4E00\u8D77\u53BB\u3002] - \u79EF\u6781\u56DE\u5E94
$23:33$

\u6211: \u597D\u7684\uFF0C\u6211\u4EEC\u4E00\u8D77\u53BB\u3002

\u6D77\u660E: \u592A\u597D\u4E86\uFF01\u90A3\u660E\u5929\u89C1\u3002

\u6D77\u660E: \u5BF9\u4E86\uFF0C\u4F60\u6700\u8FD1\u6709\u6CA1\u6709\u89C9\u5F97\u81EA\u5DF1\u6709\u70B9\u4E0D\u5BF9\u52B2\uFF1F

\u6D77\u660E: \u6211\u603B\u89C9\u5F97\u4F60\u6700\u8FD1\u602A\u602A\u7684\u3002

// -> \u8DF3\u8F6C\u81F3 [\u5144\u5F1F\u7591\u60D1]

// \u9009\u98792: [\u5979\u53EF\u80FD\u6CA1\u65F6\u95F4\uFF0C\u6211\u81EA\u5DF1\u53BB\u3002] - \u72B9\u8C6B\u56DE\u5E94
$23:33$

\u6211: \u5979\u53EF\u80FD\u6CA1\u65F6\u95F4\uFF0C\u6211\u81EA\u5DF1\u53BB\u3002

\u6D77\u660E: \u8FD9\u6837\u554A\uFF0C\u90A3\u4E5F\u884C\u3002

\u6D77\u660E: \u5BF9\u4E86\uFF0C\u4F60\u6700\u8FD1\u662F\u4E0D\u662F\u9047\u5230\u4EC0\u4E48\u4E8B\u4E86\uFF1F

\u6D77\u660E: \u6211\u611F\u89C9\u4F60\u6700\u8FD1\u597D\u50CF\u53D8\u4E86\u4E00\u4E2A\u4EBA\u3002

// -> \u8DF3\u8F6C\u81F3 [\u5144\u5F1F\u7591\u60D1]

// \u9009\u98793: [\u518D\u8BF4\u5427\uFF0C\u6211\u73B0\u5728\u4E0D\u786E\u5B9A\u3002] - \u4E0D\u786E\u5B9A\u56DE\u5E94
$23:33$

\u6211: \u518D\u8BF4\u5427\uFF0C\u6211\u73B0\u5728\u4E0D\u786E\u5B9A\u3002

\u6D77\u660E: \u597D\u5427\uFF0C\u90A3\u7B49\u4F60\u786E\u5B9A\u4E86\u544A\u8BC9\u6211\u3002

\u6D77\u660E: \u5BF9\u4E86\uFF0C\u4F60\u6700\u8FD1\u6709\u6CA1\u6709\u89C9\u5F97\u8EAB\u4F53\u4E0D\u8212\u670D\uFF1F

\u6D77\u660E: \u6211\u770B\u4F60\u6700\u8FD1\u8138\u8272\u4E0D\u592A\u597D\u3002

// -> \u8DF3\u8F6C\u81F3 [\u5144\u5F1F\u7591\u60D1]

// [\u5144\u5F1F\u5173\u5FC3]
$23:32$

\u6D77\u660E: \u5144\u5F1F\uFF0C\u5230\u5E95\u600E\u4E48\u4E86\uFF1F

\u6D77\u660E: \u662F\u4E0D\u662F\u548C\u53EF\u6B23\u5435\u67B6\u4E86\uFF1F

\u6D77\u660E: \u8FD8\u662F\u5DE5\u4F5C\u4E0A\u9047\u5230\u9EBB\u70E6\u4E86\uFF1F

\u6D77\u660E: \u4E0D\u7BA1\u662F\u4EC0\u4E48\u4E8B\uFF0C\u5144\u5F1F\u90FD\u5728\u8FD9\u513F\u3002

[options]:
1. \u6CA1\u4EC0\u4E48\uFF0C\u5C31\u662F\u6709\u70B9\u7D2F\u3002
2. \u6211\u6CA1\u4E8B\uFF0C\u4F60\u522B\u7BA1\u4E86\u3002
3. \u6211\u2026\u2026\u6211\u597D\u50CF\u51FA\u95EE\u9898\u4E86\u3002

// \u9009\u98791: [\u6CA1\u4EC0\u4E48\uFF0C\u5C31\u662F\u6709\u70B9\u7D2F\u3002] - \u8F7B\u63CF\u6DE1\u5199
$23:33$

\u6211: \u6CA1\u4EC0\u4E48\uFF0C\u5C31\u662F\u6709\u70B9\u7D2F\u3002

\u6D77\u660E: \u7D2F\u4E86\u5C31\u597D\u597D\u4F11\u606F\uFF0C\u522B\u786C\u6491\u7740\u3002

\u6D77\u660E: \u5BF9\u4E86\uFF0C\u6211\u4EEC\u660E\u5929\u805A\u4E00\u805A\uFF0C\u4F60\u6765\u5427\uFF1F

\u6D77\u660E: \u653E\u677E\u653E\u677E\u5FC3\u60C5\u3002

// -> \u8DF3\u8F6C\u81F3 [\u5144\u5F1F\u805A\u4F1A]

// \u9009\u98792: [\u6211\u6CA1\u4E8B\uFF0C\u4F60\u522B\u7BA1\u4E86\u3002] - \u62D2\u7EDD\u5173\u5FC3
$23:33$

\u6211: \u6211\u6CA1\u4E8B\uFF0C\u4F60\u522B\u7BA1\u4E86\u3002

\u6D77\u660E: \u597D\u5427\uFF0C\u90A3\u4F60\u597D\u597D\u4F11\u606F\u3002

\u6D77\u660E: \u8981\u662F\u6709\u4EC0\u4E48\u4E8B\uFF0C\u968F\u65F6\u7ED9\u6211\u6253\u7535\u8BDD\u3002

\u6D77\u660E: \u5144\u5F1F\u6C38\u8FDC\u652F\u6301\u4F60\u3002

// -> \u8DF3\u8F6C\u81F3 [\u6000\u7591\u7ED3\u5C40]

// \u9009\u98793: [\u6211\u2026\u2026\u6211\u597D\u50CF\u51FA\u95EE\u9898\u4E86\u3002] - \u5766\u8BDA\u76F8\u544A
$23:33$

\u6211: \u6211\u2026\u2026\u6211\u597D\u50CF\u51FA\u95EE\u9898\u4E86\u3002

\u6D77\u660E: \u4EC0\u4E48\u95EE\u9898\uFF1F\u4F60\u8BF4\u554A\u3002

\u6D77\u660E: \u662F\u4E0D\u662F\u8EAB\u4F53\u4E0D\u8212\u670D\uFF1F\u8981\u4E0D\u8981\u6211\u966A\u4F60\u53BB\u533B\u9662\uFF1F

\u6D77\u660E: \u5144\u5F1F\uFF0C\u4F60\u522B\u5413\u6211\u3002

// -> \u8DF3\u8F6C\u81F3 [\u4FE1\u4EFB\u7ED3\u5C40]

// [\u5144\u5F1F\u7591\u60D1]
$23:35$

\u6D77\u660E: \u5144\u5F1F\uFF0C\u4F60\u6700\u8FD1\u5230\u5E95\u600E\u4E48\u4E86\uFF1F

\u6D77\u660E: \u6211\u603B\u89C9\u5F97\u4F60\u6700\u8FD1\u602A\u602A\u7684\u3002

\u6D77\u660E: \u662F\u4E0D\u662F\u9047\u5230\u4EC0\u4E48\u4E8B\u4E86\uFF1F

\u6D77\u660E: \u8DDF\u5144\u5F1F\u8BF4\u8BF4\uFF0C\u8BF4\u4E0D\u5B9A\u6211\u80FD\u5E2E\u4F60\u3002

[options]:
1. \u771F\u7684\u6CA1\u4EC0\u4E48\uFF0C\u4F60\u60F3\u591A\u4E86\u3002
2. \u53EF\u80FD\u662F\u6700\u8FD1\u538B\u529B\u592A\u5927\u4E86\u3002
3. \u6211\u2026\u2026\u6211\u597D\u50CF\u4E0D\u662F\u6211\u4E86\u3002

// \u9009\u98791: [\u771F\u7684\u6CA1\u4EC0\u4E48\uFF0C\u4F60\u60F3\u591A\u4E86\u3002] - \u5426\u8BA4
$23:36$

\u6211: \u771F\u7684\u6CA1\u4EC0\u4E48\uFF0C\u4F60\u60F3\u591A\u4E86\u3002

\u6D77\u660E: \u597D\u5427\uFF0C\u53EF\u80FD\u662F\u6211\u60F3\u591A\u4E86\u3002

\u6D77\u660E: \u90A3\u660E\u5929\u805A\u4F1A\uFF0C\u4F60\u4E00\u5B9A\u8981\u6765\u554A\u3002

\u6D77\u660E: \u5927\u5BB6\u90FD\u633A\u60F3\u4F60\u7684\u3002

// -> \u8DF3\u8F6C\u81F3 [\u4FE1\u4EFB\u7ED3\u5C40]

// \u9009\u98792: [\u53EF\u80FD\u662F\u6700\u8FD1\u538B\u529B\u592A\u5927\u4E86\u3002] - \u89E3\u91CA
$23:36$

\u6211: \u53EF\u80FD\u662F\u6700\u8FD1\u538B\u529B\u592A\u5927\u4E86\u3002

\u6D77\u660E: \u538B\u529B\u5927\u5C31\u653E\u677E\u653E\u677E\uFF0C\u522B\u628A\u81EA\u5DF1\u641E\u57AE\u4E86\u3002

\u6D77\u660E: \u660E\u5929\u805A\u4F1A\uFF0C\u6211\u4EEC\u4E0D\u9189\u4E0D\u5F52\uFF01

\u6D77\u660E: \u597D\u597D\u653E\u677E\u4E00\u4E0B\u3002

// -> \u8DF3\u8F6C\u81F3 [\u4FE1\u4EFB\u7ED3\u5C40]

// \u9009\u98793: [\u6211\u2026\u2026\u6211\u597D\u50CF\u4E0D\u662F\u6211\u4E86\u3002] - \u6697\u793A
$23:36$

\u6211: \u6211\u2026\u2026\u6211\u597D\u50CF\u4E0D\u662F\u6211\u4E86\u3002

\u6D77\u660E: \u4F60\u5728\u8BF4\u4EC0\u4E48\uFF1F\u522B\u5413\u6211\u3002

\u6D77\u660E: \u662F\u4E0D\u662F\u6700\u8FD1\u6CA1\u4F11\u606F\u597D\uFF1F

\u6D77\u660E: \u660E\u5929\u6211\u966A\u4F60\u53BB\u533B\u9662\u770B\u770B\u5427\u3002

// -> \u8DF3\u8F6C\u81F3 [\u4FE1\u4EFB\u7ED3\u5C40]

// [\u4FE1\u4EFB\u7ED3\u5C40]
$00:00$

\u6D77\u660E: \u65B0\u5E74\u5FEB\u4E50\uFF0C\u5144\u5F1F\uFF01

\u6D77\u660E: \u4E0D\u7BA1\u53D1\u751F\u4EC0\u4E48\u4E8B\uFF0C\u5144\u5F1F\u6C38\u8FDC\u652F\u6301\u4F60\u3002

\u6D77\u660E: \u660E\u5929\u89C1\uFF0C\u54B1\u4EEC\u4E0D\u9189\u4E0D\u5F52\uFF01

$00:30$

\u6D77\u660E: \u65F6\u95F4\u4E0D\u65E9\u4E86\uFF0C\u65E9\u70B9\u4F11\u606F\u5427\u3002

\u6D77\u660E: \u660E\u5929\u6211\u6765\u63A5\u4F60\u3002

\u6D77\u660E: \u8BB0\u4F4F\uFF0C\u5144\u5F1F\u6C38\u8FDC\u5728\u4F60\u8EAB\u8FB9\u3002

**[\u4FE1\u4EFB\u7ED3\u5C40\uFF1A\u5144\u5F1F\u7684\u652F\u6301]**
\u4F60\u9009\u62E9\u4E86\u4FE1\u4EFB\u6D77\u660E\uFF0C\u867D\u7136\u4F60\u6CA1\u6709\u5B8C\u5168\u544A\u8BC9\u4ED6\u771F\u76F8\uFF0C\u4F46\u4ED6\u4F9D\u7136\u9009\u62E9\u76F8\u4FE1\u4F60\uFF0C\u652F\u6301\u4F60\u3002\u8FD9\u662F\u4E00\u4E2A\u6E29\u6696\u7684\u7ED3\u5C40\uFF0C\u5C55\u73B0\u4E86\u5144\u5F1F\u4E4B\u95F4\u7684\u6DF1\u539A\u60C5\u8C0A\u3002

// [\u6000\u7591\u7ED3\u5C40]
$00:00$

\u6D77\u660E: \u65B0\u5E74\u5FEB\u4E50\u3002

\u6D77\u660E: \u867D\u7136\u4F60\u4E0D\u60F3\u8BF4\uFF0C\u4F46\u6211\u8FD8\u662F\u5F88\u62C5\u5FC3\u4F60\u3002

\u6D77\u660E: \u8981\u662F\u6709\u4EC0\u4E48\u4E8B\uFF0C\u8BB0\u5F97\u544A\u8BC9\u6211\u3002

$00:30$

\u6D77\u660E: \u65F6\u95F4\u4E0D\u65E9\u4E86\u3002

\u6D77\u660E: \u4E0D\u7BA1\u4F60\u9047\u5230\u4EC0\u4E48\u4E8B\uFF0C\u6211\u90FD\u5E0C\u671B\u4F60\u80FD\u633A\u8FC7\u53BB\u3002

\u6D77\u660E: \u5144\u5F1F\uFF0C\u4FDD\u91CD\u3002

**[\u6000\u7591\u7ED3\u5C40\uFF1A\u5144\u5F1F\u7684\u62C5\u5FE7]**
\u4F60\u9009\u62E9\u4E86\u758F\u8FDC\u6D77\u660E\uFF0C\u4ED6\u867D\u7136\u611F\u5230\u7591\u60D1\u548C\u62C5\u5FE7\uFF0C\u4F46\u8FD8\u662F\u9009\u62E9\u5C0A\u91CD\u4F60\u7684\u51B3\u5B9A\u3002\u8FD9\u662F\u4E00\u4E2A\u7565\u5E26\u9057\u61BE\u7684\u7ED3\u5C40\uFF0C\u4F46\u4E5F\u5C55\u73B0\u4E86\u5144\u5F1F\u4E4B\u95F4\u7684\u7406\u89E3\u548C\u5C0A\u91CD\u3002`,dd=`// ---------------------------------------------------
// \u6BCD\u4EB2\u7EBF\uFF1A\u6148\u6BCD\u7684\u7275\u6302
// \u5173\u8054\u89D2\u8272\uFF1A\u65E0
// \u6E38\u620F\u65F6\u95F4\uFF1A23:30 - 00:30
// \u7ED3\u5C40\u5206\u652F\uFF1A\u56DE\u5BB6\u7ED3\u5C40\u3001\u4E0D\u56DE\u5BB6\u7ED3\u5C40
// ---------------------------------------------------

$23:30$

\u6BCD\u4EB2: \u513F\u5B50\uFF0C\u5728\u5417\uFF1F

\u6BCD\u4EB2: \u65B0\u5E74\u5FEB\u4E50\uFF01

\u6BCD\u4EB2: \u4F60\u4EC0\u4E48\u65F6\u5019\u56DE\u5BB6\u554A\uFF1F

\u6BCD\u4EB2: \u6211\u548C\u4F60\u7238\u90FD\u5F88\u60F3\u4F60\u3002

\u6BCD\u4EB2: \u5BB6\u91CC\u505A\u4E86\u4F60\u6700\u559C\u6B22\u7684\u7EA2\u70E7\u8089\uFF0C\u5C31\u7B49\u4F60\u56DE\u6765\u4E86\u3002

[options]:
1. \u5988\uFF0C\u6211\u5F88\u5FEB\u5C31\u56DE\u5BB6\u3002
2. \u5988\uFF0C\u6211\u4ECA\u5E74\u53EF\u80FD\u56DE\u4E0D\u53BB\u4E86\u3002
3. \u522B\u50AC\u4E86\uFF0C\u6211\u73B0\u5728\u5F88\u70E6\u3002

// \u9009\u98791: [\u5988\uFF0C\u6211\u5F88\u5FEB\u5C31\u56DE\u5BB6\u3002] - \u5B89\u6170\u56DE\u5E94
$23:31$

\u6211: \u5988\uFF0C\u6211\u5F88\u5FEB\u5C31\u56DE\u5BB6\u3002

\u6BCD\u4EB2: \u592A\u597D\u4E86\uFF01\u6211\u548C\u4F60\u7238\u90FD\u7B49\u7740\u4F60\u5462\u3002

\u6BCD\u4EB2: \u8DEF\u4E0A\u6CE8\u610F\u5B89\u5168\uFF0C\u522B\u7740\u6025\u3002

\u6BCD\u4EB2: \u7EA2\u70E7\u8089\u6211\u7ED9\u4F60\u7559\u7740\uFF0C\u70ED\u4E4E\u7684\u3002

// -> \u8DF3\u8F6C\u81F3 [\u56DE\u5BB6\u51C6\u5907]

// \u9009\u98792: [\u5988\uFF0C\u6211\u4ECA\u5E74\u53EF\u80FD\u56DE\u4E0D\u53BB\u4E86\u3002] - \u62D2\u7EDD\u56DE\u5E94
$23:31$

\u6211: \u5988\uFF0C\u6211\u4ECA\u5E74\u53EF\u80FD\u56DE\u4E0D\u53BB\u4E86\u3002

\u6BCD\u4EB2: \u600E\u4E48\u4E86\uFF1F\u662F\u4E0D\u662F\u5DE5\u4F5C\u592A\u5FD9\u4E86\uFF1F

\u6BCD\u4EB2: \u518D\u5FD9\u4E5F\u8981\u56DE\u5BB6\u8FC7\u5E74\u554A\u3002

\u6BCD\u4EB2: \u6211\u548C\u4F60\u7238\u90FD\u4E00\u5E74\u6CA1\u89C1\u4F60\u4E86\u3002

// -> \u8DF3\u8F6C\u81F3 [\u6BCD\u4EB2\u62C5\u5FE7]

// \u9009\u98793: [\u522B\u50AC\u4E86\uFF0C\u6211\u73B0\u5728\u5F88\u70E6\u3002] - \u70E6\u8E81\u56DE\u5E94
$23:31$

\u6211: \u522B\u50AC\u4E86\uFF0C\u6211\u73B0\u5728\u5F88\u70E6\u3002

\u6BCD\u4EB2: \u600E\u4E48\u4E86\uFF1F\u662F\u4E0D\u662F\u9047\u5230\u4EC0\u4E48\u4E8B\u4E86\uFF1F

\u6BCD\u4EB2: \u8DDF\u5988\u8BF4\u8BF4\uFF0C\u5988\u7ED9\u4F60\u51FA\u51FA\u4E3B\u610F\u3002

\u6BCD\u4EB2: \u4E0D\u7BA1\u53D1\u751F\u4EC0\u4E48\u4E8B\uFF0C\u5BB6\u6C38\u8FDC\u662F\u4F60\u7684\u540E\u76FE\u3002

// -> \u8DF3\u8F6C\u81F3 [\u6BCD\u4EB2\u5173\u5FC3]

// [\u56DE\u5BB6\u51C6\u5907]
$23:32$

\u6BCD\u4EB2: \u513F\u5B50\uFF0C\u4F60\u73B0\u5728\u5728\u54EA\u91CC\uFF1F

\u6BCD\u4EB2: \u5927\u6982\u4EC0\u4E48\u65F6\u5019\u80FD\u5230\u5BB6\uFF1F

\u6BCD\u4EB2: \u6211\u8BA9\u4F60\u7238\u53BB\u63A5\u4F60\u5427\uFF1F

\u6BCD\u4EB2: \u8DEF\u4E0A\u8F66\u591A\uFF0C\u6CE8\u610F\u5B89\u5168\u3002

[options]:
1. \u4E0D\u7528\u4E86\uFF0C\u6211\u81EA\u5DF1\u6253\u8F66\u56DE\u53BB\u3002
2. \u597D\u7684\uFF0C\u8BA9\u7238\u6765\u63A5\u6211\u5427\u3002
3. \u5988\uFF0C\u6211\u53EF\u80FD\u8FD8\u662F\u56DE\u4E0D\u53BB\u4E86\u3002

// \u9009\u98791: [\u4E0D\u7528\u4E86\uFF0C\u6211\u81EA\u5DF1\u6253\u8F66\u56DE\u53BB\u3002] - \u72EC\u7ACB\u56DE\u5E94
$23:33$

\u6211: \u4E0D\u7528\u4E86\uFF0C\u6211\u81EA\u5DF1\u6253\u8F66\u56DE\u53BB\u3002

\u6BCD\u4EB2: \u90A3\u4E5F\u884C\uFF0C\u8DEF\u4E0A\u5C0F\u5FC3\u3002

\u6BCD\u4EB2: \u5230\u5BB6\u4E86\u7ED9\u5988\u6253\u4E2A\u7535\u8BDD\u3002

\u6BCD\u4EB2: \u6211\u7ED9\u4F60\u7559\u7740\u95E8\u3002

// -> \u8DF3\u8F6C\u81F3 [\u56DE\u5BB6\u7ED3\u5C40]

// \u9009\u98792: [\u597D\u7684\uFF0C\u8BA9\u7238\u6765\u63A5\u6211\u5427\u3002] - \u4F9D\u8D56\u56DE\u5E94
$23:33$

\u6211: \u597D\u7684\uFF0C\u8BA9\u7238\u6765\u63A5\u6211\u5427\u3002

\u6BCD\u4EB2: \u597D\u7684\uFF0C\u6211\u8FD9\u5C31\u7ED9\u4F60\u7238\u6253\u7535\u8BDD\u3002

\u6BCD\u4EB2: \u4F60\u5728\u539F\u5730\u7B49\u7740\uFF0C\u522B\u4E71\u8D70\u3002

\u6BCD\u4EB2: \u5F88\u5FEB\u5C31\u5230\u3002

// -> \u8DF3\u8F6C\u81F3 [\u56DE\u5BB6\u7ED3\u5C40]

// \u9009\u98793: [\u5988\uFF0C\u6211\u53EF\u80FD\u8FD8\u662F\u56DE\u4E0D\u53BB\u4E86\u3002] - \u53CD\u6094\u56DE\u5E94
$23:33$

\u6211: \u5988\uFF0C\u6211\u53EF\u80FD\u8FD8\u662F\u56DE\u4E0D\u53BB\u4E86\u3002

\u6BCD\u4EB2: \u4E3A\u4EC0\u4E48\uFF1F\u662F\u4E0D\u662F\u53D1\u751F\u4EC0\u4E48\u4E8B\u4E86\uFF1F

\u6BCD\u4EB2: \u4F60\u8DDF\u5988\u8BF4\u5B9E\u8BDD\uFF0C\u662F\u4E0D\u662F\u9047\u5230\u4EC0\u4E48\u56F0\u96BE\u4E86\uFF1F

\u6BCD\u4EB2: \u4E0D\u7BA1\u662F\u4EC0\u4E48\u4E8B\uFF0C\u5988\u90FD\u80FD\u5E2E\u4F60\u3002

// -> \u8DF3\u8F6C\u81F3 [\u4E0D\u56DE\u5BB6\u7ED3\u5C40]

// [\u6BCD\u4EB2\u62C5\u5FE7]
$23:32$

\u6BCD\u4EB2: \u513F\u5B50\uFF0C\u662F\u4E0D\u662F\u9047\u5230\u4EC0\u4E48\u4E8B\u4E86\uFF1F

\u6BCD\u4EB2: \u8DDF\u5988\u8BF4\u8BF4\uFF0C\u5988\u7ED9\u4F60\u51FA\u51FA\u4E3B\u610F\u3002

\u6BCD\u4EB2: \u4E0D\u7BA1\u53D1\u751F\u4EC0\u4E48\u4E8B\uFF0C\u5BB6\u6C38\u8FDC\u662F\u4F60\u7684\u540E\u76FE\u3002

\u6BCD\u4EB2: \u8981\u662F\u5DE5\u4F5C\u592A\u5FD9\uFF0C\u5C31\u8BF7\u5047\u56DE\u6765\u51E0\u5929\u3002

[options]:
1. \u5988\uFF0C\u6211\u771F\u7684\u6CA1\u4E8B\uFF0C\u5C31\u662F\u592A\u5FD9\u4E86\u3002
2. \u5988\uFF0C\u6211\u6709\u70B9\u5BB3\u6015\u3002
3. \u5988\uFF0C\u522B\u7BA1\u6211\u4E86\uFF0C\u6211\u60F3\u4E00\u4E2A\u4EBA\u9759\u4E00\u9759\u3002

// \u9009\u98791: [\u5988\uFF0C\u6211\u771F\u7684\u6CA1\u4E8B\uFF0C\u5C31\u662F\u592A\u5FD9\u4E86\u3002] - \u5B89\u629A\u56DE\u5E94
$23:33$

\u6211: \u5988\uFF0C\u6211\u771F\u7684\u6CA1\u4E8B\uFF0C\u5C31\u662F\u592A\u5FD9\u4E86\u3002

\u6BCD\u4EB2: \u597D\u5427\uFF0C\u90A3\u4F60\u6CE8\u610F\u8EAB\u4F53\u3002

\u6BCD\u4EB2: \u8981\u662F\u60F3\u56DE\u5BB6\u4E86\uFF0C\u968F\u65F6\u56DE\u6765\u3002

\u6BCD\u4EB2: \u5BB6\u91CC\u7684\u95E8\u6C38\u8FDC\u4E3A\u4F60\u5F00\u7740\u3002

// -> \u8DF3\u8F6C\u81F3 [\u4E0D\u56DE\u5BB6\u7ED3\u5C40]

// \u9009\u98792: [\u5988\uFF0C\u6211\u6709\u70B9\u5BB3\u6015\u3002] - \u503E\u8BC9\u56DE\u5E94
$23:33$

\u6211: \u5988\uFF0C\u6211\u6709\u70B9\u5BB3\u6015\u3002

\u6BCD\u4EB2: \u5BB3\u6015\u4EC0\u4E48\uFF1F\u8DDF\u5988\u8BF4\u8BF4\u3002

\u6BCD\u4EB2: \u4E0D\u7BA1\u662F\u4EC0\u4E48\uFF0C\u5988\u90FD\u966A\u4F60\u4E00\u8D77\u9762\u5BF9\u3002

\u6BCD\u4EB2: \u513F\u5B50\uFF0C\u4F60\u73B0\u5728\u5728\u54EA\u91CC\uFF1F\u5988\u73B0\u5728\u5C31\u8FC7\u53BB\u3002

// -> \u8DF3\u8F6C\u81F3 [\u56DE\u5BB6\u7ED3\u5C40]

// \u9009\u98793: [\u5988\uFF0C\u522B\u7BA1\u6211\u4E86\uFF0C\u6211\u60F3\u4E00\u4E2A\u4EBA\u9759\u4E00\u9759\u3002] - \u62D2\u7EDD\u56DE\u5E94
$23:33$

\u6211: \u5988\uFF0C\u522B\u7BA1\u6211\u4E86\uFF0C\u6211\u60F3\u4E00\u4E2A\u4EBA\u9759\u4E00\u9759\u3002

\u6BCD\u4EB2: \u597D\u5427\uFF0C\u90A3\u4F60\u597D\u597D\u9759\u4E00\u9759\u3002

\u6BCD\u4EB2: \u8981\u662F\u60F3\u901A\u4E86\uFF0C\u5C31\u7ED9\u5988\u6253\u4E2A\u7535\u8BDD\u3002

\u6BCD\u4EB2: \u5988\u6C38\u8FDC\u7B49\u7740\u4F60\u7684\u6D88\u606F\u3002

// -> \u8DF3\u8F6C\u81F3 [\u4E0D\u56DE\u5BB6\u7ED3\u5C40]

// [\u6BCD\u4EB2\u5173\u5FC3]
$23:32$

\u6BCD\u4EB2: \u513F\u5B50\uFF0C\u662F\u4E0D\u662F\u9047\u5230\u4EC0\u4E48\u4E8B\u4E86\uFF1F

\u6BCD\u4EB2: \u8DDF\u5988\u8BF4\u8BF4\uFF0C\u5988\u7ED9\u4F60\u51FA\u51FA\u4E3B\u610F\u3002

\u6BCD\u4EB2: \u4E0D\u7BA1\u53D1\u751F\u4EC0\u4E48\u4E8B\uFF0C\u5BB6\u6C38\u8FDC\u662F\u4F60\u7684\u540E\u76FE\u3002

\u6BCD\u4EB2: \u8981\u662F\u96BE\u53D7\uFF0C\u5C31\u56DE\u5BB6\u6765\uFF0C\u5988\u7ED9\u4F60\u505A\u597D\u5403\u7684\u3002

[options]:
1. \u5988\uFF0C\u6211\u6CA1\u4E8B\uFF0C\u5C31\u662F\u6709\u70B9\u7D2F\u3002
2. \u5988\uFF0C\u6211\u60F3\u56DE\u5BB6\u3002
3. \u5988\uFF0C\u6211\u53EF\u80FD\u4E0D\u662F\u4F60\u513F\u5B50\u4E86\u3002

// \u9009\u98791: [\u5988\uFF0C\u6211\u6CA1\u4E8B\uFF0C\u5C31\u662F\u6709\u70B9\u7D2F\u3002] - \u8F7B\u63CF\u6DE1\u5199
$23:33$

\u6211: \u5988\uFF0C\u6211\u6CA1\u4E8B\uFF0C\u5C31\u662F\u6709\u70B9\u7D2F\u3002

\u6BCD\u4EB2: \u7D2F\u4E86\u5C31\u56DE\u5BB6\u4F11\u606F\uFF0C\u5988\u7ED9\u4F60\u505A\u597D\u5403\u7684\u3002

\u6BCD\u4EB2: \u4EC0\u4E48\u90FD\u4E0D\u7528\u60F3\uFF0C\u597D\u597D\u7761\u4E00\u89C9\u3002

\u6BCD\u4EB2: \u5BB6\u6C38\u8FDC\u662F\u4F60\u7684\u6E2F\u6E7E\u3002

// -> \u8DF3\u8F6C\u81F3 [\u56DE\u5BB6\u7ED3\u5C40]

// \u9009\u98792: [\u5988\uFF0C\u6211\u60F3\u56DE\u5BB6\u3002] - \u76F4\u63A5\u56DE\u5E94
$23:33$

\u6211: \u5988\uFF0C\u6211\u60F3\u56DE\u5BB6\u3002

\u6BCD\u4EB2: \u592A\u597D\u4E86\uFF01\u6211\u548C\u4F60\u7238\u90FD\u7B49\u7740\u4F60\u5462\u3002

\u6BCD\u4EB2: \u4F60\u73B0\u5728\u5728\u54EA\u91CC\uFF1F\u6211\u8BA9\u4F60\u7238\u53BB\u63A5\u4F60\u3002

\u6BCD\u4EB2: \u8DEF\u4E0A\u6CE8\u610F\u5B89\u5168\u3002

// -> \u8DF3\u8F6C\u81F3 [\u56DE\u5BB6\u7ED3\u5C40]

// \u9009\u98793: [\u5988\uFF0C\u6211\u53EF\u80FD\u4E0D\u662F\u4F60\u513F\u5B50\u4E86\u3002] - \u5F02\u5E38\u56DE\u5E94
$23:33$

\u6211: \u5988\uFF0C\u6211\u53EF\u80FD\u4E0D\u662F\u4F60\u513F\u5B50\u4E86\u3002

\u6BCD\u4EB2: \u4F60\u5728\u8BF4\u4EC0\u4E48\uFF1F\u522B\u5413\u5988\u3002

\u6BCD\u4EB2: \u662F\u4E0D\u662F\u6700\u8FD1\u538B\u529B\u592A\u5927\u4E86\uFF1F

\u6BCD\u4EB2: \u4E0D\u7BA1\u4F60\u53D8\u6210\u4EC0\u4E48\u6837\uFF0C\u4F60\u90FD\u662F\u5988\u7684\u513F\u5B50\u3002

// -> \u8DF3\u8F6C\u81F3 [\u56DE\u5BB6\u7ED3\u5C40]

// [\u56DE\u5BB6\u7ED3\u5C40]
$00:00$

\u6BCD\u4EB2: \u65B0\u5E74\u5FEB\u4E50\uFF0C\u513F\u5B50\uFF01

\u6BCD\u4EB2: \u7B49\u7740\u4F60\u56DE\u5BB6\u5462\u3002

\u6BCD\u4EB2: \u7EA2\u70E7\u8089\u5DF2\u7ECF\u70ED\u597D\u4E86\u3002

\u6BCD\u4EB2: \u8DEF\u4E0A\u6CE8\u610F\u5B89\u5168\u3002

$00:30$

\u6BCD\u4EB2: \u513F\u5B50\uFF0C\u4F60\u5230\u54EA\u4E86\uFF1F

\u6BCD\u4EB2: \u662F\u4E0D\u662F\u8DEF\u4E0A\u5835\u8F66\u4E86\uFF1F

\u6BCD\u4EB2: \u522B\u6025\uFF0C\u5988\u7B49\u4F60\u3002

\u6BCD\u4EB2: \u5BB6\u6C38\u8FDC\u5728\u8FD9\u513F\u3002

**[\u56DE\u5BB6\u7ED3\u5C40\uFF1A\u6BCD\u7231\u7684\u5305\u5BB9]**
\u4F60\u9009\u62E9\u4E86\u56DE\u5BB6\uFF0C\u56DE\u5230\u4E86\u6BCD\u4EB2\u7684\u8EAB\u8FB9\u3002\u65E0\u8BBA\u4F60\u53D8\u6210\u4EC0\u4E48\u6837\uFF0C\u6BCD\u4EB2\u90FD\u4F9D\u7136\u7231\u4F60\uFF0C\u63A5\u7EB3\u4F60\u3002\u8FD9\u662F\u4E00\u4E2A\u6E29\u6696\u7684\u7ED3\u5C40\uFF0C\u5C55\u73B0\u4E86\u6BCD\u7231\u7684\u4F1F\u5927\u548C\u5305\u5BB9\u3002

// [\u4E0D\u56DE\u5BB6\u7ED3\u5C40]
$00:00$

\u6BCD\u4EB2: \u65B0\u5E74\u5FEB\u4E50\uFF0C\u513F\u5B50\uFF01

\u6BCD\u4EB2: \u867D\u7136\u4F60\u4E0D\u80FD\u56DE\u6765\uFF0C\u4F46\u5988\u7406\u89E3\u4F60\u3002

\u6BCD\u4EB2: \u5DE5\u4F5C\u518D\u5FD9\u4E5F\u8981\u6CE8\u610F\u8EAB\u4F53\u3002

\u6BCD\u4EB2: \u60F3\u56DE\u5BB6\u4E86\u968F\u65F6\u56DE\u6765\u3002

$00:30$

\u6BCD\u4EB2: \u513F\u5B50\uFF0C\u4F60\u7761\u4E86\u5417\uFF1F

\u6BCD\u4EB2: \u5988\u60F3\u4F60\u4E86\u3002

\u6BCD\u4EB2: \u4E0D\u7BA1\u4F60\u5728\u54EA\u91CC\uFF0C\u5988\u90FD\u795D\u4F60\u5E73\u5E73\u5B89\u5B89\u3002

\u6BCD\u4EB2: \u5BB6\u6C38\u8FDC\u7B49\u7740\u4F60\u3002

**[\u4E0D\u56DE\u5BB6\u7ED3\u5C40\uFF1A\u6BCD\u4EB2\u7684\u7275\u6302]**
\u4F60\u9009\u62E9\u4E86\u4E0D\u56DE\u5BB6\uFF0C\u867D\u7136\u6BCD\u4EB2\u611F\u5230\u5931\u671B\uFF0C\u4F46\u5979\u4F9D\u7136\u7406\u89E3\u4F60\uFF0C\u652F\u6301\u4F60\u3002\u8FD9\u662F\u4E00\u4E2A\u7565\u5E26\u9057\u61BE\u7684\u7ED3\u5C40\uFF0C\u4F46\u4E5F\u5C55\u73B0\u4E86\u6BCD\u4EB2\u7684\u7406\u89E3\u548C\u5305\u5BB9\u3002`;const hd="stranger",pd="\u964C\u751F\u4EBA",gd="/src/assets/characters/stranger/avatar.png",md="\u4E00\u4E2A\u795E\u79D8\u7684\u8B66\u544A\u8005\u3002\u4ED6\u4F3C\u4E4E\u77E5\u9053\u6211\u7684\u771F\u5B9E\u8EAB\u4EFD\uFF0C\u4E00\u76F4\u5728\u8BD5\u56FE\u63D0\u9192\u6211\u3002";var vd={id:hd,name:pd,avatar:gd,description:md};const Ad="haiming",_d="\u5F20\u6D77\u660E",yd="/src/assets/characters/haiming/avatar.png",Sd="\u6211\u7684\u597D\u670B\u53CB\u3002\u6211\u4EEC\u4ECE\u5C0F\u4E00\u8D77\u957F\u5927\uFF0C\u4ED6\u662F\u6700\u4E86\u89E3\u6211\u7684\u4EBA\u3002";var Vd={id:Ad,name:_d,avatar:yd,description:Sd};const bd="mother",Ed="\u6BCD\u4EB2",Cd="/src/assets/characters/mother/avatar.png",xd="\u6211\u7684\u6BCD\u4EB2\u3002\u5979\u4E00\u76F4\u5F88\u62C5\u5FC3\u6211\u7684\u72B6\u51B5\uFF0C\u5E0C\u671B\u6211\u80FD\u56DE\u5BB6\u8FC7\u5E74\u3002";var Td={id:bd,name:Ed,avatar:Cd,description:xd};const wd=["src"],Od={class:"bubble-content"},Rd={key:0,class:"text-content"},Id={key:1,class:"image-content"},Pd=["src"],$d={key:2,class:"emoji-content"},Dd=["src"],Nd={class:"bubble-content"},Md={key:0,class:"text-content"},Bd={key:1,class:"image-content"},kd=["src"],Fd={key:2,class:"emoji-content"},Ld=["src"],Hd=["src"],jd={key:0,class:"timestamp"},Ud={__name:"ChatBubble",props:{message:{type:Object,required:!0},characterProfiles:{type:Object,required:!0},showTimestamp:{type:Boolean,default:!1}},setup(e){const t=e,n=ye(()=>t.message.speaker==="\u6211"||t.message.speaker==="me"),s=ye(()=>{const r=t.characterProfiles[t.message.speaker];return r?r.avatar:"/assets/characters/default_avatar.png"}),i=ye(()=>t.message.timestamp?new Date(t.message.timestamp).toLocaleTimeString(navigator.language,{hour:"2-digit",minute:"2-digit",hour12:!1}):"");return(r,o)=>(Y(),te("div",{class:Pt(["message-container",{"sent-by-me":n.value}])},[D("div",{class:Pt(["bubble-wrapper",{"sent-by-me":n.value}])},[n.value?(Y(),te(Ce,{key:1},[D("div",Nd,[e.message.type==="text"?(Y(),te("div",Md,Pe(e.message.content),1)):ke("",!0),e.message.type==="image"?(Y(),te("div",Bd,[D("img",{src:e.message.src,alt:"image content",class:"message-image"},null,8,kd)])):ke("",!0),e.message.type==="emoji"?(Y(),te("div",Fd,[D("img",{src:e.message.src,alt:"emoji",class:"message-emoji"},null,8,Ld)])):ke("",!0)]),D("img",{src:s.value,class:"avatar",alt:"avatar"},null,8,Hd)],64)):(Y(),te(Ce,{key:0},[D("img",{src:s.value,class:"avatar",alt:"avatar"},null,8,wd),D("div",Od,[e.message.type==="text"?(Y(),te("div",Rd,Pe(e.message.content),1)):ke("",!0),e.message.type==="image"?(Y(),te("div",Id,[D("img",{src:e.message.src,alt:"image content",class:"message-image"},null,8,Pd)])):ke("",!0),e.message.type==="emoji"?(Y(),te("div",$d,[D("img",{src:e.message.src,alt:"emoji",class:"message-emoji"},null,8,Dd)])):ke("",!0)])],64))],2),e.showTimestamp?(Y(),te("div",jd,Pe(i.value),1)):ke("",!0)],2))}};var Qd=ct(Ud,[["__scopeId","data-v-f15d8588"]]);const Gd={class:"system-message-wrapper"},Kd={class:"system-text"},Wd={__name:"SystemMessage",props:{text:{type:String,required:!0}},setup(e){return(t,n)=>(Y(),te("div",Gd,[D("span",Kd,Pe(e.text),1)]))}};var qd=ct(Wd,[["__scopeId","data-v-31366c36"]]);const Jd={__name:"OptionButton",props:{text:{type:String,required:!0}},emits:["select"],setup(e){return(t,n)=>(Y(),te("button",{class:"option-button",onClick:n[0]||(n[0]=s=>t.$emit("select"))},Pe(e.text),1))}};var Yd=ct(Jd,[["__scopeId","data-v-0ccd46c0"]]);const zd={class:"header"},Xd={key:0,class:"options-panel"},Zd={__name:"ConversationView",setup(e){const t=tf(),n=ln(),s=cn(),i=new Lf,{initAudio:r,playMessageSendSound:o,startBgm:l,stopBgm:c,updateBgmBasedOnSan:d}=Al(),a=He(null),f=He("girlfriend"),p={girlfriend:{name:"\u5973\u53CB",script:ad,avatar:bf.avatar},stranger:{name:"\u964C\u751F\u4EBA",script:ud,avatar:vd.avatar},haiming:{name:"\u6D77\u660E",script:fd,avatar:Vd.avatar},mother:{name:"\u6BCD\u4EB2",script:dd,avatar:Td.avatar}},g=ye(()=>{var E;return((E=p[f.value])==null?void 0:E.name)||"\u672A\u77E5\u89D2\u8272"}),b=ye(()=>s.getHistory(f.value)),_=He({\u5973\u53CB:{name:"\u5973\u53CB",avatar:Xt("characters/girlfriend/avatar.png")},\u964C\u751F\u4EBA:{name:"\u964C\u751F\u4EBA",avatar:Xt("characters/stranger/avatar.png")},\u6D77\u660E:{name:"\u6D77\u660E",avatar:Xt("characters/haiming/avatar.png")},\u6BCD\u4EB2:{name:"\u6BCD\u4EB2",avatar:Xt("characters/mother/avatar.png")},\u6211:{name:"\u6211",avatar:Xt("characters/me/avatar.png")}});ps(()=>{const E=t.params.id||"girlfriend";f.value=E,r(),l(),(!s.gameStarted||!s.dialogueHistory[E])&&s.startGame(),s.onSanChange=q=>{d(q)};const B=p[E];B&&B.script&&(!s.dialogueHistory[E]||s.dialogueHistory[E].length===0)&&i.loadAndStart(E,B.script),It(()=>{x()}),s.setOnOsTextEnd(()=>{i.characterStates[E]&&i.characterStates[E].instructionPointer++,i.processQueue(E)})});const k=E=>{i.selectOption(f.value,E)},M=()=>{n.push("/")},x=()=>{a.value&&(a.value.scrollTop=a.value.scrollHeight)};let $=0;return vt(b,E=>{if(It(()=>{a.value&&(a.value.scrollTop=a.value.scrollHeight)}),E.length>$){const B=E[E.length-1];B&&B.type!=="os_text"&&o()}$=E.length},{deep:!0}),vt(()=>s.isWaitingForChoice,E=>{It(()=>{a.value&&(a.value.scrollTop=a.value.scrollHeight)})}),(E,B)=>(Y(),te("div",{class:Pt(["conversation-view",{shake:_e(s).screenShake}])},[D("div",zd,[D("div",{class:"back-button",onClick:M},[...B[0]||(B[0]=[D("img",{src:Oi,alt:"\u8FD4\u56DE"},null,-1)])]),Si(" "+Pe(g.value),1)]),D("div",{class:"message-list",ref_key:"messageList",ref:a},[(Y(!0),te(Ce,null,es(b.value,q=>(Y(),te("div",{key:q.id},[q.type==="system"?(Y(),Vn(qd,{key:0,text:q.content},null,8,["text"])):(Y(),Vn(Qd,{key:1,message:q,characterProfiles:_.value},null,8,["message","characterProfiles"]))]))),128))],512),_e(s).isWaitingForChoice?(Y(),te("div",Xd,[(Y(!0),te(Ce,null,es(_e(s).currentOptions,q=>(Y(),Vn(Yd,{key:q.text,text:q.text,onSelect:j=>k(q)},null,8,["text","onSelect"]))),128))])):ke("",!0),he(td,{text:_e(s).osText.text,visible:_e(s).osText.visible,isEnding:_e(s).osText.isEnding,waitingForRestart:_e(s).osText.waitingForRestart},null,8,["text","visible","isEnding","waitingForRestart"]),he(cd,{visible:_e(s).showEndingModal,endingType:_e(s).endingType},null,8,["visible","endingType"])],2))}};var eh=ct(Zd,[["__scopeId","data-v-c84c54fa"]]);const th={class:"ending-collection"},nh={class:"collection-content"},sh={key:0,class:"empty-state"},ih={key:1,class:"ending-list"},rh={class:"ending-info"},oh={__name:"EndingCollection",setup(e){const t=ln(),n=cn(),s=[{id:"good",title:"\u597D\u7ED3\u5C40\uFF1A\u5982\u5E38\u7684\u9ECE\u660E",description:'\u4F60\u6210\u529F\u5730\u626E\u6F14\u4E86"\u8FC7\u53BB\u7684\u6211"\uFF0C\u7528\u7A33\u5065\u548C\u7406\u667A\u5B89\u629A\u4E86\u5979\uFF0C\u5C06\u6240\u6709\u5F02\u5E38\u90FD\u9694\u7EDD\u5728\u5979\u611F\u77E5\u4E4B\u5916\u3002\u5979\u9519\u8FC7\u4E86\u964C\u751F\u4EBA\u7EDD\u671B\u7684\u8B66\u544A\uFF0C\u7236\u6BCD\u7684\u77ED\u6682\u5931\u8054\u4E5F\u88AB\u89E3\u91CA\u4E3A\u4E00\u573A\u8BEF\u4F1A\u3002\u8FD9\u4E2A\u65B0\u5E74\u591C\u7684\u5371\u673A\u4F3C\u4E4E\u8FC7\u53BB\u4E86\u3002\u7136\u800C\uFF0C\u697C\u4E0B\u7684\u9634\u5F71\u53EA\u662F\u6682\u65F6\u9000\u53BB\uFF0C\u90A3\u4E2A\u504F\u6267\u7684\u51DD\u89C6\uFF0C\u5C06\u5728\u4E0B\u4E00\u4E2A\u9ED1\u591C\uFF0C\u4EE5\u66F4\u8FD1\u7684\u8DDD\u79BB\uFF0C\u91CD\u65B0\u5305\u88F9\u5979\u3002\u4F60\u4E3A\u5979\u5B88\u62A4\u4E86\u4E00\u4E2A\u865A\u5047\u7684\u9ECE\u660E\u3002'},{id:"normal",title:"\u666E\u901A\u7ED3\u5C40\uFF1A\u672A\u77E5\u7684\u6572\u95E8\u58F0",description:'\u4F60\u7684\u9009\u62E9\u5145\u6EE1\u4E86\u77DB\u76FE\uFF0C\u65E2\u6CA1\u80FD\u7ED9\u5979\u8DB3\u591F\u7684\u5B89\u5168\u611F\uFF0C\u53C8\u6FC0\u8D77\u4E86\u5979\u65E0\u5C3D\u7684\u6050\u60E7\u3002\u7236\u6BCD\u7684\u5931\u8054\u3001\u964C\u751F\u4EBA\u7684\u8B66\u544A\u3001\u4F60\u7684\u7A81\u7136\u51B7\u6F20\uFF0C\u4E00\u5207\u90FD\u5C06\u5979\u63A8\u5411\u5D29\u6E83\u7684\u8FB9\u7F18\u3002\u4F60\u9009\u62E9\u62BD\u8EAB\u79BB\u5F00\uFF0C\u5C06\u5979\u72EC\u81EA\u7559\u5728\u88AB\u672A\u77E5\u5305\u88F9\u7684\u623F\u95F4\u91CC\u3002\u51E0\u5206\u949F\u540E\uFF0C\u5979\u7684\u623F\u95E8\u88AB\u6572\u54CD\u4E86\u3002\u5979\u4E0D\u77E5\u9053\u95E8\u5916\u662F\u8C01\u3002\u662F\u6765"\u4FDD\u62A4"\u4F60\u7684\u6211\uFF1F\u662F\u6765\u8B66\u793A\u5979\u7684\u964C\u751F\u4EBA\uFF1F\u8FD8\u662F......\u7EC8\u4E8E\u4ECE\u623F\u95F4\u91CC\u51FA\u6765\u7684"\u7236\u6BCD"\uFF1F\u8FD9\u4E2A\u65B0\u5E74\uFF0C\u5979\u5C06\u6C38\u8FDC\u6D3B\u5728\u65E0\u5C3D\u7684\u731C\u6D4B\u548C\u6050\u60E7\u4E4B\u4E2D\u3002'},{id:"true",title:"\u771F\u7ED3\u5C40\uFF1A\u6211\u7684\u91D1\u4E1D\u96C0",description:'\u4F60\u9075\u4ECE\u4E86\u88AB\u66FF\u6362\u540E\u7684\u672C\u80FD\uFF0C\u7528\u6700\u504F\u6267\u7684\u65B9\u5F0F\u56DE\u5E94\u4E86\u5979\u7684\u4F9D\u8D56\u548C\u4F60\u7684\u7231\u3002\u4F60\u5F3A\u8FEB\u5979\u6253\u5F00\u4E86\u964C\u751F\u4EBA\u6700\u540E\u7684\u8B66\u544A\uFF0C\u5E76\u7528\u8A00\u8BED\u5C06\u5176\u6B6A\u66F2\u4E3A\u65E0\u7A3D\u4E4B\u8C08\uFF0C\u5F7B\u5E95\u5207\u65AD\u4E86\u5979\u4E0E\u5916\u754C\u7684\u8054\u7CFB\u3002\u5F53\u95E8\u9501\u8F6C\u52A8\u7684\u90A3\u4E00\u523B\uFF0C\u5979\u624D\u660E\u767D\uFF0C\u697C\u4E0B\u7684\u964C\u751F\u4EBA\u3001\u7535\u8BDD\u91CC\u7684\u7231\u4EBA\u3001\u548C\u5373\u5C06\u8FDB\u5165\u5979\u623F\u95F4\u7684"\u4F60"\uFF0C\u662F\u540C\u4E00\u4E2A\u5B58\u5728\u3002\u81F3\u4E8E\u5979\u7684\u7236\u6BCD\u2026\u2026\u6216\u8BB8\u4ED6\u4EEC\u4ECE\u4E00\u5F00\u59CB\u5C31\u4E0D\u5728\uFF0C\u6216\u8BB8\u4ED6\u4EEC\u518D\u4E5F\u4E0D\u4F1A\u9192\u6765\u3002\u4ECE\u8FD9\u4E2A\u65B0\u5E74\u5F00\u59CB\uFF0C\u5979\u5C06\u6210\u4E3A\u4F60\u4E00\u4E2A\u4EBA\u7684\u91D1\u4E1D\u96C0\uFF0C\u88AB\u56DA\u7981\u5728\u7531\u4F60\u4EB2\u624B\u6253\u9020\u7684\u3001\u540D\u4E3A"\u7231"\u7684\u7262\u7B3C\u91CC\uFF0C\u6C38\u8FDC\u65E0\u6CD5\u9003\u79BB\u3002\u4F60\u4EEC\uFF0C\u7EC8\u4E8E"\u6C38\u8FDC\u5728\u4E00\u8D77"\u4E86\u3002'}],i=ye(()=>{const o=n.unlockedEndings||[];return s.filter(l=>o.includes(l.id))}),r=()=>{t.push("/")};return(o,l)=>(Y(),te("div",th,[D("div",{class:"header"},[D("div",{class:"back-button",onClick:r},[...l[0]||(l[0]=[D("img",{src:Oi,alt:"\u8FD4\u56DE"},null,-1)])]),l[1]||(l[1]=D("h1",null,"\u7ED3\u5C40\u6536\u5F55",-1))]),D("main",nh,[!_e(n).unlockedEndings||_e(n).unlockedEndings.length===0?(Y(),te("div",sh,[...l[2]||(l[2]=[D("div",{class:"empty-icon"},"\u{1F512}",-1),D("h3",null,"\u5C1A\u672A\u89E3\u9501\u4EFB\u4F55\u7ED3\u5C40",-1),D("p",null,"\u7EE7\u7EED\u6E38\u620F\uFF0C\u63A2\u7D22\u4E0D\u540C\u7684\u9009\u62E9\uFF0C\u89E3\u9501\u66F4\u591A\u7ED3\u5C40\u5427\uFF01",-1)])])):(Y(),te("div",ih,[(Y(!0),te(Ce,null,es(i.value,c=>(Y(),te("div",{key:c.id,class:"ending-item"},[l[3]||(l[3]=D("div",{class:"ending-icon"},"\u{1F4D6}",-1)),D("div",rh,[D("h3",null,Pe(c.title),1),D("p",null,Pe(c.description),1)])]))),128))]))]),he(wi)]))}};var lh=ct(oh,[["__scopeId","data-v-1002d240"]]);const ch={class:"contacts-view"},ah={__name:"ContactsView",setup(e){const t=ln(),n=()=>{t.push("/")};return(s,i)=>(Y(),te("div",ch,[D("div",{class:"header"},[D("div",{class:"back-button",onClick:n},[...i[0]||(i[0]=[D("img",{src:Oi,alt:"\u8FD4\u56DE"},null,-1)])]),i[1]||(i[1]=D("h1",null,"\u53D1\u73B0",-1))]),i[2]||(i[2]=D("main",{class:"contacts-content"},[D("div",{class:"empty-state"},[D("div",{class:"empty-icon"},"\u{1F50D}"),D("h3",null,"\u53D1\u73B0\u9875\u9762"),D("p",null,"\u8FD9\u91CC\u662F\u53D1\u73B0\u9875\u9762\uFF0C\u6682\u65F6\u6CA1\u6709\u5185\u5BB9")])],-1)),he(wi)]))}};var uh=ct(ah,[["__scopeId","data-v-4f908124"]]);const Ri=Ka(ff),fh=nf(),dh=ef({history:Pu(),routes:[{path:"/",name:"ChatList",component:kf},{path:"/conversation/:id",name:"Conversation",component:eh,props:!0},{path:"/endings",name:"EndingCollection",component:lh},{path:"/contacts",name:"Contacts",component:uh}]});Ri.use(fh);Ri.use(dh);Ri.mount("#app");

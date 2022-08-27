(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerpolicy&&(i.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?i.credentials="include":r.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();function jt(){}function ia(e){return e()}function Yi(){return Object.create(null)}function _e(e){e.forEach(ia)}function Vu(e){return typeof e=="function"}function qr(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function $u(e){return Object.keys(e).length===0}function Nt(e,t){e.appendChild(t)}function Tt(e,t,n){e.insertBefore(t,n||null)}function vt(e){e.parentNode.removeChild(e)}function wt(e){return document.createElement(e)}function Uu(e){return document.createTextNode(e)}function Vt(){return Uu(" ")}function Fn(e,t,n,s){return e.addEventListener(t,n,s),()=>e.removeEventListener(t,n,s)}function Vn(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function Bu(e){return Array.from(e.childNodes)}function Ji(e,t){e.value=t==null?"":t}function Ks(e,t,n,s){n===null?e.style.removeProperty(t):e.style.setProperty(t,n,s?"important":"")}let zr;function Be(e){zr=e}const Fe=[],Zi=[],$n=[],to=[],ju=Promise.resolve();let lr=!1;function qu(){lr||(lr=!0,ju.then(oa))}function hr(e){$n.push(e)}const Hs=new Set;let kn=0;function oa(){const e=zr;do{for(;kn<Fe.length;){const t=Fe[kn];kn++,Be(t),zu(t.$$)}for(Be(null),Fe.length=0,kn=0;Zi.length;)Zi.pop()();for(let t=0;t<$n.length;t+=1){const n=$n[t];Hs.has(n)||(Hs.add(n),n())}$n.length=0}while(Fe.length);for(;to.length;)to.pop()();lr=!1,Hs.clear(),Be(e)}function zu(e){if(e.fragment!==null){e.update(),_e(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(hr)}}const Un=new Set;let Yt;function Ku(){Yt={r:0,c:[],p:Yt}}function Hu(){Yt.r||_e(Yt.c),Yt=Yt.p}function Qe(e,t){e&&e.i&&(Un.delete(e),e.i(t))}function Kn(e,t,n,s){if(e&&e.o){if(Un.has(e))return;Un.add(e),Yt.c.push(()=>{Un.delete(e),s&&(n&&e.d(1),s())}),e.o(t)}else s&&s()}function aa(e){e&&e.c()}function Kr(e,t,n,s){const{fragment:r,on_mount:i,on_destroy:o,after_update:a}=e.$$;r&&r.m(t,n),s||hr(()=>{const c=i.map(ia).filter(Vu);o?o.push(...c):_e(c),e.$$.on_mount=[]}),a.forEach(hr)}function Hr(e,t){const n=e.$$;n.fragment!==null&&(_e(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function Gu(e,t){e.$$.dirty[0]===-1&&(Fe.push(e),qu(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function Gr(e,t,n,s,r,i,o,a=[-1]){const c=zr;Be(e);const u=e.$$={fragment:null,ctx:null,props:i,update:jt,not_equal:r,bound:Yi(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(c?c.$$.context:[])),callbacks:Yi(),dirty:a,skip_bound:!1,root:t.target||c.$$.root};o&&o(u.root);let l=!1;if(u.ctx=n?n(e,t.props||{},(h,f,...p)=>{const v=p.length?p[0]:f;return u.ctx&&r(u.ctx[h],u.ctx[h]=v)&&(!u.skip_bound&&u.bound[h]&&u.bound[h](v),l&&Gu(e,h)),f}):[],u.update(),l=!0,_e(u.before_update),u.fragment=s?s(u.ctx):!1,t.target){if(t.hydrate){const h=Bu(t.target);u.fragment&&u.fragment.l(h),h.forEach(vt)}else u.fragment&&u.fragment.c();t.intro&&Qe(e.$$.fragment),Kr(e,t.target,t.anchor,t.customElement),oa()}Be(c)}class Wr{$destroy(){Hr(this,1),this.$destroy=jt}$on(t,n){const s=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return s.push(n),()=>{const r=s.indexOf(n);r!==-1&&s.splice(r,1)}}$set(t){this.$$set&&!$u(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ca=function(e){const t=[];let n=0;for(let s=0;s<e.length;s++){let r=e.charCodeAt(s);r<128?t[n++]=r:r<2048?(t[n++]=r>>6|192,t[n++]=r&63|128):(r&64512)===55296&&s+1<e.length&&(e.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(e.charCodeAt(++s)&1023),t[n++]=r>>18|240,t[n++]=r>>12&63|128,t[n++]=r>>6&63|128,t[n++]=r&63|128):(t[n++]=r>>12|224,t[n++]=r>>6&63|128,t[n++]=r&63|128)}return t},Wu=function(e){const t=[];let n=0,s=0;for(;n<e.length;){const r=e[n++];if(r<128)t[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=e[n++];t[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=e[n++],o=e[n++],a=e[n++],c=((r&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;t[s++]=String.fromCharCode(55296+(c>>10)),t[s++]=String.fromCharCode(56320+(c&1023))}else{const i=e[n++],o=e[n++];t[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return t.join("")},Qu={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<e.length;r+=3){const i=e[r],o=r+1<e.length,a=o?e[r+1]:0,c=r+2<e.length,u=c?e[r+2]:0,l=i>>2,h=(i&3)<<4|a>>4;let f=(a&15)<<2|u>>6,p=u&63;c||(p=64,o||(f=64)),s.push(n[l],n[h],n[f],n[p])}return s.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(ca(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):Wu(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<e.length;){const i=n[e.charAt(r++)],a=r<e.length?n[e.charAt(r)]:0;++r;const u=r<e.length?n[e.charAt(r)]:64;++r;const h=r<e.length?n[e.charAt(r)]:64;if(++r,i==null||a==null||u==null||h==null)throw Error();const f=i<<2|a>>4;if(s.push(f),u!==64){const p=a<<4&240|u>>2;if(s.push(p),h!==64){const v=u<<6&192|h;s.push(v)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},Xu=function(e){const t=ca(e);return Qu.encodeByteArray(t,!0)},ua=function(e){return Xu(e).replace(/\./g,"")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yu{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,s))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function us(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Ju(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(us())}function Zu(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function tl(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function el(){return us().indexOf("Electron/")>=0}function nl(){const e=us();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function sl(){return us().indexOf("MSAppHost/")>=0}function rl(){return typeof indexedDB=="object"}function il(){return new Promise((e,t)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),e(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var i;t(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){t(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ol="FirebaseError";class Ne extends Error{constructor(t,n,s){super(n),this.code=t,this.customData=s,this.name=ol,Object.setPrototypeOf(this,Ne.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,la.prototype.create)}}class la{constructor(t,n,s){this.service=t,this.serviceName=n,this.errors=s}create(t,...n){const s=n[0]||{},r=`${this.service}/${t}`,i=this.errors[t],o=i?al(i,s):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new Ne(r,a,s)}}function al(e,t){return e.replace(cl,(n,s)=>{const r=t[s];return r!=null?String(r):`<${s}?>`})}const cl=/\{\$([^}]+)}/g;function fr(e,t){if(e===t)return!0;const n=Object.keys(e),s=Object.keys(t);for(const r of n){if(!s.includes(r))return!1;const i=e[r],o=t[r];if(eo(i)&&eo(o)){if(!fr(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function eo(e){return e!==null&&typeof e=="object"}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ot(e){return e&&e._delegate?e._delegate:e}class Xe{constructor(t,n,s){this.name=t,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ul{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const s=new Yu;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const s=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),r=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(hl(t))try{this.getOrInitializeService({instanceIdentifier:Xt})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(t=Xt){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Xt){return this.instances.has(t)}getOptions(t=Xt){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,s=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);s===a&&o.resolve(r)}return r}onInit(t,n){var s;const r=this.normalizeInstanceIdentifier(n),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(t),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&t(o,r),()=>{i.delete(t)}}invokeOnInitCallbacks(t,n){const s=this.onInitCallbacks.get(n);if(!!s)for(const r of s)try{r(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let s=this.instances.get(t);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:ll(t),options:n}),this.instances.set(t,s),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(s,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,s)}catch{}return s||null}normalizeInstanceIdentifier(t=Xt){return this.component?this.component.multipleInstances?t:Xt:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function ll(e){return e===Xt?void 0:e}function hl(e){return e.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fl{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new ul(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var O;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(O||(O={}));const dl={debug:O.DEBUG,verbose:O.VERBOSE,info:O.INFO,warn:O.WARN,error:O.ERROR,silent:O.SILENT},pl=O.INFO,gl={[O.DEBUG]:"log",[O.VERBOSE]:"log",[O.INFO]:"info",[O.WARN]:"warn",[O.ERROR]:"error"},ml=(e,t,...n)=>{if(t<e.logLevel)return;const s=new Date().toISOString(),r=gl[t];if(r)console[r](`[${s}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class ha{constructor(t){this.name=t,this._logLevel=pl,this._logHandler=ml,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in O))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?dl[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,O.DEBUG,...t),this._logHandler(this,O.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,O.VERBOSE,...t),this._logHandler(this,O.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,O.INFO,...t),this._logHandler(this,O.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,O.WARN,...t),this._logHandler(this,O.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,O.ERROR,...t),this._logHandler(this,O.ERROR,...t)}}const yl=(e,t)=>t.some(n=>e instanceof n);let no,so;function vl(){return no||(no=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function wl(){return so||(so=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const fa=new WeakMap,dr=new WeakMap,da=new WeakMap,Gs=new WeakMap,Qr=new WeakMap;function El(e){const t=new Promise((n,s)=>{const r=()=>{e.removeEventListener("success",i),e.removeEventListener("error",o)},i=()=>{n($t(e.result)),r()},o=()=>{s(e.error),r()};e.addEventListener("success",i),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&fa.set(n,e)}).catch(()=>{}),Qr.set(t,e),t}function bl(e){if(dr.has(e))return;const t=new Promise((n,s)=>{const r=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",o),e.removeEventListener("abort",o)},i=()=>{n(),r()},o=()=>{s(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",o),e.addEventListener("abort",o)});dr.set(e,t)}let pr={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return dr.get(e);if(t==="objectStoreNames")return e.objectStoreNames||da.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return $t(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function Tl(e){pr=e(pr)}function Sl(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const s=e.call(Ws(this),t,...n);return da.set(s,t.sort?t.sort():[t]),$t(s)}:wl().includes(e)?function(...t){return e.apply(Ws(this),t),$t(fa.get(this))}:function(...t){return $t(e.apply(Ws(this),t))}}function Il(e){return typeof e=="function"?Sl(e):(e instanceof IDBTransaction&&bl(e),yl(e,vl())?new Proxy(e,pr):e)}function $t(e){if(e instanceof IDBRequest)return El(e);if(Gs.has(e))return Gs.get(e);const t=Il(e);return t!==e&&(Gs.set(e,t),Qr.set(t,e)),t}const Ws=e=>Qr.get(e);function Cl(e,t,{blocked:n,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(e,t),a=$t(o);return s&&o.addEventListener("upgradeneeded",c=>{s($t(o.result),c.oldVersion,c.newVersion,$t(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{i&&c.addEventListener("close",()=>i()),r&&c.addEventListener("versionchange",()=>r())}).catch(()=>{}),a}const Al=["get","getKey","getAll","getAllKeys","count"],Dl=["put","add","delete","clear"],Qs=new Map;function ro(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(Qs.get(t))return Qs.get(t);const n=t.replace(/FromIndex$/,""),s=t!==n,r=Dl.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||Al.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,r?"readwrite":"readonly");let u=c.store;return s&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),r&&c.done]))[0]};return Qs.set(t,i),i}Tl(e=>({...e,get:(t,n,s)=>ro(t,n)||e.get(t,n,s),has:(t,n)=>!!ro(t,n)||e.has(t,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _l{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Nl(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function Nl(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const gr="@firebase/app",io="0.7.31";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ne=new ha("@firebase/app"),kl="@firebase/app-compat",Rl="@firebase/analytics-compat",Ol="@firebase/analytics",xl="@firebase/app-check-compat",Ml="@firebase/app-check",Ll="@firebase/auth",Pl="@firebase/auth-compat",Fl="@firebase/database",Vl="@firebase/database-compat",$l="@firebase/functions",Ul="@firebase/functions-compat",Bl="@firebase/installations",jl="@firebase/installations-compat",ql="@firebase/messaging",zl="@firebase/messaging-compat",Kl="@firebase/performance",Hl="@firebase/performance-compat",Gl="@firebase/remote-config",Wl="@firebase/remote-config-compat",Ql="@firebase/storage",Xl="@firebase/storage-compat",Yl="@firebase/firestore",Jl="@firebase/firestore-compat",Zl="firebase",th="9.9.3";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pa="[DEFAULT]",eh={[gr]:"fire-core",[kl]:"fire-core-compat",[Ol]:"fire-analytics",[Rl]:"fire-analytics-compat",[Ml]:"fire-app-check",[xl]:"fire-app-check-compat",[Ll]:"fire-auth",[Pl]:"fire-auth-compat",[Fl]:"fire-rtdb",[Vl]:"fire-rtdb-compat",[$l]:"fire-fn",[Ul]:"fire-fn-compat",[Bl]:"fire-iid",[jl]:"fire-iid-compat",[ql]:"fire-fcm",[zl]:"fire-fcm-compat",[Kl]:"fire-perf",[Hl]:"fire-perf-compat",[Gl]:"fire-rc",[Wl]:"fire-rc-compat",[Ql]:"fire-gcs",[Xl]:"fire-gcs-compat",[Yl]:"fire-fst",[Jl]:"fire-fst-compat","fire-js":"fire-js",[Zl]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ye=new Map,mr=new Map;function nh(e,t){try{e.container.addComponent(t)}catch(n){ne.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Hn(e){const t=e.name;if(mr.has(t))return ne.debug(`There were multiple attempts to register component ${t}.`),!1;mr.set(t,e);for(const n of Ye.values())nh(n,e);return!0}function sh(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rh={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},se=new la("app","Firebase",rh);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ih{constructor(t,n,s){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Xe("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw se.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oh=th;function ah(e,t={}){typeof t!="object"&&(t={name:t});const n=Object.assign({name:pa,automaticDataCollectionEnabled:!1},t),s=n.name;if(typeof s!="string"||!s)throw se.create("bad-app-name",{appName:String(s)});const r=Ye.get(s);if(r){if(fr(e,r.options)&&fr(n,r.config))return r;throw se.create("duplicate-app",{appName:s})}const i=new fl(s);for(const a of mr.values())i.addComponent(a);const o=new ih(e,n,i);return Ye.set(s,o),o}function ch(e=pa){const t=Ye.get(e);if(!t)throw se.create("no-app",{appName:e});return t}function uh(){return Array.from(Ye.values())}function ye(e,t,n){var s;let r=(s=eh[e])!==null&&s!==void 0?s:e;n&&(r+=`-${n}`);const i=r.match(/\s|\//),o=t.match(/\s|\//);if(i||o){const a=[`Unable to register library "${r}" with version "${t}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),ne.warn(a.join(" "));return}Hn(new Xe(`${r}-version`,()=>({library:r,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lh="firebase-heartbeat-database",hh=1,Je="firebase-heartbeat-store";let Xs=null;function ga(){return Xs||(Xs=Cl(lh,hh,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(Je)}}}).catch(e=>{throw se.create("idb-open",{originalErrorMessage:e.message})})),Xs}async function fh(e){var t;try{return(await ga()).transaction(Je).objectStore(Je).get(ma(e))}catch(n){if(n instanceof Ne)ne.warn(n.message);else{const s=se.create("idb-get",{originalErrorMessage:(t=n)===null||t===void 0?void 0:t.message});ne.warn(s.message)}}}async function oo(e,t){var n;try{const r=(await ga()).transaction(Je,"readwrite");return await r.objectStore(Je).put(t,ma(e)),r.done}catch(s){if(s instanceof Ne)ne.warn(s.message);else{const r=se.create("idb-set",{originalErrorMessage:(n=s)===null||n===void 0?void 0:n.message});ne.warn(r.message)}}}function ma(e){return`${e.name}!${e.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dh=1024,ph=30*24*60*60*1e3;class gh{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new yh(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=ao();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(r=>r.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const i=new Date(r.date).valueOf();return Date.now()-i<=ph}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const t=ao(),{heartbeatsToSend:n,unsentEntries:s}=mh(this._heartbeatsCache.heartbeats),r=ua(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function ao(){return new Date().toISOString().substring(0,10)}function mh(e,t=dh){const n=[];let s=e.slice();for(const r of e){const i=n.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),co(n)>t){i.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),co(n)>t){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class yh{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return rl()?il().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await fh(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return oo(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return oo(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...t.heartbeats]})}else return}}function co(e){return ua(JSON.stringify({version:2,heartbeats:e})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vh(e){Hn(new Xe("platform-logger",t=>new _l(t),"PRIVATE")),Hn(new Xe("heartbeat",t=>new gh(t),"PRIVATE")),ye(gr,io,e),ye(gr,io,"esm2017"),ye("fire-js","")}vh("");var wh=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},w,Xr=Xr||{},C=wh||self;function Gn(){}function yr(e){var t=typeof e;return t=t!="object"?t:e?Array.isArray(e)?"array":t:"null",t=="array"||t=="object"&&typeof e.length=="number"}function fn(e){var t=typeof e;return t=="object"&&e!=null||t=="function"}function Eh(e){return Object.prototype.hasOwnProperty.call(e,Ys)&&e[Ys]||(e[Ys]=++bh)}var Ys="closure_uid_"+(1e9*Math.random()>>>0),bh=0;function Th(e,t,n){return e.call.apply(e.bind,arguments)}function Sh(e,t,n){if(!e)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var r=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(r,s),e.apply(t,r)}}return function(){return e.apply(t,arguments)}}function et(e,t,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?et=Th:et=Sh,et.apply(null,arguments)}function Rn(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),e.apply(this,s)}}function rt(e,t){function n(){}n.prototype=t.prototype,e.Z=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.Vb=function(s,r,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return t.prototype[r].apply(s,o)}}function Ht(){this.s=this.s,this.o=this.o}var Ih=0;Ht.prototype.s=!1;Ht.prototype.na=function(){!this.s&&(this.s=!0,this.M(),Ih!=0)&&Eh(this)};Ht.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const ya=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if(typeof e=="string")return typeof t!="string"||t.length!=1?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1},va=Array.prototype.forEach?function(e,t,n){Array.prototype.forEach.call(e,t,n)}:function(e,t,n){const s=e.length,r=typeof e=="string"?e.split(""):e;for(let i=0;i<s;i++)i in r&&t.call(n,r[i],i,e)};function Ch(e){t:{var t=yf;const n=e.length,s=typeof e=="string"?e.split(""):e;for(let r=0;r<n;r++)if(r in s&&t.call(void 0,s[r],r,e)){t=r;break t}t=-1}return 0>t?null:typeof e=="string"?e.charAt(t):e[t]}function uo(e){return Array.prototype.concat.apply([],arguments)}function Yr(e){const t=e.length;if(0<t){const n=Array(t);for(let s=0;s<t;s++)n[s]=e[s];return n}return[]}function Wn(e){return/^[\s\xa0]*$/.test(e)}var lo=String.prototype.trim?function(e){return e.trim()}:function(e){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1]};function ut(e,t){return e.indexOf(t)!=-1}function Js(e,t){return e<t?-1:e>t?1:0}var lt;t:{var ho=C.navigator;if(ho){var fo=ho.userAgent;if(fo){lt=fo;break t}}lt=""}function Jr(e,t,n){for(const s in e)t.call(n,e[s],s,e)}function wa(e){const t={};for(const n in e)t[n]=e[n];return t}var po="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Ea(e,t){let n,s;for(let r=1;r<arguments.length;r++){s=arguments[r];for(n in s)e[n]=s[n];for(let i=0;i<po.length;i++)n=po[i],Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n])}}function Zr(e){return Zr[" "](e),e}Zr[" "]=Gn;function Ah(e){var t=Nh;return Object.prototype.hasOwnProperty.call(t,9)?t[9]:t[9]=e(9)}var Dh=ut(lt,"Opera"),Ee=ut(lt,"Trident")||ut(lt,"MSIE"),ba=ut(lt,"Edge"),vr=ba||Ee,Ta=ut(lt,"Gecko")&&!(ut(lt.toLowerCase(),"webkit")&&!ut(lt,"Edge"))&&!(ut(lt,"Trident")||ut(lt,"MSIE"))&&!ut(lt,"Edge"),_h=ut(lt.toLowerCase(),"webkit")&&!ut(lt,"Edge");function Sa(){var e=C.document;return e?e.documentMode:void 0}var Qn;t:{var Zs="",tr=function(){var e=lt;if(Ta)return/rv:([^\);]+)(\)|;)/.exec(e);if(ba)return/Edge\/([\d\.]+)/.exec(e);if(Ee)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e);if(_h)return/WebKit\/(\S+)/.exec(e);if(Dh)return/(?:Version)[ \/]?(\S+)/.exec(e)}();if(tr&&(Zs=tr?tr[1]:""),Ee){var er=Sa();if(er!=null&&er>parseFloat(Zs)){Qn=String(er);break t}}Qn=Zs}var Nh={};function kh(){return Ah(function(){let e=0;const t=lo(String(Qn)).split("."),n=lo("9").split("."),s=Math.max(t.length,n.length);for(let o=0;e==0&&o<s;o++){var r=t[o]||"",i=n[o]||"";do{if(r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r[0].length==0&&i[0].length==0)break;e=Js(r[1].length==0?0:parseInt(r[1],10),i[1].length==0?0:parseInt(i[1],10))||Js(r[2].length==0,i[2].length==0)||Js(r[2],i[2]),r=r[3],i=i[3]}while(e==0)}return 0<=e})}var wr;if(C.document&&Ee){var go=Sa();wr=go||parseInt(Qn,10)||void 0}else wr=void 0;var Rh=wr,Oh=function(){if(!C.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{C.addEventListener("test",Gn,t),C.removeEventListener("test",Gn,t)}catch{}return e}();function ct(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}ct.prototype.h=function(){this.defaultPrevented=!0};function Ze(e,t){if(ct.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,s=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(Ta){t:{try{Zr(t.nodeName);var r=!0;break t}catch{}r=!1}r||(t=null)}}else n=="mouseover"?t=e.fromElement:n=="mouseout"&&(t=e.toElement);this.relatedTarget=t,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=e.clientX!==void 0?e.clientX:e.pageX,this.clientY=e.clientY!==void 0?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType=typeof e.pointerType=="string"?e.pointerType:xh[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&Ze.Z.h.call(this)}}rt(Ze,ct);var xh={2:"touch",3:"pen",4:"mouse"};Ze.prototype.h=function(){Ze.Z.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var dn="closure_listenable_"+(1e6*Math.random()|0),Mh=0;function Lh(e,t,n,s,r){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!s,this.ia=r,this.key=++Mh,this.ca=this.fa=!1}function ls(e){e.ca=!0,e.listener=null,e.proxy=null,e.src=null,e.ia=null}function hs(e){this.src=e,this.g={},this.h=0}hs.prototype.add=function(e,t,n,s,r){var i=e.toString();e=this.g[i],e||(e=this.g[i]=[],this.h++);var o=br(e,t,s,r);return-1<o?(t=e[o],n||(t.fa=!1)):(t=new Lh(t,this.src,i,!!s,r),t.fa=n,e.push(t)),t};function Er(e,t){var n=t.type;if(n in e.g){var s=e.g[n],r=ya(s,t),i;(i=0<=r)&&Array.prototype.splice.call(s,r,1),i&&(ls(t),e.g[n].length==0&&(delete e.g[n],e.h--))}}function br(e,t,n,s){for(var r=0;r<e.length;++r){var i=e[r];if(!i.ca&&i.listener==t&&i.capture==!!n&&i.ia==s)return r}return-1}var ti="closure_lm_"+(1e6*Math.random()|0),nr={};function Ia(e,t,n,s,r){if(s&&s.once)return Aa(e,t,n,s,r);if(Array.isArray(t)){for(var i=0;i<t.length;i++)Ia(e,t[i],n,s,r);return null}return n=si(n),e&&e[dn]?e.N(t,n,fn(s)?!!s.capture:!!s,r):Ca(e,t,n,!1,s,r)}function Ca(e,t,n,s,r,i){if(!t)throw Error("Invalid event type");var o=fn(r)?!!r.capture:!!r,a=ni(e);if(a||(e[ti]=a=new hs(e)),n=a.add(t,n,s,o,i),n.proxy)return n;if(s=Ph(),n.proxy=s,s.src=e,s.listener=n,e.addEventListener)Oh||(r=o),r===void 0&&(r=!1),e.addEventListener(t.toString(),s,r);else if(e.attachEvent)e.attachEvent(_a(t.toString()),s);else if(e.addListener&&e.removeListener)e.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function Ph(){function e(n){return t.call(e.src,e.listener,n)}var t=Fh;return e}function Aa(e,t,n,s,r){if(Array.isArray(t)){for(var i=0;i<t.length;i++)Aa(e,t[i],n,s,r);return null}return n=si(n),e&&e[dn]?e.O(t,n,fn(s)?!!s.capture:!!s,r):Ca(e,t,n,!0,s,r)}function Da(e,t,n,s,r){if(Array.isArray(t))for(var i=0;i<t.length;i++)Da(e,t[i],n,s,r);else s=fn(s)?!!s.capture:!!s,n=si(n),e&&e[dn]?(e=e.i,t=String(t).toString(),t in e.g&&(i=e.g[t],n=br(i,n,s,r),-1<n&&(ls(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete e.g[t],e.h--)))):e&&(e=ni(e))&&(t=e.g[t.toString()],e=-1,t&&(e=br(t,n,s,r)),(n=-1<e?t[e]:null)&&ei(n))}function ei(e){if(typeof e!="number"&&e&&!e.ca){var t=e.src;if(t&&t[dn])Er(t.i,e);else{var n=e.type,s=e.proxy;t.removeEventListener?t.removeEventListener(n,s,e.capture):t.detachEvent?t.detachEvent(_a(n),s):t.addListener&&t.removeListener&&t.removeListener(s),(n=ni(t))?(Er(n,e),n.h==0&&(n.src=null,t[ti]=null)):ls(e)}}}function _a(e){return e in nr?nr[e]:nr[e]="on"+e}function Fh(e,t){if(e.ca)e=!0;else{t=new Ze(t,this);var n=e.listener,s=e.ia||e.src;e.fa&&ei(e),e=n.call(s,t)}return e}function ni(e){return e=e[ti],e instanceof hs?e:null}var sr="__closure_events_fn_"+(1e9*Math.random()>>>0);function si(e){return typeof e=="function"?e:(e[sr]||(e[sr]=function(t){return e.handleEvent(t)}),e[sr])}function J(){Ht.call(this),this.i=new hs(this),this.P=this,this.I=null}rt(J,Ht);J.prototype[dn]=!0;J.prototype.removeEventListener=function(e,t,n,s){Da(this,e,t,n,s)};function nt(e,t){var n,s=e.I;if(s)for(n=[];s;s=s.I)n.push(s);if(e=e.P,s=t.type||t,typeof t=="string")t=new ct(t,e);else if(t instanceof ct)t.target=t.target||e;else{var r=t;t=new ct(s,e),Ea(t,r)}if(r=!0,n)for(var i=n.length-1;0<=i;i--){var o=t.g=n[i];r=On(o,s,!0,t)&&r}if(o=t.g=e,r=On(o,s,!0,t)&&r,r=On(o,s,!1,t)&&r,n)for(i=0;i<n.length;i++)o=t.g=n[i],r=On(o,s,!1,t)&&r}J.prototype.M=function(){if(J.Z.M.call(this),this.i){var e=this.i,t;for(t in e.g){for(var n=e.g[t],s=0;s<n.length;s++)ls(n[s]);delete e.g[t],e.h--}}this.I=null};J.prototype.N=function(e,t,n,s){return this.i.add(String(e),t,!1,n,s)};J.prototype.O=function(e,t,n,s){return this.i.add(String(e),t,!0,n,s)};function On(e,t,n,s){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var r=!0,i=0;i<t.length;++i){var o=t[i];if(o&&!o.ca&&o.capture==n){var a=o.listener,c=o.ia||o.src;o.fa&&Er(e.i,o),r=a.call(c,s)!==!1&&r}}return r&&!s.defaultPrevented}var ri=C.JSON.stringify;function Vh(){var e=ka;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class $h{constructor(){this.h=this.g=null}add(t,n){const s=Na.get();s.set(t,n),this.h?this.h.next=s:this.g=s,this.h=s}}var Na=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}(()=>new Uh,e=>e.reset());class Uh{constructor(){this.next=this.g=this.h=null}set(t,n){this.h=t,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function Bh(e){C.setTimeout(()=>{throw e},0)}function ii(e,t){Tr||jh(),Sr||(Tr(),Sr=!0),ka.add(e,t)}var Tr;function jh(){var e=C.Promise.resolve(void 0);Tr=function(){e.then(qh)}}var Sr=!1,ka=new $h;function qh(){for(var e;e=Vh();){try{e.h.call(e.g)}catch(n){Bh(n)}var t=Na;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}Sr=!1}function fs(e,t){J.call(this),this.h=e||1,this.g=t||C,this.j=et(this.kb,this),this.l=Date.now()}rt(fs,J);w=fs.prototype;w.da=!1;w.S=null;w.kb=function(){if(this.da){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-e):(this.S&&(this.g.clearTimeout(this.S),this.S=null),nt(this,"tick"),this.da&&(oi(this),this.start()))}};w.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function oi(e){e.da=!1,e.S&&(e.g.clearTimeout(e.S),e.S=null)}w.M=function(){fs.Z.M.call(this),oi(this),delete this.g};function ai(e,t,n){if(typeof e=="function")n&&(e=et(e,n));else if(e&&typeof e.handleEvent=="function")e=et(e.handleEvent,e);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:C.setTimeout(e,t||0)}function Ra(e){e.g=ai(()=>{e.g=null,e.i&&(e.i=!1,Ra(e))},e.j);const t=e.h;e.h=null,e.m.apply(null,t)}class zh extends Ht{constructor(t,n){super(),this.m=t,this.j=n,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:Ra(this)}M(){super.M(),this.g&&(C.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function tn(e){Ht.call(this),this.h=e,this.g={}}rt(tn,Ht);var mo=[];function Oa(e,t,n,s){Array.isArray(n)||(n&&(mo[0]=n.toString()),n=mo);for(var r=0;r<n.length;r++){var i=Ia(t,n[r],s||e.handleEvent,!1,e.h||e);if(!i)break;e.g[i.key]=i}}function xa(e){Jr(e.g,function(t,n){this.g.hasOwnProperty(n)&&ei(t)},e),e.g={}}tn.prototype.M=function(){tn.Z.M.call(this),xa(this)};tn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function ds(){this.g=!0}ds.prototype.Aa=function(){this.g=!1};function Kh(e,t,n,s,r,i){e.info(function(){if(e.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");o=2<=h.length&&h[1]=="type"?o+(l+"="+u+"&"):o+(l+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+s+") [attempt "+r+"]: "+t+`
`+n+`
`+o})}function Hh(e,t,n,s,r,i,o){e.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+r+"]: "+t+`
`+n+`
`+i+" "+o})}function ge(e,t,n,s){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+Wh(e,n)+(s?" "+s:"")})}function Gh(e,t){e.info(function(){return"TIMEOUT: "+t})}ds.prototype.info=function(){};function Wh(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n){for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var s=n[e];if(!(2>s.length)){var r=s[1];if(Array.isArray(r)&&!(1>r.length)){var i=r[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<r.length;o++)r[o]=""}}}}return ri(n)}catch{return t}}var ue={},yo=null;function ps(){return yo=yo||new J}ue.Ma="serverreachability";function Ma(e){ct.call(this,ue.Ma,e)}rt(Ma,ct);function en(e){const t=ps();nt(t,new Ma(t))}ue.STAT_EVENT="statevent";function La(e,t){ct.call(this,ue.STAT_EVENT,e),this.stat=t}rt(La,ct);function ht(e){const t=ps();nt(t,new La(t,e))}ue.Na="timingevent";function Pa(e,t){ct.call(this,ue.Na,e),this.size=t}rt(Pa,ct);function pn(e,t){if(typeof e!="function")throw Error("Fn must not be null and must be a function");return C.setTimeout(function(){e()},t)}var gs={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},Fa={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function ci(){}ci.prototype.h=null;function vo(e){return e.h||(e.h=e.i())}function Va(){}var gn={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function ui(){ct.call(this,"d")}rt(ui,ct);function li(){ct.call(this,"c")}rt(li,ct);var Ir;function ms(){}rt(ms,ci);ms.prototype.g=function(){return new XMLHttpRequest};ms.prototype.i=function(){return{}};Ir=new ms;function mn(e,t,n,s){this.l=e,this.j=t,this.m=n,this.X=s||1,this.V=new tn(this),this.P=Qh,e=vr?125:void 0,this.W=new fs(e),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new $a}function $a(){this.i=null,this.g="",this.h=!1}var Qh=45e3,Cr={},Xn={};w=mn.prototype;w.setTimeout=function(e){this.P=e};function Ar(e,t,n){e.K=1,e.v=vs(xt(t)),e.s=n,e.U=!0,Ua(e,null)}function Ua(e,t){e.F=Date.now(),yn(e),e.A=xt(e.v);var n=e.A,s=e.X;Array.isArray(s)||(s=[String(s)]),Ga(n.h,"t",s),e.C=0,n=e.l.H,e.h=new $a,e.g=dc(e.l,n?t:null,!e.s),0<e.O&&(e.L=new zh(et(e.Ia,e,e.g),e.O)),Oa(e.V,e.g,"readystatechange",e.gb),t=e.H?wa(e.H):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ea(e.A,e.u,e.s,t)):(e.u="GET",e.g.ea(e.A,e.u,null,t)),en(),Kh(e.j,e.u,e.A,e.m,e.X,e.s)}w.gb=function(e){e=e.target;const t=this.L;t&&kt(e)==3?t.l():this.Ia(e)};w.Ia=function(e){try{if(e==this.g)t:{const l=kt(this.g);var t=this.g.Da();const h=this.g.ba();if(!(3>l)&&(l!=3||vr||this.g&&(this.h.h||this.g.ga()||To(this.g)))){this.I||l!=4||t==7||(t==8||0>=h?en(3):en(2)),ys(this);var n=this.g.ba();this.N=n;e:if(Ba(this)){var s=To(this.g);e="";var r=s.length,i=kt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Jt(this),je(this);var o="";break e}this.h.i=new C.TextDecoder}for(t=0;t<r;t++)this.h.h=!0,e+=this.h.i.decode(s[t],{stream:i&&t==r-1});s.splice(0,r),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=n==200,Hh(this.j,this.u,this.A,this.m,this.X,l,n),this.i){if(this.$&&!this.J){e:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Wn(a)){var u=a;break e}}u=null}if(n=u)ge(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Dr(this,n);else{this.i=!1,this.o=3,ht(12),Jt(this),je(this);break t}}this.U?(ja(this,l,o),vr&&this.i&&l==3&&(Oa(this.V,this.W,"tick",this.fb),this.W.start())):(ge(this.j,this.m,o,null),Dr(this,o)),l==4&&Jt(this),this.i&&!this.I&&(l==4?uc(this.l,this):(this.i=!1,yn(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,ht(12)):(this.o=0,ht(13)),Jt(this),je(this)}}}catch{}finally{}};function Ba(e){return e.g?e.u=="GET"&&e.K!=2&&e.l.Ba:!1}function ja(e,t,n){let s=!0,r;for(;!e.I&&e.C<n.length;)if(r=Xh(e,n),r==Xn){t==4&&(e.o=4,ht(14),s=!1),ge(e.j,e.m,null,"[Incomplete Response]");break}else if(r==Cr){e.o=4,ht(15),ge(e.j,e.m,n,"[Invalid Chunk]"),s=!1;break}else ge(e.j,e.m,r,null),Dr(e,r);Ba(e)&&r!=Xn&&r!=Cr&&(e.h.g="",e.C=0),t!=4||n.length!=0||e.h.h||(e.o=1,ht(16),s=!1),e.i=e.i&&s,s?0<n.length&&!e.aa&&(e.aa=!0,t=e.l,t.g==e&&t.$&&!t.L&&(t.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),wi(t),t.L=!0,ht(11))):(ge(e.j,e.m,n,"[Invalid Chunked Response]"),Jt(e),je(e))}w.fb=function(){if(this.g){var e=kt(this.g),t=this.g.ga();this.C<t.length&&(ys(this),ja(this,e,t),this.i&&e!=4&&yn(this))}};function Xh(e,t){var n=e.C,s=t.indexOf(`
`,n);return s==-1?Xn:(n=Number(t.substring(n,s)),isNaN(n)?Cr:(s+=1,s+n>t.length?Xn:(t=t.substr(s,n),e.C=s+n,t)))}w.cancel=function(){this.I=!0,Jt(this)};function yn(e){e.Y=Date.now()+e.P,qa(e,e.P)}function qa(e,t){if(e.B!=null)throw Error("WatchDog timer not null");e.B=pn(et(e.eb,e),t)}function ys(e){e.B&&(C.clearTimeout(e.B),e.B=null)}w.eb=function(){this.B=null;const e=Date.now();0<=e-this.Y?(Gh(this.j,this.A),this.K!=2&&(en(),ht(17)),Jt(this),this.o=2,je(this)):qa(this,this.Y-e)};function je(e){e.l.G==0||e.I||uc(e.l,e)}function Jt(e){ys(e);var t=e.L;t&&typeof t.na=="function"&&t.na(),e.L=null,oi(e.W),xa(e.V),e.g&&(t=e.g,e.g=null,t.abort(),t.na())}function Dr(e,t){try{var n=e.l;if(n.G!=0&&(n.g==e||_r(n.i,e))){if(n.I=e.N,!e.J&&_r(n.i,e)&&n.G==3){try{var s=n.Ca.g.parse(t)}catch{s=null}if(Array.isArray(s)&&s.length==3){var r=s;if(r[0]==0){t:if(!n.u){if(n.g)if(n.g.F+3e3<e.F)ts(n),bs(n);else break t;vi(n),ht(18)}}else n.ta=r[1],0<n.ta-n.U&&37500>r[2]&&n.N&&n.A==0&&!n.v&&(n.v=pn(et(n.ab,n),6e3));if(1>=Xa(n.i)&&n.ka){try{n.ka()}catch{}n.ka=void 0}}else Zt(n,11)}else if((e.J||n.g==e)&&ts(n),!Wn(t))for(r=n.Ca.g.parse(t),t=0;t<r.length;t++){let u=r[t];if(n.U=u[0],u=u[1],n.G==2)if(u[0]=="c"){n.J=u[1],n.la=u[2];const l=u[3];l!=null&&(n.ma=l,n.h.info("VER="+n.ma));const h=u[4];h!=null&&(n.za=h,n.h.info("SVER="+n.za));const f=u[5];f!=null&&typeof f=="number"&&0<f&&(s=1.5*f,n.K=s,n.h.info("backChannelRequestTimeoutMs_="+s)),s=n;const p=e.g;if(p){const v=p.g?p.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(v){var i=s.i;!i.g&&(ut(v,"spdy")||ut(v,"quic")||ut(v,"h2"))&&(i.j=i.l,i.g=new Set,i.h&&(di(i,i.h),i.h=null))}if(s.D){const I=p.g?p.g.getResponseHeader("X-HTTP-Session-Id"):null;I&&(s.sa=I,F(s.F,s.D,I))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-e.F,n.h.info("Handshake RTT: "+n.O+"ms")),s=n;var o=e;if(s.oa=fc(s,s.H?s.la:null,s.W),o.J){Ya(s.i,o);var a=o,c=s.K;c&&a.setTimeout(c),a.B&&(ys(a),yn(a)),s.g=o}else ac(s);0<n.l.length&&Ts(n)}else u[0]!="stop"&&u[0]!="close"||Zt(n,7);else n.G==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?Zt(n,7):yi(n):u[0]!="noop"&&n.j&&n.j.wa(u),n.A=0)}}en(4)}catch{}}function Yh(e){if(e.R&&typeof e.R=="function")return e.R();if(typeof e=="string")return e.split("");if(yr(e)){for(var t=[],n=e.length,s=0;s<n;s++)t.push(e[s]);return t}t=[],n=0;for(s in e)t[n++]=e[s];return t}function hi(e,t){if(e.forEach&&typeof e.forEach=="function")e.forEach(t,void 0);else if(yr(e)||typeof e=="string")va(e,t,void 0);else{if(e.T&&typeof e.T=="function")var n=e.T();else if(e.R&&typeof e.R=="function")n=void 0;else if(yr(e)||typeof e=="string"){n=[];for(var s=e.length,r=0;r<s;r++)n.push(r)}else for(r in n=[],s=0,e)n[s++]=r;s=Yh(e),r=s.length;for(var i=0;i<r;i++)t.call(void 0,s[i],n&&n[i],e)}}function ke(e,t){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var s=0;s<n;s+=2)this.set(arguments[s],arguments[s+1])}else if(e)if(e instanceof ke)for(n=e.T(),s=0;s<n.length;s++)this.set(n[s],e.get(n[s]));else for(s in e)this.set(s,e[s])}w=ke.prototype;w.R=function(){fi(this);for(var e=[],t=0;t<this.g.length;t++)e.push(this.h[this.g[t]]);return e};w.T=function(){return fi(this),this.g.concat()};function fi(e){if(e.i!=e.g.length){for(var t=0,n=0;t<e.g.length;){var s=e.g[t];re(e.h,s)&&(e.g[n++]=s),t++}e.g.length=n}if(e.i!=e.g.length){var r={};for(n=t=0;t<e.g.length;)s=e.g[t],re(r,s)||(e.g[n++]=s,r[s]=1),t++;e.g.length=n}}w.get=function(e,t){return re(this.h,e)?this.h[e]:t};w.set=function(e,t){re(this.h,e)||(this.i++,this.g.push(e)),this.h[e]=t};w.forEach=function(e,t){for(var n=this.T(),s=0;s<n.length;s++){var r=n[s],i=this.get(r);e.call(t,i,r,this)}};function re(e,t){return Object.prototype.hasOwnProperty.call(e,t)}var za=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function Jh(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var s=e[n].indexOf("="),r=null;if(0<=s){var i=e[n].substring(0,s);r=e[n].substring(s+1)}else i=e[n];t(i,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function ie(e,t){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,e instanceof ie){this.g=t!==void 0?t:e.g,Yn(this,e.j),this.s=e.s,Jn(this,e.i),Zn(this,e.m),this.l=e.l,t=e.h;var n=new nn;n.i=t.i,t.g&&(n.g=new ke(t.g),n.h=t.h),wo(this,n),this.o=e.o}else e&&(n=String(e).match(za))?(this.g=!!t,Yn(this,n[1]||"",!0),this.s=qe(n[2]||""),Jn(this,n[3]||"",!0),Zn(this,n[4]),this.l=qe(n[5]||"",!0),wo(this,n[6]||"",!0),this.o=qe(n[7]||"")):(this.g=!!t,this.h=new nn(null,this.g))}ie.prototype.toString=function(){var e=[],t=this.j;t&&e.push(Ve(t,Eo,!0),":");var n=this.i;return(n||t=="file")&&(e.push("//"),(t=this.s)&&e.push(Ve(t,Eo,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&e.push(":",String(n))),(n=this.l)&&(this.i&&n.charAt(0)!="/"&&e.push("/"),e.push(Ve(n,n.charAt(0)=="/"?sf:nf,!0))),(n=this.h.toString())&&e.push("?",n),(n=this.o)&&e.push("#",Ve(n,of)),e.join("")};function xt(e){return new ie(e)}function Yn(e,t,n){e.j=n?qe(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function Jn(e,t,n){e.i=n?qe(t,!0):t}function Zn(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function wo(e,t,n){t instanceof nn?(e.h=t,af(e.h,e.g)):(n||(t=Ve(t,rf)),e.h=new nn(t,e.g))}function F(e,t,n){e.h.set(t,n)}function vs(e){return F(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function Zh(e){return e instanceof ie?xt(e):new ie(e,void 0)}function tf(e,t,n,s){var r=new ie(null,void 0);return e&&Yn(r,e),t&&Jn(r,t),n&&Zn(r,n),s&&(r.l=s),r}function qe(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function Ve(e,t,n){return typeof e=="string"?(e=encodeURI(e).replace(t,ef),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function ef(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(e&15).toString(16)}var Eo=/[#\/\?@]/g,nf=/[#\?:]/g,sf=/[#\?]/g,rf=/[#\?@]/g,of=/#/g;function nn(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function Gt(e){e.g||(e.g=new ke,e.h=0,e.i&&Jh(e.i,function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)}))}w=nn.prototype;w.add=function(e,t){Gt(this),this.i=null,e=Re(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this};function Ka(e,t){Gt(e),t=Re(e,t),re(e.g.h,t)&&(e.i=null,e.h-=e.g.get(t).length,e=e.g,re(e.h,t)&&(delete e.h[t],e.i--,e.g.length>2*e.i&&fi(e)))}function Ha(e,t){return Gt(e),t=Re(e,t),re(e.g.h,t)}w.forEach=function(e,t){Gt(this),this.g.forEach(function(n,s){va(n,function(r){e.call(t,r,s,this)},this)},this)};w.T=function(){Gt(this);for(var e=this.g.R(),t=this.g.T(),n=[],s=0;s<t.length;s++)for(var r=e[s],i=0;i<r.length;i++)n.push(t[s]);return n};w.R=function(e){Gt(this);var t=[];if(typeof e=="string")Ha(this,e)&&(t=uo(t,this.g.get(Re(this,e))));else{e=this.g.R();for(var n=0;n<e.length;n++)t=uo(t,e[n])}return t};w.set=function(e,t){return Gt(this),this.i=null,e=Re(this,e),Ha(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this};w.get=function(e,t){return e?(e=this.R(e),0<e.length?String(e[0]):t):t};function Ga(e,t,n){Ka(e,t),0<n.length&&(e.i=null,e.g.set(Re(e,t),Yr(n)),e.h+=n.length)}w.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var e=[],t=this.g.T(),n=0;n<t.length;n++){var s=t[n],r=encodeURIComponent(String(s));s=this.R(s);for(var i=0;i<s.length;i++){var o=r;s[i]!==""&&(o+="="+encodeURIComponent(String(s[i]))),e.push(o)}}return this.i=e.join("&")};function Re(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function af(e,t){t&&!e.j&&(Gt(e),e.i=null,e.g.forEach(function(n,s){var r=s.toLowerCase();s!=r&&(Ka(this,s),Ga(this,r,n))},e)),e.j=t}var cf=class{constructor(e,t){this.h=e,this.g=t}};function Wa(e){this.l=e||uf,C.PerformanceNavigationTiming?(e=C.performance.getEntriesByType("navigation"),e=0<e.length&&(e[0].nextHopProtocol=="hq"||e[0].nextHopProtocol=="h2")):e=!!(C.g&&C.g.Ea&&C.g.Ea()&&C.g.Ea().Zb),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var uf=10;function Qa(e){return e.h?!0:e.g?e.g.size>=e.j:!1}function Xa(e){return e.h?1:e.g?e.g.size:0}function _r(e,t){return e.h?e.h==t:e.g?e.g.has(t):!1}function di(e,t){e.g?e.g.add(t):e.h=t}function Ya(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}Wa.prototype.cancel=function(){if(this.i=Ja(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const e of this.g.values())e.cancel();this.g.clear()}};function Ja(e){if(e.h!=null)return e.i.concat(e.h.D);if(e.g!=null&&e.g.size!==0){let t=e.i;for(const n of e.g.values())t=t.concat(n.D);return t}return Yr(e.i)}function pi(){}pi.prototype.stringify=function(e){return C.JSON.stringify(e,void 0)};pi.prototype.parse=function(e){return C.JSON.parse(e,void 0)};function lf(){this.g=new pi}function hf(e,t,n){const s=n||"";try{hi(e,function(r,i){let o=r;fn(r)&&(o=ri(r)),t.push(s+i+"="+encodeURIComponent(o))})}catch(r){throw t.push(s+"type="+encodeURIComponent("_badmap")),r}}function ff(e,t){const n=new ds;if(C.Image){const s=new Image;s.onload=Rn(xn,n,s,"TestLoadImage: loaded",!0,t),s.onerror=Rn(xn,n,s,"TestLoadImage: error",!1,t),s.onabort=Rn(xn,n,s,"TestLoadImage: abort",!1,t),s.ontimeout=Rn(xn,n,s,"TestLoadImage: timeout",!1,t),C.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=e}else t(!1)}function xn(e,t,n,s,r){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,r(s)}catch{}}function vn(e){this.l=e.$b||null,this.j=e.ib||!1}rt(vn,ci);vn.prototype.g=function(){return new ws(this.l,this.j)};vn.prototype.i=function(e){return function(){return e}}({});function ws(e,t){J.call(this),this.D=e,this.u=t,this.m=void 0,this.readyState=gi,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}rt(ws,J);var gi=0;w=ws.prototype;w.open=function(e,t){if(this.readyState!=gi)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,sn(this)};w.send=function(e){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.D||C).fetch(new Request(this.B,t)).then(this.Va.bind(this),this.ha.bind(this))};w.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,wn(this)),this.readyState=gi};w.Va=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,sn(this)),this.g&&(this.readyState=3,sn(this),this.g)))if(this.responseType==="arraybuffer")e.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(typeof C.ReadableStream<"u"&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Za(this)}else e.text().then(this.Ua.bind(this),this.ha.bind(this))};function Za(e){e.j.read().then(e.Sa.bind(e)).catch(e.ha.bind(e))}w.Sa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?wn(this):sn(this),this.readyState==3&&Za(this)}};w.Ua=function(e){this.g&&(this.response=this.responseText=e,wn(this))};w.Ta=function(e){this.g&&(this.response=e,wn(this))};w.ha=function(){this.g&&wn(this)};function wn(e){e.readyState=4,e.l=null,e.j=null,e.A=null,sn(e)}w.setRequestHeader=function(e,t){this.v.append(e,t)};w.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""};w.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join(`\r
`)};function sn(e){e.onreadystatechange&&e.onreadystatechange.call(e)}Object.defineProperty(ws.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(e){this.m=e?"include":"same-origin"}});var df=C.JSON.parse;function K(e){J.call(this),this.headers=new ke,this.u=e||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=tc,this.K=this.L=!1}rt(K,J);var tc="",pf=/^https?$/i,gf=["POST","PUT"];w=K.prototype;w.ea=function(e,t,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+e);t=t?t.toUpperCase():"GET",this.H=e,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Ir.g(),this.C=this.u?vo(this.u):vo(Ir),this.g.onreadystatechange=et(this.Fa,this);try{this.F=!0,this.g.open(t,String(e),!0),this.F=!1}catch(i){bo(this,i);return}e=n||"";const r=new ke(this.headers);s&&hi(s,function(i,o){r.set(o,i)}),s=Ch(r.T()),n=C.FormData&&e instanceof C.FormData,!(0<=ya(gf,t))||s||n||r.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),r.forEach(function(i,o){this.g.setRequestHeader(o,i)},this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{sc(this),0<this.B&&((this.K=mf(this.g))?(this.g.timeout=this.B,this.g.ontimeout=et(this.pa,this)):this.A=ai(this.pa,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(i){bo(this,i)}};function mf(e){return Ee&&kh()&&typeof e.timeout=="number"&&e.ontimeout!==void 0}function yf(e){return e.toLowerCase()=="content-type"}w.pa=function(){typeof Xr<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,nt(this,"timeout"),this.abort(8))};function bo(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,ec(e),Es(e)}function ec(e){e.D||(e.D=!0,nt(e,"complete"),nt(e,"error"))}w.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,nt(this,"complete"),nt(this,"abort"),Es(this))};w.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Es(this,!0)),K.Z.M.call(this)};w.Fa=function(){this.s||(this.F||this.v||this.l?nc(this):this.cb())};w.cb=function(){nc(this)};function nc(e){if(e.h&&typeof Xr<"u"&&(!e.C[1]||kt(e)!=4||e.ba()!=2)){if(e.v&&kt(e)==4)ai(e.Fa,0,e);else if(nt(e,"readystatechange"),kt(e)==4){e.h=!1;try{const a=e.ba();t:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break t;default:t=!1}var n;if(!(n=t)){var s;if(s=a===0){var r=String(e.H).match(za)[1]||null;if(!r&&C.self&&C.self.location){var i=C.self.location.protocol;r=i.substr(0,i.length-1)}s=!pf.test(r?r.toLowerCase():"")}n=s}if(n)nt(e,"complete"),nt(e,"success");else{e.m=6;try{var o=2<kt(e)?e.g.statusText:""}catch{o=""}e.j=o+" ["+e.ba()+"]",ec(e)}}finally{Es(e)}}}}function Es(e,t){if(e.g){sc(e);const n=e.g,s=e.C[0]?Gn:null;e.g=null,e.C=null,t||nt(e,"ready");try{n.onreadystatechange=s}catch{}}}function sc(e){e.g&&e.K&&(e.g.ontimeout=null),e.A&&(C.clearTimeout(e.A),e.A=null)}function kt(e){return e.g?e.g.readyState:0}w.ba=function(){try{return 2<kt(this)?this.g.status:-1}catch{return-1}};w.ga=function(){try{return this.g?this.g.responseText:""}catch{return""}};w.Qa=function(e){if(this.g){var t=this.g.responseText;return e&&t.indexOf(e)==0&&(t=t.substring(e.length)),df(t)}};function To(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.J){case tc:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch{return null}}w.Da=function(){return this.m};w.La=function(){return typeof this.j=="string"?this.j:String(this.j)};function vf(e){let t="";return Jr(e,function(n,s){t+=s,t+=":",t+=n,t+=`\r
`}),t}function mi(e,t,n){t:{for(s in n){var s=!1;break t}s=!0}s||(n=vf(n),typeof e=="string"?n!=null&&encodeURIComponent(String(n)):F(e,t,n))}function Pe(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function rc(e){this.za=0,this.l=[],this.h=new ds,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=Pe("failFast",!1,e),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=Pe("baseRetryDelayMs",5e3,e),this.$a=Pe("retryDelaySeedMs",1e4,e),this.Ya=Pe("forwardChannelMaxRetries",2,e),this.ra=Pe("forwardChannelRequestTimeoutMs",2e4,e),this.qa=e&&e.xmlHttpFactory||void 0,this.Ba=e&&e.Yb||!1,this.K=void 0,this.H=e&&e.supportsCrossDomainXhr||!1,this.J="",this.i=new Wa(e&&e.concurrentRequestLimit),this.Ca=new lf,this.ja=e&&e.fastHandshake||!1,this.Ra=e&&e.Wb||!1,e&&e.Aa&&this.h.Aa(),e&&e.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&e&&e.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!e||e.Xb!==!1}w=rc.prototype;w.ma=8;w.G=1;function yi(e){if(ic(e),e.G==3){var t=e.V++,n=xt(e.F);F(n,"SID",e.J),F(n,"RID",t),F(n,"TYPE","terminate"),En(e,n),t=new mn(e,e.h,t,void 0),t.K=2,t.v=vs(xt(n)),n=!1,C.navigator&&C.navigator.sendBeacon&&(n=C.navigator.sendBeacon(t.v.toString(),"")),!n&&C.Image&&(new Image().src=t.v,n=!0),n||(t.g=dc(t.l,null),t.g.ea(t.v)),t.F=Date.now(),yn(t)}hc(e)}w.hb=function(e){try{this.h.info("Origin Trials invoked: "+e)}catch{}};function bs(e){e.g&&(wi(e),e.g.cancel(),e.g=null)}function ic(e){bs(e),e.u&&(C.clearTimeout(e.u),e.u=null),ts(e),e.i.cancel(),e.m&&(typeof e.m=="number"&&C.clearTimeout(e.m),e.m=null)}function rr(e,t){e.l.push(new cf(e.Za++,t)),e.G==3&&Ts(e)}function Ts(e){Qa(e.i)||e.m||(e.m=!0,ii(e.Ha,e),e.C=0)}function wf(e,t){return Xa(e.i)>=e.i.j-(e.m?1:0)?!1:e.m?(e.l=t.D.concat(e.l),!0):e.G==1||e.G==2||e.C>=(e.Xa?0:e.Ya)?!1:(e.m=pn(et(e.Ha,e,t),lc(e,e.C)),e.C++,!0)}w.Ha=function(e){if(this.m)if(this.m=null,this.G==1){if(!e){this.V=Math.floor(1e5*Math.random()),e=this.V++;const r=new mn(this,this.h,e,void 0);let i=this.s;if(this.P&&(i?(i=wa(i),Ea(i,this.P)):i=this.P),this.o===null&&(r.H=i),this.ja)t:{for(var t=0,n=0;n<this.l.length;n++){e:{var s=this.l[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break e}s=void 0}if(s===void 0)break;if(t+=s,4096<t){t=n;break t}if(t===4096||n===this.l.length-1){t=n+1;break t}}t=1e3}else t=1e3;t=oc(this,r,t),n=xt(this.F),F(n,"RID",e),F(n,"CVER",22),this.D&&F(n,"X-HTTP-Session-Id",this.D),En(this,n),this.o&&i&&mi(n,this.o,i),di(this.i,r),this.Ra&&F(n,"TYPE","init"),this.ja?(F(n,"$req",t),F(n,"SID","null"),r.$=!0,Ar(r,n,null)):Ar(r,n,t),this.G=2}}else this.G==3&&(e?So(this,e):this.l.length==0||Qa(this.i)||So(this))};function So(e,t){var n;t?n=t.m:n=e.V++;const s=xt(e.F);F(s,"SID",e.J),F(s,"RID",n),F(s,"AID",e.U),En(e,s),e.o&&e.s&&mi(s,e.o,e.s),n=new mn(e,e.h,n,e.C+1),e.o===null&&(n.H=e.s),t&&(e.l=t.D.concat(e.l)),t=oc(e,n,1e3),n.setTimeout(Math.round(.5*e.ra)+Math.round(.5*e.ra*Math.random())),di(e.i,n),Ar(n,s,t)}function En(e,t){e.j&&hi({},function(n,s){F(t,s,n)})}function oc(e,t,n){n=Math.min(e.l.length,n);var s=e.j?et(e.j.Oa,e.j,e):null;t:{var r=e.l;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=r[0].h,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<n;c++){let u=r[c].h;const l=r[c].g;if(u-=i,0>u)i=Math.max(0,r[c].h-100),a=!1;else try{hf(l,o,"req"+u+"_")}catch{s&&s(l)}}if(a){s=o.join("&");break t}}}return e=e.l.splice(0,n),t.D=e,s}function ac(e){e.g||e.u||(e.Y=1,ii(e.Ga,e),e.A=0)}function vi(e){return e.g||e.u||3<=e.A?!1:(e.Y++,e.u=pn(et(e.Ga,e),lc(e,e.A)),e.A++,!0)}w.Ga=function(){if(this.u=null,cc(this),this.$&&!(this.L||this.g==null||0>=this.O)){var e=2*this.O;this.h.info("BP detection timer enabled: "+e),this.B=pn(et(this.bb,this),e)}};w.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,ht(10),bs(this),cc(this))};function wi(e){e.B!=null&&(C.clearTimeout(e.B),e.B=null)}function cc(e){e.g=new mn(e,e.h,"rpc",e.Y),e.o===null&&(e.g.H=e.s),e.g.O=0;var t=xt(e.oa);F(t,"RID","rpc"),F(t,"SID",e.J),F(t,"CI",e.N?"0":"1"),F(t,"AID",e.U),En(e,t),F(t,"TYPE","xmlhttp"),e.o&&e.s&&mi(t,e.o,e.s),e.K&&e.g.setTimeout(e.K);var n=e.g;e=e.la,n.K=1,n.v=vs(xt(t)),n.s=null,n.U=!0,Ua(n,e)}w.ab=function(){this.v!=null&&(this.v=null,bs(this),vi(this),ht(19))};function ts(e){e.v!=null&&(C.clearTimeout(e.v),e.v=null)}function uc(e,t){var n=null;if(e.g==t){ts(e),wi(e),e.g=null;var s=2}else if(_r(e.i,t))n=t.D,Ya(e.i,t),s=1;else return;if(e.I=t.N,e.G!=0){if(t.i)if(s==1){n=t.s?t.s.length:0,t=Date.now()-t.F;var r=e.C;s=ps(),nt(s,new Pa(s,n)),Ts(e)}else ac(e);else if(r=t.o,r==3||r==0&&0<e.I||!(s==1&&wf(e,t)||s==2&&vi(e)))switch(n&&0<n.length&&(t=e.i,t.i=t.i.concat(n)),r){case 1:Zt(e,5);break;case 4:Zt(e,10);break;case 3:Zt(e,6);break;default:Zt(e,2)}}}function lc(e,t){let n=e.Pa+Math.floor(Math.random()*e.$a);return e.j||(n*=2),n*t}function Zt(e,t){if(e.h.info("Error code "+t),t==2){var n=null;e.j&&(n=null);var s=et(e.jb,e);n||(n=new ie("//www.google.com/images/cleardot.gif"),C.location&&C.location.protocol=="http"||Yn(n,"https"),vs(n)),ff(n.toString(),s)}else ht(2);e.G=0,e.j&&e.j.va(t),hc(e),ic(e)}w.jb=function(e){e?(this.h.info("Successfully pinged google.com"),ht(2)):(this.h.info("Failed to ping google.com"),ht(1))};function hc(e){e.G=0,e.I=-1,e.j&&((Ja(e.i).length!=0||e.l.length!=0)&&(e.i.i.length=0,Yr(e.l),e.l.length=0),e.j.ua())}function fc(e,t,n){let s=Zh(n);if(s.i!="")t&&Jn(s,t+"."+s.i),Zn(s,s.m);else{const r=C.location;s=tf(r.protocol,t?t+"."+r.hostname:r.hostname,+r.port,n)}return e.aa&&Jr(e.aa,function(r,i){F(s,i,r)}),t=e.D,n=e.sa,t&&n&&F(s,t,n),F(s,"VER",e.ma),En(e,s),s}function dc(e,t,n){if(t&&!e.H)throw Error("Can't create secondary domain capable XhrIo object.");return t=n&&e.Ba&&!e.qa?new K(new vn({ib:!0})):new K(e.qa),t.L=e.H,t}function pc(){}w=pc.prototype;w.xa=function(){};w.wa=function(){};w.va=function(){};w.ua=function(){};w.Oa=function(){};function es(){if(Ee&&!(10<=Number(Rh)))throw Error("Environmental error: no available transport.")}es.prototype.g=function(e,t){return new mt(e,t)};function mt(e,t){J.call(this),this.g=new rc(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.ya&&(e?e["X-WebChannel-Client-Profile"]=t.ya:e={"X-WebChannel-Client-Profile":t.ya}),this.g.P=e,(e=t&&t.httpHeadersOverwriteParam)&&!Wn(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!Wn(t)&&(this.g.D=t,e=this.h,e!==null&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new Oe(this)}rt(mt,J);mt.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var e=this.g,t=this.l,n=this.h||void 0;e.Wa&&(e.h.info("Origin Trials enabled."),ii(et(e.hb,e,t))),ht(0),e.W=t,e.aa=n||{},e.N=e.X,e.F=fc(e,null,e.W),Ts(e)};mt.prototype.close=function(){yi(this.g)};mt.prototype.u=function(e){if(typeof e=="string"){var t={};t.__data__=e,rr(this.g,t)}else this.v?(t={},t.__data__=ri(e),rr(this.g,t)):rr(this.g,e)};mt.prototype.M=function(){this.g.j=null,delete this.j,yi(this.g),delete this.g,mt.Z.M.call(this)};function gc(e){ui.call(this);var t=e.__sm__;if(t){t:{for(const n in t){e=n;break t}e=void 0}(this.i=e)&&(e=this.i,t=t!==null&&e in t?t[e]:void 0),this.data=t}else this.data=e}rt(gc,ui);function mc(){li.call(this),this.status=1}rt(mc,li);function Oe(e){this.g=e}rt(Oe,pc);Oe.prototype.xa=function(){nt(this.g,"a")};Oe.prototype.wa=function(e){nt(this.g,new gc(e))};Oe.prototype.va=function(e){nt(this.g,new mc)};Oe.prototype.ua=function(){nt(this.g,"b")};es.prototype.createWebChannel=es.prototype.g;mt.prototype.send=mt.prototype.u;mt.prototype.open=mt.prototype.m;mt.prototype.close=mt.prototype.close;gs.NO_ERROR=0;gs.TIMEOUT=8;gs.HTTP_ERROR=6;Fa.COMPLETE="complete";Va.EventType=gn;gn.OPEN="a";gn.CLOSE="b";gn.ERROR="c";gn.MESSAGE="d";J.prototype.listen=J.prototype.N;K.prototype.listenOnce=K.prototype.O;K.prototype.getLastError=K.prototype.La;K.prototype.getLastErrorCode=K.prototype.Da;K.prototype.getStatus=K.prototype.ba;K.prototype.getResponseJson=K.prototype.Qa;K.prototype.getResponseText=K.prototype.ga;K.prototype.send=K.prototype.ea;var Ef=function(){return new es},bf=function(){return ps()},ir=gs,Tf=Fa,Sf=ue,Io={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},If=vn,Mn=Va,Cf=K;const Co="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}dt.UNAUTHENTICATED=new dt(null),dt.GOOGLE_CREDENTIALS=new dt("google-credentials-uid"),dt.FIRST_PARTY=new dt("first-party-uid"),dt.MOCK_USER=new dt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let xe="9.9.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oe=new ha("@firebase/firestore");function Ao(){return oe.logLevel}function b(e,...t){if(oe.logLevel<=O.DEBUG){const n=t.map(Ei);oe.debug(`Firestore (${xe}): ${e}`,...n)}}function Mt(e,...t){if(oe.logLevel<=O.ERROR){const n=t.map(Ei);oe.error(`Firestore (${xe}): ${e}`,...n)}}function Do(e,...t){if(oe.logLevel<=O.WARN){const n=t.map(Ei);oe.warn(`Firestore (${xe}): ${e}`,...n)}}function Ei(e){if(typeof e=="string")return e;try{return t=e,JSON.stringify(t)}catch{return e}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A(e="Unexpected state"){const t=`FIRESTORE (${xe}) INTERNAL ASSERTION FAILED: `+e;throw Mt(t),new Error(t)}function L(e,t){e||A()}function D(e,t){return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class S extends Ne{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Af{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Df{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(dt.UNAUTHENTICATED))}shutdown(){}}class _f{constructor(t){this.t=t,this.currentUser=dt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){let s=this.i;const r=c=>this.i!==s?(s=this.i,n(c)):Promise.resolve();let i=new Ut;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Ut,t.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const c=i;t.enqueueRetryable(async()=>{await c.promise,await r(this.currentUser)})},a=c=>{b("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(b("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Ut)}},0),o()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==t?(b("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(L(typeof s.accessToken=="string"),new Af(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return L(t===null||typeof t=="string"),new dt(t)}}class Nf{constructor(t,n,s){this.type="FirstParty",this.user=dt.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",n);const r=t.auth.getAuthHeaderValueForFirstParty([]);r&&this.headers.set("Authorization",r),s&&this.headers.set("X-Goog-Iam-Authorization-Token",s)}}class kf{constructor(t,n,s){this.h=t,this.l=n,this.m=s}getToken(){return Promise.resolve(new Nf(this.h,this.l,this.m))}start(t,n){t.enqueueRetryable(()=>n(dt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Rf{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Of{constructor(t){this.g=t,this.forceRefresh=!1,this.appCheck=null,this.p=null}start(t,n){const s=i=>{i.error!=null&&b("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.p;return this.p=i.token,b("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{t.enqueueRetryable(()=>s(i))};const r=i=>{b("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.g.onInit(i=>r(i)),setTimeout(()=>{if(!this.appCheck){const i=this.g.getImmediate({optional:!0});i?r(i):b("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(L(typeof n.token=="string"),this.p=n.token,new Rf(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xf(e){const t=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let s=0;s<e;s++)n[s]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yc{static I(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/t.length)*t.length;let s="";for(;s.length<20;){const r=xf(40);for(let i=0;i<r.length;++i)s.length<20&&r[i]<n&&(s+=t.charAt(r[i]%t.length))}return s}}function x(e,t){return e<t?-1:e>t?1:0}function be(e,t,n){return e.length===t.length&&e.every((s,r)=>n(s,t[r]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G{constructor(t,n){if(this.seconds=t,this.nanoseconds=n,n<0)throw new S(g.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new S(g.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(t<-62135596800)throw new S(g.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new S(g.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return G.fromMillis(Date.now())}static fromDate(t){return G.fromMillis(t.getTime())}static fromMillis(t){const n=Math.floor(t/1e3),s=Math.floor(1e6*(t-1e3*n));return new G(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?x(this.nanoseconds,t.nanoseconds):x(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N{constructor(t){this.timestamp=t}static fromTimestamp(t){return new N(t)}static min(){return new N(new G(0,0))}static max(){return new N(new G(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rn{constructor(t,n,s){n===void 0?n=0:n>t.length&&A(),s===void 0?s=t.length-n:s>t.length-n&&A(),this.segments=t,this.offset=n,this.len=s}get length(){return this.len}isEqual(t){return rn.comparator(this,t)===0}child(t){const n=this.segments.slice(this.offset,this.limit());return t instanceof rn?t.forEach(s=>{n.push(s)}):n.push(t),this.construct(n)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}forEach(t){for(let n=this.offset,s=this.limit();n<s;n++)t(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,n){const s=Math.min(t.length,n.length);for(let r=0;r<s;r++){const i=t.get(r),o=n.get(r);if(i<o)return-1;if(i>o)return 1}return t.length<n.length?-1:t.length>n.length?1:0}}class V extends rn{construct(t,n,s){return new V(t,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const n=[];for(const s of t){if(s.indexOf("//")>=0)throw new S(g.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(r=>r.length>0))}return new V(n)}static emptyPath(){return new V([])}}const Mf=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class at extends rn{construct(t,n,s){return new at(t,n,s)}static isValidIdentifier(t){return Mf.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),at.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new at(["__name__"])}static fromServerFormat(t){const n=[];let s="",r=0;const i=()=>{if(s.length===0)throw new S(g.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;r<t.length;){const a=t[r];if(a==="\\"){if(r+1===t.length)throw new S(g.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const c=t[r+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new S(g.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);s+=c,r+=2}else a==="`"?(o=!o,r++):a!=="."||o?(s+=a,r++):(i(),r++)}if(i(),o)throw new S(g.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new at(n)}static emptyPath(){return new at([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T{constructor(t){this.path=t}static fromPath(t){return new T(V.fromString(t))}static fromName(t){return new T(V.fromString(t).popFirst(5))}static empty(){return new T(V.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&V.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,n){return V.comparator(t.path,n.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new T(new V(t.slice()))}}function Lf(e,t){const n=e.toTimestamp().seconds,s=e.toTimestamp().nanoseconds+1,r=N.fromTimestamp(s===1e9?new G(n+1,0):new G(n,s));return new qt(r,T.empty(),t)}function Pf(e){return new qt(e.readTime,e.key,-1)}class qt{constructor(t,n,s){this.readTime=t,this.documentKey=n,this.largestBatchId=s}static min(){return new qt(N.min(),T.empty(),-1)}static max(){return new qt(N.max(),T.empty(),-1)}}function Ff(e,t){let n=e.readTime.compareTo(t.readTime);return n!==0?n:(n=T.comparator(e.documentKey,t.documentKey),n!==0?n:x(e.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vf="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class $f{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bn(e){if(e.code!==g.FAILED_PRECONDITION||e.message!==Vf)throw e;b("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(t){return this.next(void 0,t)}next(t,n){return this.callbackAttached&&A(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(t,this.result):new m((s,r)=>{this.nextCallback=i=>{this.wrapSuccess(t,i).next(s,r)},this.catchCallback=i=>{this.wrapFailure(n,i).next(s,r)}})}toPromise(){return new Promise((t,n)=>{this.next(t,n)})}wrapUserFunction(t){try{const n=t();return n instanceof m?n:m.resolve(n)}catch(n){return m.reject(n)}}wrapSuccess(t,n){return t?this.wrapUserFunction(()=>t(n)):m.resolve(n)}wrapFailure(t,n){return t?this.wrapUserFunction(()=>t(n)):m.reject(n)}static resolve(t){return new m((n,s)=>{n(t)})}static reject(t){return new m((n,s)=>{s(t)})}static waitFor(t){return new m((n,s)=>{let r=0,i=0,o=!1;t.forEach(a=>{++r,a.next(()=>{++i,o&&i===r&&n()},c=>s(c))}),o=!0,i===r&&n()})}static or(t){let n=m.resolve(!1);for(const s of t)n=n.next(r=>r?m.resolve(r):s());return n}static forEach(t,n){const s=[];return t.forEach((r,i)=>{s.push(n.call(this,r,i))}),this.waitFor(s)}static mapArray(t,n){return new m((s,r)=>{const i=t.length,o=new Array(i);let a=0;for(let c=0;c<i;c++){const u=c;n(t[u]).next(l=>{o[u]=l,++a,a===i&&s(o)},l=>r(l))}})}static doWhile(t,n){return new m((s,r)=>{const i=()=>{t()===!0?n().next(()=>{i()},r):s()};i()})}}function Tn(e){return e.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bi{constructor(t,n){this.previousValue=t,n&&(n.sequenceNumberHandler=s=>this.it(s),this.rt=s=>n.writeSequenceNumber(s))}it(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.rt&&this.rt(t),t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _o(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function le(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function vc(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */bi.ot=-1;class Q{constructor(t,n){this.comparator=t,this.root=n||Z.EMPTY}insert(t,n){return new Q(this.comparator,this.root.insert(t,n,this.comparator).copy(null,null,Z.BLACK,null,null))}remove(t){return new Q(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Z.BLACK,null,null))}get(t){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(t,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(t){let n=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(t,s.key);if(r===0)return n+s.left.size;r<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((n,s)=>(t(n,s),!1))}toString(){const t=[];return this.inorderTraversal((n,s)=>(t.push(`${n}:${s}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Ln(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Ln(this.root,t,this.comparator,!1)}getReverseIterator(){return new Ln(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Ln(this.root,t,this.comparator,!0)}}class Ln{constructor(t,n,s,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=n?s(t.key,n):1,n&&r&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(i===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const n={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class Z{constructor(t,n,s,r,i){this.key=t,this.value=n,this.color=s!=null?s:Z.RED,this.left=r!=null?r:Z.EMPTY,this.right=i!=null?i:Z.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,n,s,r,i){return new Z(t!=null?t:this.key,n!=null?n:this.value,s!=null?s:this.color,r!=null?r:this.left,i!=null?i:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,s){let r=this;const i=s(t,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(t,n,s),null):i===0?r.copy(null,n,null,null,null):r.copy(null,null,null,null,r.right.insert(t,n,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return Z.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,n){let s,r=this;if(n(t,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(t,n),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),n(t,r.key)===0){if(r.right.isEmpty())return Z.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(t,n))}return r.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Z.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Z.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw A();const t=this.left.check();if(t!==this.right.check())throw A();return t+(this.isRed()?0:1)}}Z.EMPTY=null,Z.RED=!0,Z.BLACK=!1;Z.EMPTY=new class{constructor(){this.size=0}get key(){throw A()}get value(){throw A()}get color(){throw A()}get left(){throw A()}get right(){throw A()}copy(e,t,n,s,r){return this}insert(e,t,n){return new Z(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W{constructor(t){this.comparator=t,this.data=new Q(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((n,s)=>(t(n),!1))}forEachInRange(t,n){const s=this.data.getIteratorFrom(t[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,t[1])>=0)return;n(r.key)}}forEachWhile(t,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!t(s.getNext().key))return}firstAfterOrEqual(t){const n=this.data.getIteratorFrom(t);return n.hasNext()?n.getNext().key:null}getIterator(){return new No(this.data.getIterator())}getIteratorFrom(t){return new No(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let n=this;return n.size<t.size&&(n=t,t=this),t.forEach(s=>{n=n.add(s)}),n}isEqual(t){if(!(t instanceof W)||this.size!==t.size)return!1;const n=this.data.getIterator(),s=t.data.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(n=>{t.push(n)}),t}toString(){const t=[];return this.forEach(n=>t.push(n)),"SortedSet("+t.toString()+")"}copy(t){const n=new W(this.comparator);return n.data=t,n}}class No{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et{constructor(t){this.fields=t,t.sort(at.comparator)}static empty(){return new Et([])}unionWith(t){let n=new W(at.comparator);for(const s of this.fields)n=n.add(s);for(const s of t)n=n.add(s);return new Et(n.toArray())}covers(t){for(const n of this.fields)if(n.isPrefixOf(t))return!0;return!1}isEqual(t){return be(this.fields,t.fields,(n,s)=>n.isEqual(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{constructor(t){this.binaryString=t}static fromBase64String(t){const n=atob(t);return new st(n)}static fromUint8Array(t){const n=function(s){let r="";for(let i=0;i<s.length;++i)r+=String.fromCharCode(s[i]);return r}(t);return new st(n)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const n=new Uint8Array(t.length);for(let s=0;s<t.length;s++)n[s]=t.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return x(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}st.EMPTY_BYTE_STRING=new st("");const Uf=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function zt(e){if(L(!!e),typeof e=="string"){let t=0;const n=Uf.exec(e);if(L(!!n),n[1]){let r=n[1];r=(r+"000000000").substr(0,9),t=Number(r)}const s=new Date(e);return{seconds:Math.floor(s.getTime()/1e3),nanos:t}}return{seconds:q(e.seconds),nanos:q(e.nanos)}}function q(e){return typeof e=="number"?e:typeof e=="string"?Number(e):0}function Te(e){return typeof e=="string"?st.fromBase64String(e):st.fromUint8Array(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wc(e){var t,n;return((n=(((t=e==null?void 0:e.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Ec(e){const t=e.mapValue.fields.__previous_value__;return wc(t)?Ec(t):t}function on(e){const t=zt(e.mapValue.fields.__local_write_time__.timestampValue);return new G(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bf{constructor(t,n,s,r,i,o,a,c){this.databaseId=t,this.appId=n,this.persistenceKey=s,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class Se{constructor(t,n){this.projectId=t,this.database=n||"(default)"}static empty(){return new Se("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof Se&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ss(e){return e==null}function ns(e){return e===0&&1/e==-1/0}function jf(e){return typeof e=="number"&&Number.isInteger(e)&&!ns(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pn={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function ae(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?wc(e)?4:qf(e)?9007199254740991:10:A()}function Dt(e,t){if(e===t)return!0;const n=ae(e);if(n!==ae(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return on(e).isEqual(on(t));case 3:return function(s,r){if(typeof s.timestampValue=="string"&&typeof r.timestampValue=="string"&&s.timestampValue.length===r.timestampValue.length)return s.timestampValue===r.timestampValue;const i=zt(s.timestampValue),o=zt(r.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(s,r){return Te(s.bytesValue).isEqual(Te(r.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(s,r){return q(s.geoPointValue.latitude)===q(r.geoPointValue.latitude)&&q(s.geoPointValue.longitude)===q(r.geoPointValue.longitude)}(e,t);case 2:return function(s,r){if("integerValue"in s&&"integerValue"in r)return q(s.integerValue)===q(r.integerValue);if("doubleValue"in s&&"doubleValue"in r){const i=q(s.doubleValue),o=q(r.doubleValue);return i===o?ns(i)===ns(o):isNaN(i)&&isNaN(o)}return!1}(e,t);case 9:return be(e.arrayValue.values||[],t.arrayValue.values||[],Dt);case 10:return function(s,r){const i=s.mapValue.fields||{},o=r.mapValue.fields||{};if(_o(i)!==_o(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!Dt(i[a],o[a])))return!1;return!0}(e,t);default:return A()}}function an(e,t){return(e.values||[]).find(n=>Dt(n,t))!==void 0}function Ie(e,t){if(e===t)return 0;const n=ae(e),s=ae(t);if(n!==s)return x(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return x(e.booleanValue,t.booleanValue);case 2:return function(r,i){const o=q(r.integerValue||r.doubleValue),a=q(i.integerValue||i.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(e,t);case 3:return ko(e.timestampValue,t.timestampValue);case 4:return ko(on(e),on(t));case 5:return x(e.stringValue,t.stringValue);case 6:return function(r,i){const o=Te(r),a=Te(i);return o.compareTo(a)}(e.bytesValue,t.bytesValue);case 7:return function(r,i){const o=r.split("/"),a=i.split("/");for(let c=0;c<o.length&&c<a.length;c++){const u=x(o[c],a[c]);if(u!==0)return u}return x(o.length,a.length)}(e.referenceValue,t.referenceValue);case 8:return function(r,i){const o=x(q(r.latitude),q(i.latitude));return o!==0?o:x(q(r.longitude),q(i.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(r,i){const o=r.values||[],a=i.values||[];for(let c=0;c<o.length&&c<a.length;++c){const u=Ie(o[c],a[c]);if(u)return u}return x(o.length,a.length)}(e.arrayValue,t.arrayValue);case 10:return function(r,i){if(r===Pn.mapValue&&i===Pn.mapValue)return 0;if(r===Pn.mapValue)return 1;if(i===Pn.mapValue)return-1;const o=r.fields||{},a=Object.keys(o),c=i.fields||{},u=Object.keys(c);a.sort(),u.sort();for(let l=0;l<a.length&&l<u.length;++l){const h=x(a[l],u[l]);if(h!==0)return h;const f=Ie(o[a[l]],c[u[l]]);if(f!==0)return f}return x(a.length,u.length)}(e.mapValue,t.mapValue);default:throw A()}}function ko(e,t){if(typeof e=="string"&&typeof t=="string"&&e.length===t.length)return x(e,t);const n=zt(e),s=zt(t),r=x(n.seconds,s.seconds);return r!==0?r:x(n.nanos,s.nanos)}function ve(e){return Nr(e)}function Nr(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(s){const r=zt(s);return`time(${r.seconds},${r.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?Te(e.bytesValue).toBase64():"referenceValue"in e?(n=e.referenceValue,T.fromName(n).toString()):"geoPointValue"in e?`geo(${(t=e.geoPointValue).latitude},${t.longitude})`:"arrayValue"in e?function(s){let r="[",i=!0;for(const o of s.values||[])i?i=!1:r+=",",r+=Nr(o);return r+"]"}(e.arrayValue):"mapValue"in e?function(s){const r=Object.keys(s.fields||{}).sort();let i="{",o=!0;for(const a of r)o?o=!1:i+=",",i+=`${a}:${Nr(s.fields[a])}`;return i+"}"}(e.mapValue):A();var t,n}function kr(e){return!!e&&"integerValue"in e}function Ti(e){return!!e&&"arrayValue"in e}function Ro(e){return!!e&&"nullValue"in e}function Oo(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function Bn(e){return!!e&&"mapValue"in e}function ze(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&typeof e.timestampValue=="object")return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return le(e.mapValue.fields,(n,s)=>t.mapValue.fields[n]=ze(s)),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=ze(e.arrayValue.values[n]);return t}return Object.assign({},e)}function qf(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt{constructor(t){this.value=t}static empty(){return new pt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let n=this.value;for(let s=0;s<t.length-1;++s)if(n=(n.mapValue.fields||{})[t.get(s)],!Bn(n))return null;return n=(n.mapValue.fields||{})[t.lastSegment()],n||null}}set(t,n){this.getFieldsMap(t.popLast())[t.lastSegment()]=ze(n)}setAll(t){let n=at.emptyPath(),s={},r=[];t.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,s,r),s={},r=[],n=a.popLast()}o?s[a.lastSegment()]=ze(o):r.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,s,r)}delete(t){const n=this.field(t.popLast());Bn(n)&&n.mapValue.fields&&delete n.mapValue.fields[t.lastSegment()]}isEqual(t){return Dt(this.value,t.value)}getFieldsMap(t){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<t.length;++s){let r=n.mapValue.fields[t.get(s)];Bn(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},n.mapValue.fields[t.get(s)]=r),n=r}return n.mapValue.fields}applyChanges(t,n,s){le(n,(r,i)=>t[r]=i);for(const r of s)delete t[r]}clone(){return new pt(ze(this.value))}}function bc(e){const t=[];return le(e.fields,(n,s)=>{const r=new at([n]);if(Bn(s)){const i=bc(s.mapValue).fields;if(i.length===0)t.push(r);else for(const o of i)t.push(r.child(o))}else t.push(r)}),new Et(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt{constructor(t,n,s,r,i,o){this.key=t,this.documentType=n,this.version=s,this.readTime=r,this.data=i,this.documentState=o}static newInvalidDocument(t){return new tt(t,0,N.min(),N.min(),pt.empty(),0)}static newFoundDocument(t,n,s){return new tt(t,1,n,N.min(),s,0)}static newNoDocument(t,n){return new tt(t,2,n,N.min(),pt.empty(),0)}static newUnknownDocument(t,n){return new tt(t,3,n,N.min(),pt.empty(),2)}convertToFoundDocument(t,n){return this.version=t,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=pt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=pt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=N.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof tt&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new tt(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zf{constructor(t,n=null,s=[],r=[],i=null,o=null,a=null){this.path=t,this.collectionGroup=n,this.orderBy=s,this.filters=r,this.limit=i,this.startAt=o,this.endAt=a,this.ut=null}}function xo(e,t=null,n=[],s=[],r=null,i=null,o=null){return new zf(e,t,n,s,r,i,o)}function Si(e){const t=D(e);if(t.ut===null){let n=t.path.canonicalString();t.collectionGroup!==null&&(n+="|cg:"+t.collectionGroup),n+="|f:",n+=t.filters.map(s=>{return(r=s).field.canonicalString()+r.op.toString()+ve(r.value);var r}).join(","),n+="|ob:",n+=t.orderBy.map(s=>function(r){return r.field.canonicalString()+r.dir}(s)).join(","),Ss(t.limit)||(n+="|l:",n+=t.limit),t.startAt&&(n+="|lb:",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(s=>ve(s)).join(",")),t.endAt&&(n+="|ub:",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(s=>ve(s)).join(",")),t.ut=n}return t.ut}function Kf(e){let t=e.path.canonicalString();return e.collectionGroup!==null&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map(n=>{return`${(s=n).field.canonicalString()} ${s.op} ${ve(s.value)}`;var s}).join(", ")}]`),Ss(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map(n=>function(s){return`${s.field.canonicalString()} (${s.dir})`}(n)).join(", ")}]`),e.startAt&&(t+=", startAt: ",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(n=>ve(n)).join(",")),e.endAt&&(t+=", endAt: ",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(n=>ve(n)).join(",")),`Target(${t})`}function Ii(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let r=0;r<e.orderBy.length;r++)if(!Zf(e.orderBy[r],t.orderBy[r]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let r=0;r<e.filters.length;r++)if(n=e.filters[r],s=t.filters[r],n.op!==s.op||!n.field.isEqual(s.field)||!Dt(n.value,s.value))return!1;var n,s;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!Lo(e.startAt,t.startAt)&&Lo(e.endAt,t.endAt)}function Rr(e){return T.isDocumentKey(e.path)&&e.collectionGroup===null&&e.filters.length===0}class gt extends class{}{constructor(t,n,s){super(),this.field=t,this.op=n,this.value=s}static create(t,n,s){return t.isKeyField()?n==="in"||n==="not-in"?this.ct(t,n,s):new Hf(t,n,s):n==="array-contains"?new Qf(t,s):n==="in"?new Xf(t,s):n==="not-in"?new Yf(t,s):n==="array-contains-any"?new Jf(t,s):new gt(t,n,s)}static ct(t,n,s){return n==="in"?new Gf(t,s):new Wf(t,s)}matches(t){const n=t.data.field(this.field);return this.op==="!="?n!==null&&this.at(Ie(n,this.value)):n!==null&&ae(this.value)===ae(n)&&this.at(Ie(n,this.value))}at(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return A()}}ht(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class Hf extends gt{constructor(t,n,s){super(t,n,s),this.key=T.fromName(s.referenceValue)}matches(t){const n=T.comparator(t.key,this.key);return this.at(n)}}class Gf extends gt{constructor(t,n){super(t,"in",n),this.keys=Tc("in",n)}matches(t){return this.keys.some(n=>n.isEqual(t.key))}}class Wf extends gt{constructor(t,n){super(t,"not-in",n),this.keys=Tc("not-in",n)}matches(t){return!this.keys.some(n=>n.isEqual(t.key))}}function Tc(e,t){var n;return(((n=t.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>T.fromName(s.referenceValue))}class Qf extends gt{constructor(t,n){super(t,"array-contains",n)}matches(t){const n=t.data.field(this.field);return Ti(n)&&an(n.arrayValue,this.value)}}class Xf extends gt{constructor(t,n){super(t,"in",n)}matches(t){const n=t.data.field(this.field);return n!==null&&an(this.value.arrayValue,n)}}class Yf extends gt{constructor(t,n){super(t,"not-in",n)}matches(t){if(an(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=t.data.field(this.field);return n!==null&&!an(this.value.arrayValue,n)}}class Jf extends gt{constructor(t,n){super(t,"array-contains-any",n)}matches(t){const n=t.data.field(this.field);return!(!Ti(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>an(this.value.arrayValue,s))}}class ss{constructor(t,n){this.position=t,this.inclusive=n}}class Ke{constructor(t,n="asc"){this.field=t,this.dir=n}}function Zf(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}function Mo(e,t,n){let s=0;for(let r=0;r<e.position.length;r++){const i=t[r],o=e.position[r];if(i.field.isKeyField()?s=T.comparator(T.fromName(o.referenceValue),n.key):s=Ie(o,n.data.field(i.field)),i.dir==="desc"&&(s*=-1),s!==0)break}return s}function Lo(e,t){if(e===null)return t===null;if(t===null||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!Dt(e.position[n],t.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Is{constructor(t,n=null,s=[],r=[],i=null,o="F",a=null,c=null){this.path=t,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=r,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.lt=null,this.ft=null,this.startAt,this.endAt}}function td(e,t,n,s,r,i,o,a){return new Is(e,t,n,s,r,i,o,a)}function Cs(e){return new Is(e)}function Po(e){return e.filters.length===0&&e.limit===null&&e.startAt==null&&e.endAt==null&&(e.explicitOrderBy.length===0||e.explicitOrderBy.length===1&&e.explicitOrderBy[0].field.isKeyField())}function ed(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function nd(e){for(const t of e.filters)if(t.ht())return t.field;return null}function sd(e){return e.collectionGroup!==null}function cn(e){const t=D(e);if(t.lt===null){t.lt=[];const n=nd(t),s=ed(t);if(n!==null&&s===null)n.isKeyField()||t.lt.push(new Ke(n)),t.lt.push(new Ke(at.keyField(),"asc"));else{let r=!1;for(const i of t.explicitOrderBy)t.lt.push(i),i.field.isKeyField()&&(r=!0);if(!r){const i=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.lt.push(new Ke(at.keyField(),i))}}}return t.lt}function Lt(e){const t=D(e);if(!t.ft)if(t.limitType==="F")t.ft=xo(t.path,t.collectionGroup,cn(t),t.filters,t.limit,t.startAt,t.endAt);else{const n=[];for(const i of cn(t)){const o=i.dir==="desc"?"asc":"desc";n.push(new Ke(i.field,o))}const s=t.endAt?new ss(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new ss(t.startAt.position,t.startAt.inclusive):null;t.ft=xo(t.path,t.collectionGroup,n,t.filters,t.limit,s,r)}return t.ft}function Or(e,t,n){return new Is(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function As(e,t){return Ii(Lt(e),Lt(t))&&e.limitType===t.limitType}function Sc(e){return`${Si(Lt(e))}|lt:${e.limitType}`}function xr(e){return`Query(target=${Kf(Lt(e))}; limitType=${e.limitType})`}function Ci(e,t){return t.isFoundDocument()&&function(n,s){const r=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(r):T.isDocumentKey(n.path)?n.path.isEqual(r):n.path.isImmediateParentOf(r)}(e,t)&&function(n,s){for(const r of n.explicitOrderBy)if(!r.field.isKeyField()&&s.data.field(r.field)===null)return!1;return!0}(e,t)&&function(n,s){for(const r of n.filters)if(!r.matches(s))return!1;return!0}(e,t)&&function(n,s){return!(n.startAt&&!function(r,i,o){const a=Mo(r,i,o);return r.inclusive?a<=0:a<0}(n.startAt,cn(n),s)||n.endAt&&!function(r,i,o){const a=Mo(r,i,o);return r.inclusive?a>=0:a>0}(n.endAt,cn(n),s))}(e,t)}function rd(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function Ic(e){return(t,n)=>{let s=!1;for(const r of cn(e)){const i=id(r,t,n);if(i!==0)return i;s=s||r.field.isKeyField()}return 0}}function id(e,t,n){const s=e.field.isKeyField()?T.comparator(t.key,n.key):function(r,i,o){const a=i.data.field(r),c=o.data.field(r);return a!==null&&c!==null?Ie(a,c):A()}(e.field,t,n);switch(e.dir){case"asc":return s;case"desc":return-1*s;default:return A()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cc(e,t){if(e.dt){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ns(t)?"-0":t}}function Ac(e){return{integerValue:""+e}}function od(e,t){return jf(t)?Ac(t):Cc(e,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ds{constructor(){this._=void 0}}function ad(e,t,n){return e instanceof rs?function(s,r){const i={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return r&&(i.fields.__previous_value__=r),{mapValue:i}}(n,t):e instanceof un?_c(e,t):e instanceof ln?Nc(e,t):function(s,r){const i=Dc(s,r),o=Fo(i)+Fo(s._t);return kr(i)&&kr(s._t)?Ac(o):Cc(s.wt,o)}(e,t)}function cd(e,t,n){return e instanceof un?_c(e,t):e instanceof ln?Nc(e,t):n}function Dc(e,t){return e instanceof is?kr(n=t)||function(s){return!!s&&"doubleValue"in s}(n)?t:{integerValue:0}:null;var n}class rs extends Ds{}class un extends Ds{constructor(t){super(),this.elements=t}}function _c(e,t){const n=kc(t);for(const s of e.elements)n.some(r=>Dt(r,s))||n.push(s);return{arrayValue:{values:n}}}class ln extends Ds{constructor(t){super(),this.elements=t}}function Nc(e,t){let n=kc(t);for(const s of e.elements)n=n.filter(r=>!Dt(r,s));return{arrayValue:{values:n}}}class is extends Ds{constructor(t,n){super(),this.wt=t,this._t=n}}function Fo(e){return q(e.integerValue||e.doubleValue)}function kc(e){return Ti(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}function ud(e,t){return e.field.isEqual(t.field)&&function(n,s){return n instanceof un&&s instanceof un||n instanceof ln&&s instanceof ln?be(n.elements,s.elements,Dt):n instanceof is&&s instanceof is?Dt(n._t,s._t):n instanceof rs&&s instanceof rs}(e.transform,t.transform)}class ld{constructor(t,n){this.version=t,this.transformResults=n}}class St{constructor(t,n){this.updateTime=t,this.exists=n}static none(){return new St}static exists(t){return new St(void 0,t)}static updateTime(t){return new St(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function jn(e,t){return e.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(e.updateTime):e.exists===void 0||e.exists===t.isFoundDocument()}class _s{}function Rc(e,t){if(!e.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return e.isNoDocument()?new xc(e.key,St.none()):new Sn(e.key,e.data,St.none());{const n=e.data,s=pt.empty();let r=new W(at.comparator);for(let i of t.fields)if(!r.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?s.delete(i):s.set(i,o),r=r.add(i)}return new Wt(e.key,s,new Et(r.toArray()),St.none())}}function hd(e,t,n){e instanceof Sn?function(s,r,i){const o=s.value.clone(),a=$o(s.fieldTransforms,r,i.transformResults);o.setAll(a),r.convertToFoundDocument(i.version,o).setHasCommittedMutations()}(e,t,n):e instanceof Wt?function(s,r,i){if(!jn(s.precondition,r))return void r.convertToUnknownDocument(i.version);const o=$o(s.fieldTransforms,r,i.transformResults),a=r.data;a.setAll(Oc(s)),a.setAll(o),r.convertToFoundDocument(i.version,a).setHasCommittedMutations()}(e,t,n):function(s,r,i){r.convertToNoDocument(i.version).setHasCommittedMutations()}(0,t,n)}function He(e,t,n,s){return e instanceof Sn?function(r,i,o,a){if(!jn(r.precondition,i))return o;const c=r.value.clone(),u=Uo(r.fieldTransforms,a,i);return c.setAll(u),i.convertToFoundDocument(i.version,c).setHasLocalMutations(),null}(e,t,n,s):e instanceof Wt?function(r,i,o,a){if(!jn(r.precondition,i))return o;const c=Uo(r.fieldTransforms,a,i),u=i.data;return u.setAll(Oc(r)),u.setAll(c),i.convertToFoundDocument(i.version,u).setHasLocalMutations(),o===null?null:o.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map(l=>l.field))}(e,t,n,s):function(r,i,o){return jn(r.precondition,i)?(i.convertToNoDocument(i.version).setHasLocalMutations(),null):o}(e,t,n)}function fd(e,t){let n=null;for(const s of e.fieldTransforms){const r=t.data.field(s.field),i=Dc(s.transform,r||null);i!=null&&(n===null&&(n=pt.empty()),n.set(s.field,i))}return n||null}function Vo(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&be(n,s,(r,i)=>ud(r,i))}(e.fieldTransforms,t.fieldTransforms)&&(e.type===0?e.value.isEqual(t.value):e.type!==1||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class Sn extends _s{constructor(t,n,s,r=[]){super(),this.key=t,this.value=n,this.precondition=s,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class Wt extends _s{constructor(t,n,s,r,i=[]){super(),this.key=t,this.data=n,this.fieldMask=s,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Oc(e){const t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=e.data.field(n);t.set(n,s)}}),t}function $o(e,t,n){const s=new Map;L(e.length===n.length);for(let r=0;r<n.length;r++){const i=e[r],o=i.transform,a=t.data.field(i.field);s.set(i.field,cd(o,a,n[r]))}return s}function Uo(e,t,n){const s=new Map;for(const r of e){const i=r.transform,o=n.data.field(r.field);s.set(r.field,ad(i,o,t))}return s}class xc extends _s{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class dd extends _s{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pd{constructor(t){this.count=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var j,R;function gd(e){switch(e){default:return A();case g.CANCELLED:case g.UNKNOWN:case g.DEADLINE_EXCEEDED:case g.RESOURCE_EXHAUSTED:case g.INTERNAL:case g.UNAVAILABLE:case g.UNAUTHENTICATED:return!1;case g.INVALID_ARGUMENT:case g.NOT_FOUND:case g.ALREADY_EXISTS:case g.PERMISSION_DENIED:case g.FAILED_PRECONDITION:case g.ABORTED:case g.OUT_OF_RANGE:case g.UNIMPLEMENTED:case g.DATA_LOSS:return!0}}function Mc(e){if(e===void 0)return Mt("GRPC error has no .code"),g.UNKNOWN;switch(e){case j.OK:return g.OK;case j.CANCELLED:return g.CANCELLED;case j.UNKNOWN:return g.UNKNOWN;case j.DEADLINE_EXCEEDED:return g.DEADLINE_EXCEEDED;case j.RESOURCE_EXHAUSTED:return g.RESOURCE_EXHAUSTED;case j.INTERNAL:return g.INTERNAL;case j.UNAVAILABLE:return g.UNAVAILABLE;case j.UNAUTHENTICATED:return g.UNAUTHENTICATED;case j.INVALID_ARGUMENT:return g.INVALID_ARGUMENT;case j.NOT_FOUND:return g.NOT_FOUND;case j.ALREADY_EXISTS:return g.ALREADY_EXISTS;case j.PERMISSION_DENIED:return g.PERMISSION_DENIED;case j.FAILED_PRECONDITION:return g.FAILED_PRECONDITION;case j.ABORTED:return g.ABORTED;case j.OUT_OF_RANGE:return g.OUT_OF_RANGE;case j.UNIMPLEMENTED:return g.UNIMPLEMENTED;case j.DATA_LOSS:return g.DATA_LOSS;default:return A()}}(R=j||(j={}))[R.OK=0]="OK",R[R.CANCELLED=1]="CANCELLED",R[R.UNKNOWN=2]="UNKNOWN",R[R.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",R[R.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",R[R.NOT_FOUND=5]="NOT_FOUND",R[R.ALREADY_EXISTS=6]="ALREADY_EXISTS",R[R.PERMISSION_DENIED=7]="PERMISSION_DENIED",R[R.UNAUTHENTICATED=16]="UNAUTHENTICATED",R[R.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",R[R.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",R[R.ABORTED=10]="ABORTED",R[R.OUT_OF_RANGE=11]="OUT_OF_RANGE",R[R.UNIMPLEMENTED=12]="UNIMPLEMENTED",R[R.INTERNAL=13]="INTERNAL",R[R.UNAVAILABLE=14]="UNAVAILABLE",R[R.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Me{constructor(t,n){this.mapKeyFn=t,this.equalsFn=n,this.inner={},this.innerSize=0}get(t){const n=this.mapKeyFn(t),s=this.inner[n];if(s!==void 0){for(const[r,i]of s)if(this.equalsFn(r,t))return i}}has(t){return this.get(t)!==void 0}set(t,n){const s=this.mapKeyFn(t),r=this.inner[s];if(r===void 0)return this.inner[s]=[[t,n]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],t))return void(r[i]=[t,n]);r.push([t,n]),this.innerSize++}delete(t){const n=this.mapKeyFn(t),s=this.inner[n];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],t))return s.length===1?delete this.inner[n]:s.splice(r,1),this.innerSize--,!0;return!1}forEach(t){le(this.inner,(n,s)=>{for(const[r,i]of s)t(r,i)})}isEmpty(){return vc(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const md=new Q(T.comparator);function Pt(){return md}const Lc=new Q(T.comparator);function $e(...e){let t=Lc;for(const n of e)t=t.insert(n.key,n);return t}function Pc(e){let t=Lc;return e.forEach((n,s)=>t=t.insert(n,s.overlayedDocument)),t}function te(){return Ge()}function Fc(){return Ge()}function Ge(){return new Me(e=>e.toString(),(e,t)=>e.isEqual(t))}const yd=new Q(T.comparator),vd=new W(T.comparator);function k(...e){let t=vd;for(const n of e)t=t.add(n);return t}const wd=new W(x);function Vc(){return wd}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ns{constructor(t,n,s,r,i){this.snapshotVersion=t,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(t,n){const s=new Map;return s.set(t,In.createSynthesizedTargetChangeForCurrentChange(t,n)),new Ns(N.min(),s,Vc(),Pt(),k())}}class In{constructor(t,n,s,r,i){this.resumeToken=t,this.current=n,this.addedDocuments=s,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(t,n){return new In(st.EMPTY_BYTE_STRING,n,k(),k(),k())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qn{constructor(t,n,s,r){this.gt=t,this.removedTargetIds=n,this.key=s,this.yt=r}}class $c{constructor(t,n){this.targetId=t,this.It=n}}class Uc{constructor(t,n,s=st.EMPTY_BYTE_STRING,r=null){this.state=t,this.targetIds=n,this.resumeToken=s,this.cause=r}}class Bo{constructor(){this.Tt=0,this.Et=qo(),this.At=st.EMPTY_BYTE_STRING,this.Rt=!1,this.bt=!0}get current(){return this.Rt}get resumeToken(){return this.At}get Pt(){return this.Tt!==0}get vt(){return this.bt}Vt(t){t.approximateByteSize()>0&&(this.bt=!0,this.At=t)}St(){let t=k(),n=k(),s=k();return this.Et.forEach((r,i)=>{switch(i){case 0:t=t.add(r);break;case 2:n=n.add(r);break;case 1:s=s.add(r);break;default:A()}}),new In(this.At,this.Rt,t,n,s)}Dt(){this.bt=!1,this.Et=qo()}Ct(t,n){this.bt=!0,this.Et=this.Et.insert(t,n)}xt(t){this.bt=!0,this.Et=this.Et.remove(t)}Nt(){this.Tt+=1}kt(){this.Tt-=1}Mt(){this.bt=!0,this.Rt=!0}}class Ed{constructor(t){this.Ot=t,this.Ft=new Map,this.$t=Pt(),this.Bt=jo(),this.Lt=new W(x)}Ut(t){for(const n of t.gt)t.yt&&t.yt.isFoundDocument()?this.qt(n,t.yt):this.Kt(n,t.key,t.yt);for(const n of t.removedTargetIds)this.Kt(n,t.key,t.yt)}Gt(t){this.forEachTarget(t,n=>{const s=this.Qt(n);switch(t.state){case 0:this.jt(n)&&s.Vt(t.resumeToken);break;case 1:s.kt(),s.Pt||s.Dt(),s.Vt(t.resumeToken);break;case 2:s.kt(),s.Pt||this.removeTarget(n);break;case 3:this.jt(n)&&(s.Mt(),s.Vt(t.resumeToken));break;case 4:this.jt(n)&&(this.Wt(n),s.Vt(t.resumeToken));break;default:A()}})}forEachTarget(t,n){t.targetIds.length>0?t.targetIds.forEach(n):this.Ft.forEach((s,r)=>{this.jt(r)&&n(r)})}zt(t){const n=t.targetId,s=t.It.count,r=this.Ht(n);if(r){const i=r.target;if(Rr(i))if(s===0){const o=new T(i.path);this.Kt(n,o,tt.newNoDocument(o,N.min()))}else L(s===1);else this.Jt(n)!==s&&(this.Wt(n),this.Lt=this.Lt.add(n))}}Yt(t){const n=new Map;this.Ft.forEach((i,o)=>{const a=this.Ht(o);if(a){if(i.current&&Rr(a.target)){const c=new T(a.target.path);this.$t.get(c)!==null||this.Xt(o,c)||this.Kt(o,c,tt.newNoDocument(c,t))}i.vt&&(n.set(o,i.St()),i.Dt())}});let s=k();this.Bt.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const u=this.Ht(c);return!u||u.purpose===2||(a=!1,!1)}),a&&(s=s.add(i))}),this.$t.forEach((i,o)=>o.setReadTime(t));const r=new Ns(t,n,this.Lt,this.$t,s);return this.$t=Pt(),this.Bt=jo(),this.Lt=new W(x),r}qt(t,n){if(!this.jt(t))return;const s=this.Xt(t,n.key)?2:0;this.Qt(t).Ct(n.key,s),this.$t=this.$t.insert(n.key,n),this.Bt=this.Bt.insert(n.key,this.Zt(n.key).add(t))}Kt(t,n,s){if(!this.jt(t))return;const r=this.Qt(t);this.Xt(t,n)?r.Ct(n,1):r.xt(n),this.Bt=this.Bt.insert(n,this.Zt(n).delete(t)),s&&(this.$t=this.$t.insert(n,s))}removeTarget(t){this.Ft.delete(t)}Jt(t){const n=this.Qt(t).St();return this.Ot.getRemoteKeysForTarget(t).size+n.addedDocuments.size-n.removedDocuments.size}Nt(t){this.Qt(t).Nt()}Qt(t){let n=this.Ft.get(t);return n||(n=new Bo,this.Ft.set(t,n)),n}Zt(t){let n=this.Bt.get(t);return n||(n=new W(x),this.Bt=this.Bt.insert(t,n)),n}jt(t){const n=this.Ht(t)!==null;return n||b("WatchChangeAggregator","Detected inactive target",t),n}Ht(t){const n=this.Ft.get(t);return n&&n.Pt?null:this.Ot.te(t)}Wt(t){this.Ft.set(t,new Bo),this.Ot.getRemoteKeysForTarget(t).forEach(n=>{this.Kt(t,n,null)})}Xt(t,n){return this.Ot.getRemoteKeysForTarget(t).has(n)}}function jo(){return new Q(T.comparator)}function qo(){return new Q(T.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bd=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),Td=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class Sd{constructor(t,n){this.databaseId=t,this.dt=n}}function os(e,t){return e.dt?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Bc(e,t){return e.dt?t.toBase64():t.toUint8Array()}function Id(e,t){return os(e,t.toTimestamp())}function Rt(e){return L(!!e),N.fromTimestamp(function(t){const n=zt(t);return new G(n.seconds,n.nanos)}(e))}function Ai(e,t){return function(n){return new V(["projects",n.projectId,"databases",n.database])}(e).child("documents").child(t).canonicalString()}function jc(e){const t=V.fromString(e);return L(Kc(t)),t}function Mr(e,t){return Ai(e.databaseId,t.path)}function or(e,t){const n=jc(t);if(n.get(1)!==e.databaseId.projectId)throw new S(g.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new S(g.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new T(qc(n))}function Lr(e,t){return Ai(e.databaseId,t)}function Cd(e){const t=jc(e);return t.length===4?V.emptyPath():qc(t)}function Pr(e){return new V(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function qc(e){return L(e.length>4&&e.get(4)==="documents"),e.popFirst(5)}function zo(e,t,n){return{name:Mr(e,t),fields:n.value.mapValue.fields}}function Ad(e,t){let n;if("targetChange"in t){t.targetChange;const s=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:A()}(t.targetChange.targetChangeType||"NO_CHANGE"),r=t.targetChange.targetIds||[],i=function(c,u){return c.dt?(L(u===void 0||typeof u=="string"),st.fromBase64String(u||"")):(L(u===void 0||u instanceof Uint8Array),st.fromUint8Array(u||new Uint8Array))}(e,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(c){const u=c.code===void 0?g.UNKNOWN:Mc(c.code);return new S(u,c.message||"")}(o);n=new Uc(s,r,i,a||null)}else if("documentChange"in t){t.documentChange;const s=t.documentChange;s.document,s.document.name,s.document.updateTime;const r=or(e,s.document.name),i=Rt(s.document.updateTime),o=new pt({mapValue:{fields:s.document.fields}}),a=tt.newFoundDocument(r,i,o),c=s.targetIds||[],u=s.removedTargetIds||[];n=new qn(c,u,a.key,a)}else if("documentDelete"in t){t.documentDelete;const s=t.documentDelete;s.document;const r=or(e,s.document),i=s.readTime?Rt(s.readTime):N.min(),o=tt.newNoDocument(r,i),a=s.removedTargetIds||[];n=new qn([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const s=t.documentRemove;s.document;const r=or(e,s.document),i=s.removedTargetIds||[];n=new qn([],i,r,null)}else{if(!("filter"in t))return A();{t.filter;const s=t.filter;s.targetId;const r=s.count||0,i=new pd(r),o=s.targetId;n=new $c(o,i)}}return n}function Dd(e,t){let n;if(t instanceof Sn)n={update:zo(e,t.key,t.value)};else if(t instanceof xc)n={delete:Mr(e,t.key)};else if(t instanceof Wt)n={update:zo(e,t.key,t.data),updateMask:Fd(t.fieldMask)};else{if(!(t instanceof dd))return A();n={verify:Mr(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map(s=>function(r,i){const o=i.transform;if(o instanceof rs)return{fieldPath:i.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof un)return{fieldPath:i.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof ln)return{fieldPath:i.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof is)return{fieldPath:i.field.canonicalString(),increment:o._t};throw A()}(0,s))),t.precondition.isNone||(n.currentDocument=function(s,r){return r.updateTime!==void 0?{updateTime:Id(s,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:A()}(e,t.precondition)),n}function _d(e,t){return e&&e.length>0?(L(t!==void 0),e.map(n=>function(s,r){let i=s.updateTime?Rt(s.updateTime):Rt(r);return i.isEqual(N.min())&&(i=Rt(r)),new ld(i,s.transformResults||[])}(n,t))):[]}function Nd(e,t){return{documents:[Lr(e,t.path)]}}function kd(e,t){const n={structuredQuery:{}},s=t.path;t.collectionGroup!==null?(n.parent=Lr(e,s),n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(n.parent=Lr(e,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const r=function(c){if(c.length===0)return;const u=c.map(l=>function(h){if(h.op==="=="){if(Oo(h.value))return{unaryFilter:{field:de(h.field),op:"IS_NAN"}};if(Ro(h.value))return{unaryFilter:{field:de(h.field),op:"IS_NULL"}}}else if(h.op==="!="){if(Oo(h.value))return{unaryFilter:{field:de(h.field),op:"IS_NOT_NAN"}};if(Ro(h.value))return{unaryFilter:{field:de(h.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:de(h.field),op:Md(h.op),value:h.value}}}(l));return u.length===1?u[0]:{compositeFilter:{op:"AND",filters:u}}}(t.filters);r&&(n.structuredQuery.where=r);const i=function(c){if(c.length!==0)return c.map(u=>function(l){return{field:de(l.field),direction:xd(l.dir)}}(u))}(t.orderBy);i&&(n.structuredQuery.orderBy=i);const o=function(c,u){return c.dt||Ss(u)?u:{value:u}}(e,t.limit);var a;return o!==null&&(n.structuredQuery.limit=o),t.startAt&&(n.structuredQuery.startAt={before:(a=t.startAt).inclusive,values:a.position}),t.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(t.endAt)),n}function Rd(e){let t=Cd(e.parent);const n=e.structuredQuery,s=n.from?n.from.length:0;let r=null;if(s>0){L(s===1);const l=n.from[0];l.allDescendants?r=l.collectionId:t=t.child(l.collectionId)}let i=[];n.where&&(i=zc(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(l=>function(h){return new Ke(me(h.field),function(f){switch(f){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(l)));let a=null;n.limit&&(a=function(l){let h;return h=typeof l=="object"?l.value:l,Ss(h)?null:h}(n.limit));let c=null;n.startAt&&(c=function(l){const h=!!l.before,f=l.values||[];return new ss(f,h)}(n.startAt));let u=null;return n.endAt&&(u=function(l){const h=!l.before,f=l.values||[];return new ss(f,h)}(n.endAt)),td(t,r,o,i,a,"F",c,u)}function Od(e,t){const n=function(s,r){switch(r){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return A()}}(0,t.purpose);return n==null?null:{"goog-listen-tags":n}}function zc(e){return e?e.unaryFilter!==void 0?[Pd(e)]:e.fieldFilter!==void 0?[Ld(e)]:e.compositeFilter!==void 0?e.compositeFilter.filters.map(t=>zc(t)).reduce((t,n)=>t.concat(n)):A():[]}function xd(e){return bd[e]}function Md(e){return Td[e]}function de(e){return{fieldPath:e.canonicalString()}}function me(e){return at.fromServerFormat(e.fieldPath)}function Ld(e){return gt.create(me(e.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return A()}}(e.fieldFilter.op),e.fieldFilter.value)}function Pd(e){switch(e.unaryFilter.op){case"IS_NAN":const t=me(e.unaryFilter.field);return gt.create(t,"==",{doubleValue:NaN});case"IS_NULL":const n=me(e.unaryFilter.field);return gt.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=me(e.unaryFilter.field);return gt.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const r=me(e.unaryFilter.field);return gt.create(r,"!=",{nullValue:"NULL_VALUE"});default:return A()}}function Fd(e){const t=[];return e.fields.forEach(n=>t.push(n.canonicalString())),{fieldPaths:t}}function Kc(e){return e.length>=4&&e.get(0)==="projects"&&e.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vd{constructor(t,n,s,r){this.batchId=t,this.localWriteTime=n,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(t,n){const s=n.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(t.key)&&hd(i,t,s[r])}}applyToLocalView(t,n){for(const s of this.baseMutations)s.key.isEqual(t.key)&&(n=He(s,t,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(t.key)&&(n=He(s,t,n,this.localWriteTime));return n}applyToLocalDocumentSet(t,n){const s=Fc();return this.mutations.forEach(r=>{const i=t.get(r.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(r.key)?null:a;const c=Rc(o,a);c!==null&&s.set(r.key,c),o.isValidDocument()||o.convertToNoDocument(N.min())}),s}keys(){return this.mutations.reduce((t,n)=>t.add(n.key),k())}isEqual(t){return this.batchId===t.batchId&&be(this.mutations,t.mutations,(n,s)=>Vo(n,s))&&be(this.baseMutations,t.baseMutations,(n,s)=>Vo(n,s))}}class Di{constructor(t,n,s,r){this.batch=t,this.commitVersion=n,this.mutationResults=s,this.docVersions=r}static from(t,n,s){L(t.mutations.length===s.length);let r=yd;const i=t.mutations;for(let o=0;o<i.length;o++)r=r.insert(i[o].key,s[o].version);return new Di(t,n,s,r)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $d{constructor(t,n){this.largestBatchId=t,this.mutation=n}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ee{constructor(t,n,s,r,i=N.min(),o=N.min(),a=st.EMPTY_BYTE_STRING){this.target=t,this.targetId=n,this.purpose=s,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(t){return new ee(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(t,n){return new ee(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,t)}withLastLimboFreeSnapshotVersion(t){return new ee(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ud{constructor(t){this.ne=t}}function Bd(e){const t=Rd({parent:e.parent,structuredQuery:e.structuredQuery});return e.limitType==="LAST"?Or(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jd{constructor(){this.ze=new qd}addToCollectionParentIndex(t,n){return this.ze.add(n),m.resolve()}getCollectionParents(t,n){return m.resolve(this.ze.getEntries(n))}addFieldIndex(t,n){return m.resolve()}deleteFieldIndex(t,n){return m.resolve()}getDocumentsMatchingTarget(t,n){return m.resolve(null)}getIndexType(t,n){return m.resolve(0)}getFieldIndexes(t,n){return m.resolve([])}getNextCollectionGroupToUpdate(t){return m.resolve(null)}getMinOffset(t,n){return m.resolve(qt.min())}getMinOffsetFromCollectionGroup(t,n){return m.resolve(qt.min())}updateCollectionGroup(t,n,s){return m.resolve()}updateIndexEntries(t,n){return m.resolve()}}class qd{constructor(){this.index={}}add(t){const n=t.lastSegment(),s=t.popLast(),r=this.index[n]||new W(V.comparator),i=!r.has(s);return this.index[n]=r.add(s),i}has(t){const n=t.lastSegment(),s=t.popLast(),r=this.index[n];return r&&r.has(s)}getEntries(t){return(this.index[t]||new W(V.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ce{constructor(t){this.En=t}next(){return this.En+=2,this.En}static An(){return new Ce(0)}static Rn(){return new Ce(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zd{constructor(){this.changes=new Me(t=>t.toString(),(t,n)=>t.isEqual(n)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,n){this.assertNotApplied(),this.changes.set(t,tt.newInvalidDocument(t).setReadTime(n))}getEntry(t,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?m.resolve(s):this.getFromCache(t,n)}getEntries(t,n){return this.getAllFromCache(t,n)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kd{constructor(t,n){this.overlayedDocument=t,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hd{constructor(t,n,s,r){this.remoteDocumentCache=t,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=r}getDocument(t,n){let s=null;return this.documentOverlayCache.getOverlay(t,n).next(r=>(s=r,this.getBaseDocument(t,n,s))).next(r=>(s!==null&&He(s.mutation,r,Et.empty(),G.now()),r))}getDocuments(t,n){return this.remoteDocumentCache.getEntries(t,n).next(s=>this.getLocalViewOfDocuments(t,s,k()).next(()=>s))}getLocalViewOfDocuments(t,n,s=k()){const r=te();return this.populateOverlays(t,r,n).next(()=>this.computeViews(t,n,r,s).next(i=>{let o=$e();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(t,n){const s=te();return this.populateOverlays(t,s,n).next(()=>this.computeViews(t,n,s,k()))}populateOverlays(t,n,s){const r=[];return s.forEach(i=>{n.has(i)||r.push(i)}),this.documentOverlayCache.getOverlays(t,r).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(t,n,s,r){let i=Pt();const o=Ge(),a=Ge();return n.forEach((c,u)=>{const l=s.get(u.key);r.has(u.key)&&(l===void 0||l.mutation instanceof Wt)?i=i.insert(u.key,u):l!==void 0&&(o.set(u.key,l.mutation.getFieldMask()),He(l.mutation,u,l.mutation.getFieldMask(),G.now()))}),this.recalculateAndSaveOverlays(t,i).next(c=>(c.forEach((u,l)=>o.set(u,l)),n.forEach((u,l)=>{var h;return a.set(u,new Kd(l,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(t,n){const s=Ge();let r=new Q((o,a)=>o-a),i=k();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const u=n.get(c);if(u===null)return;let l=s.get(c)||Et.empty();l=a.applyToLocalView(u,l),s.set(c,l);const h=(r.get(a.batchId)||k()).add(c);r=r.insert(a.batchId,h)})}).next(()=>{const o=[],a=r.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),u=c.key,l=c.value,h=Fc();l.forEach(f=>{if(!i.has(f)){const p=Rc(n.get(f),s.get(f));p!==null&&h.set(f,p),i=i.add(f)}}),o.push(this.documentOverlayCache.saveOverlays(t,u,h))}return m.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(t,n){return this.remoteDocumentCache.getEntries(t,n).next(s=>this.recalculateAndSaveOverlays(t,s))}getDocumentsMatchingQuery(t,n,s){return function(r){return T.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(t,n.path):sd(n)?this.getDocumentsMatchingCollectionGroupQuery(t,n,s):this.getDocumentsMatchingCollectionQuery(t,n,s)}getNextDocuments(t,n,s,r){return this.remoteDocumentCache.getAllFromCollectionGroup(t,n,s,r).next(i=>{const o=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,n,s.largestBatchId,r-i.size):m.resolve(te());let a=-1,c=i;return o.next(u=>m.forEach(u,(l,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(l)?m.resolve():this.getBaseDocument(t,l,h).next(f=>{c=c.insert(l,f)}))).next(()=>this.populateOverlays(t,u,i)).next(()=>this.computeViews(t,c,u,k())).next(l=>({batchId:a,changes:Pc(l)})))})}getDocumentsMatchingDocumentQuery(t,n){return this.getDocument(t,new T(n)).next(s=>{let r=$e();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r})}getDocumentsMatchingCollectionGroupQuery(t,n,s){const r=n.collectionGroup;let i=$e();return this.indexManager.getCollectionParents(t,r).next(o=>m.forEach(o,a=>{const c=function(u,l){return new Is(l,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(r));return this.getDocumentsMatchingCollectionQuery(t,c,s).next(u=>{u.forEach((l,h)=>{i=i.insert(l,h)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(t,n,s){let r;return this.remoteDocumentCache.getAllFromCollection(t,n.path,s).next(i=>(r=i,this.documentOverlayCache.getOverlaysForCollection(t,n.path,s.largestBatchId))).next(i=>{i.forEach((a,c)=>{const u=c.getKey();r.get(u)===null&&(r=r.insert(u,tt.newInvalidDocument(u)))});let o=$e();return r.forEach((a,c)=>{const u=i.get(a);u!==void 0&&He(u.mutation,c,Et.empty(),G.now()),Ci(n,c)&&(o=o.insert(a,c))}),o})}getBaseDocument(t,n,s){return s===null||s.mutation.type===1?this.remoteDocumentCache.getEntry(t,n):m.resolve(tt.newInvalidDocument(n))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gd{constructor(t){this.wt=t,this.Jn=new Map,this.Yn=new Map}getBundleMetadata(t,n){return m.resolve(this.Jn.get(n))}saveBundleMetadata(t,n){var s;return this.Jn.set(n.id,{id:(s=n).id,version:s.version,createTime:Rt(s.createTime)}),m.resolve()}getNamedQuery(t,n){return m.resolve(this.Yn.get(n))}saveNamedQuery(t,n){return this.Yn.set(n.name,function(s){return{name:s.name,query:Bd(s.bundledQuery),readTime:Rt(s.readTime)}}(n)),m.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wd{constructor(){this.overlays=new Q(T.comparator),this.Xn=new Map}getOverlay(t,n){return m.resolve(this.overlays.get(n))}getOverlays(t,n){const s=te();return m.forEach(n,r=>this.getOverlay(t,r).next(i=>{i!==null&&s.set(r,i)})).next(()=>s)}saveOverlays(t,n,s){return s.forEach((r,i)=>{this.ie(t,n,i)}),m.resolve()}removeOverlaysForBatchId(t,n,s){const r=this.Xn.get(s);return r!==void 0&&(r.forEach(i=>this.overlays=this.overlays.remove(i)),this.Xn.delete(s)),m.resolve()}getOverlaysForCollection(t,n,s){const r=te(),i=n.length+1,o=new T(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,u=c.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===i&&c.largestBatchId>s&&r.set(c.getKey(),c)}return m.resolve(r)}getOverlaysForCollectionGroup(t,n,s,r){let i=new Q((u,l)=>u-l);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>s){let l=i.get(u.largestBatchId);l===null&&(l=te(),i=i.insert(u.largestBatchId,l)),l.set(u.getKey(),u)}}const a=te(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,l)=>a.set(u,l)),!(a.size()>=r)););return m.resolve(a)}ie(t,n,s){const r=this.overlays.get(s.key);if(r!==null){const o=this.Xn.get(r.largestBatchId).delete(s.key);this.Xn.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new $d(n,s));let i=this.Xn.get(n);i===void 0&&(i=k(),this.Xn.set(n,i)),this.Xn.set(n,i.add(s.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _i{constructor(){this.Zn=new W(Y.ts),this.es=new W(Y.ns)}isEmpty(){return this.Zn.isEmpty()}addReference(t,n){const s=new Y(t,n);this.Zn=this.Zn.add(s),this.es=this.es.add(s)}ss(t,n){t.forEach(s=>this.addReference(s,n))}removeReference(t,n){this.rs(new Y(t,n))}os(t,n){t.forEach(s=>this.removeReference(s,n))}us(t){const n=new T(new V([])),s=new Y(n,t),r=new Y(n,t+1),i=[];return this.es.forEachInRange([s,r],o=>{this.rs(o),i.push(o.key)}),i}cs(){this.Zn.forEach(t=>this.rs(t))}rs(t){this.Zn=this.Zn.delete(t),this.es=this.es.delete(t)}hs(t){const n=new T(new V([])),s=new Y(n,t),r=new Y(n,t+1);let i=k();return this.es.forEachInRange([s,r],o=>{i=i.add(o.key)}),i}containsKey(t){const n=new Y(t,0),s=this.Zn.firstAfterOrEqual(n);return s!==null&&t.isEqual(s.key)}}class Y{constructor(t,n){this.key=t,this.ls=n}static ts(t,n){return T.comparator(t.key,n.key)||x(t.ls,n.ls)}static ns(t,n){return x(t.ls,n.ls)||T.comparator(t.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qd{constructor(t,n){this.indexManager=t,this.referenceDelegate=n,this.mutationQueue=[],this.fs=1,this.ds=new W(Y.ts)}checkEmpty(t){return m.resolve(this.mutationQueue.length===0)}addMutationBatch(t,n,s,r){const i=this.fs;this.fs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Vd(i,n,s,r);this.mutationQueue.push(o);for(const a of r)this.ds=this.ds.add(new Y(a.key,i)),this.indexManager.addToCollectionParentIndex(t,a.key.path.popLast());return m.resolve(o)}lookupMutationBatch(t,n){return m.resolve(this._s(n))}getNextMutationBatchAfterBatchId(t,n){const s=n+1,r=this.ws(s),i=r<0?0:r;return m.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return m.resolve(this.mutationQueue.length===0?-1:this.fs-1)}getAllMutationBatches(t){return m.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,n){const s=new Y(n,0),r=new Y(n,Number.POSITIVE_INFINITY),i=[];return this.ds.forEachInRange([s,r],o=>{const a=this._s(o.ls);i.push(a)}),m.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(t,n){let s=new W(x);return n.forEach(r=>{const i=new Y(r,0),o=new Y(r,Number.POSITIVE_INFINITY);this.ds.forEachInRange([i,o],a=>{s=s.add(a.ls)})}),m.resolve(this.gs(s))}getAllMutationBatchesAffectingQuery(t,n){const s=n.path,r=s.length+1;let i=s;T.isDocumentKey(i)||(i=i.child(""));const o=new Y(new T(i),0);let a=new W(x);return this.ds.forEachWhile(c=>{const u=c.key.path;return!!s.isPrefixOf(u)&&(u.length===r&&(a=a.add(c.ls)),!0)},o),m.resolve(this.gs(a))}gs(t){const n=[];return t.forEach(s=>{const r=this._s(s);r!==null&&n.push(r)}),n}removeMutationBatch(t,n){L(this.ys(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.ds;return m.forEach(n.mutations,r=>{const i=new Y(r.key,n.batchId);return s=s.delete(i),this.referenceDelegate.markPotentiallyOrphaned(t,r.key)}).next(()=>{this.ds=s})}In(t){}containsKey(t,n){const s=new Y(n,0),r=this.ds.firstAfterOrEqual(s);return m.resolve(n.isEqual(r&&r.key))}performConsistencyCheck(t){return this.mutationQueue.length,m.resolve()}ys(t,n){return this.ws(t)}ws(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}_s(t){const n=this.ws(t);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xd{constructor(t){this.ps=t,this.docs=new Q(T.comparator),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,n){const s=n.key,r=this.docs.get(s),i=r?r.size:0,o=this.ps(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(t,s.path.popLast())}removeEntry(t){const n=this.docs.get(t);n&&(this.docs=this.docs.remove(t),this.size-=n.size)}getEntry(t,n){const s=this.docs.get(n);return m.resolve(s?s.document.mutableCopy():tt.newInvalidDocument(n))}getEntries(t,n){let s=Pt();return n.forEach(r=>{const i=this.docs.get(r);s=s.insert(r,i?i.document.mutableCopy():tt.newInvalidDocument(r))}),m.resolve(s)}getAllFromCollection(t,n,s){let r=Pt();const i=new T(n.child("")),o=this.docs.getIteratorFrom(i);for(;o.hasNext();){const{key:a,value:{document:c}}=o.getNext();if(!n.isPrefixOf(a.path))break;a.path.length>n.length+1||Ff(Pf(c),s)<=0||(r=r.insert(c.key,c.mutableCopy()))}return m.resolve(r)}getAllFromCollectionGroup(t,n,s,r){A()}Is(t,n){return m.forEach(this.docs,s=>n(s))}newChangeBuffer(t){return new Yd(this)}getSize(t){return m.resolve(this.size)}}class Yd extends zd{constructor(t){super(),this.zn=t}applyChanges(t){const n=[];return this.changes.forEach((s,r)=>{r.isValidDocument()?n.push(this.zn.addEntry(t,r)):this.zn.removeEntry(s)}),m.waitFor(n)}getFromCache(t,n){return this.zn.getEntry(t,n)}getAllFromCache(t,n){return this.zn.getEntries(t,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jd{constructor(t){this.persistence=t,this.Ts=new Me(n=>Si(n),Ii),this.lastRemoteSnapshotVersion=N.min(),this.highestTargetId=0,this.Es=0,this.As=new _i,this.targetCount=0,this.Rs=Ce.An()}forEachTarget(t,n){return this.Ts.forEach((s,r)=>n(r)),m.resolve()}getLastRemoteSnapshotVersion(t){return m.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return m.resolve(this.Es)}allocateTargetId(t){return this.highestTargetId=this.Rs.next(),m.resolve(this.highestTargetId)}setTargetsMetadata(t,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.Es&&(this.Es=n),m.resolve()}vn(t){this.Ts.set(t.target,t);const n=t.targetId;n>this.highestTargetId&&(this.Rs=new Ce(n),this.highestTargetId=n),t.sequenceNumber>this.Es&&(this.Es=t.sequenceNumber)}addTargetData(t,n){return this.vn(n),this.targetCount+=1,m.resolve()}updateTargetData(t,n){return this.vn(n),m.resolve()}removeTargetData(t,n){return this.Ts.delete(n.target),this.As.us(n.targetId),this.targetCount-=1,m.resolve()}removeTargets(t,n,s){let r=0;const i=[];return this.Ts.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.Ts.delete(o),i.push(this.removeMatchingKeysForTargetId(t,a.targetId)),r++)}),m.waitFor(i).next(()=>r)}getTargetCount(t){return m.resolve(this.targetCount)}getTargetData(t,n){const s=this.Ts.get(n)||null;return m.resolve(s)}addMatchingKeys(t,n,s){return this.As.ss(n,s),m.resolve()}removeMatchingKeys(t,n,s){this.As.os(n,s);const r=this.persistence.referenceDelegate,i=[];return r&&n.forEach(o=>{i.push(r.markPotentiallyOrphaned(t,o))}),m.waitFor(i)}removeMatchingKeysForTargetId(t,n){return this.As.us(n),m.resolve()}getMatchingKeysForTargetId(t,n){const s=this.As.hs(n);return m.resolve(s)}containsKey(t,n){return m.resolve(this.As.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zd{constructor(t,n){this.bs={},this.overlays={},this.Ps=new bi(0),this.vs=!1,this.vs=!0,this.referenceDelegate=t(this),this.Vs=new Jd(this),this.indexManager=new jd,this.remoteDocumentCache=function(s){return new Xd(s)}(s=>this.referenceDelegate.Ss(s)),this.wt=new Ud(n),this.Ds=new Gd(this.wt)}start(){return Promise.resolve()}shutdown(){return this.vs=!1,Promise.resolve()}get started(){return this.vs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let n=this.overlays[t.toKey()];return n||(n=new Wd,this.overlays[t.toKey()]=n),n}getMutationQueue(t,n){let s=this.bs[t.toKey()];return s||(s=new Qd(n,this.referenceDelegate),this.bs[t.toKey()]=s),s}getTargetCache(){return this.Vs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ds}runTransaction(t,n,s){b("MemoryPersistence","Starting transaction:",t);const r=new tp(this.Ps.next());return this.referenceDelegate.Cs(),s(r).next(i=>this.referenceDelegate.xs(r).next(()=>i)).toPromise().then(i=>(r.raiseOnCommittedEvent(),i))}Ns(t,n){return m.or(Object.values(this.bs).map(s=>()=>s.containsKey(t,n)))}}class tp extends $f{constructor(t){super(),this.currentSequenceNumber=t}}class Ni{constructor(t){this.persistence=t,this.ks=new _i,this.Ms=null}static Os(t){return new Ni(t)}get Fs(){if(this.Ms)return this.Ms;throw A()}addReference(t,n,s){return this.ks.addReference(s,n),this.Fs.delete(s.toString()),m.resolve()}removeReference(t,n,s){return this.ks.removeReference(s,n),this.Fs.add(s.toString()),m.resolve()}markPotentiallyOrphaned(t,n){return this.Fs.add(n.toString()),m.resolve()}removeTarget(t,n){this.ks.us(n.targetId).forEach(r=>this.Fs.add(r.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(t,n.targetId).next(r=>{r.forEach(i=>this.Fs.add(i.toString()))}).next(()=>s.removeTargetData(t,n))}Cs(){this.Ms=new Set}xs(t){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return m.forEach(this.Fs,s=>{const r=T.fromPath(s);return this.$s(t,r).next(i=>{i||n.removeEntry(r,N.min())})}).next(()=>(this.Ms=null,n.apply(t)))}updateLimboDocument(t,n){return this.$s(t,n).next(s=>{s?this.Fs.delete(n.toString()):this.Fs.add(n.toString())})}Ss(t){return 0}$s(t,n){return m.or([()=>m.resolve(this.ks.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(t,n),()=>this.persistence.Ns(t,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ki{constructor(t,n,s,r){this.targetId=t,this.fromCache=n,this.Pi=s,this.vi=r}static Vi(t,n){let s=k(),r=k();for(const i of n.docChanges)switch(i.type){case 0:s=s.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new ki(t,n.fromCache,s,r)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ep{constructor(){this.Si=!1}initialize(t,n){this.Di=t,this.indexManager=n,this.Si=!0}getDocumentsMatchingQuery(t,n,s,r){return this.Ci(t,n).next(i=>i||this.xi(t,n,r,s)).next(i=>i||this.Ni(t,n))}Ci(t,n){if(Po(n))return m.resolve(null);let s=Lt(n);return this.indexManager.getIndexType(t,s).next(r=>r===0?null:(n.limit!==null&&r===1&&(n=Or(n,null,"F"),s=Lt(n)),this.indexManager.getDocumentsMatchingTarget(t,s).next(i=>{const o=k(...i);return this.Di.getDocuments(t,o).next(a=>this.indexManager.getMinOffset(t,s).next(c=>{const u=this.ki(n,a);return this.Mi(n,u,o,c.readTime)?this.Ci(t,Or(n,null,"F")):this.Oi(t,u,n,c)}))})))}xi(t,n,s,r){return Po(n)||r.isEqual(N.min())?this.Ni(t,n):this.Di.getDocuments(t,s).next(i=>{const o=this.ki(n,i);return this.Mi(n,o,s,r)?this.Ni(t,n):(Ao()<=O.DEBUG&&b("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),xr(n)),this.Oi(t,o,n,Lf(r,-1)))})}ki(t,n){let s=new W(Ic(t));return n.forEach((r,i)=>{Ci(t,i)&&(s=s.add(i))}),s}Mi(t,n,s,r){if(t.limit===null)return!1;if(s.size!==n.size)return!0;const i=t.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Ni(t,n){return Ao()<=O.DEBUG&&b("QueryEngine","Using full collection scan to execute query:",xr(n)),this.Di.getDocumentsMatchingQuery(t,n,qt.min())}Oi(t,n,s,r){return this.Di.getDocumentsMatchingQuery(t,s,r).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class np{constructor(t,n,s,r){this.persistence=t,this.Fi=n,this.wt=r,this.$i=new Q(x),this.Bi=new Me(i=>Si(i),Ii),this.Li=new Map,this.Ui=t.getRemoteDocumentCache(),this.Vs=t.getTargetCache(),this.Ds=t.getBundleCache(),this.qi(s)}qi(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new Hd(this.Ui,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ui.setIndexManager(this.indexManager),this.Fi.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>t.collect(n,this.$i))}}function sp(e,t,n,s){return new np(e,t,n,s)}async function Hc(e,t){const n=D(e);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let r;return n.mutationQueue.getAllMutationBatches(s).next(i=>(r=i,n.qi(t),n.mutationQueue.getAllMutationBatches(s))).next(i=>{const o=[],a=[];let c=k();for(const u of r){o.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}for(const u of i){a.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}return n.localDocuments.getDocuments(s,c).next(u=>({Ki:u,removedBatchIds:o,addedBatchIds:a}))})})}function rp(e,t){const n=D(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const r=t.batch.keys(),i=n.Ui.newChangeBuffer({trackRemovals:!0});return function(o,a,c,u){const l=c.batch,h=l.keys();let f=m.resolve();return h.forEach(p=>{f=f.next(()=>u.getEntry(a,p)).next(v=>{const I=c.docVersions.get(p);L(I!==null),v.version.compareTo(I)<0&&(l.applyToRemoteDocument(v,c),v.isValidDocument()&&(v.setReadTime(c.commitVersion),u.addEntry(v)))})}),f.next(()=>o.mutationQueue.removeMutationBatch(a,l))}(n,s,t,i).next(()=>i.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,r,t.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(o){let a=k();for(let c=0;c<o.mutationResults.length;++c)o.mutationResults[c].transformResults.length>0&&(a=a.add(o.batch.mutations[c].key));return a}(t))).next(()=>n.localDocuments.getDocuments(s,r))})}function Gc(e){const t=D(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",n=>t.Vs.getLastRemoteSnapshotVersion(n))}function ip(e,t){const n=D(e),s=t.snapshotVersion;let r=n.$i;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.Ui.newChangeBuffer({trackRemovals:!0});r=n.$i;const a=[];t.targetChanges.forEach((l,h)=>{const f=r.get(h);if(!f)return;a.push(n.Vs.removeMatchingKeys(i,l.removedDocuments,h).next(()=>n.Vs.addMatchingKeys(i,l.addedDocuments,h)));let p=f.withSequenceNumber(i.currentSequenceNumber);t.targetMismatches.has(h)?p=p.withResumeToken(st.EMPTY_BYTE_STRING,N.min()).withLastLimboFreeSnapshotVersion(N.min()):l.resumeToken.approximateByteSize()>0&&(p=p.withResumeToken(l.resumeToken,s)),r=r.insert(h,p),function(v,I,_){return v.resumeToken.approximateByteSize()===0||I.snapshotVersion.toMicroseconds()-v.snapshotVersion.toMicroseconds()>=3e8?!0:_.addedDocuments.size+_.modifiedDocuments.size+_.removedDocuments.size>0}(f,p,l)&&a.push(n.Vs.updateTargetData(i,p))});let c=Pt(),u=k();if(t.documentUpdates.forEach(l=>{t.resolvedLimboDocuments.has(l)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,l))}),a.push(op(i,o,t.documentUpdates).next(l=>{c=l.Gi,u=l.Qi})),!s.isEqual(N.min())){const l=n.Vs.getLastRemoteSnapshotVersion(i).next(h=>n.Vs.setTargetsMetadata(i,i.currentSequenceNumber,s));a.push(l)}return m.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,u)).next(()=>c)}).then(i=>(n.$i=r,i))}function op(e,t,n){let s=k(),r=k();return n.forEach(i=>s=s.add(i)),t.getEntries(e,s).next(i=>{let o=Pt();return n.forEach((a,c)=>{const u=i.get(a);c.isFoundDocument()!==u.isFoundDocument()&&(r=r.add(a)),c.isNoDocument()&&c.version.isEqual(N.min())?(t.removeEntry(a,c.readTime),o=o.insert(a,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(t.addEntry(c),o=o.insert(a,c)):b("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",c.version)}),{Gi:o,Qi:r}})}function ap(e,t){const n=D(e);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(t===void 0&&(t=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(s,t)))}function cp(e,t){const n=D(e);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let r;return n.Vs.getTargetData(s,t).next(i=>i?(r=i,m.resolve(r)):n.Vs.allocateTargetId(s).next(o=>(r=new ee(t,o,0,s.currentSequenceNumber),n.Vs.addTargetData(s,r).next(()=>r))))}).then(s=>{const r=n.$i.get(s.targetId);return(r===null||s.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.$i=n.$i.insert(s.targetId,s),n.Bi.set(t,s.targetId)),s})}async function Fr(e,t,n){const s=D(e),r=s.$i.get(t),i=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",i,o=>s.persistence.referenceDelegate.removeTarget(o,r))}catch(o){if(!Tn(o))throw o;b("LocalStore",`Failed to update sequence numbers for target ${t}: ${o}`)}s.$i=s.$i.remove(t),s.Bi.delete(r.target)}function Ko(e,t,n){const s=D(e);let r=N.min(),i=k();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,c,u){const l=D(a),h=l.Bi.get(u);return h!==void 0?m.resolve(l.$i.get(h)):l.Vs.getTargetData(c,u)}(s,o,Lt(t)).next(a=>{if(a)return r=a.lastLimboFreeSnapshotVersion,s.Vs.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>s.Fi.getDocumentsMatchingQuery(o,t,n?r:N.min(),n?i:k())).next(a=>(up(s,rd(t),a),{documents:a,ji:i})))}function up(e,t,n){let s=N.min();n.forEach((r,i)=>{i.readTime.compareTo(s)>0&&(s=i.readTime)}),e.Li.set(t,s)}class Ho{constructor(){this.activeTargetIds=Vc()}Xi(t){this.activeTargetIds=this.activeTargetIds.add(t)}Zi(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Yi(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class lp{constructor(){this.Fr=new Ho,this.$r={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,n,s){}addLocalQueryTarget(t){return this.Fr.Xi(t),this.$r[t]||"not-current"}updateQueryState(t,n,s){this.$r[t]=n}removeLocalQueryTarget(t){this.Fr.Zi(t)}isLocalQueryTarget(t){return this.Fr.activeTargetIds.has(t)}clearQueryState(t){delete this.$r[t]}getAllActiveQueryTargets(){return this.Fr.activeTargetIds}isActiveQueryTarget(t){return this.Fr.activeTargetIds.has(t)}start(){return this.Fr=new Ho,Promise.resolve()}handleUserChange(t,n,s){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hp{Br(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Go{constructor(){this.Lr=()=>this.Ur(),this.qr=()=>this.Kr(),this.Gr=[],this.Qr()}Br(t){this.Gr.push(t)}shutdown(){window.removeEventListener("online",this.Lr),window.removeEventListener("offline",this.qr)}Qr(){window.addEventListener("online",this.Lr),window.addEventListener("offline",this.qr)}Ur(){b("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.Gr)t(0)}Kr(){b("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.Gr)t(1)}static V(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fp={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dp{constructor(t){this.jr=t.jr,this.Wr=t.Wr}zr(t){this.Hr=t}Jr(t){this.Yr=t}onMessage(t){this.Xr=t}close(){this.Wr()}send(t){this.jr(t)}Zr(){this.Hr()}eo(t){this.Yr(t)}no(t){this.Xr(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pp extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const n=t.ssl?"https":"http";this.so=n+"://"+t.host,this.io="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}ro(t,n,s,r,i){const o=this.oo(t,n);b("RestConnection","Sending: ",o,s);const a={};return this.uo(a,r,i),this.co(t,o,a,s).then(c=>(b("RestConnection","Received: ",c),c),c=>{throw Do("RestConnection",`${t} failed with error: `,c,"url: ",o,"request:",s),c})}ao(t,n,s,r,i,o){return this.ro(t,n,s,r,i)}uo(t,n,s){t["X-Goog-Api-Client"]="gl-js/ fire/"+xe,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((r,i)=>t[i]=r),s&&s.headers.forEach((r,i)=>t[i]=r)}oo(t,n){const s=fp[t];return`${this.so}/v1/${n}:${s}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams}co(t,n,s,r){return new Promise((i,o)=>{const a=new Cf;a.listenOnce(Tf.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case ir.NO_ERROR:const u=a.getResponseJson();b("Connection","XHR received:",JSON.stringify(u)),i(u);break;case ir.TIMEOUT:b("Connection",'RPC "'+t+'" timed out'),o(new S(g.DEADLINE_EXCEEDED,"Request time out"));break;case ir.HTTP_ERROR:const l=a.getStatus();if(b("Connection",'RPC "'+t+'" failed with status:',l,"response text:",a.getResponseText()),l>0){const h=a.getResponseJson().error;if(h&&h.status&&h.message){const f=function(p){const v=p.toLowerCase().replace(/_/g,"-");return Object.values(g).indexOf(v)>=0?v:g.UNKNOWN}(h.status);o(new S(f,h.message))}else o(new S(g.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new S(g.UNAVAILABLE,"Connection failed."));break;default:A()}}finally{b("Connection",'RPC "'+t+'" completed.')}});const c=JSON.stringify(r);a.send(n,"POST",c,s,15)})}ho(t,n,s){const r=[this.so,"/","google.firestore.v1.Firestore","/",t,"/channel"],i=Ef(),o=bf(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new If({})),this.uo(a.initMessageHeaders,n,s),Ju()||tl()||el()||nl()||sl()||Zu()||(a.httpHeadersOverwriteParam="$httpHeaders");const c=r.join("");b("Connection","Creating WebChannel: "+c,a);const u=i.createWebChannel(c,a);let l=!1,h=!1;const f=new dp({jr:v=>{h?b("Connection","Not sending because WebChannel is closed:",v):(l||(b("Connection","Opening WebChannel transport."),u.open(),l=!0),b("Connection","WebChannel sending:",v),u.send(v))},Wr:()=>u.close()}),p=(v,I,_)=>{v.listen(I,H=>{try{_(H)}catch(it){setTimeout(()=>{throw it},0)}})};return p(u,Mn.EventType.OPEN,()=>{h||b("Connection","WebChannel transport opened.")}),p(u,Mn.EventType.CLOSE,()=>{h||(h=!0,b("Connection","WebChannel transport closed"),f.eo())}),p(u,Mn.EventType.ERROR,v=>{h||(h=!0,Do("Connection","WebChannel transport errored:",v),f.eo(new S(g.UNAVAILABLE,"The operation could not be completed")))}),p(u,Mn.EventType.MESSAGE,v=>{var I;if(!h){const _=v.data[0];L(!!_);const H=_,it=H.error||((I=H[0])===null||I===void 0?void 0:I.error);if(it){b("Connection","WebChannel received error:",it);const Ct=it.status;let Qt=function(fe){const _t=j[fe];if(_t!==void 0)return Mc(_t)}(Ct),yt=it.message;Qt===void 0&&(Qt=g.INTERNAL,yt="Unknown error status: "+Ct+" with message "+it.message),h=!0,f.eo(new S(Qt,yt)),u.close()}else b("Connection","WebChannel received:",_),f.no(_)}}),p(o,Sf.STAT_EVENT,v=>{v.stat===Io.PROXY?b("Connection","Detected buffering proxy"):v.stat===Io.NOPROXY&&b("Connection","Detected no buffering proxy")}),setTimeout(()=>{f.Zr()},0),f}}function ar(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ks(e){return new Sd(e,!0)}class Wc{constructor(t,n,s=1e3,r=1.5,i=6e4){this.js=t,this.timerId=n,this.lo=s,this.fo=r,this._o=i,this.wo=0,this.mo=null,this.yo=Date.now(),this.reset()}reset(){this.wo=0}po(){this.wo=this._o}Io(t){this.cancel();const n=Math.floor(this.wo+this.To()),s=Math.max(0,Date.now()-this.yo),r=Math.max(0,n-s);r>0&&b("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.wo} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.mo=this.js.enqueueAfterDelay(this.timerId,r,()=>(this.yo=Date.now(),t())),this.wo*=this.fo,this.wo<this.lo&&(this.wo=this.lo),this.wo>this._o&&(this.wo=this._o)}Eo(){this.mo!==null&&(this.mo.skipDelay(),this.mo=null)}cancel(){this.mo!==null&&(this.mo.cancel(),this.mo=null)}To(){return(Math.random()-.5)*this.wo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qc{constructor(t,n,s,r,i,o,a,c){this.js=t,this.Ao=s,this.Ro=r,this.bo=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Po=0,this.vo=null,this.Vo=null,this.stream=null,this.So=new Wc(t,n)}Do(){return this.state===1||this.state===5||this.Co()}Co(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.xo()}async stop(){this.Do()&&await this.close(0)}No(){this.state=0,this.So.reset()}ko(){this.Co()&&this.vo===null&&(this.vo=this.js.enqueueAfterDelay(this.Ao,6e4,()=>this.Mo()))}Oo(t){this.Fo(),this.stream.send(t)}async Mo(){if(this.Co())return this.close(0)}Fo(){this.vo&&(this.vo.cancel(),this.vo=null)}$o(){this.Vo&&(this.Vo.cancel(),this.Vo=null)}async close(t,n){this.Fo(),this.$o(),this.So.cancel(),this.Po++,t!==4?this.So.reset():n&&n.code===g.RESOURCE_EXHAUSTED?(Mt(n.toString()),Mt("Using maximum backoff delay to prevent overloading the backend."),this.So.po()):n&&n.code===g.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Bo(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Jr(n)}Bo(){}auth(){this.state=1;const t=this.Lo(this.Po),n=this.Po;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,r])=>{this.Po===n&&this.Uo(s,r)},s=>{t(()=>{const r=new S(g.UNKNOWN,"Fetching auth token failed: "+s.message);return this.qo(r)})})}Uo(t,n){const s=this.Lo(this.Po);this.stream=this.Ko(t,n),this.stream.zr(()=>{s(()=>(this.state=2,this.Vo=this.js.enqueueAfterDelay(this.Ro,1e4,()=>(this.Co()&&(this.state=3),Promise.resolve())),this.listener.zr()))}),this.stream.Jr(r=>{s(()=>this.qo(r))}),this.stream.onMessage(r=>{s(()=>this.onMessage(r))})}xo(){this.state=5,this.So.Io(async()=>{this.state=0,this.start()})}qo(t){return b("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}Lo(t){return n=>{this.js.enqueueAndForget(()=>this.Po===t?n():(b("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class gp extends Qc{constructor(t,n,s,r,i,o){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,r,o),this.wt=i}Ko(t,n){return this.bo.ho("Listen",t,n)}onMessage(t){this.So.reset();const n=Ad(this.wt,t),s=function(r){if(!("targetChange"in r))return N.min();const i=r.targetChange;return i.targetIds&&i.targetIds.length?N.min():i.readTime?Rt(i.readTime):N.min()}(t);return this.listener.Go(n,s)}Qo(t){const n={};n.database=Pr(this.wt),n.addTarget=function(r,i){let o;const a=i.target;return o=Rr(a)?{documents:Nd(r,a)}:{query:kd(r,a)},o.targetId=i.targetId,i.resumeToken.approximateByteSize()>0?o.resumeToken=Bc(r,i.resumeToken):i.snapshotVersion.compareTo(N.min())>0&&(o.readTime=os(r,i.snapshotVersion.toTimestamp())),o}(this.wt,t);const s=Od(this.wt,t);s&&(n.labels=s),this.Oo(n)}jo(t){const n={};n.database=Pr(this.wt),n.removeTarget=t,this.Oo(n)}}class mp extends Qc{constructor(t,n,s,r,i,o){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,r,o),this.wt=i,this.Wo=!1}get zo(){return this.Wo}start(){this.Wo=!1,this.lastStreamToken=void 0,super.start()}Bo(){this.Wo&&this.Ho([])}Ko(t,n){return this.bo.ho("Write",t,n)}onMessage(t){if(L(!!t.streamToken),this.lastStreamToken=t.streamToken,this.Wo){this.So.reset();const n=_d(t.writeResults,t.commitTime),s=Rt(t.commitTime);return this.listener.Jo(s,n)}return L(!t.writeResults||t.writeResults.length===0),this.Wo=!0,this.listener.Yo()}Xo(){const t={};t.database=Pr(this.wt),this.Oo(t)}Ho(t){const n={streamToken:this.lastStreamToken,writes:t.map(s=>Dd(this.wt,s))};this.Oo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yp extends class{}{constructor(t,n,s,r){super(),this.authCredentials=t,this.appCheckCredentials=n,this.bo=s,this.wt=r,this.Zo=!1}tu(){if(this.Zo)throw new S(g.FAILED_PRECONDITION,"The client has already been terminated.")}ro(t,n,s){return this.tu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.bo.ro(t,n,s,r,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===g.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new S(g.UNKNOWN,r.toString())})}ao(t,n,s,r){return this.tu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.bo.ao(t,n,s,i,o,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===g.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new S(g.UNKNOWN,i.toString())})}terminate(){this.Zo=!0}}class vp{constructor(t,n){this.asyncQueue=t,this.onlineStateHandler=n,this.state="Unknown",this.eu=0,this.nu=null,this.su=!0}iu(){this.eu===0&&(this.ru("Unknown"),this.nu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.nu=null,this.ou("Backend didn't respond within 10 seconds."),this.ru("Offline"),Promise.resolve())))}uu(t){this.state==="Online"?this.ru("Unknown"):(this.eu++,this.eu>=1&&(this.cu(),this.ou(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.ru("Offline")))}set(t){this.cu(),this.eu=0,t==="Online"&&(this.su=!1),this.ru(t)}ru(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}ou(t){const n=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.su?(Mt(n),this.su=!1):b("OnlineStateTracker",n)}cu(){this.nu!==null&&(this.nu.cancel(),this.nu=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wp{constructor(t,n,s,r,i){this.localStore=t,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.au=[],this.hu=new Map,this.lu=new Set,this.fu=[],this.du=i,this.du.Br(o=>{s.enqueueAndForget(async()=>{he(this)&&(b("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=D(a);c.lu.add(4),await Cn(c),c._u.set("Unknown"),c.lu.delete(4),await Rs(c)}(this))})}),this._u=new vp(s,r)}}async function Rs(e){if(he(e))for(const t of e.fu)await t(!0)}async function Cn(e){for(const t of e.fu)await t(!1)}function Xc(e,t){const n=D(e);n.hu.has(t.targetId)||(n.hu.set(t.targetId,t),xi(n)?Oi(n):Le(n).Co()&&Ri(n,t))}function Yc(e,t){const n=D(e),s=Le(n);n.hu.delete(t),s.Co()&&Jc(n,t),n.hu.size===0&&(s.Co()?s.ko():he(n)&&n._u.set("Unknown"))}function Ri(e,t){e.wu.Nt(t.targetId),Le(e).Qo(t)}function Jc(e,t){e.wu.Nt(t),Le(e).jo(t)}function Oi(e){e.wu=new Ed({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),te:t=>e.hu.get(t)||null}),Le(e).start(),e._u.iu()}function xi(e){return he(e)&&!Le(e).Do()&&e.hu.size>0}function he(e){return D(e).lu.size===0}function Zc(e){e.wu=void 0}async function Ep(e){e.hu.forEach((t,n)=>{Ri(e,t)})}async function bp(e,t){Zc(e),xi(e)?(e._u.uu(t),Oi(e)):e._u.set("Unknown")}async function Tp(e,t,n){if(e._u.set("Online"),t instanceof Uc&&t.state===2&&t.cause)try{await async function(s,r){const i=r.cause;for(const o of r.targetIds)s.hu.has(o)&&(await s.remoteSyncer.rejectListen(o,i),s.hu.delete(o),s.wu.removeTarget(o))}(e,t)}catch(s){b("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),s),await as(e,s)}else if(t instanceof qn?e.wu.Ut(t):t instanceof $c?e.wu.zt(t):e.wu.Gt(t),!n.isEqual(N.min()))try{const s=await Gc(e.localStore);n.compareTo(s)>=0&&await function(r,i){const o=r.wu.Yt(i);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const u=r.hu.get(c);u&&r.hu.set(c,u.withResumeToken(a.resumeToken,i))}}),o.targetMismatches.forEach(a=>{const c=r.hu.get(a);if(!c)return;r.hu.set(a,c.withResumeToken(st.EMPTY_BYTE_STRING,c.snapshotVersion)),Jc(r,a);const u=new ee(c.target,a,1,c.sequenceNumber);Ri(r,u)}),r.remoteSyncer.applyRemoteEvent(o)}(e,n)}catch(s){b("RemoteStore","Failed to raise snapshot:",s),await as(e,s)}}async function as(e,t,n){if(!Tn(t))throw t;e.lu.add(1),await Cn(e),e._u.set("Offline"),n||(n=()=>Gc(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{b("RemoteStore","Retrying IndexedDB access"),await n(),e.lu.delete(1),await Rs(e)})}function tu(e,t){return t().catch(n=>as(e,n,t))}async function Os(e){const t=D(e),n=Kt(t);let s=t.au.length>0?t.au[t.au.length-1].batchId:-1;for(;Sp(t);)try{const r=await ap(t.localStore,s);if(r===null){t.au.length===0&&n.ko();break}s=r.batchId,Ip(t,r)}catch(r){await as(t,r)}eu(t)&&nu(t)}function Sp(e){return he(e)&&e.au.length<10}function Ip(e,t){e.au.push(t);const n=Kt(e);n.Co()&&n.zo&&n.Ho(t.mutations)}function eu(e){return he(e)&&!Kt(e).Do()&&e.au.length>0}function nu(e){Kt(e).start()}async function Cp(e){Kt(e).Xo()}async function Ap(e){const t=Kt(e);for(const n of e.au)t.Ho(n.mutations)}async function Dp(e,t,n){const s=e.au.shift(),r=Di.from(s,t,n);await tu(e,()=>e.remoteSyncer.applySuccessfulWrite(r)),await Os(e)}async function _p(e,t){t&&Kt(e).zo&&await async function(n,s){if(r=s.code,gd(r)&&r!==g.ABORTED){const i=n.au.shift();Kt(n).No(),await tu(n,()=>n.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Os(n)}var r}(e,t),eu(e)&&nu(e)}async function Wo(e,t){const n=D(e);n.asyncQueue.verifyOperationInProgress(),b("RemoteStore","RemoteStore received new credentials");const s=he(n);n.lu.add(3),await Cn(n),s&&n._u.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.lu.delete(3),await Rs(n)}async function Np(e,t){const n=D(e);t?(n.lu.delete(2),await Rs(n)):t||(n.lu.add(2),await Cn(n),n._u.set("Unknown"))}function Le(e){return e.mu||(e.mu=function(t,n,s){const r=D(t);return r.tu(),new gp(n,r.bo,r.authCredentials,r.appCheckCredentials,r.wt,s)}(e.datastore,e.asyncQueue,{zr:Ep.bind(null,e),Jr:bp.bind(null,e),Go:Tp.bind(null,e)}),e.fu.push(async t=>{t?(e.mu.No(),xi(e)?Oi(e):e._u.set("Unknown")):(await e.mu.stop(),Zc(e))})),e.mu}function Kt(e){return e.gu||(e.gu=function(t,n,s){const r=D(t);return r.tu(),new mp(n,r.bo,r.authCredentials,r.appCheckCredentials,r.wt,s)}(e.datastore,e.asyncQueue,{zr:Cp.bind(null,e),Jr:_p.bind(null,e),Yo:Ap.bind(null,e),Jo:Dp.bind(null,e)}),e.fu.push(async t=>{t?(e.gu.No(),await Os(e)):(await e.gu.stop(),e.au.length>0&&(b("RemoteStore",`Stopping write stream with ${e.au.length} pending writes`),e.au=[]))})),e.gu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mi{constructor(t,n,s,r,i){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=s,this.op=r,this.removalCallback=i,this.deferred=new Ut,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(t,n,s,r,i){const o=Date.now()+s,a=new Mi(t,n,o,r,i);return a.start(s),a}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new S(g.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Li(e,t){if(Mt("AsyncQueue",`${t}: ${e}`),Tn(e))return new S(g.UNAVAILABLE,`${t}: ${e}`);throw e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class we{constructor(t){this.comparator=t?(n,s)=>t(n,s)||T.comparator(n.key,s.key):(n,s)=>T.comparator(n.key,s.key),this.keyedMap=$e(),this.sortedSet=new Q(this.comparator)}static emptySet(t){return new we(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const n=this.keyedMap.get(t);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((n,s)=>(t(n),!1))}add(t){const n=this.delete(t.key);return n.copy(n.keyedMap.insert(t.key,t),n.sortedSet.insert(t,null))}delete(t){const n=this.get(t);return n?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(n)):this}isEqual(t){if(!(t instanceof we)||this.size!==t.size)return!1;const n=this.sortedSet.getIterator(),s=t.sortedSet.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){const t=[];return this.forEach(n=>{t.push(n.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,n){const s=new we;return s.comparator=this.comparator,s.keyedMap=t,s.sortedSet=n,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qo{constructor(){this.yu=new Q(T.comparator)}track(t){const n=t.doc.key,s=this.yu.get(n);s?t.type!==0&&s.type===3?this.yu=this.yu.insert(n,t):t.type===3&&s.type!==1?this.yu=this.yu.insert(n,{type:s.type,doc:t.doc}):t.type===2&&s.type===2?this.yu=this.yu.insert(n,{type:2,doc:t.doc}):t.type===2&&s.type===0?this.yu=this.yu.insert(n,{type:0,doc:t.doc}):t.type===1&&s.type===0?this.yu=this.yu.remove(n):t.type===1&&s.type===2?this.yu=this.yu.insert(n,{type:1,doc:s.doc}):t.type===0&&s.type===1?this.yu=this.yu.insert(n,{type:2,doc:t.doc}):A():this.yu=this.yu.insert(n,t)}pu(){const t=[];return this.yu.inorderTraversal((n,s)=>{t.push(s)}),t}}class Ae{constructor(t,n,s,r,i,o,a,c){this.query=t,this.docs=n,this.oldDocs=s,this.docChanges=r,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c}static fromInitialDocuments(t,n,s,r){const i=[];return n.forEach(o=>{i.push({type:0,doc:o})}),new Ae(t,n,we.emptySet(n),i,s,r,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&As(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const n=this.docChanges,s=t.docChanges;if(n.length!==s.length)return!1;for(let r=0;r<n.length;r++)if(n[r].type!==s[r].type||!n[r].doc.isEqual(s[r].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kp{constructor(){this.Iu=void 0,this.listeners=[]}}class Rp{constructor(){this.queries=new Me(t=>Sc(t),As),this.onlineState="Unknown",this.Tu=new Set}}async function su(e,t){const n=D(e),s=t.query;let r=!1,i=n.queries.get(s);if(i||(r=!0,i=new kp),r)try{i.Iu=await n.onListen(s)}catch(o){const a=Li(o,`Initialization of query '${xr(t.query)}' failed`);return void t.onError(a)}n.queries.set(s,i),i.listeners.push(t),t.Eu(n.onlineState),i.Iu&&t.Au(i.Iu)&&Pi(n)}async function ru(e,t){const n=D(e),s=t.query;let r=!1;const i=n.queries.get(s);if(i){const o=i.listeners.indexOf(t);o>=0&&(i.listeners.splice(o,1),r=i.listeners.length===0)}if(r)return n.queries.delete(s),n.onUnlisten(s)}function Op(e,t){const n=D(e);let s=!1;for(const r of t){const i=r.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.Au(r)&&(s=!0);o.Iu=r}}s&&Pi(n)}function xp(e,t,n){const s=D(e),r=s.queries.get(t);if(r)for(const i of r.listeners)i.onError(n);s.queries.delete(t)}function Pi(e){e.Tu.forEach(t=>{t.next()})}class iu{constructor(t,n,s){this.query=t,this.Ru=n,this.bu=!1,this.Pu=null,this.onlineState="Unknown",this.options=s||{}}Au(t){if(!this.options.includeMetadataChanges){const s=[];for(const r of t.docChanges)r.type!==3&&s.push(r);t=new Ae(t.query,t.docs,t.oldDocs,s,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0)}let n=!1;return this.bu?this.vu(t)&&(this.Ru.next(t),n=!0):this.Vu(t,this.onlineState)&&(this.Su(t),n=!0),this.Pu=t,n}onError(t){this.Ru.error(t)}Eu(t){this.onlineState=t;let n=!1;return this.Pu&&!this.bu&&this.Vu(this.Pu,t)&&(this.Su(this.Pu),n=!0),n}Vu(t,n){if(!t.fromCache)return!0;const s=n!=="Offline";return(!this.options.Du||!s)&&(!t.docs.isEmpty()||n==="Offline")}vu(t){if(t.docChanges.length>0)return!0;const n=this.Pu&&this.Pu.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Su(t){t=Ae.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache),this.bu=!0,this.Ru.next(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ou{constructor(t){this.key=t}}class au{constructor(t){this.key=t}}class Mp{constructor(t,n){this.query=t,this.Fu=n,this.$u=null,this.current=!1,this.Bu=k(),this.mutatedKeys=k(),this.Lu=Ic(t),this.Uu=new we(this.Lu)}get qu(){return this.Fu}Ku(t,n){const s=n?n.Gu:new Qo,r=n?n.Uu:this.Uu;let i=n?n.mutatedKeys:this.mutatedKeys,o=r,a=!1;const c=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,u=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(t.inorderTraversal((l,h)=>{const f=r.get(l),p=Ci(this.query,h)?h:null,v=!!f&&this.mutatedKeys.has(f.key),I=!!p&&(p.hasLocalMutations||this.mutatedKeys.has(p.key)&&p.hasCommittedMutations);let _=!1;f&&p?f.data.isEqual(p.data)?v!==I&&(s.track({type:3,doc:p}),_=!0):this.Qu(f,p)||(s.track({type:2,doc:p}),_=!0,(c&&this.Lu(p,c)>0||u&&this.Lu(p,u)<0)&&(a=!0)):!f&&p?(s.track({type:0,doc:p}),_=!0):f&&!p&&(s.track({type:1,doc:f}),_=!0,(c||u)&&(a=!0)),_&&(p?(o=o.add(p),i=I?i.add(l):i.delete(l)):(o=o.delete(l),i=i.delete(l)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const l=this.query.limitType==="F"?o.last():o.first();o=o.delete(l.key),i=i.delete(l.key),s.track({type:1,doc:l})}return{Uu:o,Gu:s,Mi:a,mutatedKeys:i}}Qu(t,n){return t.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(t,n,s){const r=this.Uu;this.Uu=t.Uu,this.mutatedKeys=t.mutatedKeys;const i=t.Gu.pu();i.sort((u,l)=>function(h,f){const p=v=>{switch(v){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return A()}};return p(h)-p(f)}(u.type,l.type)||this.Lu(u.doc,l.doc)),this.ju(s);const o=n?this.Wu():[],a=this.Bu.size===0&&this.current?1:0,c=a!==this.$u;return this.$u=a,i.length!==0||c?{snapshot:new Ae(this.query,t.Uu,r,i,t.mutatedKeys,a===0,c,!1),zu:o}:{zu:o}}Eu(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({Uu:this.Uu,Gu:new Qo,mutatedKeys:this.mutatedKeys,Mi:!1},!1)):{zu:[]}}Hu(t){return!this.Fu.has(t)&&!!this.Uu.has(t)&&!this.Uu.get(t).hasLocalMutations}ju(t){t&&(t.addedDocuments.forEach(n=>this.Fu=this.Fu.add(n)),t.modifiedDocuments.forEach(n=>{}),t.removedDocuments.forEach(n=>this.Fu=this.Fu.delete(n)),this.current=t.current)}Wu(){if(!this.current)return[];const t=this.Bu;this.Bu=k(),this.Uu.forEach(s=>{this.Hu(s.key)&&(this.Bu=this.Bu.add(s.key))});const n=[];return t.forEach(s=>{this.Bu.has(s)||n.push(new au(s))}),this.Bu.forEach(s=>{t.has(s)||n.push(new ou(s))}),n}Ju(t){this.Fu=t.ji,this.Bu=k();const n=this.Ku(t.documents);return this.applyChanges(n,!0)}Yu(){return Ae.fromInitialDocuments(this.query,this.Uu,this.mutatedKeys,this.$u===0)}}class Lp{constructor(t,n,s){this.query=t,this.targetId=n,this.view=s}}class Pp{constructor(t){this.key=t,this.Xu=!1}}class Fp{constructor(t,n,s,r,i,o){this.localStore=t,this.remoteStore=n,this.eventManager=s,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Zu={},this.tc=new Me(a=>Sc(a),As),this.ec=new Map,this.nc=new Set,this.sc=new Q(T.comparator),this.ic=new Map,this.rc=new _i,this.oc={},this.uc=new Map,this.cc=Ce.Rn(),this.onlineState="Unknown",this.ac=void 0}get isPrimaryClient(){return this.ac===!0}}async function Vp(e,t){const n=Wp(e);let s,r;const i=n.tc.get(t);if(i)s=i.targetId,n.sharedClientState.addLocalQueryTarget(s),r=i.view.Yu();else{const o=await cp(n.localStore,Lt(t));n.isPrimaryClient&&Xc(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,r=await $p(n,t,s,a==="current")}return r}async function $p(e,t,n,s){e.hc=(l,h,f)=>async function(p,v,I,_){let H=v.view.Ku(I);H.Mi&&(H=await Ko(p.localStore,v.query,!1).then(({documents:Qt})=>v.view.Ku(Qt,H)));const it=_&&_.targetChanges.get(v.targetId),Ct=v.view.applyChanges(H,p.isPrimaryClient,it);return Yo(p,v.targetId,Ct.zu),Ct.snapshot}(e,l,h,f);const r=await Ko(e.localStore,t,!0),i=new Mp(t,r.ji),o=i.Ku(r.documents),a=In.createSynthesizedTargetChangeForCurrentChange(n,s&&e.onlineState!=="Offline"),c=i.applyChanges(o,e.isPrimaryClient,a);Yo(e,n,c.zu);const u=new Lp(t,n,i);return e.tc.set(t,u),e.ec.has(n)?e.ec.get(n).push(t):e.ec.set(n,[t]),c.snapshot}async function Up(e,t){const n=D(e),s=n.tc.get(t),r=n.ec.get(s.targetId);if(r.length>1)return n.ec.set(s.targetId,r.filter(i=>!As(i,t))),void n.tc.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await Fr(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),Yc(n.remoteStore,s.targetId),Vr(n,s.targetId)}).catch(bn)):(Vr(n,s.targetId),await Fr(n.localStore,s.targetId,!0))}async function Bp(e,t,n){const s=Qp(e);try{const r=await function(i,o){const a=D(i),c=G.now(),u=o.reduce((f,p)=>f.add(p.key),k());let l,h;return a.persistence.runTransaction("Locally write mutations","readwrite",f=>{let p=Pt(),v=k();return a.Ui.getEntries(f,u).next(I=>{p=I,p.forEach((_,H)=>{H.isValidDocument()||(v=v.add(_))})}).next(()=>a.localDocuments.getOverlayedDocuments(f,p)).next(I=>{l=I;const _=[];for(const H of o){const it=fd(H,l.get(H.key).overlayedDocument);it!=null&&_.push(new Wt(H.key,it,bc(it.value.mapValue),St.exists(!0)))}return a.mutationQueue.addMutationBatch(f,c,_,o)}).next(I=>{h=I;const _=I.applyToLocalDocumentSet(l,v);return a.documentOverlayCache.saveOverlays(f,I.batchId,_)})}).then(()=>({batchId:h.batchId,changes:Pc(l)}))}(s.localStore,t);s.sharedClientState.addPendingMutation(r.batchId),function(i,o,a){let c=i.oc[i.currentUser.toKey()];c||(c=new Q(x)),c=c.insert(o,a),i.oc[i.currentUser.toKey()]=c}(s,r.batchId,n),await An(s,r.changes),await Os(s.remoteStore)}catch(r){const i=Li(r,"Failed to persist write");n.reject(i)}}async function cu(e,t){const n=D(e);try{const s=await ip(n.localStore,t);t.targetChanges.forEach((r,i)=>{const o=n.ic.get(i);o&&(L(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1),r.addedDocuments.size>0?o.Xu=!0:r.modifiedDocuments.size>0?L(o.Xu):r.removedDocuments.size>0&&(L(o.Xu),o.Xu=!1))}),await An(n,s,t)}catch(s){await bn(s)}}function Xo(e,t,n){const s=D(e);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const r=[];s.tc.forEach((i,o)=>{const a=o.view.Eu(t);a.snapshot&&r.push(a.snapshot)}),function(i,o){const a=D(i);a.onlineState=o;let c=!1;a.queries.forEach((u,l)=>{for(const h of l.listeners)h.Eu(o)&&(c=!0)}),c&&Pi(a)}(s.eventManager,t),r.length&&s.Zu.Go(r),s.onlineState=t,s.isPrimaryClient&&s.sharedClientState.setOnlineState(t)}}async function jp(e,t,n){const s=D(e);s.sharedClientState.updateQueryState(t,"rejected",n);const r=s.ic.get(t),i=r&&r.key;if(i){let o=new Q(T.comparator);o=o.insert(i,tt.newNoDocument(i,N.min()));const a=k().add(i),c=new Ns(N.min(),new Map,new W(x),o,a);await cu(s,c),s.sc=s.sc.remove(i),s.ic.delete(t),Fi(s)}else await Fr(s.localStore,t,!1).then(()=>Vr(s,t,n)).catch(bn)}async function qp(e,t){const n=D(e),s=t.batch.batchId;try{const r=await rp(n.localStore,t);lu(n,s,null),uu(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await An(n,r)}catch(r){await bn(r)}}async function zp(e,t,n){const s=D(e);try{const r=await function(i,o){const a=D(i);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let u;return a.mutationQueue.lookupMutationBatch(c,o).next(l=>(L(l!==null),u=l.keys(),a.mutationQueue.removeMutationBatch(c,l))).next(()=>a.mutationQueue.performConsistencyCheck(c)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(c,u,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,u)).next(()=>a.localDocuments.getDocuments(c,u))})}(s.localStore,t);lu(s,t,n),uu(s,t),s.sharedClientState.updateMutationState(t,"rejected",n),await An(s,r)}catch(r){await bn(r)}}function uu(e,t){(e.uc.get(t)||[]).forEach(n=>{n.resolve()}),e.uc.delete(t)}function lu(e,t,n){const s=D(e);let r=s.oc[s.currentUser.toKey()];if(r){const i=r.get(t);i&&(n?i.reject(n):i.resolve(),r=r.remove(t)),s.oc[s.currentUser.toKey()]=r}}function Vr(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const s of e.ec.get(t))e.tc.delete(s),n&&e.Zu.lc(s,n);e.ec.delete(t),e.isPrimaryClient&&e.rc.us(t).forEach(s=>{e.rc.containsKey(s)||hu(e,s)})}function hu(e,t){e.nc.delete(t.path.canonicalString());const n=e.sc.get(t);n!==null&&(Yc(e.remoteStore,n),e.sc=e.sc.remove(t),e.ic.delete(n),Fi(e))}function Yo(e,t,n){for(const s of n)s instanceof ou?(e.rc.addReference(s.key,t),Kp(e,s)):s instanceof au?(b("SyncEngine","Document no longer in limbo: "+s.key),e.rc.removeReference(s.key,t),e.rc.containsKey(s.key)||hu(e,s.key)):A()}function Kp(e,t){const n=t.key,s=n.path.canonicalString();e.sc.get(n)||e.nc.has(s)||(b("SyncEngine","New document in limbo: "+n),e.nc.add(s),Fi(e))}function Fi(e){for(;e.nc.size>0&&e.sc.size<e.maxConcurrentLimboResolutions;){const t=e.nc.values().next().value;e.nc.delete(t);const n=new T(V.fromString(t)),s=e.cc.next();e.ic.set(s,new Pp(n)),e.sc=e.sc.insert(n,s),Xc(e.remoteStore,new ee(Lt(Cs(n.path)),s,2,bi.ot))}}async function An(e,t,n){const s=D(e),r=[],i=[],o=[];s.tc.isEmpty()||(s.tc.forEach((a,c)=>{o.push(s.hc(c,t,n).then(u=>{if(u){s.isPrimaryClient&&s.sharedClientState.updateQueryState(c.targetId,u.fromCache?"not-current":"current"),r.push(u);const l=ki.Vi(c.targetId,u);i.push(l)}}))}),await Promise.all(o),s.Zu.Go(r),await async function(a,c){const u=D(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",l=>m.forEach(c,h=>m.forEach(h.Pi,f=>u.persistence.referenceDelegate.addReference(l,h.targetId,f)).next(()=>m.forEach(h.vi,f=>u.persistence.referenceDelegate.removeReference(l,h.targetId,f)))))}catch(l){if(!Tn(l))throw l;b("LocalStore","Failed to update sequence numbers: "+l)}for(const l of c){const h=l.targetId;if(!l.fromCache){const f=u.$i.get(h),p=f.snapshotVersion,v=f.withLastLimboFreeSnapshotVersion(p);u.$i=u.$i.insert(h,v)}}}(s.localStore,i))}async function Hp(e,t){const n=D(e);if(!n.currentUser.isEqual(t)){b("SyncEngine","User change. New user:",t.toKey());const s=await Hc(n.localStore,t);n.currentUser=t,function(r,i){r.uc.forEach(o=>{o.forEach(a=>{a.reject(new S(g.CANCELLED,i))})}),r.uc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,s.removedBatchIds,s.addedBatchIds),await An(n,s.Ki)}}function Gp(e,t){const n=D(e),s=n.ic.get(t);if(s&&s.Xu)return k().add(s.key);{let r=k();const i=n.ec.get(t);if(!i)return r;for(const o of i){const a=n.tc.get(o);r=r.unionWith(a.view.qu)}return r}}function Wp(e){const t=D(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=cu.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=Gp.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=jp.bind(null,t),t.Zu.Go=Op.bind(null,t.eventManager),t.Zu.lc=xp.bind(null,t.eventManager),t}function Qp(e){const t=D(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=qp.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=zp.bind(null,t),t}class Xp{constructor(){this.synchronizeTabs=!1}async initialize(t){this.wt=ks(t.databaseInfo.databaseId),this.sharedClientState=this.dc(t),this.persistence=this._c(t),await this.persistence.start(),this.localStore=this.wc(t),this.gcScheduler=this.mc(t,this.localStore),this.indexBackfillerScheduler=this.gc(t,this.localStore)}mc(t,n){return null}gc(t,n){return null}wc(t){return sp(this.persistence,new ep,t.initialUser,this.wt)}_c(t){return new Zd(Ni.Os,this.wt)}dc(t){return new lp}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Yp{async initialize(t,n){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Xo(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=Hp.bind(null,this.syncEngine),await Np(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new Rp}createDatastore(t){const n=ks(t.databaseInfo.databaseId),s=(r=t.databaseInfo,new pp(r));var r;return function(i,o,a,c){return new yp(i,o,a,c)}(t.authCredentials,t.appCheckCredentials,s,n)}createRemoteStore(t){return n=this.localStore,s=this.datastore,r=t.asyncQueue,i=a=>Xo(this.syncEngine,a,0),o=Go.V()?new Go:new hp,new wp(n,s,r,i,o);var n,s,r,i,o}createSyncEngine(t,n){return function(s,r,i,o,a,c,u){const l=new Fp(s,r,i,o,a,c);return u&&(l.ac=!0),l}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,n)}terminate(){return async function(t){const n=D(t);b("RemoteStore","RemoteStore shutting down."),n.lu.add(5),await Cn(n),n.du.shutdown(),n._u.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fu{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.Ic(this.observer.next,t)}error(t){this.observer.error?this.Ic(this.observer.error,t):Mt("Uncaught Error in snapshot listener:",t)}Tc(){this.muted=!0}Ic(t,n){this.muted||setTimeout(()=>{this.muted||t(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jp{constructor(t,n,s,r){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=r,this.user=dt.UNAUTHENTICATED,this.clientId=yc.I(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async i=>{b("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(s,i=>(b("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new S(g.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Ut;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const s=Li(n,"Failed to shutdown persistence");t.reject(s)}}),t.promise}}async function Zp(e,t){e.asyncQueue.verifyOperationInProgress(),b("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let s=n.initialUser;e.setCredentialChangeListener(async r=>{s.isEqual(r)||(await Hc(t.localStore,r),s=r)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e.offlineComponents=t}async function tg(e,t){e.asyncQueue.verifyOperationInProgress();const n=await eg(e);b("FirestoreClient","Initializing OnlineComponentProvider");const s=await e.getConfiguration();await t.initialize(n,s),e.setCredentialChangeListener(r=>Wo(t.remoteStore,r)),e.setAppCheckTokenChangeListener((r,i)=>Wo(t.remoteStore,i)),e.onlineComponents=t}async function eg(e){return e.offlineComponents||(b("FirestoreClient","Using default OfflineComponentProvider"),await Zp(e,new Xp)),e.offlineComponents}async function du(e){return e.onlineComponents||(b("FirestoreClient","Using default OnlineComponentProvider"),await tg(e,new Yp)),e.onlineComponents}function ng(e){return du(e).then(t=>t.syncEngine)}async function $r(e){const t=await du(e),n=t.eventManager;return n.onListen=Vp.bind(null,t.syncEngine),n.onUnlisten=Up.bind(null,t.syncEngine),n}function sg(e,t,n={}){const s=new Ut;return e.asyncQueue.enqueueAndForget(async()=>function(r,i,o,a,c){const u=new fu({next:h=>{i.enqueueAndForget(()=>ru(r,l));const f=h.docs.has(o);!f&&h.fromCache?c.reject(new S(g.UNAVAILABLE,"Failed to get document because the client is offline.")):f&&h.fromCache&&a&&a.source==="server"?c.reject(new S(g.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(h)},error:h=>c.reject(h)}),l=new iu(Cs(o.path),u,{includeMetadataChanges:!0,Du:!0});return su(r,l)}(await $r(e),e.asyncQueue,t,n,s)),s.promise}const Jo=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pu(e,t,n){if(!n)throw new S(g.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function rg(e,t,n,s){if(t===!0&&s===!0)throw new S(g.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function Zo(e){if(!T.isDocumentKey(e))throw new S(g.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function ta(e){if(T.isDocumentKey(e))throw new S(g.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function Vi(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const t=function(n){return n.constructor?n.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return typeof e=="function"?"a function":A()}function At(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new S(g.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Vi(e);throw new S(g.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ea{constructor(t){var n;if(t.host===void 0){if(t.ssl!==void 0)throw new S(g.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(n=t.ssl)===null||n===void 0||n;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new S(g.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams,rg("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling)}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $i{constructor(t,n,s){this._authCredentials=n,this._appCheckCredentials=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ea({}),this._settingsFrozen=!1,t instanceof Se?this._databaseId=t:(this._app=t,this._databaseId=function(r){if(!Object.prototype.hasOwnProperty.apply(r.options,["projectId"]))throw new S(g.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Se(r.options.projectId)}(t))}get app(){if(!this._app)throw new S(g.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new S(g.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ea(t),t.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new Df;switch(n.type){case"gapi":const s=n.client;return L(!(typeof s!="object"||s===null||!s.auth||!s.auth.getAuthHeaderValueForFirstParty)),new kf(s,n.sessionIndex||"0",n.iamToken||null);case"provider":return n.client;default:throw new S(g.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const n=Jo.get(t);n&&(b("ComponentProvider","Removing Datastore"),Jo.delete(t),n.terminate())}(this),Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft{constructor(t,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Bt(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new ft(this.firestore,t,this._key)}}class xs{constructor(t,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=t}withConverter(t){return new xs(this.firestore,t,this._query)}}class Bt extends xs{constructor(t,n,s){super(t,n,Cs(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new ft(this.firestore,null,new T(t))}withConverter(t){return new Bt(this.firestore,t,this._path)}}function pe(e,t,...n){if(e=Ot(e),pu("collection","path",t),e instanceof $i){const s=V.fromString(t,...n);return ta(s),new Bt(e,null,s)}{if(!(e instanceof ft||e instanceof Bt))throw new S(g.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=e._path.child(V.fromString(t,...n));return ta(s),new Bt(e.firestore,null,s)}}function Ur(e,t,...n){if(e=Ot(e),arguments.length===1&&(t=yc.I()),pu("doc","path",t),e instanceof $i){const s=V.fromString(t,...n);return Zo(s),new ft(e,null,new T(s))}{if(!(e instanceof ft||e instanceof Bt))throw new S(g.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=e._path.child(V.fromString(t,...n));return Zo(s),new ft(e.firestore,e instanceof Bt?e.converter:null,new T(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ig{constructor(){this.Mc=Promise.resolve(),this.Oc=[],this.Fc=!1,this.$c=[],this.Bc=null,this.Lc=!1,this.Uc=!1,this.qc=[],this.So=new Wc(this,"async_queue_retry"),this.Kc=()=>{const n=ar();n&&b("AsyncQueue","Visibility state changed to "+n.visibilityState),this.So.Eo()};const t=ar();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Kc)}get isShuttingDown(){return this.Fc}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Gc(),this.Qc(t)}enterRestrictedMode(t){if(!this.Fc){this.Fc=!0,this.Uc=t||!1;const n=ar();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Kc)}}enqueue(t){if(this.Gc(),this.Fc)return new Promise(()=>{});const n=new Ut;return this.Qc(()=>this.Fc&&this.Uc?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Oc.push(t),this.jc()))}async jc(){if(this.Oc.length!==0){try{await this.Oc[0](),this.Oc.shift(),this.So.reset()}catch(t){if(!Tn(t))throw t;b("AsyncQueue","Operation failed with retryable error: "+t)}this.Oc.length>0&&this.So.Io(()=>this.jc())}}Qc(t){const n=this.Mc.then(()=>(this.Lc=!0,t().catch(s=>{this.Bc=s,this.Lc=!1;const r=function(i){let o=i.message||"";return i.stack&&(o=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),o}(s);throw Mt("INTERNAL UNHANDLED ERROR: ",r),s}).then(s=>(this.Lc=!1,s))));return this.Mc=n,n}enqueueAfterDelay(t,n,s){this.Gc(),this.qc.indexOf(t)>-1&&(n=0);const r=Mi.createAndSchedule(this,t,n,s,i=>this.Wc(i));return this.$c.push(r),r}Gc(){this.Bc&&A()}verifyOperationInProgress(){}async zc(){let t;do t=this.Mc,await t;while(t!==this.Mc)}Hc(t){for(const n of this.$c)if(n.timerId===t)return!0;return!1}Jc(t){return this.zc().then(()=>{this.$c.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.$c)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.zc()})}Yc(t){this.qc.push(t)}Wc(t){const n=this.$c.indexOf(t);this.$c.splice(n,1)}}function na(e){return function(t,n){if(typeof t!="object"||t===null)return!1;const s=t;for(const r of n)if(r in s&&typeof s[r]=="function")return!0;return!1}(e,["next","error","complete"])}class ce extends $i{constructor(t,n,s){super(t,n,s),this.type="firestore",this._queue=new ig,this._persistenceKey="name"in t?t.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||gu(this),this._firestoreClient.terminate()}}function og(e=ch()){return sh(e,"firestore").getImmediate()}function Ui(e){return e._firestoreClient||gu(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function gu(e){var t;const n=e._freezeSettings(),s=function(r,i,o,a){return new Bf(r,i,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(e._databaseId,((t=e._app)===null||t===void 0?void 0:t.options.appId)||"",e._persistenceKey,n);e._firestoreClient=new Jp(e._authCredentials,e._appCheckCredentials,e._queue,s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ms{constructor(...t){for(let n=0;n<t.length;++n)if(t[n].length===0)throw new S(g.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new at(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class De{constructor(t){this._byteString=t}static fromBase64String(t){try{return new De(st.fromBase64String(t))}catch(n){throw new S(g.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(t){return new De(st.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bi{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ji{constructor(t,n){if(!isFinite(t)||t<-90||t>90)throw new S(g.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(n)||n<-180||n>180)throw new S(g.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=t,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return x(this._lat,t._lat)||x(this._long,t._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ag=/^__.*__$/;class cg{constructor(t,n,s){this.data=t,this.fieldMask=n,this.fieldTransforms=s}toMutation(t,n){return this.fieldMask!==null?new Wt(t,this.data,this.fieldMask,n,this.fieldTransforms):new Sn(t,this.data,n,this.fieldTransforms)}}class mu{constructor(t,n,s){this.data=t,this.fieldMask=n,this.fieldTransforms=s}toMutation(t,n){return new Wt(t,this.data,this.fieldMask,n,this.fieldTransforms)}}function yu(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw A()}}class qi{constructor(t,n,s,r,i,o){this.settings=t,this.databaseId=n,this.wt=s,this.ignoreUndefinedProperties=r,i===void 0&&this.Xc(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Zc(){return this.settings.Zc}ta(t){return new qi(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.wt,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ea(t){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(t),r=this.ta({path:s,na:!1});return r.sa(t),r}ia(t){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(t),r=this.ta({path:s,na:!1});return r.Xc(),r}ra(t){return this.ta({path:void 0,na:!0})}oa(t){return cs(t,this.settings.methodName,this.settings.ua||!1,this.path,this.settings.ca)}contains(t){return this.fieldMask.find(n=>t.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>t.isPrefixOf(n.field))!==void 0}Xc(){if(this.path)for(let t=0;t<this.path.length;t++)this.sa(this.path.get(t))}sa(t){if(t.length===0)throw this.oa("Document fields must not be empty");if(yu(this.Zc)&&ag.test(t))throw this.oa('Document fields cannot begin and end with "__"')}}class ug{constructor(t,n,s){this.databaseId=t,this.ignoreUndefinedProperties=n,this.wt=s||ks(t)}aa(t,n,s,r=!1){return new qi({Zc:t,methodName:n,ca:s,path:at.emptyPath(),na:!1,ua:r},this.databaseId,this.wt,this.ignoreUndefinedProperties)}}function zi(e){const t=e._freezeSettings(),n=ks(e._databaseId);return new ug(e._databaseId,!!t.ignoreUndefinedProperties,n)}function vu(e,t,n,s,r,i={}){const o=e.aa(i.merge||i.mergeFields?2:0,t,n,r);Ki("Data must be an object, but it was:",o,s);const a=wu(s,o);let c,u;if(i.merge)c=new Et(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const l=[];for(const h of i.mergeFields){const f=Br(t,h,n);if(!o.contains(f))throw new S(g.INVALID_ARGUMENT,`Field '${f}' is specified in your field mask but missing from your input data.`);bu(l,f)||l.push(f)}c=new Et(l),u=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,u=o.fieldTransforms;return new cg(new pt(a),c,u)}class Ls extends Bi{_toFieldTransform(t){if(t.Zc!==2)throw t.Zc===1?t.oa(`${this._methodName}() can only appear at the top level of your update data`):t.oa(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof Ls}}function lg(e,t,n,s){const r=e.aa(1,t,n);Ki("Data must be an object, but it was:",r,s);const i=[],o=pt.empty();le(s,(c,u)=>{const l=Hi(t,c,n);u=Ot(u);const h=r.ia(l);if(u instanceof Ls)i.push(l);else{const f=Ps(u,h);f!=null&&(i.push(l),o.set(l,f))}});const a=new Et(i);return new mu(o,a,r.fieldTransforms)}function hg(e,t,n,s,r,i){const o=e.aa(1,t,n),a=[Br(t,s,n)],c=[r];if(i.length%2!=0)throw new S(g.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let f=0;f<i.length;f+=2)a.push(Br(t,i[f])),c.push(i[f+1]);const u=[],l=pt.empty();for(let f=a.length-1;f>=0;--f)if(!bu(u,a[f])){const p=a[f];let v=c[f];v=Ot(v);const I=o.ia(p);if(v instanceof Ls)u.push(p);else{const _=Ps(v,I);_!=null&&(u.push(p),l.set(p,_))}}const h=new Et(u);return new mu(l,h,o.fieldTransforms)}function Ps(e,t){if(Eu(e=Ot(e)))return Ki("Unsupported field value:",t,e),wu(e,t);if(e instanceof Bi)return function(n,s){if(!yu(s.Zc))throw s.oa(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.oa(`${n._methodName}() is not currently supported inside arrays`);const r=n._toFieldTransform(s);r&&s.fieldTransforms.push(r)}(e,t),null;if(e===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.na&&t.Zc!==4)throw t.oa("Nested arrays are not supported");return function(n,s){const r=[];let i=0;for(const o of n){let a=Ps(o,s.ra(i));a==null&&(a={nullValue:"NULL_VALUE"}),r.push(a),i++}return{arrayValue:{values:r}}}(e,t)}return function(n,s){if((n=Ot(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return od(s.wt,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const r=G.fromDate(n);return{timestampValue:os(s.wt,r)}}if(n instanceof G){const r=new G(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:os(s.wt,r)}}if(n instanceof ji)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof De)return{bytesValue:Bc(s.wt,n._byteString)};if(n instanceof ft){const r=s.databaseId,i=n.firestore._databaseId;if(!i.isEqual(r))throw s.oa(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:Ai(n.firestore._databaseId||s.databaseId,n._key.path)}}throw s.oa(`Unsupported field value: ${Vi(n)}`)}(e,t)}function wu(e,t){const n={};return vc(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):le(e,(s,r)=>{const i=Ps(r,t.ea(s));i!=null&&(n[s]=i)}),{mapValue:{fields:n}}}function Eu(e){return!(typeof e!="object"||e===null||e instanceof Array||e instanceof Date||e instanceof G||e instanceof ji||e instanceof De||e instanceof ft||e instanceof Bi)}function Ki(e,t,n){if(!Eu(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const s=Vi(n);throw s==="an object"?t.oa(e+" a custom object"):t.oa(e+" "+s)}}function Br(e,t,n){if((t=Ot(t))instanceof Ms)return t._internalPath;if(typeof t=="string")return Hi(e,t);throw cs("Field path arguments must be of type string or ",e,!1,void 0,n)}const fg=new RegExp("[~\\*/\\[\\]]");function Hi(e,t,n){if(t.search(fg)>=0)throw cs(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new Ms(...t.split("."))._internalPath}catch{throw cs(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function cs(e,t,n,s,r){const i=s&&!s.isEmpty(),o=r!==void 0;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${s}`),o&&(c+=` in document ${r}`),c+=")"),new S(g.INVALID_ARGUMENT,a+e+c)}function bu(e,t){return e.some(n=>n.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tu{constructor(t,n,s,r,i){this._firestore=t,this._userDataWriter=n,this._key=s,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new ft(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new dg(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const n=this._document.data.field(Su("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n)}}}class dg extends Tu{data(){return super.data()}}function Su(e,t){return typeof t=="string"?Hi(e,t):t instanceof Ms?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ue{constructor(t,n){this.hasPendingWrites=t,this.fromCache=n}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Iu extends Tu{constructor(t,n,s,r,i,o){super(t,n,s,r,o),this._firestore=t,this._firestoreImpl=t,this.metadata=i}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const n=new zn(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,n={}){if(this._document){const s=this._document.data.field(Su("DocumentSnapshot.get",t));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class zn extends Iu{data(t={}){return super.data(t)}}class pg{constructor(t,n,s,r){this._firestore=t,this._userDataWriter=n,this._snapshot=r,this.metadata=new Ue(r.hasPendingWrites,r.fromCache),this.query=s}get docs(){const t=[];return this.forEach(n=>t.push(n)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,n){this._snapshot.docs.forEach(s=>{t.call(n,new zn(this._firestore,this._userDataWriter,s.key,s,new Ue(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const n=!!t.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new S(g.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,r){if(s._snapshot.oldDocs.isEmpty()){let i=0;return s._snapshot.docChanges.map(o=>({type:"added",doc:new zn(s._firestore,s._userDataWriter,o.doc.key,o.doc,new Ue(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter),oldIndex:-1,newIndex:i++}))}{let i=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>r||o.type!==3).map(o=>{const a=new zn(s._firestore,s._userDataWriter,o.doc.key,o.doc,new Ue(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,u=-1;return o.type!==0&&(c=i.indexOf(o.doc.key),i=i.delete(o.doc.key)),o.type!==1&&(i=i.add(o.doc),u=i.indexOf(o.doc.key)),{type:gg(o.type),doc:a,oldIndex:c,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function gg(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return A()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mg(e){if(e.limitType==="L"&&e.explicitOrderBy.length===0)throw new S(g.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yg{convertValue(t,n="none"){switch(ae(t)){case 0:return null;case 1:return t.booleanValue;case 2:return q(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,n);case 5:return t.stringValue;case 6:return this.convertBytes(Te(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,n);case 10:return this.convertObject(t.mapValue,n);default:throw A()}}convertObject(t,n){const s={};return le(t.fields,(r,i)=>{s[r]=this.convertValue(i,n)}),s}convertGeoPoint(t){return new ji(q(t.latitude),q(t.longitude))}convertArray(t,n){return(t.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(t,n){switch(n){case"previous":const s=Ec(t);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(on(t));default:return null}}convertTimestamp(t){const n=zt(t);return new G(n.seconds,n.nanos)}convertDocumentKey(t,n){const s=V.fromString(t);L(Kc(s));const r=new Se(s.get(1),s.get(3)),i=new T(s.popFirst(5));return r.isEqual(n)||Mt(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cu(e,t,n){let s;return s=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vg(e){e=At(e,ft);const t=At(e.firestore,ce);return sg(Ui(t),e._key).then(n=>Du(t,e,n))}class Au extends yg{constructor(t){super(),this.firestore=t}convertBytes(t){return new De(t)}convertReference(t){const n=this.convertDocumentKey(t,this.firestore._databaseId);return new ft(this.firestore,null,n)}}function wg(e,t,n){e=At(e,ft);const s=At(e.firestore,ce),r=Cu(e.converter,t,n);return Gi(s,[vu(zi(s),"setDoc",e._key,r,e.converter!==null,n).toMutation(e._key,St.none())])}function Eg(e,t,n,...s){e=At(e,ft);const r=At(e.firestore,ce),i=zi(r);let o;return o=typeof(t=Ot(t))=="string"||t instanceof Ms?hg(i,"updateDoc",e._key,t,n,s):lg(i,"updateDoc",e._key,t),Gi(r,[o.toMutation(e._key,St.exists(!0))])}function sa(e,t){const n=At(e.firestore,ce),s=Ur(e),r=Cu(e.converter,t);return Gi(n,[vu(zi(e.firestore),"addDoc",s._key,r,e.converter!==null,{}).toMutation(s._key,St.exists(!1))]).then(()=>s)}function cr(e,...t){var n,s,r;e=Ot(e);let i={includeMetadataChanges:!1},o=0;typeof t[o]!="object"||na(t[o])||(i=t[o],o++);const a={includeMetadataChanges:i.includeMetadataChanges};if(na(t[o])){const h=t[o];t[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),t[o+1]=(s=h.error)===null||s===void 0?void 0:s.bind(h),t[o+2]=(r=h.complete)===null||r===void 0?void 0:r.bind(h)}let c,u,l;if(e instanceof ft)u=At(e.firestore,ce),l=Cs(e._key.path),c={next:h=>{t[o]&&t[o](Du(u,e,h))},error:t[o+1],complete:t[o+2]};else{const h=At(e,xs);u=At(h.firestore,ce),l=h._query;const f=new Au(u);c={next:p=>{t[o]&&t[o](new pg(u,f,h,p))},error:t[o+1],complete:t[o+2]},mg(e._query)}return function(h,f,p,v){const I=new fu(v),_=new iu(f,I,p);return h.asyncQueue.enqueueAndForget(async()=>su(await $r(h),_)),()=>{I.Tc(),h.asyncQueue.enqueueAndForget(async()=>ru(await $r(h),_))}}(Ui(u),l,a,c)}function Gi(e,t){return function(n,s){const r=new Ut;return n.asyncQueue.enqueueAndForget(async()=>Bp(await ng(n),s,r)),r.promise}(Ui(e),t)}function Du(e,t,n){const s=n.docs.get(t._key),r=new Au(e);return new Iu(e,r,t._key,s,new Ue(n.hasPendingWrites,n.fromCache),t.converter)}(function(e,t=!0){(function(n){xe=n})(oh),Hn(new Xe("firestore",(n,{options:s})=>{const r=n.getProvider("app").getImmediate(),i=new ce(r,new _f(n.getProvider("auth-internal")),new Of(n.getProvider("app-check-internal")));return s=Object.assign({useFetchStreams:t},s),i._setSettings(s),i},"PUBLIC")),ye(Co,"3.4.14",e),ye(Co,"3.4.14","esm2017")})();function bg(e){let t,n,s,r,i,o,a,c,u,l,h,f;return{c(){t=wt("div"),n=wt("h2"),n.textContent="Create a new Lobby",s=Vt(),r=wt("button"),r.textContent="Create Lobby",i=Vt(),o=wt("h2"),o.textContent="Join a Lobby",a=Vt(),c=wt("input"),u=Vt(),l=wt("button"),l.textContent="Join",Vn(c,"type","string")},m(p,v){Tt(p,t,v),Nt(t,n),Nt(t,s),Nt(t,r),Nt(t,i),Nt(t,o),Nt(t,a),Nt(t,c),Ji(c,e[0]),Nt(t,u),Nt(t,l),h||(f=[Fn(r,"click",e[1]),Fn(c,"input",e[4]),Fn(l,"click",e[2])],h=!0)},p(p,[v]){v&1&&Ji(c,p[0])},i:jt,o:jt,d(p){p&&vt(t),h=!1,_e(f)}}}function Tg(e,t,n){let{onLobbyConnected:s}=t,r="";async function i(){const c=Ur(pe(ra,"lobbies")),u=pe(c,"offerCandidates"),l=pe(c,"answerCandidates");n(0,r=c.id),bt.onicecandidate=p=>{p.candidate&&sa(u,p.candidate.toJSON())};const h=await bt.createOffer();await bt.setLocalDescription(h);const f={sdp:h.sdp,type:h.type};await wg(c,{offer:f}),cr(c,p=>{const v=p.data();if(!bt.currentRemoteDescription&&(v==null?void 0:v.answer)){const I=new RTCSessionDescription(v.answer);bt.setRemoteDescription(I)}}),cr(l,p=>{p.docChanges().forEach(v=>{if(v.type==="added"){const I=new RTCIceCandidate(v.doc.data());bt.addIceCandidate(I)}})})}async function o(){const c=Ur(pe(ra,"lobbies"),r),u=pe(c,"answerCandidates"),l=pe(c,"offerCandidates");bt.onicecandidate=I=>{I.candidate&&sa(u,I.candidate.toJSON())};const f=(await vg(c)).data().offer;await bt.setRemoteDescription(new RTCSessionDescription(f));const p=await bt.createAnswer();await bt.setLocalDescription(p);const v={type:p.type,sdp:p.sdp};await Eg(c,{answer:v}),cr(l,I=>{I.docChanges().forEach(_=>{if(console.log(_),_.type==="added"){let H=_.doc.data();bt.addIceCandidate(new RTCIceCandidate(H))}})}),s()}function a(){r=this.value,n(0,r)}return e.$$set=c=>{"onLobbyConnected"in c&&n(3,s=c.onLobbyConnected)},[r,i,o,s,a]}class Sg extends Wr{constructor(t){super(),Gr(this,t,Tg,bg,qr,{onLobbyConnected:3})}}function Ig(e){let t,n,s,r,i,o,a,c,u,l,h;return{c(){t=wt("div"),t.textContent="Game",n=Vt(),s=wt("p"),s.textContent="Local",r=Vt(),i=wt("div"),o=Vt(),a=wt("p"),a.textContent="Peer",c=Vt(),u=wt("div"),Vn(t,"class","svelte-7e01qv"),Vn(i,"class","svelte-7e01qv"),Ks(i,"background-color",e[0],!1),Vn(u,"class","svelte-7e01qv"),Ks(u,"background-color",e[1],!1)},m(f,p){Tt(f,t,p),Tt(f,n,p),Tt(f,s,p),Tt(f,r,p),Tt(f,i,p),Tt(f,o,p),Tt(f,a,p),Tt(f,c,p),Tt(f,u,p),l||(h=Fn(i,"click",e[2]),l=!0)},p(f,[p]){p&1&&Ks(i,"background-color",f[0],!1)},i:jt,o:jt,d(f){f&&vt(t),f&&vt(n),f&&vt(s),f&&vt(r),f&&vt(i),f&&vt(o),f&&vt(a),f&&vt(c),f&&vt(u),l=!1,h()}}}function Cg(e,t,n){let s="black",r="black";function i(){n(0,s="#"+Math.floor(Math.random()*16777215).toString(16))}return[s,r,i]}class Ag extends Wr{constructor(t){super(),Gr(this,t,Cg,Ig,qr,{})}}function Dg(e){let t,n;return t=new Ag({}),{c(){aa(t.$$.fragment)},m(s,r){Kr(t,s,r),n=!0},p:jt,i(s){n||(Qe(t.$$.fragment,s),n=!0)},o(s){Kn(t.$$.fragment,s),n=!1},d(s){Hr(t,s)}}}function _g(e){let t,n;return t=new Sg({props:{onLobbyConnected:e[1]}}),{c(){aa(t.$$.fragment)},m(s,r){Kr(t,s,r),n=!0},p:jt,i(s){n||(Qe(t.$$.fragment,s),n=!0)},o(s){Kn(t.$$.fragment,s),n=!1},d(s){Hr(t,s)}}}function Ng(e){let t,n,s,r;const i=[_g,Dg],o=[];function a(c,u){return c[0]?1:0}return n=a(e),s=o[n]=i[n](e),{c(){t=wt("main"),s.c()},m(c,u){Tt(c,t,u),o[n].m(t,null),r=!0},p(c,[u]){let l=n;n=a(c),n===l?o[n].p(c,u):(Ku(),Kn(o[l],1,1,()=>{o[l]=null}),Hu(),s=o[n],s?s.p(c,u):(s=o[n]=i[n](c),s.c()),Qe(s,1),s.m(t,null))},i(c){r||(Qe(s),r=!0)},o(c){Kn(s),r=!1},d(c){c&&vt(t),o[n].d()}}}function kg(e,t,n){let s=!1;function r(){n(0,s=!0)}return[s,r]}class Rg extends Wr{constructor(t){super(),Gr(this,t,kg,Ng,qr,{})}}var Og="firebase",xg="9.9.3";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ye(Og,xg,"app");var Mg=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Lg(e){var t=e.default;if(typeof t=="function"){var n=function(){return t.apply(this,arguments)};n.prototype=t.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(e).forEach(function(s){var r=Object.getOwnPropertyDescriptor(e,s);Object.defineProperty(n,s,r.get?r:{enumerable:!0,get:function(){return e[s]}})}),n}var Wi={exports:{}};const Pg={},Fg=Object.freeze(Object.defineProperty({__proto__:null,default:Pg},Symbol.toStringTag,{value:"Module"})),_u=Lg(Fg);var hn={exports:{}},Nu={},Vg=function(t){return t&&typeof t=="object"&&typeof t.copy=="function"&&typeof t.fill=="function"&&typeof t.readUInt8=="function"},jr={exports:{}};typeof Object.create=="function"?jr.exports=function(t,n){t.super_=n,t.prototype=Object.create(n.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}})}:jr.exports=function(t,n){t.super_=n;var s=function(){};s.prototype=n.prototype,t.prototype=new s,t.prototype.constructor=t};(function(e){var t=/%[sdj%]/g;e.format=function(d){if(!Ct(d)){for(var y=[],E=0;E<arguments.length;E++)y.push(r(arguments[E]));return y.join(" ")}for(var E=1,P=arguments,ot=P.length,$=String(d).replace(t,function(U){if(U==="%%")return"%";if(E>=ot)return U;switch(U){case"%s":return String(P[E++]);case"%d":return Number(P[E++]);case"%j":try{return JSON.stringify(P[E++])}catch{return"[Circular]"}default:return U}}),M=P[E];E<ot;M=P[++E])_(M)||!_t(M)?$+=" "+M:$+=" "+r(M);return $},e.deprecate=function(d,y){if(yt(Mg.process))return function(){return e.deprecate(d,y).apply(this,arguments)};if(process.noDeprecation===!0)return d;var E=!1;function P(){if(!E){if(process.throwDeprecation)throw new Error(y);process.traceDeprecation?console.trace(y):console.error(y),E=!0}return d.apply(this,arguments)}return P};var n={},s;e.debuglog=function(d){if(yt(s)&&(s=process.env.NODE_DEBUG||""),d=d.toUpperCase(),!n[d])if(new RegExp("\\b"+d+"\\b","i").test(s)){var y=process.pid;n[d]=function(){var E=e.format.apply(e,arguments);console.error("%s %d: %s",d,y,E)}}else n[d]=function(){};return n[d]};function r(d,y){var E={seen:[],stylize:o};return arguments.length>=3&&(E.depth=arguments[2]),arguments.length>=4&&(E.colors=arguments[3]),I(y)?E.showHidden=y:y&&e._extend(E,y),yt(E.showHidden)&&(E.showHidden=!1),yt(E.depth)&&(E.depth=2),yt(E.colors)&&(E.colors=!1),yt(E.customInspect)&&(E.customInspect=!0),E.colors&&(E.stylize=i),c(E,d,E.depth)}e.inspect=r,r.colors={bold:[1,22],italic:[3,23],underline:[4,24],inverse:[7,27],white:[37,39],grey:[90,39],black:[30,39],blue:[34,39],cyan:[36,39],green:[32,39],magenta:[35,39],red:[31,39],yellow:[33,39]},r.styles={special:"cyan",number:"yellow",boolean:"yellow",undefined:"grey",null:"bold",string:"green",date:"magenta",regexp:"red"};function i(d,y){var E=r.styles[y];return E?"\x1B["+r.colors[E][0]+"m"+d+"\x1B["+r.colors[E][1]+"m":d}function o(d,y){return d}function a(d){var y={};return d.forEach(function(E,P){y[E]=!0}),y}function c(d,y,E){if(d.customInspect&&y&&_n(y.inspect)&&y.inspect!==e.inspect&&!(y.constructor&&y.constructor.prototype===y)){var P=y.inspect(E,d);return Ct(P)||(P=c(d,P,E)),P}var ot=u(d,y);if(ot)return ot;var $=Object.keys(y),M=a($);if(d.showHidden&&($=Object.getOwnPropertyNames(y)),Dn(y)&&($.indexOf("message")>=0||$.indexOf("description")>=0))return l(y);if($.length===0){if(_n(y)){var U=y.name?": "+y.name:"";return d.stylize("[Function"+U+"]","special")}if(fe(y))return d.stylize(RegExp.prototype.toString.call(y),"regexp");if(Bs(y))return d.stylize(Date.prototype.toString.call(y),"date");if(Dn(y))return l(y)}var X="",Ft=!1,Nn=["{","}"];if(v(y)&&(Ft=!0,Nn=["[","]"]),_n(y)){var Pu=y.name?": "+y.name:"";X=" [Function"+Pu+"]"}if(fe(y)&&(X=" "+RegExp.prototype.toString.call(y)),Bs(y)&&(X=" "+Date.prototype.toUTCString.call(y)),Dn(y)&&(X=" "+l(y)),$.length===0&&(!Ft||y.length==0))return Nn[0]+X+Nn[1];if(E<0)return fe(y)?d.stylize(RegExp.prototype.toString.call(y),"regexp"):d.stylize("[Object]","special");d.seen.push(y);var zs;return Ft?zs=h(d,y,E,M,$):zs=$.map(function(Fu){return f(d,y,E,M,Fu,Ft)}),d.seen.pop(),p(zs,X,Nn)}function u(d,y){if(yt(y))return d.stylize("undefined","undefined");if(Ct(y)){var E="'"+JSON.stringify(y).replace(/^"|"$/g,"").replace(/'/g,"\\'").replace(/\\"/g,'"')+"'";return d.stylize(E,"string")}if(it(y))return d.stylize(""+y,"number");if(I(y))return d.stylize(""+y,"boolean");if(_(y))return d.stylize("null","null")}function l(d){return"["+Error.prototype.toString.call(d)+"]"}function h(d,y,E,P,ot){for(var $=[],M=0,U=y.length;M<U;++M)Xi(y,String(M))?$.push(f(d,y,E,P,String(M),!0)):$.push("");return ot.forEach(function(X){X.match(/^\d+$/)||$.push(f(d,y,E,P,X,!0))}),$}function f(d,y,E,P,ot,$){var M,U,X;if(X=Object.getOwnPropertyDescriptor(y,ot)||{value:y[ot]},X.get?X.set?U=d.stylize("[Getter/Setter]","special"):U=d.stylize("[Getter]","special"):X.set&&(U=d.stylize("[Setter]","special")),Xi(P,ot)||(M="["+ot+"]"),U||(d.seen.indexOf(X.value)<0?(_(E)?U=c(d,X.value,null):U=c(d,X.value,E-1),U.indexOf(`
`)>-1&&($?U=U.split(`
`).map(function(Ft){return"  "+Ft}).join(`
`).substr(2):U=`
`+U.split(`
`).map(function(Ft){return"   "+Ft}).join(`
`))):U=d.stylize("[Circular]","special")),yt(M)){if($&&ot.match(/^\d+$/))return U;M=JSON.stringify(""+ot),M.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?(M=M.substr(1,M.length-2),M=d.stylize(M,"name")):(M=M.replace(/'/g,"\\'").replace(/\\"/g,'"').replace(/(^"|"$)/g,"'"),M=d.stylize(M,"string"))}return M+": "+U}function p(d,y,E){var P=d.reduce(function(ot,$){return $.indexOf(`
`)>=0,ot+$.replace(/\u001b\[\d\d?m/g,"").length+1},0);return P>60?E[0]+(y===""?"":y+`
 `)+" "+d.join(`,
  `)+" "+E[1]:E[0]+y+" "+d.join(", ")+" "+E[1]}function v(d){return Array.isArray(d)}e.isArray=v;function I(d){return typeof d=="boolean"}e.isBoolean=I;function _(d){return d===null}e.isNull=_;function H(d){return d==null}e.isNullOrUndefined=H;function it(d){return typeof d=="number"}e.isNumber=it;function Ct(d){return typeof d=="string"}e.isString=Ct;function Qt(d){return typeof d=="symbol"}e.isSymbol=Qt;function yt(d){return d===void 0}e.isUndefined=yt;function fe(d){return _t(d)&&js(d)==="[object RegExp]"}e.isRegExp=fe;function _t(d){return typeof d=="object"&&d!==null}e.isObject=_t;function Bs(d){return _t(d)&&js(d)==="[object Date]"}e.isDate=Bs;function Dn(d){return _t(d)&&(js(d)==="[object Error]"||d instanceof Error)}e.isError=Dn;function _n(d){return typeof d=="function"}e.isFunction=_n;function xu(d){return d===null||typeof d=="boolean"||typeof d=="number"||typeof d=="string"||typeof d=="symbol"||typeof d>"u"}e.isPrimitive=xu,e.isBuffer=Vg;function js(d){return Object.prototype.toString.call(d)}function qs(d){return d<10?"0"+d.toString(10):d.toString(10)}var Mu=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];function Lu(){var d=new Date,y=[qs(d.getHours()),qs(d.getMinutes()),qs(d.getSeconds())].join(":");return[d.getDate(),Mu[d.getMonth()],y].join(" ")}e.log=function(){console.log("%s - %s",Lu(),e.format.apply(e,arguments))},e.inherits=jr.exports,e._extend=function(d,y){if(!y||!_t(y))return d;for(var E=Object.keys(y),P=E.length;P--;)d[E[P]]=y[E[P]];return d};function Xi(d,y){return Object.prototype.hasOwnProperty.call(d,y)}})(Nu);var $g=process.platform==="win32",It=Nu;function Fs(e,t){for(var n=[],s=0;s<e.length;s++){var r=e[s];!r||r==="."||(r===".."?n.length&&n[n.length-1]!==".."?n.pop():t&&n.push(".."):n.push(r))}return n}function We(e){for(var t=e.length-1,n=0;n<=t&&!e[n];n++);for(var s=t;s>=0&&!e[s];s--);return n===0&&s===t?e:n>s?[]:e.slice(n,s+1)}var ku=/^([a-zA-Z]:|[\\\/]{2}[^\\\/]+[\\\/]+[^\\\/]+)?([\\\/])?([\s\S]*?)$/,Ug=/^([\s\S]*?)((?:\.{1,2}|[^\\\/]+?|)(\.[^.\/\\]*|))(?:[\\\/]*)$/,B={};function Vs(e){var t=ku.exec(e),n=(t[1]||"")+(t[2]||""),s=t[3]||"",r=Ug.exec(s),i=r[1],o=r[2],a=r[3];return[n,i,o,a]}function Qi(e){var t=ku.exec(e),n=t[1]||"",s=!!n&&n[1]!==":";return{device:n,isUnc:s,isAbsolute:s||!!t[2],tail:t[3]}}function Ru(e){return"\\\\"+e.replace(/^[\\\/]+/,"").replace(/[\\\/]+/g,"\\")}B.resolve=function(){for(var e="",t="",n=!1,s=arguments.length-1;s>=-1;s--){var r;if(s>=0?r=arguments[s]:e?(r=process.env["="+e],(!r||r.substr(0,3).toLowerCase()!==e.toLowerCase()+"\\")&&(r=e+"\\")):r=process.cwd(),It.isString(r)){if(!r)continue}else throw new TypeError("Arguments to path.resolve must be strings");var i=Qi(r),o=i.device,a=i.isUnc,c=i.isAbsolute,u=i.tail;if(!(o&&e&&o.toLowerCase()!==e.toLowerCase())&&(e||(e=o),n||(t=u+"\\"+t,n=c),e&&n))break}return a&&(e=Ru(e)),t=Fs(t.split(/[\\\/]+/),!n).join("\\"),e+(n?"\\":"")+t||"."};B.normalize=function(e){var t=Qi(e),n=t.device,s=t.isUnc,r=t.isAbsolute,i=t.tail,o=/[\\\/]$/.test(i);return i=Fs(i.split(/[\\\/]+/),!r).join("\\"),!i&&!r&&(i="."),i&&o&&(i+="\\"),s&&(n=Ru(n)),n+(r?"\\":"")+i};B.isAbsolute=function(e){return Qi(e).isAbsolute};B.join=function(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(!It.isString(n))throw new TypeError("Arguments to path.join must be strings");n&&e.push(n)}var s=e.join("\\");return/^[\\\/]{2}[^\\\/]/.test(e[0])||(s=s.replace(/^[\\\/]{2,}/,"\\")),B.normalize(s)};B.relative=function(e,t){e=B.resolve(e),t=B.resolve(t);for(var n=e.toLowerCase(),s=t.toLowerCase(),r=We(t.split("\\")),i=We(n.split("\\")),o=We(s.split("\\")),a=Math.min(i.length,o.length),c=a,u=0;u<a;u++)if(i[u]!==o[u]){c=u;break}if(c==0)return t;for(var l=[],u=c;u<i.length;u++)l.push("..");return l=l.concat(r.slice(c)),l.join("\\")};B._makeLong=function(e){if(!It.isString(e))return e;if(!e)return"";var t=B.resolve(e);return/^[a-zA-Z]\:\\/.test(t)?"\\\\?\\"+t:/^\\\\[^?.]/.test(t)?"\\\\?\\UNC\\"+t.substring(2):e};B.dirname=function(e){var t=Vs(e),n=t[0],s=t[1];return!n&&!s?".":(s&&(s=s.substr(0,s.length-1)),n+s)};B.basename=function(e,t){var n=Vs(e)[2];return t&&n.substr(-1*t.length)===t&&(n=n.substr(0,n.length-t.length)),n};B.extname=function(e){return Vs(e)[3]};B.format=function(e){if(!It.isObject(e))throw new TypeError("Parameter 'pathObject' must be an object, not "+typeof e);var t=e.root||"";if(!It.isString(t))throw new TypeError("'pathObject.root' must be a string or undefined, not "+typeof e.root);var n=e.dir,s=e.base||"";return n?n[n.length-1]===B.sep?n+s:n+B.sep+s:s};B.parse=function(e){if(!It.isString(e))throw new TypeError("Parameter 'pathString' must be a string, not "+typeof e);var t=Vs(e);if(!t||t.length!==4)throw new TypeError("Invalid path '"+e+"'");return{root:t[0],dir:t[0]+t[1].slice(0,-1),base:t[2],ext:t[3],name:t[2].slice(0,t[2].length-t[3].length)}};B.sep="\\";B.delimiter=";";var Bg=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/,z={};function $s(e){return Bg.exec(e).slice(1)}z.resolve=function(){for(var e="",t=!1,n=arguments.length-1;n>=-1&&!t;n--){var s=n>=0?arguments[n]:process.cwd();if(It.isString(s)){if(!s)continue}else throw new TypeError("Arguments to path.resolve must be strings");e=s+"/"+e,t=s[0]==="/"}return e=Fs(e.split("/"),!t).join("/"),(t?"/":"")+e||"."};z.normalize=function(e){var t=z.isAbsolute(e),n=e&&e[e.length-1]==="/";return e=Fs(e.split("/"),!t).join("/"),!e&&!t&&(e="."),e&&n&&(e+="/"),(t?"/":"")+e};z.isAbsolute=function(e){return e.charAt(0)==="/"};z.join=function(){for(var e="",t=0;t<arguments.length;t++){var n=arguments[t];if(!It.isString(n))throw new TypeError("Arguments to path.join must be strings");n&&(e?e+="/"+n:e+=n)}return z.normalize(e)};z.relative=function(e,t){e=z.resolve(e).substr(1),t=z.resolve(t).substr(1);for(var n=We(e.split("/")),s=We(t.split("/")),r=Math.min(n.length,s.length),i=r,o=0;o<r;o++)if(n[o]!==s[o]){i=o;break}for(var a=[],o=i;o<n.length;o++)a.push("..");return a=a.concat(s.slice(i)),a.join("/")};z._makeLong=function(e){return e};z.dirname=function(e){var t=$s(e),n=t[0],s=t[1];return!n&&!s?".":(s&&(s=s.substr(0,s.length-1)),n+s)};z.basename=function(e,t){var n=$s(e)[2];return t&&n.substr(-1*t.length)===t&&(n=n.substr(0,n.length-t.length)),n};z.extname=function(e){return $s(e)[3]};z.format=function(e){if(!It.isObject(e))throw new TypeError("Parameter 'pathObject' must be an object, not "+typeof e);var t=e.root||"";if(!It.isString(t))throw new TypeError("'pathObject.root' must be a string or undefined, not "+typeof e.root);var n=e.dir?e.dir+z.sep:"",s=e.base||"";return n+s};z.parse=function(e){if(!It.isString(e))throw new TypeError("Parameter 'pathString' must be a string, not "+typeof e);var t=$s(e);if(!t||t.length!==4)throw new TypeError("Invalid path '"+e+"'");return t[1]=t[1]||"",t[2]=t[2]||"",t[3]=t[3]||"",{root:t[0],dir:t[0]+t[1].slice(0,-1),base:t[2],ext:t[3],name:t[2].slice(0,t[2].length-t[3].length)}};z.sep="/";z.delimiter=":";$g?hn.exports=B:hn.exports=z;hn.exports.posix=z;hn.exports.win32=B;const jg=_u,Ou=hn.exports,qg=_u,zg=/(?:^|^)\s*(?:export\s+)?([\w.-]+)(?:\s*=\s*?|:\s+?)(\s*'(?:\\'|[^'])*'|\s*"(?:\\"|[^"])*"|\s*`(?:\\`|[^`])*`|[^#\r\n]+)?\s*(?:#.*)?(?:$|$)/mg;function Kg(e){const t={};let n=e.toString();n=n.replace(/\r\n?/mg,`
`);let s;for(;(s=zg.exec(n))!=null;){const r=s[1];let i=s[2]||"";i=i.trim();const o=i[0];i=i.replace(/^(['"`])([\s\S]*)\1$/mg,"$2"),o==='"'&&(i=i.replace(/\\n/g,`
`),i=i.replace(/\\r/g,"\r")),t[r]=i}return t}function ur(e){console.log(`[dotenv][DEBUG] ${e}`)}function Hg(e){return e[0]==="~"?Ou.join(qg.homedir(),e.slice(1)):e}function Gg(e){let t=Ou.resolve(process.cwd(),".env"),n="utf8";const s=Boolean(e&&e.debug),r=Boolean(e&&e.override);e&&(e.path!=null&&(t=Hg(e.path)),e.encoding!=null&&(n=e.encoding));try{const i=Us.parse(jg.readFileSync(t,{encoding:n}));return Object.keys(i).forEach(function(o){Object.prototype.hasOwnProperty.call(process.env,o)?(r===!0&&(process.env[o]=i[o]),s&&ur(r===!0?`"${o}" is already defined in \`process.env\` and WAS overwritten`:`"${o}" is already defined in \`process.env\` and was NOT overwritten`)):process.env[o]=i[o]}),{parsed:i}}catch(i){return s&&ur(`Failed to load ${t} ${i.message}`),{error:i}}}const Us={config:Gg,parse:Kg};var Wg=Wi.exports.config=Us.config;Wi.exports.parse=Us.parse;Wi.exports=Us;Wg();const Qg={apiKey:process.env.AUTH_TOKEN,authDomain:"svelte-game-43670.firebaseapp.com",projectId:"svelte-game-43670",storageBucket:"svelte-game-43670.appspot.com",messagingSenderId:"409471071554",appId:"1:409471071554:web:b367f616e61129bbcc84db",measurementId:"G-74YW1ZVH2W"};uh().length||ah(Qg);const ra=og(),Xg={iceServers:[{urls:["stun:stun1.l.google.com:19302","stun:stun2.l.google.com:19302"]}],iceCandidatePoolSize:10},bt=new RTCPeerConnection(Xg);new Rg({target:document.getElementById("app")});

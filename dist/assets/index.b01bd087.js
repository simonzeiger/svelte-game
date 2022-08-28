(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerpolicy&&(i.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?i.credentials="include":r.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();function It(){}function _o(e){return e()}function Ti(){return Object.create(null)}function he(e){e.forEach(_o)}function nu(e){return typeof e=="function"}function fr(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function su(e){return Object.keys(e).length===0}function pt(e,t){e.appendChild(t)}function ht(e,t,n){e.insertBefore(t,n||null)}function at(e){e.parentNode.removeChild(e)}function ct(e){return document.createElement(e)}function ru(e){return document.createTextNode(e)}function bt(){return ru(" ")}function yn(e,t,n,s){return e.addEventListener(t,n,s),()=>e.removeEventListener(t,n,s)}function vn(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function iu(e){return Array.from(e.childNodes)}function bi(e,t){e.value=t==null?"":t}function Ii(e,t,n,s){n===null?e.style.removeProperty(t):e.style.setProperty(t,n,s?"important":"")}let pr;function Se(e){pr=e}const Te=[],Ci=[],wn=[],Si=[],ou=Promise.resolve();let Ms=!1;function au(){Ms||(Ms=!0,ou.then(No))}function Ps(e){wn.push(e)}const ws=new Set;let hn=0;function No(){const e=pr;do{for(;hn<Te.length;){const t=Te[hn];hn++,Se(t),cu(t.$$)}for(Se(null),Te.length=0,hn=0;Ci.length;)Ci.pop()();for(let t=0;t<wn.length;t+=1){const n=wn[t];ws.has(n)||(ws.add(n),n())}wn.length=0}while(Te.length);for(;Si.length;)Si.pop()();Ms=!1,ws.clear(),Se(e)}function cu(e){if(e.fragment!==null){e.update(),he(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(Ps)}}const En=new Set;let Lt;function uu(){Lt={r:0,c:[],p:Lt}}function hu(){Lt.r||he(Lt.c),Lt=Lt.p}function xe(e,t){e&&e.i&&(En.delete(e),e.i(t))}function Sn(e,t,n,s){if(e&&e.o){if(En.has(e))return;En.add(e),Lt.c.push(()=>{En.delete(e),s&&(n&&e.d(1),s())}),e.o(t)}else s&&s()}function ko(e){e&&e.c()}function gr(e,t,n,s){const{fragment:r,on_mount:i,on_destroy:o,after_update:a}=e.$$;r&&r.m(t,n),s||Ps(()=>{const c=i.map(_o).filter(nu);o?o.push(...c):he(c),e.$$.on_mount=[]}),a.forEach(Ps)}function mr(e,t){const n=e.$$;n.fragment!==null&&(he(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function lu(e,t){e.$$.dirty[0]===-1&&(Te.push(e),au(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function yr(e,t,n,s,r,i,o,a=[-1]){const c=pr;Se(e);const u=e.$$={fragment:null,ctx:null,props:i,update:It,not_equal:r,bound:Ti(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(c?c.$$.context:[])),callbacks:Ti(),dirty:a,skip_bound:!1,root:t.target||c.$$.root};o&&o(u.root);let h=!1;if(u.ctx=n?n(e,t.props||{},(l,d,...f)=>{const y=f.length?f[0]:d;return u.ctx&&r(u.ctx[l],u.ctx[l]=y)&&(!u.skip_bound&&u.bound[l]&&u.bound[l](y),h&&lu(e,l)),d}):[],u.update(),h=!0,he(u.before_update),u.fragment=s?s(u.ctx):!1,t.target){if(t.hydrate){const l=iu(t.target);u.fragment&&u.fragment.l(l),l.forEach(at)}else u.fragment&&u.fragment.c();t.intro&&xe(e.$$.fragment),gr(e,t.target,t.anchor,t.customElement),No()}Se(c)}class vr{$destroy(){mr(this,1),this.$destroy=It}$on(t,n){const s=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return s.push(n),()=>{const r=s.indexOf(n);r!==-1&&s.splice(r,1)}}$set(t){this.$$set&&!su(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}/**
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
 */const Ro=function(e){const t=[];let n=0;for(let s=0;s<e.length;s++){let r=e.charCodeAt(s);r<128?t[n++]=r:r<2048?(t[n++]=r>>6|192,t[n++]=r&63|128):(r&64512)===55296&&s+1<e.length&&(e.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(e.charCodeAt(++s)&1023),t[n++]=r>>18|240,t[n++]=r>>12&63|128,t[n++]=r>>6&63|128,t[n++]=r&63|128):(t[n++]=r>>12|224,t[n++]=r>>6&63|128,t[n++]=r&63|128)}return t},du=function(e){const t=[];let n=0,s=0;for(;n<e.length;){const r=e[n++];if(r<128)t[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=e[n++];t[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=e[n++],o=e[n++],a=e[n++],c=((r&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;t[s++]=String.fromCharCode(55296+(c>>10)),t[s++]=String.fromCharCode(56320+(c&1023))}else{const i=e[n++],o=e[n++];t[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return t.join("")},fu={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<e.length;r+=3){const i=e[r],o=r+1<e.length,a=o?e[r+1]:0,c=r+2<e.length,u=c?e[r+2]:0,h=i>>2,l=(i&3)<<4|a>>4;let d=(a&15)<<2|u>>6,f=u&63;c||(f=64,o||(d=64)),s.push(n[h],n[l],n[d],n[f])}return s.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(Ro(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):du(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<e.length;){const i=n[e.charAt(r++)],a=r<e.length?n[e.charAt(r)]:0;++r;const u=r<e.length?n[e.charAt(r)]:64;++r;const l=r<e.length?n[e.charAt(r)]:64;if(++r,i==null||a==null||u==null||l==null)throw Error();const d=i<<2|a>>4;if(s.push(d),u!==64){const f=a<<4&240|u>>2;if(s.push(f),l!==64){const y=u<<6&192|l;s.push(y)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},pu=function(e){const t=Ro(e);return fu.encodeByteArray(t,!0)},xo=function(e){return pu(e).replace(/\./g,"")};/**
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
 */class gu{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,s))}}}/**
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
 */function Hn(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function mu(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Hn())}function yu(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function vu(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function wu(){return Hn().indexOf("Electron/")>=0}function Eu(){const e=Hn();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function Tu(){return Hn().indexOf("MSAppHost/")>=0}function bu(){return typeof indexedDB=="object"}function Iu(){return new Promise((e,t)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),e(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var i;t(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){t(n)}})}/**
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
 */const Cu="FirebaseError";class le extends Error{constructor(t,n,s){super(n),this.code=t,this.customData=s,this.name=Cu,Object.setPrototypeOf(this,le.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Oo.prototype.create)}}class Oo{constructor(t,n,s){this.service=t,this.serviceName=n,this.errors=s}create(t,...n){const s=n[0]||{},r=`${this.service}/${t}`,i=this.errors[t],o=i?Su(i,s):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new le(r,a,s)}}function Su(e,t){return e.replace(Au,(n,s)=>{const r=t[s];return r!=null?String(r):`<${s}?>`})}const Au=/\{\$([^}]+)}/g;function Fs(e,t){if(e===t)return!0;const n=Object.keys(e),s=Object.keys(t);for(const r of n){if(!s.includes(r))return!1;const i=e[r],o=t[r];if(Ai(i)&&Ai(o)){if(!Fs(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function Ai(e){return e!==null&&typeof e=="object"}/**
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
 */function yt(e){return e&&e._delegate?e._delegate:e}class Oe{constructor(t,n,s){this.name=t,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const Ot="[DEFAULT]";/**
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
 */class Du{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const s=new gu;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const s=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),r=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Nu(t))try{this.getOrInitializeService({instanceIdentifier:Ot})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(t=Ot){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Ot){return this.instances.has(t)}getOptions(t=Ot){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,s=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);s===a&&o.resolve(r)}return r}onInit(t,n){var s;const r=this.normalizeInstanceIdentifier(n),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(t),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&t(o,r),()=>{i.delete(t)}}invokeOnInitCallbacks(t,n){const s=this.onInitCallbacks.get(n);if(!!s)for(const r of s)try{r(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let s=this.instances.get(t);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:_u(t),options:n}),this.instances.set(t,s),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(s,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,s)}catch{}return s||null}normalizeInstanceIdentifier(t=Ot){return this.component?this.component.multipleInstances?t:Ot:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function _u(e){return e===Ot?void 0:e}function Nu(e){return e.instantiationMode==="EAGER"}/**
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
 */class ku{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new Du(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var N;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(N||(N={}));const Ru={debug:N.DEBUG,verbose:N.VERBOSE,info:N.INFO,warn:N.WARN,error:N.ERROR,silent:N.SILENT},xu=N.INFO,Ou={[N.DEBUG]:"log",[N.VERBOSE]:"log",[N.INFO]:"info",[N.WARN]:"warn",[N.ERROR]:"error"},Lu=(e,t,...n)=>{if(t<e.logLevel)return;const s=new Date().toISOString(),r=Ou[t];if(r)console[r](`[${s}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Lo{constructor(t){this.name=t,this._logLevel=xu,this._logHandler=Lu,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in N))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Ru[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,N.DEBUG,...t),this._logHandler(this,N.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,N.VERBOSE,...t),this._logHandler(this,N.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,N.INFO,...t),this._logHandler(this,N.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,N.WARN,...t),this._logHandler(this,N.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,N.ERROR,...t),this._logHandler(this,N.ERROR,...t)}}const Mu=(e,t)=>t.some(n=>e instanceof n);let Di,_i;function Pu(){return Di||(Di=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Fu(){return _i||(_i=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Mo=new WeakMap,Vs=new WeakMap,Po=new WeakMap,Es=new WeakMap,wr=new WeakMap;function Vu(e){const t=new Promise((n,s)=>{const r=()=>{e.removeEventListener("success",i),e.removeEventListener("error",o)},i=()=>{n(Ct(e.result)),r()},o=()=>{s(e.error),r()};e.addEventListener("success",i),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&Mo.set(n,e)}).catch(()=>{}),wr.set(t,e),t}function $u(e){if(Vs.has(e))return;const t=new Promise((n,s)=>{const r=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",o),e.removeEventListener("abort",o)},i=()=>{n(),r()},o=()=>{s(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",o),e.addEventListener("abort",o)});Vs.set(e,t)}let $s={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return Vs.get(e);if(t==="objectStoreNames")return e.objectStoreNames||Po.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Ct(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function Bu(e){$s=e($s)}function Uu(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const s=e.call(Ts(this),t,...n);return Po.set(s,t.sort?t.sort():[t]),Ct(s)}:Fu().includes(e)?function(...t){return e.apply(Ts(this),t),Ct(Mo.get(this))}:function(...t){return Ct(e.apply(Ts(this),t))}}function ju(e){return typeof e=="function"?Uu(e):(e instanceof IDBTransaction&&$u(e),Mu(e,Pu())?new Proxy(e,$s):e)}function Ct(e){if(e instanceof IDBRequest)return Vu(e);if(Es.has(e))return Es.get(e);const t=ju(e);return t!==e&&(Es.set(e,t),wr.set(t,e)),t}const Ts=e=>wr.get(e);function qu(e,t,{blocked:n,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(e,t),a=Ct(o);return s&&o.addEventListener("upgradeneeded",c=>{s(Ct(o.result),c.oldVersion,c.newVersion,Ct(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{i&&c.addEventListener("close",()=>i()),r&&c.addEventListener("versionchange",()=>r())}).catch(()=>{}),a}const Ku=["get","getKey","getAll","getAllKeys","count"],Hu=["put","add","delete","clear"],bs=new Map;function Ni(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(bs.get(t))return bs.get(t);const n=t.replace(/FromIndex$/,""),s=t!==n,r=Hu.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||Ku.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,r?"readwrite":"readonly");let u=c.store;return s&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),r&&c.done]))[0]};return bs.set(t,i),i}Bu(e=>({...e,get:(t,n,s)=>Ni(t,n)||e.get(t,n,s),has:(t,n)=>!!Ni(t,n)||e.has(t,n)}));/**
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
 */class Gu{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(zu(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function zu(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Bs="@firebase/app",ki="0.7.31";/**
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
 */const $t=new Lo("@firebase/app"),Wu="@firebase/app-compat",Qu="@firebase/analytics-compat",Xu="@firebase/analytics",Yu="@firebase/app-check-compat",Ju="@firebase/app-check",Zu="@firebase/auth",th="@firebase/auth-compat",eh="@firebase/database",nh="@firebase/database-compat",sh="@firebase/functions",rh="@firebase/functions-compat",ih="@firebase/installations",oh="@firebase/installations-compat",ah="@firebase/messaging",ch="@firebase/messaging-compat",uh="@firebase/performance",hh="@firebase/performance-compat",lh="@firebase/remote-config",dh="@firebase/remote-config-compat",fh="@firebase/storage",ph="@firebase/storage-compat",gh="@firebase/firestore",mh="@firebase/firestore-compat",yh="firebase",vh="9.9.3";/**
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
 */const Fo="[DEFAULT]",wh={[Bs]:"fire-core",[Wu]:"fire-core-compat",[Xu]:"fire-analytics",[Qu]:"fire-analytics-compat",[Ju]:"fire-app-check",[Yu]:"fire-app-check-compat",[Zu]:"fire-auth",[th]:"fire-auth-compat",[eh]:"fire-rtdb",[nh]:"fire-rtdb-compat",[sh]:"fire-fn",[rh]:"fire-fn-compat",[ih]:"fire-iid",[oh]:"fire-iid-compat",[ah]:"fire-fcm",[ch]:"fire-fcm-compat",[uh]:"fire-perf",[hh]:"fire-perf-compat",[lh]:"fire-rc",[dh]:"fire-rc-compat",[fh]:"fire-gcs",[ph]:"fire-gcs-compat",[gh]:"fire-fst",[mh]:"fire-fst-compat","fire-js":"fire-js",[yh]:"fire-js-all"};/**
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
 */const Le=new Map,Us=new Map;function Eh(e,t){try{e.container.addComponent(t)}catch(n){$t.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function An(e){const t=e.name;if(Us.has(t))return $t.debug(`There were multiple attempts to register component ${t}.`),!1;Us.set(t,e);for(const n of Le.values())Eh(n,e);return!0}function Th(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
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
 */const bh={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Bt=new Oo("app","Firebase",bh);/**
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
 */class Ih{constructor(t,n,s){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Oe("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Bt.create("app-deleted",{appName:this._name})}}/**
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
 */const Ch=vh;function Sh(e,t={}){typeof t!="object"&&(t={name:t});const n=Object.assign({name:Fo,automaticDataCollectionEnabled:!1},t),s=n.name;if(typeof s!="string"||!s)throw Bt.create("bad-app-name",{appName:String(s)});const r=Le.get(s);if(r){if(Fs(e,r.options)&&Fs(n,r.config))return r;throw Bt.create("duplicate-app",{appName:s})}const i=new ku(s);for(const a of Us.values())i.addComponent(a);const o=new Ih(e,n,i);return Le.set(s,o),o}function Ah(e=Fo){const t=Le.get(e);if(!t)throw Bt.create("no-app",{appName:e});return t}function Dh(){return Array.from(Le.values())}function Jt(e,t,n){var s;let r=(s=wh[e])!==null&&s!==void 0?s:e;n&&(r+=`-${n}`);const i=r.match(/\s|\//),o=t.match(/\s|\//);if(i||o){const a=[`Unable to register library "${r}" with version "${t}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),$t.warn(a.join(" "));return}An(new Oe(`${r}-version`,()=>({library:r,version:t}),"VERSION"))}/**
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
 */const _h="firebase-heartbeat-database",Nh=1,Me="firebase-heartbeat-store";let Is=null;function Vo(){return Is||(Is=qu(_h,Nh,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(Me)}}}).catch(e=>{throw Bt.create("idb-open",{originalErrorMessage:e.message})})),Is}async function kh(e){var t;try{return(await Vo()).transaction(Me).objectStore(Me).get($o(e))}catch(n){if(n instanceof le)$t.warn(n.message);else{const s=Bt.create("idb-get",{originalErrorMessage:(t=n)===null||t===void 0?void 0:t.message});$t.warn(s.message)}}}async function Ri(e,t){var n;try{const r=(await Vo()).transaction(Me,"readwrite");return await r.objectStore(Me).put(t,$o(e)),r.done}catch(s){if(s instanceof le)$t.warn(s.message);else{const r=Bt.create("idb-set",{originalErrorMessage:(n=s)===null||n===void 0?void 0:n.message});$t.warn(r.message)}}}function $o(e){return`${e.name}!${e.options.appId}`}/**
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
 */const Rh=1024,xh=30*24*60*60*1e3;class Oh{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Mh(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=xi();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(r=>r.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const i=new Date(r.date).valueOf();return Date.now()-i<=xh}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const t=xi(),{heartbeatsToSend:n,unsentEntries:s}=Lh(this._heartbeatsCache.heartbeats),r=xo(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function xi(){return new Date().toISOString().substring(0,10)}function Lh(e,t=Rh){const n=[];let s=e.slice();for(const r of e){const i=n.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),Oi(n)>t){i.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),Oi(n)>t){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class Mh{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return bu()?Iu().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await kh(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Ri(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Ri(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...t.heartbeats]})}else return}}function Oi(e){return xo(JSON.stringify({version:2,heartbeats:e})).length}/**
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
 */function Ph(e){An(new Oe("platform-logger",t=>new Gu(t),"PRIVATE")),An(new Oe("heartbeat",t=>new Oh(t),"PRIVATE")),Jt(Bs,ki,e),Jt(Bs,ki,"esm2017"),Jt("fire-js","")}Ph("");var Fh=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},m,Er=Er||{},T=Fh||self;function Dn(){}function js(e){var t=typeof e;return t=t!="object"?t:e?Array.isArray(e)?"array":t:"null",t=="array"||t=="object"&&typeof e.length=="number"}function We(e){var t=typeof e;return t=="object"&&e!=null||t=="function"}function Vh(e){return Object.prototype.hasOwnProperty.call(e,Cs)&&e[Cs]||(e[Cs]=++$h)}var Cs="closure_uid_"+(1e9*Math.random()>>>0),$h=0;function Bh(e,t,n){return e.call.apply(e.bind,arguments)}function Uh(e,t,n){if(!e)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var r=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(r,s),e.apply(t,r)}}return function(){return e.apply(t,arguments)}}function K(e,t,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?K=Bh:K=Uh,K.apply(null,arguments)}function ln(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),e.apply(this,s)}}function z(e,t){function n(){}n.prototype=t.prototype,e.Z=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.Vb=function(s,r,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return t.prototype[r].apply(s,o)}}function kt(){this.s=this.s,this.o=this.o}var jh=0;kt.prototype.s=!1;kt.prototype.na=function(){!this.s&&(this.s=!0,this.M(),jh!=0)&&Vh(this)};kt.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Bo=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if(typeof e=="string")return typeof t!="string"||t.length!=1?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1},Uo=Array.prototype.forEach?function(e,t,n){Array.prototype.forEach.call(e,t,n)}:function(e,t,n){const s=e.length,r=typeof e=="string"?e.split(""):e;for(let i=0;i<s;i++)i in r&&t.call(n,r[i],i,e)};function qh(e){t:{var t=Ll;const n=e.length,s=typeof e=="string"?e.split(""):e;for(let r=0;r<n;r++)if(r in s&&t.call(void 0,s[r],r,e)){t=r;break t}t=-1}return 0>t?null:typeof e=="string"?e.charAt(t):e[t]}function Li(e){return Array.prototype.concat.apply([],arguments)}function Tr(e){const t=e.length;if(0<t){const n=Array(t);for(let s=0;s<t;s++)n[s]=e[s];return n}return[]}function _n(e){return/^[\s\xa0]*$/.test(e)}var Mi=String.prototype.trim?function(e){return e.trim()}:function(e){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1]};function Y(e,t){return e.indexOf(t)!=-1}function Ss(e,t){return e<t?-1:e>t?1:0}var J;t:{var Pi=T.navigator;if(Pi){var Fi=Pi.userAgent;if(Fi){J=Fi;break t}}J=""}function br(e,t,n){for(const s in e)t.call(n,e[s],s,e)}function jo(e){const t={};for(const n in e)t[n]=e[n];return t}var Vi="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function qo(e,t){let n,s;for(let r=1;r<arguments.length;r++){s=arguments[r];for(n in s)e[n]=s[n];for(let i=0;i<Vi.length;i++)n=Vi[i],Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n])}}function Ir(e){return Ir[" "](e),e}Ir[" "]=Dn;function Kh(e){var t=zh;return Object.prototype.hasOwnProperty.call(t,9)?t[9]:t[9]=e(9)}var Hh=Y(J,"Opera"),ne=Y(J,"Trident")||Y(J,"MSIE"),Ko=Y(J,"Edge"),qs=Ko||ne,Ho=Y(J,"Gecko")&&!(Y(J.toLowerCase(),"webkit")&&!Y(J,"Edge"))&&!(Y(J,"Trident")||Y(J,"MSIE"))&&!Y(J,"Edge"),Gh=Y(J.toLowerCase(),"webkit")&&!Y(J,"Edge");function Go(){var e=T.document;return e?e.documentMode:void 0}var Nn;t:{var As="",Ds=function(){var e=J;if(Ho)return/rv:([^\);]+)(\)|;)/.exec(e);if(Ko)return/Edge\/([\d\.]+)/.exec(e);if(ne)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e);if(Gh)return/WebKit\/(\S+)/.exec(e);if(Hh)return/(?:Version)[ \/]?(\S+)/.exec(e)}();if(Ds&&(As=Ds?Ds[1]:""),ne){var _s=Go();if(_s!=null&&_s>parseFloat(As)){Nn=String(_s);break t}}Nn=As}var zh={};function Wh(){return Kh(function(){let e=0;const t=Mi(String(Nn)).split("."),n=Mi("9").split("."),s=Math.max(t.length,n.length);for(let o=0;e==0&&o<s;o++){var r=t[o]||"",i=n[o]||"";do{if(r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r[0].length==0&&i[0].length==0)break;e=Ss(r[1].length==0?0:parseInt(r[1],10),i[1].length==0?0:parseInt(i[1],10))||Ss(r[2].length==0,i[2].length==0)||Ss(r[2],i[2]),r=r[3],i=i[3]}while(e==0)}return 0<=e})}var Ks;if(T.document&&ne){var $i=Go();Ks=$i||parseInt(Nn,10)||void 0}else Ks=void 0;var Qh=Ks,Xh=function(){if(!T.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{T.addEventListener("test",Dn,t),T.removeEventListener("test",Dn,t)}catch{}return e}();function Q(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}Q.prototype.h=function(){this.defaultPrevented=!0};function Pe(e,t){if(Q.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,s=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(Ho){t:{try{Ir(t.nodeName);var r=!0;break t}catch{}r=!1}r||(t=null)}}else n=="mouseover"?t=e.fromElement:n=="mouseout"&&(t=e.toElement);this.relatedTarget=t,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=e.clientX!==void 0?e.clientX:e.pageX,this.clientY=e.clientY!==void 0?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType=typeof e.pointerType=="string"?e.pointerType:Yh[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&Pe.Z.h.call(this)}}z(Pe,Q);var Yh={2:"touch",3:"pen",4:"mouse"};Pe.prototype.h=function(){Pe.Z.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var Qe="closure_listenable_"+(1e6*Math.random()|0),Jh=0;function Zh(e,t,n,s,r){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!s,this.ia=r,this.key=++Jh,this.ca=this.fa=!1}function Gn(e){e.ca=!0,e.listener=null,e.proxy=null,e.src=null,e.ia=null}function zn(e){this.src=e,this.g={},this.h=0}zn.prototype.add=function(e,t,n,s,r){var i=e.toString();e=this.g[i],e||(e=this.g[i]=[],this.h++);var o=Gs(e,t,s,r);return-1<o?(t=e[o],n||(t.fa=!1)):(t=new Zh(t,this.src,i,!!s,r),t.fa=n,e.push(t)),t};function Hs(e,t){var n=t.type;if(n in e.g){var s=e.g[n],r=Bo(s,t),i;(i=0<=r)&&Array.prototype.splice.call(s,r,1),i&&(Gn(t),e.g[n].length==0&&(delete e.g[n],e.h--))}}function Gs(e,t,n,s){for(var r=0;r<e.length;++r){var i=e[r];if(!i.ca&&i.listener==t&&i.capture==!!n&&i.ia==s)return r}return-1}var Cr="closure_lm_"+(1e6*Math.random()|0),Ns={};function zo(e,t,n,s,r){if(s&&s.once)return Qo(e,t,n,s,r);if(Array.isArray(t)){for(var i=0;i<t.length;i++)zo(e,t[i],n,s,r);return null}return n=Dr(n),e&&e[Qe]?e.N(t,n,We(s)?!!s.capture:!!s,r):Wo(e,t,n,!1,s,r)}function Wo(e,t,n,s,r,i){if(!t)throw Error("Invalid event type");var o=We(r)?!!r.capture:!!r,a=Ar(e);if(a||(e[Cr]=a=new zn(e)),n=a.add(t,n,s,o,i),n.proxy)return n;if(s=tl(),n.proxy=s,s.src=e,s.listener=n,e.addEventListener)Xh||(r=o),r===void 0&&(r=!1),e.addEventListener(t.toString(),s,r);else if(e.attachEvent)e.attachEvent(Yo(t.toString()),s);else if(e.addListener&&e.removeListener)e.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function tl(){function e(n){return t.call(e.src,e.listener,n)}var t=el;return e}function Qo(e,t,n,s,r){if(Array.isArray(t)){for(var i=0;i<t.length;i++)Qo(e,t[i],n,s,r);return null}return n=Dr(n),e&&e[Qe]?e.O(t,n,We(s)?!!s.capture:!!s,r):Wo(e,t,n,!0,s,r)}function Xo(e,t,n,s,r){if(Array.isArray(t))for(var i=0;i<t.length;i++)Xo(e,t[i],n,s,r);else s=We(s)?!!s.capture:!!s,n=Dr(n),e&&e[Qe]?(e=e.i,t=String(t).toString(),t in e.g&&(i=e.g[t],n=Gs(i,n,s,r),-1<n&&(Gn(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete e.g[t],e.h--)))):e&&(e=Ar(e))&&(t=e.g[t.toString()],e=-1,t&&(e=Gs(t,n,s,r)),(n=-1<e?t[e]:null)&&Sr(n))}function Sr(e){if(typeof e!="number"&&e&&!e.ca){var t=e.src;if(t&&t[Qe])Hs(t.i,e);else{var n=e.type,s=e.proxy;t.removeEventListener?t.removeEventListener(n,s,e.capture):t.detachEvent?t.detachEvent(Yo(n),s):t.addListener&&t.removeListener&&t.removeListener(s),(n=Ar(t))?(Hs(n,e),n.h==0&&(n.src=null,t[Cr]=null)):Gn(e)}}}function Yo(e){return e in Ns?Ns[e]:Ns[e]="on"+e}function el(e,t){if(e.ca)e=!0;else{t=new Pe(t,this);var n=e.listener,s=e.ia||e.src;e.fa&&Sr(e),e=n.call(s,t)}return e}function Ar(e){return e=e[Cr],e instanceof zn?e:null}var ks="__closure_events_fn_"+(1e9*Math.random()>>>0);function Dr(e){return typeof e=="function"?e:(e[ks]||(e[ks]=function(t){return e.handleEvent(t)}),e[ks])}function U(){kt.call(this),this.i=new zn(this),this.P=this,this.I=null}z(U,kt);U.prototype[Qe]=!0;U.prototype.removeEventListener=function(e,t,n,s){Xo(this,e,t,n,s)};function H(e,t){var n,s=e.I;if(s)for(n=[];s;s=s.I)n.push(s);if(e=e.P,s=t.type||t,typeof t=="string")t=new Q(t,e);else if(t instanceof Q)t.target=t.target||e;else{var r=t;t=new Q(s,e),qo(t,r)}if(r=!0,n)for(var i=n.length-1;0<=i;i--){var o=t.g=n[i];r=dn(o,s,!0,t)&&r}if(o=t.g=e,r=dn(o,s,!0,t)&&r,r=dn(o,s,!1,t)&&r,n)for(i=0;i<n.length;i++)o=t.g=n[i],r=dn(o,s,!1,t)&&r}U.prototype.M=function(){if(U.Z.M.call(this),this.i){var e=this.i,t;for(t in e.g){for(var n=e.g[t],s=0;s<n.length;s++)Gn(n[s]);delete e.g[t],e.h--}}this.I=null};U.prototype.N=function(e,t,n,s){return this.i.add(String(e),t,!1,n,s)};U.prototype.O=function(e,t,n,s){return this.i.add(String(e),t,!0,n,s)};function dn(e,t,n,s){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var r=!0,i=0;i<t.length;++i){var o=t[i];if(o&&!o.ca&&o.capture==n){var a=o.listener,c=o.ia||o.src;o.fa&&Hs(e.i,o),r=a.call(c,s)!==!1&&r}}return r&&!s.defaultPrevented}var _r=T.JSON.stringify;function nl(){var e=Zo;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class sl{constructor(){this.h=this.g=null}add(t,n){const s=Jo.get();s.set(t,n),this.h?this.h.next=s:this.g=s,this.h=s}}var Jo=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}(()=>new rl,e=>e.reset());class rl{constructor(){this.next=this.g=this.h=null}set(t,n){this.h=t,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function il(e){T.setTimeout(()=>{throw e},0)}function Nr(e,t){zs||ol(),Ws||(zs(),Ws=!0),Zo.add(e,t)}var zs;function ol(){var e=T.Promise.resolve(void 0);zs=function(){e.then(al)}}var Ws=!1,Zo=new sl;function al(){for(var e;e=nl();){try{e.h.call(e.g)}catch(n){il(n)}var t=Jo;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}Ws=!1}function Wn(e,t){U.call(this),this.h=e||1,this.g=t||T,this.j=K(this.kb,this),this.l=Date.now()}z(Wn,U);m=Wn.prototype;m.da=!1;m.S=null;m.kb=function(){if(this.da){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-e):(this.S&&(this.g.clearTimeout(this.S),this.S=null),H(this,"tick"),this.da&&(kr(this),this.start()))}};m.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function kr(e){e.da=!1,e.S&&(e.g.clearTimeout(e.S),e.S=null)}m.M=function(){Wn.Z.M.call(this),kr(this),delete this.g};function Rr(e,t,n){if(typeof e=="function")n&&(e=K(e,n));else if(e&&typeof e.handleEvent=="function")e=K(e.handleEvent,e);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:T.setTimeout(e,t||0)}function ta(e){e.g=Rr(()=>{e.g=null,e.i&&(e.i=!1,ta(e))},e.j);const t=e.h;e.h=null,e.m.apply(null,t)}class cl extends kt{constructor(t,n){super(),this.m=t,this.j=n,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:ta(this)}M(){super.M(),this.g&&(T.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Fe(e){kt.call(this),this.h=e,this.g={}}z(Fe,kt);var Bi=[];function ea(e,t,n,s){Array.isArray(n)||(n&&(Bi[0]=n.toString()),n=Bi);for(var r=0;r<n.length;r++){var i=zo(t,n[r],s||e.handleEvent,!1,e.h||e);if(!i)break;e.g[i.key]=i}}function na(e){br(e.g,function(t,n){this.g.hasOwnProperty(n)&&Sr(t)},e),e.g={}}Fe.prototype.M=function(){Fe.Z.M.call(this),na(this)};Fe.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Qn(){this.g=!0}Qn.prototype.Aa=function(){this.g=!1};function ul(e,t,n,s,r,i){e.info(function(){if(e.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var h=u[0];u=u[1];var l=h.split("_");o=2<=l.length&&l[1]=="type"?o+(h+"="+u+"&"):o+(h+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+s+") [attempt "+r+"]: "+t+`
`+n+`
`+o})}function hl(e,t,n,s,r,i,o){e.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+r+"]: "+t+`
`+n+`
`+i+" "+o})}function Xt(e,t,n,s){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+dl(e,n)+(s?" "+s:"")})}function ll(e,t){e.info(function(){return"TIMEOUT: "+t})}Qn.prototype.info=function(){};function dl(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n){for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var s=n[e];if(!(2>s.length)){var r=s[1];if(Array.isArray(r)&&!(1>r.length)){var i=r[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<r.length;o++)r[o]=""}}}}return _r(n)}catch{return t}}var Gt={},Ui=null;function Xn(){return Ui=Ui||new U}Gt.Ma="serverreachability";function sa(e){Q.call(this,Gt.Ma,e)}z(sa,Q);function Ve(e){const t=Xn();H(t,new sa(t))}Gt.STAT_EVENT="statevent";function ra(e,t){Q.call(this,Gt.STAT_EVENT,e),this.stat=t}z(ra,Q);function Z(e){const t=Xn();H(t,new ra(t,e))}Gt.Na="timingevent";function ia(e,t){Q.call(this,Gt.Na,e),this.size=t}z(ia,Q);function Xe(e,t){if(typeof e!="function")throw Error("Fn must not be null and must be a function");return T.setTimeout(function(){e()},t)}var Yn={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},oa={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function xr(){}xr.prototype.h=null;function ji(e){return e.h||(e.h=e.i())}function aa(){}var Ye={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function Or(){Q.call(this,"d")}z(Or,Q);function Lr(){Q.call(this,"c")}z(Lr,Q);var Qs;function Jn(){}z(Jn,xr);Jn.prototype.g=function(){return new XMLHttpRequest};Jn.prototype.i=function(){return{}};Qs=new Jn;function Je(e,t,n,s){this.l=e,this.j=t,this.m=n,this.X=s||1,this.V=new Fe(this),this.P=fl,e=qs?125:void 0,this.W=new Wn(e),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new ca}function ca(){this.i=null,this.g="",this.h=!1}var fl=45e3,Xs={},kn={};m=Je.prototype;m.setTimeout=function(e){this.P=e};function Ys(e,t,n){e.K=1,e.v=ts(vt(t)),e.s=n,e.U=!0,ua(e,null)}function ua(e,t){e.F=Date.now(),Ze(e),e.A=vt(e.v);var n=e.A,s=e.X;Array.isArray(s)||(s=[String(s)]),ma(n.h,"t",s),e.C=0,n=e.l.H,e.h=new ca,e.g=Pa(e.l,n?t:null,!e.s),0<e.O&&(e.L=new cl(K(e.Ia,e,e.g),e.O)),ea(e.V,e.g,"readystatechange",e.gb),t=e.H?jo(e.H):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ea(e.A,e.u,e.s,t)):(e.u="GET",e.g.ea(e.A,e.u,null,t)),Ve(),ul(e.j,e.u,e.A,e.m,e.X,e.s)}m.gb=function(e){e=e.target;const t=this.L;t&&gt(e)==3?t.l():this.Ia(e)};m.Ia=function(e){try{if(e==this.g)t:{const h=gt(this.g);var t=this.g.Da();const l=this.g.ba();if(!(3>h)&&(h!=3||qs||this.g&&(this.h.h||this.g.ga()||Gi(this.g)))){this.I||h!=4||t==7||(t==8||0>=l?Ve(3):Ve(2)),Zn(this);var n=this.g.ba();this.N=n;e:if(ha(this)){var s=Gi(this.g);e="";var r=s.length,i=gt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Mt(this),Ae(this);var o="";break e}this.h.i=new T.TextDecoder}for(t=0;t<r;t++)this.h.h=!0,e+=this.h.i.decode(s[t],{stream:i&&t==r-1});s.splice(0,r),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=n==200,hl(this.j,this.u,this.A,this.m,this.X,h,n),this.i){if(this.$&&!this.J){e:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!_n(a)){var u=a;break e}}u=null}if(n=u)Xt(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Js(this,n);else{this.i=!1,this.o=3,Z(12),Mt(this),Ae(this);break t}}this.U?(la(this,h,o),qs&&this.i&&h==3&&(ea(this.V,this.W,"tick",this.fb),this.W.start())):(Xt(this.j,this.m,o,null),Js(this,o)),h==4&&Mt(this),this.i&&!this.I&&(h==4?xa(this.l,this):(this.i=!1,Ze(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,Z(12)):(this.o=0,Z(13)),Mt(this),Ae(this)}}}catch{}finally{}};function ha(e){return e.g?e.u=="GET"&&e.K!=2&&e.l.Ba:!1}function la(e,t,n){let s=!0,r;for(;!e.I&&e.C<n.length;)if(r=pl(e,n),r==kn){t==4&&(e.o=4,Z(14),s=!1),Xt(e.j,e.m,null,"[Incomplete Response]");break}else if(r==Xs){e.o=4,Z(15),Xt(e.j,e.m,n,"[Invalid Chunk]"),s=!1;break}else Xt(e.j,e.m,r,null),Js(e,r);ha(e)&&r!=kn&&r!=Xs&&(e.h.g="",e.C=0),t!=4||n.length!=0||e.h.h||(e.o=1,Z(16),s=!1),e.i=e.i&&s,s?0<n.length&&!e.aa&&(e.aa=!0,t=e.l,t.g==e&&t.$&&!t.L&&(t.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),qr(t),t.L=!0,Z(11))):(Xt(e.j,e.m,n,"[Invalid Chunked Response]"),Mt(e),Ae(e))}m.fb=function(){if(this.g){var e=gt(this.g),t=this.g.ga();this.C<t.length&&(Zn(this),la(this,e,t),this.i&&e!=4&&Ze(this))}};function pl(e,t){var n=e.C,s=t.indexOf(`
`,n);return s==-1?kn:(n=Number(t.substring(n,s)),isNaN(n)?Xs:(s+=1,s+n>t.length?kn:(t=t.substr(s,n),e.C=s+n,t)))}m.cancel=function(){this.I=!0,Mt(this)};function Ze(e){e.Y=Date.now()+e.P,da(e,e.P)}function da(e,t){if(e.B!=null)throw Error("WatchDog timer not null");e.B=Xe(K(e.eb,e),t)}function Zn(e){e.B&&(T.clearTimeout(e.B),e.B=null)}m.eb=function(){this.B=null;const e=Date.now();0<=e-this.Y?(ll(this.j,this.A),this.K!=2&&(Ve(),Z(17)),Mt(this),this.o=2,Ae(this)):da(this,this.Y-e)};function Ae(e){e.l.G==0||e.I||xa(e.l,e)}function Mt(e){Zn(e);var t=e.L;t&&typeof t.na=="function"&&t.na(),e.L=null,kr(e.W),na(e.V),e.g&&(t=e.g,e.g=null,t.abort(),t.na())}function Js(e,t){try{var n=e.l;if(n.G!=0&&(n.g==e||Zs(n.i,e))){if(n.I=e.N,!e.J&&Zs(n.i,e)&&n.G==3){try{var s=n.Ca.g.parse(t)}catch{s=null}if(Array.isArray(s)&&s.length==3){var r=s;if(r[0]==0){t:if(!n.u){if(n.g)if(n.g.F+3e3<e.F)Ln(n),ss(n);else break t;jr(n),Z(18)}}else n.ta=r[1],0<n.ta-n.U&&37500>r[2]&&n.N&&n.A==0&&!n.v&&(n.v=Xe(K(n.ab,n),6e3));if(1>=wa(n.i)&&n.ka){try{n.ka()}catch{}n.ka=void 0}}else Pt(n,11)}else if((e.J||n.g==e)&&Ln(n),!_n(t))for(r=n.Ca.g.parse(t),t=0;t<r.length;t++){let u=r[t];if(n.U=u[0],u=u[1],n.G==2)if(u[0]=="c"){n.J=u[1],n.la=u[2];const h=u[3];h!=null&&(n.ma=h,n.h.info("VER="+n.ma));const l=u[4];l!=null&&(n.za=l,n.h.info("SVER="+n.za));const d=u[5];d!=null&&typeof d=="number"&&0<d&&(s=1.5*d,n.K=s,n.h.info("backChannelRequestTimeoutMs_="+s)),s=n;const f=e.g;if(f){const y=f.g?f.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(y){var i=s.i;!i.g&&(Y(y,"spdy")||Y(y,"quic")||Y(y,"h2"))&&(i.j=i.l,i.g=new Set,i.h&&(Fr(i,i.h),i.h=null))}if(s.D){const D=f.g?f.g.getResponseHeader("X-HTTP-Session-Id"):null;D&&(s.sa=D,x(s.F,s.D,D))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-e.F,n.h.info("Handshake RTT: "+n.O+"ms")),s=n;var o=e;if(s.oa=Ma(s,s.H?s.la:null,s.W),o.J){Ea(s.i,o);var a=o,c=s.K;c&&a.setTimeout(c),a.B&&(Zn(a),Ze(a)),s.g=o}else ka(s);0<n.l.length&&rs(n)}else u[0]!="stop"&&u[0]!="close"||Pt(n,7);else n.G==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?Pt(n,7):Ur(n):u[0]!="noop"&&n.j&&n.j.wa(u),n.A=0)}}Ve(4)}catch{}}function gl(e){if(e.R&&typeof e.R=="function")return e.R();if(typeof e=="string")return e.split("");if(js(e)){for(var t=[],n=e.length,s=0;s<n;s++)t.push(e[s]);return t}t=[],n=0;for(s in e)t[n++]=e[s];return t}function Mr(e,t){if(e.forEach&&typeof e.forEach=="function")e.forEach(t,void 0);else if(js(e)||typeof e=="string")Uo(e,t,void 0);else{if(e.T&&typeof e.T=="function")var n=e.T();else if(e.R&&typeof e.R=="function")n=void 0;else if(js(e)||typeof e=="string"){n=[];for(var s=e.length,r=0;r<s;r++)n.push(r)}else for(r in n=[],s=0,e)n[s++]=r;s=gl(e),r=s.length;for(var i=0;i<r;i++)t.call(void 0,s[i],n&&n[i],e)}}function de(e,t){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var s=0;s<n;s+=2)this.set(arguments[s],arguments[s+1])}else if(e)if(e instanceof de)for(n=e.T(),s=0;s<n.length;s++)this.set(n[s],e.get(n[s]));else for(s in e)this.set(s,e[s])}m=de.prototype;m.R=function(){Pr(this);for(var e=[],t=0;t<this.g.length;t++)e.push(this.h[this.g[t]]);return e};m.T=function(){return Pr(this),this.g.concat()};function Pr(e){if(e.i!=e.g.length){for(var t=0,n=0;t<e.g.length;){var s=e.g[t];Ut(e.h,s)&&(e.g[n++]=s),t++}e.g.length=n}if(e.i!=e.g.length){var r={};for(n=t=0;t<e.g.length;)s=e.g[t],Ut(r,s)||(e.g[n++]=s,r[s]=1),t++;e.g.length=n}}m.get=function(e,t){return Ut(this.h,e)?this.h[e]:t};m.set=function(e,t){Ut(this.h,e)||(this.i++,this.g.push(e)),this.h[e]=t};m.forEach=function(e,t){for(var n=this.T(),s=0;s<n.length;s++){var r=n[s],i=this.get(r);e.call(t,i,r,this)}};function Ut(e,t){return Object.prototype.hasOwnProperty.call(e,t)}var fa=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function ml(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var s=e[n].indexOf("="),r=null;if(0<=s){var i=e[n].substring(0,s);r=e[n].substring(s+1)}else i=e[n];t(i,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function jt(e,t){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,e instanceof jt){this.g=t!==void 0?t:e.g,Rn(this,e.j),this.s=e.s,xn(this,e.i),On(this,e.m),this.l=e.l,t=e.h;var n=new $e;n.i=t.i,t.g&&(n.g=new de(t.g),n.h=t.h),qi(this,n),this.o=e.o}else e&&(n=String(e).match(fa))?(this.g=!!t,Rn(this,n[1]||"",!0),this.s=De(n[2]||""),xn(this,n[3]||"",!0),On(this,n[4]),this.l=De(n[5]||"",!0),qi(this,n[6]||"",!0),this.o=De(n[7]||"")):(this.g=!!t,this.h=new $e(null,this.g))}jt.prototype.toString=function(){var e=[],t=this.j;t&&e.push(be(t,Ki,!0),":");var n=this.i;return(n||t=="file")&&(e.push("//"),(t=this.s)&&e.push(be(t,Ki,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&e.push(":",String(n))),(n=this.l)&&(this.i&&n.charAt(0)!="/"&&e.push("/"),e.push(be(n,n.charAt(0)=="/"?Tl:El,!0))),(n=this.h.toString())&&e.push("?",n),(n=this.o)&&e.push("#",be(n,Il)),e.join("")};function vt(e){return new jt(e)}function Rn(e,t,n){e.j=n?De(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function xn(e,t,n){e.i=n?De(t,!0):t}function On(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function qi(e,t,n){t instanceof $e?(e.h=t,Cl(e.h,e.g)):(n||(t=be(t,bl)),e.h=new $e(t,e.g))}function x(e,t,n){e.h.set(t,n)}function ts(e){return x(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function yl(e){return e instanceof jt?vt(e):new jt(e,void 0)}function vl(e,t,n,s){var r=new jt(null,void 0);return e&&Rn(r,e),t&&xn(r,t),n&&On(r,n),s&&(r.l=s),r}function De(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function be(e,t,n){return typeof e=="string"?(e=encodeURI(e).replace(t,wl),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function wl(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(e&15).toString(16)}var Ki=/[#\/\?@]/g,El=/[#\?:]/g,Tl=/[#\?]/g,bl=/[#\?@]/g,Il=/#/g;function $e(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function Rt(e){e.g||(e.g=new de,e.h=0,e.i&&ml(e.i,function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)}))}m=$e.prototype;m.add=function(e,t){Rt(this),this.i=null,e=fe(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this};function pa(e,t){Rt(e),t=fe(e,t),Ut(e.g.h,t)&&(e.i=null,e.h-=e.g.get(t).length,e=e.g,Ut(e.h,t)&&(delete e.h[t],e.i--,e.g.length>2*e.i&&Pr(e)))}function ga(e,t){return Rt(e),t=fe(e,t),Ut(e.g.h,t)}m.forEach=function(e,t){Rt(this),this.g.forEach(function(n,s){Uo(n,function(r){e.call(t,r,s,this)},this)},this)};m.T=function(){Rt(this);for(var e=this.g.R(),t=this.g.T(),n=[],s=0;s<t.length;s++)for(var r=e[s],i=0;i<r.length;i++)n.push(t[s]);return n};m.R=function(e){Rt(this);var t=[];if(typeof e=="string")ga(this,e)&&(t=Li(t,this.g.get(fe(this,e))));else{e=this.g.R();for(var n=0;n<e.length;n++)t=Li(t,e[n])}return t};m.set=function(e,t){return Rt(this),this.i=null,e=fe(this,e),ga(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this};m.get=function(e,t){return e?(e=this.R(e),0<e.length?String(e[0]):t):t};function ma(e,t,n){pa(e,t),0<n.length&&(e.i=null,e.g.set(fe(e,t),Tr(n)),e.h+=n.length)}m.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var e=[],t=this.g.T(),n=0;n<t.length;n++){var s=t[n],r=encodeURIComponent(String(s));s=this.R(s);for(var i=0;i<s.length;i++){var o=r;s[i]!==""&&(o+="="+encodeURIComponent(String(s[i]))),e.push(o)}}return this.i=e.join("&")};function fe(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function Cl(e,t){t&&!e.j&&(Rt(e),e.i=null,e.g.forEach(function(n,s){var r=s.toLowerCase();s!=r&&(pa(this,s),ma(this,r,n))},e)),e.j=t}var Sl=class{constructor(e,t){this.h=e,this.g=t}};function ya(e){this.l=e||Al,T.PerformanceNavigationTiming?(e=T.performance.getEntriesByType("navigation"),e=0<e.length&&(e[0].nextHopProtocol=="hq"||e[0].nextHopProtocol=="h2")):e=!!(T.g&&T.g.Ea&&T.g.Ea()&&T.g.Ea().Zb),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Al=10;function va(e){return e.h?!0:e.g?e.g.size>=e.j:!1}function wa(e){return e.h?1:e.g?e.g.size:0}function Zs(e,t){return e.h?e.h==t:e.g?e.g.has(t):!1}function Fr(e,t){e.g?e.g.add(t):e.h=t}function Ea(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}ya.prototype.cancel=function(){if(this.i=Ta(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const e of this.g.values())e.cancel();this.g.clear()}};function Ta(e){if(e.h!=null)return e.i.concat(e.h.D);if(e.g!=null&&e.g.size!==0){let t=e.i;for(const n of e.g.values())t=t.concat(n.D);return t}return Tr(e.i)}function Vr(){}Vr.prototype.stringify=function(e){return T.JSON.stringify(e,void 0)};Vr.prototype.parse=function(e){return T.JSON.parse(e,void 0)};function Dl(){this.g=new Vr}function _l(e,t,n){const s=n||"";try{Mr(e,function(r,i){let o=r;We(r)&&(o=_r(r)),t.push(s+i+"="+encodeURIComponent(o))})}catch(r){throw t.push(s+"type="+encodeURIComponent("_badmap")),r}}function Nl(e,t){const n=new Qn;if(T.Image){const s=new Image;s.onload=ln(fn,n,s,"TestLoadImage: loaded",!0,t),s.onerror=ln(fn,n,s,"TestLoadImage: error",!1,t),s.onabort=ln(fn,n,s,"TestLoadImage: abort",!1,t),s.ontimeout=ln(fn,n,s,"TestLoadImage: timeout",!1,t),T.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=e}else t(!1)}function fn(e,t,n,s,r){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,r(s)}catch{}}function tn(e){this.l=e.$b||null,this.j=e.ib||!1}z(tn,xr);tn.prototype.g=function(){return new es(this.l,this.j)};tn.prototype.i=function(e){return function(){return e}}({});function es(e,t){U.call(this),this.D=e,this.u=t,this.m=void 0,this.readyState=$r,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}z(es,U);var $r=0;m=es.prototype;m.open=function(e,t){if(this.readyState!=$r)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,Be(this)};m.send=function(e){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.D||T).fetch(new Request(this.B,t)).then(this.Va.bind(this),this.ha.bind(this))};m.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,en(this)),this.readyState=$r};m.Va=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,Be(this)),this.g&&(this.readyState=3,Be(this),this.g)))if(this.responseType==="arraybuffer")e.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(typeof T.ReadableStream<"u"&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;ba(this)}else e.text().then(this.Ua.bind(this),this.ha.bind(this))};function ba(e){e.j.read().then(e.Sa.bind(e)).catch(e.ha.bind(e))}m.Sa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?en(this):Be(this),this.readyState==3&&ba(this)}};m.Ua=function(e){this.g&&(this.response=this.responseText=e,en(this))};m.Ta=function(e){this.g&&(this.response=e,en(this))};m.ha=function(){this.g&&en(this)};function en(e){e.readyState=4,e.l=null,e.j=null,e.A=null,Be(e)}m.setRequestHeader=function(e,t){this.v.append(e,t)};m.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""};m.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join(`\r
`)};function Be(e){e.onreadystatechange&&e.onreadystatechange.call(e)}Object.defineProperty(es.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(e){this.m=e?"include":"same-origin"}});var kl=T.JSON.parse;function P(e){U.call(this),this.headers=new de,this.u=e||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Ia,this.K=this.L=!1}z(P,U);var Ia="",Rl=/^https?$/i,xl=["POST","PUT"];m=P.prototype;m.ea=function(e,t,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+e);t=t?t.toUpperCase():"GET",this.H=e,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Qs.g(),this.C=this.u?ji(this.u):ji(Qs),this.g.onreadystatechange=K(this.Fa,this);try{this.F=!0,this.g.open(t,String(e),!0),this.F=!1}catch(i){Hi(this,i);return}e=n||"";const r=new de(this.headers);s&&Mr(s,function(i,o){r.set(o,i)}),s=qh(r.T()),n=T.FormData&&e instanceof T.FormData,!(0<=Bo(xl,t))||s||n||r.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),r.forEach(function(i,o){this.g.setRequestHeader(o,i)},this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Aa(this),0<this.B&&((this.K=Ol(this.g))?(this.g.timeout=this.B,this.g.ontimeout=K(this.pa,this)):this.A=Rr(this.pa,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(i){Hi(this,i)}};function Ol(e){return ne&&Wh()&&typeof e.timeout=="number"&&e.ontimeout!==void 0}function Ll(e){return e.toLowerCase()=="content-type"}m.pa=function(){typeof Er<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,H(this,"timeout"),this.abort(8))};function Hi(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,Ca(e),ns(e)}function Ca(e){e.D||(e.D=!0,H(e,"complete"),H(e,"error"))}m.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,H(this,"complete"),H(this,"abort"),ns(this))};m.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),ns(this,!0)),P.Z.M.call(this)};m.Fa=function(){this.s||(this.F||this.v||this.l?Sa(this):this.cb())};m.cb=function(){Sa(this)};function Sa(e){if(e.h&&typeof Er<"u"&&(!e.C[1]||gt(e)!=4||e.ba()!=2)){if(e.v&&gt(e)==4)Rr(e.Fa,0,e);else if(H(e,"readystatechange"),gt(e)==4){e.h=!1;try{const a=e.ba();t:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break t;default:t=!1}var n;if(!(n=t)){var s;if(s=a===0){var r=String(e.H).match(fa)[1]||null;if(!r&&T.self&&T.self.location){var i=T.self.location.protocol;r=i.substr(0,i.length-1)}s=!Rl.test(r?r.toLowerCase():"")}n=s}if(n)H(e,"complete"),H(e,"success");else{e.m=6;try{var o=2<gt(e)?e.g.statusText:""}catch{o=""}e.j=o+" ["+e.ba()+"]",Ca(e)}}finally{ns(e)}}}}function ns(e,t){if(e.g){Aa(e);const n=e.g,s=e.C[0]?Dn:null;e.g=null,e.C=null,t||H(e,"ready");try{n.onreadystatechange=s}catch{}}}function Aa(e){e.g&&e.K&&(e.g.ontimeout=null),e.A&&(T.clearTimeout(e.A),e.A=null)}function gt(e){return e.g?e.g.readyState:0}m.ba=function(){try{return 2<gt(this)?this.g.status:-1}catch{return-1}};m.ga=function(){try{return this.g?this.g.responseText:""}catch{return""}};m.Qa=function(e){if(this.g){var t=this.g.responseText;return e&&t.indexOf(e)==0&&(t=t.substring(e.length)),kl(t)}};function Gi(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.J){case Ia:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch{return null}}m.Da=function(){return this.m};m.La=function(){return typeof this.j=="string"?this.j:String(this.j)};function Ml(e){let t="";return br(e,function(n,s){t+=s,t+=":",t+=n,t+=`\r
`}),t}function Br(e,t,n){t:{for(s in n){var s=!1;break t}s=!0}s||(n=Ml(n),typeof e=="string"?n!=null&&encodeURIComponent(String(n)):x(e,t,n))}function Ee(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function Da(e){this.za=0,this.l=[],this.h=new Qn,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=Ee("failFast",!1,e),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=Ee("baseRetryDelayMs",5e3,e),this.$a=Ee("retryDelaySeedMs",1e4,e),this.Ya=Ee("forwardChannelMaxRetries",2,e),this.ra=Ee("forwardChannelRequestTimeoutMs",2e4,e),this.qa=e&&e.xmlHttpFactory||void 0,this.Ba=e&&e.Yb||!1,this.K=void 0,this.H=e&&e.supportsCrossDomainXhr||!1,this.J="",this.i=new ya(e&&e.concurrentRequestLimit),this.Ca=new Dl,this.ja=e&&e.fastHandshake||!1,this.Ra=e&&e.Wb||!1,e&&e.Aa&&this.h.Aa(),e&&e.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&e&&e.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!e||e.Xb!==!1}m=Da.prototype;m.ma=8;m.G=1;function Ur(e){if(_a(e),e.G==3){var t=e.V++,n=vt(e.F);x(n,"SID",e.J),x(n,"RID",t),x(n,"TYPE","terminate"),nn(e,n),t=new Je(e,e.h,t,void 0),t.K=2,t.v=ts(vt(n)),n=!1,T.navigator&&T.navigator.sendBeacon&&(n=T.navigator.sendBeacon(t.v.toString(),"")),!n&&T.Image&&(new Image().src=t.v,n=!0),n||(t.g=Pa(t.l,null),t.g.ea(t.v)),t.F=Date.now(),Ze(t)}La(e)}m.hb=function(e){try{this.h.info("Origin Trials invoked: "+e)}catch{}};function ss(e){e.g&&(qr(e),e.g.cancel(),e.g=null)}function _a(e){ss(e),e.u&&(T.clearTimeout(e.u),e.u=null),Ln(e),e.i.cancel(),e.m&&(typeof e.m=="number"&&T.clearTimeout(e.m),e.m=null)}function Rs(e,t){e.l.push(new Sl(e.Za++,t)),e.G==3&&rs(e)}function rs(e){va(e.i)||e.m||(e.m=!0,Nr(e.Ha,e),e.C=0)}function Pl(e,t){return wa(e.i)>=e.i.j-(e.m?1:0)?!1:e.m?(e.l=t.D.concat(e.l),!0):e.G==1||e.G==2||e.C>=(e.Xa?0:e.Ya)?!1:(e.m=Xe(K(e.Ha,e,t),Oa(e,e.C)),e.C++,!0)}m.Ha=function(e){if(this.m)if(this.m=null,this.G==1){if(!e){this.V=Math.floor(1e5*Math.random()),e=this.V++;const r=new Je(this,this.h,e,void 0);let i=this.s;if(this.P&&(i?(i=jo(i),qo(i,this.P)):i=this.P),this.o===null&&(r.H=i),this.ja)t:{for(var t=0,n=0;n<this.l.length;n++){e:{var s=this.l[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break e}s=void 0}if(s===void 0)break;if(t+=s,4096<t){t=n;break t}if(t===4096||n===this.l.length-1){t=n+1;break t}}t=1e3}else t=1e3;t=Na(this,r,t),n=vt(this.F),x(n,"RID",e),x(n,"CVER",22),this.D&&x(n,"X-HTTP-Session-Id",this.D),nn(this,n),this.o&&i&&Br(n,this.o,i),Fr(this.i,r),this.Ra&&x(n,"TYPE","init"),this.ja?(x(n,"$req",t),x(n,"SID","null"),r.$=!0,Ys(r,n,null)):Ys(r,n,t),this.G=2}}else this.G==3&&(e?zi(this,e):this.l.length==0||va(this.i)||zi(this))};function zi(e,t){var n;t?n=t.m:n=e.V++;const s=vt(e.F);x(s,"SID",e.J),x(s,"RID",n),x(s,"AID",e.U),nn(e,s),e.o&&e.s&&Br(s,e.o,e.s),n=new Je(e,e.h,n,e.C+1),e.o===null&&(n.H=e.s),t&&(e.l=t.D.concat(e.l)),t=Na(e,n,1e3),n.setTimeout(Math.round(.5*e.ra)+Math.round(.5*e.ra*Math.random())),Fr(e.i,n),Ys(n,s,t)}function nn(e,t){e.j&&Mr({},function(n,s){x(t,s,n)})}function Na(e,t,n){n=Math.min(e.l.length,n);var s=e.j?K(e.j.Oa,e.j,e):null;t:{var r=e.l;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=r[0].h,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<n;c++){let u=r[c].h;const h=r[c].g;if(u-=i,0>u)i=Math.max(0,r[c].h-100),a=!1;else try{_l(h,o,"req"+u+"_")}catch{s&&s(h)}}if(a){s=o.join("&");break t}}}return e=e.l.splice(0,n),t.D=e,s}function ka(e){e.g||e.u||(e.Y=1,Nr(e.Ga,e),e.A=0)}function jr(e){return e.g||e.u||3<=e.A?!1:(e.Y++,e.u=Xe(K(e.Ga,e),Oa(e,e.A)),e.A++,!0)}m.Ga=function(){if(this.u=null,Ra(this),this.$&&!(this.L||this.g==null||0>=this.O)){var e=2*this.O;this.h.info("BP detection timer enabled: "+e),this.B=Xe(K(this.bb,this),e)}};m.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,Z(10),ss(this),Ra(this))};function qr(e){e.B!=null&&(T.clearTimeout(e.B),e.B=null)}function Ra(e){e.g=new Je(e,e.h,"rpc",e.Y),e.o===null&&(e.g.H=e.s),e.g.O=0;var t=vt(e.oa);x(t,"RID","rpc"),x(t,"SID",e.J),x(t,"CI",e.N?"0":"1"),x(t,"AID",e.U),nn(e,t),x(t,"TYPE","xmlhttp"),e.o&&e.s&&Br(t,e.o,e.s),e.K&&e.g.setTimeout(e.K);var n=e.g;e=e.la,n.K=1,n.v=ts(vt(t)),n.s=null,n.U=!0,ua(n,e)}m.ab=function(){this.v!=null&&(this.v=null,ss(this),jr(this),Z(19))};function Ln(e){e.v!=null&&(T.clearTimeout(e.v),e.v=null)}function xa(e,t){var n=null;if(e.g==t){Ln(e),qr(e),e.g=null;var s=2}else if(Zs(e.i,t))n=t.D,Ea(e.i,t),s=1;else return;if(e.I=t.N,e.G!=0){if(t.i)if(s==1){n=t.s?t.s.length:0,t=Date.now()-t.F;var r=e.C;s=Xn(),H(s,new ia(s,n)),rs(e)}else ka(e);else if(r=t.o,r==3||r==0&&0<e.I||!(s==1&&Pl(e,t)||s==2&&jr(e)))switch(n&&0<n.length&&(t=e.i,t.i=t.i.concat(n)),r){case 1:Pt(e,5);break;case 4:Pt(e,10);break;case 3:Pt(e,6);break;default:Pt(e,2)}}}function Oa(e,t){let n=e.Pa+Math.floor(Math.random()*e.$a);return e.j||(n*=2),n*t}function Pt(e,t){if(e.h.info("Error code "+t),t==2){var n=null;e.j&&(n=null);var s=K(e.jb,e);n||(n=new jt("//www.google.com/images/cleardot.gif"),T.location&&T.location.protocol=="http"||Rn(n,"https"),ts(n)),Nl(n.toString(),s)}else Z(2);e.G=0,e.j&&e.j.va(t),La(e),_a(e)}m.jb=function(e){e?(this.h.info("Successfully pinged google.com"),Z(2)):(this.h.info("Failed to ping google.com"),Z(1))};function La(e){e.G=0,e.I=-1,e.j&&((Ta(e.i).length!=0||e.l.length!=0)&&(e.i.i.length=0,Tr(e.l),e.l.length=0),e.j.ua())}function Ma(e,t,n){let s=yl(n);if(s.i!="")t&&xn(s,t+"."+s.i),On(s,s.m);else{const r=T.location;s=vl(r.protocol,t?t+"."+r.hostname:r.hostname,+r.port,n)}return e.aa&&br(e.aa,function(r,i){x(s,i,r)}),t=e.D,n=e.sa,t&&n&&x(s,t,n),x(s,"VER",e.ma),nn(e,s),s}function Pa(e,t,n){if(t&&!e.H)throw Error("Can't create secondary domain capable XhrIo object.");return t=n&&e.Ba&&!e.qa?new P(new tn({ib:!0})):new P(e.qa),t.L=e.H,t}function Fa(){}m=Fa.prototype;m.xa=function(){};m.wa=function(){};m.va=function(){};m.ua=function(){};m.Oa=function(){};function Mn(){if(ne&&!(10<=Number(Qh)))throw Error("Environmental error: no available transport.")}Mn.prototype.g=function(e,t){return new ot(e,t)};function ot(e,t){U.call(this),this.g=new Da(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.ya&&(e?e["X-WebChannel-Client-Profile"]=t.ya:e={"X-WebChannel-Client-Profile":t.ya}),this.g.P=e,(e=t&&t.httpHeadersOverwriteParam)&&!_n(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!_n(t)&&(this.g.D=t,e=this.h,e!==null&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new pe(this)}z(ot,U);ot.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var e=this.g,t=this.l,n=this.h||void 0;e.Wa&&(e.h.info("Origin Trials enabled."),Nr(K(e.hb,e,t))),Z(0),e.W=t,e.aa=n||{},e.N=e.X,e.F=Ma(e,null,e.W),rs(e)};ot.prototype.close=function(){Ur(this.g)};ot.prototype.u=function(e){if(typeof e=="string"){var t={};t.__data__=e,Rs(this.g,t)}else this.v?(t={},t.__data__=_r(e),Rs(this.g,t)):Rs(this.g,e)};ot.prototype.M=function(){this.g.j=null,delete this.j,Ur(this.g),delete this.g,ot.Z.M.call(this)};function Va(e){Or.call(this);var t=e.__sm__;if(t){t:{for(const n in t){e=n;break t}e=void 0}(this.i=e)&&(e=this.i,t=t!==null&&e in t?t[e]:void 0),this.data=t}else this.data=e}z(Va,Or);function $a(){Lr.call(this),this.status=1}z($a,Lr);function pe(e){this.g=e}z(pe,Fa);pe.prototype.xa=function(){H(this.g,"a")};pe.prototype.wa=function(e){H(this.g,new Va(e))};pe.prototype.va=function(e){H(this.g,new $a)};pe.prototype.ua=function(){H(this.g,"b")};Mn.prototype.createWebChannel=Mn.prototype.g;ot.prototype.send=ot.prototype.u;ot.prototype.open=ot.prototype.m;ot.prototype.close=ot.prototype.close;Yn.NO_ERROR=0;Yn.TIMEOUT=8;Yn.HTTP_ERROR=6;oa.COMPLETE="complete";aa.EventType=Ye;Ye.OPEN="a";Ye.CLOSE="b";Ye.ERROR="c";Ye.MESSAGE="d";U.prototype.listen=U.prototype.N;P.prototype.listenOnce=P.prototype.O;P.prototype.getLastError=P.prototype.La;P.prototype.getLastErrorCode=P.prototype.Da;P.prototype.getStatus=P.prototype.ba;P.prototype.getResponseJson=P.prototype.Qa;P.prototype.getResponseText=P.prototype.ga;P.prototype.send=P.prototype.ea;var Fl=function(){return new Mn},Vl=function(){return Xn()},xs=Yn,$l=oa,Bl=Gt,Wi={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},Ul=tn,pn=aa,jl=P;const Qi="@firebase/firestore";/**
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
 */class et{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}et.UNAUTHENTICATED=new et(null),et.GOOGLE_CREDENTIALS=new et("google-credentials-uid"),et.FIRST_PARTY=new et("first-party-uid"),et.MOCK_USER=new et("mock-user");/**
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
 */let ge="9.9.2";/**
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
 */const qt=new Lo("@firebase/firestore");function Xi(){return qt.logLevel}function v(e,...t){if(qt.logLevel<=N.DEBUG){const n=t.map(Kr);qt.debug(`Firestore (${ge}): ${e}`,...n)}}function wt(e,...t){if(qt.logLevel<=N.ERROR){const n=t.map(Kr);qt.error(`Firestore (${ge}): ${e}`,...n)}}function Yi(e,...t){if(qt.logLevel<=N.WARN){const n=t.map(Kr);qt.warn(`Firestore (${ge}): ${e}`,...n)}}function Kr(e){if(typeof e=="string")return e;try{return t=e,JSON.stringify(t)}catch{return e}/**
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
 */function b(e="Unexpected state"){const t=`FIRESTORE (${ge}) INTERNAL ASSERTION FAILED: `+e;throw wt(t),new Error(t)}function R(e,t){e||b()}function I(e,t){return e}/**
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
 */const p={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class E extends le{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class St{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
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
 */class ql{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Kl{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(et.UNAUTHENTICATED))}shutdown(){}}class Hl{constructor(t){this.t=t,this.currentUser=et.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){let s=this.i;const r=c=>this.i!==s?(s=this.i,n(c)):Promise.resolve();let i=new St;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new St,t.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const c=i;t.enqueueRetryable(async()=>{await c.promise,await r(this.currentUser)})},a=c=>{v("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(v("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new St)}},0),o()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==t?(v("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(R(typeof s.accessToken=="string"),new ql(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return R(t===null||typeof t=="string"),new et(t)}}class Gl{constructor(t,n,s){this.type="FirstParty",this.user=et.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",n);const r=t.auth.getAuthHeaderValueForFirstParty([]);r&&this.headers.set("Authorization",r),s&&this.headers.set("X-Goog-Iam-Authorization-Token",s)}}class zl{constructor(t,n,s){this.h=t,this.l=n,this.m=s}getToken(){return Promise.resolve(new Gl(this.h,this.l,this.m))}start(t,n){t.enqueueRetryable(()=>n(et.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Wl{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Ql{constructor(t){this.g=t,this.forceRefresh=!1,this.appCheck=null,this.p=null}start(t,n){const s=i=>{i.error!=null&&v("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.p;return this.p=i.token,v("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{t.enqueueRetryable(()=>s(i))};const r=i=>{v("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.g.onInit(i=>r(i)),setTimeout(()=>{if(!this.appCheck){const i=this.g.getImmediate({optional:!0});i?r(i):v("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(R(typeof n.token=="string"),this.p=n.token,new Wl(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function Xl(e){const t=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let s=0;s<e;s++)n[s]=Math.floor(256*Math.random());return n}/**
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
 */class Ba{static I(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/t.length)*t.length;let s="";for(;s.length<20;){const r=Xl(40);for(let i=0;i<r.length;++i)s.length<20&&r[i]<n&&(s+=t.charAt(r[i]%t.length))}return s}}function k(e,t){return e<t?-1:e>t?1:0}function se(e,t,n){return e.length===t.length&&e.every((s,r)=>n(s,t[r]))}/**
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
 */class F{constructor(t,n){if(this.seconds=t,this.nanoseconds=n,n<0)throw new E(p.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new E(p.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(t<-62135596800)throw new E(p.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new E(p.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return F.fromMillis(Date.now())}static fromDate(t){return F.fromMillis(t.getTime())}static fromMillis(t){const n=Math.floor(t/1e3),s=Math.floor(1e6*(t-1e3*n));return new F(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?k(this.nanoseconds,t.nanoseconds):k(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class C{constructor(t){this.timestamp=t}static fromTimestamp(t){return new C(t)}static min(){return new C(new F(0,0))}static max(){return new C(new F(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Ue{constructor(t,n,s){n===void 0?n=0:n>t.length&&b(),s===void 0?s=t.length-n:s>t.length-n&&b(),this.segments=t,this.offset=n,this.len=s}get length(){return this.len}isEqual(t){return Ue.comparator(this,t)===0}child(t){const n=this.segments.slice(this.offset,this.limit());return t instanceof Ue?t.forEach(s=>{n.push(s)}):n.push(t),this.construct(n)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}forEach(t){for(let n=this.offset,s=this.limit();n<s;n++)t(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,n){const s=Math.min(t.length,n.length);for(let r=0;r<s;r++){const i=t.get(r),o=n.get(r);if(i<o)return-1;if(i>o)return 1}return t.length<n.length?-1:t.length>n.length?1:0}}class O extends Ue{construct(t,n,s){return new O(t,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const n=[];for(const s of t){if(s.indexOf("//")>=0)throw new E(p.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(r=>r.length>0))}return new O(n)}static emptyPath(){return new O([])}}const Yl=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class W extends Ue{construct(t,n,s){return new W(t,n,s)}static isValidIdentifier(t){return Yl.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),W.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new W(["__name__"])}static fromServerFormat(t){const n=[];let s="",r=0;const i=()=>{if(s.length===0)throw new E(p.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;r<t.length;){const a=t[r];if(a==="\\"){if(r+1===t.length)throw new E(p.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const c=t[r+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new E(p.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);s+=c,r+=2}else a==="`"?(o=!o,r++):a!=="."||o?(s+=a,r++):(i(),r++)}if(i(),o)throw new E(p.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new W(n)}static emptyPath(){return new W([])}}/**
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
 */class w{constructor(t){this.path=t}static fromPath(t){return new w(O.fromString(t))}static fromName(t){return new w(O.fromString(t).popFirst(5))}static empty(){return new w(O.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&O.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,n){return O.comparator(t.path,n.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new w(new O(t.slice()))}}function Jl(e,t){const n=e.toTimestamp().seconds,s=e.toTimestamp().nanoseconds+1,r=C.fromTimestamp(s===1e9?new F(n+1,0):new F(n,s));return new Dt(r,w.empty(),t)}function Zl(e){return new Dt(e.readTime,e.key,-1)}class Dt{constructor(t,n,s){this.readTime=t,this.documentKey=n,this.largestBatchId=s}static min(){return new Dt(C.min(),w.empty(),-1)}static max(){return new Dt(C.max(),w.empty(),-1)}}function td(e,t){let n=e.readTime.compareTo(t.readTime);return n!==0?n:(n=w.comparator(e.documentKey,t.documentKey),n!==0?n:k(e.largestBatchId,t.largestBatchId))}/**
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
 */const ed="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class nd{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
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
 */async function sn(e){if(e.code!==p.FAILED_PRECONDITION||e.message!==ed)throw e;v("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class g{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(t){return this.next(void 0,t)}next(t,n){return this.callbackAttached&&b(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(t,this.result):new g((s,r)=>{this.nextCallback=i=>{this.wrapSuccess(t,i).next(s,r)},this.catchCallback=i=>{this.wrapFailure(n,i).next(s,r)}})}toPromise(){return new Promise((t,n)=>{this.next(t,n)})}wrapUserFunction(t){try{const n=t();return n instanceof g?n:g.resolve(n)}catch(n){return g.reject(n)}}wrapSuccess(t,n){return t?this.wrapUserFunction(()=>t(n)):g.resolve(n)}wrapFailure(t,n){return t?this.wrapUserFunction(()=>t(n)):g.reject(n)}static resolve(t){return new g((n,s)=>{n(t)})}static reject(t){return new g((n,s)=>{s(t)})}static waitFor(t){return new g((n,s)=>{let r=0,i=0,o=!1;t.forEach(a=>{++r,a.next(()=>{++i,o&&i===r&&n()},c=>s(c))}),o=!0,i===r&&n()})}static or(t){let n=g.resolve(!1);for(const s of t)n=n.next(r=>r?g.resolve(r):s());return n}static forEach(t,n){const s=[];return t.forEach((r,i)=>{s.push(n.call(this,r,i))}),this.waitFor(s)}static mapArray(t,n){return new g((s,r)=>{const i=t.length,o=new Array(i);let a=0;for(let c=0;c<i;c++){const u=c;n(t[u]).next(h=>{o[u]=h,++a,a===i&&s(o)},h=>r(h))}})}static doWhile(t,n){return new g((s,r)=>{const i=()=>{t()===!0?n().next(()=>{i()},r):s()};i()})}}function rn(e){return e.name==="IndexedDbTransactionError"}/**
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
 */class Hr{constructor(t,n){this.previousValue=t,n&&(n.sequenceNumberHandler=s=>this.it(s),this.rt=s=>n.writeSequenceNumber(s))}it(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.rt&&this.rt(t),t}}/**
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
 */function Ji(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function zt(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function Ua(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}/**
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
 */Hr.ot=-1;class ${constructor(t,n){this.comparator=t,this.root=n||j.EMPTY}insert(t,n){return new $(this.comparator,this.root.insert(t,n,this.comparator).copy(null,null,j.BLACK,null,null))}remove(t){return new $(this.comparator,this.root.remove(t,this.comparator).copy(null,null,j.BLACK,null,null))}get(t){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(t,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(t){let n=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(t,s.key);if(r===0)return n+s.left.size;r<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((n,s)=>(t(n,s),!1))}toString(){const t=[];return this.inorderTraversal((n,s)=>(t.push(`${n}:${s}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new gn(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new gn(this.root,t,this.comparator,!1)}getReverseIterator(){return new gn(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new gn(this.root,t,this.comparator,!0)}}class gn{constructor(t,n,s,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=n?s(t.key,n):1,n&&r&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(i===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const n={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class j{constructor(t,n,s,r,i){this.key=t,this.value=n,this.color=s!=null?s:j.RED,this.left=r!=null?r:j.EMPTY,this.right=i!=null?i:j.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,n,s,r,i){return new j(t!=null?t:this.key,n!=null?n:this.value,s!=null?s:this.color,r!=null?r:this.left,i!=null?i:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,s){let r=this;const i=s(t,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(t,n,s),null):i===0?r.copy(null,n,null,null,null):r.copy(null,null,null,null,r.right.insert(t,n,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return j.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,n){let s,r=this;if(n(t,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(t,n),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),n(t,r.key)===0){if(r.right.isEmpty())return j.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(t,n))}return r.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,j.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,j.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw b();const t=this.left.check();if(t!==this.right.check())throw b();return t+(this.isRed()?0:1)}}j.EMPTY=null,j.RED=!0,j.BLACK=!1;j.EMPTY=new class{constructor(){this.size=0}get key(){throw b()}get value(){throw b()}get color(){throw b()}get left(){throw b()}get right(){throw b()}copy(e,t,n,s,r){return this}insert(e,t,n){return new j(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class V{constructor(t){this.comparator=t,this.data=new $(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((n,s)=>(t(n),!1))}forEachInRange(t,n){const s=this.data.getIteratorFrom(t[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,t[1])>=0)return;n(r.key)}}forEachWhile(t,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!t(s.getNext().key))return}firstAfterOrEqual(t){const n=this.data.getIteratorFrom(t);return n.hasNext()?n.getNext().key:null}getIterator(){return new Zi(this.data.getIterator())}getIteratorFrom(t){return new Zi(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let n=this;return n.size<t.size&&(n=t,t=this),t.forEach(s=>{n=n.add(s)}),n}isEqual(t){if(!(t instanceof V)||this.size!==t.size)return!1;const n=this.data.getIterator(),s=t.data.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(n=>{t.push(n)}),t}toString(){const t=[];return this.forEach(n=>t.push(n)),"SortedSet("+t.toString()+")"}copy(t){const n=new V(this.comparator);return n.data=t,n}}class Zi{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class ut{constructor(t){this.fields=t,t.sort(W.comparator)}static empty(){return new ut([])}unionWith(t){let n=new V(W.comparator);for(const s of this.fields)n=n.add(s);for(const s of t)n=n.add(s);return new ut(n.toArray())}covers(t){for(const n of this.fields)if(n.isPrefixOf(t))return!0;return!1}isEqual(t){return se(this.fields,t.fields,(n,s)=>n.isEqual(s))}}/**
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
 */class G{constructor(t){this.binaryString=t}static fromBase64String(t){const n=atob(t);return new G(n)}static fromUint8Array(t){const n=function(s){let r="";for(let i=0;i<s.length;++i)r+=String.fromCharCode(s[i]);return r}(t);return new G(n)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const n=new Uint8Array(t.length);for(let s=0;s<t.length;s++)n[s]=t.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return k(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}G.EMPTY_BYTE_STRING=new G("");const sd=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function _t(e){if(R(!!e),typeof e=="string"){let t=0;const n=sd.exec(e);if(R(!!n),n[1]){let r=n[1];r=(r+"000000000").substr(0,9),t=Number(r)}const s=new Date(e);return{seconds:Math.floor(s.getTime()/1e3),nanos:t}}return{seconds:M(e.seconds),nanos:M(e.nanos)}}function M(e){return typeof e=="number"?e:typeof e=="string"?Number(e):0}function re(e){return typeof e=="string"?G.fromBase64String(e):G.fromUint8Array(e)}/**
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
 */function ja(e){var t,n;return((n=(((t=e==null?void 0:e.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function qa(e){const t=e.mapValue.fields.__previous_value__;return ja(t)?qa(t):t}function je(e){const t=_t(e.mapValue.fields.__local_write_time__.timestampValue);return new F(t.seconds,t.nanos)}/**
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
 */class rd{constructor(t,n,s,r,i,o,a,c){this.databaseId=t,this.appId=n,this.persistenceKey=s,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class ie{constructor(t,n){this.projectId=t,this.database=n||"(default)"}static empty(){return new ie("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof ie&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */function is(e){return e==null}function Pn(e){return e===0&&1/e==-1/0}function id(e){return typeof e=="number"&&Number.isInteger(e)&&!Pn(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}/**
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
 */const mn={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Kt(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?ja(e)?4:od(e)?9007199254740991:10:b()}function ft(e,t){if(e===t)return!0;const n=Kt(e);if(n!==Kt(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return je(e).isEqual(je(t));case 3:return function(s,r){if(typeof s.timestampValue=="string"&&typeof r.timestampValue=="string"&&s.timestampValue.length===r.timestampValue.length)return s.timestampValue===r.timestampValue;const i=_t(s.timestampValue),o=_t(r.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(s,r){return re(s.bytesValue).isEqual(re(r.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(s,r){return M(s.geoPointValue.latitude)===M(r.geoPointValue.latitude)&&M(s.geoPointValue.longitude)===M(r.geoPointValue.longitude)}(e,t);case 2:return function(s,r){if("integerValue"in s&&"integerValue"in r)return M(s.integerValue)===M(r.integerValue);if("doubleValue"in s&&"doubleValue"in r){const i=M(s.doubleValue),o=M(r.doubleValue);return i===o?Pn(i)===Pn(o):isNaN(i)&&isNaN(o)}return!1}(e,t);case 9:return se(e.arrayValue.values||[],t.arrayValue.values||[],ft);case 10:return function(s,r){const i=s.mapValue.fields||{},o=r.mapValue.fields||{};if(Ji(i)!==Ji(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!ft(i[a],o[a])))return!1;return!0}(e,t);default:return b()}}function qe(e,t){return(e.values||[]).find(n=>ft(n,t))!==void 0}function oe(e,t){if(e===t)return 0;const n=Kt(e),s=Kt(t);if(n!==s)return k(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return k(e.booleanValue,t.booleanValue);case 2:return function(r,i){const o=M(r.integerValue||r.doubleValue),a=M(i.integerValue||i.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(e,t);case 3:return to(e.timestampValue,t.timestampValue);case 4:return to(je(e),je(t));case 5:return k(e.stringValue,t.stringValue);case 6:return function(r,i){const o=re(r),a=re(i);return o.compareTo(a)}(e.bytesValue,t.bytesValue);case 7:return function(r,i){const o=r.split("/"),a=i.split("/");for(let c=0;c<o.length&&c<a.length;c++){const u=k(o[c],a[c]);if(u!==0)return u}return k(o.length,a.length)}(e.referenceValue,t.referenceValue);case 8:return function(r,i){const o=k(M(r.latitude),M(i.latitude));return o!==0?o:k(M(r.longitude),M(i.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(r,i){const o=r.values||[],a=i.values||[];for(let c=0;c<o.length&&c<a.length;++c){const u=oe(o[c],a[c]);if(u)return u}return k(o.length,a.length)}(e.arrayValue,t.arrayValue);case 10:return function(r,i){if(r===mn.mapValue&&i===mn.mapValue)return 0;if(r===mn.mapValue)return 1;if(i===mn.mapValue)return-1;const o=r.fields||{},a=Object.keys(o),c=i.fields||{},u=Object.keys(c);a.sort(),u.sort();for(let h=0;h<a.length&&h<u.length;++h){const l=k(a[h],u[h]);if(l!==0)return l;const d=oe(o[a[h]],c[u[h]]);if(d!==0)return d}return k(a.length,u.length)}(e.mapValue,t.mapValue);default:throw b()}}function to(e,t){if(typeof e=="string"&&typeof t=="string"&&e.length===t.length)return k(e,t);const n=_t(e),s=_t(t),r=k(n.seconds,s.seconds);return r!==0?r:k(n.nanos,s.nanos)}function Zt(e){return tr(e)}function tr(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(s){const r=_t(s);return`time(${r.seconds},${r.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?re(e.bytesValue).toBase64():"referenceValue"in e?(n=e.referenceValue,w.fromName(n).toString()):"geoPointValue"in e?`geo(${(t=e.geoPointValue).latitude},${t.longitude})`:"arrayValue"in e?function(s){let r="[",i=!0;for(const o of s.values||[])i?i=!1:r+=",",r+=tr(o);return r+"]"}(e.arrayValue):"mapValue"in e?function(s){const r=Object.keys(s.fields||{}).sort();let i="{",o=!0;for(const a of r)o?o=!1:i+=",",i+=`${a}:${tr(s.fields[a])}`;return i+"}"}(e.mapValue):b();var t,n}function er(e){return!!e&&"integerValue"in e}function Gr(e){return!!e&&"arrayValue"in e}function eo(e){return!!e&&"nullValue"in e}function no(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function Tn(e){return!!e&&"mapValue"in e}function _e(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&typeof e.timestampValue=="object")return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return zt(e.mapValue.fields,(n,s)=>t.mapValue.fields[n]=_e(s)),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=_e(e.arrayValue.values[n]);return t}return Object.assign({},e)}function od(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class st{constructor(t){this.value=t}static empty(){return new st({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let n=this.value;for(let s=0;s<t.length-1;++s)if(n=(n.mapValue.fields||{})[t.get(s)],!Tn(n))return null;return n=(n.mapValue.fields||{})[t.lastSegment()],n||null}}set(t,n){this.getFieldsMap(t.popLast())[t.lastSegment()]=_e(n)}setAll(t){let n=W.emptyPath(),s={},r=[];t.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,s,r),s={},r=[],n=a.popLast()}o?s[a.lastSegment()]=_e(o):r.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,s,r)}delete(t){const n=this.field(t.popLast());Tn(n)&&n.mapValue.fields&&delete n.mapValue.fields[t.lastSegment()]}isEqual(t){return ft(this.value,t.value)}getFieldsMap(t){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<t.length;++s){let r=n.mapValue.fields[t.get(s)];Tn(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},n.mapValue.fields[t.get(s)]=r),n=r}return n.mapValue.fields}applyChanges(t,n,s){zt(n,(r,i)=>t[r]=i);for(const r of s)delete t[r]}clone(){return new st(_e(this.value))}}function Ka(e){const t=[];return zt(e.fields,(n,s)=>{const r=new W([n]);if(Tn(s)){const i=Ka(s.mapValue).fields;if(i.length===0)t.push(r);else for(const o of i)t.push(r.child(o))}else t.push(r)}),new ut(t)}/**
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
 */class q{constructor(t,n,s,r,i,o){this.key=t,this.documentType=n,this.version=s,this.readTime=r,this.data=i,this.documentState=o}static newInvalidDocument(t){return new q(t,0,C.min(),C.min(),st.empty(),0)}static newFoundDocument(t,n,s){return new q(t,1,n,C.min(),s,0)}static newNoDocument(t,n){return new q(t,2,n,C.min(),st.empty(),0)}static newUnknownDocument(t,n){return new q(t,3,n,C.min(),st.empty(),2)}convertToFoundDocument(t,n){return this.version=t,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=st.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=st.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=C.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof q&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new q(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class ad{constructor(t,n=null,s=[],r=[],i=null,o=null,a=null){this.path=t,this.collectionGroup=n,this.orderBy=s,this.filters=r,this.limit=i,this.startAt=o,this.endAt=a,this.ut=null}}function so(e,t=null,n=[],s=[],r=null,i=null,o=null){return new ad(e,t,n,s,r,i,o)}function zr(e){const t=I(e);if(t.ut===null){let n=t.path.canonicalString();t.collectionGroup!==null&&(n+="|cg:"+t.collectionGroup),n+="|f:",n+=t.filters.map(s=>{return(r=s).field.canonicalString()+r.op.toString()+Zt(r.value);var r}).join(","),n+="|ob:",n+=t.orderBy.map(s=>function(r){return r.field.canonicalString()+r.dir}(s)).join(","),is(t.limit)||(n+="|l:",n+=t.limit),t.startAt&&(n+="|lb:",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(s=>Zt(s)).join(",")),t.endAt&&(n+="|ub:",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(s=>Zt(s)).join(",")),t.ut=n}return t.ut}function cd(e){let t=e.path.canonicalString();return e.collectionGroup!==null&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map(n=>{return`${(s=n).field.canonicalString()} ${s.op} ${Zt(s.value)}`;var s}).join(", ")}]`),is(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map(n=>function(s){return`${s.field.canonicalString()} (${s.dir})`}(n)).join(", ")}]`),e.startAt&&(t+=", startAt: ",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(n=>Zt(n)).join(",")),e.endAt&&(t+=", endAt: ",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(n=>Zt(n)).join(",")),`Target(${t})`}function Wr(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let r=0;r<e.orderBy.length;r++)if(!md(e.orderBy[r],t.orderBy[r]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let r=0;r<e.filters.length;r++)if(n=e.filters[r],s=t.filters[r],n.op!==s.op||!n.field.isEqual(s.field)||!ft(n.value,s.value))return!1;var n,s;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!io(e.startAt,t.startAt)&&io(e.endAt,t.endAt)}function nr(e){return w.isDocumentKey(e.path)&&e.collectionGroup===null&&e.filters.length===0}class rt extends class{}{constructor(t,n,s){super(),this.field=t,this.op=n,this.value=s}static create(t,n,s){return t.isKeyField()?n==="in"||n==="not-in"?this.ct(t,n,s):new ud(t,n,s):n==="array-contains"?new dd(t,s):n==="in"?new fd(t,s):n==="not-in"?new pd(t,s):n==="array-contains-any"?new gd(t,s):new rt(t,n,s)}static ct(t,n,s){return n==="in"?new hd(t,s):new ld(t,s)}matches(t){const n=t.data.field(this.field);return this.op==="!="?n!==null&&this.at(oe(n,this.value)):n!==null&&Kt(this.value)===Kt(n)&&this.at(oe(n,this.value))}at(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return b()}}ht(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class ud extends rt{constructor(t,n,s){super(t,n,s),this.key=w.fromName(s.referenceValue)}matches(t){const n=w.comparator(t.key,this.key);return this.at(n)}}class hd extends rt{constructor(t,n){super(t,"in",n),this.keys=Ha("in",n)}matches(t){return this.keys.some(n=>n.isEqual(t.key))}}class ld extends rt{constructor(t,n){super(t,"not-in",n),this.keys=Ha("not-in",n)}matches(t){return!this.keys.some(n=>n.isEqual(t.key))}}function Ha(e,t){var n;return(((n=t.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>w.fromName(s.referenceValue))}class dd extends rt{constructor(t,n){super(t,"array-contains",n)}matches(t){const n=t.data.field(this.field);return Gr(n)&&qe(n.arrayValue,this.value)}}class fd extends rt{constructor(t,n){super(t,"in",n)}matches(t){const n=t.data.field(this.field);return n!==null&&qe(this.value.arrayValue,n)}}class pd extends rt{constructor(t,n){super(t,"not-in",n)}matches(t){if(qe(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=t.data.field(this.field);return n!==null&&!qe(this.value.arrayValue,n)}}class gd extends rt{constructor(t,n){super(t,"array-contains-any",n)}matches(t){const n=t.data.field(this.field);return!(!Gr(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>qe(this.value.arrayValue,s))}}class Fn{constructor(t,n){this.position=t,this.inclusive=n}}class Ne{constructor(t,n="asc"){this.field=t,this.dir=n}}function md(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}function ro(e,t,n){let s=0;for(let r=0;r<e.position.length;r++){const i=t[r],o=e.position[r];if(i.field.isKeyField()?s=w.comparator(w.fromName(o.referenceValue),n.key):s=oe(o,n.data.field(i.field)),i.dir==="desc"&&(s*=-1),s!==0)break}return s}function io(e,t){if(e===null)return t===null;if(t===null||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!ft(e.position[n],t.position[n]))return!1;return!0}/**
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
 */class os{constructor(t,n=null,s=[],r=[],i=null,o="F",a=null,c=null){this.path=t,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=r,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.lt=null,this.ft=null,this.startAt,this.endAt}}function yd(e,t,n,s,r,i,o,a){return new os(e,t,n,s,r,i,o,a)}function as(e){return new os(e)}function oo(e){return e.filters.length===0&&e.limit===null&&e.startAt==null&&e.endAt==null&&(e.explicitOrderBy.length===0||e.explicitOrderBy.length===1&&e.explicitOrderBy[0].field.isKeyField())}function vd(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function wd(e){for(const t of e.filters)if(t.ht())return t.field;return null}function Ed(e){return e.collectionGroup!==null}function Ke(e){const t=I(e);if(t.lt===null){t.lt=[];const n=wd(t),s=vd(t);if(n!==null&&s===null)n.isKeyField()||t.lt.push(new Ne(n)),t.lt.push(new Ne(W.keyField(),"asc"));else{let r=!1;for(const i of t.explicitOrderBy)t.lt.push(i),i.field.isKeyField()&&(r=!0);if(!r){const i=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.lt.push(new Ne(W.keyField(),i))}}}return t.lt}function Et(e){const t=I(e);if(!t.ft)if(t.limitType==="F")t.ft=so(t.path,t.collectionGroup,Ke(t),t.filters,t.limit,t.startAt,t.endAt);else{const n=[];for(const i of Ke(t)){const o=i.dir==="desc"?"asc":"desc";n.push(new Ne(i.field,o))}const s=t.endAt?new Fn(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Fn(t.startAt.position,t.startAt.inclusive):null;t.ft=so(t.path,t.collectionGroup,n,t.filters,t.limit,s,r)}return t.ft}function sr(e,t,n){return new os(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function cs(e,t){return Wr(Et(e),Et(t))&&e.limitType===t.limitType}function Ga(e){return`${zr(Et(e))}|lt:${e.limitType}`}function rr(e){return`Query(target=${cd(Et(e))}; limitType=${e.limitType})`}function Qr(e,t){return t.isFoundDocument()&&function(n,s){const r=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(r):w.isDocumentKey(n.path)?n.path.isEqual(r):n.path.isImmediateParentOf(r)}(e,t)&&function(n,s){for(const r of n.explicitOrderBy)if(!r.field.isKeyField()&&s.data.field(r.field)===null)return!1;return!0}(e,t)&&function(n,s){for(const r of n.filters)if(!r.matches(s))return!1;return!0}(e,t)&&function(n,s){return!(n.startAt&&!function(r,i,o){const a=ro(r,i,o);return r.inclusive?a<=0:a<0}(n.startAt,Ke(n),s)||n.endAt&&!function(r,i,o){const a=ro(r,i,o);return r.inclusive?a>=0:a>0}(n.endAt,Ke(n),s))}(e,t)}function Td(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function za(e){return(t,n)=>{let s=!1;for(const r of Ke(e)){const i=bd(r,t,n);if(i!==0)return i;s=s||r.field.isKeyField()}return 0}}function bd(e,t,n){const s=e.field.isKeyField()?w.comparator(t.key,n.key):function(r,i,o){const a=i.data.field(r),c=o.data.field(r);return a!==null&&c!==null?oe(a,c):b()}(e.field,t,n);switch(e.dir){case"asc":return s;case"desc":return-1*s;default:return b()}}/**
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
 */function Wa(e,t){if(e.dt){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Pn(t)?"-0":t}}function Qa(e){return{integerValue:""+e}}function Id(e,t){return id(t)?Qa(t):Wa(e,t)}/**
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
 */class us{constructor(){this._=void 0}}function Cd(e,t,n){return e instanceof Vn?function(s,r){const i={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return r&&(i.fields.__previous_value__=r),{mapValue:i}}(n,t):e instanceof He?Ya(e,t):e instanceof Ge?Ja(e,t):function(s,r){const i=Xa(s,r),o=ao(i)+ao(s._t);return er(i)&&er(s._t)?Qa(o):Wa(s.wt,o)}(e,t)}function Sd(e,t,n){return e instanceof He?Ya(e,t):e instanceof Ge?Ja(e,t):n}function Xa(e,t){return e instanceof $n?er(n=t)||function(s){return!!s&&"doubleValue"in s}(n)?t:{integerValue:0}:null;var n}class Vn extends us{}class He extends us{constructor(t){super(),this.elements=t}}function Ya(e,t){const n=Za(t);for(const s of e.elements)n.some(r=>ft(r,s))||n.push(s);return{arrayValue:{values:n}}}class Ge extends us{constructor(t){super(),this.elements=t}}function Ja(e,t){let n=Za(t);for(const s of e.elements)n=n.filter(r=>!ft(r,s));return{arrayValue:{values:n}}}class $n extends us{constructor(t,n){super(),this.wt=t,this._t=n}}function ao(e){return M(e.integerValue||e.doubleValue)}function Za(e){return Gr(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}function Ad(e,t){return e.field.isEqual(t.field)&&function(n,s){return n instanceof He&&s instanceof He||n instanceof Ge&&s instanceof Ge?se(n.elements,s.elements,ft):n instanceof $n&&s instanceof $n?ft(n._t,s._t):n instanceof Vn&&s instanceof Vn}(e.transform,t.transform)}class Dd{constructor(t,n){this.version=t,this.transformResults=n}}class lt{constructor(t,n){this.updateTime=t,this.exists=n}static none(){return new lt}static exists(t){return new lt(void 0,t)}static updateTime(t){return new lt(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function bn(e,t){return e.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(e.updateTime):e.exists===void 0||e.exists===t.isFoundDocument()}class hs{}function tc(e,t){if(!e.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return e.isNoDocument()?new nc(e.key,lt.none()):new on(e.key,e.data,lt.none());{const n=e.data,s=st.empty();let r=new V(W.comparator);for(let i of t.fields)if(!r.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?s.delete(i):s.set(i,o),r=r.add(i)}return new xt(e.key,s,new ut(r.toArray()),lt.none())}}function _d(e,t,n){e instanceof on?function(s,r,i){const o=s.value.clone(),a=uo(s.fieldTransforms,r,i.transformResults);o.setAll(a),r.convertToFoundDocument(i.version,o).setHasCommittedMutations()}(e,t,n):e instanceof xt?function(s,r,i){if(!bn(s.precondition,r))return void r.convertToUnknownDocument(i.version);const o=uo(s.fieldTransforms,r,i.transformResults),a=r.data;a.setAll(ec(s)),a.setAll(o),r.convertToFoundDocument(i.version,a).setHasCommittedMutations()}(e,t,n):function(s,r,i){r.convertToNoDocument(i.version).setHasCommittedMutations()}(0,t,n)}function ke(e,t,n,s){return e instanceof on?function(r,i,o,a){if(!bn(r.precondition,i))return o;const c=r.value.clone(),u=ho(r.fieldTransforms,a,i);return c.setAll(u),i.convertToFoundDocument(i.version,c).setHasLocalMutations(),null}(e,t,n,s):e instanceof xt?function(r,i,o,a){if(!bn(r.precondition,i))return o;const c=ho(r.fieldTransforms,a,i),u=i.data;return u.setAll(ec(r)),u.setAll(c),i.convertToFoundDocument(i.version,u).setHasLocalMutations(),o===null?null:o.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map(h=>h.field))}(e,t,n,s):function(r,i,o){return bn(r.precondition,i)?(i.convertToNoDocument(i.version).setHasLocalMutations(),null):o}(e,t,n)}function Nd(e,t){let n=null;for(const s of e.fieldTransforms){const r=t.data.field(s.field),i=Xa(s.transform,r||null);i!=null&&(n===null&&(n=st.empty()),n.set(s.field,i))}return n||null}function co(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&se(n,s,(r,i)=>Ad(r,i))}(e.fieldTransforms,t.fieldTransforms)&&(e.type===0?e.value.isEqual(t.value):e.type!==1||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class on extends hs{constructor(t,n,s,r=[]){super(),this.key=t,this.value=n,this.precondition=s,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class xt extends hs{constructor(t,n,s,r,i=[]){super(),this.key=t,this.data=n,this.fieldMask=s,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function ec(e){const t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=e.data.field(n);t.set(n,s)}}),t}function uo(e,t,n){const s=new Map;R(e.length===n.length);for(let r=0;r<n.length;r++){const i=e[r],o=i.transform,a=t.data.field(i.field);s.set(i.field,Sd(o,a,n[r]))}return s}function ho(e,t,n){const s=new Map;for(const r of e){const i=r.transform,o=n.data.field(r.field);s.set(r.field,Cd(i,o,t))}return s}class nc extends hs{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class kd extends hs{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class Rd{constructor(t){this.count=t}}/**
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
 */var L,A;function xd(e){switch(e){default:return b();case p.CANCELLED:case p.UNKNOWN:case p.DEADLINE_EXCEEDED:case p.RESOURCE_EXHAUSTED:case p.INTERNAL:case p.UNAVAILABLE:case p.UNAUTHENTICATED:return!1;case p.INVALID_ARGUMENT:case p.NOT_FOUND:case p.ALREADY_EXISTS:case p.PERMISSION_DENIED:case p.FAILED_PRECONDITION:case p.ABORTED:case p.OUT_OF_RANGE:case p.UNIMPLEMENTED:case p.DATA_LOSS:return!0}}function sc(e){if(e===void 0)return wt("GRPC error has no .code"),p.UNKNOWN;switch(e){case L.OK:return p.OK;case L.CANCELLED:return p.CANCELLED;case L.UNKNOWN:return p.UNKNOWN;case L.DEADLINE_EXCEEDED:return p.DEADLINE_EXCEEDED;case L.RESOURCE_EXHAUSTED:return p.RESOURCE_EXHAUSTED;case L.INTERNAL:return p.INTERNAL;case L.UNAVAILABLE:return p.UNAVAILABLE;case L.UNAUTHENTICATED:return p.UNAUTHENTICATED;case L.INVALID_ARGUMENT:return p.INVALID_ARGUMENT;case L.NOT_FOUND:return p.NOT_FOUND;case L.ALREADY_EXISTS:return p.ALREADY_EXISTS;case L.PERMISSION_DENIED:return p.PERMISSION_DENIED;case L.FAILED_PRECONDITION:return p.FAILED_PRECONDITION;case L.ABORTED:return p.ABORTED;case L.OUT_OF_RANGE:return p.OUT_OF_RANGE;case L.UNIMPLEMENTED:return p.UNIMPLEMENTED;case L.DATA_LOSS:return p.DATA_LOSS;default:return b()}}(A=L||(L={}))[A.OK=0]="OK",A[A.CANCELLED=1]="CANCELLED",A[A.UNKNOWN=2]="UNKNOWN",A[A.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",A[A.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",A[A.NOT_FOUND=5]="NOT_FOUND",A[A.ALREADY_EXISTS=6]="ALREADY_EXISTS",A[A.PERMISSION_DENIED=7]="PERMISSION_DENIED",A[A.UNAUTHENTICATED=16]="UNAUTHENTICATED",A[A.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",A[A.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",A[A.ABORTED=10]="ABORTED",A[A.OUT_OF_RANGE=11]="OUT_OF_RANGE",A[A.UNIMPLEMENTED=12]="UNIMPLEMENTED",A[A.INTERNAL=13]="INTERNAL",A[A.UNAVAILABLE=14]="UNAVAILABLE",A[A.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class me{constructor(t,n){this.mapKeyFn=t,this.equalsFn=n,this.inner={},this.innerSize=0}get(t){const n=this.mapKeyFn(t),s=this.inner[n];if(s!==void 0){for(const[r,i]of s)if(this.equalsFn(r,t))return i}}has(t){return this.get(t)!==void 0}set(t,n){const s=this.mapKeyFn(t),r=this.inner[s];if(r===void 0)return this.inner[s]=[[t,n]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],t))return void(r[i]=[t,n]);r.push([t,n]),this.innerSize++}delete(t){const n=this.mapKeyFn(t),s=this.inner[n];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],t))return s.length===1?delete this.inner[n]:s.splice(r,1),this.innerSize--,!0;return!1}forEach(t){zt(this.inner,(n,s)=>{for(const[r,i]of s)t(r,i)})}isEmpty(){return Ua(this.inner)}size(){return this.innerSize}}/**
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
 */const Od=new $(w.comparator);function Tt(){return Od}const rc=new $(w.comparator);function Ie(...e){let t=rc;for(const n of e)t=t.insert(n.key,n);return t}function ic(e){let t=rc;return e.forEach((n,s)=>t=t.insert(n,s.overlayedDocument)),t}function Ft(){return Re()}function oc(){return Re()}function Re(){return new me(e=>e.toString(),(e,t)=>e.isEqual(t))}const Ld=new $(w.comparator),Md=new V(w.comparator);function S(...e){let t=Md;for(const n of e)t=t.add(n);return t}const Pd=new V(k);function ac(){return Pd}/**
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
 */class ls{constructor(t,n,s,r,i){this.snapshotVersion=t,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(t,n){const s=new Map;return s.set(t,an.createSynthesizedTargetChangeForCurrentChange(t,n)),new ls(C.min(),s,ac(),Tt(),S())}}class an{constructor(t,n,s,r,i){this.resumeToken=t,this.current=n,this.addedDocuments=s,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(t,n){return new an(G.EMPTY_BYTE_STRING,n,S(),S(),S())}}/**
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
 */class In{constructor(t,n,s,r){this.gt=t,this.removedTargetIds=n,this.key=s,this.yt=r}}class cc{constructor(t,n){this.targetId=t,this.It=n}}class uc{constructor(t,n,s=G.EMPTY_BYTE_STRING,r=null){this.state=t,this.targetIds=n,this.resumeToken=s,this.cause=r}}class lo{constructor(){this.Tt=0,this.Et=po(),this.At=G.EMPTY_BYTE_STRING,this.Rt=!1,this.bt=!0}get current(){return this.Rt}get resumeToken(){return this.At}get Pt(){return this.Tt!==0}get vt(){return this.bt}Vt(t){t.approximateByteSize()>0&&(this.bt=!0,this.At=t)}St(){let t=S(),n=S(),s=S();return this.Et.forEach((r,i)=>{switch(i){case 0:t=t.add(r);break;case 2:n=n.add(r);break;case 1:s=s.add(r);break;default:b()}}),new an(this.At,this.Rt,t,n,s)}Dt(){this.bt=!1,this.Et=po()}Ct(t,n){this.bt=!0,this.Et=this.Et.insert(t,n)}xt(t){this.bt=!0,this.Et=this.Et.remove(t)}Nt(){this.Tt+=1}kt(){this.Tt-=1}Mt(){this.bt=!0,this.Rt=!0}}class Fd{constructor(t){this.Ot=t,this.Ft=new Map,this.$t=Tt(),this.Bt=fo(),this.Lt=new V(k)}Ut(t){for(const n of t.gt)t.yt&&t.yt.isFoundDocument()?this.qt(n,t.yt):this.Kt(n,t.key,t.yt);for(const n of t.removedTargetIds)this.Kt(n,t.key,t.yt)}Gt(t){this.forEachTarget(t,n=>{const s=this.Qt(n);switch(t.state){case 0:this.jt(n)&&s.Vt(t.resumeToken);break;case 1:s.kt(),s.Pt||s.Dt(),s.Vt(t.resumeToken);break;case 2:s.kt(),s.Pt||this.removeTarget(n);break;case 3:this.jt(n)&&(s.Mt(),s.Vt(t.resumeToken));break;case 4:this.jt(n)&&(this.Wt(n),s.Vt(t.resumeToken));break;default:b()}})}forEachTarget(t,n){t.targetIds.length>0?t.targetIds.forEach(n):this.Ft.forEach((s,r)=>{this.jt(r)&&n(r)})}zt(t){const n=t.targetId,s=t.It.count,r=this.Ht(n);if(r){const i=r.target;if(nr(i))if(s===0){const o=new w(i.path);this.Kt(n,o,q.newNoDocument(o,C.min()))}else R(s===1);else this.Jt(n)!==s&&(this.Wt(n),this.Lt=this.Lt.add(n))}}Yt(t){const n=new Map;this.Ft.forEach((i,o)=>{const a=this.Ht(o);if(a){if(i.current&&nr(a.target)){const c=new w(a.target.path);this.$t.get(c)!==null||this.Xt(o,c)||this.Kt(o,c,q.newNoDocument(c,t))}i.vt&&(n.set(o,i.St()),i.Dt())}});let s=S();this.Bt.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const u=this.Ht(c);return!u||u.purpose===2||(a=!1,!1)}),a&&(s=s.add(i))}),this.$t.forEach((i,o)=>o.setReadTime(t));const r=new ls(t,n,this.Lt,this.$t,s);return this.$t=Tt(),this.Bt=fo(),this.Lt=new V(k),r}qt(t,n){if(!this.jt(t))return;const s=this.Xt(t,n.key)?2:0;this.Qt(t).Ct(n.key,s),this.$t=this.$t.insert(n.key,n),this.Bt=this.Bt.insert(n.key,this.Zt(n.key).add(t))}Kt(t,n,s){if(!this.jt(t))return;const r=this.Qt(t);this.Xt(t,n)?r.Ct(n,1):r.xt(n),this.Bt=this.Bt.insert(n,this.Zt(n).delete(t)),s&&(this.$t=this.$t.insert(n,s))}removeTarget(t){this.Ft.delete(t)}Jt(t){const n=this.Qt(t).St();return this.Ot.getRemoteKeysForTarget(t).size+n.addedDocuments.size-n.removedDocuments.size}Nt(t){this.Qt(t).Nt()}Qt(t){let n=this.Ft.get(t);return n||(n=new lo,this.Ft.set(t,n)),n}Zt(t){let n=this.Bt.get(t);return n||(n=new V(k),this.Bt=this.Bt.insert(t,n)),n}jt(t){const n=this.Ht(t)!==null;return n||v("WatchChangeAggregator","Detected inactive target",t),n}Ht(t){const n=this.Ft.get(t);return n&&n.Pt?null:this.Ot.te(t)}Wt(t){this.Ft.set(t,new lo),this.Ot.getRemoteKeysForTarget(t).forEach(n=>{this.Kt(t,n,null)})}Xt(t,n){return this.Ot.getRemoteKeysForTarget(t).has(n)}}function fo(){return new $(w.comparator)}function po(){return new $(w.comparator)}/**
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
 */const Vd=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),$d=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class Bd{constructor(t,n){this.databaseId=t,this.dt=n}}function Bn(e,t){return e.dt?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function hc(e,t){return e.dt?t.toBase64():t.toUint8Array()}function Ud(e,t){return Bn(e,t.toTimestamp())}function mt(e){return R(!!e),C.fromTimestamp(function(t){const n=_t(t);return new F(n.seconds,n.nanos)}(e))}function Xr(e,t){return function(n){return new O(["projects",n.projectId,"databases",n.database])}(e).child("documents").child(t).canonicalString()}function lc(e){const t=O.fromString(e);return R(pc(t)),t}function ir(e,t){return Xr(e.databaseId,t.path)}function Os(e,t){const n=lc(t);if(n.get(1)!==e.databaseId.projectId)throw new E(p.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new E(p.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new w(dc(n))}function or(e,t){return Xr(e.databaseId,t)}function jd(e){const t=lc(e);return t.length===4?O.emptyPath():dc(t)}function ar(e){return new O(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function dc(e){return R(e.length>4&&e.get(4)==="documents"),e.popFirst(5)}function go(e,t,n){return{name:ir(e,t),fields:n.value.mapValue.fields}}function qd(e,t){let n;if("targetChange"in t){t.targetChange;const s=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:b()}(t.targetChange.targetChangeType||"NO_CHANGE"),r=t.targetChange.targetIds||[],i=function(c,u){return c.dt?(R(u===void 0||typeof u=="string"),G.fromBase64String(u||"")):(R(u===void 0||u instanceof Uint8Array),G.fromUint8Array(u||new Uint8Array))}(e,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(c){const u=c.code===void 0?p.UNKNOWN:sc(c.code);return new E(u,c.message||"")}(o);n=new uc(s,r,i,a||null)}else if("documentChange"in t){t.documentChange;const s=t.documentChange;s.document,s.document.name,s.document.updateTime;const r=Os(e,s.document.name),i=mt(s.document.updateTime),o=new st({mapValue:{fields:s.document.fields}}),a=q.newFoundDocument(r,i,o),c=s.targetIds||[],u=s.removedTargetIds||[];n=new In(c,u,a.key,a)}else if("documentDelete"in t){t.documentDelete;const s=t.documentDelete;s.document;const r=Os(e,s.document),i=s.readTime?mt(s.readTime):C.min(),o=q.newNoDocument(r,i),a=s.removedTargetIds||[];n=new In([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const s=t.documentRemove;s.document;const r=Os(e,s.document),i=s.removedTargetIds||[];n=new In([],i,r,null)}else{if(!("filter"in t))return b();{t.filter;const s=t.filter;s.targetId;const r=s.count||0,i=new Rd(r),o=s.targetId;n=new cc(o,i)}}return n}function Kd(e,t){let n;if(t instanceof on)n={update:go(e,t.key,t.value)};else if(t instanceof nc)n={delete:ir(e,t.key)};else if(t instanceof xt)n={update:go(e,t.key,t.data),updateMask:tf(t.fieldMask)};else{if(!(t instanceof kd))return b();n={verify:ir(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map(s=>function(r,i){const o=i.transform;if(o instanceof Vn)return{fieldPath:i.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof He)return{fieldPath:i.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Ge)return{fieldPath:i.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof $n)return{fieldPath:i.field.canonicalString(),increment:o._t};throw b()}(0,s))),t.precondition.isNone||(n.currentDocument=function(s,r){return r.updateTime!==void 0?{updateTime:Ud(s,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:b()}(e,t.precondition)),n}function Hd(e,t){return e&&e.length>0?(R(t!==void 0),e.map(n=>function(s,r){let i=s.updateTime?mt(s.updateTime):mt(r);return i.isEqual(C.min())&&(i=mt(r)),new Dd(i,s.transformResults||[])}(n,t))):[]}function Gd(e,t){return{documents:[or(e,t.path)]}}function zd(e,t){const n={structuredQuery:{}},s=t.path;t.collectionGroup!==null?(n.parent=or(e,s),n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(n.parent=or(e,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const r=function(c){if(c.length===0)return;const u=c.map(h=>function(l){if(l.op==="=="){if(no(l.value))return{unaryFilter:{field:Qt(l.field),op:"IS_NAN"}};if(eo(l.value))return{unaryFilter:{field:Qt(l.field),op:"IS_NULL"}}}else if(l.op==="!="){if(no(l.value))return{unaryFilter:{field:Qt(l.field),op:"IS_NOT_NAN"}};if(eo(l.value))return{unaryFilter:{field:Qt(l.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Qt(l.field),op:Yd(l.op),value:l.value}}}(h));return u.length===1?u[0]:{compositeFilter:{op:"AND",filters:u}}}(t.filters);r&&(n.structuredQuery.where=r);const i=function(c){if(c.length!==0)return c.map(u=>function(h){return{field:Qt(h.field),direction:Xd(h.dir)}}(u))}(t.orderBy);i&&(n.structuredQuery.orderBy=i);const o=function(c,u){return c.dt||is(u)?u:{value:u}}(e,t.limit);var a;return o!==null&&(n.structuredQuery.limit=o),t.startAt&&(n.structuredQuery.startAt={before:(a=t.startAt).inclusive,values:a.position}),t.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(t.endAt)),n}function Wd(e){let t=jd(e.parent);const n=e.structuredQuery,s=n.from?n.from.length:0;let r=null;if(s>0){R(s===1);const h=n.from[0];h.allDescendants?r=h.collectionId:t=t.child(h.collectionId)}let i=[];n.where&&(i=fc(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(h=>function(l){return new Ne(Yt(l.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(l.direction))}(h)));let a=null;n.limit&&(a=function(h){let l;return l=typeof h=="object"?h.value:h,is(l)?null:l}(n.limit));let c=null;n.startAt&&(c=function(h){const l=!!h.before,d=h.values||[];return new Fn(d,l)}(n.startAt));let u=null;return n.endAt&&(u=function(h){const l=!h.before,d=h.values||[];return new Fn(d,l)}(n.endAt)),yd(t,r,o,i,a,"F",c,u)}function Qd(e,t){const n=function(s,r){switch(r){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return b()}}(0,t.purpose);return n==null?null:{"goog-listen-tags":n}}function fc(e){return e?e.unaryFilter!==void 0?[Zd(e)]:e.fieldFilter!==void 0?[Jd(e)]:e.compositeFilter!==void 0?e.compositeFilter.filters.map(t=>fc(t)).reduce((t,n)=>t.concat(n)):b():[]}function Xd(e){return Vd[e]}function Yd(e){return $d[e]}function Qt(e){return{fieldPath:e.canonicalString()}}function Yt(e){return W.fromServerFormat(e.fieldPath)}function Jd(e){return rt.create(Yt(e.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return b()}}(e.fieldFilter.op),e.fieldFilter.value)}function Zd(e){switch(e.unaryFilter.op){case"IS_NAN":const t=Yt(e.unaryFilter.field);return rt.create(t,"==",{doubleValue:NaN});case"IS_NULL":const n=Yt(e.unaryFilter.field);return rt.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Yt(e.unaryFilter.field);return rt.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const r=Yt(e.unaryFilter.field);return rt.create(r,"!=",{nullValue:"NULL_VALUE"});default:return b()}}function tf(e){const t=[];return e.fields.forEach(n=>t.push(n.canonicalString())),{fieldPaths:t}}function pc(e){return e.length>=4&&e.get(0)==="projects"&&e.get(2)==="databases"}/**
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
 */class ef{constructor(t,n,s,r){this.batchId=t,this.localWriteTime=n,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(t,n){const s=n.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(t.key)&&_d(i,t,s[r])}}applyToLocalView(t,n){for(const s of this.baseMutations)s.key.isEqual(t.key)&&(n=ke(s,t,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(t.key)&&(n=ke(s,t,n,this.localWriteTime));return n}applyToLocalDocumentSet(t,n){const s=oc();return this.mutations.forEach(r=>{const i=t.get(r.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(r.key)?null:a;const c=tc(o,a);c!==null&&s.set(r.key,c),o.isValidDocument()||o.convertToNoDocument(C.min())}),s}keys(){return this.mutations.reduce((t,n)=>t.add(n.key),S())}isEqual(t){return this.batchId===t.batchId&&se(this.mutations,t.mutations,(n,s)=>co(n,s))&&se(this.baseMutations,t.baseMutations,(n,s)=>co(n,s))}}class Yr{constructor(t,n,s,r){this.batch=t,this.commitVersion=n,this.mutationResults=s,this.docVersions=r}static from(t,n,s){R(t.mutations.length===s.length);let r=Ld;const i=t.mutations;for(let o=0;o<i.length;o++)r=r.insert(i[o].key,s[o].version);return new Yr(t,n,s,r)}}/**
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
 */class nf{constructor(t,n){this.largestBatchId=t,this.mutation=n}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
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
 */class Vt{constructor(t,n,s,r,i=C.min(),o=C.min(),a=G.EMPTY_BYTE_STRING){this.target=t,this.targetId=n,this.purpose=s,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(t){return new Vt(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(t,n){return new Vt(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,t)}withLastLimboFreeSnapshotVersion(t){return new Vt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken)}}/**
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
 */class sf{constructor(t){this.ne=t}}function rf(e){const t=Wd({parent:e.parent,structuredQuery:e.structuredQuery});return e.limitType==="LAST"?sr(t,t.limit,"L"):t}/**
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
 */class of{constructor(){this.ze=new af}addToCollectionParentIndex(t,n){return this.ze.add(n),g.resolve()}getCollectionParents(t,n){return g.resolve(this.ze.getEntries(n))}addFieldIndex(t,n){return g.resolve()}deleteFieldIndex(t,n){return g.resolve()}getDocumentsMatchingTarget(t,n){return g.resolve(null)}getIndexType(t,n){return g.resolve(0)}getFieldIndexes(t,n){return g.resolve([])}getNextCollectionGroupToUpdate(t){return g.resolve(null)}getMinOffset(t,n){return g.resolve(Dt.min())}getMinOffsetFromCollectionGroup(t,n){return g.resolve(Dt.min())}updateCollectionGroup(t,n,s){return g.resolve()}updateIndexEntries(t,n){return g.resolve()}}class af{constructor(){this.index={}}add(t){const n=t.lastSegment(),s=t.popLast(),r=this.index[n]||new V(O.comparator),i=!r.has(s);return this.index[n]=r.add(s),i}has(t){const n=t.lastSegment(),s=t.popLast(),r=this.index[n];return r&&r.has(s)}getEntries(t){return(this.index[t]||new V(O.comparator)).toArray()}}/**
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
 */class ae{constructor(t){this.En=t}next(){return this.En+=2,this.En}static An(){return new ae(0)}static Rn(){return new ae(-1)}}/**
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
 */class cf{constructor(){this.changes=new me(t=>t.toString(),(t,n)=>t.isEqual(n)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,n){this.assertNotApplied(),this.changes.set(t,q.newInvalidDocument(t).setReadTime(n))}getEntry(t,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?g.resolve(s):this.getFromCache(t,n)}getEntries(t,n){return this.getAllFromCache(t,n)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
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
 */class uf{constructor(t,n){this.overlayedDocument=t,this.mutatedFields=n}}/**
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
 */class hf{constructor(t,n,s,r){this.remoteDocumentCache=t,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=r}getDocument(t,n){let s=null;return this.documentOverlayCache.getOverlay(t,n).next(r=>(s=r,this.getBaseDocument(t,n,s))).next(r=>(s!==null&&ke(s.mutation,r,ut.empty(),F.now()),r))}getDocuments(t,n){return this.remoteDocumentCache.getEntries(t,n).next(s=>this.getLocalViewOfDocuments(t,s,S()).next(()=>s))}getLocalViewOfDocuments(t,n,s=S()){const r=Ft();return this.populateOverlays(t,r,n).next(()=>this.computeViews(t,n,r,s).next(i=>{let o=Ie();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(t,n){const s=Ft();return this.populateOverlays(t,s,n).next(()=>this.computeViews(t,n,s,S()))}populateOverlays(t,n,s){const r=[];return s.forEach(i=>{n.has(i)||r.push(i)}),this.documentOverlayCache.getOverlays(t,r).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(t,n,s,r){let i=Tt();const o=Re(),a=Re();return n.forEach((c,u)=>{const h=s.get(u.key);r.has(u.key)&&(h===void 0||h.mutation instanceof xt)?i=i.insert(u.key,u):h!==void 0&&(o.set(u.key,h.mutation.getFieldMask()),ke(h.mutation,u,h.mutation.getFieldMask(),F.now()))}),this.recalculateAndSaveOverlays(t,i).next(c=>(c.forEach((u,h)=>o.set(u,h)),n.forEach((u,h)=>{var l;return a.set(u,new uf(h,(l=o.get(u))!==null&&l!==void 0?l:null))}),a))}recalculateAndSaveOverlays(t,n){const s=Re();let r=new $((o,a)=>o-a),i=S();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const u=n.get(c);if(u===null)return;let h=s.get(c)||ut.empty();h=a.applyToLocalView(u,h),s.set(c,h);const l=(r.get(a.batchId)||S()).add(c);r=r.insert(a.batchId,l)})}).next(()=>{const o=[],a=r.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),u=c.key,h=c.value,l=oc();h.forEach(d=>{if(!i.has(d)){const f=tc(n.get(d),s.get(d));f!==null&&l.set(d,f),i=i.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(t,u,l))}return g.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(t,n){return this.remoteDocumentCache.getEntries(t,n).next(s=>this.recalculateAndSaveOverlays(t,s))}getDocumentsMatchingQuery(t,n,s){return function(r){return w.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(t,n.path):Ed(n)?this.getDocumentsMatchingCollectionGroupQuery(t,n,s):this.getDocumentsMatchingCollectionQuery(t,n,s)}getNextDocuments(t,n,s,r){return this.remoteDocumentCache.getAllFromCollectionGroup(t,n,s,r).next(i=>{const o=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,n,s.largestBatchId,r-i.size):g.resolve(Ft());let a=-1,c=i;return o.next(u=>g.forEach(u,(h,l)=>(a<l.largestBatchId&&(a=l.largestBatchId),i.get(h)?g.resolve():this.getBaseDocument(t,h,l).next(d=>{c=c.insert(h,d)}))).next(()=>this.populateOverlays(t,u,i)).next(()=>this.computeViews(t,c,u,S())).next(h=>({batchId:a,changes:ic(h)})))})}getDocumentsMatchingDocumentQuery(t,n){return this.getDocument(t,new w(n)).next(s=>{let r=Ie();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r})}getDocumentsMatchingCollectionGroupQuery(t,n,s){const r=n.collectionGroup;let i=Ie();return this.indexManager.getCollectionParents(t,r).next(o=>g.forEach(o,a=>{const c=function(u,h){return new os(h,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(r));return this.getDocumentsMatchingCollectionQuery(t,c,s).next(u=>{u.forEach((h,l)=>{i=i.insert(h,l)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(t,n,s){let r;return this.remoteDocumentCache.getAllFromCollection(t,n.path,s).next(i=>(r=i,this.documentOverlayCache.getOverlaysForCollection(t,n.path,s.largestBatchId))).next(i=>{i.forEach((a,c)=>{const u=c.getKey();r.get(u)===null&&(r=r.insert(u,q.newInvalidDocument(u)))});let o=Ie();return r.forEach((a,c)=>{const u=i.get(a);u!==void 0&&ke(u.mutation,c,ut.empty(),F.now()),Qr(n,c)&&(o=o.insert(a,c))}),o})}getBaseDocument(t,n,s){return s===null||s.mutation.type===1?this.remoteDocumentCache.getEntry(t,n):g.resolve(q.newInvalidDocument(n))}}/**
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
 */class lf{constructor(t){this.wt=t,this.Jn=new Map,this.Yn=new Map}getBundleMetadata(t,n){return g.resolve(this.Jn.get(n))}saveBundleMetadata(t,n){var s;return this.Jn.set(n.id,{id:(s=n).id,version:s.version,createTime:mt(s.createTime)}),g.resolve()}getNamedQuery(t,n){return g.resolve(this.Yn.get(n))}saveNamedQuery(t,n){return this.Yn.set(n.name,function(s){return{name:s.name,query:rf(s.bundledQuery),readTime:mt(s.readTime)}}(n)),g.resolve()}}/**
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
 */class df{constructor(){this.overlays=new $(w.comparator),this.Xn=new Map}getOverlay(t,n){return g.resolve(this.overlays.get(n))}getOverlays(t,n){const s=Ft();return g.forEach(n,r=>this.getOverlay(t,r).next(i=>{i!==null&&s.set(r,i)})).next(()=>s)}saveOverlays(t,n,s){return s.forEach((r,i)=>{this.ie(t,n,i)}),g.resolve()}removeOverlaysForBatchId(t,n,s){const r=this.Xn.get(s);return r!==void 0&&(r.forEach(i=>this.overlays=this.overlays.remove(i)),this.Xn.delete(s)),g.resolve()}getOverlaysForCollection(t,n,s){const r=Ft(),i=n.length+1,o=new w(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,u=c.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===i&&c.largestBatchId>s&&r.set(c.getKey(),c)}return g.resolve(r)}getOverlaysForCollectionGroup(t,n,s,r){let i=new $((u,h)=>u-h);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>s){let h=i.get(u.largestBatchId);h===null&&(h=Ft(),i=i.insert(u.largestBatchId,h)),h.set(u.getKey(),u)}}const a=Ft(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,h)=>a.set(u,h)),!(a.size()>=r)););return g.resolve(a)}ie(t,n,s){const r=this.overlays.get(s.key);if(r!==null){const o=this.Xn.get(r.largestBatchId).delete(s.key);this.Xn.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new nf(n,s));let i=this.Xn.get(n);i===void 0&&(i=S(),this.Xn.set(n,i)),this.Xn.set(n,i.add(s.key))}}/**
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
 */class Jr{constructor(){this.Zn=new V(B.ts),this.es=new V(B.ns)}isEmpty(){return this.Zn.isEmpty()}addReference(t,n){const s=new B(t,n);this.Zn=this.Zn.add(s),this.es=this.es.add(s)}ss(t,n){t.forEach(s=>this.addReference(s,n))}removeReference(t,n){this.rs(new B(t,n))}os(t,n){t.forEach(s=>this.removeReference(s,n))}us(t){const n=new w(new O([])),s=new B(n,t),r=new B(n,t+1),i=[];return this.es.forEachInRange([s,r],o=>{this.rs(o),i.push(o.key)}),i}cs(){this.Zn.forEach(t=>this.rs(t))}rs(t){this.Zn=this.Zn.delete(t),this.es=this.es.delete(t)}hs(t){const n=new w(new O([])),s=new B(n,t),r=new B(n,t+1);let i=S();return this.es.forEachInRange([s,r],o=>{i=i.add(o.key)}),i}containsKey(t){const n=new B(t,0),s=this.Zn.firstAfterOrEqual(n);return s!==null&&t.isEqual(s.key)}}class B{constructor(t,n){this.key=t,this.ls=n}static ts(t,n){return w.comparator(t.key,n.key)||k(t.ls,n.ls)}static ns(t,n){return k(t.ls,n.ls)||w.comparator(t.key,n.key)}}/**
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
 */class ff{constructor(t,n){this.indexManager=t,this.referenceDelegate=n,this.mutationQueue=[],this.fs=1,this.ds=new V(B.ts)}checkEmpty(t){return g.resolve(this.mutationQueue.length===0)}addMutationBatch(t,n,s,r){const i=this.fs;this.fs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new ef(i,n,s,r);this.mutationQueue.push(o);for(const a of r)this.ds=this.ds.add(new B(a.key,i)),this.indexManager.addToCollectionParentIndex(t,a.key.path.popLast());return g.resolve(o)}lookupMutationBatch(t,n){return g.resolve(this._s(n))}getNextMutationBatchAfterBatchId(t,n){const s=n+1,r=this.ws(s),i=r<0?0:r;return g.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return g.resolve(this.mutationQueue.length===0?-1:this.fs-1)}getAllMutationBatches(t){return g.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,n){const s=new B(n,0),r=new B(n,Number.POSITIVE_INFINITY),i=[];return this.ds.forEachInRange([s,r],o=>{const a=this._s(o.ls);i.push(a)}),g.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(t,n){let s=new V(k);return n.forEach(r=>{const i=new B(r,0),o=new B(r,Number.POSITIVE_INFINITY);this.ds.forEachInRange([i,o],a=>{s=s.add(a.ls)})}),g.resolve(this.gs(s))}getAllMutationBatchesAffectingQuery(t,n){const s=n.path,r=s.length+1;let i=s;w.isDocumentKey(i)||(i=i.child(""));const o=new B(new w(i),0);let a=new V(k);return this.ds.forEachWhile(c=>{const u=c.key.path;return!!s.isPrefixOf(u)&&(u.length===r&&(a=a.add(c.ls)),!0)},o),g.resolve(this.gs(a))}gs(t){const n=[];return t.forEach(s=>{const r=this._s(s);r!==null&&n.push(r)}),n}removeMutationBatch(t,n){R(this.ys(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.ds;return g.forEach(n.mutations,r=>{const i=new B(r.key,n.batchId);return s=s.delete(i),this.referenceDelegate.markPotentiallyOrphaned(t,r.key)}).next(()=>{this.ds=s})}In(t){}containsKey(t,n){const s=new B(n,0),r=this.ds.firstAfterOrEqual(s);return g.resolve(n.isEqual(r&&r.key))}performConsistencyCheck(t){return this.mutationQueue.length,g.resolve()}ys(t,n){return this.ws(t)}ws(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}_s(t){const n=this.ws(t);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class pf{constructor(t){this.ps=t,this.docs=new $(w.comparator),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,n){const s=n.key,r=this.docs.get(s),i=r?r.size:0,o=this.ps(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(t,s.path.popLast())}removeEntry(t){const n=this.docs.get(t);n&&(this.docs=this.docs.remove(t),this.size-=n.size)}getEntry(t,n){const s=this.docs.get(n);return g.resolve(s?s.document.mutableCopy():q.newInvalidDocument(n))}getEntries(t,n){let s=Tt();return n.forEach(r=>{const i=this.docs.get(r);s=s.insert(r,i?i.document.mutableCopy():q.newInvalidDocument(r))}),g.resolve(s)}getAllFromCollection(t,n,s){let r=Tt();const i=new w(n.child("")),o=this.docs.getIteratorFrom(i);for(;o.hasNext();){const{key:a,value:{document:c}}=o.getNext();if(!n.isPrefixOf(a.path))break;a.path.length>n.length+1||td(Zl(c),s)<=0||(r=r.insert(c.key,c.mutableCopy()))}return g.resolve(r)}getAllFromCollectionGroup(t,n,s,r){b()}Is(t,n){return g.forEach(this.docs,s=>n(s))}newChangeBuffer(t){return new gf(this)}getSize(t){return g.resolve(this.size)}}class gf extends cf{constructor(t){super(),this.zn=t}applyChanges(t){const n=[];return this.changes.forEach((s,r)=>{r.isValidDocument()?n.push(this.zn.addEntry(t,r)):this.zn.removeEntry(s)}),g.waitFor(n)}getFromCache(t,n){return this.zn.getEntry(t,n)}getAllFromCache(t,n){return this.zn.getEntries(t,n)}}/**
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
 */class mf{constructor(t){this.persistence=t,this.Ts=new me(n=>zr(n),Wr),this.lastRemoteSnapshotVersion=C.min(),this.highestTargetId=0,this.Es=0,this.As=new Jr,this.targetCount=0,this.Rs=ae.An()}forEachTarget(t,n){return this.Ts.forEach((s,r)=>n(r)),g.resolve()}getLastRemoteSnapshotVersion(t){return g.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return g.resolve(this.Es)}allocateTargetId(t){return this.highestTargetId=this.Rs.next(),g.resolve(this.highestTargetId)}setTargetsMetadata(t,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.Es&&(this.Es=n),g.resolve()}vn(t){this.Ts.set(t.target,t);const n=t.targetId;n>this.highestTargetId&&(this.Rs=new ae(n),this.highestTargetId=n),t.sequenceNumber>this.Es&&(this.Es=t.sequenceNumber)}addTargetData(t,n){return this.vn(n),this.targetCount+=1,g.resolve()}updateTargetData(t,n){return this.vn(n),g.resolve()}removeTargetData(t,n){return this.Ts.delete(n.target),this.As.us(n.targetId),this.targetCount-=1,g.resolve()}removeTargets(t,n,s){let r=0;const i=[];return this.Ts.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.Ts.delete(o),i.push(this.removeMatchingKeysForTargetId(t,a.targetId)),r++)}),g.waitFor(i).next(()=>r)}getTargetCount(t){return g.resolve(this.targetCount)}getTargetData(t,n){const s=this.Ts.get(n)||null;return g.resolve(s)}addMatchingKeys(t,n,s){return this.As.ss(n,s),g.resolve()}removeMatchingKeys(t,n,s){this.As.os(n,s);const r=this.persistence.referenceDelegate,i=[];return r&&n.forEach(o=>{i.push(r.markPotentiallyOrphaned(t,o))}),g.waitFor(i)}removeMatchingKeysForTargetId(t,n){return this.As.us(n),g.resolve()}getMatchingKeysForTargetId(t,n){const s=this.As.hs(n);return g.resolve(s)}containsKey(t,n){return g.resolve(this.As.containsKey(n))}}/**
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
 */class yf{constructor(t,n){this.bs={},this.overlays={},this.Ps=new Hr(0),this.vs=!1,this.vs=!0,this.referenceDelegate=t(this),this.Vs=new mf(this),this.indexManager=new of,this.remoteDocumentCache=function(s){return new pf(s)}(s=>this.referenceDelegate.Ss(s)),this.wt=new sf(n),this.Ds=new lf(this.wt)}start(){return Promise.resolve()}shutdown(){return this.vs=!1,Promise.resolve()}get started(){return this.vs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let n=this.overlays[t.toKey()];return n||(n=new df,this.overlays[t.toKey()]=n),n}getMutationQueue(t,n){let s=this.bs[t.toKey()];return s||(s=new ff(n,this.referenceDelegate),this.bs[t.toKey()]=s),s}getTargetCache(){return this.Vs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ds}runTransaction(t,n,s){v("MemoryPersistence","Starting transaction:",t);const r=new vf(this.Ps.next());return this.referenceDelegate.Cs(),s(r).next(i=>this.referenceDelegate.xs(r).next(()=>i)).toPromise().then(i=>(r.raiseOnCommittedEvent(),i))}Ns(t,n){return g.or(Object.values(this.bs).map(s=>()=>s.containsKey(t,n)))}}class vf extends nd{constructor(t){super(),this.currentSequenceNumber=t}}class Zr{constructor(t){this.persistence=t,this.ks=new Jr,this.Ms=null}static Os(t){return new Zr(t)}get Fs(){if(this.Ms)return this.Ms;throw b()}addReference(t,n,s){return this.ks.addReference(s,n),this.Fs.delete(s.toString()),g.resolve()}removeReference(t,n,s){return this.ks.removeReference(s,n),this.Fs.add(s.toString()),g.resolve()}markPotentiallyOrphaned(t,n){return this.Fs.add(n.toString()),g.resolve()}removeTarget(t,n){this.ks.us(n.targetId).forEach(r=>this.Fs.add(r.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(t,n.targetId).next(r=>{r.forEach(i=>this.Fs.add(i.toString()))}).next(()=>s.removeTargetData(t,n))}Cs(){this.Ms=new Set}xs(t){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return g.forEach(this.Fs,s=>{const r=w.fromPath(s);return this.$s(t,r).next(i=>{i||n.removeEntry(r,C.min())})}).next(()=>(this.Ms=null,n.apply(t)))}updateLimboDocument(t,n){return this.$s(t,n).next(s=>{s?this.Fs.delete(n.toString()):this.Fs.add(n.toString())})}Ss(t){return 0}$s(t,n){return g.or([()=>g.resolve(this.ks.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(t,n),()=>this.persistence.Ns(t,n)])}}/**
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
 */class ti{constructor(t,n,s,r){this.targetId=t,this.fromCache=n,this.Pi=s,this.vi=r}static Vi(t,n){let s=S(),r=S();for(const i of n.docChanges)switch(i.type){case 0:s=s.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new ti(t,n.fromCache,s,r)}}/**
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
 */class wf{constructor(){this.Si=!1}initialize(t,n){this.Di=t,this.indexManager=n,this.Si=!0}getDocumentsMatchingQuery(t,n,s,r){return this.Ci(t,n).next(i=>i||this.xi(t,n,r,s)).next(i=>i||this.Ni(t,n))}Ci(t,n){if(oo(n))return g.resolve(null);let s=Et(n);return this.indexManager.getIndexType(t,s).next(r=>r===0?null:(n.limit!==null&&r===1&&(n=sr(n,null,"F"),s=Et(n)),this.indexManager.getDocumentsMatchingTarget(t,s).next(i=>{const o=S(...i);return this.Di.getDocuments(t,o).next(a=>this.indexManager.getMinOffset(t,s).next(c=>{const u=this.ki(n,a);return this.Mi(n,u,o,c.readTime)?this.Ci(t,sr(n,null,"F")):this.Oi(t,u,n,c)}))})))}xi(t,n,s,r){return oo(n)||r.isEqual(C.min())?this.Ni(t,n):this.Di.getDocuments(t,s).next(i=>{const o=this.ki(n,i);return this.Mi(n,o,s,r)?this.Ni(t,n):(Xi()<=N.DEBUG&&v("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),rr(n)),this.Oi(t,o,n,Jl(r,-1)))})}ki(t,n){let s=new V(za(t));return n.forEach((r,i)=>{Qr(t,i)&&(s=s.add(i))}),s}Mi(t,n,s,r){if(t.limit===null)return!1;if(s.size!==n.size)return!0;const i=t.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Ni(t,n){return Xi()<=N.DEBUG&&v("QueryEngine","Using full collection scan to execute query:",rr(n)),this.Di.getDocumentsMatchingQuery(t,n,Dt.min())}Oi(t,n,s,r){return this.Di.getDocumentsMatchingQuery(t,s,r).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */class Ef{constructor(t,n,s,r){this.persistence=t,this.Fi=n,this.wt=r,this.$i=new $(k),this.Bi=new me(i=>zr(i),Wr),this.Li=new Map,this.Ui=t.getRemoteDocumentCache(),this.Vs=t.getTargetCache(),this.Ds=t.getBundleCache(),this.qi(s)}qi(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new hf(this.Ui,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ui.setIndexManager(this.indexManager),this.Fi.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>t.collect(n,this.$i))}}function Tf(e,t,n,s){return new Ef(e,t,n,s)}async function gc(e,t){const n=I(e);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let r;return n.mutationQueue.getAllMutationBatches(s).next(i=>(r=i,n.qi(t),n.mutationQueue.getAllMutationBatches(s))).next(i=>{const o=[],a=[];let c=S();for(const u of r){o.push(u.batchId);for(const h of u.mutations)c=c.add(h.key)}for(const u of i){a.push(u.batchId);for(const h of u.mutations)c=c.add(h.key)}return n.localDocuments.getDocuments(s,c).next(u=>({Ki:u,removedBatchIds:o,addedBatchIds:a}))})})}function bf(e,t){const n=I(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const r=t.batch.keys(),i=n.Ui.newChangeBuffer({trackRemovals:!0});return function(o,a,c,u){const h=c.batch,l=h.keys();let d=g.resolve();return l.forEach(f=>{d=d.next(()=>u.getEntry(a,f)).next(y=>{const D=c.docVersions.get(f);R(D!==null),y.version.compareTo(D)<0&&(h.applyToRemoteDocument(y,c),y.isValidDocument()&&(y.setReadTime(c.commitVersion),u.addEntry(y)))})}),d.next(()=>o.mutationQueue.removeMutationBatch(a,h))}(n,s,t,i).next(()=>i.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,r,t.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(o){let a=S();for(let c=0;c<o.mutationResults.length;++c)o.mutationResults[c].transformResults.length>0&&(a=a.add(o.batch.mutations[c].key));return a}(t))).next(()=>n.localDocuments.getDocuments(s,r))})}function mc(e){const t=I(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",n=>t.Vs.getLastRemoteSnapshotVersion(n))}function If(e,t){const n=I(e),s=t.snapshotVersion;let r=n.$i;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.Ui.newChangeBuffer({trackRemovals:!0});r=n.$i;const a=[];t.targetChanges.forEach((h,l)=>{const d=r.get(l);if(!d)return;a.push(n.Vs.removeMatchingKeys(i,h.removedDocuments,l).next(()=>n.Vs.addMatchingKeys(i,h.addedDocuments,l)));let f=d.withSequenceNumber(i.currentSequenceNumber);t.targetMismatches.has(l)?f=f.withResumeToken(G.EMPTY_BYTE_STRING,C.min()).withLastLimboFreeSnapshotVersion(C.min()):h.resumeToken.approximateByteSize()>0&&(f=f.withResumeToken(h.resumeToken,s)),r=r.insert(l,f),function(y,D,_){return y.resumeToken.approximateByteSize()===0||D.snapshotVersion.toMicroseconds()-y.snapshotVersion.toMicroseconds()>=3e8?!0:_.addedDocuments.size+_.modifiedDocuments.size+_.removedDocuments.size>0}(d,f,h)&&a.push(n.Vs.updateTargetData(i,f))});let c=Tt(),u=S();if(t.documentUpdates.forEach(h=>{t.resolvedLimboDocuments.has(h)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,h))}),a.push(Cf(i,o,t.documentUpdates).next(h=>{c=h.Gi,u=h.Qi})),!s.isEqual(C.min())){const h=n.Vs.getLastRemoteSnapshotVersion(i).next(l=>n.Vs.setTargetsMetadata(i,i.currentSequenceNumber,s));a.push(h)}return g.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,u)).next(()=>c)}).then(i=>(n.$i=r,i))}function Cf(e,t,n){let s=S(),r=S();return n.forEach(i=>s=s.add(i)),t.getEntries(e,s).next(i=>{let o=Tt();return n.forEach((a,c)=>{const u=i.get(a);c.isFoundDocument()!==u.isFoundDocument()&&(r=r.add(a)),c.isNoDocument()&&c.version.isEqual(C.min())?(t.removeEntry(a,c.readTime),o=o.insert(a,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(t.addEntry(c),o=o.insert(a,c)):v("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",c.version)}),{Gi:o,Qi:r}})}function Sf(e,t){const n=I(e);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(t===void 0&&(t=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(s,t)))}function Af(e,t){const n=I(e);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let r;return n.Vs.getTargetData(s,t).next(i=>i?(r=i,g.resolve(r)):n.Vs.allocateTargetId(s).next(o=>(r=new Vt(t,o,0,s.currentSequenceNumber),n.Vs.addTargetData(s,r).next(()=>r))))}).then(s=>{const r=n.$i.get(s.targetId);return(r===null||s.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.$i=n.$i.insert(s.targetId,s),n.Bi.set(t,s.targetId)),s})}async function cr(e,t,n){const s=I(e),r=s.$i.get(t),i=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",i,o=>s.persistence.referenceDelegate.removeTarget(o,r))}catch(o){if(!rn(o))throw o;v("LocalStore",`Failed to update sequence numbers for target ${t}: ${o}`)}s.$i=s.$i.remove(t),s.Bi.delete(r.target)}function mo(e,t,n){const s=I(e);let r=C.min(),i=S();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,c,u){const h=I(a),l=h.Bi.get(u);return l!==void 0?g.resolve(h.$i.get(l)):h.Vs.getTargetData(c,u)}(s,o,Et(t)).next(a=>{if(a)return r=a.lastLimboFreeSnapshotVersion,s.Vs.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>s.Fi.getDocumentsMatchingQuery(o,t,n?r:C.min(),n?i:S())).next(a=>(Df(s,Td(t),a),{documents:a,ji:i})))}function Df(e,t,n){let s=C.min();n.forEach((r,i)=>{i.readTime.compareTo(s)>0&&(s=i.readTime)}),e.Li.set(t,s)}class yo{constructor(){this.activeTargetIds=ac()}Xi(t){this.activeTargetIds=this.activeTargetIds.add(t)}Zi(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Yi(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class _f{constructor(){this.Fr=new yo,this.$r={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,n,s){}addLocalQueryTarget(t){return this.Fr.Xi(t),this.$r[t]||"not-current"}updateQueryState(t,n,s){this.$r[t]=n}removeLocalQueryTarget(t){this.Fr.Zi(t)}isLocalQueryTarget(t){return this.Fr.activeTargetIds.has(t)}clearQueryState(t){delete this.$r[t]}getAllActiveQueryTargets(){return this.Fr.activeTargetIds}isActiveQueryTarget(t){return this.Fr.activeTargetIds.has(t)}start(){return this.Fr=new yo,Promise.resolve()}handleUserChange(t,n,s){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class Nf{Br(t){}shutdown(){}}/**
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
 */class vo{constructor(){this.Lr=()=>this.Ur(),this.qr=()=>this.Kr(),this.Gr=[],this.Qr()}Br(t){this.Gr.push(t)}shutdown(){window.removeEventListener("online",this.Lr),window.removeEventListener("offline",this.qr)}Qr(){window.addEventListener("online",this.Lr),window.addEventListener("offline",this.qr)}Ur(){v("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.Gr)t(0)}Kr(){v("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.Gr)t(1)}static V(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */const kf={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};/**
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
 */class Rf{constructor(t){this.jr=t.jr,this.Wr=t.Wr}zr(t){this.Hr=t}Jr(t){this.Yr=t}onMessage(t){this.Xr=t}close(){this.Wr()}send(t){this.jr(t)}Zr(){this.Hr()}eo(t){this.Yr(t)}no(t){this.Xr(t)}}/**
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
 */class xf extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const n=t.ssl?"https":"http";this.so=n+"://"+t.host,this.io="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}ro(t,n,s,r,i){const o=this.oo(t,n);v("RestConnection","Sending: ",o,s);const a={};return this.uo(a,r,i),this.co(t,o,a,s).then(c=>(v("RestConnection","Received: ",c),c),c=>{throw Yi("RestConnection",`${t} failed with error: `,c,"url: ",o,"request:",s),c})}ao(t,n,s,r,i,o){return this.ro(t,n,s,r,i)}uo(t,n,s){t["X-Goog-Api-Client"]="gl-js/ fire/"+ge,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((r,i)=>t[i]=r),s&&s.headers.forEach((r,i)=>t[i]=r)}oo(t,n){const s=kf[t];return`${this.so}/v1/${n}:${s}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams}co(t,n,s,r){return new Promise((i,o)=>{const a=new jl;a.listenOnce($l.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case xs.NO_ERROR:const u=a.getResponseJson();v("Connection","XHR received:",JSON.stringify(u)),i(u);break;case xs.TIMEOUT:v("Connection",'RPC "'+t+'" timed out'),o(new E(p.DEADLINE_EXCEEDED,"Request time out"));break;case xs.HTTP_ERROR:const h=a.getStatus();if(v("Connection",'RPC "'+t+'" failed with status:',h,"response text:",a.getResponseText()),h>0){const l=a.getResponseJson().error;if(l&&l.status&&l.message){const d=function(f){const y=f.toLowerCase().replace(/_/g,"-");return Object.values(p).indexOf(y)>=0?y:p.UNKNOWN}(l.status);o(new E(d,l.message))}else o(new E(p.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new E(p.UNAVAILABLE,"Connection failed."));break;default:b()}}finally{v("Connection",'RPC "'+t+'" completed.')}});const c=JSON.stringify(r);a.send(n,"POST",c,s,15)})}ho(t,n,s){const r=[this.so,"/","google.firestore.v1.Firestore","/",t,"/channel"],i=Fl(),o=Vl(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new Ul({})),this.uo(a.initMessageHeaders,n,s),mu()||vu()||wu()||Eu()||Tu()||yu()||(a.httpHeadersOverwriteParam="$httpHeaders");const c=r.join("");v("Connection","Creating WebChannel: "+c,a);const u=i.createWebChannel(c,a);let h=!1,l=!1;const d=new Rf({jr:y=>{l?v("Connection","Not sending because WebChannel is closed:",y):(h||(v("Connection","Opening WebChannel transport."),u.open(),h=!0),v("Connection","WebChannel sending:",y),u.send(y))},Wr:()=>u.close()}),f=(y,D,_)=>{y.listen(D,X=>{try{_(X)}catch(it){setTimeout(()=>{throw it},0)}})};return f(u,pn.EventType.OPEN,()=>{l||v("Connection","WebChannel transport opened.")}),f(u,pn.EventType.CLOSE,()=>{l||(l=!0,v("Connection","WebChannel transport closed"),d.eo())}),f(u,pn.EventType.ERROR,y=>{l||(l=!0,Yi("Connection","WebChannel transport errored:",y),d.eo(new E(p.UNAVAILABLE,"The operation could not be completed")))}),f(u,pn.EventType.MESSAGE,y=>{var D;if(!l){const _=y.data[0];R(!!_);const X=_,it=X.error||((D=X[0])===null||D===void 0?void 0:D.error);if(it){v("Connection","WebChannel received error:",it);const ve=it.status;let we=function(eu){const Ei=L[eu];if(Ei!==void 0)return sc(Ei)}(ve),wi=it.message;we===void 0&&(we=p.INTERNAL,wi="Unknown error status: "+ve+" with message "+it.message),l=!0,d.eo(new E(we,wi)),u.close()}else v("Connection","WebChannel received:",_),d.no(_)}}),f(o,Bl.STAT_EVENT,y=>{y.stat===Wi.PROXY?v("Connection","Detected buffering proxy"):y.stat===Wi.NOPROXY&&v("Connection","Detected no buffering proxy")}),setTimeout(()=>{d.Zr()},0),d}}function Ls(){return typeof document<"u"?document:null}/**
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
 */function ds(e){return new Bd(e,!0)}class yc{constructor(t,n,s=1e3,r=1.5,i=6e4){this.js=t,this.timerId=n,this.lo=s,this.fo=r,this._o=i,this.wo=0,this.mo=null,this.yo=Date.now(),this.reset()}reset(){this.wo=0}po(){this.wo=this._o}Io(t){this.cancel();const n=Math.floor(this.wo+this.To()),s=Math.max(0,Date.now()-this.yo),r=Math.max(0,n-s);r>0&&v("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.wo} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.mo=this.js.enqueueAfterDelay(this.timerId,r,()=>(this.yo=Date.now(),t())),this.wo*=this.fo,this.wo<this.lo&&(this.wo=this.lo),this.wo>this._o&&(this.wo=this._o)}Eo(){this.mo!==null&&(this.mo.skipDelay(),this.mo=null)}cancel(){this.mo!==null&&(this.mo.cancel(),this.mo=null)}To(){return(Math.random()-.5)*this.wo}}/**
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
 */class vc{constructor(t,n,s,r,i,o,a,c){this.js=t,this.Ao=s,this.Ro=r,this.bo=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Po=0,this.vo=null,this.Vo=null,this.stream=null,this.So=new yc(t,n)}Do(){return this.state===1||this.state===5||this.Co()}Co(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.xo()}async stop(){this.Do()&&await this.close(0)}No(){this.state=0,this.So.reset()}ko(){this.Co()&&this.vo===null&&(this.vo=this.js.enqueueAfterDelay(this.Ao,6e4,()=>this.Mo()))}Oo(t){this.Fo(),this.stream.send(t)}async Mo(){if(this.Co())return this.close(0)}Fo(){this.vo&&(this.vo.cancel(),this.vo=null)}$o(){this.Vo&&(this.Vo.cancel(),this.Vo=null)}async close(t,n){this.Fo(),this.$o(),this.So.cancel(),this.Po++,t!==4?this.So.reset():n&&n.code===p.RESOURCE_EXHAUSTED?(wt(n.toString()),wt("Using maximum backoff delay to prevent overloading the backend."),this.So.po()):n&&n.code===p.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Bo(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Jr(n)}Bo(){}auth(){this.state=1;const t=this.Lo(this.Po),n=this.Po;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,r])=>{this.Po===n&&this.Uo(s,r)},s=>{t(()=>{const r=new E(p.UNKNOWN,"Fetching auth token failed: "+s.message);return this.qo(r)})})}Uo(t,n){const s=this.Lo(this.Po);this.stream=this.Ko(t,n),this.stream.zr(()=>{s(()=>(this.state=2,this.Vo=this.js.enqueueAfterDelay(this.Ro,1e4,()=>(this.Co()&&(this.state=3),Promise.resolve())),this.listener.zr()))}),this.stream.Jr(r=>{s(()=>this.qo(r))}),this.stream.onMessage(r=>{s(()=>this.onMessage(r))})}xo(){this.state=5,this.So.Io(async()=>{this.state=0,this.start()})}qo(t){return v("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}Lo(t){return n=>{this.js.enqueueAndForget(()=>this.Po===t?n():(v("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Of extends vc{constructor(t,n,s,r,i,o){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,r,o),this.wt=i}Ko(t,n){return this.bo.ho("Listen",t,n)}onMessage(t){this.So.reset();const n=qd(this.wt,t),s=function(r){if(!("targetChange"in r))return C.min();const i=r.targetChange;return i.targetIds&&i.targetIds.length?C.min():i.readTime?mt(i.readTime):C.min()}(t);return this.listener.Go(n,s)}Qo(t){const n={};n.database=ar(this.wt),n.addTarget=function(r,i){let o;const a=i.target;return o=nr(a)?{documents:Gd(r,a)}:{query:zd(r,a)},o.targetId=i.targetId,i.resumeToken.approximateByteSize()>0?o.resumeToken=hc(r,i.resumeToken):i.snapshotVersion.compareTo(C.min())>0&&(o.readTime=Bn(r,i.snapshotVersion.toTimestamp())),o}(this.wt,t);const s=Qd(this.wt,t);s&&(n.labels=s),this.Oo(n)}jo(t){const n={};n.database=ar(this.wt),n.removeTarget=t,this.Oo(n)}}class Lf extends vc{constructor(t,n,s,r,i,o){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,r,o),this.wt=i,this.Wo=!1}get zo(){return this.Wo}start(){this.Wo=!1,this.lastStreamToken=void 0,super.start()}Bo(){this.Wo&&this.Ho([])}Ko(t,n){return this.bo.ho("Write",t,n)}onMessage(t){if(R(!!t.streamToken),this.lastStreamToken=t.streamToken,this.Wo){this.So.reset();const n=Hd(t.writeResults,t.commitTime),s=mt(t.commitTime);return this.listener.Jo(s,n)}return R(!t.writeResults||t.writeResults.length===0),this.Wo=!0,this.listener.Yo()}Xo(){const t={};t.database=ar(this.wt),this.Oo(t)}Ho(t){const n={streamToken:this.lastStreamToken,writes:t.map(s=>Kd(this.wt,s))};this.Oo(n)}}/**
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
 */class Mf extends class{}{constructor(t,n,s,r){super(),this.authCredentials=t,this.appCheckCredentials=n,this.bo=s,this.wt=r,this.Zo=!1}tu(){if(this.Zo)throw new E(p.FAILED_PRECONDITION,"The client has already been terminated.")}ro(t,n,s){return this.tu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.bo.ro(t,n,s,r,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===p.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new E(p.UNKNOWN,r.toString())})}ao(t,n,s,r){return this.tu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.bo.ao(t,n,s,i,o,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===p.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new E(p.UNKNOWN,i.toString())})}terminate(){this.Zo=!0}}class Pf{constructor(t,n){this.asyncQueue=t,this.onlineStateHandler=n,this.state="Unknown",this.eu=0,this.nu=null,this.su=!0}iu(){this.eu===0&&(this.ru("Unknown"),this.nu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.nu=null,this.ou("Backend didn't respond within 10 seconds."),this.ru("Offline"),Promise.resolve())))}uu(t){this.state==="Online"?this.ru("Unknown"):(this.eu++,this.eu>=1&&(this.cu(),this.ou(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.ru("Offline")))}set(t){this.cu(),this.eu=0,t==="Online"&&(this.su=!1),this.ru(t)}ru(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}ou(t){const n=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.su?(wt(n),this.su=!1):v("OnlineStateTracker",n)}cu(){this.nu!==null&&(this.nu.cancel(),this.nu=null)}}/**
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
 */class Ff{constructor(t,n,s,r,i){this.localStore=t,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.au=[],this.hu=new Map,this.lu=new Set,this.fu=[],this.du=i,this.du.Br(o=>{s.enqueueAndForget(async()=>{Wt(this)&&(v("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=I(a);c.lu.add(4),await cn(c),c._u.set("Unknown"),c.lu.delete(4),await fs(c)}(this))})}),this._u=new Pf(s,r)}}async function fs(e){if(Wt(e))for(const t of e.fu)await t(!0)}async function cn(e){for(const t of e.fu)await t(!1)}function wc(e,t){const n=I(e);n.hu.has(t.targetId)||(n.hu.set(t.targetId,t),si(n)?ni(n):ye(n).Co()&&ei(n,t))}function Ec(e,t){const n=I(e),s=ye(n);n.hu.delete(t),s.Co()&&Tc(n,t),n.hu.size===0&&(s.Co()?s.ko():Wt(n)&&n._u.set("Unknown"))}function ei(e,t){e.wu.Nt(t.targetId),ye(e).Qo(t)}function Tc(e,t){e.wu.Nt(t),ye(e).jo(t)}function ni(e){e.wu=new Fd({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),te:t=>e.hu.get(t)||null}),ye(e).start(),e._u.iu()}function si(e){return Wt(e)&&!ye(e).Do()&&e.hu.size>0}function Wt(e){return I(e).lu.size===0}function bc(e){e.wu=void 0}async function Vf(e){e.hu.forEach((t,n)=>{ei(e,t)})}async function $f(e,t){bc(e),si(e)?(e._u.uu(t),ni(e)):e._u.set("Unknown")}async function Bf(e,t,n){if(e._u.set("Online"),t instanceof uc&&t.state===2&&t.cause)try{await async function(s,r){const i=r.cause;for(const o of r.targetIds)s.hu.has(o)&&(await s.remoteSyncer.rejectListen(o,i),s.hu.delete(o),s.wu.removeTarget(o))}(e,t)}catch(s){v("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),s),await Un(e,s)}else if(t instanceof In?e.wu.Ut(t):t instanceof cc?e.wu.zt(t):e.wu.Gt(t),!n.isEqual(C.min()))try{const s=await mc(e.localStore);n.compareTo(s)>=0&&await function(r,i){const o=r.wu.Yt(i);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const u=r.hu.get(c);u&&r.hu.set(c,u.withResumeToken(a.resumeToken,i))}}),o.targetMismatches.forEach(a=>{const c=r.hu.get(a);if(!c)return;r.hu.set(a,c.withResumeToken(G.EMPTY_BYTE_STRING,c.snapshotVersion)),Tc(r,a);const u=new Vt(c.target,a,1,c.sequenceNumber);ei(r,u)}),r.remoteSyncer.applyRemoteEvent(o)}(e,n)}catch(s){v("RemoteStore","Failed to raise snapshot:",s),await Un(e,s)}}async function Un(e,t,n){if(!rn(t))throw t;e.lu.add(1),await cn(e),e._u.set("Offline"),n||(n=()=>mc(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{v("RemoteStore","Retrying IndexedDB access"),await n(),e.lu.delete(1),await fs(e)})}function Ic(e,t){return t().catch(n=>Un(e,n,t))}async function ps(e){const t=I(e),n=Nt(t);let s=t.au.length>0?t.au[t.au.length-1].batchId:-1;for(;Uf(t);)try{const r=await Sf(t.localStore,s);if(r===null){t.au.length===0&&n.ko();break}s=r.batchId,jf(t,r)}catch(r){await Un(t,r)}Cc(t)&&Sc(t)}function Uf(e){return Wt(e)&&e.au.length<10}function jf(e,t){e.au.push(t);const n=Nt(e);n.Co()&&n.zo&&n.Ho(t.mutations)}function Cc(e){return Wt(e)&&!Nt(e).Do()&&e.au.length>0}function Sc(e){Nt(e).start()}async function qf(e){Nt(e).Xo()}async function Kf(e){const t=Nt(e);for(const n of e.au)t.Ho(n.mutations)}async function Hf(e,t,n){const s=e.au.shift(),r=Yr.from(s,t,n);await Ic(e,()=>e.remoteSyncer.applySuccessfulWrite(r)),await ps(e)}async function Gf(e,t){t&&Nt(e).zo&&await async function(n,s){if(r=s.code,xd(r)&&r!==p.ABORTED){const i=n.au.shift();Nt(n).No(),await Ic(n,()=>n.remoteSyncer.rejectFailedWrite(i.batchId,s)),await ps(n)}var r}(e,t),Cc(e)&&Sc(e)}async function wo(e,t){const n=I(e);n.asyncQueue.verifyOperationInProgress(),v("RemoteStore","RemoteStore received new credentials");const s=Wt(n);n.lu.add(3),await cn(n),s&&n._u.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.lu.delete(3),await fs(n)}async function zf(e,t){const n=I(e);t?(n.lu.delete(2),await fs(n)):t||(n.lu.add(2),await cn(n),n._u.set("Unknown"))}function ye(e){return e.mu||(e.mu=function(t,n,s){const r=I(t);return r.tu(),new Of(n,r.bo,r.authCredentials,r.appCheckCredentials,r.wt,s)}(e.datastore,e.asyncQueue,{zr:Vf.bind(null,e),Jr:$f.bind(null,e),Go:Bf.bind(null,e)}),e.fu.push(async t=>{t?(e.mu.No(),si(e)?ni(e):e._u.set("Unknown")):(await e.mu.stop(),bc(e))})),e.mu}function Nt(e){return e.gu||(e.gu=function(t,n,s){const r=I(t);return r.tu(),new Lf(n,r.bo,r.authCredentials,r.appCheckCredentials,r.wt,s)}(e.datastore,e.asyncQueue,{zr:qf.bind(null,e),Jr:Gf.bind(null,e),Yo:Kf.bind(null,e),Jo:Hf.bind(null,e)}),e.fu.push(async t=>{t?(e.gu.No(),await ps(e)):(await e.gu.stop(),e.au.length>0&&(v("RemoteStore",`Stopping write stream with ${e.au.length} pending writes`),e.au=[]))})),e.gu}/**
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
 */class ri{constructor(t,n,s,r,i){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=s,this.op=r,this.removalCallback=i,this.deferred=new St,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(t,n,s,r,i){const o=Date.now()+s,a=new ri(t,n,o,r,i);return a.start(s),a}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new E(p.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ii(e,t){if(wt("AsyncQueue",`${t}: ${e}`),rn(e))return new E(p.UNAVAILABLE,`${t}: ${e}`);throw e}/**
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
 */class te{constructor(t){this.comparator=t?(n,s)=>t(n,s)||w.comparator(n.key,s.key):(n,s)=>w.comparator(n.key,s.key),this.keyedMap=Ie(),this.sortedSet=new $(this.comparator)}static emptySet(t){return new te(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const n=this.keyedMap.get(t);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((n,s)=>(t(n),!1))}add(t){const n=this.delete(t.key);return n.copy(n.keyedMap.insert(t.key,t),n.sortedSet.insert(t,null))}delete(t){const n=this.get(t);return n?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(n)):this}isEqual(t){if(!(t instanceof te)||this.size!==t.size)return!1;const n=this.sortedSet.getIterator(),s=t.sortedSet.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){const t=[];return this.forEach(n=>{t.push(n.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,n){const s=new te;return s.comparator=this.comparator,s.keyedMap=t,s.sortedSet=n,s}}/**
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
 */class Eo{constructor(){this.yu=new $(w.comparator)}track(t){const n=t.doc.key,s=this.yu.get(n);s?t.type!==0&&s.type===3?this.yu=this.yu.insert(n,t):t.type===3&&s.type!==1?this.yu=this.yu.insert(n,{type:s.type,doc:t.doc}):t.type===2&&s.type===2?this.yu=this.yu.insert(n,{type:2,doc:t.doc}):t.type===2&&s.type===0?this.yu=this.yu.insert(n,{type:0,doc:t.doc}):t.type===1&&s.type===0?this.yu=this.yu.remove(n):t.type===1&&s.type===2?this.yu=this.yu.insert(n,{type:1,doc:s.doc}):t.type===0&&s.type===1?this.yu=this.yu.insert(n,{type:2,doc:t.doc}):b():this.yu=this.yu.insert(n,t)}pu(){const t=[];return this.yu.inorderTraversal((n,s)=>{t.push(s)}),t}}class ce{constructor(t,n,s,r,i,o,a,c){this.query=t,this.docs=n,this.oldDocs=s,this.docChanges=r,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c}static fromInitialDocuments(t,n,s,r){const i=[];return n.forEach(o=>{i.push({type:0,doc:o})}),new ce(t,n,te.emptySet(n),i,s,r,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&cs(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const n=this.docChanges,s=t.docChanges;if(n.length!==s.length)return!1;for(let r=0;r<n.length;r++)if(n[r].type!==s[r].type||!n[r].doc.isEqual(s[r].doc))return!1;return!0}}/**
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
 */class Wf{constructor(){this.Iu=void 0,this.listeners=[]}}class Qf{constructor(){this.queries=new me(t=>Ga(t),cs),this.onlineState="Unknown",this.Tu=new Set}}async function Ac(e,t){const n=I(e),s=t.query;let r=!1,i=n.queries.get(s);if(i||(r=!0,i=new Wf),r)try{i.Iu=await n.onListen(s)}catch(o){const a=ii(o,`Initialization of query '${rr(t.query)}' failed`);return void t.onError(a)}n.queries.set(s,i),i.listeners.push(t),t.Eu(n.onlineState),i.Iu&&t.Au(i.Iu)&&oi(n)}async function Dc(e,t){const n=I(e),s=t.query;let r=!1;const i=n.queries.get(s);if(i){const o=i.listeners.indexOf(t);o>=0&&(i.listeners.splice(o,1),r=i.listeners.length===0)}if(r)return n.queries.delete(s),n.onUnlisten(s)}function Xf(e,t){const n=I(e);let s=!1;for(const r of t){const i=r.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.Au(r)&&(s=!0);o.Iu=r}}s&&oi(n)}function Yf(e,t,n){const s=I(e),r=s.queries.get(t);if(r)for(const i of r.listeners)i.onError(n);s.queries.delete(t)}function oi(e){e.Tu.forEach(t=>{t.next()})}class _c{constructor(t,n,s){this.query=t,this.Ru=n,this.bu=!1,this.Pu=null,this.onlineState="Unknown",this.options=s||{}}Au(t){if(!this.options.includeMetadataChanges){const s=[];for(const r of t.docChanges)r.type!==3&&s.push(r);t=new ce(t.query,t.docs,t.oldDocs,s,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0)}let n=!1;return this.bu?this.vu(t)&&(this.Ru.next(t),n=!0):this.Vu(t,this.onlineState)&&(this.Su(t),n=!0),this.Pu=t,n}onError(t){this.Ru.error(t)}Eu(t){this.onlineState=t;let n=!1;return this.Pu&&!this.bu&&this.Vu(this.Pu,t)&&(this.Su(this.Pu),n=!0),n}Vu(t,n){if(!t.fromCache)return!0;const s=n!=="Offline";return(!this.options.Du||!s)&&(!t.docs.isEmpty()||n==="Offline")}vu(t){if(t.docChanges.length>0)return!0;const n=this.Pu&&this.Pu.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Su(t){t=ce.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache),this.bu=!0,this.Ru.next(t)}}/**
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
 */class Nc{constructor(t){this.key=t}}class kc{constructor(t){this.key=t}}class Jf{constructor(t,n){this.query=t,this.Fu=n,this.$u=null,this.current=!1,this.Bu=S(),this.mutatedKeys=S(),this.Lu=za(t),this.Uu=new te(this.Lu)}get qu(){return this.Fu}Ku(t,n){const s=n?n.Gu:new Eo,r=n?n.Uu:this.Uu;let i=n?n.mutatedKeys:this.mutatedKeys,o=r,a=!1;const c=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,u=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(t.inorderTraversal((h,l)=>{const d=r.get(h),f=Qr(this.query,l)?l:null,y=!!d&&this.mutatedKeys.has(d.key),D=!!f&&(f.hasLocalMutations||this.mutatedKeys.has(f.key)&&f.hasCommittedMutations);let _=!1;d&&f?d.data.isEqual(f.data)?y!==D&&(s.track({type:3,doc:f}),_=!0):this.Qu(d,f)||(s.track({type:2,doc:f}),_=!0,(c&&this.Lu(f,c)>0||u&&this.Lu(f,u)<0)&&(a=!0)):!d&&f?(s.track({type:0,doc:f}),_=!0):d&&!f&&(s.track({type:1,doc:d}),_=!0,(c||u)&&(a=!0)),_&&(f?(o=o.add(f),i=D?i.add(h):i.delete(h)):(o=o.delete(h),i=i.delete(h)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const h=this.query.limitType==="F"?o.last():o.first();o=o.delete(h.key),i=i.delete(h.key),s.track({type:1,doc:h})}return{Uu:o,Gu:s,Mi:a,mutatedKeys:i}}Qu(t,n){return t.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(t,n,s){const r=this.Uu;this.Uu=t.Uu,this.mutatedKeys=t.mutatedKeys;const i=t.Gu.pu();i.sort((u,h)=>function(l,d){const f=y=>{switch(y){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return b()}};return f(l)-f(d)}(u.type,h.type)||this.Lu(u.doc,h.doc)),this.ju(s);const o=n?this.Wu():[],a=this.Bu.size===0&&this.current?1:0,c=a!==this.$u;return this.$u=a,i.length!==0||c?{snapshot:new ce(this.query,t.Uu,r,i,t.mutatedKeys,a===0,c,!1),zu:o}:{zu:o}}Eu(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({Uu:this.Uu,Gu:new Eo,mutatedKeys:this.mutatedKeys,Mi:!1},!1)):{zu:[]}}Hu(t){return!this.Fu.has(t)&&!!this.Uu.has(t)&&!this.Uu.get(t).hasLocalMutations}ju(t){t&&(t.addedDocuments.forEach(n=>this.Fu=this.Fu.add(n)),t.modifiedDocuments.forEach(n=>{}),t.removedDocuments.forEach(n=>this.Fu=this.Fu.delete(n)),this.current=t.current)}Wu(){if(!this.current)return[];const t=this.Bu;this.Bu=S(),this.Uu.forEach(s=>{this.Hu(s.key)&&(this.Bu=this.Bu.add(s.key))});const n=[];return t.forEach(s=>{this.Bu.has(s)||n.push(new kc(s))}),this.Bu.forEach(s=>{t.has(s)||n.push(new Nc(s))}),n}Ju(t){this.Fu=t.ji,this.Bu=S();const n=this.Ku(t.documents);return this.applyChanges(n,!0)}Yu(){return ce.fromInitialDocuments(this.query,this.Uu,this.mutatedKeys,this.$u===0)}}class Zf{constructor(t,n,s){this.query=t,this.targetId=n,this.view=s}}class tp{constructor(t){this.key=t,this.Xu=!1}}class ep{constructor(t,n,s,r,i,o){this.localStore=t,this.remoteStore=n,this.eventManager=s,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Zu={},this.tc=new me(a=>Ga(a),cs),this.ec=new Map,this.nc=new Set,this.sc=new $(w.comparator),this.ic=new Map,this.rc=new Jr,this.oc={},this.uc=new Map,this.cc=ae.Rn(),this.onlineState="Unknown",this.ac=void 0}get isPrimaryClient(){return this.ac===!0}}async function np(e,t){const n=dp(e);let s,r;const i=n.tc.get(t);if(i)s=i.targetId,n.sharedClientState.addLocalQueryTarget(s),r=i.view.Yu();else{const o=await Af(n.localStore,Et(t));n.isPrimaryClient&&wc(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,r=await sp(n,t,s,a==="current")}return r}async function sp(e,t,n,s){e.hc=(h,l,d)=>async function(f,y,D,_){let X=y.view.Ku(D);X.Mi&&(X=await mo(f.localStore,y.query,!1).then(({documents:we})=>y.view.Ku(we,X)));const it=_&&_.targetChanges.get(y.targetId),ve=y.view.applyChanges(X,f.isPrimaryClient,it);return bo(f,y.targetId,ve.zu),ve.snapshot}(e,h,l,d);const r=await mo(e.localStore,t,!0),i=new Jf(t,r.ji),o=i.Ku(r.documents),a=an.createSynthesizedTargetChangeForCurrentChange(n,s&&e.onlineState!=="Offline"),c=i.applyChanges(o,e.isPrimaryClient,a);bo(e,n,c.zu);const u=new Zf(t,n,i);return e.tc.set(t,u),e.ec.has(n)?e.ec.get(n).push(t):e.ec.set(n,[t]),c.snapshot}async function rp(e,t){const n=I(e),s=n.tc.get(t),r=n.ec.get(s.targetId);if(r.length>1)return n.ec.set(s.targetId,r.filter(i=>!cs(i,t))),void n.tc.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await cr(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),Ec(n.remoteStore,s.targetId),ur(n,s.targetId)}).catch(sn)):(ur(n,s.targetId),await cr(n.localStore,s.targetId,!0))}async function ip(e,t,n){const s=fp(e);try{const r=await function(i,o){const a=I(i),c=F.now(),u=o.reduce((d,f)=>d.add(f.key),S());let h,l;return a.persistence.runTransaction("Locally write mutations","readwrite",d=>{let f=Tt(),y=S();return a.Ui.getEntries(d,u).next(D=>{f=D,f.forEach((_,X)=>{X.isValidDocument()||(y=y.add(_))})}).next(()=>a.localDocuments.getOverlayedDocuments(d,f)).next(D=>{h=D;const _=[];for(const X of o){const it=Nd(X,h.get(X.key).overlayedDocument);it!=null&&_.push(new xt(X.key,it,Ka(it.value.mapValue),lt.exists(!0)))}return a.mutationQueue.addMutationBatch(d,c,_,o)}).next(D=>{l=D;const _=D.applyToLocalDocumentSet(h,y);return a.documentOverlayCache.saveOverlays(d,D.batchId,_)})}).then(()=>({batchId:l.batchId,changes:ic(h)}))}(s.localStore,t);s.sharedClientState.addPendingMutation(r.batchId),function(i,o,a){let c=i.oc[i.currentUser.toKey()];c||(c=new $(k)),c=c.insert(o,a),i.oc[i.currentUser.toKey()]=c}(s,r.batchId,n),await un(s,r.changes),await ps(s.remoteStore)}catch(r){const i=ii(r,"Failed to persist write");n.reject(i)}}async function Rc(e,t){const n=I(e);try{const s=await If(n.localStore,t);t.targetChanges.forEach((r,i)=>{const o=n.ic.get(i);o&&(R(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1),r.addedDocuments.size>0?o.Xu=!0:r.modifiedDocuments.size>0?R(o.Xu):r.removedDocuments.size>0&&(R(o.Xu),o.Xu=!1))}),await un(n,s,t)}catch(s){await sn(s)}}function To(e,t,n){const s=I(e);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const r=[];s.tc.forEach((i,o)=>{const a=o.view.Eu(t);a.snapshot&&r.push(a.snapshot)}),function(i,o){const a=I(i);a.onlineState=o;let c=!1;a.queries.forEach((u,h)=>{for(const l of h.listeners)l.Eu(o)&&(c=!0)}),c&&oi(a)}(s.eventManager,t),r.length&&s.Zu.Go(r),s.onlineState=t,s.isPrimaryClient&&s.sharedClientState.setOnlineState(t)}}async function op(e,t,n){const s=I(e);s.sharedClientState.updateQueryState(t,"rejected",n);const r=s.ic.get(t),i=r&&r.key;if(i){let o=new $(w.comparator);o=o.insert(i,q.newNoDocument(i,C.min()));const a=S().add(i),c=new ls(C.min(),new Map,new V(k),o,a);await Rc(s,c),s.sc=s.sc.remove(i),s.ic.delete(t),ai(s)}else await cr(s.localStore,t,!1).then(()=>ur(s,t,n)).catch(sn)}async function ap(e,t){const n=I(e),s=t.batch.batchId;try{const r=await bf(n.localStore,t);Oc(n,s,null),xc(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await un(n,r)}catch(r){await sn(r)}}async function cp(e,t,n){const s=I(e);try{const r=await function(i,o){const a=I(i);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let u;return a.mutationQueue.lookupMutationBatch(c,o).next(h=>(R(h!==null),u=h.keys(),a.mutationQueue.removeMutationBatch(c,h))).next(()=>a.mutationQueue.performConsistencyCheck(c)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(c,u,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,u)).next(()=>a.localDocuments.getDocuments(c,u))})}(s.localStore,t);Oc(s,t,n),xc(s,t),s.sharedClientState.updateMutationState(t,"rejected",n),await un(s,r)}catch(r){await sn(r)}}function xc(e,t){(e.uc.get(t)||[]).forEach(n=>{n.resolve()}),e.uc.delete(t)}function Oc(e,t,n){const s=I(e);let r=s.oc[s.currentUser.toKey()];if(r){const i=r.get(t);i&&(n?i.reject(n):i.resolve(),r=r.remove(t)),s.oc[s.currentUser.toKey()]=r}}function ur(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const s of e.ec.get(t))e.tc.delete(s),n&&e.Zu.lc(s,n);e.ec.delete(t),e.isPrimaryClient&&e.rc.us(t).forEach(s=>{e.rc.containsKey(s)||Lc(e,s)})}function Lc(e,t){e.nc.delete(t.path.canonicalString());const n=e.sc.get(t);n!==null&&(Ec(e.remoteStore,n),e.sc=e.sc.remove(t),e.ic.delete(n),ai(e))}function bo(e,t,n){for(const s of n)s instanceof Nc?(e.rc.addReference(s.key,t),up(e,s)):s instanceof kc?(v("SyncEngine","Document no longer in limbo: "+s.key),e.rc.removeReference(s.key,t),e.rc.containsKey(s.key)||Lc(e,s.key)):b()}function up(e,t){const n=t.key,s=n.path.canonicalString();e.sc.get(n)||e.nc.has(s)||(v("SyncEngine","New document in limbo: "+n),e.nc.add(s),ai(e))}function ai(e){for(;e.nc.size>0&&e.sc.size<e.maxConcurrentLimboResolutions;){const t=e.nc.values().next().value;e.nc.delete(t);const n=new w(O.fromString(t)),s=e.cc.next();e.ic.set(s,new tp(n)),e.sc=e.sc.insert(n,s),wc(e.remoteStore,new Vt(Et(as(n.path)),s,2,Hr.ot))}}async function un(e,t,n){const s=I(e),r=[],i=[],o=[];s.tc.isEmpty()||(s.tc.forEach((a,c)=>{o.push(s.hc(c,t,n).then(u=>{if(u){s.isPrimaryClient&&s.sharedClientState.updateQueryState(c.targetId,u.fromCache?"not-current":"current"),r.push(u);const h=ti.Vi(c.targetId,u);i.push(h)}}))}),await Promise.all(o),s.Zu.Go(r),await async function(a,c){const u=I(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>g.forEach(c,l=>g.forEach(l.Pi,d=>u.persistence.referenceDelegate.addReference(h,l.targetId,d)).next(()=>g.forEach(l.vi,d=>u.persistence.referenceDelegate.removeReference(h,l.targetId,d)))))}catch(h){if(!rn(h))throw h;v("LocalStore","Failed to update sequence numbers: "+h)}for(const h of c){const l=h.targetId;if(!h.fromCache){const d=u.$i.get(l),f=d.snapshotVersion,y=d.withLastLimboFreeSnapshotVersion(f);u.$i=u.$i.insert(l,y)}}}(s.localStore,i))}async function hp(e,t){const n=I(e);if(!n.currentUser.isEqual(t)){v("SyncEngine","User change. New user:",t.toKey());const s=await gc(n.localStore,t);n.currentUser=t,function(r,i){r.uc.forEach(o=>{o.forEach(a=>{a.reject(new E(p.CANCELLED,i))})}),r.uc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,s.removedBatchIds,s.addedBatchIds),await un(n,s.Ki)}}function lp(e,t){const n=I(e),s=n.ic.get(t);if(s&&s.Xu)return S().add(s.key);{let r=S();const i=n.ec.get(t);if(!i)return r;for(const o of i){const a=n.tc.get(o);r=r.unionWith(a.view.qu)}return r}}function dp(e){const t=I(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=Rc.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=lp.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=op.bind(null,t),t.Zu.Go=Xf.bind(null,t.eventManager),t.Zu.lc=Yf.bind(null,t.eventManager),t}function fp(e){const t=I(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=ap.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=cp.bind(null,t),t}class pp{constructor(){this.synchronizeTabs=!1}async initialize(t){this.wt=ds(t.databaseInfo.databaseId),this.sharedClientState=this.dc(t),this.persistence=this._c(t),await this.persistence.start(),this.localStore=this.wc(t),this.gcScheduler=this.mc(t,this.localStore),this.indexBackfillerScheduler=this.gc(t,this.localStore)}mc(t,n){return null}gc(t,n){return null}wc(t){return Tf(this.persistence,new wf,t.initialUser,this.wt)}_c(t){return new yf(Zr.Os,this.wt)}dc(t){return new _f}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class gp{async initialize(t,n){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>To(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=hp.bind(null,this.syncEngine),await zf(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new Qf}createDatastore(t){const n=ds(t.databaseInfo.databaseId),s=(r=t.databaseInfo,new xf(r));var r;return function(i,o,a,c){return new Mf(i,o,a,c)}(t.authCredentials,t.appCheckCredentials,s,n)}createRemoteStore(t){return n=this.localStore,s=this.datastore,r=t.asyncQueue,i=a=>To(this.syncEngine,a,0),o=vo.V()?new vo:new Nf,new Ff(n,s,r,i,o);var n,s,r,i,o}createSyncEngine(t,n){return function(s,r,i,o,a,c,u){const h=new ep(s,r,i,o,a,c);return u&&(h.ac=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,n)}terminate(){return async function(t){const n=I(t);v("RemoteStore","RemoteStore shutting down."),n.lu.add(5),await cn(n),n.du.shutdown(),n._u.set("Unknown")}(this.remoteStore)}}/**
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
 */class Mc{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.Ic(this.observer.next,t)}error(t){this.observer.error?this.Ic(this.observer.error,t):wt("Uncaught Error in snapshot listener:",t)}Tc(){this.muted=!0}Ic(t,n){this.muted||setTimeout(()=>{this.muted||t(n)},0)}}/**
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
 */class mp{constructor(t,n,s,r){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=r,this.user=et.UNAUTHENTICATED,this.clientId=Ba.I(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async i=>{v("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(s,i=>(v("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new E(p.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new St;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const s=ii(n,"Failed to shutdown persistence");t.reject(s)}}),t.promise}}async function yp(e,t){e.asyncQueue.verifyOperationInProgress(),v("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let s=n.initialUser;e.setCredentialChangeListener(async r=>{s.isEqual(r)||(await gc(t.localStore,r),s=r)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e.offlineComponents=t}async function vp(e,t){e.asyncQueue.verifyOperationInProgress();const n=await wp(e);v("FirestoreClient","Initializing OnlineComponentProvider");const s=await e.getConfiguration();await t.initialize(n,s),e.setCredentialChangeListener(r=>wo(t.remoteStore,r)),e.setAppCheckTokenChangeListener((r,i)=>wo(t.remoteStore,i)),e.onlineComponents=t}async function wp(e){return e.offlineComponents||(v("FirestoreClient","Using default OfflineComponentProvider"),await yp(e,new pp)),e.offlineComponents}async function Pc(e){return e.onlineComponents||(v("FirestoreClient","Using default OnlineComponentProvider"),await vp(e,new gp)),e.onlineComponents}function Ep(e){return Pc(e).then(t=>t.syncEngine)}async function hr(e){const t=await Pc(e),n=t.eventManager;return n.onListen=np.bind(null,t.syncEngine),n.onUnlisten=rp.bind(null,t.syncEngine),n}function Tp(e,t,n={}){const s=new St;return e.asyncQueue.enqueueAndForget(async()=>function(r,i,o,a,c){const u=new Mc({next:l=>{i.enqueueAndForget(()=>Dc(r,h));const d=l.docs.has(o);!d&&l.fromCache?c.reject(new E(p.UNAVAILABLE,"Failed to get document because the client is offline.")):d&&l.fromCache&&a&&a.source==="server"?c.reject(new E(p.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(l)},error:l=>c.reject(l)}),h=new _c(as(o.path),u,{includeMetadataChanges:!0,Du:!0});return Ac(r,h)}(await hr(e),e.asyncQueue,t,n,s)),s.promise}const Io=new Map;/**
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
 */function Fc(e,t,n){if(!n)throw new E(p.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function bp(e,t,n,s){if(t===!0&&s===!0)throw new E(p.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function Co(e){if(!w.isDocumentKey(e))throw new E(p.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function So(e){if(w.isDocumentKey(e))throw new E(p.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function ci(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const t=function(n){return n.constructor?n.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return typeof e=="function"?"a function":b()}function dt(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new E(p.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=ci(e);throw new E(p.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
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
 */class Ao{constructor(t){var n;if(t.host===void 0){if(t.ssl!==void 0)throw new E(p.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(n=t.ssl)===null||n===void 0||n;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new E(p.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams,bp("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling)}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}/**
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
 */class ui{constructor(t,n,s){this._authCredentials=n,this._appCheckCredentials=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ao({}),this._settingsFrozen=!1,t instanceof ie?this._databaseId=t:(this._app=t,this._databaseId=function(r){if(!Object.prototype.hasOwnProperty.apply(r.options,["projectId"]))throw new E(p.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ie(r.options.projectId)}(t))}get app(){if(!this._app)throw new E(p.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new E(p.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ao(t),t.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new Kl;switch(n.type){case"gapi":const s=n.client;return R(!(typeof s!="object"||s===null||!s.auth||!s.auth.getAuthHeaderValueForFirstParty)),new zl(s,n.sessionIndex||"0",n.iamToken||null);case"provider":return n.client;default:throw new E(p.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const n=Io.get(t);n&&(v("ComponentProvider","Removing Datastore"),Io.delete(t),n.terminate())}(this),Promise.resolve()}}/**
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
 */class tt{constructor(t,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new At(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new tt(this.firestore,t,this._key)}}class gs{constructor(t,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=t}withConverter(t){return new gs(this.firestore,t,this._query)}}class At extends gs{constructor(t,n,s){super(t,n,as(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new tt(this.firestore,null,new w(t))}withConverter(t){return new At(this.firestore,t,this._path)}}function ee(e,t,...n){if(e=yt(e),Fc("collection","path",t),e instanceof ui){const s=O.fromString(t,...n);return So(s),new At(e,null,s)}{if(!(e instanceof tt||e instanceof At))throw new E(p.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=e._path.child(O.fromString(t,...n));return So(s),new At(e.firestore,null,s)}}function hi(e,t,...n){if(e=yt(e),arguments.length===1&&(t=Ba.I()),Fc("doc","path",t),e instanceof ui){const s=O.fromString(t,...n);return Co(s),new tt(e,null,new w(s))}{if(!(e instanceof tt||e instanceof At))throw new E(p.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=e._path.child(O.fromString(t,...n));return Co(s),new tt(e.firestore,e instanceof At?e.converter:null,new w(s))}}/**
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
 */class Ip{constructor(){this.Mc=Promise.resolve(),this.Oc=[],this.Fc=!1,this.$c=[],this.Bc=null,this.Lc=!1,this.Uc=!1,this.qc=[],this.So=new yc(this,"async_queue_retry"),this.Kc=()=>{const n=Ls();n&&v("AsyncQueue","Visibility state changed to "+n.visibilityState),this.So.Eo()};const t=Ls();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Kc)}get isShuttingDown(){return this.Fc}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Gc(),this.Qc(t)}enterRestrictedMode(t){if(!this.Fc){this.Fc=!0,this.Uc=t||!1;const n=Ls();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Kc)}}enqueue(t){if(this.Gc(),this.Fc)return new Promise(()=>{});const n=new St;return this.Qc(()=>this.Fc&&this.Uc?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Oc.push(t),this.jc()))}async jc(){if(this.Oc.length!==0){try{await this.Oc[0](),this.Oc.shift(),this.So.reset()}catch(t){if(!rn(t))throw t;v("AsyncQueue","Operation failed with retryable error: "+t)}this.Oc.length>0&&this.So.Io(()=>this.jc())}}Qc(t){const n=this.Mc.then(()=>(this.Lc=!0,t().catch(s=>{this.Bc=s,this.Lc=!1;const r=function(i){let o=i.message||"";return i.stack&&(o=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),o}(s);throw wt("INTERNAL UNHANDLED ERROR: ",r),s}).then(s=>(this.Lc=!1,s))));return this.Mc=n,n}enqueueAfterDelay(t,n,s){this.Gc(),this.qc.indexOf(t)>-1&&(n=0);const r=ri.createAndSchedule(this,t,n,s,i=>this.Wc(i));return this.$c.push(r),r}Gc(){this.Bc&&b()}verifyOperationInProgress(){}async zc(){let t;do t=this.Mc,await t;while(t!==this.Mc)}Hc(t){for(const n of this.$c)if(n.timerId===t)return!0;return!1}Jc(t){return this.zc().then(()=>{this.$c.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.$c)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.zc()})}Yc(t){this.qc.push(t)}Wc(t){const n=this.$c.indexOf(t);this.$c.splice(n,1)}}function Do(e){return function(t,n){if(typeof t!="object"||t===null)return!1;const s=t;for(const r of n)if(r in s&&typeof s[r]=="function")return!0;return!1}(e,["next","error","complete"])}class Ht extends ui{constructor(t,n,s){super(t,n,s),this.type="firestore",this._queue=new Ip,this._persistenceKey="name"in t?t.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||Vc(this),this._firestoreClient.terminate()}}function Cp(e=Ah()){return Th(e,"firestore").getImmediate()}function li(e){return e._firestoreClient||Vc(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function Vc(e){var t;const n=e._freezeSettings(),s=function(r,i,o,a){return new rd(r,i,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(e._databaseId,((t=e._app)===null||t===void 0?void 0:t.options.appId)||"",e._persistenceKey,n);e._firestoreClient=new mp(e._authCredentials,e._appCheckCredentials,e._queue,s)}/**
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
 */class ms{constructor(...t){for(let n=0;n<t.length;++n)if(t[n].length===0)throw new E(p.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new W(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
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
 */class ue{constructor(t){this._byteString=t}static fromBase64String(t){try{return new ue(G.fromBase64String(t))}catch(n){throw new E(p.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(t){return new ue(G.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
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
 */class di{constructor(t){this._methodName=t}}/**
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
 */class fi{constructor(t,n){if(!isFinite(t)||t<-90||t>90)throw new E(p.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(n)||n<-180||n>180)throw new E(p.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=t,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return k(this._lat,t._lat)||k(this._long,t._long)}}/**
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
 */const Sp=/^__.*__$/;class Ap{constructor(t,n,s){this.data=t,this.fieldMask=n,this.fieldTransforms=s}toMutation(t,n){return this.fieldMask!==null?new xt(t,this.data,this.fieldMask,n,this.fieldTransforms):new on(t,this.data,n,this.fieldTransforms)}}class $c{constructor(t,n,s){this.data=t,this.fieldMask=n,this.fieldTransforms=s}toMutation(t,n){return new xt(t,this.data,this.fieldMask,n,this.fieldTransforms)}}function Bc(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw b()}}class pi{constructor(t,n,s,r,i,o){this.settings=t,this.databaseId=n,this.wt=s,this.ignoreUndefinedProperties=r,i===void 0&&this.Xc(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Zc(){return this.settings.Zc}ta(t){return new pi(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.wt,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ea(t){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(t),r=this.ta({path:s,na:!1});return r.sa(t),r}ia(t){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(t),r=this.ta({path:s,na:!1});return r.Xc(),r}ra(t){return this.ta({path:void 0,na:!0})}oa(t){return jn(t,this.settings.methodName,this.settings.ua||!1,this.path,this.settings.ca)}contains(t){return this.fieldMask.find(n=>t.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>t.isPrefixOf(n.field))!==void 0}Xc(){if(this.path)for(let t=0;t<this.path.length;t++)this.sa(this.path.get(t))}sa(t){if(t.length===0)throw this.oa("Document fields must not be empty");if(Bc(this.Zc)&&Sp.test(t))throw this.oa('Document fields cannot begin and end with "__"')}}class Dp{constructor(t,n,s){this.databaseId=t,this.ignoreUndefinedProperties=n,this.wt=s||ds(t)}aa(t,n,s,r=!1){return new pi({Zc:t,methodName:n,ca:s,path:W.emptyPath(),na:!1,ua:r},this.databaseId,this.wt,this.ignoreUndefinedProperties)}}function gi(e){const t=e._freezeSettings(),n=ds(e._databaseId);return new Dp(e._databaseId,!!t.ignoreUndefinedProperties,n)}function Uc(e,t,n,s,r,i={}){const o=e.aa(i.merge||i.mergeFields?2:0,t,n,r);mi("Data must be an object, but it was:",o,s);const a=jc(s,o);let c,u;if(i.merge)c=new ut(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const h=[];for(const l of i.mergeFields){const d=lr(t,l,n);if(!o.contains(d))throw new E(p.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);Kc(h,d)||h.push(d)}c=new ut(h),u=o.fieldTransforms.filter(l=>c.covers(l.field))}else c=null,u=o.fieldTransforms;return new Ap(new st(a),c,u)}class ys extends di{_toFieldTransform(t){if(t.Zc!==2)throw t.Zc===1?t.oa(`${this._methodName}() can only appear at the top level of your update data`):t.oa(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof ys}}function _p(e,t,n,s){const r=e.aa(1,t,n);mi("Data must be an object, but it was:",r,s);const i=[],o=st.empty();zt(s,(c,u)=>{const h=yi(t,c,n);u=yt(u);const l=r.ia(h);if(u instanceof ys)i.push(h);else{const d=vs(u,l);d!=null&&(i.push(h),o.set(h,d))}});const a=new ut(i);return new $c(o,a,r.fieldTransforms)}function Np(e,t,n,s,r,i){const o=e.aa(1,t,n),a=[lr(t,s,n)],c=[r];if(i.length%2!=0)throw new E(p.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<i.length;d+=2)a.push(lr(t,i[d])),c.push(i[d+1]);const u=[],h=st.empty();for(let d=a.length-1;d>=0;--d)if(!Kc(u,a[d])){const f=a[d];let y=c[d];y=yt(y);const D=o.ia(f);if(y instanceof ys)u.push(f);else{const _=vs(y,D);_!=null&&(u.push(f),h.set(f,_))}}const l=new ut(u);return new $c(h,l,o.fieldTransforms)}function vs(e,t){if(qc(e=yt(e)))return mi("Unsupported field value:",t,e),jc(e,t);if(e instanceof di)return function(n,s){if(!Bc(s.Zc))throw s.oa(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.oa(`${n._methodName}() is not currently supported inside arrays`);const r=n._toFieldTransform(s);r&&s.fieldTransforms.push(r)}(e,t),null;if(e===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.na&&t.Zc!==4)throw t.oa("Nested arrays are not supported");return function(n,s){const r=[];let i=0;for(const o of n){let a=vs(o,s.ra(i));a==null&&(a={nullValue:"NULL_VALUE"}),r.push(a),i++}return{arrayValue:{values:r}}}(e,t)}return function(n,s){if((n=yt(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return Id(s.wt,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const r=F.fromDate(n);return{timestampValue:Bn(s.wt,r)}}if(n instanceof F){const r=new F(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Bn(s.wt,r)}}if(n instanceof fi)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof ue)return{bytesValue:hc(s.wt,n._byteString)};if(n instanceof tt){const r=s.databaseId,i=n.firestore._databaseId;if(!i.isEqual(r))throw s.oa(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:Xr(n.firestore._databaseId||s.databaseId,n._key.path)}}throw s.oa(`Unsupported field value: ${ci(n)}`)}(e,t)}function jc(e,t){const n={};return Ua(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):zt(e,(s,r)=>{const i=vs(r,t.ea(s));i!=null&&(n[s]=i)}),{mapValue:{fields:n}}}function qc(e){return!(typeof e!="object"||e===null||e instanceof Array||e instanceof Date||e instanceof F||e instanceof fi||e instanceof ue||e instanceof tt||e instanceof di)}function mi(e,t,n){if(!qc(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const s=ci(n);throw s==="an object"?t.oa(e+" a custom object"):t.oa(e+" "+s)}}function lr(e,t,n){if((t=yt(t))instanceof ms)return t._internalPath;if(typeof t=="string")return yi(e,t);throw jn("Field path arguments must be of type string or ",e,!1,void 0,n)}const kp=new RegExp("[~\\*/\\[\\]]");function yi(e,t,n){if(t.search(kp)>=0)throw jn(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new ms(...t.split("."))._internalPath}catch{throw jn(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function jn(e,t,n,s,r){const i=s&&!s.isEmpty(),o=r!==void 0;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${s}`),o&&(c+=` in document ${r}`),c+=")"),new E(p.INVALID_ARGUMENT,a+e+c)}function Kc(e,t){return e.some(n=>n.isEqual(t))}/**
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
 */class Hc{constructor(t,n,s,r,i){this._firestore=t,this._userDataWriter=n,this._key=s,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new tt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new Rp(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const n=this._document.data.field(Gc("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n)}}}class Rp extends Hc{data(){return super.data()}}function Gc(e,t){return typeof t=="string"?yi(e,t):t instanceof ms?t._internalPath:t._delegate._internalPath}/**
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
 */class Ce{constructor(t,n){this.hasPendingWrites=t,this.fromCache=n}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class zc extends Hc{constructor(t,n,s,r,i,o){super(t,n,s,r,o),this._firestore=t,this._firestoreImpl=t,this.metadata=i}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const n=new Cn(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,n={}){if(this._document){const s=this._document.data.field(Gc("DocumentSnapshot.get",t));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class Cn extends zc{data(t={}){return super.data(t)}}class xp{constructor(t,n,s,r){this._firestore=t,this._userDataWriter=n,this._snapshot=r,this.metadata=new Ce(r.hasPendingWrites,r.fromCache),this.query=s}get docs(){const t=[];return this.forEach(n=>t.push(n)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,n){this._snapshot.docs.forEach(s=>{t.call(n,new Cn(this._firestore,this._userDataWriter,s.key,s,new Ce(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const n=!!t.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new E(p.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,r){if(s._snapshot.oldDocs.isEmpty()){let i=0;return s._snapshot.docChanges.map(o=>({type:"added",doc:new Cn(s._firestore,s._userDataWriter,o.doc.key,o.doc,new Ce(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter),oldIndex:-1,newIndex:i++}))}{let i=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>r||o.type!==3).map(o=>{const a=new Cn(s._firestore,s._userDataWriter,o.doc.key,o.doc,new Ce(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,u=-1;return o.type!==0&&(c=i.indexOf(o.doc.key),i=i.delete(o.doc.key)),o.type!==1&&(i=i.add(o.doc),u=i.indexOf(o.doc.key)),{type:Op(o.type),doc:a,oldIndex:c,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function Op(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return b()}}/**
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
 */function Lp(e){if(e.limitType==="L"&&e.explicitOrderBy.length===0)throw new E(p.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}/**
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
 */class Mp{convertValue(t,n="none"){switch(Kt(t)){case 0:return null;case 1:return t.booleanValue;case 2:return M(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,n);case 5:return t.stringValue;case 6:return this.convertBytes(re(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,n);case 10:return this.convertObject(t.mapValue,n);default:throw b()}}convertObject(t,n){const s={};return zt(t.fields,(r,i)=>{s[r]=this.convertValue(i,n)}),s}convertGeoPoint(t){return new fi(M(t.latitude),M(t.longitude))}convertArray(t,n){return(t.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(t,n){switch(n){case"previous":const s=qa(t);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(je(t));default:return null}}convertTimestamp(t){const n=_t(t);return new F(n.seconds,n.nanos)}convertDocumentKey(t,n){const s=O.fromString(t);R(pc(s));const r=new ie(s.get(1),s.get(3)),i=new w(s.popFirst(5));return r.isEqual(n)||wt(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */function Wc(e,t,n){let s;return s=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,s}/**
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
 */function Pp(e){e=dt(e,tt);const t=dt(e.firestore,Ht);return Tp(li(t),e._key).then(n=>Yc(t,e,n))}class Qc extends Mp{constructor(t){super(),this.firestore=t}convertBytes(t){return new ue(t)}convertReference(t){const n=this.convertDocumentKey(t,this.firestore._databaseId);return new tt(this.firestore,null,n)}}function Fp(e,t,n){e=dt(e,tt);const s=dt(e.firestore,Ht),r=Wc(e.converter,t,n);return vi(s,[Uc(gi(s),"setDoc",e._key,r,e.converter!==null,n).toMutation(e._key,lt.none())])}function Vp(e,t,n,...s){e=dt(e,tt);const r=dt(e.firestore,Ht),i=gi(r);let o;return o=typeof(t=yt(t))=="string"||t instanceof ms?Np(i,"updateDoc",e._key,t,n,s):_p(i,"updateDoc",e._key,t),vi(r,[o.toMutation(e._key,lt.exists(!0))])}function Xc(e,t){const n=dt(e.firestore,Ht),s=hi(e),r=Wc(e.converter,t);return vi(n,[Uc(gi(e.firestore),"addDoc",s._key,r,e.converter!==null,{}).toMutation(s._key,lt.exists(!1))]).then(()=>s)}function dr(e,...t){var n,s,r;e=yt(e);let i={includeMetadataChanges:!1},o=0;typeof t[o]!="object"||Do(t[o])||(i=t[o],o++);const a={includeMetadataChanges:i.includeMetadataChanges};if(Do(t[o])){const l=t[o];t[o]=(n=l.next)===null||n===void 0?void 0:n.bind(l),t[o+1]=(s=l.error)===null||s===void 0?void 0:s.bind(l),t[o+2]=(r=l.complete)===null||r===void 0?void 0:r.bind(l)}let c,u,h;if(e instanceof tt)u=dt(e.firestore,Ht),h=as(e._key.path),c={next:l=>{t[o]&&t[o](Yc(u,e,l))},error:t[o+1],complete:t[o+2]};else{const l=dt(e,gs);u=dt(l.firestore,Ht),h=l._query;const d=new Qc(u);c={next:f=>{t[o]&&t[o](new xp(u,d,l,f))},error:t[o+1],complete:t[o+2]},Lp(e._query)}return function(l,d,f,y){const D=new Mc(y),_=new _c(d,D,f);return l.asyncQueue.enqueueAndForget(async()=>Ac(await hr(l),_)),()=>{D.Tc(),l.asyncQueue.enqueueAndForget(async()=>Dc(await hr(l),_))}}(li(u),h,a,c)}function vi(e,t){return function(n,s){const r=new St;return n.asyncQueue.enqueueAndForget(async()=>ip(await Ep(n),s,r)),r.promise}(li(e),t)}function Yc(e,t,n){const s=n.docs.get(t._key),r=new Qc(e);return new zc(e,r,t._key,s,new Ce(n.hasPendingWrites,n.fromCache),t.converter)}(function(e,t=!0){(function(n){ge=n})(Ch),An(new Oe("firestore",(n,{options:s})=>{const r=n.getProvider("app").getImmediate(),i=new Ht(r,new Hl(n.getProvider("auth-internal")),new Ql(n.getProvider("app-check-internal")));return s=Object.assign({useFetchStreams:t},s),i._setSettings(s),i},"PUBLIC")),Jt(Qi,"3.4.14",e),Jt(Qi,"3.4.14","esm2017")})();var $p="firebase",Bp="9.9.3";/**
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
 */Jt($p,Bp,"app");function Up(e){console.log(e)}function jp(e){console.log(e)}const qp={apiKey:"AIzaSyBsCTqTEJxsBYGhShNeOetUxTUTHFF7u0o",authDomain:"svelte-game-43670.firebaseapp.com",projectId:"svelte-game-43670",storageBucket:"svelte-game-43670.appspot.com",messagingSenderId:"409471071554",appId:"1:409471071554:web:b367f616e61129bbcc84db",measurementId:"G-74YW1ZVH2W"};Dh().length||Sh(qp);const Kp={iceServers:[{urls:["stun:stun1.l.google.com:19302","stun:stun2.l.google.com:19302"]}],iceCandidatePoolSize:10},Jc=Cp(),nt=Gp();let ze=!1;function Hp(){return ze}function Gp(){const e=new RTCPeerConnection(Kp);return e.ondatachannel=t=>{t.channel.label===Zc?(qn=t.channel,ze||qn.addEventListener("message",n=>{Up(n.data)})):t.channel.label===tu&&(Kn=t.channel,ze&&Kn.addEventListener("message",n=>{jp(n.data)}))},e}const Zc="game_state";let qn;const tu="peer_player_state";let Kn;async function zp(){ze=!0,qn=nt.createDataChannel(Zc);const e=hi(ee(Jc,"lobbies")),t=ee(e,"offerCandidates"),n=ee(e,"answerCandidates"),s=e.id;console.log(s),nt.onicecandidate=o=>{o.candidate&&Xc(t,o.candidate.toJSON())};const r=await nt.createOffer({offerToReceiveAudio:!0});await nt.setLocalDescription(r);const i={sdp:r.sdp,type:r.type};return await Fp(e,{offer:i}),dr(e,o=>{console.log("On Snaphshot 1",nt.currentRemoteDescription,o.data());const a=o.data();if(!nt.currentRemoteDescription&&(a==null?void 0:a.answer)){const c=new RTCSessionDescription(a.answer);nt.setRemoteDescription(c)}}),dr(n,o=>{console.log("On Snaphshot 2"),o.docChanges().forEach(a=>{if(a.type==="added"){const c=new RTCIceCandidate(a.doc.data());nt.addIceCandidate(c)}})}),s}async function Wp(e){ze=!1,Kn=nt.createDataChannel(tu);const t=hi(ee(Jc,"lobbies"),e),n=ee(t,"answerCandidates"),s=ee(t,"offerCandidates");nt.onicecandidate=c=>{console.log("this bitch aint working"),c.candidate&&Xc(n,c.candidate.toJSON())};const i=(await Pp(t)).data().offer;await nt.setRemoteDescription(new RTCSessionDescription(i));const o=await nt.createAnswer();await nt.setLocalDescription(o);const a={type:o.type,sdp:o.sdp};await Vp(t,{answer:a}),dr(s,c=>{console.log("On Snaphshot 3",c,c.docChanges()),c.docChanges().forEach(u=>{if(console.log(u),u.type==="added"){let h=u.doc.data();nt.addIceCandidate(new RTCIceCandidate(h))}})})}function Qp(e){qn.send(JSON.stringify(e))}function Xp(e){Kn.send(JSON.stringify(e))}function Yp(e){let t,n,s,r,i,o,a,c,u,h,l,d;return{c(){t=ct("div"),n=ct("h2"),n.textContent="Create a new Lobby",s=bt(),r=ct("button"),r.textContent="Create Lobby",i=bt(),o=ct("h2"),o.textContent="Join a Lobby",a=bt(),c=ct("input"),u=bt(),h=ct("button"),h.textContent="Join",vn(c,"type","string")},m(f,y){ht(f,t,y),pt(t,n),pt(t,s),pt(t,r),pt(t,i),pt(t,o),pt(t,a),pt(t,c),bi(c,e[1]),pt(t,u),pt(t,h),l||(d=[yn(r,"click",e[2]),yn(c,"input",e[3]),yn(h,"click",e[4])],l=!0)},p(f,[y]){y&2&&bi(c,f[1])},i:It,o:It,d(f){f&&at(t),l=!1,he(d)}}}function Jp(e,t,n){let{onLobbyConnected:s}=t,r="";const i=async()=>{n(1,r=await zp()),s(r)};function o(){r=this.value,n(1,r)}const a=()=>{Wp(r),s(r)};return e.$$set=c=>{"onLobbyConnected"in c&&n(0,s=c.onLobbyConnected)},[s,r,i,o,a]}class Zp extends vr{constructor(t){super(),yr(this,t,Jp,Yp,fr,{onLobbyConnected:0})}}function tg(e){let t,n,s,r,i,o,a,c,u,h,l;return{c(){t=ct("div"),t.textContent="Game",n=bt(),s=ct("p"),s.textContent="Local",r=bt(),i=ct("div"),o=bt(),a=ct("p"),a.textContent="Peer",c=bt(),u=ct("div"),vn(t,"class","svelte-7e01qv"),vn(i,"class","svelte-7e01qv"),Ii(i,"background-color",eg,!1),vn(u,"class","svelte-7e01qv"),Ii(u,"background-color",ng,!1)},m(d,f){ht(d,t,f),ht(d,n,f),ht(d,s,f),ht(d,r,f),ht(d,i,f),ht(d,o,f),ht(d,a,f),ht(d,c,f),ht(d,u,f),h||(l=yn(i,"click",e[0]),h=!0)},p:It,i:It,o:It,d(d){d&&at(t),d&&at(n),d&&at(s),d&&at(r),d&&at(i),d&&at(o),d&&at(a),d&&at(c),d&&at(u),h=!1,l()}}}let eg="black",ng="black";function sg(e,t,n){let{lobbyId:s}=t;function r(){Hp()?Qp({playerState:{direction:[1,0],pos:[1,15],health:3,isDead:!1},enemyStates:new Map([[0,{health:4,isDead:!1,direction:[0,4],pos:[5,5]}]]),mapState:{mapGrid:[]}}):Xp({direction:[0,0],pos:[1,2],health:3,isDead:!1})}return e.$$set=i=>{"lobbyId"in i&&n(1,s=i.lobbyId)},[r,s]}class rg extends vr{constructor(t){super(),yr(this,t,sg,tg,fr,{lobbyId:1})}}function ig(e){let t,n;return t=new rg({props:{lobbyId:e[1]}}),{c(){ko(t.$$.fragment)},m(s,r){gr(t,s,r),n=!0},p(s,r){const i={};r&2&&(i.lobbyId=s[1]),t.$set(i)},i(s){n||(xe(t.$$.fragment,s),n=!0)},o(s){Sn(t.$$.fragment,s),n=!1},d(s){mr(t,s)}}}function og(e){let t,n;return t=new Zp({props:{onLobbyConnected:e[2]}}),{c(){ko(t.$$.fragment)},m(s,r){gr(t,s,r),n=!0},p:It,i(s){n||(xe(t.$$.fragment,s),n=!0)},o(s){Sn(t.$$.fragment,s),n=!1},d(s){mr(t,s)}}}function ag(e){let t,n,s,r;const i=[og,ig],o=[];function a(c,u){return c[0]?1:0}return n=a(e),s=o[n]=i[n](e),{c(){t=ct("main"),s.c()},m(c,u){ht(c,t,u),o[n].m(t,null),r=!0},p(c,[u]){let h=n;n=a(c),n===h?o[n].p(c,u):(uu(),Sn(o[h],1,1,()=>{o[h]=null}),hu(),s=o[n],s?s.p(c,u):(s=o[n]=i[n](c),s.c()),xe(s,1),s.m(t,null))},i(c){r||(xe(s),r=!0)},o(c){Sn(s),r=!1},d(c){c&&at(t),o[n].d()}}}function cg(e,t,n){let s=!1,r="";function i(o){n(0,s=!0),n(1,r=o)}return[s,r,i]}class ug extends vr{constructor(t){super(),yr(this,t,cg,ag,fr,{})}}new ug({target:document.getElementById("app")});

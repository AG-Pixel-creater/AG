(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const c of s)if(c.type==="childList")for(const l of c.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(s){const c={};return s.integrity&&(c.integrity=s.integrity),s.referrerPolicy&&(c.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?c.credentials="include":s.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(s){if(s.ep)return;s.ep=!0;const c=n(s);fetch(s.href,c)}})();var ss={};/**
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
 */const ao=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},Ic=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const c=t[n++];e[r++]=String.fromCharCode((s&31)<<6|c&63)}else if(s>239&&s<365){const c=t[n++],l=t[n++],h=t[n++],g=((s&7)<<18|(c&63)<<12|(l&63)<<6|h&63)-65536;e[r++]=String.fromCharCode(55296+(g>>10)),e[r++]=String.fromCharCode(56320+(g&1023))}else{const c=t[n++],l=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(c&63)<<6|l&63)}}return e.join("")},co={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const c=t[s],l=s+1<t.length,h=l?t[s+1]:0,g=s+2<t.length,E=g?t[s+2]:0,b=c>>2,S=(c&3)<<4|h>>4;let k=(h&15)<<2|E>>6,N=E&63;g||(N=64,l||(k=64)),r.push(n[b],n[S],n[k],n[N])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(ao(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Ic(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const c=n[t.charAt(s++)],h=s<t.length?n[t.charAt(s)]:0;++s;const E=s<t.length?n[t.charAt(s)]:64;++s;const S=s<t.length?n[t.charAt(s)]:64;if(++s,c==null||h==null||E==null||S==null)throw new Ec;const k=c<<2|h>>4;if(r.push(k),E!==64){const N=h<<4&240|E>>2;if(r.push(N),S!==64){const R=E<<6&192|S;r.push(R)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Ec extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Tc=function(t){const e=ao(t);return co.encodeByteArray(e,!0)},pn=function(t){return Tc(t).replace(/\./g,"")},lo=function(t){try{return co.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function bc(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Ac=()=>bc().__FIREBASE_DEFAULTS__,Sc=()=>{if(typeof process>"u"||typeof ss>"u")return;const t=ss.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},kc=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&lo(t[1]);return e&&JSON.parse(e)},Ni=()=>{try{return Ac()||Sc()||kc()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},uo=t=>{var e,n;return(n=(e=Ni())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},ho=t=>{const e=uo(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},fo=()=>{var t;return(t=Ni())===null||t===void 0?void 0:t.config},po=t=>{var e;return(e=Ni())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class Cc{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function Rc(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,c=t.sub||t.user_id;if(!c)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const l=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:c,user_id:c,firebase:{sign_in_provider:"custom",identities:{}}},t);return[pn(JSON.stringify(n)),pn(JSON.stringify(l)),""].join(".")}/**
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
 */function J(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Pc(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(J())}function Oc(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function go(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Dc(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Nc(){const t=J();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Li(){try{return typeof indexedDB=="object"}catch{return!1}}function Mi(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var c;e(((c=s.error)===null||c===void 0?void 0:c.message)||"")}}catch(n){e(n)}})}function mo(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const Lc="FirebaseError";class de extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Lc,Object.setPrototypeOf(this,de.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ue.prototype.create)}}class Ue{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,c=this.errors[e],l=c?Mc(c,r):"Error",h=`${this.serviceName}: ${l} (${s}).`;return new de(s,h,r)}}function Mc(t,e){return t.replace(Uc,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const Uc=/\{\$([^}]+)}/g;function Fc(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function gn(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const c=t[s],l=e[s];if(os(c)&&os(l)){if(!gn(c,l))return!1}else if(c!==l)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function os(t){return t!==null&&typeof t=="object"}/**
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
 */function jt(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function kt(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,c]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(c)}}),e}function Ct(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function xc(t,e){const n=new jc(t,e);return n.subscribe.bind(n)}class jc{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Bc(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=si),s.error===void 0&&(s.error=si),s.complete===void 0&&(s.complete=si);const c=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),c}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Bc(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function si(){}/**
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
 */const $c=1e3,Vc=2,Hc=4*60*60*1e3,Wc=.5;function as(t,e=$c,n=Vc){const r=e*Math.pow(n,t),s=Math.round(Wc*r*(Math.random()-.5)*2);return Math.min(Hc,r+s)}/**
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
 */function oe(t){return t&&t._delegate?t._delegate:t}class ee{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const We="[DEFAULT]";/**
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
 */class Kc{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Cc;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(c){if(s)return null;throw c}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(zc(e))try{this.getOrInitializeService({instanceIdentifier:We})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const c=this.getOrInitializeService({instanceIdentifier:s});r.resolve(c)}catch{}}}}clearInstance(e=We){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=We){return this.instances.has(e)}getOptions(e=We){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[c,l]of this.instancesDeferred.entries()){const h=this.normalizeInstanceIdentifier(c);r===h&&l.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),c=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;c.add(e),this.onInitCallbacks.set(s,c);const l=this.instances.get(s);return l&&e(l,s),()=>{c.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Gc(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=We){return this.component?this.component.multipleInstances?e:We:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Gc(t){return t===We?void 0:t}function zc(t){return t.instantiationMode==="EAGER"}/**
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
 */class qc{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Kc(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var O;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(O||(O={}));const Jc={debug:O.DEBUG,verbose:O.VERBOSE,info:O.INFO,warn:O.WARN,error:O.ERROR,silent:O.SILENT},Yc=O.INFO,Xc={[O.DEBUG]:"log",[O.VERBOSE]:"log",[O.INFO]:"info",[O.WARN]:"warn",[O.ERROR]:"error"},Qc=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=Xc[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class bn{constructor(e){this.name=e,this._logLevel=Yc,this._logHandler=Qc,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in O))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Jc[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,O.DEBUG,...e),this._logHandler(this,O.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,O.VERBOSE,...e),this._logHandler(this,O.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,O.INFO,...e),this._logHandler(this,O.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,O.WARN,...e),this._logHandler(this,O.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,O.ERROR,...e),this._logHandler(this,O.ERROR,...e)}}const Zc=(t,e)=>e.some(n=>t instanceof n);let cs,ls;function el(){return cs||(cs=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function tl(){return ls||(ls=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const yo=new WeakMap,Ei=new WeakMap,vo=new WeakMap,oi=new WeakMap,Ui=new WeakMap;function nl(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",c),t.removeEventListener("error",l)},c=()=>{n(be(t.result)),s()},l=()=>{r(t.error),s()};t.addEventListener("success",c),t.addEventListener("error",l)});return e.then(n=>{n instanceof IDBCursor&&yo.set(n,t)}).catch(()=>{}),Ui.set(e,t),e}function il(t){if(Ei.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",c),t.removeEventListener("error",l),t.removeEventListener("abort",l)},c=()=>{n(),s()},l=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",c),t.addEventListener("error",l),t.addEventListener("abort",l)});Ei.set(t,e)}let Ti={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Ei.get(t);if(e==="objectStoreNames")return t.objectStoreNames||vo.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return be(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function rl(t){Ti=t(Ti)}function sl(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(ai(this),e,...n);return vo.set(r,e.sort?e.sort():[e]),be(r)}:tl().includes(t)?function(...e){return t.apply(ai(this),e),be(yo.get(this))}:function(...e){return be(t.apply(ai(this),e))}}function ol(t){return typeof t=="function"?sl(t):(t instanceof IDBTransaction&&il(t),Zc(t,el())?new Proxy(t,Ti):t)}function be(t){if(t instanceof IDBRequest)return nl(t);if(oi.has(t))return oi.get(t);const e=ol(t);return e!==t&&(oi.set(t,e),Ui.set(e,t)),e}const ai=t=>Ui.get(t);function An(t,e,{blocked:n,upgrade:r,blocking:s,terminated:c}={}){const l=indexedDB.open(t,e),h=be(l);return r&&l.addEventListener("upgradeneeded",g=>{r(be(l.result),g.oldVersion,g.newVersion,be(l.transaction),g)}),n&&l.addEventListener("blocked",g=>n(g.oldVersion,g.newVersion,g)),h.then(g=>{c&&g.addEventListener("close",()=>c()),s&&g.addEventListener("versionchange",E=>s(E.oldVersion,E.newVersion,E))}).catch(()=>{}),h}function ci(t,{blocked:e}={}){const n=indexedDB.deleteDatabase(t);return e&&n.addEventListener("blocked",r=>e(r.oldVersion,r)),be(n).then(()=>{})}const al=["get","getKey","getAll","getAllKeys","count"],cl=["put","add","delete","clear"],li=new Map;function us(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(li.get(e))return li.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=cl.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||al.includes(n)))return;const c=async function(l,...h){const g=this.transaction(l,s?"readwrite":"readonly");let E=g.store;return r&&(E=E.index(h.shift())),(await Promise.all([E[n](...h),s&&g.done]))[0]};return li.set(e,c),c}rl(t=>({...t,get:(e,n,r)=>us(e,n)||t.get(e,n,r),has:(e,n)=>!!us(e,n)||t.has(e,n)}));/**
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
 */class ll{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(ul(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function ul(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const bi="@firebase/app",hs="0.10.13";/**
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
 */const Se=new bn("@firebase/app"),hl="@firebase/app-compat",dl="@firebase/analytics-compat",fl="@firebase/analytics",pl="@firebase/app-check-compat",gl="@firebase/app-check",ml="@firebase/auth",yl="@firebase/auth-compat",vl="@firebase/database",_l="@firebase/data-connect",wl="@firebase/database-compat",Il="@firebase/functions",El="@firebase/functions-compat",Tl="@firebase/installations",bl="@firebase/installations-compat",Al="@firebase/messaging",Sl="@firebase/messaging-compat",kl="@firebase/performance",Cl="@firebase/performance-compat",Rl="@firebase/remote-config",Pl="@firebase/remote-config-compat",Ol="@firebase/storage",Dl="@firebase/storage-compat",Nl="@firebase/firestore",Ll="@firebase/vertexai-preview",Ml="@firebase/firestore-compat",Ul="firebase",Fl="10.14.1";/**
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
 */const Ai="[DEFAULT]",xl={[bi]:"fire-core",[hl]:"fire-core-compat",[fl]:"fire-analytics",[dl]:"fire-analytics-compat",[gl]:"fire-app-check",[pl]:"fire-app-check-compat",[ml]:"fire-auth",[yl]:"fire-auth-compat",[vl]:"fire-rtdb",[_l]:"fire-data-connect",[wl]:"fire-rtdb-compat",[Il]:"fire-fn",[El]:"fire-fn-compat",[Tl]:"fire-iid",[bl]:"fire-iid-compat",[Al]:"fire-fcm",[Sl]:"fire-fcm-compat",[kl]:"fire-perf",[Cl]:"fire-perf-compat",[Rl]:"fire-rc",[Pl]:"fire-rc-compat",[Ol]:"fire-gcs",[Dl]:"fire-gcs-compat",[Nl]:"fire-fst",[Ml]:"fire-fst-compat",[Ll]:"fire-vertex","fire-js":"fire-js",[Ul]:"fire-js-all"};/**
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
 */const mn=new Map,jl=new Map,Si=new Map;function ds(t,e){try{t.container.addComponent(e)}catch(n){Se.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ne(t){const e=t.name;if(Si.has(e))return Se.debug(`There were multiple attempts to register component ${e}.`),!1;Si.set(e,t);for(const n of mn.values())ds(n,t);for(const n of jl.values())ds(n,t);return!0}function Xe(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function le(t){return t.settings!==void 0}/**
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
 */const Bl={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Me=new Ue("app","Firebase",Bl);/**
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
 */class $l{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new ee("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Me.create("app-deleted",{appName:this._name})}}/**
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
 */const at=Fl;function Fi(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Ai,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw Me.create("bad-app-name",{appName:String(s)});if(n||(n=fo()),!n)throw Me.create("no-options");const c=mn.get(s);if(c){if(gn(n,c.options)&&gn(r,c.config))return c;throw Me.create("duplicate-app",{appName:s})}const l=new qc(s);for(const g of Si.values())l.addComponent(g);const h=new $l(n,r,l);return mn.set(s,h),h}function Sn(t=Ai){const e=mn.get(t);if(!e&&t===Ai&&fo())return Fi();if(!e)throw Me.create("no-app",{appName:t});return e}function W(t,e,n){var r;let s=(r=xl[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const c=s.match(/\s|\//),l=e.match(/\s|\//);if(c||l){const h=[`Unable to register library "${s}" with version "${e}":`];c&&h.push(`library name "${s}" contains illegal characters (whitespace or "/")`),c&&l&&h.push("and"),l&&h.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Se.warn(h.join(" "));return}ne(new ee(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const Vl="firebase-heartbeat-database",Hl=1,Lt="firebase-heartbeat-store";let ui=null;function _o(){return ui||(ui=An(Vl,Hl,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Lt)}catch(n){console.warn(n)}}}}).catch(t=>{throw Me.create("idb-open",{originalErrorMessage:t.message})})),ui}async function Wl(t){try{const n=(await _o()).transaction(Lt),r=await n.objectStore(Lt).get(wo(t));return await n.done,r}catch(e){if(e instanceof de)Se.warn(e.message);else{const n=Me.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Se.warn(n.message)}}}async function fs(t,e){try{const r=(await _o()).transaction(Lt,"readwrite");await r.objectStore(Lt).put(e,wo(t)),await r.done}catch(n){if(n instanceof de)Se.warn(n.message);else{const r=Me.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Se.warn(r.message)}}}function wo(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Kl=1024,Gl=30*24*60*60*1e3;class zl{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Jl(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),c=ps();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===c||this._heartbeatsCache.heartbeats.some(l=>l.date===c)?void 0:(this._heartbeatsCache.heartbeats.push({date:c,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(l=>{const h=new Date(l.date).valueOf();return Date.now()-h<=Gl}),this._storage.overwrite(this._heartbeatsCache))}catch(r){Se.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=ps(),{heartbeatsToSend:r,unsentEntries:s}=ql(this._heartbeatsCache.heartbeats),c=pn(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),c}catch(n){return Se.warn(n),""}}}function ps(){return new Date().toISOString().substring(0,10)}function ql(t,e=Kl){const n=[];let r=t.slice();for(const s of t){const c=n.find(l=>l.agent===s.agent);if(c){if(c.dates.push(s.date),gs(n)>e){c.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),gs(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Jl{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Li()?Mi().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Wl(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return fs(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return fs(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function gs(t){return pn(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function Yl(t){ne(new ee("platform-logger",e=>new ll(e),"PRIVATE")),ne(new ee("heartbeat",e=>new zl(e),"PRIVATE")),W(bi,hs,t),W(bi,hs,"esm2017"),W("fire-js","")}Yl("");var Xl="firebase",Ql="10.14.1";/**
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
 */W(Xl,Ql,"app");function xi(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function Io(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Zl=Io,Eo=new Ue("auth","Firebase",Io());/**
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
 */const yn=new bn("@firebase/auth");function eu(t,...e){yn.logLevel<=O.WARN&&yn.warn(`Auth (${at}): ${t}`,...e)}function un(t,...e){yn.logLevel<=O.ERROR&&yn.error(`Auth (${at}): ${t}`,...e)}/**
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
 */function se(t,...e){throw Bi(t,...e)}function he(t,...e){return Bi(t,...e)}function ji(t,e,n){const r=Object.assign(Object.assign({},Zl()),{[e]:n});return new Ue("auth","Firebase",r).create(e,{appName:t.name})}function Ae(t){return ji(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function tu(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&se(t,"argument-error"),ji(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Bi(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Eo.create(t,...e)}function A(t,e,...n){if(!t)throw Bi(e,...n)}function Ie(t){const e="INTERNAL ASSERTION FAILED: "+t;throw un(e),new Error(e)}function ke(t,e){t||Ie(e)}/**
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
 */function ki(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function nu(){return ms()==="http:"||ms()==="https:"}function ms(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function iu(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(nu()||go()||"connection"in navigator)?navigator.onLine:!0}function ru(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Bt{constructor(e,n){this.shortDelay=e,this.longDelay=n,ke(n>e,"Short delay should be less than long delay!"),this.isMobile=Pc()||Dc()}get(){return iu()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function $i(t,e){ke(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class To{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Ie("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Ie("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Ie("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const su={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const ou=new Bt(3e4,6e4);function Fe(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function xe(t,e,n,r,s={}){return bo(t,s,async()=>{let c={},l={};r&&(e==="GET"?l=r:c={body:JSON.stringify(r)});const h=jt(Object.assign({key:t.config.apiKey},l)).slice(1),g=await t._getAdditionalHeaders();g["Content-Type"]="application/json",t.languageCode&&(g["X-Firebase-Locale"]=t.languageCode);const E=Object.assign({method:e,headers:g},c);return Oc()||(E.referrerPolicy="no-referrer"),To.fetch()(Ao(t,t.config.apiHost,n,h),E)})}async function bo(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},su),e);try{const s=new cu(t),c=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const l=await c.json();if("needConfirmation"in l)throw cn(t,"account-exists-with-different-credential",l);if(c.ok&&!("errorMessage"in l))return l;{const h=c.ok?l.errorMessage:l.error.message,[g,E]=h.split(" : ");if(g==="FEDERATED_USER_ID_ALREADY_LINKED")throw cn(t,"credential-already-in-use",l);if(g==="EMAIL_EXISTS")throw cn(t,"email-already-in-use",l);if(g==="USER_DISABLED")throw cn(t,"user-disabled",l);const b=r[g]||g.toLowerCase().replace(/[_\s]+/g,"-");if(E)throw ji(t,b,E);se(t,b)}}catch(s){if(s instanceof de)throw s;se(t,"network-request-failed",{message:String(s)})}}async function $t(t,e,n,r,s={}){const c=await xe(t,e,n,r,s);return"mfaPendingCredential"in c&&se(t,"multi-factor-auth-required",{_serverResponse:c}),c}function Ao(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?$i(t.config,s):`${t.config.apiScheme}://${s}`}function au(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class cu{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(he(this.auth,"network-request-failed")),ou.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function cn(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=he(t,e,r);return s.customData._tokenResponse=n,s}function ys(t){return t!==void 0&&t.enterprise!==void 0}class lu{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return au(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function uu(t,e){return xe(t,"GET","/v2/recaptchaConfig",Fe(t,e))}/**
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
 */async function hu(t,e){return xe(t,"POST","/v1/accounts:delete",e)}async function So(t,e){return xe(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Rt(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function du(t,e=!1){const n=oe(t),r=await n.getIdToken(e),s=Vi(r);A(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const c=typeof s.firebase=="object"?s.firebase:void 0,l=c==null?void 0:c.sign_in_provider;return{claims:s,token:r,authTime:Rt(hi(s.auth_time)),issuedAtTime:Rt(hi(s.iat)),expirationTime:Rt(hi(s.exp)),signInProvider:l||null,signInSecondFactor:(c==null?void 0:c.sign_in_second_factor)||null}}function hi(t){return Number(t)*1e3}function Vi(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return un("JWT malformed, contained fewer than 3 sections"),null;try{const s=lo(n);return s?JSON.parse(s):(un("Failed to decode base64 JWT payload"),null)}catch(s){return un("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function vs(t){const e=Vi(t);return A(e,"internal-error"),A(typeof e.exp<"u","internal-error"),A(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Mt(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof de&&fu(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function fu({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class pu{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Ci{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Rt(this.lastLoginAt),this.creationTime=Rt(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function vn(t){var e;const n=t.auth,r=await t.getIdToken(),s=await Mt(t,So(n,{idToken:r}));A(s==null?void 0:s.users.length,n,"internal-error");const c=s.users[0];t._notifyReloadListener(c);const l=!((e=c.providerUserInfo)===null||e===void 0)&&e.length?ko(c.providerUserInfo):[],h=mu(t.providerData,l),g=t.isAnonymous,E=!(t.email&&c.passwordHash)&&!(h!=null&&h.length),b=g?E:!1,S={uid:c.localId,displayName:c.displayName||null,photoURL:c.photoUrl||null,email:c.email||null,emailVerified:c.emailVerified||!1,phoneNumber:c.phoneNumber||null,tenantId:c.tenantId||null,providerData:h,metadata:new Ci(c.createdAt,c.lastLoginAt),isAnonymous:b};Object.assign(t,S)}async function gu(t){const e=oe(t);await vn(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function mu(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function ko(t){return t.map(e=>{var{providerId:n}=e,r=xi(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function yu(t,e){const n=await bo(t,{},async()=>{const r=jt({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:c}=t.config,l=Ao(t,s,"/v1/token",`key=${c}`),h=await t._getAdditionalHeaders();return h["Content-Type"]="application/x-www-form-urlencoded",To.fetch()(l,{method:"POST",headers:h,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function vu(t,e){return xe(t,"POST","/v2/accounts:revokeToken",Fe(t,e))}/**
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
 */class it{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){A(e.idToken,"internal-error"),A(typeof e.idToken<"u","internal-error"),A(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):vs(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){A(e.length!==0,"internal-error");const n=vs(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(A(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:c}=await yu(e,n);this.updateTokensAndExpiration(r,s,Number(c))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:c}=n,l=new it;return r&&(A(typeof r=="string","internal-error",{appName:e}),l.refreshToken=r),s&&(A(typeof s=="string","internal-error",{appName:e}),l.accessToken=s),c&&(A(typeof c=="number","internal-error",{appName:e}),l.expirationTime=c),l}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new it,this.toJSON())}_performRefresh(){return Ie("not implemented")}}/**
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
 */function De(t,e){A(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Ee{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,c=xi(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new pu(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=c.displayName||null,this.email=c.email||null,this.emailVerified=c.emailVerified||!1,this.phoneNumber=c.phoneNumber||null,this.photoURL=c.photoURL||null,this.isAnonymous=c.isAnonymous||!1,this.tenantId=c.tenantId||null,this.providerData=c.providerData?[...c.providerData]:[],this.metadata=new Ci(c.createdAt||void 0,c.lastLoginAt||void 0)}async getIdToken(e){const n=await Mt(this,this.stsTokenManager.getToken(this.auth,e));return A(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return du(this,e)}reload(){return gu(this)}_assign(e){this!==e&&(A(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Ee(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){A(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await vn(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(le(this.auth.app))return Promise.reject(Ae(this.auth));const e=await this.getIdToken();return await Mt(this,hu(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,c,l,h,g,E,b;const S=(r=n.displayName)!==null&&r!==void 0?r:void 0,k=(s=n.email)!==null&&s!==void 0?s:void 0,N=(c=n.phoneNumber)!==null&&c!==void 0?c:void 0,R=(l=n.photoURL)!==null&&l!==void 0?l:void 0,F=(h=n.tenantId)!==null&&h!==void 0?h:void 0,M=(g=n._redirectEventId)!==null&&g!==void 0?g:void 0,me=(E=n.createdAt)!==null&&E!==void 0?E:void 0,te=(b=n.lastLoginAt)!==null&&b!==void 0?b:void 0,{uid:j,emailVerified:ae,isAnonymous:Be,providerData:Y,stsTokenManager:v}=n;A(j&&v,e,"internal-error");const d=it.fromJSON(this.name,v);A(typeof j=="string",e,"internal-error"),De(S,e.name),De(k,e.name),A(typeof ae=="boolean",e,"internal-error"),A(typeof Be=="boolean",e,"internal-error"),De(N,e.name),De(R,e.name),De(F,e.name),De(M,e.name),De(me,e.name),De(te,e.name);const p=new Ee({uid:j,auth:e,email:k,emailVerified:ae,displayName:S,isAnonymous:Be,photoURL:R,phoneNumber:N,tenantId:F,stsTokenManager:d,createdAt:me,lastLoginAt:te});return Y&&Array.isArray(Y)&&(p.providerData=Y.map(m=>Object.assign({},m))),M&&(p._redirectEventId=M),p}static async _fromIdTokenResponse(e,n,r=!1){const s=new it;s.updateFromServerResponse(n);const c=new Ee({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await vn(c),c}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];A(s.localId!==void 0,"internal-error");const c=s.providerUserInfo!==void 0?ko(s.providerUserInfo):[],l=!(s.email&&s.passwordHash)&&!(c!=null&&c.length),h=new it;h.updateFromIdToken(r);const g=new Ee({uid:s.localId,auth:e,stsTokenManager:h,isAnonymous:l}),E={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:c,metadata:new Ci(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(c!=null&&c.length)};return Object.assign(g,E),g}}/**
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
 */const _s=new Map;function Te(t){ke(t instanceof Function,"Expected a class definition");let e=_s.get(t);return e?(ke(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,_s.set(t,e),e)}/**
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
 */class Co{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Co.type="NONE";const ws=Co;/**
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
 */function hn(t,e,n){return`firebase:${t}:${e}:${n}`}class rt{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:c}=this.auth;this.fullUserKey=hn(this.userKey,s.apiKey,c),this.fullPersistenceKey=hn("persistence",s.apiKey,c),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Ee._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new rt(Te(ws),e,r);const s=(await Promise.all(n.map(async E=>{if(await E._isAvailable())return E}))).filter(E=>E);let c=s[0]||Te(ws);const l=hn(r,e.config.apiKey,e.name);let h=null;for(const E of n)try{const b=await E._get(l);if(b){const S=Ee._fromJSON(e,b);E!==c&&(h=S),c=E;break}}catch{}const g=s.filter(E=>E._shouldAllowMigration);return!c._shouldAllowMigration||!g.length?new rt(c,e,r):(c=g[0],h&&await c._set(l,h.toJSON()),await Promise.all(n.map(async E=>{if(E!==c)try{await E._remove(l)}catch{}})),new rt(c,e,r))}}/**
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
 */function Is(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Do(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Ro(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Lo(e))return"Blackberry";if(Mo(e))return"Webos";if(Po(e))return"Safari";if((e.includes("chrome/")||Oo(e))&&!e.includes("edge/"))return"Chrome";if(No(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Ro(t=J()){return/firefox\//i.test(t)}function Po(t=J()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Oo(t=J()){return/crios\//i.test(t)}function Do(t=J()){return/iemobile/i.test(t)}function No(t=J()){return/android/i.test(t)}function Lo(t=J()){return/blackberry/i.test(t)}function Mo(t=J()){return/webos/i.test(t)}function Hi(t=J()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function _u(t=J()){var e;return Hi(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function wu(){return Nc()&&document.documentMode===10}function Uo(t=J()){return Hi(t)||No(t)||Mo(t)||Lo(t)||/windows phone/i.test(t)||Do(t)}/**
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
 */function Fo(t,e=[]){let n;switch(t){case"Browser":n=Is(J());break;case"Worker":n=`${Is(J())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${at}/${r}`}/**
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
 */class Iu{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=c=>new Promise((l,h)=>{try{const g=e(c);l(g)}catch(g){h(g)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */async function Eu(t,e={}){return xe(t,"GET","/v2/passwordPolicy",Fe(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
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
 */const Tu=6;class bu{constructor(e){var n,r,s,c;const l=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=l.minPasswordLength)!==null&&n!==void 0?n:Tu,l.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=l.maxPasswordLength),l.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=l.containsLowercaseCharacter),l.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=l.containsUppercaseCharacter),l.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=l.containsNumericCharacter),l.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=l.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(c=e.forceUpgradeOnSignin)!==null&&c!==void 0?c:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,c,l,h;const g={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,g),this.validatePasswordCharacterOptions(e,g),g.isValid&&(g.isValid=(n=g.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),g.isValid&&(g.isValid=(r=g.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),g.isValid&&(g.isValid=(s=g.containsLowercaseLetter)!==null&&s!==void 0?s:!0),g.isValid&&(g.isValid=(c=g.containsUppercaseLetter)!==null&&c!==void 0?c:!0),g.isValid&&(g.isValid=(l=g.containsNumericCharacter)!==null&&l!==void 0?l:!0),g.isValid&&(g.isValid=(h=g.containsNonAlphanumericCharacter)!==null&&h!==void 0?h:!0),g}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,c){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=c))}}/**
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
 */class Au{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Es(this),this.idTokenSubscription=new Es(this),this.beforeStateQueue=new Iu(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Eo,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Te(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await rt.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await So(this,{idToken:e}),r=await Ee._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(le(this.app)){const l=this.app.settings.authIdToken;return l?new Promise(h=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(l).then(h,h))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,c=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const l=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,h=s==null?void 0:s._redirectEventId,g=await this.tryRedirectSignIn(e);(!l||l===h)&&(g!=null&&g.user)&&(s=g.user,c=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(c)try{await this.beforeStateQueue.runMiddleware(s)}catch(l){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(l))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return A(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await vn(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=ru()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(le(this.app))return Promise.reject(Ae(this));const n=e?oe(e):null;return n&&A(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&A(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return le(this.app)?Promise.reject(Ae(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return le(this.app)?Promise.reject(Ae(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Te(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Eu(this),n=new bu(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ue("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await vu(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Te(e)||this._popupRedirectResolver;A(n,this,"argument-error"),this.redirectPersistenceManager=await rt.create(this,[Te(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const c=typeof n=="function"?n:n.next.bind(n);let l=!1;const h=this._isInitialized?Promise.resolve():this._initializationPromise;if(A(h,this,"internal-error"),h.then(()=>{l||c(this.currentUser)}),typeof n=="function"){const g=e.addObserver(n,r,s);return()=>{l=!0,g()}}else{const g=e.addObserver(n);return()=>{l=!0,g()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return A(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Fo(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&eu(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function je(t){return oe(t)}class Es{constructor(e){this.auth=e,this.observer=null,this.addObserver=xc(n=>this.observer=n)}get next(){return A(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let kn={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Su(t){kn=t}function xo(t){return kn.loadJS(t)}function ku(){return kn.recaptchaEnterpriseScript}function Cu(){return kn.gapiScript}function Ru(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const Pu="recaptcha-enterprise",Ou="NO_RECAPTCHA";class Du{constructor(e){this.type=Pu,this.auth=je(e)}async verify(e="verify",n=!1){async function r(c){if(!n){if(c.tenantId==null&&c._agentRecaptchaConfig!=null)return c._agentRecaptchaConfig.siteKey;if(c.tenantId!=null&&c._tenantRecaptchaConfigs[c.tenantId]!==void 0)return c._tenantRecaptchaConfigs[c.tenantId].siteKey}return new Promise(async(l,h)=>{uu(c,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(g=>{if(g.recaptchaKey===void 0)h(new Error("recaptcha Enterprise site key undefined"));else{const E=new lu(g);return c.tenantId==null?c._agentRecaptchaConfig=E:c._tenantRecaptchaConfigs[c.tenantId]=E,l(E.siteKey)}}).catch(g=>{h(g)})})}function s(c,l,h){const g=window.grecaptcha;ys(g)?g.enterprise.ready(()=>{g.enterprise.execute(c,{action:e}).then(E=>{l(E)}).catch(()=>{l(Ou)})}):h(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((c,l)=>{r(this.auth).then(h=>{if(!n&&ys(window.grecaptcha))s(h,c,l);else{if(typeof window>"u"){l(new Error("RecaptchaVerifier is only supported in browser"));return}let g=ku();g.length!==0&&(g+=h),xo(g).then(()=>{s(h,c,l)}).catch(E=>{l(E)})}}).catch(h=>{l(h)})})}}async function Ts(t,e,n,r=!1){const s=new Du(t);let c;try{c=await s.verify(n)}catch{c=await s.verify(n,!0)}const l=Object.assign({},e);return r?Object.assign(l,{captchaResp:c}):Object.assign(l,{captchaResponse:c}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}async function Ri(t,e,n,r){var s;if(!((s=t._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const c=await Ts(t,e,n,n==="getOobCode");return r(t,c)}else return r(t,e).catch(async c=>{if(c.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const l=await Ts(t,e,n,n==="getOobCode");return r(t,l)}else return Promise.reject(c)})}/**
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
 */function Nu(t,e){const n=Xe(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),c=n.getOptions();if(gn(c,e??{}))return s;se(s,"already-initialized")}return n.initialize({options:e})}function Lu(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Te);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Mu(t,e,n){const r=je(t);A(r._canInitEmulator,r,"emulator-config-failed"),A(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,c=jo(e),{host:l,port:h}=Uu(e),g=h===null?"":`:${h}`;r.config.emulator={url:`${c}//${l}${g}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:l,port:h,protocol:c.replace(":",""),options:Object.freeze({disableWarnings:s})}),Fu()}function jo(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Uu(t){const e=jo(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const c=s[1];return{host:c,port:bs(r.substr(c.length+1))}}else{const[c,l]=r.split(":");return{host:c,port:bs(l)}}}function bs(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Fu(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Wi{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Ie("not implemented")}_getIdTokenResponse(e){return Ie("not implemented")}_linkToIdToken(e,n){return Ie("not implemented")}_getReauthenticationResolver(e){return Ie("not implemented")}}async function xu(t,e){return xe(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function ju(t,e){return $t(t,"POST","/v1/accounts:signInWithPassword",Fe(t,e))}/**
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
 */async function Bu(t,e){return $t(t,"POST","/v1/accounts:signInWithEmailLink",Fe(t,e))}async function $u(t,e){return $t(t,"POST","/v1/accounts:signInWithEmailLink",Fe(t,e))}/**
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
 */class Ut extends Wi{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new Ut(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Ut(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ri(e,n,"signInWithPassword",ju);case"emailLink":return Bu(e,{email:this._email,oobCode:this._password});default:se(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ri(e,r,"signUpPassword",xu);case"emailLink":return $u(e,{idToken:n,email:this._email,oobCode:this._password});default:se(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function st(t,e){return $t(t,"POST","/v1/accounts:signInWithIdp",Fe(t,e))}/**
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
 */const Vu="http://localhost";class ze extends Wi{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new ze(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):se("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,c=xi(n,["providerId","signInMethod"]);if(!r||!s)return null;const l=new ze(r,s);return l.idToken=c.idToken||void 0,l.accessToken=c.accessToken||void 0,l.secret=c.secret,l.nonce=c.nonce,l.pendingToken=c.pendingToken||null,l}_getIdTokenResponse(e){const n=this.buildRequest();return st(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,st(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,st(e,n)}buildRequest(){const e={requestUri:Vu,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=jt(n)}return e}}/**
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
 */function Hu(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Wu(t){const e=kt(Ct(t)).link,n=e?kt(Ct(e)).deep_link_id:null,r=kt(Ct(t)).deep_link_id;return(r?kt(Ct(r)).link:null)||r||n||e||t}class Ki{constructor(e){var n,r,s,c,l,h;const g=kt(Ct(e)),E=(n=g.apiKey)!==null&&n!==void 0?n:null,b=(r=g.oobCode)!==null&&r!==void 0?r:null,S=Hu((s=g.mode)!==null&&s!==void 0?s:null);A(E&&b&&S,"argument-error"),this.apiKey=E,this.operation=S,this.code=b,this.continueUrl=(c=g.continueUrl)!==null&&c!==void 0?c:null,this.languageCode=(l=g.languageCode)!==null&&l!==void 0?l:null,this.tenantId=(h=g.tenantId)!==null&&h!==void 0?h:null}static parseLink(e){const n=Wu(e);try{return new Ki(n)}catch{return null}}}/**
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
 */class ct{constructor(){this.providerId=ct.PROVIDER_ID}static credential(e,n){return Ut._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Ki.parseLink(n);return A(r,"argument-error"),Ut._fromEmailAndCode(e,r.code,r.tenantId)}}ct.PROVIDER_ID="password";ct.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ct.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Gi{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Vt extends Gi{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Ne extends Vt{constructor(){super("facebook.com")}static credential(e){return ze._fromParams({providerId:Ne.PROVIDER_ID,signInMethod:Ne.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ne.credentialFromTaggedObject(e)}static credentialFromError(e){return Ne.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ne.credential(e.oauthAccessToken)}catch{return null}}}Ne.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ne.PROVIDER_ID="facebook.com";/**
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
 */class fe extends Vt{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return ze._fromParams({providerId:fe.PROVIDER_ID,signInMethod:fe.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return fe.credentialFromTaggedObject(e)}static credentialFromError(e){return fe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return fe.credential(n,r)}catch{return null}}}fe.GOOGLE_SIGN_IN_METHOD="google.com";fe.PROVIDER_ID="google.com";/**
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
 */class pe extends Vt{constructor(){super("github.com")}static credential(e){return ze._fromParams({providerId:pe.PROVIDER_ID,signInMethod:pe.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return pe.credentialFromTaggedObject(e)}static credentialFromError(e){return pe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return pe.credential(e.oauthAccessToken)}catch{return null}}}pe.GITHUB_SIGN_IN_METHOD="github.com";pe.PROVIDER_ID="github.com";/**
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
 */class Le extends Vt{constructor(){super("twitter.com")}static credential(e,n){return ze._fromParams({providerId:Le.PROVIDER_ID,signInMethod:Le.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Le.credentialFromTaggedObject(e)}static credentialFromError(e){return Le.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Le.credential(n,r)}catch{return null}}}Le.TWITTER_SIGN_IN_METHOD="twitter.com";Le.PROVIDER_ID="twitter.com";/**
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
 */async function Ku(t,e){return $t(t,"POST","/v1/accounts:signUp",Fe(t,e))}/**
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
 */class qe{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const c=await Ee._fromIdTokenResponse(e,r,s),l=As(r);return new qe({user:c,providerId:l,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=As(r);return new qe({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function As(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class _n extends de{constructor(e,n,r,s){var c;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,_n.prototype),this.customData={appName:e.name,tenantId:(c=e.tenantId)!==null&&c!==void 0?c:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new _n(e,n,r,s)}}function Bo(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(c=>{throw c.code==="auth/multi-factor-auth-required"?_n._fromErrorAndOperation(t,c,e,r):c})}async function Gu(t,e,n=!1){const r=await Mt(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return qe._forOperation(t,"link",r)}/**
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
 */async function zu(t,e,n=!1){const{auth:r}=t;if(le(r.app))return Promise.reject(Ae(r));const s="reauthenticate";try{const c=await Mt(t,Bo(r,s,e,t),n);A(c.idToken,r,"internal-error");const l=Vi(c.idToken);A(l,r,"internal-error");const{sub:h}=l;return A(t.uid===h,r,"user-mismatch"),qe._forOperation(t,s,c)}catch(c){throw(c==null?void 0:c.code)==="auth/user-not-found"&&se(r,"user-mismatch"),c}}/**
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
 */async function $o(t,e,n=!1){if(le(t.app))return Promise.reject(Ae(t));const r="signIn",s=await Bo(t,r,e),c=await qe._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(c.user),c}async function qu(t,e){return $o(je(t),e)}/**
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
 */async function Vo(t){const e=je(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function Ju(t,e,n){if(le(t.app))return Promise.reject(Ae(t));const r=je(t),l=await Ri(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Ku).catch(g=>{throw g.code==="auth/password-does-not-meet-requirements"&&Vo(t),g}),h=await qe._fromIdTokenResponse(r,"signIn",l);return await r._updateCurrentUser(h.user),h}function Yu(t,e,n){return le(t.app)?Promise.reject(Ae(t)):qu(oe(t),ct.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Vo(t),r})}function Xu(t,e,n,r){return oe(t).onIdTokenChanged(e,n,r)}function Qu(t,e,n){return oe(t).beforeAuthStateChanged(e,n)}function Zu(t){return oe(t).signOut()}const wn="__sak";/**
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
 */class Ho{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(wn,"1"),this.storage.removeItem(wn),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const eh=1e3,th=10;class Wo extends Ho{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Uo(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((l,h,g)=>{this.notifyListeners(l,g)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const l=this.storage.getItem(r);!n&&this.localCache[r]===l||this.notifyListeners(r,l)},c=this.storage.getItem(r);wu()&&c!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,th):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},eh)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Wo.type="LOCAL";const nh=Wo;/**
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
 */class Ko extends Ho{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Ko.type="SESSION";const Go=Ko;/**
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
 */function ih(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Cn{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Cn(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:c}=n.data,l=this.handlersMap[s];if(!(l!=null&&l.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const h=Array.from(l).map(async E=>E(n.origin,c)),g=await ih(h);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:g})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Cn.receivers=[];/**
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
 */function zi(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class rh{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let c,l;return new Promise((h,g)=>{const E=zi("",20);s.port1.start();const b=setTimeout(()=>{g(new Error("unsupported_event"))},r);l={messageChannel:s,onMessage(S){const k=S;if(k.data.eventId===E)switch(k.data.status){case"ack":clearTimeout(b),c=setTimeout(()=>{g(new Error("timeout"))},3e3);break;case"done":clearTimeout(c),h(k.data.response);break;default:clearTimeout(b),clearTimeout(c),g(new Error("invalid_response"));break}}},this.handlers.add(l),s.port1.addEventListener("message",l.onMessage),this.target.postMessage({eventType:e,eventId:E,data:n},[s.port2])}).finally(()=>{l&&this.removeMessageHandler(l)})}}/**
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
 */function ge(){return window}function sh(t){ge().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */function zo(){return typeof ge().WorkerGlobalScope<"u"&&typeof ge().importScripts=="function"}async function oh(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function ah(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function ch(){return zo()?self:null}/**
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
 */const qo="firebaseLocalStorageDb",lh=1,In="firebaseLocalStorage",Jo="fbase_key";class Ht{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Rn(t,e){return t.transaction([In],e?"readwrite":"readonly").objectStore(In)}function uh(){const t=indexedDB.deleteDatabase(qo);return new Ht(t).toPromise()}function Pi(){const t=indexedDB.open(qo,lh);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(In,{keyPath:Jo})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(In)?e(r):(r.close(),await uh(),e(await Pi()))})})}async function Ss(t,e,n){const r=Rn(t,!0).put({[Jo]:e,value:n});return new Ht(r).toPromise()}async function hh(t,e){const n=Rn(t,!1).get(e),r=await new Ht(n).toPromise();return r===void 0?null:r.value}function ks(t,e){const n=Rn(t,!0).delete(e);return new Ht(n).toPromise()}const dh=800,fh=3;class Yo{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Pi(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>fh)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return zo()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Cn._getInstance(ch()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await oh(),!this.activeServiceWorker)return;this.sender=new rh(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||ah()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Pi();return await Ss(e,wn,"1"),await ks(e,wn),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Ss(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>hh(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>ks(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const c=Rn(s,!1).getAll();return new Ht(c).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:c}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(c)&&(this.notifyListeners(s,c),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),dh)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Yo.type="LOCAL";const ph=Yo;new Bt(3e4,6e4);/**
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
 */function Xo(t,e){return e?Te(e):(A(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class qi extends Wi{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return st(e,this._buildIdpRequest())}_linkToIdToken(e,n){return st(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return st(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function gh(t){return $o(t.auth,new qi(t),t.bypassAuthState)}function mh(t){const{auth:e,user:n}=t;return A(n,e,"internal-error"),zu(n,new qi(t),t.bypassAuthState)}async function yh(t){const{auth:e,user:n}=t;return A(n,e,"internal-error"),Gu(n,new qi(t),t.bypassAuthState)}/**
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
 */class Qo{constructor(e,n,r,s,c=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=c,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:c,error:l,type:h}=e;if(l){this.reject(l);return}const g={auth:this.auth,requestUri:n,sessionId:r,tenantId:c||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(h)(g))}catch(E){this.reject(E)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return gh;case"linkViaPopup":case"linkViaRedirect":return yh;case"reauthViaPopup":case"reauthViaRedirect":return mh;default:se(this.auth,"internal-error")}}resolve(e){ke(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ke(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const vh=new Bt(2e3,1e4);async function Zo(t,e,n){if(le(t.app))return Promise.reject(he(t,"operation-not-supported-in-this-environment"));const r=je(t);tu(t,e,Gi);const s=Xo(r,n);return new Ke(r,"signInViaPopup",e,s).executeNotNull()}class Ke extends Qo{constructor(e,n,r,s,c){super(e,n,s,c),this.provider=r,this.authWindow=null,this.pollId=null,Ke.currentPopupAction&&Ke.currentPopupAction.cancel(),Ke.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return A(e,this.auth,"internal-error"),e}async onExecution(){ke(this.filter.length===1,"Popup operations only handle one event");const e=zi();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(he(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(he(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ke.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(he(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,vh.get())};e()}}Ke.currentPopupAction=null;/**
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
 */const _h="pendingRedirect",dn=new Map;class wh extends Qo{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=dn.get(this.auth._key());if(!e){try{const r=await Ih(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}dn.set(this.auth._key(),e)}return this.bypassAuthState||dn.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Ih(t,e){const n=bh(e),r=Th(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function Eh(t,e){dn.set(t._key(),e)}function Th(t){return Te(t._redirectPersistence)}function bh(t){return hn(_h,t.config.apiKey,t.name)}async function Ah(t,e,n=!1){if(le(t.app))return Promise.reject(Ae(t));const r=je(t),s=Xo(r,e),l=await new wh(r,s,n).execute();return l&&!n&&(delete l.user._redirectEventId,await r._persistUserIfCurrent(l.user),await r._setRedirectUser(null,e)),l}/**
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
 */const Sh=10*60*1e3;class kh{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Ch(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!ea(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(he(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Sh&&this.cachedEventUids.clear(),this.cachedEventUids.has(Cs(e))}saveEventToCache(e){this.cachedEventUids.add(Cs(e)),this.lastProcessedEventTime=Date.now()}}function Cs(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function ea({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Ch(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return ea(t);default:return!1}}/**
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
 */async function Rh(t,e={}){return xe(t,"GET","/v1/projects",e)}/**
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
 */const Ph=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Oh=/^https?/;async function Dh(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Rh(t);for(const n of e)try{if(Nh(n))return}catch{}se(t,"unauthorized-domain")}function Nh(t){const e=ki(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const l=new URL(t);return l.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&l.hostname===r}if(!Oh.test(n))return!1;if(Ph.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const Lh=new Bt(3e4,6e4);function Rs(){const t=ge().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Mh(t){return new Promise((e,n)=>{var r,s,c;function l(){Rs(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Rs(),n(he(t,"network-request-failed"))},timeout:Lh.get()})}if(!((s=(r=ge().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((c=ge().gapi)===null||c===void 0)&&c.load)l();else{const h=Ru("iframefcb");return ge()[h]=()=>{gapi.load?l():n(he(t,"network-request-failed"))},xo(`${Cu()}?onload=${h}`).catch(g=>n(g))}}).catch(e=>{throw fn=null,e})}let fn=null;function Uh(t){return fn=fn||Mh(t),fn}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const Fh=new Bt(5e3,15e3),xh="__/auth/iframe",jh="emulator/auth/iframe",Bh={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},$h=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Vh(t){const e=t.config;A(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?$i(e,jh):`https://${t.config.authDomain}/${xh}`,r={apiKey:e.apiKey,appName:t.name,v:at},s=$h.get(t.config.apiHost);s&&(r.eid=s);const c=t._getFrameworks();return c.length&&(r.fw=c.join(",")),`${n}?${jt(r).slice(1)}`}async function Hh(t){const e=await Uh(t),n=ge().gapi;return A(n,t,"internal-error"),e.open({where:document.body,url:Vh(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Bh,dontclear:!0},r=>new Promise(async(s,c)=>{await r.restyle({setHideOnLeave:!1});const l=he(t,"network-request-failed"),h=ge().setTimeout(()=>{c(l)},Fh.get());function g(){ge().clearTimeout(h),s(r)}r.ping(g).then(g,()=>{c(l)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const Wh={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Kh=500,Gh=600,zh="_blank",qh="http://localhost";class Ps{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Jh(t,e,n,r=Kh,s=Gh){const c=Math.max((window.screen.availHeight-s)/2,0).toString(),l=Math.max((window.screen.availWidth-r)/2,0).toString();let h="";const g=Object.assign(Object.assign({},Wh),{width:r.toString(),height:s.toString(),top:c,left:l}),E=J().toLowerCase();n&&(h=Oo(E)?zh:n),Ro(E)&&(e=e||qh,g.scrollbars="yes");const b=Object.entries(g).reduce((k,[N,R])=>`${k}${N}=${R},`,"");if(_u(E)&&h!=="_self")return Yh(e||"",h),new Ps(null);const S=window.open(e||"",h,b);A(S,t,"popup-blocked");try{S.focus()}catch{}return new Ps(S)}function Yh(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const Xh="__/auth/handler",Qh="emulator/auth/handler",Zh=encodeURIComponent("fac");async function Os(t,e,n,r,s,c){A(t.config.authDomain,t,"auth-domain-config-required"),A(t.config.apiKey,t,"invalid-api-key");const l={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:at,eventId:s};if(e instanceof Gi){e.setDefaultLanguage(t.languageCode),l.providerId=e.providerId||"",Fc(e.getCustomParameters())||(l.customParameters=JSON.stringify(e.getCustomParameters()));for(const[b,S]of Object.entries({}))l[b]=S}if(e instanceof Vt){const b=e.getScopes().filter(S=>S!=="");b.length>0&&(l.scopes=b.join(","))}t.tenantId&&(l.tid=t.tenantId);const h=l;for(const b of Object.keys(h))h[b]===void 0&&delete h[b];const g=await t._getAppCheckToken(),E=g?`#${Zh}=${encodeURIComponent(g)}`:"";return`${ed(t)}?${jt(h).slice(1)}${E}`}function ed({config:t}){return t.emulator?$i(t,Qh):`https://${t.authDomain}/${Xh}`}/**
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
 */const di="webStorageSupport";class td{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Go,this._completeRedirectFn=Ah,this._overrideRedirectResult=Eh}async _openPopup(e,n,r,s){var c;ke((c=this.eventManagers[e._key()])===null||c===void 0?void 0:c.manager,"_initialize() not called before _openPopup()");const l=await Os(e,n,r,ki(),s);return Jh(e,l,zi())}async _openRedirect(e,n,r,s){await this._originValidation(e);const c=await Os(e,n,r,ki(),s);return sh(c),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:c}=this.eventManagers[n];return s?Promise.resolve(s):(ke(c,"If manager is not set, promise should be"),c)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await Hh(e),r=new kh(e);return n.register("authEvent",s=>(A(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(di,{type:di},s=>{var c;const l=(c=s==null?void 0:s[0])===null||c===void 0?void 0:c[di];l!==void 0&&n(!!l),se(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Dh(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Uo()||Po()||Hi()}}const nd=td;var Ds="@firebase/auth",Ns="1.7.9";/**
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
 */class id{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){A(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function rd(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function sd(t){ne(new ee("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),c=e.getProvider("app-check-internal"),{apiKey:l,authDomain:h}=r.options;A(l&&!l.includes(":"),"invalid-api-key",{appName:r.name});const g={apiKey:l,authDomain:h,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Fo(t)},E=new Au(r,s,c,g);return Lu(E,n),E},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),ne(new ee("auth-internal",e=>{const n=je(e.getProvider("auth").getImmediate());return(r=>new id(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),W(Ds,Ns,rd(t)),W(Ds,Ns,"esm2017")}/**
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
 */const od=5*60,ad=po("authIdTokenMaxAge")||od;let Ls=null;const cd=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>ad)return;const s=n==null?void 0:n.token;Ls!==s&&(Ls=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function ta(t=Sn()){const e=Xe(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Nu(t,{popupRedirectResolver:nd,persistence:[ph,nh,Go]}),r=po("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const c=new URL(r,location.origin);if(location.origin===c.origin){const l=cd(c.toString());Qu(n,l,()=>l(n.currentUser)),Xu(n,h=>l(h))}}const s=uo("auth");return s&&Mu(n,`http://${s}`),n}function ld(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}Su({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const c=he("internal-error");c.customData=s,n(c)},r.type="text/javascript",r.charset="UTF-8",ld().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});sd("Browser");const na="@firebase/installations",Ji="0.6.9";/**
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
 */const ia=1e4,ra=`w:${Ji}`,sa="FIS_v2",ud="https://firebaseinstallations.googleapis.com/v1",hd=60*60*1e3,dd="installations",fd="Installations";/**
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
 */const pd={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Je=new Ue(dd,fd,pd);function oa(t){return t instanceof de&&t.code.includes("request-failed")}/**
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
 */function aa({projectId:t}){return`${ud}/projects/${t}/installations`}function ca(t){return{token:t.token,requestStatus:2,expiresIn:md(t.expiresIn),creationTime:Date.now()}}async function la(t,e){const r=(await e.json()).error;return Je.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function ua({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function gd(t,{refreshToken:e}){const n=ua(t);return n.append("Authorization",yd(e)),n}async function ha(t){const e=await t();return e.status>=500&&e.status<600?t():e}function md(t){return Number(t.replace("s","000"))}function yd(t){return`${sa} ${t}`}/**
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
 */async function vd({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=aa(t),s=ua(t),c=e.getImmediate({optional:!0});if(c){const E=await c.getHeartbeatsHeader();E&&s.append("x-firebase-client",E)}const l={fid:n,authVersion:sa,appId:t.appId,sdkVersion:ra},h={method:"POST",headers:s,body:JSON.stringify(l)},g=await ha(()=>fetch(r,h));if(g.ok){const E=await g.json();return{fid:E.fid||n,registrationStatus:2,refreshToken:E.refreshToken,authToken:ca(E.authToken)}}else throw await la("Create Installation",g)}/**
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
 */function da(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function _d(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const wd=/^[cdef][\w-]{21}$/,Oi="";function Id(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=Ed(t);return wd.test(n)?n:Oi}catch{return Oi}}function Ed(t){return _d(t).substr(0,22)}/**
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
 */function Pn(t){return`${t.appName}!${t.appId}`}/**
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
 */const fa=new Map;function pa(t,e){const n=Pn(t);ga(n,e),Td(n,e)}function ga(t,e){const n=fa.get(t);if(n)for(const r of n)r(e)}function Td(t,e){const n=bd();n&&n.postMessage({key:t,fid:e}),Ad()}let Ge=null;function bd(){return!Ge&&"BroadcastChannel"in self&&(Ge=new BroadcastChannel("[Firebase] FID Change"),Ge.onmessage=t=>{ga(t.data.key,t.data.fid)}),Ge}function Ad(){fa.size===0&&Ge&&(Ge.close(),Ge=null)}/**
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
 */const Sd="firebase-installations-database",kd=1,Ye="firebase-installations-store";let fi=null;function Yi(){return fi||(fi=An(Sd,kd,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Ye)}}})),fi}async function En(t,e){const n=Pn(t),s=(await Yi()).transaction(Ye,"readwrite"),c=s.objectStore(Ye),l=await c.get(n);return await c.put(e,n),await s.done,(!l||l.fid!==e.fid)&&pa(t,e.fid),e}async function ma(t){const e=Pn(t),r=(await Yi()).transaction(Ye,"readwrite");await r.objectStore(Ye).delete(e),await r.done}async function On(t,e){const n=Pn(t),s=(await Yi()).transaction(Ye,"readwrite"),c=s.objectStore(Ye),l=await c.get(n),h=e(l);return h===void 0?await c.delete(n):await c.put(h,n),await s.done,h&&(!l||l.fid!==h.fid)&&pa(t,h.fid),h}/**
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
 */async function Xi(t){let e;const n=await On(t.appConfig,r=>{const s=Cd(r),c=Rd(t,s);return e=c.registrationPromise,c.installationEntry});return n.fid===Oi?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function Cd(t){const e=t||{fid:Id(),registrationStatus:0};return ya(e)}function Rd(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(Je.create("app-offline"));return{installationEntry:e,registrationPromise:s}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=Pd(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:Od(t)}:{installationEntry:e}}async function Pd(t,e){try{const n=await vd(t,e);return En(t.appConfig,n)}catch(n){throw oa(n)&&n.customData.serverCode===409?await ma(t.appConfig):await En(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function Od(t){let e=await Ms(t.appConfig);for(;e.registrationStatus===1;)await da(100),e=await Ms(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await Xi(t);return r||n}return e}function Ms(t){return On(t,e=>{if(!e)throw Je.create("installation-not-found");return ya(e)})}function ya(t){return Dd(t)?{fid:t.fid,registrationStatus:0}:t}function Dd(t){return t.registrationStatus===1&&t.registrationTime+ia<Date.now()}/**
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
 */async function Nd({appConfig:t,heartbeatServiceProvider:e},n){const r=Ld(t,n),s=gd(t,n),c=e.getImmediate({optional:!0});if(c){const E=await c.getHeartbeatsHeader();E&&s.append("x-firebase-client",E)}const l={installation:{sdkVersion:ra,appId:t.appId}},h={method:"POST",headers:s,body:JSON.stringify(l)},g=await ha(()=>fetch(r,h));if(g.ok){const E=await g.json();return ca(E)}else throw await la("Generate Auth Token",g)}function Ld(t,{fid:e}){return`${aa(t)}/${e}/authTokens:generate`}/**
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
 */async function Qi(t,e=!1){let n;const r=await On(t.appConfig,c=>{if(!va(c))throw Je.create("not-registered");const l=c.authToken;if(!e&&Fd(l))return c;if(l.requestStatus===1)return n=Md(t,e),c;{if(!navigator.onLine)throw Je.create("app-offline");const h=jd(c);return n=Ud(t,h),h}});return n?await n:r.authToken}async function Md(t,e){let n=await Us(t.appConfig);for(;n.authToken.requestStatus===1;)await da(100),n=await Us(t.appConfig);const r=n.authToken;return r.requestStatus===0?Qi(t,e):r}function Us(t){return On(t,e=>{if(!va(e))throw Je.create("not-registered");const n=e.authToken;return Bd(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function Ud(t,e){try{const n=await Nd(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await En(t.appConfig,r),n}catch(n){if(oa(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await ma(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await En(t.appConfig,r)}throw n}}function va(t){return t!==void 0&&t.registrationStatus===2}function Fd(t){return t.requestStatus===2&&!xd(t)}function xd(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+hd}function jd(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function Bd(t){return t.requestStatus===1&&t.requestTime+ia<Date.now()}/**
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
 */async function $d(t){const e=t,{installationEntry:n,registrationPromise:r}=await Xi(e);return r?r.catch(console.error):Qi(e).catch(console.error),n.fid}/**
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
 */async function Vd(t,e=!1){const n=t;return await Hd(n),(await Qi(n,e)).token}async function Hd(t){const{registrationPromise:e}=await Xi(t);e&&await e}/**
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
 */function Wd(t){if(!t||!t.options)throw pi("App Configuration");if(!t.name)throw pi("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw pi(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function pi(t){return Je.create("missing-app-config-values",{valueName:t})}/**
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
 */const _a="installations",Kd="installations-internal",Gd=t=>{const e=t.getProvider("app").getImmediate(),n=Wd(e),r=Xe(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},zd=t=>{const e=t.getProvider("app").getImmediate(),n=Xe(e,_a).getImmediate();return{getId:()=>$d(n),getToken:s=>Vd(n,s)}};function qd(){ne(new ee(_a,Gd,"PUBLIC")),ne(new ee(Kd,zd,"PRIVATE"))}qd();W(na,Ji);W(na,Ji,"esm2017");/**
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
 */const Jd="/firebase-messaging-sw.js",Yd="/firebase-cloud-messaging-push-scope",wa="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",Xd="https://fcmregistrations.googleapis.com/v1",Ia="google.c.a.c_id",Qd="google.c.a.c_l",Zd="google.c.a.ts",ef="google.c.a.e";var Fs;(function(t){t[t.DATA_MESSAGE=1]="DATA_MESSAGE",t[t.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION"})(Fs||(Fs={}));/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License. You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the License
 * is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
 * or implied. See the License for the specific language governing permissions and limitations under
 * the License.
 */var Ft;(function(t){t.PUSH_RECEIVED="push-received",t.NOTIFICATION_CLICKED="notification-clicked"})(Ft||(Ft={}));/**
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
 */function we(t){const e=new Uint8Array(t);return btoa(String.fromCharCode(...e)).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function tf(t){const e="=".repeat((4-t.length%4)%4),n=(t+e).replace(/\-/g,"+").replace(/_/g,"/"),r=atob(n),s=new Uint8Array(r.length);for(let c=0;c<r.length;++c)s[c]=r.charCodeAt(c);return s}/**
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
 */const gi="fcm_token_details_db",nf=5,xs="fcm_token_object_Store";async function rf(t){if("databases"in indexedDB&&!(await indexedDB.databases()).map(c=>c.name).includes(gi))return null;let e=null;return(await An(gi,nf,{upgrade:async(r,s,c,l)=>{var h;if(s<2||!r.objectStoreNames.contains(xs))return;const g=l.objectStore(xs),E=await g.index("fcmSenderId").get(t);if(await g.clear(),!!E){if(s===2){const b=E;if(!b.auth||!b.p256dh||!b.endpoint)return;e={token:b.fcmToken,createTime:(h=b.createTime)!==null&&h!==void 0?h:Date.now(),subscriptionOptions:{auth:b.auth,p256dh:b.p256dh,endpoint:b.endpoint,swScope:b.swScope,vapidKey:typeof b.vapidKey=="string"?b.vapidKey:we(b.vapidKey)}}}else if(s===3){const b=E;e={token:b.fcmToken,createTime:b.createTime,subscriptionOptions:{auth:we(b.auth),p256dh:we(b.p256dh),endpoint:b.endpoint,swScope:b.swScope,vapidKey:we(b.vapidKey)}}}else if(s===4){const b=E;e={token:b.fcmToken,createTime:b.createTime,subscriptionOptions:{auth:we(b.auth),p256dh:we(b.p256dh),endpoint:b.endpoint,swScope:b.swScope,vapidKey:we(b.vapidKey)}}}}}})).close(),await ci(gi),await ci("fcm_vapid_details_db"),await ci("undefined"),sf(e)?e:null}function sf(t){if(!t||!t.subscriptionOptions)return!1;const{subscriptionOptions:e}=t;return typeof t.createTime=="number"&&t.createTime>0&&typeof t.token=="string"&&t.token.length>0&&typeof e.auth=="string"&&e.auth.length>0&&typeof e.p256dh=="string"&&e.p256dh.length>0&&typeof e.endpoint=="string"&&e.endpoint.length>0&&typeof e.swScope=="string"&&e.swScope.length>0&&typeof e.vapidKey=="string"&&e.vapidKey.length>0}/**
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
 */const of="firebase-messaging-database",af=1,xt="firebase-messaging-store";let mi=null;function Ea(){return mi||(mi=An(of,af,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(xt)}}})),mi}async function cf(t){const e=Ta(t),r=await(await Ea()).transaction(xt).objectStore(xt).get(e);if(r)return r;{const s=await rf(t.appConfig.senderId);if(s)return await Zi(t,s),s}}async function Zi(t,e){const n=Ta(t),s=(await Ea()).transaction(xt,"readwrite");return await s.objectStore(xt).put(e,n),await s.done,e}function Ta({appConfig:t}){return t.appId}/**
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
 */const lf={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"only-available-in-window":"This method is available in a Window context.","only-available-in-sw":"This method is available in a service worker context.","permission-default":"The notification permission was not granted and dismissed instead.","permission-blocked":"The notification permission was not granted and blocked instead.","unsupported-browser":"This browser doesn't support the API's required to use the Firebase SDK.","indexed-db-unsupported":"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)","failed-service-worker-registration":"We are unable to register the default service worker. {$browserErrorMessage}","token-subscribe-failed":"A problem occurred while subscribing the user to FCM: {$errorInfo}","token-subscribe-no-token":"FCM returned no token when subscribing the user to push.","token-unsubscribe-failed":"A problem occurred while unsubscribing the user from FCM: {$errorInfo}","token-update-failed":"A problem occurred while updating the user from FCM: {$errorInfo}","token-update-no-token":"FCM returned no token when updating the user to push.","use-sw-after-get-token":"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.","invalid-sw-registration":"The input to useServiceWorker() must be a ServiceWorkerRegistration.","invalid-bg-handler":"The input to setBackgroundMessageHandler() must be a function.","invalid-vapid-key":"The public VAPID key must be a string.","use-vapid-key-after-get-token":"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."},q=new Ue("messaging","Messaging",lf);/**
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
 */async function uf(t,e){const n=await tr(t),r=ba(e),s={method:"POST",headers:n,body:JSON.stringify(r)};let c;try{c=await(await fetch(er(t.appConfig),s)).json()}catch(l){throw q.create("token-subscribe-failed",{errorInfo:l==null?void 0:l.toString()})}if(c.error){const l=c.error.message;throw q.create("token-subscribe-failed",{errorInfo:l})}if(!c.token)throw q.create("token-subscribe-no-token");return c.token}async function hf(t,e){const n=await tr(t),r=ba(e.subscriptionOptions),s={method:"PATCH",headers:n,body:JSON.stringify(r)};let c;try{c=await(await fetch(`${er(t.appConfig)}/${e.token}`,s)).json()}catch(l){throw q.create("token-update-failed",{errorInfo:l==null?void 0:l.toString()})}if(c.error){const l=c.error.message;throw q.create("token-update-failed",{errorInfo:l})}if(!c.token)throw q.create("token-update-no-token");return c.token}async function df(t,e){const r={method:"DELETE",headers:await tr(t)};try{const c=await(await fetch(`${er(t.appConfig)}/${e}`,r)).json();if(c.error){const l=c.error.message;throw q.create("token-unsubscribe-failed",{errorInfo:l})}}catch(s){throw q.create("token-unsubscribe-failed",{errorInfo:s==null?void 0:s.toString()})}}function er({projectId:t}){return`${Xd}/projects/${t}/registrations`}async function tr({appConfig:t,installations:e}){const n=await e.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t.apiKey,"x-goog-firebase-installations-auth":`FIS ${n}`})}function ba({p256dh:t,auth:e,endpoint:n,vapidKey:r}){const s={web:{endpoint:n,auth:e,p256dh:t}};return r!==wa&&(s.web.applicationPubKey=r),s}/**
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
 */const ff=7*24*60*60*1e3;async function pf(t){const e=await mf(t.swRegistration,t.vapidKey),n={vapidKey:t.vapidKey,swScope:t.swRegistration.scope,endpoint:e.endpoint,auth:we(e.getKey("auth")),p256dh:we(e.getKey("p256dh"))},r=await cf(t.firebaseDependencies);if(r){if(yf(r.subscriptionOptions,n))return Date.now()>=r.createTime+ff?gf(t,{token:r.token,createTime:Date.now(),subscriptionOptions:n}):r.token;try{await df(t.firebaseDependencies,r.token)}catch(s){console.warn(s)}return js(t.firebaseDependencies,n)}else return js(t.firebaseDependencies,n)}async function gf(t,e){try{const n=await hf(t.firebaseDependencies,e),r=Object.assign(Object.assign({},e),{token:n,createTime:Date.now()});return await Zi(t.firebaseDependencies,r),n}catch(n){throw n}}async function js(t,e){const r={token:await uf(t,e),createTime:Date.now(),subscriptionOptions:e};return await Zi(t,r),r.token}async function mf(t,e){const n=await t.pushManager.getSubscription();return n||t.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:tf(e)})}function yf(t,e){const n=e.vapidKey===t.vapidKey,r=e.endpoint===t.endpoint,s=e.auth===t.auth,c=e.p256dh===t.p256dh;return n&&r&&s&&c}/**
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
 */function Bs(t){const e={from:t.from,collapseKey:t.collapse_key,messageId:t.fcmMessageId};return vf(e,t),_f(e,t),wf(e,t),e}function vf(t,e){if(!e.notification)return;t.notification={};const n=e.notification.title;n&&(t.notification.title=n);const r=e.notification.body;r&&(t.notification.body=r);const s=e.notification.image;s&&(t.notification.image=s);const c=e.notification.icon;c&&(t.notification.icon=c)}function _f(t,e){e.data&&(t.data=e.data)}function wf(t,e){var n,r,s,c,l;if(!e.fcmOptions&&!(!((n=e.notification)===null||n===void 0)&&n.click_action))return;t.fcmOptions={};const h=(s=(r=e.fcmOptions)===null||r===void 0?void 0:r.link)!==null&&s!==void 0?s:(c=e.notification)===null||c===void 0?void 0:c.click_action;h&&(t.fcmOptions.link=h);const g=(l=e.fcmOptions)===null||l===void 0?void 0:l.analytics_label;g&&(t.fcmOptions.analyticsLabel=g)}/**
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
 */function If(t){return typeof t=="object"&&!!t&&Ia in t}/**
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
 */function Ef(t){if(!t||!t.options)throw yi("App Configuration Object");if(!t.name)throw yi("App Name");const e=["projectId","apiKey","appId","messagingSenderId"],{options:n}=t;for(const r of e)if(!n[r])throw yi(r);return{appName:t.name,projectId:n.projectId,apiKey:n.apiKey,appId:n.appId,senderId:n.messagingSenderId}}function yi(t){return q.create("missing-app-config-values",{valueName:t})}/**
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
 */class Tf{constructor(e,n,r){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const s=Ef(e);this.firebaseDependencies={app:e,appConfig:s,installations:n,analyticsProvider:r}}_delete(){return Promise.resolve()}}/**
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
 */async function bf(t){try{t.swRegistration=await navigator.serviceWorker.register(Jd,{scope:Yd}),t.swRegistration.update().catch(()=>{})}catch(e){throw q.create("failed-service-worker-registration",{browserErrorMessage:e==null?void 0:e.message})}}/**
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
 */async function Af(t,e){if(!e&&!t.swRegistration&&await bf(t),!(!e&&t.swRegistration)){if(!(e instanceof ServiceWorkerRegistration))throw q.create("invalid-sw-registration");t.swRegistration=e}}/**
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
 */async function Sf(t,e){e?t.vapidKey=e:t.vapidKey||(t.vapidKey=wa)}/**
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
 */async function kf(t,e){if(!navigator)throw q.create("only-available-in-window");if(Notification.permission==="default"&&await Notification.requestPermission(),Notification.permission!=="granted")throw q.create("permission-blocked");return await Sf(t,e==null?void 0:e.vapidKey),await Af(t,e==null?void 0:e.serviceWorkerRegistration),pf(t)}/**
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
 */async function Cf(t,e,n){const r=Rf(e);(await t.firebaseDependencies.analyticsProvider.get()).logEvent(r,{message_id:n[Ia],message_name:n[Qd],message_time:n[Zd],message_device_time:Math.floor(Date.now()/1e3)})}function Rf(t){switch(t){case Ft.NOTIFICATION_CLICKED:return"notification_open";case Ft.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}/**
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
 */async function Pf(t,e){const n=e.data;if(!n.isFirebaseMessaging)return;t.onMessageHandler&&n.messageType===Ft.PUSH_RECEIVED&&(typeof t.onMessageHandler=="function"?t.onMessageHandler(Bs(n)):t.onMessageHandler.next(Bs(n)));const r=n.data;If(r)&&r[ef]==="1"&&await Cf(t,n.messageType,r)}const $s="@firebase/messaging",Vs="0.12.12";/**
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
 */const Of=t=>{const e=new Tf(t.getProvider("app").getImmediate(),t.getProvider("installations-internal").getImmediate(),t.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",n=>Pf(e,n)),e},Df=t=>{const e=t.getProvider("messaging").getImmediate();return{getToken:r=>kf(e,r)}};function Nf(){ne(new ee("messaging",Of,"PUBLIC")),ne(new ee("messaging-internal",Df,"PRIVATE")),W($s,Vs),W($s,Vs,"esm2017")}/**
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
 */async function Lf(){try{await Mi()}catch{return!1}return typeof window<"u"&&Li()&&mo()&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}/**
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
 */function Mf(t=Sn()){return Lf().then(e=>{if(!e)throw q.create("unsupported-browser")},e=>{throw q.create("indexed-db-unsupported")}),Xe(oe(t),"messaging").getImmediate()}Nf();/**
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
 */const Aa="functions";/**
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
 */class Uf{constructor(e,n,r){this.auth=null,this.messaging=null,this.appCheck=null,this.auth=e.getImmediate({optional:!0}),this.messaging=n.getImmediate({optional:!0}),this.auth||e.get().then(s=>this.auth=s,()=>{}),this.messaging||n.get().then(s=>this.messaging=s,()=>{}),this.appCheck||r.get().then(s=>this.appCheck=s,()=>{})}async getAuthToken(){if(this.auth)try{const e=await this.auth.getToken();return e==null?void 0:e.accessToken}catch{return}}async getMessagingToken(){if(!(!this.messaging||!("Notification"in self)||Notification.permission!=="granted"))try{return await this.messaging.getToken()}catch{return}}async getAppCheckToken(e){if(this.appCheck){const n=e?await this.appCheck.getLimitedUseToken():await this.appCheck.getToken();return n.error?null:n.token}return null}async getContext(e){const n=await this.getAuthToken(),r=await this.getMessagingToken(),s=await this.getAppCheckToken(e);return{authToken:n,messagingToken:r,appCheckToken:s}}}/**
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
 */const Di="us-central1";class Ff{constructor(e,n,r,s,c=Di,l){this.app=e,this.fetchImpl=l,this.emulatorOrigin=null,this.contextProvider=new Uf(n,r,s),this.cancelAllRequests=new Promise(h=>{this.deleteService=()=>Promise.resolve(h())});try{const h=new URL(c);this.customDomain=h.origin+(h.pathname==="/"?"":h.pathname),this.region=Di}catch{this.customDomain=null,this.region=c}}_delete(){return this.deleteService()}_url(e){const n=this.app.options.projectId;return this.emulatorOrigin!==null?`${this.emulatorOrigin}/${n}/${this.region}/${e}`:this.customDomain!==null?`${this.customDomain}/${e}`:`https://${this.region}-${n}.cloudfunctions.net/${e}`}}function xf(t,e,n){t.emulatorOrigin=`http://${e}:${n}`}const Hs="@firebase/functions",Ws="0.11.8";/**
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
 */const jf="auth-internal",Bf="app-check-internal",$f="messaging-internal";function Vf(t,e){const n=(r,{instanceIdentifier:s})=>{const c=r.getProvider("app").getImmediate(),l=r.getProvider(jf),h=r.getProvider($f),g=r.getProvider(Bf);return new Ff(c,l,h,g,s,t)};ne(new ee(Aa,n,"PUBLIC").setMultipleInstances(!0)),W(Hs,Ws,e),W(Hs,Ws,"esm2017")}/**
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
 */function Hf(t=Sn(),e=Di){const r=Xe(oe(t),Aa).getImmediate({identifier:e}),s=ho("functions");return s&&Wf(r,...s),r}function Wf(t,e,n){xf(oe(t),e,n)}Vf(fetch.bind(self));const Kf={apiKey:"AIzaSyBfu4YI21vaAPeW6WbElRL56PHbxl6knb0",authDomain:"ag-home-3db3f.firebaseapp.com",projectId:"ag-home-3db3f",storageBucket:"ag-home-3db3f.firebasestorage.app",messagingSenderId:"384219186370",appId:"1:384219186370:web:b6b69a39d6cc5affa8e75b",measurementId:"G-5W214BQMNJ"},nr=Fi(Kf),lt=ta(nr);Mf(nr);Hf(nr);var Ks=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Sa;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(v,d){function p(){}p.prototype=d.prototype,v.D=d.prototype,v.prototype=new p,v.prototype.constructor=v,v.C=function(m,y,w){for(var f=Array(arguments.length-2),ye=2;ye<arguments.length;ye++)f[ye-2]=arguments[ye];return d.prototype[y].apply(m,f)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(v,d,p){p||(p=0);var m=Array(16);if(typeof d=="string")for(var y=0;16>y;++y)m[y]=d.charCodeAt(p++)|d.charCodeAt(p++)<<8|d.charCodeAt(p++)<<16|d.charCodeAt(p++)<<24;else for(y=0;16>y;++y)m[y]=d[p++]|d[p++]<<8|d[p++]<<16|d[p++]<<24;d=v.g[0],p=v.g[1],y=v.g[2];var w=v.g[3],f=d+(w^p&(y^w))+m[0]+3614090360&4294967295;d=p+(f<<7&4294967295|f>>>25),f=w+(y^d&(p^y))+m[1]+3905402710&4294967295,w=d+(f<<12&4294967295|f>>>20),f=y+(p^w&(d^p))+m[2]+606105819&4294967295,y=w+(f<<17&4294967295|f>>>15),f=p+(d^y&(w^d))+m[3]+3250441966&4294967295,p=y+(f<<22&4294967295|f>>>10),f=d+(w^p&(y^w))+m[4]+4118548399&4294967295,d=p+(f<<7&4294967295|f>>>25),f=w+(y^d&(p^y))+m[5]+1200080426&4294967295,w=d+(f<<12&4294967295|f>>>20),f=y+(p^w&(d^p))+m[6]+2821735955&4294967295,y=w+(f<<17&4294967295|f>>>15),f=p+(d^y&(w^d))+m[7]+4249261313&4294967295,p=y+(f<<22&4294967295|f>>>10),f=d+(w^p&(y^w))+m[8]+1770035416&4294967295,d=p+(f<<7&4294967295|f>>>25),f=w+(y^d&(p^y))+m[9]+2336552879&4294967295,w=d+(f<<12&4294967295|f>>>20),f=y+(p^w&(d^p))+m[10]+4294925233&4294967295,y=w+(f<<17&4294967295|f>>>15),f=p+(d^y&(w^d))+m[11]+2304563134&4294967295,p=y+(f<<22&4294967295|f>>>10),f=d+(w^p&(y^w))+m[12]+1804603682&4294967295,d=p+(f<<7&4294967295|f>>>25),f=w+(y^d&(p^y))+m[13]+4254626195&4294967295,w=d+(f<<12&4294967295|f>>>20),f=y+(p^w&(d^p))+m[14]+2792965006&4294967295,y=w+(f<<17&4294967295|f>>>15),f=p+(d^y&(w^d))+m[15]+1236535329&4294967295,p=y+(f<<22&4294967295|f>>>10),f=d+(y^w&(p^y))+m[1]+4129170786&4294967295,d=p+(f<<5&4294967295|f>>>27),f=w+(p^y&(d^p))+m[6]+3225465664&4294967295,w=d+(f<<9&4294967295|f>>>23),f=y+(d^p&(w^d))+m[11]+643717713&4294967295,y=w+(f<<14&4294967295|f>>>18),f=p+(w^d&(y^w))+m[0]+3921069994&4294967295,p=y+(f<<20&4294967295|f>>>12),f=d+(y^w&(p^y))+m[5]+3593408605&4294967295,d=p+(f<<5&4294967295|f>>>27),f=w+(p^y&(d^p))+m[10]+38016083&4294967295,w=d+(f<<9&4294967295|f>>>23),f=y+(d^p&(w^d))+m[15]+3634488961&4294967295,y=w+(f<<14&4294967295|f>>>18),f=p+(w^d&(y^w))+m[4]+3889429448&4294967295,p=y+(f<<20&4294967295|f>>>12),f=d+(y^w&(p^y))+m[9]+568446438&4294967295,d=p+(f<<5&4294967295|f>>>27),f=w+(p^y&(d^p))+m[14]+3275163606&4294967295,w=d+(f<<9&4294967295|f>>>23),f=y+(d^p&(w^d))+m[3]+4107603335&4294967295,y=w+(f<<14&4294967295|f>>>18),f=p+(w^d&(y^w))+m[8]+1163531501&4294967295,p=y+(f<<20&4294967295|f>>>12),f=d+(y^w&(p^y))+m[13]+2850285829&4294967295,d=p+(f<<5&4294967295|f>>>27),f=w+(p^y&(d^p))+m[2]+4243563512&4294967295,w=d+(f<<9&4294967295|f>>>23),f=y+(d^p&(w^d))+m[7]+1735328473&4294967295,y=w+(f<<14&4294967295|f>>>18),f=p+(w^d&(y^w))+m[12]+2368359562&4294967295,p=y+(f<<20&4294967295|f>>>12),f=d+(p^y^w)+m[5]+4294588738&4294967295,d=p+(f<<4&4294967295|f>>>28),f=w+(d^p^y)+m[8]+2272392833&4294967295,w=d+(f<<11&4294967295|f>>>21),f=y+(w^d^p)+m[11]+1839030562&4294967295,y=w+(f<<16&4294967295|f>>>16),f=p+(y^w^d)+m[14]+4259657740&4294967295,p=y+(f<<23&4294967295|f>>>9),f=d+(p^y^w)+m[1]+2763975236&4294967295,d=p+(f<<4&4294967295|f>>>28),f=w+(d^p^y)+m[4]+1272893353&4294967295,w=d+(f<<11&4294967295|f>>>21),f=y+(w^d^p)+m[7]+4139469664&4294967295,y=w+(f<<16&4294967295|f>>>16),f=p+(y^w^d)+m[10]+3200236656&4294967295,p=y+(f<<23&4294967295|f>>>9),f=d+(p^y^w)+m[13]+681279174&4294967295,d=p+(f<<4&4294967295|f>>>28),f=w+(d^p^y)+m[0]+3936430074&4294967295,w=d+(f<<11&4294967295|f>>>21),f=y+(w^d^p)+m[3]+3572445317&4294967295,y=w+(f<<16&4294967295|f>>>16),f=p+(y^w^d)+m[6]+76029189&4294967295,p=y+(f<<23&4294967295|f>>>9),f=d+(p^y^w)+m[9]+3654602809&4294967295,d=p+(f<<4&4294967295|f>>>28),f=w+(d^p^y)+m[12]+3873151461&4294967295,w=d+(f<<11&4294967295|f>>>21),f=y+(w^d^p)+m[15]+530742520&4294967295,y=w+(f<<16&4294967295|f>>>16),f=p+(y^w^d)+m[2]+3299628645&4294967295,p=y+(f<<23&4294967295|f>>>9),f=d+(y^(p|~w))+m[0]+4096336452&4294967295,d=p+(f<<6&4294967295|f>>>26),f=w+(p^(d|~y))+m[7]+1126891415&4294967295,w=d+(f<<10&4294967295|f>>>22),f=y+(d^(w|~p))+m[14]+2878612391&4294967295,y=w+(f<<15&4294967295|f>>>17),f=p+(w^(y|~d))+m[5]+4237533241&4294967295,p=y+(f<<21&4294967295|f>>>11),f=d+(y^(p|~w))+m[12]+1700485571&4294967295,d=p+(f<<6&4294967295|f>>>26),f=w+(p^(d|~y))+m[3]+2399980690&4294967295,w=d+(f<<10&4294967295|f>>>22),f=y+(d^(w|~p))+m[10]+4293915773&4294967295,y=w+(f<<15&4294967295|f>>>17),f=p+(w^(y|~d))+m[1]+2240044497&4294967295,p=y+(f<<21&4294967295|f>>>11),f=d+(y^(p|~w))+m[8]+1873313359&4294967295,d=p+(f<<6&4294967295|f>>>26),f=w+(p^(d|~y))+m[15]+4264355552&4294967295,w=d+(f<<10&4294967295|f>>>22),f=y+(d^(w|~p))+m[6]+2734768916&4294967295,y=w+(f<<15&4294967295|f>>>17),f=p+(w^(y|~d))+m[13]+1309151649&4294967295,p=y+(f<<21&4294967295|f>>>11),f=d+(y^(p|~w))+m[4]+4149444226&4294967295,d=p+(f<<6&4294967295|f>>>26),f=w+(p^(d|~y))+m[11]+3174756917&4294967295,w=d+(f<<10&4294967295|f>>>22),f=y+(d^(w|~p))+m[2]+718787259&4294967295,y=w+(f<<15&4294967295|f>>>17),f=p+(w^(y|~d))+m[9]+3951481745&4294967295,v.g[0]=v.g[0]+d&4294967295,v.g[1]=v.g[1]+(y+(f<<21&4294967295|f>>>11))&4294967295,v.g[2]=v.g[2]+y&4294967295,v.g[3]=v.g[3]+w&4294967295}r.prototype.u=function(v,d){d===void 0&&(d=v.length);for(var p=d-this.blockSize,m=this.B,y=this.h,w=0;w<d;){if(y==0)for(;w<=p;)s(this,v,w),w+=this.blockSize;if(typeof v=="string"){for(;w<d;)if(m[y++]=v.charCodeAt(w++),y==this.blockSize){s(this,m),y=0;break}}else for(;w<d;)if(m[y++]=v[w++],y==this.blockSize){s(this,m),y=0;break}}this.h=y,this.o+=d},r.prototype.v=function(){var v=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);v[0]=128;for(var d=1;d<v.length-8;++d)v[d]=0;var p=8*this.o;for(d=v.length-8;d<v.length;++d)v[d]=p&255,p/=256;for(this.u(v),v=Array(16),d=p=0;4>d;++d)for(var m=0;32>m;m+=8)v[p++]=this.g[d]>>>m&255;return v};function c(v,d){var p=h;return Object.prototype.hasOwnProperty.call(p,v)?p[v]:p[v]=d(v)}function l(v,d){this.h=d;for(var p=[],m=!0,y=v.length-1;0<=y;y--){var w=v[y]|0;m&&w==d||(p[y]=w,m=!1)}this.g=p}var h={};function g(v){return-128<=v&&128>v?c(v,function(d){return new l([d|0],0>d?-1:0)}):new l([v|0],0>v?-1:0)}function E(v){if(isNaN(v)||!isFinite(v))return S;if(0>v)return M(E(-v));for(var d=[],p=1,m=0;v>=p;m++)d[m]=v/p|0,p*=4294967296;return new l(d,0)}function b(v,d){if(v.length==0)throw Error("number format error: empty string");if(d=d||10,2>d||36<d)throw Error("radix out of range: "+d);if(v.charAt(0)=="-")return M(b(v.substring(1),d));if(0<=v.indexOf("-"))throw Error('number format error: interior "-" character');for(var p=E(Math.pow(d,8)),m=S,y=0;y<v.length;y+=8){var w=Math.min(8,v.length-y),f=parseInt(v.substring(y,y+w),d);8>w?(w=E(Math.pow(d,w)),m=m.j(w).add(E(f))):(m=m.j(p),m=m.add(E(f)))}return m}var S=g(0),k=g(1),N=g(16777216);t=l.prototype,t.m=function(){if(F(this))return-M(this).m();for(var v=0,d=1,p=0;p<this.g.length;p++){var m=this.i(p);v+=(0<=m?m:4294967296+m)*d,d*=4294967296}return v},t.toString=function(v){if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(R(this))return"0";if(F(this))return"-"+M(this).toString(v);for(var d=E(Math.pow(v,6)),p=this,m="";;){var y=ae(p,d).g;p=me(p,y.j(d));var w=((0<p.g.length?p.g[0]:p.h)>>>0).toString(v);if(p=y,R(p))return w+m;for(;6>w.length;)w="0"+w;m=w+m}},t.i=function(v){return 0>v?0:v<this.g.length?this.g[v]:this.h};function R(v){if(v.h!=0)return!1;for(var d=0;d<v.g.length;d++)if(v.g[d]!=0)return!1;return!0}function F(v){return v.h==-1}t.l=function(v){return v=me(this,v),F(v)?-1:R(v)?0:1};function M(v){for(var d=v.g.length,p=[],m=0;m<d;m++)p[m]=~v.g[m];return new l(p,~v.h).add(k)}t.abs=function(){return F(this)?M(this):this},t.add=function(v){for(var d=Math.max(this.g.length,v.g.length),p=[],m=0,y=0;y<=d;y++){var w=m+(this.i(y)&65535)+(v.i(y)&65535),f=(w>>>16)+(this.i(y)>>>16)+(v.i(y)>>>16);m=f>>>16,w&=65535,f&=65535,p[y]=f<<16|w}return new l(p,p[p.length-1]&-2147483648?-1:0)};function me(v,d){return v.add(M(d))}t.j=function(v){if(R(this)||R(v))return S;if(F(this))return F(v)?M(this).j(M(v)):M(M(this).j(v));if(F(v))return M(this.j(M(v)));if(0>this.l(N)&&0>v.l(N))return E(this.m()*v.m());for(var d=this.g.length+v.g.length,p=[],m=0;m<2*d;m++)p[m]=0;for(m=0;m<this.g.length;m++)for(var y=0;y<v.g.length;y++){var w=this.i(m)>>>16,f=this.i(m)&65535,ye=v.i(y)>>>16,ut=v.i(y)&65535;p[2*m+2*y]+=f*ut,te(p,2*m+2*y),p[2*m+2*y+1]+=w*ut,te(p,2*m+2*y+1),p[2*m+2*y+1]+=f*ye,te(p,2*m+2*y+1),p[2*m+2*y+2]+=w*ye,te(p,2*m+2*y+2)}for(m=0;m<d;m++)p[m]=p[2*m+1]<<16|p[2*m];for(m=d;m<2*d;m++)p[m]=0;return new l(p,0)};function te(v,d){for(;(v[d]&65535)!=v[d];)v[d+1]+=v[d]>>>16,v[d]&=65535,d++}function j(v,d){this.g=v,this.h=d}function ae(v,d){if(R(d))throw Error("division by zero");if(R(v))return new j(S,S);if(F(v))return d=ae(M(v),d),new j(M(d.g),M(d.h));if(F(d))return d=ae(v,M(d)),new j(M(d.g),d.h);if(30<v.g.length){if(F(v)||F(d))throw Error("slowDivide_ only works with positive integers.");for(var p=k,m=d;0>=m.l(v);)p=Be(p),m=Be(m);var y=Y(p,1),w=Y(m,1);for(m=Y(m,2),p=Y(p,2);!R(m);){var f=w.add(m);0>=f.l(v)&&(y=y.add(p),w=f),m=Y(m,1),p=Y(p,1)}return d=me(v,y.j(d)),new j(y,d)}for(y=S;0<=v.l(d);){for(p=Math.max(1,Math.floor(v.m()/d.m())),m=Math.ceil(Math.log(p)/Math.LN2),m=48>=m?1:Math.pow(2,m-48),w=E(p),f=w.j(d);F(f)||0<f.l(v);)p-=m,w=E(p),f=w.j(d);R(w)&&(w=k),y=y.add(w),v=me(v,f)}return new j(y,v)}t.A=function(v){return ae(this,v).h},t.and=function(v){for(var d=Math.max(this.g.length,v.g.length),p=[],m=0;m<d;m++)p[m]=this.i(m)&v.i(m);return new l(p,this.h&v.h)},t.or=function(v){for(var d=Math.max(this.g.length,v.g.length),p=[],m=0;m<d;m++)p[m]=this.i(m)|v.i(m);return new l(p,this.h|v.h)},t.xor=function(v){for(var d=Math.max(this.g.length,v.g.length),p=[],m=0;m<d;m++)p[m]=this.i(m)^v.i(m);return new l(p,this.h^v.h)};function Be(v){for(var d=v.g.length+1,p=[],m=0;m<d;m++)p[m]=v.i(m)<<1|v.i(m-1)>>>31;return new l(p,v.h)}function Y(v,d){var p=d>>5;d%=32;for(var m=v.g.length-p,y=[],w=0;w<m;w++)y[w]=0<d?v.i(w+p)>>>d|v.i(w+p+1)<<32-d:v.i(w+p);return new l(y,v.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,l.prototype.add=l.prototype.add,l.prototype.multiply=l.prototype.j,l.prototype.modulo=l.prototype.A,l.prototype.compare=l.prototype.l,l.prototype.toNumber=l.prototype.m,l.prototype.toString=l.prototype.toString,l.prototype.getBits=l.prototype.i,l.fromNumber=E,l.fromString=b,Sa=l}).apply(typeof Ks<"u"?Ks:typeof self<"u"?self:typeof window<"u"?window:{});var ln=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(i,o,a){return i==Array.prototype||i==Object.prototype||(i[o]=a.value),i};function n(i){i=[typeof globalThis=="object"&&globalThis,i,typeof window=="object"&&window,typeof self=="object"&&self,typeof ln=="object"&&ln];for(var o=0;o<i.length;++o){var a=i[o];if(a&&a.Math==Math)return a}throw Error("Cannot find global object")}var r=n(this);function s(i,o){if(o)e:{var a=r;i=i.split(".");for(var u=0;u<i.length-1;u++){var _=i[u];if(!(_ in a))break e;a=a[_]}i=i[i.length-1],u=a[i],o=o(u),o!=u&&o!=null&&e(a,i,{configurable:!0,writable:!0,value:o})}}function c(i,o){i instanceof String&&(i+="");var a=0,u=!1,_={next:function(){if(!u&&a<i.length){var I=a++;return{value:o(I,i[I]),done:!1}}return u=!0,{done:!0,value:void 0}}};return _[Symbol.iterator]=function(){return _},_}s("Array.prototype.values",function(i){return i||function(){return c(this,function(o,a){return a})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var l=l||{},h=this||self;function g(i){var o=typeof i;return o=o!="object"?o:i?Array.isArray(i)?"array":o:"null",o=="array"||o=="object"&&typeof i.length=="number"}function E(i){var o=typeof i;return o=="object"&&i!=null||o=="function"}function b(i,o,a){return i.call.apply(i.bind,arguments)}function S(i,o,a){if(!i)throw Error();if(2<arguments.length){var u=Array.prototype.slice.call(arguments,2);return function(){var _=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(_,u),i.apply(o,_)}}return function(){return i.apply(o,arguments)}}function k(i,o,a){return k=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?b:S,k.apply(null,arguments)}function N(i,o){var a=Array.prototype.slice.call(arguments,1);return function(){var u=a.slice();return u.push.apply(u,arguments),i.apply(this,u)}}function R(i,o){function a(){}a.prototype=o.prototype,i.aa=o.prototype,i.prototype=new a,i.prototype.constructor=i,i.Qb=function(u,_,I){for(var T=Array(arguments.length-2),D=2;D<arguments.length;D++)T[D-2]=arguments[D];return o.prototype[_].apply(u,T)}}function F(i){const o=i.length;if(0<o){const a=Array(o);for(let u=0;u<o;u++)a[u]=i[u];return a}return[]}function M(i,o){for(let a=1;a<arguments.length;a++){const u=arguments[a];if(g(u)){const _=i.length||0,I=u.length||0;i.length=_+I;for(let T=0;T<I;T++)i[_+T]=u[T]}else i.push(u)}}class me{constructor(o,a){this.i=o,this.j=a,this.h=0,this.g=null}get(){let o;return 0<this.h?(this.h--,o=this.g,this.g=o.next,o.next=null):o=this.i(),o}}function te(i){return/^[\s\xa0]*$/.test(i)}function j(){var i=h.navigator;return i&&(i=i.userAgent)?i:""}function ae(i){return ae[" "](i),i}ae[" "]=function(){};var Be=j().indexOf("Gecko")!=-1&&!(j().toLowerCase().indexOf("webkit")!=-1&&j().indexOf("Edge")==-1)&&!(j().indexOf("Trident")!=-1||j().indexOf("MSIE")!=-1)&&j().indexOf("Edge")==-1;function Y(i,o,a){for(const u in i)o.call(a,i[u],u,i)}function v(i,o){for(const a in i)o.call(void 0,i[a],a,i)}function d(i){const o={};for(const a in i)o[a]=i[a];return o}const p="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function m(i,o){let a,u;for(let _=1;_<arguments.length;_++){u=arguments[_];for(a in u)i[a]=u[a];for(let I=0;I<p.length;I++)a=p[I],Object.prototype.hasOwnProperty.call(u,a)&&(i[a]=u[a])}}function y(i){var o=1;i=i.split(":");const a=[];for(;0<o&&i.length;)a.push(i.shift()),o--;return i.length&&a.push(i.join(":")),a}function w(i){h.setTimeout(()=>{throw i},0)}function f(){var i=Nn;let o=null;return i.g&&(o=i.g,i.g=i.g.next,i.g||(i.h=null),o.next=null),o}class ye{constructor(){this.h=this.g=null}add(o,a){const u=ut.get();u.set(o,a),this.h?this.h.next=u:this.g=u,this.h=u}}var ut=new me(()=>new xa,i=>i.reset());class xa{constructor(){this.next=this.g=this.h=null}set(o,a){this.h=o,this.g=a,this.next=null}reset(){this.next=this.g=this.h=null}}let ht,dt=!1,Nn=new ye,ar=()=>{const i=h.Promise.resolve(void 0);ht=()=>{i.then(ja)}};var ja=()=>{for(var i;i=f();){try{i.h.call(i.g)}catch(a){w(a)}var o=ut;o.j(i),100>o.h&&(o.h++,i.next=o.g,o.g=i)}dt=!1};function Ce(){this.s=this.s,this.C=this.C}Ce.prototype.s=!1,Ce.prototype.ma=function(){this.s||(this.s=!0,this.N())},Ce.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function B(i,o){this.type=i,this.g=this.target=o,this.defaultPrevented=!1}B.prototype.h=function(){this.defaultPrevented=!0};var Ba=function(){if(!h.addEventListener||!Object.defineProperty)return!1;var i=!1,o=Object.defineProperty({},"passive",{get:function(){i=!0}});try{const a=()=>{};h.addEventListener("test",a,o),h.removeEventListener("test",a,o)}catch{}return i}();function ft(i,o){if(B.call(this,i?i.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,i){var a=this.type=i.type,u=i.changedTouches&&i.changedTouches.length?i.changedTouches[0]:null;if(this.target=i.target||i.srcElement,this.g=o,o=i.relatedTarget){if(Be){e:{try{ae(o.nodeName);var _=!0;break e}catch{}_=!1}_||(o=null)}}else a=="mouseover"?o=i.fromElement:a=="mouseout"&&(o=i.toElement);this.relatedTarget=o,u?(this.clientX=u.clientX!==void 0?u.clientX:u.pageX,this.clientY=u.clientY!==void 0?u.clientY:u.pageY,this.screenX=u.screenX||0,this.screenY=u.screenY||0):(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0),this.button=i.button,this.key=i.key||"",this.ctrlKey=i.ctrlKey,this.altKey=i.altKey,this.shiftKey=i.shiftKey,this.metaKey=i.metaKey,this.pointerId=i.pointerId||0,this.pointerType=typeof i.pointerType=="string"?i.pointerType:$a[i.pointerType]||"",this.state=i.state,this.i=i,i.defaultPrevented&&ft.aa.h.call(this)}}R(ft,B);var $a={2:"touch",3:"pen",4:"mouse"};ft.prototype.h=function(){ft.aa.h.call(this);var i=this.i;i.preventDefault?i.preventDefault():i.returnValue=!1};var Kt="closure_listenable_"+(1e6*Math.random()|0),Va=0;function Ha(i,o,a,u,_){this.listener=i,this.proxy=null,this.src=o,this.type=a,this.capture=!!u,this.ha=_,this.key=++Va,this.da=this.fa=!1}function Gt(i){i.da=!0,i.listener=null,i.proxy=null,i.src=null,i.ha=null}function zt(i){this.src=i,this.g={},this.h=0}zt.prototype.add=function(i,o,a,u,_){var I=i.toString();i=this.g[I],i||(i=this.g[I]=[],this.h++);var T=Mn(i,o,u,_);return-1<T?(o=i[T],a||(o.fa=!1)):(o=new Ha(o,this.src,I,!!u,_),o.fa=a,i.push(o)),o};function Ln(i,o){var a=o.type;if(a in i.g){var u=i.g[a],_=Array.prototype.indexOf.call(u,o,void 0),I;(I=0<=_)&&Array.prototype.splice.call(u,_,1),I&&(Gt(o),i.g[a].length==0&&(delete i.g[a],i.h--))}}function Mn(i,o,a,u){for(var _=0;_<i.length;++_){var I=i[_];if(!I.da&&I.listener==o&&I.capture==!!a&&I.ha==u)return _}return-1}var Un="closure_lm_"+(1e6*Math.random()|0),Fn={};function cr(i,o,a,u,_){if(Array.isArray(o)){for(var I=0;I<o.length;I++)cr(i,o[I],a,u,_);return null}return a=hr(a),i&&i[Kt]?i.K(o,a,E(u)?!!u.capture:!1,_):Wa(i,o,a,!1,u,_)}function Wa(i,o,a,u,_,I){if(!o)throw Error("Invalid event type");var T=E(_)?!!_.capture:!!_,D=jn(i);if(D||(i[Un]=D=new zt(i)),a=D.add(o,a,u,T,I),a.proxy)return a;if(u=Ka(),a.proxy=u,u.src=i,u.listener=a,i.addEventListener)Ba||(_=T),_===void 0&&(_=!1),i.addEventListener(o.toString(),u,_);else if(i.attachEvent)i.attachEvent(ur(o.toString()),u);else if(i.addListener&&i.removeListener)i.addListener(u);else throw Error("addEventListener and attachEvent are unavailable.");return a}function Ka(){function i(a){return o.call(i.src,i.listener,a)}const o=Ga;return i}function lr(i,o,a,u,_){if(Array.isArray(o))for(var I=0;I<o.length;I++)lr(i,o[I],a,u,_);else u=E(u)?!!u.capture:!!u,a=hr(a),i&&i[Kt]?(i=i.i,o=String(o).toString(),o in i.g&&(I=i.g[o],a=Mn(I,a,u,_),-1<a&&(Gt(I[a]),Array.prototype.splice.call(I,a,1),I.length==0&&(delete i.g[o],i.h--)))):i&&(i=jn(i))&&(o=i.g[o.toString()],i=-1,o&&(i=Mn(o,a,u,_)),(a=-1<i?o[i]:null)&&xn(a))}function xn(i){if(typeof i!="number"&&i&&!i.da){var o=i.src;if(o&&o[Kt])Ln(o.i,i);else{var a=i.type,u=i.proxy;o.removeEventListener?o.removeEventListener(a,u,i.capture):o.detachEvent?o.detachEvent(ur(a),u):o.addListener&&o.removeListener&&o.removeListener(u),(a=jn(o))?(Ln(a,i),a.h==0&&(a.src=null,o[Un]=null)):Gt(i)}}}function ur(i){return i in Fn?Fn[i]:Fn[i]="on"+i}function Ga(i,o){if(i.da)i=!0;else{o=new ft(o,this);var a=i.listener,u=i.ha||i.src;i.fa&&xn(i),i=a.call(u,o)}return i}function jn(i){return i=i[Un],i instanceof zt?i:null}var Bn="__closure_events_fn_"+(1e9*Math.random()>>>0);function hr(i){return typeof i=="function"?i:(i[Bn]||(i[Bn]=function(o){return i.handleEvent(o)}),i[Bn])}function $(){Ce.call(this),this.i=new zt(this),this.M=this,this.F=null}R($,Ce),$.prototype[Kt]=!0,$.prototype.removeEventListener=function(i,o,a,u){lr(this,i,o,a,u)};function K(i,o){var a,u=i.F;if(u)for(a=[];u;u=u.F)a.push(u);if(i=i.M,u=o.type||o,typeof o=="string")o=new B(o,i);else if(o instanceof B)o.target=o.target||i;else{var _=o;o=new B(u,i),m(o,_)}if(_=!0,a)for(var I=a.length-1;0<=I;I--){var T=o.g=a[I];_=qt(T,u,!0,o)&&_}if(T=o.g=i,_=qt(T,u,!0,o)&&_,_=qt(T,u,!1,o)&&_,a)for(I=0;I<a.length;I++)T=o.g=a[I],_=qt(T,u,!1,o)&&_}$.prototype.N=function(){if($.aa.N.call(this),this.i){var i=this.i,o;for(o in i.g){for(var a=i.g[o],u=0;u<a.length;u++)Gt(a[u]);delete i.g[o],i.h--}}this.F=null},$.prototype.K=function(i,o,a,u){return this.i.add(String(i),o,!1,a,u)},$.prototype.L=function(i,o,a,u){return this.i.add(String(i),o,!0,a,u)};function qt(i,o,a,u){if(o=i.i.g[String(o)],!o)return!0;o=o.concat();for(var _=!0,I=0;I<o.length;++I){var T=o[I];if(T&&!T.da&&T.capture==a){var D=T.listener,x=T.ha||T.src;T.fa&&Ln(i.i,T),_=D.call(x,u)!==!1&&_}}return _&&!u.defaultPrevented}function dr(i,o,a){if(typeof i=="function")a&&(i=k(i,a));else if(i&&typeof i.handleEvent=="function")i=k(i.handleEvent,i);else throw Error("Invalid listener argument");return 2147483647<Number(o)?-1:h.setTimeout(i,o||0)}function fr(i){i.g=dr(()=>{i.g=null,i.i&&(i.i=!1,fr(i))},i.l);const o=i.h;i.h=null,i.m.apply(null,o)}class za extends Ce{constructor(o,a){super(),this.m=o,this.l=a,this.h=null,this.i=!1,this.g=null}j(o){this.h=arguments,this.g?this.i=!0:fr(this)}N(){super.N(),this.g&&(h.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function pt(i){Ce.call(this),this.h=i,this.g={}}R(pt,Ce);var pr=[];function gr(i){Y(i.g,function(o,a){this.g.hasOwnProperty(a)&&xn(o)},i),i.g={}}pt.prototype.N=function(){pt.aa.N.call(this),gr(this)},pt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var $n=h.JSON.stringify,qa=h.JSON.parse,Ja=class{stringify(i){return h.JSON.stringify(i,void 0)}parse(i){return h.JSON.parse(i,void 0)}};function Vn(){}Vn.prototype.h=null;function mr(i){return i.h||(i.h=i.i())}function Ya(){}var gt={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Hn(){B.call(this,"d")}R(Hn,B);function Wn(){B.call(this,"c")}R(Wn,B);var Qe={},yr=null;function Kn(){return yr=yr||new $}Qe.La="serverreachability";function vr(i){B.call(this,Qe.La,i)}R(vr,B);function mt(i){const o=Kn();K(o,new vr(o))}Qe.STAT_EVENT="statevent";function _r(i,o){B.call(this,Qe.STAT_EVENT,i),this.stat=o}R(_r,B);function G(i){const o=Kn();K(o,new _r(o,i))}Qe.Ma="timingevent";function wr(i,o){B.call(this,Qe.Ma,i),this.size=o}R(wr,B);function yt(i,o){if(typeof i!="function")throw Error("Fn must not be null and must be a function");return h.setTimeout(function(){i()},o)}function vt(){this.g=!0}vt.prototype.xa=function(){this.g=!1};function Xa(i,o,a,u,_,I){i.info(function(){if(i.g)if(I)for(var T="",D=I.split("&"),x=0;x<D.length;x++){var P=D[x].split("=");if(1<P.length){var V=P[0];P=P[1];var H=V.split("_");T=2<=H.length&&H[1]=="type"?T+(V+"="+P+"&"):T+(V+"=redacted&")}}else T=null;else T=I;return"XMLHTTP REQ ("+u+") [attempt "+_+"]: "+o+`
`+a+`
`+T})}function Qa(i,o,a,u,_,I,T){i.info(function(){return"XMLHTTP RESP ("+u+") [ attempt "+_+"]: "+o+`
`+a+`
`+I+" "+T})}function Ze(i,o,a,u){i.info(function(){return"XMLHTTP TEXT ("+o+"): "+ec(i,a)+(u?" "+u:"")})}function Za(i,o){i.info(function(){return"TIMEOUT: "+o})}vt.prototype.info=function(){};function ec(i,o){if(!i.g)return o;if(!o)return null;try{var a=JSON.parse(o);if(a){for(i=0;i<a.length;i++)if(Array.isArray(a[i])){var u=a[i];if(!(2>u.length)){var _=u[1];if(Array.isArray(_)&&!(1>_.length)){var I=_[0];if(I!="noop"&&I!="stop"&&I!="close")for(var T=1;T<_.length;T++)_[T]=""}}}}return $n(a)}catch{return o}}var Gn={NO_ERROR:0,TIMEOUT:8},tc={},zn;function Jt(){}R(Jt,Vn),Jt.prototype.g=function(){return new XMLHttpRequest},Jt.prototype.i=function(){return{}},zn=new Jt;function Re(i,o,a,u){this.j=i,this.i=o,this.l=a,this.R=u||1,this.U=new pt(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Ir}function Ir(){this.i=null,this.g="",this.h=!1}var Er={},qn={};function Jn(i,o,a){i.L=1,i.v=Zt(ve(o)),i.m=a,i.P=!0,Tr(i,null)}function Tr(i,o){i.F=Date.now(),Yt(i),i.A=ve(i.v);var a=i.A,u=i.R;Array.isArray(u)||(u=[String(u)]),Fr(a.i,"t",u),i.C=0,a=i.j.J,i.h=new Ir,i.g=ts(i.j,a?o:null,!i.m),0<i.O&&(i.M=new za(k(i.Y,i,i.g),i.O)),o=i.U,a=i.g,u=i.ca;var _="readystatechange";Array.isArray(_)||(_&&(pr[0]=_.toString()),_=pr);for(var I=0;I<_.length;I++){var T=cr(a,_[I],u||o.handleEvent,!1,o.h||o);if(!T)break;o.g[T.key]=T}o=i.H?d(i.H):{},i.m?(i.u||(i.u="POST"),o["Content-Type"]="application/x-www-form-urlencoded",i.g.ea(i.A,i.u,i.m,o)):(i.u="GET",i.g.ea(i.A,i.u,null,o)),mt(),Xa(i.i,i.u,i.A,i.l,i.R,i.m)}Re.prototype.ca=function(i){i=i.target;const o=this.M;o&&_e(i)==3?o.j():this.Y(i)},Re.prototype.Y=function(i){try{if(i==this.g)e:{const H=_e(this.g);var o=this.g.Ba();const nt=this.g.Z();if(!(3>H)&&(H!=3||this.g&&(this.h.h||this.g.oa()||Wr(this.g)))){this.J||H!=4||o==7||(o==8||0>=nt?mt(3):mt(2)),Yn(this);var a=this.g.Z();this.X=a;t:if(br(this)){var u=Wr(this.g);i="";var _=u.length,I=_e(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){$e(this),_t(this);var T="";break t}this.h.i=new h.TextDecoder}for(o=0;o<_;o++)this.h.h=!0,i+=this.h.i.decode(u[o],{stream:!(I&&o==_-1)});u.length=0,this.h.g+=i,this.C=0,T=this.h.g}else T=this.g.oa();if(this.o=a==200,Qa(this.i,this.u,this.A,this.l,this.R,H,a),this.o){if(this.T&&!this.K){t:{if(this.g){var D,x=this.g;if((D=x.g?x.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!te(D)){var P=D;break t}}P=null}if(a=P)Ze(this.i,this.l,a,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Xn(this,a);else{this.o=!1,this.s=3,G(12),$e(this),_t(this);break e}}if(this.P){a=!0;let ce;for(;!this.J&&this.C<T.length;)if(ce=nc(this,T),ce==qn){H==4&&(this.s=4,G(14),a=!1),Ze(this.i,this.l,null,"[Incomplete Response]");break}else if(ce==Er){this.s=4,G(15),Ze(this.i,this.l,T,"[Invalid Chunk]"),a=!1;break}else Ze(this.i,this.l,ce,null),Xn(this,ce);if(br(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),H!=4||T.length!=0||this.h.h||(this.s=1,G(16),a=!1),this.o=this.o&&a,!a)Ze(this.i,this.l,T,"[Invalid Chunked Response]"),$e(this),_t(this);else if(0<T.length&&!this.W){this.W=!0;var V=this.j;V.g==this&&V.ba&&!V.M&&(V.j.info("Great, no buffering proxy detected. Bytes received: "+T.length),ii(V),V.M=!0,G(11))}}else Ze(this.i,this.l,T,null),Xn(this,T);H==4&&$e(this),this.o&&!this.J&&(H==4?Xr(this.j,this):(this.o=!1,Yt(this)))}else _c(this.g),a==400&&0<T.indexOf("Unknown SID")?(this.s=3,G(12)):(this.s=0,G(13)),$e(this),_t(this)}}}catch{}finally{}};function br(i){return i.g?i.u=="GET"&&i.L!=2&&i.j.Ca:!1}function nc(i,o){var a=i.C,u=o.indexOf(`
`,a);return u==-1?qn:(a=Number(o.substring(a,u)),isNaN(a)?Er:(u+=1,u+a>o.length?qn:(o=o.slice(u,u+a),i.C=u+a,o)))}Re.prototype.cancel=function(){this.J=!0,$e(this)};function Yt(i){i.S=Date.now()+i.I,Ar(i,i.I)}function Ar(i,o){if(i.B!=null)throw Error("WatchDog timer not null");i.B=yt(k(i.ba,i),o)}function Yn(i){i.B&&(h.clearTimeout(i.B),i.B=null)}Re.prototype.ba=function(){this.B=null;const i=Date.now();0<=i-this.S?(Za(this.i,this.A),this.L!=2&&(mt(),G(17)),$e(this),this.s=2,_t(this)):Ar(this,this.S-i)};function _t(i){i.j.G==0||i.J||Xr(i.j,i)}function $e(i){Yn(i);var o=i.M;o&&typeof o.ma=="function"&&o.ma(),i.M=null,gr(i.U),i.g&&(o=i.g,i.g=null,o.abort(),o.ma())}function Xn(i,o){try{var a=i.j;if(a.G!=0&&(a.g==i||Qn(a.h,i))){if(!i.K&&Qn(a.h,i)&&a.G==3){try{var u=a.Da.g.parse(o)}catch{u=null}if(Array.isArray(u)&&u.length==3){var _=u;if(_[0]==0){e:if(!a.u){if(a.g)if(a.g.F+3e3<i.F)on(a),rn(a);else break e;ni(a),G(18)}}else a.za=_[1],0<a.za-a.T&&37500>_[2]&&a.F&&a.v==0&&!a.C&&(a.C=yt(k(a.Za,a),6e3));if(1>=Cr(a.h)&&a.ca){try{a.ca()}catch{}a.ca=void 0}}else He(a,11)}else if((i.K||a.g==i)&&on(a),!te(o))for(_=a.Da.g.parse(o),o=0;o<_.length;o++){let P=_[o];if(a.T=P[0],P=P[1],a.G==2)if(P[0]=="c"){a.K=P[1],a.ia=P[2];const V=P[3];V!=null&&(a.la=V,a.j.info("VER="+a.la));const H=P[4];H!=null&&(a.Aa=H,a.j.info("SVER="+a.Aa));const nt=P[5];nt!=null&&typeof nt=="number"&&0<nt&&(u=1.5*nt,a.L=u,a.j.info("backChannelRequestTimeoutMs_="+u)),u=a;const ce=i.g;if(ce){const an=ce.g?ce.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(an){var I=u.h;I.g||an.indexOf("spdy")==-1&&an.indexOf("quic")==-1&&an.indexOf("h2")==-1||(I.j=I.l,I.g=new Set,I.h&&(Zn(I,I.h),I.h=null))}if(u.D){const ri=ce.g?ce.g.getResponseHeader("X-HTTP-Session-Id"):null;ri&&(u.ya=ri,L(u.I,u.D,ri))}}a.G=3,a.l&&a.l.ua(),a.ba&&(a.R=Date.now()-i.F,a.j.info("Handshake RTT: "+a.R+"ms")),u=a;var T=i;if(u.qa=es(u,u.J?u.ia:null,u.W),T.K){Rr(u.h,T);var D=T,x=u.L;x&&(D.I=x),D.B&&(Yn(D),Yt(D)),u.g=T}else Jr(u);0<a.i.length&&sn(a)}else P[0]!="stop"&&P[0]!="close"||He(a,7);else a.G==3&&(P[0]=="stop"||P[0]=="close"?P[0]=="stop"?He(a,7):ti(a):P[0]!="noop"&&a.l&&a.l.ta(P),a.v=0)}}mt(4)}catch{}}var ic=class{constructor(i,o){this.g=i,this.map=o}};function Sr(i){this.l=i||10,h.PerformanceNavigationTiming?(i=h.performance.getEntriesByType("navigation"),i=0<i.length&&(i[0].nextHopProtocol=="hq"||i[0].nextHopProtocol=="h2")):i=!!(h.chrome&&h.chrome.loadTimes&&h.chrome.loadTimes()&&h.chrome.loadTimes().wasFetchedViaSpdy),this.j=i?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function kr(i){return i.h?!0:i.g?i.g.size>=i.j:!1}function Cr(i){return i.h?1:i.g?i.g.size:0}function Qn(i,o){return i.h?i.h==o:i.g?i.g.has(o):!1}function Zn(i,o){i.g?i.g.add(o):i.h=o}function Rr(i,o){i.h&&i.h==o?i.h=null:i.g&&i.g.has(o)&&i.g.delete(o)}Sr.prototype.cancel=function(){if(this.i=Pr(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const i of this.g.values())i.cancel();this.g.clear()}};function Pr(i){if(i.h!=null)return i.i.concat(i.h.D);if(i.g!=null&&i.g.size!==0){let o=i.i;for(const a of i.g.values())o=o.concat(a.D);return o}return F(i.i)}function rc(i){if(i.V&&typeof i.V=="function")return i.V();if(typeof Map<"u"&&i instanceof Map||typeof Set<"u"&&i instanceof Set)return Array.from(i.values());if(typeof i=="string")return i.split("");if(g(i)){for(var o=[],a=i.length,u=0;u<a;u++)o.push(i[u]);return o}o=[],a=0;for(u in i)o[a++]=i[u];return o}function sc(i){if(i.na&&typeof i.na=="function")return i.na();if(!i.V||typeof i.V!="function"){if(typeof Map<"u"&&i instanceof Map)return Array.from(i.keys());if(!(typeof Set<"u"&&i instanceof Set)){if(g(i)||typeof i=="string"){var o=[];i=i.length;for(var a=0;a<i;a++)o.push(a);return o}o=[],a=0;for(const u in i)o[a++]=u;return o}}}function Or(i,o){if(i.forEach&&typeof i.forEach=="function")i.forEach(o,void 0);else if(g(i)||typeof i=="string")Array.prototype.forEach.call(i,o,void 0);else for(var a=sc(i),u=rc(i),_=u.length,I=0;I<_;I++)o.call(void 0,u[I],a&&a[I],i)}var Dr=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function oc(i,o){if(i){i=i.split("&");for(var a=0;a<i.length;a++){var u=i[a].indexOf("="),_=null;if(0<=u){var I=i[a].substring(0,u);_=i[a].substring(u+1)}else I=i[a];o(I,_?decodeURIComponent(_.replace(/\+/g," ")):"")}}}function Ve(i){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,i instanceof Ve){this.h=i.h,Xt(this,i.j),this.o=i.o,this.g=i.g,Qt(this,i.s),this.l=i.l;var o=i.i,a=new Et;a.i=o.i,o.g&&(a.g=new Map(o.g),a.h=o.h),Nr(this,a),this.m=i.m}else i&&(o=String(i).match(Dr))?(this.h=!1,Xt(this,o[1]||"",!0),this.o=wt(o[2]||""),this.g=wt(o[3]||"",!0),Qt(this,o[4]),this.l=wt(o[5]||"",!0),Nr(this,o[6]||"",!0),this.m=wt(o[7]||"")):(this.h=!1,this.i=new Et(null,this.h))}Ve.prototype.toString=function(){var i=[],o=this.j;o&&i.push(It(o,Lr,!0),":");var a=this.g;return(a||o=="file")&&(i.push("//"),(o=this.o)&&i.push(It(o,Lr,!0),"@"),i.push(encodeURIComponent(String(a)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a=this.s,a!=null&&i.push(":",String(a))),(a=this.l)&&(this.g&&a.charAt(0)!="/"&&i.push("/"),i.push(It(a,a.charAt(0)=="/"?lc:cc,!0))),(a=this.i.toString())&&i.push("?",a),(a=this.m)&&i.push("#",It(a,hc)),i.join("")};function ve(i){return new Ve(i)}function Xt(i,o,a){i.j=a?wt(o,!0):o,i.j&&(i.j=i.j.replace(/:$/,""))}function Qt(i,o){if(o){if(o=Number(o),isNaN(o)||0>o)throw Error("Bad port number "+o);i.s=o}else i.s=null}function Nr(i,o,a){o instanceof Et?(i.i=o,dc(i.i,i.h)):(a||(o=It(o,uc)),i.i=new Et(o,i.h))}function L(i,o,a){i.i.set(o,a)}function Zt(i){return L(i,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),i}function wt(i,o){return i?o?decodeURI(i.replace(/%25/g,"%2525")):decodeURIComponent(i):""}function It(i,o,a){return typeof i=="string"?(i=encodeURI(i).replace(o,ac),a&&(i=i.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),i):null}function ac(i){return i=i.charCodeAt(0),"%"+(i>>4&15).toString(16)+(i&15).toString(16)}var Lr=/[#\/\?@]/g,cc=/[#\?:]/g,lc=/[#\?]/g,uc=/[#\?@]/g,hc=/#/g;function Et(i,o){this.h=this.g=null,this.i=i||null,this.j=!!o}function Pe(i){i.g||(i.g=new Map,i.h=0,i.i&&oc(i.i,function(o,a){i.add(decodeURIComponent(o.replace(/\+/g," ")),a)}))}t=Et.prototype,t.add=function(i,o){Pe(this),this.i=null,i=et(this,i);var a=this.g.get(i);return a||this.g.set(i,a=[]),a.push(o),this.h+=1,this};function Mr(i,o){Pe(i),o=et(i,o),i.g.has(o)&&(i.i=null,i.h-=i.g.get(o).length,i.g.delete(o))}function Ur(i,o){return Pe(i),o=et(i,o),i.g.has(o)}t.forEach=function(i,o){Pe(this),this.g.forEach(function(a,u){a.forEach(function(_){i.call(o,_,u,this)},this)},this)},t.na=function(){Pe(this);const i=Array.from(this.g.values()),o=Array.from(this.g.keys()),a=[];for(let u=0;u<o.length;u++){const _=i[u];for(let I=0;I<_.length;I++)a.push(o[u])}return a},t.V=function(i){Pe(this);let o=[];if(typeof i=="string")Ur(this,i)&&(o=o.concat(this.g.get(et(this,i))));else{i=Array.from(this.g.values());for(let a=0;a<i.length;a++)o=o.concat(i[a])}return o},t.set=function(i,o){return Pe(this),this.i=null,i=et(this,i),Ur(this,i)&&(this.h-=this.g.get(i).length),this.g.set(i,[o]),this.h+=1,this},t.get=function(i,o){return i?(i=this.V(i),0<i.length?String(i[0]):o):o};function Fr(i,o,a){Mr(i,o),0<a.length&&(i.i=null,i.g.set(et(i,o),F(a)),i.h+=a.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const i=[],o=Array.from(this.g.keys());for(var a=0;a<o.length;a++){var u=o[a];const I=encodeURIComponent(String(u)),T=this.V(u);for(u=0;u<T.length;u++){var _=I;T[u]!==""&&(_+="="+encodeURIComponent(String(T[u]))),i.push(_)}}return this.i=i.join("&")};function et(i,o){return o=String(o),i.j&&(o=o.toLowerCase()),o}function dc(i,o){o&&!i.j&&(Pe(i),i.i=null,i.g.forEach(function(a,u){var _=u.toLowerCase();u!=_&&(Mr(this,u),Fr(this,_,a))},i)),i.j=o}function fc(i,o){const a=new vt;if(h.Image){const u=new Image;u.onload=N(Oe,a,"TestLoadImage: loaded",!0,o,u),u.onerror=N(Oe,a,"TestLoadImage: error",!1,o,u),u.onabort=N(Oe,a,"TestLoadImage: abort",!1,o,u),u.ontimeout=N(Oe,a,"TestLoadImage: timeout",!1,o,u),h.setTimeout(function(){u.ontimeout&&u.ontimeout()},1e4),u.src=i}else o(!1)}function pc(i,o){const a=new vt,u=new AbortController,_=setTimeout(()=>{u.abort(),Oe(a,"TestPingServer: timeout",!1,o)},1e4);fetch(i,{signal:u.signal}).then(I=>{clearTimeout(_),I.ok?Oe(a,"TestPingServer: ok",!0,o):Oe(a,"TestPingServer: server error",!1,o)}).catch(()=>{clearTimeout(_),Oe(a,"TestPingServer: error",!1,o)})}function Oe(i,o,a,u,_){try{_&&(_.onload=null,_.onerror=null,_.onabort=null,_.ontimeout=null),u(a)}catch{}}function gc(){this.g=new Ja}function mc(i,o,a){const u=a||"";try{Or(i,function(_,I){let T=_;E(_)&&(T=$n(_)),o.push(u+I+"="+encodeURIComponent(T))})}catch(_){throw o.push(u+"type="+encodeURIComponent("_badmap")),_}}function en(i){this.l=i.Ub||null,this.j=i.eb||!1}R(en,Vn),en.prototype.g=function(){return new tn(this.l,this.j)},en.prototype.i=function(i){return function(){return i}}({});function tn(i,o){$.call(this),this.D=i,this.o=o,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}R(tn,$),t=tn.prototype,t.open=function(i,o){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=i,this.A=o,this.readyState=1,bt(this)},t.send=function(i){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const o={headers:this.u,method:this.B,credentials:this.m,cache:void 0};i&&(o.body=i),(this.D||h).fetch(new Request(this.A,o)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Tt(this)),this.readyState=0},t.Sa=function(i){if(this.g&&(this.l=i,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=i.headers,this.readyState=2,bt(this)),this.g&&(this.readyState=3,bt(this),this.g)))if(this.responseType==="arraybuffer")i.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof h.ReadableStream<"u"&&"body"in i){if(this.j=i.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;xr(this)}else i.text().then(this.Ra.bind(this),this.ga.bind(this))};function xr(i){i.j.read().then(i.Pa.bind(i)).catch(i.ga.bind(i))}t.Pa=function(i){if(this.g){if(this.o&&i.value)this.response.push(i.value);else if(!this.o){var o=i.value?i.value:new Uint8Array(0);(o=this.v.decode(o,{stream:!i.done}))&&(this.response=this.responseText+=o)}i.done?Tt(this):bt(this),this.readyState==3&&xr(this)}},t.Ra=function(i){this.g&&(this.response=this.responseText=i,Tt(this))},t.Qa=function(i){this.g&&(this.response=i,Tt(this))},t.ga=function(){this.g&&Tt(this)};function Tt(i){i.readyState=4,i.l=null,i.j=null,i.v=null,bt(i)}t.setRequestHeader=function(i,o){this.u.append(i,o)},t.getResponseHeader=function(i){return this.h&&this.h.get(i.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const i=[],o=this.h.entries();for(var a=o.next();!a.done;)a=a.value,i.push(a[0]+": "+a[1]),a=o.next();return i.join(`\r
`)};function bt(i){i.onreadystatechange&&i.onreadystatechange.call(i)}Object.defineProperty(tn.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(i){this.m=i?"include":"same-origin"}});function jr(i){let o="";return Y(i,function(a,u){o+=u,o+=":",o+=a,o+=`\r
`}),o}function ei(i,o,a){e:{for(u in a){var u=!1;break e}u=!0}u||(a=jr(a),typeof i=="string"?a!=null&&encodeURIComponent(String(a)):L(i,o,a))}function U(i){$.call(this),this.headers=new Map,this.o=i||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}R(U,$);var yc=/^https?$/i,vc=["POST","PUT"];t=U.prototype,t.Ha=function(i){this.J=i},t.ea=function(i,o,a,u){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+i);o=o?o.toUpperCase():"GET",this.D=i,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():zn.g(),this.v=this.o?mr(this.o):mr(zn),this.g.onreadystatechange=k(this.Ea,this);try{this.B=!0,this.g.open(o,String(i),!0),this.B=!1}catch(I){Br(this,I);return}if(i=a||"",a=new Map(this.headers),u)if(Object.getPrototypeOf(u)===Object.prototype)for(var _ in u)a.set(_,u[_]);else if(typeof u.keys=="function"&&typeof u.get=="function")for(const I of u.keys())a.set(I,u.get(I));else throw Error("Unknown input type for opt_headers: "+String(u));u=Array.from(a.keys()).find(I=>I.toLowerCase()=="content-type"),_=h.FormData&&i instanceof h.FormData,!(0<=Array.prototype.indexOf.call(vc,o,void 0))||u||_||a.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[I,T]of a)this.g.setRequestHeader(I,T);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Hr(this),this.u=!0,this.g.send(i),this.u=!1}catch(I){Br(this,I)}};function Br(i,o){i.h=!1,i.g&&(i.j=!0,i.g.abort(),i.j=!1),i.l=o,i.m=5,$r(i),nn(i)}function $r(i){i.A||(i.A=!0,K(i,"complete"),K(i,"error"))}t.abort=function(i){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=i||7,K(this,"complete"),K(this,"abort"),nn(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),nn(this,!0)),U.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Vr(this):this.bb())},t.bb=function(){Vr(this)};function Vr(i){if(i.h&&typeof l<"u"&&(!i.v[1]||_e(i)!=4||i.Z()!=2)){if(i.u&&_e(i)==4)dr(i.Ea,0,i);else if(K(i,"readystatechange"),_e(i)==4){i.h=!1;try{const T=i.Z();e:switch(T){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var o=!0;break e;default:o=!1}var a;if(!(a=o)){var u;if(u=T===0){var _=String(i.D).match(Dr)[1]||null;!_&&h.self&&h.self.location&&(_=h.self.location.protocol.slice(0,-1)),u=!yc.test(_?_.toLowerCase():"")}a=u}if(a)K(i,"complete"),K(i,"success");else{i.m=6;try{var I=2<_e(i)?i.g.statusText:""}catch{I=""}i.l=I+" ["+i.Z()+"]",$r(i)}}finally{nn(i)}}}}function nn(i,o){if(i.g){Hr(i);const a=i.g,u=i.v[0]?()=>{}:null;i.g=null,i.v=null,o||K(i,"ready");try{a.onreadystatechange=u}catch{}}}function Hr(i){i.I&&(h.clearTimeout(i.I),i.I=null)}t.isActive=function(){return!!this.g};function _e(i){return i.g?i.g.readyState:0}t.Z=function(){try{return 2<_e(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(i){if(this.g){var o=this.g.responseText;return i&&o.indexOf(i)==0&&(o=o.substring(i.length)),qa(o)}};function Wr(i){try{if(!i.g)return null;if("response"in i.g)return i.g.response;switch(i.H){case"":case"text":return i.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in i.g)return i.g.mozResponseArrayBuffer}return null}catch{return null}}function _c(i){const o={};i=(i.g&&2<=_e(i)&&i.g.getAllResponseHeaders()||"").split(`\r
`);for(let u=0;u<i.length;u++){if(te(i[u]))continue;var a=y(i[u]);const _=a[0];if(a=a[1],typeof a!="string")continue;a=a.trim();const I=o[_]||[];o[_]=I,I.push(a)}v(o,function(u){return u.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function At(i,o,a){return a&&a.internalChannelParams&&a.internalChannelParams[i]||o}function Kr(i){this.Aa=0,this.i=[],this.j=new vt,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=At("failFast",!1,i),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=At("baseRetryDelayMs",5e3,i),this.cb=At("retryDelaySeedMs",1e4,i),this.Wa=At("forwardChannelMaxRetries",2,i),this.wa=At("forwardChannelRequestTimeoutMs",2e4,i),this.pa=i&&i.xmlHttpFactory||void 0,this.Xa=i&&i.Tb||void 0,this.Ca=i&&i.useFetchStreams||!1,this.L=void 0,this.J=i&&i.supportsCrossDomainXhr||!1,this.K="",this.h=new Sr(i&&i.concurrentRequestLimit),this.Da=new gc,this.P=i&&i.fastHandshake||!1,this.O=i&&i.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=i&&i.Rb||!1,i&&i.xa&&this.j.xa(),i&&i.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&i&&i.detectBufferingProxy||!1,this.ja=void 0,i&&i.longPollingTimeout&&0<i.longPollingTimeout&&(this.ja=i.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Kr.prototype,t.la=8,t.G=1,t.connect=function(i,o,a,u){G(0),this.W=i,this.H=o||{},a&&u!==void 0&&(this.H.OSID=a,this.H.OAID=u),this.F=this.X,this.I=es(this,null,this.W),sn(this)};function ti(i){if(Gr(i),i.G==3){var o=i.U++,a=ve(i.I);if(L(a,"SID",i.K),L(a,"RID",o),L(a,"TYPE","terminate"),St(i,a),o=new Re(i,i.j,o),o.L=2,o.v=Zt(ve(a)),a=!1,h.navigator&&h.navigator.sendBeacon)try{a=h.navigator.sendBeacon(o.v.toString(),"")}catch{}!a&&h.Image&&(new Image().src=o.v,a=!0),a||(o.g=ts(o.j,null),o.g.ea(o.v)),o.F=Date.now(),Yt(o)}Zr(i)}function rn(i){i.g&&(ii(i),i.g.cancel(),i.g=null)}function Gr(i){rn(i),i.u&&(h.clearTimeout(i.u),i.u=null),on(i),i.h.cancel(),i.s&&(typeof i.s=="number"&&h.clearTimeout(i.s),i.s=null)}function sn(i){if(!kr(i.h)&&!i.s){i.s=!0;var o=i.Ga;ht||ar(),dt||(ht(),dt=!0),Nn.add(o,i),i.B=0}}function wc(i,o){return Cr(i.h)>=i.h.j-(i.s?1:0)?!1:i.s?(i.i=o.D.concat(i.i),!0):i.G==1||i.G==2||i.B>=(i.Va?0:i.Wa)?!1:(i.s=yt(k(i.Ga,i,o),Qr(i,i.B)),i.B++,!0)}t.Ga=function(i){if(this.s)if(this.s=null,this.G==1){if(!i){this.U=Math.floor(1e5*Math.random()),i=this.U++;const _=new Re(this,this.j,i);let I=this.o;if(this.S&&(I?(I=d(I),m(I,this.S)):I=this.S),this.m!==null||this.O||(_.H=I,I=null),this.P)e:{for(var o=0,a=0;a<this.i.length;a++){t:{var u=this.i[a];if("__data__"in u.map&&(u=u.map.__data__,typeof u=="string")){u=u.length;break t}u=void 0}if(u===void 0)break;if(o+=u,4096<o){o=a;break e}if(o===4096||a===this.i.length-1){o=a+1;break e}}o=1e3}else o=1e3;o=qr(this,_,o),a=ve(this.I),L(a,"RID",i),L(a,"CVER",22),this.D&&L(a,"X-HTTP-Session-Id",this.D),St(this,a),I&&(this.O?o="headers="+encodeURIComponent(String(jr(I)))+"&"+o:this.m&&ei(a,this.m,I)),Zn(this.h,_),this.Ua&&L(a,"TYPE","init"),this.P?(L(a,"$req",o),L(a,"SID","null"),_.T=!0,Jn(_,a,null)):Jn(_,a,o),this.G=2}}else this.G==3&&(i?zr(this,i):this.i.length==0||kr(this.h)||zr(this))};function zr(i,o){var a;o?a=o.l:a=i.U++;const u=ve(i.I);L(u,"SID",i.K),L(u,"RID",a),L(u,"AID",i.T),St(i,u),i.m&&i.o&&ei(u,i.m,i.o),a=new Re(i,i.j,a,i.B+1),i.m===null&&(a.H=i.o),o&&(i.i=o.D.concat(i.i)),o=qr(i,a,1e3),a.I=Math.round(.5*i.wa)+Math.round(.5*i.wa*Math.random()),Zn(i.h,a),Jn(a,u,o)}function St(i,o){i.H&&Y(i.H,function(a,u){L(o,u,a)}),i.l&&Or({},function(a,u){L(o,u,a)})}function qr(i,o,a){a=Math.min(i.i.length,a);var u=i.l?k(i.l.Na,i.l,i):null;e:{var _=i.i;let I=-1;for(;;){const T=["count="+a];I==-1?0<a?(I=_[0].g,T.push("ofs="+I)):I=0:T.push("ofs="+I);let D=!0;for(let x=0;x<a;x++){let P=_[x].g;const V=_[x].map;if(P-=I,0>P)I=Math.max(0,_[x].g-100),D=!1;else try{mc(V,T,"req"+P+"_")}catch{u&&u(V)}}if(D){u=T.join("&");break e}}}return i=i.i.splice(0,a),o.D=i,u}function Jr(i){if(!i.g&&!i.u){i.Y=1;var o=i.Fa;ht||ar(),dt||(ht(),dt=!0),Nn.add(o,i),i.v=0}}function ni(i){return i.g||i.u||3<=i.v?!1:(i.Y++,i.u=yt(k(i.Fa,i),Qr(i,i.v)),i.v++,!0)}t.Fa=function(){if(this.u=null,Yr(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var i=2*this.R;this.j.info("BP detection timer enabled: "+i),this.A=yt(k(this.ab,this),i)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,G(10),rn(this),Yr(this))};function ii(i){i.A!=null&&(h.clearTimeout(i.A),i.A=null)}function Yr(i){i.g=new Re(i,i.j,"rpc",i.Y),i.m===null&&(i.g.H=i.o),i.g.O=0;var o=ve(i.qa);L(o,"RID","rpc"),L(o,"SID",i.K),L(o,"AID",i.T),L(o,"CI",i.F?"0":"1"),!i.F&&i.ja&&L(o,"TO",i.ja),L(o,"TYPE","xmlhttp"),St(i,o),i.m&&i.o&&ei(o,i.m,i.o),i.L&&(i.g.I=i.L);var a=i.g;i=i.ia,a.L=1,a.v=Zt(ve(o)),a.m=null,a.P=!0,Tr(a,i)}t.Za=function(){this.C!=null&&(this.C=null,rn(this),ni(this),G(19))};function on(i){i.C!=null&&(h.clearTimeout(i.C),i.C=null)}function Xr(i,o){var a=null;if(i.g==o){on(i),ii(i),i.g=null;var u=2}else if(Qn(i.h,o))a=o.D,Rr(i.h,o),u=1;else return;if(i.G!=0){if(o.o)if(u==1){a=o.m?o.m.length:0,o=Date.now()-o.F;var _=i.B;u=Kn(),K(u,new wr(u,a)),sn(i)}else Jr(i);else if(_=o.s,_==3||_==0&&0<o.X||!(u==1&&wc(i,o)||u==2&&ni(i)))switch(a&&0<a.length&&(o=i.h,o.i=o.i.concat(a)),_){case 1:He(i,5);break;case 4:He(i,10);break;case 3:He(i,6);break;default:He(i,2)}}}function Qr(i,o){let a=i.Ta+Math.floor(Math.random()*i.cb);return i.isActive()||(a*=2),a*o}function He(i,o){if(i.j.info("Error code "+o),o==2){var a=k(i.fb,i),u=i.Xa;const _=!u;u=new Ve(u||"//www.google.com/images/cleardot.gif"),h.location&&h.location.protocol=="http"||Xt(u,"https"),Zt(u),_?fc(u.toString(),a):pc(u.toString(),a)}else G(2);i.G=0,i.l&&i.l.sa(o),Zr(i),Gr(i)}t.fb=function(i){i?(this.j.info("Successfully pinged google.com"),G(2)):(this.j.info("Failed to ping google.com"),G(1))};function Zr(i){if(i.G=0,i.ka=[],i.l){const o=Pr(i.h);(o.length!=0||i.i.length!=0)&&(M(i.ka,o),M(i.ka,i.i),i.h.i.length=0,F(i.i),i.i.length=0),i.l.ra()}}function es(i,o,a){var u=a instanceof Ve?ve(a):new Ve(a);if(u.g!="")o&&(u.g=o+"."+u.g),Qt(u,u.s);else{var _=h.location;u=_.protocol,o=o?o+"."+_.hostname:_.hostname,_=+_.port;var I=new Ve(null);u&&Xt(I,u),o&&(I.g=o),_&&Qt(I,_),a&&(I.l=a),u=I}return a=i.D,o=i.ya,a&&o&&L(u,a,o),L(u,"VER",i.la),St(i,u),u}function ts(i,o,a){if(o&&!i.J)throw Error("Can't create secondary domain capable XhrIo object.");return o=i.Ca&&!i.pa?new U(new en({eb:a})):new U(i.pa),o.Ha(i.J),o}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function ns(){}t=ns.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function ie(i,o){$.call(this),this.g=new Kr(o),this.l=i,this.h=o&&o.messageUrlParams||null,i=o&&o.messageHeaders||null,o&&o.clientProtocolHeaderRequired&&(i?i["X-Client-Protocol"]="webchannel":i={"X-Client-Protocol":"webchannel"}),this.g.o=i,i=o&&o.initMessageHeaders||null,o&&o.messageContentType&&(i?i["X-WebChannel-Content-Type"]=o.messageContentType:i={"X-WebChannel-Content-Type":o.messageContentType}),o&&o.va&&(i?i["X-WebChannel-Client-Profile"]=o.va:i={"X-WebChannel-Client-Profile":o.va}),this.g.S=i,(i=o&&o.Sb)&&!te(i)&&(this.g.m=i),this.v=o&&o.supportsCrossDomainXhr||!1,this.u=o&&o.sendRawJson||!1,(o=o&&o.httpSessionIdParam)&&!te(o)&&(this.g.D=o,i=this.h,i!==null&&o in i&&(i=this.h,o in i&&delete i[o])),this.j=new tt(this)}R(ie,$),ie.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},ie.prototype.close=function(){ti(this.g)},ie.prototype.o=function(i){var o=this.g;if(typeof i=="string"){var a={};a.__data__=i,i=a}else this.u&&(a={},a.__data__=$n(i),i=a);o.i.push(new ic(o.Ya++,i)),o.G==3&&sn(o)},ie.prototype.N=function(){this.g.l=null,delete this.j,ti(this.g),delete this.g,ie.aa.N.call(this)};function is(i){Hn.call(this),i.__headers__&&(this.headers=i.__headers__,this.statusCode=i.__status__,delete i.__headers__,delete i.__status__);var o=i.__sm__;if(o){e:{for(const a in o){i=a;break e}i=void 0}(this.i=i)&&(i=this.i,o=o!==null&&i in o?o[i]:void 0),this.data=o}else this.data=i}R(is,Hn);function rs(){Wn.call(this),this.status=1}R(rs,Wn);function tt(i){this.g=i}R(tt,ns),tt.prototype.ua=function(){K(this.g,"a")},tt.prototype.ta=function(i){K(this.g,new is(i))},tt.prototype.sa=function(i){K(this.g,new rs)},tt.prototype.ra=function(){K(this.g,"b")},ie.prototype.send=ie.prototype.o,ie.prototype.open=ie.prototype.m,ie.prototype.close=ie.prototype.close,Gn.NO_ERROR=0,Gn.TIMEOUT=8,Gn.HTTP_ERROR=6,tc.COMPLETE="complete",Ya.EventType=gt,gt.OPEN="a",gt.CLOSE="b",gt.ERROR="c",gt.MESSAGE="d",$.prototype.listen=$.prototype.K,U.prototype.listenOnce=U.prototype.L,U.prototype.getLastError=U.prototype.Ka,U.prototype.getLastErrorCode=U.prototype.Ba,U.prototype.getStatus=U.prototype.Z,U.prototype.getResponseJson=U.prototype.Oa,U.prototype.getResponseText=U.prototype.oa,U.prototype.send=U.prototype.ea,U.prototype.setWithCredentials=U.prototype.Ha}).apply(typeof ln<"u"?ln:typeof self<"u"?self:typeof window<"u"?window:{});const Gs="@firebase/firestore";/**
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
 */class z{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}z.UNAUTHENTICATED=new z(null),z.GOOGLE_CREDENTIALS=new z("google-credentials-uid"),z.FIRST_PARTY=new z("first-party-uid"),z.MOCK_USER=new z("mock-user");/**
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
 */let Wt="10.14.0";/**
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
 */const ot=new bn("@firebase/firestore");function ue(t,...e){if(ot.logLevel<=O.DEBUG){const n=e.map(ir);ot.debug(`Firestore (${Wt}): ${t}`,...n)}}function ka(t,...e){if(ot.logLevel<=O.ERROR){const n=e.map(ir);ot.error(`Firestore (${Wt}): ${t}`,...n)}}function Gf(t,...e){if(ot.logLevel<=O.WARN){const n=e.map(ir);ot.warn(`Firestore (${Wt}): ${t}`,...n)}}function ir(t){if(typeof t=="string")return t;try{/**
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
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
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
 */function rr(t="Unexpected state"){const e=`FIRESTORE (${Wt}) INTERNAL ASSERTION FAILED: `+t;throw ka(e),new Error(e)}function Pt(t,e){t||rr()}/**
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
 */const X={CANCELLED:"cancelled",INVALID_ARGUMENT:"invalid-argument",FAILED_PRECONDITION:"failed-precondition"};class Q extends de{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Ot{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class Ca{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class zf{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(z.UNAUTHENTICATED))}shutdown(){}}class qf{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class Jf{constructor(e){this.t=e,this.currentUser=z.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Pt(this.o===void 0);let r=this.i;const s=g=>this.i!==r?(r=this.i,n(g)):Promise.resolve();let c=new Ot;this.o=()=>{this.i++,this.currentUser=this.u(),c.resolve(),c=new Ot,e.enqueueRetryable(()=>s(this.currentUser))};const l=()=>{const g=c;e.enqueueRetryable(async()=>{await g.promise,await s(this.currentUser)})},h=g=>{ue("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=g,this.o&&(this.auth.addAuthTokenListener(this.o),l())};this.t.onInit(g=>h(g)),setTimeout(()=>{if(!this.auth){const g=this.t.getImmediate({optional:!0});g?h(g):(ue("FirebaseAuthCredentialsProvider","Auth not yet detected"),c.resolve(),c=new Ot)}},0),l()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(ue("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Pt(typeof r.accessToken=="string"),new Ca(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Pt(e===null||typeof e=="string"),new z(e)}}class Yf{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=z.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class Xf{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new Yf(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(z.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Qf{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Zf{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){Pt(this.o===void 0);const r=c=>{c.error!=null&&ue("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${c.error.message}`);const l=c.token!==this.R;return this.R=c.token,ue("FirebaseAppCheckTokenProvider",`Received ${l?"new":"existing"} token.`),l?n(c.token):Promise.resolve()};this.o=c=>{e.enqueueRetryable(()=>r(c))};const s=c=>{ue("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=c,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(c=>s(c)),setTimeout(()=>{if(!this.appCheck){const c=this.A.getImmediate({optional:!0});c?s(c):ue("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Pt(typeof n.token=="string"),this.R=n.token,new Qf(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}function ep(t){return t.name==="IndexedDbTransactionError"}class Tn{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Tn("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Tn&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */var zs,C;(C=zs||(zs={}))[C.OK=0]="OK",C[C.CANCELLED=1]="CANCELLED",C[C.UNKNOWN=2]="UNKNOWN",C[C.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",C[C.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",C[C.NOT_FOUND=5]="NOT_FOUND",C[C.ALREADY_EXISTS=6]="ALREADY_EXISTS",C[C.PERMISSION_DENIED=7]="PERMISSION_DENIED",C[C.UNAUTHENTICATED=16]="UNAUTHENTICATED",C[C.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",C[C.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",C[C.ABORTED=10]="ABORTED",C[C.OUT_OF_RANGE=11]="OUT_OF_RANGE",C[C.UNIMPLEMENTED=12]="UNIMPLEMENTED",C[C.INTERNAL=13]="INTERNAL",C[C.UNAVAILABLE=14]="UNAVAILABLE",C[C.DATA_LOSS=15]="DATA_LOSS";/**
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
 */new Sa([4294967295,4294967295],0);function vi(){return typeof document<"u"?document:null}/**
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
 */class tp{constructor(e,n,r=1e3,s=1.5,c=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=s,this.Qo=c,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),s=Math.max(0,n-r);s>0&&ue("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,s,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
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
 */class sr{constructor(e,n,r,s,c){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=c,this.deferred=new Ot,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(l=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,c){const l=Date.now()+r,h=new sr(e,n,l,s,c);return h.start(r),h}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new Q(X.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}var qs,Js;(Js=qs||(qs={})).ea="default",Js.Cache="cache";/**
 * @license
 * Copyright 2023 Google LLC
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
 */function np(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const Ys=new Map;function ip(t,e,n,r){if(e===!0&&r===!0)throw new Q(X.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function rp(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":rr()}function sp(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new Q(X.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=rp(t);throw new Q(X.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class Xs{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new Q(X.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new Q(X.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}ip("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=np((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(c){if(c.timeoutSeconds!==void 0){if(isNaN(c.timeoutSeconds))throw new Q(X.INVALID_ARGUMENT,`invalid long polling timeout: ${c.timeoutSeconds} (must not be NaN)`);if(c.timeoutSeconds<5)throw new Q(X.INVALID_ARGUMENT,`invalid long polling timeout: ${c.timeoutSeconds} (minimum allowed value is 5)`);if(c.timeoutSeconds>30)throw new Q(X.INVALID_ARGUMENT,`invalid long polling timeout: ${c.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Ra{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Xs({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new Q(X.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new Q(X.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Xs(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new zf;switch(r.type){case"firstParty":return new Xf(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new Q(X.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Ys.get(n);r&&(ue("ComponentProvider","Removing Datastore"),Ys.delete(n),r.terminate())}(this),Promise.resolve()}}function op(t,e,n,r={}){var s;const c=(t=sp(t,Ra))._getSettings(),l=`${e}:${n}`;if(c.host!=="firestore.googleapis.com"&&c.host!==l&&Gf("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},c),{host:l,ssl:!1})),r.mockUserToken){let h,g;if(typeof r.mockUserToken=="string")h=r.mockUserToken,g=z.MOCK_USER;else{h=Rc(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const E=r.mockUserToken.sub||r.mockUserToken.user_id;if(!E)throw new Q(X.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");g=new z(E)}t._authCredentials=new qf(new Ca(h,g))}}/**
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
 */class Qs{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new tp(this,"async_queue_retry"),this.Vu=()=>{const r=vi();r&&ue("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const n=vi();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const n=vi();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new Ot;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!ep(e))throw e;ue("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const n=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const s=function(l){let h=l.message||"";return l.stack&&(h=l.stack.includes(l.message)?l.stack:l.message+`
`+l.stack),h}(r);throw ka("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.du=!1,r))));return this.mu=n,n}enqueueAfterDelay(e,n,r){this.fu(),this.Ru.indexOf(e)>-1&&(n=0);const s=sr.createAndSchedule(this,e,n,r,c=>this.yu(c));return this.Tu.push(s),s}fu(){this.Eu&&rr()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const n of this.Tu)if(n.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const n=this.Tu.indexOf(e);this.Tu.splice(n,1)}}class ap extends Ra{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new Qs,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Qs(e),this._firestoreClient=void 0,await e}}}function cp(t,e){const n=typeof t=="object"?t:Sn(),r=typeof t=="string"?t:"(default)",s=Xe(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const c=ho("firestore");c&&op(s,...c)}return s}(function(e,n=!0){(function(s){Wt=s})(at),ne(new ee("firestore",(r,{instanceIdentifier:s,options:c})=>{const l=r.getProvider("app").getImmediate(),h=new ap(new Jf(r.getProvider("auth-internal")),new Zf(r.getProvider("app-check-internal")),function(E,b){if(!Object.prototype.hasOwnProperty.apply(E.options,["projectId"]))throw new Q(X.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Tn(E.options.projectId,b)}(l,s),l);return c=Object.assign({useFetchStreams:n},c),h._setSettings(c),h},"PUBLIC").setMultipleInstances(!0)),W(Gs,"4.7.3",e),W(Gs,"4.7.3","esm2017")})();/**
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
 */const Zs="analytics",lp="firebase_id",up="origin",hp=60*1e3,dp="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",or="https://www.googletagmanager.com/gtag/js";/**
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
 */const Z=new bn("@firebase/analytics");/**
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
 */const fp={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},re=new Ue("analytics","Analytics",fp);/**
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
 */function pp(t){if(!t.startsWith(or)){const e=re.create("invalid-gtag-resource",{gtagURL:t});return Z.warn(e.message),""}return t}function Pa(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function gp(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function mp(t,e){const n=gp("firebase-js-sdk-policy",{createScriptURL:pp}),r=document.createElement("script"),s=`${or}?l=${t}&id=${e}`;r.src=n?n==null?void 0:n.createScriptURL(s):s,r.async=!0,document.head.appendChild(r)}function yp(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function vp(t,e,n,r,s,c){const l=r[s];try{if(l)await e[l];else{const g=(await Pa(n)).find(E=>E.measurementId===s);g&&await e[g.appId]}}catch(h){Z.error(h)}t("config",s,c)}async function _p(t,e,n,r,s){try{let c=[];if(s&&s.send_to){let l=s.send_to;Array.isArray(l)||(l=[l]);const h=await Pa(n);for(const g of l){const E=h.find(S=>S.measurementId===g),b=E&&e[E.appId];if(b)c.push(b);else{c=[];break}}}c.length===0&&(c=Object.values(e)),await Promise.all(c),t("event",r,s||{})}catch(c){Z.error(c)}}function wp(t,e,n,r){async function s(c,...l){try{if(c==="event"){const[h,g]=l;await _p(t,e,n,h,g)}else if(c==="config"){const[h,g]=l;await vp(t,e,n,r,h,g)}else if(c==="consent"){const[h,g]=l;t("consent",h,g)}else if(c==="get"){const[h,g,E]=l;t("get",h,g,E)}else if(c==="set"){const[h]=l;t("set",h)}else t(c,...l)}catch(h){Z.error(h)}}return s}function Ip(t,e,n,r,s){let c=function(...l){window[r].push(arguments)};return window[s]&&typeof window[s]=="function"&&(c=window[s]),window[s]=wp(c,t,e,n),{gtagCore:c,wrappedGtag:window[s]}}function Ep(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(or)&&n.src.includes(t))return n;return null}/**
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
 */const Tp=30,bp=1e3;class Ap{constructor(e={},n=bp){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const Oa=new Ap;function Sp(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function kp(t){var e;const{appId:n,apiKey:r}=t,s={method:"GET",headers:Sp(r)},c=dp.replace("{app-id}",n),l=await fetch(c,s);if(l.status!==200&&l.status!==304){let h="";try{const g=await l.json();!((e=g.error)===null||e===void 0)&&e.message&&(h=g.error.message)}catch{}throw re.create("config-fetch-failed",{httpStatus:l.status,responseMessage:h})}return l.json()}async function Cp(t,e=Oa,n){const{appId:r,apiKey:s,measurementId:c}=t.options;if(!r)throw re.create("no-app-id");if(!s){if(c)return{measurementId:c,appId:r};throw re.create("no-api-key")}const l=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},h=new Op;return setTimeout(async()=>{h.abort()},hp),Da({appId:r,apiKey:s,measurementId:c},l,h,e)}async function Da(t,{throttleEndTimeMillis:e,backoffCount:n},r,s=Oa){var c;const{appId:l,measurementId:h}=t;try{await Rp(r,e)}catch(g){if(h)return Z.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${h} provided in the "measurementId" field in the local Firebase config. [${g==null?void 0:g.message}]`),{appId:l,measurementId:h};throw g}try{const g=await kp(t);return s.deleteThrottleMetadata(l),g}catch(g){const E=g;if(!Pp(E)){if(s.deleteThrottleMetadata(l),h)return Z.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${h} provided in the "measurementId" field in the local Firebase config. [${E==null?void 0:E.message}]`),{appId:l,measurementId:h};throw g}const b=Number((c=E==null?void 0:E.customData)===null||c===void 0?void 0:c.httpStatus)===503?as(n,s.intervalMillis,Tp):as(n,s.intervalMillis),S={throttleEndTimeMillis:Date.now()+b,backoffCount:n+1};return s.setThrottleMetadata(l,S),Z.debug(`Calling attemptFetch again in ${b} millis`),Da(t,S,r,s)}}function Rp(t,e){return new Promise((n,r)=>{const s=Math.max(e-Date.now(),0),c=setTimeout(n,s);t.addEventListener(()=>{clearTimeout(c),r(re.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function Pp(t){if(!(t instanceof de)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class Op{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function Dp(t,e,n,r,s){if(s&&s.global){t("event",n,r);return}else{const c=await e,l=Object.assign(Object.assign({},r),{send_to:c});t("event",n,l)}}/**
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
 */async function Np(){if(Li())try{await Mi()}catch(t){return Z.warn(re.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return Z.warn(re.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function Lp(t,e,n,r,s,c,l){var h;const g=Cp(t);g.then(N=>{n[N.measurementId]=N.appId,t.options.measurementId&&N.measurementId!==t.options.measurementId&&Z.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${N.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(N=>Z.error(N)),e.push(g);const E=Np().then(N=>{if(N)return r.getId()}),[b,S]=await Promise.all([g,E]);Ep(c)||mp(c,b.measurementId),s("js",new Date);const k=(h=l==null?void 0:l.config)!==null&&h!==void 0?h:{};return k[up]="firebase",k.update=!0,S!=null&&(k[lp]=S),s("config",b.measurementId,k),b.measurementId}/**
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
 */class Mp{constructor(e){this.app=e}_delete(){return delete Dt[this.app.options.appId],Promise.resolve()}}let Dt={},eo=[];const to={};let _i="dataLayer",Up="gtag",no,Na,io=!1;function Fp(){const t=[];if(go()&&t.push("This is a browser extension environment."),mo()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,s)=>`(${s+1}) ${r}`).join(" "),n=re.create("invalid-analytics-context",{errorInfo:e});Z.warn(n.message)}}function xp(t,e,n){Fp();const r=t.options.appId;if(!r)throw re.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)Z.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw re.create("no-api-key");if(Dt[r]!=null)throw re.create("already-exists",{id:r});if(!io){yp(_i);const{wrappedGtag:c,gtagCore:l}=Ip(Dt,eo,to,_i,Up);Na=c,no=l,io=!0}return Dt[r]=Lp(t,eo,to,e,no,_i,n),new Mp(t)}function jp(t,e,n,r){t=oe(t),Dp(Na,Dt[t.app.options.appId],e,n,r).catch(s=>Z.error(s))}const ro="@firebase/analytics",so="0.10.8";function Bp(){ne(new ee(Zs,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("installations-internal").getImmediate();return xp(r,s,n)},"PUBLIC")),ne(new ee("analytics-internal",t,"PRIVATE")),W(ro,so),W(ro,so,"esm2017");function t(e){try{const n=e.getProvider(Zs).getImmediate();return{logEvent:(r,s,c)=>jp(n,r,s,c)}}catch(n){throw re.create("interop-component-reg-failed",{reason:n})}}}Bp();const La={apiKey:"AIzaSyBfu4YI21vaAPeW6WbElRL56PHbxl6knb0",authDomain:"ag-home-3db3f.firebaseapp.com",projectId:"ag-home-3db3f",storageBucket:"ag-home-3db3f.firebasestorage.app",messagingSenderId:"384219186370",appId:"1:384219186370:web:b6b69a39d6cc5affa8e75b",measurementId:"G-5W214BQMNJ"};console.log("Firebase config:",La);console.log("Firebase modules imported");let $p=null,Vp=null,Hp=null,oo=null;try{console.log("Initializing Firebase app");const t=Fi(La);console.log("Firebase app initialized:",t),$p=ta(t),Vp=cp(t),Hp=new fe,oo=new pe,oo.addScope("user:email"),console.log("Firebase initialization complete")}catch(t){console.error("Firebase initialization error:",t)}console.log("App.js loaded");const Wp=new fe,Kp=new pe,wi=document.getElementById("login"),Gp=document.getElementById("googleLogin"),zp=document.getElementById("githubLogin"),qp=document.getElementById("logoutBtn"),Jp=document.getElementById("showSignup"),Yp=document.getElementById("showLogin"),Ii=document.getElementById("signup"),Xp=document.getElementById("settingsBtn"),Nt=document.getElementById("settingsModal"),Qp=document.getElementById("closeSettings"),Ma=document.querySelectorAll(".theme-btn");function Ua(t){document.body.setAttribute("data-theme",t),localStorage.setItem("theme",t),Fa(t)}function Fa(t){Ma.forEach(e=>{e.classList.toggle("active",e.getAttribute("data-theme")===t)})}const Zp=localStorage.getItem("theme")||"dark";Ua(Zp);Xp.addEventListener("click",()=>{Nt.classList.remove("hidden"),Fa(document.body.getAttribute("data-theme"))});Qp.addEventListener("click",()=>{Nt.classList.add("hidden")});Ma.forEach(t=>{t.addEventListener("click",()=>{const e=t.getAttribute("data-theme");Ua(e)})});Nt.addEventListener("click",t=>{t.target===Nt&&Nt.classList.add("hidden")});function eg(){const t=document.getElementById("loginForm"),e=document.getElementById("signupForm");t.classList.add("slide-out-left"),e.classList.remove("hidden"),setTimeout(()=>{e.classList.remove("slide-out-right")},10),setTimeout(()=>{t.classList.add("hidden")},500)}function tg(){const t=document.getElementById("loginForm"),e=document.getElementById("signupForm");e.classList.add("slide-out-right"),t.classList.remove("hidden"),setTimeout(()=>{t.classList.remove("slide-out-left")},10),setTimeout(()=>{e.classList.add("hidden")},500)}Jp.addEventListener("click",eg);Yp.addEventListener("click",tg);function Dn(){window.location.href="/AG/home.html"}wi.addEventListener("submit",async t=>{t.preventDefault();const e=wi.querySelector('input[type="email"]').value,n=wi.querySelector('input[type="password"]').value;try{await Yu(lt,e,n),Dn()}catch(r){console.error("Login error:",r),alert("Login failed: "+r.message)}});Ii.addEventListener("submit",async t=>{t.preventDefault();const e=Ii.querySelector('input[type="email"]').value,n=Ii.querySelector('input[type="password"]').value;try{await Ju(lt,e,n),Dn()}catch(r){console.error("Signup error:",r),alert("Signup failed: "+r.message)}});Gp.addEventListener("click",async()=>{try{await Zo(lt,Wp),Dn()}catch(t){console.error("Google login error:",t),alert("Google login failed: "+t.message)}});zp.addEventListener("click",async()=>{try{await Zo(lt,Kp),Dn()}catch(t){console.error("GitHub login error:",t),alert("GitHub login failed: "+t.message)}});qp.addEventListener("click",async()=>{try{await Zu(lt),document.getElementById("loginForm").classList.remove("hidden"),document.getElementById("userDisplay").textContent="",document.getElementById("logoutBtn").classList.add("hidden")}catch(t){console.error("Logout error:",t),alert("Logout failed: "+t.message)}});lt.onAuthStateChanged(t=>{t?(document.getElementById("loginForm").classList.add("hidden"),document.getElementById("userDisplay").textContent=t.email,document.getElementById("logoutBtn").classList.remove("hidden")):(document.getElementById("loginForm").classList.remove("hidden"),document.getElementById("userDisplay").textContent="",document.getElementById("logoutBtn").classList.add("hidden"))});

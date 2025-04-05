import{L as q,_ as L,C as T,r as A,E as K,g as Y,i as H,a as N,v as V,c as B,F as J,b as Q,d as X,e as Z,f as ee,G as x,h as $,s as te,j as f,k as ne,l as G,m as ie}from"./firebase-config-BzeKTwPy.js";/**
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
 */const F="analytics",ae="firebase_id",oe="origin",se=60*1e3,re="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",E="https://www.googletagmanager.com/gtag/js";/**
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
 */const d=new q("@firebase/analytics");/**
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
 */const le={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},u=new K("analytics","Analytics",le);/**
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
 */function ce(e){if(!e.startsWith(E)){const t=u.create("invalid-gtag-resource",{gtagURL:e});return d.warn(t.message),""}return e}function O(e){return Promise.all(e.map(t=>t.catch(n=>n)))}function de(e,t){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(e,t)),n}function ue(e,t){const n=de("firebase-js-sdk-policy",{createScriptURL:ce}),a=document.createElement("script"),i=`${E}?l=${e}&id=${t}`;a.src=n?n==null?void 0:n.createScriptURL(i):i,a.async=!0,document.head.appendChild(a)}function me(e){let t=[];return Array.isArray(window[e])?t=window[e]:window[e]=t,t}async function ge(e,t,n,a,i,o){const s=a[i];try{if(s)await t[s];else{const l=(await O(n)).find(c=>c.measurementId===i);l&&await t[l.appId]}}catch(r){d.error(r)}e("config",i,o)}async function pe(e,t,n,a,i){try{let o=[];if(i&&i.send_to){let s=i.send_to;Array.isArray(s)||(s=[s]);const r=await O(n);for(const l of s){const c=r.find(p=>p.measurementId===l),m=c&&t[c.appId];if(m)o.push(m);else{o=[];break}}}o.length===0&&(o=Object.values(t)),await Promise.all(o),e("event",a,i||{})}catch(o){d.error(o)}}function fe(e,t,n,a){async function i(o,...s){try{if(o==="event"){const[r,l]=s;await pe(e,t,n,r,l)}else if(o==="config"){const[r,l]=s;await ge(e,t,n,a,r,l)}else if(o==="consent"){const[r,l]=s;e("consent",r,l)}else if(o==="get"){const[r,l,c]=s;e("get",r,l,c)}else if(o==="set"){const[r]=s;e("set",r)}else e(o,...s)}catch(r){d.error(r)}}return i}function he(e,t,n,a,i){let o=function(...s){window[a].push(arguments)};return window[i]&&typeof window[i]=="function"&&(o=window[i]),window[i]=fe(o,e,t,n),{gtagCore:o,wrappedGtag:window[i]}}function ye(e){const t=window.document.getElementsByTagName("script");for(const n of Object.values(t))if(n.src&&n.src.includes(E)&&n.src.includes(e))return n;return null}/**
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
 */const Ie=30,we=1e3;class ve{constructor(t={},n=we){this.throttleMetadata=t,this.intervalMillis=n}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,n){this.throttleMetadata[t]=n}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const z=new ve;function be(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function Ee(e){var t;const{appId:n,apiKey:a}=e,i={method:"GET",headers:be(a)},o=re.replace("{app-id}",n),s=await fetch(o,i);if(s.status!==200&&s.status!==304){let r="";try{const l=await s.json();!((t=l.error)===null||t===void 0)&&t.message&&(r=l.error.message)}catch{}throw u.create("config-fetch-failed",{httpStatus:s.status,responseMessage:r})}return s.json()}async function Le(e,t=z,n){const{appId:a,apiKey:i,measurementId:o}=e.options;if(!a)throw u.create("no-app-id");if(!i){if(o)return{measurementId:o,appId:a};throw u.create("no-api-key")}const s=t.getThrottleMetadata(a)||{backoffCount:0,throttleEndTimeMillis:Date.now()},r=new Be;return setTimeout(async()=>{r.abort()},se),j({appId:a,apiKey:i,measurementId:o},s,r,t)}async function j(e,{throttleEndTimeMillis:t,backoffCount:n},a,i=z){var o;const{appId:s,measurementId:r}=e;try{await Te(a,t)}catch(l){if(r)return d.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${r} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:s,measurementId:r};throw l}try{const l=await Ee(e);return i.deleteThrottleMetadata(s),l}catch(l){const c=l;if(!Ae(c)){if(i.deleteThrottleMetadata(s),r)return d.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${r} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:s,measurementId:r};throw l}const m=Number((o=c==null?void 0:c.customData)===null||o===void 0?void 0:o.httpStatus)===503?B(n,i.intervalMillis,Ie):B(n,i.intervalMillis),p={throttleEndTimeMillis:Date.now()+m,backoffCount:n+1};return i.setThrottleMetadata(s,p),d.debug(`Calling attemptFetch again in ${m} millis`),j(e,p,a,i)}}function Te(e,t){return new Promise((n,a)=>{const i=Math.max(t-Date.now(),0),o=setTimeout(n,i);e.addEventListener(()=>{clearTimeout(o),a(u.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function Ae(e){if(!(e instanceof J)||!e.customData)return!1;const t=Number(e.customData.httpStatus);return t===429||t===500||t===503||t===504}class Be{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}async function Fe(e,t,n,a,i){if(i&&i.global){e("event",n,a);return}else{const o=await t,s=Object.assign(Object.assign({},a),{send_to:o});e("event",n,s)}}/**
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
 */async function Se(){if(N())try{await V()}catch(e){return d.warn(u.create("indexeddb-unavailable",{errorInfo:e==null?void 0:e.toString()}).message),!1}else return d.warn(u.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function De(e,t,n,a,i,o,s){var r;const l=Le(e);l.then(g=>{n[g.measurementId]=g.appId,e.options.measurementId&&g.measurementId!==e.options.measurementId&&d.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${g.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(g=>d.error(g)),t.push(l);const c=Se().then(g=>{if(g)return a.getId()}),[m,p]=await Promise.all([l,c]);ye(o)||ue(o,m.measurementId),i("js",new Date);const y=(r=s==null?void 0:s.config)!==null&&r!==void 0?r:{};return y[oe]="firebase",y.update=!0,p!=null&&(y[ae]=p),i("config",m.measurementId,y),m.measurementId}/**
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
 */class Me{constructor(t){this.app=t}_delete(){return delete h[this.app.options.appId],Promise.resolve()}}let h={},S=[];const D={};let w="dataLayer",Ce="gtag",M,U,C=!1;function Pe(){const e=[];if(H()&&e.push("This is a browser extension environment."),Q()||e.push("Cookies are not available."),e.length>0){const t=e.map((a,i)=>`(${i+1}) ${a}`).join(" "),n=u.create("invalid-analytics-context",{errorInfo:t});d.warn(n.message)}}function Re(e,t,n){Pe();const a=e.options.appId;if(!a)throw u.create("no-app-id");if(!e.options.apiKey)if(e.options.measurementId)d.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw u.create("no-api-key");if(h[a]!=null)throw u.create("already-exists",{id:a});if(!C){me(w);const{wrappedGtag:o,gtagCore:s}=he(h,S,D,w,Ce);U=o,M=s,C=!0}return h[a]=De(e,S,D,t,M,w,n),new Me(e)}function ke(e,t,n,a){e=Y(e),Fe(U,h[e.app.options.appId],t,n,a).catch(i=>d.error(i))}const P="@firebase/analytics",R="0.10.8";function _e(){L(new T(F,(t,{options:n})=>{const a=t.getProvider("app").getImmediate(),i=t.getProvider("installations-internal").getImmediate();return Re(a,i,n)},"PUBLIC")),L(new T("analytics-internal",e,"PRIVATE")),A(P,R),A(P,R,"esm2017");function e(t){try{const n=t.getProvider(F).getImmediate();return{logEvent:(a,i,o)=>ke(n,a,i,o)}}catch(n){throw u.create("interop-component-reg-failed",{reason:n})}}}_e();const W={apiKey:"AIzaSyBfu4YI21vaAPeW6WbElRL56PHbxl6knb0",authDomain:"ag-home-3db3f.firebaseapp.com",projectId:"ag-home-3db3f",storageBucket:"ag-home-3db3f.firebasestorage.app",messagingSenderId:"384219186370",appId:"1:384219186370:web:b6b69a39d6cc5affa8e75b",measurementId:"G-5W214BQMNJ"};console.log("Firebase config:",W);console.log("Firebase modules imported");let xe=null,$e=null,Ge=null,k=null;try{console.log("Initializing Firebase app");const e=X(W);console.log("Firebase app initialized:",e),xe=Z(e),$e=ee(e),Ge=new x,k=new $,k.addScope("user:email"),console.log("Firebase initialization complete")}catch(e){console.error("Firebase initialization error:",e)}console.log("App.js loaded");const Oe=new x,ze=new $,v=document.getElementById("login"),je=document.getElementById("googleLogin"),Ue=document.getElementById("githubLogin"),We=document.getElementById("logoutBtn");document.getElementById("showSignup");document.getElementById("showLogin");const b=document.getElementById("signup");document.getElementById("settingsBtn");document.getElementById("settingsModal");document.getElementById("closeSettings");document.querySelectorAll(".theme-btn");const _=e=>{document.body.setAttribute("data-theme",e),localStorage.setItem("theme",e)};document.addEventListener("DOMContentLoaded",()=>{const e=localStorage.getItem("theme")||"dark";_(e);const t=document.getElementById("settingsModal"),n=document.getElementById("settingsBtn"),a=document.getElementById("closeSettings");n==null||n.addEventListener("click",()=>{t.classList.remove("hidden")}),a==null||a.addEventListener("click",()=>{t.classList.add("hidden")}),document.querySelectorAll(".theme-btn").forEach(l=>{l.addEventListener("click",()=>_(l.dataset.theme))});const i=document.getElementById("showSignup"),o=document.getElementById("showLogin"),s=document.getElementById("loginForm"),r=document.getElementById("signupForm");i==null||i.addEventListener("click",()=>{s.classList.add("hidden"),r.classList.remove("hidden")}),o==null||o.addEventListener("click",()=>{r.classList.add("hidden"),s.classList.remove("hidden")})});function I(){window.location.href="/home.html"}v.addEventListener("submit",async e=>{e.preventDefault();const t=v.querySelector('input[type="email"]').value,n=v.querySelector('input[type="password"]').value;try{await te(f,t,n),I()}catch(a){console.error("Login error:",a),alert("Login failed: "+a.message)}});b.addEventListener("submit",async e=>{e.preventDefault();const t=b.querySelector('input[type="email"]').value,n=b.querySelector('input[type="password"]').value;try{await ne(f,t,n),I()}catch(a){console.error("Signup error:",a),alert("Signup failed: "+a.message)}});je.addEventListener("click",async()=>{try{await G(f,Oe),I()}catch(e){console.error("Google login error:",e),alert("Google login failed: "+e.message)}});Ue.addEventListener("click",async()=>{try{await G(f,ze),I()}catch(e){console.error("GitHub login error:",e),alert("GitHub login failed: "+e.message)}});We.addEventListener("click",async()=>{try{await ie(f),document.getElementById("loginForm").classList.remove("hidden"),document.getElementById("userDisplay").textContent="",document.getElementById("logoutBtn").classList.add("hidden")}catch(e){console.error("Logout error:",e),alert("Logout failed: "+e.message)}});f.onAuthStateChanged(e=>{e?(document.getElementById("loginForm").classList.add("hidden"),document.getElementById("userDisplay").textContent=e.email,document.getElementById("logoutBtn").classList.remove("hidden")):(document.getElementById("loginForm").classList.remove("hidden"),document.getElementById("userDisplay").textContent="",document.getElementById("logoutBtn").classList.add("hidden"))});

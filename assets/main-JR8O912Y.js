import{L as H,_ as T,C as A,r as B,E as N,g as V,i as J,a as Q,v as X,c as F,F as Z,b as ee,d as te,e as ne,G as x,f as $,s as ie,h as f,j as ae,k as G,l as se}from"./firebase-config-DR-0WxIp.js";import{g as oe}from"./index.esm2017-BUFHNJL2.js";/**
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
 */const S="analytics",re="firebase_id",le="origin",ce=60*1e3,de="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",L="https://www.googletagmanager.com/gtag/js";/**
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
 */const d=new H("@firebase/analytics");/**
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
 */const ue={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},u=new N("analytics","Analytics",ue);/**
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
 */function me(e){if(!e.startsWith(L)){const t=u.create("invalid-gtag-resource",{gtagURL:e});return d.warn(t.message),""}return e}function O(e){return Promise.all(e.map(t=>t.catch(n=>n)))}function ge(e,t){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(e,t)),n}function pe(e,t){const n=ge("firebase-js-sdk-policy",{createScriptURL:me}),a=document.createElement("script"),i=`${L}?l=${e}&id=${t}`;a.src=n?n==null?void 0:n.createScriptURL(i):i,a.async=!0,document.head.appendChild(a)}function fe(e){let t=[];return Array.isArray(window[e])?t=window[e]:window[e]=t,t}async function he(e,t,n,a,i,s){const o=a[i];try{if(o)await t[o];else{const l=(await O(n)).find(c=>c.measurementId===i);l&&await t[l.appId]}}catch(r){d.error(r)}e("config",i,s)}async function ye(e,t,n,a,i){try{let s=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const r=await O(n);for(const l of o){const c=r.find(p=>p.measurementId===l),m=c&&t[c.appId];if(m)s.push(m);else{s=[];break}}}s.length===0&&(s=Object.values(t)),await Promise.all(s),e("event",a,i||{})}catch(s){d.error(s)}}function we(e,t,n,a){async function i(s,...o){try{if(s==="event"){const[r,l]=o;await ye(e,t,n,r,l)}else if(s==="config"){const[r,l]=o;await he(e,t,n,a,r,l)}else if(s==="consent"){const[r,l]=o;e("consent",r,l)}else if(s==="get"){const[r,l,c]=o;e("get",r,l,c)}else if(s==="set"){const[r]=o;e("set",r)}else e(s,...o)}catch(r){d.error(r)}}return i}function Ie(e,t,n,a,i){let s=function(...o){window[a].push(arguments)};return window[i]&&typeof window[i]=="function"&&(s=window[i]),window[i]=we(s,e,t,n),{gtagCore:s,wrappedGtag:window[i]}}function ve(e){const t=window.document.getElementsByTagName("script");for(const n of Object.values(t))if(n.src&&n.src.includes(L)&&n.src.includes(e))return n;return null}/**
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
 */const be=30,Ee=1e3;class Le{constructor(t={},n=Ee){this.throttleMetadata=t,this.intervalMillis=n}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,n){this.throttleMetadata[t]=n}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const z=new Le;function Te(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function Ae(e){var t;const{appId:n,apiKey:a}=e,i={method:"GET",headers:Te(a)},s=de.replace("{app-id}",n),o=await fetch(s,i);if(o.status!==200&&o.status!==304){let r="";try{const l=await o.json();!((t=l.error)===null||t===void 0)&&t.message&&(r=l.error.message)}catch{}throw u.create("config-fetch-failed",{httpStatus:o.status,responseMessage:r})}return o.json()}async function Be(e,t=z,n){const{appId:a,apiKey:i,measurementId:s}=e.options;if(!a)throw u.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:a};throw u.create("no-api-key")}const o=t.getThrottleMetadata(a)||{backoffCount:0,throttleEndTimeMillis:Date.now()},r=new De;return setTimeout(async()=>{r.abort()},ce),j({appId:a,apiKey:i,measurementId:s},o,r,t)}async function j(e,{throttleEndTimeMillis:t,backoffCount:n},a,i=z){var s;const{appId:o,measurementId:r}=e;try{await Fe(a,t)}catch(l){if(r)return d.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${r} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:o,measurementId:r};throw l}try{const l=await Ae(e);return i.deleteThrottleMetadata(o),l}catch(l){const c=l;if(!Se(c)){if(i.deleteThrottleMetadata(o),r)return d.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${r} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:o,measurementId:r};throw l}const m=Number((s=c==null?void 0:c.customData)===null||s===void 0?void 0:s.httpStatus)===503?F(n,i.intervalMillis,be):F(n,i.intervalMillis),p={throttleEndTimeMillis:Date.now()+m,backoffCount:n+1};return i.setThrottleMetadata(o,p),d.debug(`Calling attemptFetch again in ${m} millis`),j(e,p,a,i)}}function Fe(e,t){return new Promise((n,a)=>{const i=Math.max(t-Date.now(),0),s=setTimeout(n,i);e.addEventListener(()=>{clearTimeout(s),a(u.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function Se(e){if(!(e instanceof Z)||!e.customData)return!1;const t=Number(e.customData.httpStatus);return t===429||t===500||t===503||t===504}class De{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}async function Me(e,t,n,a,i){if(i&&i.global){e("event",n,a);return}else{const s=await t,o=Object.assign(Object.assign({},a),{send_to:s});e("event",n,o)}}/**
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
 */async function Ce(){if(Q())try{await X()}catch(e){return d.warn(u.create("indexeddb-unavailable",{errorInfo:e==null?void 0:e.toString()}).message),!1}else return d.warn(u.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function Pe(e,t,n,a,i,s,o){var r;const l=Be(e);l.then(g=>{n[g.measurementId]=g.appId,e.options.measurementId&&g.measurementId!==e.options.measurementId&&d.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${g.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(g=>d.error(g)),t.push(l);const c=Ce().then(g=>{if(g)return a.getId()}),[m,p]=await Promise.all([l,c]);ve(s)||pe(s,m.measurementId),i("js",new Date);const w=(r=o==null?void 0:o.config)!==null&&r!==void 0?r:{};return w[le]="firebase",w.update=!0,p!=null&&(w[re]=p),i("config",m.measurementId,w),m.measurementId}/**
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
 */class Re{constructor(t){this.app=t}_delete(){return delete h[this.app.options.appId],Promise.resolve()}}let h={},D=[];const M={};let v="dataLayer",ke="gtag",C,U,P=!1;function _e(){const e=[];if(J()&&e.push("This is a browser extension environment."),ee()||e.push("Cookies are not available."),e.length>0){const t=e.map((a,i)=>`(${i+1}) ${a}`).join(" "),n=u.create("invalid-analytics-context",{errorInfo:t});d.warn(n.message)}}function xe(e,t,n){_e();const a=e.options.appId;if(!a)throw u.create("no-app-id");if(!e.options.apiKey)if(e.options.measurementId)d.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw u.create("no-api-key");if(h[a]!=null)throw u.create("already-exists",{id:a});if(!P){fe(v);const{wrappedGtag:s,gtagCore:o}=Ie(h,D,M,v,ke);U=s,C=o,P=!0}return h[a]=Pe(e,D,M,t,C,v,n),new Re(e)}function $e(e,t,n,a){e=V(e),Me(U,h[e.app.options.appId],t,n,a).catch(i=>d.error(i))}const R="@firebase/analytics",k="0.10.8";function Ge(){T(new A(S,(t,{options:n})=>{const a=t.getProvider("app").getImmediate(),i=t.getProvider("installations-internal").getImmediate();return xe(a,i,n)},"PUBLIC")),T(new A("analytics-internal",e,"PRIVATE")),B(R,k),B(R,k,"esm2017");function e(t){try{const n=t.getProvider(S).getImmediate();return{logEvent:(a,i,s)=>$e(n,a,i,s)}}catch(n){throw u.create("interop-component-reg-failed",{reason:n})}}}Ge();const W={apiKey:"AIzaSyBfu4YI21vaAPeW6WbElRL56PHbxl6knb0",authDomain:"ag-home-3db3f.firebaseapp.com",projectId:"ag-home-3db3f",storageBucket:"ag-home-3db3f.firebasestorage.app",messagingSenderId:"384219186370",appId:"1:384219186370:web:b6b69a39d6cc5affa8e75b",measurementId:"G-5W214BQMNJ"};console.log("Firebase config:",W);console.log("Firebase modules imported");let Oe=null,ze=null,je=null,_=null;try{console.log("Initializing Firebase app");const e=te(W);console.log("Firebase app initialized:",e),Oe=ne(e),ze=oe(e),je=new x,_=new $,_.addScope("user:email"),console.log("Firebase initialization complete")}catch(e){console.error("Firebase initialization error:",e)}console.log("App.js loaded");const Ue=new x,We=new $,b=document.getElementById("login"),qe=document.getElementById("googleLogin"),Ke=document.getElementById("githubLogin"),Ye=document.getElementById("logoutBtn"),He=document.getElementById("showSignup"),Ne=document.getElementById("showLogin"),E=document.getElementById("signup"),Ve=document.getElementById("settingsBtn"),y=document.getElementById("settingsModal"),Je=document.getElementById("closeSettings"),q=document.querySelectorAll(".theme-btn");function K(e){document.body.setAttribute("data-theme",e),localStorage.setItem("theme",e),Y(e)}function Y(e){q.forEach(t=>{t.classList.toggle("active",t.getAttribute("data-theme")===e)})}const Qe=localStorage.getItem("theme")||"dark";K(Qe);Ve.addEventListener("click",()=>{y.classList.remove("hidden"),Y(document.body.getAttribute("data-theme"))});Je.addEventListener("click",()=>{y.classList.add("hidden")});q.forEach(e=>{e.addEventListener("click",()=>{const t=e.getAttribute("data-theme");K(t)})});y.addEventListener("click",e=>{e.target===y&&y.classList.add("hidden")});function Xe(){const e=document.getElementById("loginForm"),t=document.getElementById("signupForm");e.classList.add("slide-out-left"),t.classList.remove("hidden"),setTimeout(()=>{t.classList.remove("slide-out-right")},10),setTimeout(()=>{e.classList.add("hidden")},500)}function Ze(){const e=document.getElementById("loginForm"),t=document.getElementById("signupForm");t.classList.add("slide-out-right"),e.classList.remove("hidden"),setTimeout(()=>{e.classList.remove("slide-out-left")},10),setTimeout(()=>{t.classList.add("hidden")},500)}He.addEventListener("click",Xe);Ne.addEventListener("click",Ze);function I(){window.location.href="/home.html"}b.addEventListener("submit",async e=>{e.preventDefault();const t=b.querySelector('input[type="email"]').value,n=b.querySelector('input[type="password"]').value;try{await ie(f,t,n),I()}catch(a){console.error("Login error:",a),alert("Login failed: "+a.message)}});E.addEventListener("submit",async e=>{e.preventDefault();const t=E.querySelector('input[type="email"]').value,n=E.querySelector('input[type="password"]').value;try{await ae(f,t,n),I()}catch(a){console.error("Signup error:",a),alert("Signup failed: "+a.message)}});qe.addEventListener("click",async()=>{try{await G(f,Ue),I()}catch(e){console.error("Google login error:",e),alert("Google login failed: "+e.message)}});Ke.addEventListener("click",async()=>{try{await G(f,We),I()}catch(e){console.error("GitHub login error:",e),alert("GitHub login failed: "+e.message)}});Ye.addEventListener("click",async()=>{try{await se(f),document.getElementById("loginForm").classList.remove("hidden"),document.getElementById("userDisplay").textContent="",document.getElementById("logoutBtn").classList.add("hidden")}catch(e){console.error("Logout error:",e),alert("Logout failed: "+e.message)}});f.onAuthStateChanged(e=>{e?(document.getElementById("loginForm").classList.add("hidden"),document.getElementById("userDisplay").textContent=e.email,document.getElementById("logoutBtn").classList.remove("hidden")):(document.getElementById("loginForm").classList.remove("hidden"),document.getElementById("userDisplay").textContent="",document.getElementById("logoutBtn").classList.add("hidden"))});

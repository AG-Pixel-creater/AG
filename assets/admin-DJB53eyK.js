import{a as m}from"./firebase-config-DAJCI8_5.js";/* empty css                 */import{_ as C,C as N,r as B,E as Z,G as j,H as E,k as ee,l as te,d as q,w as ne,v as ie,y as oe,A as ae,I as h,D as y,J as b,K as I,M as g,N as z,O as M,P as W,Q as re,R as se}from"./index.esm2017-BSwLSc3b.js";import"./index.esm2017-CRsp8WJ6.js";import"https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";import"https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";import"https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";import"https://www.gstatic.com/firebasejs/10.7.1/firebase-messaging.js";import"https://www.gstatic.com/firebasejs/10.7.1/firebase-functions.js";/**
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
 */const ce="/firebase-messaging-sw.js",de="/firebase-cloud-messaging-push-scope",V="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",le="https://fcmregistrations.googleapis.com/v1",G="google.c.a.c_id",me="google.c.a.c_l",ue="google.c.a.ts",pe="google.c.a.e";var $;(function(e){e[e.DATA_MESSAGE=1]="DATA_MESSAGE",e[e.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION"})($||($={}));/**
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
 */var f;(function(e){e.PUSH_RECEIVED="push-received",e.NOTIFICATION_CLICKED="notification-clicked"})(f||(f={}));/**
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
 */function p(e){const t=new Uint8Array(e);return btoa(String.fromCharCode(...t)).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function ge(e){const t="=".repeat((4-e.length%4)%4),n=(e+t).replace(/\-/g,"+").replace(/_/g,"/"),i=atob(n),o=new Uint8Array(i.length);for(let a=0;a<i.length;++a)o[a]=i.charCodeAt(a);return o}/**
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
 */const k="fcm_token_details_db",fe=5,K="fcm_token_object_Store";async function we(e){if("databases"in indexedDB&&!(await indexedDB.databases()).map(a=>a.name).includes(k))return null;let t=null;return(await j(k,fe,{upgrade:async(i,o,a,r)=>{var c;if(o<2||!i.objectStoreNames.contains(K))return;const l=r.objectStore(K),v=await l.index("fcmSenderId").get(e);if(await l.clear(),!!v){if(o===2){const s=v;if(!s.auth||!s.p256dh||!s.endpoint)return;t={token:s.fcmToken,createTime:(c=s.createTime)!==null&&c!==void 0?c:Date.now(),subscriptionOptions:{auth:s.auth,p256dh:s.p256dh,endpoint:s.endpoint,swScope:s.swScope,vapidKey:typeof s.vapidKey=="string"?s.vapidKey:p(s.vapidKey)}}}else if(o===3){const s=v;t={token:s.fcmToken,createTime:s.createTime,subscriptionOptions:{auth:p(s.auth),p256dh:p(s.p256dh),endpoint:s.endpoint,swScope:s.swScope,vapidKey:p(s.vapidKey)}}}else if(o===4){const s=v;t={token:s.fcmToken,createTime:s.createTime,subscriptionOptions:{auth:p(s.auth),p256dh:p(s.p256dh),endpoint:s.endpoint,swScope:s.swScope,vapidKey:p(s.vapidKey)}}}}}})).close(),await E(k),await E("fcm_vapid_details_db"),await E("undefined"),he(t)?t:null}function he(e){if(!e||!e.subscriptionOptions)return!1;const{subscriptionOptions:t}=e;return typeof e.createTime=="number"&&e.createTime>0&&typeof e.token=="string"&&e.token.length>0&&typeof t.auth=="string"&&t.auth.length>0&&typeof t.p256dh=="string"&&t.p256dh.length>0&&typeof t.endpoint=="string"&&t.endpoint.length>0&&typeof t.swScope=="string"&&t.swScope.length>0&&typeof t.vapidKey=="string"&&t.vapidKey.length>0}/**
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
 */const ye="firebase-messaging-database",ve=1,w="firebase-messaging-store";let S=null;function J(){return S||(S=j(ye,ve,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(w)}}})),S}async function be(e){const t=Q(e),i=await(await J()).transaction(w).objectStore(w).get(t);if(i)return i;{const o=await we(e.appConfig.senderId);if(o)return await D(e,o),o}}async function D(e,t){const n=Q(e),o=(await J()).transaction(w,"readwrite");return await o.objectStore(w).put(t,n),await o.done,t}function Q({appConfig:e}){return e.appId}/**
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
 */const Ae={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"only-available-in-window":"This method is available in a Window context.","only-available-in-sw":"This method is available in a service worker context.","permission-default":"The notification permission was not granted and dismissed instead.","permission-blocked":"The notification permission was not granted and blocked instead.","unsupported-browser":"This browser doesn't support the API's required to use the Firebase SDK.","indexed-db-unsupported":"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)","failed-service-worker-registration":"We are unable to register the default service worker. {$browserErrorMessage}","token-subscribe-failed":"A problem occurred while subscribing the user to FCM: {$errorInfo}","token-subscribe-no-token":"FCM returned no token when subscribing the user to push.","token-unsubscribe-failed":"A problem occurred while unsubscribing the user from FCM: {$errorInfo}","token-update-failed":"A problem occurred while updating the user from FCM: {$errorInfo}","token-update-no-token":"FCM returned no token when updating the user to push.","use-sw-after-get-token":"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.","invalid-sw-registration":"The input to useServiceWorker() must be a ServiceWorkerRegistration.","invalid-bg-handler":"The input to setBackgroundMessageHandler() must be a function.","invalid-vapid-key":"The public VAPID key must be a string.","use-vapid-key-after-get-token":"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."},d=new Z("messaging","Messaging",Ae);/**
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
 */async function Ee(e,t){const n=await L(e),i=Y(t),o={method:"POST",headers:n,body:JSON.stringify(i)};let a;try{a=await(await fetch(_(e.appConfig),o)).json()}catch(r){throw d.create("token-subscribe-failed",{errorInfo:r==null?void 0:r.toString()})}if(a.error){const r=a.error.message;throw d.create("token-subscribe-failed",{errorInfo:r})}if(!a.token)throw d.create("token-subscribe-no-token");return a.token}async function ke(e,t){const n=await L(e),i=Y(t.subscriptionOptions),o={method:"PATCH",headers:n,body:JSON.stringify(i)};let a;try{a=await(await fetch(`${_(e.appConfig)}/${t.token}`,o)).json()}catch(r){throw d.create("token-update-failed",{errorInfo:r==null?void 0:r.toString()})}if(a.error){const r=a.error.message;throw d.create("token-update-failed",{errorInfo:r})}if(!a.token)throw d.create("token-update-no-token");return a.token}async function Se(e,t){const i={method:"DELETE",headers:await L(e)};try{const a=await(await fetch(`${_(e.appConfig)}/${t}`,i)).json();if(a.error){const r=a.error.message;throw d.create("token-unsubscribe-failed",{errorInfo:r})}}catch(o){throw d.create("token-unsubscribe-failed",{errorInfo:o==null?void 0:o.toString()})}}function _({projectId:e}){return`${le}/projects/${e}/registrations`}async function L({appConfig:e,installations:t}){const n=await t.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e.apiKey,"x-goog-firebase-installations-auth":`FIS ${n}`})}function Y({p256dh:e,auth:t,endpoint:n,vapidKey:i}){const o={web:{endpoint:n,auth:t,p256dh:e}};return i!==V&&(o.web.applicationPubKey=i),o}/**
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
 */const Te=7*24*60*60*1e3;async function Ie(e){const t=await De(e.swRegistration,e.vapidKey),n={vapidKey:e.vapidKey,swScope:e.swRegistration.scope,endpoint:t.endpoint,auth:p(t.getKey("auth")),p256dh:p(t.getKey("p256dh"))},i=await be(e.firebaseDependencies);if(i){if(_e(i.subscriptionOptions,n))return Date.now()>=i.createTime+Te?Me(e,{token:i.token,createTime:Date.now(),subscriptionOptions:n}):i.token;try{await Se(e.firebaseDependencies,i.token)}catch(o){console.warn(o)}return P(e.firebaseDependencies,n)}else return P(e.firebaseDependencies,n)}async function Me(e,t){try{const n=await ke(e.firebaseDependencies,t),i=Object.assign(Object.assign({},t),{token:n,createTime:Date.now()});return await D(e.firebaseDependencies,i),n}catch(n){throw n}}async function P(e,t){const i={token:await Ee(e,t),createTime:Date.now(),subscriptionOptions:t};return await D(e,i),i.token}async function De(e,t){const n=await e.pushManager.getSubscription();return n||e.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:ge(t)})}function _e(e,t){const n=t.vapidKey===e.vapidKey,i=t.endpoint===e.endpoint,o=t.auth===e.auth,a=t.p256dh===e.p256dh;return n&&i&&o&&a}/**
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
 */function R(e){const t={from:e.from,collapseKey:e.collapse_key,messageId:e.fcmMessageId};return Le(t,e),Oe(t,e),Ce(t,e),t}function Le(e,t){if(!t.notification)return;e.notification={};const n=t.notification.title;n&&(e.notification.title=n);const i=t.notification.body;i&&(e.notification.body=i);const o=t.notification.image;o&&(e.notification.image=o);const a=t.notification.icon;a&&(e.notification.icon=a)}function Oe(e,t){t.data&&(e.data=t.data)}function Ce(e,t){var n,i,o,a,r;if(!t.fcmOptions&&!(!((n=t.notification)===null||n===void 0)&&n.click_action))return;e.fcmOptions={};const c=(o=(i=t.fcmOptions)===null||i===void 0?void 0:i.link)!==null&&o!==void 0?o:(a=t.notification)===null||a===void 0?void 0:a.click_action;c&&(e.fcmOptions.link=c);const l=(r=t.fcmOptions)===null||r===void 0?void 0:r.analytics_label;l&&(e.fcmOptions.analyticsLabel=l)}/**
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
 */function Ne(e){return typeof e=="object"&&!!e&&G in e}/**
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
 */function Be(e){if(!e||!e.options)throw T("App Configuration Object");if(!e.name)throw T("App Name");const t=["projectId","apiKey","appId","messagingSenderId"],{options:n}=e;for(const i of t)if(!n[i])throw T(i);return{appName:e.name,projectId:n.projectId,apiKey:n.apiKey,appId:n.appId,senderId:n.messagingSenderId}}function T(e){return d.create("missing-app-config-values",{valueName:e})}/**
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
 */class $e{constructor(t,n,i){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const o=Be(t);this.firebaseDependencies={app:t,appConfig:o,installations:n,analyticsProvider:i}}_delete(){return Promise.resolve()}}/**
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
 */async function Ke(e){try{e.swRegistration=await navigator.serviceWorker.register(ce,{scope:de}),e.swRegistration.update().catch(()=>{})}catch(t){throw d.create("failed-service-worker-registration",{browserErrorMessage:t==null?void 0:t.message})}}/**
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
 */async function Pe(e,t){if(!t&&!e.swRegistration&&await Ke(e),!(!t&&e.swRegistration)){if(!(t instanceof ServiceWorkerRegistration))throw d.create("invalid-sw-registration");e.swRegistration=t}}/**
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
 */async function Re(e,t){t?e.vapidKey=t:e.vapidKey||(e.vapidKey=V)}/**
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
 */async function X(e,t){if(!navigator)throw d.create("only-available-in-window");if(Notification.permission==="default"&&await Notification.requestPermission(),Notification.permission!=="granted")throw d.create("permission-blocked");return await Re(e,t==null?void 0:t.vapidKey),await Pe(e,t==null?void 0:t.serviceWorkerRegistration),Ie(e)}/**
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
 */async function Fe(e,t,n){const i=He(t);(await e.firebaseDependencies.analyticsProvider.get()).logEvent(i,{message_id:n[G],message_name:n[me],message_time:n[ue],message_device_time:Math.floor(Date.now()/1e3)})}function He(e){switch(e){case f.NOTIFICATION_CLICKED:return"notification_open";case f.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}/**
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
 */async function Ue(e,t){const n=t.data;if(!n.isFirebaseMessaging)return;e.onMessageHandler&&n.messageType===f.PUSH_RECEIVED&&(typeof e.onMessageHandler=="function"?e.onMessageHandler(R(n)):e.onMessageHandler.next(R(n)));const i=n.data;Ne(i)&&i[pe]==="1"&&await Fe(e,n.messageType,i)}const F="@firebase/messaging",H="0.12.12";/**
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
 */const xe=e=>{const t=new $e(e.getProvider("app").getImmediate(),e.getProvider("installations-internal").getImmediate(),e.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",n=>Ue(t,n)),t},je=e=>{const t=e.getProvider("messaging").getImmediate();return{getToken:i=>X(t,i)}};function qe(){C(new N("messaging",xe,"PUBLIC")),C(new N("messaging-internal",je,"PRIVATE")),B(F,H),B(F,H,"esm2017")}/**
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
 */async function ze(){try{await ne()}catch{return!1}return typeof window<"u"&&ie()&&oe()&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}/**
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
 */function We(e=ee()){return ze().then(t=>{if(!t)throw d.create("unsupported-browser")},t=>{throw d.create("indexed-db-unsupported")}),te(q(e),"messaging").getImmediate()}async function Ve(e,t){return e=q(e),X(e,t)}qe();const u=ae(),Ge=We();document.getElementById("messagesList");async function Je(){try{if(await Notification.requestPermission()==="granted"){const t=await Ve(Ge,{vapidKey:"BOanVJq4Mf-4H8MXPLg-5GnuUwORDbxsvFxjXOEQEYJSIIu2sJCh85L-69I-GRPcwgALivkh_k2XH1eQfKu-bTo"});t&&await M(g(u,"adminTokens",m.currentUser.uid),{token:t,email:m.currentUser.email,lastUpdated:new Date})}}catch(e){console.error("Error setting up notifications:",e)}}async function Qe(e){if(!e)return!1;if(e.email==="ag.aliengamerz@gmail.com")return!0;try{if(e.email==="hamza.datashare@gmail.com")return!0;const t=h(y(u,"admins"),where("email","==",e.email.toLowerCase()));return!(await b(t)).empty}catch(t){return console.error("Error checking admin status:",t),!1}}function Ye(){const e=h(y(u,"messages"),re("timestamp","desc")),t=document.getElementById("messagesList");if(!t){console.error("Messages list element not found");return}try{const n=se(e,i=>{if(t.innerHTML="",i.empty){t.innerHTML='<p class="no-messages">No messages yet</p>';return}i.forEach(o=>{var c,l;const a=o.data(),r=(l=(c=a.timestamp)==null?void 0:c.toDate)!=null&&l.call(c)?a.timestamp.toDate().toLocaleString():"No date";t.innerHTML+=`
                    <div class="message-card" id="${o.id}">
                        <div class="message-header">
                            <h3>${a.name||"Anonymous"}</h3>
                            <span class="message-date">${r}</span>
                        </div>
                        <div class="message-email">
                            <a href="mailto:${a.email}">${a.email}</a>
                        </div>
                        <p class="message-content">${a.message}</p>
                        <div class="message-actions">
                            <button onclick="deleteMessage('${o.id}')" class="delete-btn">
                                Delete
                            </button>
                            <button onclick="replyToEmail('${a.email}')" class="reply-btn">
                                Reply
                            </button>
                        </div>
                    </div>
                `})},i=>{console.error("Error loading messages:",i),t.innerHTML='<p class="error-message">Error loading messages. Please refresh the page.</p>'});window.addEventListener("unload",()=>n())}catch(n){console.error("Error setting up message listener:",n)}}document.querySelectorAll(".nav-link").forEach(e=>{e.addEventListener("click",t=>{if(e.getAttribute("href").startsWith("#")){t.preventDefault();const n=e.getAttribute("data-section");Xe(n)}})});function Xe(e){document.querySelectorAll(".content-section").forEach(i=>{i.classList.remove("active")}),document.querySelectorAll(".nav-link").forEach(i=>{i.classList.remove("active")});const t=document.getElementById(`${e}-section`),n=document.querySelector(`[data-section="${e}"]`);t&&(t.classList.add("active"),(e==="admin-management"||e==="admins")&&(A(),O())),n&&n.classList.add("active")}async function A(){const e=document.getElementById("adminList");if(!e){console.error("Admin list element not found");return}try{const t=h(y(u,"admins")),n=await b(t);if(console.log("Found admins:",n.size),e.innerHTML="",n.empty){e.innerHTML="<p>No admins found</p>";return}n.forEach(i=>{var c,l;const o=i.data();console.log("Admin:",o);const a=o.email==="ag.aliengamerz@gmail.com"||o.isSuperAdmin,r=((c=m.currentUser)==null?void 0:c.email)==="ag.aliengamerz@gmail.com";e.innerHTML+=`
                <div class="admin-item">
                    <div class="admin-info">
                        <div class="admin-email">${o.email}</div>
                        <div class="admin-meta">
                            <span class="admin-type ${a?"super":"regular"}">
                                ${a?"Super Admin":"Admin"}
                            </span>
                            <span class="admin-date">
                                Added: ${((l=o.addedAt)==null?void 0:l.toDate().toLocaleDateString())||"N/A"}
                            </span>
                        </div>
                    </div>
                    ${r&&o.email!=="ag.aliengamerz@gmail.com"?`
                        <div class="admin-actions">
                            <button onclick="toggleAdminRole('${o.email}')" class="role-btn">
                                ${o.isSuperAdmin?"Make Admin":"Make Super Admin"}
                            </button>
                            <button onclick="removeAdmin('${o.email}')" class="delete-btn">
                                Remove
                            </button>
                        </div>
                    `:""}
                </div>
            `})}catch(t){console.error("Error loading admins:",t),e.innerHTML='<p class="error">Error loading admins. Please try again.</p>'}}async function O(){const e=document.getElementById("adminsList");if(console.log("Loading admin list... Element found:",!!e),!e)return;const t=h(y(u,"admins"));try{console.log("Fetching admin list data...");const n=await b(t);console.log("Admin list entries found:",n.size),e.innerHTML="",n.forEach(i=>{var c;const o=i.data();console.log("Admin list entry:",o);const a=o.isSuperAdmin||o.email==="ag.aliengamerz@gmail.com",r=((c=m.currentUser)==null?void 0:c.email)==="ag.aliengamerz@gmail.com";e.innerHTML+=`
                <div class="admin-item">
                    <div class="admin-info">
                        <div class="admin-email">${o.email}</div>
                        <div class="admin-meta">
                            <span class="admin-type ${a?"super":"regular"}">
                                ${a?"Super Admin":"Admin"}
                            </span>
                            <span class="admin-date">
                                Added: ${o.addedAt.toDate().toLocaleDateString()}
                            </span>
                        </div>
                    </div>
                    ${r&&o.email!=="ag.aliengamerz@gmail.com"?`
                        <div class="admin-actions">
                            <button onclick="toggleAdminRole('${i.id}')" 
                                class="role-btn" title="Toggle Role">
                                ${o.isSuperAdmin?"Make Admin":"Make Super Admin"}
                            </button>
                            <button onclick="removeAdmin('${i.id}')" 
                                class="delete-btn" title="Remove Admin">
                                <svg viewBox="0 0 24 24" width="16" height="16">
                                    <path fill="currentColor" d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/>
                                </svg>
                            </button>
                        </div>
                    `:""}
                </div>
            `})}catch(n){console.error("Error in loadAdminList:",n)}}function U(){document.getElementById("adminModal").classList.add("hidden")}window.openAddAdminModal=function(){document.getElementById("addAdminModal").classList.remove("hidden"),document.getElementById("adminEmail").focus()};window.closeAddAdminModal=function(){document.getElementById("addAdminModal").classList.add("hidden"),document.getElementById("addAdminForm").reset()};window.changeAdminRole=async e=>{try{const n=(await I(g(u,"admins",e))).data(),i=n.isSuperAdmin?"admin":"super admin";confirm(`Change ${n.email}'s role to ${i}?`)&&(await z(g(u,"admins",e),{isSuperAdmin:!n.isSuperAdmin,roleChangedBy:m.currentUser.email,roleChangedAt:new Date}),alert("Admin role updated successfully"))}catch(t){console.error("Error changing admin role:",t),alert("Failed to change admin role")}};window.addAdmin=async()=>{var e,t;try{if(((e=m.currentUser)==null?void 0:e.email)!=="ag.aliengamerz@gmail.com")throw new Error("Only super admin can add new admins");const n=(t=prompt("Enter new admin email:"))==null?void 0:t.toLowerCase().trim();if(!n)return;const i=g(u,"admins",n);if((await I(i)).exists())throw new Error("This email is already an admin");await M(i,{email:n,addedBy:m.currentUser.email,addedAt:new Date,isSuperAdmin:!1}),alert("Admin added successfully"),await A()}catch(n){console.error("Error adding admin:",n),alert(n.message)}};document.addEventListener("DOMContentLoaded",()=>{document.getElementById("closeAdminModal").addEventListener("click",U),document.getElementById("adminModal").addEventListener("click",t=>{t.target.id==="adminModal"&&U()}),document.getElementById("addAdminModal").addEventListener("click",t=>{t.target.id==="addAdminModal"&&closeAddAdminModal()});const e=document.getElementById("addAdminForm");e&&e.addEventListener("submit",async t=>{var r;t.preventDefault();const n=document.getElementById("adminEmail"),i=document.getElementById("isSuperAdmin");if(!n)return;const o=n.value.trim().toLowerCase(),a=(i==null?void 0:i.checked)||!1;try{if(((r=m.currentUser)==null?void 0:r.email)!=="ag.aliengamerz@gmail.com")throw new Error("Only super admin can add new admins");const c=g(u,"admins",o);if((await I(c)).exists())throw new Error("This email is already an admin");await M(c,{email:o,isSuperAdmin:a,addedBy:m.currentUser.email,addedAt:new Date}),closeAddAdminModal(),alert("Admin added successfully"),O(),A()}catch(c){console.error("Error adding admin:",c),alert(c.message)}})});window.removeAdmin=async e=>{try{if(m.currentUser.email!=="ag.aliengamerz@gmail.com")throw new Error("Only super admin can remove admins");confirm("Are you sure you want to remove this admin?")&&(await W(g(u,"admins",e)),alert("Admin removed successfully"))}catch(t){console.error("Error removing admin:",t),alert(t.message)}};window.promoteToSuperAdmin=async()=>{const e=prompt("Enter email of admin to promote to super admin:");if(e)try{const t=m.currentUser;if(t.email!=="ag.aliengamerz@gmail.com")throw new Error("Only the original super admin can promote others");const n=await b(h(y(u,"admins"),where("email","==",e)));if(n.empty)throw new Error("User is not an admin");await z(n.docs[0].ref,{isSuperAdmin:!0,promotedBy:t.email,promotedAt:new Date}),alert("Admin promoted to super admin successfully")}catch(t){console.error("Error promoting admin:",t),alert(t.message)}};let x=!1;m.onAuthStateChanged(async e=>{if(!x){if(x=!0,!e){window.location.href="index.html";return}try{if(!await Qe(e)){window.location.href="index.html";return}const n=e.email==="ag.aliengamerz@gmail.com";await Ze(e,n)}catch(t){console.error("Error checking admin status:",t),window.location.href="index.html"}}});async function Ze(e,t){var n;try{const i=document.getElementById("userDisplay");if(i&&(i.textContent=e.email),t||e.email==="hamza.datashare@gmail.com"){const o=document.getElementById("superAdminLinks");o&&o.classList.remove("hidden"),(n=document.querySelectorAll(".admin-controls"))==null||n.forEach(a=>a.classList.remove("hidden"))}await Je(),Ye(),await A(),await O()}catch(i){console.error("Error setting up UI:",i)}}window.deleteMessage=async e=>{if(confirm("Are you sure you want to delete this message?"))try{await W(g(u,"messages",e)),console.log("Message deleted successfully")}catch(t){console.error("Error deleting message:",t),alert("Failed to delete message")}};window.replyToEmail=e=>{window.location.href=`mailto:${e}`};

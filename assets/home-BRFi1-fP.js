import{h as f,l as C}from"./firebase-config-DR-0WxIp.js";f.onAuthStateChanged(e=>{if(e||(window.location.href="/index.html"),e.email==="ag.aliengamerz@gmail.com"){const t=document.querySelector("nav ul"),n=document.createElement("li");n.innerHTML='<a href="admin.html">Admin Panel</a>',t.appendChild(n)}document.getElementById("userDisplay").textContent=e.email});document.getElementById("logoutBtn").addEventListener("click",async()=>{try{await C(f),window.location.href="/index.html"}catch(e){console.error("Logout error:",e),alert("Logout failed: "+e.message)}});const l=document.getElementById("settingsModal"),p=document.querySelectorAll(".theme-btn"),x=e=>{document.body.setAttribute("data-theme",e),localStorage.setItem("theme",e),p.forEach(o=>o.classList.toggle("active",o.dataset.theme===e)),L();const t=document.querySelector("header");t&&(t.style.transition="all 0.3s ease");const n=document.getElementById("dynamicText");n&&(n.style.transition="color 0.3s ease")},L=e=>{document.querySelectorAll(".fog").forEach(n=>{n.style.background=`linear-gradient(90deg, 
            rgba(0, 255, 255, 0) 0%,
            var(--fog-color) 50%,
            rgba(0, 255, 255, 0) 100%)`})};document.getElementById("settingsBtn").addEventListener("click",()=>{document.querySelector(".loader-container")||(l.classList.remove("hidden"),updateActiveTheme(document.body.dataset.theme))});document.getElementById("closeSettings").addEventListener("click",()=>l.classList.add("hidden"));p.forEach(e=>e.addEventListener("click",()=>x(e.dataset.theme)));l.addEventListener("click",e=>{e.target===l&&l.classList.add("hidden")});x(localStorage.getItem("theme")||"dark");function h(e){const t=document.createElement("div");t.className=`curved-smoke smoke-${e}`;const n=Math.random()*window.innerWidth,o=window.innerHeight,c=document.querySelector(".logo-loader").getBoundingClientRect(),a=c.left+c.width/2,s=c.top+c.height/2,i=a-n,m=s-o;t.style.cssText=`
        left: ${n}px;
        top: ${o}px;
        --smoke-x: ${i}px;
        --smoke-y: ${m}px;
        animation: curvedSmoke ${2+Math.random()}s cubic-bezier(0.4, 0, 0.2, 1) forwards;
    `,document.body.appendChild(t),t.addEventListener("animationend",()=>t.remove())}function v(){document.querySelector(".loader-container")&&(h("cyan"),h("dark"),setTimeout(v,200))}function I(){const e=document.querySelector(".logo-loader");if(!e)return;const t=e.getBoundingClientRect(),n=t.left+t.width/2,o=t.top+t.height/2,d=c=>{const a=document.createElement("div");a.className=`targeting-smoke ${c?"dark":""}`;const s=Math.random()*Math.PI*2,i=Math.random()*300+200,m=n+Math.cos(s)*i,w=o+Math.sin(s)*i;a.style.cssText=`
            --startX: ${m}px;
            --startY: ${w}px;
            --endX: ${n}px;
            --endY: ${o}px;
            left: 0;
            top: 0;
            animation: targetLogo 2s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        `,document.body.appendChild(a),a.addEventListener("animationend",()=>a.remove())};d(!1),setTimeout(()=>d(!0),200)}function y(e){const t=document.createElement("div");t.className=`fire-particle ${e?"fire-cyan":"fire-dark"}`;const n=document.querySelector(".logo-loader");if(!n)return;const o=n.getBoundingClientRect(),d=o.left+o.width/2,c=o.top+o.height/2,a=e?-50:window.innerWidth+50,s=window.innerHeight-Math.random()*200,i=Math.random()*360*(e?1:-1);t.style.cssText=`
        --startX: ${a}px;
        --startY: ${s}px;
        --endX: ${d}px;
        --endY: ${c}px;
        --rotate: ${i}deg;
        left: 0;
        top: 0;
        animation: fireRise ${1.5+Math.random()}s cubic-bezier(0.4, 0, 0.2, 1) forwards;
    `,document.body.appendChild(t),t.addEventListener("animationend",()=>t.remove())}function E(){document.querySelector(".loader-container")&&(y(!0),y(!1),setTimeout(E,100))}document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector(".loader-container"),t=document.querySelector(".background-content"),n=document.getElementById("settingsBtn");t.classList.add("hidden"),n.style.display="none",setTimeout(()=>{e.style.opacity="0",e.style.visibility="hidden",t.classList.remove("hidden"),n.style.display="flex",setTimeout(()=>{e.remove()},500)},1e4),v(),E();const o=setInterval(()=>{if(!document.querySelector(".loader-container")){clearInterval(o);return}I()},500)});const k=["Tech Reveal's Here","Software","Search Engines","AI(Artificial Intaligence)","Future","Make Imaginations True"];let u=0;const S=100,$=50,b=2e3,r=document.getElementById("dynamicText");function g(){if(!r)return;const e=k[u];r.textContent=e.slice(0,r.textContent.length+1),r.textContent.length===e.length?setTimeout(T,b):setTimeout(g,S)}function T(){r&&(r.textContent=r.textContent.slice(0,-1),r.textContent.length===0?(u=(u+1)%k.length,setTimeout(g,S)):setTimeout(T,$))}r&&setTimeout(g,2e4);

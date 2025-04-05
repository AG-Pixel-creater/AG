import{u as w,m as L,j as f}from"./firebase-config-BzeKTwPy.js";document.documentElement.classList.add("theme-transition");const I=localStorage.getItem("theme")||"dark";document.body.setAttribute("data-theme",I);requestAnimationFrame(()=>{document.documentElement.classList.remove("theme-transition")});w(f,e=>{e?(document.getElementById("userDisplay").textContent=e.email,document.getElementById("logoutBtn").classList.remove("hidden")):window.location.href="/index.html"});document.getElementById("logoutBtn").addEventListener("click",async()=>{try{await L(f),window.location.href="/index.html"}catch(e){console.error("Logout error:",e),alert("Logout failed: "+e.message)}});const l=document.getElementById("settingsModal"),b=document.querySelectorAll(".theme-btn"),p=e=>{document.documentElement.classList.add("theme-transition"),document.body.setAttribute("data-theme",e),localStorage.setItem("theme",e),document.querySelectorAll(".theme-btn").forEach(t=>{const n=t.dataset.theme===e;t.setAttribute("aria-pressed",n)}),requestAnimationFrame(()=>{requestAnimationFrame(()=>{document.documentElement.classList.remove("theme-transition")})})};document.getElementById("settingsBtn").addEventListener("click",()=>{document.querySelector(".loader-container")||(l.classList.remove("hidden"),updateActiveTheme(document.body.dataset.theme))});document.getElementById("closeSettings").addEventListener("click",()=>l.classList.add("hidden"));b.forEach(e=>e.addEventListener("click",()=>p(e.dataset.theme)));l.addEventListener("click",e=>{e.target===l&&l.classList.add("hidden")});p(localStorage.getItem("theme")||"dark");function h(e){const t=document.createElement("div");t.className=`curved-smoke smoke-${e}`;const n=Math.random()*window.innerWidth,o=window.innerHeight,s=document.querySelector(".logo-loader").getBoundingClientRect(),a=s.left+s.width/2,d=s.top+s.height/2,c=a-n,m=d-o;t.style.cssText=`
        left: ${n}px;
        top: ${o}px;
        --smoke-x: ${c}px;
        --smoke-y: ${m}px;
        animation: curvedSmoke ${2+Math.random()}s cubic-bezier(0.4, 0, 0.2, 1) forwards;
    `,document.body.appendChild(t),t.addEventListener("animationend",()=>t.remove())}function v(){document.querySelector(".loader-container")&&(h("cyan"),h("dark"),setTimeout(v,200))}function $(){const e=document.querySelector(".logo-loader");if(!e)return;const t=e.getBoundingClientRect(),n=t.left+t.width/2,o=t.top+t.height/2,i=s=>{const a=document.createElement("div");a.className=`targeting-smoke ${s?"dark":""}`;const d=Math.random()*Math.PI*2,c=Math.random()*300+200,m=n+Math.cos(d)*c,T=o+Math.sin(d)*c;a.style.cssText=`
            --startX: ${m}px;
            --startY: ${T}px;
            --endX: ${n}px;
            --endY: ${o}px;
            left: 0;
            top: 0;
            animation: targetLogo 2s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        `,document.body.appendChild(a),a.addEventListener("animationend",()=>a.remove())};i(!1),setTimeout(()=>i(!0),200)}function y(e){const t=document.createElement("div");t.className=`fire-particle ${e?"fire-cyan":"fire-dark"}`;const n=document.querySelector(".logo-loader");if(!n)return;const o=n.getBoundingClientRect(),i=o.left+o.width/2,s=o.top+o.height/2,a=e?-50:window.innerWidth+50,d=window.innerHeight-Math.random()*200,c=Math.random()*360*(e?1:-1);t.style.cssText=`
        --startX: ${a}px;
        --startY: ${d}px;
        --endX: ${i}px;
        --endY: ${s}px;
        --rotate: ${c}deg;
        left: 0;
        top: 0;
        animation: fireRise ${1.5+Math.random()}s cubic-bezier(0.4, 0, 0.2, 1) forwards;
    `,document.body.appendChild(t),t.addEventListener("animationend",()=>t.remove())}function x(){document.querySelector(".loader-container")&&(y(!0),y(!1),setTimeout(x,100))}document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector(".loader-container"),t=document.querySelector(".background-content"),n=document.getElementById("settingsBtn");t.classList.add("hidden"),n.style.display="none",setTimeout(()=>{e.style.opacity="0",e.style.visibility="hidden",t.classList.remove("hidden"),n.style.display="flex",setTimeout(()=>{e.remove()},500)},1e4),v(),x();const o=setInterval(()=>{if(!document.querySelector(".loader-container")){clearInterval(o);return}$()},500)});const E=["Tech Reveal's Here","Software","Search Engines","AI(Artificial Intaligence)","Future","Make Imaginations True"];let u=0;const k=100,B=50,C=2e3,r=document.getElementById("dynamicText");function g(){if(!r)return;const e=E[u];r.textContent=e.slice(0,r.textContent.length+1),r.textContent.length===e.length?setTimeout(S,C):setTimeout(g,k)}function S(){r&&(r.textContent=r.textContent.slice(0,-1),r.textContent.length===0?(u=(u+1)%E.length,setTimeout(g,k)):setTimeout(S,B))}r&&setTimeout(g,2e4);

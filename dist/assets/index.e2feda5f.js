import{S as L,i as T,s as W,e as p,a as d,n as b,b as _,c as k,l as j,d as h,f as v,g as y,h as m,j as O,r as S,k as G,m as I,t as M,o as N,p as P}from"./vendor.dbcb593d.js";const q=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function l(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerpolicy&&(o.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?o.credentials="include":s.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(s){if(s.ep)return;s.ep=!0;const o=l(s);fetch(s.href,o)}};q();function $(t,e,l){const n=t.slice();return n[6]=e[l],n[7]=e,n[8]=l,n}function A(t){let e,l,n,s;function o(){t[3].call(e,t[8])}return{c(){e=p("input"),d(e,"type","text"),d(e,"maxlength","1"),d(e,"class",l=b(t[0][t[8]]==t[2][t[8]]?"correct_letter":"")+" svelte-1rkywi3")},m(r,i){_(r,e,i),k(e,t[0][t[8]]),n||(s=j(e,"input",o),n=!0)},p(r,i){t=r,i&1&&l!==(l=b(t[0][t[8]]==t[2][t[8]]?"correct_letter":"")+" svelte-1rkywi3")&&d(e,"class",l),i&1&&e.value!==t[0][t[8]]&&k(e,t[0][t[8]])},d(r){r&&h(e),n=!1,s()}}}function C(t){let e,l,n,s,o;return{c(){e=p("p"),e.textContent=`That's right. The word is ${t[2]}.`,l=v(),n=p("button"),n.textContent="Play Again",d(e,"class","mt-4 svelte-1rkywi3"),d(n,"class","restart_game_button svelte-1rkywi3")},m(r,i){_(r,e,i),_(r,l,i),_(r,n,i),s||(o=j(n,"click",t[4]),s=!0)},p:y,d(r){r&&h(e),r&&h(l),r&&h(n),s=!1,o()}}}function E(t){let e,l,n,s,o,r,i=t[0],u=[];for(let a=0;a<i.length;a+=1)u[a]=A($(t,i,a));let c=t[1]&&C(t);return{c(){e=p("div"),l=p("div"),n=p("h3"),n.textContent="Guess the word!",s=v(),o=p("div");for(let a=0;a<u.length;a+=1)u[a].c();r=v(),c&&c.c(),d(n,"class","mb-4 svelte-1rkywi3"),d(l,"class","h-100 d-flex flex-column align-items-center justify-content-center"),d(e,"class","background container-fluid")},m(a,g){_(a,e,g),m(e,l),m(l,n),m(l,s),m(l,o);for(let f=0;f<u.length;f+=1)u[f].m(o,null);m(l,r),c&&c.m(l,null)},p(a,[g]){if(g&5){i=a[0];let f;for(f=0;f<i.length;f+=1){const w=$(a,i,f);u[f]?u[f].p(w,g):(u[f]=A(w),u[f].c(),u[f].m(o,null))}for(;f<u.length;f+=1)u[f].d(1);u.length=i.length}a[1]?c?c.p(a,g):(c=C(a),c.c(),c.m(l,null)):c&&(c.d(1),c=null)},i:y,o:y,d(a){a&&h(e),O(u,a),c&&c.d()}}}const B=1;function D(t,e,l){const n=S({exactly:B}),s=n[Math.floor(Math.random()*n.length)];let o=Array(n.toString().length),r=!1;function i(c){o[c]=this.value,l(0,o)}const u=()=>window.location.reload();return t.$$.update=()=>{t.$$.dirty&1&&o.join("")==s&&l(1,r=!0)},[o,r,s,i,u]}class F extends L{constructor(e){super();T(this,e,D,E,W,{})}}function K(t){let e,l,n,s,o,r;return n=new F({}),{c(){e=p("div"),l=p("div"),G(n.$$.fragment),s=v(),o=p("p"),o.textContent="This is a custom implementation using some Wordle concepts for programming purpose only.",d(o,"class","svelte-gufd9g"),d(l,"class","h-100 row justify-content-center align-items-end svelte-gufd9g"),d(e,"class","h-100 container-fluid svelte-gufd9g")},m(i,u){_(i,e,u),m(e,l),I(n,l,null),m(l,s),m(l,o),r=!0},p:y,i(i){r||(M(n.$$.fragment,i),r=!0)},o(i){N(n.$$.fragment,i),r=!1},d(i){i&&h(e),P(n)}}}class z extends L{constructor(e){super();T(this,e,null,K,W,{})}}new z({target:document.getElementById("app")});
import{S as t,i as e,e as a,a as s,s as n,n as r,u as d,b as i,q as o,d as l,c,f as u,g as f,j as m,k as h}from"./client.e97cb05f.js";function g(t){let e;return document.title=e=t[0].title,{c:r,l:r,m:r,d:r}}function y(t){let e,n,y,p=t[0].content+"",v=t[0].title&&g(t);return{c(){v&&v.c(),e=d(),n=i(),y=a("div"),this.h()},l(t){const a=o('[data-svelte="svelte-5xy7pb"]',document.head);v&&v.l(a),e=d(),a.forEach(l),n=c(t),y=u(t,"DIV",{id:!0,class:!0}),f(y).forEach(l),this.h()},h(){m(y,"id","card-layout-grid"),m(y,"class","svelte-b1ry8f")},m(t,a){v&&v.m(document.head,null),s(document.head,e),h(t,n,a),h(t,y,a),y.innerHTML=p},p(t,[a]){t[0].title?v||(v=g(t),v.c(),v.m(e.parentNode,e)):v&&(v.d(1),v=null),1&a&&p!==(p=t[0].content+"")&&(y.innerHTML=p)},i:r,o:r,d(t){v&&v.d(t),l(e),t&&l(n),t&&l(y)}}}async function p({params:t,query:e}){const a=await this.fetch(`cards/${t.slug}.json`),s=await a.json();if(200===a.status)return s;this.error(a.status,data.error)}function v(t,e,a){let{card:s}=e;return t.$set=t=>{"card"in t&&a(0,s=t.card)},[s]}export default class extends t{constructor(t){var r;super(),document.getElementById("svelte-b1ry8f-style")||((r=a("style")).id="svelte-b1ry8f-style",r.textContent='#card-layout-grid.svelte-b1ry8f{display:grid;grid-template-columns:repeat(3, 1fr );grid-auto-rows:minmax(100px, auto);grid-template-areas:"logo         leftHeading rightHeading"\n        "sideContent  leftContent rightContent"\n    }',s(document.head,r)),e(this,t,v,y,n,{card:0})}}export{p as preload};
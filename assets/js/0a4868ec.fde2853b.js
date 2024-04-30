"use strict";(self.webpackChunksentinel_docs=self.webpackChunksentinel_docs||[]).push([[7502],{51103:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var r=n(85893),s=n(11151),l=n(52991);const i={title:"Wallets",sidebar_position:5.5},a="Wallets that integrate Sentinel dVPN",o={id:"wallets/README",title:"Wallets",description:"Here is a list of wallets supported by Sentinel dVPN. You can select the one that aligns most closely with your specific requirements.",source:"@site/docs/getting-started/wallets/README.md",sourceDirName:"wallets",slug:"/wallets/",permalink:"/getting-started/wallets/",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:5.5,frontMatter:{title:"Wallets",sidebar_position:5.5},sidebar:"tutorialSidebar",previous:{title:"Download dVPN Apps",permalink:"/getting-started/apps"},next:{title:"Leap Wallet",permalink:"/getting-started/wallets/leap/"}},c={},u=[];function d(e){const t={h1:"h1",p:"p",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"wallets-that-integrate-sentinel-dvpn",children:"Wallets that integrate Sentinel dVPN"}),"\n",(0,r.jsx)(t.p,{children:"Here is a list of wallets supported by Sentinel dVPN. You can select the one that aligns most closely with your specific requirements."}),"\n",(0,r.jsx)(l.Z,{})]})}function p(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},52991:(e,t,n)=>{n.d(t,{Z:()=>w});n(67294);var r=n(90512),s=n(53438),l=n(33692),i=n(88824),a=n(13919),o=n(95999),c=n(92503);const u={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var d=n(85893);function p(e){let{href:t,children:n}=e;return(0,d.jsx)(l.Z,{href:t,className:(0,r.Z)("card padding--lg",u.cardContainer),children:n})}function h(e){let{href:t,icon:n,title:s,description:l}=e;return(0,d.jsxs)(p,{href:t,children:[(0,d.jsxs)(c.Z,{as:"h2",className:(0,r.Z)("text--truncate",u.cardTitle),title:s,children:[n," ",s]}),l&&(0,d.jsx)("p",{className:(0,r.Z)("text--truncate",u.cardDescription),title:l,children:l})]})}function m(e){let{item:t}=e;const n=(0,s.LM)(t),r=function(){const{selectMessage:e}=(0,i.c)();return t=>e(t,(0,o.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return n?(0,d.jsx)(h,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??r(t.items.length)}):null}function f(e){let{item:t}=e;const n=(0,a.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,s.xz)(t.docId??void 0);return(0,d.jsx)(h,{href:t.href,icon:n,title:t.label,description:t.description??r?.description})}function g(e){let{item:t}=e;switch(t.type){case"link":return(0,d.jsx)(f,{item:t});case"category":return(0,d.jsx)(m,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function x(e){let{className:t}=e;const n=(0,s.jA)();return(0,d.jsx)(w,{items:n.items,className:t})}function w(e){const{items:t,className:n}=e;if(!t)return(0,d.jsx)(x,{...e});const l=(0,s.MN)(t);return(0,d.jsx)("section",{className:(0,r.Z)("row",n),children:l.map(((e,t)=>(0,d.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,d.jsx)(g,{item:e})},t)))})}},88824:(e,t,n)=>{n.d(t,{c:()=>c});var r=n(67294),s=n(52263);const l=["zero","one","two","few","many","other"];function i(e){return l.filter((t=>e.includes(t)))}const a={locale:"en",pluralForms:i(["one","other"]),select:e=>1===e?"one":"other"};function o(){const{i18n:{currentLocale:e}}=(0,s.Z)();return(0,r.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:i(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),a}}),[e])}function c(){const e=o();return{selectMessage:(t,n)=>function(e,t,n){const r=e.split("|");if(1===r.length)return r[0];r.length>n.pluralForms.length&&console.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms.join(",")}), but the message contains ${r.length}: ${e}`);const s=n.select(t),l=n.pluralForms.indexOf(s);return r[Math.min(l,r.length-1)]}(n,t,e)}}}}]);
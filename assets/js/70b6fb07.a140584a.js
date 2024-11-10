"use strict";(self.webpackChunksentinel_docs=self.webpackChunksentinel_docs||[]).push([[4609],{80773:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>r,contentTitle:()=>c,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"commands/transactions/offline/broadcast","title":"Broadcast","description":"To broadcast the transaction that has been generated and signed offline, use the following command:","source":"@site/docs/sentinel-hub/commands/transactions/offline/broadcast.md","sourceDirName":"commands/transactions/offline","slug":"/commands/transactions/offline/broadcast","permalink":"/sentinel-hub/commands/transactions/offline/broadcast","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"Broadcast","sidebar_position":3},"sidebar":"tutorialSidebar","previous":{"title":"Sign","permalink":"/sentinel-hub/commands/transactions/offline/sign"},"next":{"title":"Account","permalink":"/sentinel-hub/commands/query/account"}}');var a=t(74848),o=t(28453);const i={title:"Broadcast",sidebar_position:3},c="Broadcast a Transaction",r={},d=[];function l(n){const e={code:"code",h1:"h1",header:"header",p:"p",pre:"pre",...(0,o.R)(),...n.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.header,{children:(0,a.jsx)(e.h1,{id:"broadcast-a-transaction",children:"Broadcast a Transaction"})}),"\n",(0,a.jsx)(e.p,{children:"To broadcast the transaction that has been generated and signed offline, use the following command:"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-bash",children:"sentinelhub tx broadcast \\\n    signed.json \\\n    --node https://rpc.sentinel.co:443\n"})}),"\n",(0,a.jsx)(e.p,{children:"If you wish to engage in additional offline transactions, such as delegating, claiming rewards, unbonding, etc., you simply need to include the following four fields, as demonstrated in the process of creating and signing an offline transaction:"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-bash",children:"--generate-only \\\n--offline \\\n--account-number=<account_number> \\\n--sequence=<sequence_number> \\\n> unsigned.json\n"})}),"\n",(0,a.jsx)(e.p,{children:"To sign the transaction, use the sign command as previously shown, specifying the following fields:"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-bash",children:"--offline \\\n--account-number=<account_number> \\\n--sequence=<sequence_number>\n"})})]})}function u(n={}){const{wrapper:e}={...(0,o.R)(),...n.components};return e?(0,a.jsx)(e,{...n,children:(0,a.jsx)(l,{...n})}):l(n)}},28453:(n,e,t)=>{t.d(e,{R:()=>i,x:()=>c});var s=t(96540);const a={},o=s.createContext(a);function i(n){const e=s.useContext(o);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(a):n.components||a:i(n.components),s.createElement(o.Provider,{value:e},n.children)}}}]);
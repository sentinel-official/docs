"use strict";(self.webpackChunksentinel_docs=self.webpackChunksentinel_docs||[]).push([[9279],{10509:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>r,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var a=s(85893),t=s(11151);const o={title:"Broadcast",sidebar_position:3},i="Broadcast a Transaction",c={id:"commands/transactions/offline/broadcast",title:"Broadcast",description:"To broadcast the transaction that has been generated and signed offline, use the following command:",source:"@site/docs/sentinel-hub/commands/transactions/offline/broadcast.md",sourceDirName:"commands/transactions/offline",slug:"/commands/transactions/offline/broadcast",permalink:"/sentinel-hub/commands/transactions/offline/broadcast",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Broadcast",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Sign",permalink:"/sentinel-hub/commands/transactions/offline/sign"},next:{title:"Subscriptions",permalink:"/sentinel-hub/commands/sub"}},r={},d=[];function l(n){const e={code:"code",h1:"h1",p:"p",pre:"pre",...(0,t.a)(),...n.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.h1,{id:"broadcast-a-transaction",children:"Broadcast a Transaction"}),"\n",(0,a.jsx)(e.p,{children:"To broadcast the transaction that has been generated and signed offline, use the following command:"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-bash",children:"sentinelhub tx broadcast \\\n    signed.json \\\n    --node https://rpc.sentinel.co:443\n"})}),"\n",(0,a.jsx)(e.p,{children:"If you wish to engage in additional offline transactions, such as delegating, claiming rewards, unbonding, etc., you simply need to include the following four fields, as demonstrated in the process of creating and signing an offline transaction:"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-bash",children:"--generate-only \\\n--offline \\\n--account-number=<account_number> \\\n--sequence=<sequence_number> \\\n> unsigned.json\n"})}),"\n",(0,a.jsx)(e.p,{children:"To sign the transaction, use the sign command as previously shown, specifying the following fields:"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-bash",children:"--offline \\\n--account-number=<account_number> \\\n--sequence=<sequence_number>\n"})})]})}function u(n={}){const{wrapper:e}={...(0,t.a)(),...n.components};return e?(0,a.jsx)(e,{...n,children:(0,a.jsx)(l,{...n})}):l(n)}}}]);
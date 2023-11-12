"use strict";(self.webpackChunksentinel_docs=self.webpackChunksentinel_docs||[]).push([[9526],{54414:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>d,contentTitle:()=>n,default:()=>p,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var r=o(85893),i=o(11151);const s={title:"Overview",description:"How to expose the RPC",sidebar_position:1},n="RPC Exposure",a={id:"rpc/overview",title:"Overview",description:"How to expose the RPC",source:"@site/docs/validator-setup/rpc/overview.md",sourceDirName:"rpc",slug:"/rpc/overview",permalink:"/validator-setup/rpc/overview",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Overview",description:"How to expose the RPC",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"RPC Exposure",permalink:"/validator-setup/category/rpc-exposure"},next:{title:"Register a Domain Name",permalink:"/validator-setup/rpc/domain"}},d={},c=[];function l(e){const t={admonition:"admonition",h1:"h1",p:"p",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"rpc-exposure",children:"RPC Exposure"}),"\n",(0,r.jsx)(t.admonition,{title:"Warning",type:"danger",children:(0,r.jsx)(t.p,{children:"Exposing your Validator Node's RPC is not recommended, as it can introduce security risks. Instead, it is advisable to operate a dedicated node exclusively for RPC access."})}),"\n",(0,r.jsx)(t.p,{children:"Before going through this module, I want you to be aware that exposing your Validator Node RPC is not safe and can expose it to risks, such as a DoS attack. It would be better to have another dedicated full node to use solely for RPC."}),"\n",(0,r.jsx)(t.p,{children:"However, exposing your RPC (Remote Procedure Call) interface offers several advantages, including decentralization, developer access, blockchain monitoring, and integration with external services. To do so, you need to follow three steps in order: Register a Domain name Install Certbot Install NGINX to be used as reverse proxy server Add RPC to ChainRegistry"})]})}function p(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}}}]);
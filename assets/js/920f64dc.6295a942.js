"use strict";(self.webpackChunksentinel_docs=self.webpackChunksentinel_docs||[]).push([[9526],{26689:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>n,toc:()=>c});var r=o(87462),i=(o(67294),o(3905));const s={title:"Overview",description:"How to expose the RPC",sidebar_position:1},a="RPC Exposure",n={unversionedId:"rpc/overview",id:"rpc/overview",title:"Overview",description:"How to expose the RPC",source:"@site/docs/validator-setup/rpc/overview.md",sourceDirName:"rpc",slug:"/rpc/overview",permalink:"/validator-setup/rpc/overview",draft:!1,editUrl:"https://github.com/sentinel-official/docs/tree/main/docs/validator-setup/rpc/overview.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Overview",description:"How to expose the RPC",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"RPC Exposure",permalink:"/validator-setup/category/rpc-exposure"},next:{title:"Register a Domain Name",permalink:"/validator-setup/rpc/domain"}},d={},c=[],l={toc:c},p="wrapper";function u(e){let{components:t,...o}=e;return(0,i.kt)(p,(0,r.Z)({},l,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"rpc-exposure"},"RPC Exposure"),(0,i.kt)("admonition",{title:"Warning",type:"danger"},(0,i.kt)("p",{parentName:"admonition"},"Exposing your Validator Node's RPC is not recommended, as it can introduce security risks. Instead, it is advisable to operate a dedicated node exclusively for RPC access.")),(0,i.kt)("p",null,"Before going through this module, I want you to be aware that exposing your Validator Node RPC is not safe and can expose it to risks, such as a DoS attack. It would be better to have another dedicated full node to use solely for RPC."),(0,i.kt)("p",null,"However, exposing your RPC (Remote Procedure Call) interface offers several advantages, including decentralization, developer access, blockchain monitoring, and integration with external services. To do so, you need to follow three steps in order: Register a Domain name Install Certbot Install NGINX to be used as reverse proxy server Add RPC to ChainRegistry"))}u.isMDXComponent=!0}}]);
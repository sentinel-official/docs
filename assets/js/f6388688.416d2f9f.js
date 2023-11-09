"use strict";(self.webpackChunksentinel_docs=self.webpackChunksentinel_docs||[]).push([[2224],{17953:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>l,contentTitle:()=>h,default:()=>j,frontMatter:()=>c,metadata:()=>a,toc:()=>o});var i=r(85893),t=r(11151),n=r(67294);const d=()=>{const[e,s]=(0,n.useState)(null),[r,t]=(0,n.useState)("Chain"),d="https://raw.githubusercontent.com/cosmos/chain-registry/master/sentinel/chain.json";return(0,n.useEffect)((()=>{fetch(d).then((e=>e.json())).then((e=>s(e))).catch((e=>{console.error("Error fetching chain data:",e)}))}),[d]),(0,i.jsx)("div",{children:e&&(0,i.jsxs)("div",{children:[["Chain","RPC","REST","gRPC"].map((e=>(0,i.jsx)("button",{className:"tab-item chainButton "+(r===e?"active":""),onClick:()=>t(e),children:e},e))),"Chain"===r&&(0,i.jsx)("div",{children:(0,i.jsx)("table",{children:(0,i.jsxs)("tbody",{children:[(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:(0,i.jsx)("code",{children:"Property"})}),(0,i.jsx)("th",{children:(0,i.jsx)("code",{children:"Value"})})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"Chain Name "}),(0,i.jsx)("td",{children:e.chain_name})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"Status"}),(0,i.jsx)("td",{children:e.status})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"Network Type"}),(0,i.jsx)("td",{children:e.network_type})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"Website"}),(0,i.jsx)("td",{children:e.website})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"Pretty Name"}),(0,i.jsx)("td",{children:e.pretty_name})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"Chain ID"}),(0,i.jsx)("td",{children:e.chain_id})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"Bech32 Prefix"}),(0,i.jsx)("td",{children:e.bech32_prefix})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"Daemon Name"}),(0,i.jsx)("td",{children:e.daemon_name})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"Node Home"}),(0,i.jsx)("td",{children:e.node_home})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"Slip44"}),(0,i.jsx)("td",{children:e.slip44})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"Key Algos"}),(0,i.jsx)("td",{children:e.key_algos})]}),e.fees.fee_tokens.map(((e,s)=>(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"Fees"}),(0,i.jsx)("td",{children:(0,i.jsxs)("div",{children:["Denom: ",e.denom,(0,i.jsx)("br",{}),"Low: ",e.low_gas_price,(0,i.jsx)("br",{}),"Average: ",e.average_gas_price,(0,i.jsx)("br",{}),"High: ",e.high_gas_price]})})]},s))),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"Git Repo"}),(0,i.jsx)("td",{children:e.codebase.git_repo})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"Recommended Version"}),(0,i.jsx)("td",{children:e.codebase.recommended_version})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:" Genesis URL"}),(0,i.jsx)("td",{children:e.codebase.genesis.genesis_url})]})]})})}),"RPC"===r&&(0,i.jsx)("div",{children:(0,i.jsx)("table",{children:(0,i.jsxs)("tbody",{children:[(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:(0,i.jsx)("code",{children:"Provider"})}),(0,i.jsx)("th",{children:(0,i.jsx)("code",{children:"Address"})})]}),e.apis.rpc.map(((e,s)=>(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:e.provider}),(0,i.jsx)("td",{children:e.address})]},s)))]})})}),"REST"===r&&(0,i.jsx)("div",{children:(0,i.jsx)("table",{children:(0,i.jsxs)("tbody",{children:[(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:(0,i.jsx)("code",{children:"Provider"})}),(0,i.jsx)("th",{children:(0,i.jsx)("code",{children:"Address"})})]}),e.apis.rest.map(((e,s)=>(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:e.provider}),(0,i.jsx)("td",{children:e.address})]},s)))]})})}),"gRPC"===r&&(0,i.jsx)("div",{children:(0,i.jsx)("table",{children:(0,i.jsxs)("tbody",{children:[(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:(0,i.jsx)("code",{children:"Provider"})}),(0,i.jsx)("th",{children:(0,i.jsx)("code",{children:"Address"})})]}),e.apis.grpc.map(((e,s)=>(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:e.provider}),(0,i.jsx)("td",{children:e.address})]},s)))]})})})]})})},c={title:"Chain Registry",sidebar_position:4},h="Chain Registry",a={id:"chain-registry",title:"Chain Registry",description:"The below data is scraped from here and it is part of the chain registry repository.",source:"@site/docs/networks/chain-registry.mdx",sourceDirName:".",slug:"/chain-registry",permalink:"/networks/chain-registry",draft:!1,unlisted:!1,editUrl:"https://github.com/sentinel-official/docs/tree/main/docs/networks/chain-registry.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Chain Registry",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Asset Info",permalink:"/networks/asset-info"},next:{title:"Explorers",permalink:"/networks/explorers"}},l={},o=[];function x(e){const s={a:"a",admonition:"admonition",code:"code",h1:"h1",p:"p",strong:"strong",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.h1,{id:"chain-registry",children:"Chain Registry"}),"\n","\n","\n",(0,i.jsxs)(s.p,{children:["The below data is scraped from ",(0,i.jsx)(s.a,{href:"https://raw.githubusercontent.com/cosmos/chain-registry/master/sentinel/chain.json",children:"here"})," and it is part of the chain registry ",(0,i.jsx)(s.a,{href:"https://github.com/cosmos/chain-registry",children:"repository"}),"."]}),"\n",(0,i.jsxs)(s.p,{children:["A ",(0,i.jsx)(s.code,{children:"chain.json"})," file contains data that makes it easy to start running or interacting with a node."]}),"\n",(0,i.jsx)(d,{}),"\n",(0,i.jsx)(s.admonition,{type:"tip",children:(0,i.jsxs)(s.p,{children:["Did you know there is also an NPM package that fetch chain-registry data? ",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(s.strong,{children:"Learn more"})," : ",(0,i.jsx)(s.a,{href:"https://www.npmjs.com/package/chain-registry",children:"https://www.npmjs.com/package/chain-registry"})]})})]})}function j(e={}){const{wrapper:s}={...(0,t.a)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(x,{...e})}):x(e)}}}]);
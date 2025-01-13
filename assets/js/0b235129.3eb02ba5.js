"use strict";(self.webpackChunksentinel_docs=self.webpackChunksentinel_docs||[]).push([[8989],{66557:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>t,toc:()=>l});const t=JSON.parse('{"id":"rpc/README","title":"RPC Gateway","description":"RPC Specifications","source":"@site/docs/apis/rpc/README.mdx","sourceDirName":"rpc","slug":"/rpc/","permalink":"/apis/rpc/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"RPC Gateway","sidebar_position":2},"sidebar":"tutorialSidebar","previous":{"title":"Sentinel Public APIs","permalink":"/apis/"},"next":{"title":"Interacting with gRPC","permalink":"/apis/grpc/"}}');var s=i(74848),r=i(28453),c=i(91686);i(56289);const o={title:"RPC Gateway",sidebar_position:2},a=void 0,d={},l=[{value:"RPC Specifications",id:"rpc-specifications",level:2},{value:"Interacting with RPC endpoints",id:"interacting-with-rpc-endpoints",level:2},{value:"Generating docs",id:"generating-docs",level:2}];function p(e){const n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"rpc-specifications",children:"RPC Specifications"}),"\n",(0,s.jsx)(c.c,{children:(0,s.jsx)(c.B,{title:"RPC endpoints",description:"Sentinel Tendermint RPC endpoints",to:"/api/?v=RPC",icon:"",svgFile:"/icons/api.svg"})}),"\n",(0,s.jsx)(n.h2,{id:"interacting-with-rpc-endpoints",children:"Interacting with RPC endpoints"}),"\n",(0,s.jsxs)(n.p,{children:["As shown on the RPC specifications, there are different endpoints to communicate with the Sentinel chain. Unlike the LCD rest api, the RPC endpoints provide generic endpoints to communicate with the various modules available. For example the ",(0,s.jsx)(n.a,{href:"/api?v=RPC#/operations/abci_query",children:"ABCI Query"})," allows you the query different data from Sentinel."]}),"\n",(0,s.jsxs)(n.p,{children:["For more information please read ",(0,s.jsx)(n.a,{href:"https://docs.cosmos.network/v0.46/run-node/txs.html",children:"generating, signing and broadcasting transactions"})," on the cosmos-sdk docs."]}),"\n",(0,s.jsx)(n.h2,{id:"generating-docs",children:"Generating docs"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"brew install protobuf\nbrew install protoc-gen-go-grpc\n"})})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},91686:(e,n,i)=>{i.d(n,{B:()=>m,c:()=>u});i(96540);var t=i(31635);function s(e){return e.toLowerCase()}var r=[/([a-z0-9])([A-Z])/g,/([A-Z])([A-Z][a-z])/g],c=/[^A-Z0-9]+/gi;function o(e,n,i){return n instanceof RegExp?e.replace(n,i):n.reduce((function(e,n){return e.replace(n,i)}),e)}function a(e,n){return void 0===n&&(n={}),function(e,n){void 0===n&&(n={});for(var i=n.splitRegexp,t=void 0===i?r:i,a=n.stripRegexp,d=void 0===a?c:a,l=n.transform,p=void 0===l?s:l,h=n.delimiter,u=void 0===h?" ":h,m=o(o(e,t,"$1\0$2"),d,"\0"),f=0,g=m.length;"\0"===m.charAt(f);)f++;for(;"\0"===m.charAt(g-1);)g--;return m.slice(f,g).split("\0").map(p).join(u)}(e,(0,t.__assign)({delimiter:"."},n))}function d(e,n){return void 0===n&&(n={}),a(e,(0,t.__assign)({delimiter:"-"},n))}var l=i(56289),p=i(34164),h=i(74848);function u(e){let{id:n,title:i,children:t,description:s,className:r,hasSubSections:c=!1,HeadingTag:o="h3"}=e;return(0,h.jsxs)("div",{className:(0,p.A)("homepage-section",c&&"has-sub-sections",r),children:[i&&(0,h.jsx)(o,{id:n??d(i),children:i}),s&&(0,h.jsx)("p",{className:"section-description",children:s}),(0,h.jsx)("div",{className:"section-content",children:t})]})}function m(e){let{id:n,icon:i,svgFile:t,title:s,description:r,to:c}=e;return(0,h.jsxs)(l.A,{to:c,className:"homepage-card",children:[t?(0,h.jsx)("div",{className:"icon",children:(0,h.jsx)("img",{src:t})}):i&&(0,h.jsx)("div",{className:"icon",children:i}),(0,h.jsxs)("div",{className:"card-content",children:[(0,h.jsx)("div",{className:"title",id:n&&d(s),children:s}),(0,h.jsx)("div",{className:"description",children:r})]})]})}},28453:(e,n,i)=>{i.d(n,{R:()=>c,x:()=>o});var t=i(96540);const s={},r=t.createContext(s);function c(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);
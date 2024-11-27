"use strict";(self.webpackChunksentinel_docs=self.webpackChunksentinel_docs||[]).push([[3525],{36765:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>a});const s=JSON.parse('{"id":"health-check/sentinel-api","title":"Sentinel API","description":"To verify your Health Check status paste the following link into your browser//api.health.sentinel.co/v1/records/","source":"@site/docs/nodes/health-check/sentinel-api.md","sourceDirName":"health-check","slug":"/health-check/sentinel-api","permalink":"/nodes/health-check/sentinel-api","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"Sentinel API","sidebar_position":4},"sidebar":"tutorialSidebar","previous":{"title":"Busurnode","permalink":"/nodes/health-check/busurnode"},"next":{"title":"Plan Wizard","permalink":"/nodes/health-check/plan-wizard"}}');var o=t(74848),i=t(28453);const r={title:"Sentinel API",sidebar_position:4},l=void 0,c={},a=[];function d(e){const n={a:"a",code:"code",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components},{Details:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:["To verify your Health Check status paste the following link into your browser: ",(0,o.jsx)(n.code,{children:"https://api.health.sentinel.co/v1/records/<your_sent_node_address>"})]}),"\n",(0,o.jsx)(n.p,{children:"You will get the following json output:"}),"\n",(0,o.jsxs)(t,{children:[(0,o.jsx)("summary",{children:"Node Output"}),(0,o.jsx)("p",{children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:'{\n   "success":true,\n   "result":{\n      "addr":"sentnode1fdj2p453cegnfjwapm0l3pf0r5aknzl4wzutcl",\n      "config_exchange_timestamp":"2024-03-31T17:01:01.985Z",\n      "info_fetch_timestamp":"2024-03-31T17:00:49.824Z",\n      "location_fetch_timestamp":"2024-03-31T17:01:19.56Z",\n      "ok":true,\n      "status":1\n   }\n}\n'})})})]}),"\n",(0,o.jsx)(n.p,{children:"Ensure the following fields meet the specified conditions:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"ok"})," must be true"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"status"})," must be 1"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"info_fetch_timestamp"})," should not be a zero timestamp"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"config_exchange_timestamp"})," should not be a timestamp"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"location_fetch_timestamp"})," should not be a zero timestamp"]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["For a comprehensive list of nodes, you can also explore the ",(0,o.jsx)(n.a,{href:"https://api.health.sentinel.co/v1/records",children:"Sentinel API Records"})," main page"]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>l});var s=t(96540);const o={},i=s.createContext(o);function r(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);
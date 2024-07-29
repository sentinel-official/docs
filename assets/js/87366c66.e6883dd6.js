"use strict";(self.webpackChunksentinel_docs=self.webpackChunksentinel_docs||[]).push([[5593],{49879:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>d,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var n=t(74848),s=t(28453);const o={title:"Requirements",description:"All you need to prepare your server",sidebar_position:1},i=void 0,a={id:"server-setup/requirements",title:"Requirements",description:"All you need to prepare your server",source:"@site/docs/full-node-setup/server-setup/requirements.md",sourceDirName:"server-setup",slug:"/server-setup/requirements",permalink:"/full-node-setup/server-setup/requirements",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Requirements",description:"All you need to prepare your server",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/full-node-setup/"},next:{title:"Create New User",permalink:"/full-node-setup/server-setup/create-user"}},d={},l=[{value:"Home or Dedicated Server",id:"home-or-dedicated-server",level:2},{value:"Change Root Password",id:"change-root-password",level:2},{value:"Update the system",id:"update-the-system",level:2}];function u(e){const r={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h2,{id:"home-or-dedicated-server",children:"Home or Dedicated Server"}),"\n",(0,n.jsx)(r.p,{children:"To run a Full Node, an ideal hardware configuration may be the one below"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:"CPU: 3.1+ GHz 6+ cores"}),"\n",(0,n.jsx)(r.li,{children:"RAM: 32GB+ - DDR4"}),"\n",(0,n.jsx)(r.li,{children:"Hard Drive(s): 2 x 1TB (SSD NVMe) RAID"}),"\n",(0,n.jsx)(r.li,{children:"Bandwidth: Unmetered @ 1Gbps"}),"\n",(0,n.jsx)(r.li,{children:"Operative System: Linux (preferably Debian or Ubuntu)"}),"\n"]}),"\n",(0,n.jsx)(r.h2,{id:"change-root-password",children:"Change Root Password"}),"\n",(0,n.jsx)(r.p,{children:"Assuming you are logged into your server as root, first of all, let's change the root password and add a new one."}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-bash",children:"passwd root\n"})}),"\n",(0,n.jsx)(r.h2,{id:"update-the-system",children:"Update the system"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-bash",children:"apt-get update && apt-get upgrade -y\n"})}),"\n",(0,n.jsx)(r.p,{children:"Install sudo package"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-bash",children:"apt-get install sudo\n"})})]})}function c(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},28453:(e,r,t)=>{t.d(r,{R:()=>i,x:()=>a});var n=t(96540);const s={},o=n.createContext(s);function i(e){const r=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),n.createElement(o.Provider,{value:r},e.children)}}}]);
"use strict";(self.webpackChunksentinel_docs=self.webpackChunksentinel_docs||[]).push([[8907],{60311:(e,r,s)=>{s.r(r),s.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>l,frontMatter:()=>a,metadata:()=>o,toc:()=>u});var t=s(74848),n=s(28453);const a={title:"Create New User",sidebar_position:2},i="Create New User",o={id:"server-setup/create-user",title:"Create New User",description:"Creating a new user is crucial because you should avoid managing your validator under the root user account.",source:"@site/docs/validator-setup/server-setup/create-user.md",sourceDirName:"server-setup",slug:"/server-setup/create-user",permalink:"/validator-setup/server-setup/create-user",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Create New User",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Requirements",permalink:"/validator-setup/server-setup/requirements"},next:{title:"SSH",permalink:"/validator-setup/server-setup/ssh"}},c={},u=[];function d(e){const r={code:"code",h1:"h1",header:"header",p:"p",pre:"pre",...(0,n.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.header,{children:(0,t.jsx)(r.h1,{id:"create-new-user",children:"Create New User"})}),"\n",(0,t.jsxs)(r.p,{children:["Creating a new user is crucial because you should avoid managing your validator under the root user account.\nOur user will be named ",(0,t.jsx)(r.code,{children:"sentinel"}),", and you will be asked to create a new password for this user."]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:"adduser sentinel\n"})}),"\n",(0,t.jsx)(r.p,{children:"Grant sudo access to sentinel user. Open the sudoers file"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:"nano /etc/sudoers\n"})}),"\n",(0,t.jsx)(r.p,{children:"Add the following line"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",metastring:'title="/etc/sudoers"',children:"sentinel ALL=(ALL:ALL) ALL\n"})}),"\n",(0,t.jsx)(r.p,{children:"Switch to the newly created user"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:"su - sentinel\n"})})]})}function l(e={}){const{wrapper:r}={...(0,n.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},28453:(e,r,s)=>{s.d(r,{R:()=>i,x:()=>o});var t=s(96540);const n={},a=t.createContext(n);function i(e){const r=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),t.createElement(a.Provider,{value:r},e.children)}}}]);
"use strict";(self.webpackChunksentinel_docs=self.webpackChunksentinel_docs||[]).push([[6468],{69439:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>t,metadata:()=>i,toc:()=>c});var r=n(85893),d=n(11151);const t={title:"Add Servers",description:"How to add servers to the dashboard",sidebar_position:2},o="Add your Servers",i={id:"methods/node-spawner/add-servers",title:"Add Servers",description:"How to add servers to the dashboard",source:"@site/docs/node-setup/methods/node-spawner/add-servers.md",sourceDirName:"methods/node-spawner",slug:"/methods/node-spawner/add-servers",permalink:"/node-setup/methods/node-spawner/add-servers",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Add Servers",description:"How to add servers to the dashboard",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Overview & Setup",permalink:"/node-setup/methods/node-spawner/overview"},next:{title:"Node Setup",permalink:"/node-setup/methods/node-spawner/node-setup"}},a={},c=[{value:"Local",id:"local",level:2},{value:"Remote",id:"remote",level:2}];function l(e){const s={code:"code",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,d.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.h1,{id:"add-your-servers",children:"Add your Servers"}),"\n",(0,r.jsx)(s.p,{children:"You can utilize Node Spawner to integrate both local and remote servers, including those hosted on Virtual Private Servers (VPS), to enhance your convenience."}),"\n",(0,r.jsx)(s.h2,{id:"local",children:"Local"}),"\n",(0,r.jsx)(s.p,{children:"To begin, we should verify whether the SSH service is enabled."}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"sudo systemctl status sshd.service\n"})}),"\n",(0,r.jsx)(s.p,{children:"If it is not enabled, we'll proceed to enable it."}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"sudo systemctl enable sshd.service\n"})}),"\n",(0,r.jsx)(s.p,{children:"From the dashboard insert:"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"Host: 127.0.0.1"}),"\n",(0,r.jsxs)(s.li,{children:["Username: ",(0,r.jsx)(s.code,{children:"your-username"})]}),"\n",(0,r.jsxs)(s.li,{children:["Password: ",(0,r.jsx)(s.code,{children:"your-password"})]}),"\n",(0,r.jsx)(s.li,{children:"Port: 22"}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.img,{src:n(46773).Z+"",width:"792",height:"362"})}),"\n",(0,r.jsx)(s.p,{children:"Your node has been added to the node list. To access it, simply click on the icon to the right, which features a square box with an upward arrow. This action will open the installation and configuration screen for your convenience."}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.img,{src:n(53235).Z+"",width:"739",height:"299"})}),"\n",(0,r.jsx)(s.h2,{id:"remote",children:"Remote"}),"\n",(0,r.jsx)(s.p,{children:"The process remains identical; the only distinction is that you need to input the IP address of your remote machine and establish an SSH connection, which, of course, must be enabled."})]})}function h(e={}){const{wrapper:s}={...(0,d.a)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},46773:(e,s,n)=>{n.d(s,{Z:()=>r});const r=n.p+"assets/images/dashboard-2-312a752a749be16559afcda05eabe118.png"},53235:(e,s,n)=>{n.d(s,{Z:()=>r});const r=n.p+"assets/images/dashboard-3-6ce0c20e03be646de7fe2351aad90105.png"}}]);
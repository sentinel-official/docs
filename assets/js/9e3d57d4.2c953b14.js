"use strict";(self.webpackChunksentinel_docs=self.webpackChunksentinel_docs||[]).push([[5817],{15690:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>i,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>d,toc:()=>l});var n=s(87462),r=(s(67294),s(3905));const o={title:"Add Servers",description:"How to add servers to the dashboard",sidebar_position:2},a="Add your Servers",d={unversionedId:"node-spawner/add-servers",id:"node-spawner/add-servers",title:"Add Servers",description:"How to add servers to the dashboard",source:"@site/docs/node-setup/node-spawner/add-servers.md",sourceDirName:"node-spawner",slug:"/node-spawner/add-servers",permalink:"/node-setup/node-spawner/add-servers",draft:!1,editUrl:"https://github.com/sentinel-official/docs/tree/main/docs/node-setup/node-spawner/add-servers.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Add Servers",description:"How to add servers to the dashboard",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Overview & Setup",permalink:"/node-setup/node-spawner/overview"},next:{title:"Node Setup",permalink:"/node-setup/node-spawner/node-setup"}},i={},l=[{value:"Local",id:"local",level:2},{value:"Remote",id:"remote",level:2}],u={toc:l},c="wrapper";function p(e){let{components:t,...o}=e;return(0,r.kt)(c,(0,n.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"add-your-servers"},"Add your Servers"),(0,r.kt)("p",null,"You can utilize Node Spawner to integrate both local and remote servers, including those hosted on Virtual Private Servers (VPS), to enhance your convenience."),(0,r.kt)("h2",{id:"local"},"Local"),(0,r.kt)("p",null,"To begin, we should verify whether the SSH service is enabled."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo systemctl status sshd.service\n")),(0,r.kt)("p",null,"If it is not enabled, we'll proceed to enable it."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo systemctl enable sshd.service\n")),(0,r.kt)("p",null,"From the dashboard insert:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Host: 127.0.0.1"),(0,r.kt)("li",{parentName:"ul"},"Username: ",(0,r.kt)("inlineCode",{parentName:"li"},"your-username")),(0,r.kt)("li",{parentName:"ul"},"Password: ",(0,r.kt)("inlineCode",{parentName:"li"},"your-password")),(0,r.kt)("li",{parentName:"ul"},"Port: 22")),(0,r.kt)("p",null,(0,r.kt)("img",{src:s(46773).Z,width:"792",height:"362"})),(0,r.kt)("p",null,"Your node has been added to the node list. To access it, simply click on the icon to the right, which features a square box with an upward arrow. This action will open the installation and configuration screen for your convenience."),(0,r.kt)("p",null,(0,r.kt)("img",{src:s(53235).Z,width:"739",height:"299"})),(0,r.kt)("h2",{id:"remote"},"Remote"),(0,r.kt)("p",null,"The process remains identical; the only distinction is that you need to input the IP address of your remote machine and establish an SSH connection, which, of course, must be enabled."))}p.isMDXComponent=!0},46773:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/dashboard-2-312a752a749be16559afcda05eabe118.png"},53235:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/dashboard-3-6ce0c20e03be646de7fe2351aad90105.png"}}]);
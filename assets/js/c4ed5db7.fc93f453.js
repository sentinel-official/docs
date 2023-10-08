"use strict";(self.webpackChunksentinel_docs=self.webpackChunksentinel_docs||[]).push([[5858],{74995:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>l});var o=n(87462),a=(n(67294),n(3905));const i={title:"SSH into the Container",sidebar_position:3},s="SSH into the Container",r={unversionedId:"ssh",id:"ssh",title:"SSH into the Container",description:"You might prefer accessing your container via SSH, as the default Cloudmos shell may not provide a satisfactory user experience. To accomplish this, we will need the correct provider name and port information for the SSH connection.",source:"@site/docs/node-akash/ssh.md",sourceDirName:".",slug:"/ssh",permalink:"/node-akash/ssh",draft:!1,editUrl:"https://github.com/sentinel-official/docs/tree/main/docs/node-akash/ssh.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"SSH into the Container",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Deploy the Node",permalink:"/node-akash/deploy"},next:{title:"Remove the Node",permalink:"/node-akash/close"}},p={},l=[],c={toc:l},d="wrapper";function h(e){let{components:t,...i}=e;return(0,a.kt)(d,(0,o.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"ssh-into-the-container"},"SSH into the Container"),(0,a.kt)("p",null,"You might prefer accessing your container via SSH, as the default Cloudmos shell may not provide a satisfactory user experience. To accomplish this, we will need the correct ",(0,a.kt)("strong",{parentName:"p"},"provider name")," and ",(0,a.kt)("strong",{parentName:"p"},"port")," information for the SSH connection."),(0,a.kt)("p",null,"On ",(0,a.kt)("inlineCode",{parentName:"p"},"LEASE")," tab make note of the forwarded port 22; in this case, it is set to ",(0,a.kt)("strong",{parentName:"p"},"32725"),"."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Check IP &amp; Port",src:n(88286).Z,width:"481",height:"475"})),(0,a.kt)("p",null,"Click on the ",(0,a.kt)("strong",{parentName:"p"},"provider")," and retrieve the full name, such as ",(0,a.kt)("inlineCode",{parentName:"p"},"provider.hurricane.akash.pub"),"."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Provider",src:n(23573).Z,width:"618",height:"425"})),(0,a.kt)("p",null,"Now open a terminal and type"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"ssh root@provider.hurricane.akash.pub -p 32757\n")),(0,a.kt)("p",null,"Now you have SSHed into your container!"),(0,a.kt)("p",null,"If you wat to see your node logs in real time you can type this command"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"tail -n 1000000 -f /LOG\n")))}h.isMDXComponent=!0},88286:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/checks-c2293feefd670f7092e63b85d6fca74f.png"},23573:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/provider-98473325f9927ff58975248658833e6a.png"}}]);
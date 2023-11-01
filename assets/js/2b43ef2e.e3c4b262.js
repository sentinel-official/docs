"use strict";(self.webpackChunksentinel_docs=self.webpackChunksentinel_docs||[]).push([[7156],{42903:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>u,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var o=n(87462),a=(n(67294),n(3905));const i={title:"Monitoring with Uptime Kuma",description:"How to monitor your running node",sidebar_position:7},r="Monitoring with Uptime Kuma",l={unversionedId:"manual/monitoring",id:"manual/monitoring",title:"Monitoring with Uptime Kuma",description:"How to monitor your running node",source:"@site/docs/node-setup/manual/monitoring.md",sourceDirName:"manual",slug:"/manual/monitoring",permalink:"/node-setup/manual/monitoring",draft:!1,editUrl:"https://github.com/sentinel-official/docs/tree/main/docs/node-setup/manual/monitoring.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{title:"Monitoring with Uptime Kuma",description:"How to monitor your running node",sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Run the Node",permalink:"/node-setup/manual/node-run"},next:{title:"Cloudmos on Akash",permalink:"/node-setup/category/cloudmos-on-akash"}},u={},s=[],m={toc:s},p="wrapper";function d(t){let{components:e,...n}=t;return(0,a.kt)(p,(0,o.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"monitoring-with-uptime-kuma"},"Monitoring with Uptime Kuma"),(0,a.kt)("p",null,"To ensure constant monitoring of your node to prevent any downtime, we highly recommend using ",(0,a.kt)("a",{parentName:"p",href:"https://uptime.kuma.pet/"},"Uptime Kuma"),". This tool can be self-hosted using a Docker container by executing the following command"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"docker run -d --restart=always -p 3001:3001 -v uptime-kuma:/app/data --name uptime-kuma louislam/uptime-kuma:1\n")),(0,a.kt)("p",null,"Once the container has started and appears healthy, you can access Uptime Kuma through HTTP"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"http://localhost:3001\n")),(0,a.kt)("p",null,"Now, you can click on ",(0,a.kt)("inlineCode",{parentName:"p"},"Add new monitor"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"on Monitor type select ",(0,a.kt)("inlineCode",{parentName:"li"},"TCP Port")),(0,a.kt)("li",{parentName:"ul"},"in the Hostname field, add your node's IP address"),(0,a.kt)("li",{parentName:"ul"},"in the Port field, add the TCP port (on this guide, the port is ",(0,a.kt)("inlineCode",{parentName:"li"},"12345"),")")),(0,a.kt)("p",null,"In Notifications, you can select your favorite notification type. Let's cover an example using Telegram."),(0,a.kt)("p",null,"Go to ",(0,a.kt)("a",{parentName:"p",href:"https://t.me/BotFather."},"BotFather"),", create your alert bot and take note of the generated token"),(0,a.kt)("p",null,"Go to ",(0,a.kt)("a",{parentName:"p",href:"https://t.me/chatIDrobot"},"ChatIDrobot")," and get your chat_id"),(0,a.kt)("p",null,'Write a "test message on your bot"'),(0,a.kt)("p",null,"Click on the link to check the api"),(0,a.kt)("p",null,"Finally click on Test to check if the Telegram alert system works"),(0,a.kt)("p",null,"Then save."),(0,a.kt)("p",null,"Contratulations, your bot is now active!"))}d.isMDXComponent=!0}}]);
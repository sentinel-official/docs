"use strict";(self.webpackChunksentinel_docs=self.webpackChunksentinel_docs||[]).push([[4905],{28025:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>d});var i=n(85893),o=n(11151);const s={title:"Uptime Kuma",description:"How to monitor your running node",sidebar_position:5},a="Uptime Kuma",r={id:"uptime-kuma",title:"Uptime Kuma",description:"How to monitor your running node",source:"@site/docs/node-monitoring/uptime-kuma.md",sourceDirName:".",slug:"/uptime-kuma",permalink:"/node-monitoring/uptime-kuma",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Uptime Kuma",description:"How to monitor your running node",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Grafana",permalink:"/node-monitoring/grafana"}},c={},d=[];function l(e){const t={a:"a",code:"code",h1:"h1",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"uptime-kuma",children:"Uptime Kuma"}),"\n",(0,i.jsxs)(t.p,{children:["Uptime Kuma (",(0,i.jsx)(t.a,{href:"https://uptime.kuma.pet/",children:"website"}),") is a tool specifically designed for monitoring the availability and uptime of services and websites. It checks if services are running and responds as expected by sending HTTP requests at regular intervals. In contrast to the Node Exporter/Prometheus/Grafana stack, Uptime Kuma places a greater emphasis on ensuring the accessibility and responsiveness of your services rather than collecting in-depth system metrics."]}),"\n",(0,i.jsx)(t.p,{children:"This is a easy and ideal solution to ensure constant monitoring of your node to prevent any downtime.\nTo get started, you can self-host this tool in a Docker container by executing the following command:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"docker run -d --restart=always -p 3001:3001 -v uptime-kuma:/app/data --name uptime-kuma louislam/uptime-kuma:1\n"})}),"\n",(0,i.jsx)(t.p,{children:"Once the container has started and appears healthy, you can access Uptime Kuma through HTTP"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"http://localhost:3001\n"})}),"\n",(0,i.jsxs)(t.p,{children:["Now, you can click on ",(0,i.jsx)(t.code,{children:"Add new monitor"}),":"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["on Monitor type select ",(0,i.jsx)(t.code,{children:"TCP Port"})]}),"\n",(0,i.jsx)(t.li,{children:"in the Hostname field, add your node's IP address"}),"\n",(0,i.jsxs)(t.li,{children:["in the Port field, add the TCP port (on this guide, the port is ",(0,i.jsx)(t.code,{children:"12345"}),")"]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"In Notifications, you can select your favorite notification type. Let's cover an example using Telegram."}),"\n",(0,i.jsxs)(t.p,{children:["Go to ",(0,i.jsx)(t.a,{href:"https://t.me/BotFather.",children:"BotFather"}),", create your alert bot and take note of the generated token"]}),"\n",(0,i.jsxs)(t.p,{children:["Go to ",(0,i.jsx)(t.a,{href:"https://t.me/chatIDrobot",children:"ChatIDrobot"})," and get your chat_id"]}),"\n",(0,i.jsx)(t.p,{children:'Write a "test message on your bot"'}),"\n",(0,i.jsx)(t.p,{children:"Click on the link to check the api"}),"\n",(0,i.jsx)(t.p,{children:"Finally click on Test to check if the Telegram alert system works"}),"\n",(0,i.jsx)(t.p,{children:"Then save."}),"\n",(0,i.jsx)(t.p,{children:"Contratulations, your bot is now active!"})]})}function h(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}}}]);
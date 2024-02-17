"use strict";(self.webpackChunksentinel_docs=self.webpackChunksentinel_docs||[]).push([[4102],{16521:(n,e,a)=>{a.r(e),a.d(e,{assets:()=>r,contentTitle:()=>l,default:()=>p,frontMatter:()=>t,metadata:()=>d,toc:()=>o});var s=a(85893),i=a(11151);const t={title:"Plan",sidebar_position:2},l=void 0,d={id:"commands/transactions/plan",title:"Plan",description:"These commands are related to a Plan management",source:"@site/docs/sentinel-cli/commands/transactions/plan.md",sourceDirName:"commands/transactions",slug:"/commands/transactions/plan",permalink:"/sentinel-cli/commands/transactions/plan",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Plan",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"List",permalink:"/sentinel-cli/commands/transactions/list"},next:{title:"Contributing",permalink:"/sentinel-cli/contributing"}},r={},o=[{value:"Create a Plan",id:"create-a-plan",level:2},{value:"Link Node to a Plan",id:"link-node-to-a-plan",level:2},{value:"Unlink Node to a Plan",id:"unlink-node-to-a-plan",level:2},{value:"Subscribe to a Plan",id:"subscribe-to-a-plan",level:2},{value:"Update Status of a Plan",id:"update-status-of-a-plan",level:2}];function c(n){const e={code:"code",h2:"h2",p:"p",pre:"pre",...(0,i.a)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.p,{children:"These commands are related to a Plan management"}),"\n",(0,s.jsx)(e.h2,{id:"create-a-plan",children:"Create a Plan"}),"\n",(0,s.jsx)(e.p,{children:"Before creating a Plan, make sure you have registered as provider first."}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"sentinelcli tx plan create \\\n  <duration><time_denom> \\\n  <gigabytes> \\\n  <prices>udvpn \\\n  --from <provider_key> \\\n  --chain-id=sentinelhub-2 \\\n  --node https://rpc.sentinel.co:443 \\\n  --gas-prices=0.5udvpn \\\n  --gas=300000\n"})}),"\n",(0,s.jsx)(e.h2,{id:"link-node-to-a-plan",children:"Link Node to a Plan"}),"\n",(0,s.jsx)(e.p,{children:"Link a Node to a plan."}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"sentinelcli tx plan link-node \\\n  <plan_id> \\\n  <sentnode_address> \\\n  --from <provider_key> \\\n  --chain-id=sentinelhub-2 \\\n  --node https://rpc.sentinel.co:443 \\\n  --gas-prices=0.5udvpn \\\n  --gas=300000\n"})}),"\n",(0,s.jsx)(e.h2,{id:"unlink-node-to-a-plan",children:"Unlink Node to a Plan"}),"\n",(0,s.jsx)(e.p,{children:"Unink a Node to a plan."}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"sentinelcli tx plan unlink-node \\\n  <plan_id> \\\n  <sentnode_address> \\\n  --from <provider_key> \\\n  --chain-id=sentinelhub-2 \\\n  --node https://rpc.sentinel.co:443 \\\n  --gas-prices=0.5udvpn \\\n  --gas=300000\n"})}),"\n",(0,s.jsx)(e.h2,{id:"subscribe-to-a-plan",children:"Subscribe to a Plan"}),"\n",(0,s.jsx)(e.p,{children:"Subscribe to a Plan"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"sentinelcli tx plan subscribe \\\n  <plan_id> \\\n  udvpn \\\n  --chain-id=sentinelhub-2 \\\n  --node https://rpc.sentinel.co:443 \\\n  --gas-prices=0.5udvpn \\\n  --gas=300000\n"})}),"\n",(0,s.jsx)(e.h2,{id:"update-status-of-a-plan",children:"Update Status of a Plan"}),"\n",(0,s.jsx)(e.p,{children:"Get a Plan status update."}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"sentinelcli tx plan update-status \\\n  <plan_id> \\\n  <status> \\\n  --from <provider_key> \\\n  --chain-id=sentinelhub-2 \\\n  --node https://rpc.sentinel.co:443 \\\n  --gas-prices=0.5udvpn \\\n  --gas=300000\n"})})]})}function p(n={}){const{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(c,{...n})}):c(n)}}}]);
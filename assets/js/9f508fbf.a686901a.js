"use strict";(self.webpackChunksentinel_docs=self.webpackChunksentinel_docs||[]).push([[6787],{62863:(e,i,s)=>{s.r(i),s.d(i,{assets:()=>d,contentTitle:()=>a,default:()=>l,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var t=s(85893),n=s(11151);const o={title:"Commission Fees",sidebar_position:1},a="Edit Commission Fees",r={id:"commands/edit/fees",title:"Commission Fees",description:"To adjust your validator commission fee, utilize the following command:",source:"@site/docs/sentinel-hub/commands/edit/fees.md",sourceDirName:"commands/edit",slug:"/commands/edit/fees",permalink:"/sentinel-hub/commands/edit/fees",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Commission Fees",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Multisig",permalink:"/sentinel-hub/commands/keys/multisig"},next:{title:"Authz",permalink:"/sentinel-hub/commands/transactions/authz"}},d={},c=[];function m(e){const i={a:"a",code:"code",h1:"h1",p:"p",pre:"pre",...(0,n.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.h1,{id:"edit-commission-fees",children:"Edit Commission Fees"}),"\n",(0,t.jsx)(i.p,{children:"To adjust your validator commission fee, utilize the following command:"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-bash",children:"sentinelhub tx staking edit-validator \\\n  --commission-rate=<new_commission_rate> \\\n  --from <validator_key_name> \\\n --chain-id=sentinelhub-2 \\\n  --gas-prices=0.5udvpn \\\n  --gas=300000\n"})}),"\n",(0,t.jsxs)(i.p,{children:["Ensure to substitute ",(0,t.jsx)(i.code,{children:"<validator_key_name>"})," with your specific validator key name and ",(0,t.jsx)(i.code,{children:"<new_commission_rate>"})," with the desired commission rate. For instance, if you initially set the commission-rate to 0.05% during the ",(0,t.jsx)(i.a,{href:"/validator-setup/become-validator",children:(0,t.jsx)(i.code,{children:"create-validator"})})," transaction, you can now adjust it to 0.06% or any other value within the limits defined by the ",(0,t.jsx)(i.code,{children:"commission-max-change-rate"})," parameter."]}),"\n",(0,t.jsxs)(i.p,{children:["Please note that in this scenario, the flag ",(0,t.jsx)(i.code,{children:"--node"})," is not utilized, assuming you are executing this command directly from your validator machine."]})]})}function l(e={}){const{wrapper:i}={...(0,n.a)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(m,{...e})}):m(e)}}}]);
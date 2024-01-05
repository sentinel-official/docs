"use strict";(self.webpackChunksentinel_docs=self.webpackChunksentinel_docs||[]).push([[8112],{10715:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>d,toc:()=>c});var s=a(85893),t=a(11151);const r={title:"Staking Rewards",sidebar_position:3},i="Staking Rewards",d={id:"commands/transactions/rewards",title:"Staking Rewards",description:"With Sentinel Hub, you can execute various operations to engage with staking rewards.",source:"@site/docs/sentinel-hub/commands/transactions/rewards.md",sourceDirName:"commands/transactions",slug:"/commands/transactions/rewards",permalink:"/sentinel-hub/commands/transactions/rewards",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Staking Rewards",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Delegate",permalink:"/sentinel-hub/commands/transactions/delegate"},next:{title:"Unbond",permalink:"/sentinel-hub/commands/transactions/unbond"}},o={},c=[{value:"Withdraw Staking Rewards",id:"withdraw-staking-rewards",level:2},{value:"Set Withdrawal Address",id:"set-withdrawal-address",level:2}];function l(e){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"staking-rewards",children:"Staking Rewards"}),"\n",(0,s.jsx)(n.p,{children:"With Sentinel Hub, you can execute various operations to engage with staking rewards."}),"\n",(0,s.jsx)(n.h2,{id:"withdraw-staking-rewards",children:"Withdraw Staking Rewards"}),"\n",(0,s.jsx)(n.p,{children:"To claim your staking rewards, execute the following command in your terminal:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"sentinelhub tx distribution withdraw-rewards <sentvaloper_validator_address> \\\n    --from=<your_keyname> \\\n    --chain-id=sentinelhub-2 \\\n    --node https://rpc.sentinel.co:443 \\\n    --gas-prices=0.5udvpn \\\n    --gas=300000 \\\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Replace ",(0,s.jsx)(n.code,{children:"<sentvaloper_validator_address>"})," with the actual validator address you staked with, and ",(0,s.jsx)(n.code,{children:"<your_keyname>"})," with the name of your key. Adjust the gas prices and limit according to your preference and network conditions."]}),"\n",(0,s.jsx)(n.h2,{id:"set-withdrawal-address",children:"Set Withdrawal Address"}),"\n",(0,s.jsx)(n.p,{children:"To set an alternative address for withdrawing your rewards, use the following command:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"sentinelhub tx distribution set-withdraw-addr <withdrawal_address> \\\n    --from=<your_keyname> \\\n    --chain-id=sentinelhub-2 \\\n    --node https://rpc.sentinel.co:443 \\\n    --gas-prices=0.5udvpn \\\n    --gas=300000 \\\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Make sure to replace ",(0,s.jsx)(n.code,{children:"<withdrawal_address>"})," with the actual address you want to set as your withdrawal destination and ",(0,s.jsx)(n.code,{children:"<your_keyname>"})," with your specific key name. Adjust other parameters as needed."]})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}}}]);
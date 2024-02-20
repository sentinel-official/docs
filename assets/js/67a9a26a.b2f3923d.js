"use strict";(self.webpackChunksentinel_docs=self.webpackChunksentinel_docs||[]).push([[8107],{95624:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>l});var t=n(85893),i=n(11151);const s={title:"Become a Validator",sidebar_position:6},o="Become a Validator",r={id:"become-validator",title:"Become a Validator",description:"A create-validator transaction is a type of transaction used to create a new validator. In this type of transaction, the validator stakes a certain amount of coins as collateral.",source:"@site/docs/validator-setup/become-validator.md",sourceDirName:".",slug:"/become-validator",permalink:"/validator-setup/become-validator",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"Become a Validator",sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Run the Full Node",permalink:"/validator-setup/node-run"},next:{title:"Useful Commands",permalink:"/validator-setup/other-cmd"}},c={},l=[{value:"The <code>--commission</code> flag explained",id:"the---commission-flag-explained",level:3}];function d(e){const a={code:"code",h1:"h1",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.h1,{id:"become-a-validator",children:"Become a Validator"}),"\n",(0,t.jsx)(a.p,{children:"A create-validator transaction is a type of transaction used to create a new validator. In this type of transaction, the validator stakes a certain amount of coins as collateral."}),"\n",(0,t.jsx)(a.p,{children:"Add an operator key and take note of the mnemonic key"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-bash",children:'KEY_NAME="validator"\n\u200b\nsentinelhub keys add "${KEY_NAME}"\n'})}),"\n",(0,t.jsx)(a.p,{children:"Make the create-validator transaction"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-bash",children:'CONSENSUS_PUBLIC_KEY=$(sentinelhub tendermint show-validator)\nDELEGATION_AMOUNT="5000000000udvpn"\nMONIKER="Your Validator Name"\n\u200b\nsentinelhub tx staking create-validator \\\n    --broadcast-mode=block \\\n    --min-self-delegation=1 \\\n    --chain-id=sentinelhub-2 \\\n    --commission-max-change-rate=0.01 \\\n    --commission-max-rate=0.2 \\\n    --commission-rate=0.05 \\\n    --gas=500000 \\\n    --gas-prices=0.1udvpn \\\n    --amount=${DELEGATION_AMOUNT} \\\n    --from="${KEY_NAME}" \\\n    --moniker="${MONIKER}" \\\n    --pubkey="${CONSENSUS_PUBLIC_KEY}"\n'})}),"\n",(0,t.jsxs)(a.h3,{id:"the---commission-flag-explained",children:["The ",(0,t.jsx)(a.code,{children:"--commission"})," flag explained"]}),"\n",(0,t.jsx)(a.p,{children:"The commission rate plays a crucial role in the decision-making process when executing the create-validator transaction."}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsxs)(a.li,{children:[(0,t.jsx)(a.code,{children:"--commission-rate=0.05"}),": the current commission rate that the validator receives from delegators. In this example it is ",(0,t.jsx)(a.strong,{children:"5%"}),". This value is adjustable in the future."]}),"\n",(0,t.jsxs)(a.li,{children:[(0,t.jsx)(a.code,{children:"--commission-max-change-rate=0.01"}),": the max commission rate a validator can change. In this example it will be ",(0,t.jsx)(a.strong,{children:"1%"})," and it is ",(0,t.jsx)(a.strong,{children:"cannot be changed"})," once set. This means that if a Validator wishes to raise its commissions from 5% to 8% in the future, it can achieve this by making adjustments three times, with a 24-hour interval between each transaction."]}),"\n",(0,t.jsxs)(a.li,{children:[(0,t.jsx)(a.code,{children:"--commission-max-rate=0.2"}),": the max commission rate a validator can set. In this example it will be ",(0,t.jsx)(a.strong,{children:"20%"})," and it ",(0,t.jsx)(a.strong,{children:"cannot be changed"})," once set"]}),"\n"]})]})}function h(e={}){const{wrapper:a}={...(0,i.a)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}}}]);
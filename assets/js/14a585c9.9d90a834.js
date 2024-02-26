"use strict";(self.webpackChunksentinel_docs=self.webpackChunksentinel_docs||[]).push([[5469],{9051:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>t,metadata:()=>r,toc:()=>d});var s=i(85893),a=i(11151);const t={title:"Subscription Plan",sidebar_position:6},o="Subscription Plan",r={id:"commands/transactions/subplan",title:"Subscription Plan",description:"Here are the instructions for creating a Subscription Plan in the dVPN application creator. Additionally, you may refer to the Medium article for more detailed information.",source:"@site/docs/sentinel-hub/commands/transactions/subplan.md",sourceDirName:"commands/transactions",slug:"/commands/transactions/subplan",permalink:"/sentinel-hub/commands/transactions/subplan",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"Subscription Plan",sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Unbond",permalink:"/sentinel-hub/commands/transactions/unbond"},next:{title:"Create",permalink:"/sentinel-hub/commands/transactions/offline/create"}},c={},d=[{value:"Create a dVPN Application Provider ID",id:"create-a-dvpn-application-provider-id",level:2},{value:"Create a Subscription Plan",id:"create-a-subscription-plan",level:2},{value:"Activate the Subscription Plan",id:"activate-the-subscription-plan",level:2},{value:"Create a Time Based Subscription with a Node",id:"create-a-time-based-subscription-with-a-node",level:2},{value:"Add a Community Hosted Node",id:"add-a-community-hosted-node",level:2},{value:"Remove a Node",id:"remove-a-node",level:2},{value:"Share Subscription with Another Account",id:"share-subscription-with-another-account",level:2},{value:"Query Subscription Plan",id:"query-subscription-plan",level:2},{value:"Subscription-Associated User Account Query",id:"subscription-associated-user-account-query",level:2},{value:"List of Available Subscription Plans",id:"list-of-available-subscription-plans",level:2}];function l(n){const e={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,a.a)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h1,{id:"subscription-plan",children:"Subscription Plan"}),"\n",(0,s.jsxs)(e.p,{children:["Here are the instructions for creating a Subscription Plan in the dVPN application creator. Additionally, you may refer to the ",(0,s.jsx)(e.a,{href:"https://medium.com/sentinel/introduction-of-on-chain-subscriptions-and-time-based-payments-sentinels-biggest-dvpn-protocol-a2b240199f18",children:"Medium article"})," for more detailed information."]}),"\n",(0,s.jsx)(e.h2,{id:"create-a-dvpn-application-provider-id",children:"Create a dVPN Application Provider ID"}),"\n",(0,s.jsx)(e.p,{children:"Begin by registering an on-chain provider ID using the following command:"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:'sentinelhub tx vpn provider register \\\n  <provider_name> \\\n  --description "<provider_description>" \\\n  --identity "<provider_identity>" \\\n  --website https://test.provider.com \\\n  --broadcast-mode block \\\n  --from <key_name> \\\n  --chain-id sentinelhub-2 \\\n  --gas-prices 0.5udvpn \\\n  --gas=300000 \\\n  --node https://rpc.sentinel.co:443\n'})}),"\n",(0,s.jsx)(e.h2,{id:"create-a-subscription-plan",children:"Create a Subscription Plan"}),"\n",(0,s.jsx)(e.p,{children:"Next, the dVPN application creator should proceed to establish an on-chain subscription plan, specifying the duration, data allowance, and associated prices:"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"sentinelhub tx vpn plan create \\\n  <plan_duration> \\\n  <plan_gygabytes> \\\n  <plan_prices> \\\n  --broadcast-mode block \\\n  --from <key_name> \\\n  --chain-id sentinelhub-2 \\\n  --gas-prices 0.5udvpn \\\n  --gas=300000 \\\n  --node https://rpc.sentinel.co:443\n"})}),"\n",(0,s.jsx)(e.h2,{id:"activate-the-subscription-plan",children:"Activate the Subscription Plan"}),"\n",(0,s.jsx)(e.p,{children:"To activate the subscription plan, execute the following command"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"sentinelhub tx vpn plan update-status \\\n  <plan_id> active \\\n  --broadcast-mode block \\\n  --from <key_name> \\\n  --chain-id sentinelhub-2 \\\n  --gas-prices 0.5udvpn \\\n  --gas=300000 \\\n  --node https://rpc.sentinel.co:443\n"})}),"\n",(0,s.jsx)(e.h2,{id:"create-a-time-based-subscription-with-a-node",children:"Create a Time Based Subscription with a Node"}),"\n",(0,s.jsx)(e.p,{children:"To create a time-based subscription with a node, execute the following command"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"sentinelhub tx vpn node subscribe \\\n  <sentnode_address> \\\n  <denom> \\\n  <hours> \\\n  --broadcast-mode block \\\n  --from <key_name> \\\n  --chain-id sentinelhub-2 \\\n  --gas-prices 0.5udvpn \\\n  --gas=300000 \\\n  --node https://rpc.sentinel.co:443\n"})}),"\n",(0,s.jsxs)(e.p,{children:["Ensure accurate configuration by replacing ",(0,s.jsx)(e.code,{children:"<sentnode_address"}),">, ",(0,s.jsx)(e.code,{children:"<denom>"})," (udvpn), and ",(0,s.jsx)(e.code,{children:"<key_name>"})," with your specific values. Adjust other parameters as needed for your use case."]}),"\n",(0,s.jsx)(e.h2,{id:"add-a-community-hosted-node",children:"Add a Community Hosted Node"}),"\n",(0,s.jsx)(e.p,{children:"To add a community-hosted node to the subscription plan, execute the following command"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"sentinelhub tx vpn plan add-node \\\n  <plan_id> \\\n  <sentnode_address> \\\n  --broadcast-mode block \\\n  --from <key_name> \\\n  --chain-id sentinelhub-2 \\\n  --gas-prices 0.5udvpn \\\n  --gas=300000 \\\n  --node https://rpc.sentinel.co:443\n"})}),"\n",(0,s.jsx)(e.h2,{id:"remove-a-node",children:"Remove a Node"}),"\n",(0,s.jsx)(e.p,{children:"To remove a node from the subscription plan, execute the following command"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"sentinelhub tx vpn plan remove-node \\\n  <plan_id> \\\n  <sentnode_address> \\\n  --broadcast-mode block \\\n  --from <key_name> \\\n  --chain-id sentinelhub-2 \\\n  --gas-prices 0.5udvpn \\\n  --gas=300000 \\\n  --node https://rpc.sentinel.co:443\n"})}),"\n",(0,s.jsx)(e.h2,{id:"share-subscription-with-another-account",children:"Share Subscription with Another Account"}),"\n",(0,s.jsx)(e.p,{children:"To facilitate subscription sharing with another account, this applies to dVPN apps categorized as follows: free dVPN, paid with non-IBC supported tokens, and paid with fiat payment gateway."}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"sentinelhub tx vpn subscription allocate \\\n  <subscription_id> \\\n  <account_address> \\\n  <bytes> \\\n  --broadcast-mode block \\\n  --from <key_name> \\\n  --chain-id sentinelhub-2 \\\n  --gas-prices 0.5udvpn \\\n  --gas=300000 \\\n  --node https://rpc.sentinel.co:443\n"})}),"\n",(0,s.jsx)(e.h2,{id:"query-subscription-plan",children:"Query Subscription Plan"}),"\n",(0,s.jsx)(e.p,{children:"To query about the subscriptions associated with an account address, use the following command:"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"sentinelhub query vpn subscription allocate \\\n  --account-addr <account_address> \\\n  --node https://rpc.sentinel.co:443\n"})}),"\n",(0,s.jsx)(e.h2,{id:"subscription-associated-user-account-query",children:"Subscription-Associated User Account Query"}),"\n",(0,s.jsx)(e.p,{children:"To query a list of all user accounts linked to a specific subscription, use the following command:"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"sentinelhub query vpn allocations \\\n  <subscription_id> \\\n  --node https://rpc.sentinel.co:443\n"})}),"\n",(0,s.jsx)(e.h2,{id:"list-of-available-subscription-plans",children:"List of Available Subscription Plans"}),"\n",(0,s.jsx)(e.p,{children:"To query a list of all subscription plans available,  use the following command:"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"sentinelhub query vpn plans \\\n  --node https://rpc.sentinel.co:443\n"})})]})}function p(n={}){const{wrapper:e}={...(0,a.a)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(l,{...n})}):l(n)}}}]);
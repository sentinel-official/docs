"use strict";(self.webpackChunksentinel_docs=self.webpackChunksentinel_docs||[]).push([[2909],{5577:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>r,contentTitle:()=>o,default:()=>m,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var i=a(87462),n=(a(67294),a(3905));const s={title:"Basic Commands",description:"some useful commands and explain their outputs",sidebar_position:7},o="Basic Commands",l={unversionedId:"basic-cmd",id:"basic-cmd",title:"Basic Commands",description:"some useful commands and explain their outputs",source:"@site/docs/validator-setup/basic-cmd.md",sourceDirName:".",slug:"/basic-cmd",permalink:"/validator-setup/basic-cmd",draft:!1,editUrl:"https://github.com/sentinel-official/docs/tree/main/docs/validator-setup/basic-cmd.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{title:"Basic Commands",description:"some useful commands and explain their outputs",sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Become a Validator",permalink:"/validator-setup/validator-tx"},next:{title:"Free Up Space with State Sync",permalink:"/validator-setup/state-sync"}},r={},d=[{value:"Slashing params list",id:"slashing-params-list",level:2},{value:"Signing result",id:"signing-result",level:2},{value:"Info about your validator and synchronization",id:"info-about-your-validator-and-synchronization",level:2}],u={toc:d},c="wrapper";function m(e){let{components:t,...a}=e;return(0,n.kt)(c,(0,i.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"basic-commands"},"Basic Commands"),(0,n.kt)("h2",{id:"slashing-params-list"},"Slashing params list"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"sentinelhub q slashing params\n")),(0,n.kt)("p",null,"The output looks like"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'downtime_jail_duration: 600s\nmin_signed_per_window: "0.050000000000000000"\nsigned_blocks_window: "10000"\nslash_fraction_double_sign: "0.050000000000000000"\nslash_fraction_downtime: "0.000100000000000000"\n')),(0,n.kt)("p",null,"Basically it explain the rules not to get jailed"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"There is a window of 10k blocks (signed_blocks_window)."),(0,n.kt)("li",{parentName:"ul"},"Any validator needs to sign 5% (min_signed_per_window) of the blocks in this window (i.e., 500 blocks within any 10k blocks window)."),(0,n.kt)("li",{parentName:"ul"},"If the percentage of signed blocks falls below 5, the validator is jailed for downtime."),(0,n.kt)("li",{parentName:"ul"},"If a validator is jailed for downtime, they are slashed 0.01% (slash_fraction_downtime) of their stake and can be unjailed after 10 minutes (downtime_jail_duration)."),(0,n.kt)("li",{parentName:"ul"},"If a validator is jailed for a double sign, they are slashed 5% (slash_fraction_double_sign) and cannot unjail ever.")),(0,n.kt)("h2",{id:"signing-result"},"Signing result"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"sentinelhub q slashing signing-info $(sentinelhub tendermint show-validator)\n")),(0,n.kt)("p",null,"You will get something like:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'address: sentvalcons1xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx\nindex_offset: "11513"\njailed_until: "1970-01-01T00:00:00Z" #(if different from this, means you are jailed)\nmissed_blocks_counter: "5" #how many blocks you skipped within the 10k blocks window\nstart_height: "9982764"\ntombstoned: false #if true, means you double signed\n')),(0,n.kt)("p",null,"Please note that if you use TMKMS with our priv_validator_key.json (as described in ",(0,n.kt)("a",{parentName:"p",href:"https://p4privacy.gitbook.io/tmkms-guide-for-sentinel-validator/"},"this guide"),") on a different machine and have subsequently removed it from your validator machine, the above command will not work."),(0,n.kt)("h2",{id:"info-about-your-validator-and-synchronization"},"Info about your validator and synchronization"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"curl localhost:26657/status\n")),(0,n.kt)("p",null,"When you receive the output, check the following fields:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"sync_info.catching_up #if true, it means your node is not synced and therefore it will not sign blocks until it catches up with the rest of the chain\nsync_info.latest_block_time #the value should be close to the current time. If it's not, that means your node is also out of sync and won't be able to sign blocks (or the chain has halted).\nvalidator_info.voting_power #If the value is 0, this node is not an active validator, either because you are not in the active set, or because you are jailed, or because the priv_validator_key does not match the validator key\n")))}m.isMDXComponent=!0}}]);
"use strict";(self.webpackChunksentinel_docs=self.webpackChunksentinel_docs||[]).push([[9157],{46384:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>s,metadata:()=>r,toc:()=>p});var a=n(87462),i=(n(67294),n(3905));const s={title:"Chain Upgrade",sidebar_position:3},o="Chain Upgrade",r={unversionedId:"cosmovisor/chain-upgrade",id:"cosmovisor/chain-upgrade",title:"Chain Upgrade",description:"When the upgrade is available clone it, checkout at the new version and install it",source:"@site/docs/validator-setup/cosmovisor/chain-upgrade.md",sourceDirName:"cosmovisor",slug:"/cosmovisor/chain-upgrade",permalink:"/validator-setup/cosmovisor/chain-upgrade",draft:!1,editUrl:"https://github.com/sentinel-official/docs/tree/main/docs/validator-setup/cosmovisor/chain-upgrade.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Chain Upgrade",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Setup & Config",permalink:"/validator-setup/cosmovisor/setup-config"},next:{title:"RPC Exposure",permalink:"/validator-setup/category/rpc-exposure"}},l={},p=[],u={toc:p},d="wrapper";function c(e){let{components:t,...n}=e;return(0,i.kt)(d,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"chain-upgrade"},"Chain Upgrade"),(0,i.kt)("p",null,"When the upgrade is available clone it, checkout at the new version and install it"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'git clone https://github.com/sentinel-official/hub.git "${HOME}/sentinelhub"\ncd "${HOME}/sentinelhub"\ngit checkout <new_version>\nmake install\nsudo ln -s "${GOBIN}/sentinelhub" /usr/local/bin/sentinelhub\n')),(0,i.kt)("p",null,"Create the upgrade directory inside Cosmovisor with the name of the version (for the last upgrade was ",(0,i.kt)("strong",{parentName:"p"},"v11")," as you can see ",(0,i.kt)("a",{parentName:"p",href:"https://ping.pub/sentinel/gov/30"},"here")," under the section plan, tab name)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir ~/.sentinelhub/cosmovisor/upgrades/<upgrade_name>/bin\n")),(0,i.kt)("p",null,"Copy ",(0,i.kt)("inlineCode",{parentName:"p"},"sentinelhub")," binary in it"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"cp ~/go/bin/sentinelhub ~/.sentinelhub/cosmovisor/upgrades/<upgrade_name>/bin\n")),(0,i.kt)("p",null,"Check if the ",(0,i.kt)("inlineCode",{parentName:"p"},"sentinelhub")," binary upgrade was copied and if it is the correct version:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"~/.sentinelhub/cosmovisor/upgrades/<upgrade_name>/bin/sentinelhub version\n")),(0,i.kt)("p",null,"Now that you have prepared and deployed the new binary, the remaining steps will be managed by Cosmovisor when the upgrade is scheduled to take place. Here's a breakdown of the process:"),(0,i.kt)("p",null,"When the designated block height is reached, the blockchain temporarily halts its operations. Following this, an ",(0,i.kt)("inlineCode",{parentName:"p"},"upgrade-info.json")," file is generated and put into the folder ",(0,i.kt)("inlineCode",{parentName:"p"},".sentinelhub/cosmovisor/upgrades/<upgrade_name>/"),"."),(0,i.kt)("p",null,"The content of this file will be the following, based on the last hub upgrade:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash",metastring:"title=.sentinelhub/cosmovisor/upgrades/<upgrade_name>/",title:".sentinelhub/cosmovisor/upgrades/<upgrade_name>/"},'{"name":"v11","time":"0001-01-01T00:00:00Z","height":12310005}\n')),(0,i.kt)("p",null,"The Cosmovisor system identifies the existence of this file and triggers the required sequence of actions. These actions include pausing the node, inserting the relevant binary into the specified directory, and subsequently restarting the node."),(0,i.kt)("p",null,"This carefully orchestrated sequence guarantees a seamless transition and successful execution of the blockchain upgrade."))}c.isMDXComponent=!0}}]);
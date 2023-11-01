"use strict";(self.webpackChunksentinel_docs=self.webpackChunksentinel_docs||[]).push([[3773],{16290:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>h,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var n=a(87462),i=(a(67294),a(3905));const l={title:"Software upgrade - 1",sidebar_position:2},r="Software upgrade - 1",o={unversionedId:"upgrades/upgrade-1",id:"upgrades/upgrade-1",title:"Software upgrade - 1",description:"At block height 1272000 the Blockchain will stop producing the blocks. Follow the next steps only after the blockchain halt!",source:"@site/docs/validator-setup/upgrades/upgrade-1.md",sourceDirName:"upgrades",slug:"/upgrades/upgrade-1",permalink:"/validator-setup/upgrades/upgrade-1",draft:!1,editUrl:"https://github.com/sentinel-official/docs/tree/main/docs/validator-setup/upgrades/upgrade-1.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Software upgrade - 1",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"SentinelHub - 2",permalink:"/validator-setup/upgrades/sentinelhub-2"},next:{title:"Software upgrade - 2",permalink:"/validator-setup/upgrades/upgrade-2"}},p={},s=[{value:"Stop the node",id:"stop-the-node",level:2},{value:"Install the new version",id:"install-the-new-version",level:2},{value:"Start the node",id:"start-the-node",level:2},{value:"In case the upgrade fails",id:"in-case-the-upgrade-fails",level:2}],d={toc:s},u="wrapper";function h(e){let{components:t,...a}=e;return(0,i.kt)(u,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"software-upgrade---1"},"Software upgrade - 1"),(0,i.kt)("admonition",{title:"Warning",type:"danger"},(0,i.kt)("p",{parentName:"admonition"},"At block height ",(0,i.kt)("inlineCode",{parentName:"p"},"1272000")," the Blockchain will stop producing the blocks. Follow the next steps only after the blockchain halt!")),(0,i.kt)("h2",{id:"stop-the-node"},"Stop the node"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Check the latest block height. It must match with the upgrade height"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"curl -fsLS http://127.0.0.1:26657/status | jq -r '.result.sync_info.latest_block_height'\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Stop the ",(0,i.kt)("inlineCode",{parentName:"p"},"sentinelhub")," process"))),(0,i.kt)("h2",{id:"install-the-new-version"},"Install the new version"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Clone the source code"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"VERSION=v0.7.0\nBASE_DIRECTORY=${GOPATH}/src/github.com/sentinel-official\n\nrm -rf ${BASE_DIRECTORY}/hub/ && mkdir -p ${BASE_DIRECTORY} && cd ${BASE_DIRECTORY}/ && \\\ngit clone https://github.com/sentinel-official/hub.git && cd ${BASE_DIRECTORY}/hub/ && \\\ngit checkout ${VERSION}\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Build and install the software"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"make install\n")))),(0,i.kt)("h2",{id:"start-the-node"},"Start the node"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Verify the software version"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"sentinelhub version --long\n")),(0,i.kt)("admonition",{parentName:"li",type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Commit hash must be ",(0,i.kt)("inlineCode",{parentName:"p"},"600fd5f8b71f60332656b826df2e3fa3bc6c5e5e")))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Start the ",(0,i.kt)("inlineCode",{parentName:"p"},"sentinelhub")," process"))),(0,i.kt)("h2",{id:"in-case-the-upgrade-fails"},"In case the upgrade fails"),(0,i.kt)("admonition",{title:"Warning",type:"danger"},(0,i.kt)("p",{parentName:"admonition"},"Follow the next steps in case the upgrade fails!")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Install the Sentinel Hub software ",(0,i.kt)("inlineCode",{parentName:"p"},"v0.6.3"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Verfiy the software version commit is ",(0,i.kt)("inlineCode",{parentName:"p"},"9d0e491ad9a6057e55556e01c142ae52fed7edbb"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Start the ",(0,i.kt)("inlineCode",{parentName:"p"},"sentinelhub")," process with flag ",(0,i.kt)("inlineCode",{parentName:"p"},"unsafe-skip-upgrades")),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"sentinelhub start --unsafe-skip-upgrades 1272000\n")))))}h.isMDXComponent=!0}}]);
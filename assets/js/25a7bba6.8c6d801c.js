"use strict";(self.webpackChunksentinel_docs=self.webpackChunksentinel_docs||[]).push([[8490],{37019:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>o,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var n=t(85893),a=t(11151);const r={title:"Free Up Space with State Sync",description:"When your HD space growing too much",sidebar_position:8},i="Free Up Space with State Sync",c={id:"state-sync",title:"Free Up Space with State Sync",description:"When your HD space growing too much",source:"@site/docs/validator-setup/state-sync.md",sourceDirName:".",slug:"/state-sync",permalink:"/validator-setup/state-sync",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:8,frontMatter:{title:"Free Up Space with State Sync",description:"When your HD space growing too much",sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"Basic Commands",permalink:"/validator-setup/basic-cmd"},next:{title:"TMKMS Security",permalink:"/validator-setup/category/tmkms-security"}},o={},l=[{value:"Create State Sync script file",id:"create-state-sync-script-file",level:2}];function h(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"free-up-space-with-state-sync",children:"Free Up Space with State Sync"}),"\n",(0,n.jsx)(s.p,{children:"State Sync helps you free up space on your hard disk and should be performed regularly. You are encouraged to set up a monitoring structure to check when it is time to free up space."}),"\n",(0,n.jsxs)(s.p,{children:["We assume you have Cosmovisor installed, if you do not have it, follow the related ",(0,n.jsx)(s.a,{href:"/validator-setup/category/cosmovisor",children:"module"}),"."]}),"\n",(0,n.jsx)(s.h2,{id:"create-state-sync-script-file",children:"Create State Sync script file"}),"\n",(0,n.jsx)(s.p,{children:"If you still don't have it, create the file state-sync.sh"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"sudo nano state-sync.sh\n"})}),"\n",(0,n.jsxs)(s.p,{children:["Add the following code in it (to add your own or favourite RPC check this list ",(0,n.jsx)(s.a,{href:"https://cosmos.directory/sentinel/nodes",children:"here"}),"):"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",metastring:"title=state-sinc.sh",children:'#!/bin/bash\n\nSNAP_RPC="https://rpc.sentinel.co:443"\nSNAP_RPC2="https://rpc-sentinel.whispernode.com:443"\n\nLATEST_HEIGHT=$(curl -s $SNAP_RPC/block | jq -r .result.block.header.height); \\\nBLOCK_HEIGHT=$((LATEST_HEIGHT - 1000)); \\\nTRUST_HASH=$(curl -s "$SNAP_RPC/block?height=$BLOCK_HEIGHT" | jq -r .result.block_id.hash)\n\nsed -i.bak -E "s|^(enable[[:space:]]+=[[:space:]]+).*$|\\1true| ; \\\ns|^(rpc_servers[[:space:]]+=[[:space:]]+).*$|\\1\\"$SNAP_RPC,$SNAP_RPC2\\"| ; \\\ns|^(trust_height[[:space:]]+=[[:space:]]+).*$|\\1$BLOCK_HEIGHT| ; \\\ns|^(trust_hash[[:space:]]+=[[:space:]]+).*$|\\1\\"$TRUST_HASH\\"|" $HOME/.sentinelhub/config/config.toml\n\nmv $HOME/.sentinelhub/data $HOME/.sentinelhub/data-old\nmkdir -p $HOME/.sentinelhub/data\ncp $HOME/.sentinelhub/data-old/priv_validator_state.json $HOME/.sentinelhub/data\n'})}),"\n",(0,n.jsx)(s.p,{children:"This script ensures that the new synchronization process starts from a point slightly before the absolute latest block. This provides a margin of safety and avoid potential synchronization issues that might occur due to due network delays or other factors."}),"\n",(0,n.jsx)(s.p,{children:"Make the file executable"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"chmod +x state-sync.sh\n"})}),"\n",(0,n.jsx)(s.p,{children:"Stop the node"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"sudo systemctl stop cosmovisor.service\n"})}),"\n",(0,n.jsx)(s.p,{children:"Launch the state-sync script"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"./state-sync.sh\n"})}),"\n",(0,n.jsx)(s.p,{children:"Reset the node"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"# On some tendermint chains\nsentinelhub unsafe-reset-all\n\n# On other tendermint chains\nsentinelhub tendermint unsafe-reset-all --home $HOME/.sentinelhub --keep-addr-book\n"})}),"\n",(0,n.jsx)(s.p,{children:"Start the node"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"sudo systemctl start cosmovisor.service\n"})}),"\n",(0,n.jsx)(s.p,{children:"Use this command to check logs in real time"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"sudo journalctl -u cosmovisor.service -f\n"})}),"\n",(0,n.jsx)(s.p,{children:"If everything goes well, your node should start syncing within 10 minutes."})]})}function d(e={}){const{wrapper:s}={...(0,a.a)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}}}]);
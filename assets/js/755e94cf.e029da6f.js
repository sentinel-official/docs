"use strict";(self.webpackChunksentinel_docs=self.webpackChunksentinel_docs||[]).push([[2249],{73539:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>r,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"testnet","title":"Run on Testnet","description":"To install a Full Node using the testnet, simply follow the Full Node guide for the Mainnet, but adjust the setup and configuration slightly for the testnet environment.","source":"@site/docs/full-node-setup/testnet.md","sourceDirName":".","slug":"/testnet","permalink":"/full-node-setup/testnet","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":12,"frontMatter":{"title":"Run on Testnet","sidebar_position":12,"sidebar_class_name":"releaseSidebarHeading"},"sidebar":"tutorialSidebar","previous":{"title":"Hard Fork sentinelhub-2","permalink":"/full-node-setup/upgrades/hard-fork"},"next":{"title":"Overview","permalink":"/full-node-setup/docker/overview"}}');var i=s(74848),l=s(28453);const o={title:"Run on Testnet",sidebar_position:12,sidebar_class_name:"releaseSidebarHeading"},a="Testnet",r={},c=[{value:"Install Sentinel Hub",id:"install-sentinel-hub",level:2},{value:"Configure Sentinel Hub",id:"configure-sentinel-hub",level:2},{value:"Genesis File",id:"genesis-file",level:3},{value:"Set Seeds &amp; Peers",id:"set-seeds--peers",level:3},{value:"State Sync",id:"state-sync",level:2}];function h(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",...(0,l.R)(),...e.components},{Details:s}=n;return s||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"testnet",children:"Testnet"})}),"\n",(0,i.jsxs)(n.p,{children:["To install a Full Node using the testnet, simply follow the Full Node guide for the ",(0,i.jsx)(n.a,{href:"/full-node-setup",children:"Mainnet"}),", but adjust the setup and configuration slightly for the testnet environment."]}),"\n",(0,i.jsx)(n.h2,{id:"install-sentinel-hub",children:"Install Sentinel Hub"}),"\n",(0,i.jsxs)(n.p,{children:["To install the Sentinel Hub, please download the latest version from the ",(0,i.jsx)(n.a,{href:"https://github.com/sentinel-official/hub/releases",children:"repository"})," and proceed by executing the following commands:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'git clone https://github.com/sentinel-official/hub.git "${HOME}/sentinelhub"\ncd "${HOME}/sentinelhub"\ngit checkout v12.0.0-rc9\nmake install\n\n# For Ubuntu installation\nsudo ln -s "${GOBIN}/sentinelhub" /usr/bin/sentinelhub\n\n# For manual installation\nsudo ln -s "${GOBIN}/sentinelhub" /usr/local/bin/sentinelhub\n'})}),"\n",(0,i.jsx)(n.h2,{id:"configure-sentinel-hub",children:"Configure Sentinel Hub"}),"\n",(0,i.jsx)(n.h3,{id:"genesis-file",children:"Genesis File"}),"\n",(0,i.jsx)(n.p,{children:"Let's initialize the Sentinel Hub using the Genesis file, a JSON file which defines the initial state of Sentinel blockchain. The state defined in the genesis file contains all the necessary information, like initial coin allocation, genesis time, default parameters, and more"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'sentinelhub init --chain-id bluenet-2-1 "Your Full Node Name"\ncurl -fsLS -o "${HOME}/genesis.json" "https://raw.githubusercontent.com/sentinel-official/networks/main/bluenet-2-1/genesis.json"\ncp "${HOME}/genesis.json" "${HOME}/.sentinelhub/config/genesis.json"\nrm "${HOME}/genesis.json"\n'})}),"\n",(0,i.jsxs)(n.p,{children:["You will be asked to replace the genesis file, type ",(0,i.jsx)(n.code,{children:"[A]ll"})]}),"\n",(0,i.jsxs)(n.p,{children:["In case you need a mirror because the official hosting site does not work, use this from ",(0,i.jsx)(n.code,{children:"Busurnode"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"wget -O genesis.json https://storage.busurnode.com/testnet/sentinel/bluenet-2-1/genesis.json --inet4-only\nmv genesis.json ~/.sentinelhub/config\n"})}),"\n",(0,i.jsx)(n.h3,{id:"set-seeds--peers",children:"Set Seeds & Peers"}),"\n",(0,i.jsx)(n.p,{children:"Open the config.toml file"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"sudo nano ${HOME}/.sentinelhub/config/config.toml\n"})}),"\n",(0,i.jsx)(n.p,{children:"Set seeds and peers separated by comma."}),"\n",(0,i.jsxs)(n.p,{children:["The following seeds and peers for the Testnet are provided by ",(0,i.jsx)(n.a,{href:"https://busurnode.com/network/testnet/sentinel",children:"Busurnode"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",metastring:'title="${HOME}/.sentinelhub/config/config.toml"',children:'[p2p]\nseeds = "5765c3c58643dd640b642fcd7c1e9fa1e9fbb16f@ayumi.busur.net:51056"\npersistent_peers = "5765c3c58643dd640b642fcd7c1e9fa1e9fbb16f@ayumi.busur.net:51056,25ef256b3e2f6857fdbaa9bf2c8340374421e248@hana.busur.net:51056"\n'})}),"\n",(0,i.jsx)(n.h2,{id:"state-sync",children:"State Sync"}),"\n",(0,i.jsx)(n.p,{children:"To bootstrap your Full Node on Testnet or free up space using State Sync, follow these steps:"}),"\n",(0,i.jsxs)(n.p,{children:["Create a reusable shell script, like ",(0,i.jsx)(n.code,{children:"testnet-state-sync.sh"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"nano testnet-state-sync.sh\n"})}),"\n",(0,i.jsx)(n.p,{children:"Add the code below."}),"\n",(0,i.jsxs)(s,{children:[(0,i.jsx)("summary",{children:"testnet-state-sync.sh"}),(0,i.jsx)("p",{children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'#!/bin/bash\n\n# Service Name (update this if you use service name other than \'sentinelhub\', such as \'cosmovisor\')\nSERVICE_NAME=sentinelhub\n\nSNAP_RPC="https://rpc-sentinel-testnet.busurnode.com:443"\n\n# Fetch block data from RPC\necho "Fetching trusted block data from RPC..."\nLATEST_HEIGHT=$(curl -s $SNAP_RPC/block | jq -r .result.block.header.height); \\\nBLOCK_HEIGHT=$((LATEST_HEIGHT - 2000)); \\\nTRUST_HASH=$(curl -s "$SNAP_RPC/block?height=$BLOCK_HEIGHT" | jq -r .result.block_id.hash)\n\necho "Update config with latest block from RPC..."\nsed -i.bak -E "s|^(enable[[:space:]]+=[[:space:]]+).*$|\\1true| ; \\\ns|^(rpc_servers[[:space:]]+=[[:space:]]+).*$|\\1\\"$SNAP_RPC,$SNAP_RPC\\"| ; \\\ns|^(trust_height[[:space:]]+=[[:space:]]+).*$|\\1$BLOCK_HEIGHT| ; \\\ns|^(trust_hash[[:space:]]+=[[:space:]]+).*$|\\1\\"$TRUST_HASH\\"|" $HOME/.sentinelhub/config/config.toml\n\n# Stop the sentinel service\necho "Stopping the sentinel service..."\nsudo service $SERVICE_NAME stop\n\n# Copy the validator state JSON file\necho "Backing up validator state..."\ncd $HOME\ncp ~/.sentinelhub/data/priv_validator_state.json ~/.sentinelhub/priv_validator_state.json\n\n# Reset Tendermint state\nsentinelhub tendermint unsafe-reset-all --home $HOME/.sentinelhub --keep-addr-book\n\n# Replace priv_validator_state from backup\necho "Recover validator state from backup..."\ncp ~/.sentinelhub/priv_validator_state.json ~/.sentinelhub/data/priv_validator_state.json\n\n# Start the sentinel service\necho "Starting the sentinel service..."\nsudo service $SERVICE_NAME start\necho "Process complete."\n'})})})]}),"\n",(0,i.jsx)(n.p,{children:"Next, grant execution permissions to the script:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"chmod 700 testet-state-sync.sh\n"})}),"\n",(0,i.jsx)(n.p,{children:"Run the script:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"./testnet-state-sync.sh\n"})}),"\n",(0,i.jsxs)(n.p,{children:["The final step is to check the ",(0,i.jsx)(n.a,{href:"/full-node-setup/node-run#check-sync-status",children:"sync status"})," to confirm when the node has completed synchronization."]})]})}function d(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>a});var t=s(96540);const i={},l=t.createContext(i);function o(e){const n=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);
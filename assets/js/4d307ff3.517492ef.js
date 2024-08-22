"use strict";(self.webpackChunksentinel_docs=self.webpackChunksentinel_docs||[]).push([[7064],{75219:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>r,toc:()=>h});var t=s(74848),a=s(28453);const o={title:"Run the Full Node",sidebar_position:5},i="Run the Full Node",r={id:"node-run",title:"Run the Full Node",description:"When setting up a validator and joining a blockchain network, there are usually three key synchronization methods to get your node up to speed: using a Snapshot, State Sync, and Block Sync.",source:"@site/docs/validator-setup/node-run.md",sourceDirName:".",slug:"/node-run",permalink:"/validator-setup/node-run",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Run the Full Node",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Full Node Setup",permalink:"/validator-setup/node-setup"},next:{title:"Become a Validator",permalink:"/validator-setup/become-validator"}},c={},h=[{value:"Using a Snapshot",id:"using-a-snapshot",level:2},{value:"State Sync",id:"state-sync",level:2},{value:"Bootstrap The Node",id:"bootstrap-the-node",level:3},{value:"Free up space",id:"free-up-space",level:3},{value:"Block Sync",id:"block-sync",level:2},{value:"Check Sync Status",id:"check-sync-status",level:2}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components},{Details:s}=n;return s||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"run-the-full-node",children:"Run the Full Node"}),"\n",(0,t.jsx)(n.p,{children:"When setting up a validator and joining a blockchain network, there are usually three key synchronization methods to get your node up to speed: using a Snapshot, State Sync, and Block Sync."}),"\n",(0,t.jsx)(n.h2,{id:"using-a-snapshot",children:"Using a Snapshot"}),"\n",(0,t.jsx)(n.p,{children:"Downloading a Blockchain Snapshot is a different method where you download a snapshot of the blockchain at a recent height. This snapshot includes the state of the blockchain at a specific point in time. After applying the snapshot, the node only needs to catch up with the blocks generated after the snapshot was taken, which can be significantly faster than starting from the genesis block."}),"\n",(0,t.jsxs)(n.p,{children:["For this example, we will use a ",(0,t.jsx)(n.a,{href:"https://busurnode.com/network/sentinel#service_snapshot",children:"Busurnode Snapshot"}),". To download and install the latest snapshot, follow the below steps:"]}),"\n",(0,t.jsxs)(n.p,{children:["Create a reusable shell script, like ",(0,t.jsx)(n.code,{children:"snapshotsync.sh"}),", with the following code. If you're using a service name other than ",(0,t.jsx)(n.code,{children:"sentinelhub"}),", such as ",(0,t.jsx)(n.code,{children:"cosmovisor"}),", be sure to update ",(0,t.jsx)(n.code,{children:"SERVICE_NAME"})," accordingly."]}),"\n",(0,t.jsxs)(s,{children:[(0,t.jsx)("summary",{children:"snapshotsync.sh"}),(0,t.jsx)("p",{children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'#!/bin/bash\n\n# Service Name (update this if you use service name other than \'sentinelhub\', for example \'cosmovisor\')\nSERVICE_NAME=sentinelhub\n\n# Install required package\necho "Installing required package"\nsudo apt install -y lz4 jq curl > /dev/null 2>&1\n\n# Get Latest Snapshot URL\nAPI_REQUEST=$(curl -s https://busurnode.com/api/v1/snapshot/mainnet/sentinel)\nIS_SUCCESS=$(echo $API_REQUEST | jq -r \'.success\')\nif [ "$IS_SUCCESS" = "true" ]; then\n  SNAPSHOT_URL=$(echo $API_REQUEST | jq -r \'.data.snapshot.url\')\n  echo "Latest Snapshot URL: $SNAPSHOT_URL"\nelse\n  echo "Error fetching latest snapshot from Busurnode API"\n  exit 1\nfi\n\n# Download the latest snapshot and save it as sentinel_snapshot.tar.lz4\necho "Downloading the latest snapshot..."\ncurl -L --progress-bar -o "$HOME/sentinel_snapshot.tar.lz4" "$SNAPSHOT_URL"\nif [ $? -eq 0 ] && [ -f "$HOME/sentinel_snapshot.tar.lz4" ]; then\n  echo "Download complete: $HOME/sentinel_snapshot.tar.lz4"\nelse\n  echo "Error: Download failed."\n  exit 1\nfi\n\n# Stop the sentinel service\necho "Stopping the sentinel service..."\nsudo service $SERVICE_NAME stop\n\n# Copy the validator state JSON file\ncd $HOME\ncp ~/.sentinelhub/data/priv_validator_state.json ~/.sentinelhub/priv_validator_state.json\n\n# Reset Tendermint state\nsentinelhub tendermint unsafe-reset-all --home $HOME/.sentinelhub --keep-addr-book\n\n# Extract the snapshot\necho "Extracting snapshot..."\nlz4 -c -d $HOME/sentinel_snapshot.tar.lz4 | tar -x -C $HOME/.sentinelhub\n\n# Replace priv_validator_state from backup\ncp ~/.sentinelhub/priv_validator_state.json ~/.sentinelhub/data/priv_validator_state.json\n\n# Start the sentinel service\necho "Starting the sentinel service..."\nsudo service $SERVICE_NAME start\necho "Process complete."\n'})})})]}),"\n",(0,t.jsx)(n.p,{children:"Next, grant execution permissions to the script and run it:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"chmod 700 snapshotsync.sh\n./snapshotsync.sh\n"})}),"\n",(0,t.jsxs)(n.p,{children:["The final step is to check the ",(0,t.jsx)(n.a,{href:"/validator-setup/node-run#check-sync-status",children:"sync status"})," to confirm when the node has completed synchronization."]}),"\n",(0,t.jsx)(n.p,{children:"If you're looking for alternative services that provide snapshots, here is a list of Validators/RPC providers who offer them:"}),"\n",(0,t.jsxs)(s,{children:[(0,t.jsx)("summary",{children:"Available Snapshots"}),(0,t.jsx)("p",{children:(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Autostake: ",(0,t.jsx)(n.a,{href:"https://autostake.com/networks/sentinel/",children:"https://autostake.com/networks/sentinel/"})]}),"\n",(0,t.jsxs)(n.li,{children:["Busurnode: ",(0,t.jsx)(n.a,{href:"https://busurnode.com/network/sentinel#service_snapshot",children:"https://busurnode.com/network/sentinel#service_snapshot"})]}),"\n",(0,t.jsxs)(n.li,{children:["Polkachu: ",(0,t.jsx)(n.a,{href:"https://www.polkachu.com/tendermint_snapshots/sentinel",children:"https://www.polkachu.com/tendermint_snapshots/sentinel"})]}),"\n",(0,t.jsxs)(n.li,{children:["Roomit: ",(0,t.jsx)(n.a,{href:"https://roomit.xyz/snapshot/mainnet/dvpn/",children:"https://roomit.xyz/snapshot/mainnet/dvpn/"})]}),"\n"]})})]}),"\n",(0,t.jsx)(n.admonition,{type:"warning",children:(0,t.jsxs)(n.p,{children:["If you're using a snapshot on a validator node during a chain halt and you're ",(0,t.jsx)(n.strong,{children:"NOT"})," using TMKMS, be sure to back up your ",(0,t.jsx)(n.code,{children:"priv_validator_state.json"})," file from your recently renamed ",(0,t.jsx)(n.code,{children:"data-old"})," folder. After extracting the snapshot, but before starting the node, replace the new ",(0,t.jsx)(n.code,{children:"priv_validator_state.json"})," file with your backup. This step is essential to prevent double-signing."]})}),"\n",(0,t.jsx)(n.h2,{id:"state-sync",children:"State Sync"}),"\n",(0,t.jsx)(n.p,{children:"State Sync is the process of downloading the current state of the blockchain at a recent block height from other peers and then download and process blocks from that height onward. This method reduces the need to process all historical blocks by downloading the entire blockchain, thus speeding up the synchronization process."}),"\n",(0,t.jsx)(n.p,{children:"State Sync is used to perform the following tasks that we will see in detail:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Bootstrap a node"}),"\n",(0,t.jsx)(n.li,{children:"Free up space on your hard disk"}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"bootstrap-the-node",children:"Bootstrap The Node"}),"\n",(0,t.jsx)(n.p,{children:"To bootstrap your node with state sync, follow the steps below."}),"\n",(0,t.jsxs)(n.p,{children:["Create the file ",(0,t.jsx)(n.code,{children:"state-sync.sh"})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sudo nano state-sync.sh\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Add the following code in it (to add your own or favourite RPC check this list ",(0,t.jsx)(n.a,{href:"https://sentnodes.com/public-rpc",children:"here"}),"):"]}),"\n",(0,t.jsxs)(s,{children:[(0,t.jsx)("summary",{children:"state-sync.sh"}),(0,t.jsx)("p",{children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'#!/bin/bash\n\nSNAP_RPC="https://rpc.sentinel.co:443"\nSNAP_RPC2="https://rpc-sentinel.whispernode.com:443"\n\nLATEST_HEIGHT=$(curl -s $SNAP_RPC/block | jq -r .result.block.header.height); \\\nBLOCK_HEIGHT=$((LATEST_HEIGHT - 1000)); \\\nTRUST_HASH=$(curl -s "$SNAP_RPC/block?height=$BLOCK_HEIGHT" | jq -r .result.block_id.hash)\n\nsed -i.bak -E "s|^(enable[[:space:]]+=[[:space:]]+).*$|\\1true| ; \\\ns|^(rpc_servers[[:space:]]+=[[:space:]]+).*$|\\1\\"$SNAP_RPC,$SNAP_RPC2\\"| ; \\\ns|^(trust_height[[:space:]]+=[[:space:]]+).*$|\\1$BLOCK_HEIGHT| ; \\\ns|^(trust_hash[[:space:]]+=[[:space:]]+).*$|\\1\\"$TRUST_HASH\\"|" $HOME/.sentinelhub/config/config.toml\n'})})})]}),"\n",(0,t.jsx)(n.p,{children:"This script ensures that the new synchronization process starts from a point slightly before the absolute latest block. This provides a margin of safety and avoid potential synchronization issues that might occur due to due network delays or other factors."}),"\n",(0,t.jsx)(n.p,{children:"Make the file executable"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"chmod +x state-sync.sh\n"})}),"\n",(0,t.jsx)(n.p,{children:"Launch the script"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"./state-sync.sh\n"})}),"\n",(0,t.jsx)(n.p,{children:"Start the node by running the following command:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sudo systemctl start sentinelhub.service\n"})}),"\n",(0,t.jsxs)(n.p,{children:["The final step is to check the ",(0,t.jsx)(n.a,{href:"/validator-setup/node-run#check-sync-status",children:"sync status"})," to confirm when the node has completed synchronization."]}),"\n",(0,t.jsx)(n.h3,{id:"free-up-space",children:"Free up space"}),"\n",(0,t.jsx)(n.admonition,{type:"warning",children:(0,t.jsxs)(n.p,{children:["Perform this step only if you already have a running validator that needs to free up space. If you are setting up a validator for the first time, refer to the ",(0,t.jsx)(n.code,{children:"Bootstrap the Node"})," section above."]})}),"\n",(0,t.jsx)(n.p,{children:"This step should be performed regularly, as the hard disk tends to fill up over time. It is advisable to establish a monitoring structure to determine when it is necessary to free up space."}),"\n",(0,t.jsxs)(n.p,{children:["To get started, edit the ",(0,t.jsx)(n.code,{children:"state-sync.sh"})," file and and include the final three lines"]}),"\n",(0,t.jsxs)(s,{children:[(0,t.jsx)("summary",{children:"state-sync.sh"}),(0,t.jsx)("p",{children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'#!/bin/bash\n\nSNAP_RPC="https://rpc.sentinel.co:443"\nSNAP_RPC2="https://rpc-sentinel.whispernode.com:443"\n\nLATEST_HEIGHT=$(curl -s $SNAP_RPC/block | jq -r .result.block.header.height); \\\nBLOCK_HEIGHT=$((LATEST_HEIGHT - 1000)); \\\nTRUST_HASH=$(curl -s "$SNAP_RPC/block?height=$BLOCK_HEIGHT" | jq -r .result.block_id.hash)\n\nsed -i.bak -E "s|^(enable[[:space:]]+=[[:space:]]+).*$|\\1true| ; \\\ns|^(rpc_servers[[:space:]]+=[[:space:]]+).*$|\\1\\"$SNAP_RPC,$SNAP_RPC2\\"| ; \\\ns|^(trust_height[[:space:]]+=[[:space:]]+).*$|\\1$BLOCK_HEIGHT| ; \\\ns|^(trust_hash[[:space:]]+=[[:space:]]+).*$|\\1\\"$TRUST_HASH\\"|" $HOME/.sentinelhub/config/config.toml\n\nmv $HOME/.sentinelhub/data $HOME/.sentinelhub/data-old\nmkdir -p $HOME/.sentinelhub/data\ncp $HOME/.sentinelhub/data-old/priv_validator_state.json $HOME/.sentinelhub/data\n'})})})]}),"\n",(0,t.jsx)(n.p,{children:"Stop the node"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sudo systemctl stop sentinelhub.service\n"})}),"\n",(0,t.jsx)(n.p,{children:"Launch the script"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"./state-sync.sh\n"})}),"\n",(0,t.jsx)(n.p,{children:"Start the node by running the following command:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sudo systemctl start sentinelhub.service\n"})}),"\n",(0,t.jsxs)(n.p,{children:["The final step is to check the ",(0,t.jsx)(n.a,{href:"/validator-setup/node-run#check-sync-status",children:"sync status"})," to confirm when the node has completed synchronization."]}),"\n",(0,t.jsx)(n.h2,{id:"block-sync",children:"Block Sync"}),"\n",(0,t.jsxs)(n.p,{children:["Block Sync involves starting from the genesis block of the blockchain and then sequentially downloading and validating every block until the node is fully synchronized with the current state of the blockchain. This process can be time-consuming because it requires processing every transaction in the blockchain's history.\nBlock sync is typically used when someone wants to host ",(0,t.jsx)(n.code,{children:"archive nodes"}),", which are nodes that retain the full history of the blockchain, including all the blocks and their associated states from the genesis block to the current block. This means they have the entire blockchain's data and can provide historical data queries for any point in the blockchain's history. Detailed guidance on setting up and maintaining an archive node will be covered in the future."]}),"\n",(0,t.jsx)(n.h2,{id:"check-sync-status",children:"Check Sync Status"}),"\n",(0,t.jsx)(n.p,{children:"After starting your node, it will fully synchronize within a few minutes. Periodically check its status using the following command:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'curl --silent "http://localhost:26657/status" | jq -S\n'})}),"\n",(0,t.jsxs)(n.p,{children:["If the value of ",(0,t.jsx)(n.code,{children:"result.sync_info.catching_up"})," is ",(0,t.jsx)(n.code,{children:"false"}),", it indicates that the node is synchronized and ready to start signing blocks."]}),"\n",(0,t.jsx)(n.p,{children:"To monitor the logs in real-time, use the following command:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sudo journalctl -u sentinelhub.service -f --output=cat\n"})}),"\n",(0,t.jsxs)(n.p,{children:["If you're not setting up a new node but just clearing space, after your node has finished syncing, you can safely delete the ",(0,t.jsx)(n.code,{children:".sentinel/data-old/"})," folder."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sudo rm -fr $HOME/.sentinelhub/data-old/\n"})})]})}function d(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>r});var t=s(96540);const a={},o=t.createContext(a);function i(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);
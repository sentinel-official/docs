"use strict";(self.webpackChunksentinel_docs=self.webpackChunksentinel_docs||[]).push([[6445],{57948:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var s=t(74848),r=t(28453);const i={title:"Scripts",sidebar_position:7},o="Node Scripts",c={id:"scripts",title:"Scripts",description:"This page contains simple and useful scripts for development within the Sentinel Ecosystem.",source:"@site/docs/nodes/scripts.md",sourceDirName:".",slug:"/scripts",permalink:"/nodes/scripts",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{title:"Scripts",sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"RPC List",permalink:"/nodes/rpc-list"}},d={},l=[{value:"Instructions",id:"instructions",level:2},{value:"Script list",id:"script-list",level:2},{value:"<code>Node Status</code>",id:"node-status",level:3},{value:"<code>RPC Countries</code>",id:"rpc-countries",level:3},{value:"<code>RPC Uptime</code>",id:"rpc-uptime",level:3}];function a(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,r.R)(),...e.components},{Details:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"node-scripts",children:"Node Scripts"}),"\n",(0,s.jsx)(n.p,{children:"This page contains simple and useful scripts for development within the Sentinel Ecosystem."}),"\n",(0,s.jsx)(n.h2,{id:"instructions",children:"Instructions"}),"\n",(0,s.jsxs)(n.p,{children:["Copy the scripts below into a file and save it with a ",(0,s.jsx)(n.code,{children:".sh"})," extension."]}),"\n",(0,s.jsx)(n.p,{children:"Make the file executable by running the following command:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"sudo chmod +x filename.sh\n"})}),"\n",(0,s.jsx)(n.p,{children:"Run the file using the terminal"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"./filename\n"})}),"\n",(0,s.jsx)(n.h2,{id:"script-list",children:"Script list"}),"\n",(0,s.jsx)(n.p,{children:"Explore the collection of scripts below"}),"\n",(0,s.jsx)(n.h3,{id:"node-status",children:(0,s.jsx)(n.code,{children:"Node Status"})}),"\n",(0,s.jsxs)(n.p,{children:["Provides the status of the specified ",(0,s.jsx)(n.code,{children:"sentnode"})," address."]}),"\n",(0,s.jsxs)(t,{children:[(0,s.jsx)("summary",{children:"Node Status"}),(0,s.jsx)("p",{children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",metastring:'title="/home/${USER}/sentnode-status.sh"',children:'#!/bin/bash\n\n# Fetching the JSON data from the API\napi_response=$(curl -s https://api.sentinelgrowthdao.com/sentinel/nodes/sentnode1rx7kjsvhvklcluhu9zl6hswrau06vh3ll7gthr)\n\n# Extracting the remote URL from the JSON response\nremote_url=$(echo "$api_response" | jq -r \'.node.remote_url\')\n\n# Fetching the status from the remote URL\nstatus_response=$(curl -k "$remote_url/status" | jq \'.\')\n\necho "Status from $remote_url:"\necho "$status_response" | jq \'.\'\n'})})})]}),"\n",(0,s.jsx)(n.h3,{id:"rpc-countries",children:(0,s.jsx)(n.code,{children:"RPC Countries"})}),"\n",(0,s.jsx)(n.p,{children:"Lists the countries of the RPC Nodes."}),"\n",(0,s.jsxs)(t,{children:[(0,s.jsx)("summary",{children:"RPC Countries"}),(0,s.jsx)("p",{children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",metastring:'title="/home/${USER}/rpc-countries.sh"',children:'#!/bin/bash\n\n# List of addresses to iterate over\n\naddresses=("rpc.trinityvalidator.com"\n           "rpc.sentinel.co"\n           "rpc.sentinel.quokkastake.io"\n           "rpc.sentinel.chaintools.tech"\n           "sentinel.declab.pro"\n           "rpc-sentinel.whispernode.com"\n           "rpc.sentinelgrowthdao.com"\n           "sentinel-rpc.publicnode.com"\n           "rpc.dvpn.roomit.xyz"\n           "sentinel.rpc.nodeshub.online"\n           "public.stakewolle.com"\n           "sentinel-rpc.validatornode.com"\n           "rpc.mathnodes.com"\n           "rpc.dvpn.me"\n           "rpc-sentinel-ia.cosmosia.notional.ventures"\n           "sentinel-rpc.polkachu.com"\n           "sentinel-rpc.badgerbite.io"\n           "rpc-sentinel.busurnode.com:443")\n\n\n# Iterate over each address\nfor address in "${addresses[@]}"; do\n    echo "Address: $address"\n    \n    # Get the IP address\n    rpc_ipv4=$(nslookup "$address" | awk \'/^Address: / { print $2 }\')\n    \n    # Get country information for the address\n    country=$(curl -s "http://ip-api.com/json/${rpc_ipv4}" | jq -r \'.country\')\n    \n    # Print the country information\n    echo "Country: $country"\n    echo ""\ndone\n'})})})]}),"\n",(0,s.jsx)(n.h3,{id:"rpc-uptime",children:(0,s.jsx)(n.code,{children:"RPC Uptime"})}),"\n",(0,s.jsx)(n.p,{children:"Lists the RPC Nodes and their uptime."}),"\n",(0,s.jsxs)(t,{children:[(0,s.jsx)("summary",{children:"RPC Uptime"}),(0,s.jsx)("p",{children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",metastring:'title="/home/${USER}/rpc-uptime.sh"',children:'#!/bin/bash\n\n# List of addresses to iterate over\n\nrpc_addresses=("https://rpc.trinityvalidator.com:443"\n           "https://rpc.sentinel.co:443"\n           "https://rpc.sentinel.quokkastake.io:443"\n           "https://rpc.sentinel.chaintools.tech:443"\n           "https://sentinel.declab.pro:26628"\n           "https://rpc-sentinel.whispernode.com:443"\n           "https://rpc.sentinelgrowthdao.com:443"\n           "https://sentinel-rpc.publicnode.com:443"\n           "https://rpc.dvpn.roomit.xyz:443"\n           "https://sentinel.rpc.nodeshub.online:443"\n           "https://public.stakewolle.com:443/cosmos/sentinel/rpc/"\n           "https://sentinel-rpc.validatornode.com:443"\n           "https://rpc.mathnodes.com:443"\n           "https://rpc.dvpn.me:443"\n           "https://sentinel-rpc.badgerbite.io:443"\n           "https://rpc-sentinel-ia.cosmosia.notional.ventures:443"\n           "https://sentinel-rpc.polkachu.com:443"\n           "https://rpc-sentinel.busurnode.com:443")\n\nfor node in "${rpc_addresses[@]}"; do\n   echo ""\n   echo "$node stats:"\n   # Capture the real time only using time command and redirecting stdout and stderr to /dev/null\n   real_time=$( { time /usr/local/bin/sentinelhub query block --node "$node" > /dev/null; } 2>&1 )\n   # Extract and print just the real time\n   echo "$real_time" | grep -oP \'real\\t\\K\\S+\'\n   echo ""\ndone\n'})})})]})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>c});var s=t(96540);const r={},i=s.createContext(r);function o(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);
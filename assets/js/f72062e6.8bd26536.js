"use strict";(self.webpackChunksentinel_docs=self.webpackChunksentinel_docs||[]).push([[4841],{58082:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>o,frontMatter:()=>l,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"upgrades/hard-fork","title":"Hard Fork sentinelhub-2","description":"Hardfork upgrade from blockchain sentinelhub-1 to sentinelhub-2","source":"@site/docs/full-node-setup/upgrades/hard-fork.md","sourceDirName":"upgrades","slug":"/upgrades/hard-fork","permalink":"/full-node-setup/upgrades/hard-fork","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"Hard Fork sentinelhub-2","sidebar_position":2},"sidebar":"tutorialSidebar","previous":{"title":"Software Upgrade","permalink":"/full-node-setup/upgrades/software-update"}}');var t=s(74848),d=s(28453);const l={title:"Hard Fork sentinelhub-2",sidebar_position:2},r="Hard Fork sentinelhub-2",a={},c=[{value:"Set halt block height",id:"set-halt-block-height",level:2},{value:"Export the state",id:"export-the-state",level:2},{value:"Install the new software",id:"install-the-new-software",level:2},{value:"Migrate the state",id:"migrate-the-state",level:2},{value:"Setup",id:"setup",level:2},{value:"Initialize the chain configuration files",id:"initialize-the-chain-configuration-files",level:3},{value:"Copy validator node and consensus private keys",id:"copy-validator-node-and-consensus-private-keys",level:3},{value:"Copy migrated Genesis file",id:"copy-migrated-genesis-file",level:3},{value:"Set minimun gas prices",id:"set-minimun-gas-prices",level:3},{value:"Set Peers and Seeds",id:"set-peers-and-seeds",level:3},{value:"Start",id:"start",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"hard-fork-sentinelhub-2",children:"Hard Fork sentinelhub-2"})}),"\n",(0,t.jsxs)(n.p,{children:["Hardfork upgrade from blockchain ",(0,t.jsx)(n.code,{children:"sentinelhub-1"})," to ",(0,t.jsx)(n.code,{children:"sentinelhub-2"})]}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"Upgrade #"})}),(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"Binary Version"})}),(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"Block Height"})}),(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"Commit Hash"})})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"sentinelhub-2"}),(0,t.jsx)(n.td,{children:"v0.6.2"}),(0,t.jsx)(n.td,{children:"901,800"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"https://github.com/sentinel-official/hub/commit/4cd6b2bb3609b6ca86414d50216568e90b847c28",children:"4cd6b2b"})})]})})]}),"\n",(0,t.jsx)(n.h2,{id:"set-halt-block-height",children:"Set halt block height"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Open the file ",(0,t.jsx)(n.code,{children:"${HOME}/.sentinelhubd/config/app.toml"})," with a text editor"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Set the value ",(0,t.jsx)(n.code,{children:"halt-height = 901800"})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Save and close the file"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Restart the Sentinel Hub daemon"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Wait until the blockchain halt"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.admonition,{title:"Warning",type:"danger",children:(0,t.jsx)(n.p,{children:"Follow the next steps only after the blockchain halt!"})}),"\n",(0,t.jsx)(n.h2,{id:"export-the-state",children:"Export the state"}),"\n",(0,t.jsx)(n.p,{children:"Verify the software version"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sentinelhubd version --long\n"})}),"\n",(0,t.jsx)(n.admonition,{title:"Note",type:"note",children:(0,t.jsxs)(n.p,{children:["Commit hash must be ",(0,t.jsx)(n.code,{children:"1aed4ffff291f6cec7e3768806bebef4e9f4442c"})]})}),"\n",(0,t.jsx)(n.p,{children:"Export the Blockchain state"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"HALT_HEIGHT=901800\r\n\r\nsentinelhubd export --height ${HALT_HEIGHT} > ${HOME}/${HALT_HEIGHT}.json\n"})}),"\n",(0,t.jsx)(n.p,{children:"Verify the SHA256 of the JSON file"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"jq -cSM '' ${HOME}/${HALT_HEIGHT}.json | sha256sum\n"})}),"\n",(0,t.jsx)(n.admonition,{title:"Note",type:"note",children:(0,t.jsxs)(n.p,{children:["Exported Genesis file hash must be ",(0,t.jsx)(n.code,{children:"e519a0dbb7e7e177c72965c0f7cd8507a537548f56e696c44bd01360424137ad"})]})}),"\n",(0,t.jsx)(n.h2,{id:"install-the-new-software",children:"Install the new software"}),"\n",(0,t.jsx)(n.p,{children:"Clone the source code"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"VERSION=v0.6.2\r\nBASE_DIRECTORY=${GOPATH}/src/github.com/sentinel-official\r\n\r\nrm -rf ${BASE_DIRECTORY}/hub/ && mkdir -p ${BASE_DIRECTORY} && cd ${BASE_DIRECTORY}/ && \\\r\ngit clone https://github.com/sentinel-official/hub.git && cd ${BASE_DIRECTORY}/hub/ && \\\r\ngit checkout ${VERSION}\n"})}),"\n",(0,t.jsx)(n.p,{children:"Build and install the software"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"make install\n"})}),"\n",(0,t.jsx)(n.h2,{id:"migrate-the-state",children:"Migrate the state"}),"\n",(0,t.jsx)(n.p,{children:"Verify the software version"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sentinelhub version --long\n"})}),"\n",(0,t.jsx)(n.admonition,{title:"Note",type:"note",children:(0,t.jsxs)(n.p,{children:["Commit hash must be ",(0,t.jsx)(n.code,{children:"4cd6b2bb3609b6ca86414d50216568e90b847c28"})]})}),"\n",(0,t.jsx)(n.p,{children:"Migrate the exported Blockchain state"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"CHAIN_ID=sentinelhub-2\r\nGENESIS_TIME=2021-05-29T14:30:00Z\r\nINITIAL_HEIGHT=901801\r\n\r\nsentinelhub migrate \\\r\n    --chain-id=${CHAIN_ID} \\\r\n    --genesis-time=${GENESIS_TIME} \\\r\n    --initial-height=${INITIAL_HEIGHT} \\\r\n    ${HALT_HEIGHT}.json > ${HOME}/genesis.json\n"})}),"\n",(0,t.jsx)(n.p,{children:"Verify the SHA256 of the JSON file"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"jq -cSM '' ${HOME}/genesis.json | sha256sum\n"})}),"\n",(0,t.jsx)(n.admonition,{title:"Note",type:"note",children:(0,t.jsxs)(n.p,{children:["Migreated Genesis file hash must be ",(0,t.jsx)(n.code,{children:"1dbcd7d58845b4b0696d31daafa2096bb3d729e51f8e8fa17e9e73eda1376382"})]})}),"\n",(0,t.jsx)(n.h2,{id:"setup",children:"Setup"}),"\n",(0,t.jsx)(n.h3,{id:"initialize-the-chain-configuration-files",children:"Initialize the chain configuration files"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"MONIKER=\r\n\r\nsentinelhub init ${MONIKER} \\\r\n    --chain-id ${CHAIN_ID}\n"})}),"\n",(0,t.jsx)(n.h3,{id:"copy-validator-node-and-consensus-private-keys",children:"Copy validator node and consensus private keys"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"FROM_DIR=${HOME}/.sentinelhubd/config\r\nTO_DIR=${HOME}/.sentinelhub/config\r\n\r\ncp ${FROM_DIR}/node_key.json ${TO_DIR}/node_key.json\r\ncp ${FROM_DIR}/priv_validator_key.json ${TO_DIR}/priv_validator_key.json\n"})}),"\n",(0,t.jsx)(n.h3,{id:"copy-migrated-genesis-file",children:"Copy migrated Genesis file"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"cp ${HOME}/genesis.json ${TO_DIR}/genesis.json\n"})}),"\n",(0,t.jsx)(n.h3,{id:"set-minimun-gas-prices",children:"Set minimun gas prices"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Open the file ",(0,t.jsx)(n.code,{children:"${HOME}/.sentinelhub/config/app.toml"})]}),"\n",(0,t.jsxs)(n.li,{children:["Go to the line which contains the field ",(0,t.jsx)(n.code,{children:'minimum-gas-prices = ""'})]}),"\n",(0,t.jsxs)(n.li,{children:["Change the value to ",(0,t.jsx)(n.code,{children:'minimum-gas-prices = "0.1udvpn"'})]}),"\n",(0,t.jsx)(n.li,{children:"Save the file"}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"set-peers-and-seeds",children:"Set Peers and Seeds"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Open the file ",(0,t.jsx)(n.code,{children:"${HOME}/.sentinelhub/config/config.toml"})]}),"\n",(0,t.jsxs)(n.li,{children:["Go to the line which contains the field ",(0,t.jsx)(n.code,{children:'persistent_peers = ""'})]}),"\n",(0,t.jsx)(n.li,{children:"Insert the below node addresses"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-text",children:"05fe2a7847fd27345250915fd06752c424f40651@85.222.234.135:26656,387027e3b1180d3a619cbbf3462704a490785963@54.176.90.228:26656,63bd9cfce0f0d274aad5b166dd06d829021aec43@121.78.247.243:56656,855807cc6a919c22ec943050ebb5c80b23724ed0@3.239.11.246:26656,8caefbf8f4318ecc93f2c901cf11470e4a16c818@161.97.135.122:26656,9174af5f16f74660cccf49f893d243949af45f7f@54.177.29.46:26656,9fa528bd2b9e7c80724a1d8a4e1a2a8a83e7d123@142.93.72.221:26656,a77f6a094578dad899e2f40e0626b4c6d4705311@3.36.165.232:26656,bd45a11390d16d128a9eeea3935b53d7a1a3c120@15.236.127.69:26656,cdb8dd7628460a546ce1594ca0bc0c20366514cf@34.72.64.178:26656,d1efceccb04ded9a604e5235f76da86872157d68@161.97.149.223:26656,e00b23444cc8dbb353d5faa765ab36cfc0116b57@83.60.98.134:28685,e5ee89bd4fc371c6a0e66d2b8daefd891b6b87b5@157.90.117.58:26656,f7ceb735606f90df7eb6cd987641876955b6e325@46.4.55.150:36656\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Go to the line which contains the field ",(0,t.jsx)(n.code,{children:'seeds = ""'})]}),"\n",(0,t.jsx)(n.li,{children:"Insert the below node addresses"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-text",children:"c3aa0ff9b3eb17be1b0a26d7c8a5683e8e528e1a@159.89.192.105:26656\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Save the file"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"start",children:"Start"}),"\n",(0,t.jsx)(n.p,{children:"Start the Sentinel Hub daemon"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sentinelhub start\n"})})]})}function o(e={}){const{wrapper:n}={...(0,d.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>l,x:()=>r});var i=s(96540);const t={},d=i.createContext(t);function l(e){const n=i.useContext(d);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),i.createElement(d.Provider,{value:n},e.children)}}}]);
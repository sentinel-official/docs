"use strict";(self.webpackChunksentinel_docs=self.webpackChunksentinel_docs||[]).push([[7683],{10411:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>d,toc:()=>o});var t=n(87462),l=(n(67294),n(3905));const s={title:"Install and Configure Full Node",description:"These steps will guide you on how to install and configure the Sentinel hub",sidebar_position:4},i="Install and Configure Full Node",d={unversionedId:"node-setup",id:"node-setup",title:"Install and Configure Full Node",description:"These steps will guide you on how to install and configure the Sentinel hub",source:"@site/docs/validator-setup/node-setup.md",sourceDirName:".",slug:"/node-setup",permalink:"/validator-setup/node-setup",draft:!1,editUrl:"https://github.com/sentinel-official/docs/tree/main/docs/validator-setup/node-setup.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Install and Configure Full Node",description:"These steps will guide you on how to install and configure the Sentinel hub",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Install Golang",permalink:"/validator-setup/golang"},next:{title:"Run the Full Node",permalink:"/validator-setup/node-run"}},c={},o=[{value:"Enable ports on Firewall",id:"enable-ports-on-firewall",level:2},{value:"Install Sentinel Hub",id:"install-sentinel-hub",level:2},{value:"Configure Sentinel Hub",id:"configure-sentinel-hub",level:2},{value:"Genesis File",id:"genesis-file",level:3},{value:"Edit the Node configuration file",id:"edit-the-node-configuration-file",level:3},{value:"Add a system unit file",id:"add-a-system-unit-file",level:3}],b={toc:o},r="wrapper";function u(e){let{components:a,...n}=e;return(0,l.kt)(r,(0,t.Z)({},b,n,{components:a,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"install-and-configure-full-node"},"Install and Configure Full Node"),(0,l.kt)("h2",{id:"enable-ports-on-firewall"},"Enable ports on Firewall"),(0,l.kt)("p",null,"Set up these ports on your firewall:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"sudo ufw allow 26656/tcp\n")),(0,l.kt)("p",null,"Check firewall status to see if the port has been enabled"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"sudo ufw status\n")),(0,l.kt)("h2",{id:"install-sentinel-hub"},"Install Sentinel Hub"),(0,l.kt)("p",null,"Launch this command and make sure the hub version is the last (you can check ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/sentinel-official/hub/releases"},"here"),")"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'git clone https://github.com/sentinel-official/hub.git "${HOME}/sentinelhub"\ncd "${HOME}/sentinelhub"\ngit checkout v0.11.3\nmake install\nsudo ln -s "${GOBIN}/sentinelhub" /usr/local/bin/sentinelhub\n')),(0,l.kt)("h2",{id:"configure-sentinel-hub"},"Configure Sentinel Hub"),(0,l.kt)("h3",{id:"genesis-file"},"Genesis File"),(0,l.kt)("p",null,"Let's initialize the Sentinel Hub using the Genesis file, a JSON file which defines the initial state of Sentinel blockchain. The state defined in the genesis file contains all the necessary information, like initial token allocation, genesis time, default parameters, and more"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'sentinelhub init --chain-id sentinelhub-2 "Your Validator Name"\ncurl -fsLS -o "${HOME}/genesis.zip" "https://raw.githubusercontent.com/sentinel-official/networks/main/sentinelhub-2/genesis.zip"\nunzip -d "${HOME}/.sentinelhub/config/" "${HOME}/genesis.zip"\nrm "${HOME}/genesis.zip"\n')),(0,l.kt)("p",null,"You will be asked to replace the genesis file, type ",(0,l.kt)("inlineCode",{parentName:"p"},"[A]ll")),(0,l.kt)("p",null,"In case you need a mirror because the official hosting site does not work, use this:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"wget -O genesis.json https://snapshots.polkachu.com/genesis/sentinel/genesis.json --inet4-only\nmv genesis.json ~/.sentinelhub/config\n")),(0,l.kt)("h3",{id:"edit-the-node-configuration-file"},"Edit the Node configuration file"),(0,l.kt)("p",null,"Open the config.toml file"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"sudo nano ${HOME}/.sentinelhub/config/config.toml\n")),(0,l.kt)("p",null,"Set seeds and peers separated by comma."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Seeds"),": are initial entry points for new nodes joining the network and are typically used during the bootstrap phase. In this phase, a new node connects to them to obtain information about the network's topology and to discover other nodes to connect to. The seeds you see below are taken from ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/QuokkaStake/ansible/blob/master/group_vars/sentinelhub_2"},"here")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Peers*"),": are usually nodes that a given node wants to maintain a reliable and consistent connection with, often because they have specific roles in the network or are deemed important for communication. The below peers were sent me by a Sentinel developer.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash",metastring:"title=${HOME}/.sentinelhub/config/config.toml",title:"${HOME}/.sentinelhub/config/config.toml"},'[p2p]\nseeds = "05fe2a7847fd27345250915fd06752c424f40651@85.222.234.135:26656,387027e3b1180d3a619cbbf3462704a490785963@54.176.90.228:26656,63bd9cfce0f0d274aad5b166dd06d829021aec43@121.78.247.243:56656,855807cc6a919c22ec943050ebb5c80b23724ed0@3.239.11.246:26656,8caefbf8f4318ecc93f2c901cf11470e4a16c818@161.97.135.122:26656,9174af5f16f74660cccf49f893d243949af45f7f@54.177.29.46:26656,9fa528bd2b9e7c80724a1d8a4e1a2a8a83e7d123@142.93.72.221:26656,a77f6a094578dad899e2f40e0626b4c6d4705311@3.36.165.232:26656,bd45a11390d16d128a9eeea3935b53d7a1a3c120@15.236.127.69:26656,cdb8dd7628460a546ce1594ca0bc0c20366514cf@34.72.64.178:26656,d1efceccb04ded9a604e5235f76da86872157d68@161.97.149.223:26656,e00b23444cc8dbb353d5faa765ab36cfc0116b57@83.60.98.134:28685,e5ee89bd4fc371c6a0e66d2b8daefd891b6b87b5@157.90.117.58:26656,f7ceb735606f90df7eb6cd987641876955b6e325@46.4.55.150:36656,05fe2a7847fd27345250915fd06752c424f40651@85.222.234.135:26656,387027e3b1180d3a619cbbf3462704a490785963@54.176.90.228:26656,63bd9cfce0f0d274aad5b166dd06d829021aec43@121.78.247.243:56656,855807cc6a919c22ec943050ebb5c80b23724ed0@3.239.11.246:26656,8caefbf8f4318ecc93f2c901cf11470e4a16c818@161.97.135.122:26656,9174af5f16f74660cccf49f893d243949af45f7f@54.177.29.46:26656,9fa528bd2b9e7c80724a1d8a4e1a2a8a83e7d123@142.93.72.221:26656,a77f6a094578dad899e2f40e0626b4c6d4705311@3.36.165.232:26656,bd45a11390d16d128a9eeea3935b53d7a1a3c120@15.236.127.69:26656,cdb8dd7628460a546ce1594ca0bc0c20366514cf@34.72.64.178:26656,d1efceccb04ded9a604e5235f76da86872157d68@161.97.149.223:26656,e00b23444cc8dbb353d5faa765ab36cfc0116b57@83.60.98.134:28685,e5ee89bd4fc371c6a0e66d2b8daefd891b6b87b5@157.90.117.58:26656,f7ceb735606f90df7eb6cd987641876955b6e325@46.4.55.150:36656,ebc272824924ea1a27ea3183dd0b9ba713494f83@sentinel.mainnet.peer.autostake.net:26706,ade4d8bc8cbe014af6ebdf3cb7b1e9ad36f412c0@seeds.polkachu.com:23956"\npersistent_peers = "89757803f40da51678451735445ad40d5b15e059@169.155.169.176:26656,8d639d92a6de1032f361ca8deb56a60404b1c41d@65.21.136.170:56656,aae9c4dc31f1b050d1bcd13df0b9d9affc5df361@104.196.120.61:26656,9026bf3d313ef789e614f10eba8c6fcdde2e8768@54.176.220.6:26656,c0dc39bae9bc6cd3f54968f97b52a4ad5adfd37a@htz1.badgerbite.io:56656,b212d5740b2e11e54f56b072dc13b6134650cfb5@169.155.45.136:26656,464d1b0650ee82c975e1e7f40ae737f4f688ae32@178.154.212.189:26656,440d002ecaaf99a53ff551e1add65b60319ae1b3@131.153.175.94:30656,e7b825983d15eef809e929b44b2085dcec9d27b6@51.68.44.219:26556,e1b058e5cfa2b836ddaa496b10911da62dcf182e@23.88.21.228:26656,13a32c4a2bdd78d4017bedb60b1d61a8558b7a88@85.10.211.82:36656,2a426a8a0070a6830bad32b96cd3da1b7b6a2faa@65.108.11.250:29656,471518432477e31ea348af246c0b54095d41352c@169.155.47.161:26656,1ebe18d2d50f6bf548d974afc3e13ccdc9d1a04f@34.148.70.141:26656,ebc272824924ea1a27ea3183dd0b9ba713494f83@95.214.55.198:26706,e407ce1485c5c5abe86d4c4b04f21bc04c321edc@89.58.31.128:36656,905cce9ffa2c87e67288aca631108b20a686088b@195.201.63.87:46656,abc27c91439681b1e7fa4b08b54ebbcc42855973@65.108.195.12:26656,233592737772cf4e8aca29623cb54d53e978bf84@51.159.185.51:26656,1fc1a1219c14f8005116a97b0bc7e6a65a5343a1@35.196.143.233:26656,662ccbd8c9885ddff6800a707da3dc6b0c4ed49d@15.235.115.148:10001,a0b85e69890c142836cd4e14ac520dfc56907249@75.119.134.205:26656,01cf083bf6e4667c4c1d2bb9454a2e06d6d5e415@85.237.193.117:26656,442e7d3d100a91ed2d16c15879b36a8beef7faca@89.58.26.9:26656,c124ce0b508e8b9ed1c5b6957f362225659b5343@134.65.192.134:26656,e726816f42831689eab9378d5d577f1d06d25716@23.88.22.4:26656,44a6007450d5b8292c19e193ab53f5ad9861b60b@46.20.245.42:26656,e1be5e84e6f76bdc4d24d2f39830b6f50857e684@78.107.253.133:33656,4398bd773ac885b7365de3604eb487be10c54563@95.214.55.227:26706,f6e4a9bd29b8629dc93b813ec784114ca604dff8@65.108.238.219:23956"\n')),(0,l.kt)("p",null,"Enable Prometheus for data scraping"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'prometheus = true\n\n# Address to listen for Prometheus collector(s) connections\nprometheus_listen_addr = ":26660"\n')),(0,l.kt)("p",null,"Open the Prometheus port 26660 on Validator firewall which will be accessible only from your monitor machine"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"sudo ufw allow from monitor_ip to validator_ip port 26660\n")),(0,l.kt)("p",null,"Open the app.toml file"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"sudo nano ${HOME}/.sentinelhub/config/app.toml\n")),(0,l.kt)("p",null,"Set minimum gas prices"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash",metastring:"title=${HOME}/.sentinelhub/config/app.toml",title:"${HOME}/.sentinelhub/config/app.toml"},'minimum-gas-prices = "0.01ibc/31FEE1A2A9F9C01113F90BD0BBCCE8FD6BBB8585FAF109A2101827DD1D5B95B8,0.01udvpn,0.01ibc/B1C0DDB14F25279A2026BC8794E12B259F8BDA546A3C5132CCAEE4431CE36783,0.01ibc/ED07A3391A112B175915CD8FAF43A2DA8E4790EDE12566649D0C2F97716B8518,0.01ibc/A8C2D23A1E6F95DA4E48BA349667E322BD7A6C996D8A4AAE8BA72E190F3D1477"\n')),(0,l.kt)("h3",{id:"add-a-system-unit-file"},"Add a system unit file"),(0,l.kt)("p",null,"Open the sentinelhub.service with a text editor"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"sudo nano /etc/systemd/system/sentinelhub.service\n")),(0,l.kt)("p",null,"Paste the below text"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash",metastring:"title=/etc/systemd/system/sentinelhub.service",title:"/etc/systemd/system/sentinelhub.service"},"[Unit]\nDescription=Sentinel Hub Daemon\nAfter=network.target\n\n[Service]\nUser=sentinel\nType=simple\nExecStart=/home/sentinel/go/bin/sentinelhub start\nRestart=on-failure\nStartLimitInterval=0\nRestartSec=5\nLimitNOFILE=1048576\nLimitMEMLOCK=2048132\n\n[Install]\nWantedBy=multi-user.target\n")),(0,l.kt)("p",null,"Let's make sure to assign ownership of all sentinelhub files to the current user (in our case, 'sentinel')"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"sudo chown -R sentinel:sentinel ~/.sentinelhub\n")),(0,l.kt)("p",null,"Reload the systemd Daemon"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"sudo systemctl daemon-reload\n")),(0,l.kt)("p",null,"Enable autostart of Sentinel Hub service"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"sudo systemctl enable sentinelhub.service\n")))}u.isMDXComponent=!0}}]);
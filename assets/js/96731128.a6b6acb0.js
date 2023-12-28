"use strict";(self.webpackChunksentinel_docs=self.webpackChunksentinel_docs||[]).push([[8423],{17795:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var s=n(85893),t=n(11151);const r={title:"Cosmos Node Exporter",sidebar_position:4},i="Cosmos Node Exporter",a={id:"exporters/cosmos-node-exporter",title:"Cosmos Node Exporter",description:"Cosmos Node Exporter is a Prometheus scraping tool designed to monitor your node. It enables you to set up alerting for various critical conditions, such as:",source:"@site/docs/node-monitoring/exporters/cosmos-node-exporter.md",sourceDirName:"exporters",slug:"/exporters/cosmos-node-exporter",permalink:"/node-monitoring/exporters/cosmos-node-exporter",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Cosmos Node Exporter",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Cosmos Validator Exporter",permalink:"/node-monitoring/exporters/cosmos-validator-exporter"},next:{title:"Alert Manager",permalink:"/node-monitoring/alertmanager"}},l={},d=[{value:"Validator Machine",id:"validator-machine",level:2},{value:"Download &amp; Installation",id:"download--installation",level:3},{value:"Create a Config file",id:"create-a-config-file",level:3},{value:"Add a system unit file",id:"add-a-system-unit-file",level:3},{value:"Start Cosmos Node Exporter service",id:"start-cosmos-node-exporter-service",level:3},{value:"Open Firewall Port",id:"open-firewall-port",level:3},{value:"Monitoring Machine",id:"monitoring-machine",level:2}];function c(e){const o={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...e.components},{Details:n}=o;return n||function(e,o){throw new Error("Expected "+(o?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(o.h1,{id:"cosmos-node-exporter",children:"Cosmos Node Exporter"}),"\n",(0,s.jsxs)(o.p,{children:[(0,s.jsx)(o.a,{href:"https://github.com/QuokkaStake/cosmos-node-exporter",children:"Cosmos Node Exporter"})," is a Prometheus scraping tool designed to monitor your node. It enables you to set up alerting for various critical conditions, such as:"]}),"\n",(0,s.jsxs)(o.ul,{children:["\n",(0,s.jsx)(o.li,{children:"Notification for new releases: Receive alerts when your application version doesn't match the latest release on GitHub, keeping you informed about important updates."}),"\n",(0,s.jsx)(o.li,{children:"Voting Power Monitoring: Get alerted if the voting power of your validator node drops to zero, helping you quickly address any issues affecting your node's participation in the network."}),"\n",(0,s.jsx)(o.li,{children:"Node Synchronization: Stay informed about the progress of your node's synchronization, ensuring that it doesn't fall behind and remains up-to-date with the network."}),"\n",(0,s.jsx)(o.li,{children:"Chain Upgrade Readiness: Receive notifications when chain upgrades are available, but your node lacks the necessary binary files, ensuring that your node is always prepared for network upgrades."}),"\n"]}),"\n",(0,s.jsx)(o.h2,{id:"validator-machine",children:"Validator Machine"}),"\n",(0,s.jsx)(o.p,{children:"Execute the following operations on your validator machine"}),"\n",(0,s.jsx)(o.h3,{id:"download--installation",children:"Download & Installation"}),"\n",(0,s.jsxs)(o.p,{children:["To get started, begin by downloading the most recent ",(0,s.jsx)(o.a,{href:"https://github.com/QuokkaStake/cosmos-node-exporter/releases",children:"release"}),". Once the download is complete, proceed to unzip the file, and you'll be all set to proceed."]}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-bash",children:"mkdir cosmos-node-exporter\ncd cosmos-node-exporter\nwget https://github.com/QuokkaStake/cosmos-node-exporter/releases/download/v3.1.0/cosmos-node-exporter_3.1.0_linux_amd64.tar.gz\ntar xvfz cosmos-node-exporter_3.1.0_linux_amd64.tar.gz\nsudo rm -f cosmos-node-exporter_3.1.0_linux_amd64.tar.gz\n"})}),"\n",(0,s.jsxs)(o.p,{children:["Add a symbolic link to the ",(0,s.jsx)(o.code,{children:"/usr/local/bin/"})," directory for system-wide access to Cosmos Node Exporter:"]}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-bash",children:"sudo ln -s /home/<your_user>/cosmos-node-exporter/cosmos-node-exporter /usr/local/bin/\n"})}),"\n",(0,s.jsx)(o.h3,{id:"create-a-config-file",children:"Create a Config file"}),"\n",(0,s.jsxs)(o.p,{children:["Inside your ",(0,s.jsx)(o.code,{children:"cosmos-node-exporter"})," directory create the config file:"]}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-bash",children:"sudo nano config.toml\n"})}),"\n",(0,s.jsxs)(o.p,{children:["Paste the following code in it making sure to edit the fields between ",(0,s.jsx)(o.code,{children:"<"})," and ",(0,s.jsx)(o.code,{children:">"})," characters"]}),"\n",(0,s.jsxs)(n,{children:[(0,s.jsx)("summary",{children:"config.toml"}),(0,s.jsx)("p",{children:(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-bash",metastring:'title="/home/<your_user>/cosmos-node-exporter/config.toml"',children:'# Logging configuration.\n[log]\n# Verbosity level. Set to `debug` or even `trace` to make it more verbose. Defaults to `info`.\nlevel = "debug"\n# Whether to print logs in JSON format. Useful if you are using centralised logs solutions like ELK.\n# Defaults to false.\njson = false\n\n# Tendermint configuration\n[tendermint]\n# If set to false, the metrics related to Tendermint node would be disabled. Defaults to true.\nenabled = true\n# Tendermint RPC address. Defaults to "http://localhost:26657".\naddress = "http://localhost:26657"\n# If set to false, upgrades metrics won\'t be queried. Useful for chains that use Tendermint\n# but not cosmos-sdk, such as Nomic. Defaults to true.\nquery-upgrades = true\n\n[cosmovisor]\n# If set to false, the metrics related to Cosmovisor would be disabled. Defaults to true.\nenabled = true\n# Path to folder storing fullnode data and configs (like ~/.gaia for cosmoshub).\nchain-folder = "/home/<your_user>/.sentinelhub"\n# Binary name (like gaiad for cosmoshub)\nchain-binary-name = "sentinelhub"\n# Cosmovisor path (usually located at ~/go/bin/cosmovisor)\ncosmovisor-path = "/home/<your_user>/go/bin/cosmovisor"\n\n# Github configuration.\n[github]\n# Repository path. Omitting it will result in disabling Github metrics.\nrepository = "https://github.com/sentinel-official/hub"\n# Github token. Useful if you want to make requests often, as Github rate-limits requests\n# if no token is specified.\ntoken = "<your_github_token>"\n'})})})]}),"\n",(0,s.jsx)(o.h3,{id:"add-a-system-unit-file",children:"Add a system unit file"}),"\n",(0,s.jsx)(o.p,{children:"Create the .service file with a text editor"}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-bash",children:"sudo nano /etc/systemd/system/cosmos-node-exporter.service\n"})}),"\n",(0,s.jsx)(o.p,{children:"Paste the below text"}),"\n",(0,s.jsxs)(n,{children:[(0,s.jsx)("summary",{children:"cosmos-node-exporter.service"}),(0,s.jsx)("p",{children:(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-bash",metastring:'title="/etc/systemd/system/cosmos-node-exporter.service"',children:"[Unit]\nDescription=Cosmos Node Exporter\nAfter=network-online.target\n\u200b\n[Service]\nUser=<your_user> #modify this field with your user\nTimeoutStartSec=0\nCPUWeight=95\nIOWeight=95\nExecStart=cosmos-node-exporter --config /home/<your-user>/cosmos-node-exporter/config.toml\nRestart=always\nRestartSec=2\nLimitNOFILE=800000\nKillSignal=SIGTERM\n\u200b\n[Install]\nWantedBy=multi-user.target\n"})})})]}),"\n",(0,s.jsx)(o.p,{children:"Reload the systemd Daemon"}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-bash",children:"sudo systemctl daemon-reload\n"})}),"\n",(0,s.jsx)(o.p,{children:"Enable autostart of Cosmos Node Exporter service"}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-bash",children:"sudo systemctl enable cosmos-node-exporter.service\n"})}),"\n",(0,s.jsx)(o.h3,{id:"start-cosmos-node-exporter-service",children:"Start Cosmos Node Exporter service"}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-bash",children:"sudo systemctl start cosmos-node-exporter.service\n"})}),"\n",(0,s.jsx)(o.p,{children:"Use this command to check logs in real time"}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-bash",children:"sudo journalctl -u cosmos-node-exporter.service -f --output cat\n"})}),"\n",(0,s.jsxs)(o.p,{children:["Once the Cosmos Node Exporter is installed and running, you can verify that ",(0,s.jsx)(o.code,{children:"metrics"})," are being exported by cURLing the /metrics endpoint:"]}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-bash",children:"curl http://localhost:9500/metrics\n"})}),"\n",(0,s.jsx)(o.p,{children:"Success! Cosmos Node Exporter is now exposing metrics that Prometheus can scrape, including a wide variety of system metrics further down in the output."}),"\n",(0,s.jsx)(o.h3,{id:"open-firewall-port",children:"Open Firewall Port"}),"\n",(0,s.jsxs)(o.admonition,{title:"Important",type:"danger",children:[(0,s.jsx)(o.p,{children:"After successfully installing and launching Cosmos Node Exporter, the next step is to open port 9500 on your Validator's firewall. This port should be accessible exclusively from your monitoring machine. This action is essential to enable Prometheus to collect data from Cosmos Node Exporter."}),(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-bash",children:"sudo ufw allow from monitor_ip to validator_ip port 9500\n"})})]}),"\n",(0,s.jsx)(o.h2,{id:"monitoring-machine",children:"Monitoring Machine"}),"\n",(0,s.jsxs)(o.p,{children:["On your monitoring machine, go to your prometheus directory and open your ",(0,s.jsx)(o.code,{children:"prometheus.yml"})," file"]}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-bash",children:"sudo nano prometheus.yml\n"})}),"\n",(0,s.jsxs)(o.p,{children:["Add the cosmos node exporter job into it, under ",(0,s.jsx)(o.code,{children:"scrape_configs"})," block"]}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-bash",children:' # Cosmos Node Exporter\n  - job_name: "cosmos-node-exporter"\n\n    static_configs:\n      - targets: ["<your_validator_ip>:9500"]\n'})})]})}function h(e={}){const{wrapper:o}={...(0,t.a)(),...e.components};return o?(0,s.jsx)(o,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}}}]);
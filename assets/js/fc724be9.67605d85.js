"use strict";(self.webpackChunksentinel_docs=self.webpackChunksentinel_docs||[]).push([[2787],{75293:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>m,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var i=t(85893),s=t(11151);const a={title:"Setup & Config",Description:"Full TMKMS installation and configuration process",sidebar_position:3},r="Setup & Config",o={id:"tmkms/setup-config",title:"Setup & Config",description:"Installation",source:"@site/docs/validator-setup/tmkms/setup-config.md",sourceDirName:"tmkms",slug:"/tmkms/setup-config",permalink:"/validator-setup/tmkms/setup-config",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Setup & Config",Description:"Full TMKMS installation and configuration process",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Install Dependencies",permalink:"/validator-setup/tmkms/install-dependencies"},next:{title:"Edit Validator Config",permalink:"/validator-setup/tmkms/edit-val-config"}},l={},c=[{value:"Installation",id:"installation",level:2},{value:"Transfer Private Validator Key",id:"transfer-private-validator-key",level:2},{value:"TMKMS Config",id:"tmkms-config",level:2},{value:"Add a system unit file",id:"add-a-system-unit-file",level:2}];function d(e){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"setup--config",children:"Setup & Config"}),"\n",(0,i.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,i.jsxs)(n.p,{children:["In this example, we will be compiling from the github source code using the ",(0,i.jsx)(n.code,{children:"--features=softsign"})," flag, however you may use ",(0,i.jsx)(n.code,{children:"--features=yubihsm"})," if you want to use a yubikey (ledger support is not working properly at the moment, and this guide will not go into using yubihsm)."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"cd $HOME\ngit clone https://github.com/iqlusioninc/tmkms.git\ncd $HOME/tmkms\ncargo install tmkms --features=softsign\ntmkms init config\ntmkms softsign keygen ./config/secrets/secret_connection_key\n"})}),"\n",(0,i.jsx)(n.h2,{id:"transfer-private-validator-key",children:"Transfer Private Validator Key"}),"\n",(0,i.jsx)(n.p,{children:"Now we will transfer your validator private key from your validator to your machine running TMKMS. To do this we will use scp command, but it can also be done manually:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"scp user@validator_ip:~/.sentinelhub/config/priv_validator_key.json ~/tmkms/config/secrets\n"})}),"\n",(0,i.jsx)(n.p,{children:"Then, import the private validator key into tmkms:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"tmkms softsign import $HOME/tmkms/config/secrets/priv_validator_key.json $HOME/tmkms/config/secrets/priv_validator_key\n"})}),"\n",(0,i.jsxs)(n.p,{children:["This newly created ",(0,i.jsx)(n.code,{children:"priv_validator_key"})," will be what TMKMS will use to sign for your validator."]}),"\n",(0,i.jsxs)(n.p,{children:["Now you can safely remove ",(0,i.jsx)(n.code,{children:"priv_validator_key.json"})," from your tmkms node and store it safely offline in case of an emergency."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"sudo rm -f /home/myuser/tmkms/config/secrets/priv_validator_key.json\n"})}),"\n",(0,i.jsx)(n.h2,{id:"tmkms-config",children:"TMKMS Config"}),"\n",(0,i.jsx)(n.p,{children:"Open the tmkms config file"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"sudo nano $HOME/tmkms/config/tmkms.toml\n"})}),"\n",(0,i.jsx)(n.p,{children:"In this example, my validator has the IP address of validator_ip and we will be using port 26659 to feed the validator key to the validator. We will also be using chain_id sentinelhub-2"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",metastring:'title="$HOME/tmkms/config/tmkms.toml"',children:'# Tendermint KMS configuration file\n\n## Chain Configuration\n\n### Sentinel Network\n\n[[chain]]\nid = "sentinelhub-2"\nkey_format = { type = "bech32", account_key_prefix = "sentpub", consensus_key_prefix = "sentvalconspub" }\nstate_file = "home/myuser/tmkms/config/state/priv_validator_state.json"\n\n## Signing Provider Configuration\n\n### Software-based Signer Configuration\n\n[[providers.softsign]]\nchain_ids = ["sentinelhub-2"]\nkey_type = "consensus"\npath = "/home/myuser/tmkms/config/secrets/priv_validator_key"\n\n## Validator Configuration\n\n[[validator]]\nchain_id = "sentinelhub-2"\naddr = "tcp://validator_ip:26659" #insert validator ip\nsecret_key = "/home/myuser/tmkms/config/secrets/kms-identity.key"\nprotocol_version = "v0.34" #check the version match with the one of your validator\nreconnect = true\n'})}),"\n",(0,i.jsx)(n.h2,{id:"add-a-system-unit-file",children:"Add a system unit file"}),"\n",(0,i.jsx)(n.p,{children:"Create the tmkms.service with a text editor"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"sudo nano /etc/systemd/system/tmkms.service\n"})}),"\n",(0,i.jsx)(n.p,{children:"Paste the below text"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",metastring:'title="/etc/systemd/system/tmkms.service"',children:"[Unit]\nDescription=TMKMS Daemon\nAfter=network.target\n\n[Service]\nUser=trinity\nType=simple\nExecStart=/home/trinity/.cargo/bin/tmkms start -c /home/trinity/tmkms/config/tmkms.toml\nRestart=on-failure\nStartLimitInterval=0\nRestartSec=5\nLimitNOFILE=1048576\nLimitMEMLOCK=2048132\n\n[Install]\nWantedBy=multi-user.target\n"})}),"\n",(0,i.jsx)(n.p,{children:"Reload the systemd Daemon"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"sudo systemctl daemon-reload\n"})}),"\n",(0,i.jsx)(n.p,{children:"Enable autostart of tmkms service"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"sudo systemctl enable tmkms.service\n"})})]})}function m(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}}}]);
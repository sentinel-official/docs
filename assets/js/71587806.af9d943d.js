"use strict";(self.webpackChunksentinel_docs=self.webpackChunksentinel_docs||[]).push([[6285],{43091:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>p});var n=a(87462),s=(a(67294),a(3905));const r={title:"Setup & Configuration",sidebar_position:2},l="Setup & Configuration",i={unversionedId:"restake/setup-config",id:"restake/setup-config",title:"Setup & Configuration",description:"Install Docker",source:"@site/docs/validator-setup/restake/setup-config.md",sourceDirName:"restake",slug:"/restake/setup-config",permalink:"/validator-setup/restake/setup-config",draft:!1,editUrl:"https://github.com/sentinel-official/docs/tree/main/docs/validator-setup/restake/setup-config.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Setup & Configuration",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/validator-setup/restake/overview"},next:{title:"Submit Operator",permalink:"/validator-setup/restake/submit-operator"}},o={},p=[{value:"Install Docker",id:"install-docker",level:2},{value:"Create a mnemonic you will use only for Restake.app",id:"create-a-mnemonic-you-will-use-only-for-restakeapp",level:2},{value:"Clone and configure Restake",id:"clone-and-configure-restake",level:2},{value:"Running the script",id:"running-the-script",level:2},{value:"Setting up a timer to run the script on a schedule",id:"setting-up-a-timer-to-run-the-script-on-a-schedule",level:2},{value:"Create a systemd unit file",id:"create-a-systemd-unit-file",level:3},{value:"Create a systemd timer file",id:"create-a-systemd-timer-file",level:3},{value:"Enable and start the 2 created services",id:"enable-and-start-the-2-created-services",level:3}],c={toc:p},u="wrapper";function d(e){let{components:t,...a}=e;return(0,s.kt)(u,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"setup--configuration"},"Setup & Configuration"),(0,s.kt)("h2",{id:"install-docker"},"Install Docker"),(0,s.kt)("p",null,"Install Docker Engine from official ",(0,s.kt)("a",{parentName:"p",href:"https://docs.docker.com/engine/"},"site")),(0,s.kt)("h2",{id:"create-a-mnemonic-you-will-use-only-for-restakeapp"},"Create a mnemonic you will use only for Restake.app"),(0,s.kt)("p",null,"Download ",(0,s.kt)("inlineCode",{parentName:"p"},"Sentinel CLI")," from ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/sentinel-official/cli-client/releases"},"here")),(0,s.kt)("p",null,"Right click on the download file and make it executable"),(0,s.kt)("p",null,"Open a terminal and type:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},'./sentinelcli keys add --home "${HOME}/.sentinelcli" --keyring-backend test keyname\n')),(0,s.kt)("p",null,"Take note of mnemonic and operator address (also make sure to ",(0,s.kt)("strong",{parentName:"p"},"add funds")," into it)"),(0,s.kt)("h2",{id:"clone-and-configure-restake"},"Clone and configure Restake"),(0,s.kt)("p",null,"Clone the repository and copy the sample .env file ready for your mnemonic"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/eco-stake/restake.git\n")),(0,s.kt)("p",null,"Go into Restake directory"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"cd restake\n")),(0,s.kt)("p",null,"Create your ",(0,s.kt)("inlineCode",{parentName:"p"},".env")," file from the sample ",(0,s.kt)("inlineCode",{parentName:"p"},".env.sample")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"cp .env.sample .env\n")),(0,s.kt)("p",null,"Open ",(0,s.kt)("inlineCode",{parentName:"p"},".env")," file and add your mnemonic:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"MNEMONIC=my hot wallet seed words here that has minimal funds\n")),(0,s.kt)("p",null,"Open the ",(0,s.kt)("inlineCode",{parentName:"p"},"Dockerfile")," and if the node version is not the last, update it manually (I put 20 instead 18)"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"sudo nano Dockerfile\n")),(0,s.kt)("p",null,"Pre-build your Docker containers with the following commands:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"docker compose run --rm app npm install\ndocker compose build --no-cache\n")),(0,s.kt)("p",null,"Go into src directory"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"cd src/\n")),(0,s.kt)("p",null,"Create your ",(0,s.kt)("inlineCode",{parentName:"p"},".networks.local.json")," file from the sample ",(0,s.kt)("inlineCode",{parentName:"p"},".networks.local.json.sample")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"cp networks.local.json.sample networks.local.json\n")),(0,s.kt)("p",null,"Replace the file with this code block and, on ",(0,s.kt)("inlineCode",{parentName:"p"},"restUrl")," field, select your desired one from ",(0,s.kt)("a",{parentName:"p",href:"https://cosmos.directory/sentinel/nodes"},"here")," and click on REST tab:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash",metastring:"title=.networks.local.json",title:".networks.local.json"},'{\n  "sentinel": {\n    "prettyName": "Sentinel 881",\n    "restUrl": [\n      "https://api.sentinel.quokkastake.io:443" \n    ],\n    "autostake": {\n      "correctSlip44": false\n    }\n  }\n}\n')),(0,s.kt)("p",null,"For ",(0,s.kt)("inlineCode",{parentName:"p"},"restUrl")," field check this ",(0,s.kt)("a",{parentName:"p",href:"https://cosmos.directory/sentinel/nodes"},"link")),(0,s.kt)("h2",{id:"running-the-script"},"Running the script"),(0,s.kt)("p",null,"Run this command adding as last word sentinel which is the network we are going to enable"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"sudo docker compose run --rm app npm run autostake sentinel\n")),(0,s.kt)("p",null,"You should see something like that:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"> restake@0.1.0 autostake\n> node scripts/autostake.mjs sentinel\n\n[09:30:19.711] \u269b\n[09:30:20.268] Loaded Sentinel 881\n[09:30:20.458] Bot address is sent1eyhgvkqu48luluafpfn4myg5jr04g6zje9zkkf\n[09:30:20.459] Not an operator\n[09:30:20.460] Autostake finished\n")),(0,s.kt)("p",null,"The message ",(0,s.kt)("inlineCode",{parentName:"p"},'"Not an Operator"')," is fine as we have to submit our operator to Chain Registry"),(0,s.kt)("h2",{id:"setting-up-a-timer-to-run-the-script-on-a-schedule"},"Setting up a timer to run the script on a schedule"),(0,s.kt)("p",null,"You should setup your script to run at the same time each day. We will use the methos based on systemd-timer which allows to run a one-off service with specified rules. This method is arguably preferable to crontab, which we will not cover."),(0,s.kt)("h3",{id:"create-a-systemd-unit-file"},"Create a systemd unit file"),(0,s.kt)("p",null,"The unit file describes the application to run. We define a dependency with the timer with the Wants statement.\nCreate the ",(0,s.kt)("inlineCode",{parentName:"p"},"restake.service")," file"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"sudo nano /etc/systemd/system/restake.service\n")),(0,s.kt)("p",null,"Add the following code block"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash",metastring:"title=/etc/systemd/system/restake.service",title:"/etc/systemd/system/restake.service"},"[Unit]\nDescription=restake service with docker compose\nRequires=docker.service\nAfter=docker.service\nWants=restake.timer\n\n[Service]\nType=oneshot\nWorkingDirectory=/home/trinity/restake\nExecStart=/usr/bin/docker compose run --rm app npm run autostake sentinel\n\n[Install]\nWantedBy=multi-user.target\n")),(0,s.kt)("h3",{id:"create-a-systemd-timer-file"},"Create a systemd timer file"),(0,s.kt)("p",null,"The timer file defines the rules for running the restake service every hour. All rules are described in the ",(0,s.kt)("a",{parentName:"p",href:"https://www.freedesktop.org/software/systemd/man/systemd.timer.html"},"systemd documentation"),"."),(0,s.kt)("p",null,"Create the ",(0,s.kt)("inlineCode",{parentName:"p"},"restake.timer")," file"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"sudo nano /etc/systemd/system/restake.timer\n")),(0,s.kt)("p",null,"Add the following code block"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash",metastring:"title=/etc/systemd/system/restake.timer",title:"/etc/systemd/system/restake.timer"},"[Unit]\nDescription=Restake bot timer\n\n[Timer]\nAccuracySec=1min\nOnCalendar=*-*-* *:00:00\n\n[Install]\nWantedBy=timers.target\n")),(0,s.kt)("h3",{id:"enable-and-start-the-2-created-services"},"Enable and start the 2 created services"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"sudo systemctl enable restake.service\nsudo systemctl enable restake.timer\nsudo systemctl start restake.timer\n")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Check the restake.timer status")),(0,s.kt)("p",null,"With ",(0,s.kt)("inlineCode",{parentName:"p"},"systemctl")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"sudo systemctl status restake.timer\n")),(0,s.kt)("p",null,"Or with ",(0,s.kt)("inlineCode",{parentName:"p"},"journalctl")," in real time:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"sudo journalctl -u restake.service -f\n")),(0,s.kt)("p",null,"You should see something like that:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"\u25cf restake.timer - Restake bot timer\n     Loaded: loaded (/etc/systemd/system/restake.timer; enabled; vendor preset: enabled)\n     Active: active (waiting) since Thu 2023-07-13 12:24:40 UTC; 4min 19s ago\n    Trigger: Thu 2023-07-13 13:00:00 UTC; 30min left\n   Triggers: \u25cf restake.service\n\nJul 13 12:24:40 trinity-management systemd[1]: Started Restake bot timer.\n")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Check the restake.service status")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"sudo systemctl status restake.service\n")),(0,s.kt)("p",null,"You should see something like that:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"\u25cf restake.service - restake service with docker compose\n     Loaded: loaded (/etc/systemd/system/restake.service; enabled; vendor preset: enabled)\n     Active: inactive (dead)\nTriggeredBy: \u25cf restake.timer\n")),(0,s.kt)("p",null,"Now you are ready to submit your operator to Restake.app"))}d.isMDXComponent=!0}}]);
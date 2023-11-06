"use strict";(self.webpackChunksentinel_docs=self.webpackChunksentinel_docs||[]).push([[5671],{10358:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var n=t(85893),r=t(11151);const i={title:"SSH",description:"Setting up SSH for secure remote access and communication",sidebar_position:3},a=void 0,o={id:"server-setup/ssh",title:"SSH",description:"Setting up SSH for secure remote access and communication",source:"@site/docs/validator-setup/server-setup/ssh.md",sourceDirName:"server-setup",slug:"/server-setup/ssh",permalink:"/validator-setup/server-setup/ssh",draft:!1,unlisted:!1,editUrl:"https://github.com/sentinel-official/docs/tree/main/docs/validator-setup/server-setup/ssh.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"SSH",description:"Setting up SSH for secure remote access and communication",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Create New User",permalink:"/validator-setup/server-setup/create-user"},next:{title:"Install Golang",permalink:"/validator-setup/golang"}},c={},l=[];function d(e){const s={code:"code",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.p,{children:"You will need to connect to your server via SSH. Assuming it is already installed, the ideal thing to do for security purposes is to change the default port 22 to another one; let's say 2222"}),"\n",(0,n.jsx)(s.p,{children:"The first thing to do is to check if the port is not already being used by another service"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"grep 2222 /etc/services\n"})}),"\n",(0,n.jsx)(s.p,{children:"If the port is not already being used by another service, you can add it to your firewall"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"sudo ufw allow 2222/tcp\n"})}),"\n",(0,n.jsx)(s.p,{children:"Enable the firewall"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"sudo ufw enable\n"})}),"\n",(0,n.jsx)(s.p,{children:"Check firewall status to see if the port has been enabled"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"sudo ufw status\n"})}),"\n",(0,n.jsx)(s.p,{children:"Open the SSH config file"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"sudo nano /etc/ssh/sshd_config\n"})}),"\n",(0,n.jsx)(s.p,{children:"Set the following fields"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",metastring:"title=/etc/ssh/sshd_config",children:"# For security purposes we want to use a port number which is not the default one 22\nPort 2222\n\n# Better disable root login via SSH. If needed better to switch to root once\n# connected with a normal user\nPermitRootLogin  no\n\n# Authentication with public key is preferred\nPubkeyAuthentication  yes\n\n# Better not to use password authentication\nPasswordAuthentication  no\n"})}),"\n",(0,n.jsx)(s.p,{children:"Restart the service"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"sudo service sshd restart\n"})}),"\n",(0,n.jsx)(s.p,{children:"Connect to your machine via SSH using the new port"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"ssh sentinel@machine_ip -p 2222\n"})})]})}function h(e={}){const{wrapper:s}={...(0,r.a)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}}}]);
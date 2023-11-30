"use strict";(self.webpackChunksentinel_docs=self.webpackChunksentinel_docs||[]).push([[9735],{79023:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>t,toc:()=>o});var s=i(85893),r=i(11151);const a={title:"Preliminary Operations",description:"If you run a residential node, skip this section",sidebar_position:2},l="Preliminary Operations",t={id:"manual/preliminary",title:"Preliminary Operations",description:"If you run a residential node, skip this section",source:"@site/docs/node-setup/manual/preliminary.md",sourceDirName:"manual",slug:"/manual/preliminary",permalink:"/node-setup/manual/preliminary",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Preliminary Operations",description:"If you run a residential node, skip this section",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Overview & Requirements",permalink:"/node-setup/manual/start-manual"},next:{title:"Install Docker",permalink:"/node-setup/manual/docker-setup"}},d={},o=[{value:"Generate a SSH Key",id:"generate-a-ssh-key",level:2},{value:"Client Side",id:"client-side",level:3},{value:"Server Side",id:"server-side",level:3},{value:"Server Side",id:"server-side-1",level:3},{value:"Setting up the Firewall",id:"setting-up-the-firewall",level:2}];function c(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"preliminary-operations",children:"Preliminary Operations"}),"\n",(0,s.jsx)(n.h2,{id:"generate-a-ssh-key",children:"Generate a SSH Key"}),"\n",(0,s.jsx)(n.p,{children:"To securely access your server, you will use an SSH connection"}),"\n",(0,s.jsx)(n.h3,{id:"client-side",children:"Client Side"}),"\n",(0,s.jsx)(n.p,{children:"If you don't already have one, generate an SSH key pair on your client"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"ssh-keygen -t ed25519\n"})}),"\n",(0,s.jsx)(n.p,{children:"Navigate to the SSH directory, and you should see both the public and private SSH keys"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"ls -l .ssh/\n\ntotal 2\n-rw-------. 1 user user  size Mar 12 18:08 id_ed25519\n-rw-r--r--. 1 user user  size Mar 12 18:08 id_ed25519.pub\n"})}),"\n",(0,s.jsx)(n.p,{children:"Add your public SSH key to the authorized_keys file on your VPS to enable secure SSH connections"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"ssh-copy-id -i ~/.ssh/id_ed25519.pub username@server_ip\n"})}),"\n",(0,s.jsx)(n.h3,{id:"server-side",children:"Server Side"}),"\n",(0,s.jsx)(n.p,{children:"Your public key will be visible on your server by typing"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"cat ~.ssh/authorized_keys\n"})}),"\n",(0,s.jsx)(n.h3,{id:"server-side-1",children:"Server Side"}),"\n",(0,s.jsx)(n.p,{children:"Update the list of available software packages"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"sudo apt update && sudo apt upgrade -y\n"})}),"\n",(0,s.jsx)(n.h2,{id:"setting-up-the-firewall",children:"Setting up the Firewall"}),"\n",(0,s.jsx)(n.p,{children:"On your server machine, install the firewall"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"sudo apt-get install ufw\n"})}),"\n",(0,s.jsx)(n.p,{children:"Allow Port 22"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"sudo ufw allow 22\n"})}),"\n",(0,s.jsx)(n.p,{children:"Enable Firewall"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"sudo ufw enable\n"})})]})}function u(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}}}]);
"use strict";(self.webpackChunksentinel_docs=self.webpackChunksentinel_docs||[]).push([[8102],{6121:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));const o={title:"Install Docker",description:"Sentinel dVPN requires Docker to be installed",sidebar_position:3},l="Install Docker",s={unversionedId:"docker-setup",id:"docker-setup",title:"Install Docker",description:"Sentinel dVPN requires Docker to be installed",source:"@site/docs/node-setup/docker-setup.md",sourceDirName:".",slug:"/docker-setup",permalink:"/node-setup/docker-setup",draft:!1,editUrl:"https://github.com/sentinel-official/docs/tree/main/docs/node-setup/docker-setup.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Install Docker",description:"Sentinel dVPN requires Docker to be installed",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Preliminary Operations",permalink:"/node-setup/preliminary"},next:{title:"Preparing Sentinel Docker image",permalink:"/node-setup/docker-image"}},i={},c=[{value:"Install Portainer (optional)",id:"install-portainer-optional",level:2}],p={toc:c},d="wrapper";function u(e){let{components:t,...a}=e;return(0,r.kt)(d,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"install-docker"},"Install Docker"),(0,r.kt)("p",null,"Install dependencies"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt-get install --yes curl git openssl\n")),(0,r.kt)("p",null,"Get the official Docker installation script"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl -fsSL get.docker.com -o ${HOME}/get-docker.sh\n")),(0,r.kt)("p",null,"Install Docker"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo sh ${HOME}/get-docker.sh\n")),(0,r.kt)("p",null,"Enable Docker"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo systemctl enable --now docker\n")),(0,r.kt)("p",null,"Add user to Docker group"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo usermod -aG docker $(whoami)\n")),(0,r.kt)("p",null,"Execute the final command to apply the changes (similar to logging in again)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo -i -u $(whoami)\n")),(0,r.kt)("h2",{id:"install-portainer-optional"},"Install Portainer (optional)"),(0,r.kt)("p",null,"If you want a nice graphic view to manager your Node container, you can install ",(0,r.kt)("a",{parentName:"p",href:"https://docs.portainer.io/start/install-ce/server/docker/linux"},"Portainer"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker volume create portainer_data\ndocker run -d -p 9443:9443 --name portainer --restart=always -v /var/run/docker.sock:/var/run/docker.sock -v portainer_data:/data portainer/portainer-ce:latest\n")),(0,r.kt)("p",null,"Now that the installation is complete, you can log into your Portainer Server instance by opening a web browser and going to:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"https://localhost:9443\n")))}u.isMDXComponent=!0}}]);
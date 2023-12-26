"use strict";(self.webpackChunksentinel_docs=self.webpackChunksentinel_docs||[]).push([[2875],{16224:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var i=t(85893),o=t(11151);const s={title:"Preparing Sentinel Docker image",description:"Choose between prebuilt or from source",sidebar_position:3},r="Preparing Sentinel Docker Image",l={id:"methods/manual/docker-image",title:"Preparing Sentinel Docker image",description:"Choose between prebuilt or from source",source:"@site/docs/node-setup/methods/manual/docker-image.md",sourceDirName:"methods/manual",slug:"/methods/manual/docker-image",permalink:"/node-setup/methods/manual/docker-image",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Preparing Sentinel Docker image",description:"Choose between prebuilt or from source",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Install Docker",permalink:"/node-setup/methods/manual/docker-setup"},next:{title:"Node Configuration",permalink:"/node-setup/methods/manual/node-config"}},a={},c=[{value:"Method 1 - Prebuilt",id:"method-1---prebuilt",level:2},{value:"Method 2 - From Source",id:"method-2---from-source",level:2},{value:"Clone the GitHub repository",id:"clone-the-github-repository",level:3},{value:"Checkout to the latest tag",id:"checkout-to-the-latest-tag",level:3},{value:"Build the image",id:"build-the-image",level:3},{value:"Create a self-signed TLS certificate",id:"create-a-self-signed-tls-certificate",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"preparing-sentinel-docker-image",children:"Preparing Sentinel Docker Image"}),"\n",(0,i.jsx)(n.h2,{id:"method-1---prebuilt",children:"Method 1 - Prebuilt"}),"\n",(0,i.jsxs)(n.p,{children:["Pull the image (check your desired version from this ",(0,i.jsx)(n.a,{href:"https://github.com/sentinel-official/dvpn-node/pkgs/container/dvpn-node",children:"link"}),")"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"docker pull ghcr.io/sentinel-official/dvpn-node:latest\n"})}),"\n",(0,i.jsx)(n.p,{children:"Tag the image"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"docker tag ghcr.io/sentinel-official/dvpn-node:latest sentinel-dvpn-node\n"})}),"\n",(0,i.jsx)(n.h2,{id:"method-2---from-source",children:"Method 2 - From Source"}),"\n",(0,i.jsx)(n.h3,{id:"clone-the-github-repository",children:"Clone the GitHub repository"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"git clone https://github.com/sentinel-official/dvpn-node.git \\\n    ${HOME}/dvpn-node/\n"})}),"\n",(0,i.jsx)(n.h3,{id:"checkout-to-the-latest-tag",children:"Checkout to the latest tag"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Option 1 - Automatic to the latest tag"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"cd ${HOME}/dvpn-node/ && \\\ncommit=$(git rev-list --tags --max-count=1) && \\\ngit checkout $(git describe --tags ${commit})\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Option 2 - Manual (if the previous command does not work for some reasons). Check here for the last current release"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"cd ~/dvpn-node && \\\ngit fetch && \\\ngit checkout v0.7.0\n"})}),"\n",(0,i.jsx)(n.h3,{id:"build-the-image",children:"Build the image"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"docker build --file Dockerfile \\\n    --tag sentinel-dvpn-node \\\n    --force-rm \\\n    --no-cache \\\n    --compress .\n"})}),"\n",(0,i.jsx)(n.h2,{id:"create-a-self-signed-tls-certificate",children:"Create a self-signed TLS certificate"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"openssl req -new \\\n    -newkey ec \\\n    -pkeyopt ec_paramgen_curve:prime256v1 \\\n    -x509 \\\n    -sha256 \\\n    -days 365 \\\n    -nodes \\\n    -out ${HOME}/tls.crt \\\n    -keyout ${HOME}/tls.key\n"})}),"\n",(0,i.jsx)(n.p,{children:"You will be asked to fill in some fields. Please insert the country while you can leave the others blank. If you want to automate this process, just add the following line to the command above:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'-subj "/C=NA/ST=NA/L=./O=NA/OU=./CN=." \\\n'})})]})}function h(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}}}]);
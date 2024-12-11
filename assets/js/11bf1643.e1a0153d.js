"use strict";(self.webpackChunksentinel_docs=self.webpackChunksentinel_docs||[]).push([[3503],{46257:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>i,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>a,toc:()=>c});const a=JSON.parse('{"id":"golang","title":"Golang Setup","description":"First of all install some required packages","source":"@site/docs/validator-setup/golang.md","sourceDirName":".","slug":"/golang","permalink":"/validator-setup/golang","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"Golang Setup","sidebar_position":3},"sidebar":"tutorialSidebar","previous":{"title":"SSH","permalink":"/validator-setup/server-setup/ssh"},"next":{"title":"Full Node Setup","permalink":"/validator-setup/node-setup"}}');var s=l(74848),t=l(28453);const o={title:"Golang Setup",sidebar_position:3},r="Install Golang",i={},c=[{value:"Ubuntu",id:"ubuntu",level:2},{value:"Manually",id:"manually",level:2},{value:"Export Golang environment variables",id:"export-golang-environment-variables",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"install-golang",children:"Install Golang"})}),"\n",(0,s.jsx)(n.p,{children:"First of all install some required packages"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"sudo apt-get install curl git jq make unzip gcc -y\n"})}),"\n",(0,s.jsx)(n.p,{children:"You now have two methods for installing Golang."}),"\n",(0,s.jsx)(n.h2,{id:"ubuntu",children:"Ubuntu"}),"\n",(0,s.jsx)(n.p,{children:"To install Go on Ubuntu, you can easily follow the steps provided."}),"\n",(0,s.jsx)(n.p,{children:"Add the repository"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"sudo add-apt-repository ppa:longsleep/golang-backports\n"})}),"\n",(0,s.jsx)(n.p,{children:"Install Golang"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"sudo apt-get install -y golang-go\n"})}),"\n",(0,s.jsx)(n.h2,{id:"manually",children:"Manually"}),"\n",(0,s.jsx)(n.p,{children:"This method should work on all Linux systems, although it is intended for more experienced users."}),"\n",(0,s.jsxs)(n.p,{children:["Get a copy of the ",(0,s.jsx)(n.a,{href:"https://go.dev/dl/",children:"last"})," Golang version and unpack it"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"cd ~ && \\\ncurl -OL https://golang.org/dl/goX.X.X.linux-amd64.tar.gz && \\\ntar -C ${HOME} -xvf goX.X.X.linux-amd64.tar.gz\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Copy the extracted go into ",(0,s.jsx)(n.code,{children:"/usr/local/lib/go"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"sudo cp -r ${HOME}/go /usr/local/lib/go\n"})}),"\n",(0,s.jsx)(n.h2,{id:"export-golang-environment-variables",children:"Export Golang environment variables"}),"\n",(0,s.jsx)(n.p,{children:"Now that you've successfully installed Golang, it's essential to configure its environmental variables."}),"\n",(0,s.jsx)(n.p,{children:"Open the .bashrc file"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"nano ${HOME}/.bashrc\n"})}),"\n",(0,s.jsx)(n.p,{children:"Based on your installation type, set the GOROOT environment variable by choosing one of the following lines"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"# For Ubuntu installation\nexport GOROOT=/usr/lib/go\n\n# For Manual installation\nexport GOROOT=/usr/local/lib/go\n"})}),"\n",(0,s.jsx)(n.p,{children:"After setting the appropriate GOROOT environment variable, you can add the following lines"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",metastring:'title="${HOME}/.bashrc"',children:"export GOPATH=${HOME}/go\nexport GOBIN=${GOPATH}/bin\nexport PATH=${PATH}:${GOROOT}/bin:${GOBIN}\n"})}),"\n",(0,s.jsx)(n.p,{children:"Source the file to reflect changes in the current Terminal session."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"source ${HOME}/.bashrc\n"})})]})}function u(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,n,l)=>{l.d(n,{R:()=>o,x:()=>r});var a=l(96540);const s={},t=a.createContext(s);function o(e){const n=a.useContext(t);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),a.createElement(t.Provider,{value:n},e.children)}}}]);
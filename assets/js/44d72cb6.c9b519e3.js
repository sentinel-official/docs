"use strict";(self.webpackChunksentinel_docs=self.webpackChunksentinel_docs||[]).push([[9608],{18824:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>a,toc:()=>u});var l=n(87462),i=(n(67294),n(3905));const o={title:"Build",sidebar_position:2},s="Build the Source Code",a={unversionedId:"build",id:"build",title:"Build",description:"Install Go 1.21",source:"@site/docs/sentinel-core/build.md",sourceDirName:".",slug:"/build",permalink:"/sentinel-core/build",draft:!1,editUrl:"https://github.com/sentinel-official/docs/tree/main/docs/sentinel-core/build.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Build",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/sentinel-core/"},next:{title:"Commands",permalink:"/sentinel-core/commands"}},r={},u=[{value:"Install Go 1.21",id:"install-go-121",level:2},{value:"Build Sentinel",id:"build-sentinel",level:2}],d={toc:u},c="wrapper";function p(e){let{components:t,...n}=e;return(0,i.kt)(c,(0,l.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"build-the-source-code"},"Build the Source Code"),(0,i.kt)("h2",{id:"install-go-121"},"Install Go 1.21"),(0,i.kt)("p",null,"Currently, Sentinel uses Go 1.21 to compile the code."),(0,i.kt)("p",null,"Install ",(0,i.kt)("a",{parentName:"p",href:"https://go.dev/doc/install"},"Go 1.21")," by following instructions there."),(0,i.kt)("p",null,"Verify the installation by typing ",(0,i.kt)("inlineCode",{parentName:"p"},"go version")," in your terminal."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"$ go version\ngo version go1.21.1 darwin/amd64\n")),(0,i.kt)("h2",{id:"build-sentinel"},"Build Sentinel"),(0,i.kt)("p",null,"In order to build Sentinel you need the source code. Either ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/sentinel-official/hub/releases"},"download the source of a release")," or ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/sentinel-official/hub.git"},"clone the git repository")," and make sure you always download the ",(0,i.kt)("strong",{parentName:"p"},"latest version"),"."),(0,i.kt)("p",null,"Build Sentinel from the source code:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'git clone https://github.com/sentinel-official/hub.git "${HOME}/sentinelhub"\ncd "${HOME}/sentinelhub"\ngit checkout v0.11.3 # always make sure it\'s the latest version\nmake install\nsudo ln -s "${GOBIN}/sentinelhub" /usr/local/bin/sentinelhub\n')),(0,i.kt)("p",null,"After building, you should see a new executable file ",(0,i.kt)("inlineCode",{parentName:"p"},"/usr/local/bin/sentinelhub"),"."))}p.isMDXComponent=!0}}]);
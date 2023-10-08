"use strict";(self.webpackChunksentinel_docs=self.webpackChunksentinel_docs||[]).push([[1667],{22350:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>c,frontMatter:()=>n,metadata:()=>l,toc:()=>d});var o=a(87462),i=(a(67294),a(3905));const n={title:"Add a Validator Image",sidebar_position:14},r="Add a Validator Image",l={unversionedId:"image",id:"image",title:"Add a Validator Image",description:"In order to have your validator profile image displayed on the most commonly used Cosmos blockchain explorers, you need to follow two different procedures",source:"@site/docs/validator-setup/image.md",sourceDirName:".",slug:"/image",permalink:"/validator-setup/image",draft:!1,editUrl:"https://github.com/sentinel-official/docs/tree/main/docs/validator-setup/image.md",tags:[],version:"current",sidebarPosition:14,frontMatter:{title:"Add a Validator Image",sidebar_position:14},sidebar:"tutorialSidebar",previous:{title:"Add RPC to Chain Registry",permalink:"/validator-setup/rpc/chain-registry"},next:{title:"Donations",permalink:"/validator-setup/donations"}},s={},d=[{value:"First procedure",id:"first-procedure",level:2},{value:"Second procedure",id:"second-procedure",level:2}],p={toc:d},u="wrapper";function c(e){let{components:t,...a}=e;return(0,i.kt)(u,(0,o.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"add-a-validator-image"},"Add a Validator Image"),(0,i.kt)("p",null,"In order to have your validator profile image displayed on the most commonly used Cosmos blockchain explorers, you need to follow two different procedures"),(0,i.kt)("h2",{id:"first-procedure"},"First procedure"),(0,i.kt)("p",null,"By following this procedure, your validator image will be visible on ",(0,i.kt)("a",{parentName:"p",href:"https://wallet.keplr.app/chains/sentinel"},"Keplr"),", ",(0,i.kt)("a",{parentName:"p",href:"https://ping.pub/sentinel/staking"},"Ping.pub"),", ",(0,i.kt)("a",{parentName:"p",href:"https://cosmos.directory/sentinel/validators"},"Cosmos.directory")," and ",(0,i.kt)("a",{parentName:"p",href:"https://atomscan.com/sentinel/validators"},"ATOMScan"),"."),(0,i.kt)("p",null,"Firstly, register on ",(0,i.kt)("a",{parentName:"p",href:"https://keybase.io/"},"keybase.io"),", and create your profile by adding a profile image, which will be used as your validator image. Once your profile is created, access it and you will be prompted to create a PGP key."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://keybase.io/download"},"Download")," Keybase onto your machine and follow the installation guide for your operating system."),(0,i.kt)("p",null,"Create a PGP key and add it to your keybase profile. Once that is complete, you need to perform what is called an ",(0,i.kt)("inlineCode",{parentName:"p"},"Edit Validator Transaction")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"sentinelhub tx staking edit-validator \\\n    --identity=<your_pgp_key_with_no_spaces> \\\n    --chain-id=sentinelhub-2 \\\n    --gas=500000 \\\n    --gas-prices=0.2udvpn \\\n    --from=<your_key_name>\n")),(0,i.kt)("p",null,"If you'd like to link your website and add a description of your validator, you have the option to fill out the following two fields"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'    --website="https://yourwebsite.com" \\\n    --details="These are my validator details"\n')),(0,i.kt)("p",null,"If the transaction is successful, you will see the edits immediately"),(0,i.kt)("h2",{id:"second-procedure"},"Second procedure"),(0,i.kt)("p",null,"By following this procedure, your validator image will be visible on ",(0,i.kt)("a",{parentName:"p",href:"https://www.mintscan.io/sentinel/validators"},"Mintscan"),"."),(0,i.kt)("p",null,"Here's what you'll need:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A GitHub account with a ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/settings/tokens"},"PAT")," (Personal Access Token) enabled with all repo scopes"),(0,i.kt)("li",{parentName:"ul"},"Your validator image in the format ",(0,i.kt)("inlineCode",{parentName:"li"},"<your_sentval_address>.png"),"\nGo to ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/cosmostation/chainlist"},"https://github.com/cosmostation/chainlist"))),(0,i.kt)("p",null,"Fork the project"),(0,i.kt)("p",null,"Clone the forked project to your computer"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/cosmostation/chainlist\n")),(0,i.kt)("p",null,"Navigate to the directory from which you will execute the next commands"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"cd chainlist\n")),(0,i.kt)("p",null,"Create a new branch named after your validator"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"git branch <your_validator_name>\n")),(0,i.kt)("p",null,"Checkout to that branch"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"git checkout <your_validator_name>\n")),(0,i.kt)("p",null,"Copy your validator image to the folder ",(0,i.kt)("inlineCode",{parentName:"p"},"/chainlist/chain/sentinel/moniker/")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"cp /path/to/your/<your_sentval_address>.png ~/chainlist/chain/sentinel/moniker/\n")),(0,i.kt)("p",null,"Set the necessary configuration parameters"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'git config --global user.name "Your Username"\ngit config --global user.email "your.email@example.com"\n')),(0,i.kt)("p",null,"Set access via your Personal Access Token (PAT)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"git remote set-url origin https://<your_github_user>:<your_token>@github.com/<your_github_user>chainlist.git\n")),(0,i.kt)("p",null,"Push your branch to your forked repository"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'git add .\ngit commit -m "Add <your_validator_name> logo for Sentinel"\ngit push origin <your_validator_name>\n')),(0,i.kt)("p",null,"If the command is successful go to ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/cosmostation/chainlist"},"https://github.com/cosmostation/chainlist")," and create a pull request. Once the pull request is created, wait for some time until your validator image is updated. When the update is complete, the pull request will be closed."))}c.isMDXComponent=!0}}]);
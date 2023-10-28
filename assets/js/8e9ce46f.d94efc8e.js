"use strict";(self.webpackChunksentinel_docs=self.webpackChunksentinel_docs||[]).push([[273],{95772:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var s=n(87462),a=(n(67294),n(3905));const i={title:"Rest Endpoints",sidebar_position:4},r=void 0,o={unversionedId:"interact-rest",id:"interact-rest",title:"Rest Endpoints",description:"Using the REST Endpoints",source:"@site/docs/apis/interact-rest.mdx",sourceDirName:".",slug:"/interact-rest",permalink:"/apis/interact-rest",draft:!1,editUrl:"https://github.com/sentinel-official/docs/tree/main/docs/apis/interact-rest.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Rest Endpoints",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"gRPC Go",permalink:"/apis/grpc/interact-grpc-go"},next:{title:"Javascript",permalink:"/apis/interact-javascript"}},l={},p=[{value:"Using the REST Endpoints",id:"using-the-rest-endpoints",level:2},{value:"Query for historical state using REST",id:"query-for-historical-state-using-rest",level:3},{value:"Cross-Origin Resource Sharing (CORS)",id:"cross-origin-resource-sharing-cors",level:3},{value:"Setting up a public rest server",id:"setting-up-a-public-rest-server",level:3},{value:"Signing transactions",id:"signing-transactions",level:3}],c={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,s.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"using-the-rest-endpoints"},"Using the REST Endpoints"),(0,a.kt)("p",null,"All gRPC services on the Cosmos SDK  and Sentinel are made available for more convenient REST-based queries through gRPC-gateway. The format of the URL path is based on the Protobuf service method's full-qualified name, but may contain small customizations so that final URLs look more idiomatic. For example, the REST endpoint for the ",(0,a.kt)("inlineCode",{parentName:"p"},"cosmos.bank.v1beta1.Query/AllBalances")," method is ",(0,a.kt)("inlineCode",{parentName:"p"},"GET /cosmos/bank/v1beta1/balances/{address}"),". Request arguments are passed as query parameters."),(0,a.kt)("p",null,"As a concrete example, the ",(0,a.kt)("inlineCode",{parentName:"p"},"curl")," command to make balances request is:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'curl \\\n    -X GET \\\n    -H "Content-Type: application/json" \\\n    https://lcd.sentinel.co/cosmos/bank/v1beta1/balances/<your_address>\n')),(0,a.kt)("p",null,"The list of all available REST endpoints is available as a Swagger specification file, it can be viewed at ",(0,a.kt)("inlineCode",{parentName:"p"},"localhost:1317/swagger"),". Make sure that the ",(0,a.kt)("inlineCode",{parentName:"p"},"api.swagger")," field is set to true in your ",(0,a.kt)("inlineCode",{parentName:"p"},"app.toml")," file."),(0,a.kt)("h3",{id:"query-for-historical-state-using-rest"},"Query for historical state using REST"),(0,a.kt)("p",null,"Querying for historical state is done using the HTTP header ",(0,a.kt)("inlineCode",{parentName:"p"},"x-cosmos-block-height"),". For example, a curl command would look like:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'curl \\\n    -X GET \\\n    -H "Content-Type: application/json" \\\n    -H "x-cosmos-block-height: 13000000"\n    http://localhost:1317/cosmos/bank/v1beta1/balances/<your_validator>\n')),(0,a.kt)("p",null,"Assuming the state at that block has not yet been pruned by the node, this query should return a non-empty response."),(0,a.kt)("h3",{id:"cross-origin-resource-sharing-cors"},"Cross-Origin Resource Sharing (CORS)"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS"},"CORS policies")," are not enabled by default to help with security. "),(0,a.kt)("h3",{id:"setting-up-a-public-rest-server"},"Setting up a public rest server"),(0,a.kt)("p",null,"If you would like to use the rest-server in a public environment we recommend you provide a reverse proxy. We can share our Terraform infrastructurefor setting up rest servers in DigitalOcean. We will write a guide soon and publish a repo soon. In the meantime feel free to reachout in Discord. s"),(0,a.kt)("p",null,"For testing and development purposes there is an ",(0,a.kt)("inlineCode",{parentName:"p"},"enabled-unsafe-cors")," field inside ",(0,a.kt)("inlineCode",{parentName:"p"},"app.toml"),"."),(0,a.kt)("h3",{id:"signing-transactions"},"Signing transactions"),(0,a.kt)("p",null,"Sending transactions using gRPC and REST requires some additional steps: generating the transaction, signing it, and finally broadcasting it. Read about ",(0,a.kt)("a",{parentName:"p",href:"https://docs.cosmos.network/v0.46/run-node/txs.html"},"generating and signing transactions"),"."))}d.isMDXComponent=!0}}]);
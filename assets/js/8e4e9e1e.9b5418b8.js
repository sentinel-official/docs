"use strict";(self.webpackChunksentinel_docs=self.webpackChunksentinel_docs||[]).push([[8830],{17011:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var r=n(85893),t=n(11151);const i={title:"gRPCurl",sidebar_position:1},o=void 0,l={id:"grpc/interact-grpc-curl",title:"gRPCurl",description:"grpcurl is like curl but for gRPC. It is also available as a Go library, but we will use it only as a CLI command for debugging and testing purposes. Follow the instructions in the previous link to install it.",source:"@site/docs/apis/grpc/interact-grpc-curl.mdx",sourceDirName:"grpc",slug:"/grpc/interact-grpc-curl",permalink:"/apis/grpc/interact-grpc-curl",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"gRPCurl",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Buf Studio",permalink:"/apis/grpc/interact-grpc-buf-studio"},next:{title:"gRPC Go",permalink:"/apis/grpc/interact-grpc-go"}},c={},u=[{value:"These are the methods of <code>sentinel.deposit.v1.QueryService</code>",id:"these-are-the-methods-of-sentineldepositv1queryservice",level:4},{value:"These are the methods of <code>sentinel.node.v2.QueryService</code>",id:"these-are-the-methods-of-sentinelnodev2queryservice",level:4},{value:"These are the methods of <code>sentinel.plan.v2.QueryService</code>",id:"these-are-the-methods-of-sentinelplanv2queryservice",level:4},{value:"These are the methods of <code>sentinel.provider.v2.QueryService</code>",id:"these-are-the-methods-of-sentinelproviderv2queryservice",level:4},{value:"These are the methods of <code>sentinel.session.v2.QueryService</code>",id:"these-are-the-methods-of-sentinelsessionv2queryservice",level:4},{value:"These are the methods of <code>sentinel.subscription.v2.QueryService</code>",id:"these-are-the-methods-of-sentinelsubscriptionv2queryservice",level:4},{value:"These are the methods of <code>sentinel.swap.v1.QueryService</code>",id:"these-are-the-methods-of-sentinelswapv1queryservice",level:4},{value:"Query for historical state using grpcurl",id:"query-for-historical-state-using-grpcurl",level:4}];function a(e){const s={a:"a",code:"code",h4:"h4",p:"p",pre:"pre",...(0,t.a)(),...e.components},{Details:n}=s;return n||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.a,{href:"https://github.com/fullstorydev/grpcurl",children:"grpcurl"})," is like ",(0,r.jsx)(s.code,{children:"curl"})," but for gRPC. It is also available as a Go library, but we will use it only as a CLI command for debugging and testing purposes. Follow the instructions in the previous link to install it."]}),"\n",(0,r.jsxs)(s.p,{children:["Assuming you already installed sentinelhub, you should be able to run the following command to list the Protobuf services available (you can replace ",(0,r.jsx)(s.code,{children:"grpc.sentinel.co:9090"})," by the gRPC server endpoint of another node such as another provider or your own node)."]}),"\n",(0,r.jsx)(s.p,{children:"Listing all the methods from the mainnet"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"grpcurl -plaintext grpc.sentinel.co:9090 list\n"})}),"\n",(0,r.jsx)(s.p,{children:"Output will look like:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{children:"cosmos.auth.v1beta1.Query\ncosmos.authz.v1beta1.Query\ncosmos.bank.v1beta1.Query\ncosmos.base.reflection.v1beta1.ReflectionService\ncosmos.base.reflection.v2alpha1.ReflectionService\ncosmos.base.tendermint.v1beta1.Service\ncosmos.distribution.v1beta1.Query\ncosmos.evidence.v1beta1.Query\ncosmos.feegrant.v1beta1.Query\ncosmos.gov.v1beta1.Query\ncosmos.mint.v1beta1.Query\ncosmos.params.v1beta1.Query\ncosmos.slashing.v1beta1.Query\ncosmos.staking.v1beta1.Query\ncosmos.tx.v1beta1.Service\ncosmos.upgrade.v1beta1.Query\ncosmwasm.wasm.v1.Query\ngrpc.reflection.v1alpha.ServerReflection\nibc.applications.fee.v1.Query\nibc.applications.interchain_accounts.controller.v1.Query\nibc.applications.interchain_accounts.host.v1.Query\nibc.applications.transfer.v1.Query\nibc.core.channel.v1.Query\nibc.core.client.v1.Query\nibc.core.connection.v1.Query\nsentinel.deposit.v1.QueryService\nsentinel.node.v2.QueryService\nsentinel.plan.v2.QueryService\nsentinel.provider.v2.QueryService\nsentinel.session.v2.QueryService\nsentinel.subscription.v2.QueryService\nsentinel.swap.v1.QueryService\n"})}),"\n",(0,r.jsxs)(s.p,{children:["You should see a list of gRPC services, such as ",(0,r.jsx)(s.code,{children:"cosmos.bank.v1beta1.Query"}),". This is called reflection, which is a Protobuf endpoint returning a description of all available endpoints. Each of these represents a different Protobuf service, and each service exposes multiple RPC methods you can query against."]}),"\n",(0,r.jsx)(s.p,{children:"In order to get a description of the service you can run the following command:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"grpcurl -plaintext \\\n    grpc.sentinel.co:9090 \\\n    describe <grpc_service>              \n"})}),"\n",(0,r.jsx)(s.p,{children:"The methods for every gRPC service are the followings:"}),"\n",(0,r.jsxs)(n,{children:[(0,r.jsx)("summary",{children:"sentinel.deposit.v1.QueryService"}),(0,r.jsxs)("p",{children:[(0,r.jsxs)(s.h4,{id:"these-are-the-methods-of-sentineldepositv1queryservice",children:["These are the methods of ",(0,r.jsx)(s.code,{children:"sentinel.deposit.v1.QueryService"})]}),(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:'service QueryService {\n  rpc QueryDeposit ( .sentinel.deposit.v1.QueryDepositRequest ) returns ( .sentinel.deposit.v1.QueryDepositResponse ) {\n    option (.google.api.http) = { get: "/sentinel/deposits/{address}" };\n  }\n  rpc QueryDeposits ( .sentinel.deposit.v1.QueryDepositsRequest ) returns ( .sentinel.deposit.v1.QueryDepositsResponse ) {\n    option (.google.api.http) = { get: "/sentinel/deposits" };\n  }\n}\n'})})]})]}),"\n",(0,r.jsxs)(n,{children:[(0,r.jsx)("summary",{children:"sentinel.node.v2.QueryService"}),(0,r.jsxs)("p",{children:[(0,r.jsxs)(s.h4,{id:"these-are-the-methods-of-sentinelnodev2queryservice",children:["These are the methods of ",(0,r.jsx)(s.code,{children:"sentinel.node.v2.QueryService"})]}),(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:'service QueryService {\n  rpc QueryNode ( .sentinel.node.v2.QueryNodeRequest ) returns ( .sentinel.node.v2.QueryNodeResponse ) {\n    option (.google.api.http) = { get: "/sentinel/nodes/{address}" };\n  }\n  rpc QueryNodes ( .sentinel.node.v2.QueryNodesRequest ) returns ( .sentinel.node.v2.QueryNodesResponse ) {\n    option (.google.api.http) = { get: "/sentinel/nodes" };\n  }\n  rpc QueryNodesForPlan ( .sentinel.node.v2.QueryNodesForPlanRequest ) returns ( .sentinel.node.v2.QueryNodesForPlanResponse ) {\n    option (.google.api.http) = { get: "/sentinel/plans/{id}/nodes" };\n  }\n  rpc QueryParams ( .sentinel.node.v2.QueryParamsRequest ) returns ( .sentinel.node.v2.QueryParamsResponse ) {\n    option (.google.api.http) = { get: "/sentinel/modules/node/params" };\n  }\n}\n'})})]})]}),"\n",(0,r.jsxs)(n,{children:[(0,r.jsx)("summary",{children:"sentinel.plan.v2.QueryService"}),(0,r.jsxs)("p",{children:[(0,r.jsxs)(s.h4,{id:"these-are-the-methods-of-sentinelplanv2queryservice",children:["These are the methods of ",(0,r.jsx)(s.code,{children:"sentinel.plan.v2.QueryService"})]}),(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:'service QueryService {\n  rpc QueryPlan ( .sentinel.plan.v2.QueryPlanRequest ) returns ( .sentinel.plan.v2.QueryPlanResponse ) {\n    option (.google.api.http) = { get: "/sentinel/plans/{id}" };\n  }\n  rpc QueryPlans ( .sentinel.plan.v2.QueryPlansRequest ) returns ( .sentinel.plan.v2.QueryPlansResponse ) {\n    option (.google.api.http) = { get: "/sentinel/plans" };\n  }\n  rpc QueryPlansForProvider ( .sentinel.plan.v2.QueryPlansForProviderRequest ) returns ( .sentinel.plan.v2.QueryPlansForProviderResponse ) {\n    option (.google.api.http) = { get: "/sentinel/providers/{address}/plans" };\n  }\n}\n'})})]})]}),"\n",(0,r.jsxs)(n,{children:[(0,r.jsx)("summary",{children:"sentinel.sentinel.provider.v2.QueryService"}),(0,r.jsxs)("p",{children:[(0,r.jsxs)(s.h4,{id:"these-are-the-methods-of-sentinelproviderv2queryservice",children:["These are the methods of ",(0,r.jsx)(s.code,{children:"sentinel.provider.v2.QueryService"})]}),(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:'service QueryService {\n  rpc QueryParams ( .sentinel.provider.v2.QueryParamsRequest ) returns ( .sentinel.provider.v2.QueryParamsResponse ) {\n    option (.google.api.http) = { get: "/sentinel/params/provider" };\n  }\n  rpc QueryProvider ( .sentinel.provider.v2.QueryProviderRequest ) returns ( .sentinel.provider.v2.QueryProviderResponse ) {\n    option (.google.api.http) = { get: "/sentinel/providers/{address}" };\n  }\n  rpc QueryProviders ( .sentinel.provider.v2.QueryProvidersRequest ) returns ( .sentinel.provider.v2.QueryProvidersResponse ) {\n    option (.google.api.http) = { get: "/sentinel/providers" };\n  }\n}\n'})})]})]}),"\n",(0,r.jsxs)(n,{children:[(0,r.jsx)("summary",{children:"sentinel.session.v2.QueryService"}),(0,r.jsxs)("p",{children:[(0,r.jsxs)(s.h4,{id:"these-are-the-methods-of-sentinelsessionv2queryservice",children:["These are the methods of ",(0,r.jsx)(s.code,{children:"sentinel.session.v2.QueryService"})]}),(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:'service QueryService {\n  rpc QueryParams ( .sentinel.session.v2.QueryParamsRequest ) returns ( .sentinel.session.v2.QueryParamsResponse ) {\n    option (.google.api.http) = { get: "/sentinel/modules/session/params" };\n  }\n  rpc QuerySession ( .sentinel.session.v2.QuerySessionRequest ) returns ( .sentinel.session.v2.QuerySessionResponse ) {\n    option (.google.api.http) = { get: "/sentinel/sessions/{id}" };\n  }\n  rpc QuerySessions ( .sentinel.session.v2.QuerySessionsRequest ) returns ( .sentinel.session.v2.QuerySessionsResponse ) {\n    option (.google.api.http) = { get: "/sentinel/sessions" };\n  }\n  rpc QuerySessionsForAccount ( .sentinel.session.v2.QuerySessionsForAccountRequest ) returns ( .sentinel.session.v2.QuerySessionsForAccountResponse ) {\n    option (.google.api.http) = { get: "/sentinel/accounts/{address}/sessions" };\n  }\n  rpc QuerySessionsForAllocation ( .sentinel.session.v2.QuerySessionsForAllocationRequest ) returns ( .sentinel.session.v2.QuerySessionsForAllocationResponse ) {\n    option (.google.api.http) = {\n      get: "/sentinel/subscriptions/{id}/allocations/{address}/sessions"\n    };\n  }\n  rpc QuerySessionsForNode ( .sentinel.session.v2.QuerySessionsForNodeRequest ) returns ( .sentinel.session.v2.QuerySessionsForNodeResponse ) {\n    option (.google.api.http) = { get: "/sentinel/nodes/{address}/sessions" };\n  }\n  rpc QuerySessionsForSubscription ( .sentinel.session.v2.QuerySessionsForSubscriptionRequest ) returns ( .sentinel.session.v2.QuerySessionsForSubscriptionResponse ) {\n    option (.google.api.http) = { get: "/sentinel/subscriptions/{id}/sessions" };\n  }\n}\n'})})]})]}),"\n",(0,r.jsxs)(n,{children:[(0,r.jsx)("summary",{children:"sentinel.subscription.v2.QueryService"}),(0,r.jsxs)("p",{children:[(0,r.jsxs)(s.h4,{id:"these-are-the-methods-of-sentinelsubscriptionv2queryservice",children:["These are the methods of ",(0,r.jsx)(s.code,{children:"sentinel.subscription.v2.QueryService"})]}),(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:'service QueryService {\n  rpc QueryAllocation ( .sentinel.subscription.v2.QueryAllocationRequest ) returns ( .sentinel.subscription.v2.QueryAllocationResponse ) {\n    option (.google.api.http) = {\n      get: "/sentinel/subscriptions/{id}/allocations/{address}"\n    };\n  }\n  rpc QueryAllocations ( .sentinel.subscription.v2.QueryAllocationsRequest ) returns ( .sentinel.subscription.v2.QueryAllocationsResponse ) {\n    option (.google.api.http) = {\n      get: "/sentinel/subscriptions/{id}/allocations"\n    };\n  }\n  rpc QueryParams ( .sentinel.subscription.v2.QueryParamsRequest ) returns ( .sentinel.subscription.v2.QueryParamsResponse ) {\n    option (.google.api.http) = { get: "/sentinel/modules/subscription/params" };\n  }\n  rpc QueryPayout ( .sentinel.subscription.v2.QueryPayoutRequest ) returns ( .sentinel.subscription.v2.QueryPayoutResponse ) {\n    option (.google.api.http) = { get: "/sentinel/payouts/{id}" };\n  }\n  rpc QueryPayouts ( .sentinel.subscription.v2.QueryPayoutsRequest ) returns ( .sentinel.subscription.v2.QueryPayoutsResponse ) {\n    option (.google.api.http) = { get: "/sentinel/payouts" };\n  }\n  rpc QueryPayoutsForAccount ( .sentinel.subscription.v2.QueryPayoutsForAccountRequest ) returns ( .sentinel.subscription.v2.QueryPayoutsForAccountResponse ) {\n    option (.google.api.http) = { get: "/sentinel/accounts/{address}/payouts" };\n  }\n  rpc QueryPayoutsForNode ( .sentinel.subscription.v2.QueryPayoutsForNodeRequest ) returns ( .sentinel.subscription.v2.QueryPayoutsForNodeResponse ) {\n    option (.google.api.http) = { get: "/sentinel/nodes/{address}/payouts" };\n  }\n  rpc QuerySubscription ( .sentinel.subscription.v2.QuerySubscriptionRequest ) returns ( .sentinel.subscription.v2.QuerySubscriptionResponse ) {\n    option (.google.api.http) = { get: "/sentinel/subscriptions/{id}" };\n  }\n  rpc QuerySubscriptions ( .sentinel.subscription.v2.QuerySubscriptionsRequest ) returns ( .sentinel.subscription.v2.QuerySubscriptionsResponse ) {\n    option (.google.api.http) = { get: "/sentinel/subscriptions" };\n  }\n  rpc QuerySubscriptionsForAccount ( .sentinel.subscription.v2.QuerySubscriptionsForAccountRequest ) returns ( .sentinel.subscription.v2.QuerySubscriptionsForAccountResponse ) {\n    option (.google.api.http) = {\n      get: "/sentinel/accounts/{address}/subscriptions"\n    };\n  }\n  rpc QuerySubscriptionsForNode ( .sentinel.subscription.v2.QuerySubscriptionsForNodeRequest ) returns ( .sentinel.subscription.v2.QuerySubscriptionsForNodeResponse ) {\n    option (.google.api.http) = { get: "/sentinel/nodes/{address}/subscriptions" };\n  }\n  rpc QuerySubscriptionsForPlan ( .sentinel.subscription.v2.QuerySubscriptionsForPlanRequest ) returns ( .sentinel.subscription.v2.QuerySubscriptionsForPlanResponse ) {\n    option (.google.api.http) = { get: "/sentinel/plans/{id}/subscriptions" };\n  }\n}\n'})})]})]}),"\n",(0,r.jsxs)(n,{children:[(0,r.jsx)("summary",{children:"sentinel.swap.v1.QueryService"}),(0,r.jsxs)("p",{children:[(0,r.jsxs)(s.h4,{id:"these-are-the-methods-of-sentinelswapv1queryservice",children:["These are the methods of ",(0,r.jsx)(s.code,{children:"sentinel.swap.v1.QueryService"})]}),(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:'service QueryService {\n  rpc QueryParams ( .sentinel.swap.v1.QueryParamsRequest ) returns ( .sentinel.swap.v1.QueryParamsResponse ) {\n    option (.google.api.http) = { get: "/sentinel/modules/swap/params" };\n  }\n  rpc QuerySwap ( .sentinel.swap.v1.QuerySwapRequest ) returns ( .sentinel.swap.v1.QuerySwapResponse ) {\n    option (.google.api.http) = { get: "/sentinel/swaps/{tx_hash}" };\n  }\n  rpc QuerySwaps ( .sentinel.swap.v1.QuerySwapsRequest ) returns ( .sentinel.swap.v1.QuerySwapsResponse ) {\n    option (.google.api.http) = { get: "/sentinel/swaps" };\n  }\n}\n'})})]})]}),"\n",(0,r.jsx)(s.p,{children:"The list of all available gRPC query endpoints and API exploration is possible with the help of buf studio."}),"\n",(0,r.jsx)(s.h4,{id:"query-for-historical-state-using-grpcurl",children:"Query for historical state using grpcurl"}),"\n",(0,r.jsxs)(s.p,{children:["You may also query for historical data by passing some ",(0,r.jsx)(s.a,{href:"https://github.com/grpc/grpc-go/blob/master/Documentation/grpc-metadata.md",children:"gRPC metadata"})," to the query: the ",(0,r.jsx)(s.code,{children:"x-cosmos-block-height"})," metadata should contain the block to query. Using grpcurl as above, the command looks like:"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:'grpcurl \\\n    -plaintext \\\n    -H "x-sentinel-block-height: 13000000" \\\n    -d \'{"address":"sent1uddk4mfqq3uyu2yzhym8spheqatqs30fzh5tmr"}\' \\\n    grpc.sentinel.co:9090 \\\n    cosmos.bank.v1beta1.Query/AllBalances\n'})}),"\n",(0,r.jsx)(s.p,{children:"Assuming the state at that block has not yet been pruned by the node, this query should return a non-empty response."})]})}function p(e={}){const{wrapper:s}={...(0,t.a)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}}}]);
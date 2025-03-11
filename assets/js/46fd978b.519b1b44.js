"use strict";(self.webpackChunksentinel_docs=self.webpackChunksentinel_docs||[]).push([[2689],{28453:(e,n,i)=>{i.d(n,{R:()=>t,x:()=>l});var s=i(96540);const o={},r=s.createContext(o);function t(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:t(e.components),s.createElement(r.Provider,{value:n},e.children)}},61415:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>t,metadata:()=>s,toc:()=>a});const s=JSON.parse('{"id":"health-check/overview","title":"Overview","description":"Operating a Sentinel node and profiting from its ecosystem requires adherence to specific guidelines to maintain node health and network decentralization. This guide details the health check process, optimization techniques, and solutions to common issues.","source":"@site/docs/nodes/health-check/overview.md","sourceDirName":"health-check","slug":"/health-check/overview","permalink":"/nodes/health-check/overview","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"Overview","sidebar_position":1},"sidebar":"tutorialSidebar","previous":{"title":"Earnings","permalink":"/nodes/earnings"},"next":{"title":"Node Dashboard","permalink":"/nodes/health-check/node-dashboard"}}');var o=i(74848),r=i(28453);const t={title:"Overview",sidebar_position:1},l="Node Health Check",c={},a=[{value:"Overview",id:"overview",level:2},{value:"Node Compliance Rules",id:"node-compliance-rules",level:2},{value:"Passing Health Check",id:"passing-health-check",level:2},{value:"Provider Choice",id:"provider-choice",level:3},{value:"Kernel Tweaks",id:"kernel-tweaks",level:3},{value:"Resource Allocation",id:"resource-allocation",level:3},{value:"Troubleshooting Health Check Issues",id:"troubleshooting-health-check-issues",level:2},{value:"High Load",id:"high-load",level:3},{value:"RPC Configuration",id:"rpc-configuration",level:3},{value:"Kernel Upgrades",id:"kernel-upgrades",level:3},{value:"Workarounds for Malicious Traffic",id:"workarounds-for-malicious-traffic",level:2},{value:"Secure DNS",id:"secure-dns",level:3},{value:"P2P Traffic Blocking",id:"p2p-traffic-blocking",level:3}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"node-health-check",children:"Node Health Check"})}),"\n",(0,o.jsx)(n.p,{children:"Operating a Sentinel node and profiting from its ecosystem requires adherence to specific guidelines to maintain node health and network decentralization. This guide details the health check process, optimization techniques, and solutions to common issues."}),"\n",(0,o.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,o.jsxs)(n.p,{children:["To be added into the Subscription Plan and consequently be eligible to Node Revenue System, the node is required to pass the ",(0,o.jsx)(n.code,{children:"Node Health Check"}),".\nThis check tests:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"the node endpoint"}),"\n",(0,o.jsx)(n.li,{children:"the node configuration"}),"\n",(0,o.jsx)(n.li,{children:"the node gigabyte price (less than 20 DVPN)"}),"\n",(0,o.jsx)(n.li,{children:"the node hourly price (15 DVPN for datacenters and 31,5 DVPN for residentials nodes, both expressed in udvpn)"}),"\n",(0,o.jsx)(n.li,{children:"the node connectivity"}),"\n"]}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsxs)(n.p,{children:["Node Health Checks currently happen ",(0,o.jsx)(n.strong,{children:"ONCE"})," a day. So, if you have recently run a dVPN node, expect some waiting time before you receive any outcomes."]})}),"\n",(0,o.jsx)(n.p,{children:"By implementing this process, the Subscription Plan ensures a continuous assessment, allowing for the addition of new nodes and the removal of problematic ones that require corrective measures."}),"\n",(0,o.jsx)(n.p,{children:"To check if your node has passed the health check, there are four ways to do it."}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"/nodes/health-check/node-dashboard",children:"Node Dashboard"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"/nodes/health-check/busurnode",children:"Busurnode"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"/nodes/health-check/sentinel-api",children:"Sentinel API"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"/nodes/health-check/plan-wizard",children:"Planwizard API"})}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"node-compliance-rules",children:"Node Compliance Rules"}),"\n",(0,o.jsx)(n.p,{children:"Nodes must adhere to specific compliance rules to ensure fair distribution and maintain a balanced network. These rules regulate the number of nodes within subnets, ASNs, and cities to avoid saturation and promote decentralization."}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Subnet Limits:"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"A maximum of 5 IPs per /24 subnet"}),"\n",(0,o.jsx)(n.li,{children:"Residential nodes are exempt"}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"ASN Limits:"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Nodes must belong to underutilized ASNs"}),"\n",(0,o.jsx)(n.li,{children:"Overutilized ASNs may impose stricter limits"}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"City Limits:"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"A maximum of 50 nodes per city"}),"\n",(0,o.jsx)(n.li,{children:"Overcrowding excludes nodes from subscription plans."}),"\n"]}),"\n",(0,o.jsx)(n.admonition,{type:"tip",children:(0,o.jsx)(n.p,{children:"Use tools like Planwizard to verify subnets and ASNs."})}),"\n",(0,o.jsx)(n.h2,{id:"passing-health-check",children:"Passing Health Check"}),"\n",(0,o.jsx)(n.p,{children:"Enhance your node\u2019s chances of passing the health check by following these recommendations:"}),"\n",(0,o.jsx)(n.h3,{id:"provider-choice",children:"Provider Choice"}),"\n",(0,o.jsx)(n.p,{children:"It's recommended to avoid using widely known cloud providers like AWS, GCP, Azure, Vultr, Linode, Oracle, Alibaba, ColoCrossing, Digital Ocean, and other highly-saturated providers, as they may not be whitelisted for dVPN nodes."}),"\n",(0,o.jsx)(n.h3,{id:"kernel-tweaks",children:"Kernel Tweaks"}),"\n",(0,o.jsx)(n.p,{children:"Apply these kernel tweaks to improve connection handling and increase network and file limits. This is particularly helpful for nodes running on limited VM resources."}),"\n",(0,o.jsxs)(n.p,{children:["Add the following to ",(0,o.jsx)(n.code,{children:"/etc/sysctl.conf"})," and apply with ",(0,o.jsx)(n.code,{children:"sysctl -p"})]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"net.core.default_qdisc=fq\nnet.ipv4.tcp_congestion_control=bbr\nnet.core.somaxconn=8192\nnet.ipv4.ip_local_port_range=1024 65535\nnet.core.netdev_max_backlog=2000\nnet.ipv4.tcp_max_syn_backlog=2048\n\nfs.inotify.max_user_instances=2048\nfs.file-max=999999999\n"})}),"\n",(0,o.jsx)(n.h3,{id:"resource-allocation",children:"Resource Allocation"}),"\n",(0,o.jsxs)(n.p,{children:["If running other Docker containers, prioritize your node\u2019s CPU allocation by setting ",(0,o.jsx)(n.code,{children:"--cpu-weight=2048"})," or higher."]}),"\n",(0,o.jsx)(n.h2,{id:"troubleshooting-health-check-issues",children:"Troubleshooting Health Check Issues"}),"\n",(0,o.jsx)(n.p,{children:"Common problems for Healch Check issues con be various:"}),"\n",(0,o.jsx)(n.h3,{id:"high-load",children:"High Load"}),"\n",(0,o.jsx)(n.p,{children:"Check if the load exceeds CPU count:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:'[ $(cut -d \'.\' -f 1 /proc/loadavg) -gt $(nproc) ] && echo "high" || echo "low"\n'})}),"\n",(0,o.jsx)(n.p,{children:"Address this by optimizing resources or upgrading hardware."}),"\n",(0,o.jsx)(n.h3,{id:"rpc-configuration",children:"RPC Configuration"}),"\n",(0,o.jsx)(n.p,{children:"Use load-balanced RPC servers for better node health:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:'rpc_addresses = "https://rpc.sentineldao.com:443,https://rpc-sentinel.busurnode.com:443,https://sentinel-rpc.publicnode.com:443"\n'})}),"\n",(0,o.jsx)(n.h3,{id:"kernel-upgrades",children:"Kernel Upgrades"}),"\n",(0,o.jsx)(n.p,{children:"Upgrade to a 6.1.x kernel on Debian/Ubuntu for enhanced stability. You can use the Ubuntu Mainline Kernel installer for this."}),"\n",(0,o.jsx)(n.h2,{id:"workarounds-for-malicious-traffic",children:"Workarounds for Malicious Traffic"}),"\n",(0,o.jsx)(n.p,{children:"To protect your node from malicious traffic and ensure optimal performance, implement the following strategies."}),"\n",(0,o.jsx)(n.h3,{id:"secure-dns",children:"Secure DNS"}),"\n",(0,o.jsx)(n.p,{children:"Configure your Docker container to use DNS servers that block malicious traffic:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:'--dns="1.1.1.2" --dns="9.9.9.11"\n'})}),"\n",(0,o.jsx)(n.h3,{id:"p2p-traffic-blocking",children:"P2P Traffic Blocking"}),"\n",(0,o.jsx)(n.p,{children:"Use iptables to block unencrypted traffic. Example rules to block torrent discovery:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:'-m string --algo bm --string "announce.php?passkey="\n-m string --algo bm --string ".torrent"\n'})}),"\n",(0,o.jsxs)(n.p,{children:["Implement a strict ",(0,o.jsx)(n.code,{children:'"allow specific ports, drop the rest"'})," firewall policy for additional control."]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}}}]);
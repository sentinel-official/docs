"use strict";(self.webpackChunksentinel_docs=self.webpackChunksentinel_docs||[]).push([[5854],{91788:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>r,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>c,toc:()=>a});var i=s(74848),t=s(28453);const o={title:"List",sidebar_position:1},l="Commands",c={id:"commands/list",title:"List",description:"This section describes the commands available from sentinelcli, the command line interface that connects a running sentinelcli process.",source:"@site/docs/sentinel-cli/commands/list.md",sourceDirName:"commands",slug:"/commands/list",permalink:"/sentinel-cli/commands/list",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"List",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Get Started",permalink:"/sentinel-cli/get-started"},next:{title:"Basic Key Management",permalink:"/sentinel-cli/commands/keys/keys-cli"}},r={},a=[{value:"<code>completion</code>",id:"completion",level:3},{value:"<code>connect</code>",id:"connect",level:3},{value:"<code>disconnect</code>",id:"disconnect",level:3},{value:"<code>help</code>",id:"help",level:3},{value:"<code>keys</code>",id:"keys",level:3},{value:"This is the output of <code>sentinelcli keys</code>",id:"this-is-the-output-of-sentinelcli-keys",level:4},{value:"<code>query</code>",id:"query",level:3},{value:"This is the output of <code>sentinelcli query</code>",id:"this-is-the-output-of-sentinelcli-query",level:4},{value:"<code>tx</code>",id:"tx",level:3},{value:"This is the output of <code>sentinelcli tx</code>",id:"this-is-the-output-of-sentinelcli-tx",level:4},{value:"<code>version</code>",id:"version",level:3}];function d(e){const n={a:"a",code:"code",h1:"h1",h3:"h3",h4:"h4",p:"p",pre:"pre",strong:"strong",...(0,t.R)(),...e.components},{Details:s}=n;return s||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"commands",children:"Commands"}),"\n",(0,i.jsxs)(n.p,{children:["This section describes the commands available from ",(0,i.jsx)(n.code,{children:"sentinelcli"}),", the command line interface that connects a running ",(0,i.jsx)(n.code,{children:"sentinelcli"})," process."]}),"\n",(0,i.jsx)(n.h3,{id:"completion",children:(0,i.jsx)(n.code,{children:"completion"})}),"\n",(0,i.jsx)(n.p,{children:"Generate the autocompletion script for sentinelcli for the specified shell.\nSee each sub-command's help for details on how to use the generated script."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Syntax"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"sentinelcli completion [command]\n"})}),"\n",(0,i.jsx)(n.h3,{id:"connect",children:(0,i.jsx)(n.code,{children:"connect"})}),"\n",(0,i.jsx)(n.p,{children:"Connects to a node."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Syntax"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"sentinelcli connect [subscription] [address] [flags]\n"})}),"\n",(0,i.jsx)(n.h3,{id:"disconnect",children:(0,i.jsx)(n.code,{children:"disconnect"})}),"\n",(0,i.jsx)(n.p,{children:"Disconnects from a node."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Syntax"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"sentinelcli disconnect [flags]\n"})}),"\n",(0,i.jsx)(n.h3,{id:"help",children:(0,i.jsx)(n.code,{children:"help"})}),"\n",(0,i.jsx)(n.p,{children:"Help provides help for any command in the application.\nSimply type sentinelcli help [path to command] for full details."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Syntax"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"sentinelcli help [command] [flags]\n"})}),"\n",(0,i.jsx)(n.h3,{id:"keys",children:(0,i.jsx)(n.code,{children:"keys"})}),"\n",(0,i.jsx)(n.p,{children:"Keyring management commands. These keys may be in any format supported by the\nTendermint crypto library and can be used by light-clients, full nodes, or any other application\nthat needs to sign with a private key."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Syntax"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"sentinelcli keys [command] [flags]\n"})}),"\n",(0,i.jsx)(n.p,{children:"The keyring supports the following backends:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"os       Uses the operating system's default credentials store.\nfile     Uses encrypted file-based keystore within the app's configuration directory.\n         This keyring will request a password each time it is accessed, which may occur\n         multiple times in a single command resulting in repeated password prompts.\nkwallet  Uses KDE Wallet Manager as a credentials management application.\npass     Uses the pass command line utility to store and retrieve keys.\ntest     Stores keys insecurely to disk. It does not prompt for a password to be unlocked\n         and it should be use only for testing purposes.\n"})}),"\n",(0,i.jsxs)(n.p,{children:["kwallet and pass backends depend on external tools. Refer to their respective documentation for more\ninformation:\nKWallet     ",(0,i.jsx)(n.a,{href:"https://github.com/KDE/kwallet",children:"https://github.com/KDE/kwallet"}),"\npass        ",(0,i.jsx)(n.a,{href:"https://www.passwordstore.org/",children:"https://www.passwordstore.org/"})]}),"\n",(0,i.jsxs)(n.p,{children:["The pass backend requires GnuPG: ",(0,i.jsx)(n.a,{href:"https://gnupg.org",children:"https://gnupg.org"})]}),"\n",(0,i.jsxs)(s,{children:[(0,i.jsx)("summary",{children:"Available subcommands"}),(0,i.jsxs)("p",{children:[(0,i.jsxs)(n.h4,{id:"this-is-the-output-of-sentinelcli-keys",children:["This is the output of ",(0,i.jsx)(n.code,{children:"sentinelcli keys"})]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"add         Add an encrypted private key (either newly generated or recovered), encrypt it, and save to <name> file\ndelete      Delete the given keys\nexport      Export private keys\nimport      Import private keys into the local keybase\nlist        List all keys\nmigrate     Migrate keys from the legacy (db-based) Keybase\nmnemonic    Compute the bip39 mnemonic for some input entropy\nparse       Parse address from hex to bech32 and vice versa\nshow        Retrieve key information by name or address\n"})})]})]}),"\n",(0,i.jsxs)(n.p,{children:["For a more detailed explaination of the subcommand, plese visit the ",(0,i.jsx)(n.a,{href:"/sentinel-cli/keys/keys-cli",children:"Basic Key Management"})," section."]}),"\n",(0,i.jsx)(n.h3,{id:"query",children:(0,i.jsx)(n.code,{children:"query"})}),"\n",(0,i.jsx)(n.p,{children:"Transaction command"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Syntax"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"sentinelcli query [command]\nsentinelcli query [flags]\n"})}),"\n",(0,i.jsxs)(s,{children:[(0,i.jsx)("summary",{children:"Available subcommands"}),(0,i.jsxs)("p",{children:[(0,i.jsxs)(n.h4,{id:"this-is-the-output-of-sentinelcli-query",children:["This is the output of ",(0,i.jsx)(n.code,{children:"sentinelcli query"})]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"allocation    Query a allocation\nallocations   Query allocations of a subscription\ndeposit       Query a deposit\ndeposits      Query deposits\nnode          Query a node\nnodes         Query nodes\nplan          Query a plan\nplans         Query plans\nprovider      Query a provider\nproviders     Query providers\nsession       Query a session\nsessions      Query sessions\nsubscription  Query a subscription\nsubscriptions Query subscriptions\n"})})]})]}),"\n",(0,i.jsx)(n.h3,{id:"tx",children:(0,i.jsx)(n.code,{children:"tx"})}),"\n",(0,i.jsx)(n.p,{children:"Transaction command"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Syntax"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"sentinelcli tx [command] [flags]\nsentinelcli tx [flags]\n"})}),"\n",(0,i.jsxs)(s,{children:[(0,i.jsx)("summary",{children:"Available subcommands"}),(0,i.jsxs)("p",{children:[(0,i.jsxs)(n.h4,{id:"this-is-the-output-of-sentinelcli-tx",children:["This is the output of ",(0,i.jsx)(n.code,{children:"sentinelcli tx"})]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"node         Node related subcommands\nplan         plan related subcommands\nprovider     Provider related subcommands\nsession      Session related subcommands\nsubscription Subscription related subcommands\n"})})]})]}),"\n",(0,i.jsx)(n.h3,{id:"version",children:(0,i.jsx)(n.code,{children:"version"})}),"\n",(0,i.jsx)(n.p,{children:"Print the application binary version information"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Syntax"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"sentinelcli version\n"})})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>l,x:()=>c});var i=s(96540);const t={},o=i.createContext(t);function l(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);
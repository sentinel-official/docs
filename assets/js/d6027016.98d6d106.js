"use strict";(self.webpackChunksentinel_docs=self.webpackChunksentinel_docs||[]).push([[3567],{29557:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>l,contentTitle:()=>d,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>r});var t=a(74848),s=a(28453);const i={title:"Automated Setup",sidebar_position:3},d="Automated Setup",o={id:"automated",title:"Automated Setup",description:"To simplify the installation of a dVPN node, you can employ a .deb package tool called dVPN Node Manager that automates the process through an intuitive user interface (UI).",source:"@site/docs/node-setup/automated.md",sourceDirName:".",slug:"/automated",permalink:"/node-setup/automated",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Automated Setup",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Requirements",permalink:"/node-setup/requirements"},next:{title:"Manual Setup",permalink:"/node-setup/manual-setup"}},l={},r=[{value:"Installation via PPA (Personal Package Archive)",id:"installation-via-ppa-personal-package-archive",level:2},{value:"Adding the PPA and Installing the Package",id:"adding-the-ppa-and-installing-the-package",level:3},{value:"Install the dvpn-node-manager:",id:"install-the-dvpn-node-manager",level:3},{value:"Running the dVPN Node Manager",id:"running-the-dvpn-node-manager",level:3},{value:"Uninstalling the Package",id:"uninstalling-the-package",level:3},{value:"From Debian Package",id:"from-debian-package",level:2},{value:"Downloading the Package",id:"downloading-the-package",level:3},{value:"Installing the Package",id:"installing-the-package",level:3},{value:"Running the Script",id:"running-the-script",level:3},{value:"Uninstalling the Package",id:"uninstalling-the-package-1",level:3},{value:"From Source",id:"from-source",level:2},{value:"Downloading the Script",id:"downloading-the-script",level:3},{value:"Set execution permissions",id:"set-execution-permissions",level:3},{value:"Running the Script",id:"running-the-script-1",level:3},{value:"Commands",id:"commands",level:2},{value:"Starting the Node",id:"starting-the-node",level:3},{value:"Stopping the Node",id:"stopping-the-node",level:3},{value:"Restarting the Node",id:"restarting-the-node",level:3},{value:"Status of the Node",id:"status-of-the-node",level:3},{value:"Show Wallet balance",id:"show-wallet-balance",level:3},{value:"Show logs",id:"show-logs",level:3},{value:"Checking the Port",id:"checking-the-port",level:3},{value:"Updating the Node",id:"updating-the-node",level:3},{value:"Uninstalling the Node",id:"uninstalling-the-node",level:3},{value:"About the Script",id:"about-the-script",level:3},{value:"Help",id:"help",level:3}];function h(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"automated-setup",children:"Automated Setup"}),"\n",(0,t.jsxs)(n.p,{children:["To simplify the installation of a dVPN node, you can employ a ",(0,t.jsx)(n.code,{children:".deb"})," package tool called dVPN Node Manager that automates the process through an intuitive user interface (UI)."]}),"\n",(0,t.jsxs)(n.p,{children:["This tool is available on ",(0,t.jsx)(n.a,{href:"https://github.com/sentinelgrowthdao/dvpn-node-manager",children:"GitHub repository"}),", and a comprehensive article has also been published on ",(0,t.jsx)(n.a,{href:"https://dvpn.news",children:"dvpn.news"}),", providing detailed instructions."]}),"\n",(0,t.jsx)(n.p,{children:"The dVPN  Node Manager tool can be installed in three distinct ways, tailored to your specific requirements."}),"\n",(0,t.jsx)(n.h2,{id:"installation-via-ppa-personal-package-archive",children:"Installation via PPA (Personal Package Archive)"}),"\n",(0,t.jsxs)(n.p,{children:["For Debian-based users, the simplest and most streamlined way of installing the ",(0,t.jsx)(n.code,{children:"dvpn-node-manager"})," is through our Personal Package Archive (PPA). This method ensures that you receive the latest updates automatically and simplifies the installation process."]}),"\n",(0,t.jsx)(n.h3,{id:"adding-the-ppa-and-installing-the-package",children:"Adding the PPA and Installing the Package"}),"\n",(0,t.jsx)(n.p,{children:"Add the PPA to your system: This step adds our repository to your system's list of sources, from which packages are retrieved. You can add the PPA by running the following command in your terminal:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sudo add-apt-repository ppa:foxinou/dvpn-node-manager\r\nsudo apt update\n"})}),"\n",(0,t.jsx)(n.h3,{id:"install-the-dvpn-node-manager",children:"Install the dvpn-node-manager:"}),"\n",(0,t.jsxs)(n.p,{children:["Now that your system is aware of the new repository, you can install the ",(0,t.jsx)(n.code,{children:"dvpn-node-manager"})," package by executing:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sudo apt install dvpn-node-manager\n"})}),"\n",(0,t.jsxs)(n.p,{children:["This command will download and install the ",(0,t.jsx)(n.code,{children:"dvpn-node-manager"})," along with all required dependencies automatically."]}),"\n",(0,t.jsx)(n.h3,{id:"running-the-dvpn-node-manager",children:"Running the dVPN Node Manager"}),"\n",(0,t.jsxs)(n.p,{children:["Once the installation is complete, you can run the ",(0,t.jsx)(n.code,{children:"dvpn-node-manager"})," using the following command:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sudo dvpn-node-manager\n"})}),"\n",(0,t.jsx)(n.p,{children:"This will launch the dVPN Node Manager interface, allowing you to manage your dVPN node's settings and operations directly through a simple command-line interface."}),"\n",(0,t.jsx)(n.h3,{id:"uninstalling-the-package",children:"Uninstalling the Package"}),"\n",(0,t.jsx)(n.p,{children:"If you wish to uninstall the dVPN Node Manager, you can do so by executing:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sudo apt remove dvpn-node-manager\n"})}),"\n",(0,t.jsx)(n.p,{children:"This command will remove the dvpn-node-manager package from your system. If you also want to remove the PPA from your list of software sources, use:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sudo add-apt-repository --remove ppa:foxinou/dvpn-node-manager\n"})}),"\n",(0,t.jsx)(n.p,{children:"This will ensure that your system no longer checks for updates from the dvpn-node-manager PPA."}),"\n",(0,t.jsx)(n.h2,{id:"from-debian-package",children:"From Debian Package"}),"\n",(0,t.jsxs)(n.p,{children:["For users on Debian-based systems, the ",(0,t.jsx)(n.code,{children:"dvpn-node-manager"})," is available as a ",(0,t.jsx)(n.code,{children:".deb"})," package, which simplifies the installation process and automatically installs all required dependencies."]}),"\n",(0,t.jsx)(n.h3,{id:"downloading-the-package",children:"Downloading the Package"}),"\n",(0,t.jsxs)(n.p,{children:["You can manually download the ",(0,t.jsx)(n.code,{children:".deb"})," file of your choice by consulting the available ",(0,t.jsx)(n.a,{href:"https://github.com/sentinelgrowthdao/dvpn-node-manager/releases",children:"releases"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sudo wget -O /var/cache/apt/archives/dvpn-node-manager_latest.deb https://github.com/sentinelgrowthdao/dvpn-node-manager/releases/download/v1.0.0-alpha9/dvpn-node-manager_1.0.0-alpha9_$(dpkg --print-architecture).deb\r\nsudo chmod 644 /var/cache/apt/archives/dvpn-node-manager_latest.deb\r\nsudo chown _apt:root /var/cache/apt/archives/dvpn-node-manager_latest.deb\n"})}),"\n",(0,t.jsx)(n.h3,{id:"installing-the-package",children:"Installing the Package"}),"\n",(0,t.jsxs)(n.p,{children:["After manually downloading the ",(0,t.jsx)(n.code,{children:".deb"})," package, launch the installation using the ",(0,t.jsx)(n.code,{children:"apt"})," package manager:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sudo apt install /var/cache/apt/archives/dvpn-node-manager_latest.deb\n"})}),"\n",(0,t.jsx)(n.p,{children:"This command will install the dvpn-node-manager script and all necessary dependencies on your system. The package takes care of setting up everything needed for the script to run."}),"\n",(0,t.jsx)(n.h3,{id:"running-the-script",children:"Running the Script"}),"\n",(0,t.jsxs)(n.p,{children:["Running the script using the ",(0,t.jsx)(n.code,{children:"dvpn-node-manager"})," command:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sudo dvpn-node-manager\n"})}),"\n",(0,t.jsx)(n.p,{children:"This command will launch the dVPN Node Manager, allowing you to manage your dVPN node's settings and operations directly through a simple command-line interface."}),"\n",(0,t.jsx)(n.h3,{id:"uninstalling-the-package-1",children:"Uninstalling the Package"}),"\n",(0,t.jsx)(n.p,{children:"If you wish to uninstall the dVPN Node Manager, you can do so by executing:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sudo apt autoremove /var/cache/apt/archives/dvpn-node-manager_latest.deb\n"})}),"\n",(0,t.jsx)(n.p,{children:"This command will remove the dvpn-node-manager package from your system, as well as all configurations, docker images and containers."}),"\n",(0,t.jsx)(n.h2,{id:"from-source",children:"From Source"}),"\n",(0,t.jsx)(n.p,{children:"To install the script from source, follow the steps below:"}),"\n",(0,t.jsx)(n.h3,{id:"downloading-the-script",children:"Downloading the Script"}),"\n",(0,t.jsxs)(n.p,{children:["Download the script using the ",(0,t.jsx)(n.code,{children:"curl"})," command:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"curl -o $HOME/dvpn-node-manager.sh https://raw.githubusercontent.com/sentinelgrowthdao/dvpn-node-manager/main/dvpn-node-manager.sh\n"})}),"\n",(0,t.jsx)(n.h3,{id:"set-execution-permissions",children:"Set execution permissions"}),"\n",(0,t.jsx)(n.p,{children:"Grant execution permissions to the script using the chmod command:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"chmod +x dvpn-node-manager.sh\n"})}),"\n",(0,t.jsx)(n.h3,{id:"running-the-script-1",children:"Running the Script"}),"\n",(0,t.jsx)(n.p,{children:"Execute the script using the sudo bash command:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sudo bash dvpn-node-manager.sh\n"})}),"\n",(0,t.jsx)(n.p,{children:"Follow the installation process as indicated by the interface. If Docker is not already installed on the machine, it will be installed followed by a system reboot."}),"\n",(0,t.jsx)(n.p,{children:"Restarting the script after installation will allow for modifying settings and managing the wallet or node."}),"\n",(0,t.jsx)(n.h2,{id:"commands",children:"Commands"}),"\n",(0,t.jsx)(n.p,{children:"A number of commands are available to perform actions outside the default interface."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sudo bash dvpn-node-manager.sh [command]\n"})}),"\n",(0,t.jsx)(n.h3,{id:"starting-the-node",children:"Starting the Node"}),"\n",(0,t.jsx)(n.p,{children:"To start the dVPN node container, you can execute the script with the start parameter:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sudo bash dvpn-node-manager.sh start\n"})}),"\n",(0,t.jsx)(n.h3,{id:"stopping-the-node",children:"Stopping the Node"}),"\n",(0,t.jsx)(n.p,{children:"To stop the dVPN node container, you can execute the script with the stop parameter:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sudo bash dvpn-node-manager.sh stop\n"})}),"\n",(0,t.jsx)(n.h3,{id:"restarting-the-node",children:"Restarting the Node"}),"\n",(0,t.jsx)(n.p,{children:"To restart the dVPN node container, you can execute the script with the restart parameter:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sudo bash dvpn-node-manager.sh restart\n"})}),"\n",(0,t.jsx)(n.h3,{id:"status-of-the-node",children:"Status of the Node"}),"\n",(0,t.jsx)(n.p,{children:"To check the status of the dVPN node container, you can execute the script with the status parameter:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sudo bash dvpn-node-manager.sh status\n"})}),"\n",(0,t.jsx)(n.h3,{id:"show-wallet-balance",children:"Show Wallet balance"}),"\n",(0,t.jsx)(n.p,{children:"To show the wallet balance, you can execute the script with the balance parameter:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sudo bash dvpn-node-manager.sh balance\n"})}),"\n",(0,t.jsx)(n.h3,{id:"show-logs",children:"Show logs"}),"\n",(0,t.jsx)(n.p,{children:"To show the logs of the dVPN node container, you can execute the script with the logs parameter:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sudo bash dvpn-node-manager.sh logs\n"})}),"\n",(0,t.jsx)(n.h3,{id:"checking-the-port",children:"Checking the Port"}),"\n",(0,t.jsx)(n.p,{children:"To check whether the port is open and accessible from the Internet, you can execute the script with the port parameter:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sudo bash dvpn-node-manager.sh port\n"})}),"\n",(0,t.jsx)(n.h3,{id:"updating-the-node",children:"Updating the Node"}),"\n",(0,t.jsx)(n.p,{children:"To update the dVPN node container, you can execute the script with the update parameter:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sudo bash dvpn-node-manager.sh update\n"})}),"\n",(0,t.jsx)(n.h3,{id:"uninstalling-the-node",children:"Uninstalling the Node"}),"\n",(0,t.jsx)(n.p,{children:"To uninstall the dVPN node container, you can execute the script with the uninstall parameter:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sudo bash dvpn-node-manager.sh uninstall\n"})}),"\n",(0,t.jsx)(n.h3,{id:"about-the-script",children:"About the Script"}),"\n",(0,t.jsx)(n.p,{children:"To display information about the script, you can execute the script with the about parameter:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sudo bash dvpn-node-manager.sh about\n"})}),"\n",(0,t.jsx)(n.h3,{id:"help",children:"Help"}),"\n",(0,t.jsx)(n.p,{children:"To display the help message, you can execute the script with the help parameter:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sudo bash dvpn-node-manager.sh help\n"})})]})}function c(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},28453:(e,n,a)=>{a.d(n,{R:()=>d,x:()=>o});var t=a(96540);const s={},i=t.createContext(s);function d(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);
"use strict";(self.webpackChunksentinel_docs=self.webpackChunksentinel_docs||[]).push([[8852],{71717:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>t,toc:()=>c});var r=s(85893),i=s(11151);const a={title:"NGINX",sidebar_position:8},o="NGINX",t={id:"nginx",title:"NGINX",description:'NGINX (pronounced "engine-x") is a high-performance, open-source web server and reverse proxy server. It\'s known for its efficient handling of web traffic and its ability to serve as a load balancer. NGINX is widely used to improve website performance, security, and scalability. It can also function as a proxy server for applications and offers features like SSL/TLS termination, caching, and content delivery. NGINX is popular for its speed and reliability in serving web content.',source:"@site/docs/full-node-setup/nginx.md",sourceDirName:".",slug:"/nginx",permalink:"/full-node-setup/nginx",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:8,frontMatter:{title:"NGINX",sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"Register a Domain Name",permalink:"/full-node-setup/domain"},next:{title:"Certbot",permalink:"/full-node-setup/certbot"}},l={},c=[{value:"Installation",id:"installation",level:2},{value:"Launch test",id:"launch-test",level:2},{value:"Configuration",id:"configuration",level:2}];function d(e){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,i.a)(),...e.components},{Details:s}=n;return s||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"nginx",children:"NGINX"}),"\n",(0,r.jsx)(n.p,{children:'NGINX (pronounced "engine-x") is a high-performance, open-source web server and reverse proxy server. It\'s known for its efficient handling of web traffic and its ability to serve as a load balancer. NGINX is widely used to improve website performance, security, and scalability. It can also function as a proxy server for applications and offers features like SSL/TLS termination, caching, and content delivery. NGINX is popular for its speed and reliability in serving web content.'}),"\n",(0,r.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,r.jsx)(n.p,{children:"Install the dependencies:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"sudo apt update\nsudo apt install curl gnupg2 ca-certificates lsb-release\n"})}),"\n",(0,r.jsx)(n.p,{children:"Import an official Nginx signing key:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"curl https://nginx.org/keys/nginx_signing.key | gpg --dearmor \\\n    | sudo tee /usr/share/keyrings/nginx-archive-keyring.gpg > /dev/null\n"})}),"\n",(0,r.jsx)(n.p,{children:"Ensure that the downloaded file contains the correct key"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"gpg --dry-run --quiet --import --import-options import-show /usr/share/keyrings/nginx-archive-keyring.gpg\n"})}),"\n",(0,r.jsx)(n.p,{children:"Now, proceed to set up the APT repository for stable Nginx packages:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'echo "deb [signed-by=/usr/share/keyrings/nginx-archive-keyring.gpg] \\\nhttp://nginx.org/packages/debian `lsb_release -cs` nginx" \\\n    | sudo tee /etc/apt/sources.list.d/nginx.list\n'})}),"\n",(0,r.jsx)(n.p,{children:"Install NGINX:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"sudo apt install nginx\n"})}),"\n",(0,r.jsx)(n.h2,{id:"launch-test",children:"Launch test"}),"\n",(0,r.jsx)(n.p,{children:"After installation check the NGINX status (it will probably be enabled but inactive):"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"sudo systemctl status nginx\n"})}),"\n",(0,r.jsx)(n.p,{children:"Start the service:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"sudo systemctl start nginx.service\n"})}),"\n",(0,r.jsxs)(n.p,{children:["To test the setup, open your browser and enter ",(0,r.jsx)(n.code,{children:"localhost"})," in the URL bar, or type it in your terminal"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"curl localhost\n"})}),"\n",(0,r.jsx)(n.p,{children:"If you receive a successful message, you can now stop NGINX"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"sudo systemctl stop nginx.service\n"})}),"\n",(0,r.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,r.jsx)(n.p,{children:"Navigate to the configuration directory:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"cd /etc/nginx/conf.d\n"})}),"\n",(0,r.jsxs)(n.p,{children:["You may find the file ",(0,r.jsx)(n.code,{children:"default.conf"}),". You can rename it or create the files ",(0,r.jsx)(n.code,{children:"rpc.conf"})," and ",(0,r.jsx)(n.code,{children:"api.conf"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"sudo mv default.conf rpc.conf\nsudo nano rpc.conf\nsudo nano api.conf\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Copy the following template into the ",(0,r.jsx)(n.code,{children:"rpc.conf"})," and replace ",(0,r.jsx)(n.code,{children:"mynodename"})," with your domain"]}),"\n",(0,r.jsxs)(s,{children:[(0,r.jsx)("summary",{children:"rpc.conf"}),(0,r.jsx)("p",{children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"server {\n    server_name rpc.sentinel.mynodename.com;\n\n    location / {\n        proxy_pass http://127.0.0.1:26657;\n        proxy_set_header Host $host;\n        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;\n        proxy_set_header X-Real-IP $remote_addr;\n        proxy_http_version 1.1;\n        proxy_set_header Upgrade $http_upgrade;\n        proxy_set_header Connection $http_connection;\n\n        add_header 'Access-Control-Allow-Origin' '*';\n        add_header 'Access-Control-Allow-Methods' 'GET, POST, OPTIONS';\n        add_header 'Access-Control-Allow-Headers' 'DNT,X-CustomHeader,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type';\n    }\n\n    listen [::]:80;\n    listen 80;\n}\n"})})})]}),"\n",(0,r.jsxs)(n.p,{children:["Copy the following template into the ",(0,r.jsx)(n.code,{children:"api.conf"})," and replace mynodename with your domain"]}),"\n",(0,r.jsxs)(s,{children:[(0,r.jsx)("summary",{children:"api.conf"}),(0,r.jsx)("p",{children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"server {\n    server_name api.sentinel.mynodename.com;\n\n    location / {\n        proxy_pass http://127.0.0.1:1317;\n        proxy_set_header Host $host;\n        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;\n        proxy_set_header X-Real-IP $remote_addr;\n        proxy_http_version 1.1;\n    }\n\n    listen [::]:80;\n    listen 80;\n}\n"})})})]}),"\n",(0,r.jsx)(n.p,{children:"Now, install the Certbot plugin"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"sudo apt install python3-certbot-nginx\n"})}),"\n",(0,r.jsx)(n.p,{children:"Apply Certbot plugin to the rpc.conf file to enable redirection to HTTPS and select the number corresponding to your Full Node"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"sudo certbot --nginx\n"})}),"\n",(0,r.jsx)(n.p,{children:"Restart NGINX"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"sudo systemctl restart nginx\n"})}),"\n",(0,r.jsx)(n.p,{children:"If anyhing goes wrong, run this command to check the logs:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"sudo tail -n 50 /var/log/nginx/error.log\n"})}),"\n",(0,r.jsx)(n.p,{children:"If you encounter no errors, you can finally test whether your RPC is now public:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"https://rpc.sentinel.mynodename.com\n"})})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}}}]);
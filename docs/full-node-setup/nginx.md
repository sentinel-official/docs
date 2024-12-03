---
title: NGINX
sidebar_position: 8
---

# NGINX

NGINX (pronounced "engine-x") is a high-performance, open-source web server and reverse proxy server. It's known for its efficient handling of web traffic and its ability to serve as a load balancer. NGINX is widely used to improve website performance, security, and scalability. It can also function as a proxy server for applications and offers features like SSL/TLS termination, caching, and content delivery. NGINX is popular for its speed and reliability in serving web content.

## Installation

Install the dependencies:

```bash
sudo apt update
sudo apt install curl gnupg2 ca-certificates lsb-release lsof psmisc
```

Import an official Nginx signing key:

```bash
curl https://nginx.org/keys/nginx_signing.key | gpg --dearmor \
    | sudo tee /usr/share/keyrings/nginx-archive-keyring.gpg > /dev/null
```

Ensure that the downloaded file contains the correct key

```bash
gpg --dry-run --quiet --import --import-options import-show /usr/share/keyrings/nginx-archive-keyring.gpg
```

Now, proceed to set up the APT repository for stable Nginx packages:

```bash
echo "deb [signed-by=/usr/share/keyrings/nginx-archive-keyring.gpg] \
http://nginx.org/packages/debian `lsb_release -cs` nginx" \
    | sudo tee /etc/apt/sources.list.d/nginx.list
```

Install NGINX:

```bash
sudo apt install nginx
```

## Launch test

After installation check the NGINX status (it will probably be enabled but inactive):

```bash
sudo systemctl status nginx
```

Start the service:

```bash
sudo systemctl start nginx.service
```

To test the setup, open your browser and enter `localhost` in the URL bar, or type it in your terminal

```bash
curl localhost
```

If you receive a successful message, you can now stop NGINX

```bash
sudo systemctl stop nginx.service
sudo killall nginx
```

## Configuration

Navigate to the configuration directory:

```bash
cd /etc/nginx/conf.d
```

You may find the file `default.conf`. You can rename it or create the files `rpc.conf` and `api.conf`

```bash
sudo mv default.conf rpc.conf
sudo nano rpc.conf
sudo nano api.conf
```

Copy the following template into the `rpc.conf` and replace `mynodename` with your domain

<details>
<summary>rpc.conf</summary>
<p>

```bash
server {
    server_name rpc.sentinel.mynodename.com;

    location / {
        proxy_pass http://127.0.0.1:26657;
        proxy_set_header Host $host;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection $http_connection;

        add_header 'Access-Control-Allow-Origin' '*';
        add_header 'Access-Control-Allow-Methods' 'GET, POST, OPTIONS';
        add_header 'Access-Control-Allow-Headers' 'DNT,X-CustomHeader,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type';
    }

    listen [::]:80;
    listen 80;
}
```

</p>
</details>

Copy the following template into the `api.conf` and replace mynodename with your domain

<details>
<summary>api.conf</summary>
<p>

```bash
server {
    server_name api.sentinel.mynodename.com;

    location / {
        proxy_pass http://127.0.0.1:1317;
        proxy_set_header Host $host;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_http_version 1.1;
    }

    listen [::]:80;
    listen 80;
}
```

</p>
</details>

Now, install the Certbot plugin

```bash
sudo apt install python3-certbot-nginx
```

Enable port 80 and 443 on your firewall

```bash
sudo ufw allow 80/tcp
sudo ufw allow 443/tcp
```

Apply Certbot plugin to the rpc.conf file to enable redirection to HTTPS and select the number corresponding to your Full Node

```bash
sudo certbot --nginx
```

You will be prompted to:
- add your email
- accept terms and conditions
- Press Enter to select all the listed domains (rpc and api)

Before restarting NGINX the following command to test the configuration for syntax errors:

```bash
sudo nginx -t
```

Restart NGINX

```bash
sudo systemctl restart nginx
```

If anyhing goes wrong, run this command to check the logs:

```bash
sudo tail -n 50 /var/log/nginx/error.log
```

If you encounter no errors, you can finally test whether your RPC is now public:

```bash
https://rpc.sentinel.mynodename.com
```
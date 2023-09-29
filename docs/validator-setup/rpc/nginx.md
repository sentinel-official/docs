---
title: NGINX
description: Web Server & Reverse Proxy
sidebar_position: 4
---

# NGINX

NGINX (pronounced "engine-x") is a popular open-source web server software and reverse proxy server

## Installation

Install the dependencies:

```bash
sudo apt-get update
sudo apt-get install curl gnupg2 ca-certificates lsb-release
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
sudo apt-get update && sudo apt-get install nginx
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
```

## Configuration

Navigate to the configuration directory:

```bash
cd /etc/nginx/config.d
```

You will find the file `default.conf`. You can rename it and create the file `rpc.conf`

```bash
sudo mv default.conf rpc.conf
sudo nano rpc.conf
```

Copy the following template into the `rpc.conf` and replace myvalidator with your domain

```bash title=rpc.conf
server {
    server_name rpc.sentinel.myvalidator.com;

    location / {
        proxy_pass http://127.0.0.1:26657;
        proxy_set_header Host $host;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection $http_connection;
    }

    listen [::]:80;
    listen 80;
}
```

Now, install the Certbot plugin and apply it to the above file to enable redirection to HTTPS

```bash
sudo apt-get install python3-certbot-nginx
sudo certbot --nginx
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
https://rpc.sentinel.myvalidator.com
```
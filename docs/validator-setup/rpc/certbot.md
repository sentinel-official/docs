---
title: Certbot
sidebar_position: 3
---

# Certbot

Install Certbot tool

```bash
sudo apt-get install certbot
```

Enable port 80 and 443 on your firewall

```bash
sudo ufw allow 80/tcp
```

Generate a SSL Certificate

```bash
certbot certonly -d rpc.sentinel.myvalidator.com
```

You will be prompted to follow some steps.
- When asked "How would you like to authenticate with the ACME CA?", select `Spin up a temporary webserver (standalone)`
- On "Enter email address (used for urgent renewal and security notices)" insert your email. By doing so, you will receive notifications when the certificate needs to be renewed
- Accept "Terms of Service"
- Choose whether to share your email address with EFF or not

If everything goes well, the certificate will be generated, and you will receive a message similar to this:

```bash
Congratulations! Your certificate and chain have been saved at:
/etc/letsencrypt/live/rpc.sentinel.myvalidator.com/fullchain.pem
Your key file has been saved at:
/etc/letsencrypt/live/rpc.sentinel.myvalidator.com/privkey.pem
Your certificate will expire on EXPIRATION DATE. To obtain a new or
tweaked version of this certificate in the future, simply run
certbot again. To non-interactively renew *all* of your
certificates, run "certbot renew"
```
---
title: Certbot
sidebar_position: 9
---

# Certbot

Certbot is specifically used for obtaining and renewing SSL/TLS certificates for websites. SSL/TLS certificates are cryptographic certificates that enable the encryption of data transmitted between a web server and a user's web browser, preventing eavesdropping, data tampering, and other security threats. Below the required steps.

## Installation

```bash
sudo apt install certbot
```

Enable port 80 and 443 on your firewall

```bash
sudo ufw allow 80/tcp
sudo ufw allow 443/tcp
```

## Generate a SSL Certificate

```bash
sudo certbot certonly -d rpc.sentinel.yournodename.com,api.sentinel.yournodename.com
```

You will be prompted to follow some steps.
- When asked "How would you like to authenticate with the ACME CA?", select `Spin up a temporary webserver (standalone)`
- On "Enter email address (used for urgent renewal and security notices)" insert your email. By doing so, you will receive notifications when the certificate needs to be renewed
- Accept "Terms of Service"
- Choose whether to share your email address with EFF or not

If everything goes well, the certificate will be generated, and you will receive a message similar to this:

<details>
<summary>Output</summary>
<p>

```bash
Congratulations! Your certificate and chain have been saved at:
/etc/letsencrypt/live/rpc.sentinel.yournodename.com/fullchain.pem
Your key file has been saved at:
/etc/letsencrypt/live/rpc.sentinel.yournodename.com/privkey.pem
Your certificate will expire on EXPIRATION DATE. To obtain a new or
tweaked version of this certificate in the future, simply run
certbot again. To non-interactively renew *all* of your
certificates, run "certbot renew"
```

</p>
</details>

## Renew a SSL Certificate

Certbot certificates typically expire every 90 days. To maintain their validity, you need to renew them regularly. Follow these steps to renew your SSL certificate:

First, stop the NGINX service to avoid any conflicts during the renewal process:

```bash
sudo systemctl stop nginx.service
```

Run the following command to renew your certificates:

```bash
sudo certbot renew
```

Upon execution, you'll receive the following output:

<details>
<summary>Output</summary>
<p>

```bash
Saving debug log to /var/log/letsencrypt/letsencrypt.log

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
Processing /etc/letsencrypt/renewal/rpc.sentinel.yournodename.com.conf
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
Renewing an existing certificate for rpc.sentinel.yournodename.com and api.sentinel.yournodename.com

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
Congratulations, all renewals succeeded: 
  /etc/letsencrypt/live/rpc.sentinel.yournodename.com/fullchain.pem (success)
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
```

</p>
</details>

This indicates that your certificate has been successfully renewed.

Finally, restart the NGINX service to apply the renewed certificates:

```bash
sudo systemctl start nginx.service
```

Your remote procedure call (RPC) and API should now be accessible again via HTTPS.
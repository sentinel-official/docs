---
title: RPC Port & Api Config
sidebar_position: 2
---



### Allow Port 26657 on the Firewall:

Set up the port 26657 on your firewall:

```bash
sudo ufw allow 26657/tcp
```

Check firewall status to see if the port has been enabled

```bash
sudo ufw status
```
### Update API Settings

Open the `app.toml` file

```bash
sudo nano ${HOME}/.sentinelhub/config/app.toml
```

Find the `[api]` section and set the following options:

```bash
[api]

# Enable defines if the API server should be enabled.
enable = true

# Address defines the API server to listen on.
address = "tcp://0.0.0.0:1317"
```

### Restart Sentinel Hub service

Finally, restart the Sentinel Hub service to apply the changes.

```bash
sudo systemctl restart sentinelhub.service
```
---
title: Configure RPC & API
sidebar_position: 2
---


## Allow Port 26657 on the Firewall:

Set up the port 26657 on your firewall:

```bash
sudo ufw allow 26657/tcp
```

Check firewall status to see if the port has been enabled

```bash
sudo ufw status
```
## Verify API is enabled

If you used the [RPC/API node app.toml reference](/full-node-setup/hub-config#apptoml) on the Configure Sentinel Hub page, `[api] enable = true` and `address = "tcp://0.0.0.0:1317"` are already in place. If you started from a different baseline, set those two values in `${HOME}/.sentinelhub/config/app.toml` before continuing.

## Restart Sentinel Hub service

Finally, restart the Sentinel Hub service to apply the changes.

```bash
sudo systemctl restart sentinelhub.service
```
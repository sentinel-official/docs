---
title: Migration
sidebar_position: 14
---

# Migrate the Validator

You might need to migrate your validator to a new server for reasons such as hardware failure or upgrading to better hardware. This guide will show you how to do this safely and avoid the risk of double signing.

## Sync the new node

:::danger Important
The first crucial step is to set up and **fully synchronize** your new node on the new server. To verify the sync status of your node, simply click [here](/validator-setup/node-run#check-sync-status)
:::


## Stop the old node

Once your new full node is fully synchronized, you can shut down the old node by running the following command:

```bash
sudo systemctl stop cosmovisor.service
```

Next, remove the firewall rule for port 26659 with this command:

```bash
sudo ufw delete allow 26659
```


## Update TMKMS Config

To update the TMKMS configuration on your VPS, follow these steps:

```bash
sudo nano tmkms/config/tmkms.toml
```

Locate the `[[validator]]` block in the file and update the following line with the new node's IP address:

```bash
addr = "tcp://<new_node_ip>:26659"
```


## Update the new node config

Open the `config.toml` file on your new node:

```bash
sudo nano .sentinelhub/config/config.toml
```

Find the line for `priv_validator_addr` and update it with the following:

```bash
priv_validator_laddr = "tcp://0.0.0.0:26659"
```

:::danger Important
Ensure the firewall on your new node allows traffic on port 26659 exclusively from the TMKMS machine. Use the following command:

```bash
sudo ufw allow from <tmkms_ip> to <new_node_ip> port 26659
```
:::

Replace `<tmkms_ip>` with the IP address of your TMKMS machine and `<new_node_ip>` with the IP address of your new node.


## Restart Services

Once you've updated both the config.toml and tmkms.toml files, restart the services in the following order:

**TMKMS**

On your TMKMS machine and run:

```bash
sudo systemctl restart tmkms.service
```

**New Node**

On your new Node and type:

```bash
sudo systemctl restart cosmovisor.service
```

:::info
After completing these steps, the priv_validator_key.json on TMKMS will be securely connected to your new full node, allowing it to operate as a Validator and resume signing blocks.
:::
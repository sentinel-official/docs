---
title: 2 - Linux Script
sidebar_position: 4
---

# Linux Script

A Linux script that provides a very easy way to spawn a Sentinel dVPN node via command line.
It can be found [here](https://github.com/hoon-node/Node-Setup/blob/main/Speedrun%20Any%25.md).

:::info NOTE
This script has been tested and run on Ubuntu 22.04 under `root` user
:::

## Execution

The initial step is to execute the script:

:::tip

```bash
curl https://raw.githubusercontent.com/hoon-node/Node-Setup/main/Speedrun.sh | bash
```
:::

Wou will be prompted to:

- Select a name for your node, referred to as the `Moniker`. The chosen name must be minimum 4 letters long.
- (Optional) import an `Existing Wallet`
- Choose a `Key Name`.

:::danger Important
If you created a new wallet, make sure to save your **`Mnemonic`** in a safe place. Also take not of the `sentnode address` and `wallet address`.
:::

After the installation is complete, you can modify the default minimum price.

## What does the script do?

- Get the official Docker installation script
- Install Docker
- Add user to Docker group
- Create /etc/docker/daemon.json with configuration
- Restart the Docker process
- Install iptables-persistent package (No recommended when asked to save IP rules)
- Enable NAT for the private Docker subnet on the host
- Install Git package
- Clone the GitHub repository
- Change the working directory and checkout to the latest tag
- Build the image
- Install openssl package
- Initialize the application configuration `${HOME}/.sentinelnode/config.toml`
- Initialize the WireGuard configuration `${HOME}/.sentinelnode/wireguard.toml`
- Initialize the WireGuard configuration `${HOME}/.sentinelnode/v2ray.toml`
- Create a self-signed TLS certificate
- Move the created TLS keys
- Ask you for your moniker and add it in the config.toml
- Check for your IP to add it to the remote_url in the config.toml
- Look for your API port and add it to the remote_url in the config.toml
- Look for your Wireguard port for the starting command
- Look for your v2ray port for the starting command
- Ask you for your keyname and create a wallet with it
- Give you an output with your seedphrase and (node)wallet
- Give you an output with your starting command
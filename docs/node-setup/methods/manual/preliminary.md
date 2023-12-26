---
title: Preliminary Operations
description: If you run a residential node, skip this section
sidebar_position: 1
---

# Preliminary Operations

This guide is designed for individuals with fundamental Linux proficiency who aspire to contribute to the Sentinel network and extend their bandwidth-sharing capabilities by manually establishing a dVPN node employing the Sentinel protocol. Each node operator has the autonomy to establish their own pricing for customers utilizing their bandwidth.

## Generate a SSH Key

To securely access your server, you will use an SSH connection

### Client Side

If you don't already have one, generate an SSH key pair on your client

```bash
ssh-keygen -t ed25519
```

Navigate to the SSH directory, and you should see both the public and private SSH keys

```bash
ls -l .ssh/

total 2
-rw-------. 1 user user  size Mar 12 18:08 id_ed25519
-rw-r--r--. 1 user user  size Mar 12 18:08 id_ed25519.pub
```

Add your public SSH key to the authorized_keys file on your VPS to enable secure SSH connections

```bash
ssh-copy-id -i ~/.ssh/id_ed25519.pub username@server_ip
```

### Server Side

Your public key will be visible on your server by typing

```bash
cat ~.ssh/authorized_keys
```

### Server Side

Update the list of available software packages

```bash
sudo apt update && sudo apt upgrade -y
```

## Setting up the Firewall

On your server machine, install the firewall

```bash
sudo apt-get install ufw
```

Allow Port 22

```bash
sudo ufw allow 22
```

Enable Firewall

```bash
sudo ufw enable
```
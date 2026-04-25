---
title: Server Setup
sidebar_label: "🖥️ Server Setup"
sidebar_position: 2
---

# Server Setup

Before installing Sentinel Hub, prepare the host. Skip this section if you've already set up a Linux server you maintain elsewhere.

## Requirements

### Home or Dedicated Server

To run a Full Node, the recommended minimum hardware requirements are as follows:
- CPU: 8+ cores with a clock speed of 3.5 GHz or higher
- RAM: At least 32GB DDR4
- Storage: 500GB NVMe in RAID 1 configuration
- Bandwidth: Unmetered connection with a speed of 1Gbps
- Operating System: Linux (Debian or Ubuntu preferred)

### Change Root Password

Assuming you are logged into your server as root, first of all, let's change the root password and add a new one.

```bash
passwd root
```

### Update the system

```bash
apt update && apt upgrade -y
```

Install sudo package

```bash
apt install sudo
```

## Create New User

Creating a new user is crucial because you should avoid managing your full node under the root user account.
Our user will be named `sentinel`, and you will be asked to create a new password for this user.

```bash
adduser sentinel
```

Grant sudo access to sentinel user. Open the sudoers file

```bash
nano /etc/sudoers
```

Add the following line

```bash title="/etc/sudoers"
sentinel ALL=(ALL:ALL) ALL
```

Switch to the newly created user

```bash
su - sentinel
```

## SSH

To securely access your server, you will use an SSH connection.

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

:::danger Important

Add your **public** SSH key to the `authorized_keys` file on your VPS to enable secure SSH connections. If you do not perform this step you will be locked out and unable to connect to your VPS as it will be refused!

```bash
ssh-copy-id -i ~/.ssh/id_ed25519.pub username@server_ip
```
:::


### Server Side

If importing the SSH key fails, check if the `.ssh/` directory exists on your server. If it doesn’t, create it along with the `authorized_keys` file by running the following commands:

```bash
mkdir -p ~/.ssh
chmod 700 ~/.ssh

touch ~/.ssh/authorized_keys
chmod 600 ~/.ssh/authorized_keys
```

After that, run the `ssh-copy-id` command again from your client.

To verify that your public key has been added on your server, run:

```bash
cat ~/.ssh/authorized_keys
```

For security purposes it is recommended to change the default port 22 to another one; let's say 2222.
Check if the port is not already being used by another service

```bash
grep 2222 /etc/services
```

On your server machine, install the firewall and openssh

```bash
sudo apt install ufw openssh-server
```

If the port is not already being used by another service, you can add it to your firewall

```bash
sudo ufw allow 2222/tcp
```

Enable the firewall

```bash
sudo ufw enable
```

Check firewall status to see if the port has been enabled

```bash
sudo ufw status
```

Open the SSH config file

```bash
sudo nano /etc/ssh/sshd_config
```

Set the following fields

```bash title="/etc/ssh/sshd_config"
# For security purposes we want to use a port number which is not the default one 22
Port 2222

# Better disable root login via SSH. If needed better to switch to root once
# connected with a normal user
PermitRootLogin  no

# Authentication with public key is preferred
PubkeyAuthentication  yes

# Better not to use password authentication
PasswordAuthentication  no
```

Reload and restart the ssh service

```bash
sudo systemctl daemon-reload
sudo systemctl enable ssh
sudo systemctl start ssh
sudo systemctl status ssh
```

Connect to your machine via SSH using the new port

```bash
ssh sentinel@machine_ip -p 2222
```

---
title: SSH
description: Setting up SSH for secure remote access and communication
sidebar_position: 3
---

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

If the import fails, ensure that the `.ssh/` folder exists on your server under the newly created user. If it does not exist, create it by doing `mkdir ~/.ssh`

### Server Side

Your public key will be now visible on your server by typing

```bash
cat ~/.ssh/authorized_keys
```

For security purposes it is recommended to change the default port 22 to another one; let's say 2222.
Check if the port is not already being used by another service

```bash
grep 2222 /etc/services
```

On your server machine, install the firewall

```bash
sudo apt-get install ufw
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

Restart the service

```bash
sudo service sshd restart
```

Connect to your machine via SSH using the new port

```bash
ssh sentinel@machine_ip -p 2222
```
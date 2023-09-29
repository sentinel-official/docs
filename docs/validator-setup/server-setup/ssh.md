---
title: SSH
sidebar_position: 3
---

You will need to connect to your server via SSH. Assuming it is already installed, the ideal thing to do for security purposes is to change the default port 22 to another one; let's say 2222

The first thing to do is to check if the port is not already being used by another service

```bash
grep 2222 /etc/services
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

```bash title=/etc/ssh/sshd_config
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
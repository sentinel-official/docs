---
title: Create New User
sidebar_position: 2
---

# Create New User

Create a new user (we use the name 'sentinel'): you will be asket to create a new password for the user

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
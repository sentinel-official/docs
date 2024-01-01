---
title: Create New User
description: It's essential to create a new user.
sidebar_position: 2
---

# Create New User

Creating a new user is crucial because you should avoid managing your validator under the root user account.
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
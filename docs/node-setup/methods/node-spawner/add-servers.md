---
title: Add Servers
description: How to add servers to the dashboard
sidebar_position: 2
---

# Add your Servers

You can utilize Node Spawner to integrate both local and remote servers, including those hosted on Virtual Private Servers (VPS), to enhance your convenience.

## Local

To begin, we should verify whether the SSH service is enabled.

```bash
sudo systemctl status sshd.service
```

If it is not enabled, we'll proceed to enable it.

```bash
sudo systemctl enable sshd.service
```
From the dashboard insert:
- Host: 127.0.0.1
- Username: `your-username`
- Password: `your-password`
- Port: 22

![](/img/node-spawner/dashboard-2.png)

Your node has been added to the node list. To access it, simply click on the icon to the right, which features a square box with an upward arrow. This action will open the installation and configuration screen for your convenience.

![](/img/node-spawner/dashboard-3.png)

## Remote

The process remains identical; the only distinction is that you need to input the IP address of your remote machine and establish an SSH connection, which, of course, must be enabled.
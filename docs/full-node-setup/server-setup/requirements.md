---
title: Requirements
description: All you need to prepare your server
sidebar_position: 1
---
## Home or Dedicated Server

To run a Full Node, the recommended minimum hardware requirements are as follows:
- CPU: 8+ cores with a clock speed of 3.5 GHz or higher
- RAM: At least 32GB DDR4
- Storage: 500GB NVMe in RAID 1 configuration
- Bandwidth: Unmetered connection with a speed of 1Gbps
- Operating System: Linux (Debian or Ubuntu preferred)

## Change Root Password

Assuming you are logged into your server as root, first of all, let's change the root password and add a new one.

```bash
passwd root
```

## Update the system

```bash
apt update && apt upgrade -y
```

Install sudo package

```bash
apt install sudo
```
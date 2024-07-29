---
title: Requirements
description: All you need to prepare your server
sidebar_position: 1
---
## Home or Dedicated Server

To run a Full Node, an ideal hardware configuration may be the one below
- CPU: 3.1+ GHz 6+ cores
- RAM: 32GB+ - DDR4
- Hard Drive(s): 2 x 1TB (SSD NVMe) RAID
- Bandwidth: Unmetered @ 1Gbps
- Operative System: Linux (preferably Debian or Ubuntu)

## Change Root Password

Assuming you are logged into your server as root, first of all, let's change the root password and add a new one.

```bash
passwd root
```

## Update the system

```bash
apt-get update && apt-get upgrade -y
```

Install sudo package

```bash
apt-get install sudo
```
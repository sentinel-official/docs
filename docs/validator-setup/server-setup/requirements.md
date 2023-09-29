---
title: Requirements
description: All you need to prepare your server
sidebar_position: 1
---
## Home or Dedicated Server

To run a Validator, an ideal hardware configuration may be the one below
- CPU: Intel Xeon E3-1220 v2 or better - 3.1 GHz - 4 core(s)
- RAM: 32GB - DDR3
- Hard Drive(s): 2x 1TB (SSD SATA) RAID
- Bandwidth: Unmetered @ 1Gbps
- Operative System: Linux (Debian)

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
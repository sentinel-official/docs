---
title: Overview
sidebar_position: 1
---

# Node Health Check

Operating a Sentinel node and profiting from its ecosystem requires adherence to specific guidelines to maintain node health and network decentralization. This guide details the health check process, optimization techniques, and solutions to common issues.

## Overview

To be added into the Subscription Plan and consequently be eligible to Node Revenue System, the node is required to pass the `Node Health Check`.
This check tests:
- the node endpoint
- the node configuration
- the node gigabyte price (less than 20 P2P)
- the node hourly price (15 P2P for datacenters and 31,5 P2P for residentials nodes, both expressed in udvpn)
- the node connectivity

:::note
Node Health Checks currently happen **ONCE** a day. So, if you have recently run a dVPN node, expect some waiting time before you receive any outcomes.
:::

By implementing this process, the Subscription Plan ensures a continuous assessment, allowing for the addition of new nodes and the removal of problematic ones that require corrective measures.

To check if your node has passed the health check, there are four ways to do it.

- [Node Dashboard](/dvpn-nodes/health-check/node-dashboard)
- [Busurnode](/dvpn-nodes/health-check/busurnode)
- [Suchnode](/dvpn-nodes/health-check/suchnode)
- [Sentinel API](/dvpn-nodes/health-check/sentinel-api)
- [Planwizard API](/dvpn-nodes/health-check/plan-wizard)

## Node Compliance Rules

Nodes must adhere to specific compliance rules to ensure fair distribution and maintain a balanced network. These rules regulate the number of nodes within subnets, ASNs, and cities to avoid saturation and promote decentralization.

**Subnet Limits:**

- A maximum of 5 IPs per /24 subnet
- Residential nodes are exempt

**ASN Limits:**

- Nodes must belong to underutilized ASNs
- Overutilized ASNs may impose stricter limits

**City Limits:**

- A maximum of 50 nodes per city
- Overcrowding excludes nodes from subscription plans.

:::tip
Use tools like Planwizard to verify subnets and ASNs.
:::

## Passing Health Check

Enhance your node’s chances of passing the health check by following these recommendations:

### Provider Choice

It's recommended to avoid using widely known cloud providers like AWS, GCP, Azure, Vultr, Linode, Oracle, Alibaba, ColoCrossing, Digital Ocean, and other highly-saturated providers, as they may not be whitelisted for dVPN nodes.

### Kernel Tweaks

Apply these kernel tweaks to improve connection handling and increase network and file limits. This is particularly helpful for nodes running on limited VM resources.

Add the following to `/etc/sysctl.conf` and apply with `sysctl -p`

```bash
net.core.default_qdisc=fq
net.ipv4.tcp_congestion_control=bbr
net.core.somaxconn=8192
net.ipv4.ip_local_port_range=1024 65535
net.core.netdev_max_backlog=2000
net.ipv4.tcp_max_syn_backlog=2048

fs.inotify.max_user_instances=2048
fs.file-max=999999999
```

### Resource Allocation

If running other Docker containers, prioritize your node’s CPU allocation by setting `--cpu-weight=2048` or higher.

## Troubleshooting Health Check Issues

Common problems for Healch Check issues con be various:

### High Load

Check if the load exceeds CPU count:

```bash
[ $(cut -d '.' -f 1 /proc/loadavg) -gt $(nproc) ] && echo "high" || echo "low"
```

Address this by optimizing resources or upgrading hardware.

### RPC Configuration

Use load-balanced RPC servers for better node health:

```bash
rpc_addresses = "https://rpc.sentineldao.com:443,https://rpc-sentinel.busurnode.com:443,https://sentinel-rpc.publicnode.com:443"
```

### Kernel Upgrades

Upgrade to a 6.1.x kernel on Debian/Ubuntu for enhanced stability. You can use the Ubuntu Mainline Kernel installer for this.


## Workarounds for Malicious Traffic

To protect your node from malicious traffic and ensure optimal performance, implement the following strategies.

### Secure DNS

Configure your Docker container to use DNS servers that block malicious traffic:

```bash
--dns="1.1.1.2" --dns="9.9.9.11"
```

### P2P Traffic Blocking

Use iptables to block unencrypted traffic. Example rules to block torrent discovery:

```bash
-m string --algo bm --string "announce.php?passkey="
-m string --algo bm --string ".torrent"
```

Implement a strict `"allow specific ports, drop the rest"` firewall policy for additional control.
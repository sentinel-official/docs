---
title: (Optional) Enable IPv6
description: Enable dVPN connection from IPv6
sidebar_position: 6
---

Although the backend connection (outbound) will still rely on IPv4, the system will now also support IPv6 entrances. This means node runners can offer VPN access to users with IPv6 addresses as well

## Requirements

- Internet connection with both a public IPv4 address and a public IPv6 address.
- Subdomain hosting capable of handling `A` and `AAAA` records.


## Configuration

To configure your node to allow IPv6 connections, follow these steps:

###  Add DNS Records on your Domain

Check and copy your public IPv6 address by typing the following command on a terminal

```bash
curl -6 https://ifconfig.co
```

Assuming you have your own domain manager, let's say **NameCheap**, you will need to **add two identical DNS records** for subdomains.

- A Record to your IPv4
- AAAA Record to your IPv6

To accomplish that, go on your Dashboard and click on your domain `Manage` button.

Click on `Advanced DNS` and under `Hosts Record`, click on `ADD NEW RECORD`.

**A Record**

- Under `Type` select `A Record`
- Under `Host` type `your_subdomain_name`
- Under `Value` type `your Node IP address` (i.e. 123.456.789.012)

**AAAA Record**

Repeat the procedure for adding the second record:added node ipv6
- Under `Type` select `AAAA Record`
- Under `Host` type `your_subdomain_name`
- Under `Value` type `your Node IPv6 address` (i.e. 2606:4700:4700::1111)

:::tip
Ensure that the `Host` fields for both the A Record and AAAA Record are identical.
:::

:::note
If you're managing your DNS with Cloudflare, remember to either turn off the proxy feature or set it to `DNS Only`.
:::


### Edit Node Config File

While setting up the node config.toml file, make sure to:
- Include your node's subdomain in the `remote_url` field.
- Add at least one RPC that supports IPv6. Current RPCs that support IPv6 are: 
  - https://rpc-sentinel.busurnode.com
  - https://sentinel-rpc.publicnode.com
  - https://rpc-sentinel.whispernode.com

Once the node is up and running, you can try accessing it by typing on your terminal (ensure you have an IPv6 connection):

```bash
http://<your_ipv6>:<remote_port>/status
```

:::note
Your dVPN node is now ready to accept inbound IPv6 connections. Keep in mind that although many RPC (Remote Procedure Call) services and some whitelabel apps are accessible via IPv4, it might take a while for them to fully support IPv6. This involves updating their API or backend endpoints.
:::
---
title: Overview
description: How to expose the RPC
sidebar_position: 1
---

# RPC Exposure

:::danger Warning
Exposing your Validator Node's RPC is not recommended, as it can introduce security risks. Instead, it is advisable to operate a dedicated node exclusively for RPC access.
:::

Before going through this module, I want you to be aware that exposing your Validator Node RPC is not safe and can expose it to risks, such as a DoS attack. It would be better to have another dedicated full node to use solely for RPC.

However, exposing your RPC (Remote Procedure Call) interface offers several advantages, including decentralization, developer access, blockchain monitoring, and integration with external services. To do so, you need to follow three steps in order: Register a Domain name Install Certbot Install NGINX to be used as reverse proxy server Add RPC to ChainRegistry
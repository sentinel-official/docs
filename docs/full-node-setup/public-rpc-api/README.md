---
title: Set Public RPC/API
sidebar_position: 1
---

# Set Public RPC/API

:::danger Warning
If you intend to validate, it is not recommended to make your RPC/API public and accessible to everyone, as it could lead to security issues, like a DDOS attack. Instead, it's better to set up a separate Full Node just for RPC/API access..
:::

If you want to proceed, you should follow these steps in the order:
- [RPC Port & API Config](/full-node-setup/public-rpc-api/config)
- [Register a Domain name](/full-node-setup/public-rpc-api/domain)
- [Install NGINX](/full-node-setup/public-rpc-api/nginx) to be used as reverse proxy server
- [Install Certbot](/full-node-setup/public-rpc-api/certbot)
- [Add RPC to ChainRegistry](/full-node-setup/public-rpc-api/chain-registry)
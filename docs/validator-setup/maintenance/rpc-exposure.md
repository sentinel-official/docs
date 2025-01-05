---
title: RPC Exposure
sidebar_position: 5
---

# RPC Exposure

:::danger Warning
It's not a good idea to make your Validator Node's RPC accessible to everyone because it could lead to security issues, like a DDOS attack. Instead, it's better to set up a separate [Full Node](/full-node-setup) just for RPC/API access.
:::

If you want to proceed, you should follow these steps in the order, as explained in the [Full Node guide](/full-node-setup):
- [Register a Domain name](/full-node-setup/domain)
- [Install NGINX](/full-node-setup/nginx) to be used as reverse proxy server
- [Install Certbot](/full-node-setup/certbot)
- [Add RPC to ChainRegistry](/full-node-setup/chain-registry)
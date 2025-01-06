---
title: Register a Domain Name
sidebar_position: 3
---

# Register a Domain Name

First of all, you need to register a domain. It is recommended to prioritize privacy, so consider paying with Bitcoin and using services that accept it, such a [Njalla](https://njal.la/) or [NameCheap](https://www.namecheap.com/). We will use **NameCheap** for this guide.

Once you have purchased your domain, you will need to **create two DNS records** for subdomains, typically `rpc.sentinel.mynodename.com` and `api.sentinel.mynodename.com`

Go on your Dashboard and click on your domain 'Manage' button

Click on `Advanced DNS` and under `Hosts Record`, click on `ADD NEW RECORD`.
- Under `Type` select `A RECORD`
- Under `Host` type `rpc.sentinel`
- Under `Value` your Full Node IP address

Repeat the procedure for the subdomain `api.sentinel` and save the changes.
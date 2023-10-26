---
title: Register a Domain Name
description: To get started, register a domain name.
sidebar_position: 2
---

# Register a Domain Name

First of all, you need to register a domain. It is recommended to prioritize privacy, so consider paying with Bitcoin and using services that accept it, such a [Njalla](https://njal.la/) or [NameCheap](https://www.namecheap.com/). We will use **NameCheap** for this guide.

Once you have purchased your domain, you will need to create a DNS record for a subdomain, typically `rpc.sentinel.myvalidator.com` or `rpc.myvalidator.com`

Go on your Dashboard and click on your domain 'Manage' button

Click on `Advanced DNS` and under `Hosts Record`, click on `ADD NEW RECORD`.
- Under `Type` select `A RECORD`
- Under `Host` type `rpc.sentinel` or just `rpc`
- Under `Value` your Full Node/Validator IP address
---
title: SSH into the Container
description: Access your container
sidebar_position: 3
---

# SSH into the Container

:::warning
Execute this step only if you have selected the template that includes SSH access.
:::

You might prefer accessing your container via SSH, as the default shell may not provide a satisfactory user experience. To accomplish this, we will need the correct **provider name** and **port** information for the SSH connection.

On `LEASE` tab make note of the forwarded port 22; in this case, it is set to **30225**.

![Check IP & Port](/img/akash/checks.png)

Click on the **provider** and retrieve the full name, such as `provider.hurricane.akash.pub`.

![Provider](/img/akash/provider.png)

Now open a terminal and type

```bash
ssh root@provider.hurricane.akash.pub -p 30225
```

Now you have SSHed into your container!

If you wat to see your node logs in real time you can type this command

```bash
tail -n 1000000 -f /LOG
```
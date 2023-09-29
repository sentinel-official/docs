---
title: Monitoring with Uptime Kuma
description: How to monitor your running node
sidebar_position: 7
---

# Monitoring with Uptime Kuma

To ensure constant monitoring of your node to prevent any downtime, we highly recommend using [Uptime Kuma](https://uptime.kuma.pet/). This tool can be self-hosted using a Docker container by executing the following command

```bash
docker run -d --restart=always -p 3001:3001 -v uptime-kuma:/app/data --name uptime-kuma louislam/uptime-kuma:1
```

Once the container has started and appears healthy, you can access Uptime Kuma through HTTP

```bash
http://localhost:3001
```

Now, you can click on `Add new monitor`:
- on Monitor type select `TCP Port`
- in the Hostname field, add your node's IP address
- in the Port field, add the TCP port (on this guide, the port is `12345`)

In Notifications, you can select your favorite notification type. Let's cover an example using Telegram.

Go to [BotFather](https://t.me/BotFather.), create your alert bot and take note of the generated token

Go to [ChatIDrobot](https://t.me/chatIDrobot) and get your chat_id

Write a "test message on your bot"

Click on the link to check the api

Finally click on Test to check if the Telegram alert system works

Then save.

Contratulations, your bot is now active!
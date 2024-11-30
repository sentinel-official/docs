---
title: Node Monitor Telegram Bot
sidebar_position: 7
---

# Node Monitor Telegram Bot

Sentinel Node Monitor is a free Telegram bot designed for Sentinel dVPN Node operators to monitor node information and status, as well as to obtain real-time insights into network usage.

It's a tool built by the community, for the community, with every development aligned with the requests and feedback of Sentinel node operators. The bot is currently operational and accessible in an open beta phase. We invite all community members to participate in testing the features and stability of the tool.


![](/img/nodes/tools/node-monitor-bot-logo.png)


## Bot Configuration

Setting up the Sentinel Node Monitor is a breeze with just a few simple steps:

- Add Sentinel Node Monitor to Telegram.
- Type the command `/start` to initiate the Bot.
- Type the command `/help` to access the complete list of available commands.

Upon first launch, your node list will be empty, allowing you to add and manage as many nodes as you wish.

- Use the command `/add <sentnode>` to add a node from the list.
- Use the command `/remove <sentnode>` to delete a node from the list.

Once you've added all the desired nodes to the list, you can view it in its entirety. Each added sentnode will be assigned a number, starting from 1. You can utilize these numbers to retrieve information from specific nodes.

- Type the command /list to view your node list.
- Type the command /clearall to remove all nodes from the list.
- Type the command `/info <sentnode>` or `/info <number in the list>` to read information about a specific node.
- Type the command /infoall to read information about all nodes in the node list.

Now, you're ready to start monitoring the health check status. This way, if any of your nodes were to fail the health check, you'll automatically receive an alert notification from the Bot.

- Type the command `/monitor` to start monitoring the health check status.
- Type the command `/stop_monitor` to halt the health check status monitoring.

![](/img/nodes/tools/node-monitor-bot-screens.png)


## Network Statistics

The Sentinel Node Monitor not only monitors information about each node and its status but also provides insightful real-time statistics on network usage.

Type the command `/top_peers` to view the list of Sentinel nodes with the most connected peers.

Type the command `/total_peers` to see the total number of peers connected to a node.

Type the command `/online_nodes` to see the total number of active nodes.

The Sentinel Node Monitor is a continuously evolving tool developed and maintained by Bitveil. To support Bitveil work, you are encourgaed to delegate a portion of your DVPN to their [Validator](https://explorer.sentinel.co/sentinel/validator/sentvaloper1xmc6yzr95v0w5pcx7k8qx97w69rhc4caclfy9h)!
---
title: Earnings
sidebar_label: "💰 Earnings"
sidebar_position: 5
---

# Node Earnings

Operating a dVPN node incurs expenses for the owner, including the acquisition or rental costs of hardware and electricity bills. In exchange, node hosts are paid through the **Node Revenue System**, in operation since September 2023. You can have a look at the current Node Revenue chart on [Sentinel Stats](https://stats.sentinel.co).

## How the Node Revenue System works

dVPN apps built on the Sentinel protocol, such as [Meile dVPN and Independent dVPN](/get-started/apps), pay node hosts for the bandwidth their users consume. This makes **Sentinel a revenue generating ecosystem**. Payments reach a node in two ways:

- **Subscription plans**: the creator of a plan (a dVPN app owner) selects nodes from the public list and locks tokens against each node added into the plan. Payment from these tokens is deducted for every hour of successful uptime, so a node included in a plan earns a predictable hourly rate.
- **Pay-as-you-go**: users pay a node host directly, per gigabyte or per hour, at the prices the host has set.

Node rewards are paid out every hour. Of every bandwidth payment, **80% goes to the node host** and **20% is distributed to P2P stakers** through [revenue sharing](/p2p-coin/earn).

To be added into a subscription plan, a node must pass the [Health Check](/dvpn-nodes/health-check/overview). Plans are reassessed continuously: new healthy nodes are added, and problematic ones are removed until fixed.

## Pricing

Node hosts set their own per-gigabyte and hourly prices in the [node configuration](/dvpn-nodes/setup/manual/node-config). Each price is defined as a USD base value together with an equivalent token amount. The node keeps the token quote up to date using a price oracle (CoinGecko or Osmosis) and publishes it on-chain, so pricing follows the market rate of P2P instead of a fixed token amount.

This creates a market for using a dVPN and strikes a balance between the quality and performance of a node and the price set by the owner. Setting the price too high will get you fewer customers, and setting it too low will cut into your profits.

## The Revenues Explained

When reading on-chain revenue numbers, keep in mind that payments directed towards nodes are intended to originate solely from the dVPN apps. At present these payments are still substantially subsidized, particularly as usage grows and in-app advertisements are integrated.

Revenue, in essence, is compensation for services rendered, and the calculation reflects exactly that. It is not a giveaway or a mere incentive; it is monetary compensation paid to node hosts for the bandwidth they provide.

It is also `network revenue` rather than organizational revenue. Consider Uber's strategy of incentivizing drivers to build supply ahead of demand: a chart of total driver earnings would include the value of those incentives, because they are payments made for services rendered, whether subsidized or not. The same reasoning applies to Sentinel node revenue.

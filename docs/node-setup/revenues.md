---
title: Node Revenue System
sidebar_position: 6
---

# Node Revenue System

[Operating a dVPN node](/node-setup) incurs expenses for the owner, including the acquisition or rental costs of hardware and electricity bills. In exchange, a novel reward system, known as the Node Revenue System, has been in operation since September 2023. You can have a look at the current Node Revenue chart on [Sentinel Stats](https://stats.sentinel.co)

## What is dVPN Node Revenue System?

With this system, white-label applications like Solar VPN, Meile dVPN, Bagimsiz VPN, Based VPN, and others will utilize the innovative on-chain `Subscription Plan`. These applications will have the ability to choose nodes from the public list, which will then be added into the subscription.
This Subscription Plan will be shared by the white-label applications and after sufficient optimization and testing, white-label applications will begin to create their own individual subscription plans overtime as their bandwidth usage increases exponentially from here on out.

This makes **Sentinel a revenue generating ecosystem**.

Nodes will initially receive $7.5 per month in dVPN which will be paid out every hour. In the future dVPN/USD price calculation will be readjusted every 1 hour using an on-chain oracle.

This will create a market for using a dVPN and strike a balance between the quality/performance of a node vs the price set by the owner. Setting the price too high will get you less customers and setting it too low will cut some of your profits.

## What does getting added into a Subscription Plan mean? 

Nodes added into a time-based subscription plan will be paid based on monthly flat rates. The creator of the subscription plan (dVPN app owner) will lock tokens with each node added into the plan. Payment from these tokens is deducted every 1 hour of successful up-time

This subscription plan will be shared by multiple white-label applications and after sufficient optimization and testing, white-label applications will begin to create their own individual subscription plans overtime as their bandwidth usage increases exponentially from here on out.

## Node Health Check as Requirement

To be added into the Subscription Plan and consequently be eligible to Node Revenue System, the node is required to pass the `Node Health Check`.
This check occurs multiple times a day and will test:
- the node endpoint
- the node configuration
- the node connectivity

By implementing this process, the Subscription Plan ensures a continuous assessment, allowing for the addition of new nodes and the removal of problematic ones that require corrective measures.

Currently, there is an accessible [online spreadsheet](https://docs.google.com/spreadsheets/d/1rJgW_xjmvtEWjn6eMpkrlXtdpxy-TRPRpxRAHCVE_vs/edit?pli=1#gid=0) delineating nodes that passed the health check and those that did not meet the criteria. In the upcoming `Node Dashboard`, each node will feature an indicator on the page, clearly indicating whether it has successfully passed the health check or not. Furthermore, an alert system will be implemented to promptly notify node operators in the event that their node fails a health check, providing them with timely and actionable information.
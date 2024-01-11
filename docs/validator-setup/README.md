---
title: Overview
description: Intended for anyone who wishes to contribute to the Sentinel Network by participating in the validation of transactions and blocks.
sidebar_position: 1
---

# Sentinel dVPN Validator Setup Guide

This guide is intended for anyone who wishes to contribute to the Sentinel Network by participating in the validation of transactions and blocks.

Validators play a crucial role in maintaining the security and integrity of a network by verifying the authenticity of transactions and enforcing network rules and protocols. To participate in the network, validators are required to stake a certain amount of DVPN coins. Incentivized by the receipt of DVPN coins as rewards, validators are motivated to act honestly and ensure the network's security.

To operate as a Sentinel dVPN Validator, you need to set up a full node and create the validator transaction.

A Sentinel dVPN Validator can be deployed on various platforms, including:
- Dedicated server (as explained in this guide)
- Your home setup
- The Akash Network

To set up a Validator successfully, you should possess a moderate level of proficiency in Linux and networking. This guide has been designed to assist users in comprehending all the necessary steps required for setting up a full node and becoming a Validator.

Once you've become a Validator, it is strongly recommended to explore the following sub-modules to enhance both security and contribute to greater network decentralization.
- [TMKMS Security](/validator-setup/category/tmkms-security): protect your private validator key!
- [Node Monitoring](/node-monitoring): make sure everything works properly on your Validator machine!
- [Autorestake](/validator-setup/category/restake-app-setup): a guide to join Restake.app and enable your Validator for autocompound
- [RPC Exposure](/validator-setup/category/rpc-exposure): enable remote execution of functions and access to node services

### Voting power

In order to become an active Sentinel validator you’ll need to accumulate enough voting power. Voting power is the metric that decides if a technical valid validator is active or not. You will receive voting power by delegating DVPN to your validator or have other people delegate DVPN to your validator. 1 DVPN equals 1 voting power. How much voting power is required to be come active can be seen on the [blockchain explorer](https://www.mintscan.io/sentinel/validators). Sort on voting power and check what the lowest amount is. You’ll need to require more voting power than that in order to become an active validator, sign transactions and get rewarded for it.

### dVPN node

If running a Sentinel validator seems to be unfeasible for you, you can also setup a dVPN node instead. A dVPN node is not bound to a minimum amount of voting power. It will still support the Sentinel network and can be a source of income as well. Read more about it in the [dVPN node setup](/node-setup) section.
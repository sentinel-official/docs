---
title: TMKMS
description: An essential security measure when running your validator
sidebar_position: 3
---

# TMKMS

The Tendermint Key Management System (TMKMS) is essential for any validator, whether currently part of the active validator set or aspiring to join it. This application effectively minimizes the risk of double-signing and ensures the high availability of validator keys, all while securely storing these keys on a separate physical host.

:::danger
Although TMKMS can technically operate on the same machine as the validator, it is strongly advised to utilize a separate host for optimal security and performance.
:::

## How to set up TMKMS

:::tip How to
We have created a comprehensive step-by-step guide for setting up TMKMS on your validator, which can be accessed **[here](/validator-setup/category/tmkms-security)**
:::
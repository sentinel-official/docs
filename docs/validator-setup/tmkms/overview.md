---
title: Overview
description: An essential security measure when running your validator
sidebar_position: 1
---

# TMKMS Security

The Tendermint Key Management System (or TMKMS) should be used by any validator currently or intending to be in the active validator set. This application mitigates the risk of double-signing and provides high-availability to validator keys while keeping these keys on a separate physical host. While TMKMS can be used on the same machine as the validator, it is recommended to be on a separate host. 
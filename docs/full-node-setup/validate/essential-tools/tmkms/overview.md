---
title: Overview & Requirements
description: An essential security measure when running your validator
sidebar_position: 1
---

# TMKMS Security

The purpose of TMKMS (Tendermint Key Management System) is to enhance the security of the private validator key used for signing blocks and to prevent double-signing. It should be installed on a separate host, such as a small VPS (Virtual Private Server).

TMKMS functions as a remote signer. When the validator needs to sign a block, it sends a signing request to TMKMS. TMKMS then signs the block using the private key and returns the signature to the validator.

Benefits:

- Isolate the Private Key: By moving the private validator key to a separate server (the VPS running TMKMS), the attack surface is reduced. The main validator node, which handles block production and network communication, no longer has direct access to the private key. This means that even if the main validator node is compromised, the private key remains secure on the TMKMS server.

- Prevent Double-Signing: Double-signing occurs when a validator signs two different blocks at the same height and round, leading to penalties such as slashing (loss of staked tokens) and tombstoning (permanent exclusion from the network). TMKMS helps prevent this by securely managing the private key.

## Requirements

An ideal hardware configuration for the small VPS for the TMKMS may be the one below
- vCPU: 2
- RAM: 2GB
- Hard Drive: 10GB SSD
- Operative System: Linux (preferably Debian or Ubuntu)
- Bandwidth: Unmetered
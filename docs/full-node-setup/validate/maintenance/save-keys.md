---
title: Save Your Keys!
sidebar_position: 1
---

# Save Your Keys!

:::danger
Once you've set up your validator, the first and most important step is to ensure you create a backup of your keys and store them securely without sharing them with anyone.
:::

There are two primary keys you need to back up:
- The `mnemonic` of your validator wallet: If this is lost, you won't be able to perform crucial actions for your validator, such as claiming commissions or voting. If it's leaked, someone else could take actions on behalf of your validator, such as withdrawing your commission and transferring it to a centralized exchange (CEX) or elsewhere.
- The `priv_validator_key.json` (located in ~/.sentinelhub/config): losing this key means you won't be able to sign blocks, effectively halting your validator's operation. If this key is leaked, someone could set up a node using the same key, potentially resulting in your validator double-signing.
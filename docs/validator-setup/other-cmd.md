---
title: Other Commands
description: A list explaining some useful commands along with their outputs.
sidebar_position: 8
---

# Other Commands

A list explaining some useful commands along with their outputs.

## Slashing params list

```bash
sentinelhub q slashing params
```

The output looks like

```bash
downtime_jail_duration: 600s
min_signed_per_window: "0.050000000000000000"
signed_blocks_window: "10000"
slash_fraction_double_sign: "0.050000000000000000"
slash_fraction_downtime: "0.000100000000000000"
```

Basically it explain the rules not to get jailed
- There is a window of 10k blocks (signed_blocks_window).
- Any validator needs to sign 5% (min_signed_per_window) of the blocks in this window (i.e., 500 blocks within any 10k blocks window).
- If the percentage of signed blocks falls below 5, the validator is jailed for downtime.
- If a validator is jailed for downtime, they are slashed 0.01% (slash_fraction_downtime) of their stake and can be unjailed after 10 minutes (downtime_jail_duration).
- If a validator is jailed for a double sign, they are slashed 5% (slash_fraction_double_sign) and cannot unjail ever.

## Signing result

```bash
sentinelhub q slashing signing-info $(sentinelhub tendermint show-validator)
```

You will get something like:

```bash
address: sentvalcons1xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
index_offset: "11513"
jailed_until: "1970-01-01T00:00:00Z" #(if different from this, means you are jailed)
missed_blocks_counter: "5" #how many blocks you skipped within the 10k blocks window
start_height: "9982764"
tombstoned: false #if true, means you double signed
```

Please note that if you use TMKMS with our priv_validator_key.json (as described in [this guide](https://p4privacy.gitbook.io/tmkms-guide-for-sentinel-validator/)) on a different machine and have subsequently removed it from your validator machine, the above command will not work.

## Info about your validator and synchronization

```bash
curl localhost:26657/status
```

When you receive the output, check the following fields:

```bash
sync_info.catching_up #if true, it means your node is not synced and therefore it will not sign blocks until it catches up with the rest of the chain
sync_info.latest_block_time #the value should be close to the current time. If it's not, that means your node is also out of sync and won't be able to sign blocks (or the chain has halted).
validator_info.voting_power #If the value is 0, this node is not an active validator, either because you are not in the active set, or because you are jailed, or because the priv_validator_key does not match the validator key
```
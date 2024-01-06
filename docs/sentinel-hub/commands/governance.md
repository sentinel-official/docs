---
title: Governance
sidebar_position: 7
---

# Governance Commands

The governance commands empower a validator to initiate, cast votes, and contribute deposits to a proposal.

## Deposit on a Proposal

To initiate a proposal deposit, use the following command:

```bash
sentinelhub tx gov deposit 46
  500000000000udvpn \
  --from <validator_key_name> \
  --chain-id sentinelhub-2 \
  --gas-prices=0.5udvpn \
  --gas=300000
```

Make sure to replace `<validator_key_name>` with the actual validator key name before executing the command.

## Vote on a Proposal

To cast your vote on a proposal, use the following command:

```bash
sentinelhub tx gov vote <proposal_number> \
    <yes_or_no> \
    --from=<your_keyname> \
    --chain-id=sentinelhub-2 \
    --node https://rpc.sentinel.co:443 \
    --gas-prices=0.5udvpn \
    --gas=300000 \
```

Ensure you replace `<proposal_number>` with the actual proposal number and `<yes_or_no`> with your vote (either "yes" or "no"). Additionally, specify your key name in place of `<your_keyname>`.

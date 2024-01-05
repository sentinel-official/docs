---
title: Governance
sidebar_position: 7
---

# Governance Commands

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
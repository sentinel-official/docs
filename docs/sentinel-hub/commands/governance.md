---
title: Governance
sidebar_position: 7
---

# Governance Commands

The governance commands empower a validator to initiate, cast votes, and contribute deposits to a proposal.

## Create a Proposal

To create a proposal, two methods are available:

### Via Sentinel Hub Command

Type the following command

```bash
sentinelhub tx gov submit-proposal <proposal_number>
  --title="My Proposal" \
  --description="My proposal description" \
  --type="Text" \
  --deposit="<deposit_amount>udvpn" \
  --from <validator_key_name> \
  --chain-id sentinelhub-2 \
  --gas-prices=0.5udvpn \
  --gas=300000
```

Feel free to customize the title, description, type, deposit amount, and other parameters based on your specific proposal details.

### Via JSON File

Create the JSON file by using the command `sudo nano proposal.json` and then input the following content:

<details>
<summary>proposal.json</summary>
<p>

```json
{
  "title": "My Proposal",
  "description": "My proposal Description",
  "type": "Text",
  "deposit": "<proposal_amount>udvpn"
}
```

</p>
</details>

To create the proposal now type the following command:

```bash
sentinelhub tx gov submit-proposal \
  --proposal="path/to/proposal.json" \
  --from <validator_key_name> \
  --chain-id sentinelhub-2 \
  --gas-prices=0.5udvpn \
  --gas=300000
```

## Deposit on a Proposal

To initiate a proposal deposit, use the following command:

```bash
sentinelhub tx gov deposit <proposal_number> \
  <deposit_amount>udvpn \
  --from <validator_key_name> \
  --chain-id sentinelhub-2 \
  --gas-prices=0.5udvpn \
  --gas=300000
```

Make sure to replace `<validator_key_name>` with the actual validator key name and `<proposal_number>` with the actual proposal number before executing the command.

## Vote on a Proposal

To cast your vote on a proposal, use the following command:

```bash
sentinelhub tx gov vote <proposal_number> \
    <yes_or_no> \
    --from=<your_keyname> \
    --chain-id=sentinelhub-2 \
    --node https://rpc.sentinel.co:443 \
    --gas-prices=0.5udvpn \
    --gas=300000
```

Ensure you replace `<proposal_number>` with the actual proposal number and `<yes_or_no`> with your vote (either "yes" or "no"). Additionally, specify your key name in place of `<your_keyname>`.

---
title: Staking
sidebar_position: 3
---

# Staking

With Sentinel Hub, you can execute various operations to engage with staking.


## Delegate

To delegate to another validator address type the following command in your terminal:

```bash
sentinelhub tx staking delegate <sentvaloper_validator_address> \
    <amount>udvpn \
    --from=<your_keyname> \
    --chain-id=sentinelhub-2 \
    --node https://rpc.sentinel.co:443 \
    --gas-prices=0.5udvpn \
    --gas=300000
```

Make sure to replace `<sentvaloper_validator_address>`, `<amount>`, and `<your_keyname>` with the appropriate values for your delegation.


## Redelegate

To redelegate to another validator address type the following command in your terminal:

```bash
sentinelhub tx staking redelegate \
    <source_validator_address> \
    <destination_validator_address> \
    <amount>udvpn \
    --from=<your_keyname> \
    --chain-id=sentinelhub-2 \
    --node https://rpc.sentinel.co:443 \
    --gas-prices=0.5udvpn \
    --gas=300000
```

Make sure to replace `<source_validator_address>`,  `<destination_validator_address>`, `<amount>`, and `<your_keyname>` with the appropriate values for your delegation.


## Unbond

To unbond your staked amount from a validator type on your terminal

```bash
sentinelhub tx staking unbond <sentvaloper_validator_address> \
    <amount>udvpn \
    --from=<delegator_address> \
    --chain-id=sentinelhub-2 \
    --node https://rpc.sentinel.co:443 \
    --gas-prices=0.5udvpn \
    --gas=300000
```

This command will unbond the specified `<amount>` of UDVPN tokens from the validator identified by `<sentvaloper_validator_address>`. Ensure that you replace `<your_keyname>` with the actual name of your key.


## Withdraw Staking Rewards

To claim both your staking rewards and commissions, execute the following command in your terminal:

```bash
sentinelhub tx distribution withdraw-rewards <sentvaloper_validator_address> \
    --from=<your_keyname> \
    --commission \
    --chain-id=sentinelhub-2 \
    --node https://rpc.sentinel.co:443 \
    --gas-prices=0.5udvpn \
    --gas=300000
```

Replace `<sentvaloper_validator_address>` with the actual validator address you staked with, and `<your_keyname>` with the name of your key. Adjust the gas prices and limit according to your preference and network conditions.


## Set Withdrawal Address

To set an alternative address for withdrawing your rewards, use the following command:

```bash
sentinelhub tx distribution set-withdraw-addr <withdrawal_address> \
    --from=<your_keyname> \
    --chain-id=sentinelhub-2 \
    --node https://rpc.sentinel.co:443 \
    --gas-prices=0.5udvpn \
    --gas=300000
```

Make sure to replace `<withdrawal_address>` with the actual address you want to set as your withdrawal destination and `<your_keyname>` with your specific key name. Adjust other parameters as needed.


## Create Validator

Create a new validator and initialize it with a self-delegation.

```bash
sentinelhub tx staking create-validator \
    --broadcast-mode=block \
    --min-self-delegation=1 \
    --amount=<self_delegation_amount>udvpn \
    --commission-max-change-rate=0.01 \
    --commission-max-rate=0.2 \
    --commission-rate=0.05 \
    --moniker="<validator_name>" \
    --pubkey="<full_node_public_key>" \
    --from="<validator_key_name>" \
    --chain-id=sentinelhub-2 \
    --gas=300000 \
    --gas-prices=0.5udvpn
```

If you're currently in the validator creation process, refer to [this page](/full-node-setup/become-validator) in the full node guide for further assistance.


## Edit Validator

The Edit-Validator transaction lets you update different aspects of your validator, like the description, website, security contact, commissions, PGP identity, and moniker.

```bash
sentinelhub tx staking edit-validator \
    --identity=<your_pgp_key_with_no_spaces> \
    --website="<https://your_new_website.com>" \
    --security-contact="<email_address>" \
    --details="<new_validator_description>"
    --moniker="<new_validator_moniker>" \
    --commission-rate=<new_commission_rate> \
    --from="<validator_key_name>" \
    --chain-id=sentinelhub-2 \
    --gas-prices=0.5udvpn \
    --gas=300000
```

If you want to update your validator's `commission-rate`, ensure the new value falls within the limits set by the `commission-max-change-rate` and `commission-max-rate` parameters defined when the validator was created.

Please note that in this scenario, the flag `--node` is not utilized, assuming you are executing this command directly from your validator machine.


## Unjail Validator

The Unjail Validator transaction allows you to release your validator from a jailed state and restore it to its usual operational status.

```bash
sentinelhub tx slashing unjail \
    --from="<validator_key_name>" \
    --chain-id=sentinelhub-2
```
---
sidebar_position: 1
---

# Validate the Sentinel Blockchain

Once your full node is set up and running, you may choose to become a validator on the blockchain and take part in validating transactions and blocks. To become a validator, all you need to do is create a validator transaction.

Once you've [become a validator](/full-node-setup/validate/become-validator), it is strongly recommended to setup the following tools:

- [TMKMS](/full-node-setup/category/tmkms): protect your private validator key with the Tendermint Key Managemet System
- [Cosmovisor](/full-node-setup/upgrades/cosmovisor): a tool that assists in the smooth and safe upgrade of the blockchain software
- [REStake App](/full-node-setup/category/restake-app): a guide to join Restake.app and enable your Validator for autocompound


### Voting power

In order to become an active Sentinel validator you’ll need to accumulate enough voting power. Voting power is the metric that decides if a technical valid validator is active or not. You will receive voting power by delegating P2P to your validator or have other people delegate P2P to your validator. 1 P2P equals 1 voting power. How much voting power is required to be come active can be seen on the [Blockchain Explorer](https://explorer.sentinel.co/sentinel/validator). Sort on voting power and check what the lowest amount is. You’ll need to require more voting power than that in order to become an active validator, sign transactions and get rewarded for it.
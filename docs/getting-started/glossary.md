---
title: Glossary
sidebar_position: 8
---

# Glossary

Use this glossary to learn about terms used in Sentinel and the Cosmos ecosystem.

## Active set

The top 80
validators that participate in consensus and receive rewards.

## Air drops

A transfer of free cryptocurrency from a crypto project into users’ wallets in order to increase interest and incentivize the use of a new coin/token.

## Blockchain

An unchangeable ledger of transactions copied among a network of independent computer systems.

## Blocks

Groups of information stored on a blockchain. Each block contains transactions that are grouped, verified, and signed by validators.

## Bonded validator

A validator in the [active set](../getting-started/glossary.md#active-set) participating in consensus. Bonded validators earn rewards.

## Bonding

When a user delegates DVPN to a validator to receive staking rewards and in turn obtain voting power. Validators never have ownership of a delegator's DVPN. Delegating, bonding, and staking generally refer to the same process.

## Burn

The permanent destruction of coins from the total supply.


## Commission

The percentage of staking rewards a validator will keep before distributing the rest of the rewards to delegators. Commission is a validator’s income. Validators set their own commission rates which is not strrictly enforced by Sentinel.

## Community pool

A special fund designated for funding community projects. Any community member can create a governance proposal to spend the coins in the community pool. If the proposal passes, the funds are spent as specified in the proposal.

## Consensus

A system used by validators or miners to agree that each block of transactions in a blockchain is correct. The Sentinel blockchain uses Tendermint consensus engine. Validators earn rewards for participating in consensus. Visit the [Tendermint official documentation site](https://docs.tendermint.com/) for more information.

## Cosmos-SDK

The open-source framework the Sentinel blockchain is built on. For more information, check out the [Cosmos SDK Documentation](https://docs.cosmos.network/).

## dApp

An application built on a decentralized platform (short for decentralized application).

## DDoS

Distributed Denial of Service attack. When an attacker floods a network with traffic or requests in order to disrupt service.

## DeFi

Decentralized finance. A movement away from traditional finance and toward systems that do not require financial intermediaries.

## Delegate

When a user bonds DVPN to a validator to receive staking rewards and in turn obtain voting power. Validators never have ownership of the bonded DVPN. Delegating, bonding, and staking generally refer to the same process.


## Delegator

A user who delegates, bonds, or stakes DVPN to a validator to earn rewards.

## Fees

- **Gas**: Computed fees added on to all transactions to avoid spamming. Validators set minimum gas prices and reject transactions that have implied gas prices below this threshold.


## Full node

A computer connected to the Sentinel mainnet able to validate transactions and interact with the Sentinel blockchain. All active validators run full nodes.


## Governance

Governance is the democratic process that allows users and validators to make changes to the Sentinel protocol. Community members submit, vote, and implement proposals.

## Governance proposal

A written submission for a change or addition to the Sentinel protocol. Topics of proposals can vary from community pool spending, software changes, parameter changes, or any idea pertaining to the Sentinel protocol.

## Inactive set

Validators that are not in the [active set](../getting-started/glossary.md#active-set). These validators do not participate in consensus and do not earn rewards.

## IBC

The inter-blockchain communication protocol (IBC) creates communication between independent blockchains. IBC achieves this by specifying a set of structures that can be implemented by any distributed ledger that satisfies a small number of requirements.
IBC facilitates cross-chain applications for coin transfers, swaps, multi-chain contracts, and data sharding. Sentinel utilizes IBC for coin transfers and will add new features that are made possible through IBC.


## Jailed

Validators who misbehave are jailed or excluded from the validator set for a period amount of time.


## Proof of Stake

Proof of Stake. A style of blockchain where validators are chosen to propose blocks according to the number of coins they hold.


## Rewards

Revenue generated from fees given to validators and delegators.


## Self-delegation

The amount of DVPN a validator bonds to themselves. Also referred to as self-bond.

## Slashing

Punishment for validators that misbehave.

## Slippage

The difference in a coin's price between the start and end of a transaction.  

## Stake

The amount of DVPN bonded to a validator.

## Staking

When a user or delegator delegates and bonds DVPN to an active validator in order to receive rewards. Bonded DVPN adds to a validator's stake. Validators provide their stakes as collateral to participate in the consensus process. Validators with larger stakes are chosen to participate more often. Validators receive staking rewards for their participation. A validator's stake can be slashed if the validator misbehaves. Validators never have ownership of a delegator's DVPN, even when staking.

## Tendermint consensus

The consensus procedure used by the Sentinel protocol. First, a validator proposes a new block. Other validators vote on the block in two rounds. If a block receives a two-thirds majority or greater of yes votes in both rounds, it gets added to the blockchain. Validators get rewarded with the block's transaction fees. Proposers get rewarded extra. Each validator is chosen to propose based on their weight. Checkout the [Tendermint official documentation](https://docs.tendermint.com/) for more information.

## Sentinel 

The official source code for the Sentinel protocol.

## Sentinel mainnet

The Sentinel protocol's blockchain network where all transactions take place.


## Sentinel CLI

A command line interface for connecting to a Sentinel node.


## Testnet

A version of the mainnet just for testing. The testnet does not use real coins. You can use the testnet to get familiar with transactions.

## Total stake

The total amount of DVPN bonded to a delegator, including self-bonded DVPN.

## Unbonded validator

A validator that is not in the active set and does not participate in consensus or receive rewards. Some unbonded validators may be jailed.

## Unbonding validator

A validator transitioning from the active set to the inactive set. An unbonding validator does not participate in consensus or earn rewards. The unbonding process takes 14 days.

## Unbonded DVPN

DVPN that can be freely traded and is not staked to a validator.

## Unbonding

When a delegator decides to undelegate their DVPN from a validator. This process takes 14 days. No rewards accrue during this period. This action cannot be stopped once executed.

## Unbonding DVPN

DVPN that is transitioning from bonded to unbonded. DVPN that is unbonding cannot be traded freely. The unbonding process takes 14 days. No rewards accrue during this period. This action cannot be stopped once executed.

## Undelegate

When a delegator no longer wishes to have their DVPN bonded to a validator. This process takes 14 days. No rewards accrue during this period. This action cannot be stopped once executed.

## Uptime

The amount of time a validator has been active in a given timeframe. Validators with low up time may be slashed.

## Validator

A Sentinel blockchain miner responsible for verifying transactions on the blockchain. Validators run programs called full nodes that allow them to participate in consensus, verify blocks, participate in governance, and receive rewards. The top 80 validators with the highest total stake can participate in consensus.

## Weight

The measure of a validator's total stake. Validators with higher weights get selected more often to propose blocks. A validator's weight is also a measure of their voting power in governance.











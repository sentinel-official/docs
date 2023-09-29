---
title: Add a Validator Image
sidebar_position: 14
---

# Add a Validator Image

In order to have your validator profile image displayed on the most commonly used Cosmos blockchain explorers, you need to follow two different procedures

## First procedure

By following this procedure, your validator image will be visible on [Keplr](https://wallet.keplr.app/chains/sentinel), [Ping.pub](https://ping.pub/sentinel/staking), [Cosmos.directory](https://cosmos.directory/sentinel/validators) and [ATOMScan](https://atomscan.com/sentinel/validators).

Firstly, register on [keybase.io](https://keybase.io/), and create your profile by adding a profile image, which will be used as your validator image. Once your profile is created, access it and you will be prompted to create a PGP key.

[Download](https://keybase.io/download) Keybase onto your machine and follow the installation guide for your operating system.

Create a PGP key and add it to your keybase profile. Once that is complete, you need to perform what is called an `Edit Validator Transaction`

```bash
sentinelhub tx staking edit-validator \
    --identity=<your_pgp_key_with_no_spaces> \
    --chain-id=sentinelhub-2 \
    --gas=500000 \
    --gas-prices=0.2udvpn \
    --from=<your_key_name>
```

If you'd like to link your website and add a description of your validator, you have the option to fill out the following two fields

```bash
    --website="https://yourwebsite.com" \
    --details="These are my validator details"
```

If the transaction is successful, you will see the edits immediately

## Second procedure

By following this procedure, your validator image will be visible on [Mintscan](https://www.mintscan.io/sentinel/validators).

Here's what you'll need:
- A GitHub account with a [PAT](https://github.com/settings/tokens) (Personal Access Token) enabled with all repo scopes
- Your validator image in the format `<your_sentval_address>.png`
Go to [https://github.com/cosmostation/chainlist](https://github.com/cosmostation/chainlist)

Fork the project

Clone the forked project to your computer

```bash
git clone https://github.com/cosmostation/chainlist
```

Navigate to the directory from which you will execute the next commands

```bash
cd chainlist
```

Create a new branch named after your validator

```bash
git branch <your_validator_name>
```

Checkout to that branch

```bash
git checkout <your_validator_name>
```

Copy your validator image to the folder `/chainlist/chain/sentinel/moniker/`

```bash
cp /path/to/your/<your_sentval_address>.png ~/chainlist/chain/sentinel/moniker/
```

Set the necessary configuration parameters

```bash
git config --global user.name "Your Username"
git config --global user.email "your.email@example.com"
```

Set access via your Personal Access Token (PAT)

```bash
git remote set-url origin https://<your_github_user>:<your_token>@github.com/<your_github_user>chainlist.git
```

Push your branch to your forked repository

```bash
git add .
git commit -m "Add <your_validator_name> logo for Sentinel"
git push origin <your_validator_name>
```

If the command is successful go to [https://github.com/cosmostation/chainlist](https://github.com/cosmostation/chainlist) and create a pull request. Once the pull request is created, wait for some time until your validator image is updated. When the update is complete, the pull request will be closed.
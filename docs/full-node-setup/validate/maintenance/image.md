---
title: Add a Validator Image
sidebar_position: 2
---

# Add a Validator Image

By following this procedure using Keybase, your validator image will be displayed on popular Explorers and Wallets within the Cosmos Ecosystem.

Firstly, register on [Keybase](https://keybase.io/), and create your profile by adding a profile image, which will be used as your validator image. Once your profile is created, access it and you will be prompted to create a PGP key.

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
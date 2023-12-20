---
title: Submit Operator
description: How to submit your operatir to the validator registry
sidebar_position: 3
---

# Submit Operator

The REStake bot will automatically re-stake your rewards. To do this, you need to submit your operator address to the [Validator Registry](https://github.com/eco-stake/validator-registry).

## Fork and clone the Validator Registry

Update the Validator Registry to include your operator data for auto-compounding on any desired networks.

Fork the [Validator Registry](https://github.com/eco-stake/validator-registry) repository.

Clone the Validator Registry repository fork.

```bash
git clone https://github.com/<your-github-user-name>/
restake-validator-registry
```

Create a new directory for your validator:

```bash
mkdir <your-validator-name>
cd <your-validator-name>
```

Create the file `chain.json`

```bash
sudo nano chains.json
```

Add the following block

<details>
<summary>chains.json</summary>
<p>

```bash
{
  "$schema": "../chains.schema.json",
  "name": "<your_validator_name>",
  "chains": [
    {
      "name": "sentinel",
      "address": "<your_validator_sentvaloper_address>",
      "restake": {
        "address": "<your_restake_operator_address>",
        "run_time": "every 1 hour",
        "minimum_reward": 1000000
      }
    }
  ]
}
```

</p>
</details>

Create the file `profile.json`

```bash
sudo nano profile.json
```

Add the following block

<details>
<summary>profile.json</summary>
<p>

```bash
{
  "$schema": "../profile.schema.json",
  "name": "<your_validator_name>",
  "identity": "<your_16_digit_keybase_identity>"
}
```

</p>
</details>

Push to the origin and create a pull request adding a commit message
---
title: Auth
sidebar_position: 2
---

Querying commands for the auth module.

## Query Accounts

Retrieve all the accounts

```bash
sentinelhub query auth accounts \
  --node https://rpc.sentinel.co:443
```
<details>
<summary>Example Output</summary>
<p>

```bash
accounts:
- '@type': /cosmos.auth.v1beta1.BaseAccount
  account_number: "290737"
  address: sent1llllth4ntelpjk59zxdksl2tdj6t7w8tglr97y
  pub_key: null
  sequence: "0"
- '@type': /cosmos.auth.v1beta1.BaseAccount
  account_number: "161577"
  address: sent1lll7cyvcnc5cldmlapwwpcvj2atnxjg27lkx9c
  pub_key: null
  sequence: "0"
pagination:
  next_key: //+1x/RHu6glTRiZ8/F17KBnYr0=
  total: "0"
```

</p>
</details>

## Query Accounts Info

Retrieve a specific account.

```bash
sentinelhub query auth account [account_address] \
  --node https://rpc.sentinel.co:443
```
<details>
<summary>Example Output</summary>
<p>

```bash
'@type': /cosmos.auth.v1beta1.BaseAccount
account_number: "290737"
address: sent1llllth4ntelpjk59zxdksl2tdj6t7w8tglr97y
pub_key: null
sequence: "0"
```

</p>
</details>

## Query Module Account

Retrieve module account info by module name.

```bash
sentinelhub query auth module-account [module_name] \
  --node https://rpc.sentinel.co:443
```
<details>
<summary>Example Output</summary>
<p>

```bash
account:
  '@type': /cosmos.auth.v1beta1.ModuleAccount
  base_account:
    account_number: "588024"
    address: sent1xds4f0m87ajl3a6az6s2enhxrd0wta48ta2nhs
    pub_key: null
    sequence: "0"
  name: wasm
  permissions:
  - burner
```

</p>
</details>

## Query Auth Params

Retrieve the current auth parameters.

```bash
sentinelhub query auth params \
  --node https://rpc.sentinel.co:443
```
<details>
<summary>Example Output</summary>
<p>

```bash
max_memo_characters: "256"
sig_verify_cost_ed25519: "590"
sig_verify_cost_secp256k1: "1000"
tx_sig_limit: "7"
tx_size_cost_per_byte: "150"
```

</p>
</details>
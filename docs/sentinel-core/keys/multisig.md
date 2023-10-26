---
title: Multisig
description: How to generate and manage a Multisig Key.
sidebar_position: 1
---

# Multisig

A **multisig account** is an Sentinel account with a special key that can require more than one signature to sign transactions. This can be useful for increasing the security of the account or for requiring the consent of multiple parties to make transactions. Multisig accounts can be created by specifying:

- threshold number of signatures required
- the public keys involved in signing

To sign with a multisig account, the transaction must be signed individually by the different keys specified for the account. Then, the signatures will be combined into a multisignature which can be used to sign the transaction. If fewer than the threshold number of signatures needed are present, the resultant multisignature is considered invalid.

## Generate a Multisig key

```bash
sentinelhub keys add --multisig=name1,name2,name3[...] --multisig-threshold=K new_key_name
```

`K` is the minimum number of private keys that must have signed the transactions that carry the public key's address as signer.

The `--multisig` flag must contain the name of public keys that will be combined into a public key that will be generated and stored as `new_key_name` in the local database. All names supplied through `--multisig` must already exist in the local database.

Unless the flag `--nosort` is set, the order in which the keys are supplied on the command line does not matter, i.e. the following commands generate two identical keys:

```bash
sentinelhub keys add --multisig=p1,p2,p3 --multisig-threshold=2 multisig_address
sentinelhub keys add --multisig=p2,p3,p1 --multisig-threshold=2 multisig_address
```

## Signing a transaction

### Step 1: Create the multisig key

Let's assume that you have `test1` and `test2` and want to make a multisig account with `test3`.

First import the public keys of `test3` into your keyring.

```sh
sentinelhub keys add \
    test3 \
    --pubkey=<pubkey>
```

Generate the multisig key with 2/3 threshold.

```sh
sentinelhub keys add \
    multi \
    --multisig=test1,test2,test3 \
    --multisig-threshold=2
```

You can see its address and details:

```sh
sentinelhub keys show multi

- name: multi
  type: multi
  address: sent1z5ssqynre0gujda34kekcxhnfxa5eu5uq0wh4n
  pubkey: # PubKey
  mnemonic: ""
  threshold: 0
  pubkeys: []
```

Let's add 10 DVPN to the multisig wallet:

```bash
sentinelhub tx bank send \
    test1 \
    sent1z5ssqynre0gujda34kekcxhnfxa5eu5uq0wh4n \
    10000000udvpn \
    --chain-id=sentinelhub-2 \
    --gas=auto \
    --fees=1000000udvpn \
    --broadcast-mode=block
```

### Step 2: Create the multisig transaction

We want to send 5 DVPN from our multisig account to `sent1czwz8nskkhnr7al0hz0n0vsc3f0jxher2h57pc`.

```bash
sentinelhub tx bank send \
    sent1czwz8nskkhnr7al0hz0n0vsc3f0jxher2h57pc \
    sent1dnk3qvg4ywlcpvjcds5l2mnh6p6e992cu0sal9 \
    5000000udvpn \
    --gas=200000 \
    --fees=1000000udvpn \
    --chain-id=sentinelhub-2 \
    --generate-only > unsigned.json
```

The file `unsigned.json` contains the unsigned transaction encoded in JSON.

<details><summary>unsigned.json</summary>
<p>

#### This is the content of the `unsigned.json` file

```json
{
  "body": {
    "messages": [
      {
        "@type": "/cosmos.bank.v1beta1.MsgSend",
        "from_address": "sent1czwz8nskkhnr7al0hz0n0vsc3f0jxher2h57pc",
        "to_address": "sent1dnk3qvg4ywlcpvjcds5l2mnh6p6e992cu0sal9",
        "amount": [
          {
            "denom": "udvpn",
            "amount": "5000000000000000000"
          }
        ]
      }
    ],
    "memo": "",
    "timeout_height": "0",
    "extension_options": [],
    "non_critical_extension_options": []
  },
  "auth_info": {
    "signer_infos": [],
    "fee": {
      "amount": [
        {
          "denom": "udvpn",
          "amount": "1000000"
        }
      ],
      "gas_limit": "200000",
      "payer": "",
      "granter": ""
    }
  },
  "signatures": []
}
```

</p>
</details>

### Step 3: Sign individually

Sign with `test1` and `test2` and create individual signatures.

```sh
sentinelhub tx sign \
    unsigned.json \
    --multisig=sent1z5ssqynre0gujda34kekcxhnfxa5eu5uq0wh4n \
    --from=test1 \
    --output-document=test1sig.json \
    --chain-id=sentinelhub-2
```

```sh
sentinelhub tx sign \
    unsigned.json \
    --multisig=sent1z5ssqynre0gujda34kekcxhnfxa5eu5uq0wh4n \
    --from=test2 \
    --output-document=test2sig.json \
    --chain-id=sentinelhub-2
```

### Step 4: Create multisignature

Combine signatures to sign transaction.

```sh
sentinelhub tx multisign \
    unsigned.json \
    multi \
    test1sig.json test2sig.json \
    --output-document=signed.json \
    --chain-id=sentinelhub-2
```

The TX is now signed:

<details><summary>signed.json</summary>
<p>

#### This is the content of the `signed.json` file

```json
{
  "body": {
    "messages": [
      {
        "@type": "/cosmos.bank.v1beta1.MsgSend",
        "from_address": "sent1czwz8nskkhnr7al0hz0n0vsc3f0jxher2h57pc",
        "to_address": "sent1dnk3qvg4ywlcpvjcds5l2mnh6p6e992cu0sal9",
        "amount": [
          {
            "denom": "udvpn",
            "amount": "5000000000000000000"
          }
        ]
      }
    ],
    "memo": "",
    "timeout_height": "0",
    "extension_options": [],
    "non_critical_extension_options": []
  },
  "auth_info": {
    "signer_infos": [
      {
        "public_key": {
          "@type": "/cosmos.crypto.multisig.LegacyAminoPubKey",
          "threshold": 2,
          "public_keys": [
            {
              "@type": "/cosmos.crypto.secp256k1.PubKey",
              "key": "ApCzSG8k7Tr4aM6e4OJRExN7cNtvH21L9azbh+uRrvt4"
            },
            {
              "@type": "/cosmos.crypto.secp256k1.PubKey",
              "key": "Ah91erz8ChNanqLe9ea948rvAiXMCRlR5Ka7EE/c0xUK"
            },
            {
              "@type": "/cosmos.crypto.secp256k1.PubKey",
              "key": "A0OjtIUCFJM3AobJ9HJTWKP9RZV2+WPcwVjLgsAidrZ/"
            }
          ]
        },
        "mode_info": {
          "multi": {
            "bitarray": {
              "extra_bits_stored": 3,
              "elems": "wA=="
            },
            "mode_infos": [
              {
                "single": {
                  "mode": "SIGN_MODE_LEGACY_AMINO_JSON"
                }
              },
              {
                "single": {
                  "mode": "SIGN_MODE_LEGACY_AMINO_JSON"
                }
              }
            ]
          }
        },
        "sequence": "1"
      }
    ],
    "fee": {
      "amount": [
        {
          "denom": "udvpn",
          "amount": "1000000"
        }
      ],
      "gas_limit": "200000",
      "payer": "",
      "granter": ""
    }
  },
  "signatures": [
    "CkCEeIbeGc+I1ipZuhp/0KhVNnWAv2tTlvgo5x61lzk1KHmLPV38m/YFurrFt5cm5+fqIXrn+FlOjrJuzBhw8ogYCkCawm9mpXsBHk0CFsE5618fVnvScEkfrzW0c2jCcjqV8EPuj3ut74UWzZyQkwtJGxUWtro9EgnGsB7Di1Gzizst"
  ]
}
```

</p>
</details>

### Step 5: Broadcast transaction

```sh
sentinelhub tx broadcast signed.json \
    --chain-id=sentinelhub-2 \
    --broadcast-mode=block
```

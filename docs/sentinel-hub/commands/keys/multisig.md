---
title: Multisig
description: How to generate and manage a Multisig Key.
sidebar_position: 2
---

# Multisig

A multisig account is a Sentinel account with a special key requiring more than one signature to approve transactions. This setup enhances account security and enables joint control by multiple parties. To create a multisig account, you must specify:

- The number of signatures required (threshold).
- The public keys of all participants.

Transactions made with a multisig account need individual signatures from the designated keys. These signatures are then combined into a multisignature. If the number of signatures is below the threshold, the multisignature becomes invalid.


## Example: Multisig TX

Here’s a step-by-step guide to creating a multisig account named `multisig-key` using three keys.

### Step 1: Generate Individual Keys

Each participant must create their own key. In this example, the keys are named `key_1`, `key_2`, and `key_3`

```bash
sentinelhub keys add key_1
```

<details>
<summary>Output</summary>
<p>

#### This is the output details of the `key_1`

```text
- name: key_1
  type: local
  address: sent16e34vs3zmp0fjr90rcq888c4padq7g6uh98zk3
  pubkey: '{"@type":"/cosmos.crypto.secp256k1.PubKey","key":"A2azxghav4YItrKC0TYXPf2QX2GrDYgOjicNBS5DyPxK"}'
  mnemonic: ""


**Important** write this mnemonic phrase in a safe place.
It is the only way to recover your account if you ever forget your password.

box yellow pottery flower vendor vivid cigar cream trigger gospel panther twelve donate demise gorilla vacuum grocery theme live kiss proof man follow cheese
```

</p>
</details>


```bash
sentinelhub keys add key_2
```

<details>
<summary>Output</summary>
<p>

```text
- name: key_2
  type: local
  address: sent1sd7hd45p5p8ls22a2em9ezly3v3yjr2dm7rqup
  pubkey: '{"@type":"/cosmos.crypto.secp256k1.PubKey","key":"A6JIWSoDkRnryc+q1Eld8VIJdCTx71Panqa43tgPH45B"}'
  mnemonic: ""


**Important** write this mnemonic phrase in a safe place.
It is the only way to recover your account if you ever forget your password.

floor tissue frequent fashion shell conduct raw glimpse lonely region pull help little state excuse supreme flight insane hurt empty blanket lecture plug upper
```

</p>
</details>

```bash
sentinelhub keys add key_3
```

<details>
<summary>Output</summary>
<p>

```text
- name: key_3
  type: local
  address: sent1r57hfyk2z6txmv7tmuc95erltrw46zfatgnpjt
  pubkey: '{"@type":"/cosmos.crypto.secp256k1.PubKey","key":"AmFjwqac9h7/gawTExDSbNu5ObNPjxSb9D233gBa64CJ"}'
  mnemonic: ""


**Important** write this mnemonic phrase in a safe place.
It is the only way to recover your account if you ever forget your password.

detect artefact lemon budget make beyond tape unaware toast mask volume gate crane viable axis utility wheat make home much royal flee depart spawn
```

</p>
</details>


### Step 2: Create the Multisig Key

After generating the keys, combine their public keys to create the multisig key `multisig-key` with a 2-of-3 threshold.

First, import all the public keys. Use the following commands to add each key:

```bash
sentinelhub keys add key_1 --pubkey='{"@type":"/cosmos.crypto.secp256k1.PubKey","key":"A2azxghav4YItrKC0TYXPf2QX2GrDYgOjicNBS5DyPxK"}'
sentinelhub keys add key_2 --pubkey='{"@type":"/cosmos.crypto.secp256k1.PubKey","key":"A6JIWSoDkRnryc+q1Eld8VIJdCTx71Panqa43tgPH45B"}'
sentinelhub keys add key_3 --pubkey='{"@type":"/cosmos.crypto.secp256k1.PubKey","key":"AmFjwqac9h7/gawTExDSbNu5ObNPjxSb9D233gBa64CJ"}'
```

Next, create the multisig key using the following command:

```bash
sentinelhub keys add --multisig=key_1,key_2,key_3 --multisig-threshold=2 multisig-key
```

<details>
<summary>Output</summary>
<p>

```text
- name: multisig-key
  type: multi
  address: sent13c4medfuu9882c7sqjrt5egqp96l6f4sjd0efh
  pubkey: '{"@type":"/cosmos.crypto.multisig.LegacyAminoPubKey","threshold":2,"public_keys":[{"@type":"/cosmos.crypto.secp256k1.PubKey","key":"AmFjwqac9h7/gawTExDSbNu5ObNPjxSb9D233gBa64CJ"},{"@type":"/cosmos.crypto.secp256k1.PubKey","key":"A6JIWSoDkRnryc+q1Eld8VIJdCTx71Panqa43tgPH45B"},{"@type":"/cosmos.crypto.secp256k1.PubKey","key":"A2azxghav4YItrKC0TYXPf2QX2GrDYgOjicNBS5DyPxK"}]}'
  mnemonic: ""
```

</p>
</details>

- The `--multisig` flag lists the public keys you want to combine. These public keys will create a new multisig public key, which will be stored locally as `multisig-key`.
- `--multisig-threshold=2` is the minimum number of signatures required to authorize a transaction using the multisig key.

By default, the order of keys in the `--multisig` flag does not matter unless you use the `--nosort` flag. For example, the following two commands will generate the same multisig key:

```bash
sentinelhub keys add --multisig=key_1,key_2,key_3 --multisig-threshold=2 multisig-key
sentinelhub keys add --multisig=key_1,key_2,key_3 --multisig-threshold=2 multisig-key
```

**Fund the Multisig Accoun**

Before creating transactions, ensure the multisig account has sufficient P2P Coins.


### Step 3: Create the Multisig TX

We want to send 5 P2P from our multisig account to `sent1nygcr5p33plzq4akfxnl3nr7nf59gnshvtkzs6`. To do this, we'll create an offline transaction called `unsigned.json,` which contains the unsigned transaction in JSON format. This file will then be shared with each signer, who will add their signature and return it to the transaction creator.

```bash
sentinelhub tx bank send sent13c4medfuu9882c7sqjrt5egqp96l6f4sjd0efh \
    sent1nygcr5p33plzq4akfxnl3nr7nf59gnshvtkzs6 \
    5000000udvpn \
    --chain-id=sentinelhub-2 \
    --gas-prices=0.5udvpn \
    --gas=500000 \
    --generate-only \
    --offline \
    --account-number=1052698 \
    --sequence=0 \
    > unsigned.json
```

<details>
<summary>unsigned.json</summary>
<p>

```json
{
   "body":{
      "messages":[
         {
            "@type":"/cosmos.bank.v1beta1.MsgSend",
            "from_address":"sent13c4medfuu9882c7sqjrt5egqp96l6f4sjd0efh",
            "to_address":"sent1nygcr5p33plzq4akfxnl3nr7nf59gnshvtkzs6",
            "amount":[
               {
                  "denom":"udvpn",
                  "amount":"5000000"
               }
            ]
         }
      ],
      "memo":"",
      "timeout_height":"0",
      "extension_options":[
         
      ],
      "non_critical_extension_options":[
         
      ]
   },
   "auth_info":{
      "signer_infos":[
         
      ],
      "fee":{
         "amount":[
            {
               "denom":"udvpn",
               "amount":"250000"
            }
         ],
         "gas_limit":"500000",
         "payer":"",
         "granter":""
      }
   },
   "signatures":[
      
   ]
}
```

</p>
</details>

### Step 4: Sign the Transaction

The multisig transaction requires signatures from any two of the three key holders. In this example, the keys `key_1` and `key_3` will be used to sign the transaction.

```bash
sentinelhub tx sign \
    unsigned.json \
    --multisig=multisig-key \
    --from=key_1 \
    --output-document=key_1-signed.json \
    --chain-id=sentinelhub-2 \
    --node 'https://rpc.sentineldao.com:443'
```

<details>
<summary>key_1-signed.json</summary>
<p>

```json
{
  "signatures": [
    {
      "public_key": {
        "@type": "/cosmos.crypto.secp256k1.PubKey",
        "key": "A2azxghav4YItrKC0TYXPf2QX2GrDYgOjicNBS5DyPxK"
      },
      "data": {
        "single": {
          "mode": "SIGN_MODE_LEGACY_AMINO_JSON",
          "signature": "/vD4D3/an4JLGUr9LI6G6zWv+AIVZsGLohq3eiHhrVZGJxs1M5fznPX/ABYQpvZ5mmP2OjO0TiiCxO2o05o+Ng=="
        }
      },
      "sequence": "0"
    }
  ]
}
```

</p>
</details>

```bash
sentinelhub tx sign \
    unsigned.json \
    --multisig=multisig-key \
    --from=key_3 \
    --output-document=key_3-signed.json \
    --chain-id=sentinelhub-2 \
    --node 'https://rpc.sentineldao.com:443'
```

<details>
<summary>key_3-signed.json</summary>
<p>

```json
{
  "signatures": [
    {
      "public_key": {
        "@type": "/cosmos.crypto.secp256k1.PubKey",
        "key": "AmFjwqac9h7/gawTExDSbNu5ObNPjxSb9D233gBa64CJ"
      },
      "data": {
        "single": {
          "mode": "SIGN_MODE_LEGACY_AMINO_JSON",
          "signature": "vfBZC78eDgnDV8euRDXRpYvf9SY9q0K6bQw5iHsmbV5ZfarEWdcF7ZNP4Ha0hwnjuLmJzy3rRKLRqjQkUTCyuA=="
        }
      },
      "sequence": "0"
    }
  ]
}
```

</p>
</details>

### Step 5: Multisign by Combining Signatures

Once you have the required signatures, combine them into a single signed transaction. This step finalizes the multisig transaction

```bash
sentinelhub tx multisign \
    unsigned.json \
    multisig-key \
    key_1-signed.json \
    key_3-signed.json \
    --output-document=signed.json \
    --chain-id=sentinelhub-2 \
    --node 'https://rpc.sentineldao.com:443' \
    > signed.json
```

<details>
<summary>signed.json</summary>
<p>

```json
{
  "body": {
    "messages": [
      {
        "@type": "/cosmos.bank.v1beta1.MsgSend",
        "from_address": "sent13c4medfuu9882c7sqjrt5egqp96l6f4sjd0efh",
        "to_address": "sent1nygcr5p33plzq4akfxnl3nr7nf59gnshvtkzs6",
        "amount": [
          {
            "denom": "udvpn",
            "amount": "5000000"
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
              "key": "AmFjwqac9h7/gawTExDSbNu5ObNPjxSb9D233gBa64CJ"
            },
            {
              "@type": "/cosmos.crypto.secp256k1.PubKey",
              "key": "A6JIWSoDkRnryc+q1Eld8VIJdCTx71Panqa43tgPH45B"
            },
            {
              "@type": "/cosmos.crypto.secp256k1.PubKey",
              "key": "A2azxghav4YItrKC0TYXPf2QX2GrDYgOjicNBS5DyPxK"
            }
          ]
        },
        "mode_info": {
          "multi": {
            "bitarray": {
              "extra_bits_stored": 3,
              "elems": "oA=="
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
        "sequence": "0"
      }
    ],
    "fee": {
      "amount": [
        {
          "denom": "udvpn",
          "amount": "250000"
        }
      ],
      "gas_limit": "500000",
      "payer": "",
      "granter": ""
    }
  },
  "signatures": [
    "CkC98FkLvx4OCcNXx65ENdGli9/1Jj2rQrptDDmIeyZtXll9qsRZ1wXtk0/gdrSHCeO4uYnPLetEotGqNCRRMLK4CkD+8PgPf9qfgksZSv0sjobrNa/4AhVmwYuiGrd6IeGtVkYnGzUzl/Oc9f8AFhCm9nmaY/Y6M7ROKILE7ajTmj42"
  ]
}
```

</p>
</details>

### Step 6: Broadcast the TX

Finally, broadcast the signed transaction to the blockchain network.

```bash
sentinelhub tx broadcast \
    signed.json \
    --node 'https://rpc.sentineldao.com:443'
```
<details>
<summary>Output</summary>
<p>

```text
code: 0
codespace: ""
data: ""
events: []
gas_used: "0"
gas_wanted: "0"
height: "0"
info: ""
logs: []
raw_log: '[]'
timestamp: ""
tx: null
txhash: 5308DBB812FE3D7AC308C6B75044D3BCB085A9F72FC4FFE258421940E9842953
```

</p>
</details>
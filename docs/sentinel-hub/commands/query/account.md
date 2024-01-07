---
title: Account
sidebar_position: 1
---

The account module is dedicated to essential account details, including the account number, sequence, and public key.

## Query an Account

To query an account, use the following command:

```bash
sentinelhub query account \
  <account_address> \
  --node https://rpc.sentinel.co:443
```
<details>
<summary>Example Output</summary>
<p>

```bash title="Growth DAO Address"
'@type': /cosmos.auth.v1beta1.BaseAccount
account_number: "52632"
address: sent1nygcr5p33plzq4akfxnl3nr7nf59gnshvtkzs6
pub_key:
  '@type': /cosmos.crypto.secp256k1.PubKey
  key: A4r6ULL86mKsQxECNkP+meRPbUuP2dR6qtHgD9Ma4NX2
sequence: "324"
```

</p>
</details>

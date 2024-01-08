---
title: Slashing Params
sidebar_position: 4
---

Querying commands for the slashing module

## Query Slashing Params

Retrieve information regarding the slashing parameters.

```bash
sentinelhub query slashing params \
  --node https://rpc.sentinel.co:443
```
<details>
<summary>Example Output</summary>
<p>

```bash
amount:
downtime_jail_duration: 600s
min_signed_per_window: "0.050000000000000000"
signed_blocks_window: "10000"
slash_fraction_double_sign: "0.050000000000000000"
slash_fraction_downtime: "0.000100000000000000"
```

</p>
</details>

## Query Slashing Signing Info

### All the Validators

Retrieve the corresponding signing information for all the validators.

```bash
sentinelhub query slashing signing-infos \
  --node https://rpc.sentinel.co:443
```
<details>
<summary>Example Output</summary>
<p>

```bash title="Validator List"
- address: sentvalcons1q9jjdfk9k7um92cq9h0g4l8gakr22ajctvna0s
  index_offset: "13577037"
  jailed_until: "1970-01-01T00:00:00Z"
  missed_blocks_counter: "14"
  start_height: "816474"
  tombstoned: false
- address: sentvalcons1qndsswpyazytqyyq27kv5wnvhge29df9a9zd87
  index_offset: "14393512"
  jailed_until: "1970-01-01T00:00:00Z"
  missed_blocks_counter: "0"
  start_height: "0"
  tombstoned: false
- address: sentvalcons1qcs7ryy6yvzjr9e0znp8ag6lhk40een0hl02f7
  index_offset: "11906379"
  jailed_until: "1970-01-01T00:00:00Z"
  missed_blocks_counter: "0"
  start_height: "2486030"
  tombstoned: false
- address: sentvalcons1q6u9fjdyh4xruktfsx28xcfee6cc39k3ksz4wc
  index_offset: "2"
  jailed_until: "2021-05-30T17:33:58.356338487Z"
  missed_blocks_counter: "2"
  start_height: "678"
  tombstoned: false
- address: sentvalcons1q76wdhndyn04wy936f3qhn58y2rsellq8vvny3
  index_offset: "12076617"
  jailed_until: "1970-01-01T00:00:00Z"
  missed_blocks_counter: "18"
  start_height: "416424"
  tombstoned: false

```

</p>
</details>

### A Specific Validator

Utilize the consensus public key of a validator (accessible on the [ping.pub](https://ping.pub/sentinel/staking/sentvaloper1nygcr5p33plzq4akfxnl3nr7nf59gnshnwf0ln) website) to retrieve the corresponding signing information for said validator.

```bash
sentinelhub query slashing signing-info \
  '<consensus_public_key>' \
  --node https://rpc.sentinel.co:443
```
<details>
<summary>Example Output</summary>
<p>

```bash title="Growth DAO Validator"
address: sentvalcons1709nq56aj0he8vdttlzkqnrjlmcgr9g7hlutf4
index_offset: "1690513"
jailed_until: "1970-01-01T00:00:00Z"
missed_blocks_counter: "5"
start_height: "12702964"
tombstoned: false
```

</p>
</details>
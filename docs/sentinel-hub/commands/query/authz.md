---
title: Authz
sidebar_position: 3
---

Querying commands for the authz module.

## Query Authz Grants

Retrieve grants for a granter-grantee pair and optionally a msg-type-url.

```bash
sentinelhub query auth grants [granter_address] [grantee_address] [msg_type_url]? \
  --node https://rpc.sentinel.co:443
```
<details>
<summary>Example Output</summary>
<p>

```bash
grants:
- authorization:
    '@type': /cosmos.authz.v1beta1.GenericAuthorization
    msg: /cosmos.authz.v1beta1.MsgGrant
  expiration: "2123-01-31T07:07:17Z"
- authorization:
    '@type': /cosmos.authz.v1beta1.GenericAuthorization
    msg: /cosmos.authz.v1beta1.MsgRevoke
  expiration: "2123-01-31T07:07:24Z"
- authorization:
    '@type': /cosmos.authz.v1beta1.GenericAuthorization
    msg: /cosmos.bank.v1beta1.MsgSend
  expiration: "2123-01-31T07:06:56Z"
- authorization:
    '@type': /cosmos.authz.v1beta1.GenericAuthorization
    msg: /cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward
  expiration: "2123-01-31T07:06:23Z"
- authorization:
    '@type': /cosmos.authz.v1beta1.GenericAuthorization
    msg: /cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission
  expiration: "2123-01-31T07:06:34Z"
- authorization:
    '@type': /cosmos.authz.v1beta1.GenericAuthorization
    msg: /cosmos.feegrant.v1beta1.MsgGrantAllowance
  expiration: "2123-01-31T07:07:38Z"
- authorization:
    '@type': /cosmos.authz.v1beta1.GenericAuthorization
    msg: /cosmos.feegrant.v1beta1.MsgRevokeAllowance
  expiration: "2123-01-31T07:07:45Z"
- authorization:
    '@type': /cosmos.authz.v1beta1.GenericAuthorization
    msg: /cosmos.gov.v1beta1.MsgVote
  expiration: "2123-01-31T07:06:41Z"
- authorization:
    '@type': /cosmos.authz.v1beta1.GenericAuthorization
    msg: /cosmos.slashing.v1beta1.MsgUnjail
  expiration: "2123-01-31T07:07:03Z"
- authorization:
    '@type': /cosmos.authz.v1beta1.GenericAuthorization
    msg: /cosmos.staking.v1beta1.MsgDelegate
  expiration: "2123-01-31T07:06:04Z"
- authorization:
    '@type': /cosmos.authz.v1beta1.GenericAuthorization
    msg: /cosmos.staking.v1beta1.MsgEditValidator
  expiration: "2123-01-31T07:06:48Z"
- authorization:
    '@type': /cosmos.authz.v1beta1.GenericAuthorization
    msg: /cosmos.staking.v1beta1.MsgUndelegate
  expiration: "2123-01-31T07:07:09Z"
pagination:
  next_key: null
  total: "0"
```

</p>
</details>

## Query Authz Grants by Grantee

Retrieve authorization grants granted to a grantee.

```bash
sentinelhub query auth grants-by-grantee [grantee_address] \
  --node https://rpc.sentinel.co:443
```
<details>
<summary>Example Output</summary>
<p>

```bash
No example available
```

</p>
</details>

## Query Authz Grants by Granter

Retrieve authorization grants granted by granter.

```bash
sentinelhub query auth grants-by-granter [granter_address] \
  --node https://rpc.sentinel.co:443
```
<details>
<summary>Example Output</summary>
<p>

```bash
grants:
- authorization:
    '@type': /cosmos.authz.v1beta1.GenericAuthorization
    msg: /cosmos.gov.v1beta1.MsgVote
  expiration: "2123-09-30T17:51:13Z"
  grantee: sent10eykchznjdn8jdlwaj5v9wvlmdsp6kxxdu277c
  granter: sent15pfdlwkue3xlpzzemxtq9aunynjzy9ke3nnjdx
- authorization:
    '@type': /cosmos.authz.v1beta1.GenericAuthorization
    msg: /cosmos.authz.v1beta1.MsgGrant
  expiration: "2123-01-31T07:07:17Z"
  grantee: sent1js8h76lxsl92qpqmsgd04u52aaqp82pr0zjget
  granter: sent15pfdlwkue3xlpzzemxtq9aunynjzy9ke3nnjdx
- authorization:
    '@type': /cosmos.authz.v1beta1.GenericAuthorization
    msg: /cosmos.authz.v1beta1.MsgRevoke
  expiration: "2123-01-31T07:07:24Z"
  grantee: sent1js8h76lxsl92qpqmsgd04u52aaqp82pr0zjget
  granter: sent15pfdlwkue3xlpzzemxtq9aunynjzy9ke3nnjdx
- authorization:
    '@type': /cosmos.authz.v1beta1.GenericAuthorization
    msg: /cosmos.bank.v1beta1.MsgSend
  expiration: "2123-01-31T07:06:56Z"
  grantee: sent1js8h76lxsl92qpqmsgd04u52aaqp82pr0zjget
  granter: sent15pfdlwkue3xlpzzemxtq9aunynjzy9ke3nnjdx
- authorization:
    '@type': /cosmos.authz.v1beta1.GenericAuthorization
    msg: /cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward
  expiration: "2123-01-31T07:06:23Z"
  grantee: sent1js8h76lxsl92qpqmsgd04u52aaqp82pr0zjget
  granter: sent15pfdlwkue3xlpzzemxtq9aunynjzy9ke3nnjdx
- authorization:
    '@type': /cosmos.authz.v1beta1.GenericAuthorization
    msg: /cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission
  expiration: "2123-01-31T07:06:34Z"
  grantee: sent1js8h76lxsl92qpqmsgd04u52aaqp82pr0zjget
  granter: sent15pfdlwkue3xlpzzemxtq9aunynjzy9ke3nnjdx
- authorization:
    '@type': /cosmos.authz.v1beta1.GenericAuthorization
    msg: /cosmos.feegrant.v1beta1.MsgGrantAllowance
  expiration: "2123-01-31T07:07:38Z"
  grantee: sent1js8h76lxsl92qpqmsgd04u52aaqp82pr0zjget
  granter: sent15pfdlwkue3xlpzzemxtq9aunynjzy9ke3nnjdx
- authorization:
    '@type': /cosmos.authz.v1beta1.GenericAuthorization
    msg: /cosmos.feegrant.v1beta1.MsgRevokeAllowance
  expiration: "2123-01-31T07:07:45Z"
  grantee: sent1js8h76lxsl92qpqmsgd04u52aaqp82pr0zjget
  granter: sent15pfdlwkue3xlpzzemxtq9aunynjzy9ke3nnjdx
- authorization:
    '@type': /cosmos.authz.v1beta1.GenericAuthorization
    msg: /cosmos.gov.v1beta1.MsgVote
  expiration: "2123-01-31T07:06:41Z"
  grantee: sent1js8h76lxsl92qpqmsgd04u52aaqp82pr0zjget
  granter: sent15pfdlwkue3xlpzzemxtq9aunynjzy9ke3nnjdx
- authorization:
    '@type': /cosmos.authz.v1beta1.GenericAuthorization
    msg: /cosmos.slashing.v1beta1.MsgUnjail
  expiration: "2123-01-31T07:07:03Z"
  grantee: sent1js8h76lxsl92qpqmsgd04u52aaqp82pr0zjget
  granter: sent15pfdlwkue3xlpzzemxtq9aunynjzy9ke3nnjdx
- authorization:
    '@type': /cosmos.authz.v1beta1.GenericAuthorization
    msg: /cosmos.staking.v1beta1.MsgDelegate
  expiration: "2123-01-31T07:06:04Z"
  grantee: sent1js8h76lxsl92qpqmsgd04u52aaqp82pr0zjget
  granter: sent15pfdlwkue3xlpzzemxtq9aunynjzy9ke3nnjdx
- authorization:
    '@type': /cosmos.authz.v1beta1.GenericAuthorization
    msg: /cosmos.staking.v1beta1.MsgEditValidator
  expiration: "2123-01-31T07:06:48Z"
  grantee: sent1js8h76lxsl92qpqmsgd04u52aaqp82pr0zjget
  granter: sent15pfdlwkue3xlpzzemxtq9aunynjzy9ke3nnjdx
- authorization:
    '@type': /cosmos.authz.v1beta1.GenericAuthorization
    msg: /cosmos.staking.v1beta1.MsgUndelegate
  expiration: "2123-01-31T07:07:09Z"
  grantee: sent1js8h76lxsl92qpqmsgd04u52aaqp82pr0zjget
  granter: sent15pfdlwkue3xlpzzemxtq9aunynjzy9ke3nnjdx
pagination:
  next_key: null
  total: "0"
```

</p>
</details>


---
title: Upgrade
sidebar_position: 7
---

Querying commands for the upgrade module

## Query Applied Upgrade

Retrieve information regarding the block header for height at which a completed upgrade was applied.

```bash
sentinelhub query upgrades applied [upgrade_name] \
  --node https://rpc.sentinel.co:443
```
<details>
<summary>Example Output</summary>
<p>

```bash
{
  "block_id": {
    "hash": "958D70FA2FF5801143683529C68064BAA1CA6DFC95168B024D129803A1713A9F",
    "parts": {
      "total": 1,
      "hash": "82C515E2D468E806D08331CFFC0BFD073A400B0B2A729740F4DFC47695F65CDF"
    }
  },
  "block_size": "9517",
  "header": {
    "version": {
      "block": "11"
    },
    "chain_id": "sentinelhub-2",
    "height": "12310005",
    "time": "2023-08-18T12:10:36.572027592Z",
    "last_block_id": {
      "hash": "585173197D2347B4ED52E6E34E01341EC696E19EA897B8F626187FD68DE222C0",
      "parts": {
        "total": 1,
        "hash": "0541C832E3ED9D3A6F96E0DA7D109B9E5208DBDFD6B32AD939A9A0095BA557A5"
      }
    },
    "last_commit_hash": "66536D9DDE85EEA8095D9CCFDE34E897C48AB9A54E0E3647ABFBC6541344AE51",
    "data_hash": "AA492CC511FC78B2DD0480C3347F0262D8AE02F1DE2B062535AF23C75EC333E6",
    "validators_hash": "6B47A1AB506973D5345459201FBD83048E6428BB3E04059EF56314986A1EF20F",
    "next_validators_hash": "6B47A1AB506973D5345459201FBD83048E6428BB3E04059EF56314986A1EF20F",
    "consensus_hash": "048091BC7DDC283F77BFBF91D73C44DA58C3DF8A9CBC867405D8B7F3DAADA22F",
    "app_hash": "4B45A3CA387241F3E3A579E3C16383C31DA244C45891755B07BAD1762FCE1376",
    "last_results_hash": "BE11A6E35D972E48972D26BADD06F78333CF5B22AD83D3ABB8D1CAD1143A48EF",
    "evidence_hash": "E3B0C44298FC1C149AFBF4C8996FB92427AE41E4649B934CA495991B7852B855",
    "proposer_address": "3718B5484425605AFBD5483AD590CA1E85429DDD"
  },
  "num_txs": "2"
}

```

</p>
</details>

## Query Module Versions

Retrieve the list of module versions

```bash
sentinelhub query upgrades module_versions \
  --node https://rpc.sentinel.co:443
```
<details>
<summary>Example Output</summary>
<p>

```bash
module_versions:
- name: auth
  version: "2"
- name: authz
  version: "1"
- name: bank
  version: "2"
- name: capability
  version: "1"
- name: crisis
  version: "1"
- name: custommint
  version: "1"
- name: distribution
  version: "2"
- name: evidence
  version: "1"
- name: feegrant
  version: "1"
- name: feeibc
  version: "1"
- name: genutil
  version: "1"
- name: gov
  version: "2"
- name: ibc
  version: "2"
- name: interchainaccounts
  version: "1"
- name: mint
  version: "1"
- name: params
  version: "1"
- name: slashing
  version: "2"
- name: staking
  version: "2"
- name: swap
  version: "1"
- name: transfer
  version: "2"
- name: upgrade
  version: "1"
- name: vesting
  version: "1"
- name: vpn
  version: "3"
- name: wasm
  version: "2"
```

</p>
</details>

## Query Upgrade Plan

Retrieve the upgrade plan (if one exists)

```bash
sentinelhub query upgrades plan \
  --node https://rpc.sentinel.co:443
```
<details>
<summary>Example Output</summary>
<p>

```bash
Error: no upgrade scheduled
```

</p>
</details>
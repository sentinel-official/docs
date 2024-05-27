---
title: Distribution
sidebar_position: 4
---

The query distribution module encompasses aspects such as community pool management, validator commissions, delegator rewards, parameter settings, and slashing mechanisms.

## Query Validator Commission

Query unclaimed validator commission rewards.

```bash
sentinelhub query distribution commission \
  <sentvaloper_address> \
  --node https://rpc.sentinel.co:443
```
<details>
<summary>Example Output</summary>
<p>

```bash title="Growth DAO Validator"
commission:
- amount: "1349.026124919648622310"
  denom: ibc/31FEE1A2A9F9C01113F90BD0BBCCE8FD6BBB8585FAF109A2101827DD1D5B95B8
- amount: "626.063171814595237778"
  denom: ibc/B1C0DDB14F25279A2026BC8794E12B259F8BDA546A3C5132CCAEE4431CE36783
- amount: "0.486344711599118358"
  denom: ibc/ED07A3391A112B175915CD8FAF43A2DA8E4790EDE12566649D0C2F97716B8518
- amount: "171166623469.972403249105369131"
  denom: udvpn
```

</p>
</details>

## Query Community Pool

Query all coins in the community pool which is under Governance control.

```bash
sentinelhub query distribution community-pool \
  --node https://rpc.sentinel.co:443
```
<details>
<summary>Example Output</summary>
<p>

```bash
pool:
- amount: "100382.255586906014459012"
  denom: ibc/31FEE1A2A9F9C01113F90BD0BBCCE8FD6BBB8585FAF109A2101827DD1D5B95B8
- amount: "10236243.275445096515608896"
  denom: ibc/B1C0DDB14F25279A2026BC8794E12B259F8BDA546A3C5132CCAEE4431CE36783
- amount: "21235.569174625944399127"
  denom: ibc/ED07A3391A112B175915CD8FAF43A2DA8E4790EDE12566649D0C2F97716B8518
- amount: "16858174830555.529616387696736220"
  denom: udvpn
```

</p>
</details>

## Query Params

Query distribution params

```bash
sentinelhub query distribution params \
  --node https://rpc.sentinel.co:443
```
<details>
<summary>Example Output</summary>
<p>

```bash
base_proposer_reward: "0.000000000000000000"
bonus_proposer_reward: "0.000000000000000000"
community_tax: "0.070000000000000000"
withdraw_addr_enabled: true
```

</p>
</details>

## Query Rewards

Query all rewards earned by a delegator, optionally restrict to rewards from a single validator.

```bash
sentinelhub query distribution rewards \
  <delegator_address> <optional_validator_address> \
  --node https://rpc.sentinel.co:443
```
<details>
<summary>Example Output</summary>
<p>

```bash
rewards:
- reward: []
  validator_address: sentvaloper1qz2ytxg4pjna69dskzlg7kn2ge87rxryy8yntd
- reward: []
  validator_address: sentvaloper19p8frvqh8qq6ayjg40ew4tg0l364efmzy7sspw
- reward:
  - amount: "190.410114251013920640"
    denom: ibc/31FEE1A2A9F9C01113F90BD0BBCCE8FD6BBB8585FAF109A2101827DD1D5B95B8
  - amount: "486.192815517286228608"
    denom: ibc/B1C0DDB14F25279A2026BC8794E12B259F8BDA546A3C5132CCAEE4431CE36783
  - amount: "23304049346.622692823354559872"
    denom: udvpn
  validator_address: sentvaloper18tmu0lrfsdvke8e3a3jsd7fq2rs29krf43yj25
- reward:
  - amount: "159.922001219508000000"
    denom: ibc/31FEE1A2A9F9C01113F90BD0BBCCE8FD6BBB8585FAF109A2101827DD1D5B95B8
  - amount: "408.344371651380000000"
    denom: ibc/B1C0DDB14F25279A2026BC8794E12B259F8BDA546A3C5132CCAEE4431CE36783
  - amount: "19624331605.394482222984000000"
    denom: udvpn
  validator_address: sentvaloper12w34cjj3swmzfcl0pmt3xud58z835h3w9xacpr
- reward:
  - amount: "66.303756869617851259"
    denom: ibc/31FEE1A2A9F9C01113F90BD0BBCCE8FD6BBB8585FAF109A2101827DD1D5B95B8
  - amount: "169.299883879329995953"
    denom: ibc/B1C0DDB14F25279A2026BC8794E12B259F8BDA546A3C5132CCAEE4431CE36783
  - amount: "8136264811.632678767650939991"
    denom: udvpn
  validator_address: sentvaloper1tjgec0ssfrlldmut69xsp8vzljugg0g306aae2
- reward:
  - amount: "190.669499998747000000"
    denom: ibc/31FEE1A2A9F9C01113F90BD0BBCCE8FD6BBB8585FAF109A2101827DD1D5B95B8
  - amount: "486.855024921265000000"
    denom: ibc/B1C0DDB14F25279A2026BC8794E12B259F8BDA546A3C5132CCAEE4431CE36783
  - amount: "23335995414.755083697021000000"
    denom: udvpn
  validator_address: sentvaloper1vwtr4k00w936uutgpek57vl90vp88vmzdfv0n5
- reward:
  - amount: "831.407085156912000000"
    denom: ibc/31FEE1A2A9F9C01113F90BD0BBCCE8FD6BBB8585FAF109A2101827DD1D5B95B8
  - amount: "2122.909995139736000000"
    denom: ibc/B1C0DDB14F25279A2026BC8794E12B259F8BDA546A3C5132CCAEE4431CE36783
  - amount: "101754688053.928956873420000000"
    denom: udvpn
  validator_address: sentvaloper10y0044zsacejntznk6eatvz7mcekqv357fhl7q
- reward:
  - amount: "454.445913120096000000"
    denom: ibc/31FEE1A2A9F9C01113F90BD0BBCCE8FD6BBB8585FAF109A2101827DD1D5B95B8
  - amount: "1160.380403120424000000"
    denom: ibc/B1C0DDB14F25279A2026BC8794E12B259F8BDA546A3C5132CCAEE4431CE36783
  - amount: "55618664610.733317360456000000"
    denom: udvpn
  validator_address: sentvaloper10wq46f8du234aqtlucv7h9jtrfuxmcntgw06ju
- reward:
  - amount: "201.493275885822000000"
    denom: ibc/31FEE1A2A9F9C01113F90BD0BBCCE8FD6BBB8585FAF109A2101827DD1D5B95B8
  - amount: "514.492319517597000000"
    denom: ibc/B1C0DDB14F25279A2026BC8794E12B259F8BDA546A3C5132CCAEE4431CE36783
  - amount: "24660697595.792675435073000000"
    denom: udvpn
  validator_address: sentvaloper1sazxkmhym0zcg9tmzvc4qxesqegs3q4u66tpmf
- reward:
  - amount: "213.055318959325000000"
    denom: ibc/31FEE1A2A9F9C01113F90BD0BBCCE8FD6BBB8585FAF109A2101827DD1D5B95B8
  - amount: "544.014892825970000000"
    denom: ibc/B1C0DDB14F25279A2026BC8794E12B259F8BDA546A3C5132CCAEE4431CE36783
  - amount: "26075594430.295005466465000000"
    denom: udvpn
  validator_address: sentvaloper1e7mvqlz50ch6gw4yjfemsc069wfre4qwmw53kq
- reward:
  - amount: "362.703047952629789744"
    denom: ibc/31FEE1A2A9F9C01113F90BD0BBCCE8FD6BBB8585FAF109A2101827DD1D5B95B8
  - amount: "926.125287734407733068"
    denom: ibc/B1C0DDB14F25279A2026BC8794E12B259F8BDA546A3C5132CCAEE4431CE36783
  - amount: "44390543452.101025522801602590"
    denom: udvpn
  validator_address: sentvaloper16yg44hae44lcdexmmk7wpaphny0ahmqf6zevq5
- reward:
  - amount: "333.576027476950000000"
    denom: ibc/31FEE1A2A9F9C01113F90BD0BBCCE8FD6BBB8585FAF109A2101827DD1D5B95B8
  - amount: "851.752441585227000000"
    denom: ibc/B1C0DDB14F25279A2026BC8794E12B259F8BDA546A3C5132CCAEE4431CE36783
  - amount: "40825451026.154952619094000000"
    denom: udvpn
  validator_address: sentvaloper1mcwvu4vpvfcnxduzpelehmgga282wtc0xux7se
total:
- amount: "3003.986040890621561643"
  denom: ibc/31FEE1A2A9F9C01113F90BD0BBCCE8FD6BBB8585FAF109A2101827DD1D5B95B8
- amount: "7670.367435892622957629"
  denom: ibc/B1C0DDB14F25279A2026BC8794E12B259F8BDA546A3C5132CCAEE4431CE36783
- amount: "367726280347.410870788320102453"
  denom: udvpn
```

</p>
</details>

## Query Slashes

Query all slashes of a validator for a given block range.

```bash
sentinelhub query distribution slashes \
  <sentvaloper_address> \
  <start_height> <end_height> \
  --node https://rpc.sentinel.co:443
```
<details>
<summary>Example Output</summary>
<p>

```bash
pagination:
  next_key: null
  total: "0"
slashes: []
```

</p>
</details>

## Query Validator Outstanding Rewards

Query distribution outstanding (un-withdrawn) rewards for a validator and all their delegations.

```bash
sentinelhub query distribution slashes \
  <sentvaloper_address> \
  <start_height> <end_height> \
  --node https://rpc.sentinel.co:443
```
<details>
<summary>Example Output</summary>
<p>

```bash title="Growth DAO Validator"
rewards:
- amount: "0.555474815271982392"
  denom: ibc/31FEE1A2A9F9C01113F90BD0BBCCE8FD6BBB8585FAF109A2101827DD1D5B95B8
- amount: "0.063171814595237778"
  denom: ibc/B1C0DDB14F25279A2026BC8794E12B259F8BDA546A3C5132CCAEE4431CE36783
- amount: "0.486344711599118358"
  denom: ibc/ED07A3391A112B175915CD8FAF43A2DA8E4790EDE12566649D0C2F97716B8518
- amount: "1042101512.596119252915596703"
  denom: udvpn
```

</p>
</details>
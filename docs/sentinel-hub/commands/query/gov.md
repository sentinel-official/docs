---
title: Governance
sidebar_position: 5
---

The governance module queries proposals on the blockchain.

## Query Initial Deposit

Retrieve information regarding the initial deposit and creator of a specific proposal.

```bash
sentinelhub query gov deposit \
  <proposal_id> \
  <depositer_address> \
  --node https://rpc.sentinel.co:443
```
<details>
<summary>Example Output</summary>
<p>

```bash title="Initial depositer"
amount:
- amount: "1000000"
  denom: udvpn
depositor: sent1nygcr5p33plzq4akfxnl3nr7nf59gnshvtkzs6
proposal_id: "47"
```

</p>
</details>

## Query Deposits

Retrieve information regarding all deposits associated with a specific proposal.

```bash
sentinelhub query gov deposits \
  <proposal_id> \
  --node https://rpc.sentinel.co:443
```
<details>
<summary>Example Output</summary>
<p>

```bash title="Depositers"
- amount:
  - amount: "1000000"
    denom: udvpn
  depositor: sent1p2xps5cp06jw5rhk7cwvp9u7pxvtnywc4wyyy0
  proposal_id: "39"
- amount:
  - amount: "140001000000"
    denom: udvpn
  depositor: sent1mcwvu4vpvfcnxduzpelehmgga282wtc0eeenls
  proposal_id: "39"
- amount:
  - amount: "360000000000"
    denom: udvpn
  depositor: sent1p2xps5cp06jw5rhk7cwvp9u7pxvtnywc4wyyy0
  proposal_id: "39"
```

</p>
</details>

## Query Parameters

### All

Retrieve all parameters related to the governance process.

```bash
sentinelhub query gov params \
  --node https://rpc.sentinel.co:443
```
<details>
<summary>Example Output</summary>
<p>

```bash
deposit_params:
  max_deposit_period: "1209600000000000"
  min_deposit:
  - amount: "500000000000"
    denom: udvpn
tally_params:
  quorum: "0.334000000000000000"
  threshold: "0.500000000000000000"
  veto_threshold: "0.334000000000000000"
voting_params:
  voting_period: "604800000000000"
```

</p>
</details>

### Voting

Retrieve the voting parameter related to the governance process.

```bash
sentinelhub query gov param voting \
  --node https://rpc.sentinel.co:443
```
<details>
<summary>Example Output</summary>
<p>

```bash
voting_period: "604800000000000"
```

</p>
</details>

### Tallying

Retrieve the tallying parameter related to the governance process.

```bash
sentinelhub query gov param tallying \
  --node https://rpc.sentinel.co:443
```

<details>
<summary>Example Output</summary>
<p>

```bash
quorum: "0.334000000000000000"
threshold: "0.500000000000000000"
veto_threshold: "0.334000000000000000"
```

</p>
</details>

### Deposit

Retrieve the deposit parameter related to the governance process.

```bash
sentinelhub query gov param deposit \
  --node https://rpc.sentinel.co:443
```
<details>
<summary>Example Output</summary>
<p>

```bash
max_deposit_period: "1209600000000000"
min_deposit:
- amount: "500000000000"
  denom: udvpn
```

</p>
</details>

## Query Proposals

### All

Retrieve all the proposals.

```bash
sentinelhub query gov proposals \
  --node https://rpc.sentinel.co:443
```

You can enhance your command by incorporating optional filters:

```bash
sentinelhub query gov proposals \
  --status<status> \
  --page=<page_number> --limit=<limit_number> \
  --node https://rpc.sentinel.co:443
```

<details>
<summary>Example Output</summary>
<p>

```bash
- content:
    '@type': /cosmos.params.v1beta1.ParameterChangeProposal
    changes:
    - key: MinHourlyPrices
      subspace: vpn/node
      value: |-
        [
                {
                  "denom": "ibc/31FEE1A2A9F9C01113F90BD0BBCCE8FD6BBB8585FAF109A2101827DD1D5B95B8",
                  "amount": "1"
                },
                {
                  "denom": "ibc/A8C2D23A1E6F95DA4E48BA349667E322BD7A6C996D8A4AAE8BA72E190F3D1477",
                  "amount": "1"
                },
                {
                  "denom": "ibc/B1C0DDB14F25279A2026BC8794E12B259F8BDA546A3C5132CCAEE4431CE36783",
                  "amount": "1"
                },
                {
                  "denom": "ibc/ED07A3391A112B175915CD8FAF43A2DA8E4790EDE12566649D0C2F97716B8518",
                  "amount": "1"
                },
                {
                  "denom": "udvpn",
                  "amount": "1"
                }
              ]
    - key: MinGigabytePrices
      subspace: vpn/node
      value: |-
        [
                {
                  "denom": "ibc/31FEE1A2A9F9C01113F90BD0BBCCE8FD6BBB8585FAF109A2101827DD1D5B95B8",
                  "amount": "1"
                },
                {
                  "denom": "ibc/A8C2D23A1E6F95DA4E48BA349667E322BD7A6C996D8A4AAE8BA72E190F3D1477",
                  "amount": "1"
                },
                {
                  "denom": "ibc/B1C0DDB14F25279A2026BC8794E12B259F8BDA546A3C5132CCAEE4431CE36783",
                  "amount": "1"
                },
                {
                  "denom": "ibc/ED07A3391A112B175915CD8FAF43A2DA8E4790EDE12566649D0C2F97716B8518",
                  "amount": "1"
                },
                {
                  "denom": "udvpn",
                  "amount": "1"
                }
              ]
    description: Due to the recent volatility and the fact that the automated node
      pricing update will be soon, the minimum pricing will now be removed and node
      hosts will have to adjust their prices as per the updates that will be shared
      in the relevant groups. Thanks for bearing with until the automation comes in.
    title: Removal of manual minimum node pricing
  deposit_end_time: "2024-01-07T20:26:00.259700235Z"
  final_tally_result:
    abstain: "357205457388116"
    "no": "1000000000000"
    no_with_veto: "515962135106"
    "yes": "10755357664569232"
  proposal_id: "47"
  status: PROPOSAL_STATUS_PASSED
  submit_time: "2023-12-24T20:26:00.259700235Z"
  total_deposit:
  - amount: "500001000000"
    denom: udvpn
  voting_end_time: "2023-12-31T20:28:46.511418193Z"
  voting_start_time: "2023-12-24T20:28:46.511418193Z"
```

</p>
</details>

### A Single Proposal

Retrieve information about a proposal.

```bash
sentinelhub query gov proposal <proposal_id> \
  --node https://rpc.sentinel.co:443
```

<details>
<summary>Example Output</summary>
<p>

```bash
content:
  '@type': /cosmos.distribution.v1beta1.CommunityPoolSpendProposal
  amount:
  - amount: "60000000000000"
    denom: udvpn
  description: |-
    Original proposal text: [HERE](https://docs.google.com/document/d/1XZXl5utodSm48gXwsi2PDlVocpiChFois_N1Q__mWlc/edit?usp=sharing)

    With 50% used to stake towards the DAO’s validator and the other 50% towards advertising across multiple channels for various campaigns. - To be determined.

    Given the recent performance of Sentinel, marked by a significant number of products either already on the market or poised for imminent release, it is an opportune moment to establish a marketing fund. This fund will be dedicated to financing paid advertising across a diverse range of platforms. Our strategy includes leveraging Telegram groups, sponsored Telegram ads, Twitter (X), LinkedIn, and any other social platforms that are deemed effective. The primary goal of this initiative is to maximize our reach, encouraging a greater number of users to download Sentinel-based VPNs.

    To finance this initiative, we plan to gradually convert DVPN coins into USDT. This process will be carefully managed to minimize market impact. We will explore two primary avenues for this conversion: engaging in over-the-counter (OTC) transactions with individual parties or executing measured sales on exchanges. In the case of exchange sales, we propose a cautious approach, such as selling around $100 per day, to avoid any adverse effects on the coin's price. This strategy ensures a steady funding stream

    By voting NO, you disagree with the proposal.
    By voting ABSTAIN, you refrain from voting.
    By voting NO WITH VETO, you see this proposal as harmful or spam
  recipient: sent1up98v3pexk5l0l0vmn485rxdedkqae6pmrkh8k
  title: Growth DAO requests to allocate funds currently in the community fund and
    take them under DAO control
deposit_end_time: "2023-12-30T20:10:42.807197946Z"
final_tally_result:
  abstain: "1434413472929150"
  "no": "10429231612087988"
  no_with_veto: "1550890264702"
  "yes": "5647565963603"
proposal_id: "45"
status: PROPOSAL_STATUS_REJECTED
submit_time: "2023-12-16T20:10:42.807197946Z"
total_deposit:
- amount: "500001000000"
  denom: udvpn
voting_end_time: "2023-12-23T20:13:45.917631718Z"
voting_start_time: "2023-12-16T20:13:45.917631718Z"
```

</p>
</details>

# A Proposer

Retrieve the address associated with a proposal identified by a given ID.

```bash
sentinelhub query gov proposer <proposal_id> \
  --node https://rpc.sentinel.co:443
```

<details>
<summary>Example Output</summary>
<p>

```bash
proposal_id: "45"
proposer: sent1nygcr5p33plzq4akfxnl3nr7nf59gnshvtkzs6
```

</p>
</details>

### A Proposal Tally

Retrieve the vote count for a proposal.

```bash
sentinelhub query gov tally <proposal_id> \
  --node https://rpc.sentinel.co:443
```

<details>
<summary>Example Output</summary>
<p>

```bash
abstain: "357205457388116"
"no": "1000000000000"
no_with_veto: "515962135106"
"yes": "10755357664569232"
```

</p>
</details>
---
title: VPN
sidebar_position: 8
---

Querying commands for the vpn module

## Query Allocations

Retrieve information regarding the subscription allocations.

```bash
sentinelhub query vpn allocations [subscription_id] \
  --node https://rpc.sentinel.co:443
```
<details>
<summary>Example Output</summary>
<p>

```bash
allocations:
- address: sent1ecuszz8jyyj2awj3um3vy7vp3j2nmenpcx6qlj
  granted_bytes: "4000000000"
  id: "536371"
  utilised_bytes: "93720450"
pagination:
  next_key: null
  total: "0"
```

</p>
</details>

## Query Allocation Info

Retrieve information regarding a specific subscription allocation.

```bash
sentinelhub query vpn allocations [subscription_id] [account-address] \
  --node https://rpc.sentinel.co:443
```
<details>
<summary>Example Output</summary>
<p>

```bash
allocation:
  address: sent1ecuszz8jyyj2awj3um3vy7vp3j2nmenpcx6qlj
  granted_bytes: "4000000000"
  id: "536371"
  utilised_bytes: "93720450"
```

</p>
</details>

## Query Deposits

Retrieve information regarding the deposits.

```bash
sentinelhub query vpn deposits \
  --node https://rpc.sentinel.co:443
```
<details>
<summary>Example Output</summary>
<p>

```bash
deposits:
- address: sent1llte2g2v67sc2x9nns256q63mfdgd0qthkwlhq
  coins:
  - amount: "203185679"
    denom: udvpn
- address: sent1lhldmyvyqekg8gmkq867f997vqvryyz0nvhhff
  coins:
  - amount: "1180852"
    denom: ibc/B1C0DDB14F25279A2026BC8794E12B259F8BDA546A3C5132CCAEE4431CE36783
pagination:
  next_key: FP2vsI+19jLsqeMcTRWrIZaVWfzf
  total: "0"
```

</p>
</details>

## Query Deposit Info

Retrieve information regarding a specific deposit.

```bash
sentinelhub query vpn deposits [deposit_address] \
  --node https://rpc.sentinel.co:443
```
<details>
<summary>Example Output</summary>
<p>

```bash
deposit:
  address: sent1llte2g2v67sc2x9nns256q63mfdgd0qthkwlhq
  coins:
  - amount: "203185679"
    denom: udvpn
```

</p>
</details>

## Query Nodes

Retrieve information regarding the sentinel nodes.

```bash
sentinelhub query vpn nodes \
  --node https://rpc.sentinel.co:443
```
<details>
<summary>Example Output</summary>
<p>

```bash
nodes:
- address: sentnode1ll7gmtzejcw8ycu3hexay8wlmjuau98veypv7p
  gigabyte_prices:
  - amount: "105000"
    denom: ibc/31FEE1A2A9F9C01113F90BD0BBCCE8FD6BBB8585FAF109A2101827DD1D5B95B8
  - amount: "9204"
    denom: ibc/A8C2D23A1E6F95DA4E48BA349667E322BD7A6C996D8A4AAE8BA72E190F3D1477
  - amount: "5000000"
    denom: ibc/B1C0DDB14F25279A2026BC8794E12B259F8BDA546A3C5132CCAEE4431CE36783
  - amount: "122740"
    denom: ibc/ED07A3391A112B175915CD8FAF43A2DA8E4790EDE12566649D0C2F97716B8518
  - amount: "150000000"
    denom: udvpn
  hourly_prices:
  - amount: "168000"
    denom: ibc/31FEE1A2A9F9C01113F90BD0BBCCE8FD6BBB8585FAF109A2101827DD1D5B95B8
  - amount: "6000"
    denom: ibc/A8C2D23A1E6F95DA4E48BA349667E322BD7A6C996D8A4AAE8BA72E190F3D1477
  - amount: "5000000"
    denom: ibc/B1C0DDB14F25279A2026BC8794E12B259F8BDA546A3C5132CCAEE4431CE36783
  - amount: "80000"
    denom: ibc/ED07A3391A112B175915CD8FAF43A2DA8E4790EDE12566649D0C2F97716B8518
  - amount: "130000000"
    denom: udvpn
  inactive_at: "0001-01-01T00:00:00Z"
  remote_url: https://65.21.121.4:6044
  status: inactive
  status_at: "2022-10-12T00:19:47.796270733Z"
- address: sentnode1lla0v268p0jshvehuhe9jhshzcq2gj8ap8j9gs
  gigabyte_prices:
  - amount: "52573"
    denom: ibc/31FEE1A2A9F9C01113F90BD0BBCCE8FD6BBB8585FAF109A2101827DD1D5B95B8
  - amount: "9204"
    denom: ibc/A8C2D23A1E6F95DA4E48BA349667E322BD7A6C996D8A4AAE8BA72E190F3D1477
  - amount: "1180852"
    denom: ibc/B1C0DDB14F25279A2026BC8794E12B259F8BDA546A3C5132CCAEE4431CE36783
  - amount: "122740"
    denom: ibc/ED07A3391A112B175915CD8FAF43A2DA8E4790EDE12566649D0C2F97716B8518
  - amount: "15342624"
    denom: udvpn
  hourly_prices:
  - amount: "18480"
    denom: ibc/31FEE1A2A9F9C01113F90BD0BBCCE8FD6BBB8585FAF109A2101827DD1D5B95B8
  - amount: "770"
    denom: ibc/A8C2D23A1E6F95DA4E48BA349667E322BD7A6C996D8A4AAE8BA72E190F3D1477
  - amount: "1871892"
    denom: ibc/B1C0DDB14F25279A2026BC8794E12B259F8BDA546A3C5132CCAEE4431CE36783
  - amount: "18897"
    denom: ibc/ED07A3391A112B175915CD8FAF43A2DA8E4790EDE12566649D0C2F97716B8518
  - amount: "4160000"
    denom: udvpn
  inactive_at: "0001-01-01T00:00:00Z"
  remote_url: https://103.56.218.82:30021
  status: inactive
  status_at: "2024-03-16T00:45:44.741463742Z"
pagination:
  next_key: AhT/+YxOvcCtyt9cFullbXKxNQoBSg==
  total: "0"
```

</p>
</details>

## Query Node Info

Retrieve information regarding a specific sentinel node.

```bash
sentinelhub query vpn node [node_address] \
  --node https://rpc.sentinel.co:443
```
<details>
<summary>Example Output</summary>
<p>

```bash
node:
  address: sentnode1ll7gmtzejcw8ycu3hexay8wlmjuau98veypv7p
  gigabyte_prices:
  - amount: "105000"
    denom: ibc/31FEE1A2A9F9C01113F90BD0BBCCE8FD6BBB8585FAF109A2101827DD1D5B95B8
  - amount: "9204"
    denom: ibc/A8C2D23A1E6F95DA4E48BA349667E322BD7A6C996D8A4AAE8BA72E190F3D1477
  - amount: "5000000"
    denom: ibc/B1C0DDB14F25279A2026BC8794E12B259F8BDA546A3C5132CCAEE4431CE36783
  - amount: "122740"
    denom: ibc/ED07A3391A112B175915CD8FAF43A2DA8E4790EDE12566649D0C2F97716B8518
  - amount: "150000000"
    denom: udvpn
  hourly_prices:
  - amount: "168000"
    denom: ibc/31FEE1A2A9F9C01113F90BD0BBCCE8FD6BBB8585FAF109A2101827DD1D5B95B8
  - amount: "6000"
    denom: ibc/A8C2D23A1E6F95DA4E48BA349667E322BD7A6C996D8A4AAE8BA72E190F3D1477
  - amount: "5000000"
    denom: ibc/B1C0DDB14F25279A2026BC8794E12B259F8BDA546A3C5132CCAEE4431CE36783
  - amount: "80000"
    denom: ibc/ED07A3391A112B175915CD8FAF43A2DA8E4790EDE12566649D0C2F97716B8518
  - amount: "130000000"
    denom: udvpn
  inactive_at: "0001-01-01T00:00:00Z"
  remote_url: https://65.21.121.4:6044
  status: inactive
  status_at: "2022-10-12T00:19:47.796270733Z"
```

</p>
</details>

## Query Node Params

Retrieve information regarding the node module params.

```bash
sentinelhub query vpn node-params \
  --node https://rpc.sentinel.co:443
```
<details>
<summary>Example Output</summary>
<p>

```bash
params:
  active_duration: 3600s
  deposit:
    amount: "0"
    denom: udvpn
  max_gigabyte_prices:
  - amount: "477940"
    denom: ibc/31FEE1A2A9F9C01113F90BD0BBCCE8FD6BBB8585FAF109A2101827DD1D5B95B8
  - amount: "83680"
    denom: ibc/A8C2D23A1E6F95DA4E48BA349667E322BD7A6C996D8A4AAE8BA72E190F3D1477
  - amount: "10735020"
    denom: ibc/B1C0DDB14F25279A2026BC8794E12B259F8BDA546A3C5132CCAEE4431CE36783
  - amount: "1115820"
    denom: ibc/ED07A3391A112B175915CD8FAF43A2DA8E4790EDE12566649D0C2F97716B8518
  - amount: "153426240"
    denom: udvpn
  max_hourly_prices:
  - amount: "168000"
    denom: ibc/31FEE1A2A9F9C01113F90BD0BBCCE8FD6BBB8585FAF109A2101827DD1D5B95B8
  - amount: "7000"
    denom: ibc/A8C2D23A1E6F95DA4E48BA349667E322BD7A6C996D8A4AAE8BA72E190F3D1477
  - amount: "17017200"
    denom: ibc/B1C0DDB14F25279A2026BC8794E12B259F8BDA546A3C5132CCAEE4431CE36783
  - amount: "171790"
    denom: ibc/ED07A3391A112B175915CD8FAF43A2DA8E4790EDE12566649D0C2F97716B8518
  - amount: "135572000"
    denom: udvpn
  max_subscription_gigabytes: "1000000"
  max_subscription_hours: "720"
  min_gigabyte_prices:
  - amount: "1"
    denom: ibc/31FEE1A2A9F9C01113F90BD0BBCCE8FD6BBB8585FAF109A2101827DD1D5B95B8
  - amount: "1"
    denom: ibc/A8C2D23A1E6F95DA4E48BA349667E322BD7A6C996D8A4AAE8BA72E190F3D1477
  - amount: "1"
    denom: ibc/B1C0DDB14F25279A2026BC8794E12B259F8BDA546A3C5132CCAEE4431CE36783
  - amount: "1"
    denom: ibc/ED07A3391A112B175915CD8FAF43A2DA8E4790EDE12566649D0C2F97716B8518
  - amount: "1"
    denom: udvpn
  min_hourly_prices:
  - amount: "1"
    denom: ibc/31FEE1A2A9F9C01113F90BD0BBCCE8FD6BBB8585FAF109A2101827DD1D5B95B8
  - amount: "1"
    denom: ibc/A8C2D23A1E6F95DA4E48BA349667E322BD7A6C996D8A4AAE8BA72E190F3D1477
  - amount: "1"
    denom: ibc/B1C0DDB14F25279A2026BC8794E12B259F8BDA546A3C5132CCAEE4431CE36783
  - amount: "1"
    denom: ibc/ED07A3391A112B175915CD8FAF43A2DA8E4790EDE12566649D0C2F97716B8518
  - amount: "1"
    denom: udvpn
  min_subscription_gigabytes: "1"
  min_subscription_hours: "1"
  staking_share: "0.200000000000000000"
```

</p>
</details>

## Query Payouts

Retrieve information regarding the payouts.

```bash
sentinelhub query vpn payouts \
  --node https://rpc.sentinel.co:443
```
<details>
<summary>Example Output</summary>
<p>

```bash
pagination:
  next_key: AAAAAAAIL3E=
  total: "0"
payouts:
- address: sent17h00cnhccphxftsxm98s88n3s20quqkj4jg6dv
  hours: "167"
  id: "536435"
  next_at: "2024-05-27T08:49:44.604790891Z"
  node_address: sentnode13vvhuzz9s3jf2sltqmrj2w0ad0043vth4yxc5u
  price:
    amount: "4160000"
    denom: udvpn
- address: sent17h00cnhccphxftsxm98s88n3s20quqkj4jg6dv
  hours: "167"
  id: "536434"
  next_at: "2024-05-27T08:49:38.730268717Z"
  node_address: sentnode1n0gcfcnfefgta26ynqq33dvscvsxdyf944xqdv
  price:
    amount: "4160000"
    denom: udvpn
```

</p>
</details>

## Query Payout Info

Retrieve information regarding a specific payout.

```bash
sentinelhub query vpn payout [payout_id] \
  --node https://rpc.sentinel.co:443
```
<details>
<summary>Example Output</summary>
<p>

```bash
payout:
  address: sent17h00cnhccphxftsxm98s88n3s20quqkj4jg6dv
  hours: "167"
  id: "536435"
  next_at: "2024-05-27T08:49:44.604790891Z"
  node_address: sentnode13vvhuzz9s3jf2sltqmrj2w0ad0043vth4yxc5u
  price:
    amount: "4160000"
    denom: udvpn
```

</p>
</details>

## Query Plans

Retrieve information regarding the plans.

```bash
sentinelhub query vpn plans \
  --node https://rpc.sentinel.co:443
```
<details>
<summary>Example Output</summary>
<p>

```bash
pagination:
  next_key: AgAAAAAAAAAc
  total: "0"
plans:
- duration: 2592000s
  gigabytes: "9999999999999"
  id: "31"
  prices:
  - amount: "1333330000"
    denom: udvpn
  provider_address: sentprov17h00cnhccphxftsxm98s88n3s20quqkja95pk5
  status: inactive
  status_at: "2024-04-11T13:45:00.681815995Z"
- duration: 2592000s
  gigabytes: "9999999999999"
  id: "30"
  prices:
  - amount: "1333330000"
    denom: udvpn
  provider_address: sentprov17h00cnhccphxftsxm98s88n3s20quqkja95pk5
  status: inactive
  status_at: "2024-04-11T13:42:19.796834813Z"
```

</p>
</details>

## Query Plan Info

Retrieve information regarding a specific plan.

```bash
sentinelhub query vpn plan [plan_id] \
  --node https://rpc.sentinel.co:443
```
<details>
<summary>Example Output</summary>
<p>

```bash
plan:
  duration: 2592000s
  gigabytes: "9999999999999"
  id: "31"
  prices:
  - amount: "1333330000"
    denom: udvpn
  provider_address: sentprov17h00cnhccphxftsxm98s88n3s20quqkja95pk5
  status: inactive
  status_at: "2024-04-11T13:45:00.681815995Z"
```

</p>
</details>

## Query Providers

Retrieve information regarding the providers.

```bash
sentinelhub query vpn providers \
  --node https://rpc.sentinel.co:443
```
<details>
<summary>Example Output</summary>
<p>

```bash
pagination:
  next_key: ARTve9qg1kymseR8GKZL43WHc5QSYw==
  total: "0"
providers:
- address: sentprov1gjkdw8arm54sv7xdhjxnx30lcya4alhfktuxyy
  description: SOLAR dVPN
  identity: 6257A55EA42BA680
  name: SOLAR dVPN
  status: active
  status_at: "2023-08-18T12:10:36.572027592Z"
  website: https://labs.solar
- address: sentprov1gatdlpdc4fadckccypjfnam2a4rcmum55q46zn
  description: ""
  identity: sentprov12kyhkw2xsc8g3t8dtz569c6fn2qejmzs92s07h
  name: apiVPN (Staging)
  status: active
  status_at: "2023-12-29T07:24:24.274968530Z"
  website: https://apivpn.io
```

</p>
</details>

## Query Provider Info

Retrieve information regarding a specific provider.

```bash
sentinelhub query vpn provider [provider_address] \
  --node https://rpc.sentinel.co:443
```
<details>
<summary>Example Output</summary>
<p>

```bash
provider:
  address: sentprov1gjkdw8arm54sv7xdhjxnx30lcya4alhfktuxyy
  description: SOLAR dVPN
  identity: 6257A55EA42BA680
  name: SOLAR dVPN
  status: active
  status_at: "2023-08-18T12:10:36.572027592Z"
  website: https://labs.solar
```

</p>
</details>

## Query Provider Params

Retrieve information regarding the provider module params.

```bash
sentinelhub query vpn provider-params \
  --node https://rpc.sentinel.co:443
```
<details>
<summary>Example Output</summary>
<p>

```bash
params:
  deposit:
    amount: "25000000000"
    denom: udvpn
  staking_share: "0.200000000000000000"
```

</p>
</details>

## Query Sessions

Retrieve information regarding the sessions.

```bash
sentinelhub query vpn sessions \
  --node https://rpc.sentinel.co:443
```
<details>
<summary>Example Output</summary>
<p>

```bash
pagination:
  next_key: AAAAAABtK1M=
  total: "0"
sessions:
- address: sent1m59kme7ze64y5xdx9qf34egts2n75s6rk7s440
  bandwidth:
    download: "134839672"
    upload: "2093403"
  duration: 1527102.238250128s
  id: "6983783"
  inactive_at: "2024-05-27T10:00:51.062067319Z"
  node_address: sentnode1uwuwrr47vhf253wt9h72h2t74cy9y4hzt2p347
  status: active
  status_at: "2024-05-09T15:39:46.315804597Z"
  subscription_id: "521278"
- address: sent1m59kme7ze64y5xdx9qf34egts2n75s6rk7s440
  bandwidth:
    download: "35506669"
    upload: "1727060"
  duration: 1196093.023347066s
  id: "7142303"
  inactive_at: "2024-05-27T09:59:17.184723488Z"
  node_address: sentnode1jx8xswsw2h9zsjsxc8cfx2dw2d0n6v92m4y9pr
  status: active
  status_at: "2024-05-13T11:36:34.935109352Z"
  subscription_id: "510506"
```

</p>
</details>

## Query Session Info

Retrieve information regarding a specific session.

```bash
sentinelhub query vpn session [session_id] \
  --node https://rpc.sentinel.co:443
```
<details>
<summary>Example Output</summary>
<p>

```bash
session:
  address: sent1m59kme7ze64y5xdx9qf34egts2n75s6rk7s440
  bandwidth:
    download: "134839672"
    upload: "2093403"
  duration: 1527102.238250128s
  id: "6983783"
  inactive_at: "2024-05-27T10:00:51.062067319Z"
  node_address: sentnode1uwuwrr47vhf253wt9h72h2t74cy9y4hzt2p347
  status: active
  status_at: "2024-05-09T15:39:46.315804597Z"
  subscription_id: "521278"
```

</p>
</details>

## Query Session Params

Retrieve information regarding the session module params.

```bash
sentinelhub query vpn session-params \
  --node https://rpc.sentinel.co:443
```
<details>
<summary>Example Output</summary>
<p>

```bash
params:
  proof_verification_enabled: false
  status_change_delay: 7200s
```

</p>
</details>

## Query Subscriptions

Retrieve information regarding the subscriptions.

```bash
sentinelhub query vpn subscriptions \
  --node https://rpc.sentinel.co:443
```
<details>
<summary>Example Output</summary>
<p>

```bash
pagination:
  next_key: AAAAAAAF65k=
  total: "0"
subscriptions:
- '@type': /sentinel.subscription.v2.NodeSubscription
  base:
    address: sent1gameg02a9cwjxksh55nxjkzm9gc7254vuuvyht
    id: "387863"
    inactive_at: "2024-05-27T08:54:07.343738478Z"
    status: inactive_pending
    status_at: "2024-05-27T04:54:07.343738478Z"
  deposit:
    amount: "15000000"
    denom: udvpn
  gigabytes: "1"
  hours: "0"
  node_address: sentnode1xx7yw6nq7z9373qcajsythkhzl9lftpmwprxer
- '@type': /sentinel.subscription.v2.NodeSubscription
  base:
    address: sent1zyyuuvsqnv7ujvga9ajr2jfnajllt7n2cczh9c
    id: "387897"
    inactive_at: "2024-05-27T10:02:16.712367913Z"
    status: inactive_pending
    status_at: "2024-05-27T06:02:16.712367913Z"
  deposit:
    amount: "15342624"
    denom: udvpn
  gigabytes: "1"
  hours: "0"
  node_address: sentnode1f8g3app5cf8dy0822r86zcttlrpnl4q69487sf
```

</p>
</details>

## Query Subscription Info

Retrieve information regarding a specific subscription.

```bash
sentinelhub query vpn subscription [subscription_id] \
  --node https://rpc.sentinel.co:443
```
<details>
<summary>Example Output</summary>
<p>

```bash
subscription:
  '@type': /sentinel.subscription.v2.NodeSubscription
  base:
    address: sent1gameg02a9cwjxksh55nxjkzm9gc7254vuuvyht
    id: "387863"
    inactive_at: "2024-05-27T08:54:07.343738478Z"
    status: inactive_pending
    status_at: "2024-05-27T04:54:07.343738478Z"
  deposit:
    amount: "15000000"
    denom: udvpn
  gigabytes: "1"
  hours: "0"
  node_address: sentnode1xx7yw6nq7z9373qcajsythkhzl9lftpmwprxer
```

</p>
</details>

## Query Subscription Params

Retrieve information regarding the subscription module params.

```bash
sentinelhub query vpn subscription-params \
  --node https://rpc.sentinel.co:443
```
<details>
<summary>Example Output</summary>
<p>

```bash
params:
  status_change_delay: 14400s
```

</p>
</details>
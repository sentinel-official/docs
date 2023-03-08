# Queries
---

## CLI

### `provider`
The `provider` query allows users to query providers by specific provider address 
```bash
sentinelhub query vpn provider [address] [flags]
```
#### Example
##### cmd
```bash
sentinelhub query vpn provider sentprov1gjkdw8arm54sv7xdhjxnx30lcya4alhfktuxyy
```

##### output
```bash
plan:
  bytes: "250000000000"
  id: "1"
  price:
  - amount: "25000000"
    denom: udvpn
  provider: sentprov1aaaa4gxkfjntrerurznyhcm4saeegynrhq6zmk
  status: STATUS_ACTIVE
  status_at: "2021-10-07T16:47:32.763349394Z"
  validity: 2160000s
```

---

### `providers`
The `providers` query allows users to query all providers
```bash
sentinelhub query vpn providers [flags]
```
#### Example
##### cmd
```bash
sentinelhub query vpn providers
```

##### output
```bash
- address: sentprov1gjkdw8arm54sv7xdhjxnx30lcya4alhfktuxyy
  description: SOLAR dVPN
  identity: 6257A55EA42BA680
  name: SOLAR dVPN
  website: https://labs.solar
- address: sentprov1aaaa4gxkfjntrerurznyhcm4saeegynrhq6zmk
  description: Operate your dVPN node under this provider to get upcoming incentives
  identity: 045D374A62F15B56
  name: Sentinel Node Incentives
  website: https://sentinel.co
```

---

### `provider-params`
The `provider-params` query allows users to query the x/provider module parameters
```bash
sentinelhub query vpn provider-params [flags]
```
#### Example
##### cmd
```bash
sentinelhub query vpn provider-params
```

##### output
```bash
params:
  deposit:
    amount: "25000000000"
    denom: udvpn
  staking_share: "0.200000000000000000"
```  

---
# Queries
---

## CLI

### `subscription`
The `subscription` query allows users to query sessions by specific subscription id 
```bash
sentinelhub query vpn subscription [id] [flags]
```
#### Example
##### cmd
```bash
sentinelhub query vpn subscription 119
```

##### output
```bash
subscription:
  denom: ""
  deposit:
    amount: "510000"
    denom: udvpn
  expiry: "0001-01-01T00:00:00Z"
  free: "0"
  id: "119"
  node: sentnode1q5z3lqq3argvf9cyesgx4lpac2d3y9qgsvuszl
  owner: sent1gnrxpxnr7mv85ahsmfz65a7ksz63xx5dpjz04m
  plan: "0"
  price:
    amount: "100000"
    denom: udvpn
  status: STATUS_ACTIVE
  status_at: "2021-08-23T21:05:24.895162912Z"
```

---

### `subscriptions`
The `subscriptions` query allows users to query all subscriptions
```bash
sentinelhub query vpn subscriptions [flags]
```
#### Example
##### cmd
```bash
sentinelhub query vpn subscriptions
```

##### output
```bash
- denom: ""
  deposit:
    amount: "110000"
    denom: udvpn
  expiry: "0001-01-01T00:00:00Z"
  free: "0"
  id: "118"
  node: sentnode1q5z3lqq3argvf9cyesgx4lpac2d3y9qgsvuszl
  owner: sent1gnrxpxnr7mv85ahsmfz65a7ksz63xx5dpjz04m
  plan: "0"
  price:
    amount: "100000"
    denom: udvpn
  status: STATUS_ACTIVE
  status_at: "2021-08-23T00:09:38.825468358Z"
- denom: ""
  deposit:
    amount: "510000"
    denom: udvpn
  expiry: "0001-01-01T00:00:00Z"
  free: "0"
  id: "119"
  node: sentnode1q5z3lqq3argvf9cyesgx4lpac2d3y9qgsvuszl
  owner: sent1gnrxpxnr7mv85ahsmfz65a7ksz63xx5dpjz04m
  plan: "0"
  price:
    amount: "100000"
    denom: udvpn
  status: STATUS_ACTIVE
  status_at: "2021-08-23T21:05:24.895162912Z"
...
```

---

### `quota`
The `quota` query allows users to query sessions by specific subscription id and user address
```bash
sentinelhub query vpn quota [subscription] [address] [flags]
```
#### Example
##### cmd
```bash
sentinelhub query vpn quota 118 sent1gnrxpxnr7mv85ahsmfz65a7ksz63xx5dpjz04m
```

##### output
```bash
quota:
  address: sent1gnrxpxnr7mv85ahsmfz65a7ksz63xx5dpjz04m
  allocated: "1100000000"
  consumed: "335070000"
```

---

### `quotas`
The `quotas` query allows users to query quotas by subscription id
```bash
sentinelhub query vpn quotas [id] [flags]
```
#### Example
##### cmd
```bash
sentinelhub query vpn quotas 118
```

##### output
```bash
pagination:
  next_key: null
  total: "0"
quotas:
- address: sent1gnrxpxnr7mv85ahsmfz65a7ksz63xx5dpjz04m
  allocated: "1100000000"
  consumed: "335070000"
```

---

### `subscription-params`
The `subscription-params` query allows users to query the x/subscription module parameters
```bash
sentinelhub query vpn subscription-params [flags]
```
#### Example
##### cmd
```bash
sentinelhub query vpn subscription-params
```

##### output
```bash
params:
  inactive_duration: 14400s
```  

---
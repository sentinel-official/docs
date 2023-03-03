# Queries
---

## CLI

### `plan`
The `plan` query allows users to query plans by specific plan id 
```bash
sentinelhub query vpn plan [id] [flags]
```
#### Example
##### cmd
```bash
sentinelhub query vpn plan 1
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

### `plans`
The `plans` query allows users to query all plans
```bash
sentinelhub query vpn plans [flags]
```
#### Example
##### cmd
```bash
sentinelhub query vpn plans
```

##### output
```bash
- bytes: "250000000000"
  id: "1"
  price:
  - amount: "25000000"
    denom: udvpn
  provider: sentprov1aaaa4gxkfjntrerurznyhcm4saeegynrhq6zmk
  status: STATUS_ACTIVE
  status_at: "2021-10-07T16:47:32.763349394Z"
  validity: 2160000s
- bytes: "250000000000"
  id: "2"
  price:
  - amount: "25000000"
    denom: udvpn
  provider: sentprov1gjkdw8arm54sv7xdhjxnx30lcya4alhfktuxyy
  status: STATUS_ACTIVE
  status_at: "2022-02-08T18:19:23.817707915Z"
  validity: 2160000s
...
```  

---
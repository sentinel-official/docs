# Queries
---

## CLI

### `deposit`
The `deposit` query allows users to query deposit by specific address
```bash
sentinelhub query vpn deposit [address] [flags]
```
#### Example
##### cmd
```bash
sentinelhub query vpn deposit sent1q0aaezutj5kkdxjhf2wdjtaxdd7k3zlv7a47nw
```

##### output
```bash
deposit:
  address: sent1q0aaezutj5kkdxjhf2wdjtaxdd7k3zlv7a47nw
  coins:
  - amount: "2357824481"
    denom: udvpn
```  

---

### `deposits`
The `deposits` query allows users to query all deposits
```bash
sentinelhub query vpn deposits [flags]
```
#### Example
##### cmd
```bash
sentinelhub query vpn deposits
```

##### output
```bash
- address: sent1q06dsdz50adra40fq6ngv4hnanhvd6lkzy6q2z
  coins:
  - amount: "1415096985"
    denom: udvpn
- address: sent1q0a9c2hp5whgzgy0hhrmf5apceyaqken6tupnw
  coins:
  - amount: "6345710"
    denom: udvpn
- address: sent1q0aaezutj5kkdxjhf2wdjtaxdd7k3zlv7a47nw
  coins:
  - amount: "2357824481"
    denom: udvpn
pagination:
  next_key: FAP8tQtd7zAD6YgYNHaCOgn1g2bd
  total: "0"
```  

---
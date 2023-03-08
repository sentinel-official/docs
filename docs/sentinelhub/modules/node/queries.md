# Queries
---

## CLI

### `node`
The `node` query allows users to query nodes by specific node address
```bash
sentinelhub query vpn node [address] [flags]
```
#### Example
##### cmd
```bash
sentinelhub query vpn node sentnode1qvjg5378l0pphf8nmxmnuj8tj863fs46r7xurq
```

##### output
```bash
node:
  address: sentnode1qvjg5378l0pphf8nmxmnuj8tj863fs46r7xurq
  price:
  - amount: "105000"
    denom: ibc/31FEE1A2A9F9C01113F90BD0BBCCE8FD6BBB8585FAF109A2101827DD1D5B95B8
  - amount: "6000"
    denom: ibc/A8C2D23A1E6F95DA4E48BA349667E322BD7A6C996D8A4AAE8BA72E190F3D1477
  - amount: "5000000"
    denom: ibc/B1C0DDB14F25279A2026BC8794E12B259F8BDA546A3C5132CCAEE4431CE36783
  - amount: "80000"
    denom: ibc/ED07A3391A112B175915CD8FAF43A2DA8E4790EDE12566649D0C2F97716B8518
  - amount: "150000000"
    denom: udvpn
  provider: ""
  remote_url: https://137.184.195.137:33374
  status: STATUS_INACTIVE
  status_at: "2022-09-09T20:26:02.397229373Z"
```  

---

### `nodes`
The `nodes` query allows users to query all nodes
```bash
sentinelhub query vpn nodes [flags]
```
#### Example
##### cmd
```bash
sentinelhub query vpn nodes
```

##### output
```bash
- address: sentnode1qv32f02qd93cpr0q8kvx9262lwezj24pj8nsqq
  price:
  - amount: "105000"
    denom: ibc/31FEE1A2A9F9C01113F90BD0BBCCE8FD6BBB8585FAF109A2101827DD1D5B95B8
  - amount: "6000"
    denom: ibc/A8C2D23A1E6F95DA4E48BA349667E322BD7A6C996D8A4AAE8BA72E190F3D1477
  - amount: "5000000"
    denom: ibc/B1C0DDB14F25279A2026BC8794E12B259F8BDA546A3C5132CCAEE4431CE36783
  - amount: "80000"
    denom: ibc/ED07A3391A112B175915CD8FAF43A2DA8E4790EDE12566649D0C2F97716B8518
  - amount: "150000000"
    denom: udvpn
  provider: ""
  remote_url: https://83.136.255.146:50239
  status: STATUS_INACTIVE
  status_at: "2022-11-14T22:02:58.280719606Z"
- address: sentnode1qvjg5378l0pphf8nmxmnuj8tj863fs46r7xurq
  price:
  - amount: "105000"
    denom: ibc/31FEE1A2A9F9C01113F90BD0BBCCE8FD6BBB8585FAF109A2101827DD1D5B95B8
  - amount: "6000"
    denom: ibc/A8C2D23A1E6F95DA4E48BA349667E322BD7A6C996D8A4AAE8BA72E190F3D1477
  - amount: "5000000"
    denom: ibc/B1C0DDB14F25279A2026BC8794E12B259F8BDA546A3C5132CCAEE4431CE36783
  - amount: "80000"
    denom: ibc/ED07A3391A112B175915CD8FAF43A2DA8E4790EDE12566649D0C2F97716B8518
  - amount: "150000000"
    denom: udvpn
  provider: ""
  remote_url: https://137.184.195.137:33374
  status: STATUS_INACTIVE
  status_at: "2022-09-09T20:26:02.397229373Z"
pagination:
  next_key: FAMyis74gBHnnJyfz5C2getCSdYj
  total: "0"
```  

---

### `node-params`
The `node-params` query allows users to query the x/node module parameters
```bash
sentinelhub query vpn node-params [flags]
```
#### Example
##### cmd
```bash
sentinelhub query vpn node-params
```

##### output
```bash
params:
  deposit:
    amount: "0"
    denom: udvpn
  inactive_duration: 3600s
  max_price:
  - amount: "7000000"
    denom: ibc/31FEE1A2A9F9C01113F90BD0BBCCE8FD6BBB8585FAF109A2101827DD1D5B95B8
  - amount: "390000"
    denom: ibc/A8C2D23A1E6F95DA4E48BA349667E322BD7A6C996D8A4AAE8BA72E190F3D1477
  - amount: "525000000"
    denom: ibc/B1C0DDB14F25279A2026BC8794E12B259F8BDA546A3C5132CCAEE4431CE36783
  - amount: "5250000"
    denom: ibc/ED07A3391A112B175915CD8FAF43A2DA8E4790EDE12566649D0C2F97716B8518
  - amount: "7000000000"
    denom: udvpn
  min_price:
  - amount: "105000"
    denom: ibc/31FEE1A2A9F9C01113F90BD0BBCCE8FD6BBB8585FAF109A2101827DD1D5B95B8
  - amount: "6000"
    denom: ibc/A8C2D23A1E6F95DA4E48BA349667E322BD7A6C996D8A4AAE8BA72E190F3D1477
  - amount: "800000"
    denom: ibc/B1C0DDB14F25279A2026BC8794E12B259F8BDA546A3C5132CCAEE4431CE36783
  - amount: "80000"
    denom: ibc/ED07A3391A112B175915CD8FAF43A2DA8E4790EDE12566649D0C2F97716B8518
  - amount: "11000000"
    denom: udvpn
  staking_share: "0.200000000000000000"
```  

---
# Queries
---

## CLI

### `session`
The `session` query allows users to query sessions by specific session id 
```bash
sentinelhub query vpn session [id] [flags]
```
#### Example
##### cmd
```bash
sentinelhub query vpn session 583829
```

##### output
```bash
session:
  address: sent1r0q85cszgz6d0lcdeuyp95ww5yt58h3mx66cwq
  bandwidth:
    download: "188784452"
    upload: "15466460"
  duration: 209551.647845923s
  id: "583829"
  node: sentnode1x6z8nmvul422l2wdlqxunxrxhahgx77tapwda8
  status: STATUS_ACTIVE
  status_at: "2023-03-03T11:39:42.291995683Z"
  subscription: "196765"
```

---

### `sessions`
The `sessions` query allows users to query all sessions
```bash
sentinelhub query vpn sessions [flags]
```
#### Example
##### cmd
```bash
sentinelhub query vpn sessions
```

##### output
```bash
- address: sent1r0q85cszgz6d0lcdeuyp95ww5yt58h3mx66cwq
  bandwidth:
    download: "188784452"
    upload: "15466460"
  duration: 209551.647845923s
  id: "583829"
  node: sentnode1x6z8nmvul422l2wdlqxunxrxhahgx77tapwda8
  status: STATUS_ACTIVE
  status_at: "2023-03-03T11:39:42.291995683Z"
  subscription: "196765"
- address: sent1pvanpexrpacdy42dmlp7pn4wxf7nzgsz6k6u2z
  bandwidth:
    download: "346972"
    upload: "54836"
  duration: 2584.092292858s
  id: "583835"
  node: sentnode18y8pfd78ay2d509rsv7hr9ht7tqk8pvt5kvj0g
  status: STATUS_INACTIVE_PENDING
  status_at: "2023-03-03T11:13:43.641908314Z"
  subscription: "196762"
...
```

---

### `session-params`
The `session-params` query allows users to query the x/session module parameters
```bash
sentinelhub query vpn session-params [flags]
```
#### Example
##### cmd
```bash
sentinelhub query vpn session-params
```

##### output
```bash
params:
  inactive_duration: 7200s
  proof_verification_enabled: false
```  

---
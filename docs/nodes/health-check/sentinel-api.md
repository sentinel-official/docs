---
title: Sentinel API
sidebar_position: 4
---

To verify your Health Check status paste the following link into your browser: `https://api.health.sentinel.co/v1/records/<your_sent_node_address>`

You will get the following json output:

<details>
<summary>Node Output</summary>
<p>

```js
{
   "success":true,
   "result":{
      "addr":"sentnode1fdj2p453cegnfjwapm0l3pf0r5aknzl4wzutcl",
      "config_exchange_timestamp":"2024-03-31T17:01:01.985Z",
      "info_fetch_timestamp":"2024-03-31T17:00:49.824Z",
      "location_fetch_timestamp":"2024-03-31T17:01:19.56Z",
      "ok":true,
      "status":1
   }
}
```

</p>
</details>

Ensure the following fields meet the specified conditions:
- `ok` must be true
- `status` must be 1
- `info_fetch_timestamp` should not be a zero timestamp
- `config_exchange_timestamp` should not be a timestamp
- `location_fetch_timestamp` should not be a zero timestamp

For a comprehensive list of nodes, you can also explore the [Sentinel API Records](https://api.health.sentinel.co/v1/records) main page
---
title: Plan Wizard
sidebar_position: 5
---

Plan Wizard was created by Alekandr Litreev at SOLAR Labs with the following aims:

- To examine information regarding a dvpn node and view it from the perspective of the Plan Wizard backend.
- To verify if your node has been included in the plan.
- Explore available plans.
- Understand the criteria used for listing nodes in these plans.

You can locate the planwizard and its functions by clicking on [this link](https://gist.github.com/alxdrlitreev/ca5937a4eb3e85b14282e9e1932ef98a)

:::danger
The creator suggests NOT relying on this API because it's meant for demonstration purposes only and there's a possibility that it might undergo changes.
:::

### `GET /nodes?limit=100&offset=0`

Provides details about every node accessible on the blockchain.

```bash
https://planwizard.basedapps.co.uk/nodes?limit=100&offset=0
```

<details>
<summary>Output</summary>
<p>

```js
{
    "data": [
        {
            "id": 848,
            "is_active": true,
            "revision": 1705802068,
            "is_node_status_fetched": true,
            "last_node_status_fetch": "2024-01-21T02:00:47.99249Z",
            "is_network_info_fetched": false,
            "last_network_info_fetch": null,
            "is_health_checked": false,
            "last_health_check": null,
            "address": "sentnode1zzpragl7n6yuh7kkawk2cj895x4h039wf2hgna",
            "remote_url": "https://23.231.78.40:33763",
            "status": 1,
            "status_at": "2024-01-21T01:06:10.540593Z",
            "inactive_at": "2024-01-21T02:06:10.540593Z",
            "gigabyte_prices": [
                {
                    "denom": "ibc/31FEE1A2A9F9C01113F90BD0BBCCE8FD6BBB8585FAF109A2101827DD1D5B95B8",
                    "amount": 52573
                },
                {
                    "denom": "ibc/A8C2D23A1E6F95DA4E48BA349667E322BD7A6C996D8A4AAE8BA72E190F3D1477",
                    "amount": 9204
                },
                {
                    "denom": "ibc/B1C0DDB14F25279A2026BC8794E12B259F8BDA546A3C5132CCAEE4431CE36783",
                    "amount": 1180852
                },
                {
                    "denom": "ibc/ED07A3391A112B175915CD8FAF43A2DA8E4790EDE12566649D0C2F97716B8518",
                    "amount": 122740
                },
                {
                    "denom": "udvpn",
                    "amount": 15342624
                }
            ],
            "hourly_prices": [
                {
                    "denom": "ibc/31FEE1A2A9F9C01113F90BD0BBCCE8FD6BBB8585FAF109A2101827DD1D5B95B8",
                    "amount": 18480
                },
                {
                    "denom": "ibc/A8C2D23A1E6F95DA4E48BA349667E322BD7A6C996D8A4AAE8BA72E190F3D1477",
                    "amount": 770
                },
                {
                    "denom": "ibc/B1C0DDB14F25279A2026BC8794E12B259F8BDA546A3C5132CCAEE4431CE36783",
                    "amount": 1871892
                },
                {
                    "denom": "ibc/ED07A3391A112B175915CD8FAF43A2DA8E4790EDE12566649D0C2F97716B8518",
                    "amount": 18897
                },
                {
                    "denom": "udvpn",
                    "amount": 4160000
                }
            ],
            "moniker": "DreamMaker_UUgx77",
            "bandwidth_upload": 253875000,
            "bandwidth_download": 317750000,
            "is_handshake_enabled": false,
            "handshake_peers": 8,
            "interval_set_sessions": 10000000000,
            "interval_update_sessions": 6900000000000,
            "interval_update_status": 3300000000000,
            "location_city": "Los Angeles",
            "location_country": "United States",
            "location_lat": 34.0726,
            "location_lon": -118.261,
            "operator": "sent1zzpragl7n6yuh7kkawk2cj895x4h039wluk3kt",
            "peers": 1,
            "max_peers": 250,
            "type": 2,
            "version": "0.7.1",
            "asn": null,
            "is_residential": null,
            "is_healthy": null
        },
        {
            "id": 851,
            "is_active": true,
            "revision": 1705802068,
            "is_node_status_fetched": true,
            "last_node_status_fetch": "2024-01-21T02:00:49.209966Z",
            "is_network_info_fetched": false,
            "last_network_info_fetch": null,
            "is_health_checked": false,
            "last_health_check": null,
            "address": "sentnode1zzfh0ul0eqe8w3m9w8uf94vnycqkdc3egncvke",
            "remote_url": "https://5.231.206.140:6636",
            "status": 1,
            "status_at": "2024-01-21T01:50:34.065488Z",
            "inactive_at": "2024-01-21T02:50:34.065488Z",
            "gigabyte_prices": [
                {
                    "denom": "ibc/31FEE1A2A9F9C01113F90BD0BBCCE8FD6BBB8585FAF109A2101827DD1D5B95B8",
                    "amount": 52573
                },
                {
                    "denom": "ibc/A8C2D23A1E6F95DA4E48BA349667E322BD7A6C996D8A4AAE8BA72E190F3D1477",
                    "amount": 9204
                },
                {
                    "denom": "ibc/B1C0DDB14F25279A2026BC8794E12B259F8BDA546A3C5132CCAEE4431CE36783",
                    "amount": 1180852
                },
                {
                    "denom": "ibc/ED07A3391A112B175915CD8FAF43A2DA8E4790EDE12566649D0C2F97716B8518",
                    "amount": 122740
                },
                {
                    "denom": "udvpn",
                    "amount": 15342624
                }
            ],
            "hourly_prices": [
                {
                    "denom": "ibc/31FEE1A2A9F9C01113F90BD0BBCCE8FD6BBB8585FAF109A2101827DD1D5B95B8",
                    "amount": 18480
                },
                {
                    "denom": "ibc/A8C2D23A1E6F95DA4E48BA349667E322BD7A6C996D8A4AAE8BA72E190F3D1477",
                    "amount": 770
                },
                {
                    "denom": "ibc/B1C0DDB14F25279A2026BC8794E12B259F8BDA546A3C5132CCAEE4431CE36783",
                    "amount": 1871892
                },
                {
                    "denom": "ibc/ED07A3391A112B175915CD8FAF43A2DA8E4790EDE12566649D0C2F97716B8518",
                    "amount": 18897
                },
                {
                    "denom": "udvpn",
                    "amount": 4160000
                }
            ],
            "moniker": "SuchNode-mSqmIz3JcC0j",
            "bandwidth_upload": 116383225,
            "bandwidth_download": 117330675,
            "is_handshake_enabled": false,
            "handshake_peers": 8,
            "interval_set_sessions": 10000000000,
            "interval_update_sessions": 6900000000000,
            "interval_update_status": 3300000000000,
            "location_city": "Bad Soden am Taunus",
            "location_country": "Germany",
            "location_lat": 50.1592,
            "location_lon": 8.48173,
            "operator": "sent1zzfh0ul0eqe8w3m9w8uf94vnycqkdc3e79e4n0",
            "peers": 0,
            "max_peers": 250,
            "type": 2,
            "version": "0.7.1",
            "asn": null,
            "is_residential": null,
            "is_healthy": null
        }
    ]
}
```

</p>
</details>

### `GET /nodes/:address`

This provides details about a node associated with a particular blockchain address, showing its current health status check.

```bash
https://planwizard.basedapps.co.uk/nodes/<your_sent_node_address>
```

You will get the following json output:

<details>
<summary>Output</summary>
<p>

```js
{
   "data":{
      "id":16354,
      "is_active":true,
      "revision":1711966354,
      "is_node_status_fetched":true,
      "last_node_status_fetch":"2024-03-31T16:40:13.427227Z",
      "is_network_info_fetched":true,
      "last_network_info_fetch":"2024-04-01T10:32:10.978466Z",
      "is_health_checked":true,
      "last_health_check":"2024-04-01T10:34:31.349856Z",
      "address":"sentnode15ph43fu8cm48scn3m6l9ap0sp3p90ns52mzmpl",
      "remote_url":"https://168.119.166.81:29486",
      "status":1,
      "status_at":"2024-04-01T09:29:16.222958Z",
      "inactive_at":"2024-04-01T10:29:16.222958Z",
      "gigabyte_prices":[
         {
            "denom":"ibc/31FEE1A2A9F9C01113F90BD0BBCCE8FD6BBB8585FAF109A2101827DD1D5B95B8",
            "amount":52573
         },
         {
            "denom":"ibc/A8C2D23A1E6F95DA4E48BA349667E322BD7A6C996D8A4AAE8BA72E190F3D1477",
            "amount":9204
         },
         {
            "denom":"ibc/B1C0DDB14F25279A2026BC8794E12B259F8BDA546A3C5132CCAEE4431CE36783",
            "amount":1180852
         },
         {
            "denom":"ibc/ED07A3391A112B175915CD8FAF43A2DA8E4790EDE12566649D0C2F97716B8518",
            "amount":122740
         },
         {
            "denom":"udvpn",
            "amount":15342624
         }
      ],
      "hourly_prices":[
         {
            "denom":"ibc/31FEE1A2A9F9C01113F90BD0BBCCE8FD6BBB8585FAF109A2101827DD1D5B95B8",
            "amount":18480
         },
         {
            "denom":"ibc/A8C2D23A1E6F95DA4E48BA349667E322BD7A6C996D8A4AAE8BA72E190F3D1477",
            "amount":770
         },
         {
            "denom":"ibc/B1C0DDB14F25279A2026BC8794E12B259F8BDA546A3C5132CCAEE4431CE36783",
            "amount":1871892
         },
         {
            "denom":"ibc/ED07A3391A112B175915CD8FAF43A2DA8E4790EDE12566649D0C2F97716B8518",
            "amount":18897
         },
         {
            "denom":"udvpn",
            "amount":4160000
         }
      ],
      "moniker":"Trinity v2ray Node",
      "bandwidth_upload":43900537,
      "bandwidth_download":227196312,
      "is_handshake_enabled":false,
      "handshake_peers":8,
      "interval_set_sessions":10000000000,
      "interval_update_sessions":6900000000000,
      "interval_update_status":3300000000000,
      "location_city":"Hachenburg",
      "location_country":"Germany",
      "location_lat":50.6584,
      "location_lon":7.8268,
      "operator":"sent15ph43fu8cm48scn3m6l9ap0sp3p90ns5udrzyf",
      "peers":1,
      "max_peers":250,
      "type":2,
      "version":"0.7.1",
      "asn":"AS24940",
      "is_residential":false,
      "is_healthy":true
   }
}
```

</p>
</details>

### `GET /nodes/:address/plans`

Retrieve information about the node's enrollment in plans managed through the current instance of the Plan Wizard.

```bash
https://planwizard.basedapps.co.uk/nodes/<your_sent_node_address>/plans
```

<details>
<summary>Output</summary>
<p>

```js
{
    "data": [
        {
            "id": 1,
            "name": "General",
            "blockchain_id": 6,
            "is_managed_automatically": true
        }
    ]
}
```

</p>
</details>

### `GET /plans`

Retrieve information about all the plans managed within Plan Wizard.

```bash
https://planwizard.basedapps.co.uk/plans
```

<details>
<summary>Output</summary>
<p>

```js
{
   "data":[
      {
         "id":2,
         "name":"Residential",
         "blockchain_id":24,
         "is_managed_automatically":true
      },
      {
         "id":1,
         "name":"General",
         "blockchain_id":6,
         "is_managed_automatically":true
      }
   ]
}
```

</p>
</details>

### `GET /plans/:id`

Retrieve information about a specific plan.

```bash
https://planwizard.basedapps.co.uk/plans/1
```

<details>
<summary>Output</summary>
<p>

```js
{
   "data":{
      "id":1,
      "name":"General",
      "blockchain_id":6,
      "is_managed_automatically":true
   }
}
```

</p>
</details>

### `GET /plans/:id/rules`

Retrieve information about a specific plan rules.

```bash
https://planwizard.basedapps.co.uk/plans/1/rules
```

<details>
<summary>Output</summary>
<p>

```js
{
   "data":[
      {
         "id":2,
         "plan_id":1,
         "is_active":true,
         "min_gigabyte_prices":null,
         "max_gigabyte_prices":null,
         "min_hourly_prices":null,
         "max_hourly_prices":[
            {
               "denom":"udvpn",
               "amount":4160000
            }
         ],
         "should_be_residential":false,
         "node_type":null,
         "min_bandwidth_upload":null,
         "max_bandwidth_upload":null,
         "min_bandwidth_download":null,
         "max_bandwidth_download":null,
         "max_nodes_per_country":null,
         "max_nodes_per_city":200
      }
   ]
}
```

</p>
</details>

### `GET /plans/:id/costs`

Retrieve information about a specific plan costs. Essentially, you can find out how much Plan Wizard spends per hour on all the nodes included in the plan altogether.

```bash
https://planwizard.basedapps.co.uk/plans/1/costs
```

<details>
<summary>Output</summary>
<p>

```js
{
   "data":[
      {
         "denom":"ibc/B1C0DDB14F25279A2026BC8794E12B259F8BDA546A3C5132CCAEE4431CE36783",
         "amount":17837113354
      },
      {
         "denom":"ibc/ED07A3391A112B175915CD8FAF43A2DA8E4790EDE12566649D0C2F97716B8518",
         "amount":180216017
      },
      {
         "denom":"udvpn",
         "amount":40772160000
      },
      {
         "denom":"ibc/31FEE1A2A9F9C01113F90BD0BBCCE8FD6BBB8585FAF109A2101827DD1D5B95B8",
         "amount":181142354
      },
      {
         "denom":"ibc/A8C2D23A1E6F95DA4E48BA349667E322BD7A6C996D8A4AAE8BA72E190F3D1477",
         "amount":7556763
      }
   ]
}
```

</p>
</details>

### `GET /plans/:id/stats`

Retrieve stats about a specific plan.

```bash
https://planwizard.basedapps.co.uk/plans/1/stats
```

<details>
<summary>Output</summary>
<p>

```js
{
   "data":{
      "total_nodes":9799,
      "nodes_active":9799,
      "nodes_pending_addition":0,
      "nodes_pending_removal":0
   }
}
```

</p>
</details>
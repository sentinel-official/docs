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

## Methods

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
   "data":[
      {
         "id":1259,
         "is_active":false,
         "revision":1706943783,
         "is_node_status_fetched":true,
         "last_node_status_fetch":"2024-01-21T02:36:29.735792Z",
         "is_network_info_fetched":true,
         "last_network_info_fetch":"2024-04-06T10:02:14.725058Z",
         "is_health_checked":true,
         "last_health_check":"2024-04-06T10:01:27.359839Z",
         "is_whitelist_info_fetched":false,
         "last_whitelist_info_fetch":null,
         "address":"sentnode1rz0hwaa4t0mmcegxq236m3349zd6zu5jwz5tep",
         "remote_url":"https://206.214.81.253:49713",
         "status":1,
         "status_at":"2024-02-03T06:04:23.282112Z",
         "inactive_at":"2024-02-03T07:04:23.282112Z",
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
         "moniker":"Rosamaria Chad",
         "bandwidth_upload":335000000,
         "bandwidth_download":160375000,
         "is_handshake_enabled":false,
         "handshake_peers":8,
         "interval_set_sessions":10000000000,
         "interval_update_sessions":6900000000000,
         "interval_update_status":3300000000000,
         "location_city":"Phoenix",
         "location_country":"United States",
         "location_lat":33.4484,
         "location_lon":-112.074,
         "operator":"sent1rz0hwaa4t0mmcegxq236m3349zd6zu5jc54juh",
         "peers":1,
         "max_peers":250,
         "type":2,
         "version":"0.7.1",
         "asn":"AS62904",
         "is_residential":false,
         "is_healthy":false,
         "is_whitelisted":null
      },
      {
         "id":2520,
         "is_active":false,
         "revision":1707747346,
         "is_node_status_fetched":true,
         "last_node_status_fetch":"2024-01-21T02:13:05.833845Z",
         "is_network_info_fetched":true,
         "last_network_info_fetch":"2024-04-06T09:57:37.462276Z",
         "is_health_checked":true,
         "last_health_check":"2024-04-06T10:02:27.49802Z",
         "is_whitelist_info_fetched":false,
         "last_whitelist_info_fetch":null,
         "address":"sentnode1xppeavtsgwx5ge8hqghc57kv9q057yf3rtada9",
         "remote_url":"https://154.209.183.184:37582",
         "status":1,
         "status_at":"2024-02-12T13:43:20.15166Z",
         "inactive_at":"2024-02-12T14:43:20.15166Z",
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
         "moniker":"Dudley-Voller",
         "bandwidth_upload":153875000,
         "bandwidth_download":140500000,
         "is_handshake_enabled":false,
         "handshake_peers":8,
         "interval_set_sessions":10000000000,
         "interval_update_sessions":6900000000000,
         "interval_update_status":3300000000000,
         "location_city":"Tseung Kwan O",
         "location_country":"Hong Kong",
         "location_lat":22.3119,
         "location_lon":114.257,
         "operator":"sent1xppeavtsgwx5ge8hqghc57kv9q057yf34au5cn",
         "peers":0,
         "max_peers":250,
         "type":2,
         "version":"0.7.1",
         "asn":"AS133180",
         "is_residential":false,
         "is_healthy":false,
         "is_whitelisted":null
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
      "id":1259,
      "is_active":false,
      "revision":1706943783,
      "is_node_status_fetched":true,
      "last_node_status_fetch":"2024-01-21T02:36:29.735792Z",
      "is_network_info_fetched":true,
      "last_network_info_fetch":"2024-04-06T10:02:14.725058Z",
      "is_health_checked":true,
      "last_health_check":"2024-04-06T10:01:27.359839Z",
      "is_whitelist_info_fetched":false,
      "last_whitelist_info_fetch":null,
      "address":"sentnode1rz0hwaa4t0mmcegxq236m3349zd6zu5jwz5tep",
      "remote_url":"https://206.214.81.253:49713",
      "status":1,
      "status_at":"2024-02-03T06:04:23.282112Z",
      "inactive_at":"2024-02-03T07:04:23.282112Z",
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
      "moniker":"Rosamaria Chad",
      "bandwidth_upload":335000000,
      "bandwidth_download":160375000,
      "is_handshake_enabled":false,
      "handshake_peers":8,
      "interval_set_sessions":10000000000,
      "interval_update_sessions":6900000000000,
      "interval_update_status":3300000000000,
      "location_city":"Phoenix",
      "location_country":"United States",
      "location_lat":33.4484,
      "location_lon":-112.074,
      "operator":"sent1rz0hwaa4t0mmcegxq236m3349zd6zu5jc54juh",
      "peers":1,
      "max_peers":250,
      "type":2,
      "version":"0.7.1",
      "asn":"AS62904",
      "is_residential":false,
      "is_healthy":false,
      "is_whitelisted":null
   }
}
```

</p>
</details>

Note: the field `is_whitelisted` has three possible values:
- **true**: indicates that the node has been whitelisted.
- **false**: indicates that the node has NOT been whitelisted.
- **null**: implies a pending status, indicating that the node's whitelisting status is undetermined, and it may or may not be whitelisted.

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

## `GET /nodes/:address/events`

Retrieve the reason(s) why the node is not listed on the subscription plan

```bash
https://planwizard.basedapps.co.uk/nodes/<your_sent_node_address>/events
```

<details>
<summary>Output</summary>
<p>

```js
{
   "data": [
      {
         "id": 42335,
         "created_at": "2024-04-17T22:59:16.923093Z",
         "node_id": 16354,
         "entry": "Node residential status does not match requirement for plan Residential (ID 2)"
      },
      {
         "id": 30512,
         "created_at": "2024-04-17T20:59:17.774291Z",
         "node_id": 16354,
         "entry": "Node residential status does not match requirement for plan Residential (ID 2)"
      },
      {
         "id": 36400,
         "created_at": "2024-04-17T21:59:18.814638Z",
         "node_id": 16354,
         "entry": "Node residential status does not match requirement for plan Residential (ID 2)"
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

### `GET /plans/:id/nodes`

Retrieve the node list about a specific plan.

```bash
https://planwizard.basedapps.co.uk/plans/1/nodes
```

<details>
<summary>Output</summary>
<p>

```js
{
   "data":[
      {
         "id":9971,
         "is_active":true,
         "revision":1712274950,
         "is_node_status_fetched":true,
         "last_node_status_fetch":"2024-04-05T23:52:51.33843Z",
         "is_network_info_fetched":true,
         "last_network_info_fetch":"2024-04-06T10:01:32.945718Z",
         "is_health_checked":true,
         "last_health_check":"2024-04-06T10:01:26.429703Z",
         "is_whitelist_info_fetched":true,
         "last_whitelist_info_fetch":"2024-04-06T10:00:18.029188Z",
         "address":"sentnode1hhh5mhst8cuxsvfknz05gqkvxj9jq2p9e0fda3",
         "remote_url":"https://170.130.186.250:33679",
         "status":1,
         "status_at":"2024-04-04T23:46:24.11667Z",
         "inactive_at":"2024-04-05T00:46:24.11667Z",
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
         "moniker":"x_Node_GT_118",
         "bandwidth_upload":196125000,
         "bandwidth_download":231125000,
         "is_handshake_enabled":false,
         "handshake_peers":8,
         "interval_set_sessions":10000000000,
         "interval_update_sessions":6900000000000,
         "interval_update_status":3300000000000,
         "location_city":"Los Angeles",
         "location_country":"United States",
         "location_lat":34.0726,
         "location_lon":-118.261,
         "operator":"sent1hhh5mhst8cuxsvfknz05gqkvxj9jq2p90eg5c8",
         "peers":1,
         "max_peers":250,
         "type":2,
         "version":"0.7.1",
         "asn":"AS62904",
         "is_residential":false,
         "is_healthy":true,
         "is_whitelisted":true
      },
      {
         "id":13764,
         "is_active":true,
         "revision":1712273819,
         "is_node_status_fetched":true,
         "last_node_status_fetch":"2024-04-05T19:46:06.698559Z",
         "is_network_info_fetched":true,
         "last_network_info_fetch":"2024-04-06T10:01:33.508748Z",
         "is_health_checked":true,
         "last_health_check":"2024-04-06T10:01:28.846133Z",
         "is_whitelist_info_fetched":true,
         "last_whitelist_info_fetch":"2024-04-06T10:00:54.130689Z",
         "address":"sentnode1hmggy2qug9vg55t6lp8nwfghu48w2zh93mrjt5",
         "remote_url":"https://107.158.192.237:35272",
         "status":1,
         "status_at":"2024-04-04T23:36:06.084283Z",
         "inactive_at":"2024-04-05T00:36:06.084283Z",
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
         "moniker":"No.28580 Leo Preheim",
         "bandwidth_upload":268000000,
         "bandwidth_download":361250000,
         "is_handshake_enabled":false,
         "handshake_peers":8,
         "interval_set_sessions":10000000000,
         "interval_update_sessions":6900000000000,
         "interval_update_status":3300000000000,
         "location_city":"Yorba Linda",
         "location_country":"United States",
         "location_lat":33.9011,
         "location_lon":-117.7959,
         "operator":"sent1hmggy2qug9vg55t6lp8nwfghu48w2zh98dztwz",
         "peers":1,
         "max_peers":250,
         "type":2,
         "version":"0.7.1",
         "asn":"AS62904",
         "is_residential":false,
         "is_healthy":true,
         "is_whitelisted":true
      }
   ]
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
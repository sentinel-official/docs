---
title: Busurnode
sidebar_position: 3
---

# Busurnode

[Busurnode](https://busurnode.com/) is a subsidiary of Busur Media Indonesia and offers various services, including Software Development, Payment Services, Hosting Services, and Data Mining Services. Busurnode hosts its infrastructure remotely in top data centers around the world, as well as on their own inventory of enterprise-grade hardware.

To assist dVPN node hosts with dVPN Nodes Health Checks, Busurnode has developed a website called *SentNodes* along with a public API.


## SentNodes Website

Explore the [SentNodes Website](https://sentnodes.com) to find detailed statistics for each node and the overall network.

First, click on `Nodes`

![](/img/dvpn-nodes/health-check/busurnode-1.png)

Next, use the search bar to locate your specific node and check its health status.

![](/img/dvpn-nodes/health-check/busurnode-2.png)

Alternatively, you can [sign up](https://sentnodes.com/register) on the website and add your node for more comprehensive statistics.


## SentNodes Public API

### All Nodes Data

GET https://api.sentnodes.com/v1/nodes

<details>
<summary>Sample Response</summary>
<p>

```json
{
  "success": true,
  "data": [
    {
      "address": "sentnode1d6qqywlc47cnxt4gh7pjqvjw057s7qdf64zw0u",
      "moniker": "BUSURNODE-US-016-V2RAY",
      "version": "8.2.0",
      "type": 2,
      "api": "elpis.busur.cc:63116",
      "asn": 12345,
      "country": "United States",
      "city": "North Bergen",
      "isResidential": false,
      "isActive": true,
      "isHealthy": false,
      "isDuplicate": false,
      "isWhitelisted": true,
      "subscriptions": 2,
      "sessions": 4,
      "peers": 4,
      "fetchedAt": "2025-11-02 02:10:36"
    },
    {
      "address": "sentnode1yjcp0uvg9qf6rjyj3a6zq2rywc44j5vukdpz6l",
      "moniker": "P4O3K6K7",
      "version": "8.2.0",
      "type": 2,
      "api": "206.217.140.45:57538",
      "asn": 11111,
      "country": "United States",
      "city": "Elk Grove Village",
      "isResidential": false,
      "isActive": true,
      "isHealthy": false,
      "isDuplicate": false,
      "isWhitelisted": true,
      "subscriptions": 0,
      "sessions": 0,
      "peers": 0,
      "fetchedAt": "2025-11-02 02:10:35"
    }
  ],
  "errors": null
}
```

</p>
</details>

### Single Node Data

GET https://api.sentnodes.com/v2/node/{NODE_ADDRESS}

<details>
<summary>Sample Response</summary>
<p>

```json
{
  "success": true,
  "data": {
    "address": "sentnode1d6qqywlc47cnxt4gh7pjqvjw057s7qdf64zw0u",
    "moniker": "BUSURNODE-US-016-V2RAY",
    "version": "8.2.0",
    "type": 2,
    "api": "elpis.busur.cc:63116",
    "asn": 12345,
    "country": "United States",
    "city": "North Bergen",
    "isResidential": false,
    "isActive": true,
    "isHealthy": false,
    "isDuplicate": false,
    "isWhitelisted": true,
    "subscriptions": 0,
    "sessions": 4,
    "peers": 4,
    "fetchedAt": "2025-11-02 02:30:50"
  },
  "errors": null
}

```

</p>
</details>

:::note
More node information data will be added in near future.
:::
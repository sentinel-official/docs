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

GET https://api.sentnodes.com/v2/nodes

The response is paginated (200 nodes per page), with the node list under `data.nodes` and paging information under `data.pagination`.

<details>
<summary>Sample Response</summary>
<p>

```json
{
  "success": true,
  "data": {
    "nodes": [
      {
        "address": "sentnode1d6qqywlc47cnxt4gh7pjqvjw057s7qdf64zw0u",
        "moniker": "BUSURNODE-US-016-V2RAY",
        "version": "8.3.1",
        "type": 2,
        "connection": {
          "proxy": "vmess",
          "transport": "grpc",
          "security": "none"
        },
        "api": "elpis.busur.cc:63116",
        "asn": "46475",
        "country": "United States",
        "city": "North Bergen",
        "isResidential": false,
        "isActive": true,
        "isHealthy": true,
        "isDuplicate": false,
        "isWhitelisted": true,
        "gigabytePrices": [
          {
            "denom": "ibc/A8C2D23A1E6F95DA4E48BA349667E322BD7A6C996D8A4AAE8BA72E190F3D1477",
            "value": "2525"
          },
          {
            "denom": "ibc/ED07A3391A112B175915CD8FAF43A2DA8E4790EDE12566649D0C2F97716B8518",
            "value": "98050"
          },
          {
            "denom": "udvpn",
            "value": "40000000"
          }
        ],
        "hourlyPrices": [
          {
            "denom": "ibc/A8C2D23A1E6F95DA4E48BA349667E322BD7A6C996D8A4AAE8BA72E190F3D1477",
            "value": "2525"
          },
          {
            "denom": "ibc/ED07A3391A112B175915CD8FAF43A2DA8E4790EDE12566649D0C2F97716B8518",
            "value": "98050"
          },
          {
            "denom": "udvpn",
            "value": "97500000"
          }
        ],
        "leases": 1,
        "sessions": 12,
        "peers": 12,
        "errorMessage": null,
        "fetchedAt": "2026-08-23T11:56:21+00:00"
      }
    ],
    "pagination": {
      "total": 1836,
      "perPage": 200,
      "currentPage": 1,
      "lastPage": 10,
      "hasMorePages": true
    }
  },
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
    "version": "8.3.1",
    "type": 2,
    "connection": {
      "proxy": "vmess",
      "transport": "grpc",
      "security": "none"
    },
    "api": "elpis.busur.cc:63116",
    "asn": "46475",
    "country": "United States",
    "city": "North Bergen",
    "isResidential": false,
    "isActive": true,
    "isHealthy": true,
    "isDuplicate": false,
    "isWhitelisted": true,
    "gigabytePrices": [
      {
        "denom": "ibc/A8C2D23A1E6F95DA4E48BA349667E322BD7A6C996D8A4AAE8BA72E190F3D1477",
        "value": "2525"
      },
      {
        "denom": "ibc/ED07A3391A112B175915CD8FAF43A2DA8E4790EDE12566649D0C2F97716B8518",
        "value": "98050"
      },
      {
        "denom": "udvpn",
        "value": "40000000"
      }
    ],
    "hourlyPrices": [
      {
        "denom": "ibc/A8C2D23A1E6F95DA4E48BA349667E322BD7A6C996D8A4AAE8BA72E190F3D1477",
        "value": "2525"
      },
      {
        "denom": "ibc/ED07A3391A112B175915CD8FAF43A2DA8E4790EDE12566649D0C2F97716B8518",
        "value": "98050"
      },
      {
        "denom": "udvpn",
        "value": "97500000"
      }
    ],
    "leases": 1,
    "sessions": 12,
    "peers": 12,
    "errorMessage": null,
    "fetchedAt": "2026-08-23T11:56:21+00:00",
    "traffic": 2083563020,
    "healthCheck": []
  },
  "errors": null
}
```

</p>
</details>

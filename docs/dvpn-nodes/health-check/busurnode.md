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

<details>
<summary>Sample Response</summary>
<p>

```json
{
  "success": true,
  "data": [
    {
      "address": "sentnode1zejvt2pmlstpayd7sex8y2e323ddfmpg0kylnd",
      "moniker": "SuchNode-TDfvls0Mp6v7",
      "version": "8.3.1",
      "type": 2,
      "api": "104.238.23.218:6636",
      "asn": null,
      "country": "Türkiye",
      "city": "Çekmeköy",
      "isResidential": null,
      "isActive": true,
      "isHealthy": false,
      "isDuplicate": false,
      "isWhitelisted": null,
      "gigabytePrices": [
        {
          "denom": "udvpn",
          "value": "26041666"
        }
      ],
      "hourlyPrices": [
        {
          "denom": "udvpn",
          "value": "52083333"
        }
      ],
      "subscriptions": 0,
      "sessions": 2,
      "peers": 2,
      "healthCheck": [],
      "fetchedAt": "2025-12-21T11:01:11+00:00"
    },
    {
      "address": "sentnode1vg9qh7j3wwv3wfyn6g8ddvgar2kqhy0lq4cn2r",
      "moniker": "SuchNode-j2YkeAgA8Win",
      "version": "8.3.1",
      "type": 2,
      "api": "104.238.23.222:6636",
      "asn": null,
      "country": "Türkiye",
      "city": "Çekmeköy",
      "isResidential": null,
      "isActive": true,
      "isHealthy": false,
      "isDuplicate": false,
      "isWhitelisted": null,
      "gigabytePrices": [
        {
          "denom": "udvpn",
          "value": "26315789"
        }
      ],
      "hourlyPrices": [
        {
          "denom": "udvpn",
          "value": "52631578"
        }
      ],
      "subscriptions": 0,
      "sessions": 1,
      "peers": 1,
      "healthCheck": [],
      "fetchedAt": "2025-12-21T11:01:11+00:00"
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
    "address": "sentnode1pzvzxy6tf2ec6cdpa808ykch8d7aamlzvqqh39",
    "moniker": "Roomit-Fin-Helsinki-Hetzner-WG",
    "version": "8.3.1",
    "type": 1,
    "api": "65.109.99.157:13902",
    "asn": null,
    "country": "Finland",
    "city": "Helsinki",
    "isResidential": null,
    "isActive": true,
    "isHealthy": false,
    "isDuplicate": false,
    "isWhitelisted": null,
    "gigabytePrices": [
      {
        "denom": "udvpn",
        "value": "26315789"
      }
    ],
    "hourlyPrices": [
      {
        "denom": "udvpn",
        "value": "52631578"
      }
    ],
    "subscriptions": 0,
    "sessions": 0,
    "peers": 0,
    "healthCheck": [],
    "fetchedAt": "2025-12-21T11:01:11+00:00"
  },
  "errors": null
}
```

</p>
</details>

:::note
More node information data will be added in near future.
:::
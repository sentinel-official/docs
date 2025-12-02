---
title: Query
sidebar_position: 3
---

The following commands will query nodes, plans and subscriptions.


## Query Nodes

Retrieve information regarding the node list.

```bash
sentinelcli query nodes \
  --home "${HOME}/.sentinelcli" \
  --node https://rpc.sentinel.co:443 \
  --page 1
```
<details>
<summary>Example Output</summary>
<p>

```bash title="Nodes"
+-------------------------------+-------------------------------------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+-----------------+-------------------+---------+-------+-----------+-----------+---------+--------+
|            MONIKER            |                     ADDRESS                     |                                                                                                                                                     GIGABYTE PRICES                                                                                                                                                     |                                                                                                                                                     HOURLY PRICES                                                                                                                                                     |     COUNTRY     |    SPEED TEST     | LATENCY | PEERS | HANDSHAKE |   TYPE    | VERSION | STATUS |
+-------------------------------+-------------------------------------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+-----------------+-------------------+---------+-------+-----------+-----------+---------+--------+
| Mrsilent-187                  | sentnode1q9hrcxpm4k2am3d4k3rdetxmw7t0q55hehzmde | 52573ibc/31FEE1A2A9F9C01113F90BD0BBCCE8FD6BBB8585FAF109A2101827DD1D5B95B8,9204ibc/A8C2D23A1E6F95DA4E48BA349667E322BD7A6C996D8A4AAE8BA72E190F3D1477,1180852ibc/B1C0DDB14F25279A2026BC8794E12B259F8BDA546A3C5132CCAEE4431CE36783,122740ibc/ED07A3391A112B175915CD8FAF43A2DA8E4790EDE12566649D0C2F97716B8518,15342624udvpn | 18480ibc/31FEE1A2A9F9C01113F90BD0BBCCE8FD6BBB8585FAF109A2101827DD1D5B95B8,770ibc/A8C2D23A1E6F95DA4E48BA349667E322BD7A6C996D8A4AAE8BA72E190F3D1477,1871892ibc/B1C0DDB14F25279A2026BC8794E12B259F8BDA546A3C5132CCAEE4431CE36783,18897ibc/ED07A3391A112B175915CD8FAF43A2DA8E4790EDE12566649D0C2F97716B8518,4160000udvpn  | Singapore       | 276.62MB+191.37MB | 279ms   |     1 | false     | V2Ray     | 0.7.1   | active |
| SuchNode-IIJzeQz8CwiD         | sentnode1q9ta88k7lw950jq673wc3erzfzt6kuqf3tql4j | 52573ibc/31FEE1A2A9F9C01113F90BD0BBCCE8FD6BBB8585FAF109A2101827DD1D5B95B8,9204ibc/A8C2D23A1E6F95DA4E48BA349667E322BD7A6C996D8A4AAE8BA72E190F3D1477,1180852ibc/B1C0DDB14F25279A2026BC8794E12B259F8BDA546A3C5132CCAEE4431CE36783,122740ibc/ED07A3391A112B175915CD8FAF43A2DA8E4790EDE12566649D0C2F97716B8518,15342624udvpn | 18480ibc/31FEE1A2A9F9C01113F90BD0BBCCE8FD6BBB8585FAF109A2101827DD1D5B95B8,770ibc/A8C2D23A1E6F95DA4E48BA349667E322BD7A6C996D8A4AAE8BA72E190F3D1477,1871892ibc/B1C0DDB14F25279A2026BC8794E12B259F8BDA546A3C5132CCAEE4431CE36783,18897ibc/ED07A3391A112B175915CD8FAF43A2DA8E4790EDE12566649D0C2F97716B8518,4160000udvpn  | Singapore       | 213.37MB+215.12MB | 278ms   |     0 | false     | V2Ray     | 0.7.1   | active |
| DreamMaker_ofEz               | sentnode1qxn98j2km9asrcla36kv2adscsujvzk4v0k87y | 52573ibc/31FEE1A2A9F9C01113F90BD0BBCCE8FD6BBB8585FAF109A2101827DD1D5B95B8,9204ibc/A8C2D23A1E6F95DA4E48BA349667E322BD7A6C996D8A4AAE8BA72E190F3D1477,1180852ibc/B1C0DDB14F25279A2026BC8794E12B259F8BDA546A3C5132CCAEE4431CE36783,122740ibc/ED07A3391A112B175915CD8FAF43A2DA8E4790EDE12566649D0C2F97716B8518,15342624udvpn | 18480ibc/31FEE1A2A9F9C01113F90BD0BBCCE8FD6BBB8585FAF109A2101827DD1D5B95B8,770ibc/A8C2D23A1E6F95DA4E48BA349667E322BD7A6C996D8A4AAE8BA72E190F3D1477,1871892ibc/B1C0DDB14F25279A2026BC8794E12B259F8BDA546A3C5132CCAEE4431CE36783,18897ibc/ED07A3391A112B175915CD8FAF43A2DA8E4790EDE12566649D0C2F97716B8518,4160000udvpn  | Singapore       | 193.75MB+329.12MB | 279ms   |     1 | false     | V2Ray     | 0.7.1   | active |
| DreamMaker_08Ez               | sentnode1qq98v6x2pnmduxte289cwwju4e9kpcdtehxcd8 | 52573ibc/31FEE1A2A9F9C01113F90BD0BBCCE8FD6BBB8585FAF109A2101827DD1D5B95B8,9204ibc/A8C2D23A1E6F95DA4E48BA349667E322BD7A6C996D8A4AAE8BA72E190F3D1477,1180852ibc/B1C0DDB14F25279A2026BC8794E12B259F8BDA546A3C5132CCAEE4431CE36783,122740ibc/ED07A3391A112B175915CD8FAF43A2DA8E4790EDE12566649D0C2F97716B8518,15342624udvpn | 18480ibc/31FEE1A2A9F9C01113F90BD0BBCCE8FD6BBB8585FAF109A2101827DD1D5B95B8,770ibc/A8C2D23A1E6F95DA4E48BA349667E322BD7A6C996D8A4AAE8BA72E190F3D1477,1871892ibc/B1C0DDB14F25279A2026BC8794E12B259F8BDA546A3C5132CCAEE4431CE36783,18897ibc/ED07A3391A112B175915CD8FAF43A2DA8E4790EDE12566649D0C2F97716B8518,4160000udvpn  | Singapore       | 342.25MB+184.37MB | 282ms   |     0 | false     | V2Ray     | 0.7.1   | active |
| Mrsilent-214                  | sentnode1qgrguczp4xt3kf0j2mqpdjp9rpp88nj6qdl4kt | 52573ibc/31FEE1A2A9F9C01113F90BD0BBCCE8FD6BBB8585FAF109A2101827DD1D5B95B8,9204ibc/A8C2D23A1E6F95DA4E48BA349667E322BD7A6C996D8A4AAE8BA72E190F3D1477,1180852ibc/B1C0DDB14F25279A2026BC8794E12B259F8BDA546A3C5132CCAEE4431CE36783,122740ibc/ED07A3391A112B175915CD8FAF43A2DA8E4790EDE12566649D0C2F97716B8518,15342624udvpn | 18480ibc/31FEE1A2A9F9C01113F90BD0BBCCE8FD6BBB8585FAF109A2101827DD1D5B95B8,770ibc/A8C2D23A1E6F95DA4E48BA349667E322BD7A6C996D8A4AAE8BA72E190F3D1477,1871892ibc/B1C0DDB14F25279A2026BC8794E12B259F8BDA546A3C5132CCAEE4431CE36783,18897ibc/ED07A3391A112B175915CD8FAF43A2DA8E4790EDE12566649D0C2F97716B8518,4160000udvpn  | Singapore       | 175.00MB+291.75MB | 271ms   |     2 | false     | V2Ray     | 0.7.1   | active |
| SuchNode-XfhObFP7cQuO         | sentnode1qpwsakle96dvhrke0thyx4rkj2ztd775gs55a3 | 52573ibc/31FEE1A2A9F9C01113F90BD0BBCCE8FD6BBB8585FAF109A2101827DD1D5B95B8,9204ibc/A8C2D23A1E6F95DA4E48BA349667E322BD7A6C996D8A4AAE8BA72E190F3D1477,1180852ibc/B1C0DDB14F25279A2026BC8794E12B259F8BDA546A3C5132CCAEE4431CE36783,122740ibc/ED07A3391A112B175915CD8FAF43A2DA8E4790EDE12566649D0C2F97716B8518,15342624udvpn | 18480ibc/31FEE1A2A9F9C01113F90BD0BBCCE8FD6BBB8585FAF109A2101827DD1D5B95B8,770ibc/A8C2D23A1E6F95DA4E48BA349667E322BD7A6C996D8A4AAE8BA72E190F3D1477,1871892ibc/B1C0DDB14F25279A2026BC8794E12B259F8BDA546A3C5132CCAEE4431CE36783,18897ibc/ED07A3391A112B175915CD8FAF43A2DA8E4790EDE12566649D0C2F97716B8518,4160000udvpn  | Singapore       | 190.00MB+266.87MB | 282ms   |     0 | false     | V2Ray     | 0.7.1   | active |
| DreamMaker_R6z4               | sentnode1qzesjvj7g4w4zwkmhk7d8jredvgw45wn8l6wkd | 52573ibc/31FEE1A2A9F9C01113F90BD0BBCCE8FD6BBB8585FAF109A2101827DD1D5B95B8,9204ibc/A8C2D23A1E6F95DA4E48BA349667E322BD7A6C996D8A4AAE8BA72E190F3D1477,1180852ibc/B1C0DDB14F25279A2026BC8794E12B259F8BDA546A3C5132CCAEE4431CE36783,122740ibc/ED07A3391A112B175915CD8FAF43A2DA8E4790EDE12566649D0C2F97716B8518,15342624udvpn | 18480ibc/31FEE1A2A9F9C01113F90BD0BBCCE8FD6BBB8585FAF109A2101827DD1D5B95B8,770ibc/A8C2D23A1E6F95DA4E48BA349667E322BD7A6C996D8A4AAE8BA72E190F3D1477,1871892ibc/B1C0DDB14F25279A2026BC8794E12B259F8BDA546A3C5132CCAEE4431CE36783,18897ibc/ED07A3391A112B175915CD8FAF43A2DA8E4790EDE12566649D0C2F97716B8518,4160000udvpn  | Hong Kong       | 223.12MB+261.87MB | 373ms   |     1 | false     | V2Ray     | 0.7.1   | active |
| DreamMaker_ybIs               | sentnode1qp95rt7uhl8n68tpwcnxtr7q89w6t4el274g7a | 52573ibc/31FEE1A2A9F9C01113F90BD0BBCCE8FD6BBB8585FAF109A2101827DD1D5B95B8,9204ibc/A8C2D23A1E6F95DA4E48BA349667E322BD7A6C996D8A4AAE8BA72E190F3D1477,1180852ibc/B1C0DDB14F25279A2026BC8794E12B259F8BDA546A3C5132CCAEE4431CE36783,122740ibc/ED07A3391A112B175915CD8FAF43A2DA8E4790EDE12566649D0C2F97716B8518,15342624udvpn | 18480ibc/31FEE1A2A9F9C01113F90BD0BBCCE8FD6BBB8585FAF109A2101827DD1D5B95B8,770ibc/A8C2D23A1E6F95DA4E48BA349667E322BD7A6C996D8A4AAE8BA72E190F3D1477,1871892ibc/B1C0DDB14F25279A2026BC8794E12B259F8BDA546A3C5132CCAEE4431CE36783,18897ibc/ED07A3391A112B175915CD8FAF43A2DA8E4790EDE12566649D0C2F97716B8518,4160000udvpn  | Hong Kong       | 333.00MB+301.75MB | 375ms   |     0 | false     | V2Ray     | 0.7.1   | active |
| Mrsilent-067                  | sentnode1qy96ptn726uawduvjhqt5zgpt85syaqpmemppy | 52573ibc/31FEE1A2A9F9C01113F90BD0BBCCE8FD6BBB8585FAF109A2101827DD1D5B95B8,9204ibc/A8C2D23A1E6F95DA4E48BA349667E322BD7A6C996D8A4AAE8BA72E190F3D1477,1180852ibc/B1C0DDB14F25279A2026BC8794E12B259F8BDA546A3C5132CCAEE4431CE36783,122740ibc/ED07A3391A112B175915CD8FAF43A2DA8E4790EDE12566649D0C2F97716B8518,15342624udvpn | 18480ibc/31FEE1A2A9F9C01113F90BD0BBCCE8FD6BBB8585FAF109A2101827DD1D5B95B8,770ibc/A8C2D23A1E6F95DA4E48BA349667E322BD7A6C996D8A4AAE8BA72E190F3D1477,1871892ibc/B1C0DDB14F25279A2026BC8794E12B259F8BDA546A3C5132CCAEE4431CE36783,18897ibc/ED07A3391A112B175915CD8FAF43A2DA8E4790EDE12566649D0C2F97716B8518,4160000udvpn  | Hong Kong       | 293.62MB+231.37MB | 383ms   |     0 | false     | V2Ray     | 0.7.1   | active |
```

</p>
</details>


## Query a Node

Retrieve information regarding a specific node.

```bash
sentinelcli query node \
  --home "${HOME}/.sentinelcli" \
  --node https://rpc.sentinel.co:443 \
  <node_address>
```
<details>
<summary>Example Output</summary>
<p>

```bash title="Node"
+--------------+-------------------------------------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+-----------+-------------------+---------+-------+-----------+-------+---------+--------+
|   MONIKER    |                     ADDRESS                     |                                                                                                                                                     GIGABYTE PRICES                                                                                                                                                     |                                                                                                                                                    HOURLY PRICES                                                                                                                                                     |  COUNTRY  |    SPEED TEST     | LATENCY | PEERS | HANDSHAKE | TYPE  | VERSION | STATUS |
+--------------+-------------------------------------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+-----------+-------------------+---------+-------+-----------+-------+---------+--------+
| Mrsilent-187 | sentnode1q9hrcxpm4k2am3d4k3rdetxmw7t0q55hehzmde | 52573ibc/31FEE1A2A9F9C01113F90BD0BBCCE8FD6BBB8585FAF109A2101827DD1D5B95B8,9204ibc/A8C2D23A1E6F95DA4E48BA349667E322BD7A6C996D8A4AAE8BA72E190F3D1477,1180852ibc/B1C0DDB14F25279A2026BC8794E12B259F8BDA546A3C5132CCAEE4431CE36783,122740ibc/ED07A3391A112B175915CD8FAF43A2DA8E4790EDE12566649D0C2F97716B8518,15342624udvpn | 18480ibc/31FEE1A2A9F9C01113F90BD0BBCCE8FD6BBB8585FAF109A2101827DD1D5B95B8,770ibc/A8C2D23A1E6F95DA4E48BA349667E322BD7A6C996D8A4AAE8BA72E190F3D1477,1871892ibc/B1C0DDB14F25279A2026BC8794E12B259F8BDA546A3C5132CCAEE4431CE36783,18897ibc/ED07A3391A112B175915CD8FAF43A2DA8E4790EDE12566649D0C2F97716B8518,4160000udvpn | Singapore | 276.62MB+191.37MB | 281ms   |     1 | false     | V2Ray | 0.7.1   | active |
+--------------+-------------------------------------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+-----------+-------------------+---------+-------+-----------+-------+---------+--------+
```

</p>
</details>


## Query Subscriptions

Retrieve information regarding the subscriptions.

```bash
sentinelcli query subscriptions \
  --home "${HOME}/.sentinelcli" \
  --node https://rpc.sentinel.co:443 \
  --page 1
```
<details>
<summary>Example Output</summary>
<p>

```bash title="Subscriptions"
+--------+---------------------------------------------+--------------------------------+------------------+-------------------------------------------------+-----------+-------+-----------------------------------------------------------------------------+------+-------+
|   ID   |                   ADDRESS                   |          INACTIVE AT           |      STATUS      |                      NODE                       | GIGABYTES | HOURS |                                   DEPOSIT                                   | PLAN | DENOM |
+--------+---------------------------------------------+--------------------------------+------------------+-------------------------------------------------+-----------+-------+-----------------------------------------------------------------------------+------+-------+
| 197707 | sent1hcsg2gt4sqsaaq4kr9acalx79rp2zs4m4kgmvq | 2024-03-19 16:00:05.760729582  | active           |                                                 |         0 |     0 |                                                                             |    4 | udvpn |
|        |                                             | +0000 UTC                      |                  |                                                 |           |       |                                                                             |      |       |
| 225272 | sent1e8dvmhck36n3hypk6wf2e37efn2adz58uzv9p8 | 2024-02-10 12:44:58.053198502  | inactive_pending | sentnode1qurf4q46w03hmurt3yrzf5qt7hajf72a8azvk4 |         1 |     0 | 29999999udvpn                                                               |    0 |       |
|        |                                             | +0000 UTC                      |                  |                                                 |           |       |                                                                             |      |       |
| 225273 | sent1e8dvmhck36n3hypk6wf2e37efn2adz58uzv9p8 | 2024-02-10 12:45:27.840999453  | inactive_pending | sentnode1kpj3al3936n3l9j73ewf4gx5qtdy388lttr8yc |         1 |     0 | 29999999udvpn                                                               |    0 |       |
|        |                                             | +0000 UTC                      |                  |                                                 |           |       |                                                                             |      |       |
| 225275 | sent1xyaw0asa9u58swppepfvlac524n72g0s3z4jux | 2024-02-10 13:28:36.984433968  | inactive_pending | sentnode1qurf4q46w03hmurt3yrzf5qt7hajf72a8azvk4 |         1 |     0 | 29999999udvpn                                                               |    0 |       |
|        |                                             | +0000 UTC                      |                  |                                                 |           |       |                                                                             |      |       |
| 225281 | sent1gwce8uc6qr24xku7cgtgu67t6a3jxr6sf68kl5 | 2024-02-10 14:49:44.757550515  | inactive_pending | sentnode1xmvhvmdwg3xhe4afdzvn6hzanucr6rjlkeyv8u |         1 |     0 | 15342624udvpn                                                               |    0 |       |
|        |                                             | +0000 UTC                      |                  |                                                 |           |       |                                                                             |      |       |
| 225282 | sent1gwce8uc6qr24xku7cgtgu67t6a3jxr6sf68kl5 | 2024-02-10 14:51:25.646322187  | inactive_pending | sentnode1qurf4q46w03hmurt3yrzf5qt7hajf72a8azvk4 |         1 |     0 | 29999999udvpn                                                               |    0 |       |
|        |                                             | +0000 UTC                      |                  |                                                 |           |       |                                                                             |      |       |
| 225289 | sent1tjqlpj77pan58cu63r533vafwa5kcavgu6e3sq | 2024-02-10 13:52:45.192860639  | active           | sentnode1pf4mjzmjpk9m5dse54vhn9kfu0dmgaesus3sam |         1 |     0 | 1073502ibc/B1C0DDB14F25279A2026BC8794E12B259F8BDA546A3C5132CCAEE4431CE36783 |    0 |       |
|        |                                             | +0000 UTC                      |                  |                                                 |           |       |                                                                             |      |       |
```

</p>
</details>

## Query a Subscription

Retrieve information regarding a specific subscription.

```bash
sentinelcli query subscription \
  --home "${HOME}/.sentinelcli" \
  --node https://rpc.sentinel.co:443 \
  <subscription_id>
```
<details>
<summary>Example Output</summary>
<p>

```bash title="Subscription #197707"
+--------+---------------------------------------------+--------------------------------+--------+------+-----------+-------+---------+------+-------+
|   ID   |                   ADDRESS                   |          INACTIVE AT           | STATUS | NODE | GIGABYTES | HOURS | DEPOSIT | PLAN | DENOM |
+--------+---------------------------------------------+--------------------------------+--------+------+-----------+-------+---------+------+-------+
| 197707 | sent1hcsg2gt4sqsaaq4kr9acalx79rp2zs4m4kgmvq | 2024-03-19 16:00:05.760729582  | active |      |         0 |     0 |         |    4 | udvpn |
|        |                                             | +0000 UTC                      |        |      |           |       |         |      |       |
+--------+---------------------------------------------+--------------------------------+--------+------+-----------+-------+---------+------+-------+
```

</p>
</details>


## Query Allocations

Retrieve information regarding a subscription allocations.

```bash
sentinelcli query allocations \
  --home "${HOME}/.sentinelcli" \
  --node https://rpc.sentinel.co:443 \
  <subscription_id>
```
<details>
<summary>Example Output</summary>
<p>

```bash title="Allocations for subscription 197707"
+---------------------------------------------+---------------+----------------+
|                   ADDRESS                   | GRANTED BYTES | UTILISED BYTES |
+---------------------------------------------+---------------+----------------+
| sent1qqxgu3qryt6yj53xlam3y7z0tstyxcu3mx2c38 | 1000.00GB     | 14.42MB        |
| sent1qq5we70sgxgglmad35gelpw82rnc9yj45h59gy | 1000.00GB     | 0.00B          |
| sent1qptr09devqujfgdnc2tnz0ffhm2c925tncjgw3 | 1000.00GB     | 0.00B          |
| sent1qzk7hh2klp7jh7ualxqstsle6z4p9k5msdsxt0 | 1000.00GB     | 0.00B          |
| sent1qrjhlhh784jgfcaxpaxnw0sgh5d9zg4nzmmt35 | 1000.00GB     | 0.00B          |
| sent1qrcmgrtaas6c0u58u5kvw3m9hexstae33p4tt6 | 1000.00GB     | 0.00B          |
| sent1q957jpenmxd30amul8a0qfrmk0mjdz4cvwfl0m | 1000.00GB     | 0.00B          |
| sent1q9k8dd803xnydkx6thh8nqgxd6kgt5esvr9dt2 | 1000.00GB     | 0.00B          |
| sent1qx03t9zrf82hgzm67arxuncmvr93rq0t5wunx8 | 1000.00GB     | 0.00B          |
| sent1qgvm279pazayhyatr3720nkyuxz4efyqfnhvrq | 1000.00GB     | 0.00B          |
| sent1qfqmvwav2gh6stgewj7mcmhwqhu6fduac56svs | 1000.00GB     | 0.00B          |
| sent1qfr5q7cwzd4fedvgrxx3s7t28yxar6h6p5u6ss | 1000.00GB     | 0.00B          |
| sent1qfcqztm6r92kd4w6nslusqhtvrkwmxakwrsdlt | 1000.00GB     | 0.00B          |
| sent1q2rxk6pfc3xavt33ekdxgc9mjmxdjfut3te232 | 1000.00GB     | 0.00B          |
| sent1qtrz4a60h0q00fl3nu5c0hmd9g8zquj59l65ju | 1000.00GB     | 0.00B          |
| sent1qtvpnacazmnyltgce9v2y3c9mvq8m7qdau2kay | 1000.00GB     | 0.00B          |
| sent1qt0962l78wwv5yyx4hlyzh5qxremk8s2jnv30u | 1000.00GB     | 0.00B          |
| sent1qtullfe0la5dg0q73pe500esanzcgp8jdrwyfc | 1000.00GB     | 0.00B          |
| sent1qv259d8nz2sznumvvnnljfq2gyqpw86hh3gm2h | 1000.00GB     | 0.00B          |
| sent1qdgcp3yeymewteflqm6crkeulj9g5v4j6emj3d | 1000.00GB     | 893.03MB       |
| sent1qd2ejw75t02y0ce02zalpeg5dt333dtva7krqg | 1000.00GB     | 0.00B          |
| sent1qd0spew5akwmyypp2d3l8pxv6hrh9hpzsus3tg | 1000.00GB     | 12.34MB        |
| sent1qdur49qs3n32jeu6tanjr2erq4fy3dweq80vtu | 1000.00GB     | 0.00B          |
| sent1qwpvjamjzp4x80kcm5vfx55w6hctu99c9nngzv | 1000.00GB     | 0.00B          |
| sent1qw8p9t7epssfcr8aucf0hlzu9t6tahz4pwprhm | 1000.00GB     | 0.00B          |
| sent1q0837xq07yyydugktqnkud33vy3q2e0szgu6xe | 1000.00GB     | 0.00B          |
| sent1q0f3gwy7kdp5zdljnl9y2vrtgaa6prgwhulu7k | 1000.00GB     | 0.00B          |
| sent1q05hldfay4sj77070tynm9ea9mdg9dsvz4jl3r | 1000.00GB     | 0.00B          |
| sent1qsh2dc2dtzttfm76gwfjq756fmy9kwyugf62kp | 1000.00GB     | 3.79MB         |
| sent1q3tp6cj5waav9rpfelrlya8rlu92rletdg5rxg | 1000.00GB     | 0.00B          |
| sent1q3txz3s79kcsyxsp0xj75rwdm6qjeghn055qpm | 1000.00GB     | 0.00B          |
| sent1q36vyg9d3c7j5ckh8hvj774zswm70rggxukmc0 | 1000.00GB     | 0.00B          |
| sent1qnplzvcex5ce4q6hkezc878ftuqrev0dvw4yds | 1000.00GB     | 0.00B          |
| sent1qn2lncsecdf7df8r9mztdayu5ll6cj7c6s6ssc | 1000.00GB     | 0.00B          |
| sent1q5mv9783ljc9tqxggacuu20rzusrrv3qvmmlt7 | 1000.00GB     | 0.00B          |
| sent1q4paaeryx404t4k0sphjcvvz3wyd0hp8ndfcj8 | 1000.00GB     | 0.00B          |
| sent1q4xcj9c7drf45ywxcflxv6jevjyjthndt5jk9x | 1000.00GB     | 4.17MB         |
| sent1qhp3tmnqz06whxu37k00zrmveghprqwaqdqpqk | 1000.00GB     | 0.00B          |
| sent1qhge0yfhxdz2hls2mvnvhjtqv93kw06ugmyx5g | 1000.00GB     | 0.00B          |
| sent1qhhffrz0h6ms7r9m94l5k7v3kk9d4rnwu7wcng | 1000.00GB     | 0.00B          |
| sent1qh6eyx5kz4cdrzttvrdgyemjkj7haetcaghe0c | 1000.00GB     | 0.00B          |
| sent1q67vj72l0y7aquu33zlr5lj9uq3dwzv02cg8yk | 1000.00GB     | 0.00B          |
| sent1q6lpg7y72nsnuen8rfu8st0d5f00727m0t4u8v | 1000.00GB     | 0.00B          |
| sent1qmz36k9z70znfwduu34mnef8cdex7zksuu6pr0 | 1000.00GB     | 0.00B          |
| sent1qu2e5p50nkege050rkjnnj5q2cgpdjw4yzlg2h | 1000.00GB     | 0.00B          |
| sent1qa4lvy6kytz7hegl9ekypdma233wxhewh0uawp | 1000.00GB     | 441.73KB       |
| sent1qlgvny02juu5rpujehy7xyr405fz0ujegck4mk | 1000.00GB     | 0.00B          |
| sent1ppj04us683d8pzkdkqhtm3shsk8vct588xq6nj | 1000.00GB     | 0.00B          |
| sent1pzrllj22ztvr8lpmg7w2xwchhmzeh0y28y28zx | 1000.00GB     | 0.00B          |
| sent1pzg8x97h6hfdxq0w59azermvm3cuave4lrmr8q | 1000.00GB     | 0.00B          |
| sent1prf8n5hmt72rjkcxnlxl6xa9nz0xjd843h925s | 1000.00GB     | 0.00B          |
| sent1pyxnkunr3u29hv5tenelj3zqnlvvr2dv50rdfg | 1000.00GB     | 0.00B          |
| sent1pysjt4wdhzhgukru94teahhel69k6c3z0ju82x | 1000.00GB     | 0.00B          |
| sent1pyermd9kyrdw2rsshk3s9j8ssj0s2mfx6e3fn2 | 1000.00GB     | 0.00B          |
| sent1pxyxve25jtfvwttk6fq8yy3eapw03n57w3zarl | 1000.00GB     | 0.00B          |
| sent1p8vfaq50cqxlpt7ls0dw0g08t9gv076qjtxzmr | 1000.00GB     | 0.00B          |
| sent1pgpd5ay64v09mas7h6p774pj5g27mw2r0zwc2x | 1000.00GB     | 0.00B          |
| sent1pg00algyl6w5knugxf7xzraqvvcc33xslkx7p8 | 1000.00GB     | 0.00B          |
| sent1pfy7uwcxs7age0nsqu6g7etanu535ukggzksd4 | 1000.00GB     | 0.00B          |
| sent1pft6ah2twpdec244grlz3za4zmyqzctkajxpjh | 1000.00GB     | 0.00B          |
| sent1pfsv2a27fddq5rzvmmhgwrcg29jn97v2vynnym | 1000.00GB     | 0.00B          |
| sent1pfcpphdz0z0hzp3hah3ytjtrfe94xylpquxgpr | 1000.00GB     | 0.00B          |
| sent1pfe0v6307heug7nwac8w3rc0q9ev2fmhxnayym | 1000.00GB     | 0.00B          |
| sent1p2snmwhacr4t7m6fvyqdzgsnqtyl783dy4mk02 | 1000.00GB     | 0.00B          |
| sent1p24jqmntwegefqwu7hqqpu4adsd6f2qmyw55j9 | 1000.00GB     | 160.18MB       |
| sent1ptxyu26hpsu5rmk7xlkqp506gx87rhlmkvmu3m | 1000.00GB     | 0.00B          |
| sent1ptft6yk7jnajlnawesnqch4fctlwgsxsndlzrh | 1000.00GB     | 0.00B          |
| sent1pvzs0gawas4zreu75kjj8e40v68jph6wa955dg | 1000.00GB     | 0.00B          |
| sent1pvkrq6meeuyr3550hqn0359hm34p23has5g9rk | 1000.00GB     | 0.00B          |
| sent1pd4ed399m55hjghczutv0me5rnv6x7tkd0h8fq | 1000.00GB     | 0.00B          |
| sent1pd7aefkyshuacduzpvjntmpnjjzuzcx6cw96rc | 1000.00GB     | 0.00B          |
| sent1pw9mq04g4ngz9233cway4xcynt7a9p64era7a9 | 1000.00GB     | 0.00B          |
| sent1p00agm380rcacf3yv5n0wkzg8qmwzspuuegnpr | 1000.00GB     | 0.00B          |
| sent1p0mxulccrql982lzlkvyzg0cv96k86uur6u7lp | 1000.00GB     | 0.00B          |
| sent1p0u84zc9gdnvtwpnkyzzxxenyqztqgmfylrht4 | 1000.00GB     | 0.00B          |
| sent1psamck4peqvg6mg45unr0rssseash4twlpp4a5 | 1000.00GB     | 0.00B          |
| sent1p3wllnde3jmvxvuec9wxzkwjdpndr0vv9257xq | 1000.00GB     | 0.00B          |
| sent1pjxg6q9l73wz4vy37x4var9arfk8elnx0t6u5q | 1000.00GB     | 0.00B          |
| sent1pjw70m5wcc3dyfzddut2gtnztc6rzs8st2cz2a | 1000.00GB     | 0.00B          |
| sent1pnw4skhdqm8ucjlw90lcq2hecvkdg2m773aqgn | 1000.00GB     | 0.00B          |
| sent1p5nygnjy456q5t2833heuxcu8vxk8nhncqpk0q | 1000.00GB     | 0.00B          |
| sent1p5ktejyflsslhj3jm3nfhp008zw96xtren0cpj | 1000.00GB     | 170.83MB       |
| sent1p5hxzkj8vlwajrxvr4llxjrfq9lzxkklvfhuz7 | 1000.00GB     | 0.00B          |
| sent1p4pfuygtfhc90zt4ltfm09tmdsqqrzcsgsvpcm | 1000.00GB     | 0.00B          |
| sent1pk4gelf028e4dhp83fw8fxjr8c2vrx9d5vkx7p | 1000.00GB     | 0.00B          |
| sent1pk43c6cmnn9lp0saexgjsz5rh6n3fayl503duu | 1000.00GB     | 1.03GB         |
| sent1phrhvk3p9mz2uuakygjlgjsdx4ewtv3udk4hen | 1000.00GB     | 0.00B          |
| sent1pc8dp3zgqrjmzfv8hhgtyyy5k25pjs8dwj0ryc | 1000.00GB     | 0.00B          |
| sent1pc38ccv6jc6t5fra0m93na6n8a0f8ulxl4ew8n | 1000.00GB     | 0.00B          |
| sent1pc765euvpn67kw23d3hjq72we5zyddfcctcsry | 1000.00GB     | 0.00B          |
| sent1pe6rjsz6vpw9njspa3a7j5f5hftrt65jl0u649 | 1000.00GB     | 0.00B          |
| sent1pmzrl7r8dlvppfg568tef6xngx52zgzrug2t78 | 1000.00GB     | 0.00B          |
| sent1pmv8z0vn3ptyc2476jc5pgytj0jljev43awnue | 1000.00GB     | 0.00B          |
| sent1pm4pzrarsxa046dderhyae23wjwe5thnzj4h4s | 1000.00GB     | 0.00B          |
| sent1puqlg2mjs9vdl0cz0c9cuwd8lrj3p6ta7zhjaq | 1000.00GB     | 0.00B          |
| sent1punvr9euqqwvlnmyny9tyws5r9zngq24wsge0r | 1000.00GB     | 0.00B          |
| sent1payfmn9ewmq5j2kq2k2hdmu4syn4hqdzhpnaxx | 1000.00GB     | 0.00B          |
| sent1plsvmqlyq4lhn8dqcqzrc0c68efjv9n302x6nw | 1000.00GB     | 0.00B          |
| sent1plm8gpyeqr7xltju32lphet0cg3ye52wku9qxq | 1000.00GB     | 0.00B          |
| sent1zq084t5j2q7uhmwsewjsxsqkcdjmzex78clx6v | 1000.00GB     | 4.41MB         |
+---------------------------------------------+---------------+----------------+
```

</p>
</details>


## Query an Allocation

Retrieve information regarding an address subscription allocation.

```bash
sentinelcli query allocation \
  --home "${HOME}/.sentinelcli" \
  --node https://rpc.sentinel.co:443 \
  <subscription_id> <address>
```
<details>
<summary>Example Output</summary>
<p>

```bash title="Allocation for subscription 197707 and address sent1qqxgu3qryt6yj53xlam3y7z0tstyxcu3mx2c38"
+---------------------------------------------+---------------+----------------+
|                   ADDRESS                   | GRANTED BYTES | UTILISED BYTES |
+---------------------------------------------+---------------+----------------+
| sent1qqxgu3qryt6yj53xlam3y7z0tstyxcu3mx2c38 | 1000.00GB     | 14.42MB        |
+---------------------------------------------+---------------+----------------+
```

</p>
</details>


## Query Sessions

Retrieve information regarding the sessions.

```bash
sentinelcli query sessions \
  --home "${HOME}/.sentinelcli" \
  --node https://rpc.sentinel.co:443 \
  --page 1
```
<details>
<summary>Example Output</summary>
<p>

```bash title="Sessions"
+---------+--------------+-------------------------------------------------+---------------------------------------------+------------+-------------------+------------------+
|   ID    | SUBSCRIPTION |                      NODE                       |                   ADDRESS                   |  DURATION  |     BANDWIDTH     |      STATUS      |
+---------+--------------+-------------------------------------------------+---------------------------------------------+------------+-------------------+------------------+
| 2645693 |       293836 | sentnode1xfv5gu26mtrwxv3j8j00etuzzr7mzfgf2x6rr9 | sent1xa6nkz83vg5zrgww0xla8wn5ps8flcj4jpu69s | 375h32m42s | 106.16MB+3.67GB   | active           |
| 2784854 |       293836 | sentnode1jtdxpxmkkpu8t7uw0h8g60v5tyv6hrav4uaunj | sent1wn72svthup3sdhxx2cmmntmk55ywfay0pu8dkc | 222h44m16s | 70.93MB+3.52GB    | active           |
| 2805462 |       293836 | sentnode1erxfpfwswztlgu8sdg6fwytv84hrd98sap6jk3 | sent13w0g70uhcdjfyyrsgewfdqxfxudereydj7s7sm | 190h43m10s | 3.87GB+35.71GB    | active           |
| 2807735 |       293836 | sentnode1zq97l9fdettzq54hkyfcymh3t58pcryxrytf24 | sent1u8zht0zlqxafduxzdag29val3qkfrcxypjkatq | 187h10m46s | 437.23MB+4.32GB   | active           |
| 2832079 |       293836 | sentnode1nu9j4h3v2p2rkknunx2s3wr5cw56a2evm4tynv | sent1c4695vt6gdld8ngx7x70agrn9wlnt54dypq4ad | 164h27m45s | 209.57MB+1.78GB   | active           |
| 2847198 |       293836 | sentnode1qfpyemsgwrmsfuqwl4zyhz50ll9mz7u4u44rj4 | sent12rmdnttq2reptaz7n2jc0ty2w2kgp9za6ezgeq | 160h0m23s  | 80.10MB+402.75MB  | active           |
| 2852485 |       293836 | sentnode10nvzlzsycuusdfhgumrjqw67js8sufaad4s7mg | sent1rvv06rnshklxltrdcdq32pdj9rjxq4fn9237zw | 146h28m43s | 314.74MB+1.22GB   | active           |
```

</p>
</details>


## Query a Session

Retrieve information regarding a specific session.

```bash
sentinelcli query session \
  --home "${HOME}/.sentinelcli" \
  --node https://rpc.sentinel.co:443 \
  <session_id>
```
<details>
<summary>Example Output</summary>
<p>

```bash title="Session #2645693"
+---------+--------------+-------------------------------------------------+---------------------------------------------+------------+-----------------+--------+
|   ID    | SUBSCRIPTION |                      NODE                       |                   ADDRESS                   |  DURATION  |    BANDWIDTH    | STATUS |
+---------+--------------+-------------------------------------------------+---------------------------------------------+------------+-----------------+--------+
| 2645693 |       293836 | sentnode1xfv5gu26mtrwxv3j8j00etuzzr7mzfgf2x6rr9 | sent1xa6nkz83vg5zrgww0xla8wn5ps8flcj4jpu69s | 375h32m42s | 106.16MB+3.67GB | active |
+---------+--------------+-------------------------------------------------+---------------------------------------------+------------+-----------------+--------+
```

</p>
</details>


## Query Deposits

Retrieve information regarding the deposits.

```bash
sentinelcli query deposits \
  --home "${HOME}/.sentinelcli" \
  --node https://rpc.sentinel.co:443 \
  --page 1
```
<details>
<summary>Example Output</summary>
<p>

```bash title="Deposits"
+---------------------------------------------+-----------------+
|                   ADDRESS                   |     AMOUNT      |
+---------------------------------------------+-----------------+
| sent1qqks9m5mxrsrkg5zqshnh207r6t6nudpju3frn | 15332362udvpn   |
| sent1qpqdfd0pzxlt2kwly6ekh3jvyts2v644mlq92g | 46027872udvpn   |
| sent1qp7azdhscpxfy7w2h3j42c2lmfy3m9thm6uq7x | 276797096udvpn  |
| sent1qyy4ufdll5s4a8mcg05auc4p58d6ksk5ad0n68 | 3011465742udvpn |
| sent1q9s6l6austruuzrzexuucy9kxtkjtt5xzk95qn | 15295663udvpn   |

```

</p>
</details>


## Query a Deposit

Retrieve information regarding a specific deposit.

```bash
sentinelcli query deposits \
  --home "${HOME}/.sentinelcli" \
  --node https://rpc.sentinel.co:443 \
  <address>
```
<details>
<summary>Example Output</summary>
<p>

```bash title="Deposit for address sent1qqks9m5mxrsrkg5zqshnh207r6t6nudpju3frn"
+---------------------------------------------+---------------+
|                   ADDRESS                   |    AMOUNT     |
+---------------------------------------------+---------------+
| sent1qqks9m5mxrsrkg5zqshnh207r6t6nudpju3frn | 15332362udvpn |
+---------------------------------------------+---------------+
```

</p>
</details>


## Query Plans

Retrieve information regarding the plans.

```bash
sentinelcli query plans \
  --home "${HOME}/.sentinelcli" \
  --node https://rpc.sentinel.co:443 \
  --page 1
```
<details>
<summary>Example Output</summary>
<p>

```bash title="Plans"
+----+-------------------------------------------------+-----------------+---------------+----------+--------+
| ID |                     ADDRESS                     |     PRICES      |   GIGABYTES   | DURATION | STATUS |
+----+-------------------------------------------------+-----------------+---------------+----------+--------+
|  1 | sentprov1aaaa4gxkfjntrerurznyhcm4saeegynrhq6zmk | 25000000udvpn   |           250 | 600h0m0s | active |
|  2 | sentprov1gjkdw8arm54sv7xdhjxnx30lcya4alhfktuxyy | 25000000udvpn   |           250 | 600h0m0s | active |
|  3 | sentprov1gjkdw8arm54sv7xdhjxnx30lcya4alhfktuxyy | 25000udvpn      |             1 | 600h0m0s | active |
|  5 | sentprov17h00cnhccphxftsxm98s88n3s20quqkja95pk5 | 100000000udvpn  | 9999999999999 | 2.592ms  | active |
|  6 | sentprov17h00cnhccphxftsxm98s88n3s20quqkja95pk5 | 1udvpn          | 9999999999999 | 720h0m0s | active |
|  7 | sentprov17h00cnhccphxftsxm98s88n3s20quqkja95pk5 | 1udvpn          | 9999999999999 | 720h0m0s | active |
|  8 | sentprov13m86rfchec5dr9st8twuq4pf0tsr0zavg0p09j | 1udvpn          | 9999999999999 | 720h0m0s | active |
|  9 | sentprov1jhsd9ps5cdpkl7xz0faktpe33yur8uqwualrjq | 100000000udvpn  | 9999999999999 | 2.592ms  | active |
| 12 | sentprov1ra2mvn0q36my25ckyvu3ukppq9cy0t3p0lk207 | 1000000udvpn    | 9999999999999 | 2.592ms  | active |
| 13 | sentprov1jhsd9ps5cdpkl7xz0faktpe33yur8uqwualrjq | 100000000udvpn  | 9999999999999 | 2.592ms  | active |
| 14 | sentprov1ra2mvn0q36my25ckyvu3ukppq9cy0t3p0lk207 | 1000000udvpn    | 9999999999999 | 2.592ms  | active |
| 15 | sentprov1ra2mvn0q36my25ckyvu3ukppq9cy0t3p0lk207 | 1000000udvpn    | 9999999999999 | 720h0m0s | active |
| 16 | sentprov1jhsd9ps5cdpkl7xz0faktpe33yur8uqwualrjq | 1000000udvpn    | 9999999999999 | 720h0m0s | active |
| 17 | sentprov1tc9l3rakhprzjz3d7rculqaw4mc9h2mvjykew4 | 1000000000udvpn |             1 | 1h0m0s   | active |
| 18 | sentprov1mrqc5hzdp7gttvrylqu060cevgfx2kaa9lh7a7 | 1udvpn          | 9999999999999 | 720h0m0s | active |
| 19 | sentprov1gatdlpdc4fadckccypjfnam2a4rcmum55q46zn | 25000udvpn      |             1 | 600h0m0s | active |
| 21 | sentprov1gatdlpdc4fadckccypjfnam2a4rcmum55q46zn | 50000udvpn      |             1 | 1h0m0s   | active |
| 24 | sentprov17h00cnhccphxftsxm98s88n3s20quqkja95pk5 | 1udvpn          | 9999999999999 | 720h0m0s | active |
+----+-------------------------------------------------+-----------------+---------------+----------+--------+
```
</p>
</details>


## Query a Plan

Retrieve information regarding a specific plans.

```bash
sentinelcli query plan \
  --home "${HOME}/.sentinelcli" \
  --node https://rpc.sentinel.co:443 \
  <plan_id>
```
<details>
<summary>Example Output</summary>
<p>

```bash title="Plan #1"
+----+-------------------------------------------------+---------------+-----------+----------+--------+
| ID |                     ADDRESS                     |    PRICES     | GIGABYTES | DURATION | STATUS |
+----+-------------------------------------------------+---------------+-----------+----------+--------+
|  1 | sentprov1aaaa4gxkfjntrerurznyhcm4saeegynrhq6zmk | 25000000udvpn |       250 | 600h0m0s | active |
+----+-------------------------------------------------+---------------+-----------+----------+--------+
```
</p>
</details>


## Query Providers

Retrieve information regarding the providers.

```bash
sentinelcli query providers \
  --home "${HOME}/.sentinelcli" \
  --node https://rpc.sentinel.co:443 \
  --page 1
```
<details>
<summary>Example Output</summary>
<p>

```bash title="Providers"
+--------------------------+-------------------------------------------------+-------------------------------------------------+---------------------+
|           NAME           |                     ADDRESS                     |                    IDENTITY                     |       WEBSITE       |
+--------------------------+-------------------------------------------------+-------------------------------------------------+---------------------+
| SOLAR dVPN               | sentprov1gjkdw8arm54sv7xdhjxnx30lcya4alhfktuxyy | 6257A55EA42BA680                                | https://labs.solar  |
| apiVPN (Staging)         | sentprov1gatdlpdc4fadckccypjfnam2a4rcmum55q46zn | sentprov12kyhkw2xsc8g3t8dtz569c6fn2qejmzs92s07h | https://apivpn.io   |
| Sentinel Node Incentives | sentprov1aaaa4gxkfjntrerurznyhcm4saeegynrhq6zmk | 045D374A62F15B56                                | https://sentinel.co |
+--------------------------+-------------------------------------------------+-------------------------------------------------+---------------------+
```
</p>
</details>


## Query a Provider

Retrieve information regarding a specific provider.

```bash
sentinelcli query provider \
  --home "${HOME}/.sentinelcli" \
  --node https://rpc.sentinel.co:443 \
  <provider_address>
```
<details>
<summary>Example Output</summary>
<p>

```bash title="Provider sentprov1aaaa4gxkfjntrerurznyhcm4saeegynrhq6zmk"
+--------------------------+-------------------------------------------------+------------------+---------------------+
|           NAME           |                     ADDRESS                     |     IDENTITY     |       WEBSITE       |
+--------------------------+-------------------------------------------------+------------------+---------------------+
| Sentinel Node Incentives | sentprov1aaaa4gxkfjntrerurznyhcm4saeegynrhq6zmk | 045D374A62F15B56 | https://sentinel.co |
+--------------------------+-------------------------------------------------+------------------+---------------------+
```
</p>
</details>
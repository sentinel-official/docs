---
title: Query
sidebar_position: 3
---

The following commands will query nodes, plans and subscriptions.


## Query all Nodes

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


## Query all Subscriptions

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


## Query all Sessions

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


## Query all Deposits

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


## Query all Plans

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


## Query all Providers

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
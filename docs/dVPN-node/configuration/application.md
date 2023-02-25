# Application

???+ tip "Tip"
    To know the public IP execute the command `curl --silent ifconfig.me`

## Chain

| Name                 | Description                                     | Default                       |
| -------------------- | ----------------------------------------------- | ----------------------------- |
| Gas Adjustment       | Gas adjustment factor                           | 1.05                          |
| Gas                  | Gas limit to set per transaction                | 200000                        |
| Gas Prices           | Gas prices to determine the transaction fee     | 0.1udvpn                      |
| ID                   | The network chain ID                            | sentinelhub-2                 |
| RPC Address          | Tendermint RPC interface for the chain          | <https://rpc.sentinel.co:443> |
| Simulate And Execute | Calculate the approx gas units before broadcast | true                          |

## Handshake

| Name   | Description                                                                          | Default |
| ------ | ------------------------------------------------------------------------------------ | ------- |
| Enable | Enable Handshake DNS resolver. <br/> Must be disabled incase the VPN type is `v2ray` | true    |
| Peers  | Number of peers                                                                      | 8       |

## Keyring

| Name    | Description                                                           | Default  |
| ------- | --------------------------------------------------------------------- | -------- |
| Backend | Underlying keyring type for key management <br/> Values: [file, test] | file     |
| From    | Name of the key with which to sign                                    | operator |

## Node

| Name                     | Description                                                                         | Default   |
| ------------------------ | ----------------------------------------------------------------------------------- | --------- |
| Interval Set Sessions    | Time interval between each set_sessions operation                                   | 2m0s      |
| Interval Update Sessions | Time interval between each update_session transactions                              | 1h48m0s   |
| Interval Update Status   | Time interval between each update_status transaction                                | 54m0s     |
| Listen On                | API listen-address. <br/> Format: `0.0.0.0:<API_PORT>`                              |           |
| Moniker                  | Name of the node                                                                    |           |
| Price                    | Per Gigabyte price to charge against the provided bandwidth                         |           |
| Provider                 | Address of the provider the node wants to operate under                             |           |
| Remote URL               | Publicly accessible URL of the node. <br/> Format: `https://<PUBLIC_IP>:<API_PORT>` |           |
| Type                     | VPN type <br/> Values: [wireguard, v2ray]                                           | wireguard |

## QOS

| Name      | Description                        | Default |
| --------- | ---------------------------------- | ------- |
| Max Peers | Maximum number of concurrent peers | 250     |

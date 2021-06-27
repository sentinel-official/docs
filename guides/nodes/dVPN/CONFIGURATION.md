# Configuration

## Application

### Chain

| Name                 | Description                                     | Default                       |
| -------------------- | ----------------------------------------------- | ----------------------------- |
| Gas Adjustment       | Gas adjustment factor                           | 1.05                          |
| Gas                  | Gas limit to set per transaction                | 200000                        |
| Gas Prices           | Gas prices to determine the transaction fee     | 0.1udvpn                      |
| ID                   | The network chain ID                            | sentinelhub-2                 |
| RPC Address          | Tendermint RPC interface for the chain          | <https://rpc.sentinel.co:443> |
| Simulate And Execute | Calculate the approx gas units before broadcast | true                          |

### Handshake

| Name   | Description                   | Default |
| ------ | ----------------------------- | ------- |
| Enable | Enable Handshake DNS resolver | true    |
| Peers  | Number of peers               | 8       |

### Keyring

| Name    | Description                           | Default |
| ------- | ------------------------------------- | ------- |
| Backend | Underlying storage mechanism for keys | file    |
| From    | Name of the key with which to sign    |         |

### Node

| Name                     | Description                                                 | Default |
| ------------------------ | ----------------------------------------------------------- | ------- |
| Interval Set Sessions    | Time interval between each set_sessions operation           | 2m0s    |
| Interval Update Sessions | Time interval between each update_sessions transactions     | 1h48m0s |
| Interval Update Status   | Time interval between each update_status transactions       | 54m0s   |
| Listen On                | API listen-address                                          |         |
| Moniker                  | Name of the node                                            |         |
| Price                    | Per Gigabyte price to charge against the provided bandwidth |         |
| Provider                 | Address of the provider the node wants to operate under     |         |
| Remote URL               | Public URL of the node  ( https://<PUBLIC_IP>:<API_PORT> )  |         |

## WireGuard

| Name        | Description                                    | Default |
| ----------- | ---------------------------------------------- | ------- |
| Device      | Name of the Network interface                  | wg0     |
| Listen Port | Port number to accept the incoming connections |         |
| Private Key | Server private key                             |         |

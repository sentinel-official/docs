# Configuration

## Application

### Chain

| Name                 | Description                                    | Default                              |
| -------------------- | ---------------------------------------------- | ------------------------------------ |
| Gas Adjustment       | Gas adjustment factor                          | 1.05                                 |
| Gas                  | Gas limit to set per transaction               | 100000                               |
| Gas Prices           | Gas prices to determine the transaction fee    | 0.01tsent                            |
| ID                   | The network chain ID                           | sentinel-turing-4                    |
| RPC Address          | Tendermint RPC interface for the chain         | <https://rpc.turing.sentinel.co:443> |
| Simulate And Execute | Calculate the transaction fee by simulating it | true                                 |

### Handshake

| Name   | Description                   | Default |
| ------ | ----------------------------- | ------- |
| Enable | Enable Handshake DNS resolver | true    |
| Peers  | Number of peers               | 8       |

### Keyring

| Name    | Description                           | Default |
| ------- | ------------------------------------- | ------- |
| Backend | Underlying storage mechanism for keys | file    |

### Node

| Name              | Description                                                 | Default      |
| ----------------- | ----------------------------------------------------------- | ------------ |
| From              | Name of the key with which to sign                          |              |
| Interval Sessions | Time interval between each update_sessions transactions     | 480000000000 |
| Interval Status   | Time interval between each update_status transactions       | 240000000000 |
| Listen On         | API listen-address                                          | 0.0.0.0:8585 |
| Moniker           | Name of the node                                            |              |
| Price             | Per Gigabyte price to charge against the provided bandwidth | 50tsent      |
| Provider          | Address of the provider the node wants to operate under     |              |
| Remote URL        | Public URL of the node                                      |              |
| Type              | Type of the underlying VPN protocol                         | 1            |

## WireGuard

| Name        | Description                                    | Default |
| ----------- | ---------------------------------------------- | ------- |
| Device      | Name of the Network interface                  | wg0     |
| Listen Port | Port number to accept the incoming connections |         |
| Private Key | Server private key                             |         |

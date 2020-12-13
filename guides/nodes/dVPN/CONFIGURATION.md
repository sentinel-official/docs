# Configuration

## Application

### Chain

| Name           | Description                                 | Default                              |
|----------------|---------------------------------------------|--------------------------------------|
| Fees           | Fees to pay along with a transaction        |                                      |
| Gas Adjustment | Gas adjustment factor                       | 0.0                                  |
| Gas            | Gas limit to set per-transaction            | 100000                               |
| Gas Prices     | Gas prices to determine the transaction fee | 0.01tsent                            |
| ID             | The network chain ID                        | sentinel-turing-3a                   |
| RPC Address    | Tendermint RCP interface for the chain      | <https://rpc.turing.sentinel.co:443> |
| Trust Node     | Trust connected full node                   | false                                |

### Handshake

| Name   | Description                   | Default |
|--------|-------------------------------|---------|
| Enable | Enable Handshake DNS resolver | true    |
| Peers  | Number of peers               | 8       |

### Node

| Name              | Description                                                 | Default        |
|-------------------|-------------------------------------------------------------|----------------|
| From              | Name of the private key with which to sign                  |                |
| Interval Sessions | Time interval between each update_sessions transactions     | 480000000000   |
| Interval Status   | Time interval between each update_status transactions       | 240000000000   |
| Listen On         | API listen-address                                          | 127.0.0.1:8585 |
| Moniker           | Name of the dVPN node                                       |                |
| Price             | Per Gigabyte price to charge against the provided bandwidth | 50tsent        |
| Provider          | Address of the provider the node wants to operate under     |                |
| Remote URL        | Public URL of the node                                      |                |
| Type              | Type of the underlying protocol                             | WireGuard      |

## WireGuard

| Name        | Description                                    | Default |
|-------------|------------------------------------------------|---------|
| Deveice     | Name of the Network interface                  | wg0     |
| Listen Port | Port number to accept the incoming connections |         |
| Private Key | Server private key                             |         |

---
title: dVPN Program
sidebar_label: "📜 dVPN Program"
sidebar_position: 1
---

# dVPN Program

The `dvpn` Anchor program holds the on-chain state for the Sentinel dVPN protocol on Solana.

:::caution Draft
Instruction and account names come from the program's IDL, `sentinel-programs/idl/dvpn.json` in [sentinel-solana](https://github.com/sentinel-official/sentinel-solana). The IDL and `declare_id!` (in `sentinel-programs/programs/dvpn/src/lib.rs`) use the localnet placeholder `SentineLDVPN1111111111111111111111111111111`. The devnet deployment uses the program ID below.
:::

## Devnet addresses

| Item | Address |
| --- | --- |
| Program ID | `J52dyXW3a6mkatvrQct3fo6dA9vqUtcsdBt5gGqrTBXs` |
| Config account (PDA, seed `config`) | `Cu5vofxVQgZXRVwfBqApw84ZWy1hjhDmHkznyDr6TRiQ` |
| dVPN token mint (Token-2022) | `Hen2LVP6KooGaXEvdSyCHWghsEY4gLLn7wix8z6zHFSa` |
| Vault | `EQJyAyWLGZSye3BMfDQVdhrfp1QKEByNX9q2J9TzFmfy` |
| Treasury token account | `Gej7quWtz869TiidkTjrm7yer7EnR8yE82TGEyHdmDYr` |

The mint, vault, and treasury come from the program's on-chain `Config` account.

## Accounts

| Account | Holds |
| --- | --- |
| `Config` | Program parameters, including the minimum node bond, treasury, mint, vault, and the pause mask. |
| `User` | A user's balance. |
| `Node` | A node's owner, status, prices, protocols, country, URI, bond, revenue, accrued protocol fees, and rent recipient. |
| `NodeUnbonding` | Bond held while a closed node is unbonding. |
| `Provider` | A provider's owner, bond, and revenue. |
| `ProviderUnbonding` | Bond held while a closed provider is unbonding. |
| `Plan` | A subscription plan offered by a provider. |
| `Grant` | Permission a granter gives a grantee to act on a target, with an optional spending allowance and expiry. |
| `Subscription` | A user's subscription to a plan. |
| `Lease` | A user's lease of a node, by voucher or stream. |
| `Channel` | A user's payment channel with a node, by voucher or stream. |

## Grant permissions

Grants carry a bit mask. These are the node permissions:

| Permission | Value |
| --- | --- |
| Update node | `2` (`1 << 1`) |
| List node | `4` (`1 << 2`) |
| Delist node | `8` (`1 << 3`) |

## Instructions

**Config and governance**
`initialize_config`, `set_params`, `set_paused_mask`, `set_treasury`, `propose_authority`, `accept_authority`, `sweep_config_fees`

**Nodes**
`open_node`, `update_node`, `list_node`, `delist_node`, `sweep_node_fees`, `close_node`, `withdraw_node_bond`, `withdraw_node_revenue`

**Providers**
`open_provider`, `update_provider`, `list_provider`, `delist_provider`, `close_provider`, `sweep_provider_fees`, `withdraw_provider_bond`, `withdraw_provider_revenue`, `withdraw_provider_balance`

**Plans**
`open_plan`, `update_plan`, `list_plan`, `delist_plan`, `close_plan`

**Grants**
`open_grant`, `update_grant`, `close_grant`

**Subscriptions**
`open_subscription`, `close_subscription`

**Leases**
`open_lease`, `fund_leases`, `redeem_lease_vouchers`, `redeem_lease_streams`, `start_close_lease`, `close_lease`

**Channels**
`open_channel`, `fund_channels`, `redeem_channel_vouchers`, `redeem_channel_streams`, `start_close_channel`, `close_channel`

**Users**
`withdraw_user_balance`

For how to call these from the command line, see [Node Operators](/solana/node-operators) and [Clients](/solana/clients).

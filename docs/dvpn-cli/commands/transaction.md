---
title: Transactions
sidebar_position: 4
---

# Transactions

Transaction commands for interacting with the Sentinel dVPN network. All transaction commands support the shared flags documented in the [command list](/dvpn-cli/commands/list).

---

## Session Start

Start a new session on a node. You can start a session by directly paying the node (using `--gigabytes`/`--hours` and `--denom`) or by using an existing subscription or plan.

```bash
sentinel-dvpncli tx session-start <sentnode_address> \
  --gigabytes 1 \
  --denom udvpn \
  --tx.from-name <key_name>
```

**Using an existing subscription:**

```bash
sentinel-dvpncli tx session-start <sentnode_address> \
  --subscription-id <id> \
  --tx.from-name <key_name>
```

**Using a plan:**

```bash
sentinel-dvpncli tx session-start <sentnode_address> \
  --plan-id <id> \
  --denom udvpn \
  --renewal-price-policy <policy> \
  --tx.from-name <key_name>
```

**Flags:**

| Flag | Description |
|---|---|
| `--gigabytes int` | Amount of data in gigabytes to allocate |
| `--hours int` | Duration in hours to allocate |
| `--denom string` | Denomination of the currency for payment |
| `--max-price string` | Maximum price per gigabyte or per hour |
| `--subscription-id uint` | Subscription identifier to start the session from |
| `--plan-id uint` | Plan identifier to start the session from |
| `--renewal-price-policy string` | Price policy to apply when renewing the plan |

## Session Cancel

Cancel an active session by its ID.

```bash
sentinel-dvpncli tx session-cancel <session_id> \
  --tx.from-name <key_name>
```

---

## Subscription Start

Start a new subscription to a plan by its ID.

```bash
sentinel-dvpncli tx subscription-start <plan_id> \
  --denom udvpn \
  --tx.from-name <key_name>
```

**Flags:**

| Flag | Description |
|---|---|
| `--denom string` | Denomination of the currency for payment |
| `--renewal-price-policy string` | Price policy to apply when renewing |

## Subscription Cancel

Cancel an active subscription by its ID.

```bash
sentinel-dvpncli tx subscription-cancel <subscription_id> \
  --tx.from-name <key_name>
```

## Subscription Renew

Renew an existing subscription by its ID.

```bash
sentinel-dvpncli tx subscription-renew <subscription_id> \
  --denom udvpn \
  --tx.from-name <key_name>
```

**Flags:**

| Flag | Description |
|---|---|
| `--denom string` | Denomination of the currency for renewal |

## Subscription Share

Share a subscription with another account by allocating a specific amount of bytes.

```bash
sentinel-dvpncli tx subscription-share <subscription_id> <account_address> <bytes> \
  --tx.from-name <key_name>
```

## Subscription Update

Update the renewal price policy of an existing subscription.

```bash
sentinel-dvpncli tx subscription-update <subscription_id> \
  --renewal-price-policy <policy> \
  --tx.from-name <key_name>
```

**Flags:**

| Flag | Description |
|---|---|
| `--renewal-price-policy string` | Price policy to apply when renewing |

<!-- markdownlint-configure-file { "MD024": { "allow_different_nesting": true } } -->

# Deposit

## Introduction

This module is designed and developed for storing the information related to the deposits made by an address. The amount that has been deposited by an address can't be transferred to a bank module account using a transaction. The deposit can be only spend on the VPN subscription-related payments.

With this module, you can perform the following actions.

- Send coins from a bank module account to the deposit account of the same or any address.
- Send coins from a deposit account to the bank module account of the same or any address.
- Query the deposit of an address.
- Query all the deposits.

## Types

### Deposit

A deposit type contains the following information.

| Key     | Description            |
|---------|------------------------|
| Address | The depositor address. |
| Coins   | The deposit amount.    |

```go
type Deposit struct {
    Address sdk.AccAddress `json:"address"`
    Coins   sdk.Coins      `json:"coins"`
}
```

### Deposits

The deposits type is a slice of deposit.

```go
type Deposits []Deposit
```

## Validations

### Deposit

- A deposit address should not be nil or empty.
- The deposit coins should not be invalid.

### Deposits

- N/A

## Keeper

SetDeposit is for inserting a deposit into the KVStore.

- Parameters
    | Key     | Type          | Description |
    |---------|---------------|-------------|
    | ctx     | sdk.Context   |             |
    | deposit | types.Deposit |             |
- Return values
    | Key | Type | Description |
    |-----|------|-------------|

```go
func(k Keeper) SetDeposit(ctx sdk.Context, deposit types.Deposit)
```

GetDeposit is for getting the deposit of an address from the KVStore.

- Parameters
    | Key     | Type           | Description |
    |---------|----------------|-------------|
    | ctx     | sdk.Context    |             |
    | address | sdk.AccAddress |             |
- Return values
    | Key     | Type          | Description |
    |---------|---------------|-------------|
    | deposit | types.Deposit |             |
    | found   | bool          |             |

```go
func(k Keeper) GetDeposit(ctx sdk.Context, address sdk.AccAddress) (deposit types.Deposit, found bool)
```

GetDeposits is for getting the deposits from the KVStore.

- Parameters
    | Key | Type        | Description |
    |-----|-------------|-------------|
    | ctx | sdk.Context |             |
- Return values
    | Key   | Type           | Description |
    |-------|----------------|-------------|
    | items | types.Deposits |             |

```go
func(k Keeper) GetDeposits(ctx sdk.Context) (items types.Deposits)
```

Add is for adding the amount to the deposit account from the bank module account of an address.

- Parameters
    | Key     | Type           | Description |
    |---------|----------------|-------------|
    | ctx     | sdk.Context    |             |
    | address | sdk.AccAddress |             |
    | coins   | sdk.Coins      |             |
- Return values
    | Key | Type      | Description |
    |-----|-----------|-------------|
    |     | sdk.Error |             |

```go
func(k Keeper) Add(ctx sdk.Context, address sdk.AccAddress, coins sdk.Coins) sdk.Error
```

Subtract is for adding the amount to the bank module account from the deposit account of an address.

- Parameters
    | Key     | Type           | Description |
    |---------|----------------|-------------|
    | ctx     | sdk.Context    |             |
    | address | sdk.AccAddress |             |
    | coins   | sdk.Coins      |             |
- Return values
    | Key | Type      | Description |
    |-----|-----------|-------------|
    |     | sdk.Error |             |

```go
func(k Keeper) Subtract(ctx sdk.Context, address sdk.AccAddress, coins sdk.Coins) sdk.Error
```

SendCoinsFromDepositToAccount is for sending the amount from the deposit account of from address to the bank module account of to address.

- Parameters
    | Key   | Type           | Description |
    |-------|----------------|-------------|
    | ctx   | sdk.Context    |             |
    | from  | sdk.AccAddress |             |
    | to    | sdk.AccAddress |             |
    | coins | sdk.Coins      |             |
- Return values
    | Key | Type      | Description |
    |-----|-----------|-------------|
    |     | sdk.Error |             |

```go
func(k Keeper) SendCoinsFromDepositToAccount(ctx sdk.Context, from, to sdk.AccAddress, coins sdk.Coins) sdk.Error
```

SendCoinsFromAccountToDeposit is for sending the amount from the bank module account of from address to the deposit account of to address.

- Parameters
    | Key   | Type           | Description |
    |-------|----------------|-------------|
    | ctx   | sdk.Context    |             |
    | from  | sdk.AccAddress |             |
    | to    | sdk.AccAddress |             |
    | coins | sdk.Coins      |             |
- Return values
    | Key | Type      | Description |
    |-----|-----------|-------------|
    |     | sdk.Error |             |

```go
func(k Keeper) SendCoinsFromAccountToDeposit(ctx sdk.Context, from, to sdk.AccAddress, coins sdk.Coins) sdk.Error
```

IterateDeposits is for iterating over all the deposits to perform an action.

- Parameters
    | Key | Type                                              | Description |
    |-----|---------------------------------------------------|-------------|
    | ctx | sdk.Context                                       |             |
    | fn  | func(index int64, item types.Deposit) (stop bool) |             |
- Return values
    | Key | Type | Description |
    |-----|------|-------------|

```go
func(k Keeper) IterateDeposits(ctx sdk.Context, fn func(index int64, item types.Deposit) (stop bool))
```

## Messages

## Queries

### QueryDepositParams

QueryDepositParams is the request parameters for querying a deposit.

```go
type QueryDepositParams struct {
    Address sdk.AccAddress `json:"address"`
}
```

QueryDepositsParams is the request parameters for querying the deposits.

### QueryDepositsParams

```go
type QueryDepositsParams struct {
    Page  int `json:"page"`
    Limit int `json:"limit"`
}
```

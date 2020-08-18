<!-- markdownlint-configure-file { "MD024": { "allow_different_nesting": true } } -->

# Provider

## Introduction

This module is designed and developed for storing information related to a provider. A Provider is an entity that charges coins based on the subscription plans that they create instead of per Gigabyte. Also, a provider can deploy and have multiple VPN nodes. Any interested individual node host can also contact a registered provider and deploy her/his node under it.

With this module, you can perform the following actions.

- Register a provider.
- Update a provider.
- Query a provider with an address.
- Query all the providers.

## Types

### Provider

A provider type contains the following information.

| Key         | Description                                                  |
|-------------|--------------------------------------------------------------|
| Address     | An address which is used to identify an individual provider. |
| Name        | Name of the provider.                                        |
| Identity    | Any identification of the provider (Ex: PGP key).            |
| Website     | Website URL of the provider.                                 |
| Description | Description/About the provider.                              |

``` go
type Provider struct {
    Address     hub.ProvAddress `json:"address"`
    Name        string          `json:"name"`
    Identity    string          `json:"identity,omitempty"`
    Website     string          `json:"website,omitempty"`
    Description string          `json:"description,omitempty"`
}
```

### Providers

The providers type is a slice of provider.

``` go
type Providers []Provider
```

## Validations

### Provider

- A provider address should not be nil or empty.
- A provider name should not be empty and the length should be between [1, 64].
- A provider identity length should be between [0, 64].
- A provider website length should be between [0, 64].
- A provider description length should be between [0, 256].

### Providers

- N/A

## Keeper

SetProvider is for inserting a provider into the KVStore.

- Parameters
    | Key      | Type           | Description |
    |----------|----------------|-------------|
    | ctx      | sdk.Context    |             |
    | provider | types.Provider |             |
- Return values
    | Key | Type | Description |
    |-----|------|-------------|

```go
func (k Keeper) SetProvider(ctx sdk.Context, provider types.Provider)
```

HasProvider is for checking whether a provider with an address exists or not in the KVStore.

- Parameters
    | Key     | Type            | Description |
    |---------|-----------------|-------------|
    | ctx     | sdk.Context     |             |
    | address | hub.ProvAddress |             |
- Return values
    | Key | Type | Description |
    |-----|------|-------------|
    |     | bool |             |p

```go
func (k Keeper) HasProvider(ctx sdk.Context, address hub.ProvAddress) bool
```

GetProvider is for getting a provider with an address from the KVStore.

- Parameters
    | Key     | Type            | Description |
    |---------|-----------------|-------------|
    | ctx     | sdk.Context     |             |
    | address | hub.ProvAddress |             |
- Return values
    | Key      | Type           | Description |
    |----------|----------------|-------------|
    | provider | types.Provider |             |
    | found    | bool           |             |

```go
func (k Keeper) GetProvider(ctx sdk.Context, address hub.ProvAddress) (provider types.Provider, found bool)
```

GetProviders is for getting the providers from the KVStore.

- Parameters
    | Key | Type        | Description |
    |-----|-------------|-------------|
    | ctx | sdk.Context |             |
- Return values
    | Key   | Type            | Description |
    |-------|-----------------|-------------|
    | items | types.Providers |             |

```go
func (k Keeper) GetProviders(ctx sdk.Context) (items types.Providers)
```

IterateProviders is for iterating over the providers to perform an action.

- Parameters
    | Key | Type                                             | Description |
    |-----|--------------------------------------------------|-------------|
    | ctx | sdk.Context                                      |             |
    | fn  | func(index int, item types.Provider) (stop bool) |             |
- Return values
    | Key | Type | Description |
    |-----|------|-------------|

```go
func (k Keeper) IterateProviders(ctx sdk.Context, fn func(index int, item types.Provider) (stop bool))
```

## Messages

### MsgRegister

MsgRegister is for registering a provider.

```go
type MsgRegister struct {
    From        sdk.AccAddress `json:"from"`
    Name        string         `json:"name"`
    Identity    string         `json:"identity,omitempty"`
    Website     string         `json:"website,omitempty"`
    Description string         `json:"description,omitempty"`
}
```

### MsgUpdate

MsgUpdate is for updating a provider.

```go
type MsgUpdate struct {
    From        hub.ProvAddress `json:"from"`
    Name        string          `json:"name,omitempty"`
    Identity    string          `json:"identity,omitempty"`
    Website     string          `json:"website,omitempty"`
    Description string          `json:"description,omitempty"`
}
```

## Queries

### QueryProviderParams

QueryProviderParams is the request parameters for querying a provider.

```go
type QueryProviderParams struct {
    Address hub.ProvAddress `json:"address"`
}
```

QueryProvidersParams is the request parameters for querying the providers.

### QueryProvidersParams

```go
type QueryProvidersParams struct {
    Page  int `json:"page"`
    Limit int `json:"limit"`
}
```

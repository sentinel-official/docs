---
title: Key Management
description: Create, import, export, and delete keys.
sidebar_position: 1
---

# Key Management

As you have now built SentinelHub, you can manage your keys.

## Create a new key

Open your terminal and type


```bash
sentinelhub keys add <wallet_name>
```

You can create a new key with the name `default` as in the following example:

```bash
sentinelhub keys add default
```

<details>
<summary>Output</summary>
<p>

#### This is the output of `sentinelhub add key default`

```bash
- name: default
  type: local
  address: sent1706klv73nhw2k3p0yl3l88q9p6vlypudrk3nr7
  pubkey: '{"@type":"/cosmos.crypto.secp256k1.PubKey","key":"AxU17+KenLYWlmN50t+zDNvOz3YtzrBT6YwzGfi56Wvb"}'
  mnemonic: ""

**Important** write this mnemonic phrase in a safe place.
It is the only way to recover your account if you ever forget your password.

fee water butter culture rocket focus render asset boost because perfect cargo amused shuffle easily major enact casual sheriff onion screen wall method dizzy
```

</p>
</details>

The key comes with a "mnemonic phrase", which is serialized into a human-readable 24-word mnemonic. User can recover their associated addresses with the mnemonic phrase.

:::danger
It is important that you keep the mnemonic for address secure, as there is **no way** to recover it. You would not be able to recover and access the funds in the wallet if you forget the mnemonic phrase.
:::

## Restore existing key by seed phrase

If you already have a seed phrase, use the `--recover` flag after the command:

```bash
sentinelhub keys add default_restore --recover
```

You will be prompet to type your mnemonic

```bash
> Enter your bip39 mnemonic
## Enter your 24-word mnemonic here ##
```

## List your keys

If you already have one or more keys, use the following command to list them:

```bash
sentinelhub keys list
```

Multiple keys can be created when needed. You can list all keys saved under the storage path.

<details>
<summary>Output</summary>
<p>

#### This is the output of `sentinelhub add key default`

```bash
- name: default
  type: local
  address: sent13zzgfl5n05tk97sq7xdgvx5zmfhx6undyw8722
  pubkey: '{"@type":"/cosmos.crypto.secp256k1.PubKey","key":"A6oQhw7UBXp98BxGq8n638dkkYxDhLXHlIsWTdvibY70"}'
  mnemonic: ""
- name: default_recover
  type: local
  address: sent1tsefn9fs66gzjzuld0lf402t6p5rhgwcntzahs
  pubkey: '{"@type":"/cosmos.crypto.secp256k1.PubKey","key":"A0N2NsaJVu4i11jBeoVMvSFDqoGi2nDcJlplMUF9BVS1"}'
  mnemonic: ""
```

</p>
</details>

## Retrieve key information

If you want to view the details of one of your keys, type this command:

```bash
sentinelhub keys show <key_name>
```

You will get the same output as of the first example where we created the key.

## Delete a key

If you want to delete one of your keys, type this command:

```bash
sentinelhub keys delete <key_name>
```

You will get the following prompt:

```bash
Key reference will be deleted. Continue? [y/N]: y
Key deleted forever (uh oh!)
```

:::danger
Make sure you have backed up the key mnemonic before removing any of your keys, as there will be no way to recover your key without the mnemonic.
:::

## Export private keys

If you want to export and backup one of your keys, type the following command:

```bash
sentinelhub keys export <key_name>
```

You will get the following prompt:

```bash
Enter passphrase to encrypt the exported key: ## Insert passphrase (must be at least 8 characters)##
-----BEGIN TENDERMINT PRIVATE KEY-----
kdf: bcrypt
salt: ## Salt of the key ##
type: secp256k1

imwm2Q8jsWPBg5KfY1Lph5xzEH6UmFE2ovjKTrzST9zePDcuOYdQB7VAhsEP6kMo
zWHbcVDvtfxF/sSn8lo1SZWVt+L5UP+BMG1VPAQ=
=wSny
-----END TENDERMINT PRIVATE KEY-----
```

## The Keyring-Backend Option

Interacting with a node requires a public-private key pair. A keyring is the container that holds these keys, which can be stored in various locations, each with a specified backend type.

```
sentinelhub keys [subcommands] --keyring-backend [backend type]
```
### OS Backend

The default `os` backend stores the keys in operating system's credential subsystem, which is convenient for most users without compromising on security. 

Here is a list of password managers corresponding to different operating systems:
- macOS (since Mac OS 8.6): [Keychain](https://support.apple.com/en-gb/guide/keychain-access/welcome/mac)
- Windows: [Credentials Management API](https://learn.microsoft.com/en-us/windows/win32/secauthn/credentials-management)
- GNU/Linux:
  - [libsecret](https://gitlab.gnome.org/GNOME/libsecret)
  - [kwallet](https://api.kde.org/frameworks/kwallet/html/index.html)

### File Backend

The `file` backend is the default choice, storing encrypted keys within the application's configuration directory. Each time a user accesses it, such as during container startup, they must enter a password. This interactive requirement prevents running it detached.

### Test Backend

The `test` backend is like a simplified version of the `file` backend, but without the need for passwords. It keeps keys in plain text within the app's config folder and is meant solely for testing purposes. It's not recommended for production because it's less secure. In this scenario, you can opt to run the container in detached mode instead.
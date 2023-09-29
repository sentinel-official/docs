---
title: Run the Validator with TMKMS
description: The most important step, be careful!
sidebar_position: 5
---

# Run the Validator with TMKMS

This is the most important step and it is crucial in order to avoid double sign, be careful!

### Step 1 - Stop the validator

```bash
sudo systemctl stop sentinelhub.service
```

### Step 2 - Skip a few blocks

Go to the [Validator page](https://www.mintscan.io/sentinel/validators), select yours and check if it is skipping blocks

### Step 3 - Move back to your tmkms node and start tmkms.service

```bash
sudo systemctl start tmkms.service
```

Check the logs with this command

```bash
sudo journalctl -u tmkms.service -f
```

You will see error logs like the following:

```bash
2022-03-08T23:42:37.926816Z  INFO tmkms::commands::start: tmkms 0.11.0 starting up...
2022-03-08T23:42:37.926968Z  INFO tmkms::keyring: [keyring:softsign] added consensus Ed25519 key: osmovalconspub1zcjduepq2qfkp3ahrhaafzuqglme9mares0eluj58xr6cy7c37cdmzq0eecqk0yehr
2022-03-08T23:42:37.927216Z  INFO tmkms::connection::tcp: KMS node ID: 948f8fee83f7715f99b8b8a53d746ef00e7b0d9e
2022-03-08T23:42:37.929454Z ERROR tmkms::client: [sentinelhub-2@tcp://123.456.32.123:26659] I/O error: Connection refused (os error 111)
2022-03-08T23:42:38.929746Z  INFO tmkms::connection::tcp: KMS node ID: 948f8fee83f7715f99b8b8a53d746ef00e7b0d9e
2022-03-08T23:42:38.931428Z ERROR tmkms::client: [sentinelhub-2@tcp://123.456.32.123:26659] I/O error: Connection refused (os error 111)
2022-03-08T23:42:39.931729Z  INFO tmkms::connection::tcp: KMS node ID: 948f8fee83f7715f99b8b8a53d746ef00e7b0d9e
2022-03-08T23:42:39.932417Z ERROR tmkms::client: [sentinelhub-2@tcp://123.456.32.123:26659] I/O error: Connection refused (os error 111)
2022-03-08T23:42:40.932732Z  INFO tmkms::connection::tcp: KMS node ID: 948f8fee83f7715f99b8b8a53d746ef00e7b0d9e
2022-03-08T23:42:40.933425Z ERROR tmkms::client: [sentinelhub-2@tcp://123.456.32.123:26659] I/O error: Connection refused (os error 111)
```

### Step 4 - Start your validator on the validator node

```bash
sudo systemctl start sentinelhub.service
```

Your TMKMS node will now show logs like the following:

```bash
2022-03-08T23:46:06.208451Z  INFO tmkms::connection::tcp: KMS node ID: 948f8fee83f7715f99b8b8a53d746ef00e7b0d9e
2022-03-08T23:46:06.210568Z  INFO tmkms::session: [sentinelhub-2@tcp://123.456.789.000:26659] connected to validator successfully
2022-03-08T23:46:06.210604Z  WARN tmkms::session: [sentinelhub-2@tcp://123.456.789.000:26659]: unverified validator peer ID! (ba44dd36899602e255b04e3608e5ef0fe4bc5f5b)
2022-03-08T23:46:15.929787Z  INFO tmkms::session: [sentinelhub-2@tcp://123.456.789.000:26659] signed PreCommit:<nil> at h/r/s 3399910/0/2 (0 ms)
2022-03-08T23:46:17.344579Z  INFO tmkms::session: [sentinelhub-2@tcp://123.456.789.000:26659] signed PreCommit:<nil> at h/r/s 3399911/0/2 (0 ms)
2022-03-08T23:46:22.367627Z  INFO tmkms::session: [sentinelhub-2@tcp://123.456.789.000:26659] signed PreCommit:<nil> at h/r/s 3399912/0/2 (0 ms)
2022-03-08T23:46:27.409777Z  INFO tmkms::session: [sentinelhub-2@tcp://123.456.789.000:26659] signed PreCommit:<nil> at h/r/s 3399913/0/2 (0 ms)
2022-03-08T23:46:32.442300Z  INFO tmkms::session: [sentinelhub-2@tcp://123.456.789.000:26659] signed PreCommit:<nil> at h/r/s 3399914/0/2 (0 ms)
2022-03-08T23:46:37.452162Z  INFO tmkms::session: [sentinelhub-2@tcp://123.456.789.000:26659] signed PreCommit:<nil> at h/r/s 3399915/0/2 (0 ms)
```

### Step 5 - Signing blocks
Go to the [Validator page](https://www.mintscan.io/sentinel/validators), select yours and check if it is signing blocks

### Step 6 - Remove the private validator key from your validator node

You can now safely remove the priv_validator_key from your validator and store it in a safe place for when needed.

```bash
sudo rm -f /home/user/.sentinelhub/config/priv_validator_key.json
```

You should now be signing blocks! If you cancel the TMKMS process, you will no longer sign blocks and will stop syncing. If you restart the TMKMS process, your validator node will continue to sync from where it left off.
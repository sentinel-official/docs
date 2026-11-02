---
title: Manage the Node
sidebar_label: "⚙️ Manage the Node"
sidebar_position: 7
---

# Manage the Node

Steps marked **computer** use the owner key. Run them on your computer. Steps marked **server** run on the server.

## Change prices, country, or port

**Server.** The server's config wins: every 5 minutes, the node copies the prices, country, URI, and protocol it loaded at start to the chain. Change them in the config, not with `update-node`.

1. Edit the config. Prices are in the `[prices]` section. 1 tDVPN = 1,000,000.

   ```bash
   sudoedit /var/lib/sentinel-dvpn/n0/config.toml
   ```

2. Restart. The node pushes the change to the chain right away.

   ```bash
   sudo sentinel-dvpnd service restart --instance n0
   ```

If you changed a port, open it in the firewall ([Start, step 1](/solana/node-operators/start#1-open-the-firewall)).

## Update the software

**Server.**

```bash
cd ~/sentinel-solana
git pull

for dir in sentinel-dvpn sentinel-dvpnd; do
  make -C "$dir" build \
    SENTINEL_NETWORK=devnet \
    SENTINEL_PROGRAM_ID=J52dyXW3a6mkatvrQct3fo6dA9vqUtcsdBt5gGqrTBXs \
    SENTINEL_MINT=Hen2LVP6KooGaXEvdSyCHWghsEY4gLLn7wix8z6zHFSa
done

sudo install -m 755 sentinel-dvpn/bin/sentinel-dvpn sentinel-dvpnd/bin/sentinel-dvpnd /usr/local/bin/
sudo sentinel-dvpnd service restart --instance n0
```

## Withdraw revenue

**Computer.**

```bash
sentinel-dvpn node show <NODE_ADDRESS>
sentinel-dvpn node withdraw-node-revenue --node <NODE_ADDRESS> --amount <BASE_UNITS>
```

`revenue` in the `show` output is what you can withdraw.

## Shut down the node

Do the steps in this order. A running node lists itself again, and it can't claim payments after the node is closed.

1. **Server.** Claim what clients owe. Payments under 10 tDVPN can be claimed once they are 1 hour old, so run this at least 1 hour after the last client session.

   ```bash
   sudo sentinel-dvpn node redeem --instance n0
   ```

2. **Server.** Stop and remove the service:

   ```bash
   sudo sentinel-dvpnd service uninstall --instance n0
   ```

3. **Computer.** Close the node. This pays out the revenue and starts unbonding the bond:

   ```bash
   sentinel-dvpn node close-node --node <NODE_ADDRESS>
   ```

4. **Computer.** Wait `unbonding_seconds` (see `sentinel-dvpn program params`). Then find the unbonding address and withdraw the bond:

   ```bash
   sentinel-dvpn node unbonding search --owner <OWNER_PUBLIC_KEY>
   sentinel-dvpn node withdraw-node-bond --node-unbonding <UNBONDING_ADDRESS>
   ```

5. **Computer.** Close the grant to get its rent back. Use the grant `address` whose `target` is the node:

   ```bash
   sentinel-dvpn grant search --granter <OWNER_PUBLIC_KEY>
   sentinel-dvpn grant close-grant --grant <GRANT_ADDRESS>
   ```

6. **Server.** Delete the node's files (this deletes the operator key, so keep your backup):

   ```bash
   sudo rm -rf /var/lib/sentinel-dvpn/n0 /etc/sentinel-dvpn/n0.pass
   ```

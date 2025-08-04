---
title: Restoring IBC Channel
sidebar_position: 13
---

# Restoring IBC Channel

IBC channels rely on client states to maintain synchronization. If no transactions are relayed for an extended period, the client state may expire due to inactivity or configuration parameters like `trusting_period` and `max_clock_drift`. Once expired, the channel becomes non-functional and requires restoration through governance processes.


## Requirements

Ensure Hermes is configured and working.


## Informations Needed

To restore the IBC channel, we need the client ID, connection ID, and channel ID. These can be found here https://ping.pub/sentinel/ibc/connection/connection-33

For example:
- clientId = `07-tendermint-58`
- connectionId = `connection-33`
- channel-id = `channel-12`


## Step-by-Step Process

On sentinelhub-2, the client 07-tendermint-58 has expired because no relayers refreshed it. To fix this, we need to:

- Create a new client.
- Submit a governance proposal to update the expired client.

Note: While the proposal is for "replacing" the client, the old client will actually be updated.


### Query the Existing Client

Use the following command to check the state of the old client and save the output:

```bash
hermes query client state --chain sentinelhub-2 --client 07-tendermint-58
```

### Create a New Client

Create a new client between the chains. Save the newly created client ID from the output (e.g., `07-tendermint-208`):

```bash
hermes create client --host-chain sentinelhub-2 --reference-chain cosmoshub-4
```

### Verify the New Client

Query the new client to ensure it's correctly configured and save the output:

```bash
hermes query client state --chain sentinelhub-2 --client 07-tendermint-208
```

Compare the outputs of the old and new clients to verify they are identical.

### Handle Configuration Issues

If the new client has a different max clock drift (or other mismatched parameters), creating the proposal may fail. For example:
[Failed Proposal Example](https://explorer.busurnode.com/sentinel/tx/09BC809FE229DAB0458EBFAD9F48A7DD26F26C7FC958ABC1274CAE1FDA314DFB?height=19809320)

To fix this, create a new client with a custom `max clock drift`:

```bash
hermes create client --host-chain sentinelhub-2 --reference-chain cosmoshub-4 --clock-drift 1800s
```

Query and verify the new client again:

```bash
hermes query client state --chain sentinelhub-2 --client 07-tendermint-209
```

### Submit a Governance Proposal

Once the new client matches the old one, submit a governance proposal to update the client.
Run this command on a server with `sentinelhub` installed (not the one running Hermes):

```bash
sentinelhub tx gov submit-proposal update-client 07-tendermint-58 07-tendermint-209 --chain-id sentinelhub-2 --from validator --fees 200000udvpn --gas 2000000 --title 'Reviving DVPN <-> ATOM IBC channel' --description 'Currently, the DVPN <-> ATOM IBC channel has its client expired on Sentinel side, which blocks relaying. To fix that, we need to replace the client with the newly created one that is not expired.\n\nPlease vote YES if you agree with restoring IBC channel between Cosmos Hub and Sentinel.' --deposit 1000000udvpn
```

### Final Steps

The proposal is now submitted with a 1 DVPN deposit. Next:

- Put the proposal to a vote.
- Ensure it passes to restore the IBC channel.
---
title: Scripts
sidebar_position: 7
---

# Node Scripts

This page contains simple and useful scripts for development within the Sentinel Ecosystem.

## Instructions

Copy the scripts below into a file and save it with a `.sh` extension.

Make the file executable by running the following command:

```bash
sudo chmod +x filename.sh
```

Run the file using the terminal

```bash
./filename
```

## Script list

Explore the collection of scripts below

### `Node Status`

Provides the status of the specified `sentnode` address.

<details>
<summary>Node Status</summary>
<p>

```bash title="/home/${USER}/sentnode-status.sh"
#!/bin/bash

# Fetching the JSON data from the API
api_response=$(curl -s https://api.sentinelgrowthdao.com/sentinel/nodes/sentnode1rx7kjsvhvklcluhu9zl6hswrau06vh3ll7gthr)

# Extracting the remote URL from the JSON response
remote_url=$(echo "$api_response" | jq -r '.node.remote_url')

# Fetching the status from the remote URL
status_response=$(curl -k "$remote_url/status" | jq '.')

echo "Status from $remote_url:"
echo "$status_response" | jq '.'
```

</p>
</details>

### `RPC Countries`

Lists the countries of the RPC Nodes.

<details>
<summary>RPC Countries</summary>
<p>

```bash title="/home/${USER}/rpc-countries.sh"
#!/bin/bash

# List of addresses to iterate over

addresses=("rpc.trinityvalidator.com"
           "rpc.sentinel.co"
           "rpc.sentinel.quokkastake.io"
           "rpc.sentinel.chaintools.tech"
           "sentinel.declab.pro"
           "rpc-sentinel.whispernode.com"
           "rpc.sentinelgrowthdao.com"
           "sentinel-rpc.publicnode.com"
           "rpc.dvpn.roomit.xyz"
           "sentinel.rpc.nodeshub.online"
           "public.stakewolle.com"
           "sentinel-rpc.validatornode.com"
           "rpc.mathnodes.com"
           "rpc.dvpn.me"
           "rpc-sentinel-ia.cosmosia.notional.ventures"
           "sentinel-rpc.polkachu.com"
           "sentinel-rpc.badgerbite.io"
           "rpc-sentinel.busurnode.com:443")


# Iterate over each address
for address in "${addresses[@]}"; do
    echo "Address: $address"
    
    # Get the IP address
    rpc_ipv4=$(nslookup "$address" | awk '/^Address: / { print $2 }')
    
    # Get country information for the address
    country=$(curl -s "http://ip-api.com/json/${rpc_ipv4}" | jq -r '.country')
    
    # Print the country information
    echo "Country: $country"
    echo ""
done
```

</p>
</details>


### `RPC Uptime`

Lists the RPC Nodes and their uptime.

<details>
<summary>RPC Uptime</summary>
<p>

```bash title="/home/${USER}/rpc-uptime.sh"
#!/bin/bash

# List of addresses to iterate over

rpc_addresses=("https://rpc.trinityvalidator.com:443"
           "https://rpc.sentinel.co:443"
           "https://rpc.sentinel.quokkastake.io:443"
           "https://rpc.sentinel.chaintools.tech:443"
           "https://sentinel.declab.pro:26628"
           "https://rpc-sentinel.whispernode.com:443"
           "https://rpc.sentinelgrowthdao.com:443"
           "https://sentinel-rpc.publicnode.com:443"
           "https://rpc.dvpn.roomit.xyz:443"
           "https://sentinel.rpc.nodeshub.online:443"
           "https://public.stakewolle.com:443/cosmos/sentinel/rpc/"
           "https://sentinel-rpc.validatornode.com:443"
           "https://rpc.mathnodes.com:443"
           "https://rpc.dvpn.me:443"
           "https://sentinel-rpc.badgerbite.io:443"
           "https://rpc-sentinel-ia.cosmosia.notional.ventures:443"
           "https://sentinel-rpc.polkachu.com:443"
           "https://rpc-sentinel.busurnode.com:443")

for node in "${rpc_addresses[@]}"; do
   echo ""
   echo "$node stats:"
   # Capture the real time only using time command and redirecting stdout and stderr to /dev/null
   real_time=$( { time /usr/local/bin/sentinelhub query block --node "$node" > /dev/null; } 2>&1 )
   # Extract and print just the real time
   echo "$real_time" | grep -oP 'real\t\K\S+'
   echo ""
done
```

</p>
</details>
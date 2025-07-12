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

ddresses=("https://rpc-sentinel.busurnode.com:443"
           "https://na-rpc-sentinel.busurnode.com:443"
           "https://eu-rpc-sentinel.busurnode.com:443"
           "https://as-rpc-sentinel.busurnode.com:443"
           "https://rpc.sentineldao.com:443"
           "https://na-rpc.sentineldao.com:443"
           "https://eu-rpc.sentineldao.com:443"
           "https://as-rpc.sentineldao.com:443"
           "https://rpc.na.sentinel.atmosfermuda.com:443"
           "https://rpc.eu.sentinel.atmosfermuda.com:443"
           "https://rpc.ap.sentinel.atmosfermuda.com:443"
           "https://sentinel-rpc.publicnode.com:443"
           "https://rpc.mathnodes.com:443"
           "https://rpc.dvpn.me:443"
           "https://rpc.ro.mathnodes.com:443"
           "https://rpc.noncompliant.network:443"
           "https://sentinel-rpc.polkachu.com:443"
           "https://rpc.sentinel.dragonstake.io:443"
           "https://rpc.dvpn.roomit.xyz:443"
           "https://sentinel-rpc.validatornode.com:443"
           "https://rpc.trinitystake.io:443"
           "https://rpc.sentinel.quokkastake.io:443"
           "https://sentinel.rpc.nodeshub.online:443")


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
<summary>Using Sentinelhub</summary>
<p>

```bash title="/home/${USER}/rpc-uptime.sh"
#!/bin/bash

# List of addresses to iterate over

rpc_addresses=("https://rpc-sentinel.busurnode.com:443"
           "https://na-rpc-sentinel.busurnode.com:443"
           "https://eu-rpc-sentinel.busurnode.com:443"
           "https://as-rpc-sentinel.busurnode.com:443"
           "https://rpc.sentineldao.com:443"
           "https://na-rpc.sentineldao.com:443"
           "https://eu-rpc.sentineldao.com:443"
           "https://as-rpc.sentineldao.com:443"
           "https://rpc.na.sentinel.atmosfermuda.com:443"
           "https://rpc.eu.sentinel.atmosfermuda.com:443"
           "https://rpc.ap.sentinel.atmosfermuda.com:443"
           "https://sentinel-rpc.publicnode.com:443"
           "https://rpc.mathnodes.com:443"
           "https://rpc.dvpn.me:443"
           "https://rpc.ro.mathnodes.com:443"
           "https://rpc.noncompliant.network:443"
           "https://sentinel-rpc.polkachu.com:443"
           "https://rpc.sentinel.dragonstake.io:443"
           "https://rpc.dvpn.roomit.xyz:443"
           "https://sentinel-rpc.validatornode.com:443"
           "https://rpc.trinitystake.io:443"
           "https://rpc.sentinel.quokkastake.io:443"
           "https://sentinel.rpc.nodeshub.online:443")

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

<details>
<summary>Without Using Sentinelhub - Just install dependencies with `sudo apt install curl jq bc -y`</summary>
<p>

```bash title="/home/${USER}/rpc-uptime.sh"
#!/bin/bash

# Set the PATH environment variable
export PATH="/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin"

# Define an array of RPC node addresses
rpc_addresses=(
    "https://rpc.sentinel.co:443"
    "https://sentinel-rpc.polkachu.com:443"
    "https://sentinel-rpc.validatornode.com:443"
    "https://sentinel-rpc.badgerbite.io:443"
    "https://sentinel-rpc.publicnode.com:443"
    "https://rpc.sentinel.quokkastake.io:443"
    "https://rpc-sentinel.whispernode.com:443"
    "https://rpc.sentinel.chaintools.tech:443"
    "https://rpc.mathnodes.com:443"
    "https://rpc.dvpn.roomit.xyz:443"
)

# Declare an associative array to store execution times
declare -A execution_times

# Loop through each RPC node address
for node in "${rpc_addresses[@]}"; do
    echo "Testing ${node}..."

    # Record the start time
    start_time=$(date +%s.%N)

    # Fetch the latest block height using the RPC endpoint
    curl -s "${node}/block" | jq -r .result.block.header.height

    # Record the end time
    end_time=$(date +%s.%N)

    # Calculate execution time
    execution_time=$(echo "$end_time - $start_time" | bc)
    execution_times["$node"]=$execution_time

    echo "Finished testing ${node}, Execution took: $execution_time"
done

# Sort nodes by their execution time
sorted_nodes=($(for node in "${rpc_addresses[@]}"; do
    echo "$node ${execution_times["$node"]}"
done | sort -k2 -n | awk '{print $1}'))

# Display the sorted nodes with their execution times
for node in "${sorted_nodes[@]}"; do
    echo "Node: $node, Execution Time: ${execution_times["$node"]}"
done

# Select the top 5 fastest nodes
new_addrs=()
for ((a = 0; a <= 4; a++)); do
    new_addrs+=("${sorted_nodes[$a]}")
done

# Create a comma-separated list of the top 5 nodes
comma_separated=$(IFS=,; echo "${new_addrs[*]}")

# Format the output line
new_line="rpc_addresses=\"$comma_separated\""

# Print the new line
echo "$new_line"

# Exit the script
exit 0
```

</p>
</details>
---
title: Deploy the Node
description: The steps to deploy your node
sidebar_position: 2
---

# Deploy the Node

Navigate to [https://deploy.cloudmos.io/](https://deploy.cloudmos.io/)

On the top-left click on `DEPLOY`

Select `Empty` template

![Empty Template](/img/akash/template.png)

Edit the content of the following code (make sure you write within the double quotes)

```bash
---
version: "2.0"
endpoints:
  unique_name_endpoint: # it must be a unique name
    kind: ip
services:
  app:
    image:  declab/sentinel_dvpn_ssh:0.7.2
    
    env:
      - "SSH_PASS=" # Your SSH password
      - "MNEMONIC_BASE64=" # Mnemonic encrypted with BASE64.
      - "MONIKER=" # Your dVPN node name.
      - "REMOTE_PORT=8585" # TCP listen port.
      - "LISTEN_PORT=3333" # V2RAY listen port
      - "IPV4_ADDRESS=" # Node leased IP address (you will add it later)
      - "RPC_ADDRESS=https://rpc.sentinel.co:443"
      - "GIGABYTE_PRICES=29000000udvpn,390000ibc/A8C2D23A1E6F95DA4E48BA349667E322BD7A6C996D8A4AAE8BA72E190F3D1477,5250000ibc/ED07A3391A112B175915CD8FAF43A2DA8E4790EDE12566649D0C2F97716B8518,7000000ibc/31FEE1A2A9F9C01113F90BD0BBCCE8FD6BBB8585FAF109A2101827DD1D5B95B8,525000000ibc/B1C0DDB14F25279A2026BC8794E12B259F8BDA546A3C5132CCAEE4431CE36783"
      - "HOURLY_PRICES=4900000udvpn"
        
    expose:
      - port: 8585 # TCP listen port
        to:
          - global: true
            ip: unique_name_endpoint  # Name used in line 3
      - port: 3333 # V2RAY port
        to:
          - global: true
            ip: unique_name_endpoint  # Name usen in line 3
      - port: 22 # SSH port
        to:
          - global: true
profiles:
  compute:
    app:
      resources:
        cpu:
          units: 1
        memory:
          size: 1Gi
        storage:
          size: 10Gi         
  placement:
    akash: 
      pricing:
        app:
          denom: uakt
          amount: 100000
deployment:
  app:
    akash:
      profile: app
      count: 1
```

Then paste it into the template board and click on `CREATE DEPLOYMENT`

![Create Deployment](/img/akash/create-deployment.png)

You will need to make a **5 AKT** deployment deposit, which will be refunded to you upon closing the deployment.

![Deposit](/img/akash/deposit.png)

Now, wait for bids, select your preferred provider and click on `ACCEPT BID`

![Bids](/img/akash/bids.png)

Wait for deployment and check the tab EVENTS to see the **IP** that has been **assigned!**

![Assigned IP](/img/akash/assigned-ip.png)

Now go on tab `UPDATE`, insert your IP into the field `IPV4_ADDRESS` and click on `UPDATE DEPLOYMENT`

![Update Deployment](/img/akash/update.png)

The node will be redeployed. You can check the LOGS tab as you normally do when installing it manually to verify if it goes online without errors. Alternatively, you can SSH into the container, which is the next step.
---
title: Node Setup
description: The node installation procedure
sidebar_position: 3
---

# Node Setup

Here, you can complete the following steps to set up your dvpn node:

- Install dVPN Node Requirements: Begin by installing the necessary requirements for dVPN Node.
- Download the Docker Image: Next, download the Docker image required for dVPN Node.
- Customize dVPN Node Configuration: Tailor the DVPN node software to your specific preferences by configuring it to suit your needs.
- Launch Your dVPN Node: Finally, start your DVPN node and enjoy secure and private networking.

Non-clickable buttons indicate that you have met the required criteria.

![](/img/node-spawner/node-setup-1.png)

Now, let's retrieve the image from Docker Hub. You should see this output once the process is complete.

![](/img/node-spawner/node-setup-2.png)

In the image below, you will find the `config.toml` configuration file, which you can edit to your liking.
Please refer to manual [node configuration](/node-setup/manual/node-config) to edit the fields.

![](/img/node-spawner/node-setup-3.png)

If you have not added your wallet for recovery, a new one will be created and displayed to you. Please make sure to take note of your mnemonic, operator address, and node address, and don't forget to add a sufficient amount of DVPN to initiate the node.

![](/img/node-spawner/node-setup-4.png)

You are now prepared to launch your node. Once you click the "Spawn new node" button, your node will promptly appear in the list of containers.

![](/img/node-spawner/node-setup-5.png)

You will receive the following response.

![](/img/node-spawner/node-setup-6.png)

After refreshing, you can verify that your node has started correctly and is functioning properly by inspecting the `Node status` and `Node logs` tabs.

![](/img/node-spawner/node-setup-7.png)
![](/img/node-spawner/node-setup-8.png)

Enjoy your Sentinel dVPN Node!

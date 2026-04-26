---
title: Install & Run
sidebar_label: "📘 Overview"
---

# Install & Run

Steps every full node operator follows, regardless of role. Work through them in order:

1. **🖥️ Server Setup**: provision a host meeting the requirements.
2. **⚙️ Hub Setup**: install the Go toolchain, open the gossip port, and build the `sentinelhub` binary (skip if using Docker).
3. **🔧 Hub Configuration**: load the genesis file and edit `config.toml` / `app.toml`. This is where the node specializes for **Validator** or **RPC/API**.
4. **🧩 System Unit File**: choose between `sentinelhub.service` and `cosmovisor.service` and enable it.
5. **▶️ Run the Full Node**: start the daemon and verify sync.
6. **🐳 Docker**: alternative install method if you prefer containers.
7. **Chain Upgrade**: how to handle binary upgrades.

Once your node is synced, branch into your role:

- [✅ Validate](/full-node-setup/validate)
- [🌐 Set Up Public RPC/API](/full-node-setup/public-rpc-api)
- [🔗 IBC Relayers](/full-node-setup/ibc-relayers)

---
title: Install & Run
sidebar_label: "📘 Overview"
---

# Install & Run

Steps every full node operator follows, regardless of role. Work through them in order:

1. **🖥️ Server Setup**: provision a host meeting the requirements.
2. **⚙️ Golang Setup**: install the Go toolchain (skip if using Docker).
3. **🔧 Install & Configure**: install Sentinel Hub and edit `config.toml` / `app.toml`. This is where the node specializes for **Validator** or **RPC/API**.
4. **▶️ Run the Full Node**: start the daemon and verify sync.
5. **🐳 Docker**: alternative install method if you prefer containers.
6. **Chain Upgrade**: how to handle binary upgrades.

Once your node is synced, branch into your role:

- [✅ Validate](/full-node-setup/validate)
- [🌐 Set Up Public RPC/API](/full-node-setup/public-rpc-api)
- [🔗 IBC Relayers](/full-node-setup/ibc-relayers)

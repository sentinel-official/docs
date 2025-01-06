---
title: Add RPC to Chain Registry
sidebar_position: 6
---

# Add RPC to Chain Registry

This step ensures your RPC/API endpoints are publicly available, allowing more people to benefit from them. Follow these instructions to add your endpoints:

1. Fork the [Chain Registry Repository](https://github.com/cosmos/chain-registry)

2. Clone the forked repository to your local machine

```bash
git clone https://github.com/<your_github_name>/chain-registry.git
```

3. Navigate to the Sentinel/ directory and open the chain.json file.

4. Locate the RPC and API endpoints, add your endpoints, and save the file.

5. Commit and push your changes to your forked repository:

```bash
git add .
git commit -m "any message you want to add"
git push
```

6. Create a pull request to the original Chain Registry repository.
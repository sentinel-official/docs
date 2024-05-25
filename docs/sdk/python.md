---
title: Python
sidebar_position: 4
---

# Python SDK

With the Python SDK, developers can harness the power of Sentinel's decentralized network infrastructure to create secure and private communication solutions seamlessly within their JavaScript-based projects.

You can discover the Sentinel Python SDK within the official [GitHub repository](https://github.com/sentinel-official/sentinel-python-sdk).

## Installation

The Sentinel SDK is now available as a PyPi package, which makes the installation process straightforward using pip. To install the package, open your terminal and run the following command:

```bash
pip install sentinel-sdk
```

## Setting Up the Development Environment

Create and activate a Virtual Environment: This isolates your project dependencies from other projects. Run the following command to create a virtual environment named venv:

```bash
python -m venv venv
source venv/bin/activate
```

Install the Package in Editable Mode: This allows you to make changes to the source code and immediately see the effects without reinstalling the package. Run:

```bash
pip install --editable .
```

For more details on development mode and other features provided by setuptools, visit the [setuptools user guide](https://setuptools.pypa.io/en/latest/userguide/development_mode.html).


## Enforcing Code Style with Pre-commit

To ensure that your code adheres to [PEP8 Standards](https://peps.python.org/pep-0008/), it is recommended to use the pre-commit plugin. This tool helps automate the enforcement of code style and other checks before you commit your changes.

Install pre-commit by running:

```bash
pip install pre-commit
```

After installation, set up the pre-commit hooks in your repository:

```bash
pre-commit install
```

For more information on how to configure and use pre-commit, refer to the official [pre-commit documentation](https://pre-commit.com/index.html).


## Usage Example

Below is an example of how to use the Sentinel Pythoon SDK in your Python code. This example demonstrates how to create an instance of the SDK, query active nodes, and fetch subscriptions with specific pagination settings.

```bash
from sentinel_sdk.sdk import SDKInstance
from sentinel_sdk.types import Status, PageRequest
sdk = SDKInstance("grpc.sentinel.co", 9090)
nodes = sdk.nodes.QueryNodes(Status.ACTIVE)
subscriptions = sdk.subscriptions.QuerySubscriptions(pagination=PageRequest(limit=5000, offset=0, reverse=True))
```

## Additional Resources

For those who are interested in learning more about packaging Python projects, here are some helpful references:

- Packaging Python Projects: This tutorial provides a comprehensive guide on how to package and distribute your Python projects. You can access it [here](https://packaging.python.org/en/latest/tutorials/packaging-projects/).
- Src Layout vs Flat Layout: This discussion explains the differences between the two common project layouts and helps you decide which one to use for your project. More information can be found [here](https://packaging.python.org/en/latest/discussions/src-layout-vs-flat-layout/).
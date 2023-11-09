---
title: Sentinel Network
sidebar_position: 1
---

import {
  HomepageCard as Card,
  HomepageSection as Section,
} from '../../src/components/HomepageComponents';

import {
  APIReferenceIcon,
  Guide,
  AssetIcon,
  ModulesIcon,
  Transaction,
} from '../../src/icons';


# Sentinel Network
An Overview of Sentinel Network, including Endpoints, Asset Info, Chain Registry, Explorers and API.

<Section>
    <Card
        title="Endpoints"
        description="All the official Sentinel public endpoints recommended for development purposes."
        to="/networks/endpoints"
        icon={<ModulesIcon />}
    />
    <Card
        title="Asset Info"
        description="All the Asset info for Sentinel Blockchain: name, base, symbol and display."
        to="/networks/asset-info"
        icon={<AssetIcon />}
    />
    <Card
        title="Chain Registry"
        description="Chain Registry is a GitHub repository containing all the chain.json and assets.json file for every Cosmos based blockchain."
        to="/networks/chain-registry"
        icon={<Guide />}
    />
    <Card
        title="Explorers"
        description="The explorers in the Cosmos ecosystem are rapidly growing. This page contains a list of Sentinel explorers currently available."
        to="/networks/explorers"
        icon={<Transaction />}
    />
    <Card
        title="API Reference"
        description="Sentinel RPC and LCD API Reference"
        to="/apis"
        icon={<APIReferenceIcon />}
    />
</Section>
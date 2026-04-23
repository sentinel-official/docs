import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

import {
  HomepageCard as Card,
  HomepageSection as Section,
} from '../components/HomepageComponents';

// Icons
import {
  APIReferenceIcon,
  TerminalIcon,
  Guide,
  Network,
  SentinelCore,
  Download,
  GrowthDao,
  Wallet,
  P2pCoin,
  Whitepaper,
} from '../icons';

export default function Homepage() {
  return (
    <Layout
      description="The Sentinel blockchain is a decentralized network, ran by 80+ validators and full nodes, with many front-ends and development teams on it."
      wrapperClassName="homepage"
    >
      <div className="pad">
        <div className="center homepage-content">

          {/* Hero */}
          <section className="hero-section" aria-labelledby="hero-heading">
            <div className="hero-glow" aria-hidden="true" />
            <h1 id="hero-heading" className="hero-title">
              <span className="hero-title-gradient">Sentinel P2P</span>
              {' '}Documentation
            </h1>
            <p className="hero-subtitle">
              The decentralized bandwidth marketplace powering dVPNs and AI data
              pipelines. 80+ validators. Open infrastructure.
            </p>
            <div className="hero-actions">
              <Link to="/get-started" className="hero-cta-primary">
                Get Started <span aria-hidden="true">&rarr;</span>
              </Link>
              <Link to="/sentinel-hub" className="hero-cta-secondary">
                Explore the Hub
              </Link>
              <Link to="/get-started/whitepaper" className="hero-cta-secondary">
                Whitepaper
              </Link>
              <Link to="/apis" className="hero-cta-secondary">
                API Reference
              </Link>
            </div>
          </section>

          {/* Understand Sentinel */}
          <Section title="Understand Sentinel" accentColor="#1a90ff">
            <Card
              title="What is Sentinel P2P?"
              description="Sentinel is a decentralized virtual private network (P2P) built on top of the Cosmos blockchain. It allows users to connect to the internet privately and securely by routing their traffic through a network of distributed nodes."
              to="/get-started"
              icon={<SentinelCore />}
            />
            <Card
              title="The P2P Coin"
              description="The P2P coin is a governance coin that allows staked coin holders to decide the future of the protocol, including every implementation detail."
              to="/p2p-coin"
              icon={<P2pCoin />}
            />
            <Card
              title="Whitepaper"
              description="For a comprehensive examination of this subject and a detailed analysis, please feel free to review our white paper, which is accessible."
              to="/get-started/whitepaper"
              icon={<Whitepaper />}
            />
          </Section>

          {/* The dVPN Experience */}
          <Section title="The dVPN Experience" accentColor="#1a90ff">
            <Card
              title="dVPN Apps"
              description="A comprehensive list of decentralized solutions built on top of Sentinel blockchain. Access hundreds of community-managed nodes worldwide for a private and secure gateway to the internet."
              to="/get-started/apps/"
              icon={<Download />}
            />
            <Card
              title="Wallets"
              description="Learn about how to start using blockchain apps, stake your coins and manage them in just one wallet."
              to="/get-started/wallets"
              icon={<Wallet />}
            />
            <Card
              title="Staking"
              description="Discover all you need to know about staking your P2P coins, from selecting the ideal validator to streamlining the process with the REStake app."
              to="/p2p-coin/staking/concepts"
              icon={<GrowthDao />}
            />
          </Section>

          {/* Build on Sentinel */}
          <Section title="Build on Sentinel" accentColor="#1a90ff">
            <Card
              title="Sentinel Hub"
              description="Getting started with Sentinel codebase"
              to="/sentinel-hub/"
              icon={<SentinelCore />}
            />
            <Card
              title="Sentinel dVPN CLI"
              description="A command line tool to interact with Sentinel Blockchain"
              to="/dvpn-cli"
              icon={<TerminalIcon />}
            />
            <Card
              title="Networks"
              description="Explore the Sentinel network."
              to="/networks/"
              icon={<Network />}
            />
          </Section>

          {/* Operate */}
          <Section title="Operate" accentColor="#1a90ff">
            <Card
              title="Run a dVPN Node"
              description="Learn how to deploy a dVPN Node to provide bandwidth and earn P2P coins."
              to="/dvpn-nodes/setup"
              icon={<Guide />}
            />
            <Card
              title="Full Nodes & Validators"
              description="Learn how to set up a Full Node and effectively communicate with the Sentinel Blockchain."
              to="/full-node-setup"
              icon={<Guide />}
            />
            <Card
              title="Node Monitoring"
              description="Learn how to monitor your node"
              to="/node-monitoring"
              icon={<Guide />}
            />
            <Card
              title="API Reference"
              description="Sentinel RPC and LCD API Reference"
              to="/apis"
              icon={<APIReferenceIcon />}
            />
          </Section>

        </div>
      </div>
    </Layout>
  );
}

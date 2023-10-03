import React from 'react';
import Layout from '@theme/Layout';
import { useHistory } from '@docusaurus/router';
import { DyteButton } from '@dytesdk/react-ui-kit';

import {
  HomepageCard as Card,
  HomepageSection as Section,
} from '../components/HomepageComponents';

// Icons
import {
  APIReferenceIcon,
  TerminalIcon,
  Chainregistry,
  Network,
  SentinelCore,
  NodeSpawner,
  Download,
  GrowthDao,
  Wallet,
} from '../icons';

export default function Homepage() {
  const router = useHistory();

  return (
    <Layout
      description="The Sentinel blockchain is a decentralized network, ran by 80+ validators and full nodes, with many front-ends and development teams on it. 🚀"
      wrapperClassName="homepage"
    >
      <div className="pad">
        <div className="center homepage-content">
          <div className='margin-bottom--lg'>
            <h2>Sentinel Docs</h2>
            <p>
            The Sentinel blockchain is a decentralized network, ran by 80+ validators and full nodes, with many front-ends and development teams on it. Explore our docs and examples to quickly learn, develop & integrate with the Sentinel blockchain.
            </p>
            <DyteButton onClick={() => router.push('getting-started')}>
              Get Started &rarr;
            </DyteButton>
          </div>

          <Section title="Learn about Sentinel dVPN">
            <Card
              title="What is Sentinel dVPN?"
              description="Sentinel is a decentralized virtual private network (dVPN) built on top of the Cosmos blockchain. It allows users to connect to the internet privately and securely by routing their traffic through a network of distributed nodes."
              to="/getting-started/"
              icon={<SentinelCore />}
            />
            <Card
              title="The DVPN Token"
              description="The DVPN token is a governance token that allows staked token holders to decide the future of the protocol, including every implementation detail. "
              to="/getting-started/dvpn"
              icon={<SentinelCore />}
            />
            <Card
              title="Whitepaper"
              description="For a comprehensive examination of this subject and a detailed analysis, please feel free to review our white paper, which is accessible."
              to="/getting-started/whitepaper"
              icon={<SentinelCore />}
            />
          </Section>

          <Section title="The dVPN Experience">
            <Card
              title="Download dVPN apps"
              description="A comprehensive list of decentralized solutions built on top of Sentinel blockchain. These solutions enable you to access hundreds of community-managed nodes worldwide, providing a private and secure gateway to the internet."
              to="/getting-started/apps/"
              icon={<Download />}
              svgFile=""
             />
            <Card
              title="Wallets"
              description="Learn about how to start using blockchain apps, stake your tokens and manage them in just one wallet."
              to="/getting-started/wallets"
              icon={<Wallet />}
            />
            <Card
              title="Growth DAO"
              description="The Sentinel Growth DAO aims to fund community initiatives and the development of potential VPNs to attract users and, ultimately, generate higher revenues for the Sentinel Network."
              to="/getting-started/dao/"
              icon={<GrowthDao />}
              svgFile=""
            />
          </Section>

          <Section title="Developers" id="web-sdks" hasSubSections>
            <Section
              title="⚙️ Chain Development"
              id="core-sdks"
              HeadingTag="h4"
              description={
                <>
                  Everything that is needed to learn about the Sentinel core chain development. 
                </>
              }
            >
             <Card
              title="Sentinel Hub"
              description="Getting started with Sentinel codebase"
              to="/sentinel-core/"
              icon={<SentinelCore />}
            />
            <Card
              title="Networks"
              description="Explore the Sentinel network."
              to="/networks/"
              icon={<Network />}
              svgFile=""
            />
            <Card
              title="Guides"
              description="Deploy Nodes and Validate the Network"
              to="/guides/"
              icon={<Chainregistry />}
              svgFile=""
            />
            </Section>
            <Section title="🛠 Tools"
            id="core-sdks"
            HeadingTag="h4"
            description={
              <>
                Tools to interact with Sentinel Blockchain. 
              </>
            }
            >
            <Card
              title="Sentinel CLI Client"
              description="A command line tool to interact with Sentinel Blockchain"
              to="https://github.com/freQniK/cli-client/releases"
              icon={<TerminalIcon />}
              svgFile=""
            />
            <Card
              title="Node Spawner"
              description="A dashboard for manage & spawn dvpn-node."
              to="https://github.com/Tkd-Alex/dvpn-node-spawner"
              icon={<NodeSpawner />}
              svgFile=""
            />
          </Section>
          </Section>

          <Section title="📜 API Reference">
            <Card
              title="API Reference"
              description="Sentinel RPC and LCD API Reference"
              to=""
              icon={<APIReferenceIcon />}
            />
          </Section>

        </div>
      </div>
    </Layout>
  );
}

import {
  SentinelCore,
  Network,
  Guide,
  Nodes,
  TerminalIcon,
  ModulesIcon,
} from './icons';

const MULTI_SECTIONS = [
  [
    {
      name: 'Sentinel Core',
      section: 'core-sdk',
      description: 'Sentinel Chain Development documentation.',
    },
    {
      name: 'Node Operators',
      section: 'guides',
      description: 'Guides for running dVPN nodes, full nodes, and monitoring.',
    },
  ],
];

const SECTIONS = [
  // no sections for default section, i.e; home
  {
    id: 'default',
    section: false,
  },

  // Dropdown Sentinel Core — developer / integrator docs
  {
    name: 'Sentinel Hub',
    id: 'sentinel-hub',
    icon: SentinelCore,
    section: 'core-sdk',
  },
  {
    name: 'Sentinel dVPN CLI',
    id: 'dvpn-cli',
    icon: TerminalIcon,
    section: 'core-sdk',
  },
  {
    name: 'SDKs',
    id: 'sdk',
    icon: ModulesIcon,
    section: 'core-sdk',
  },
  {
    name: 'Networks',
    id: 'networks',
    icon: Network,
    section: 'core-sdk',
  },

  // Dropdown Node Operators — operational guides
  {
    name: 'dVPN Nodes',
    id: 'dvpn-nodes',
    icon: Nodes,
    section: 'guides',
  },
  {
    name: 'Full Nodes',
    id: 'full-node-setup',
    icon: Guide,
    section: 'guides',
  },
  {
    name: 'Node Monitoring',
    id: 'node-monitoring',
    icon: Guide,
    section: 'guides',
  },
];

export { MULTI_SECTIONS, SECTIONS };

 

import {themes as prismThemes} from 'prism-react-renderer';

// const UIKitReferencePlugins = require('./plugins/ui-kit-reference-plugin.cjs');
const { webpackPlugin } = require('./plugins/webpack-plugin.cjs');

/** @type {import('@docusaurus/preset-classic').Options} */
const defaultSettings = {
  remarkPlugins: [
    [require('@docusaurus/remark-plugin-npm2yarn'), { sync: true }],
  ],
};

/**
 * Defines a section with overridable defaults
 * @param {string} section
 * @param {import('@docusaurus/plugin-content-docs').Options} options
 */
function defineSection(section, options = {}) {
  return [
    '@docusaurus/plugin-content-docs',
    /** @type {import('@docusaurus/plugin-content-docs').Options} */
    ({
      path: `docs/${section}`,
      routeBasePath: section,
      id: section,
      sidebarPath: require.resolve('./sidebars-default.js'),
      breadcrumbs: false,
      //editUrl: 'https://github.com/sentinel-official/docs/tree/main/',
      ...defaultSettings,
      ...options,
    }),
  ];
}

const SECTION_NAMES = [
  'apis',
  'p2p-coin',
  'full-node-setup',
  'get-started',
  'networks',
  'dvpn-nodes',
  'node-monitoring',
  'sdk',
  'dvpn-cli',
  'sentinel-hub',
];

/** Per-section overrides, keyed by section name. */
const SECTION_OPTIONS = {
  'full-node-setup': {
    sidebarPath: require.resolve('./sidebars-full-node-setup.js'),
  },
};

const SECTIONS = SECTION_NAMES.map((section) =>
  defineSection(section, SECTION_OPTIONS[section]),
);

// The preset's docs instance (docs/home) is served at /docs.
const HOME_DOCS_ROUTE = 'docs';
const HOME_DOCS_DIR = 'docs/home';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Sentinel Docs',
  tagline: 'Build on the leading decentralized VPN. 🚀',
  // TODO: Update base url
  url: 'https://docs.sentinel.co',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },
  favicon: '/logo/sentinel.svg',
  trailingSlash: false,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'sentinel-official', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: 'docs/home',
          sidebarPath: require.resolve('./sidebars-home.js'),
          breadcrumbs: false,
          ...defaultSettings,
        },
        blog: false,
        theme: {
          customCss: [
            require.resolve('./src/css/custom.css'),
            require.resolve('./src/css/api-reference.css'),
          ],
        },
      }),
    ],
  ],

  plugins: [
    ...SECTIONS,
    // ...UIKitReferencePlugins,
    webpackPlugin
  ],

  themes: [
    '@docusaurus/theme-live-codeblock',
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      /** @type {import('@easyops-cn/docusaurus-search-local').PluginOptions} */
      ({
        hashed: true,
        language: ['en'],
        indexDocs: true,
        indexBlog: false,
        indexPages: true,
        // Every docs instance: the preset's /docs plus one route per section.
        docsRouteBasePath: [HOME_DOCS_ROUTE, ...SECTION_NAMES],
        docsDir: [
          HOME_DOCS_DIR,
          ...SECTION_NAMES.map((section) => `docs/${section}`),
        ],
        // Stoplight renders /api* client-side, so it holds no indexable HTML.
        // Routes are matched with the baseUrl stripped, hence no leading slash.
        ignoreFiles: [/^api(\/|$)/],
        highlightSearchTermsOnTargetPage: true,
        searchResultLimits: 8,
        searchResultContextMaxLength: 50,
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: '/img/sentinel-docs-card.png',
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: true,
      },
      docs: {
        sidebar: {
          hideable: true,
        },
      },
      navbar: {
        // NOTE: hideOnScroll breaks on `/api`, enable when fixed
        // hideOnScroll: true,
        //title: 'SENTINEL DOCS',
        logo: {
          href: '/',
          src: '/logo/sentinel-logo-light.svg',
          srcDark: '/logo/sentinel-logo-dark.svg',
          alt: 'Sentinel Docs',
          //height: '26px',
          //width: '114px',
        },
        items: [
          {
            label: 'Get Started',
            to: 'get-started',
            position: 'left',
            activeBaseRegex: 'get-started(?!/apps)(/.*)?$',
          },
          {
            label: '$P2P Coin',
            to: 'p2p-coin',
            position: 'left',
          },
          {
            label: 'Apps',
            to: 'get-started/apps',
            position: 'left',
          },
          {
            label: 'Sentinel Core',
            type: 'dropdown',
            position: 'left',
            items: [
              {
                to: 'sentinel-hub',
                label: 'Sentinel HUB',
              },
              {
                to: 'dvpn-cli',
                label: 'Sentinel dVPN CLI',
              },
              {
                to: 'sdk',
                label: 'SDKs',
              },
              {
                to: 'networks',
                label: 'Networks',
              },
            ],
            // className: 'new-badge',
            //activeBaseRegex: '(.*ui-kit|.*web-core)',
          },
          {
            label: 'Node Operators',
            type: 'dropdown',
            position: 'left',
            items: [
              {
                to: 'dvpn-nodes',
                label: 'dVPN Nodes',
              },
              {
                to: 'full-node-setup',
                label: 'Full Nodes',
              },
              {
                to: 'node-monitoring',
                label: 'Node Monitoring',
              },
            ],
            // className: 'new-badge',
          },
          {
            label: 'API',
            to: 'apis',
            position: 'left',
          },
          {
            label: 'Find us',
            type: 'dropdown',
            position: 'right',
            items: [
              {
                href: 'https://x.com/sentinelp2p',
                label: 'X/Twitter',
              },
              {
                href: 'https://t.me/sentinelp2p',
                label: 'Telegram',
              },
              {
                href: 'https://discord.com/invite/mmAA8qF',
                label: 'Discord',
              },
              {
                href: 'https://www.reddit.com/r/SentinelP2P/',
                label: 'Reddit',
              },
              {
                href: 'https://common.xyz/sentinel/',
                label: 'Common',
              },
              {
                href: 'https://medium.com/@sentinel',
                label: 'Medium',
              },
              {
                href: 'https://youtube.com/@sentinelP2P',
                label: 'YouTube',
              },
            ],
          },
          {
            label: 'Sentinel',
            type: 'dropdown',
            position: 'right',
            items: [
              {
                href: 'https://sentinel.co',
                label: 'Website',
              },
              {
                href: 'https://p2pscan.com',
                label: 'Explorer',
              },
              {
                href: 'https://stats.sentinel.co',
                label: 'Stats',
              },
              {
                href: 'https://github.com/sentinel-official',
                label: 'GitHub',
              },
              {
                href: 'https://sentineldao.com',
                label: 'Growth DAO',
              },
            ],
          },
          {
            href: 'https://github.com/sentinel-official/docs',
            className: 'pseudo-icon github-icon',
            position: 'right',
          },
          {
            type: 'search',
            position: 'right',
          },
        ],
      },
      footer: {
        logo: {
          //href: 'http://docs.sentinel.co',
          src: '/logo/sentinel-logo-light.svg',
          srcDark: '/logo/sentinel-logo-dark.svg',
          alt: 'Sentinel Docs',
          height: '36px',
        },
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Get Started',
                href: '/get-started',
              },
              {
                label: 'Sentinel Hub',
                href: '/sentinel-hub',
              },
              {
                label: 'Networks',
                to: '/networks',
              },
              {
                label: 'Run a dVPN Node',
                href: '/dvpn-nodes/setup',
              },
            ],
          },
          {
            title: 'Resources',
            items: [
              {
                label: 'dVPN Apps',
                href: '/get-started/apps',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/sentinel-official',
              },
              {
                label: 'Medium',
                href: 'https://medium.com/@sentinel',
              },
              {
                label: 'Sentinel Website',
                href: 'https://sentinel.co',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'X',
                href: 'https://x.com/sentinelp2p',
              },
              {
                label: 'Telegram',
                href: 'https://t.me/sentinelp2p',
              },
              {
                label: 'Discord',
                href: 'https://discord.com/invite/mmAA8qF',
              },
              {
                label: 'Common',
                href: 'https://common.xyz/sentinel/',
              },
            ],
          },
        ],
        copyright: "Copyright © Sentinel P2P - Built and maintained by <a href='https://trinitystake.github.io/website/'>Trinity</a>",
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: [
          'bash',
          'jsx',
          'yaml',
          'python',
          'markdown',
          'toml'
        ],
      },
      liveCodeBlock: {
        playgroundPosition: 'bottom',
      },
    }),
  };

module.exports = config;

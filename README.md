<!-- PROJECT HEADER -->
<p align="center">
  <a href="https://docs.sentinel.co">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="static/logo/sentinel-logo-dark.svg">
      <img src="static/logo/sentinel-logo-light.svg" alt="Sentinel" width="160">
    </picture>
  </a>
</p>

<h2 align="center">Sentinel Docs</h2>

<p align="center">
  The official documentation portal for the Sentinel ecosystem.
  <br />
  <br />
  <a href="https://docs.sentinel.co"><strong>Read the docs »</strong></a>
  <br />
  <br />
  <a href="https://github.com/sentinel-official/docs/issues">Report a bug</a>
  ·
  <a href="https://github.com/sentinel-official/docs/issues">Request a feature</a>
</p>

---

## About Sentinel Docs

Sentinel is a layer-one peer-to-peer bandwidth marketplace DePIN blockchain that powers decentralized VPNs (dVPNs) and training data acquisition for AI models. Built on the Cosmos SDK, it lets anyone host a node and sell bandwidth to real-world users worldwide.

This repository holds the source for [docs.sentinel.co](https://docs.sentinel.co), the canonical documentation site for the Sentinel ecosystem. It is built with [Docusaurus 3](https://docusaurus.io/) and covers everything from end-user onboarding to node operations, validator setup, and SDK integration.

The docs are written for end users picking a dVPN app, $P2P holders looking at the token economy, node operators and validators running infrastructure, and developers integrating Sentinel through the SDKs and APIs.

## What's inside

The site is organized by audience. Each entry below links to that section's source folder.

### For everyone

- **[Get Started](docs/get-started/)** &nbsp;·&nbsp; introduction, glossary, governance, whitepaper, wallets, dVPN apps.
- **[$P2P Coin](docs/p2p-coin/)** &nbsp;·&nbsp; token economics, buying, earning, staking.

### For developers and integrators (Sentinel Core)

- **[Sentinel Hub](docs/sentinel-hub/)** &nbsp;·&nbsp; chain build instructions and CLI command reference.
- **[Sentinel dVPN CLI](docs/dvpn-cli/)** &nbsp;·&nbsp; dVPN command-line interface.
- **[SDKs](docs/sdk/)** &nbsp;·&nbsp; official (Go, JavaScript, Python), community (.NET, blue-js), and agent automation (AI Connect, Plan Manager, x402).
- **[Networks](docs/networks/)** &nbsp;·&nbsp; chain registry, asset info, endpoints, explorers.

### For node operators

- **[dVPN Nodes](docs/dvpn-nodes/)** &nbsp;·&nbsp; bandwidth provider setup, earnings, health checks, and tools.
- **[Full Nodes](docs/full-node-setup/)** &nbsp;·&nbsp; server prep, hub setup and config, install and run, Docker, public RPC/API, IBC relayers, validator tooling, upgrades.
- **[Node Monitoring](docs/node-monitoring/)** &nbsp;·&nbsp; Grafana, Prometheus, Loki, exporters, alerting bots.

### API reference

- **[APIs](docs/apis/)** &nbsp;·&nbsp; REST, RPC, and gRPC reference rendered with Stoplight Elements.

## Read it locally

You can run the entire site on your machine with hot reload.

**Prerequisites:** Node.js 20+ and npm.

```bash
git clone https://github.com/sentinel-official/docs.git
cd docs
npm install
npm start
```

The dev server starts on `http://localhost:3000`. Edits to any markdown or component file reload automatically.

## Available scripts

| Command | What it does |
|---|---|
| `npm start` | Start the local dev server with hot reload. |
| `npm run build` | Generate the static production build into `build/`. |
| `npm run serve` | Serve the production build locally. |
| `npm run clear` | Clear the Docusaurus cache. |
| `npm run lint` | Run ESLint with auto-fix. |
| `npm run lint:fix` | Same as `lint` with explicit `--fix`. |
| `npm test` | Run the Jest test suite. |
| `npm run swizzle` | Eject and customize a Docusaurus theme component. |
| `npm run deploy` | Publish the built site to GitHub Pages. |
| `npm run write-translations` | Extract translatable strings. |
| `npm run write-heading-ids` | Generate stable heading IDs across MDX/MD files. |

## Built with

- **[Docusaurus 3.10](https://docusaurus.io/)** &nbsp;·&nbsp; static site generator.
- **[React 18](https://react.dev/)** + **[MDX 3](https://mdxjs.com/)** &nbsp;·&nbsp; components inside markdown.
- **[TypeScript](https://www.typescriptlang.org/)** &nbsp;·&nbsp; type safety for custom components and plugins.
- **[Tailwind CSS 3](https://tailwindcss.com/)** &nbsp;·&nbsp; styling.
- **[Stoplight Elements](https://stoplight.io/open-source/elements)** &nbsp;·&nbsp; interactive REST and RPC API reference.
- **[`prism-react-renderer`](https://github.com/FormidableLabs/prism-react-renderer)** + **[`@docusaurus/theme-live-codeblock`](https://docusaurus.io/docs/api/themes/@docusaurus/theme-live-codeblock)** &nbsp;·&nbsp; syntax highlighting and live code blocks.
- **[Algolia DocSearch](https://docsearch.algolia.com/)** &nbsp;·&nbsp; site-wide search.

## Project layout

```
docs/                          Markdown content, one folder per section.
src/                           React components, theme overrides, custom pages, sections.js.
static/                        Images, logos, fonts, social cards.
plugins/                       Custom Docusaurus webpack plugin.
sidebars-default.js            Default sidebar config used by most sections.
sidebars-home.js               Homepage sidebar.
sidebars-full-node-setup.js    Dedicated sidebar for the full-node guide.
docusaurus.config.js           Site config; sections registered via `defineSection()`.
```

## License

Distributed under the Apache License, Version 2.0. See [`LICENSE`](LICENSE) for details.

## Find Sentinel

- Website &nbsp;·&nbsp; <https://sentinel.co>
- Explorer &nbsp;·&nbsp; <https://p2pscan.com>
- GitHub &nbsp;·&nbsp; <https://github.com/sentinel-official>
- X &nbsp;·&nbsp; <https://x.com/sentinelp2p>
- Telegram &nbsp;·&nbsp; <https://t.me/sentinelp2p>
- Discord &nbsp;·&nbsp; <https://discord.com/invite/mmAA8qF>

---

<p align="center">
  © Sentinel P2P. Built and maintained by <a href="https://trinitystake.io">Trinity Stake</a>.
</p>

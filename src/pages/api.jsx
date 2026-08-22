import React, { startTransition, useEffect, useState } from 'react';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import BrowserOnly from '@docusaurus/BrowserOnly';
import { DyteTooltip } from '@dytesdk/react-ui-kit';
import { useHistory } from '@docusaurus/router';
import clsx from 'clsx';

import useBreakpoint from '../lib/useBreakpoint';
import SectionsMenu from '../components/SectionsMenu';

const API_TOOLTIP_KEY = 'dyte-api-v2-tooltip-shown';

const ELEMENTS_CSS = '/assets/css/elements.min.css';

// A <link> only appears in document.styleSheets once it has loaded and parsed,
// so its presence there is a reliable "the stylesheet has arrived" check.
function isElementsCssLoaded() {
  if (typeof document === 'undefined') {
    return false;
  }

  return Array.from(document.styleSheets).some(
    (sheet) => sheet.href && sheet.href.includes(ELEMENTS_CSS)
  );
}

/**
 * Attaches Stoplight's stylesheet from script rather than shipping it as a
 * render-blocking <link>.
 *
 * At 190KB it is the slowest thing this page needs, and a stylesheet in the
 * markup blocks the first paint until it arrives. That gap is this page's white
 * flash: while a document has not painted, the browser shows the previous page,
 * and when it gives up waiting it shows its own canvas instead, which is white.
 * The gap is only long enough to lose that race on a slow connection or a busy
 * CPU, which is why the flash came and went and why it was worse on a phone.
 *
 * The <Head> preload still starts the download as the document is parsed, so
 * this costs nothing, and useElementsCssLoaded below keeps Stoplight unmounted
 * until the sheet is in place, so nothing can render unstyled.
 */
function useElementsStylesheet() {
  useEffect(() => {
    const href = ELEMENTS_CSS;
    if (document.querySelector(`link[rel="stylesheet"][href="${href}"]`)) {
      return;
    }
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = href;
    document.head.appendChild(link);
  }, []);
}

/**
 * Stoplight ships its own stylesheet, which the <Head> below pulls in. On a direct
 * hit to /api that link is part of the pre-rendered HTML and blocks the first
 * paint, so it is already loaded by the time we get here. On a client-side
 * navigation — clicking the LCD card on /apis, say — the link is only injected
 * once this route mounts, and Stoplight would otherwise paint a few thousand
 * unstyled nodes for as long as the 130KB stylesheet takes to arrive.
 */
function useElementsCssLoaded() {
  const [loaded, setLoaded] = useState(isElementsCssLoaded);

  useEffect(() => {
    if (loaded) {
      return undefined;
    }

    // The <link> is injected asynchronously by Head, so there is nothing to
    // attach a load listener to yet. Poll until the sheet turns up instead, once
    // per frame so the content is revealed as soon as it possibly can be.
    let frame;
    const check = () => {
      if (isElementsCssLoaded()) {
        setLoaded(true);
        return;
      }
      frame = window.requestAnimationFrame(check);
    };
    check();

    return () => window.cancelAnimationFrame(frame);
  }, [loaded]);

  return loaded;
}

// One in-flight/settled promise per spec URL. Starting the fetch the moment the
// component first renders (rather than from an effect) lets it overlap with the
// Stoplight module import and, on full page loads, with hydration itself.
const specRequests = new Map();

function requestSpec(specUrl) {
  if (!specRequests.has(specUrl)) {
    specRequests.set(
      specUrl,
      fetch(specUrl).then((response) => {
        if (!response.ok) {
          throw new Error(`${response.status} ${response.statusText}`);
        }
        return response.json();
      })
    );
  }
  return specRequests.get(specUrl);
}

/**
 * Fetches the spec ourselves rather than letting Stoplight do it from a URL.
 * Handed `apiDescriptionDocument`, Stoplight renders complete on its first
 * commit. Handed only a URL it mounts empty and shows its light skeleton
 * placeholders while it fetches — the "white structure" flash. That is why the
 * document is always fetched here, on every kind of navigation, and the mount
 * waits for it.
 */
function useApiDescription(specUrl) {
  const [state, setState] = useState({ status: 'loading', document: null });

  // Kick the download off during render; the promise cache makes this idempotent.
  requestSpec(specUrl);

  useEffect(() => {
    let cancelled = false;
    setState({ status: 'loading', document: null });

    requestSpec(specUrl)
      .then((doc) => {
        if (!cancelled) {
          setState({ status: 'ready', document: doc });
        }
      })
      .catch(() => {
        // Let a failed download be retried on the next mount, and fall back to
        // Stoplight loading the URL so it can surface its own error UI rather
        // than this page holding a spinner forever.
        specRequests.delete(specUrl);
        if (!cancelled) {
          setState({ status: 'error', document: null });
        }
      });

    return () => {
      cancelled = true;
    };
  }, [specUrl]);

  return state;
}

/**
 * Loads the Stoplight module out of band.
 *
 * Requiring it during render evaluates a very large module graph synchronously,
 * which freezes the main thread: the page cannot paint and pending timers cannot
 * fire, so the route sits frozen on an empty shell rather than showing any
 * loading state. Importing it from an effect keeps that work off the render path.
 */
function useStoplightApi() {
  const [api, setApi] = useState(null);

  useEffect(() => {
    let cancelled = false;

    import('@stoplight/elements').then((module) => {
      if (!cancelled) {
        // Wrapped in a function: setState treats a bare function as an updater.
        setApi(() => module.API);
      }
    });

    return () => {
      cancelled = true;
    };
  }, []);

  return api;
}

/**
 * Mounts the expensive tree inside a React transition.
 *
 * Rendering the spec is a few thousand nodes — several hundred milliseconds of
 * pure render work. Committed synchronously it freezes the page: the spinner
 * stops animating and nothing can paint until the whole tree is done. Flipping
 * the mount flag inside startTransition lets React 18 time-slice that render,
 * so the page stays alive while the document is prepared and the content
 * appears in one commit at the end.
 */
function useMountedInTransition(ready) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (!ready) {
      setMounted(false);
      return;
    }

    startTransition(() => {
      setMounted(true);
    });
  }, [ready]);

  return mounted;
}

/**
 * Plain CSS rather than <DyteSpinner>: the web component draws nothing until its
 * library hydrates, and its animation runs on the main thread, so during this
 * page's heavy mount it appeared either blank or frozen. A transform animation
 * runs on the compositor and keeps spinning through the final commit stall.
 */
function Spinner() {
  return (
    <div className="loading-container">
      <div className="api-loading-spinner" aria-label="Loading" role="status" />
    </div>
  );
}

/**
 * True once the mounted panel contains real content.
 *
 * Stoplight may take more than one commit to go from mounting to showing the
 * document, and anything it paints in between is its light placeholder layout —
 * on this dark site, a flash of white structure. How long that window lasts
 * depends on the machine, which is why it looked random. Rather than trust the
 * handoff, the panel stays covered by the loading overlay until the reference
 * has actually rendered, checked once per frame; a failsafe uncovers after 15s
 * so a failed load can still show Stoplight's own error state.
 */
function useContentRevealed(active) {
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    if (!active) {
      setRevealed(false);
      return undefined;
    }

    const startedAt = Date.now();
    let frame;
    const check = () => {
      const container = document.querySelector('.elements-container');
      const hasContent =
        container &&
        (container.querySelector('h1') ||
          container.querySelectorAll('[class*="sl-"]').length > 300);
      if (hasContent || Date.now() - startedAt > 15000) {
        setRevealed(true);
        return;
      }
      frame = window.requestAnimationFrame(check);
    };
    check();

    return () => window.cancelAnimationFrame(frame);
  }, [active]);

  return revealed;
}

function APIDocument({ layout, currentVersion }) {
  // The JSON twin of the YAML spec: handing Stoplight a parsed object skips its
  // YAML parse, which happens synchronously on the main thread.
  const specUrl = `/api/${currentVersion}.json`;
  const exportUrl = `/api/${currentVersion}.yaml`;
  useElementsStylesheet();
  const cssLoaded = useElementsCssLoaded();
  const description = useApiDescription(specUrl);
  const API = useStoplightApi();

  const ready = Boolean(API) && cssLoaded && description.status !== 'loading';
  const mounted = useMountedInTransition(ready);
  const revealed = useContentRevealed(ready && mounted);

  if (!ready || !mounted) {
    return <Spinner />;
  }

  // apiDescriptionUrl is still passed when we have the document: Stoplight only
  // fetches it when no document is given, and the Export menu links to it.
  const source =
    description.status === 'ready'
      ? { apiDescriptionDocument: description.document, apiDescriptionUrl: exportUrl }
      : { apiDescriptionUrl: exportUrl };

  return (
    <div className="elements-host">
      <div className={clsx('elements-container', layout)}>
        <API
          {...source}
          basePath="/"
          router="hash"
          layout={layout}
          hideSchemas={false}
          className="stacked"
        />
      </div>
      {!revealed && (
        <div className="api-loading-cover">
          <div className="api-loading-spinner" aria-label="Loading" role="status" />
        </div>
      )}
    </div>
  );
}

function APIElement({ layout = 'stacked', currentVersion = 'RPC' }) {
  return (
    <BrowserOnly fallback={<Spinner />}>
      {() => <APIDocument layout={layout} currentVersion={currentVersion} />}
    </BrowserOnly>
  );
}

export default function Home() {
  const router = useHistory();
  const size = useBreakpoint();
  const [showV2Tooltip, setShowV2Tooltip] = useState(false);

  const location = router.location;

  const url = new URL(
    `https://docs.sentinel.co/${location.pathname}${location.search}`
  );

  const currentVersion = url.searchParams.get('v') || 'RPC';

  useEffect(() => {
    // show V2 tooltip only if user hasn't seen it yet
    if (localStorage.getItem(API_TOOLTIP_KEY) !== 'true') {
      setShowV2Tooltip(true);
    }
  }, []);

  return (
    <Layout
      title="API Reference"
      description="Sentinel REST API Reference"
      noFooter
      wrapperClassName="api-reference"
    >
      <Head>
        {/* Starts Stoplight's stylesheet downloading with the document. It is
            attached as a stylesheet from script (useElementsStylesheet) rather
            than linked here, so it cannot block this page's first paint. */}
        <link rel="preload" href={ELEMENTS_CSS} as="style" />
        {/* No preload for the spec itself: this page is pre-rendered once for both
            versions, so SSR always emits the default (RPC) and a ?v=LCD visitor
            would download the wrong file while still waiting on the right one. */}
      </Head>
      <div className="header">
        <h2>Sentinel {currentVersion} endpoints</h2>
        <div className="aside">
          {/* <a className="navbar__item navbar__link dev-portal-signup dev-postman-link"  target='_blank' href='https://www.postman.com/flight-astronomer-81853429/workspace/osmosis' rel="noreferrer">Open Postman Collection</a> */}

          <DyteTooltip
            placement="bottom"
            variant="primary"
            label="Please note there are APIs available from this dropdown menu."
            open={showV2Tooltip}
            onDyteOpenChange={(open) => {
              if (!open) {
                localStorage.setItem(API_TOOLTIP_KEY, 'true');
              }
            }}
            disabled={!showV2Tooltip}
          >
            <SectionsMenu
              defaultValue={currentVersion}
              values={[
                { name: 'RPC', id: 'RPC' },
                { name: 'LCD', id: 'LCD' },
              ]}
              onValueChange={(version) => {
                if (showV2Tooltip) {
                  setShowV2Tooltip(false);
                  localStorage.setItem(API_TOOLTIP_KEY, 'true');
                }
                router.push(`/api?v=${version}`);
              }}
              className="compact"
              slot="trigger"
            />
          </DyteTooltip>
        </div>
      </div>
      <APIElement
        layout={size === 'sm' ? 'stacked' : 'sidebar'}
        currentVersion={currentVersion}
      />
    </Layout>
  );
}

import React, { useEffect, useState } from 'react';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import BrowserOnly from '@docusaurus/BrowserOnly';
import { DyteSpinner, DyteTooltip } from '@dytesdk/react-ui-kit';
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
 * Stoplight ships its own stylesheet, which the <Head> below pulls in. On a direct
 * hit to /api that link is part of the pre-rendered HTML and blocks the first
 * paint, so it is already loaded by the time we get here. On a client-side
 * navigation — clicking the LCD card on /apis, say — the link is only injected
 * once this route mounts, and Stoplight would otherwise paint a few thousand
 * unstyled nodes for as long as the 130KB stylesheet takes to arrive.
 */
function useElementsCssLoaded() {
  const [loaded, setLoaded] = useState(isElementsCssLoaded);
  // Whether the sheet was already in place on the very first render, which is
  // true exactly when this was a fresh page load: nothing can paint unstyled, so
  // no flash is possible and Stoplight can be left to load the spec itself.
  const [wasReadyAtMount] = useState(loaded);

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

  return { loaded, wasReadyAtMount };
}

/**
 * Fetches the spec ourselves rather than letting Stoplight do it from a URL.
 * Handed `apiDescriptionDocument`, Stoplight skips its own fetch and renders on
 * mount; left to fetch the ~500KB YAML itself it mounts empty first, which put a
 * blank gap between the spinner disappearing and the content appearing.
 *
 * Only worth doing when the page is going to wait on the stylesheet anyway. On a
 * fresh page load the fetch would instead serialise behind mount, costing roughly
 * 200ms that Stoplight would otherwise spend fetching in parallel with its own
 * start-up. Pass a null url there to leave the spec to Stoplight.
 */
function useApiDescription(specUrl) {
  const [state, setState] = useState(() =>
    specUrl
      ? { status: 'loading', document: null }
      : { status: 'skipped', document: null }
  );

  useEffect(() => {
    if (!specUrl) {
      setState({ status: 'skipped', document: null });
      return undefined;
    }

    let cancelled = false;
    setState({ status: 'loading', document: null });

    fetch(specUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`${response.status} ${response.statusText}`);
        }
        return response.text();
      })
      .then((text) => {
        if (!cancelled) {
          setState({ status: 'ready', document: text });
        }
      })
      .catch(() => {
        // Fall back to letting Stoplight load the URL, so it can surface its own
        // error UI rather than us leaving the page on a spinner forever.
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
 * Holds back the mount until the browser has painted at least one frame.
 *
 * Stoplight renders the whole spec synchronously — a few thousand nodes, 300ms
 * for the RPC spec and around 800ms for the larger LCD one — which blocks paint
 * for the duration. Mounting it in the same commit that stops showing the
 * spinner means the spinner never reaches the screen and the page just freezes
 * on an empty panel. Yielding two frames first guarantees the loading state is
 * visible while that work happens.
 */
function usePaintedBefore(ready) {
  const [painted, setPainted] = useState(false);

  useEffect(() => {
    if (!ready) {
      setPainted(false);
      return undefined;
    }

    let cancelled = false;
    let frame = window.requestAnimationFrame(() => {
      frame = window.requestAnimationFrame(() => {
        if (!cancelled) {
          setPainted(true);
        }
      });
    });

    return () => {
      cancelled = true;
      window.cancelAnimationFrame(frame);
    };
  }, [ready]);

  return painted;
}

function Spinner() {
  return (
    <div className="loading-container">
      <DyteSpinner />
    </div>
  );
}

function APIDocument({ layout, currentVersion }) {
  const specUrl = `/api/${currentVersion}.yaml`;
  const { loaded: cssLoaded, wasReadyAtMount } = useElementsCssLoaded();
  const description = useApiDescription(wasReadyAtMount ? null : specUrl);
  const API = useStoplightApi();

  const ready = Boolean(API) && cssLoaded && description.status !== 'loading';
  const painted = usePaintedBefore(ready);

  if (!ready || !painted) {
    return <Spinner />;
  }

  // apiDescriptionUrl is still passed when we have the document: Stoplight only
  // fetches it when no document is given, and the Export menu links to it.
  const source =
    description.status === 'ready'
      ? { apiDescriptionDocument: description.document, apiDescriptionUrl: specUrl }
      : { apiDescriptionUrl: specUrl };

  return (
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
        {/* Load styles for Stoplight Elements */}
        <link rel="preload" href={ELEMENTS_CSS} as="style" />
        <link rel="stylesheet" href={ELEMENTS_CSS} />
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
                router.push(`/api/?v=${version}`);
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

/**
 * Warms the API reference before the user navigates to it.
 *
 * /api is expensive to mount: a large Stoplight module graph to evaluate, a 130KB
 * stylesheet, and a spec of up to ~500KB. Paying all of that after the route
 * mounts leaves the page sitting on an empty shell for a moment — the flash this
 * exists to remove. Pointing at a link is a reliable signal that the navigation
 * is coming, and buys a few hundred milliseconds of head start.
 *
 * Everything here is best-effort: failures are ignored, since this is only ever
 * an optimisation over doing the same work on mount.
 */

const ELEMENTS_CSS = '/assets/css/elements.min.css';
const API_PATH = '/api';

const warmed = new Set();

function warmStylesheet() {
  if (warmed.has(ELEMENTS_CSS)) {
    return;
  }
  warmed.add(ELEMENTS_CSS);

  // preload rather than stylesheet: applying Stoplight's CSS here would restyle
  // the page the user is still looking at — it ships a global element reset.
  const link = document.createElement('link');
  link.rel = 'preload';
  link.as = 'style';
  link.href = ELEMENTS_CSS;
  document.head.appendChild(link);
}

function warmSpec(version) {
  const url = `/api/${version}.yaml`;
  if (warmed.has(url)) {
    return;
  }
  warmed.add(url);

  fetch(url).catch(() => {});
}

function warmModule() {
  if (warmed.has('module')) {
    return;
  }
  warmed.add('module');

  // The costly part: evaluating this on mount blocks the first paint of the
  // route. Doing it here means it is already in memory by the time we get there.
  import('@stoplight/elements').catch(() => {});
}

function apiLinkFrom(target) {
  if (!target || typeof target.closest !== 'function') {
    return null;
  }

  const link = target.closest('a[href]');
  if (!link) {
    return null;
  }

  const href = link.getAttribute('href') || '';
  if (!href.startsWith(API_PATH)) {
    return null;
  }

  // Only the reference itself, not /apis and friends.
  const path = href.split('?')[0].replace(/\/$/, '');
  return path === API_PATH ? href : null;
}

function onIntent(event) {
  const href = apiLinkFrom(event.target);
  if (!href) {
    return;
  }

  const query = href.includes('?') ? href.slice(href.indexOf('?') + 1) : '';
  const version = new URLSearchParams(query).get('v') || 'RPC';

  warmModule();
  warmStylesheet();
  warmSpec(version);
}

// Registered at module scope: Docusaurus runs a client module's top-level code,
// but does not call its default export.
//
// pointerover rather than mouseenter so a single delegated listener covers every
// link, and focusin/touchstart so keyboard and touch users get the same head start.
if (typeof document !== 'undefined') {
  document.addEventListener('pointerover', onIntent, { passive: true });
  document.addEventListener('focusin', onIntent, { passive: true });
  document.addEventListener('touchstart', onIntent, { passive: true });
}

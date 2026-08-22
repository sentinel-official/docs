#!/usr/bin/env node
/**
 * Scopes the Stoplight Elements stylesheet to the API reference page.
 *
 *   node scripts/scope-elements-css.mjs <in.css> <out.css>
 *
 * The stylesheet ships a global reset — `html { font-family: … }`,
 * `button { background-color: initial }`, `* { border: 0 solid currentColor }`,
 * `:focus { outline: none }` — that applies to the whole site the moment the
 * file loads. On every visit to /api that restyles the navbar, search box and
 * every other piece of chrome for as long as the page lives, and during the
 * route transition it is what made the site flash restyled before the API
 * panel appeared. Prefixing every selector with `.api-reference` keeps the
 * stylesheet's reach inside the page that needs it. Stoplight's popovers render
 * inside `.elements-container`, so nothing it draws escapes the prefix.
 */

import fs from 'node:fs';
import { createRequire } from 'node:module';
import path from 'node:path';
import process from 'node:process';

const require = createRequire(
  path.join(process.cwd(), 'node_modules', 'noop.js')
);
const postcss = require('postcss');
const prefixer = require('postcss-prefix-selector');

const [input, output] = process.argv.slice(2);
if (!input || !output) {
  console.error('usage: scope-elements-css.mjs <in.css> <out.css>');
  process.exit(1);
}

// :where() keeps the prefix at zero specificity, so every rule keeps exactly
// the weight it had unscoped and the cascade inside the panel is unchanged.
const PREFIX = ':where(.api-reference)';

const css = fs.readFileSync(input, 'utf-8');
const result = postcss([
  prefixer({
    prefix: PREFIX,
    transform(prefix, selector, prefixedSelector) {
      // The document roots become the page wrapper itself: their font and
      // layout rules should apply to the page, not the whole site.
      if (selector === 'html' || selector === 'body' || selector === ':root') {
        return prefix;
      }
      // data-theme lives on <html>, above the wrapper, so it must stay in
      // front of the prefix rather than be nested under it.
      const themed = selector.match(/^(\[data-theme=[^\]]+\])\s*(.*)$/);
      if (themed) {
        const [, theme, rest] = themed;
        return rest ? `${theme} ${prefix} ${rest}` : `${theme} ${prefix}`;
      }
      return prefixedSelector;
    },
  }),
]).process(css, { from: input }).css;

fs.writeFileSync(output, result);
console.log(
  `scoped ${path.basename(input)} -> ${path.basename(output)} ` +
    `(${css.length} -> ${result.length} bytes)`
);

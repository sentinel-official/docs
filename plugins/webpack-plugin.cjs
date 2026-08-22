/* eslint-disable */
const { ProvidePlugin } = require('webpack');

function webpackPlugin(context, options) {
  return {
    name: 'webpack-plugin',
    // The site is dark-only, but nothing says so until the first stylesheet is
    // parsed, so every full page load starts as a white page - a long glare in
    // Firefox and in dev mode, where styles arrive via JS. An inline style in
    // the document head paints the canvas dark before any CSS exists, and
    // color-scheme keeps scrollbars and form controls dark with it.
    injectHtmlTags() {
      return {
        headTags: [
          // Read while the head is still parsing, long before the render-
          // blocking stylesheet arrives. Until a document paints, the browser
          // shows its own canvas, and that canvas is white unless it has been
          // told the page is dark - which is the white flash on full page
          // loads. It is intermittent because it only shows once the browser
          // gives up holding the previous page, so it tracks network and CPU
          // speed. The inline style below cannot cover this: no style applies
          // until the first paint, which is what we are waiting for.
          {
            tagName: 'meta',
            attributes: { name: 'color-scheme', content: 'dark' },
          },
          {
            tagName: 'style',
            innerHTML: 'html{background-color:#161616;color-scheme:dark}',
          },
          // The site builds with trailingSlash: false, so /api is a document
          // and /api/ is nothing - the host falls through to 404.html, which
          // shows "Page Not Found" until the SPA boots and replaces it, and the
          // API page then loads its stylesheet late enough to paint Stoplight's
          // light theme first. Links here use the canonical form, but bookmarks
          // and history still carry slashed URLs. Since no page on this site
          // has a trailing slash, seeing one means the document being parsed is
          // the 404 fallback: drop the slash and reload before anything paints.
          {
            tagName: 'script',
            innerHTML:
              "(function(){var p=location.pathname;" +
              "if(p.length>1&&p.charAt(p.length-1)==='/'){" +
              "location.replace(p.slice(0,-1)+location.search+location.hash);}})();",
          },
        ],
      };
    },
    configureWebpack(config) {
      return {
        module: {
          rules: [
            {
              test: /\.m?js/,
              resolve: {
                fullySpecified: false,
              },
            },
          ],
        },
        plugins: [
          new ProvidePlugin({
            process: require.resolve('process/browser'),
          }),
        ],
        resolve: {
          fallback: {
            stream: require.resolve('stream-browserify'),
            path: require.resolve('path-browserify'),
            buffer: require.resolve('buffer/'),
            url: require.resolve('url'),
            querystring: require.resolve('querystring-es3'),
            crypto: false,
          },
          alias: {
            process: 'process/browser.js',
          },
        },
      };
    },
  };
}

module.exports = {
  webpackPlugin,
};

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
          {
            tagName: 'style',
            innerHTML: 'html{background-color:#161616;color-scheme:dark}',
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

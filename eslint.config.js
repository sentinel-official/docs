const react = require("eslint-plugin-react");

module.exports = [
  {
    ignores: [
      "build/",
      ".docusaurus/",
      "node_modules/",
      "*.cjs",
      "sidebars-*.js"
    ],
  },
  {
    plugins: {
      react,
    },
    settings: {
      react: {
        version: "detect",
      },
    },
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        ecmaVersion: 2021,
        sourceType: "module",
      },
      globals: {
        // You can define global variables here
      },
    },
    rules: {
      "react/prop-types": "off",
      // Marks variables referenced only inside JSX as used, so no-unused-vars
      // does not flag components like <StatusBadge />.
      "react/jsx-uses-vars": "error",
      "react/jsx-uses-react": "error",
      "no-unused-vars": ["warn", { "varsIgnorePattern": "^React$" }],
    },
  },
];

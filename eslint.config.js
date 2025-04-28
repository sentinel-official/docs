module.exports = [
  {
    ignores: [
      "build/",
      "node_modules/",
      "*.cjs",
      "sidebars-*.js"
    ],
  },
  {
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
      "no-unused-vars": ["warn", { "varsIgnorePattern": "^React$" }],
    },
  },
];
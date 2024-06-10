module.exports = {
    settings: {
      react: {
        version: "detect"
      }
    },
    rules: {
      "react/prop-types": "off",
      "no-unused-vars": "warn"
    },
    ignores: [
      "build/",
      "node_modules/",
      "*.cjs",
      "sidebars-*.js"
    ],
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        },
        ecmaVersion: 2021,
        sourceType: "module"
      },
      globals: {
        // Define your global variables here
        // For example:
        // "window": true,
        // "document": true
      }
    }
  };  
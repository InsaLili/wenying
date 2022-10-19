module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    jquery: true,
    jest: true,
  },
  extends: [
    "airbnb",
    "airbnb-typescript",
    "prettier",
    "plugin:react-hooks/recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
  ],
  plugins: ["prettier"],
  parserOptions: {
    project: "./tsconfig.json",
    sourceType: "module",
    createDefaultProgram: true,
  },
  settings: {
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"],
    },
    "import/resolver": {
      node: {
        paths: ["./src", "./app"],
      },

      alias: {
        map: [["~", "./app"]],
        extensions: [".ts", ".js", ".tsx", ".jsx", ".d.ts", ".json"],
      },
    },
  },
  rules: {
    "prettier/prettier": "error",
    "react/prop-types": "off",
    "react/no-unused-prop-types": "off",
    "react/no-array-index-key": "off",
    "react/function-component-definition": "off",
    "react/jsx-props-no-spreading": "off",
    "@typescript-eslint/no-unused-vars": "warn",
    "react/require-default-props": "off",
    "jsx-a11y/anchor-is-valid": "off",
    "import/prefer-default-export": "off",
    "import/no-webpack-loader-syntax": "off",
    "import/no-unresolved": "off",
    "import/no-extraneous-dependencies": "off",
    "arrow-body-style": "off",
    "no-nested-ternary": "off",
    "@typescript-eslint/no-redeclare": "off",
    "react/button-has-type": "off",
    "func-names": "off",
    "prefer-arrow-callback": "off",
    "import/order": [
      "error",
      {
        alphabetize: {
          order: "asc",
          caseInsensitive: true,
        },
        "newlines-between": "always",
        groups: ["builtin", "external", "parent", "sibling", "index"],
        pathGroups: [
          {
            pattern: "react",
            group: "external",
            position: "before",
          },
          {
            pattern: "~/**",
            group: "parent",
            position: "before",
          },
        ],
        pathGroupsExcludedImportTypes: ["builtin"],
      },
    ],
  },
};

module.exports = {
  // ...
  extends: [
    // ...
    "plugin:astro/recommended",
    /* "airbnb-base", */
    "plugin:astro/jsx-a11y-strict",
  ],
  rules: {
    "linebreak-style": "off",
    "import/no-unresolved": "off"
  },
  // ...
  overrides: [
    {
      // Define the configuration for `.astro` file.
      files: ["*.astro"],
      // Allows Astro components to be parsed.
      parser: "astro-eslint-parser",
      // Parse the script in `.astro` as TypeScript by adding the following configuration.
      // It's the setting you need when using TypeScript.
      parserOptions: {
        parser: "@typescript-eslint/parser",
        extraFileExtensions: [".astro"],
      },
      processor: "astro/client-side-ts",
      rules: {
        // override/add rules settings here, such as:
        // "astro/no-set-html-directive": "error"
        "import/prefer-default-export": "off"
      },
    },
    {
      files: ["*.ts"],
      extends: ["plugin:@typescript-eslint/recommended"],
      parserOptions: {
        sourceType: "module",
        ecmaVersion: 2015
      },
    },
    // ...
  ],
};
module.exports = {
  root: true,
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "@typescript-eslint/parser",
  },
  extends: ["plugin:vue/essential", "@vue/typescript/recommended"],
  plugins: ["@typescript-eslint"],
  rules: {
    // not needed for vue 3
    "vue/no-multiple-template-root": "off",
    "vue/multi-word-component-names": "off",
  },
};

"use strict";

module.exports = {
  root: true,
  extends: [
    "eslint:recommended",
    "plugin:eslint-plugin/recommended",
    // TODO 这个会干扰bin的测试，为什么？
    "plugin:node/recommended",
  ],
  env: {
    node: true,
  },
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  overrides: [
    {
      files: ["tests/**/*.js"],
      env: { mocha: true,},
    },
  ],
  rules: {

  }
};

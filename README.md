




# 待验证: 框架+ts的情况 需要验证下是否可按照原来的方式组合用



# @afuteam/eslint-plugin-fe

<div align="center">

[![Build Status](https://github.com/eyea/afu-eslint-rule/workflows/ci/badge.svg)](https://github.com/eyea/afu-eslint-rule/actions/workflows/ci.yml)[![Build Status](https://github.com/eyea/afu-eslint-rule/workflows/rulesCoverage/badge.svg)](https://github.com/eyea/afu-eslint-rule/actions/workflows/rulesCoverage.yml)[![npm package](https://img.shields.io/npm/v/@afuteam/eslint-plugin-fe.svg)](https://www.npmjs.com/package/@afuteam/eslint-plugin-fe)[![npm downloads](https://img.shields.io/npm/dm/@afuteam/eslint-plugin-fe.svg)](https://www.npmjs.com/package/@afuteam/eslint-plugin-fe)

</div>


## 安装

安装 [ESLint](https://eslint.org/) 和 `@afuteam/eslint-plugin-fe`:

```sh
npm i eslint @afuteam/eslint-plugin-fe --save-dev
```

## 使用

在 `.eslintrc` 配置文件中, 引入 `@afuteam/eslint-plugin-fe` 插件

```json
{
  "plugins": ["@afuteam/fe"]
}
```

然后根据项目类型, 配置对应规则

```json
// js + react
{
  "extends": [
    "plugin:@afuteam/fe/react-js"
  ],
  "plugins": ["@afuteam/fe"]
}
```

```json
// js + vue2
{
  "extends": ["plugin:@afuteam/fe/vue2-js"],
  "plugins": ["@afuteam/fe"]
}
```

```json
// js + vue3
{
  "extends": ["plugin:@afuteam/fe/vue3-js"],
  "plugins": ["@afuteam/fe"]
}
```

```json
// ts + react
{
  "extends": [
    "plugin:@afuteam/fe/react-ts"
  ],
  "plugins": ["@afuteam/fe"]
}
```

```json
// ts + vue2
{
  "plugins": ["@afuteam/fe"],
  "extends": ["plugin:@afuteam/fe/vue2-ts"]
}
```

```json
// ts + vue3
{
  "plugins": ["@afuteam/fe"],
  "extends": ["plugin:@afuteam/fe/vue3-ts"]
}
```

# @afuteam/eslint-plugin-fe-alpha

## 安装

安装 [ESLint](https://eslint.org/) 和 `@afuteam/eslint-plugin-fe-alpha`:

```sh
npm i eslint @afuteam/eslint-plugin-fe-alpha --save-dev
```

## .eslintrc 文件使用

在 `.eslintrc` 配置文件中, 引入 `@afuteam/eslint-plugin-fe-alpha` 插件

```json
{
  "plugins": ["@afuteam/fe-alpha"]
}
```

然后根据项目类型, 配置对应规则

```json
// js + react
{
  "extends": [
    "plugin:@afuteam/fe-alpha/react-js"
  ],
  "plugins": ["@afuteam/fe-alpha"]
}
```

```json
// js + vue2
{
  "extends": ["plugin:@afuteam/fe-alpha/vue2-js"],
  "plugins": ["@afuteam/fe-alpha"]
}
```

```json
// js + vue3
{
  "extends": ["plugin:@afuteam/fe-alpha/vue3-js"],
  "plugins": ["@afuteam/fe-alpha"]
}
```

```json
// ts + react 包含js规则
{
  "extends": [
    "plugin:@afuteam/fe-alpha/react-ts"
  ],
  "plugins": ["@afuteam-alpha/fe"]
}
```

```json
// ts + vue2 包含js规则
{
  "plugins": ["@afuteam/fe-alpha"],
  "extends": ["plugin:@afuteam/fe-alpha/vue2-ts"]
}
```

```json
// ts + vue3 包含js规则
{
  "plugins": ["@afuteam/fe-alpha"],
  "extends": ["plugin:@afuteam/fe-alpha/vue3-ts"]
}
```
## npx方式使用
查看当前支持的类型，列出清单
```sh
npx @afuteam/eslint-plugin-fe-alpha@latest --help=type
```

使用
```sh
npx @afuteam/eslint-plugin-fe-alpha@latest --type=react-ts --path=src/
```

## 说明
这个调试依赖包，作为 `@afuteam/eslint-plugin-fe` 的 **alpha** 版本，实验性功能会在这里进行，比如 **0.0.5** 版本已经内置对一些文件夹过滤 (.umi/locales/mock/e2e等)。

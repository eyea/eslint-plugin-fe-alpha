


```diff
- 框架+ts的情况 需要验证下是否可按照原来的方式组合用
```

# @afuteam/eslint-plugin-fe-alpha


## 安装

安装 [ESLint](https://eslint.org/) 和 `@afuteam/eslint-plugin-fe-alpha`:

```sh
npm i eslint @afuteam/eslint-plugin-fe-alpha --save-dev
```

## 使用

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
// ts + react
{
  "extends": [
    "plugin:@afuteam/fe-alpha/react-ts"
  ],
  "plugins": ["@afuteam-alpha/fe"]
}
```

```json
// ts + vue2
{
  "plugins": ["@afuteam/fe-alpha"],
  "extends": ["plugin:@afuteam/fe-alpha/vue2-ts"]
}
```

```json
// ts + vue3
{
  "plugins": ["@afuteam/fe-alpha"],
  "extends": ["plugin:@afuteam/fe-alpha/vue3-ts"]
}
```

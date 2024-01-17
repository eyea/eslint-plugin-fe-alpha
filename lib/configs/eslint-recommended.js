module.exports = {
  rules: {
    // ====== errors 类别 (Start) =====
    "for-direction": "error", // 强制 “for” 循环中更新子句的计数器朝着正确的方向移动
    "getter-return": [
      "error",
      {
        allowImplicit: true,
      },
    ], // 强制 getter 函数中出现 return 语句
    "no-async-promise-executor": "error", // 禁止使用异步函数作为 Promise executor
    "no-compare-neg-zero": "error", // 禁止与 -0 进行比较
    "no-await-in-loop": "error", // 禁止在循环中出现 await
    "no-cond-assign": ["error"], // 禁止条件表达式中出现赋值操作符
    "no-constant-condition": "error", // 禁止在条件中使用常量表达式
    "no-control-regex": "error", // 禁止在正则表达式中使用控制字符
    "no-debugger": "error", // 禁用 debugger
    "no-dupe-args": "error", // 禁止 function 定义中出现重名参数
    "no-dupe-keys": "error", // 禁止对象字面量中出现重复的 key
    "no-duplicate-case": "error", // 禁止出现重复的 case 标签
    "no-empty": [
      "error",
      {
        allowEmptyCatch: true,
      },
    ], // 禁止出现空语句块
    "no-empty-character-class": "error", // 禁止在正则表达式中使用空字符集
    "no-ex-assign": "error", // 禁止对 catch 子句的参数重新赋值
    "no-extra-boolean-cast": "error", // 禁止不必要的布尔转换
    // 'no-extra-parens':'error', // 多余的括号，反馈最多
    // 'no-extra-semi':'error', // 禁止不必要的分号
    "no-func-assign": "error", // 禁止对 function 声明重新赋值
    "no-inner-declarations": "error", //['error','both'], // 不加 both ，只对 function检测，加both 对 function var 都检测
    "no-invalid-regexp": "error", // 禁止 RegExp 构造函数中存在无效的正则表达式字符串
    // 'no-irregular-whitespace':['error',{"skipStrings": true,"skipComments": true,"skipRegExps": true,"skipTemplates": false}], // 禁止不规则的空白
    // vue:空格规则: https://eslint.vuejs.org/rules/no-irregular-whitespace.html
    "no-obj-calls": "error", // 禁止把全局对象作为函数调用
    "no-regex-spaces": "error", // 禁止正则表达式字面量中出现多个空格
    "no-sparse-arrays": "error", // 禁用稀疏数组
    // 'no-template-curly-in-string':'error', // 禁止在常规字符串中出现模板字面量占位符语法
    "no-unexpected-multiline": "error", // 禁止出现令人困惑的多行表达式
    "no-unreachable": "error", // 禁止在 return、throw、continue 和 break 语句之后出现不可达代码
    "no-unsafe-finally": "error", // 禁止在 finally 语句块中出现控制流语句
    "no-unsafe-negation": "error", // 禁止对关系运算符的左操作数使用否定操作符
    "require-atomic-updates": "error", // 禁止由于 await 或 yield的使用而可能导致出现竞态条件的赋值
    "use-isnan": "error", // 不直接与 NAN 对比
    "valid-typeof": [
      "error",
      {
        requireStringLiterals: false,
      },
    ], // typeof 对比, false: 可以与其他 typeof 对象值比较
    // ====== errors 类别 (End) =====
    // ====== practices 类别 (Start) =====
    "array-callback-return": "error",
    "block-scoped-var": "error",
    complexity: ["warn", 20],
    curly: "error",
    eqeqeq: "error",
    "default-case": "error",
    "no-caller": "error",
    "no-case-declarations": "error",
    "no-empty-function": "error",
    "no-div-regex": "error",
    "no-floating-decimal": "error",
    "no-global-assign": "error",
    "no-multi-spaces": "error",
    "no-new-wrappers": "error",
    "no-redeclare": "error",
    "no-return-assign": ["error", "always"],
    "no-unmodified-loop-condition": "error",
    "require-await": "error",
    "wrap-iife": ["error", "inside"],
    // ====== practices 类别 (End) =====
    // ====== variables 类别 (Start) =====
    "init-declarations": ["error", "always"],
    "no-shadow": ["error", { allow: ["state", "getters", "mutations"] }],
    "no-shadow-restricted-names": "error",
    "no-undef-init": "error",
    // ====== variables 类别 (End) =====
  },
};

"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

//------------------------------------------------------------------------------
// Plugin Definition
//------------------------------------------------------------------------------


// 旧版本配置文件路径，将要废弃
const ABANDON_configsFilePaths = {
  "ts4": "./configs/ts/index",
  "ts5": "./configs/ts/index",
  "vue2": "./configs/vue2",
  "vue3": "./configs/vue3",
  "react": "./configs/react",
  "react16": "./configs/react",
}

// 配置文件路径
const configsFilePaths = {
  "js": "./configs/js",
  "ts": "./configs/ts/index",
  "vue2-js": "./configs/vue2-js",
  "vue3-js": "./configs/vue3-js",
  "react-js": "./configs/react-js",
  "vue2-ts": "./configs/vue2-ts/index",
  "vue3-ts": "./configs/vue3-ts/index",
  "react-ts": "./configs/react-ts/index",

  // 将要废弃
  ...ABANDON_configsFilePaths,

};

module.exports.ABANDON_configsFilePaths = ABANDON_configsFilePaths;
module.exports.configsFilePaths = configsFilePaths;

// import all "rules, configs" in lib/
module.exports.rules = {};

module.exports.configs = {
  "js": configsFilePaths['js'],
  "ts": configsFilePaths['ts'],
  "vue2-js": configsFilePaths['vue2-js'],
  "vue3-js": configsFilePaths['vue3-js'],
  "react-js": configsFilePaths['react-js'],
  "vue2-ts": configsFilePaths['vue2-ts'],
  "vue3-ts": configsFilePaths['vue3-ts'],
  "react-ts": configsFilePaths['react-ts'],

  // 将要废弃， 📢📢📢 v1.0.1之前使用的注意
  "ts4": configsFilePaths['ts'],
  "ts5": configsFilePaths['ts'],
  "vue2": configsFilePaths['vue2'],
  "vue3": configsFilePaths['vue3'],
  "react": configsFilePaths['react'],
  "react16": configsFilePaths['react'],
};

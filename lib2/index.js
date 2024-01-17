"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

//------------------------------------------------------------------------------
// Plugin Definition
//------------------------------------------------------------------------------

// import all "rules, configs" in lib/
module.exports.rules = {};
module.exports.configs = {
  "js": require("./configs/js"),
  "vue2-js": require("./configs/vue2"),
  "vue3-js": require("./configs/vue3"),
  "react-js": require("./configs/react"),
  "vue2-ts": require("./configs/vue2-ts/index"),
  "vue3-ts": require("./configs/vue3-ts/index"),
  "react-ts": require("./configs/react-ts/index"),

  // 将要废弃， 📢📢📢 v1.0.1之前使用的注意
  "ts4": require("./configs/ts/index"),
  "ts5": require("./configs/ts/index"),
  "vue2": require("./configs/vue2"),
  "vue3": require("./configs/vue3"),
  "react": require("./configs/react"),
  "react16": require("./configs/react"),
};

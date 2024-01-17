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
  "eslint-recommended": require("./configs/eslint-recommended"),
  "vue2-js": require("./configs/vue2-js"),
  "vue3-js": require("./configs/vue3-js"),
  "react-airbnb-js": require("./configs/react-airbnb-js"),
  "vue2-ts": require("./configs/vue2-ts/index"),
  "vue3-ts": require("./configs/vue3-ts/index"),
  "react-airbnb-ts": require("./configs/react-airbnb-ts/index"),
};

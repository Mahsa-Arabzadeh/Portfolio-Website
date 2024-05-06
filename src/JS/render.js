const { default: uiRendering } = require("../JS/pages/uiRendering");

module.exports = function () {
  import("../JS/pages/uiRendering").then({ default: uiRendering });
};

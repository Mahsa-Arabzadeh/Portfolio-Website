'use strict';

const { default: uiRendering$2 } = require("../JS/pages/uiRendering");

module.exports = function () {
  Promise.resolve().then(function () { return uiRendering$1; }).then({ default: uiRendering$2 });
};

function renderHeader() {
  const header = "haeder test";

  return header;
}

document.addEventListener("DOMContentLoaded", uiRendering);

function uiRendering() {
  document.body.prepend(renderHeader);
}

var uiRendering$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: uiRendering
});

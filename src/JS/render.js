"use strict";
import domGenerator from "dom-generator";

function prepend(...elements) {
  const prepend = elements.forEach((element) => {
    document.body.prepend(element);
  });

  return prepend;
}

function render(...elements) {
  const main = domGenerator({
    tag: "div",
    attributes: { class: "main" },
  });

  const container = domGenerator({
    tag: "div",
    attributes: { class: "container" },
  });

  main.appendChild(container);
  document.body.appendChild(main);

  return (render = elements.forEach((element) => {
    container.appendChild(element);
  }));
}

export { prepend, render };

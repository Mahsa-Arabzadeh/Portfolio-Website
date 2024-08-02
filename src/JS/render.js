"use strict";
import domGenerator from "dom-generator";

const app = document.querySelector("#app");

export function prepend(...elements) {
  const prepend = elements.forEach((element) => {
    app.prepend(element);
  });

  return prepend;
}

export function append(...elements) {
  return elements.forEach((elem) => {
    app.appendChild(elem);
  });
}

export function render(...elements) {
  const main = domGenerator({
    tag: "div",
    attributes: { class: "main" },
  });

  const container = domGenerator({
    tag: "div",
    attributes: { class: "container" },
  });

  main.appendChild(container);
  app.appendChild(main);

  return (render = elements.forEach((element) => {
    container.appendChild(element);
  }));
}

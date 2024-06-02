"use strict";

import domGenerator from "dom-generator";

export default function mouseMove() {
  return domGenerator({
    tag: "div",
    children: [
      {
        tag: "div",
        attributes: { class: "cursor-dot" },
      },
      {
        tag: "div",
        attributes: { class: "cursor-outline" },
      },
    ],
  });
}

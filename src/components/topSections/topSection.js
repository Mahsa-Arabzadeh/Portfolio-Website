"use strict";

import domGenerator from "dom-generator";

export default function topSeciton(shape, title, line) {
  return domGenerator({
    tag: "div",
    attributes: { class: "left-part" },
    children: [
      {
        tag: "div",
        attributes: { class: "title-sec-part" },
        children: [
          {
            tag: "span",
            attributes: { class: "sharp-shape" },
            properties: { textContent: shape },
          },
          {
            tag: "h2",
            dataAttributes: { medium: "medium" },
            attributes: { class: "title-sec" },
            properties: {
              textContent: title,
            },
          },
        ],
      },
      {
        tag: "div",
        // must include class "line-head"
        attributes: { class: line },
      },
    ],
  });
}

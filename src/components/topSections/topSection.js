"use strict";

import domGenerator from "dom-generator";

export default function topSeciton(title) {
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
            properties: { textContent: "#" },
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
        attributes: { class: "line-head" },
      },
    ],
  });
}

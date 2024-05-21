"use strict";

import domGenerator from "dom-generator";

function topSeciton(props) {
  let { title } = props;

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
              textContent: (title = props.map((data) => data.title)),
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

export default topSeciton;
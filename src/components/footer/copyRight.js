"use strict";

import domGenerator from "dom-generator";

export default function copyRight(props) {
  return domGenerator({
    tag: "div",
    attributes: { id: "copy-right" },
    children: [
      {
        tag: "img",
        attributes: {
          id: "copy-right-logo",
          src: "/images/copyright-symbol-svgrepo-com (1).svg",
        },
      },
      {
        tag: "p",
        properties: { textContent: props.copyRight.copyRightText },
      },
    ],
  });
}

"use strict";

import domGenerator from "dom-generator";
import { projectsData } from "./data";

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
              textContent: (title = projectsData
                .map((data) => data.title)
                .join("")),
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

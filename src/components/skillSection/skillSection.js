"use strict";

import domGenerator from "dom-generator";
import topSeciton from "../topSections/topSection";
import leftSection from "./leftSection";
import rightSection from "./rightSection";

export default function skillSection() {
  return domGenerator({
    tag: "section",
    attributes: { class: "skill-section" },
    children: [
      {
        tag: topSeciton("#", "skills", "line-head"),
      },
      {
        tag: "div",
        attributes: { class: "main-section-skill" },
        children: [
          {
            tag: leftSection(),
          },
          {
            tag: rightSection(),
          },
        ],
      },
    ],
  });
}

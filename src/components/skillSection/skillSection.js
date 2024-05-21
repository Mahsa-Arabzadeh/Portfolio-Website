"use strict";

import domGenerator from "dom-generator";
import topSeciton from "../topSections/topSection";
import { projectsData } from "../projectSection/data";
import leftSection from "./leftSection";

export default function skillSection() {
  return domGenerator({
    tag: "section",
    attributes: { class: "skill-section" },
    children: [
      {
        tag: topSeciton(projectsData),
      },
      {
        tag: "div",
        attributes: { class: "main-section" },
        children: [
          {
            tag: leftSection(),
          },
        ],
      },
    ],
  });
}

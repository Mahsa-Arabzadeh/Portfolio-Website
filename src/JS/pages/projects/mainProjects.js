"use strict";

import domGenerator from "dom-generator";
import topSeciton from "../../../components/topSections/topSection";
import mainProjects from "../../../components/projectSection/mainProject";

export function topProjectsPage(props) {
  let { text } = props;
  return domGenerator({
    tag: "div",
    attributes: { class: "list-project" },
    children: [
      {
        tag: topSeciton("/", "projects", null),
      },
      {
        tag: "h3",
        attributes: { class: "list-text" },
        properties: { textContent: text.text },
      },
    ],
  });
}

export function mainProjectPage() {
  return domGenerator({
    tag: "section",
    attributes: { class: "main-projects" },
    children: [
      {
        tag: topSeciton("#", "complete-apps", null),
      },
      {
        tag: "div",
        attributes: { class: "projects-container" },
        children: [
          {
            tag: mainProjects(),
          },
        ],
      },
    ],
  });
}

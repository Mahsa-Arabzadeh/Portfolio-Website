"use strict";

import domGenerator from "dom-generator";
import topSeciton from "./topSection";
import { projectsData } from "./data";
import mainProjects from "./mainProject";

function projectSection() {
  const projectSection = domGenerator({
    tag: "section",
    attributes: { class: "projects-section" },
    children: [
      {
        tag: topSeciton(projectsData),
      },
      {
        tag: mainProjects(),
      },
    ],
  });

  return projectSection;
}

export default projectSection;

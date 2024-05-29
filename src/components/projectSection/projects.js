"use strict";

import domGenerator from "dom-generator";
import topSeciton from "../topSections/topSection";
import mainProjects from "./mainProject";
import button from "../buttonComponent/button";
import renderProjectsPage from "../../JS/pages/projects/projectsPage";
import { render } from "../../JS/render";

function projectSection() {
  const projectSection = domGenerator({
    tag: "section",
    attributes: { class: "projects-section" },
    children: [
      {
        tag: "div",
        attributes: { class: "project-sec-top" },
        children: [
          {
            tag: topSeciton("projects"),
          },
          {
            tag: button({
              startImg: "/images/View all ~~_.svg",
              btnSize: "large",
              eventListeners: {
                click: () => {
                  alert("mahsa");
                },
              },
            }),
          },
        ],
      },
      {
        tag: mainProjects(),
      },
    ],
  });

  return projectSection;
}

export default projectSection;

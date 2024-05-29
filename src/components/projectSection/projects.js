"use strict";

import domGenerator from "dom-generator";
import topSeciton from "../topSections/topSection";
import mainProjects from "./mainProject";
import button from "../buttonComponent/button";

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
            tag: topSeciton("#", "projects", "line-head"),
          },
          {
            tag: button({
              startImg: "/images/View all ~~_.svg",
              btnSize: "large",
              eventListeners: {
                click: () => {
                  window.location.href = "/projects.html";
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

"use strict";

import domGenerator from "dom-generator";
import topSeciton from "../topSections/topSection";
import mainProjects from "./mainProject";
import button from "../buttonComponent/button";

export default function projectSection() {
  return domGenerator({
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
              btnClass: "view-all",
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
}

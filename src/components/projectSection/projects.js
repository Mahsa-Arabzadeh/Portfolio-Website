import domGenerator from "dom-generator";
import topSeciton from "./topSection";
import projectsData from "./data";

function projectSection() {
  const projectSection = domGenerator({
    tag: "section",
    attributes: { class: "projects-section" },
    children: [
      {
        tag: topSeciton(projectsData),
      },
      {
        tag: "div",
        attributes: { class: "project-sec-main" },
      },
    ],
  });

  return projectSection;
}

export default projectSection;

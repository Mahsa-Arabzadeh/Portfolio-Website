"use strict";

import domGenerator from "dom-generator";
import topSeciton from "../../../components/topSections/topSection";
import mainProjects from "../../../components/projectSection/mainProject";
import { cards } from "../../../components/projectSection/mainProject";
import { miniProjectsData } from "../../../components/projectSection/data";

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

export function miniProjects() {
  return domGenerator({
    tag: "section",
    attributes: { class: "mini-projects" },
    children: [
      {
        tag: topSeciton("#", "mini-projects", null),
      },
      {
        tag: miniProjectsCard(),
      },
    ],
  });
}

function miniProjectsCard() {
  const cardsTag = miniProjectsData.map((data) => {
    let { bannerProject, tools, title, paragraph } = data;
    const card = cards({
      bannerProject,
      tools,
      title,
      paragraph,
    });

    return {
      tag: card,
    };
  });

  return domGenerator({
    tag: "div",
    attributes: { class: "mini-projects-card" },
    children: cardsTag.map((item) => ({
      tag: item.tag,
    })),
  });
}

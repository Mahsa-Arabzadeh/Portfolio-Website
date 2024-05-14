import domGenerator from "dom-generator";
import { projects } from "./data";

function cards(props) {
  let { bannerProject, tools, title, paragraph } = props;

  const cards = domGenerator({
    tag: "div",
    attributes: { class: "card-project" },
    children: [
      {
        tag: "img",
        attributes: {
          class: "project-banner",
          src: bannerProject,
        },
      },
      {
        tag: "div",
        attributes: { class: "tools-project" },
        properties: { textContent: tools },
      },
      {
        tag: "div",
        attributes: { class: "description-project" },
        children: [
          {
            tag: "h3",
            attributes: { class: "description-title" },
            properties: { textContent: title },
          },
          {
            tag: "p",
            attributes: { class: "description-p" },
            properties: { textContent: paragraph },
          },
        ],
      },
    ],
  });

  return cards;
}

function mainProjects() {
  const cardsTag = projects.map((data) => {
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

  const mainProjects = domGenerator({
    tag: "div",
    attributes: { class: "project-sec-main" },
    children: cardsTag.map((item) => ({
      tag: item.tag,
    })),
  });

  return mainProjects;
}

export default mainProjects;

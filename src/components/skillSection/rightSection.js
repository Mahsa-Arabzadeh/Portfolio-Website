"use strict";

import domGenerator from "dom-generator";
import { columnData } from "./data";

function skillCard(title, skillTitle) {
  return domGenerator({
    tag: "div",
    attributes: { class: "skill-card" },
    children: [
      {
        tag: "h3",
        attributes: { class: "title-card" },
        properties: { textContent: title },
      },
      {
        tag: "p",
        attributes: { class: "desc-card" },
        properties: { textContent: skillTitle },
      },
    ],
  });
}

function columnGenerator() {
  return domGenerator({
    tag: "div",
    attributes: { class: "column-section" },
  });
}

export default function rightSection() {
  const columnGeneratorTag = columnData.map((data) => {
    const columnTag = columnGenerator(data);
    data.map((item) => {
      const title = item.title;
      const skills = item.skills.map((desc) => desc.skill).join(" ");
      const cardTag = skillCard(title, skills);

      // append cardTag to columnTag
      columnTag.appendChild(cardTag);

      return { tag: cardTag };
    });
    return {
      tag: columnTag,
    };
  });

  return domGenerator({
    tag: "div",
    attributes: { class: "right-section" },
    children: columnGeneratorTag.map((data) => ({
      tag: data.tag,
    })),
  });
}

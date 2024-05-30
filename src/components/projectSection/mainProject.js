"use strict";

import domGenerator from "dom-generator";
import { projects } from "./data";
import button from "../buttonComponent/button";

export function cards(props) {
  let { bannerProject, tools, title, paragraph } = props;

  return domGenerator({
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
          {
            tag: "div",
            attributes: { class: "btn-part" },
            children: [
              {
                tag: button({
                  shape: "primary-border",
                  btnSize: "small",
                  endImg: "/images/Live _~_.svg",
                }),
              },
              {
                tag: button({
                  shape: "secondry-border",
                  btnSize: "small",
                  endImg: "/images/Live _~git_.svg",
                }),
              },
            ],
          },
        ],
      },
    ],
  });
}

export default function mainProjects() {
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

  return domGenerator({
    tag: "div",
    attributes: { class: "project-sec-main" },
    children: cardsTag.map((item) => ({
      tag: item.tag,
    })),
  });
}

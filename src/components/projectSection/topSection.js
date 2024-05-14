import domGenerator from "dom-generator";
import { projectsData } from "./data";

function topSeciton(props) {
  let { title, arrowRight } = props;

  const topSection = domGenerator({
    tag: "div",
    attributes: { class: "project-sec-top" },
    children: [
      {
        tag: "div",
        attributes: { class: "left-part" },
        children: [
          {
            tag: "div",
            attributes: { class: "title-sec-part" },
            children: [
              {
                tag: "span",
                attributes: { class: "sharp-shape" },
                properties: { textContent: "#" },
              },
              {
                tag: "h2",
                dataAttributes: { medium: "medium" },
                attributes: { class: "title-sec" },
                properties: {
                  textContent: (title = projectsData
                    .map((data) => data.title)
                    .join("")),
                },
              },
            ],
          },
          {
            tag: "div",
            attributes: { class: "line-head" },
          },
        ],
      },
      {
        tag: "div",
        attributes: { class: "see-more-part" },
        children: [
          {
            tag: "img",
            attributes: {
              class: "arrow-right",
              src: (arrowRight = projectsData
                .map((data) => data.arrowRight)
                .join("")),
            },
            eventListeners: { click: () => alert("Hi!") },
          },
        ],
      },
    ],
  });

  return topSection;
}

export default topSeciton;

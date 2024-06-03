"use strcit";

import domGenerator from "dom-generator";
import { aboutMeData } from "./data";
import button from "../buttonComponent/button";

export default function aboutMeIntroduction(props) {
  let { name } = props;

  const paragraphTag = aboutMeData.flatMap((data) => {
    if (Array.isArray(data)) {
      return data
        .map((item) => {
          if (item.paragraph) {
            return { tag: paragraphGenerator(item.paragraph) };
          }
          return null;
        })
        .filter(Boolean);
    }
    return [];
  });

  return domGenerator({
    tag: "div",
    attributes: { class: "about-me-left" },
    children: [
      {
        tag: "p",
        attributes: { class: "about-me-name" },
        properties: {
          textContent: `Hello, i'm ${(name = aboutMeData.find((item) =>
            item.hasOwnProperty("name")
          ).name)}`,
        },
      },
      ...paragraphTag,
      {
        tag: button({
          textContent: "Download CV",
          shape: "primary-border",
          btnSize: "small",
          btnClass: "about-btn",
          download: "cumputer.png",
          href: "/images/portrait-delivery-man-holding-cardboard-parcel 2.png",
        }),
      },
    ],
  });
}

function paragraphGenerator(paragraph) {
  return domGenerator({
    tag: "p",
    attributes: { class: "about-me-paragraph" },
    properties: { textContent: paragraph },
  });
}

"use strict";

import domGenerator from "dom-generator";
import heroData from "./data";
import button from "../buttonComponent/button";

export default function introductionHero(props) {
  let { skill, text } = props;
  return domGenerator({
    tag: "div",
    attributes: { class: "introduction-hero" },
    children: [
      {
        tag: "h1",
        dataAttributes: { SemiBold: "SemiBold" },
        attributes: { class: "introduction-title" },
        properties: {
          textContent: `Im a `,
        },
        children: [
          {
            tag: "span",
            attributes: { class: "colorPurpleSpan" },
            properties: {
              textContent: (skill = heroData
                .map((data) => data.skill)
                .join("")),
            },
          },
        ],
      },
      {
        tag: "p",
        attributes: { class: "introduction-p" },
        properties: {
          textContent: (text = heroData.map((data) => data.text).join("")),
        },
      },
      {
        tag: button({
          textContent: "Contact me!!",
          btnSize: "small",
          shape: "primary-border",
          btnClass: "contactMeBtn",
          eventListeners: {
            click: () => {
              document
                .querySelector(".section-contactme")
                .scrollIntoView({ behavior: "smooth" });
            },
          },
        }),
      },
    ],
  });
}

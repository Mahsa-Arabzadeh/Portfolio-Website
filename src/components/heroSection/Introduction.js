"use strict";

import domGenerator from "dom-generator";
import heroData from "./data";
import button from "../buttonComponent/button";

export default function introductionHero(props) {
  let { skill } = props;
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
          textContent:
            "He crafts responsive websites where technologies meet creativity He crafts responsive websites where technologies meet creativity",
        },
      },
      {
        tag: button({
          textContent: "Contact me!!",
          btnSize: "small",
          shape: "primary-border",
          btnClass: "contactMeBtn",
        }),
      },
    ],
  });
}

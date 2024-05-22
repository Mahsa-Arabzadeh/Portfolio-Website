"use strict";

import domGenerator from "dom-generator";
import topSeciton from "../topSections/topSection";
import aboutMeIntroductions from "./aboutMeIntroduction";
import { aboutMeData } from "./data";

export default function aboutMeSection() {
  return domGenerator({
    tag: "section",
    attributes: { class: "about-section" },
    children: [
      {
        tag: topSeciton("about-me"),
      },
      {
        tag: "div",
        attributes: { class: "main-section" },
        children: [
          {
            tag: aboutMeIntroductions(aboutMeData),
          },
        ],
      },
    ],
  });
}

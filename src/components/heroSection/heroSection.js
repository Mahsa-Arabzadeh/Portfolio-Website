"use strict";

import domGenerator from "dom-generator";
import introductionHero from "./Introduction";
import heroImage from "./heroImage";
import heroData from "./data";

export default function heroSection() {
  return domGenerator({
    tag: "section",
    attributes: { id: "hero-section" },
    children: [
      {
        tag: introductionHero(heroData),
      },
      {
        tag: heroImage(heroData),
      },
    ],
  });
}

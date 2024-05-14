import domGenerator from "dom-generator";
import introductionHero from "./Introduction";
import heroImage from "./heroImage";
import heroData from "./data";

function heroSection() {
  const heroSection = domGenerator({
    tag: "section",
    attributes: { class: "hero-section" },
    children: [
      {
        tag: introductionHero(),
      },
      {
        tag: heroImage(heroData),
      },
    ],
  });

  return heroSection;
}

export default heroSection;

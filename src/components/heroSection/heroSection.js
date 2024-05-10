import domGenerator from "dom-generator";
import introductionHero from "./Introduction";

function heroSection() {
  const heroSection = domGenerator({
    tag: "section",
    attributes: { class: "hero-section" },
    children: [
      {
        tag: introductionHero(),
      },
    ],
  });

  console.log(heroSection);

  return heroSection;
}

export default heroSection;

// todo:
// create Introduction part ✔
// style to introduction part

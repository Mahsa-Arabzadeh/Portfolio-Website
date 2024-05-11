import domGenerator from "dom-generator";
import introductionHero from "./Introduction";
import heroImage from "./heroImage";

function heroSection() {
  const heroSection = domGenerator({
    tag: "section",
    attributes: { class: "hero-section" },
    children: [
      {
        tag: introductionHero(),
      },
      {
        tag: heroImage(),
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

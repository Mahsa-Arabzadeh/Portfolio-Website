import domGenerator from "dom-generator";
import introductionHero from "./Introduction";
import heroImage from "./heroImage";
import { heroData } from "./heroImage";

function heroSection() {
  const heroSection = domGenerator({
    tag: "section",
    attributes: { class: "hero-section" },
    children: [
      {
        tag: introductionHero(),
      },
      {
        tag: heroImage(
          heroData.map(
            (data) => data.shapePurple,
            heroData.map((data) => data.shapeDoted)
          )
        ),
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

import domGenerator from "dom-generator";
import heroData from "./data";

function heroImage() {
  const heroImage = domGenerator({
    tag: "div",
    attributes: { class: "hero-image" },
    children: [
      {
        tag: "div",
        attributes: { class: "image-part" },
        children: [
          {
            tag: "img",
            attributes: {
              class: "shape-purple",
              src: heroData.map((data) => data.shapePurple).join(""),
            },
          },
          {
            tag: "img",
            attributes: {
              class: "shape-doted",
              src: heroData.map((data) => data.shapeDoted).join(""),
            },
          },
        ],
      },
      {
        tag: "div",
        attributes: { class: "currently-work" },
      },
    ],
  });

  console.log(heroImage);
  return heroImage;
}

export default heroImage;

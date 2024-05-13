import domGenerator from "dom-generator";

function heroImage(heroData) {
  let { shapePurple, shapeDoted } = heroData;

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
              src: (shapePurple = heroData
                .map((item) => item.shapePurple)
                .join("")),
            },
          },
          {
            tag: "img",
            attributes: {
              class: "shape-doted",
              src: (shapeDoted = heroData
                .map((item) => item.shapeDoted)
                .join("")),
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

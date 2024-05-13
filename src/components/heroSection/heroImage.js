import domGenerator from "dom-generator";

function heroImage(heroData) {
  let { shapePurple, shapeDoted, profileImage } = heroData;

  const heroImage = domGenerator({
    tag: "div",
    attributes: { class: "hero-image" },
    children: [
      {
        tag: "div",
        attributes: {
          class: "image-part",
        },
        children: [
          {
            tag: "img",
            attributes: {
              class: "profile-image",
              src: (profileImage = heroData
                .map((item) => item.profileImage)
                .join("")),
            },
          },
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

  return heroImage;
}

export default heroImage;

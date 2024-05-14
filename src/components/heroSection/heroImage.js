import domGenerator from "dom-generator";

function heroImage(heroData) {
  let { shapePurple, shapeDoted, profileImage, workOn } = heroData;

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
        children: [
          {
            tag: "div",
            dataAttributes: { color: "base-color" },
            attributes: { class: "squar-color" },
          },
          {
            tag: "div",
            dataAttributes: { medium: "medium" },
            properties: { textContent: "Currently working on" },
          },
          {
            tag: "div",
            dataAttributes: { SemiBold: "SemiBold" },
            properties: {
              textContent: (workOn = heroData
                .map((data) => data.workOn)
                .join("")),
            },
          },
        ],
      },
    ],
  });

  return heroImage;
}

export default heroImage;

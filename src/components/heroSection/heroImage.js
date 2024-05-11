import domGenerator from "dom-generator";

export const heroData = [
  {
    shapePurple: "/image/LogoPurple.svg",
  },
  {
    shapeDoted: "/image/DotsShape.svg",
  },
];

function heroImage(shapePurple, shapeDoted) {
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
            attributes: { class: "shape-purple", src: shapePurple },
          },
          {
            tag: "img",
            attributes: { class: "shape-doted", src: shapeDoted },
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

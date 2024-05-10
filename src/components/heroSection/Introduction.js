import domGenerator from "dom-generator";

function introductionHero() {
  const introduction = domGenerator({
    tag: "div",
    attributes: { class: "introduction-hero" },
    children: [
      {
        tag: "div",
        attributes: { class: "introduction-title" },
        properties: { textContent: "mahsa" },
      },
      {
        tag: "div",
        attributes: { class: "introduction-title" },
        properties: { textContent: "mahsa" },
      },
    ],
  });

  return introduction;
}

export default introductionHero;

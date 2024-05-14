import domGenerator from "dom-generator";

function introductionHero() {
  const introduction = domGenerator({
    tag: "div",
    attributes: { class: "introduction-hero" },
    children: [
      {
        tag: "h1",
        dataAttributes: { SemiBold: "SemiBold" },
        attributes: { class: "introduction-title" },
        properties: {
          textContent: `${"mahsa"} is a ${"web developer"}`,
        },
      },
      {
        tag: "p",
        attributes: { class: "introduction-p" },
        properties: {
          textContent:
            "He crafts responsive websites where technologies meet creativity He crafts responsive websites where technologies meet creativity",
        },
      },
    ],
  });

  return introduction;
}

export default introductionHero;

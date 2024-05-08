import domGenerator from "dom-generator";

const dataItemNav = [
  {
    textItem: "home",
  },
  {
    textItem: "works",
  },
  {
    textItem: "about-me",
  },
  {
    textItem: "contacts",
  },
];

function navBarGenerator() {
  const liNav = dataItemNav.map((item) => {
    const liTag = listNavGenerator(item.textItem);

    return {
      tag: liTag,
    };
  });

  const navBar = domGenerator({
    tag: "nav",
    attributes: { id: "nav-bar" },
    children: liNav.map((item) => ({
      tag: item.tag,
    })),
  });

  console.log(navBar);

  return navBar;
}

function listNavGenerator(textItem) {
  const liNav = domGenerator({
    tag: "li",
    attributes: { class: "li-nav" },
    children: [
      {
        tag: "span",
        attributes: { class: "sharp-nav" },
        properties: { textContent: "#" },
      },
      {
        tag: "span",
        attributes: { class: "text-nav" },
        properties: { textContent: textItem },
      },
    ],
  });

  return liNav;
}

export default navBarGenerator;

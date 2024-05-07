import domGenerator from "dom-generator";

const dataItemNav = [
  {
    textItem: "Home",
  },
  {
    textItem: "Home",
  },
];

function navBarGenerator() {
  const navBar = domGenerator({
    tag: "nav",
    attributes: { id: "nav-bar" },
    children: [],
  });
}

function navItemGenerator() {
  const navItem = dataItemNav.map((item) => {
    const navTag = domGenerator({
      tag: "span",
      attributes: { class: "nav-text" },
      properties: { textContent: item.textItem },
    });

    return {
      tag: navTag,
    };
  });

  return navItem;
}

export default navItemGenerator;

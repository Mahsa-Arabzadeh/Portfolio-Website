import domGenerator from "dom-generator";

const dataItemNav = [
  {
    textItem: "home",
    sectionAddress: "#hero-section",
  },
  {
    textItem: "works",
    sectionAddress: ".projects-section",
  },
  {
    textItem: "skills",
    sectionAddress: ".skill-section",
  },
  {
    textItem: "about-me",
    sectionAddress: ".about-section",
  },
  {
    textItem: "contacts",
    sectionAddress: ".section-contactme",
  },
];

export function navBarGenerator() {
  const liNav = dataItemNav.map((item) => {
    const liTag = listNavGenerator(item.textItem, item.sectionAddress);

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

  return navBar;
}

function listNavGenerator(textItem, sectionAddress) {
  const liNav = domGenerator({
    tag: "li",
    attributes: { class: "li-nav" },
    eventListeners: {
      click: () => {
        document
          .querySelector(sectionAddress)
          .scrollIntoView({ behavior: "smooth" });
      },
    },
    children: [
      {
        tag: "span",
        dataAttributes: { basecolor: "base-color" },
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

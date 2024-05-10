import domGenerator from "dom-generator";

export const logoData = [
  {
    name: "M.A",
  },
  {
    logoSvg: "/images/Logo.svg",
  },
];

function headerLogo(name, logoSvg) {
  const headerLogo = domGenerator({
    tag: "div",
    attributes: { class: "logo-container" },
    children: [
      {
        tag: "img",
        attributes: { class: "logo-svg", src: logoSvg },
      },
      {
        tag: "div",
        attributes: { class: "logo-name" },
        properties: { textContent: name },
      },
    ],
  });

  return headerLogo;
}

export default headerLogo;

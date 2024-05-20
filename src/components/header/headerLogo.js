import domGenerator from "dom-generator";
import heroSection from "../heroSection/heroSection";
import headerGenerator from "./header";
import projectSection from "../projectSection/projects";

export const logoData = [
  {
    name: "Mah",
  },
  {
    logoSvg: "/images/Logo.svg",
  },
];

export function headerLogo(name, logoSvg) {
  const headerLogo = domGenerator({
    tag: "div",
    attributes: { id: "logo-container" },
    eventListeners: {
      click: () => {
        const heroSectionVar = domGenerator({
          tag: heroSection(),
        });

        console.log(heroSectionVar);

        heroSectionVar.scrollIntoView({ behavior: "smooth" });
      },
    },
    children: [
      {
        tag: "img",
        attributes: { class: "logo-svg", src: logoSvg },
      },
      {
        tag: "h2",
        attributes: { class: "logo-name" },
        properties: { textContent: name },
      },
    ],
  });

  return headerLogo;
}

export default headerLogo;

"use strict";

import domGenerator from "dom-generator";
import heroSection from "../heroSection/heroSection";

export default function logoGenerator(props) {
  const { name, logoSvg } = props;
  return domGenerator({
    tag: "div",
    attributes: { id: "logo-container" },
    eventListeners: {
      click: () => {
        document
          .getElementById("hero-section")
          .scrollIntoView({ behavior: "smooth" });
        setTimeout(() => {
          window.scrollBy(0, -100);
        }, 630);
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
}

"use strict";

import domGenerator from "dom-generator";
import navBarGenerator from "./navBar";
import { logoData } from "../logoGenerator/data";
import logoGenerator from "../logoGenerator/logoGenerator";
import sideBar from "../sideBar/renderSideBar";

export default function headerGenerator() {
  let isOpen = false;

  return domGenerator({
    tag: "header",
    attributes: { id: "header" },
    children: [
      {
        tag: logoGenerator(logoData),
        attributes: { class: "logo-header" },
      },
      {
        tag: "div",
        attributes: { class: "nav-container" },
        children: [
          {
            tag: navBarGenerator(),
          },
        ],
      },
      {
        tag: "img",
        attributes: { class: "side-bar-icon", src: "./images/Frame 60.svg" },
        eventListeners: {
          click: (e) => {
            isOpen = !isOpen;
            e.stopPropagation();
            const sidebar = document.querySelector(".side-bar");

            if (isOpen) {
              sidebar.setAttribute("id", "open");
            } else {
              sidebar.removeAttribute("id");
            }
          },
        },
      },
    ],
  });
}

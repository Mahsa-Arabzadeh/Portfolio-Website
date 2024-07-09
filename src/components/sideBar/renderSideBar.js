"use strict";

import domGenerator from "dom-generator";
import navBarGenerator from "../header/navBar";

export default function sideBar() {
  closeSidebar();

  return domGenerator({
    tag: "div",
    attributes: { class: "side-bar" },
    children: [
      {
        tag: navBarGenerator(),
      },
      {
        tag: "div",
        attributes: { class: "overlay" },
      },
    ],
  });
}

export function closeSidebar() {
  document.addEventListener("click", (e) => {
    console.log(e);
  });
}

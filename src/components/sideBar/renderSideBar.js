"use strict";

import domGenerator from "dom-generator";
import navBarGenerator from "../header/navBar";

export default function sideBar(sidebarElement) {
  sidebarElement = domGenerator({
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

  return sidebarElement;
}

document.addEventListener("click", closeSidebar);

function closeSidebar(e) {
  if (!sideBar(sidebarElement).contains(e.target)) {
    console.log("mash");
    sidebarElement.style.color = "red";
    // blurOverly.style.display = "none";
  }
}

"use strict";

import domGenerator from "dom-generator";
import navBarGenerator from "../header/navBar";
import headerGenerator from "../header/header";

export default function sideBar() {
  const sideBar = domGenerator({
    tag: "div",
    attributes: { class: "side-bar" },
    children: [
      {
        tag: navBarGenerator(),
      },
    ],
  });

  const menuIcon = headerGenerator().querySelector(".side-bar-icon");

  function closeSidebar(e) {
    // Check if the click target is outside the sidebar
    if (!sideBar.contains(e.target) && !menuIcon.contains(e.target)) {
      sideBar.setAttribute("id", "close");
    }
  }

  // Attach the click event listener to the document
  document.addEventListener("click", closeSidebar);

  return sideBar;
}

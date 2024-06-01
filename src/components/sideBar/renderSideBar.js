"use strict";

import domGenerator from "dom-generator";
import navBarGenerator from "../header/navBar";

export default function sideBar() {
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

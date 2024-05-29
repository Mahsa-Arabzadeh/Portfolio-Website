"use strict";

import domGenerator from "dom-generator";
import selectLang from "./language";
import navBarGenerator from "./navBar";
import { logoData } from "../logoGenerator/data";
import logoGenerator from "../logoGenerator/logoGenerator";

export default function headerGenerator() {
  return domGenerator({
    tag: "header",
    attributes: { id: "header" },
    children: [
      {
        tag: logoGenerator(logoData),
      },
      {
        tag: "div",
        attributes: { class: "nav-container" },
        children: [
          {
            tag: navBarGenerator(),
          },
          {
            tag: selectLang(),
          },
        ],
      },
    ],
  });
}

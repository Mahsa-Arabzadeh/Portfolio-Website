import domGenerator from "dom-generator";
import selectLang from "./language";
import navBarGenerator from "./navBar";
import logoGenerator from "../logoGenerator/logoGenerator";
import { logoData } from "../logoGenerator/data";

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

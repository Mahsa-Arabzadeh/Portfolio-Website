import domGenerator from "dom-generator";
import selectLang from "./language";
import navBarGenerator from "./navBar";
import headerLogo from "./headerLogo";
import { logoData } from "./headerLogo";

function headerGenerator() {
  const headerGenerator = domGenerator({
    tag: "header",
    attributes: { id: "header" },
    children: [
      {
        tag: headerLogo(
          logoData.map((item) => item.name).join(""),
          logoData.map((item) => item.logoSvg).join("")
        ),
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

  console.log(headerGenerator);

  return headerGenerator;
}

export default headerGenerator;
// todo:
// create header generator function ✔
// style to header ✔
// create logo part ✔
// style to logo

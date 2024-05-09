import domGenerator from "dom-generator";
import selectLang from "./language";
import navBarGenerator from "./navBar";

function headerGenerator() {
  const headerGenerator = domGenerator({
    tag: "header",
    attributes: { id: "header" },
    children: [
      {
        tag: "logo",
      },
      {
        tag: "div",
        attributes: { class: "nav-container" },
        children: [
          {
            tag: selectLang(),
          },
          {
            tag: navBarGenerator(),
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
// style to header

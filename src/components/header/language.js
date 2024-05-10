"use strict";

import domGenerator from "dom-generator";

const dataLang = [
  // {
  //   svgArrow: "/images/Grouparrow.svg",
  // },
  {
    languages: [
      {
        language: "EN",
      },
      {
        language: "IR",
      },
    ],
  },
];

// find method

function selectLang() {
  const langSelect = domGenerator({
    tag: "div",
    attributes: { class: "lang-container" },
    children: [
      // {
      //   tag: "img",
      //   attributes: {
      //     class: "select-svg",
      //     src: dataLang[0].svgArrow,
      //   },
      // },
      {
        tag: "select",
        attributes: { class: "select-lang" },
        children: dataLang.flatMap((item) => {
          if (item.languages) {
            return item.languages.map((lang) => ({
              tag: "option",
              attributes: { class: "lang-item" },
              properties: { textContent: lang.language },
            }));
          } else {
            return [];
          }
        }),
      },
    ],
  });

  return langSelect;
}

export default selectLang;

// TODO:
// create a select tag ✔
// write jsdoc comments

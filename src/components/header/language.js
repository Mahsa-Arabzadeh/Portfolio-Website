"use strict";

import domGenerator from "dom-generator";

const dataLang = [
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

export default function selectLang() {
  return domGenerator({
    tag: "div",
    attributes: { class: "lang-container" },
    children: [
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
}

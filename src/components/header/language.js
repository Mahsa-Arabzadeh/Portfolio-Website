import domGenerator from "dom-generator";

const dataLang = [
  {
    svgSrc: "/images/Grouparrow.svg",
  },
  {
    languages: [
      {
        language: "EN",
      },
      {
        language: "IR",
      },
      {
        language: "UA",
      },
    ],
  },
];

function selectLang() {
  const langSelect = domGenerator({
    tag: "div",
    attributes: { class: "lang-container" },
    children: [
      {
        tag: "img",
        attributes: {
          class: "select-svg",
          src: dataLang.forEach((item) => {
            if (item.svgSrc) {
              return item.svgSrc;
            } else null;
          }),
        },
      },
      {
        tag: "select",
        attributes: { class: "select-lang" },
        children: dataLang.flatMap((item) => {
          if (item.languages) {
            return item.languages.map((lang) => ({
              tag: "span",
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

  console.log(langSelect);

  return langSelect;
}

function optionLang(language) {
  const options = domGenerator({
    tag: "option",
    attributes: { class: "option-lang" },
    properties: { textContent: language },
  });

  return options;
}

export default selectLang;

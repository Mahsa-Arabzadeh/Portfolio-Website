"use strict";

import domGenerator from "dom-generator";
import { skillSectionData } from "./data";

function rowGenerator(props) {
  const { imgSrc1, imgSrc2, imgSrc3 } = props;

  return domGenerator({
    tag: "div",
    attributes: { class: "row-left-sec" },
    children: [
      {
        tag: "img",
        attributes: { src: imgSrc1 ?? "", class: "imgsrc1" },
      },
      {
        tag: "img",
        attributes: { src: imgSrc2 ?? "", class: "imgsrc2" },
      },
      {
        tag: "img",
        attributes: { src: imgSrc3 ?? "", class: "imgsrc3" },
      },
    ],
  });
}

export default function leftSection() {
  const row = skillSectionData.map((data) => {
    const rowTag = rowGenerator(data);

    return {
      tag: rowTag,
    };
  });

  return domGenerator({
    tag: "div",
    attributes: { class: "left-section" },
    children: row.map((data) => ({
      tag: data.tag,
    })),
  });
}

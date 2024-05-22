"use strcit";

import domGenerator from "dom-generator";

export default function imageAbout() {
  return domGenerator({
    tag: "div",
    attributes: { class: "image-about" },
  });
}

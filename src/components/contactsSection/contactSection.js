"use strict";

import domGenerator from "dom-generator";

export default function contactSection() {
  return domGenerator({
    tag: "contact",
    attributes: { class: "contact-section" },
  });
}

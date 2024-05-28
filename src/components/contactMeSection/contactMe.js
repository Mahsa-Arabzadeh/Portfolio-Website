"use strict";

import domGenerator from "dom-generator";
import contactForm from "./contactForm";

export default function contactMeSection() {
  return domGenerator({
    tag: "section",
    attributes: { class: "section-contactme" },
    children: [
      {
        tag: contactForm(),
      },
    ],
  });
}

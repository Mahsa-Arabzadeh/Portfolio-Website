"use strict";

import domGenerator from "dom-generator";
import contactForm from "./contactForm";
import topSeciton from "../topSections/topSection";

export default function contactMeSection() {
  return domGenerator({
    tag: "section",
    attributes: { class: "section-contactme" },
    children: [
      {
        tag: topSeciton("contacts"),
      },
      {
        tag: "div",
        attributes: { class: "main-contacts" },
        children: [
          {
            tag: contactForm(),
          },
        ],
      },
    ],
  });
}

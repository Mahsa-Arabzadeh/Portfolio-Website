"use strict";

import domGenerator from "dom-generator";
import headerLogo from "../header/headerLogo";

export default function contactSection() {
  return domGenerator({
    tag: "div",
    attributes: { class: "top-footer" },
    children: [],
  });
}

function leftFooter(props) {
  const { email, introduction } = props;
  return domGenerator({
    tag: "div",
    attributes: { class: "left-footer" },
    children: [
      {
        tag: "div",
        children: [
          {
            tag: headerLogo(),
          },
        ],
      },
      {
        tag: "div",
      },
    ],
  });
}

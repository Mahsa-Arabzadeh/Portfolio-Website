"use strict";

import domGenerator from "dom-generator";
import topFooter from "./topFooter";
import copyRight from "./copyRight";
import { footerData } from "./data";

export default function footer() {
  return domGenerator({
    tag: "footer",
    attributes: { id: "footer" },
    children: [
      {
        tag: topFooter(),
      },
      {
        tag: copyRight(footerData),
      },
    ],
  });
}

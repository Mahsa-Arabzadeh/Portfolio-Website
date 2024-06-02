"use strcit";

import domGenerator from "dom-generator";

export default function scrollBar() {
  const scroll = domGenerator({
    tag: "div",
    children: [
      {
        tag: "div",
        attributes: { id: "progress-bar" },
      },
      {
        tag: "div",
        attributes: { id: "scroll-path" },
      },
    ],
  });

  const progress = document.getElementById("progress-bar");
  const totalHeight = document.body.scrollHeight - window.innerHeight;

  window.onscroll = function () {
    const progressHeight = (window.pageYOffset / totalHeight) * 100;

    progress.style.height = progressHeight + "%";
  };

  return scroll;
}

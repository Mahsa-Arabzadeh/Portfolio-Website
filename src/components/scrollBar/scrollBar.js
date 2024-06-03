"use strcit";

import domGenerator from "dom-generator";

const scroll = document.createElement("div");
const progressBar = document.createElement("div");
const scrollPath = document.createElement("div");
progressBar.setAttribute("id", "progress-bar");
scrollPath.setAttribute("id", "scroll-path");
scroll.appendChild(progressBar);
scroll.appendChild(scrollPath);

let totalHeight = document.body.scrollHeight - window.innerHeight;

window.onscroll = function () {
  let progressHeight = (window.pageYOffset / totalHeight) * 100;

  progressBar.style.height = progressHeight + "%";
};
export default function scrollBar() {
  // const scroll = domGenerator({
  //   tag: "div",
  //   children: [
  //     {
  //       tag: "div",
  //       attributes: { id: "progress-bar" },
  //     },
  //     {
  //       tag: "div",
  //       attributes: { id: "scroll-path" },
  //     },
  //   ],
  // });
  return scroll;
}

// function dimension() {
//   const progress = document.getElementById("progress-bar");

//   console.log(progress);
// }

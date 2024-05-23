"use strcit";

import domGenerator from "dom-generator";

export default function imageAbout(props) {
  let { profile, shape } = props;

  return domGenerator({
    tag: "div",
    attributes: { class: "image-about" },
    children: [
      {
        tag: "img",
        attributes: { class: "profile-about", src: profile },
      },
      {
        tag: "img",
        attributes: { class: "shape-about", src: shape },
      },
      {
        tag: "img",
        attributes: { class: "shape-about", src: shape },
      },
    ],
  });
}

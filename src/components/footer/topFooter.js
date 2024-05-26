"use strict";

import domGenerator from "dom-generator";
import logoGenerator from "../logoGenerator/logoGenerator";
import { logoData } from "../logoGenerator/data";
import { footerData } from "./data";
import footer from "./footer";

export default function topFooter() {
  return domGenerator({
    tag: "div",
    attributes: { class: "top-footer" },
    children: [
      {
        tag: leftFooter(footerData),
      },
      {
        tag: mediaFooter(),
      },
    ],
  });
}

function leftFooter(props) {
  const { email, carrier } = props;
  return domGenerator({
    tag: "div",
    attributes: { class: "left-footer" },
    children: [
      {
        tag: "div",
        children: [
          {
            tag: logoGenerator(logoData),
          },
          {
            tag: "a",
            attributes: { href: `mailto: ${email}` },
            properties: { textContent: email },
          },
        ],
      },
      {
        tag: "h3",
        properties: { textContent: carrier },
      },
    ],
  });
}

function mediaFooter() {
  const mediaImg = footerData.media.map((data) => {
    console.log(data);
    return { tag: mediaImgGenerator(data.imgSrc, data.href) };
  });

  return domGenerator({
    tag: "div",
    attributes: { class: "media-footer" },
    children: [
      {
        tag: "h3",
        properties: { textContent: "Media" },
      },
      {
        tag: "div",
        attributes: { class: "media-container" },
        children: mediaImg.map((data) => ({
          tag: data.tag,
        })),
      },
    ],
  });
}

function mediaImgGenerator(srcImg, hrefImg) {
  return domGenerator({
    tag: "a",
    attributes: { href: hrefImg, target: "_blank" },
    children: {
      tag: "img",
      attributes: { class: "media-img", src: srcImg },
    },
  });
}

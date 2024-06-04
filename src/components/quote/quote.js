"use strict";

import axios from "axios";
import domGenerator from "dom-generator";
import quoteData from "./data";

export default function randomQuote(props) {
  let { randomText, author, quoteSvg } = props;

  return domGenerator({
    tag: "section",
    attributes: { class: "quote-section" },
    children: [
      {
        tag: "div",
        attributes: { class: "border-container" },
        children: [
          {
            tag: "div",
            attributes: { class: "quote-border" },
            children: [
              {
                tag: "img",
                attributes: {
                  class: "quote-svg-top",
                  src: (quoteSvg = quoteData
                    .map((data) => data.quoteSvg)
                    .join("")),
                },
              },
              {
                tag: "h2",
                dataAttributes: { medium: "medium" },
                attributes: { class: "quote-text" },
                properties: {
                  textContent: (randomText = quoteData.map(
                    (data) => data.randomText
                  )).join(""),
                },
              },
            ],
          },
          {
            tag: "div",
            attributes: { class: "quote-border" },
            children: [
              {
                tag: "img",
                attributes: {
                  class: "quote-svg-bottom",
                  src: (quoteSvg = quoteData
                    .map((data) => data.quoteSvg)
                    .join("")),
                },
              },
              {
                tag: "h2",
                attributes: { class: "quote-text" },
                properties: {
                  textContent: (author = quoteData.map(
                    (data) => data.author
                  )).join(""),
                },
              },
            ],
          },
        ],
      },
    ],
  });
}

// * get data api from random api quote with axios
function getDataAxios() {
  axios
    .get("https://api.adviceslip.com/advice")
    .then((res) => {
      console.log(res);
      randomQuote();
    })
    .catch((error) => {
      console.log(error);
    });
}

const btn = document
  .querySelector(".btn")
  .addEventListener("click", getDataAxios);

"use strict";

import axios from "axios";
import domGenerator from "dom-generator";

export default function randomQuote(randomText, author) {
  const quoteSection = document.querySelector(".quote-section");

  if (quoteSection) {
    quoteSection.querySelector(".quote-text").textContent = randomText;
    quoteSection.querySelector(
      ".quote-author"
    ).textContent = `Advice# ${author}`;
  } else {
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
                    src: "./images/quote.svg",
                  },
                },
                {
                  tag: "h2",
                  dataAttributes: { medium: "medium" },
                  attributes: { class: "quote-text" },
                  properties: {
                    textContent: randomText,
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
                    src: "./images/quote.svg",
                  },
                },
                {
                  tag: "h2",
                  attributes: { class: "quote-author" },
                  properties: {
                    textContent: `Advice# ${author}`,
                  },
                },
              ],
            },
          ],
        },
      ],
    });
  }
}

// * recieve random quote from api via axios package
export function getDataAxios() {
  axios
    .get("https://api.adviceslip.com/advice")
    .then((res) => {
      const advice = res.data.slip.advice;
      const adviceId = res.data.slip.id;

      const quoteElem = randomQuote(advice, adviceId);

      if (quoteElem) {
        const container = document.getElementById("quote-container");
        container.innerHTML = ""; // remove content of randomQuote
        container.appendChild(quoteElem); // add new content to randomQuote
      }
    })
    .catch((error) => {
      throw new Error(error);
    });
}

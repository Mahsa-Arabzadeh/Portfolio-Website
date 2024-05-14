import domGenerator from "dom-generator";
import quoteData from "./data";

function randomQuote(props) {
  let { randomText, author, quoteSvg } = props;

  const quote = domGenerator({
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

  return quote;
}

export default randomQuote;

// todo:
// ? we can use api for random quote.

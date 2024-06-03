"use strict";

import domGenerator from "dom-generator";

export default function button(props) {
  let {
    btnClass,
    startImg,
    shape,
    textContent,
    endImg,
    anchorLink,
    btnSize,
    disable,
    eventListeners,
    type,
    download,
  } = props;

  const attributes = {
    class: `btn-default ${btnClass}`,
    href: anchorLink ?? "#",
    type: type,
  };

  if (disable) {
    attributes.disabled = true;
  }
  if (download) {
    attributes.download = download;
  }

  return domGenerator({
    tag: "a",
    attributes,
    eventListeners,
    dataAttributes: { size: btnSize, shape: shape },
    children: [
      {
        tag: "img",
        attributes: { src: startImg ?? "" },
      },
      {
        tag: "span",
        properties: { textContent: textContent },
      },
      {
        tag: "img",
        attributes: { src: endImg ?? "" },
      },
    ],
  });
}

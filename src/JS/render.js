"use strict";

function prepend(...elements) {
  const prepend = elements.forEach((element) => {
    document.body.prepend(element);
  });

  return prepend;
}

function render(...elements) {
  const render = elements.forEach((element) => {
    document.body.appendChild(element);
  });
  return render;
}

export { prepend, render };

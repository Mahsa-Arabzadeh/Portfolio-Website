"use strict";

window.addEventListener("mousemove", dimentionMouse);

export default function mouseMove() {
  const mouse = document.createElement("div");
  const cursorDot = document.createElement("div");
  const cursorOutline = document.createElement("div");
  cursorDot.setAttribute("class", "cursor-dot");
  cursorOutline.setAttribute("class", "cursor-outline");
  mouse.appendChild(cursorDot);
  mouse.appendChild(cursorOutline);

  return mouse;
}

function dimentionMouse(e) {
  const cursorDot = document.querySelector(".cursor-dot");
  const cursorOutline = document.querySelector(".cursor-outline");

  const posX = e.clientX;
  const posY = e.clientY;
  cursorDot.style.left = `${posX}px`;
  cursorDot.style.top = `${posY}px`;

  cursorOutline.style.left = `${posX}px`;
  cursorOutline.style.top = `${posY}px`;

  // set animation
  cursorOutline.animate(
    {
      left: `${posX}px`,
      top: `${posY}px`,
    },
    { duration: 300, fill: "forwards" }
  );
}

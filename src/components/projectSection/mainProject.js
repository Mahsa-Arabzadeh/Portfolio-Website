"use strict";

import domGenerator from "dom-generator";
import { projects } from "./data";
import button from "../buttonComponent/button";
// * swiper js
import Swiper from "swiper";
// import Swiper styles
import "swiper/css";

export function cards(props) {
  let {
    bannerProject,
    tools,
    title,
    paragraph,
    liveLink,
    githubLink,
    disable,
  } = props;

  return domGenerator({
    tag: "div",
    attributes: { class: "card-project swiper-slide", id: "slide" },
    children: [
      {
        tag: "img",
        attributes: {
          class: "project-banner",
          src: bannerProject,
        },
      },
      {
        tag: "div",
        attributes: { class: "tools-project" },
        properties: { textContent: tools },
      },
      {
        tag: "div",
        attributes: { class: "description-project" },
        children: [
          {
            tag: "h3",
            attributes: { class: "description-title" },
            properties: { textContent: title },
          },
          {
            tag: "p",
            attributes: { class: "description-p" },
            properties: { textContent: paragraph },
          },
          {
            tag: "div",
            attributes: { class: "btn-part" },
            children: [
              {
                tag: button({
                  shape: "primary-border",
                  btnSize: "small",
                  endImg: "./images/Live _~_.svg",
                  anchorLink: liveLink,
                  target: "_blank",
                  btnClass: "",
                }),
              },
              {
                tag: button({
                  shape: "secondry-border",
                  btnSize: "small",
                  endImg: "./images/Live _~git_.svg",
                  anchorLink: githubLink,
                  target: "_blank",
                  btnClass: "",
                }),
              },
            ],
          },
        ],
      },
    ],
  });
}

export default function mainProjects() {
  const cardsTag = projects.map((data) => {
    let {
      bannerProject,
      tools,
      title,
      paragraph,
      liveLink,
      githubLink,
      disable,
    } = data;
    const card = cards({
      bannerProject,
      tools,
      title,
      paragraph,
      liveLink,
      githubLink,
      disable,
    });

    return {
      tag: card,
    };
  });

  const mainProject = domGenerator({
    tag: "div",
    attributes: { class: "project-sec-main swiper mySwiper" },
    children: [
      {
        tag: "div",
        attributes: { class: "swiper-wrapper" }, // Add swiper-wrapper
        children: cardsTag.map((item) => ({
          tag: item.tag,
        })),
      },
      // Add navigation buttons if needed
      {
        tag: "div",
        attributes: { class: "swiper-button-next" },
      },
      {
        tag: "div",
        attributes: { class: "swiper-button-prev" },
      },
    ],
  });

  // Initialize Swiper
  setTimeout(() => {
    const swiper = new Swiper(".mySwiper", {
      slidesPerView: "auto",
      spaceBetween: 10,
      loop: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  }, 0); // Delay to ensure DOM is ready

  return mainProject;
}

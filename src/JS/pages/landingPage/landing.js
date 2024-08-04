"use strict";

import { prepend, render } from "../../render";
import headerGenerator from "../../../components/header/header";
import heroSection from "../../../components/heroSection/heroSection";
import randomQuote, { getDataAxios } from "../../../components/quote/quote";
import projectSection from "../../../components/projectSection/projects";
import skillSection from "../../../components/skillSection/skillSection";
import aboutMeSection from "../../../components/aboutMeSection/aboutMeSection";
import contactMeSection from "../../../components/contactMeSection/contactMe";
import footer from "../../../components/footer/footer";
import { append } from "../../render";
import mouseMove from "../../../components/mouseMove/mouseMove";
import "../../../styles/main.scss";
import sideBar from "../../../components/sideBar/renderSideBar";

document.addEventListener("DOMContentLoaded", function () {
  prepend(headerGenerator(), sideBar());

  render(
    heroSection(),
    randomQuote(),
    projectSection(),
    skillSection(),
    aboutMeSection(),
    contactMeSection(),
    mouseMove()
  );

  append(footer());

  getDataAxios();
});

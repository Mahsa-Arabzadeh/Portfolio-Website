"use strict";

import { prepend, render } from "../../render";
import headerGenerator from "../../../components/header/header";
import heroSection from "../../../components/heroSection/heroSection";
import randomQuote from "../../../components/quote/quote";
import "../../../styles/main.scss";
import quoteData from "../../../components/quote/data";
import projectSection from "../../../components/projectSection/projects";
import skillSection from "../../../components/skillSection/skillSection";
import aboutMeSection from "../../../components/aboutMeSection/aboutMeSection";

document.addEventListener("DOMContentLoaded", function () {
  prepend(headerGenerator());

  render(
    heroSection(),
    randomQuote(quoteData),
    projectSection(),
    skillSection(),
    aboutMeSection()
  );
});

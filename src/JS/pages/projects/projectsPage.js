"use strict";

import domGenerator from "dom-generator";
import { render, prepend, append } from "../../render";
import headerGenerator from "../../../components/header/header";
import footer from "../../../components/footer/footer";
import { projectsDataPage } from "./data";
import { miniProjects, topProjectsPage } from "./mainProjects";
import { mainProjectPage } from "./mainProjects";
import "../../../styles/main.scss";
import mouseMove from "../../../components/mouseMove/mouseMove";

export default function renderProjectsPage() {
  prepend(headerGenerator());

  render(
    topProjectsPage(projectsDataPage),
    mainProjectPage(),
    miniProjects(),
    mouseMove()
  );

  append(footer());
}

setTimeout(() => {
  renderProjectsPage();
}, 0);

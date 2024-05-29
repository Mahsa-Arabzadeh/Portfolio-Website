"use strict";

import domGenerator from "dom-generator";
import { render, prepend, append } from "../../render";
import headerGenerator from "../../../components/header/header";
import footer from "../../../components/footer/footer";

export default function renderProjectsPage() {
  prepend(headerGenerator());

  append(footer());
}

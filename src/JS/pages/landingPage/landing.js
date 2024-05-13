import { prepend, render } from "../../render";
import headerGenerator from "../../../components/header/header";
import heroSection from "../../../components/heroSection/heroSection";
import "../../../styles/main.scss";

document.addEventListener("DOMContentLoaded", function () {
  prepend(headerGenerator());

  render(heroSection());
});

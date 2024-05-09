import navBarGenerator from "../components/header/navBar";
import selectLang from "../components/header/language";
import headerGenerator from "../components/header/header";
import "../styles/main.scss";

const body = document.body;
body.appendChild(headerGenerator());

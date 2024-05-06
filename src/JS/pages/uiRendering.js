import renderHeader from "../../components/header/header";

document.addEventListener("DOMContentLoaded", uiRendering);

function uiRendering() {
  document.body.prepend(renderHeader);
}

export default uiRendering;

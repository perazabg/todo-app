import { project } from "./project";
import { task } from "./task";

function createMain() {
  // grabs content div
  const content = document.getElementById("content");

  const main = document.createElement("div");
  main.classList.add("main");
  main.textContent = "";

  //add main div to content
  content.append(main);
}

export default createMain;

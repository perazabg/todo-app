import project from "./project";
import Task from "./task";

export default function createMain() {
  // grabs content div
  const content = document.getElementById("content");

  const main = document.createElement("div");
  main.classList.add("main");
  main.textContent = "";

  //add main div to content
  content.appendChild(main);
}

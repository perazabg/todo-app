import Project from "../project";
import Task from "../task";

export default function createMain() {
  // grabs content div
  const content = document.getElementById("content");

  const main = document.createElement("div");
  main.classList.add("main");
  main.innerHTML = "";

  //add main div to content
  content.appendChild(main);

  function clearMain() {
    main.innerHTML = "";
  }
}

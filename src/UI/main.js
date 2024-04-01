import Project from "../project";
import Task from "../task";

const main = (() => {
  const content = document.getElementById("content");

  const main = document.createElement("div");
  main.classList.add("main");
  main.id = "main";
  main.innerHTML = "";
  content.appendChild(main);

  return {};
})();

export default main;

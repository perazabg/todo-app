import Project from "../project";
import Task from "../task";

const main = (() => {
  const content = document.getElementById("content");

  function createMain() {
    const main = document.createElement("div");
    main.classList.add("main");
    main.innerHTML = "";
    content.appendChild(main);
    return main;
  }

  return {
    createMain,
  };
})();

export default main;

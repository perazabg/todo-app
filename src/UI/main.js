import Project from "../project";
import Task from "../task";

const main = (() => {
  const content = document.getElementById("content");

  const main = document.createElement("div");
  main.classList.add("main");
  main.id = "main";
  main.innerHTML = "";
  content.appendChild(main);

  function renderMain() {
    const tasks = JSON.parse(localStorage.getItem("tasks"));

    if (!tasks) {
      return;
    }

    tasks.forEach((task) => {
      const taskContainer = document.createElement("div");
      taskContainer.classList.add("taskContainer");
    });

    main.appendChild(taskContainer);
  }

  return {
    renderMain,
  };
})();

export default main;

// this module renders tasks and projects in main
import projects from "./project";
import task from "./task";
import main from "./UI/main";
import sidebar from "./UI/sidebar";

const taskSubmit = document.getElementById("taskSubmit");
const projectSubmit = document.getElementById("projectSubmit");

taskSubmit.addEventListener("click", () => {
  let taskTitle = document.getElementById("taskTitle").value;
  let taskDescription = document.getElementById("taskDescription").value;
  let taskDueDate = document.getElementById("taskDueDate").value;
  let taskPriority = document.getElementById("taskPriority").value;

  const newTask = task.addTask(taskTitle, taskDescription, taskDueDate);
  localStorage.setItem("tasks", JSON.stringify(newTask));
});

const render = (() => {
  function renderTask(task) {
    const taskContainer = document.createElement("div"); //here error
    taskContainer.classList.add("taskContainer");

    const taskTitle = document.createElement("div");
    const taskDescription = document.createElement("div");
    const taskDueDate = document.createElement("div");
    const taskPriority = document.createElement("div");

    taskTitle.classList.add("taskTitle");
    taskDescription.classList.add("taskDescription");
    taskDueDate.classList.add("taskDueDate");
    taskPriority.classList.add("taskPriority");

    taskTitle.textContent = task.title;
    taskDescription.textContent = task.description;
    taskDueDate.textContent = task.dueDate;
    taskPriority.textContent = task.priority;

    taskContainer.appendChild(taskTitle);
    taskContainer.appendChild(taskDescription);
    taskContainer.appendChild(taskDueDate);
    taskContainer.appendChild(taskPriority);

    return taskContainer;
  }

  function renderProjects(project) {
    const projectContainer = document.createElement("div");
    projectContainer.classList.add("projectContainer");
    sidebar.projectsListContainer.appendChild(projectContainer);
  }

  return {
    renderTask,
    renderProjects,
  };
})();

export default render;

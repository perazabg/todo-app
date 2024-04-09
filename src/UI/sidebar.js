// creates sidebar html
import project from "../project";
import events from "../events";

const sidebar = (() => {
  const content = document.getElementById("content");

  const sidebar = document.createElement("div");
  sidebar.classList.add("sidebar");
  sidebar.id = "sidebar";

  const inbox = document.createElement("div");
  inbox.classList.add("inbox");
  inbox.id = "inbox";
  inbox.textContent = "Inbox";
  sidebar.appendChild(inbox);

  const newTaskBtn = document.createElement("button");
  newTaskBtn.classList.add("newTaskBtn");
  newTaskBtn.id = "newTaskBtn";
  newTaskBtn.textContent = "New Task";
  inbox.appendChild(newTaskBtn);

  const newProjectBtn = document.createElement("button");
  newProjectBtn.classList.add("newProjectBtn");
  newProjectBtn.id = "newProjectBtn";
  newProjectBtn.textContent = "New Project";
  sidebar.appendChild(newProjectBtn);

  const projectsContainer = document.createElement("div");
  projectsContainer.classList.add("projectsContainer");
  projectsContainer.id = "projectsContainer";
  sidebar.appendChild(projectsContainer);

  content.appendChild(sidebar);

  function addProject(project) {
    const newProject = document.createElement("div");
    newProject.classList.add("newProject");
    newProject.id = project.title;
    newProject.textContent = project.title;
    projectsContainer.appendChild(newProject);
  }

  function deleteProject(project) {
    const projectIndex = projectList.indexOf(project);
    projectList.splice(projectIndex, 1);
  }

  // event listeners (could be moved to events.js)
  newTaskBtn.addEventListener("click", () => {
    const taskDialog = document.getElementById("taskDialog");
    taskDialog.showModal();
  });

  newProjectBtn.addEventListener("click", () => {
    const projectDialog = document.getElementById("projectDialog");
    projectDialog.showModal();
  });

  /*
  taskSubmit.addEventListener("click", () => {
    let taskTitle = document.getElementById("taskTitle").value;
    let taskDescription = document.getElementById("taskDescription").value;
    let taskDueDate = document.getElementById("taskDueDate").value;
    let taskPriority = document.getElementById("taskPriority").value;

    const newTask = task.addTask(
      taskTitle,
      taskDescription,
      taskDueDate,
      taskPriority
    );

    localStorage.setItem("tasks", JSON.stringify(taskList));
  }); 
  */

  return {
    addProject,
    deleteProject,
  };
})();

export default sidebar;

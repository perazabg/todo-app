import Project from "../project";
import Task from "../task";
import main from "../UI/main";

const sidebar = () => {
  let projectList = [];
  const content = document.getElementById("content");

  const sidebar = document.createElement("div");
  sidebar.classList.add("sidebar");

  const newTaskBtn = document.createElement("div");
  newTaskBtn.classList.add("new-task-btn");
  newTaskBtn.textContent = "+";
  sidebar.appendChild(newTaskBtn);

  const inbox = document.createElement("div");
  inbox.classList.add("inbox");
  inbox.textContent = "Inbox";
  sidebar.appendChild(inbox);

  const notes = document.createElement("div");
  notes.classList.add("notes");
  notes.textContent = "Notes";
  sidebar.appendChild(notes);

  const projects = document.createElement("div");
  projects.classList.add("projects");
  projects.textContent = "Projects";
  sidebar.appendChild(projects);

  const newProjectBtn = document.createElement("div");
  newProjectBtn.classList.add("new-project-btn");
  newProjectBtn.textContent = "+";
  sidebar.appendChild(newProjectBtn);

  const projectsListContainer = document.createElement("div");
  projectsListContainer.classList.add("projects-list");
  sidebar.appendChild(projectsListContainer);

  content.appendChild(sidebar);

  newTaskBtn.addEventListener("click", () => {
    const taskDialog = document.getElementById("taskDialog");
    taskDialog.showModal();
  });

  newProjectBtn.addEventListener("click", () => {
    const projectDialog = document.getElementById("projectDialog");
    projectDialog.showModal();
  });

  const taskSubmit = document.getElementById("taskSubmit");
  taskSubmit.addEventListener("click", () => {
    let title = document.getElementById("title").value;
    let description = document.getElementById("description").value;
    let dueDate = document.getElementById("dueDate").value;
    let priority = document.querySelector(
      'input[name="priority"]:checked'
    ).value;
    let task = Task.addTask(title, description, dueDate, priority);
    localStorage.setItem("tasks", JSON.stringify(task));
    // render main
    console.log(task);
  });

  const projectSubmit = document.getElementById("projectSubmit");
  projectSubmit.addEventListener("click", () => {
    let title = document.getElementById("title").value;
    let project = Project.addProject(title);
    console.log(project);
    //projectList.push(project);
    localStorage.setItem("projects", JSON.stringify(projectList));
    // update projectsList

    console.log(projectList);
  });

  const taskCancel = document.getElementById("taskCancel");
  taskCancel.addEventListener("click", () => {
    const taskDialog = document.getElementById("taskDialog");
    taskDialog.close();
  });

  const projectCancel = document.getElementById("projectCancel");
  projectCancel.addEventListener("click", () => {
    const projectDialog = document.getElementById("projectDialog");
    projectDialog.close();
  });

  return {
    newTaskBtn,
    inbox,
    notes,
    projects,
    newProjectBtn,
    projectsListContainer,
  };
};

export default sidebar;

import Project from "../project";
import Task from "../task";
import main from "../UI/main";
import events from "../events";

const sidebar = (() => {
  Project.projectList = JSON.parse(localStorage.getItem("projects")) || [];

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

  // Event listeners for new task and new project buttons

  newTaskBtn.addEventListener("click", () => {
    const taskDialog = document.getElementById("taskDialog");
    taskDialog.showModal();
  });

  newProjectBtn.addEventListener("click", () => {
    const projectDialog = document.getElementById("projectDialog");
    projectDialog.showModal();
  });

  // Event listener for task submission

  const taskSubmit = document.getElementById("taskSubmit");
  taskSubmit.addEventListener("click", () => {
    // Get task details from form
    let title = document.getElementById("title").value;
    let description = document.getElementById("description").value;
    let dueDate = document.getElementById("dueDate").value;
    let priority = document.querySelector(
      'input[name="priority"]:checked'
    ).value;

    // Create task and save to localStorage
    let task = Task.addTask(title, description, dueDate, priority);
    localStorage.setItem("tasks", JSON.stringify(task));

    // Render task in main UI
    renderMain();
  });

  // Event listener for project submission

  const projectSubmit = document.getElementById("projectSubmit");
  projectSubmit.addEventListener("click", () => {
    // Get project title from form
    let title = document.getElementById("projectTitle").value;

    // Create project and update projectList
    Project.addProject(title);

    // Update projects list UI
    renderProjectsList();
  });

  // Function to render projects list

  const renderProjectsList = () => {
    //projectsListContainer.innerHTML = ""; // Clear previous list
    //get projects from localStorage
    if (!localStorage.getItem("projects")) {
      projectsListContainer.innerHTML = "";
    }

    let projectList = JSON.parse(localStorage.getItem("projects"));

    projectList.forEach((project, index) => {
      const projectContainer = document.createElement("div");
      projectContainer.classList.add("projectContainer");
      projectsListContainer.appendChild(projectContainer);
    });
  };

  // Call renderProjectsList initially
  renderProjectsList();

  // Event listeners for cancel buttons

  taskCancel.addEventListener("click", () => {
    const taskDialog = document.getElementById("taskDialog");
    taskDialog.close();
  });

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
})();

export default sidebar;

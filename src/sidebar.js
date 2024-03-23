function createSidebar() {
  // grabs content div for sidebar
  const content = document.getElementById("content");

  const sidebar = document.createElement("div");
  sidebar.classList.add("sidebar");

  const inbox = document.createElement("div");
  inbox.classList.add("inbox");
  sidebar.append(inbox);

  const newTaskBtn = document.createElement("div");
  newTask.classList.add("new-task-btn");
  sidebar.append(newTaskBtn);

  const newProjectBtn = document.createElement("div");
  newProject.classList.add("new-project-btn");
  sidebar.append(newProjectBtn);

  content.appendChild(sidebar);
}

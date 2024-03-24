export default function createSidebar() {
  // grabs content div for sidebar
  const content = document.getElementById("content");

  const sidebar = document.createElement("div");
  sidebar.classList.add("sidebar");

  const inbox = document.createElement("div");
  inbox.classList.add("inbox");
  sidebar.appendChild(inbox);

  const newTaskBtn = document.createElement("div");
  newTaskBtn.classList.add("new-task-btn");
  sidebar.appendChild(newTaskBtn);

  const newProjectBtn = document.createElement("div");
  newProjectBtn.classList.add("new-project-btn");
  sidebar.appendChild(newProjectBtn);

  content.appendChild(sidebar);
}

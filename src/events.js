import header from "./UI/header";
import sidebar from "./UI/sidebar";
import main from "./UI/main";
import task from "./task";
import project from "./project";

const taskDialog = document.getElementById("taskDialog");
const projectDialog = document.getElementById("projectDialog");
const taskSubmit = document.getElementById("taskSubmit");

sidebar.newTaskBtn.addEventListener("click", () => {
  form.reset();
  taskDialog.showModal();
});

taskSubmit.addEventListener("click", () => {
  taskDialog.close();
  task.addTask(
    document.getElementById("title").value,
    document.getElementById("description").value,
    document.getElementById("dueDate").value,
    document.getElementById("priority").value
  );
  main.clearMain();
  main.createMain();
});

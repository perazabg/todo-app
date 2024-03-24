export class Task {
  constructor(title, description, priority, dueDate, isCompleted = false) {
    this.title = title;
    this.description = description;
    this.priority = priority;
    this.dueDate = dueDate;
    this.isCompleted = isCompleted;
  }

  //create new task html
  createTask() {
    const task = document.createElement("div");
    task.classList.add("task");
    task.innerHTML = `
    <div class="task-title">${this.title}</div>
    <div class="task-description">${this.description}</div>
    <div class="task-priority">${this.priority}</div>
    <div class="task-due-date">${this.dueDate}</div>
    <button class="edit-task-btn">Edit</button>
    <button class="complete-task-btn">Complete</button>
    <button class="delete-task-btn">Delete</button>`;
    return task;
  }

  // get functions
  getTitle() {
    return this.title;
  }
  getDescription() {
    return this.description;
  }

  getPriority() {
    return this.priority;
  }

  getDueDate() {
    return this.dueDate;
  }

  getIsCompleted() {
    return this.isCompleted;
  }

  // set functions
  setTitle(title) {
    this.title = title;
  }

  setDescription(description) {
    this.description = description;
  }

  setPriority(priority) {
    this.priority = priority;
  }

  setDueDate(dueDate) {
    this.dueDate = dueDate;
  }
}

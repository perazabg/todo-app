import { task } from "./task";

export class project {
  constructor(title) {
    this.title = title;
    this.tasks = [];
  }

  // get functions
  getTitle() {
    return this.title;
  }

  getTasks() {
    return this.tasks;
  }

  addTask(title, description, priority, dueDate) {
    this.tasks.push(new task(title, description, priority, dueDate));
  }

  removeTask(task) {
    const index = this.tasks.indexOf(task);
    if (index > -1) {
      this.tasks.splice(index, 1);
    }
  }
}

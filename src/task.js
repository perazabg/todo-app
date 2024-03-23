export class Task {
  constructor(title, description, priority, dueDate, date, project) {
    this.title = title;
    this.description = description;
    this.priority = priority;
    this.dueDate = dueDate;
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

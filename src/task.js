import projects from "./project";

const task = (() => {
  class Task {
    constructor(title, description, dueDate, priority, isCompleted = false) {
      this.title = title;
      this.description = description;
      this.dueDate = dueDate;
      this.priority = priority;
      this.isCompleted = isCompleted;
    }
  }

  function addTask(title, description, dueDate, priority) {
    const task = new Task(title, description, dueDate, priority);
    return task;
  }

  function deleteTask(projectList, index) {
    projectList.splice(index, 1);
  }

  return {
    Task,
    addTask,
    deleteTask,
  };
})();

export default task;

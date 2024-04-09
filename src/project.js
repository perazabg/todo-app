const project = (() => {
  class Project {
    constructor(title) {
      this.title = title;
      this.tasks = [];
    }
  }

  function addProject(title) {
    const project = new Project(title);
    return project;
  }

  function deleteProject(index) {
    if (projectList.length > 1) {
      projectList.splice(index, 1);
    }
  }

  return {
    Project,
    addProject,
    deleteProject,
  };
})();

export default project;

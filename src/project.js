import event from "./events";

const projects = (() => {
  let projectList = JSON.parse(localStorage.getItem("projects")) || [];

  class Projects {
    constructor(title) {
      this.title = title;
      this.tasks = [];
    }
  }

  function addProject(title) {
    const project = new Projects(title);
    projectList.push(project);
    return projectList;
  }

  function deleteProject(index) {
    if (projectList.length > 1) {
      projectList.splice(index, 1);
    }
  }

  function editProject(index, title) {
    projectList[index].title = title;
  }

  return {
    projectList,
    addProject,
    deleteProject,
    editProject,
  };
})();

export default projects;

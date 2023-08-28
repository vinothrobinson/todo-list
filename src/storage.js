import { taskList } from "./todo";
import { projectList } from "./project";

const storeLists = () => {
    let tasks = JSON.stringify(taskList);
    let projects = JSON.stringify(projectList);
    localStorage.setItem("tasks", tasks);
    localStorage.setItem("projects", projects);
}

const getLists = () => {
    let taskString = localStorage.getItem("tasks");
    let projectString = localStorage.getItem("projects");
    taskList = JSON.parse(taskString)
    projectList = JSON.parse(projectString)
}

export {storeLists, getLists}
import {addNewTask, displayTask, taskList} from "./todo";
import {addNewProject, addProjectTask, displayProject, projectList} from "./project"
import { storeLists, getLists } from "./storage";

// Creating the button to add a new task
const newTodo = document.querySelector(".new-todo");

// Activates the form for filling out info about tasks
export let isHidden = true;
newTodo.addEventListener("click", function() {
    if (isHidden) {
        const newTodoForm = document.querySelector("#new-todo-form");
        newTodoForm.style.display = "flex";
        isHidden = false;
    }
    else {
        const newTodoForm = document.querySelector("#new-todo-form");
        newTodoForm.style.display = "none";
        isHidden = true;
    }
})

document.querySelector("#new-todo-form").addEventListener("submit", function(event) {
    let currentPage = document.querySelector(".current-page");
    if (currentPage.innerHTML === "Home") {
        event.preventDefault();
        addNewTask();
    }

    else {
        event.preventDefault();
        addProjectTask();
    }
})

// Creating the button to add a new task
const newProject = document.querySelector(".new-project");

// Activates the form for filling out info about tasks
export let isHiddenP = true;
newProject.addEventListener("click", function() {
    if (isHiddenP) {
        const newProjectForm = document.querySelector("#new-project-form");
        newProjectForm.style.display = "flex";
        isHiddenP = false;
    }
    else {
        const newProjectForm = document.querySelector("#new-project-form");
        newProjectForm.style.display = "none";
        isHiddenP = true;
    }
})

document.querySelector("#new-project-form").addEventListener("submit", function(event) {
    event.preventDefault();
    addNewProject();
})

document.querySelector(".home-button").addEventListener("click", function() {
    let currentPage = document.querySelector(".current-page");
    currentPage.innerHTML = "Home"
    displayTask();
})

// This piece of code removes the "Confirm form resubmission" pop up
if ( window.history.replaceState ) {
    window.history.replaceState( null, null, window.location.href );
  }

/*
if(document.cookie.indexOf('mycookie')==-1) {
    // The cookie doesn't exist. Create it now
    document.cookie = 'mycookie=1';
    getLists()
    displayTask()
    displayProject()
}
else {
    // Not the first visit, so alert
    getLists()
    displayTask()
    displayProject()
}
*/

window.onload = function() {
    console.log("Onload function is being run")
    taskList = getLists()[0]
    projectList = getLists()[1]
    if (taskList ===  null || projectList === null) {
        taskList = [];
        projectList = [];
    }
    displayTask()
    displayProject()
}
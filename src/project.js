import { taskList, TodoItem, displayTask } from "./todo";
export let projectList = [];

// Todo-List Item Constructor
export class ProjectItem
{
    constructor(title, projectTasks) {
        this.title = title;
        this.projectTasks = projectTasks
    }

}

// Takes the user input and creates a book and adds it to the library
const addNewProject = () => {
    const form = document.querySelector("#new-project-form");
    form.style.display = "none";
    let title = document.querySelector("#project-title").value;
    let projectTasks = [];

    let newProjectItem = new ProjectItem(title, projectTasks);
    projectList.push(newProjectItem);
    displayProject()
}

const displayProject = () => {
    const projects = document.querySelector(".project-display")
    projects.replaceChildren();
    for (let i = 0; i < projectList.length; i++) {
        // console.log("Project is displayed")
        // Overall container for book information
        const project = document.createElement('div');
        project.classList.add("project");
        project.style.backgroundColor = "#e2e8f0"
        // Adding the elements of the book to the book element
        project.innerHTML = `
        <div class="title">${projectList[i].title}</div>
        <div class="remove">X</div>
        `
        projects.appendChild(project);
    }
    // Code to switch between different projects and view specific tasks
    let projectItems = document.querySelectorAll(".project")
    projectItems.forEach(function callback(p, index) {
        p.addEventListener("click", function() {
            let currentPage = document.querySelector(".current-page");
            currentPage.innerHTML = `${projectList[index].title}`;
            displayProjectTasks(projectList[index].projectTasks)
        })
    })

    let removeProjects = document.querySelectorAll(".remove")
    removeProjects.forEach(function callback(r, index) {
        r.addEventListener("click", function() {
            removeProject(index)
        })
    })
}

const removeProject = (index) => {
    let currentList = projectList[index].title
    for (let i = 0; i < taskList.length; i++) {
        if (taskList[i].projectName === currentList) {
            taskList.splice(i, 1);
        }
    }
    projectList.splice(index, 1);
    displayProject()
    let currentPage = document.querySelector(".current-page");
    currentPage.innerHTML = "Home"
    displayTask();
}

// Creates a task specific to the project, this task can be displayed in the Home tab as well.
const addProjectTask = () => {
    const form = document.querySelector("#new-todo-form");
    form.style.display = "none";

    let currentPage = document.querySelector(".current-page");
    let index =  projectList.findIndex(item => item.title === currentPage.innerHTML);

    let title = document.querySelector("#title").value;
    let description = document.querySelector("#description").value;
    let dueDate = document.querySelector("#due-date").value;
    if (dueDate === "") dueDate = "No Date";
    let priority = document.querySelector("#priority").value;
    let projectName = projectList[index].title

    let newTodoItem = new TodoItem(title, description, dueDate, priority, projectName);
    // Assigning the task to the correct project
    projectList[index].projectTasks.push(newTodoItem);
    taskList.push(newTodoItem)
    displayProjectTasks(projectList[index].projectTasks)
}

// This function is used to display the tasks that belong to the project
const displayProjectTasks = (projectTasks) => {
    // console.log("The code is not running")
    const tasks = document.querySelector(".task-display")
    tasks.replaceChildren();
    for (let i = 0; i < projectTasks.length; i++) {
        // Overall container for task information
        const task = document.createElement('div');
        task.classList.add("task");
        task.style.backgroundColor = "#e2e8f0"
        // Adding the elements of the task to the task element
        task.innerHTML = `
        <div class="complete p-complete"></div>
        <div class="task-info">
            <div class="title">${projectTasks[i].title}</div>
            <div class="description">${projectTasks[i].description}</div>
        </div>
        <div class="date">${projectTasks[i].dueDate}</div>
        `
        tasks.appendChild(task);
    }
    let complete = document.querySelectorAll(".complete")
    complete.forEach(function callback(c, index) {
        c.addEventListener("click", function(event) {
            // console.log(event.target.closest(".task"))
            // console.log(taskList[index])
            let selectedTask = event.target.closest(".task")
            selectedTask = (selectedTask.children[1])
            selectedTask = (selectedTask.children[0])
            // console.log(selectedTask)
            taskList.splice(index, 1)
            let currentPage = document.querySelector(".current-page");
            let pIndex = projectList.findIndex(item => item.title === currentPage.innerHTML);
            // console.log(pIndex)
            let currentList = projectList[pIndex].projectTasks
            // console.log(currentList)
            let currentTodoIndex = currentList.findIndex(item => item.title === selectedTask.innerHTML)
            // console.log(currentList[currentTodoIndex])
            currentList.splice(currentTodoIndex, 1);
            displayProjectTasks(currentList)
        }) // The above code removes a task from both the task list and the project list
    })
}

export {addNewProject, displayProject, addProjectTask, displayProjectTasks};
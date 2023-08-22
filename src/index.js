let defaultTask = [];

// Todo-List Item Constructor
class TodoItem
{
    constructor(title, description, dueDate, priority) {
        this.title = title;
	    this.description = description;
	    this.dueDate = dueDate;
	    this.priority = priority;
    }
}

// Creating the button to add a new task
const container = document.querySelector("#content")
const newTodo = document.querySelector(".new-todo");

// Activates the form for filling out info about tasks
let isHidden = true;
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

// Takes the user input and creates a book and adds it to the library
function addNewTask() {
    let title = document.querySelector("#title").value;
    let description = document.querySelector("#description").value;
    let dueDate = document.querySelector("#due-date").value;
    let priority = document.querySelector("#priority").value;

    let newTodoItem = new TodoItem(title, description, dueDate, priority);
    defaultTask.push(newTodoItem);
    displayTask()
}

function displayTask() {
    const tasks = document.querySelector(".task-display")
    tasks.replaceChildren();
    for (let i = 0; i < defaultTask.length; i++) {
        // Overall container for book information
        const task = document.createElement('div');
        task.classList.add("task");
        task.style.backgroundColor = "#d1d5db"
        // Adding the elements of the book to the book element
        task.innerHTML = `
        <div class="header-section">
            <button class="complete"></button>
            <div class="title">${defaultTask[i].title}</div>
            <div class="date">${defaultTask[i].dueDate}</div>
        </div>
        <div class="description">${defaultTask[i].description}</div>
        `
        tasks.appendChild(task);
    }
}

document.querySelector("#new-todo-form").addEventListener("submit", function(event) {
    event.preventDefault();
    addNewTask();
})

// This piece of code removes the "Confirm form resubmission" pop up
if ( window.history.replaceState ) {
    window.history.replaceState( null, null, window.location.href );
  }
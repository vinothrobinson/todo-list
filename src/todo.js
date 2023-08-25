let taskList = [];

// Todo-List Item Constructor
export class TodoItem
{
    constructor(title, description, dueDate, priority) {
        this.title = title;
	    this.description = description;
	    this.dueDate = dueDate;
	    this.priority = priority;
    }

}

// Takes the user input and creates a task and adds it to the task list
const addNewTask = () => {
    const form = document.querySelector("#new-todo-form");
    form.style.display = "none";
    let title = document.querySelector("#title").value;
    let description = document.querySelector("#description").value;
    let dueDate = document.querySelector("#due-date").value;
    if (dueDate === "") dueDate = "No Date";
    let priority = document.querySelector("#priority").value;

    let newTodoItem = new TodoItem(title, description, dueDate, priority);
    taskList.push(newTodoItem);
    displayTask()
}

const displayTask = () => {
    const tasks = document.querySelector(".task-display")
    tasks.replaceChildren();
    for (let i = 0; i < taskList.length; i++) {
        // Overall container for task information
        const task = document.createElement('div');
        task.classList.add("task");
        task.style.backgroundColor = "#e2e8f0"
        // Adding the elements of the task to the task element
        task.innerHTML = `
        <div class="complete"></div>
        <div class="task-info">
            <div class="title">${taskList[i].title}</div>
            <div class="description">${taskList[i].description}</div>
        </div>
        <div class="date">${taskList[i].dueDate}</div>
        `
        tasks.appendChild(task);
    }
    let complete = document.querySelectorAll(".complete")
    complete.forEach(function callback(c, index) {
        c.addEventListener("click", function() {
            taskList.splice(index, 1)
            displayTask()
        })
    })
}

export {addNewTask, displayTask};

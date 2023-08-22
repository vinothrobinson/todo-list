let defaultTask = [];

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

// Takes the user input and creates a book and adds it to the library
const addNewTask = () => {
    let title = document.querySelector("#title").value;
    let description = document.querySelector("#description").value;
    let dueDate = document.querySelector("#due-date").value;
    let priority = document.querySelector("#priority").value;

    let newTodoItem = new TodoItem(title, description, dueDate, priority);
    defaultTask.push(newTodoItem);
    displayTask()
}

const displayTask = () => {
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

export {addNewTask, displayTask};
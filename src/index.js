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
const container = document.querySelector("#content")
const newTodo = document.createElement("button");
newTodo.textContent = "+"
/*
const newTodoForm = document.createElement("div");
createTodoForm.innerHTML = `<form id="new-todo-form" action="" method="post" style="display: none">
        <label for="title">Title
            <input type="text" id="title" required>
        </label>
        <label for="description">Description
            <input type="text" id="description" required>
        </label>
        <label for="dueDate">Due Date
            <input type="date" id="due-date" required>
        </label>
        <label for="priority">Priority
            <input type="number" id="priority">
        </label>
    </form>
`
*/
content.appendChild(newTodo)
// content.appendChild(newTodoForm)

// This piece of code removes the "Confirm form resubmission" pop up
if ( window.history.replaceState ) {
    window.history.replaceState( null, null, window.location.href );
  }
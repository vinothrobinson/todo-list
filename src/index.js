import { addNewTask} from "./todo";

// Creating the button to add a new task
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

document.querySelector("#new-todo-form").addEventListener("submit", function(event) {
    event.preventDefault();
    addNewTask();
})

// This piece of code removes the "Confirm form resubmission" pop up
if ( window.history.replaceState ) {
    window.history.replaceState( null, null, window.location.href );
  }
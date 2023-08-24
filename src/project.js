let projectList = [];

// Todo-List Item Constructor
export class ProjectItem
{
    constructor(title) {
        this.title = title;
    }

}

// Takes the user input and creates a book and adds it to the library
const addNewProject = () => {
    const form = document.querySelector("#new-project-form");
    form.style.display = "none";
    let title = document.querySelector("#project-title").value;
    
    let newProjectItem = new ProjectItem(title);
    projectList.push(newProjectItem);
    displayProject()
}

const displayProject = () => {
    const projects = document.querySelector(".project-display")
    projects.replaceChildren();
    for (let i = 0; i < projectList.length; i++) {
        // Overall container for book information
        const project = document.createElement('div');
        project.classList.add("project");
        project.style.backgroundColor = "#e2e8f0"
        // Adding the elements of the book to the book element
        project.innerHTML = `
        <div class="title">${projectList[i].title}</div>
        `
        projects.appendChild(project);
    }
}

export {addNewProject, displayProject};
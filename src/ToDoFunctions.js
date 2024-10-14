
export const test = "Sup";

//functions: create, edit, delete To Do items; create, read, edit projects
export const ToDoController = (function () {

    let currentToDoItem;
    let projects = [];
    let currentProject;
    
    // return the current To Do item
    function getToDoItem() {
        return currentToDoItem;
    }

    function getProjects() {
        return projects;
    }

    function getCurrentProject() {
        return currentProject;
    }

    function changeCurrentProject(projectTitle) {
        currentProject = projects[projectTitle];
    }

    // create a new To Do item object
    function createToDoItem(title, description, dueDate, priority, project) {
        return {
            title,
            description,
            dueDate,
            priority,
            project
        }
    }

    // add a new To Do item object inside the project to which it's assigned and set the object as the currentToDoItem
    function addToDoItem(title, description, dueDate, priority, project) {
        const newToDoItem = createToDoItem(title, description, dueDate, priority, project)
        console.log(newToDoItem.title);
        console.log(newToDoItem.project);
        
        /*
        const newProject = [];
        projects.push(newProject);
        newProject.push(newToDoItem);
        console.log(projects);
        */

        
        addProject(project)



        currentToDoItem = newToDoItem;
    }

    function addProject(newProject) {
        projects[newProject] = [];
        currentProject = projects[newProject];
        console.log(projects);
        console.log(currentProject);
    }

    function createNewProject() {
        let newProjectTitle = prompt("What's your project called?", "e.g. Health");
        projects[newProjectTitle] = [];
        console.log(newProjectTitle);
        console.log(projects);
        currentProject = newProjectTitle;

    }

    return {
        createToDoItem,
        getToDoItem,
        addToDoItem,
        addProject,
        createNewProject,
        getCurrentProject,
        changeCurrentProject
    }

})();

export const DomController = (function () {

    // render the current To Do item to the DOM
    function renderToDoItem(currentToDoItem) {
        currentToDoItem = ToDoController.getToDoItem();
        console.log(currentToDoItem);
        console.log(currentToDoItem.title);

        const container = document.querySelector('.main-display');
        const card = document.createElement('div');
        container.appendChild(card);
        card.classList.add('card');

        const title = document.createElement('p');
        card.appendChild(title);
        title.textContent = currentToDoItem.title;

        const description = document.createElement('p');
        card.appendChild(description);
        description.textContent = currentToDoItem.description;

        const dueDate = document.createElement('p');
        card.appendChild(dueDate);
        dueDate.textContent = currentToDoItem.dueDate;

        const priority = document.createElement('p');
        card.appendChild(priority);
        priority.textContent = currentToDoItem.priority;

        const project = document.createElement('p');
        card.appendChild(project);
        project.textContent = currentToDoItem.project;
    }

    function renderProject() {
        const currentProject = ToDoController.getCurrentProject();
        const sidebar = document.querySelector('.sidebar-display');
        const projectButton = document.createElement('button');
        projectButton.textContent = currentProject;

        sidebar.appendChild(projectButton);
        console.log(currentProject);

        projectButton.addEventListener('click', () => {
            ToDoController.changeCurrentProject(currentProject);
            console.log(ToDoController.getCurrentProject());
        }
        )

    }
    
    // add modal display, form functionality, creation and rendering to "Create New To-Do Item" button
    function createNewItemBtn() {
        const createBtn = document.querySelector('.createBtn');
        const modal = document.querySelector('.modal');
        const form = document.querySelector('.card-form');
        const titleField = form.elements['title'];
        const descriptionField = form.elements['description'];
        const dueDateField = form.elements['dueDate'];
        const priorityField = form.elements['priority'];
        const projectField = form.elements['project'];

        createBtn.addEventListener('click', () => {
            modal.showModal();
            })    

        form.addEventListener('submit', (event) => {
            event.preventDefault();    

            ToDoController.addToDoItem(titleField.value, descriptionField.value, dueDateField.value, 
            priorityField.value, projectField.value);

            renderToDoItem();

            modal.close();
        
            
        })
    }

    function createNewProjectBtn() {

        const createProjectBtn = document.querySelector('.createNewProjectBtn')

        createProjectBtn.addEventListener('click', () => {
            ToDoController.createNewProject()

            renderProject();

        })

    }
       

    return {
        renderToDoItem,
        createNewItemBtn,
        createNewProjectBtn
    }

})();

export const test = "Sup";

//functions: create, edit, delete To Do items; create, read, edit projects
export const ToDoController = (function () {

    let currentToDoItem;
    let projects;
    if (!localStorage.getItem('storedProjects')) {
        projects = {};
        console.log(projects);
    } else { 
        projects = setRetrievedProjects();
        console.log('projects set from storage');
    }
    let defaultProject = 'Default Project';
    projects[defaultProject] = [];
    let currentProject = defaultProject;
    
    // return the current To Do item
    function getToDoItem() {
        return currentToDoItem;
    }

    function changeCurrentToDoItem(toDoItem) {
        console.log(currentToDoItem);
        currentToDoItem = toDoItem;
        console.log(currentToDoItem);
        return currentToDoItem;
    }

    function getProjects() {
        console.log(projects);
        return projects;
    }

    function getCurrentProject() {
        console.log(projects[currentProject]);
        return currentProject;
    }

    function getCurrentProjectArray() {
        return projects[currentProject];
    }

    function changeCurrentProject(projectTitle) {
        currentProject = projectTitle;
        console.log(currentProject);
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
        
        projects[currentProject].push(newToDoItem);
        storeProjects();

        currentToDoItem = newToDoItem;
    }

    function addProject(newProject) {
        projects[newProject] = {};
        currentProject = projects[newProject];
        console.log(projects);
        console.log(currentProject);
    }

    function createNewProject(projectTitle) {
        let newProjectTitle;
        if (projectTitle == null) {
             newProjectTitle = prompt("What's your project called?", "e.g. Health");
        }
        else {
             newProjectTitle = projectTitle
        }

        if (!localStorage.getItem('storedProjects')) {
            
        }

        projects[newProjectTitle] = [];
        console.log('Creating empty project with title ' + newProjectTitle);
        console.log(newProjectTitle);
        console.log(projects);
        storeProjects();
        changeCurrentProject(newProjectTitle);

    }

    function getToDoItemToEdit(card) {
        const toDoIndex = card.getAttribute("index");
        let project = getCurrentProjectArray();
        let toDoItemToEdit = project[toDoIndex]
        console.log(toDoIndex);
        console.log(toDoItemToEdit);
        console.log(toDoItemToEdit.description);
        return toDoItemToEdit;
    }

    function updateTodo(toDoItem, title, description, dueDate, priority, project) {
        const editedToDoItem = createToDoItem(title, description, dueDate, priority, project);
        console.log(editedToDoItem);
        toDoItem = editedToDoItem;
        console.log(toDoItem);
        return toDoItem;
    }

    function updateProjectArray(project, indexToEdit, updatedTodoItem) {
        projects[project][indexToEdit] = updatedTodoItem;
        console.log(project);
        return project[indexToEdit];
    }

    function deleteProject(projectTitle) {
        console.log('delete project');
        console.log(projects);
        console.log(projectTitle);
        let project = projectTitle;
        console.log(project);
        console.log(projects.project);
        delete projects[project];
        storeProjects();
    }

    function deleteTodo(currentProject, todoIndex) {
        const project = ToDoController.getCurrentProject();
        const currentToDoItem = ToDoController.getToDoItem();
        console.log('delete todo');
        console.log(project);
        console.log(currentToDoItem)
        console.log(currentProject)
        console.log(todoIndex);
        console.log(currentProject.splice(todoIndex, 1))
        console.log(currentProject);
        storeProjects();
    }

    function storeProjects() {
        let projects = getProjects();
        localStorage.setItem('storedProjects', JSON.stringify(projects));
    }

    function retrieveProjects() {
        let storedProjects = JSON.parse(localStorage.getItem('storedProjects'));
        console.log(storedProjects)
        return storedProjects;
    }

    function setRetrievedProjects() {
       // let retrievedProjects = retrieveProjects();
        //projects = retrievedProjects;
        projects = JSON.parse(localStorage.getItem('storedProjects'));
        console.log(projects);
        return projects;

    }

    return {
        createToDoItem,
        getToDoItem,
        changeCurrentToDoItem,
        addToDoItem,
        addProject,
        createNewProject,
        getCurrentProject,
        getCurrentProjectArray,
        changeCurrentProject,
        getProjects,
        getToDoItemToEdit,
        updateTodo,
        updateProjectArray,
        deleteProject,
        deleteTodo,
        storeProjects,
        retrieveProjects,
        setRetrievedProjects,
    }

})();

export const DomController = (function () {

    // render the current To Do item to the DOM
    function renderToDoItem(currentToDoItem) {
        currentToDoItem = ToDoController.getToDoItem();
        const projects = ToDoController.getProjects();
        const currentProject = ToDoController.getCurrentProject();

        console.log(projects[currentProject]);
        console.log(currentToDoItem);
        console.log(currentToDoItem.title);

        const container = document.querySelector('.cards-display');
        const card = document.createElement('div');
        container.appendChild(card);
        card.classList.add('card');
        card.setAttribute('index', projects[currentProject].indexOf(currentToDoItem))
        console.log(projects[currentProject].indexOf(currentToDoItem))


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

        const editTodoBtn = document.createElement('button');
        card.appendChild(editTodoBtn);
        editTodoBtn.textContent = 'Edit';
        editTodoBtn.addEventListener('click', () => {
            editToDoItemBtn(card, currentProject);
            
            
        });
    

        const deleteTodoBtn = document.createElement('button');
        card.appendChild(deleteTodoBtn);
        deleteTodoBtn.textContent = 'Delete';
        deleteTodoBtn.addEventListener('click', () => {
                const toDoIndex = (card.getAttribute("index"));
                console.log(toDoIndex);
                ToDoController.deleteTodo(projects[currentProject], toDoIndex);
                deleteProjectTodoItemCards();
                renderProjectToDoItems();
            })
    }

    function editToDoItemBtn(cardNode, projectArray) {
        const modal = document.querySelector('.edit-modal');
        const form = document.querySelector('.edit-form');
        const titleField = form.elements['title'];
        const descriptionField = form.elements['description'];
        const dueDateField = form.elements['dueDate'];
        const priorityField = form.elements['priority'];
        const projectField = form.elements['project'];
        let toDoItemToEdit = ToDoController.getToDoItemToEdit(cardNode)

        modal.showModal();

        form.addEventListener('submit', (event) => {
            event.preventDefault();    

            
            toDoItemToEdit = ToDoController.updateTodo(toDoItemToEdit, titleField.value, descriptionField.value, dueDateField.value, 
            priorityField.value, projectField.value);

            console.log(toDoItemToEdit);
            const editedToDoItem = toDoItemToEdit;
            
            const toDoIndex = cardNode.getAttribute("index");

            ToDoController.updateProjectArray(projectArray, toDoIndex, editedToDoItem)

            deleteProjectTodoItemCards();
            renderProjectToDoItems();

            modal.close();
        
            
        })
    }
    

    function renderProjectToDoItems() {
        console.log("render project");
        let projectArray = ToDoController.getCurrentProjectArray();
        if (projectArray === undefined) return;
        console.log(projectArray);
        for (const toDoItem of projectArray) {
            ToDoController.changeCurrentToDoItem(toDoItem);
            renderToDoItem();
            console.log(toDoItem);
        }


    }

    function deleteProjectTodoItemCards() {
        const container = document.querySelector('.cards-display');
        const card = container.querySelectorAll('.card');
        console.log(card);

        while (container.hasChildNodes()) {
            container.removeChild(container.firstChild);
        }
    }

    function deleteProjectButton() {
        const sidebar = document.querySelector('.sidebar-display');
        const currentProject = ToDoController.getCurrentProject();
        const projectButtons = sidebar.querySelectorAll('button')
        projectButtons.forEach((projectButton) => {
            if (projectButton.textContent == currentProject) {
                sidebar.removeChild(projectButton)
            }
        });

    }

    function renderProject() {
        const currentProject = ToDoController.getCurrentProject();
        const sidebar = document.querySelector('.sidebar-display');
        const projectButton = document.createElement('button');
        projectButton.textContent = currentProject;

        sidebar.appendChild(projectButton);
        console.log(currentProject);

        projectButton.addEventListener('click', () => {
            const currentProject = projectButton.textContent;
            console.log(currentProject);
            ToDoController.changeCurrentProject(currentProject);
            console.log(ToDoController.getCurrentProject());
            deleteProjectTodoItemCards();
            renderProjectToDoItems();
        }
        )

    }

    function renderAllProjects() {
        let currentProject = ToDoController.getCurrentProject();
        let projects = ToDoController.getProjects();
        for (let project of Object.keys(projects)) {
            ToDoController.changeCurrentProject(project);
            renderProject();
            console.log('Rendering ' + project + ' project');
        }
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

    

    // add new project creation and rendering to "Create New Project" button
    function createNewProjectBtn() {

        const createProjectBtn = document.querySelector('.createNewProjectBtn')

        createProjectBtn.addEventListener('click', () => {
            ToDoController.createNewProject()

            renderProject();

            renderProjectToDoItems(ToDoController.getCurrentProject());

        })

    }

    function deleteProjectBtn() {
        let deletion = ToDoController.getCurrentProject();
        const deleteProjectBtn = document.querySelector('.deleteProjectBtn');

        deleteProjectBtn.addEventListener('click', () => {
            deletion = ToDoController.getCurrentProject();
            console.log(deletion);
            ToDoController.deleteProject(deletion)
            console.log(ToDoController.getProjects());
            deleteProjectTodoItemCards();
            deleteProjectButton();
        })

    }
       

    return {
        renderToDoItem,
        renderProject,
        createNewItemBtn,
        createNewProjectBtn,
        editToDoItemBtn,
        deleteProjectTodoItemCards,
        deleteProjectBtn,
        renderAllProjects
    }

})();
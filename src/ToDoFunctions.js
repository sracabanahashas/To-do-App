export const test = "Sup";

//functions: create, edit, delete todo items; create, read, edit projects
export const ToDoController = (function () {

    let currentToDoItem;
    let projects = [];
    
    function getToDoItem() {
        return currentToDoItem;
    }

    function createToDoItem(title, description, dueDate, priority, project) {
        return {
            title,
            description,
            dueDate,
            priority,
            project
        }
    }

    function addToDoItem(title, description, dueDate, priority, project) {
        const newToDoItem = createToDoItem(title, description, dueDate, priority, project)
        console.log(newToDoItem.title);
        console.log(newToDoItem.project);
        const newProject = [];
        projects.push(newProject);
        newProject.push(newToDoItem);
        console.log(projects);
        currentToDoItem = newToDoItem;
    }

    

    return {
        createToDoItem,
        getToDoItem,
        addToDoItem,
    }

})();

export const DomController = (function () {


    function renderToDoItem(currentToDoItem) {
        currentToDoItem = ToDoController.getToDoItem();
        console.log(currentToDoItem);
        console.log(currentToDoItem.title);

        const container = document.querySelector('.container');
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

    function createNewItemBtn() {
        const createBtn = document.querySelector('.createBtn');
        const modal = document.querySelector('.modal');
        createBtn.addEventListener('click', () => {
            modal.showModal();
            })    
        }

        

    return {
        renderToDoItem,
        createNewItemBtn
    }

})();
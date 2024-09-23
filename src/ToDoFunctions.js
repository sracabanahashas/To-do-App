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
    }



    return {
        createToDoItem,
        getToDoItem,
        addToDoItem,
    }

})();

export const domController = (function () {

    function renderToDoItem(todo) {

        console.log(todo);
    }

    return {
        renderToDoItem
    }
})();
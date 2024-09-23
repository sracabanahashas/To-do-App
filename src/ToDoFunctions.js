export const test = "Sup";

//functions: create, edit, delete todo items; create, read, edit projects
export const ToDoController = (function () {

    let currentToDoItem;
    let projects;
    
    function getToDoItem() {
        return currentToDoItem;
    }

    /* 
    function ToDoItem(title, description, dueDate, priority, project) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.project = project;
    }
    */

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
        createToDoItem(title, description, dueDate, priority, project)
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
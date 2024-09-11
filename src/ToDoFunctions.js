export const test = "Sup";

//functions: create, edit, delete todo items; create, read, edit projects
export const ToDoController = (function () {

    let toDoItem;
    
    function getToDoItem() {
        return toDoItem;
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

    function addToDoItem() {
        toDoItem = createToDoItem()
    }



    return {
        createToDoItem,
        getToDoItem,
        addToDoItem,
    }

})();

export const domController = (function () {

    function renderToDoItem(todo) {

        let toDoItem = 
    }

})();
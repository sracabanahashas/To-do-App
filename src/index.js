import { test, ToDoController, DomController } from "./ToDoFunctions";
import "./styles.css";

ToDoController.retrieveProjects();
console.log('retrieval tested');

console.log(test);
console.log(ToDoController);
console.log(DomController);


ToDoController.addToDoItem("Stayin Alive", "You can tell by the way I use my walk", "I'm a woman's man, no time to talk", "High", "Default Project");

DomController.renderToDoItem();

DomController.createNewItemBtn();

DomController.createNewProjectBtn();

DomController.deleteProjectBtn();

ToDoController.getProjects();

ToDoController.getCurrentProject();

DomController.renderAllProjects();




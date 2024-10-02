import { test, ToDoController, DomController } from "./ToDoFunctions";
import "./styles.css";

console.log(test);
console.log(ToDoController);
console.log(DomController);

ToDoController.addToDoItem("Go to bed", "Bedtime is 10pm", "Every day", "High", "Health");

DomController.renderToDoItem();

DomController.createNewItemBtn();

ToDoController.addProject('Health');
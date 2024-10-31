import { test, ToDoController, DomController } from "./ToDoFunctions";
import "./styles.css";

console.log(test);
console.log(ToDoController);
console.log(DomController);

ToDoController.addToDoItem("Stayin Alive", "You can tell by the way I use my walk", "I'm a woman's man, no time to talk", "High", "Default Project");

DomController.renderToDoItem();

DomController.createNewItemBtn();

DomController.createNewProjectBtn();

ToDoController.getProjects();

ToDoController.getCurrentProject();

ToDoController.createNewProject("Health");
DomController.renderProject();
ToDoController.addToDoItem("Go to bed", "Bedtime is 10pm", "Every day", "High", "Health");

ToDoController.createNewProject("Balling Out");
DomController.renderProject();
ToDoController.addToDoItem("Go to bed", "Bedtime is 10pm", "Every day", "High", "Health");
ToDoController.addToDoItem("Go to bed", "Bedtime is 10pm", "Every day", "High", "Health");


ToDoController.createNewProject("Player Shit");
DomController.renderProject();
ToDoController.addToDoItem("Go to bed", "Bedtime is 10pm", "Every day", "High", "Health");
ToDoController.addToDoItem("Go to bed", "Bedtime is 10pm", "Every day", "High", "Health");
ToDoController.addToDoItem("Go to bed", "Bedtime is 10pm", "Every day", "High", "Health");

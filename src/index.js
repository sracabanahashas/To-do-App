import { test, ToDoController, DomController } from "./ToDoFunctions";
import "./styles.css";

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

DomController.renderProject();

ToDoController.createNewProject("Health");
DomController.renderProject();
ToDoController.addToDoItem("Go to bed", "Bedtime is 10pm", "Every day", "High", "Health");

ToDoController.createNewProject("Balling Out");
DomController.renderProject();
ToDoController.addToDoItem("Coding Practice", "The Odin Project", "Every day", "High", "Balling Out");
ToDoController.addToDoItem("Applying for Jobs", "Remote/Hybrid Only", "W/Th/F", "High", "Balling Out");


ToDoController.createNewProject("Player Shit");
DomController.renderProject();
ToDoController.addToDoItem("Sex", "Beautiful women", "Every other day", "High", "Player Shit");
ToDoController.addToDoItem("Music", "In the studio", "Every day", "High", "Player Shit");
ToDoController.addToDoItem("Partying", "With my friends", "Weekends", "High", "Player Shit");

ToDoController.storeProjects();
ToDoController.retrieveProjects();
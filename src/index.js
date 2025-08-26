import "./style.css";
import { domManipulator } from "./todoDisplay";
import { TodoItem } from "./todoItem";
import { TodoList } from "./todoList";
import { TodoProjects} from "./todoProjects";
const newTodoItem = new TodoItem("a", "b", "c", "d", true);
const newTodoList = new TodoList([newTodoItem], "naruto");
// domManipulator.showTodoList(newTodoList);
const newTodoProject = new TodoProjects([newTodoList]);
domManipulator.showTodoProjects(newTodoProject);
  



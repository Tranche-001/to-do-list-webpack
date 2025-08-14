import "./style.css";
import { domManipulator } from "./todoDisplay";
import { TodoItem } from "./todoItem";
import { TodoList } from "./todoList";
const newTodoItem = new TodoItem("a", "b", "c", "d", true);
const newTodoList = new TodoList([newTodoItem]);
domManipulator.showTodoList(newTodoList);

  



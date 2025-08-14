import "./style.css";
import { domManipulator } from "./todoDisplay";
import { TodoItem } from "./todoItem";
import { TodoList } from "./todoList";
const newTodoItem = new TodoItem("a", "b", "c", "d", true);
const newTodoList = new TodoList([newTodoItem]);
domManipulator.showTodoList(newTodoList);
// const content = document.querySelector(".todo-list");

// content.innerHTML = `
//  <table>
      // <tr>
      //   <th>Title</th>
      //   <th>Description</th>
      //   <th>Due-Date</th>
      //   <th>Priority</th>
      //   <th>Completed</th>
      // </tr>
//       <tr>
//         <td>a</td>
//         <td>b</td>
//         <td>c</td>
//         <td>d</td>
//         <td><input type="checkbox"></td>
//       </tr>
//       <tr></tr>
//     </table>
//     `;
  



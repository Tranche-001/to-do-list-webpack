import { ITodoList } from "./ITodoList";

export class TodoList extends ITodoList {
  constructor(arrayTodosItems) {
    super();
    this.arrayTodosItems = arrayTodosItems;
  }
  
  get arrayTodosItems() {
    return this._arrayTodosItems;
  }

  set arrayTodosItems(newArrayTodoItems) {
    this._arrayTodosItems = newArrayTodoItems;
  }

  addToList(newTodoItem) {
    this._arrayTodosItems.push(newTodoItem);
  }

  getAllItems() {
    return this.arrayTodosItems;
  }
 
}
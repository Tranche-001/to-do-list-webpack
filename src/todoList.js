import { ITodoList } from "./ITodoList";

export class TodoList extends ITodoList {
  constructor(arrayTodosItems, name) {
    super();
    this.id = crypto.randomUUID();
    this.arrayTodosItems = arrayTodosItems;
    this.name = name;
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
    return this._arrayTodosItems;
  }
  deleteFromList(itemId) {
    for (let i = 0; i < this.arrayTodosItems.length; i++) {
      if (this.arrayTodosItems[i].id == itemId) {
        this._arrayTodosItems.splice(i, 1);
      }
    }
  }

}
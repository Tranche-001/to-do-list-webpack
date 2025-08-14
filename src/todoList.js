export class TodoList {
  constructor(arrayTodosItems) {
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
 
}
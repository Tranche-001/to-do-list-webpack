class TodoList {
  constructor(arrayTodos) {
    this.arrayTodos = arrayTodos;
  }
  #addToList(newTodoItem) {
    this.arrayTodos.push(newTodoItem);
  }
}
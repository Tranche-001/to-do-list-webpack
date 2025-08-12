class TodoList {
  constructor(arrayTodos) {
    this.arrayTodos = arrayTodos;
  }
  #addToList(newTodoItem) {
    this.arrayTodos.push(newTodoItem);
  }
}


const todoList = document.createElement("div");
todoList.setAttribute("class", "todo-list");

todoList.innerHTML = `
  <div class="todo-list">
      <table>
        <tr>
          <th>Title</th>
          <th>Description</th>
          <th>Due-Date</th>
          <th>Priority</th>
          <th>Completed</th>
        </tr>
        <tr>
          <td>a</td>
          <td>b</td>
          <td>c</td>
          <td>d</td>
          <td><input type="checkbox"></td>
        </tr>
        <tr></tr>
      </table>
      <button class="new-item-button">Criar Novo Item</button>
      <dialog>
        <div>
          <form action="">
            <input type="text">
            <input type="text">
            <input type="text">
            <input type="text">
            <input type="text">
          </form>
        </div>
      </dialog>
    </div>



`
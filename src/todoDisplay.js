class ManipulationDOM {

  createTodoItemRowHtml(todoItem) {
    const newTableRow = document.createElement('tr');

    // Access properties via getters
    const properties = [
      { name: 'Title', value: todoItem.title },
      { name: 'Description', value: todoItem.description },
      { name: 'Due Date', value: todoItem.dueDate },
      { name: 'Priority', value: todoItem.priority },
      { name: 'Completed', value: todoItem.completed }
    ];

    properties.forEach(prop => {
      const tableData = document.createElement('td');

      if (prop.name === 'Completed') {
        const checkboxInput = document.createElement('input');
        checkboxInput.type = 'checkbox';
        checkboxInput.checked = prop.value;
        checkboxInput.disabled = true;
        tableData.appendChild(checkboxInput);
      }
      else {
        tableData.textContent = prop.value;
      }
      newTableRow.appendChild(tableData);
    });

    return newTableRow;
  }
  showTodoList(todoList) {
    const content = document.querySelector(".content");
    const todoListScreen = document.createElement("div");
    todoListScreen.setAttribute("class", "todo-list");
    const todoListTable = document.createElement("table");
    todoListTable.innerHTML =
      `
      <tr>
        <th>Title</th>
        <th>Description</th>
        <th>Due-Date</th>
        <th>Priority</th>
        <th>Completed</th>
      </tr>
    `
    for (const todoItem of todoList.arrayTodosItems) {
      const newRow = this.createTodoItemRowHtml(todoItem);
      todoListTable.appendChild(newRow);
    }
    todoListScreen.appendChild(todoListTable);
    content.appendChild(todoListScreen);
  }
  showTodoProject() {

  }
}

export const domManipulator = new ManipulationDOM();
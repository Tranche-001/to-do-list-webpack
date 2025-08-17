class ManipulationDOM {

  formsModal = document.createElement('dialog');

  constructor() {
    this.formsModal.innerHTML = `
      <form action="" class="add-item-form">
        <div>
          <label for="title">Title</label>
          <input type="text" id="title">
        </div>

        <div>
          <label for="description">Description</label>
          <input type="text" id="description">
        </div>

        <div>
          <label for="due-date">Due Date</label>
          <input type="text" id="due-date">
        </div>

        <div>
          <label for="priority">Priority</label>
          <input type="text" id="priority">
        </div>

        <div>
          <label for="completed">Completed</label>
          <input type="checkbox" id="completed">
        </div>

        <button type="submit">add item</button>
      </form>
    `;
  }


  #createTodoItemRowHtml(todoItem) {
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
      const newRow = this.#createTodoItemRowHtml(todoItem);
      todoListTable.appendChild(newRow);
    }
    todoListScreen.appendChild(todoListTable);
    content.appendChild(todoListScreen);
    const dialog = document.querySelector('dialog')
    dialog.showModal();

    //-----Button to Add New Items
    const newItemButton = document.createElement('button');
    newItemButton.setAttribute("class", "new-item-button");
    newItemButton.textContent = 'add todo';
    newItemButton.addEventListener('click', () => {
      //Display Modal
      this.formsModal.showModal();
    })
    content.appendChild(newItemButton);

  }

  #createButtonHtml() {

  }






  showTodoProject() {

  }
}

export const domManipulator = new ManipulationDOM();
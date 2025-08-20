import { ITodoList } from "./ITodoList";
import { TodoItem } from "./todoItem";

class ManipulationDOM {

  #createDialogAndForms() {
    const formsModal = document.createElement('dialog');
    formsModal.innerHTML = `
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
    const content = document.querySelector('.content');
    content.appendChild(formsModal);

  }

  #createFormsButtonLogic(todoList) {
    const formsModal = document.querySelector('dialog');
    const formsButton = document.querySelector('button');

    formsButton.addEventListener('click', (e) => {
      e.preventDefault();
      //-> Get the values from inputs
      const titleInput = document.querySelector('#title')
      const descriptionInput = document.querySelector('#description')
      const dueDateInput = document.querySelector("#due-date")
      const priorityInput = document.querySelector("#priority");
      const completed = document.querySelector("#completed");
      //-> create a todoItem
      const newTodoItem = new TodoItem(titleInput.value, descriptionInput.value, dueDateInput.value, priorityInput.value, completed.value);
      //-> add new item to a existing list -> instance of the list
      todoList.addToList(newTodoItem);
      //-> call a re-render -> execute showTodoList() again;
      this.showTodoList(todoList);
      formsModal.close()
    })
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

    //Inital Query
    const content = document.querySelector('.content');

    //Clean Table
    content.innerHTML =``;

    //Setup Modal Forms Logic
    this.#createDialogAndForms();
    this.#createFormsButtonLogic(todoList);
    const formsModal = document.querySelector('dialog');

    //Create Table of Items

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
    for (const todoItem of todoList.getAllItems()) {
      const newRow = this.#createTodoItemRowHtml(todoItem);
      todoListTable.appendChild(newRow);
    }
    todoListScreen.appendChild(todoListTable);
    content.appendChild(todoListScreen);


    //-----Create Button to Add New Items
    const newItemButton = document.createElement('button');
    newItemButton.setAttribute("class", "new-item-button");
    newItemButton.textContent = 'add todo';
    newItemButton.addEventListener('click', () => {
      //Display Modal
      formsModal.showModal();
    })
    content.appendChild(newItemButton);

  }






  showTodoProject() {

  }
}

export const domManipulator = new ManipulationDOM();
import { TodoItem } from "./todoItem";
import { TodoList } from "./todoList";
import { TodoProjects } from "./todoProjects";

class ManipulationDOM {

  #createDialogAndFormsForList() {
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


  #createFormsButtonLogicForList(todoList, projects) {
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
      const newTodoItem = new TodoItem(
        titleInput.value,
        descriptionInput.value, 
        dueDateInput.value, 
        priorityInput.value, 
        completed.checked, 
        "Main List");
      //-> add new item to a existing list -> instance of the list
      todoList.addToList(newTodoItem);
      //-> call a re-render -> execute showTodoList() again;
      this.showTodoList(todoList, projects);
      formsModal.close()
    })
  }


  #createTodoItemRowHtml(todoItem, todoList, projects) {
    const newTableRow = document.createElement('tr');
    newTableRow.setAttribute('data-id', todoItem.id);
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
        tableData.appendChild(checkboxInput);
      }

      else {
        tableData.textContent = prop.value;
      }
      newTableRow.appendChild(tableData);
    });

    //Delete To-do Button
    const tableDataDelete = document.createElement('td');
    const deleteTodoButton = document.createElement("button");
    deleteTodoButton.textContent = "delete";
    deleteTodoButton.setAttribute('data-id', todoItem.id);

    deleteTodoButton.addEventListener("click", () => {
      todoList.deleteFromList(todoItem.id);
      this.showTodoList(todoList, projects);
    })

    tableDataDelete.appendChild(deleteTodoButton);
    newTableRow.appendChild(tableDataDelete);


    //Choose Project alocation
    const tableDataChooseProject = document.createElement('td');
    const selectToggle = document.createElement("select");
    selectToggle.setAttribute("id", "projects");
    selectToggle.setAttribute("name", "projects");

    //create options
    projects.arrayTodoList.forEach(project => {

      const newOption = document.createElement('option');
      newOption.setAttribute("value", `${project.name}`);
      newOption.textContent = `${project.name}`;
      //Make the option which Item is from to be the one selected when the pages render
      if (project.name == todoItem.whichProjectIsFrom) {
        newOption.selected = true;
      }
      selectToggle.appendChild(newOption);
    })

    //transfer a item from a project to another
    selectToggle.addEventListener("change", () => {

      projects.arrayTodoList.forEach((project) => {
        //previous(from) project search and delete(if it the previous is main then there is no delete)
        if (project.name == todoItem.whichProjectIsFrom) {
          project.deleteFromList(todoItem.id);
        }
      })
      //Change todoItem to new value
      todoItem.whichProjectIsFrom = selectToggle.value;

      projects.arrayTodoList.forEach((project) => {
        //new(to) project search add(if new is main, then there is no add)
        if (project.name == todoItem.whichProjectIsFrom) {
          project.addToList(todoItem);
        }
      })
      this.showTodoList(todoList, projects)
    })

    tableDataChooseProject.appendChild(selectToggle);
    newTableRow.appendChild(tableDataChooseProject);

    return newTableRow;
  }

  #createTableOfItems(content, todoList, projects) {
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
        <th>Delete</th>
        <th>Choose Project</th>
      </tr>
    `
    for (const todoItem of todoList.getAllItems()) {
      const newRow = this.#createTodoItemRowHtml(todoItem, todoList, projects);
      todoListTable.appendChild(newRow);
    }
    todoListScreen.appendChild(todoListTable);
    content.appendChild(todoListScreen);
  }

  #createButtonToAddNewItems(content, formsModal) {
    const newItemButton = document.createElement('button');
    newItemButton.setAttribute("class", "new-item-button");
    newItemButton.textContent = 'add todo';
    newItemButton.addEventListener('click', () => {
      //Display Modal
      formsModal.showModal();
    })
    content.appendChild(newItemButton);
  }

  #createButtonToReturnToProjectPage(content, projects) {
    const returnButton = document.createElement("button");
    returnButton.setAttribute("class", "return-button")
    returnButton.textContent = "return";

    returnButton.addEventListener("click", () => {
      this.showTodoProjects(projects)
    })


    content.appendChild(returnButton);
  }

  showTodoList(todoList, projects) {
    console.log(projects)
    //Inital Query
    const content = document.querySelector('.content');

    //Clean Table
    content.innerHTML = ``;

    //Setup Modal Forms Logic
    this.#createDialogAndFormsForList();
    this.#createFormsButtonLogicForList(todoList, projects);
    const formsModal = document.querySelector('dialog');

    this.#createTableOfItems(content, todoList, projects);

    this.#createButtonToAddNewItems(content, formsModal);

    //Create button to return to Project page
    this.#createButtonToReturnToProjectPage(content, projects);

  }



  #createDialogAndFormsForProject() {
    const formsModal = document.createElement('dialog');
    formsModal.innerHTML = `
      <form action="" class="add-item-form">
        <div>
          <label for="name">Title</label>
          <input type="text" id="name">
        </div>
        <button type="submit">create list</button>
      </form>
    `;
    const content = document.querySelector('.content');
    content.appendChild(formsModal);
  }



  #createFormsButtonLogicForProject(projects) {
    const formsModal = document.querySelector('dialog');
    const formsButton = document.querySelector('button');

    formsButton.addEventListener('click', (e) => {
      e.preventDefault();
      //-> Get the values from inputs
      const nameInput = document.querySelector('#name')
      //-> create a new list
      const newTodoList = new TodoList([], nameInput.value);
      //-> add the list to the projects
      projects.addToProjects(newTodoList);
      //-> call a re-render -> execute showTodoProjects() again;
      this.showTodoProjects(projects);
      formsModal.close()
    })
  }

  #createTableOfLists(content, projects) {
    //divs with each list
    projects.arrayTodoList.forEach(list => {
      const listDiv = document.createElement('div');
      listDiv.setAttribute('class', 'list-div')

      const buttonEnterList = document.createElement('button');
      buttonEnterList.textContent = `${list.name}`
      //button EnterList Logic
      //shows a specific list if clicked
      buttonEnterList.addEventListener("click", () => {
        this.showTodoList(list, projects);
      })

      listDiv.appendChild(buttonEnterList);

      content.appendChild(listDiv);
    })

  }




  showTodoProjects(projects) {
    console.log(projects)
    //Inital Query
    const content = document.querySelector('.content');

    //Clean Table
    content.innerHTML = ``;

    //Setup Modal Forms Logic
    this.#createDialogAndFormsForProject();
    this.#createFormsButtonLogicForProject(projects);
    const formsModal = document.querySelector('dialog');


    this.#createTableOfLists(content, projects);

    const buttonCreateList = document.createElement('button');
    buttonCreateList.textContent = "create new project";
    buttonCreateList.addEventListener('click', () => {
      //open dialog
      formsModal.showModal();
    })
    content.appendChild(buttonCreateList);

  }
}

export const domManipulator = new ManipulationDOM();
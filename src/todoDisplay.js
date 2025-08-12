class ManipulationDOM {
  createTodoItemRowHtml(todoItem) {
    const newTableRow = document.createElement("tr");
    for (const property in todoItem) {
      const newTableData = document.createElement("td");

      if(typeof property == String){
        newTableData.textContent =  property;
      }
      else {
        const checkboxInput = document.createElement("input").
        checkboxInput.setAttribute("type", "checkbox");
        checkboxInput.value = property;
        newTableData.appendChild(checkboxInput);
      }
      newTableRow.appendChild(newTableData);
    }
    return newTableRow;
  }

  showTodoList(todoList) {
    for (let i = 0; i < todoList.length; i++) {

    }

  }
  showTodoProject() {

  }
}

const domManipulator = new ManipulationDOM();
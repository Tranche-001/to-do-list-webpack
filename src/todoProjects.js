export class TodoProjects {
  constructor(arrayTodoList) {
    this.id = crypto.randomUUID();
    this.arrayTodoList = arrayTodoList;
  }
  addToProjects(newTodoList) {
    console.log(this.arrayTodoList)
    this.arrayTodoList.push(newTodoList);
  }
  getAllTodoLists() {
    return this._arrayTodoList;
  }
}
export class ITodoList {
   constructor() {
    if (this.constructor === ITodoList) {
      throw new Error("Cannot instantiate abstract class ITodoList");
    }
  }
  getAllItems() { throw new Error("Not implemented"); }
  addToList(item) { throw new Error("Not implemented"); }
}
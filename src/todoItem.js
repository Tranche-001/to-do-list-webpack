export class TodoItem {
  #title;
  #description;
  #dueDate;
  #priority;
  #completed;

  constructor(title, description, dueDate, priority, completed) {
    this.#title = title;
    this.#description = description;
    this.#dueDate = dueDate;
    this.#priority = priority;
    this.#completed = completed;
  }

   // Public getters and setters
  get title() {
    return this.#title;
  }

  set title(newTitle) {
    this.#title = newTitle;
  }

  get description() {
    return this.#description;
  }

  set description(newDescription) {
    this.#description = newDescription;
  }

  get dueDate() {
    return this.#dueDate;
  }

  set dueDate(newDueDate) {
    this.#dueDate = newDueDate;
  } 

  get priority() {
    return this.#priority;
  }

  set priority(newPriority) {
    this.#priority = newPriority;
  }

  get completed() {
    return this.#completed;
  }

  set completed(newCompleted) {
    this.#completed = newCompleted;
  }
}

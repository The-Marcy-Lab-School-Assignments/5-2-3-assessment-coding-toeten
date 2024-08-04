const { getId } = require('./utils');
/** FEEDBACK: Great job getting all test cases to pass! You are a superstar! In the future ensure to use a linter so that all spacing is consistent! */
class ToDoItem {

  constructor(description, priorityLevel) {
    this.id = getId();
    this.description = description;
    this.priorityLevel = priorityLevel;
    this.isDone = false;
    this.createdAt = new Date();
  }

  markAsDone() {
    this.isDone = true
  }
}


class ToDoList {
  static lists = [];

  constructor(name) {
    this.id = getId();
    this.items = [];
    this.name = name;
    ToDoList.lists.push(this);
  }

  createItem(description, priorityLevel) {
    const newItem = new ToDoItem(description, priorityLevel)
    this.items.push(newItem)
    return newItem
  }

  getItems() {
    return [...this.items]
  }
getCompletedCount() {
    const doneItems = this.items.filter(item => item.isDone)
    return doneItems.length
  }

  static list() {
    return [...ToDoList.lists]
  }

  static findBy(id) {
    return ToDoList.lists.find(list => list.id === id)
  }

  getListName() {
    return this.name
  }
}



module.exports = {
  ToDoItem,
  ToDoList
};

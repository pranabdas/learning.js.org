// data model of a collection of todo item(s)
import { TodoItem } from "./todoItem";

export class TodoCollection {
  private nextId: number = 0;
  constructor(public userName: string, public todoItems: TodoItem[] = []) {}

  addTodo(task: string): number {
    // first check todo item id starting from 0, once we cannot find todo item
    // by id, return that id as the next item id
    while (this.getTodoById(this.nextId)) {
      this.nextId++;
    }

    this.todoItems.push(new TodoItem(this.nextId, task));
    return this.nextId;
  }

  getTodoById(id: number): TodoItem {
    return this.todoItems.find((item) => item.id === id);
  }

  markComplete(id: number, complete: boolean) {
    const todoItem = this.getTodoById(id);
    if (todoItem) {
      todoItem.complete = complete;
    }
  }
}

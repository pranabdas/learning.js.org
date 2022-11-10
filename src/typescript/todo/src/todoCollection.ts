// data model for a collection of todo items
// also see how this file was in previous step: todoCollectionStep1.ts
// here we will store the TodoCollection in a new way so that `Map` can be used
import { TodoItem } from "./todoItem";

// object literal (alternative to class with only data members)
type ItemCount = {
  total: number;
  incomplete: number;
};

export class TodoCollection {
  private nextId: number = 0;

  // Map is a general-purpose collection that stores key, value paris.
  // Using type annotation we will restrict keys to be number and values to be
  // TodoItem objects

  // protected enforces the method can only by a class or its its subclasses
  protected itemMap = new Map<number, TodoItem>();

  // notice below that todoItems array is used in constructor is not a data
  // member of the class, but used to construct itemMap
  constructor(public userName: string, todoItems: TodoItem[] = []) {
    todoItems.forEach((item) => this.itemMap.set(item.id, item));
  }

  addTodo(task: string): number {
    // first check todo item id starting from 0, once we cannot find todo item
    // by id, return that id as the next item id
    while (this.getTodoById(this.nextId)) {
      this.nextId++;
    }

    this.itemMap.set(this.nextId, new TodoItem(this.nextId, task));
    return this.nextId;
  }

  getTodoById(id: number): TodoItem {
    return this.itemMap.get(id);
  }

  // method to get the whole list of todo's
  getTodoList(includeCompleted: boolean): TodoItem[] {
    return [...this.itemMap.values()].filter(
      (item) => includeCompleted || !item.complete
    );
  }

  markComplete(id: number, complete: boolean) {
    const todoItem = this.getTodoById(id);
    if (todoItem) {
      todoItem.complete = complete;
    }
  }

  removeComplete() {
    this.itemMap.forEach((item) => {
      if (item.complete) {
        this.itemMap.delete(item.id);
      }
    });
  }

  getTaskCounts(): ItemCount {
    return {
      total: this.itemMap.size,
      incomplete: this.getTodoList(false).length,
    };
  }
}

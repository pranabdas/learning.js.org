import * as inquirer from "inquirer";
import { TodoItem } from "./todoItem";
import { TodoCollection } from "./todoCollection";
import { JsonTodoCollection } from "./jsonTodoCollection";

// list of TodoItem data structure, instance of TodoItem can be created using
// `new` keyword
let todoList = [
  new TodoItem(0, "Do exercise", true),
  new TodoItem(1, "Eat breakfast"),
  new TodoItem(2, "Meeting at 10 am"),
  new TodoItem(3, "Send out notes", false),
];

let showCompleted = true;

function displayTodoList(): void {
  console.log(
    `${collection.userName}'s Todo List (${
      collection.getTaskCounts().incomplete
    } out of ${collection.getTaskCounts().total} tasks incomplete):`
  );
  collection.getTodoList(showCompleted).forEach((item) => item.printDetails());
}

enum Commands {
  Add = "Add New Task",
  MarkCompleted = "Mark task as complete",
  Toggle = "Show/hide completed tasks",
  Purge = "Delete completed tasks",
  Quit = "Quit",
}

function promptAdd(): void {
  console.clear();
  inquirer
    .prompt({ type: "input", name: "add", message: "Enter task:" })
    .then((answers: Commands) => {
      if (answers["add"] !== "") {
        collection.addTodo(answers["add"]);
      }
      promptUser();
    });
}

function promptComplete(): void {
  console.clear();
  inquirer
    .prompt({
      type: "checkbox",
      name: "MarkCompleted",
      message: "Mark Task as Complete",
      choices: collection.getTodoList(showCompleted).map((item: TodoItem) => ({
        name: item.task,
        value: item.id,
        checked: item.complete,
      })),
    })
    .then((answers: number) => {
      let completedTasks = answers["MarkCompleted"] as number[];
      collection
        .getTodoList(true)
        .forEach((item: TodoItem) =>
          collection.markComplete(
            item.id,
            completedTasks.find((id) => id === item.id) != undefined
          )
        );
      promptUser();
    });
}

function promptUser(): void {
  // console.clear();
  console.log("\nFrom prompt user function:");
  displayTodoList();

  inquirer
    .prompt({
      type: "list",
      name: "command",
      message: "Choose option",
      choices: Object.values(Commands),
    })
    .then((answers: Commands) => {
      // if (answers["command"] !== Commands.Quit) {
      //   promptUser();
      // }

      switch (answers["command"]) {
        case Commands.Toggle:
          showCompleted = !showCompleted;
          promptUser();
          break;

        case Commands.Add:
          promptAdd();
          break;

        case Commands.MarkCompleted:
          if (collection.getTaskCounts().incomplete > 0) {
            promptComplete();
          } else {
            promptUser();
          }
          break;

        case Commands.Purge:
          collection.removeComplete();
          promptUser();
          break;
      }
    });
}

// let collection = new TodoCollection("Pranab", todoList);
let collection: TodoCollection = new JsonTodoCollection("Pranab", todoList);
// console.clear(); // this clears the console, simar to [ctrl] + L in bash
console.log(`${collection.userName}'s Todo List`);
let newId = collection.addTodo("Go for run");
let todoItem = collection.getTodoById(newId);

promptUser();

// console.log("Stringify new todoItem:");
// console.log(JSON.stringify(todoItem));

// // console.log("Stringify whole todoItem collection:");
// // console.log(JSON.stringify(collection));

// console.log("\nPrint details of todoItem with id 2:");
// collection.getTodoById(2).printDetails();

// console.log(
//   `\nFull list of tasks (${collection.getTaskCounts().incomplete} out of ${
//     collection.getTaskCounts().total
//   } tasks incomplete):`
// );
// collection.getTodoList(true).forEach((item) => item.printDetails());

// collection.removeComplete();
// console.log(
//   `\nList after removed completed items (${
//     collection.getTaskCounts().incomplete
//   } out of ${collection.getTaskCounts().total} tasks incomplete):`
// );
// collection.getTodoList(true).forEach((item) => item.printDetails());

// // let's add another item, item inserted with id 5 (previously removed item with
// // id 0, because nextId set at highest id, and it increases only)
// let _ = collection.addTodo("Dinner at 7 pm");
// console.log("\nList after new insertion:");
// collection.getTodoList(true).forEach((item) => item.printDetails());

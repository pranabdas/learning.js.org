// this is the data model of todo item
// also see `todoItemAlt.ts` for a more elaborative class declaration
export class TodoItem {
  // typescript do not need two steps of declaring data members first, and then
  // constructor function, it can be done in a single step
  constructor(
    public id: number, // `public` keyword is important here, that is how
    // typescript compiler infers concise constructor syntax is used
    // constructor arguments with public keyword are the data member of the
    // class, there could be constructor arguments which are not data members of
    // the class
    public task: string,
    public complete: boolean = false
  ) {} // also notice body of constructor function can be empty

  // typescript assumes all methods and properties are public by default
  printDetails(): void {
    console.log(
      `${this.id}  ${this.task}${this.complete ?"  (completed)" : ""}`
    );
  }
}

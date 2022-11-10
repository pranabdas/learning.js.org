// this example shows a class definition, more consistent with other programming
// languages. However, class definition can be more concise in typescript, see
// the file: `todoItem.ts`
export class TodoItem {
  public id: number; // static typing is headline feature of typescript
  // access control keyword `public` is typescript specific, and not found in
  // standard javascript
  public task: string;
  public complete: boolean = false;

  public constructor(id: number, task: string, complete: boolean = false) {
    this.id = id;
    this.task = task;
    this.complete = complete;
  }

  public printDetails(): void {
    console.log(
      `${this.id}\t${this.task} ${this.complete ? "\t(completed)" : ""}`
    );
  }
}

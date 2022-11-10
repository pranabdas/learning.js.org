console.log("Hello TypeScript");

// split string by line-breaks
let content: string = "\na\n\nb\r\nc\n\n";
let lines: string[] = content
  .replace(/\r/g, "\n") // replace carriage return `\r` to `\n`
  .replace(/[\n]+/g, "\n") // replace multiple `\n` by single `\n`
  .replace(/^\n/, "") // trim any new line character in the beginning
  .replace(/\n$/, "") // trim any new line character at the end
  .split("\n");

console.log(lines);

// split string by whitespace
let line: string = " 1.2\t5   9.  \t 4   ";
let arr: string[] = line
  .replace(/\t/g, " ") // replace tab character(s) by space
  .replace(/[\s]+/g, " ") // replace multiple space character by single one
  .replace(/^\s/, "") // trim any spaces in the beginning
  .replace(/\s$/, "") // trim any trailing spaces
  .split(/\s/);

console.log(arr);

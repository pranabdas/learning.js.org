const myArray = [1, 3, 4, 6, 7, 9];

const [first, second, ...rest] = myArray;

console.log(first, "\n", second, "\n", rest);

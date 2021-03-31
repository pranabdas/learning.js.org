// the inner function can reference variables from the outer function after the
// outer function has executed.

function createCounter(){
  let x = 0;
  return function(){
    x = x + 1;
    return x;
  }
}

const count = createCounter();

console.log(count());
console.log(count());
console.log(count());


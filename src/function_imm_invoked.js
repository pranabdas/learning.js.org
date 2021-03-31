// Immediately invoked function expression

const getUid = (() => {
  let uid = 0;
  return () => ++uid;
//  return () => {console.log(uid); return ++uid};
})();

console.log(getUid());
console.log(getUid());

// result is not a function
var result = (function () {
    var name = "Barry";
    return name;
})();

console.log(result);


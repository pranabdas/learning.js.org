let obj1 = {value: 10};
let obj2 = obj1;
let obj3 = {value: 10};

console.log(obj1 == obj2)

console.log(obj1 == obj3)

obj2.value = 15;

console.log(obj1.value)


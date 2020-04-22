### Arrays 

```js 
var colors 
colors = ["red", "green", "blue", "orange"]; 
console.log(colors)
```

You can use another way to define arrays: 
```js 
colors = new Array("red", "green", "blue", "yellow"); 
console.log(colors)
``` 
In javascript arrays an object like we saw the `Date()` object before. Arrays can hold mixed data types: 
```js 
var mixVar = [45, "New York", true]
console.log(mixVar)
```

We can access specific item by array index, which starts from 0: 
```js 
console.log(mixVar[1])

New York
```

#### Properties and methods of array (object) 

Length of an array property: 
```js 
console.log(colors.length); 

4
``` 

Methods: reverse the array: 
```js 
console.log(colors.reverse());

["yellow", "blue", "green", "red"] (4)
```

Remove the first item: 
```js 
colors.shift(); 
console.log(colors); 

["blue", "green", "red"] (3)
```

Add new items to the front of an array: 
```js 
colors.unshift("purple", "orange"); 
console.log(colors); 

["purple", "orange", "blue", "green", "red"] (5)
``` 

Remove the last item of an array: 
```js 
var removedItem; 
removedItem = colors.pop();  // in this way you can use the removed item 
console.log(colors); 


["purple", "orange", "blue", "green"] (4)

console.log(removedItem);

red
``` 

Add items to the end of the array: 
```js 
colors.push("pink")
console.log(colors)

["purple", "orange", "blue", "green", "pink"] (5) 
```

You can remove items from the middle of the array: 
```js 
colors.splice(2, 1) // .splice(position, number of item to remove)
console.log(colors)

["purple", "orange", "green", "pink"] (4)
``` 

Copy an array using `.slice()` 
```js 
var themeColors = colors.slice()
console.log(themeColors)

["purple", "orange", "green", "pink"] (4)
```

Index of 
```js 
var pos = colors.indexOf("orange", 0); // give the position where to start the search, here 0. 
console.log(pos); 

1
```

Join the array elements: 
```js 
var stringArray = colors.join();
console.log(stringArray)

purple,orange,green,pink

var stringArray = colors.join(", "); // you can give the separator as argument 
console.log(stringArray) 

purple, orange, green, pink 
``` 

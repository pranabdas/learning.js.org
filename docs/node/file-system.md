### File system 
##### File list 
```js 
const fs = require("fs"); 

const files = fs.readdirSync("."); 

console.log(files); 
``` 

##### Read file 
```js 
const fs = require("fs"); 

const text = fs.readFileSync("../../README.md", "utf-8"); 

console.log(text); 
```

If we want to ready the binary, we just don't need to provide second encoding argument `utf-8`. When we read files synchronously, the code will wait until the job has finished. We can also read files asynchronously. Let us also implement some error handling. 

```js 
const fs = require("fs"); 

const text = fs.readFile("../../README.md", "utf-8", (err, text) => {
    if (err) {
        console.log(`An error has occurred!\n ${err}`); 
        process.exit();
    }; 
    console.log(text); 
}); 
```

##### Write file 
```js 
const fs = require("fs"); 

const md = `
# This is a new file 

We are learning how to write file using Node.js. 
`; 

fs.writeFile("./note.md", md.trim(), err => {
    if (err) {
        throw err;
    }; 
    console.log("File saved!"); 
}); 
``` 

##### Create new directory 
```js 
const fs = require("fs"); 

fs.mkdir("new-dir", err => {
    if (err) {
        throw err;
    } 
    console.log("Directory created!"); 
}); 
``` 

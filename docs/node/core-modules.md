---
title: Core modules
---

These are the modules comes preinstalled with node.js like the `path` module we
 used earlier.
```js
const path = require("path");

const dirUpload = path.join(__dirname, "uploads");

console.log(dirUpload);
```

The `util` module:
```js
const path = require("path");
const util = require("util");

util.log(path.basename(__filename));

util.log("  ^ the name of the current file.");
```

```js
28 Apr 22:37:34 - core.js
28 Apr 22:37:34 -   ^ the name of the current file.
```

We have dozens of such modules.
```js
const v8 = require("v8");

console.log(v8.getHeapStatistics());
```

```js
{
  total_heap_size: 4505600,
  total_heap_size_executable: 524288,
  total_physical_size: 3408264,
  total_available_size: 2194589720,
  used_heap_size: 2376352,
  heap_size_limit: 2197815296,
  malloced_memory: 8192,
  peak_malloced_memory: 123200,
  does_zap_garbage: 0,
  number_of_native_contexts: 1,
  number_of_detached_contexts: 0
}
```

`readline` module:
```js
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("What is you name? ", answer => {
    console.log(`Hello ${answer}`);
    process.exit();
});
```

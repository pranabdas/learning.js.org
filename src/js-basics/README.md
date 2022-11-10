# Javascript basics

Initialize this a node/npm project:
```console
mkdir js-basics
cd js-basics
npm init --yes
```

Automatically, watch for changes using `nodemon`:
```console
npm i nodemon
```

Alternatively, we can use `npx` command to `nodemon` without installing it:
```console
npx -y nodemon index.js
```

By using `nodemon`, we do not need to manually issue `node` command to reflect
changes. Now we can make changes to our source file, and `nodemon` will refresh
the node server.

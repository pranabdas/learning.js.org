# Todo (TypeScript)

Initialize the project:
```console
npm init --yes
```

Install typescript in the project:
```console
npm i typescript
```

You can install typescript globally, in your computer by:
```console
npm install --global typescript
```

If typescript is installed globally in your system, you can run `tsc` commands
from your terminal:
```console
tsc --version
```

Add following to the `package.json` script:
```js
"tsc": "tsc",
```

Now you can execute `tsc` commands by:
```console
npm run tsc --version
```

Create `.gitignore` file and add `node_modules` folder to it.

Create `tsconfig.json`:
```json
{
 "compilerOptions": {
 "target": "es2018",
 "outDir": "./dist",
 "rootDir": "./src",
 "module": "commonjs"
 }
}
```

Create source files under `src`. Compile typescript:
```console
npm run tsc
```

The compiles javascript code will be placed under `dist`. Run javascript:
```console
node dist/index.js
```

Third party packages:
```console
npm i inquirer@6.5.2
```

In order to use the latest version of inquirer, we need to update the project
from CommonJS to ESM.

Install lowdb for persistent storage:
```console
npm i lowdb@1
npm i --save-dev @types/lowdb
```

Need to refactor code in order to use latest version of lowdb.

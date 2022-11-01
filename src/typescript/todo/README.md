# Todo (TypeScript)

Initialize the project:
```js
npm init --yes
```

Install typescript in the project:
```js
npm i typescript
```

Add following to the `package.json` script:
```js
"tsc": "tsc",
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

Create source files under `src`. Compile typscript:
```bash
npm run tsc
```

The compiles javascript code will be placed under `dist`. Run javascript:
```bash
node dist/index.js
```

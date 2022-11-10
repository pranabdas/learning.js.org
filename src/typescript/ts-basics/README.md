# TypeScript basics

Initialize project:
```console
mkdir ts-basics
cd ts-basics
npm init -y
```

Install `typescript` and `tsc-watch`:
```console
npm i typescript tsc-watch
```

Create typescript configuration file `tsconfig.json` in the project root with
content:
```json
{
  "compilerOptions": {
    "target": "es2018",
    "outDir": "./dist",
    "rootDir": "./src"
  }
}
```

Add following script to `package.json`:
```js
"start": "tsc-watch --onsuccess \"node dist/index.js\""
```

Start development server:
```console
npm start
```

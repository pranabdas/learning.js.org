---
title: Updating npm packages in node project
sidebar_label: Updating npm
---
If the previous version of npm packages are already available locally inside
`node_modules` folder, following should do the job:
```bash
npm update
rm package-lock.json
mkdir empty && rsync -r --delete empty/ node_modules && rm -r node_modules empty
npm install
```

If you don't have previous npm packages locally:
```bash
# list updates before actually upgrading
npx npm-check-updates --target minor
# run the upgrade
npx npm-check-updates --upgrade --target minor

# do it carefully as upgrading major versions might break things
npx npm-check-updates --upgrade
rm package-lock.json
mkdir empty && rsync -r --delete empty/ node_modules && rm -r node_modules empty
npm i
```

### How to update packe-lock.json without installing packages?
```bash
rm package-lock.json
npm i --package-lock-only
```

---
title: Deploying React app to github pages
sidebar_label: GitHub Deploy
---

Install `gh-pages` in your project.
```
npm install gh-pages --save-dev
```

Make following changes in the `package.json`:
```js
{
  "homepage": "https://pranabdas.github.io/suvapp",
  "name": "suvapp",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "@testing-library/jest-dom": "^5.11.6",
    "@testing-library/react": "^11.2.2",
    "@testing-library/user-event": "^12.3.0",
    "react": "^17.0.1",
    "react-dom": "^17.0.1",
    "react-scripts": "4.0.1",
    "web-vitals": "^0.2.4"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject",
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
  },
  ...
```

Deploy command:
```
npm run deploy
```

:::warning

Note that if you are using `react-router` github pages deploy might not work
properly. Please consider using `hash-router` instead. Alternatively, you can
deploy via another service, e.g., Netlify.

:::

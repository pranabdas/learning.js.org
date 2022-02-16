---
title: Creating your first Electron.js application
sidebar_label: Electron.js
---

We head over to our electron folder, and issue `npm init` command. It will ask
several questions, or you can `npm init -y` which will say yes to all questions
and fill the answers with defaults. It will create a `package.json` file which
you can modify later. I have made a few modifications, and mine looks like this:
```js
{
  "name": "electronapp",
  "version": "1.0.0",
  "description": "My first electron application.",
  "main": "index.js",
  "scripts": {
    "start": "electron ."
  },
  "repository": {
    "type": "git",
    "url": "https://github.com/pranabdas/js-learning/"
  },
  "author": "Pranab Das",
  "license": "ISC",
  "dependencies": {
    "electron": "^8.2.4"
  }
}
```

Now we need to install Electron. We will install it locally.
```js
npm install electron@latest
```

Create entry point of our application which is `index.js`.
```js
const electron = require("electron");

function createWindow() {
    let appWindow = new electron.BrowserWindow({
        height: 600,
        width: 800
    });
    appWindow.loadURL("https://google.com");
};

electron.app.on('ready', createWindow);
```

Now we can start our application:
```
npm start
```

In some cases, this is all you need to have a wrapped web applications. You run
your webapp through a server. You don't need to update the app every time you
make changes to your app. But this app requires internet connection to function.
 And depending on the connection speed, the app may be sluggish. Here we are
 going to learn to create a local app. All we have to is to load a local file,
 say `index.html` instead of the external url.

```js
const electron = require('electron');

function createWindow() {

  // Create the browser window.
  let win = new electron.BrowserWindow({
    width: 800,
    height: 600,
    minWidth: 300,
    minHeight: 300,
    webPreferences: {
      // in case you need to use node methods in that window
      nodeIntegration: true
      }
  });

  // load file index.html
  win.loadFile('index.html');

  // clear the window once closed
  win.on('closed', () => {
    win = null;
  });
};

electron.app.on('ready', createWindow);
```

Where `index.html` is regular html file.

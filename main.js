const { app, BrowserWindow } = require('electron')

console.log(require('electron'));

function createWindow () {
  // Create the browser window.
  let win = new BrowserWindow({ width: 800, height: 600 })

  // and load the index.html of the app.
  win.loadFile('index.html')
}

console.log(app);

app.on('ready', createWindow)
const { app, BrowserWindow } = require('electron')
const DataStore = require('nedb')

let win;

function createWindow () {
  var userSettingsData = new DataStore({ filename: 'userSettingsData.data', autoload: true });
  userSettingsData.findOne( { _id: 'window' }, function(err, data) {
    var userWindow = {
      width: 600,
      height: 600,
      backgroundColor: '#ffffff',
      icon: `file://${__dirname}/dist/assets/logo.png`,
      frame: false
    };
    if(data) {
      userWindow.width = data.data.width;
      userWindow.height = data.data.height;
    }
    // Create the browser window.
    win = new BrowserWindow(userWindow);

    win.loadURL(`file://${__dirname}/dist/index.html`)

    win.on('resize', function () {
      userSettingsData.update({ _id: 'window'},
          { _id: 'window', data: { width: win.getSize()[0], height: win.getSize()[1] } },
          { upsert: true }
      );
    });

    // Event when the window is closed.
    win.on('closed', function () {
      //Store browser window size
          win = null
    });
  });
}

// Create window on electron intialization
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', function () {

  // On macOS specific close process
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  // macOS specific close process
  if (win === null) {
    createWindow()
  }
})
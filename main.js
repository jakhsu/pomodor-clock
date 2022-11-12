const electron = require("electron");
// Module to control application life.
const app = electron.app;
// Module to create native browser window.
const BrowserWindow = electron.BrowserWindow;
const Tray = electron.Tray;
const Menu = electron.Menu;

const path = require("path");
const url = require("url");

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow;
let isQuiting;
let tray;

app.on("before-quit", function () {
  isQuiting = true;
});

function createWindow() {
  tray = new Tray(path.join(__dirname, "/img/icons/tomato.png"));

  tray.setContextMenu(
    Menu.buildFromTemplate([
      {
        label: "Show App",
        click: function () {
          mainWindow.restore();
        },
      },
      {
        label: "Quit",
        click: function () {
          isQuiting = true;
          app.quit();
        },
      },
    ])
  );
  tray.on("click", function () {
    mainWindow.show();
  });
  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 600,
    height: 768,
    icon: __dirname + "/img/icons/tomato.png",
  }); //frame: false

  // and load the index.html of the app.
  mainWindow.loadURL(
    url.format({
      pathname: path.join(__dirname, "index.html"),
      protocol: "file:",
      slashes: true,
    })
  );

  // Open the DevTools.
  // mainWindow.webContents.openDevTools()

  // Emitted when the window is closed.
  mainWindow.on("closed", function () {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null;
  });
  mainWindow.on("minimize", function (event) {
    if (!isQuiting) {
      event.preventDefault();
      mainWindow.hide();
      event.returnValue = false;
    }
  });
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on("ready", createWindow);

// Quit when all windows are closed.
app.on("window-all-closed", function () {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", function () {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow();
  }
});
// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.

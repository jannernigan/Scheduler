const {BrowserWindow, app} = require('electron');
const path = require('path');
function mainWindow() {
    const win = new BrowserWindow({
        width: 1000,
        height: 500,
        backgroundColor: "white",
        webPreferences: {
            nodeIntegration: false,
            worldSafeExecuteJavaScript: true,
            contextIsolation: true
        }
    })

    win.loadFile('main.html');
}
app.whenReady().then(mainWindow);
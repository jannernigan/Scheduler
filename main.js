const {win, BrowserWindow, app} = require('electron');

function createWindow() {
    const win = new BrowserWindow({
        width: 400,
        height: 150,
        backgroundColor: "white",
        webPreferences: {
            nodeIntegration: false,
            worldSafeExecuteJavaScript: true,
            contextIsolation: true
        }
    })

    win.loadFile('main.html');
}

app.whenReady().then(createWindow);
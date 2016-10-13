const {app, BrowserWindow, Tray} = require('electron');
const ipcMain = require('electron').ipcMain;

let window;

function createWindow () {

    window = new BrowserWindow({width: 800, height: 800});

    window.loadURL('file://' + __dirname + '/../inbox-master/index.html');

    //window.webContents.openDevTools();

    window.setMenu(null);
    window.on('closed', () => {
        window = null;
    });


}

app.on('ready', createWindow);

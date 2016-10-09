const {app, BrowserWindow, Tray} = require('electron');
const ipcMain = require('electron').ipcMain;
const notifier = require('node-notifier');

let window;

function createWindow () {

    window = new BrowserWindow({width: 800, height: 800});

    window.loadURL('file://' + __dirname + '/index.html');

    //window.webContents.openDevTools();

    window.on('closed', () => {
        window = null
    });

    ipcMain.on('open-file-upload', () => {
        var settings = new BrowserWindow({
            width: 400,
            height: 200,
            backgroundColor: '#cccccc',
            parent: window,
            modal: true,
            title: 'Upload tray',
            resize: false
        });
        settings.loadURL('file://' + __dirname + '/example1.html');
        settings.setMenu(null);
    });

    ipcMain.on('upload-tray-icon', (item, data) => {
        const tray = new Tray(data);

        tray.on('click', () => {
            window.isVisible() ? window.hide() : window.show();
        });

        notifier.notify({
            title: 'Tray was changed',
            message: "Some text",
            icon: data,
            sound: true
        });
    });
}

app.on('ready', createWindow);

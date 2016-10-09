const {Menu} = require('electron').remote;
const ipcRenderer = require('electron').ipcRenderer;

const template = [
    {
        label: 'Settings',
        submenu: [
            {
                label: 'Show tray',
                accelerator: 'CmdOrCtrl+Q',
                click: () => {
                    ipcRenderer.send('open-file-upload');
                }
            }
        ]
    }
];

Menu.setApplicationMenu(Menu.buildFromTemplate(template));

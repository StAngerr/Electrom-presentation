const container = document.getElementById('container');
const ipcRenderer = require('electron').ipcRenderer;

container.ondragover = () => {
    return false;
};

container.ondragleave = container.ondragend = () => {
    return false;
};

container.ondrop = (e) => {
    e.preventDefault();
    let filePath = e.dataTransfer.files[0] && e.dataTransfer.files[0].path;

    ipcRenderer.send('upload-tray-icon', filePath);
    return false;
};


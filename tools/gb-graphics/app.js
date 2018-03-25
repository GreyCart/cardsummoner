let electron = require('electron');
let app = electron.app;
let bw = electron.BrowserWindow;

let debugMode = false;  // Toggle this to true for extra width + dev console

function getWidth(w, flag) {
    if(flag) {
        return w * 1.5;
    } else {
        return w;
    }
}

let winOpts = {         // Window options
    width: getWidth(732, debugMode),
    height: 830
};

app.on('ready', function() {
    let win = new bw(winOpts);

    win.loadURL(`file://${__dirname}/index.html`);

    if(debugMode) {
        win.webContents.openDevTools();
    }
});
const {app, BrowserWindow} = require('electron');

function isDev() {
  // return process.env['NODE_ENV'] === 'development'
  return true;
}

function createWindow() {
  const win = new BrowserWindow({
    width: 850,
    height: 640,
    webPreferences: {
      nodeIntegration: true,
    },
    titleBarStyle: 'hidden',
  });

  if (isDev()) {
    win.loadURL('http://127.0.0.1:4300');
  } else {
    win.loadFile('./dist/wechat-app/index.html');
  }

  win.webContents.openDevTools();
}

app.on('ready', createWindow);

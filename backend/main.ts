import { app, BrowserWindow, Menu } from 'electron';
import * as path from 'path';

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      //preload: path.join(__dirname, 'preload.js') // optional
    },
  });

  // Remove default menu
  Menu.setApplicationMenu(null);

  mainWindow.loadURL('http://localhost:5173');

  
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

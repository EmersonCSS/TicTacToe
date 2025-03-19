import { app, BrowserWindow, ipcMain, Menu } from 'electron';
import * as path from 'path';
const { cleanGame, makeMove, getBoard } = require('./game/game');

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      preload: path.join(__dirname, 'preload.js') 
    },
  });

  // Remove default menu
  Menu.setApplicationMenu(null);

  mainWindow.loadURL('http://localhost:5173');

  
}

app.whenReady().then(createWindow);

// IPC handlers to interface with the game backend
ipcMain.handle('game:clean', () => cleanGame());
ipcMain.handle('game:move', (event, { row, col }) => makeMove(row, col));
ipcMain.handle('game:getBoard', () => getBoard());

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});



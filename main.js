const { app, BrowserWindow, ipcMain, dialog } = require('electron');
const { spawn, exec } = require('child_process');
const path = require('path');
const fs = require('fs');

let mainWindow;
let scrcpyProcess = null;
let lastUsedPath = null;

function createWindow() {
    mainWindow = new BrowserWindow({
        width: 1200,
        height: 900,
        backgroundColor: '#0a0a0f',
        autoHideMenuBar: true,
        icon: path.join(__dirname, 'build/shanu.png'), 
        webPreferences: {
            nodeIntegration: true, 
            contextIsolation: false 
        }
    });

    mainWindow.loadFile('index.html');
}

function getBinaryPath(binaryName, customFolder) {
    if (customFolder) {
        const fullPath = path.join(customFolder, binaryName.endsWith('.exe') ? binaryName : `${binaryName}.exe`);
        if (fs.existsSync(fullPath)) {
            lastUsedPath = customFolder; 
            return fullPath;
        }
    }
    return binaryName;
}

// Check Binary
ipcMain.handle('check-scrcpy', async (event, customPath) => {
    return new Promise((resolve) => {
        const exePath = getBinaryPath('scrcpy', customPath);
        exec(`"${exePath}" --version`, (error) => {
            if (error) resolve({ found: false, message: 'Scrcpy not found' });
            else resolve({ found: true, message: 'Scrcpy 3.x Ready' });
        });
    });
});

// Get Devices
ipcMain.handle('get-devices', async (event, customPath) => {
    return new Promise((resolve) => {
        const adbPath = getBinaryPath('adb', customPath);
        exec(`"${adbPath}" devices`, (error, stdout) => {
            if (error) return resolve({ error: true, message: 'ADB error' });
            const lines = stdout.split('\n');
            const devices = lines.slice(1)
                .filter(line => line.includes('\tdevice'))
                .map(line => line.split('\t')[0].trim());
            resolve({ error: false, devices });
        });
    });
});

// Kill ADB
ipcMain.handle('kill-adb', async (event, customPath) => {
    return new Promise((resolve) => {
        const adbPath = getBinaryPath('adb', customPath || lastUsedPath);
        
        exec(`"${adbPath}" kill-server`, () => {
            const forceCmd = process.platform === 'win32' 
                ? 'taskkill /F /IM adb.exe /T' 
                : 'pkill -9 adb';
                
            exec(forceCmd, (err) => {
                resolve({ success: true, message: 'ADB Stack Terminated' });
            });
        });
    });
});

// Wireless Pairing
ipcMain.handle('adb-pair', async (event, { ip, code, customPath }) => {
    return new Promise((resolve) => {
        const adbPath = getBinaryPath('adb', customPath);
        exec(`"${adbPath}" pair ${ip} ${code}`, (error, stdout) => {
            if (error) resolve({ success: false, message: error.message });
            else resolve({ success: true, message: stdout.trim() });
        });
    });
});

// Wireless Connect
ipcMain.handle('adb-connect', async (event, { ip, customPath }) => {
    return new Promise((resolve) => {
        const adbPath = getBinaryPath('adb', customPath);
        exec(`"${adbPath}" connect ${ip}`, (error, stdout) => {
            if (error) resolve({ success: false, message: error.message });
            else resolve({ success: true, message: stdout.trim() });
        });
    });
});

// Get Device Info
ipcMain.handle('get-device-info', async (event, { device, customPath }) => {
    return new Promise((resolve) => {
        const adbPath = getBinaryPath('adb', customPath);
        const deviceFlag = device ? `-s ${device}` : '';
        
        exec(`"${adbPath}" ${deviceFlag} shell getprop`, (error, stdout) => {
            if (error) {
                resolve({ success: false, message: error.message });
                return;
            }
            
            const info = {};
            const lines = stdout.split('\n');
            
            const props = {
                model: /\[ro\.product\.model\]:\s*\[(.*?)\]/,
                manufacturer: /\[ro\.product\.manufacturer\]:\s*\[(.*?)\]/,
                androidVersion: /\[ro\.build\.version\.release\]:\s*\[(.*?)\]/,
                sdk: /\[ro\.build\.version\.sdk\]:\s*\[(.*?)\]/,
                abi: /\[ro\.product\.cpu\.abi\]:\s*\[(.*?)\]/,
                brand: /\[ro\.product\.brand\]:\s*\[(.*?)\]/,
                device: /\[ro\.product\.device\]:\s*\[(.*?)\]/,
            };
            
            lines.forEach(line => {
                Object.keys(props).forEach(key => {
                    const match = line.match(props[key]);
                    if (match) info[key] = match[1];
                });
            });
            
            resolve({ success: true, info });
        });
    });
});

// Run Scrcpy
ipcMain.on('run-scrcpy', (event, config) => {
    if (scrcpyProcess) return;
    const args = [];
    if (config.device) args.push('-s', config.device);
    if (config.res !== "0") args.push('-m', config.res);
    args.push('-b', `${config.bitrate}M`, '--max-fps', config.fps);
    if (config.stayAwake) args.push('--stay-awake');
    if (config.turnOff) args.push('--turn-screen-off');
    if (!config.audioEnabled) args.push('--no-audio');
    if (config.alwaysOnTop) args.push('--always-on-top');
    if (config.rotation !== "0") args.push('--orientation', config.rotation);
    if (config.virtualDisplay) {
        args.push(`--new-display=${config.vdWidth}x${config.vdHeight}/${config.vdDpi}`);
    }

    let executable = getBinaryPath('scrcpy', config.scrcpyPath);
    scrcpyProcess = spawn(executable, args);
    mainWindow.webContents.send('scrcpy-status', true);

    scrcpyProcess.stdout.on('data', data => mainWindow.webContents.send('scrcpy-log', data.toString()));
    scrcpyProcess.stderr.on('data', data => mainWindow.webContents.send('scrcpy-log', data.toString()));
    
    scrcpyProcess.on('close', (code) => {
        scrcpyProcess = null;
        if (mainWindow) {
            mainWindow.webContents.send('scrcpy-status', false);
            mainWindow.webContents.send('scrcpy-log', `Session closed (Code: ${code})`);
        }
    });
});

ipcMain.on('stop-scrcpy', () => { if (scrcpyProcess) scrcpyProcess.kill(); });

ipcMain.handle('select-folder', async () => {
    const result = await dialog.showOpenDialog(mainWindow, { properties: ['openDirectory'] });
    return result.canceled ? null : result.filePaths[0];
});

app.whenReady().then(createWindow);
app.on('window-all-closed', () => { if (process.platform !== 'darwin') app.quit(); });

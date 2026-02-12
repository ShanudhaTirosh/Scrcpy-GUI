# 🔥 ShanuFx Android Control

<div align="center">

![Version](https://img.shields.io/badge/version-2026.1.21-purple)
![Platform](https://img.shields.io/badge/platform-Windows-blue)
![License](https://img.shields.io/badge/license-MIT-green)
![Electron](https://img.shields.io/badge/Electron-40.0.0-47848f)

**Premium Android Device Mirroring & Control Suite**

Built with Electron + Scrcpy for seamless wireless and USB device management

[Download Latest Release](#installation) • [Features](#features) • [Quick Start](#quick-start) • [Documentation](#documentation)

</div>

---

## 🌟 Overview

**ShanuFx Android Control** is a powerful, premium Electron-based GUI for [Scrcpy](https://github.com/Genymobile/scrcpy) - the industry-leading Android screen mirroring solution. Control your Android devices wirelessly or via USB with a beautiful, modern interface and advanced features.

### ✨ What Makes It Special?

- 🎨 **Premium UI/UX** - Cyber-tech themed interface with glassmorphism and smooth animations
- 🔌 **Dual Connectivity** - Seamless USB and Wireless (WiFi) connections
- ⚡ **Performance Presets** - One-click optimization for different use cases
- 📊 **Device Intelligence** - Real-time device info and connection monitoring
- ⏱️ **Session Tracking** - Live timer for active mirroring sessions
- 🌓 **Theme Options** - Dark and Ultra Dark modes
- 💾 **Smart Persistence** - Remembers all your settings and connection history

---

## 🚀 Features

### Core Capabilities

#### 🎮 Device Control
- ✅ **USB Connection** - Automatic device detection via USB debugging
- ✅ **Wireless Mirroring** - Connect via WiFi (IP:Port)
- ✅ **Wireless Pairing** - First-time device pairing support
- ✅ **Multi-Device Support** - Manage multiple Android devices
- ✅ **Auto-Connect** - Automatic reconnection to saved devices

#### 🎥 Video Settings
- **Resolution Control** - Native, 1080p, 720p, 480p presets
- **Bitrate Adjustment** - 1-30 Mbps sliding scale
- **Frame Rate** - 30/60/120 FPS options
- **Screen Rotation** - 0°/90°/180°/270° orientation
- **Virtual Display** - Create secondary displays (Android 10+)

#### ⚡ Performance Presets
| Preset | Resolution | Bitrate | FPS | Best For |
|--------|-----------|---------|-----|----------|
| ⚡ Performance | 480p | 4 Mbps | 30 | Low bandwidth, older devices |
| ⚖️ Balanced | 720p | 8 Mbps | 60 | Daily use, smooth experience |
| 🔥 Ultra Quality | 1080p | 16 Mbps | 60 | Gaming, high-quality streaming |

#### 🛠️ Advanced Options
- 🔋 **Stay Awake** - Prevent device screen timeout
- 📱 **Turn Screen Off** - Mirror with device screen off (save battery)
- 🔊 **Audio Control** - Enable/disable audio forwarding
- 📌 **Always On Top** - Keep mirror window above others
- 🖥️ **Virtual Display Mode** - Custom resolution secondary displays

#### 📊 Device Information
- Device Model & Manufacturer
- Android Version & SDK Level
- CPU Architecture (ABI)
- Brand & Device Identifier
- Connection Type Detection

#### 💡 Smart Features
- 📝 **Connection History** - Quick access to recent wireless connections
- ⏱️ **Session Timer** - Track mirroring session duration
- 🏷️ **Connection Badges** - Visual USB/Wireless indicators
- 🌓 **Dual Themes** - Dark and Ultra Dark modes
- 💾 **Settings Persistence** - All preferences auto-saved
- 📋 **Live Logs** - Real-time system activity monitoring

---

## 📦 Installation

### Prerequisites

1. **Scrcpy 3.x** - Download from [official releases](https://github.com/Genymobile/scrcpy/releases)
2. **ADB (Android Debug Bridge)** - Included with Scrcpy or [platform-tools](https://developer.android.com/tools/releases/platform-tools)
3. **Android Device** with USB debugging enabled

### Quick Setup

#### Option 1: Portable Executable (Recommended)
1. Download `ShanuFx-Android-Control.exe` from [Releases](../../releases)
2. Run the executable - no installation required!
3. Click "Select Folder" to point to your Scrcpy installation
4. Connect device and start mirroring

#### Option 2: Build from Source
```bash
# Clone repository
git clone https://github.com/yourusername/shanufx-android-control.git
cd shanufx-android-control

# Install dependencies
npm install

# Run development version
npm start

# Build portable executable
npm run build
```

### Android Device Setup

1. **Enable USB Debugging:**
   - Go to `Settings` → `About Phone`
   - Tap `Build Number` 7 times to enable Developer Options
   - Go to `Settings` → `Developer Options`
   - Enable `USB Debugging`

2. **For Wireless Connection:**
   - Enable `Wireless Debugging` in Developer Options
   - Note the IP address and port
   - Use "Pair" option for first-time connection

---

## 🎯 Quick Start

### USB Connection
1. Connect Android device via USB cable
2. Accept USB debugging authorization on device
3. Device appears automatically in dropdown
4. Click **"LAUNCH MIRRORING"**

### Wireless Connection

#### First Time Pairing:
1. Enable **Wireless Debugging** on Android
2. Tap **"Pair device with pairing code"**
3. Enter IP:Port and 6-digit code in app
4. Click **"PAIR DEVICE"**

#### Regular Connection:
1. Switch to **"Wireless"** tab
2. Enter device IP:Port (e.g., `192.168.1.100:5555`)
3. Click **"CONNECT"**
4. Enable **"Auto"** checkbox for auto-reconnect
5. Device appears in dropdown
6. Click **"LAUNCH MIRRORING"**

### Using Performance Presets
- Click **⚡ Performance** for low-bandwidth scenarios
- Click **⚖️ Balanced** for everyday use (default)
- Click **🔥 Ultra Quality** for gaming/streaming

---

## 📖 Documentation

### Folder Structure
```
shanufx-android-control/
├── build/
│   ├── shanu.png          # App window icon
│   └── shanu.ico          # Windows executable icon
├── main.js                # Electron main process
├── index.html             # UI and frontend logic
├── package.json           # Project configuration
└── README.md             # This file
```

### Custom Scrcpy Path
If Scrcpy is not in system PATH:
1. Click folder icon in "Binary Status" panel
2. Select folder containing `scrcpy.exe` and `adb.exe`
3. Path is saved for future sessions

### Keyboard Shortcuts (in Scrcpy window)
- `Ctrl + O` - Turn device screen off
- `Ctrl + Shift + O` - Turn device screen on
- `Ctrl + R` - Rotate screen
- `Ctrl + N` - Expand notification panel
- `Ctrl + S` - Screenshot
- Full list: [Scrcpy shortcuts](https://github.com/Genymobile/scrcpy#shortcuts)

### Troubleshooting

#### Device Not Detected
- ✅ Verify USB debugging is enabled
- ✅ Check USB cable quality (use data cable, not charge-only)
- ✅ Try different USB port
- ✅ Click **"Kill ADB"** to reset ADB server
- ✅ Reinstall device drivers

#### Wireless Connection Failed
- ✅ Ensure device and PC are on same network
- ✅ Check firewall settings
- ✅ Verify port is correct (usually 5555)
- ✅ Try USB connection first, then enable wireless

#### Poor Performance
- ✅ Use **⚡ Performance** preset
- ✅ Lower resolution to 480p
- ✅ Reduce bitrate to 2-4 Mbps
- ✅ Disable audio forwarding
- ✅ Close background apps on device

#### "Scrcpy not found" Error
- ✅ Download Scrcpy from [official releases](https://github.com/Genymobile/scrcpy/releases)
- ✅ Use "Select Folder" to point to Scrcpy location
- ✅ Ensure both `scrcpy.exe` and `adb.exe` are in same folder

---

## 🔧 Configuration

### Settings Persistence
All settings are automatically saved:
- Video quality preferences
- Connection history
- Theme selection
- Custom Scrcpy path
- Virtual display parameters

### Advanced Configuration

#### Virtual Display Mode
Create a secondary display on your device:
1. Enable **"Virtual Display Mode"** checkbox
2. Set custom Width × Height × DPI
3. Default: 1920×1080 @ 320 DPI
4. Requires Android 10+

#### Session Management
- **Session Timer** - Automatically starts when mirroring begins
- **Auto-Connect** - Enable for automatic wireless reconnection
- **Connection History** - Click recent IPs for quick reconnection

---

## 🛠️ Development

### Tech Stack
- **Electron 40.0.0** - Desktop framework
- **Node.js** - Backend runtime
- **TailwindCSS** - Utility-first CSS
- **Scrcpy 3.x** - Android mirroring engine
- **ADB** - Android Debug Bridge

### Build Configuration

#### Development Mode
```bash
npm start
```

#### Production Build
```bash
npm run build
```
Output: `dist/ShanuFx Android Control.exe`

### Custom Icons
Replace files in `/build/` folder:
- `shanu.png` - App window icon (any size, square recommended)
- `shanu.ico` - Windows executable icon (must be .ico format)

Use [online converters](https://www.icoconverter.com/) to create .ico files.

---

## 🤝 Contributing

Contributions are welcome! Here's how:

1. Fork the repository
2. Create feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open Pull Request

### Development Guidelines
- Maintain backward compatibility
- Test all IPC handlers thoroughly
- Follow existing code style
- Update documentation for new features

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Credits

- **Scrcpy** - [Genymobile/scrcpy](https://github.com/Genymobile/scrcpy) - The amazing Android mirroring tool
- **Electron** - Desktop application framework
- **TailwindCSS** - Styling framework

---

## 📧 Support

- 🐛 **Bug Reports** - [Open an issue](../../issues)
- 💡 **Feature Requests** - [Submit a request](../../issues)
- 📖 **Documentation** - See [Wiki](../../wiki) (coming soon)

---

## 🔗 Links

- [Scrcpy Official Repository](https://github.com/Genymobile/scrcpy)
- [Electron Documentation](https://www.electronjs.org/docs)
- [Android Developer Platform Tools](https://developer.android.com/tools/releases/platform-tools)

---

<div align="center">

**Built with ❤️ by ShanuFx**

© 2026 ShanuFx. All rights reserved.

⭐ Star this repo if you find it useful!

</div>

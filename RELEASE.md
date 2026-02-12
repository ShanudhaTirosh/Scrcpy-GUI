# 🔥 ShanuFx Android Control v2026.1.21

## Premium Android Mirroring & Control Suite

A complete rebrand and major upgrade of the Scrcpy GUI, now featuring a premium cyber-tech interface, advanced performance controls, and intelligent device management.

---

## 🎉 What's New

### ✨ Major Features

#### 🎨 **Complete Rebrand**
- **New Identity**: Rebranded from "Scrcpy GUI" to "ShanuFx Android Control"
- **Premium Design**: Cyber-tech themed UI with purple/blue gradients
- **Glassmorphism Effects**: Modern frosted glass panels with backdrop blur
- **Animated Elements**: Smooth transitions, glowing buttons, pulsing indicators

#### ⚡ **Performance Presets**
One-click optimization for different scenarios:
- **⚡ Performance Mode** - 480p, 4 Mbps, 30 FPS (low bandwidth)
- **⚖️ Balanced Mode** - 720p, 8 Mbps, 60 FPS (recommended)
- **🔥 Ultra Quality** - 1080p, 16 Mbps, 60 FPS (gaming/streaming)

#### 🌓 **Dual Theme System**
- **Dark Mode** - Default elegant dark theme
- **Ultra Dark Mode** - Deeper blacks for OLED displays
- Theme preference persists across sessions

#### 📊 **Device Information Panel**
Real-time device intelligence with one click:
- Device Model & Manufacturer
- Android Version & SDK Level
- CPU Architecture (ARM/x86)
- Brand Identifier
- Device ID

#### ⏱️ **Session Timer**
- Live session duration tracking
- Automatic start/stop with mirroring
- HH:MM:SS format display
- Visual indicator with animated pulse

#### 🏷️ **Smart Connection Badges**
Auto-detecting connection type:
- **USB** - Green badge with USB icon
- **Wireless** - Blue badge with WiFi icon
- Updates dynamically when switching devices

---

## 🚀 Key Improvements

### UI/UX Enhancements
- ✅ Increased spacing and padding for premium feel
- ✅ Enhanced typography hierarchy with multiple font weights
- ✅ Custom gradient scrollbars
- ✅ Animated status indicators with pulse effects
- ✅ Improved button hover states with glow effects
- ✅ Modal dialogs with blur overlays
- ✅ Gradient text effects for branding
- ✅ Smoother transitions throughout interface

### Technical Improvements
- ✅ **Better Settings Persistence** - All preferences auto-saved to localStorage
- ✅ **Connection History** - Quick access to 5 most recent wireless connections
- ✅ **Enhanced Error Handling** - More descriptive error messages
- ✅ **Improved Device Detection** - Auto-detection of connection type
- ✅ **Smart Auto-Connect** - Automatic reconnection on app launch
- ✅ **Device Info IPC Handler** - New backend handler for device information

### Code Quality
- ✅ Clean, well-commented code structure
- ✅ Separated concerns for better maintainability
- ✅ Consistent naming conventions
- ✅ Modular function architecture
- ✅ No breaking changes to existing functionality

---

## 📦 Installation

### Windows Portable (Recommended)
1. Download `ShanuFx-Android-Control.exe`
2. Run directly - no installation required
3. Point to Scrcpy folder on first launch
4. Start mirroring!

### Build from Source
```bash
npm install
npm start      # Development
npm run build  # Production build
```

---

## 🔧 Requirements

### Software
- **Scrcpy 3.x** - [Download here](https://github.com/Genymobile/scrcpy/releases)
- **Windows 10/11** - 64-bit
- **ADB** - Included with Scrcpy

### Hardware
- **Android Device** - Android 5.0+ (API 21+)
- **USB Cable** - Data cable (not charge-only)
- **WiFi Network** - For wireless mirroring (optional)

---

## 🎯 Quick Start Guide

### First Time Setup

#### 1. Install Scrcpy
Download and extract Scrcpy 3.x from official releases.

#### 2. Enable USB Debugging on Android
```
Settings → About Phone → Tap "Build Number" 7 times
Settings → Developer Options → Enable "USB Debugging"
```

#### 3. Launch ShanuFx Android Control
- Open the application
- Click folder icon to select Scrcpy installation folder
- Connect your Android device via USB

#### 4. Start Mirroring
- Device appears in dropdown automatically
- Select performance preset (Balanced recommended)
- Click "LAUNCH MIRRORING"

### Wireless Setup

#### First Time Pairing:
```
1. Enable "Wireless Debugging" on Android
2. Tap "Pair device with pairing code"
3. Enter IP:Port and 6-digit code in app
4. Click "PAIR DEVICE"
```

#### Regular Connection:
```
1. Switch to "Wireless" tab
2. Enter IP:Port (e.g., 192.168.1.100:5555)
3. Click "CONNECT"
4. Enable "Auto" for auto-reconnect
```

---

## 📊 Feature Comparison

| Feature | Old Version | ShanuFx v2026.1.21 |
|---------|-------------|-------------------|
| Theme Options | 1 (Dark) | 2 (Dark + Ultra Dark) |
| Performance Presets | ❌ None | ✅ 3 Presets |
| Device Information | ❌ No | ✅ Full Details |
| Session Timer | ❌ No | ✅ Live Timer |
| Connection Badges | ❌ No | ✅ Auto-detect |
| UI Design | Basic | Premium Cyber-tech |
| Settings Persistence | Partial | Complete |
| Connection History | ❌ No | ✅ 5 Recent |
| Modal Dialogs | ❌ No | ✅ Yes |
| Animated Elements | Minimal | Extensive |

---

## 🛠️ Technical Details

### Built With
- **Electron 40.0.0** - Desktop framework
- **Node.js** - JavaScript runtime
- **TailwindCSS** - Utility-first CSS framework
- **Scrcpy 3.x** - Android mirroring engine
- **ADB** - Android Debug Bridge

### Architecture
```
┌─────────────────────────────────────┐
│         Electron Main Process        │
│  (main.js - IPC handlers & spawning) │
└──────────────┬──────────────────────┘
               │ IPC Communication
┌──────────────▼──────────────────────┐
│      Renderer Process (index.html)   │
│  • UI/UX Layer                       │
│  • Settings Management               │
│  • Device Detection                  │
│  • Connection Logic                  │
└──────────────┬──────────────────────┘
               │ Child Process
┌──────────────▼──────────────────────┐
│        Scrcpy + ADB Binaries         │
│  • Screen Mirroring                  │
│  • Input Forwarding                  │
│  • Audio Streaming                   │
└─────────────────────────────────────┘
```

### New IPC Handlers
```javascript
// Device information retrieval
ipcMain.handle('get-device-info', async (event, { device, customPath }) => {
  // Returns: model, manufacturer, androidVersion, sdk, abi, brand, device
});
```

### Storage Keys
```javascript
localStorage.setItem('shanufx_settings', {...})    // User preferences
localStorage.setItem('shanufx_wireless_history', [...]) // Connection history
localStorage.setItem('shanufx_theme', 'dark|ultra-dark') // Theme selection
localStorage.setItem('scrcpyPath', '...') // Custom binary path
```

---

## 🎨 Customization

### Custom App Icons
Replace files in `/build/` folder:
- `shanu.png` - App window icon (PNG, any size)
- `shanu.ico` - Windows executable icon (ICO format)

### Theme Colors (CSS Variables)
```css
:root {
    --bg-primary: #0a0a0f;      /* Main background */
    --bg-secondary: #141420;     /* Panel background */
    --accent-purple: #a855f7;    /* Primary accent */
    --accent-blue: #3b82f6;      /* Secondary accent */
    --accent-cyan: #06b6d4;      /* Tertiary accent */
}
```

---

## 🐛 Bug Fixes

- ✅ Fixed ADB server cleanup on Windows
- ✅ Improved device selection after wireless connection
- ✅ Better error messages for connection failures
- ✅ Resolved settings persistence issues
- ✅ Fixed bitrate slider not saving values
- ✅ Corrected virtual display parameter passing

---

## 📋 Known Issues

- Virtual Display mode requires Android 10+ (Scrcpy limitation)
- Wireless pairing may timeout on slow networks - retry if needed
- Some devices require specific ADB drivers (Google USB Driver recommended)

---

## 🔜 Roadmap

### Upcoming Features
- [ ] Multi-device simultaneous mirroring
- [ ] Recording functionality (save to file)
- [ ] Custom keyboard mapping profiles
- [ ] Screen recording history
- [ ] Device battery status indicator
- [ ] Advanced codec selection
- [ ] Custom resolution profiles
- [ ] Export/Import settings
- [ ] Update checker
- [ ] Portable mode (no installation)

---

## 📝 Changelog

### v2026.1.21 (Current Release)

#### Added
- ✨ Performance preset system (Performance/Balanced/Ultra)
- ✨ Dual theme support (Dark/Ultra Dark)
- ✨ Device information panel with full specs
- ✨ Session timer with live duration tracking
- ✨ Smart connection badges (USB/Wireless detection)
- ✨ Modal dialog system for device info
- ✨ Connection history (5 recent wireless IPs)
- ✨ Enhanced glassmorphism UI effects
- ✨ Animated status indicators
- ✨ Gradient text effects
- ✨ Custom scrollbar styling

#### Changed
- 🎨 Complete UI redesign with cyber-tech theme
- 🎨 Improved color scheme (purple/blue gradients)
- 🎨 Enhanced button animations and hover states
- 🎨 Better typography hierarchy
- 🎨 Increased spacing and padding
- 📦 Rebranded to "ShanuFx Android Control"
- 📦 Updated app icons to shanu.png/shanu.ico
- 📦 Changed package.json metadata
- 📦 Updated footer branding

#### Improved
- ⚡ Better settings persistence
- ⚡ Faster device detection
- ⚡ Smoother animations
- ⚡ More responsive UI
- ⚡ Cleaner code structure

#### Fixed
- 🐛 Settings not saving properly
- 🐛 Device selection after wireless connect
- 🐛 Bitrate slider value persistence
- 🐛 ADB cleanup on Windows

---

## 🙏 Credits

### Core Technology
- **[Scrcpy](https://github.com/Genymobile/scrcpy)** by Genymobile - The best Android screen mirroring solution
- **[Electron](https://www.electronjs.org/)** - Cross-platform desktop framework
- **[TailwindCSS](https://tailwindcss.com/)** - Modern CSS framework

### Design Inspiration
- Modern cyber-tech aesthetics
- Glassmorphism design trends
- Premium software interfaces

---

## 📄 License

This project is licensed under the MIT License.

```
MIT License

Copyright (c) 2026 ShanuFx

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

---

## 📞 Support & Community

### Get Help
- 📖 **Documentation** - See [README.md](README.md) for full guide
- 🐛 **Bug Reports** - [Open an issue](../../issues)
- 💡 **Feature Requests** - [Submit ideas](../../issues)
- 💬 **Discussions** - [Join conversations](../../discussions)

### Stay Updated
- ⭐ Star this repository for updates
- 👁️ Watch for new releases
- 🔔 Enable notifications

---

## 📦 Download

### Windows (64-bit)
- **Portable Executable** - `ShanuFx-Android-Control.exe` (No installation required)
- **Size** - ~150 MB (includes Electron runtime)
- **Requirements** - Windows 10/11, Scrcpy 3.x

### Checksums (SHA-256)
```
# Will be generated after build
ShanuFx-Android-Control.exe: [CHECKSUM]
```

---

## 🚀 Getting Started

```bash
# Quick Start (3 steps)
1. Download ShanuFx-Android-Control.exe
2. Point to your Scrcpy folder
3. Connect device and mirror!

# Build from Source
git clone https://github.com/yourusername/shanufx-android-control.git
cd shanufx-android-control
npm install
npm start
```

---

<div align="center">

## ⭐ Star History

[![Star History Chart](https://api.star-history.com/svg?repos=yourusername/shanufx-android-control&type=Date)](https://star-history.com/#yourusername/shanufx-android-control&Date)

---

**Built with ❤️ by ShanuFx**

🔥 Premium Android Control Suite for Windows

© 2026 ShanuFx. All rights reserved.

[Download](../../releases) • [Documentation](README.md) • [Report Bug](../../issues) • [Request Feature](../../issues)

</div>

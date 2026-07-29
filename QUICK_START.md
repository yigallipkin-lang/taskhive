# Quick Start - Web + Mobile Calendar

## 🎯 TL;DR - Just Do This

### 1️⃣ Firebase Setup (5 min)
```
Open: mo-snuf-calendar/FIREBASE_SETUP_REQUIRED.md
Follow 7 steps → Get Firebase credentials
```

### 2️⃣ Update Config Files
```
Mobile:  mo-snuf-calendar/src/config/firebase.ts
Web:     mo-snuf-calendar-web/src/config/firebase.ts

Paste your Firebase config in both files
```

### 3️⃣ Terminal 1 - Mobile App
```bash
cd "C:\Users\yigal\Documents\Claude working library\mo-snuf-calendar"
npm start

→ Scan QR code with Expo Go on your phone
```

### 4️⃣ Terminal 2 - Web App
```bash
cd "C:\Users\yigal\Documents\Claude working library\mo-snuf-calendar-web"
npm start

→ Opens http://localhost:5173 automatically
```

### 5️⃣ Test Sync
- Create calendar on mobile → appears on web instantly
- Add event on web → appears on mobile instantly
- Share link from either app → partner sees everything

## 📁 Two Apps, One Database

| | Mobile | Web |
|---|--------|-----|
| **Location** | `mo-snuf-calendar/` | `mo-snuf-calendar-web/` |
| **Tech** | React Native + Expo | React + Vite |
| **View** | Phone/Expo Go | Browser |
| **Best For** | On-the-go | Desktop |
| **Database** | Firebase Firestore (SHARED) | Firebase Firestore (SHARED) |

## 🔑 Key Commands

```bash
# Mobile - Terminal 1
cd mo-snuf-calendar && npm start

# Web - Terminal 2
cd mo-snuf-calendar-web && npm start

# Stop either: Press Ctrl+C
```

## ✨ Features

✓ Real-time sync between mobile & web
✓ Create shared calendars
✓ Add events with date/time
✓ Share via invite links
✓ Month, Week, Agenda views (web)
✓ Offline support (mobile)
✓ Zero setup - anonymous auth

## ⚠️ Don't Forget

1. **Firebase setup FIRST** - Required for both apps
2. **Keep both terminals open** - Servers must stay running
3. **Update both config files** - Mobile AND web
4. **Same Firebase project** - Both apps must use same credentials

## 🆘 Troubleshooting

**"Can't see QR code?"**
- Wait 10 seconds after "Compiled successfully"
- Scroll up in terminal to find it

**"Events not syncing?"**
- Both terminals running?
- Firebase credentials correct in both?
- Check browser console (F12) for errors

**"Web app won't load?"**
- Is Terminal 2 running?
- Try http://localhost:5173
- Refresh browser (F5)

**"Can't join from mobile?"**
- Use full invite link (includes `?calendarId=...`)
- Copy from "Share" button
- Both apps must use same Firebase

## 📖 Full Documentation

For detailed setup: `WEB_AND_MOBILE_SETUP.md`
Mobile specifics: `mo-snuf-calendar/START_HERE.md`
Web specifics: `mo-snuf-calendar-web/README.md`

## 🚀 You're Ready!

Everything is installed and ready. Just:
1. Complete Firebase setup
2. Start both servers
3. Test sync
4. Start using!

Questions? Check the detailed guides above.

# Mo&Snuf Calendar - Complete Setup Guide

**Both Web & Mobile versions are ready!** Follow this guide to get everything running.

---

## 📱 System Overview

You now have **TWO versions** of the same app:

| Feature | Mobile | Web |
|---------|--------|-----|
| Platform | iOS/Android (Expo Go) | Browser (Chrome, Firefox, Safari) |
| Location | `mo-snuf-calendar/` | `mo-snuf-calendar-web/` |
| Sharing | Same calendar instance | Same calendar instance |
| Sync | Real-time | Real-time |
| Best For | On-the-go | Desktop/tablet |

**Both share the same Firebase database** → instant sync between platforms!

---

## 🚀 Step 1: Firebase Setup (REQUIRED - Do This First)

### Why?
Both apps need Firebase to work. You only do this setup **once** for both apps!

### How?
Open: `mo-snuf-calendar/FIREBASE_SETUP_REQUIRED.md`

Follow the **7 copy-paste steps**. Takes ~5 minutes.

**⚠️ Don't skip this!** Both apps need these credentials.

---

## 📱 Step 2: Start Mobile App (Expo)

Open a **new terminal** and run:

```bash
cd "C:\Users\yigal\Documents\Claude working library\mo-snuf-calendar"
npm start
```

**You'll see:**
```
✓ Compiled successfully
Expo Go

┌─────────────────────────────┐
│                             │
│    [QR CODE]                │
│                             │
└─────────────────────────────┘

exp://your-tunnel-url
```

### On Your Phone

**iPhone:**
1. Open Camera app
2. Point at QR code
3. Tap notification → App opens

**Android:**
1. Open Expo Go app
2. Tap "Scan"
3. Point at QR code in terminal

---

## 💻 Step 3: Start Web App (Vite)

Open **another terminal** and run:

```bash
cd "C:\Users\yigal\Documents\Claude working library\mo-snuf-calendar-web"
npm install  # First time only, already running in background
npm start
```

**You'll see:**
```
  VITE v5.0.0  ready in 234 ms

  ➜  Local:   http://localhost:5173/
  ➜  press h to show help
```

Click the link or open `http://localhost:5173` in your browser!

---

## ✅ Testing Real-Time Sync

### Test 1: Same Calendar on Mobile & Web

1. **On mobile:** Tap "Create Calendar"
2. **On web:** Refresh page
3. **Result:** Calendar appears instantly ✨

### Test 2: Add Event on Mobile, See on Web

1. **On mobile:** Tap "+ Add Event"
2. **Create an event** (e.g., "Dinner Tonight")
3. **On web:** Watch for event to appear
4. **Result:** Event syncs in seconds! 🔄

### Test 3: Add Event on Web, See on Mobile

1. **On web:** Click "+ Add Event"
2. **Create an event** (e.g., "Movie Night")
3. **On mobile:** Watch for event to appear
4. **Result:** Event syncs instantly! 🎬

### Test 4: Share Calendar

1. **On mobile OR web:** Click "Share" button
2. **Copy the invite link**
3. **Send link to partner**
4. **Partner opens link** on their device (mobile or web)
5. **Result:** They see the same calendar! 👥

---

## 📂 File Structure

```
C:\Users\yigal\Documents\Claude working library\
│
├── mo-snuf-calendar/              # Mobile app (React Native + Expo)
│   ├── src/
│   ├── package.json
│   ├── FIREBASE_SETUP_REQUIRED.md  ← START HERE
│   ├── START_HERE.md
│   └── ...
│
└── mo-snuf-calendar-web/          # Web app (React + Vite)
    ├── src/
    ├── package.json
    ├── index.html
    ├── vite.config.ts
    ├── README.md
    ├── SETUP.md
    └── ...
```

---

## 🎯 Using Each Version

### Mobile App Features

- **Create Calendar** - Name your calendar, invite partner
- **Add Event** - Date, time, notes, all-day option
- **View Calendars** - See all shared calendars
- **Scan to Join** - Share via link or QR code
- **Real-time Sync** - See updates instantly

### Web App Features

- **Month View** - Full calendar grid
- **Week View** - Hourly time slots
- **Agenda View** - List of upcoming events
- **Create Calendar** - Same as mobile
- **Add Event** - More screen space for details
- **Share Calendar** - Send invite links

---

## 🔄 Keep Terminals Running

**IMPORTANT:** Keep both terminals open while using the apps!

```
Terminal 1:  npm start (mobile app)   ← KEEP RUNNING
Terminal 2:  npm start (web app)      ← KEEP RUNNING
```

The servers need to stay running for hot reload and real-time sync.

### If a terminal closes:

1. Open new terminal in that directory
2. Run `npm start` again
3. Refresh your app (browser) or QR code scan (mobile)

---

## 🐛 Troubleshooting

### "Events not syncing between apps"
- Check both terminals are running
- Verify Firebase credentials are the same in both apps
- Check browser console (F12) for errors
- Restart both servers

### "Can't see the QR code"
- QR code appears after "Compiled successfully"
- If missing, wait 10 seconds then check terminal
- Or scroll up in terminal to find it

### "Web app won't load"
- Check http://localhost:5173 is open
- Verify Terminal 2 shows "ready in XXX ms"
- Try refreshing browser
- Check port 5173 is not in use

### "Mobile app won't load"
- Make sure Expo Go is installed on your phone
- Check WiFi connection
- Verify Terminal 1 shows "Compiled successfully"
- Try scanning QR code again

### "Firebase says 'permission denied'"
- Check you completed FIREBASE_SETUP_REQUIRED.md
- Verify Firestore rules are set correctly
- Try signing out and back in (refresh mobile app)
- Check project ID matches in both apps

---

## 💡 Tips

1. **Different screens for different tasks:**
   - Use **mobile** when you're out (quick adds)
   - Use **web** for detailed event creation (bigger keyboard)

2. **Invite your partner:**
   - Share the calendar link from either app
   - Works on their phone (mobile) or computer (web)
   - They get the same calendar instantly

3. **Multiple calendars:**
   - Create "Our Events" for shared items
   - Create "My Ideas" for personal planning
   - Both sync in real-time

4. **Offline mode:**
   - Mobile app caches recent events
   - See them even without internet
   - Syncs when connection returns

---

## 📊 What's Running Where

```
Your Computer:
├── Terminal 1: Expo dev server (port varies)
│   └── Mobile app (access via QR code + Expo Go)
│
└── Terminal 2: Vite dev server (port 5173)
    └── Web app (access via http://localhost:5173)

Partner's Device:
├── Expo Go app (if joining via mobile)
│   └── Scans QR code → accesses your Expo server
│
└── Web browser (if joining via web)
    └── Visits URL → accesses same Firestore database

Firebase Cloud:
└── Firestore database (shared by both apps)
    ├── Stores all calendars
    ├── Stores all events
    └── Syncs in real-time to all connected devices
```

---

## 🎓 Next: Customization

After testing both versions, you can:

1. **Add your calendar names** - "Our Date Nights", "Vacation Planning"
2. **Create custom color themes** - Edit CSS in `src/styles/`
3. **Add event categories** - Work, Personal, Social
4. **Set reminders** - Coming soon!
5. **Deploy web app** - Host on Vercel, Netlify, or Firebase Hosting

---

## 📞 Quick Reference

| Need | Action | Where |
|------|--------|-------|
| **Setup Firebase** | Follow 7 steps | `mo-snuf-calendar/FIREBASE_SETUP_REQUIRED.md` |
| **Run mobile** | `npm start` | `mo-snuf-calendar/` terminal |
| **Run web** | `npm start` | `mo-snuf-calendar-web/` terminal |
| **Check logs** | Look at terminal output | Either terminal |
| **Refresh mobile** | Close Expo Go, scan QR again | Phone |
| **Refresh web** | Click refresh or press F5 | Browser |
| **See console errors** | Open DevTools | Browser F12 or mobile app logs |
| **Share calendar** | Click "Share" button | Either app |

---

## ✨ You're All Set!

1. ✅ Firebase setup (7 steps) - REQUIRED
2. ✅ Mobile app ready (Terminal 1)
3. ✅ Web app ready (Terminal 2)
4. ✅ Both synced to same Firestore database
5. 🎉 Start adding events!

---

**Questions?** Check the README files in each folder:
- `mo-snuf-calendar/README.md` - Mobile app docs
- `mo-snuf-calendar-web/README.md` - Web app docs

**Keep both terminals running while you use the apps!** 🚀

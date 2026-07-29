# Mo&Snuf Calendar - Complete

A beautiful shared calendar for couples with real-time sync across mobile and web platforms.

## 📱 What You Have

Two fully-built apps that sync in real-time to the same Firebase database:

### Mobile App
- **Tech**: React Native + Expo
- **Platform**: iOS & Android via Expo Go
- **Location**: `mo-snuf-calendar/`
- **Features**: Create calendars, add events, share links, real-time sync

### Web App
- **Tech**: React + Vite + TypeScript
- **Platform**: Any browser (Chrome, Firefox, Safari, Edge)
- **Location**: `mo-snuf-calendar-web/`
- **Features**: Month/Week/Agenda views, responsive design, real-time sync

### Shared Database
- **Backend**: Firebase Firestore
- **Auth**: Anonymous (no accounts needed)
- **Sync**: Real-time updates across all devices
- **Scale**: Free tier supports hundreds of users

## 🚀 Quick Start

### Step 1: Firebase Setup (Required - 5 minutes)

Open and follow these 7 steps:
```
mo-snuf-calendar/FIREBASE_SETUP_REQUIRED.md
```

You'll get Firebase credentials to use in both apps.

### Step 2: Update Config Files

**Mobile app:**
```
mo-snuf-calendar/src/config/firebase.ts
```

**Web app:**
```
mo-snuf-calendar-web/src/config/firebase.ts
```

Paste your Firebase config in both.

### Step 3: Start Mobile Server (Terminal 1)

```bash
cd "C:\Users\yigal\Documents\Claude working library\mo-snuf-calendar"
npm start
```

Scan the QR code with Expo Go on your phone.

### Step 4: Start Web Server (Terminal 2)

```bash
cd "C:\Users\yigal\Documents\Claude working library\mo-snuf-calendar-web"
npm start
```

Opens automatically at `http://localhost:5173`

### Step 5: Test Real-Time Sync

1. Create calendar on mobile → see it on web
2. Add event on web → see it on mobile
3. Both update automatically!

## 📖 Documentation

| Document | Purpose |
|----------|---------|
| **QUICK_START.md** | TL;DR version |
| **WEB_AND_MOBILE_SETUP.md** | Complete detailed guide |
| **mo-snuf-calendar/START_HERE.md** | Mobile app overview |
| **mo-snuf-calendar-web/README.md** | Web app documentation |
| **mo-snuf-calendar/FIREBASE_SETUP_REQUIRED.md** | Firebase configuration (REQUIRED) |

**Start here:** `QUICK_START.md` or `WEB_AND_MOBILE_SETUP.md`

## 📁 Project Structure

```
C:\Users\yigal\Documents\Claude working library\
│
├── README.md                      ← You are here
├── QUICK_START.md                 ← Quick reference
├── WEB_AND_MOBILE_SETUP.md        ← Full setup guide
├── COMPLETE_SETUP.txt             ← What's included
│
├── mo-snuf-calendar/              ← Mobile app (React Native)
│   ├── src/
│   │   ├── App.tsx
│   │   ├── config/firebase.ts     ← Update with your credentials
│   │   ├── services/              ← Firebase logic
│   │   ├── screens/               ← App screens
│   │   ├── components/            ← UI components
│   │   ├── context/               ← State management
│   │   ├── hooks/                 ← Custom hooks
│   │   └── utils/                 ← Helper functions
│   ├── package.json
│   ├── FIREBASE_SETUP_REQUIRED.md ← REQUIRED: Follow this first!
│   ├── START_HERE.md
│   └── README.md
│
└── mo-snuf-calendar-web/          ← Web app (React + Vite)
    ├── src/
    │   ├── App.tsx
    │   ├── main.tsx
    │   ├── config/firebase.ts     ← Update with your credentials
    │   ├── services/              ← Firebase logic
    │   ├── screens/               ← Full-page screens
    │   ├── components/            ← React components
    │   ├── context/               ← State management
    │   ├── styles/                ← CSS files
    │   └── utils/                 ← Helper functions
    ├── index.html
    ├── package.json
    ├── vite.config.ts
    ├── tsconfig.json
    ├── README.md
    └── SETUP.md
```

## 🎯 Features

### Both Apps Have:
- ✅ Create shared calendars
- ✅ Add events with date & time
- ✅ Share calendars via invite links
- ✅ Real-time sync (updates instantly)
- ✅ Anonymous authentication
- ✅ All-day events
- ✅ Event descriptions & notes

### Mobile App Adds:
- ✅ Offline event viewing
- ✅ Push notification ready
- ✅ Native feel & performance
- ✅ Scan QR codes to join

### Web App Adds:
- ✅ Month calendar view
- ✅ Week grid view with time slots
- ✅ Agenda list view
- ✅ Full desktop experience
- ✅ Responsive design
- ✅ Easy event creation form

## 💻 Technology Stack

### Mobile
- React Native 0.73
- Expo 50
- TypeScript
- Firebase 10.7
- Dayjs (date handling)

### Web
- React 18
- Vite 5
- TypeScript
- Firebase 10.7
- Dayjs (date handling)

### Backend
- Firebase Firestore (database)
- Firebase Authentication (anonymous)
- Firebase Hosting ready

## 🔄 Real-Time Sync

Events sync instantly between all connected devices:

```
Mobile App ──┐
Web App 1 ──┼──→ Firebase Firestore ──→ All Devices
Web App 2 ──┘

Create event on mobile → seen on web instantly
Add event on web → seen on mobile instantly
Happens within 1 second!
```

## 🚀 How to Use

### Create a Calendar
1. Click "Create Calendar" / "+ New Calendar"
2. Enter a name (e.g., "Our Events")
3. Done! Both partners can create

### Add an Event
1. Click "+ Add Event"
2. Fill in title, date, time
3. Optionally add description
4. Create → instantly syncs to all devices

### Share Calendar
1. Click "Share" button
2. Invite link is copied
3. Send to partner
4. They click link → instantly joined
5. Both see same calendar

### View Calendar
- **Mobile**: Simple month view
- **Web**: Choose Month / Week / Agenda view

## ⚙️ Configuration

### One-Time Setup

1. **Firebase Project**
   - Create at firebase.google.com
   - Enable Firestore Database
   - Enable Anonymous Authentication
   - Follow FIREBASE_SETUP_REQUIRED.md

2. **Update Both Apps**
   - Mobile: `mo-snuf-calendar/src/config/firebase.ts`
   - Web: `mo-snuf-calendar-web/src/config/firebase.ts`
   - Paste your Firebase config

3. **Start Servers**
   - Terminal 1: `cd mo-snuf-calendar && npm start`
   - Terminal 2: `cd mo-snuf-calendar-web && npm start`

### Running Servers

Keep both terminals open while using the apps:

```bash
# Terminal 1 - Mobile Expo Server
cd mo-snuf-calendar
npm start
# → Shows QR code to scan with Expo Go

# Terminal 2 - Web Dev Server
cd mo-snuf-calendar-web
npm start
# → Opens http://localhost:5173
```

## 🐛 Troubleshooting

### Events Not Syncing
- Check both servers are running
- Verify Firebase credentials are correct
- Check internet connection
- Refresh browser (F5) or re-scan QR code

### Can't See QR Code
- Wait 10 seconds after "Compiled successfully"
- Scroll up in terminal
- Make sure Expo Go is installed

### Web App Won't Load
- Check Terminal 2 is running
- Try http://localhost:5173 in browser
- Refresh page (Ctrl+R or Cmd+R)

### Firebase Permission Denied
- Make sure you completed all 7 Firebase setup steps
- Check Firestore rules are set correctly
- Verify both apps use same Firebase project

## 📚 Development

### Adding Features

1. Create components in `src/components/`
2. Add Firebase operations to `src/services/firestore.ts`
3. Use `useCalendar()` hook for state
4. Style with CSS in `src/styles/`

### Changing Styles

**Mobile app**: Edit `src/screens/*.tsx` (inline styles & StyleSheet)
**Web app**: Edit `src/styles/*.css`

### Building for Production

**Mobile**: Expo build (follow Expo docs)
**Web**: `npm run build` → deploy `dist/` folder

## 🎓 Learning Resources

- **Vite**: https://vitejs.dev
- **React**: https://react.dev
- **Firebase**: https://firebase.google.com/docs
- **TypeScript**: https://www.typescriptlang.org
- **Expo**: https://docs.expo.dev

## 📊 What's Different Between Apps

| Feature | Mobile | Web |
|---------|--------|-----|
| **Access** | Expo Go app + QR | Browser |
| **Views** | 1 (Month) | 3 (Month, Week, Agenda) |
| **Offline** | Yes | Limited |
| **Best For** | Quick adds on-the-go | Planning & details |
| **Performance** | Native fast | Very fast |
| **Setup** | Scan QR | Open URL |

Both use the same Firebase database → everything stays in sync!

## ✨ Next Steps

1. ✅ Read: `QUICK_START.md` or `WEB_AND_MOBILE_SETUP.md`
2. ✅ Setup: Follow `mo-snuf-calendar/FIREBASE_SETUP_REQUIRED.md`
3. ✅ Start: Run both servers in separate terminals
4. ✅ Test: Create calendar and add events
5. ✅ Share: Send invite link to your partner
6. ✅ Enjoy: Start using your shared calendar!

## 💡 Pro Tips

1. **Use Both Apps**
   - Mobile for quick adds while out
   - Web for detailed planning at desk

2. **Create Multiple Calendars**
   - "Our Events" for shared items
   - "My Ideas" for personal planning

3. **Keep Servers Running**
   - Leave both terminals open
   - They need to stay for hot reload

4. **Check Firebase Free Tier**
   - Generous for personal use
   - Perfect for testing

## 🆘 Need Help?

1. Check the detailed guide: `WEB_AND_MOBILE_SETUP.md`
2. Read the app-specific docs:
   - Mobile: `mo-snuf-calendar/README.md`
   - Web: `mo-snuf-calendar-web/README.md`
3. Check browser console (F12) for errors
4. Check terminal output for server messages

## 📝 Notes

- Both apps share the same Firebase database
- No account creation needed
- Events sync in real-time
- Works across unlimited devices
- Fully open-source code

## 🎉 You're All Set!

Everything is built and ready. Just:
1. Complete Firebase setup
2. Start both servers
3. Start using!

Enjoy your shared calendar! 📅✨

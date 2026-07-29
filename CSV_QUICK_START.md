# TaskHive CSV Export/Import - Quick Start Guide

**Last Updated:** 2026-03-23
**Version:** 1.5.63

---

## 🚀 In 5 Minutes

### Step 1: Open Test Environment (1 min)
```
1. Open new browser window (incognito preferred)
2. Go to: https://taskhive-task-management.web.app
3. Open browser console (F12 → Console tab)
4. Type: localStorage.clear()
5. Reload the page
```

### Step 2: Import Test Data (1 min)
```
1. Click Settings (gear icon, bottom-left)
2. Scroll down to "Import CSV"
3. Click "Choose File"
4. Select: test-data.csv
5. Click Open
6. Confirm in dialog
7. Wait for "Import successful ✓" toast
```

### Step 3: Verify Data (2 min)
```
Board View:
- [ ] See 3 accounts (Test Account 1, 2, 3) in correct order
- [ ] See 4 projects under accounts in correct order
- [ ] Colors match test data

Project List:
- [ ] Click "Project List" view (left sidebar)
- [ ] See all 4 projects with columns:
    - # (1-4)
    - Account (colored)
    - Program No. (PROG-001, etc.)
    - Project Name
    - Description
    - Progress bar (shows percentages)
    - Budget bar (shows percentages)

Details:
- [ ] Click any project to open
- [ ] Check "Project Info" tab
- [ ] Verify fields populated (Contract ID, Program No., etc.)
```

### Step 4: Check Hidden & Done Tasks (1 min)
```
Board View:
- [ ] Open proj-002 (Project Beta)
- [ ] Should see 2 tasks (task-003, task-004)
- [ ] task-005 should NOT appear (it's hidden)
- [ ] task-005 is marked as "done" in test data

To Verify:
- [ ] Click task-003 (has subtasks)
- [ ] Should see 2 subtasks in dropdown
- [ ] Both subtasks preserved with correct state
```

---

## 📋 What Should You See?

### After Import - Test Data Summary

**Accounts (3):**
- Test Account 1 (red)
- Test Account 2 (cyan)
- Test Account 3 (blue)

**Projects (4):**
1. Project Alpha (Account 1) - 70% budget used
2. Project Beta (Account 1) - 56% budget, has subtasks
3. Project Gamma (Account 2) - 65% budget
4. Project Delta (Account 3) - 0% budget used, delayed

**Tasks (7):**
- 4 visible tasks (with various flags)
- 1 hidden task (task-007, not visible)
- 2 tasks with subtasks
- Multiple tasks with urgent/followup flags

---

## ✅ Testing Checklist (Quick Version)

Copy this, check off as you go:

```
IMPORT TEST:
[ ] test-data.csv imported successfully
[ ] "Import successful" toast appeared
[ ] No errors in console

ACCOUNTS:
[ ] 3 accounts present
[ ] Names: Account 1, Account 2, Account 3
[ ] Colors correct (red, cyan, blue)
[ ] Order correct (1, 2, 3)

PROJECTS:
[ ] 4 projects present
[ ] All in correct accounts
[ ] Correct order per account
[ ] Names match (Alpha, Beta, Gamma, Delta)
[ ] Colors applied
[ ] Dates preserved

PROJECT LIST VIEW:
[ ] All 4 projects visible
[ ] Program No. column shows values
[ ] Progress bars visible and correct
[ ] Budget bars visible and correct
[ ] Project order matches Board view
[ ] Account colors match

TASKS:
[ ] 7 tasks in data (check console)
[ ] 4 visible in Board view
[ ] 1 hidden task (not visible)
[ ] 1 done task (task-005)
[ ] Subtasks present (task-003)
[ ] Flags applied (urgent, followup)

PROJECT INFO:
[ ] Click proj-001
[ ] Check "Project Info" tab
[ ] Contract ID present
[ ] Program No. present
[ ] Safety Resp. present
[ ] Dates present
[ ] Configuration table present

BUDGET:
[ ] proj-001: 70% bar (35K/50K)
[ ] proj-002: 56% bar (42K/75K)
[ ] proj-003: 65% bar (65K/100K)
[ ] proj-004: 0% bar (0/120K)

APP SETTINGS:
[ ] Budget currency: USD
[ ] All collapse states preserved
[ ] Filters preserved
```

---

## 🔍 Debug Commands (if needed)

Open Console (F12 → Console) and run:

```javascript
// See all imported data
console.log('Accounts:', state.accounts);
console.log('Projects:', state.projects);
console.log('Tasks:', state.tasks);

// Check specific counts
console.log('Account count:', state.accounts.length);
console.log('Project count:', state.projects.length);
console.log('Task count:', state.tasks.length);

// Find hidden tasks
console.log('Hidden tasks:', state.tasks.filter(t => t.hidden));

// Check task order
console.log('Tasks with order:', state.tasks.map(t => ({id: t.id, order: t.order})));

// Verify Firebase sync
console.log('Firebase connected:', !!window.db);
```

---

## 🔄 Round-Trip Test (10 minutes)

Test that data survives export → import cycle:

```
1. EXPORT current data:
   - Settings → Export CSV
   - Save as: test-export-1.csv

2. CLEAR app:
   - Open console: localStorage.clear()
   - Reload page

3. IMPORT the export:
   - Settings → Import CSV
   - Select test-export-1.csv
   - Confirm

4. EXPORT again:
   - Settings → Export CSV
   - Save as: test-export-2.csv

5. COMPARE files:
   - Open both CSVs in text editor
   - Should be identical
   - If different, check what changed
```

---

## 🎯 Success Criteria

You'll know it works when:

✓ All data imports without errors
✓ No data is missing after import
✓ All 52 fields are preserved
✓ Project order matches Board view
✓ Progress bars calculate correctly
✓ Budget bars show correct percentages
✓ Hidden tasks don't appear in views
✓ Subtasks are intact
✓ App settings restored (collapse, filters)
✓ Export → Import cycle is identical

---

## ⚠️ Common Issues & Quick Fixes

### "Import failed" error
**Try:**
1. Clear browser cache (Ctrl+Shift+Del)
2. Close and reopen browser
3. Hard refresh (Ctrl+F5)
4. Check that test-data.csv is in correct location

### Data doesn't appear after import
**Try:**
1. Check that item isn't hidden
   - Console: `state.tasks.filter(t => t.hidden)`
2. Check collapse state in Board view
   - Click account/project expand icons
3. Check filters aren't hiding data
   - Settings → toggle off all filters
4. Refresh page (F5)

### Progress/Budget bars not showing
**Try:**
1. Check you're in Project List view
2. Verify projects have dates set
3. Verify budget amounts are numbers
4. Hard refresh (Ctrl+Shift+F5)

### Hidden tasks appearing
**Try:**
1. Check that task has hidden: true in CSV
2. Verify import completed successfully
3. Clear localStorage and re-import
4. Check browser console for errors

### Subtasks missing
**Try:**
1. Click task to expand
2. Check "subs" field in CSV (should be JSON array)
3. Verify JSON is valid (no missing quotes)
4. Re-import test-data.csv to verify

---

## 📞 Need More Help?

### Detailed References
- **CSV_FIELD_COVERAGE.md** - Complete field reference
- **CSV_TESTING_GUIDE.md** - Detailed testing procedures
- **CSV_TESTING_REPORT.md** - Template to document results
- **CSV_IMPLEMENTATION_SUMMARY.md** - Technical overview

### Test Data
- **test-data.csv** - Complete sample dataset
- Shows all 52 fields
- Realistic examples
- Can be re-imported multiple times

---

## 📊 Quick Stats

**Test Data Includes:**
- 3 accounts
- 4 projects
- 7 tasks (1 hidden, 1 done)
- 4 project info records
- 4 budget/schedule records
- 52 total fields

**Coverage:**
- 100% of application fields
- All views (Board, Project List, Details)
- All settings and preferences
- All relationships preserved

---

## 🎓 Learning Path

1. **5 min:** Run Quick Start steps above
2. **10 min:** Review test data (open test-data.csv in Excel or text editor)
3. **15 min:** Read CSV_FIELD_COVERAGE.md
4. **20 min:** Complete Round-Trip Test
5. **30 min:** Full testing with CSV_TESTING_GUIDE.md

---

## ✨ Pro Tips

1. **Keep a backup:** Export your data before importing anything
2. **Use incognito:** Test in private browser to avoid caching issues
3. **Check console:** F12 → Console tab shows helpful messages
4. **Hard refresh:** Ctrl+Shift+F5 forces app to load fresh code
5. **Test in stages:** Import, verify, export, compare

---

## 🚀 Ready to Test?

1. Bookmark this page
2. Open https://taskhive-task-management.web.app
3. Open test-data.csv (in this directory)
4. Follow "In 5 Minutes" section above
5. Report results using CSV_TESTING_REPORT.md template

---

**Quick Start Guide v1.0**
**TaskHive Version: 1.5.63**
**Last Updated: 2026-03-23**

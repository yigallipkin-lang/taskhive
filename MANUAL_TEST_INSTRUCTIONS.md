# Manual Testing Instructions - Collapse/Expand Buttons

## Pre-Test Setup

1. **Clear Browser Cache**
   - Chrome/Edge: Ctrl+Shift+Delete (Cmd+Shift+Delete on Mac)
   - Select "Cookies and other site data" + "Cached images and files"
   - Delete "All time"
   - Close all TaskHive tabs

2. **Open the App**
   - URL: https://taskhive-task-management.web.app
   - Wait for full load (look for all UI elements)

3. **Import Test Data**
   - Click "Import CSV" button (top toolbar)
   - Select file: `C:\Users\yigal\Documents\Claude working library\TaskHive\test_data.csv`
   - Verify data loads (you should see 3 accounts, 6 projects, 18 tasks)
   - Open browser DevTools (F12) → Console for optional verification

## Test Sequence

### Phase 1: Table View (Easiest to Verify)

#### Test 1.1: "Accounts" Button
1. Switch to **Table View** (click Table icon in top nav)
2. You should see:
   - Account rows (Engineering Team, Design Team, Product Management)
   - Project rows indented under each account
   - Task rows indented under each project
3. Click **"Accounts"** button
   - ✅ PASS: All account rows collapse (only header visible, no projects/tasks shown)
   - ❌ FAIL: Tasks collapse instead, or nothing happens
4. Click **"Accounts"** again
   - ✅ PASS: All accounts expand, showing projects and tasks again
5. **Record Result**: PASS / FAIL

#### Test 1.2: "Tasks" Button
1. In Table View (same state as above)
2. Click **"Tasks"** button
   - ✅ PASS: All task rows disappear, but account rows and project rows remain visible
   - ❌ FAIL: Accounts collapse instead, or nothing happens
3. Click **"Tasks"** again
   - ✅ PASS: All tasks reappear
4. **Record Result**: PASS / FAIL

#### Test 1.3: Button Independence
1. In Table View
2. Click "Accounts" to collapse all accounts
3. Now click "Tasks"
   - ✅ PASS: Tasks collapse independently (accounts stay collapsed)
   - ❌ FAIL: Accounts expand when clicking Tasks

4. Click "Accounts" to expand
5. Now click "Tasks"
   - ✅ PASS: Tasks expand independently (accounts stay expanded)
6. **Record Result**: PASS / FAIL

### Phase 2: Kanban View

#### Test 2.1: "Tasks" Button
1. Switch to **Kanban View** (click Kanban icon)
2. You should see:
   - Columns labeled with account names (Engineering Team, Design Team, Product Management)
   - Cards within columns for each project
   - Cards within project sections for each task
3. Click **"Tasks"** button
   - ✅ PASS: All task cards disappear, but project headers remain visible
   - ❌ FAIL: Accounts columns collapse, or nothing happens
4. Click **"Tasks"** again
   - ✅ PASS: All task cards reappear
5. **Record Result**: PASS / FAIL

#### Test 2.2: "Projects" Button
1. In Kanban View (with tasks expanded)
2. Click **"Projects"** button
   - ✅ PASS: All project sections collapse (project headers hide)
   - ❌ FAIL: Tasks collapse instead, or nothing happens
3. Click **"Projects"** again
   - ✅ PASS: All projects expand
4. **Record Result**: PASS / FAIL

### Phase 3: Project Info View

#### Test 3.1: "Accounts" Button
1. Switch to **Project Info View** (click Project Info icon)
2. You should see:
   - Columns for each account
   - Projects listed within each account column
3. Click **"Accounts"** button
   - ✅ PASS: All account columns collapse/disappear
   - ❌ FAIL: Projects collapse instead, or nothing happens
4. Click **"Accounts"** again
   - ✅ PASS: All accounts reappear
5. **Record Result**: PASS / FAIL

#### Test 3.2: "Projects" Button
1. In Project Info View (with accounts expanded)
2. Click **"Projects"** button
   - ✅ PASS: All projects collapse within their account columns
   - ❌ FAIL: Accounts collapse instead, or nothing happens
3. Click **"Projects"** again
   - ✅ PASS: All projects expand
4. **Record Result**: PASS / FAIL

### Phase 4: State Persistence

#### Test 4.1: Cross-View Independence
1. Switch to **Table View**
2. Click "Tasks" to collapse all tasks
3. Switch to **Kanban View**
   - ✅ PASS: Tasks are NOT collapsed in Kanban (they show fully)
   - ❌ FAIL: Tasks are also collapsed in Kanban (state contamination)
4. **Record Result**: PASS / FAIL

#### Test 4.2: State Restoration
1. In Table View
2. Collapse all "Accounts"
3. Click "Tasks" to collapse all tasks
4. **Press F5** to refresh the page
5. After reload:
   - ✅ PASS: Accounts and tasks remain collapsed (state restored from localStorage)
   - ❌ FAIL: Collapse state lost, everything expanded
6. Click "Accounts" to expand
7. Refresh again
   - ✅ PASS: Accounts expand on reload
8. **Record Result**: PASS / FAIL

### Phase 5: Developer Console Verification (Optional)

1. Open **DevTools** (F12)
2. Go to **Console** tab
3. Type: `JSON.parse(localStorage.taskhive_state).collapsed`
4. Look at the output structure:
   - ✅ PASS: Should see separate keys like `table-accts`, `table-tasks`, `kanban-tasks`, etc.
   - ❌ FAIL: Should NOT see mixed or incorrect key names

5. Verify structure looks like:
   ```javascript
   {
     "table-accts": { "acc1": true, "acc2": false, ... },
     "table-tasks": { "proj1": false, "proj2": true, ... },
     "kanban-accts": { ... },
     "kanban-tasks": { ... },
     // etc.
   }
   ```
6. **Record Result**: PASS / FAIL

## Test Results Summary

| Test | Result | Notes |
|------|--------|-------|
| 1.1 Table "Accounts" | PASS/FAIL | |
| 1.2 Table "Tasks" | PASS/FAIL | |
| 1.3 Button Independence | PASS/FAIL | |
| 2.1 Kanban "Tasks" | PASS/FAIL | |
| 2.2 Kanban "Projects" | PASS/FAIL | |
| 3.1 Info "Accounts" | PASS/FAIL | |
| 3.2 Info "Projects" | PASS/FAIL | |
| 4.1 Cross-View Independence | PASS/FAIL | |
| 4.2 State Restoration | PASS/FAIL | |
| 5 Console State Structure | PASS/FAIL | |

## Success Criteria
- ✅ All 10 tests PASS
- ✅ No buttons affect unintended rows/cards
- ✅ State persists across page refresh
- ✅ No state contamination between views

## If Tests Fail
1. Note which test(s) failed
2. Check browser console for errors (F12 → Console)
3. Take screenshot of the failure
4. Report the specific failure mode

## Notes
- Test data includes 3 teams, 6 projects, 18 tasks
- Collapse state saves to localStorage automatically
- Each view maintains separate collapse state keys
- No manual state clearing needed (auto-saves)

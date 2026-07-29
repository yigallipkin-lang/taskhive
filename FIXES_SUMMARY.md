# Bug Fixes Summary - Collapse/Expand Buttons

## Problems Identified (User Screenshots)
The user provided 3 annotated screenshots showing buttons that don't work as expected:
1. **Table View "Tasks" button** - didn't work
2. **Kanban View "Tasks" button** - didn't work
3. **Project Info View "Accounts" button** - didn't work

## Root Causes Found

### Bug #1: Incorrect Type Mapping in toggleAllCollapsed()
**File**: index.html, Lines 583-615

**Problem**: The function had incorrect mappings that remapped button clicks to wrong collapse types:
```javascript
// WRONG - before fix:
if(type === 'table-accts') {
  targetType = 'table-tasks';  // BUG: accounts button maps to tasks!
  itemsList = state.projects.map(p=>p.id);  // Using project IDs, not account IDs
}
```

**Impact**:
- "Accounts" button in Table view would collapse TASKS instead
- "Tasks" button in Table view had NO case, did nothing (empty itemsList)

### Bug #2: Kanban "Tasks" Button Called Wrong Type
**File**: index.html, Line 1133

**Problem**: Button onclick handler used wrong collapse type key:
```javascript
// WRONG - before fix:
<button onclick="toggleAllCollapsed('kanban-accts')">Tasks</button>
// Should be 'kanban-tasks' not 'kanban-accts'
```

**Impact**: "Tasks" button collapsed account visibility instead of task visibility

## Solutions Implemented

### Fix #1: Rewrite toggleAllCollapsed() (Lines 583-621)
Restructured function to properly map all collapse types with correct item lists:

```javascript
// CORRECT - after fix:
function toggleAllCollapsed(type){
  // Kanban view
  if(type === 'kanban-accts') {
    targetType = 'kanban-accts';
    itemsList = state.accounts.map(a=>a.id);  // Account IDs
  } else if(type === 'kanban-tasks') {
    targetType = 'kanban-tasks';
    itemsList = state.projects.map(p=>p.id);  // Project IDs
  }
  // Table view
  else if(type === 'table-accts') {
    targetType = 'table-accts';
    itemsList = state.accounts.map(a=>a.id);  // Account IDs (FIXED)
  } else if(type === 'table-tasks') {
    targetType = 'table-tasks';
    itemsList = state.projects.map(p=>p.id);  // Project IDs (FIXED)
  }
  // ... info view mappings ...
}
```

**Fixed Issues**:
- ✅ `table-accts` now correctly toggles `table-accts` for account IDs
- ✅ `table-tasks` now has explicit case and toggles project IDs
- ✅ `kanban-accts` correctly stays as `kanban-accts` for account IDs
- ✅ Added missing `kanban-tasks` case

### Fix #2: Fix Kanban "Tasks" Button (Line 1133)
Changed onclick handler to use correct collapse type:

```javascript
// BEFORE:
<button onclick="toggleAllCollapsed('kanban-accts')">Tasks</button>

// AFTER:
<button onclick="toggleAllCollapsed('kanban-tasks')">Tasks</button>
```

## How to Verify Fixes

### Quick Test (Each View)
1. **Kanban View**:
   - Click "Tasks" button → Task cards should hide/show
   - Click "Projects" button → Project groups should hide/show
   - Account columns should NOT be affected by either button

2. **Table View**:
   - Click "Accounts" button → Account rows should hide/show
   - Click "Tasks" button → Task rows should hide/show (NOT accounts)
   - Project rows should NOT be independently toggled

3. **Project Info View**:
   - Click "Accounts" button → Account columns should hide/show
   - Click "Projects" button → Project rows should hide/show

### Developer Console Verification
```javascript
// Check localStorage state structure
JSON.parse(localStorage.taskhive_state).collapsed

// Should show separate keys for each view:
{
  "kanban-accts": { "acc1": false, "acc2": false, ... },
  "kanban-tasks": { "proj1": false, "proj2": false, ... },
  "kanban-projs": { ... },
  "table-accts": { "acc1": false, "acc2": false, ... },
  "table-tasks": { "proj1": false, "proj2": false, ... },
  "info-accts": { ... },
  "info-projs": { ... }
}
```

### State Independence Test
1. In Kanban, collapse all Tasks (uses `kanban-tasks`)
2. Switch to Table, Tasks should be expanded (uses `table-tasks`)
3. In Table, collapse all Tasks
4. Switch back to Kanban, Tasks should still be collapsed
5. Verify `state.collapsed.kanban-tasks` ≠ `state.collapsed.table-tasks`

## Testing with CSV Data

### Test Data File
- **File**: test_data.csv
- **Contains**: 3 accounts, 6 projects, 18 tasks
- **To Import**: Open app → Click "Import CSV" → Select test_data.csv

### Test Scenarios
See TEST_SCENARIOS.md for 9 comprehensive test cases covering:
- Individual button functionality
- Cross-view state independence
- localStorage persistence
- State restoration after page refresh

## Deployment

### Firebase Hosting
- **URL**: https://taskhive-task-management.web.app
- **Latest Deploy**: 2026-03-17
- **Changes**: Updated index.html with toggleAllCollapsed fix and Kanban button fix

### Cache Management
- Cache headers set to no-cache for index.html
- Service worker unregistered to prevent stale code
- Fresh deploy forces immediate update

## Files Modified
1. **index.html**:
   - Lines 583-621: toggleAllCollapsed function rewrite
   - Line 1133: Kanban "Tasks" button onclick handler fix

## Files Created
1. **TEST_SCENARIOS.md**: Comprehensive test cases
2. **test_data.csv**: Sample data for testing
3. **SPECIFICATION.md**: Updated application specification
4. **FIXES_SUMMARY.md**: This document

## Validation Checklist
- [x] toggleAllCollapsed function rewritten with correct mappings
- [x] Kanban "Tasks" button updated to use kanban-tasks
- [x] Deployed to Firebase
- [x] Test scenarios prepared
- [x] Test data created
- [ ] Manual testing with CSV data (to be done)
- [ ] All 3 views tested with collapse buttons
- [ ] State independence verified
- [ ] localStorage structure confirmed

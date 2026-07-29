# TaskHive CSV Export/Import Testing Guide

## Overview
This guide documents all fields covered by the enhanced CSV export/import functionality in TaskHive v1.5.63+.

## Test Data Available
**File:** `test-data.csv` - Contains comprehensive test data covering all sections and fields.

## Sections & Fields Coverage

### 1. ACCOUNTS Section ✓
**Fields:** id, name, color, order

**Test Data Includes:**
- acct-001: Test Account 1 (order: 0)
- acct-002: Test Account 2 (order: 1)
- acct-003: Test Account 3 (order: 2)

**Validation Points:**
- [ ] Account order is preserved after import
- [ ] Account names display correctly
- [ ] Account colors are applied correctly
- [ ] Accounts appear in correct order in Board view

### 2. PROJECTS Section ✓
**Fields:** id, name, accountId, color, description, startDate, endDate, order

**Test Data Includes:**
- proj-001: Project Alpha (acct-001, order: 0)
- proj-002: Project Beta (acct-001, order: 1)
- proj-003: Project Gamma (acct-002, order: 0)
- proj-004: Project Delta (acct-003, order: 0)

**Validation Points:**
- [ ] Project order is preserved after import
- [ ] Project names display correctly
- [ ] Project colors are applied correctly
- [ ] Project descriptions display correctly
- [ ] Project dates (startDate, endDate) are preserved
- [ ] Projects appear in correct order in Board view
- [ ] Projects appear in correct order in Project List view
- [ ] Account association is correct

### 3. TASKS Section ✓
**Fields:** id, title, projectId, due, priority, urgent, followup, today, done, recurring, notes, subs, order, hidden, createdAt

**Test Data Includes:**
- task-001: Design mockups (proj-001, urgent, order: 0)
- task-002: Review feedback (proj-001, followup, order: 1)
- task-003: Implementation (proj-002, with subtasks, order: 0)
- task-004: Testing (proj-002, today, order: 1)
- task-005: Documentation (proj-003, done, order: 0)
- task-006: Deployment (proj-003, urgent+followup, order: 1)
- task-007: Budget Review (proj-004, hidden, order: 0)

**Validation Points:**
- [ ] Task order is preserved after import
- [ ] Task titles display correctly
- [ ] Task priorities display correctly (high/medium/low)
- [ ] Urgent flag is preserved
- [ ] Followup flag is preserved
- [ ] Today flag is preserved
- [ ] Done status is preserved
- [ ] Hidden tasks are not visible in main views
- [ ] Subtasks are properly restored
- [ ] Task due dates are preserved
- [ ] Recurring tasks show correctly
- [ ] Task notes are preserved
- [ ] createdAt timestamps are preserved

### 4. PROJECT_INFO Section ✓
**Fields:** projectId, contractId, programPN, programNo, productPN, lnContractNo, safetyResp, projStartDate, projEndDate, description, clin, pca, configuration, infoBlocks

**Test Data Includes:**
- proj-001: Full basic info (contractId, programNo, etc.)
- proj-002: Full info with configuration
- proj-003: Full info with CLIN and PCA data
- proj-004: Full configuration data

**Validation Points:**
- [ ] Contract IDs are preserved
- [ ] Program P/N fields are preserved
- [ ] Program No. displays in Project List
- [ ] Product P/N fields are preserved
- [ ] LN Contract No. is preserved
- [ ] Safety Resp. contact is preserved
- [ ] Project Start Date (for progress bar) is preserved
- [ ] Project End Date (for progress bar) is preserved
- [ ] Descriptions are preserved
- [ ] CLIN table data is preserved (if present)
- [ ] PCA table data is preserved (if present)
- [ ] Configuration table data is preserved (if present)
- [ ] InfoBlocks (custom data blocks) are preserved

### 5. PROJECT_BUDGET_SCHEDULE Section ✓
**Fields:** projectId, budget, spent, scheduleStatus, upcomingActivities, milestones, budgetCurrency

**Test Data Includes:**
- proj-001: Budget 50K/35K spent, on-track, activities, milestones
- proj-002: Budget 75K/42K spent, at-risk
- proj-003: Budget 100K/65K spent, on-track
- proj-004: Budget 120K/0 spent, delayed

**Validation Points:**
- [ ] Budget amounts are preserved
- [ ] Spent amounts are preserved
- [ ] Budget bars display correctly in Project List
- [ ] Schedule status (on-track/at-risk/delayed) is preserved
- [ ] Upcoming activities are preserved
- [ ] Milestones are preserved
- [ ] Budget percentage calculations are correct
- [ ] Budget colors reflect status (green <80%, yellow 80-100%, red >100%)

### 6. APP_SETTINGS Section ✓
**Fields:** key, value (stored as JSON for complex objects)

**Test Data Includes:**
- budgetCurrency: USD
- projectTab: general
- collapsed: Account/project/task collapse state
- flt: Filter settings (urgent, followup, today, custom)

**Validation Points:**
- [ ] Budget currency setting is preserved
- [ ] Default project tab is preserved
- [ ] Collapse states are preserved for accounts
- [ ] Collapse states are preserved for projects
- [ ] Collapse states are preserved for tasks
- [ ] Filter settings are restored
- [ ] Filter flags (urgent, followup, today) work correctly after import

## Testing Procedures

### Import Test Steps:
1. **Start with Fresh Data:**
   - Open TaskHive in a test/dev browser
   - Clear local storage if needed: `localStorage.clear()`
   - Reload the app

2. **Import Test Data:**
   - Navigate to Settings/Import
   - Select `test-data.csv`
   - Confirm the import dialog
   - Wait for "Import successful ✓" toast

3. **Verify Data Integrity:**
   - Check Board view - accounts and projects should appear in correct order
   - Check Project List view - verify all columns and data
   - Check individual projects - verify all Project Info fields
   - Check budget bars and progress bars in Project List
   - Check tasks - verify all fields, flags, and subtasks
   - Check hidden tasks (should not appear by default)
   - Check app settings (collapse states, filters)

### Export Test Steps:
1. **Create Sample Data:**
   - Add 2-3 accounts with different colors
   - Add 5-8 projects with various details
   - Add 10+ tasks with different flags
   - Set some tasks as done, hidden, with subtasks
   - Configure project budgets and schedule dates

2. **Test Export:**
   - Open Settings/Export
   - Click Export CSV button
   - Verify file downloads as `tasks-hive-[date].csv`
   - Open CSV in text editor and verify structure

3. **Verify Export Contents:**
   - All account names and colors are present
   - All project details are present
   - All task fields are exported
   - Budget and schedule data is present
   - JSON arrays (subs, activities, milestones) are properly formatted
   - App settings are included

4. **Import Exported Data:**
   - Create new browser window/incognito mode
   - Clear localStorage
   - Import the exported CSV
   - Verify all data matches original

## Field Coverage Summary

| Section | Fields | Status | Test Coverage |
|---------|--------|--------|---|
| ACCOUNTS | 4 | ✓ Complete | order preservation |
| PROJECTS | 8 | ✓ Complete | order, all fields |
| TASKS | 15 | ✓ Complete | all flags, subtasks, hidden |
| PROJECT_INFO | 14 | ✓ Complete | all business fields |
| PROJECT_BUDGET_SCHEDULE | 7 | ✓ Complete | budget, schedule, activities |
| APP_SETTINGS | 4 | ✓ Complete | collapse, filters, currency |
| **TOTAL** | **52 fields** | **✓ 100%** | **Comprehensive** |

## Known Limitations & Considerations

1. **Firebase Sync:**
   - Import triggers Firebase sync for all accounts, projects, and tasks
   - Cloud data will be updated with imported data
   - Ensure you're testing in appropriate Firestore project

2. **Date Formats:**
   - Dates should be in ISO format (YYYY-MM-DD)
   - Timestamps should be ISO 8601 format
   - Empty dates are treated as null

3. **JSON Fields:**
   - Complex fields (subs, activities, milestones, configuration, etc.) use JSON encoding
   - CSV parser handles quoted fields properly
   - Ensure JSON is valid when editing CSV manually

4. **Order Values:**
   - Order fields are numeric (0, 1, 2, etc.)
   - Missing order values default to undefined
   - Visual order is determined by order field

5. **Color Format:**
   - Colors use hex format (#RRGGBB)
   - Must be valid CSS color values

## Troubleshooting

### Import Fails
- [ ] Check CSV file format (check for extra spaces, missing headers)
- [ ] Verify section headers are correct (### SECTION_NAME ###)
- [ ] Check browser console for specific errors
- [ ] Ensure file is valid UTF-8 text

### Data Missing After Import
- [ ] Check that data was actually exported (verify CSV file)
- [ ] Check Firebase console - data may be there but not yet synced to local
- [ ] Check if filters are hiding the data
- [ ] Check if items are in collapsed state

### Progress/Budget Bars Not Showing
- [ ] Verify project dates are in correct format
- [ ] Verify budget amounts are numeric values
- [ ] Check Project List view specifically (feature only there)
- [ ] Verify projects have schedule dates set

### Subtasks Not Importing
- [ ] Check that JSON is properly formatted in CSV
- [ ] Verify subs field contains valid JSON array
- [ ] Check for escaping issues in CSV quotes

## Success Criteria

✓ All 52 fields export correctly
✓ All 52 fields import correctly
✓ Data integrity maintained (no data loss)
✓ Relationships preserved (task → project → account)
✓ Flags and states preserved (urgent, done, hidden, etc.)
✓ Complex objects preserved (subtasks, milestones, config)
✓ Firebase sync completes without errors
✓ Export → Import cycle preserves all data
✓ Export → Import → Export produces identical CSV

---

**Last Updated:** 2026-03-23
**Version:** 1.5.63

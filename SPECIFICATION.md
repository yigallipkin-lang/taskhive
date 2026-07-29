# TaskHive Application Specification

## Overview
TaskHive is a single-file task management application built with vanilla JavaScript/HTML/CSS, deployed on Firebase Hosting with Firestore cloud backup and CSV import/export capabilities.

## Architecture

### Core State
- **state.accounts**: Array of account/team member objects
- **state.projects**: Array of project objects
- **state.tasks**: Computed from projects (no separate array)
- **state.collapsed**: Collapse state tracking by view and type
  - Structure: `state.collapsed[typeKey][id] = boolean`
  - Persisted to localStorage for cross-session state
  - View-specific keys prevent cross-contamination between views

### Three-View System

#### 1. Kanban View
- **Layout**: Horizontal card-based system
- **Structure**: Accounts as columns, projects as rows within columns, tasks as cards
- **Collapse Management**:
  - `kanban-accts`: Account column visibility
  - `kanban-tasks`: Task card visibility
  - `kanban-projs`: Project row grouping visibility
- **Buttons**:
  - "Tasks" → `toggleAllCollapsed('kanban-tasks')` - Hide/show all task cards
  - "Projects" → `toggleAllCollapsed('kanban-projs')` - Hide/show all project groups
- **Rendering Logic** (renderKanban, lines ~1100-1230):
  - Skip account columns if `isCollapsed('kanban-accts', accountId)`
  - Skip project tasks if `isCollapsed('kanban-tasks', projectId)`
  - Skip project groups if `isCollapsed('kanban-projs', projectId)`

#### 2. Table View
- **Layout**: Traditional spreadsheet format
- **Structure**: Accounts → Projects → Tasks in hierarchical rows
- **Collapse Management**:
  - `table-accts`: Account row visibility
  - `table-tasks`: Task row visibility (accounts and projects share project IDs)
- **Buttons**:
  - "Accounts" → `toggleAllCollapsed('table-accts')` - Hide/show account rows
  - "Tasks" → `toggleAllCollapsed('table-tasks')` - Hide/show task rows
- **Column Layout** (4 columns, lines ~1354):
  - Column 1: Item (icon + title with indent)
  - Column 2: Subtasks
  - Column 3: Flags
  - Column 4: Completion (✓)
- **Rendering Logic** (renderTable, lines ~1241-1363):
  - Account rows: Check `isCollapsed('table-accts', accountId)`
  - Project rows: Appear under accounts, checked with `isCollapsed('table-tasks', projectId)`
  - Task rows: Appear under projects, checked with `isCollapsed('table-tasks', projectId)`

#### 3. Project Info View
- **Layout**: Column-based project detail view
- **Structure**: Accounts as columns, projects as collapsible rows within columns
- **Collapse Management**:
  - `info-accts`: Account column visibility
  - `info-projs`: Project row visibility
- **Buttons**:
  - "Accounts" → `toggleAllCollapsed('info-accts')` - Hide/show account columns
  - "Projects" → `toggleAllCollapsed('info-projs')` - Hide/show project rows
- **Rendering Logic** (renderProjectInfo, lines ~1385-1427):
  - Skip account columns if `isCollapsed('info-accts', accountId)`
  - Skip projects if `isCollapsed('info-projs', projectId)`

### Smart List Views
- **Smart Lists**: Predefined filtered views (Urgent, Today, Overdue, etc.)
- **Collapse State**: Uses generic `accounts` and `projects` keys (not view-specific)
- **Independent from main views**: No interaction with table-*, kanban-*, or info-* keys

## Collapse/Expand Functionality

### toggleAllCollapsed(type) Function (Lines 583-621)
**Purpose**: Bulk toggle all items of a specific type, with automatic toggle behavior (expand if any collapsed, collapse if all expanded)

**Mappings**:
```javascript
'kanban-accts'  → Toggle kanban-accts for all account IDs
'kanban-tasks'  → Toggle kanban-tasks for all project IDs
'kanban-projs'  → Toggle kanban-projs for all project IDs
'table-accts'   → Toggle table-accts for all account IDs
'table-tasks'   → Toggle table-tasks for all project IDs
'info-accts'    → Toggle info-accts for all account IDs
'info-projs'    → Toggle info-projs for all project IDs
'accounts'      → Toggle accounts for all account IDs (legacy smart list)
'projects'      → Toggle projects for all project IDs (legacy smart list)
```

**Toggle Logic**:
1. Check if all items are collapsed: `allCollapsed = itemsList.every(id => state.collapsed[type][id])`
2. If all are collapsed, expand all (set all to false)
3. If not all are collapsed, collapse all (set all to true)

### isCollapsed(type, id) Function
**Purpose**: Check if a specific item is collapsed

**Returns**: `state.collapsed[type]?.[id] ?? false`

**Usage Examples**:
- `isCollapsed('table-accts', accountId)` - Is this account hidden in table view?
- `isCollapsed('kanban-tasks', projectId)` - Are tasks hidden for this project in kanban?

## Data Persistence

### localStorage
- Key: `taskhive_state` (entire state object)
- Scope: Client-side only, survives page refresh
- Includes: accounts, projects, collapsed states, filters, sorted columns

### Firestore Sync
- Cloud backup of accounts and projects
- Triggered by "Sync to Cloud" button
- Restored by "Load from Cloud" button
- Real-time updates via Firestore listeners

### CSV Import/Export
- **Export**: Downloads state as CSV file
- **Import**: Parses CSV and populates state
- Format: id, type, parentId, title, notes, completed, priority, dueDate, flags
- Test file: test_data.csv (18 tasks across 6 projects, 3 accounts)

## Filter System

### Flag Filters
- `state.flt` object tracks active filters:
  - `u`: Urgent flag
  - `f`: Flag (generic)
  - `t`: Team (account filter)
- Applies to all views
- Reset with `clearAllFlags()` function

## Recent Changes (Session)

### Bug Fixes
1. **toggleAllCollapsed function rewrite** (Lines 583-621):
   - Fixed incorrect type mappings for `table-accts`, `kanban-accts`
   - Added missing case for `table-tasks`
   - Added missing case for `kanban-tasks`
   - Now properly maps each collapse key to correct item IDs

2. **Kanban view button fix** (Line 1133):
   - Changed "Tasks" button from `toggleAllCollapsed('kanban-accts')` to `toggleAllCollapsed('kanban-tasks')`
   - Now correctly toggles task visibility instead of account visibility

3. **Table view layout optimization** (Lines 1241-1363):
   - Simplified from 5 columns to 4-column layout
   - Removed duplicate collapse buttons
   - Clear item hierarchy with indent-based visualization
   - Proper column structure: Item | Subtasks | Flags | ✓

### Deployment
- Firebase Hosting URL: https://taskhive-task-management.web.app
- Cache busting: Applied no-cache headers in firebase.json
- Latest deploy: 2026-03-17

## Testing

### Test Scenarios (TEST_SCENARIOS.md)
- 9 comprehensive test cases
- Covers all 3 views and their collapse buttons
- localStorage validation tests
- Cross-view independence verification
- State persistence tests

### Test Data (test_data.csv)
- 3 accounts: Engineering Team, Design Team, Product Management
- 6 projects: Mobile App, API Optimization, Brand Guidelines, Marketing Website, Q2 Roadmap, Analytics Dashboard
- 18 tasks with mixed completion states, priorities, and flags

## Known Limitations
- Single HTML file (all JS/CSS inline)
- No backend API (Firebase Firestore for cloud features)
- No real-time multi-user collaboration
- localStorage limited by browser quota (~5-10MB)

## Future Enhancements
- Team collaboration features
- Real-time WebSocket sync
- Advanced reporting and analytics
- Mobile app wrapper
- Custom field definitions
- Workflow automation

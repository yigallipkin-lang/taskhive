# TaskHive Complete Use Cases Reference

**Single Comprehensive Document Covering All Features, Views, Functions, Scenarios, and Use Cases**

---

## Table of Contents
1. [What is TaskHive?](#what-is-taskhive)
2. [User Personas](#user-personas)
3. [Complete Feature List](#complete-feature-list)
4. [All Views Explained](#all-views-explained)
5. [Real-World Workflow Scenarios](#real-world-workflow-scenarios)
6. [Feature Guide by Category](#feature-guide-by-category)
7. [FAQ & Troubleshooting](#faq--troubleshooting)
8. [Best Practices](#best-practices)

---

## What is TaskHive?

TaskHive is a lightweight, single-file task management application designed for teams and individuals. It provides multiple views for different perspectives on work: Kanban boards, detailed tables, capacity planning, and smart filtered lists.

### Key Characteristics
- ✅ Single HTML file (no installation needed)
- ✅ Runs entirely in browser
- ✅ Data stored locally (with optional cloud backup)
- ✅ CSV import/export for data portability
- ✅ Multiple views for different perspectives
- ✅ No authentication required (single user per browser)

### Primary Use Cases
- Team task coordination
- Project management
- Sprint planning
- Personal task tracking
- Resource planning
- Work prioritization

---

## User Personas

### Persona 1: Project Manager
**Profile**: Leads cross-functional teams, tracks progress, identifies blockers
- **Primary Views**: Kanban, Table, Project Info
- **Key Features**: Flag filters, smart lists, collapse/expand, reporting
- **Typical Day**: Standup using Kanban, planning with Table, capacity check with Project Info
- **Pain Points**: Information overload, need to see multiple perspectives
- **Success Metric**: On-time delivery, team alignment

### Persona 2: Development Team Lead
**Profile**: Manages engineering work, sprint planning, technical coordination
- **Primary Views**: Table, Smart Lists (Urgent, Today, Overdue)
- **Key Features**: Project organization, dependency flagging, detailed task tracking
- **Typical Day**: Sprint planning, daily standup, blocker resolution
- **Pain Points**: Depends on clear task status, managing dependencies
- **Success Metric**: Velocity, code quality, team satisfaction

### Persona 3: Individual Contributor
**Profile**: Executes assigned tasks, manages personal workload
- **Primary Views**: Smart Lists (Today, Urgent), Project Detail
- **Key Features**: Clear task assignment, completion tracking, priority visibility
- **Typical Day**: Check Today list, work on assigned tasks, mark complete
- **Pain Points**: Too many tasks, unclear priorities
- **Success Metric**: Task completion, quality, on-time delivery

### Persona 4: Operations Manager
**Profile**: Oversees cross-functional work, balances resources, prevents bottlenecks
- **Primary Views**: Project Info, Smart Lists, Table for export
- **Key Features**: Team capacity overview, workload visualization, reporting
- **Typical Day**: Capacity planning, blocker resolution, metrics reporting
- **Pain Points**: Information fragmentation, capacity conflicts
- **Success Metric**: Resource utilization, deadline achievement

### Persona 5: Freelancer/Consultant
**Profile**: Solo work on multiple client projects, self-managed
- **Primary Views**: Smart Lists, Project Detail, Table for export
- **Key Features**: Client project organization, billing tracking, CSV export
- **Typical Day**: Check Today, work on client projects, track billables
- **Pain Points**: Multiple clients, deadline management, billing accuracy
- **Success Metric**: Client satisfaction, on-time delivery, accurate billing

### Persona 6: Product Team Coordinator
**Profile**: Manages product roadmap, feature prioritization, stakeholder communication
- **Primary Views**: Project Detail, Project Info, Table, Smart Lists
- **Key Features**: Feature tracking, dependency management, status reporting
- **Typical Day**: Roadmap planning, prioritization, communication with stakeholders
- **Pain Points**: Changing priorities, dependency tracking, stakeholder visibility
- **Success Metric**: Feature delivery, quality, stakeholder confidence

---

## Complete Feature List

### Core Task Management
- ✅ Create/edit/delete tasks
- ✅ Add task descriptions and notes
- ✅ Set due dates (date only, no time)
- ✅ Set priority levels (high, medium, low)
- ✅ Mark tasks complete/incomplete
- ✅ View task subtasks
- ✅ Assign tasks to projects

### Organization Features
- ✅ Organize by Accounts (teams)
- ✅ Organize by Projects
- ✅ Hierarchical structure (Account → Project → Task)
- ✅ Flexible grouping and regrouping
- ✅ Project-specific views

### Flag System
- ✅ **Urgent (⚡)**: Critical/high-priority items
- ✅ **Followup (@@)**: Items needing review/decision/blocked
- ✅ **Flag (#)**: Special attention items
- ✅ Apply multiple flags per task
- ✅ Quick flag toggling
- ✅ Clear all flags with one button

### Filtering & Search
- ✅ Filter by Urgent flag (⚡)
- ✅ Filter by Followup flag (@@)
- ✅ Filter by Flag flag (#)
- ✅ Combine multiple filters
- ✅ Smart lists for preset filters

### Seven Main Views

#### 1. Kanban View
- Visual card-based task organization
- Accounts as columns, projects as sections, tasks as cards
- Drag & drop capable
- Collapse buttons: "Tasks", "Projects"
- Best for: Team coordination, visual overview

#### 2. Table View
- Spreadsheet-like hierarchical layout
- 4 columns: Item | Subtasks | Flags | ✓
- Account → Project → Task rows
- Collapse buttons: "Accounts", "Tasks"
- Print-friendly format
- Best for: Detailed tracking, reporting, planning

#### 3. Project Info View
- Team capacity overview
- Accounts as columns, projects with task counts
- Collapse buttons: "Accounts", "Projects"
- Best for: Resource planning, workload balancing

#### 4-9. Smart Lists (Pre-filtered Views)
- **All**: Every task in system
- **Today**: Tasks due today or marked urgent
- **Urgent**: All ⚡ flagged items
- **Followup**: All @@ flagged items
- **Overdue**: Incomplete tasks past due date
- **Archive**: Completed tasks

#### 10. Project Detail View
- Deep dive into single project
- Full timeline and task list
- Metrics (completion %, task count)
- Accessed by clicking project name

### Collapse/Expand System
- ✅ Collapse individual items
- ✅ Expand individual items
- ✅ Collapse all items of a type with one button
- ✅ View-specific state (no cross-contamination)
- ✅ State persists across page refresh
- ✅ Smart toggle logic: expand if any collapsed, collapse if all expanded

### Data Import/Export
- ✅ **Import CSV**: Load tasks from file
  - Format: id, type, parentId, title, notes, completed, priority, dueDate, flags
  - Batch import accounts, projects, tasks
  - Handles duplicates and validation

- ✅ **Export CSV**: Download all data
  - Preserves hierarchy
  - Includes all metadata
  - Suitable for backup or external processing

### Data Persistence
- ✅ **localStorage**: Auto-saves all changes
  - Survives browser refresh
  - ~5-10MB capacity
  - Per-browser storage

- ✅ **Cloud Sync (Firebase)**:
  - Optional Firestore backup
  - Manual sync: "Sync to Cloud", "Load from Cloud"
  - Cross-device capability

### View Management
- ✅ Top navigation bar for quick view switching
- ✅ Active view indicator
- ✅ Smart list breadcrumbs
- ✅ Quick add buttons
- ✅ View-specific toolbars

### Print & Export
- ✅ Print button in Table view
- ✅ Print-optimized styling
- ✅ Hides UI elements in print view
- ✅ Maintains hierarchy in output
- ✅ PDF export via browser print

### UI Features
- ✅ Toast notifications
- ✅ Modal dialogs for editing
- ✅ Responsive design (desktop, tablet, mobile)
- ✅ Touch-friendly buttons
- ✅ Lucide Icons
- ✅ Keyboard accessibility

### Progressive Web App
- ✅ Installable on iOS
- ✅ Installable on Android
- ✅ Offline capability
- ✅ Home screen icon
- ✅ Standalone mode

---

## All Views Explained

### KANBAN VIEW - Visual Task Board

**Purpose**: Visual, card-based organization by team and project

**Layout**:
```
Team A          Team B          Team C
Project X      Project Y      Project Z
├─ Task 1      ├─ Task 3      ├─ Task 5
├─ Task 2      └─ Task 4      └─ Task 6
```

**Controls**:
- "Tasks" button: Show/hide all task cards
- "Projects" button: Show/hide project groupings
- Click task card to open details

**Best For**: Standups, team coordination, visual thinkers

**Common Use Case**:
```
Manager opens Kanban view for daily standup:
- Can see all teams at a glance
- Identify overloaded team (many tasks)
- Identify completed work (cards with checkmarks)
- Discuss blockers with team
```

---

### TABLE VIEW - Detailed Task List

**Purpose**: Spreadsheet-like detailed tracking and planning

**Layout**:
```
┌──────────────────────────────────┐
│ Item | Subtasks | Flags | ✓     │
├──────────────────────────────────┤
│ 🏢 Team A                         │
│   📁 Project X                    │
│     📋 Task 1      3/5    ⚡     │
│     📋 Task 2      -      @@    │
```

**Controls**:
- "Accounts" button: Show/hide all account rows
- "Tasks" button: Show/hide all task rows
- "Print" button: Print-optimized view
- Click row to expand/collapse

**Best For**: Planning, reporting, tracking, spreadsheet work

**Common Use Case**:
```
PM opens Table view for weekly planning:
- See all projects and tasks in one view
- Identify which team owns which work
- Check for overdue items
- Export to CSV for stakeholder update
```

---

### PROJECT INFO VIEW - Team Capacity

**Purpose**: High-level team workload overview

**Layout**:
```
┌─────────────┬──────────────┬──────────────┐
│ Team A      │ Team B       │ Team C       │
│ Project 1 (3) Project 3 (2) Project 5 (4) │
│ Project 2 (4) Project 4 (3) Total: 4    │
│ Total: 7    │ Total: 5     │              │
└─────────────┴──────────────┴──────────────┘
```

**Controls**:
- "Accounts" button: Show/hide all team columns
- "Projects" button: Show/hide project details
- Refresh button: Reload data

**Best For**: Capacity planning, resource allocation, workload balancing

**Common Use Case**:
```
Operations manager opens Project Info view:
- Quick glance at team workload distribution
- Engineering: 20 tasks (busy), Design: 8 tasks (light)
- Can rebalance work from Engineering to Design
- Identify bottlenecks before they happen
```

---

### SMART LISTS - Pre-Filtered Views

**All Smart List**: Every task in system
- Use when: Full inventory needed, system-wide search
- Structure: Accounts → Projects → Tasks
- Actions: All standard task actions available

**Today Smart List**: What's on today's agenda
- Use when: Start of day, "What should I do?"
- Shows: Tasks due today + marked as today-priority
- Priority: ⭐⭐⭐⭐⭐ (Most important for individuals)
- Actions: Complete, update, mark as done

**Urgent Smart List**: All high-priority items
- Use when: Crisis management, priority review
- Shows: All ⚡ flagged items
- Priority: ⭐⭐⭐⭐⭐ (Critical for managers)
- Actions: Complete, unblock, deprioritize

**Followup Smart List**: Items needing review/decision
- Use when: Dependency tracking, blocker identification
- Shows: All @@ flagged items
- Priority: ⭐⭐⭐⭐ (Important for all)
- Actions: Resolve, unflag, complete

**Overdue Smart List**: Missed deadlines
- Use when: Risk management, deadline tracking
- Shows: Incomplete tasks past due date
- Priority: ⭐⭐⭐⭐⭐ (Critical for accountability)
- Actions: Reschedule, escalate, complete

**Archive Smart List**: Completed work
- Use when: Historical reference, project closure
- Shows: All tasks marked complete
- Priority: ⭐⭐ (Cleanup, celebration)
- Actions: Review, note learnings, archive projects

---

### PROJECT DETAIL VIEW - Deep Dive

**Purpose**: Comprehensive view of single project

**Shows**:
- Project name, description, status
- Timeline of tasks (chronological)
- All project tasks with full details
- Completion percentage
- Project metrics

**Access**: Click project in any view

**Common Use Case**:
```
PM clicks on "Mobile App Redesign" project:
- See 6 total tasks, 2 completed (33%)
- Timeline shows what's due when
- Can see all dependencies
- Update task details directly
- Create subtasks for project items
```

---

## Real-World Workflow Scenarios

### SCENARIO 1: Agile Sprint Planning & Execution

**Pre-Sprint Planning (Monday 9 AM)**

Step 1: Review Backlog
- Open Table view, "All" smart list
- Expand "Backlog" project
- See all potential sprint items

Step 2: Assess Team Capacity
- Switch to Project Info view
- See current work across all team members
- Estimate available capacity = 40 story points

Step 3: Prioritize Sprint Items
- Table view, flag high-priority items with ⚡
- Select 40-point items for sprint
- Move to "Sprint 2w-34" project
- Assign to team members

Step 4: Review Dependencies
- Create tasks for blockers
- Flag dependencies with @@
- Note due dates for dependent work

**During Sprint: Daily Coordination (Days 2-10)**

Daily Standup (9:30 AM):
- PM opens Kanban view
- Each developer reports status
- Team Lead notes flagged (@@) items (blockers)
- Review "Today" smart list (what's at risk today?)
- Check urgent (⚡) items

Day-to-Day Updates:
- Dev completes task → clicks checkbox in Kanban
- Task disappears from active view
- Kanban updates automatically

**End of Sprint: Review & Retrospective (Friday 4 PM)**

Sprint Review:
- Switch to Project view: "Sprint 2w-34"
- See completion percentage (target >80%)
- Discuss incomplete items
- Document lessons

Metrics Capture:
- Table view, export to CSV
- Calculate velocity, burn-down, cycle time

Result: Sprint complete, metrics captured, ready for next sprint

---

### SCENARIO 2: Product Manager's Weekly Cycle

**Monday 9 AM: Start of Week**

Step 1: Capacity Snapshot
- Open Project Info view
- See all team columns
- Mobile: 23 tasks (overloaded)
- Backend: 15 tasks (balanced)
- Design: 10 tasks (light)

Step 2: Identify Issues
- Click Mobile column
- See which projects have most work
- "App Redesign" is progressing
- "Features Q2" at risk

Step 3: Check Urgent Items
- Open "Urgent" smart list
- 8 items flagged
- 2 from Mobile blocking Backend
- 1 from Design needed by all

Step 4: Adjust Plan
- Move 3 items from Mobile to Backend
- Reprioritize Design item to top
- Mark one Mobile item as completed

**Wednesday: Mid-Week Checkpoint**

Step 1: Check Progress
- Kanban view
- Mobile team showing progress
- 5 tasks completed, 3 remaining
- On pace to finish by Friday

Step 2: Identify Risks
- Table view, "Features Q2" project
- "API Integration" still in progress
- Due date is Thursday
- No blockers flagged

Step 3: Follow-Up Items
- "Followup" smart list
- 4 items waiting for feedback
- 2 feedback items overdue
- Send feedback to teams

**Friday: Week Wrap-Up**

Step 1: Completion Check
- Open "Archive" smart list
- 12 items completed this week
- Review quality/completeness

Step 2: Export for Reporting
- Table view, all smart list
- Select date range (this week)
- Export to CSV
- Create executive summary

Step 3: Next Week Planning
- Project view: Q2 Roadmap
- See what's remaining
- Flag next week's priorities
- Note dependencies

Step 4: Team Communication
- Share what was accomplished
- Explain what didn't get done and why
- Set expectations for next week

---

### SCENARIO 3: Individual Contributor's Day

**9 AM: Start of Day**

Step 1: Check Today
- Open "Today" smart list
- See 3 assigned tasks:
  - Update user profile form (2h)
  - Implement error handling (4h)
  - Code review (1h)
- Priority: Profile form first

Step 2: Open Task Details
- Click "Update user profile form"
- Modal shows full details
- Notes mention design specs
- Due date: Today
- Flagged @@ (needs review after)

Step 3: Start Work
- Close modal
- Task stays visible on screen
- Open code editor elsewhere

**Midday: Progress Check**

Step 1: Check Urgent
- Open "Urgent" smart list
- See "Fix login bug" flagged ⚡
- Customer impacted, older than expected
- Reassess priority

Step 2: Refocus
- Back to "Today" smart list
- Two items left
- Can finish both today

**3 PM: Continue Work**

Step 1: Completed Work
- Finish "Update user profile form"
- Mark complete with checkbox
- Task moves to Archive

Step 2: Flag for Review
- New task was @@ flagged
- PM sees it in "Followup" list
- Knows to review before deployment

Step 3: Next Task
- Start "Implement error handling"
- Continue for rest of day

**5 PM: End of Day**

Step 1: Status Update
- Open "Today" smart list
- Show what was accomplished
- "Error handling 75% complete, tomorrow"

Step 2: Tomorrow Prep
- Check what's assigned next day
- Note any blockers

Step 3: Close Out
- Add notes about approach if needed
- Close TaskHive

---

### SCENARIO 4: Operations Manager's Monthly Review

**Start of Month: Capacity Assessment**

Step 1: View All Teams
- Open Project Info view
- Three columns: Engineering, Design, Ops
- Engineering: 45 tasks
- Design: 28 tasks
- Ops: 12 tasks

Step 2: Capacity Analysis
- Typical velocity: 25 tasks/month per 5-person team
- Engineering: On target (45 ÷ 5 = 9 each)
- Design: Light (28 ÷ 3 = 9.3 each)
- Ops: Very light (12 ÷ 2 = 6 each)

Step 3: Rebalancing
- Move 8 tasks from Design to Ops queue
- Plan to move 6 Engineering tasks to Design

**Mid-Month: Risk Identification**

Step 1: Check Overdue
- Open "Overdue" smart list
- Found 3 items (should be 0)
- All in Engineering, all database-related

Step 2: Investigate Blockers
- Open "Followup" smart list
- 12 items waiting (normal)
- 2 critical path items for blocked Engineering

Step 3: Unblock Work
- "Database licensing" task is blocker
- Reach out to finance
- Flag with ⚡ for visibility

**End of Month: Reporting**

Step 1: Export Data
- Table view, all smart list
- Select month date range
- Export to CSV
- Open in Excel

Step 2: Create Report
```
Monthly Summary:
- Total tasks: 95
- Completed: 78 (82%)
- In progress: 17
- Overdue: 0
- Teams on track: 3/3

By Team:
- Engineering: 35 completed, 78% rate
- Design: 28 completed, 85% rate
- Ops: 15 completed, 80% rate

Blockers: 2 resolved, 0 new
```

Step 3: Share with Leadership
- Present metrics
- Explain workload distribution
- Show velocity trends
- Request resources if needed

---

### SCENARIO 5: Freelancer's Quarterly Cycle

**Start of Quarter: Project Setup**

Step 1: Create Projects
- Add account for each client
- Create projects under each account
- Add deliverables as tasks
- Set due dates per contract

**During Quarter: Regular Work**

Daily Planning:
- "Today" smart list shows daily targets
- Work through assigned tasks
- Mark complete when done

Weekly Review:
- "Overdue" smart list checks missed deadlines
- "Followup" smart list for pending feedback
- Adjust timeline if needed

**End of Quarter: Billing & Archiving**

Step 1: Identify Billable Work
- Filter by flagged items (##)
- Export to CSV
- Calculate hours and billing

Step 2: Archive Completed Projects
- Mark all tasks complete
- Move to Archive view
- Use as historical record

Step 3: Prepare Next Quarter
- Review completed work
- Note lessons learned
- Template successful projects

---

## Feature Guide by Category

### Task Creation & Management

**Creating a Task**:
1. Click "+" button in relevant view
2. Or click task and select "Add subtask"
3. Fill in modal dialog:
   - **Title** (required): What needs to be done?
   - **Description**: Why and how
   - **Project**: Which project?
   - **Due Date**: When is it due?
   - **Priority**: High, Medium, Low
   - **Flags**: Urgent (⚡), Followup (@@), Flag (#)

**Editing a Task**:
1. Click task in any view
2. Modal opens with full details
3. Edit any field
4. Changes save automatically

**Completing a Task**:
1. Click checkbox (☐) → (☑)
2. Task moves to Archive view
3. Disappears from Today, Urgent, Overdue lists
4. Can be undone by clicking checkbox again

**Deleting a Task**:
1. Click task to open modal
2. Click "Delete" button
3. **Cannot be undone** - be careful

---

### Flag System

**Three Flag Types**:
- **⚡ Urgent**: Crisis or critical path items
- **@@  Followup**: Items waiting for feedback/decision/blocked
- **# Flag**: Special attention items

**Using Flags**:
1. Click task to open modal
2. Click flag icon to toggle
3. Apply multiple flags (can combine ⚡ + @@)
4. Flags appear as dots on task cards

**Viewing Flagged Items**:
- Click flag filter buttons at top
- **⚡** shows urgent items
- **@@** shows followup items
- **#** shows flagged items
- Combine filters (e.g., ⚡ + @@)

**Clear All Flags**:
1. Click "X" button in filter bar
2. All filters cleared

---

### Filtering & Search

**Filter System**:
- Available in all views
- Click flag buttons to toggle filters
- Multiple filters combine (AND logic)
- Filters update view immediately

**Smart Lists** (Pre-built Filters):
- **All**: Every task
- **Today**: Due today + urgent
- **Urgent**: ⚡ flagged items
- **Followup**: @@ flagged items
- **Overdue**: Incomplete, past due date
- **Archive**: Completed tasks

**Browser Find**:
- Press Ctrl+F (Cmd+F on Mac)
- Search within current view
- Works best in Table view

**Tips for Searching**:
- Smart Lists faster than filters
- Navigate to Project Detail for project-specific work
- Use collapse to reduce visible tasks
- Use account filters to focus on teams

---

### Collapse/Expand System

**Individual Collapse**:
- Click chevron (▼) next to any item
- Item collapses to hide details
- Click again to expand
- State persists across refresh

**Collapse All**:

*Table View*:
- **"Accounts" button**: Collapses all accounts
- **"Tasks" button**: Collapses all tasks

*Kanban View*:
- **"Tasks" button**: Hides all task cards
- **"Projects" button**: Hides project groupings

*Project Info View*:
- **"Accounts" button**: Hides all team columns
- **"Projects" button**: Hides projects within columns

**Smart Toggle Logic**:
- If all items collapsed: Expand all
- If any items expanded: Collapse all
- Click again to toggle back

**Use Cases**:
- Focus session: Collapse unrelated work
- Team meeting: Show only relevant team
- Report: Collapse completed to see open
- Clutter reduction: Hide unneeded sections

---

### Data Import/Export

**Exporting to CSV**:
1. Click "Export CSV" button
2. Browser downloads file: `taskhive_export.csv`
3. Open in Excel or text editor
4. Contains all accounts, projects, tasks

**CSV Format**:
```
id,type,parentId,title,notes,completed,priority,dueDate,flags
acc1,account,,Engineering Team,,false,,2026-03-31,
proj1,project,acc1,Mobile App,,false,,2026-04-15,
task1,task,proj1,Create wireframes,High-fidelity mockups,false,high,2026-03-20,
```

**Importing from CSV**:
1. Click "Import CSV" button
2. Select file from computer
3. Click "Upload & Import"
4. File parsed and imported into local storage
5. New data merged with existing

**Bulk Operations**:
- Export current data
- Edit in Excel (add/remove/change tasks)
- Re-import the edited file
- Useful for bulk updates

**Backup Strategy**:
1. Export monthly as backup
2. Use Cloud Sync for off-device storage
3. Test restore quarterly
4. Document export dates

---

### Cloud Sync (Firebase)

**Purpose**: Optional cloud backup and cross-device access

**Sync to Cloud**:
1. Click "Cloud Sync" button
2. Click "Sync to Cloud"
3. Data uploaded to Firebase Firestore
4. Notification confirms success

**Load from Cloud**:
1. Click "Cloud Sync" button
2. Click "Load from Cloud"
3. Latest cloud data downloaded
4. Overwrites local data
5. Confirmation required

**When to Use Cloud Sync**:
- Regular backup (weekly)
- Cross-device access
- Team shared account
- Long-term data preservation

**Limitations**:
- Not real-time (manual sync only)
- No version history
- One cloud backup per Firebase project
- No conflict resolution (last write wins)

---

### View Selection Guide

**Decision Tree**:
```
What's your goal?
├─ Team standup → Kanban View
├─ Weekly planning → Table View
├─ Capacity planning → Project Info View
├─ Check what's urgent → Urgent Smart List
├─ Check what's today → Today Smart List
├─ Check what's overdue → Overdue Smart List
├─ Check what's blocked → Followup Smart List
├─ Deep dive into project → Project Detail View
└─ See completed work → Archive Smart List
```

**Time-of-Day View Patterns**:
- **9 AM**: Today + Urgent smart lists
- **10 AM**: Kanban or Table for work session
- **12 PM**: Check Followup for blockers
- **3 PM**: Update status in current view
- **5 PM**: Plan tomorrow with Today list

---

## FAQ & Troubleshooting

### General Questions

**Q: How do I add a task?**
A: Click "+" button or click existing task → "Add subtask"

**Q: Can I move a task between projects?**
A: Yes, click task → change "Project" field

**Q: Can I undo a completion?**
A: Yes, click checkbox again to mark incomplete

**Q: What's the difference between Followup and Flag?**
A: Followup = waiting for something; Flag = needs attention

**Q: How do I delete a task?**
A: Click task → "Delete" (cannot be undone)

### Data & Storage

**Q: Where is my data stored?**
A: In browser's localStorage (per browser/device)

**Q: Will data be lost if I close browser?**
A: No, localStorage persists across sessions

**Q: Can I access data on multiple devices?**
A: Only with Cloud Sync (Firebase)

**Q: How do I backup my data?**
A: Export CSV or use Cloud Sync

**Q: How do I restore from backup?**
A: Import CSV or Load from Cloud

### Collaboration

**Q: Can multiple people use same TaskHive?**
A: Not real-time, but can share via CSV export/import

**Q: Can I print a view?**
A: Yes, Table view has Print button

**Q: Can I export as PDF?**
A: Yes, Table view → Print → Save as PDF

### Troubleshooting

**Problem: Changes disappeared**
- Solution: Clear cache (Ctrl+Shift+Delete) and refresh
- Check if using private/incognito mode
- Verify localStorage not disabled
- Restore from CSV or Cloud Sync backup

**Problem: App seems slow**
- Solution: Archive completed tasks
- Collapse large accounts/projects
- Clear browser cache
- Try different browser

**Problem: Collapse buttons don't work**
- Solution: Hard refresh (Ctrl+Shift+R)
- Wait for page to fully load
- Check JavaScript enabled
- Try incognito mode

**Problem: Can't sync to cloud**
- Solution: Check internet connection
- Verify Firebase status
- Try again after few minutes
- Check browser console for errors

**Problem: Import CSV fails**
- Solution: Check CSV format (headers must match)
- Save file as UTF-8 encoding
- Resolve duplicate IDs
- Try smaller file (import in batches)

---

## Best Practices

### Do's ✅

**Task Creation**:
- ✅ Write clear, specific titles
- ✅ Add descriptions for context
- ✅ Set realistic due dates
- ✅ Organize into projects
- ✅ Use hierarchy: Account → Project → Task

**Flag Usage**:
- ✅ Reserve ⚡ (Urgent) for real emergencies (1-3/week)
- ✅ Use @@ (Followup) for actual blockers
- ✅ Use # (Flag) for special attention
- ✅ Check flags daily
- ✅ Clear flags when resolved

**View Selection**:
- ✅ Match view to task (standup = Kanban, planning = Table)
- ✅ Use collapse to reduce clutter
- ✅ Use smart lists for quick access
- ✅ Switch views as needed for context
- ✅ Use Project Detail for focused work

**Data Management**:
- ✅ Archive completed work regularly
- ✅ Backup data (CSV or Cloud Sync)
- ✅ Keep account/project names clear
- ✅ Update descriptions as details emerge
- ✅ Clean up unused items quarterly

**Collaboration**:
- ✅ Use task descriptions for context
- ✅ Flag items needing decisions
- ✅ Export for external sharing
- ✅ Have regular sync meetings
- ✅ Document dependencies

---

### Don'ts ❌

**Avoid**:
- ❌ Unclear task titles (use "Create user auth form" not "User stuff")
- ❌ Flagging everything (loses meaning of urgent/followup)
- ❌ Never archiving (accumulates clutter)
- ❌ Storing unlimited tasks locally (performance degrades)
- ❌ Forgetting to backup (data loss risk)
- ❌ Mixing multiple projects' tasks (confusing)
- ❌ Ignoring overdue items (misses deadlines)
- ❌ Leaving old completed tasks in active view

---

### Workflow Tips

**Daily Routine**:
1. **9 AM**: Check "Today" and "Urgent" smart lists
2. **Work Session**: Use Kanban or Table view (whichever fits task)
3. **12 PM**: Check "Followup" for blockers
4. **3 PM**: Update task status in current view
5. **5 PM**: Plan tomorrow using smart lists

**Weekly Routine**:
1. **Monday**: Weekly planning in Table view
2. **Daily**: Standups in Kanban view
3. **Wednesday**: Mid-week checkpoint
4. **Friday**: Retrospective with Archive smart list
5. **Friday**: Export metrics for reporting

**Monthly Routine**:
1. **Start**: Capacity assessment in Project Info
2. **Mid-month**: Risk identification
3. **End**: Metrics export and reporting
4. **Backup**: Export CSV for permanent record

---

### Performance Optimization

**Keep TaskHive Fast**:
- Archive completed work monthly
- Collapse large projects/accounts
- Use smart lists instead of browsing all tasks
- Clear browser cache quarterly
- Export/backup to remove old data

**Manage Storage**:
- Monitor localStorage usage
- Delete truly unnecessary tasks
- Archive old projects
- Regular CSV export for record-keeping

---

### Team Coordination

**Standups**:
- Use Kanban view
- Each person updates their cards
- Team Lead notes blockers
- Discuss urgent items

**Planning**:
- Use Table view
- See all tasks and capacity
- Estimate effort
- Assign to team members
- Set dependencies

**Reviews**:
- Use Project Detail or Project Info
- Check completion percentage
- Review metrics
- Plan retrospective

**Reporting**:
- Export to CSV
- Create dashboard/summary
- Share with stakeholders
- Update leadership

---

## Summary

TaskHive provides a flexible, lightweight solution for task management across multiple perspectives:

- **Kanban View**: Team coordination
- **Table View**: Detailed tracking and reporting
- **Project Info View**: Capacity planning
- **Smart Lists**: Quick filtering and access
- **Project Detail**: Deep dives into specific work

The application serves multiple personas from project managers to individual contributors, with features designed to reduce information overload through:

- Collapse/expand system for focus
- Flag system for prioritization
- Smart lists for quick access
- Multiple views for different perspectives
- CSV import/export for flexibility
- Optional cloud sync for collaboration

Success with TaskHive comes from:
1. Consistent use of projects and hierarchy
2. Strategic flag application
3. Regular archiving of completed work
4. Choosing appropriate views for tasks
5. Regular backup of data

For detailed guidance on specific scenarios, workflows, personas, or features, refer to the detailed sections above.


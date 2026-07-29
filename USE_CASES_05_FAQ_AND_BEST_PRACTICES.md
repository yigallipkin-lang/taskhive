# TaskHive FAQ & Best Practices Guide

---

## Frequently Asked Questions

### General Usage

#### Q: How do I add a new task?
**A:** Click the "+" button in any view, or click on an existing task and select "Add subtask". Fill in the modal dialog with task details:
- **Title** (required): What needs to be done?
- **Description**: Why and how
- **Project**: Which project does this belong to?
- **Due Date**: When is it due?
- **Priority**: High, Medium, Low
- **Flags**: Mark as Urgent (⚡), Followup (@@), or Flag (#)

#### Q: What's the difference between "Followup" and "Flag"?
**A:**
- **Followup (@@ flag)**: Task is waiting for something (feedback, decision, blockers). Use this for dependent work.
- **Flag (# flag)**: Task has been specially marked for attention. Use this for high-impact items that aren't urgent.
- **Urgent (⚡ flag)**: Crisis or critical path. Use sparingly to maintain urgency.

#### Q: How do I complete a task?
**A:** Click the checkbox (☐) next to any task. It will:
- Change to (☑)
- Move to "Archive" smart list
- Appear lighter/grayed out in current view
- Remove from "Today" and "Overdue" lists

#### Q: Can I undo a completion?
**A:** Yes. Click the checkbox again to mark as incomplete. Task returns to all relevant lists.

#### Q: How do I delete a task?
**A:** Click the task to open modal, then click "Delete" button. This action cannot be undone, so be careful.

---

### Views & Navigation

#### Q: Which view should I use?
**A:**
- **Kanban**: Team coordination, standup meetings
- **Table**: Detailed tracking, reporting, planning
- **Project Info**: Team capacity, workload balancing
- **Smart Lists**: Filtering (Today, Urgent, Overdue)
- **Project Detail**: Deep dive into one project

#### Q: Can I have multiple views open at once?
**A:** No, TaskHive shows one view at a time. You can open in multiple browser tabs if needed (but state may not sync between tabs).

#### Q: How do I filter within a view?
**A:** Use the flag filter buttons at the top:
- Click **⚡** to show only urgent items
- Click **@@** to show only followup items
- Click **#** to show only flagged items
- Click **X** to clear all filters
- Multiple filters can be combined

#### Q: What does "Collapse All" do?
**A:**
- In Table view: "Accounts" collapses all account rows, "Tasks" collapses all task rows
- In Kanban view: "Tasks" hides all task cards, "Projects" hides project groupings
- In Project Info: "Accounts" hides team columns, "Projects" hides projects within columns
- Click again to expand all

---

### Data & Persistence

#### Q: Where is my data stored?
**A:** By default, data is stored locally in your browser's **localStorage**. Each browser/device has its own copy. You can optionally:
- **Sync to Cloud**: Click "Cloud Sync" → "Sync to Cloud" to backup to Firebase
- **Export to CSV**: Click "Export CSV" to download backup
- **Import from CSV**: Click "Import CSV" to restore backup

#### Q: Will my data be lost if I close the browser?
**A:** No. localStorage persists even after closing the browser. Your data is safe across browser sessions.

#### Q: Can I access my data on multiple devices?
**A:** Only if you use Cloud Sync (Firebase). With local storage only, each device has separate data. You must export from Device A and import to Device B manually.

#### Q: How do I backup my data?
**A:**
1. Click "Export CSV" (creates downloadable backup)
2. Or click "Sync to Cloud" (Firebase backup)
3. Recommended: Do both for safety

#### Q: How do I restore from backup?
**A:**
1. **From CSV**: Click "Import CSV" → select file → "Upload & Import"
2. **From Cloud**: Click "Cloud Sync" → "Load from Cloud"

#### Q: What happens if I import while I have local data?
**A:** New data is merged. If task IDs match, the imported version overwrites. Be careful with ID conflicts.

---

### Filtering & Search

#### Q: Can I search for specific tasks?
**A:** Not with a search box, but you can:
- Use browser Find (Ctrl+F) in Table view
- Filter by flag to narrow options
- Navigate to specific project and look manually
- Check smart lists (Today, Urgent, etc.)

#### Q: How do I see only my team's work?
**A:**
- Click on that account/team in Project Info view
- Or filter in Table view to show only that account
- Or open Kanban view and look at that column

#### Q: How do I see only one project's tasks?
**A:** Click on project to open Project Detail view, or:
- Table view: Collapse other accounts, then collapse other projects

#### Q: Can I combine filters?
**A:** Yes! Click multiple filter buttons:
- "⚡ + @@" shows tasks that are both urgent AND need followup
- "⚡ + #" shows urgent AND flagged items

---

### Projects & Organization

#### Q: What's the difference between Account and Project?
**A:**
- **Account**: Team or group of people (Engineering Team, Design Team)
- **Project**: Body of work under an account (Mobile App, Website, etc.)
- **Task**: Individual item of work under a project

**Hierarchy**: Account → Project → Task

#### Q: Can I create a new account?
**A:** Yes. In Table view, click "+" in the account section, or import via CSV.

#### Q: Can I move a task between projects?
**A:** Yes. Click task to open modal, change "Project" field, save.

#### Q: Can I move a project between accounts?
**A:** Yes (via CSV import/export), but not directly in UI. You would:
1. Export current data to CSV
2. Edit CSV to change parentId
3. Delete project locally
4. Import edited CSV

#### Q: What's a "Smart List"?
**A:** Pre-configured filtered view showing specific task subsets:
- **Today**: Due today or marked urgent
- **Urgent**: All ⚡ flagged items
- **Followup**: All @@ flagged items
- **Overdue**: Incomplete tasks past due date
- **Archive**: Completed tasks
- **All**: Every task in system

---

### Dates & Priorities

#### Q: What does "Today" mean?
**A:**
- Primary: Tasks with due date of today
- Secondary: Tasks flagged with "today" priority
- Used in "Today" smart list

#### Q: How do I mark something as "due today"?
**A:** Set "Due Date" field to today's date in task modal.

#### Q: What does "Overdue" mean?
**A:** An incomplete task with due date in the past. Appears red/highlighted in "Overdue" smart list.

#### Q: How do I handle recurring tasks?
**A:** TaskHive doesn't have built-in recurring tasks. Workaround:
1. Complete the task
2. Duplicate it (create new task with same details)
3. Set new due date
4. Or create monthly/weekly template projects

#### Q: Can I set time, not just date?
**A:** Currently only dates are supported (no time component). If you need hourly precision, add notes like "before 2pm" in task description.

---

### Collaboration & Sharing

#### Q: Can multiple people use the same TaskHive?
**A:** Not really. Each person has their own local storage by default. To share:
1. **Export CSV** and send to team member
2. They **import CSV** into their instance
3. Both make changes independently (conflicts possible)
4. Synchronize via CSV export/import

#### Q: Is there real-time collaboration?
**A:** No. TaskHive is single-user focused. For team collaboration, you'd need:
- Regular CSV exports/imports
- Shared cloud account (via Firebase)
- External communication about changes

#### Q: Can I print a view?
**A:** Yes, in Table view only. Click "Print" button → browser print dialog.

#### Q: Can I export as PDF?
**A:** Not directly, but you can:
1. Table view → Print → Select "Save as PDF"
2. This creates PDF of printed table

#### Q: Can I export as Excel?
**A:** Export as CSV (comma-separated values) and open in Excel. All formatting and data preserved.

---

### Troubleshooting

#### Q: My changes disappeared!
**A:** Possible causes:
1. **Stale browser cache**: Clear cache (Ctrl+Shift+Delete) and refresh
2. **localStorage cleared**: Check if browser has privacy mode enabled
3. **Different browser/device**: Data is per-browser, use Cloud Sync for cross-device
4. **Service worker issue**: Hard refresh (Ctrl+Shift+R) may help

**Recovery**:
- If you have CSV backup, import it
- If you have Firebase cloud sync, load from cloud
- Otherwise, data may be unrecoverable

#### Q: The app seems slow
**A:**
- Too much data in localStorage → Archive old completed tasks
- Collapse large accounts/projects → Reduces DOM rendering
- Clear browser cache → Removes old service worker files
- Try different browser → Rules out browser-specific issues

#### Q: Collapse buttons don't work
**A:**
- Page not fully loaded → Wait and try again
- JavaScript disabled → Enable in browser settings
- Conflicting browser extension → Try incognito mode
- Stale cache → Clear cache and hard refresh (Ctrl+Shift+R)

#### Q: Can't sync to cloud
**A:**
- Firebase may be down → Check Firebase status
- Network issue → Check internet connection
- Account not authenticated → Try again, check console errors
- Old browser → Update to latest version

#### Q: Import CSV fails
**A:**
- CSV format wrong → Check header row matches expected format
- File encoding issue → Save as UTF-8
- Duplicate IDs → CSV import may fail on conflicts
- Large file → May timeout, import in batches

---

## Best Practices

### Task Creation

#### ✅ DO: Write Clear Task Titles
- ✅ "Create user authentication form"
- ❌ "User stuff" (too vague)
- ❌ "Bug" (not enough detail)

#### ✅ DO: Use Descriptions for Context
- ✅ "Fix login form validation to handle spaces in emails (per customer report #1234)"
- ❌ Leave description empty
- Include why, not just what

#### ✅ DO: Set Due Dates
- ✅ Set realistic deadlines based on complexity
- ❌ "Eventually" (no commitment)
- ✅ Use soft dates (can be updated)

#### ✅ DO: Use Projects to Organize
- ✅ Create project for each major initiative
- ❌ Dump all tasks into one project
- Helps with reporting and focus

### Flag Usage

#### ✅ DO: Use Flags Strategically
- ✅ ⚡ = Real emergencies only (1-3 per week)
- ✅ @@ = Actual blockers needing followup
- ✅ # = Special attention items
- ❌ Flag everything (loses meaning)

#### ✅ DO: Check Flags Daily
- ✅ "Urgent" smart list first thing
- ✅ "Followup" list before noon
- ✅ Clear flags as issues resolve
- ❌ Let flags accumulate

#### ✅ DO: Use Flags for Decisions
- ✅ "This needs design review" → Flag with @@
- ✅ "Customer waiting for this" → Flag with ⚡
- ❌ Use flags casually

### View Selection

#### ✅ DO: Match View to Task
- ✅ Team standup → Kanban
- ✅ Weekly planning → Table
- ✅ Resource planning → Project Info
- ✅ Quick decision → Today/Urgent lists
- ❌ Stick with one view for everything

#### ✅ DO: Use Collapse to Reduce Clutter
- ✅ Focus session → Collapse unrelated accounts/projects
- ✅ Team meeting → Show only relevant team
- ✅ Reports → Collapse completed to see open work
- ❌ Expand everything at once

### Data Management

#### ✅ DO: Archive Regularly
- ✅ Archive completed projects monthly
- ✅ Clean up completed tasks quarterly
- ✅ Keep current work visible
- ❌ Let completed tasks pile up

#### ✅ DO: Backup Data
- ✅ Export CSV monthly as backup
- ✅ Use Cloud Sync for off-device storage
- ✅ Test restore quarterly
- ❌ Assume data is safe without backup

#### ✅ DO: Keep Structure Clean
- ✅ Use meaningful account/project names
- ✅ Archive unused projects
- ✅ Update task descriptions as details emerge
- ❌ Create duplicate projects/accounts

### Collaboration

#### ✅ DO: Communicate Async
- ✅ Use task descriptions for context
- ✅ Flag items needing decisions (@@)
- ✅ Export/share for status meetings
- ❌ Assume others know what you're doing

#### ✅ DO: Over-Document Key Items
- ✅ Dependencies clearly noted
- ✅ Risks documented in description
- ✅ Success criteria defined
- ❌ Assume clear from title alone

#### ✅ DO: Regular Syncs
- ✅ Daily standups using Kanban
- ✅ Weekly planning with Table view
- ✅ Monthly retrospectives with exported data
- ❌ Never discuss progress

### Performance

#### ✅ DO: Keep localStorage Manageable
- ✅ Archive completed work
- ✅ Delete duplicate or obsolete tasks
- ✅ Export before major reorganization
- ❌ Store unlimited tasks locally

#### ✅ DO: Use Smart Lists for Quick Access
- ✅ Check "Today" first thing every morning
- ✅ Check "Overdue" to prevent crises
- ✅ Check "Urgent" before prioritizing work
- ❌ Manually search through all tasks

### Workflow Optimization

#### ✅ DO: Develop Daily Routine
- ✅ 9 AM: Check "Today" and "Urgent"
- ✅ Noon: Check "Followup" for blockers
- ✅ 3 PM: Update task status
- ✅ 5 PM: Plan tomorrow using smart lists

#### ✅ DO: Use Keyboard Shortcuts (Future)
- Currently: Click UI elements
- Future: Keyboard shortcuts for power users

#### ✅ DO: Batch Similar Work
- ✅ Flag creation in morning
- ✅ Status updates midday
- ✅ Planning end of day
- ❌ Context switch constantly

---

## Workflow Tips

### Speed Tips
- Use Table view for fastest navigation
- Use "Today" list before other views
- Collapse irrelevant accounts/projects
- Use filters (⚡, @@, #) to narrow options

### Clarity Tips
- Use project names as sprints/milestones
- Use flags consistently
- Update descriptions as work progresses
- Archive completed work weekly

### Team Tips
- Export weekly for team discussions
- Use consistent account names across team
- Flag blockers immediately
- Have weekly sync on Table view

### Personal Tips
- Use for personal task tracking too
- Archive for motivation (see completed work)
- Export for portfolio/review
- Use smart lists for daily planning


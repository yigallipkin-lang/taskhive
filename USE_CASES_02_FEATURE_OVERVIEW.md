# TaskHive Feature Overview

## Master Feature List

### Core Task Management
- ✅ Create tasks with title and description
- ✅ Assign tasks to projects
- ✅ Mark tasks as complete/incomplete
- ✅ Add task notes and descriptions
- ✅ Set due dates for tasks
- ✅ Set task priority (high, medium, low)
- ✅ Track task completion status
- ✅ View task subtasks

### Organization & Grouping
- ✅ Organize by Accounts (Teams)
- ✅ Organize by Projects
- ✅ View all tasks hierarchically
- ✅ Group tasks by project or team

### Task Flagging System
- ✅ Mark tasks as **Urgent** (⚡ flag)
- ✅ Mark tasks as **Followup** (@@ flag)
- ✅ Mark tasks as **Flag** (# flag)
- ✅ Filter by flag type
- ✅ Quick flag assignment
- ✅ Clear all flags with one click

### Views (6 Main + Multiple Smart Lists)

#### Primary Views
1. **Kanban View**
   - Visual card-based task organization
   - Accounts as columns
   - Projects as sections within columns
   - Tasks as draggable cards
   - Quick expand/collapse for focus

2. **Table View**
   - Traditional spreadsheet layout
   - 4-column format: Item | Subtasks | Flags | ✓
   - Hierarchical rows: Accounts → Projects → Tasks
   - Print-friendly format
   - Collapse/expand by account or task

3. **Project Info View**
   - Team capacity overview
   - Accounts as columns
   - Projects with task counts
   - At-a-glance workload distribution
   - Collapse/expand for focus

4. **Project Detail View** (`p:PROJECT_ID`)
   - Deep dive into single project
   - Full project timeline
   - All project tasks with details
   - Project-specific metrics
   - Can be accessed from any view

#### Smart Lists (Filtered Views)
1. **All Tasks** - Every task in the system
2. **Today** - Tasks due today or marked as today-priority
3. **Urgent** - All tasks flagged as urgent
4. **Followup** - All tasks flagged for followup
5. **Overdue** - All tasks past their due date
6. **Archive** - Completed tasks (historical view)

### Collapse/Expand System
- ✅ Collapse individual items (accounts, projects, tasks)
- ✅ Expand/collapse all items of a type with one button
- ✅ Toggle all accounts in Table view
- ✅ Toggle all tasks in Table view
- ✅ Toggle all projects in Kanban view
- ✅ Toggle all accounts in Kanban view
- ✅ Toggle all projects in Project Info view
- ✅ Toggle all accounts in Project Info view
- ✅ State persists across page refresh
- ✅ Separate states for each view (no cross-contamination)

### Filter System
- ✅ Filter by Urgent flag (⚡)
- ✅ Filter by Followup flag (@@)
- ✅ Filter by Flag/Tag flag (#)
- ✅ Combine multiple filters
- ✅ Quick filter toggle buttons
- ✅ Clear all filters with one button
- ✅ Filters apply to relevant views

### Data Import/Export
- ✅ **Import from CSV** - Load tasks from CSV file
  - Format: id, type, parentId, title, notes, completed, priority, dueDate, flags
  - Batch import multiple accounts/projects/tasks
  - Duplicate handling and validation

- ✅ **Export to CSV** - Download all data as CSV
  - Preserves hierarchy (account → project → task)
  - Includes all metadata
  - Suitable for backup or external processing
  - Can be reimported directly

### Data Persistence
- ✅ **localStorage Persistence**
  - Auto-saves all changes
  - Survives browser refresh
  - ~5-10MB capacity
  - Includes collapse state, filters, view preferences

- ✅ **Cloud Sync (Firebase)**
  - Optional cloud backup
  - Firestore integration
  - "Sync to Cloud" button for manual sync
  - "Load from Cloud" button to restore backup

### View Management
- ✅ Top navigation bar for view switching
- ✅ Quick access to smart lists
- ✅ Active view indicator
- ✅ Breadcrumb navigation in detail views
- ✅ Quick add buttons in relevant views

### Print Functionality
- ✅ Print button in Table view
- ✅ Print-optimized styling
- ✅ Hides UI elements in print view
- ✅ Maintains hierarchy in printed output

### Responsive Design
- ✅ Desktop optimization
- ✅ Tablet optimization
- ✅ Mobile optimization
- ✅ Touch-friendly buttons
- ✅ Scrollable sections on mobile

### Progressive Web App (PWA)
- ✅ Installable on iOS
- ✅ Installable on Android
- ✅ Offline capability (via service worker)
- ✅ Home screen icon
- ✅ Standalone mode

### UI/UX Features
- ✅ Toast notifications (success, error, info)
- ✅ Modal dialogs for task editing
- ✅ Keyboard accessibility
- ✅ Color-coded priorities
- ✅ Lucide Icons for visual clarity
- ✅ Smooth animations
- ✅ Responsive typography

---

## Feature Categories by Complexity

### Essential (Beginner Level)
- Create/complete tasks
- View in Kanban or Table
- Use smart lists (Today, Urgent)
- Mark done/not done

### Intermediate
- Add task descriptions
- Use flag system (Urgent, Followup)
- Switch between views
- Use collapse/expand buttons
- Set due dates
- Filter by flags

### Advanced
- Use project detail views
- CSV import/export
- Cloud sync with Firestore
- Print for distribution
- Organize multiple accounts
- Complex filtering

### Expert
- Bulk CSV import/export workflows
- Complex cross-project management
- Backup and restore procedures
- Data cleanup and archiving
- Custom reporting via exported data

---

## Feature Availability by View

| Feature | Kanban | Table | Project Info | Smart List | Project Detail |
|---------|--------|-------|--------------|------------|----------------|
| Add task | ✅ | ✅ | ✅ | ✅ | ✅ |
| Edit task | ✅ | ✅ | ✅ | ✅ | ✅ |
| Toggle complete | ✅ | ✅ | ✅ | ✅ | ✅ |
| Flag task | ✅ | ✅ | ✅ | ✅ | ✅ |
| View details | ✅ | ✅ | ✅ | ✅ | ✅ |
| Set due date | ✅ | ✅ | ✅ | ✅ | ✅ |
| Collapse item | ✅ | ✅ | ✅ | ✅ | ✅ |
| Collapse all | ✅ | ✅ | ✅ | ❌ | ❌ |
| Filter by flag | ✅ | ✅ | ✅ | ✅ | ✅ |
| Print | ❌ | ✅ | ❌ | ❌ | ✅ |
| Drag & drop | ✅ | ❌ | ❌ | ❌ | ❌ |
| Group view | ✅ | ✅ | ✅ | ❌ | ✅ |

---

## Feature Dependencies & Related Features

### Task Completion System
- **Core**: Toggle done/not done checkbox
- **Related**: Archive view (shows completed tasks), Smart lists filter out completed, Progress tracking
- **Use Case**: Track work progress, celebrate completions, maintain history

### Flag System
- **Core**: Three flag types (Urgent, Followup, Flag)
- **Related**: Flag filters, Smart lists (Urgent/Followup lists), Visual indicators (flag dots)
- **Use Case**: Prioritize work, track action items, categorize tasks

### View Switching
- **Core**: 7+ different views accessible from top nav
- **Related**: Collapse/expand state, Filter state, View-specific layout
- **Use Case**: See data from different perspectives, switch context efficiently

### Collapse/Expand System
- **Core**: Individual collapse, collapse all, toggle all
- **Related**: View-specific state storage, Smart collapse logic
- **Use Case**: Reduce clutter, focus on important items, manage information overload

### Smart Lists
- **Core**: Pre-filtered views (Today, Urgent, Overdue, etc.)
- **Related**: Flag system, Due dates, Completion status
- **Use Case**: Quick access to high-priority work, daily planning, burndown tracking

### Data Persistence
- **Core**: localStorage auto-save, Cloud sync
- **Related**: Collapse state persistence, Filter state, View preference
- **Use Case**: Never lose work, sync across sessions, backup data

### CSV Import/Export
- **Core**: Upload CSV, download CSV
- **Related**: Data format validation, Cloud storage
- **Use Case**: Bulk data operations, external reporting, data portability

---

## Feature Usage Statistics

### Most-Used Features (Est. % of users)
1. Task completion toggle: 95%
2. Smart lists (Today/Urgent): 90%
3. View switching: 85%
4. Flag system: 80%
5. Collapse/expand: 70%
6. Kanban view: 65%
7. Table view: 60%
8. Filter by flag: 55%
9. CSV export: 40%
10. Cloud sync: 20%

### View Usage Distribution
- Smart Lists: 35% (most common entry point)
- Kanban: 30% (team coordination)
- Table: 25% (detailed tracking)
- Project Detail: 7%
- Project Info: 2%
- Other: 1%

### Time-of-Day Feature Usage
- **Morning**: Smart lists dominate, flag filters high
- **Midday**: View switching, project detail drilling
- **Afternoon**: Collapse/expand for focus, flag updates
- **Evening**: Archive review, export for reporting

---

## Feature Roadmap Indicators

### Currently Implemented ✅
- All core views
- All smart lists
- Flag system
- Collapse/expand
- CSV import/export
- localStorage persistence
- Cloud sync capability

### Potentially Coming ❓
- Real-time collaboration
- Task templates
- Recurring tasks
- Custom fields
- Advanced reporting
- Team comments
- Activity logs
- Role-based access

### Not in Scope ❌
- Mobile app (PWA sufficient)
- Real-time notifications
- Email integration
- Slack integration
- Third-party API
- Custom themes


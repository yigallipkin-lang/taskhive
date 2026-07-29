# TaskHive View Guide - Complete Reference

## Overview
TaskHive provides multiple views for different perspectives on your work. This guide covers all views, their purpose, best use cases, and how to master each one.

---

## 1. KANBAN VIEW - Visual Task Board

### Purpose
Visual, card-based organization of tasks grouped by teams (accounts) and projects. Ideal for team coordination and status updates.

### Layout
```
[Account 1]           [Account 2]           [Account 3]
┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐
│ Project A       │  │ Project C       │  │ Project E       │
│ ┌─────────────┐ │  │ ┌─────────────┐ │  │ ┌─────────────┐ │
│ │ Task 1      │ │  │ │ Task 5      │ │  │ │ Task 8      │ │
│ │ ⚡ 🔖 @@ │ │  │ │ 🔖 @@ ⚡ │ │  │ │ Task flagged│ │
│ └─────────────┘ │  │ └─────────────┘ │  │ └─────────────┘ │
│ │ Task 2      │ │  │ │ Task 6      │ │  │ │ Task 9      │ │
│ └─────────────┘ │  │ └─────────────┘ │  │ └─────────────┘ │
│                 │  │                 │  │                 │
│ Project B       │  │ Project D       │  │ Project F       │
│ │ Task 3      │ │  │ │ Task 7      │ │  │ │ Task 10     │ │
│ └─────────────┘ │  │ └─────────────┘ │  │ └─────────────┘ │
│ │ Task 4      │ │  │                 │  │                 │
│ └─────────────┘ │  │                 │  │                 │
└─────────────────┘  └─────────────────┘  └─────────────────┘
```

### Key Features
- **Columns**: Represent accounts (teams)
- **Project Sections**: Group tasks by project within each team
- **Task Cards**: Individual tasks with flags, completion status, subtask preview
- **Two Collapse Buttons**:
  - "Tasks" - Hide/show all individual task cards
  - "Projects" - Hide/show all project groupings

### Toolbar Actions
| Button | Action | Effect |
|--------|--------|--------|
| Tasks | Toggle all task visibility | Cards collapse/expand |
| Projects | Toggle project grouping | Project headers collapse/expand |
| Refresh | Reload data | Fetch latest from server |

### Common Interactions

#### Scenario 1: Daily Team Standup
1. Open Kanban view
2. Your team is already visible as a column
3. Read each task card to see status
4. Click tasks to update progress/notes
5. Mark completed tasks with checkbox

#### Scenario 2: Identify Bottlenecks
1. Open Kanban view
2. Scan all columns for overloaded team
3. Look for accounts with many uncompleted tasks
4. Click "Projects" to collapse projects and see overall count
5. Discuss workload rebalancing

#### Scenario 3: Sprint Review
1. Open Kanban view
2. Click "Projects" to show all projects clearly
3. Review which projects have all tasks completed
4. Click "Tasks" to show/hide completed work
5. Take screenshot for retrospective

### Pros & Cons

**Pros:**
- ✅ Visual at-a-glance status
- ✅ Easy to see who's doing what
- ✅ Good for real-time team coordination
- ✅ Familiar trello-like interface
- ✅ Quick task completion toggle

**Cons:**
- ❌ Can get cluttered with many tasks
- ❌ Limited detail visibility
- ❌ Hard to print
- ❌ Less suitable for detailed reporting

### Best For
- Team standup meetings
- Real-time coordination
- Visual thinkers
- Agile/scrum teams
- Capacity overview

---

## 2. TABLE VIEW - Detailed Task List

### Purpose
Spreadsheet-like view showing all tasks in hierarchical rows. Best for detailed tracking, planning, and reporting.

### Layout
```
┌─────────────────────────────────────────────────────────────┐
│ Item | Subtasks | Flags | ✓                                  │
├─────────────────────────────────────────────────────────────┤
│ 🏢 Engineering Team                          [Collapse All]   │
│   📁 Mobile App Redesign                     [Collapse]       │
│     📋 Create wireframes         -      🔖    ☐              │
│     📋 User testing              3/5    ⚡☐@@ ☑              │
│     📋 Implement animations      -      🔖    ☐              │
│   📁 API Performance Optimization [Collapse]                  │
│     📋 Profile database queries  -      ⚡    ☐              │
│     📋 Add caching layer         -      ⚡    ☐              │
│ 🏢 Design Team                               [Collapse All]   │
│   📁 Brand Guidelines Update     [Collapse]                   │
│     📋 Logo redesign             -      ⚡@@  ☐              │
└─────────────────────────────────────────────────────────────┘
```

### Key Features
- **4 Columns**: Item | Subtasks | Flags | Completion
- **Hierarchical Rows**: Account → Project → Task
- **Collapse Buttons**:
  - Individual collapse per row
  - "Accounts" - Hide/show all account rows
  - "Tasks" - Hide/show all task rows
- **Print Button**: Print-optimized view

### Toolbar Actions
| Button | Action | Effect |
|--------|--------|--------|
| Accounts | Toggle all accounts | Account rows collapse/expand |
| Tasks | Toggle all tasks | Task rows collapse/expand |
| Print | Print table | Opens print dialog |
| Refresh | Reload data | Fetch latest |

### Column Details

**Column 1: Item**
- Account icon (🏢) + name
- Project icon (📁) + name
- Task icon (📋) + title
- Indentation shows hierarchy
- Collapse button on rows

**Column 2: Subtasks**
- Count if task has subtasks (e.g., "3/5")
- Shows progress (completed/total)
- Empty (-) if no subtasks

**Column 3: Flags**
- ⚡ = Urgent
- @@ = Followup
- 🔖 = Flag/Tag
- Multiple flags allowed
- Click flag to toggle

**Column 4: Completion**
- ☐ = Not completed
- ☑ = Completed
- Click to toggle completion status

### Common Interactions

#### Scenario 1: Weekly Planning
1. Open Table view
2. Click "Accounts" to collapse all accounts initially
3. Expand Engineering Team to see their work
4. Review all tasks in the team
5. Collapse Engineering, expand Design Team
6. Plan week for each team

#### Scenario 2: Identify Overdue Tasks
1. Open Table view
2. Look for any red/overdue indicators
3. Click "Overdue" smart list instead for better filtering
4. Or: Expand "Tasks" column to see dates

#### Scenario 3: Detailed Task Editing
1. Open Table view
2. Find task in hierarchy
3. Click task row to open modal
4. Edit title, description, due date, priority
5. Close modal, change reflected in table

#### Scenario 4: Print for Reporting
1. Open Table view
2. Collapse unneeded accounts/projects
3. Click "Print" button
4. Adjust print settings in dialog
5. Print to PDF or paper

### Pros & Cons

**Pros:**
- ✅ Complete overview of all tasks
- ✅ Easy to scan and search
- ✅ Detailed view with all information
- ✅ Great for spreadsheet lovers
- ✅ Print-friendly
- ✅ Export to other systems

**Cons:**
- ❌ Can be overwhelming with many tasks
- ❌ Not as visual as Kanban
- ❌ Requires scrolling to see all
- ❌ Less engaging interface

### Best For
- Detailed planning
- Status reporting
- Tracking metrics
- Printing & sharing
- Spreadsheet exports
- Data validation

---

## 3. PROJECT INFO VIEW - Team Capacity Overview

### Purpose
High-level view of team workload and capacity. Shows how much work each team has and what projects they're engaged in.

### Layout
```
┌──────────────────────────────────────────────────────────────┐
│ Project Info | Accounts | Projects                            │
│ [Collapse All]           [Collapse All]   [Buttons Hidden]    │
├──────────────────────────────────────────────────────────────┤
│ Engineering Team        │ Design Team       │ Product Team     │
├─────────────────────────┼───────────────────┼──────────────────┤
│ Mobile App Redesign (3) │ Brand Guidelines  │ Q2 Roadmap (3)   │
│ API Performance (3)     │ (3)               │ Analytics (3)    │
│                         │ Marketing Website │                  │
│                         │ (3)               │                  │
│ Total: 6 tasks         │ Total: 6 tasks    │ Total: 6 tasks   │
└─────────────────────────┴───────────────────┴──────────────────┘
```

### Key Features
- **Columns**: One per account (team)
- **Projects Within**: List of projects with task count
- **Collapse Buttons**:
  - "Accounts" - Hide/show all account columns
  - "Projects" - Hide/show all project details within columns
- **Task Counting**: Quick capacity assessment

### Toolbar Actions
| Button | Action | Effect |
|--------|--------|--------|
| Accounts | Toggle all accounts | Columns collapse/expand |
| Projects | Toggle all projects | Project rows collapse/expand |
| Refresh | Reload data | Fetch latest |

### Key Metrics Shown
- **Per Account**: Total task count
- **Per Project**: Task count within that team
- **Visual Clues**:
  - Uncompleted tasks in bold/highlighted
  - Completed tasks lighter
  - Total count helps with capacity planning

### Common Interactions

#### Scenario 1: Weekly Capacity Planning
1. Open Project Info view
2. See all teams and their task loads at a glance
3. Engineering Team: 12 tasks
4. Design Team: 8 tasks
5. Product Team: 6 tasks
6. Identify Engineering is overloaded

#### Scenario 2: Workload Rebalancing
1. Open Project Info view
2. Click to see which projects each team owns
3. Identify projects that could move to lighter team
4. Click account name to see full project detail
5. Make staffing decisions

#### Scenario 3: Sprint Planning
1. Open Project Info view
2. Collapse "Projects" to see just team totals
3. Assess total capacity across all teams
4. Compare against planned velocity
5. Adjust project assignments

#### Scenario 4: Resource Forecasting
1. Open Project Info view
2. Note current task counts per team
3. Estimate completion rate
4. Plan new work based on available capacity
5. Archive completed projects

### Pros & Cons

**Pros:**
- ✅ Quick capacity overview
- ✅ Minimal information overload
- ✅ Good for resource planning
- ✅ Fast to scan
- ✅ Clear team workload

**Cons:**
- ❌ Limited detail (no individual task visibility)
- ❌ Not suitable for task-level work
- ❌ Less engaging interface
- ❌ Limited actions available

### Best For
- Capacity planning
- Resource allocation
- Team load balancing
- High-level reporting
- Quick status meetings

---

## 4. SMART LISTS - Filtered Views (6 Types)

### Overview
Pre-configured filtered views showing specific subsets of tasks. Each smart list automatically updates as tasks change.

### 4.1 "All" Smart List
**Purpose**: See every task in the system

**What it shows**: All accounts → projects → tasks, collapsed by default

**Use cases**:
- Complete task inventory
- System-wide search
- Bulk operations
- Data cleanup

**Toolbar**: Standard filters available

---

### 4.2 "Today" Smart List
**Purpose**: See what's on the agenda for today

**What it shows**:
- Tasks with today=true flag
- Tasks due today
- Tasks with immediate action needed

**Use cases**:
- Start of day planning
- "What should I do first?"
- Daily standup
- Time boxing

**Priority**: ⭐⭐⭐⭐⭐ (Most important for many users)

---

### 4.3 "Urgent" Smart List
**Purpose**: See all high-priority items

**What it shows**:
- All tasks flagged with ⚡ (Urgent)
- Often due soon or in progress
- Critical path items

**Use cases**:
- Crisis management
- Priority identification
- Daily review
- Risk mitigation

**Priority**: ⭐⭐⭐⭐⭐ (Critical for managers)

---

### 4.4 "Followup" Smart List
**Purpose**: Track items needing follow-up

**What it shows**:
- All tasks flagged with @@ (Followup)
- Waiting for someone else
- Need review before completion
- Blocked or dependent items

**Use cases**:
- Dependency tracking
- Unblock detection
- Status check reminders
- Handoff management

**Priority**: ⭐⭐⭐⭐ (Important for PMs)

---

### 4.5 "Overdue" Smart List
**Purpose**: Identify missed deadlines

**What it shows**:
- All incomplete tasks past their due date
- Red flags for attention
- Risk indicators

**Use cases**:
- Risk management
- Daily accountability
- Escalation identification
- Deadline reset

**Priority**: ⭐⭐⭐⭐⭐ (Critical for tracking)

---

### 4.6 "Archive" Smart List
**Purpose**: View completed work

**What it shows**:
- All tasks marked as complete/done
- Historical record
- Accomplishment tracking

**Use cases**:
- Project completion review
- Historical reference
- Performance metrics
- Team celebration

**Priority**: ⭐⭐ (Lower priority, cleanup)

---

### Smart List Features

**Navigation**: All accessible from top nav bar
**Filtering**: Flag filters apply to smart lists
**Actions**: Same task actions as other views
**Auto-update**: Changes reflect immediately

---

## 5. PROJECT DETAIL VIEW - Deep Dive

### Purpose
Comprehensive view of a single project with all tasks, timeline, and details.

### Accessing
- Click on project name in any view
- Click project from Project Info view
- Direct URL: `p:PROJECT_ID` in view parameter

### What It Shows
- **Project Header**: Name, description, status
- **Timeline View**: Tasks arranged chronologically
- **Task List**: All tasks in project with full details
- **Metrics**: Completion percentage, task count
- **Project Table**: Optional detailed table view

### Layout
```
┌─────────────────────────────────────────┐
│ Mobile App Redesign Project              │
│ 6 tasks, 2 completed (33%)               │
├─────────────────────────────────────────┤
│ Timeline:                                │
│ Mar 20 - Create wireframes        [›]   │
│ Mar 25 - User testing            [✓]    │
│ Mar 25 - Implement animations     [›]   │
│                                          │
│ All Tasks:                               │
│ ☐ Create wireframes   🔖  Mar 20       │
│ ☑ User testing        ⚡@@ Mar 15    │
│ ☐ Implement animations 🔖 Mar 25      │
│ (... more tasks ...)                    │
└─────────────────────────────────────────┘
```

### Common Interactions

#### Scenario 1: Project Status Check
1. Click on project from any view
2. See completion percentage immediately
3. Review timeline to see progress
4. Identify any blockers (incomplete near-due tasks)

#### Scenario 2: Project Kick-off
1. Navigate to project detail
2. See full task list
3. Review all dependencies
4. Update task assignments
5. Set timeline

#### Scenario 3: Detailed Task Editing
1. Go to project detail
2. Click on individual task
3. Edit full details in modal
4. See changes reflected immediately

### Best For
- In-depth project work
- Single-project focus sessions
- Project updates/reports
- Task coordination within project

---

## Switching Between Views - Quick Reference

| Goal | Best View | Path |
|------|-----------|------|
| Daily standup | Kanban | Top nav → Grid icon |
| Plan week | Table | Top nav → List icon |
| Check capacity | Project Info | Top nav → Info icon |
| What's urgent? | Urgent smart list | Top nav → Urgent |
| What's today? | Today smart list | Top nav → Today |
| Project deep dive | Project Detail | Click project → p:ID |

---

## View Selection Decision Tree

```
START
  │
  ├─ Need team overview?
  │   ├─ Yes → Kanban View ✓
  │   └─ No → Continue
  │
  ├─ Need detailed tracking?
  │   ├─ Yes → Table View ✓
  │   └─ No → Continue
  │
  ├─ Need capacity planning?
  │   ├─ Yes → Project Info View ✓
  │   └─ No → Continue
  │
  ├─ Need specific type of task?
  │   ├─ Urgent → Urgent Smart List ✓
  │   ├─ Today → Today Smart List ✓
  │   ├─ Needs follow-up → Followup Smart List ✓
  │   ├─ Past due → Overdue Smart List ✓
  │   └─ Completed → Archive Smart List ✓
  │
  └─ Need deep project view?
      └─ Yes → Project Detail View ✓
```


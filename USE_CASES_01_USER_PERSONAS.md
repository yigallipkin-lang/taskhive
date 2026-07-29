# TaskHive User Personas

## Overview
TaskHive serves different types of users with varying needs. This document outlines the primary personas and their interaction patterns with the application.

---

## Persona 1: Project Manager (PM)

### Profile
- **Role**: Leads cross-functional projects with multiple team members
- **Primary Goals**: Track progress, manage deadlines, coordinate teams, identify blockers
- **Team Size**: 5-15 people across multiple projects
- **Technical Level**: Intermediate (comfortable with modern web apps)

### Key Characteristics
- Uses multiple views simultaneously (Dashboard for overview, Kanban for team sync, Table for detailed tracking)
- Frequently filters by urgent/followup flags to identify action items
- Needs to quickly see who's working on what and what's blocked
- Makes heavy use of project-level grouping and collapse features
- Regularly exports data for reporting

### Common Workflows
1. **Daily Standup**: Switch to Kanban view, group by account (team members), review status
2. **Weekly Planning**: Use Table view to see all tasks, filter by priority, identify overdue items
3. **Reporting**: Export to CSV for stakeholder updates
4. **Resource Planning**: View projects across all accounts to see workload distribution

### Feature Usage Priority
1. ⭐⭐⭐⭐⭐ Kanban view (team coordination)
2. ⭐⭐⭐⭐⭐ Table view (detailed tracking)
3. ⭐⭐⭐⭐ Flag filters (urgent, followup)
4. ⭐⭐⭐⭐ Smart lists (urgent, today, overdue)
5. ⭐⭐⭐ Collapse/expand buttons
6. ⭐⭐ Cloud sync (for team collaboration)

### Pain Points
- Needs to quickly identify critical issues
- Struggles with information overload (benefits from collapse/expand)
- Wants to ensure no deadline is missed (relies on overdue view)

---

## Persona 2: Development Team Lead

### Profile
- **Role**: Manages engineering team and technical delivery
- **Primary Goals**: Track technical tasks, manage sprints, coordinate code reviews, monitor dependencies
- **Team Size**: 5-10 developers
- **Technical Level**: High (comfortable with CLI tools and technical workflows)

### Key Characteristics
- Uses Table view extensively for detailed task tracking
- Frequently switches between project views (API, Mobile, Backend)
- Makes use of smart lists for sprint planning and retrospectives
- Values keyboard efficiency and quick navigation
- Frequently toggles task visibility to focus on specific areas

### Common Workflows
1. **Sprint Planning**: View all tasks by project, assess capacity
2. **Daily Build Monitoring**: Check urgent and today lists
3. **Code Review Tracking**: Use followup list for review items
4. **Sprint Retrospective**: Export metrics for analysis
5. **Dependency Management**: Use project view to track blockers

### Feature Usage Priority
1. ⭐⭐⭐⭐⭐ Table view (detailed technical tracking)
2. ⭐⭐⭐⭐⭐ Smart lists (sprint tracking)
3. ⭐⭐⭐⭐ Project-specific views
4. ⭐⭐⭐⭐ Collapse/expand for focus
5. ⭐⭐⭐ Flag system (blocking, reviewing)
6. ⭐⭐⭐ CSV export/import

### Pain Points
- Needs to quickly switch between different team/project contexts
- Values visual clarity (prefers collapsed irrelevant sections)
- Depends on accurate status tracking

---

## Persona 3: Individual Contributor (IC)

### Profile
- **Role**: Executes assigned tasks, may lead small tasks within larger projects
- **Primary Goals**: Know what to do next, track personal progress, stay organized
- **Team Size**: Works with 3-8 people on shared projects
- **Technical Level**: Varies (beginner to advanced)

### Key Characteristics
- Primarily uses "Today" and "Urgent" smart lists to know what to do
- Uses Project view to see all their assigned tasks in a project
- May not use Kanban view much (oriented towards personal task list)
- Wants simple, distraction-free view of their tasks
- Uses flags to mark tasks needing attention (followup, urgent)

### Common Workflows
1. **Start of Day**: Check "Today" list to see assigned tasks
2. **Throughout Day**: Toggle completion status, add notes
3. **Priority Shifts**: Check "Urgent" list when priorities change
4. **End of Day**: Review completed tasks, note blockers
5. **Project Deep Dive**: View specific project to see all related tasks

### Feature Usage Priority
1. ⭐⭐⭐⭐⭐ Smart lists (Today, Urgent, Overdue)
2. ⭐⭐⭐⭐⭐ Project view (specific project context)
3. ⭐⭐⭐⭐ Task completion checkbox
4. ⭐⭐⭐ Flag system (self-flagging for followup)
5. ⭐⭐ Table view (when context-switching needed)
6. ⭐ Kanban view (rarely used)

### Pain Points
- Wants to quickly see what's expected today
- Needs to flag items for later followup
- Doesn't want to see unrelated projects/tasks

---

## Persona 4: Operations Manager

### Profile
- **Role**: Manages cross-functional operations, tracks team workload, schedules resources
- **Primary Goals**: Ensure all work is visible, prevent bottlenecks, balance workload
- **Team Size**: Oversees 15-30 people across multiple projects
- **Technical Level**: Beginner-Intermediate

### Key Characteristics
- Uses account/team grouping (Project Info view) to see team workload distribution
- Frequently uses filter features to focus on specific teams
- Needs high-level overview without deep detail
- Makes decisions based on capacity and timeline data
- Exports data for resource planning meetings

### Common Workflows
1. **Weekly Capacity Planning**: Review Project Info view to see tasks per team
2. **Bottleneck Identification**: Filter urgent tasks by account (team)
3. **Workload Balancing**: Identify overloaded teams using task count
4. **Onboarding Planning**: Use team view to assess available capacity
5. **Executive Reporting**: Export team performance metrics

### Feature Usage Priority
1. ⭐⭐⭐⭐⭐ Project Info view (team capacity overview)
2. ⭐⭐⭐⭐⭐ Flag filters (team-based filtering)
3. ⭐⭐⭐⭐ Smart lists (prioritized items)
4. ⭐⭐⭐ Collapse/expand (focus on key teams)
5. ⭐⭐⭐ CSV export (reporting)
6. ⭐⭐ Kanban view (lower priority)

### Pain Points
- Needs to quickly understand team capacity
- Wants to identify resource conflicts early
- Struggles with information scattered across views

---

## Persona 5: Freelancer/Solo Consultant

### Profile
- **Role**: Works independently, multiple concurrent projects, self-managed
- **Primary Goals**: Never miss a deadline, track multiple client projects, maintain work-life balance
- **Team Size**: Works alone or with 1-2 others per project
- **Technical Level**: Beginner-Intermediate

### Key Characteristics
- Primarily uses smart lists (Today, Overdue, Followup) for personal task planning
- Doesn't use team/account grouping (single account)
- Heavy use of flags to mark client work, personal notes, payment-related items
- Uses project view extensively for client-specific tracking
- Frequently archives completed work
- Values data portability (CSV export for record-keeping)

### Common Workflows
1. **Daily Review**: Check Today and Urgent lists
2. **Weekly Planning**: Review Overdue and Followup lists
3. **Client Updates**: Filter and export project-specific tasks
4. **Billing**: Track flagged billable items via CSV export
5. **Project Archival**: Move completed projects to archive

### Feature Usage Priority
1. ⭐⭐⭐⭐⭐ Smart lists (Today, Urgent, Overdue, Followup)
2. ⭐⭐⭐⭐⭐ Project view (client-specific context)
3. ⭐⭐⭐⭐ Flag system (tracking billable/priority items)
4. ⭐⭐⭐⭐ CSV export/import
5. ⭐⭐⭐ Archive view (project history)
6. ⭐⭐ Kanban view (not needed for solo work)

### Pain Points
- Must never miss client deadlines
- Needs clear separation between different client projects
- Values simplicity in interface (too many options cause decision paralysis)

---

## Persona 6: Product Team Coordinator

### Profile
- **Role**: Coordinates product planning, feedback collection, feature prioritization
- **Primary Goals**: Track feature requests, manage product roadmap, coordinate with engineering
- **Team Size**: Works with 2-3 product managers and 10-15 engineers
- **Technical Level**: Intermediate

### Key Characteristics
- Uses Project view for roadmap tracking (quarterly/monthly milestones)
- Heavy use of notes/descriptions for requirements and design specs
- Frequently toggles project visibility to focus on current roadmap
- Uses flags for "needs review", "blocked by design", etc.
- Requires audit trail of decisions and changes

### Common Workflows
1. **Roadmap Review**: Project view of Q2/Q3 roadmap with toggle-able features
2. **Feature Triage**: All tasks view filtered by priority and status
3. **Stakeholder Communication**: Table view of feature status
4. **Dependency Tracking**: Project view highlighting blockers
5. **Archive Management**: Archive completed features

### Feature Usage Priority
1. ⭐⭐⭐⭐⭐ Project view (roadmap tracking)
2. ⭐⭐⭐⭐⭐ Table view (detailed feature status)
3. ⭐⭐⭐⭐ Flag system (review status, blocking)
4. ⭐⭐⭐⭐ Collapse/expand (roadmap focus)
5. ⭐⭐⭐ Smart lists (priority views)
6. ⭐⭐ CSV export (stakeholder reporting)

### Pain Points
- Needs rich description field for requirements
- Requires ability to reorganize priorities frequently
- Values historical tracking of decisions

---

## Cross-Persona Features

### Universal Features
These features are used by ALL personas:
- **Task completion checkbox**: Mark done/not done
- **Flag system**: Mark important/urgent/followup items
- **View switching**: Navigate between different perspectives
- **Smart lists**: Quick access to filtered views (Today, Urgent, Overdue)

### High-Value Features Across Personas
- **Collapse/expand buttons**: Used by 80%+ to manage information overload
- **Project grouping**: Used by 90%+ to organize by scope
- **Flag filters**: Used by 85%+ to focus attention
- **CSV export**: Used by 70%+ for external sharing

### Rarely Used Features
- **Archive view**: Used by 40% (mostly for cleanup)
- **Project dashboard**: Used by 30% (detail-oriented PMs)
- **Cloud sync**: Used by 20% (prefer local storage)

---

## Interaction Patterns

### View Switching Frequency
- **Project Manager**: Switches views 10-15 times daily (Kanban ↔ Table ↔ Project)
- **Team Lead**: Switches views 8-10 times daily (Table → Project → Smart List)
- **Individual Contributor**: Switches views 2-3 times daily (Smart List → Project → back)
- **Operations Manager**: Switches views 3-5 times daily (Project Info → Filter → Export)

### Session Duration
- **Project Manager**: 30-45 minute sessions, multiple per day
- **Team Lead**: 20-30 minute sessions, 2-3 per day
- **Individual Contributor**: 5-15 minute sessions, 4-6 per day (quick check-ins)
- **Operations Manager**: 15-20 minute sessions, 1-2 per day

### Time of Day Patterns
- **Morning** (9-10am): Heavy "Today" list checking (all personas)
- **Midday** (12-1pm): Project review and reprioritization
- **Afternoon** (3-4pm): Followup and urgent item management
- **End of day** (4-5pm): Status updates and daily review

---

## Feature Adoption Timeline

### Week 1-2 (Basic Use)
- Learn smart lists (Today, Urgent)
- Learn to toggle task completion
- Discover flag system

### Week 3-4 (Intermediate Use)
- Switch between views regularly
- Start using project-specific views
- Apply flags strategically

### Week 5+ (Advanced Use)
- Use collapse/expand for focus
- Export data for external use
- Cloud sync with team
- Archive and cleanup


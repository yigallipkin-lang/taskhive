# TaskHive CSV Field Coverage Reference

## Complete Field List (52 Total Fields)

### ACCOUNTS (4 fields)
```
id           - Unique account identifier
name         - Account name
color        - Account color (hex format)
order        - Display order (NEW in v1.5.63)
```

### PROJECTS (8 fields)
```
id           - Unique project identifier
name         - Project name
accountId    - Parent account ID
color        - Project color (hex format)
description  - Project description
startDate    - Project start date (ISO format)
endDate      - Project end date (ISO format)
order        - Display order (NEW in v1.5.63)
```

### TASKS (15 fields)
```
id           - Unique task identifier
title        - Task title/name
projectId    - Parent project ID
due          - Due date (ISO format)
priority     - Priority level (high/medium/low)
urgent       - Urgent flag (boolean: 1/0)
followup     - Followup flag (boolean: 1/0)
today        - Today flag (boolean: 1/0)
done         - Completion status (boolean: 1/0)
recurring    - Recurring pattern (if applicable)
notes        - Task notes/description
subs         - Subtasks array (JSON)
order        - Display order (NEW in v1.5.63)
hidden       - Hidden flag (boolean: 1/0) (NEW in v1.5.63)
createdAt    - Timestamp when created (ISO 8601) (NEW in v1.5.63)
```

### PROJECT_INFO (14 fields) - All sub-fields of projectInfo object
```
projectId      - Parent project ID
contractId     - Contract ID
programPN      - Program Part Number
programNo      - Program Number (shown in Project List)
productPN      - Product Part Number
lnContractNo   - LN Contract Number
safetyResp     - Safety Responsibility contact
projStartDate  - Project start date (for progress bar)
projEndDate    - Project end date (for progress bar)
description    - Project description (NEW location)
clin           - CLIN data array (JSON)
pca            - PCA data array (JSON)
configuration  - Configuration table (JSON)
infoBlocks     - Custom info blocks (JSON)
```

### PROJECT_BUDGET_SCHEDULE (7 fields)
```
projectId           - Parent project ID
budget              - Total budget amount
spent               - Amount spent
scheduleStatus      - Status (on-track/at-risk/delayed)
upcomingActivities  - Activities list (JSON)
milestones          - Milestones list (JSON)
budgetCurrency      - Currency code (e.g., USD)
```

### APP_SETTINGS (4 fields) - Application-wide settings
```
budgetCurrency  - Default currency for budgets
projectTab      - Default project detail tab
collapsed       - Collapse state for accounts/projects/tasks (JSON)
flt             - Filter settings (urgent/followup/today/custom) (JSON)
```

---

## What's NEW in v1.5.63?

### Previously Missing Fields (Now Included):
1. **Account.order** - Preserves account display order
2. **Project.order** - Preserves project display order
3. **Task.order** - Preserves task display order
4. **Task.hidden** - Preserves hidden/archived task status
5. **Task.createdAt** - Preserves task creation timestamp
6. **All Project Info Fields** - Complete projectInfo structure now exported/imported
7. **APP_SETTINGS** - New section for app-wide settings

### Sections Added:
- **APP_SETTINGS** - New section for preserving user preferences and settings

### Enhanced Sections:
- **ACCOUNTS** - Added order field
- **PROJECTS** - Added order field
- **TASKS** - Added order, hidden, createdAt fields
- **PROJECT_INFO** - Now exports all projectInfo fields individually

---

## Field Data Types & Formats

### Boolean Fields
Exported as: `1` (true) or empty string (false)
Examples: `urgent,1` or `followup,`

### Date Fields (ISO Format)
Format: `YYYY-MM-DD`
Examples: `2026-03-31`, `2026-01-15`

### Timestamp Fields (ISO 8601 Format)
Format: `YYYY-MM-DDTHH:MM:SSZ`
Examples: `2026-01-20T10:00:00Z`, `2026-01-21T14:30:00Z`

### JSON Fields (Complex Objects)
Enclosed in quotes and JSON formatted
Examples:
```
"[{""id"":""sub-001"",""title"":""Subtask"",""done"":false}]"
"[{""id"":""act-001"",""title"":""Activity"",""date"":""2026-02-15""}]"
"{""accounts"":{""acct-001"":false},""projects":{}}"
```

### Color Fields
Format: Hex color code
Examples: `#FF6B6B`, `#4ECDC4`, `#45B7D1`

### Numeric Fields
Format: Plain numbers (no quotes)
Examples: `50000`, `0`, `42`

---

## Import/Export File Structure

```
### ACCOUNTS ###
id,name,color,order
[account rows]

### PROJECTS ###
id,name,accountId,color,description,startDate,endDate,order
[project rows]

### TASKS ###
id,title,projectId,due,priority,urgent,followup,today,done,recurring,notes,subs,order,hidden,createdAt
[task rows]

### PROJECT_INFO ###
projectId,contractId,programPN,programNo,productPN,lnContractNo,safetyResp,projStartDate,projEndDate,description,clin,pca,configuration,infoBlocks
[project info rows]

### PROJECT_BUDGET_SCHEDULE ###
projectId,budget,spent,scheduleStatus,upcomingActivities,milestones,budgetCurrency
[budget/schedule rows]

### APP_SETTINGS ###
key,value
[setting rows]
```

---

## Validation Rules

### Required Fields
- Accounts: `id`, `name`
- Projects: `id`, `name`
- Tasks: `id`, `title`

### Optional Fields
- All other fields can be empty (will use default values)
- Empty values are interpreted as null/undefined

### Default Values
- `order`: undefined (will be auto-assigned)
- `done`: false
- `urgent`: false
- `followup`: false
- `today`: false
- `hidden`: false
- `scheduleStatus`: 'on-track'
- `budgetCurrency`: 'USD'

---

## Field Dependencies

### Display Order Dependencies
- `Account.order` affects account display order in all views
- `Project.order` affects project display order (within account)
- `Task.order` affects task display order (within project)

### Progress Bar Dependencies
- Requires: `Project.projectInfo.projStartDate` AND `Project.projectInfo.projEndDate`
- Calculates: Percentage completion based on current date

### Budget Bar Dependencies
- Requires: `Project.budget`
- Optional: `Project.spent` (defaults to 0)
- Calculates: Percentage spent and status color

### Task Visibility Dependencies
- `Task.hidden` hides task from main views
- `Task.done` marks task as complete
- Filters can further hide tasks based on flags

### Relationship Dependencies
- Tasks require valid `projectId` (must match existing project)
- Projects require valid `accountId` (must match existing account)
- Project Info must have matching `projectId`
- Budget/Schedule must have matching `projectId`

---

## Backward Compatibility

### v1.5.62 → v1.5.63
Old CSV files (without new fields) will import successfully:
- Missing `order` fields will use default undefined values
- Missing `hidden` field defaults to false
- Missing `createdAt` will be set to current timestamp on import
- Missing PROJECT_INFO and APP_SETTINGS sections are optional

### Export Compatibility
Files exported from v1.5.63 will NOT import into v1.5.62
(v1.5.62 will fail on unknown sections/fields)

### Migration Recommendation
Export from old version before updating if you need to preserve exact field data.

---

## Quality Assurance Checklist

- [ ] All 52 fields export correctly
- [ ] All 52 fields import correctly
- [ ] Field values match after round-trip (export → import)
- [ ] JSON fields are properly escaped in CSV
- [ ] Date formats are consistent
- [ ] Boolean values (1/0) are correctly interpreted
- [ ] Complex objects (JSON) are properly preserved
- [ ] Relationships (task→project→account) are intact
- [ ] Order values create correct display order
- [ ] Hidden tasks are not displayed by default
- [ ] App settings restore user preferences
- [ ] Progress bars calculate correctly post-import
- [ ] Budget bars calculate correctly post-import
- [ ] Firebase sync completes without errors
- [ ] No data is lost or corrupted

---

**Last Updated:** 2026-03-23
**CSV Version:** 1.0 (v1.5.63+)
**Total Coverage:** 52 fields across 6 sections

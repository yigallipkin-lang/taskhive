# Repair Status View - Implementation Guide

## Feature: Editable Repair Status Table

### Overview
Add a new "Repair Status" view to TaskHive that displays and manages SPECTRO repair records with:
- ✅ Editable inline table
- ✅ Combo box for "Under Warranty" column
- ✅ Link Program to Projects  
- ✅ Link Customer to Accounts
- ✅ Full CRUD operations
- ✅ Firebase sync

### Data Structure
```javascript
{
  id: 'r1',
  program: 'SPECTRO CU H145 Cyprus',
  customer: 'Cyprus MoD',
  location: 'Elop',
  progNo: 'P142',
  partNo: '4362-1000-C0',
  serialNo: '502',
  reason: 'Structural damage',
  warranty: 'NO - Damage',  // Combo: ['NO - Damage', 'NO', 'YES']
  paidRepair: 'YES',
  ilsMgr: 'Yehuda Dabush',
  repairStart: '16/03/2026',
  deliveryCommit: '16/09/2026',
  plannedFinish: '16/09/2026',
  actualFinish: '16/09/2026'
}
```

### Implementation Steps

#### 1. Add Data Loading
```javascript
// Load repair-data.js
// window.repairStatusData will be available
```

#### 2. Add View to Navigation
- Add to views array: `{id:'repair-status',label:'Repair Status',icon:'wrench'}`
- Add to switch statement in `render()` function

#### 3. Create Render Function
```javascript
function renderRepairStatus() {
  // Load data from Firebase or local storage
  // Generate editable table HTML
  // Attach event handlers for editing
  // Handle combo box changes
}
```

#### 4. Implement Editing
- Click cell to edit
- Tab to navigate between cells
- Escape to cancel
- Enter to save
- Link to accounts/projects on change

#### 5. Warranty Combo Box
```html
<select class="warranty-select" data-record-id="r1">
  <option value="NO - Damage">NO - Damage</option>
  <option value="NO">NO</option>
  <option value="YES">YES</option>
</select>
```

### Files to Integrate
1. **repair-data.js** - Data definitions (created ✓)
2. **index.html** modifications needed:
   - Add script reference
   - Add view to navigation
   - Add render function
   - Add CSS for table
   - Add edit handlers

### Estimated Changes
- CSS: ~200 lines (table styling)
- JavaScript: ~400 lines (render + editing + linking)
- HTML: 5 lines (script + view ref)

### Testing Checklist
- [ ] View loads and displays all 12 records
- [ ] Cells are editable
- [ ] Warranty column combo box works
- [ ] Program links to create/select projects
- [ ] Customer links to create/select accounts
- [ ] Changes sync to Firebase
- [ ] Mobile responsiveness works
- [ ] Print view displays table correctly

### Firebase Schema
```
repairs/
  ├── r1/
  │   ├── program
  │   ├── customer
  │   ├── linkedProject
  │   ├── linkedAccount
  │   └── ...
```

### Account/Project Linking
- Auto-create account if customer doesn't exist
- Auto-create project if program doesn't exist
- Link via accountId and projectId in repair record
- Update when program/customer changes

---
**Status:** Ready for implementation
**Complexity:** Medium-High (requires ~600 lines of new code)
**Time Estimate:** 30-45 minutes to integrate fully

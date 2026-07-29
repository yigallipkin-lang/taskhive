// ═════════════════════════════════════════════════════════════════════
// REPAIR STATUS VIEW - v2.0 Feature Integration
// Add this to index.html after the main script starts
// ═════════════════════════════════════════════════════════════════════

// Repair Status Data
const repairStatusData = [
    {id:'r1',program:'SPECTRO CU H145 Cyprus',customer:'Cyprus MoD',location:'Elop',progNo:'P142',partNo:'4362-1000-C0',serialNo:'502',reason:'Structural damage',warranty:'NO - Damage',paidRepair:'YES',ilsMgr:'Yehuda Dabush',repairStart:'16/03/2026',deliveryCommit:'16/09/2026',plannedFinish:'16/09/2026',actualFinish:'16/09/2026'},
    {id:'r2',program:'SPECTRO CU H145 Cyprus',customer:'Airbus Helicopters',location:'Airbus - Germany',progNo:'P142',partNo:'4362-1000-C0',serialNo:'504',reason:'SWIR & LRF damage - Uncontrolled lasing',warranty:'NO - Damage',paidRepair:'YES',ilsMgr:'Yehuda Dabush',repairStart:'Planned - 08/26',deliveryCommit:'',plannedFinish:'',actualFinish:''},
    {id:'r3',program:'SPECTRO CU Airbus Helicopters',customer:'Airbus Helicopters',location:'Airbus - France',progNo:'P198',partNo:'4362-1000-C0',serialNo:'508',reason:'SWIR & LRF damage - Uncontrolled lasing',warranty:'NO - Damage',paidRepair:'YES',ilsMgr:'Yehuda Dabush',repairStart:'Planned - 03/27',deliveryCommit:'',plannedFinish:'',actualFinish:''},
    {id:'r4',program:'SPECTRO Octane',customer:'Azerbaijan MoD',location:'Azerbaijan',progNo:'8040',partNo:'4360-1000-R0',serialNo:'6010',reason:'CNA Communication Loss',warranty:'NO',paidRepair:'NO',ilsMgr:'Imran Mekhtiev',repairStart:'29/04/2026',deliveryCommit:'30/06/2026',plannedFinish:'30/06/2026',actualFinish:'30/06/2026'},
    {id:'r5',program:'SPECTRO Octane',customer:'Azerbaijan MoD',location:'Elop',progNo:'8040',partNo:'4360-1000-R0',serialNo:'6006',reason:'VNIRZ synthetic video',warranty:'NO',paidRepair:'NO',ilsMgr:'Imran Mekhtiev',repairStart:'29/04/2026',deliveryCommit:'30/06/2026',plannedFinish:'30/06/2026',actualFinish:'15/07/2026'},
    {id:'r6',program:'SPECTRO Octane',customer:'Azerbaijan MoD',location:'Elop',progNo:'8040',partNo:'4360-1000-R0',serialNo:'6002',reason:'Laser power/comm',warranty:'NO',paidRepair:'NO',ilsMgr:'Imran Mekhtiev',repairStart:'29/04/2026',deliveryCommit:'30/07/2026',plannedFinish:'30/07/2026',actualFinish:'?'},
    {id:'r7',program:'SPECTRO Octane',customer:'Azerbaijan MoD',location:'Elop',progNo:'8040',partNo:'4360-1000-R0',serialNo:'6009',reason:'MWIR Spotter fail, bench comm loss to sensors',warranty:'NO',paidRepair:'NO',ilsMgr:'Imran Mekhtiev',repairStart:'29/04/2026',deliveryCommit:'30/07/2026',plannedFinish:'30/07/2026',actualFinish:'?'},
    {id:'r8',program:'SPECTRO Octane',customer:'Azerbaijan MoD',location:'Elop',progNo:'8040',partNo:'4360-1000-R0',serialNo:'6011',reason:'Laser diode cooling fail',warranty:'NO',paidRepair:'NO',ilsMgr:'Imran Mekhtiev',repairStart:'29/04/2026',deliveryCommit:'30/08/2026',plannedFinish:'30/08/2026',actualFinish:'?'},
    {id:'r9',program:'SPECTRO Octane',customer:'Azerbaijan MoD',location:'Elop',progNo:'8040',partNo:'4360-1000-R0',serialNo:'6013',reason:'MWIR detector fail',warranty:'NO',paidRepair:'NO',ilsMgr:'Imran Mekhtiev',repairStart:'29/04/2026',deliveryCommit:'30/08/2026',plannedFinish:'30/08/2026',actualFinish:'?'},
    {id:'r10',program:'SPECTRO Octane',customer:'Azerbaijan MoD',location:'Elop',progNo:'8040',partNo:'4360-1000-R0',serialNo:'6003',reason:'Exterior refurbishment/scratches',warranty:'NO',paidRepair:'NO',ilsMgr:'Imran Mekhtiev',repairStart:'Planned - 08/26',deliveryCommit:'',plannedFinish:'',actualFinish:''},
    {id:'r11',program:'SPECTRO D&G',customer:'ELBIT - Elisra',location:'Elop',progNo:'P163',partNo:'4360-1000-D0',serialNo:'3301',reason:'VNIRZ fail',warranty:'YES',paidRepair:'NO',ilsMgr:'Koby Philosof',repairStart:'22/03/2026',deliveryCommit:'22/09/2026',plannedFinish:'30/07/2026',actualFinish:'30/07/2026'},
    {id:'r12',program:'SPECTRO LRPA',customer:'ELBIT - Aerospace',location:'Philippines',progNo:'P162',partNo:'4360-1000-J0',serialNo:'2111',reason:'VNIRZ, MWIRZ in-flight comm loss',warranty:'YES',paidRepair:'NO',ilsMgr:'Koby Philosof',repairStart:'TBD',deliveryCommit:'',plannedFinish:'',actualFinish:''}
];

// Render Repair Status View
function renderRepairStatus(){
    let html = '';

    html += `
    <style>
        .repair-table-wrap { overflow-x: auto; margin: 0; }
        .repair-table {
            width: 100%;
            border-collapse: collapse;
            background: var(--bg-card);
            font-size: 12px;
        }
        .repair-table th {
            background: var(--bg-active);
            color: var(--tx);
            padding: 10px 6px;
            text-align: left;
            font-weight: 600;
            border-bottom: 2px solid var(--border);
            white-space: nowrap;
        }
        .repair-table td {
            padding: 8px 6px;
            border-bottom: 1px solid var(--border);
            border-right: 1px solid var(--border);
            max-width: 180px;
            word-break: break-word;
        }
        .repair-table td:last-child { border-right: none; }
        .repair-table tr:hover { background: var(--bg-hover); }

        .repair-cell {
            cursor: pointer;
            padding: 6px;
            border-radius: 4px;
            transition: all 0.15s;
        }
        .repair-cell:hover { background: var(--accent-subtle); }
        .repair-cell.editing {
            padding: 0;
        }

        .repair-input, .repair-select {
            width: 100%;
            padding: 6px;
            border: 1px solid var(--accent);
            border-radius: 4px;
            font-family: var(--font-body);
            font-size: 12px;
            box-sizing: border-box;
        }

        .repair-select {
            background: white;
            cursor: pointer;
        }

        .warranty-options {
            display: none;
            position: absolute;
            background: white;
            border: 1px solid var(--border);
            border-radius: 4px;
            box-shadow: var(--sh);
            z-index: 10;
            min-width: 150px;
        }

        .warranty-options.show { display: block; }
        .warranty-option {
            padding: 8px 12px;
            cursor: pointer;
            transition: background 0.1s;
        }
        .warranty-option:hover {
            background: var(--bg-hover);
        }

        .repair-actions {
            text-align: center;
            padding: 12px;
        }

        .repair-btn {
            padding: 8px 16px;
            margin: 0 4px;
            border: 1px solid var(--border);
            border-radius: 6px;
            background: var(--bg-card);
            color: var(--tx);
            cursor: pointer;
            transition: all 0.15s;
            font-size: 12px;
        }

        .repair-btn:hover {
            background: var(--accent);
            color: white;
            border-color: var(--accent);
        }

        .repair-btn.delete:hover {
            background: var(--red);
            color: white;
        }
    </style>

    <div class="repair-table-wrap">
        <table class="repair-table">
            <thead>
                <tr>
                    <th>Program</th>
                    <th>Customer</th>
                    <th>Location</th>
                    <th>Program No.</th>
                    <th>Part No.</th>
                    <th>Serial No.</th>
                    <th>Repair Reason</th>
                    <th>Under Warranty</th>
                    <th>Paid Repair</th>
                    <th>ILS Mgr.</th>
                    <th>Repair Start</th>
                    <th>Delivery Commit</th>
                    <th>Planned Finish</th>
                    <th>Actual Finish</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
    `;

    repairStatusData.forEach(row => {
        html += `
            <tr data-record-id="${row.id}">
                <td class="repair-cell" data-field="program">${row.program}</td>
                <td class="repair-cell" data-field="customer">${row.customer}</td>
                <td class="repair-cell" data-field="location">${row.location}</td>
                <td class="repair-cell" data-field="progNo">${row.progNo}</td>
                <td class="repair-cell" data-field="partNo">${row.partNo}</td>
                <td class="repair-cell" data-field="serialNo">${row.serialNo}</td>
                <td class="repair-cell" data-field="reason">${row.reason}</td>
                <td class="repair-cell warranty-cell" data-field="warranty" data-value="${row.warranty}">${row.warranty}</td>
                <td class="repair-cell" data-field="paidRepair">${row.paidRepair}</td>
                <td class="repair-cell" data-field="ilsMgr">${row.ilsMgr}</td>
                <td class="repair-cell" data-field="repairStart">${row.repairStart}</td>
                <td class="repair-cell" data-field="deliveryCommit">${row.deliveryCommit}</td>
                <td class="repair-cell" data-field="plannedFinish">${row.plannedFinish}</td>
                <td class="repair-cell" data-field="actualFinish">${row.actualFinish}</td>
                <td style="text-align: center; padding: 4px;">
                    <button class="repair-btn delete" onclick="deleteRepairRecord('${row.id}')" title="Delete">🗑️</button>
                </td>
            </tr>
        `;
    });

    html += `
            </tbody>
        </table>
    </div>

    <div class="repair-actions">
        <button class="repair-btn" onclick="addRepairRecord()">+ Add Record</button>
        <button class="repair-btn" onclick="exportRepairData()">📥 Export CSV</button>
        <button class="repair-btn" onclick="syncRepairToFirebase()">☁️ Sync</button>
    </div>
    `;

    return html;
}

// Edit cell
function editRepairCell(cell) {
    const recordId = cell.closest('tr').dataset.recordId;
    const field = cell.dataset.field;
    const currentValue = cell.textContent;
    const record = repairStatusData.find(r => r.id === recordId);

    if (field === 'warranty') {
        // Show combo box for warranty
        const warrantyOptions = ['NO - Damage', 'NO', 'YES'];
        let html = '<select class="repair-select" onchange="saveRepairCell(this, \'' + recordId + '\', \'' + field + '\')">';
        warrantyOptions.forEach(opt => {
            html += `<option value="${opt}" ${opt === currentValue ? 'selected' : ''}>${opt}</option>`;
        });
        html += '</select>';
        cell.innerHTML = html;
        cell.querySelector('select').focus();
    } else {
        // Text input for other fields
        cell.innerHTML = `<input class="repair-input" type="text" value="${currentValue}" onblur="saveRepairCell(this, '${recordId}', '${field}')" onkeydown="if(event.key==='Enter') saveRepairCell(this, '${recordId}', '${field}'); if(event.key==='Escape') location.reload();">`;
        cell.querySelector('input').focus();
        cell.querySelector('input').select();
    }
}

// Save cell
function saveRepairCell(input, recordId, field) {
    const newValue = input.value;
    const record = repairStatusData.find(r => r.id === recordId);
    if (record) {
        record[field] = newValue;
        // Update Firebase here if needed
        triggerSync('repair-status-update');
    }
    render(); // Re-render
}

// Add new record
function addRepairRecord() {
    const newId = 'r' + (repairStatusData.length + 1);
    repairStatusData.push({
        id: newId,
        program: 'New Program',
        customer: 'New Customer',
        location: '',
        progNo: '',
        partNo: '',
        serialNo: '',
        reason: '',
        warranty: 'NO',
        paidRepair: '',
        ilsMgr: '',
        repairStart: '',
        deliveryCommit: '',
        plannedFinish: '',
        actualFinish: ''
    });
    render();
}

// Delete record
function deleteRepairRecord(recordId) {
    if (confirm('Delete this repair record?')) {
        const index = repairStatusData.findIndex(r => r.id === recordId);
        if (index > -1) {
            repairStatusData.splice(index, 1);
            render();
        }
    }
}

// Export to CSV
function exportRepairData() {
    let csv = 'Program,Customer,Location,Program No.,Part No.,Serial No.,Repair Reason,Under Warranty,Paid Repair,ILS Mgr.,Repair Start,Delivery Commitment,Planned Finish,Actual Finish\n';
    repairStatusData.forEach(row => {
        csv += `"${row.program}","${row.customer}","${row.location}","${row.progNo}","${row.partNo}","${row.serialNo}","${row.reason}","${row.warranty}","${row.paidRepair}","${row.ilsMgr}","${row.repairStart}","${row.deliveryCommit}","${row.plannedFinish}","${row.actualFinish}"\n`;
    });

    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'repair-status-' + new Date().toISOString().split('T')[0] + '.csv';
    a.click();
    window.URL.revokeObjectURL(url);
}

// Sync to Firebase
function syncRepairToFirebase() {
    if (window.db) {
        console.log('🔄 Syncing repair records to Firebase...');
        const batch = [];
        repairStatusData.forEach(record => {
            batch.push(
                setDoc(doc(window.db, 'repairs', record.id), record, { merge: true })
                    .then(() => console.log('✓ Synced ' + record.id))
                    .catch(err => console.error('Error syncing ' + record.id + ':', err))
            );
        });
        Promise.all(batch).then(() => {
            console.log('✅ All repair records synced to Firebase');
            showToast('Repair records synced!');
        });
    }
}

// Add event delegation for cell editing
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('repair-cell')) {
        editRepairCell(e.target);
    }
});

// Add to views array: {id:'repair-status',label:'Repair Status',icon:'wrench'}
// Add to render() function: else if(v==='repair-status') document.getElementById('main').innerHTML=renderRepairStatus();

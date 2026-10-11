window.runClinicalExport = function () {
    let logs = [];
    let child = 'Child';

    const appEl = document.querySelector('[x-data]');
    if (appEl && window.Alpine) {
        try {
            const data = Alpine.$data(appEl);
            logs = (data && data.incidentLogs) ? data.incidentLogs : [];
            child = (data && data.childName) ? data.childName : 'Child';
        } catch (e) {
            console.error('Alpine extraction error:', e);
        }
    }

    if (!logs.length) {
        try {
            const raw = localStorage.getItem('neurotogether_cached_data');
            if (raw) {
                const parsed = JSON.parse(raw);
                logs = parsed.incidentLogs || parsed.incident_logs || [];
                if (!child || child === 'Child') child = parsed.childName || 'Child';
            }
        } catch (e) {
            console.error('Storage extraction error:', e);
        }
    }

    if (!logs || !logs.length) {
        alert('No logged incidents available to export yet. Please log an incident first or add test entries.');
        return;
    }

    const win = window.open('', '_blank');
    if (!win) {
        alert('Pop-up blocked. Please allow pop-ups for this site.');
        return;
    }

    const rows = logs.map(function (l) {
        return '<tr><td style="padding:8px;border:1px solid #cbd5e1;">' + (l.date || '') + ' ' + (l.time || '') + '</td>' +
               '<td style="padding:8px;border:1px solid #cbd5e1;">' + (l.trigger || l.triggers || '-') + '</td>' +
               '<td style="padding:8px;border:1px solid #cbd5e1;">' + (l.notes || l.intensity || '-') + '</td>' +
               '<td style="padding:8px;border:1px solid #cbd5e1;">' + (l.resolution || l.whatHelped || '-') + '</td></tr>';
    }).join('');

    win.document.open();
    win.document.write('<!DOCTYPE html><html><head><title>Clinical Summary</title><style>body{font-family:system-ui,-apple-system,sans-serif;padding:24px;color:#0f172a;}table{border-collapse:collapse;width:100%;font-size:13px;}th{background:#f1f5f9;text-align:left;padding:8px;border:1px solid #cbd5e1;}h2{margin-bottom:16px;font-size:18px;}</style></head><body><h2>Clinical Incident Summary: ' + child + '</h2><table><thead><tr><th>Date/Time</th><th>Triggers</th><th>Intensity/Notes</th><th>De-escalation</th></tr></thead><tbody>' + rows + '</tbody></table></body></html>');
    win.document.close();
    win.focus();
    setTimeout(function () { win.print(); }, 300);
};
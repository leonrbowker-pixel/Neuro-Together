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
        alert('No logged incidents available to export yet. Please log an incident first.');
        return;
    }

    const win = window.open('', '_blank');
    if (!win) {
        alert('Pop-up blocked. Please allow pop-ups for this site to print your evidence pack.');
        return;
    }

    // Calculate summary counts for DLA & EHCP
    const dlaCounts = {};
    const ehcpCounts = {};
    let totalMins = 0;

    logs.forEach(function (l) {
        totalMins += Number(l.duration_mins) || 0;
        if (l.dla_tag && l.dla_tag !== 'None / General Log') {
            dlaCounts[l.dla_tag] = (dlaCounts[l.dla_tag] || 0) + 1;
        }
        if (l.ehcp_tag && l.ehcp_tag !== 'None / Home Only') {
            ehcpCounts[l.ehcp_tag] = (ehcpCounts[l.ehcp_tag] || 0) + 1;
        }
    });

    const dlaSummaryHtml = Object.keys(dlaCounts).length
        ? Object.entries(dlaCounts).map(([k, v]) => `<li><strong>${k}:</strong> ${v} recorded incident(s)</li>`).join('')
        : '<li>No specific DLA tags filtered yet.</li>';

    const ehcpSummaryHtml = Object.keys(ehcpCounts).length
        ? Object.entries(ehcpCounts).map(([k, v]) => `<li><strong>${k}:</strong> ${v} recorded incident(s)</li>`).join('')
        : '<li>No specific EHCP Section B/F tags filtered yet.</li>';

    const rows = logs.map(function (l) {
        const typeStr = (l.incident_type || 'Incident') + (l.duration_mins ? ' (' + l.duration_mins + ' mins)' : '');
        const dlaStr = (l.dla_tag && l.dla_tag !== 'None / General Log') ? l.dla_tag : '-';
        const ehcpStr = (l.ehcp_tag && l.ehcp_tag !== 'None / Home Only') ? l.ehcp_tag : '-';
        return '<tr>' +
               '<td style="padding:8px;border:1px solid #cbd5e1;white-space:nowrap;">' + (l.date || '') + '</td>' +
               '<td style="padding:8px;border:1px solid #cbd5e1;font-weight:600;">' + typeStr + '</td>' +
               '<td style="padding:8px;border:1px solid #cbd5e1;">' + (l.trigger || l.triggers || '-') + '</td>' +
               '<td style="padding:8px;border:1px solid #cbd5e1;color:#0369A1;font-weight:600;">' + dlaStr + '</td>' +
               '<td style="padding:8px;border:1px solid #cbd5e1;color:#4338ca;font-weight:600;">' + ehcpStr + '</td>' +
               '<td style="padding:8px;border:1px solid #cbd5e1;">' + (l.notes || l.resolution || '-') + '</td>' +
               '</tr>';
    }).join('');

    win.document.open();
    win.document.write(
        '<!DOCTYPE html><html><head><title>Together-Neuro Evidence Pack - ' + child + '</title>' +
        '<style>' +
        'body{font-family:system-ui,-apple-system,sans-serif;padding:24px;color:#0f172a;line-height:1.4;}' +
        'h1{font-size:20px;margin:0 0 4px 0;color:#0f172a;}' +
        '.sub{font-size:12px;color:#475569;margin-bottom:16px;}' +
        '.grid{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:20px;}' +
        '.box{background:#f8fafc;border:1px solid #cbd5e1;border-radius:8px;padding:12px;font-size:12px;}' +
        '.box h3{margin:0 0 6px 0;font-size:13px;color:#0369A1;text-transform:uppercase;}' +
        '.box ul{margin:0;padding-left:18px;}' +
        'table{border-collapse:collapse;width:100%;font-size:12px;}' +
        'th{background:#f1f5f9;text-align:left;padding:8px;border:1px solid #cbd5e1;font-weight:700;}' +
        '</style></head><body>' +
        '<h1>Together-Neuro: Clinical, DLA & EHCP Evidence Summary</h1>' +
        '<div class="sub"><strong>Child / Individual:</strong> ' + child + ' &nbsp;|&nbsp; <strong>Export Date:</strong> ' + new Date().toLocaleDateString('en-GB') + ' &nbsp;|&nbsp; <strong>Total Logged Incidents:</strong> ' + logs.length + ' (' + totalMins + ' total mins)</div>' +
        '<div class="grid">' +
        '<div class="box"><h3>DWP Child DLA Evidence Breakdown</h3><ul>' + dlaSummaryHtml + '</ul></div>' +
        '<div class="box"><h3>EHCP Section B & F Mapping Breakdown</h3><ul>' + ehcpSummaryHtml + '</ul></div>' +
        '</div>' +
        '<table><thead><tr><th>Date/Time</th><th>Event & Duration</th><th>Identified Trigger</th><th>DLA Criteria Tag</th><th>EHCP Section B / F</th><th>Notes, Provision & De-escalation</th></tr></thead><tbody>' + rows + '</tbody></table>' +
        '</body></html>'
    );
    win.document.close();
    win.focus();
    setTimeout(function () { win.print(); }, 300);
};
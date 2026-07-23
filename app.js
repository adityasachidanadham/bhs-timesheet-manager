// ============================================================
// BHS KINETICS – TIMESHEET MANAGEMENT SYSTEM v2
// app.js – Refined with Apple-style UI + updated business rules
// ============================================================

// ── Data Store ──────────────────────────────────────────────
const Store = {
  users: [
    { id:1, name:'Ahmad Ridhwan',  username:'admin',    password:'admin123',   role:'admin',   managerId:null, active:true },
    { id:2, name:'Sarah Lim',      username:'manager1', password:'manager123', role:'manager', managerId:null, active:true },
    { id:3, name:'James Tan',      username:'manager2', password:'manager123', role:'manager', managerId:null, active:true },
    { id:4, name:'Ravi Kumar',     username:'tech1',    password:'tech123',    role:'tech',    managerId:2,    active:true },
    { id:5, name:'Nurul Ain',      username:'tech2',    password:'tech123',    role:'tech',    managerId:2,    active:true },
    { id:6, name:'Chen Wei',       username:'tech3',    password:'tech123',    role:'tech',    managerId:3,    active:true },
    { id:7, name:'Amirul Haziq',   username:'tech4',    password:'tech123',    role:'tech',    managerId:3,    active:true },
  ],
  countries:  ['Singapore','US','Netherlands','India','Ireland','China','Japan','Taiwan','Korea','Belgium'],
  customers:  ['HQ','Micron','GF','Muratec','UMC'],
  equipment:  ['SRC','G Series','Stocker','EUV','Cannon','Photo','Metrology'],
  standbyTypes: ['Standby','Annual Leave','Medical','Off in Lieu','Carry Forward Leave','Birthday Leave','Unpaid Leave'],
  leaveTypes: ['Annual Leave','Medical','Off in Lieu','Carry Forward Leave','Birthday Leave','Unpaid Leave'],
  allowanceTypes: ['Meal Allowance','Transport Allowance','Shift Allowance','Project Allowance'],
  publicHolidays: [
    { date:'2026-01-01', name:"New Year's Day",          country:'Singapore' },
    { date:'2026-01-29', name:'Chinese New Year',         country:'Singapore' },
    { date:'2026-01-30', name:'Chinese New Year (Day 2)', country:'Singapore' },
    { date:'2026-05-01', name:'Labour Day',               country:'Singapore' },
    { date:'2026-08-09', name:'National Day',             country:'Singapore' },
    { date:'2026-10-20', name:'Deepavali',                country:'Singapore' },
    { date:'2026-12-25', name:'Christmas Day',            country:'Singapore' },
    { date:'2026-02-17', name:'Chinese New Year',         country:'Malaysia'  },
    { date:'2026-05-01', name:'Labour Day',               country:'Malaysia'  },
    { date:'2026-08-31', name:'National Day',             country:'Malaysia'  },
    { date:'2026-09-16', name:'Malaysia Day',             country:'Malaysia'  },
    { date:'2026-12-25', name:'Christmas Day',            country:'Malaysia'  },
  ],
  timesheets: [
    {
      id:101, userId:4, year:2026, month:5, status:'approved',
      submittedAt:'2026-05-20', approvedAt:'2026-05-21', approvedBy:2, rejectionComment:'',
      entries:[
        { id:1,  date:'2026-05-04', customer:'HQ',    workHrs:8, sbHrs:0, sbType:'Standby', description:'EUV machine calibration',        country:'Netherlands', equipment:'EUV',      allowances:['Meal Allowance', 'Project Allowance'], ot15:0, ot20:0 },
        { id:2,  date:'2026-05-05', customer:'Micron',  workHrs:10,sbHrs:0, sbType:'Standby', description:'Stocker system maintenance',       country:'Taiwan',      equipment:'Stocker',  allowances:['Transport Allowance', 'Shift Allowance'], ot15:2, ot20:0 },
        { id:3,  date:'2026-05-06', customer:'GF', workHrs:8, sbHrs:0, sbType:'Standby', description:'SRC installation phase 1',          country:'Japan',       equipment:'SRC',      allowances:[], ot15:0, ot20:0 },
        { id:4,  date:'2026-05-07', customer:'HQ',    workHrs:6, sbHrs:2, sbType:'Standby', description:'On-call support',                   country:'Netherlands', equipment:'EUV',      allowances:[], ot15:0, ot20:0 },
        { id:5,  date:'2026-05-09', customer:'Muratec', workHrs:4, sbHrs:0, sbType:'Standby', description:'Saturday on-call check',            country:'Singapore',   equipment:'G Series', allowances:['Meal Allowance', 'Transport Allowance', 'Project Allowance'], ot15:0, ot20:0 },
        { id:6,  date:'2026-05-11', customer:'Micron',  workHrs:8, sbHrs:0, sbType:'Standby', description:'Photo track maintenance',           country:'Singapore',   equipment:'Photo',    allowances:['Transport Allowance', 'Project Allowance'], ot15:0, ot20:0 },
        { id:7,  date:'2026-05-12', customer:'UMC',     workHrs:6, sbHrs:0, sbType:'Standby', description:'Metrology alignment check',         country:'Taiwan',      equipment:'Metrology',allowances:['Shift Allowance'], ot15:0, ot20:6 },
      ]
    },
    {
      id:102, userId:5, year:2026, month:5, status:'submitted',
      submittedAt:'2026-05-24', approvedAt:null, approvedBy:null, rejectionComment:'',
      entries:[
        { id:8,  date:'2026-05-04', customer:'GF', workHrs:8, sbHrs:0, sbType:'Standby', description:'Conveyor installation support',     country:'Japan',       equipment:'SRC',      allowances:['Project Allowance'], ot15:0, ot20:0 },
        { id:9,  date:'2026-05-05', customer:'Muratec', workHrs:11,sbHrs:0, sbType:'Standby', description:'G Series config & testing',          country:'Singapore',   equipment:'G Series', allowances:['Meal Allowance', 'Transport Allowance', 'Shift Allowance'], ot15:3, ot20:0 },
        { id:10, date:'2026-05-06', customer:'HQ',    workHrs:4, sbHrs:4, sbType:'Annual Leave', description:'Half-day leave, half-day EUV', country:'Netherlands', equipment:'EUV',      allowances:[], ot15:0, ot20:0 },
        { id:11, date:'2026-05-07', customer:'Micron',  workHrs:8, sbHrs:0, sbType:'Standby', description:'Stocker PM routine',                 country:'Taiwan',      equipment:'Stocker',  allowances:['Transport Allowance', 'Project Allowance'], ot15:0, ot20:0 },
      ]
    },
    {
      id:103, userId:6, year:2026, month:5, status:'rejected',
      submittedAt:'2026-05-23', approvedAt:null, approvedBy:3,
      rejectionComment:'Please add more detail in the description for May 7 entry.',
      entries:[
        { id:12, date:'2026-05-04', customer:'UMC',     workHrs:8, sbHrs:0, sbType:'Standby', description:'Metrology system baseline check',   country:'Korea',       equipment:'Metrology',allowances:[], ot15:0, ot20:0 },
        { id:13, date:'2026-05-07', customer:'UMC',     workHrs:12,sbHrs:0, sbType:'Standby', description:'Emergency fix',                      country:'Korea',       equipment:'Metrology',allowances:['Meal Allowance', 'Transport Allowance', 'Shift Allowance', 'Project Allowance'], ot15:4, ot20:0 },
      ]
    },
    {
      id:104, userId:7, year:2026, month:5, status:'draft',
      submittedAt:null, approvedAt:null, approvedBy:null, rejectionComment:'',
      entries:[
        { id:14, date:'2026-05-04', customer:'GF', workHrs:8, sbHrs:0, sbType:'Standby', description:'SRC commissioning day 1',            country:'China',       equipment:'SRC',      allowances:['Transport Allowance', 'Project Allowance'], ot15:0, ot20:0 },
        { id:15, date:'2026-05-05', customer:'GF', workHrs:4, sbHrs:4, sbType:'Medical', description:'Morning sick leave, afternoon work',  country:'China',       equipment:'SRC',      allowances:[], ot15:0, ot20:0 },
      ]
    }
  ],
  nextId: { user:8, ts:200, entry:1000 }
};

// ── State ────────────────────────────────────────────────────
let me = null;
let page = 'dashboard';
let tsYear = new Date().getFullYear();
let tsMonth = new Date().getMonth() + 1;
let viewingTs = null;
let rejectingTs = null;
let overrideTsId = null, overrideEntryId = null;

// ── Utils ────────────────────────────────────────────────────
const $ = id => document.getElementById(id);
const MONTHS = ['January','February','March','April','May','June','July','August','September','October','November','December'];
const DAYS   = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];

const fmt    = n => Number((n||0).toFixed(1)).toString();
const fmtD   = d => { if(!d) return '–'; const dt = new Date(d+'T00:00:00'); return dt.toLocaleDateString('en-GB',{day:'2-digit',month:'short',year:'numeric'}); };
const dow    = d => new Date(d+'T00:00:00').getDay();
const isHol  = d => Store.publicHolidays.some(h => h.date === d);
const holNm  = d => Store.publicHolidays.find(h => h.date === d)?.name || '';
const userBy = id => Store.users.find(u => u.id === id);
const isLeave= type => Store.leaveTypes.includes(type);

function calcOT(date, workHrs) {
  // OT is based on WORKING hours only; leave/standby hours excluded from OT
  const d = dow(date);
  const h = isHol(date);
  let reg=0, ot15=0, ot20=0;
  if (h || d===0) { ot20 = workHrs; }           // PH or Sunday → all OT2.0
  else if (d===6) { reg=Math.min(workHrs,4); ot15=Math.max(0,workHrs-4); } // Saturday → 4 reg
  else            { reg=Math.min(workHrs,8); ot15=Math.max(0,workHrs-8); } // Mon–Fri  → 8 reg
  return { reg, ot15, ot20 };
}

function recalcTs(ts) {
  // Group working hours by date (not leave hours)
  const byDate = {};
  ts.entries.forEach(e => {
    if (!e.date) return;
    const wh = isLeave(e.sbType) ? e.workHrs : e.workHrs; // always use workHrs for OT
    byDate[e.date] = (byDate[e.date]||0) + (e.workHrs||0);
  });
  // Assign OT back to entries proportionally
  const datePool = {};
  Object.keys(byDate).forEach(d => { datePool[d] = calcOT(d, byDate[d]); });
  const dateUsed = {};
  ts.entries.forEach(e => {
    if (!e.date) { e.ot15=0; e.ot20=0; return; }
    if (!dateUsed[e.date]) dateUsed[e.date] = { reg: datePool[e.date].reg, ot15: datePool[e.date].ot15, ot20: datePool[e.date].ot20 };
    const pool = dateUsed[e.date];
    const wh = e.workHrs || 0;
    const regTake  = Math.min(wh, pool.reg);   pool.reg  = Math.max(0, pool.reg  - regTake);
    const ot15Take = Math.min(wh - regTake, pool.ot15); pool.ot15 = Math.max(0, pool.ot15 - ot15Take);
    const ot20Take = Math.min(wh - regTake - ot15Take, pool.ot20); pool.ot20 = Math.max(0, pool.ot20 - ot20Take);
    e.ot15 = parseFloat(ot15Take.toFixed(1));
    e.ot20 = parseFloat(ot20Take.toFixed(1));
  });
}

function getTsFor(uid, y, m) { return Store.timesheets.find(t => t.userId===uid && t.year===y && t.month===m); }

function toast(msg, type='info') {
  const s = document.querySelector('.toast-stack');
  const t = document.createElement('div');
  t.className = `toast toast-${type==='success'?'ok':type==='error'?'err':'info'}`;
  t.textContent = msg;
  s.appendChild(t);
  setTimeout(()=>t.remove(), 3000);
}
function openOverlay(id) { $(id).classList.add('open'); }
function closeOverlay(id) { $(id).classList.remove('open'); }

// ── LOGIN ────────────────────────────────────────────────────
function tryLogin(u, p) {
  const user = Store.users.find(x => x.username===u && x.password===p && x.active);
  if (!user) { $('lerr').style.display='block'; return; }
  $('lerr').style.display='none';
  me = user;
  $('login-page').style.display='none';
  $('app').classList.add('active');
  bootApp();
}
function fillDemo(u,p) { $('lu').value=u; $('lp').value=p; }
function logout() {
  me=null;
  $('app').classList.remove('active');
  $('login-page').style.display='flex';
  $('lu').value=''; $('lp').value='';
}

// ── BOOT ─────────────────────────────────────────────────────
function bootApp() {
  $('nav-name').textContent = me.name;
  $('nav-init').textContent = me.name.split(' ').map(w=>w[0]).join('').slice(0,2).toUpperCase();
  const roleTag = $('nav-role');
  roleTag.textContent = me.role.charAt(0).toUpperCase()+me.role.slice(1);
  roleTag.className = `nav-role-tag ${me.role}`;
  buildNav();
  goTo('dashboard');
}

function buildNav() {
  const tabs = [
    { id:'dashboard', label:'Dashboard',   roles:['admin','manager','tech'] },
    { id:'timesheet', label:'My Timesheet',roles:['admin','manager','tech'] },
    { id:'approvals', label:'Approvals',   roles:['admin','manager'] },
    { id:'analytics', label:'Analytics',   roles:['admin','manager'] },
    { id:'admin',     label:'Admin Panel', roles:['admin'] },
  ];
  $('nav-tabs').innerHTML = tabs
    .filter(t => t.roles.includes(me.role))
    .map(t => `<button class="nav-tab" data-p="${t.id}" onclick="goTo('${t.id}')">${t.label}</button>`)
    .join('');
}

function goTo(p) {
  page = p;
  document.querySelectorAll('.nav-tab').forEach(t => t.classList.toggle('active', t.dataset.p===p));
  const el = $('content');
  el.innerHTML = '';
  ({ dashboard:renderDash, timesheet:renderTs, approvals:renderApprovals, analytics:renderAnalytics, admin:renderAdmin })[p]?.(el);
}

// ═══════════════════════════════════════════════
// DASHBOARD
// ═══════════════════════════════════════════════
function renderDash(el) {
  let all = Store.timesheets;
  if (me.role==='manager') {
    const team = Store.users.filter(u=>u.managerId===me.id).map(u=>u.id);
    all = all.filter(t=>team.includes(t.userId));
  } else if (me.role==='tech') {
    all = all.filter(t=>t.userId===me.id);
  }
  const pending  = all.filter(t=>t.status==='submitted').length;
  const approved = all.filter(t=>t.status==='approved').length;
  const ot15 = all.reduce((s,t)=>s+t.entries.reduce((a,e)=>a+(e.ot15||0),0),0);
  const ot20 = all.reduce((s,t)=>s+t.entries.reduce((a,e)=>a+(e.ot20||0),0),0);

  // For tech: total hours this month with picker
  const myTs = getTsFor(me.id, tsYear, tsMonth);
  const myTotalHrs = myTs ? myTs.entries.reduce((s,e)=>s+(e.workHrs||0)+(e.sbHrs||0),0) : 0;

  el.innerHTML = `
    <div class="sec-header">
      <div class="sec-title">
        <h1>Good ${greeting()}, ${me.name.split(' ')[0]}</h1>
        <p>${MONTHS[new Date().getMonth()]} ${new Date().getFullYear()} · ${me.role.charAt(0).toUpperCase()+me.role.slice(1)} View</p>
      </div>
    </div>

    <div class="stats-row">
      ${me.role!=='tech'?`
      <div class="stat-card"><div class="stat-accent acc-orange"></div>
        <div class="stat-chip chip-orange">⏳</div>
        <div class="stat-num">${pending}</div>
        <div class="stat-lbl">Pending Approvals</div>
      </div>
      <div class="stat-card"><div class="stat-accent acc-green"></div>
        <div class="stat-chip chip-green">✅</div>
        <div class="stat-num">${approved}</div>
        <div class="stat-lbl">Approved</div>
      </div>`:''}

      <div class="stat-card"><div class="stat-accent acc-orange"></div>
        <div class="stat-chip chip-orange">⚡</div>
        <div class="stat-num">${fmt(ot15)}<span style="font-size:1rem;font-weight:500">h</span></div>
        <div class="stat-lbl">OT 1.5× Hours</div>
      </div>
      <div class="stat-card"><div class="stat-accent acc-red"></div>
        <div class="stat-chip chip-red">🔴</div>
        <div class="stat-num">${fmt(ot20)}<span style="font-size:1rem;font-weight:500">h</span></div>
        <div class="stat-lbl">OT 2.0× Hours</div>
      </div>

      ${me.role==='tech'?`
      <div class="stat-card"><div class="stat-accent acc-blue"></div>
        <div class="stat-chip chip-blue">🕐</div>
        <div style="display:flex;align-items:baseline;gap:0.5rem;margin-bottom:0.3rem">
          <div class="stat-num">${fmt(myTotalHrs)}<span style="font-size:1rem;font-weight:500">h</span></div>
          <select style="font-size:0.75rem;border:1px solid var(--border);border-radius:99px;padding:0.15rem 0.4rem;background:var(--bg);color:var(--text-secondary);outline:none" onchange="updateDashMonth(this.value)">
            ${MONTHS.map((m,i)=>`<option value="${i+1}" ${i+1===tsMonth?'selected':''}>${m}</option>`).join('')}
          </select>
        </div>
        <div class="stat-lbl">Total Hours Worked · ${tsYear}</div>
      </div>`:''}
    </div>

    ${me.role!=='tech'?`
    <div class="card">
      <div class="card-head">
        <h3>Recent Submissions</h3>
        <button class="btn btn-sm btn-secondary" onclick="goTo('approvals')">View All →</button>
      </div>
      <div class="table-scroll">${recentTable(all.slice(0,6))}</div>
    </div>`:`
    <div class="card">
      <div class="card-head">
        <h3>My Timesheet — ${MONTHS[tsMonth-1]} ${tsYear}</h3>
        <button class="btn btn-sm btn-primary" onclick="goTo('timesheet')">Open →</button>
      </div>
      <div class="card-body">
        ${myTs?`
          <div style="display:flex;align-items:center;gap:1rem;flex-wrap:wrap">
            <span class="pill pill-${myTs.status}"><span class="pill-dot dot-${myTs.status}"></span>${myTs.status.toUpperCase()}</span>
            ${myTs.submittedAt?`<span style="font-size:0.85rem;color:var(--text-secondary)">Submitted ${fmtD(myTs.submittedAt)}</span>`:''}
          </div>
          ${myTs.rejectionComment?`<div style="margin-top:1rem;padding:0.85rem 1rem;background:var(--red-bg);border:1px solid rgba(239,68,68,0.2);border-radius:var(--r-md);color:var(--red-text);font-size:0.85rem">
            <strong style="display:block;margin-bottom:0.25rem">Manager feedback:</strong>${myTs.rejectionComment}</div>`:''}
        `:`<p style="color:var(--text-secondary);font-size:0.88rem">No timesheet started for this month yet.</p>`}
      </div>
    </div>`}
  `;
}

function updateDashMonth(m) { tsMonth=parseInt(m); goTo('dashboard'); }
function greeting() { const h=new Date().getHours(); return h<12?'morning':h<18?'afternoon':'evening'; }

function recentTable(list) {
  if (!list.length) return '<div class="empty"><div class="empty-ico">📭</div><p>No submissions yet</p></div>';
  return `<table class="apple-table">
    <thead><tr><th>Employee</th><th>Period</th><th>Submitted</th><th>Status</th><th>OT 1.5×</th><th>OT 2.0×</th><th></th></tr></thead>
    <tbody>${list.map(ts=>{
      const u=userBy(ts.userId);
      const o15=ts.entries.reduce((s,e)=>s+(e.ot15||0),0);
      const o20=ts.entries.reduce((s,e)=>s+(e.ot20||0),0);
      return `<tr>
        <td><strong>${u?.name}</strong></td>
        <td class="td-muted">${MONTHS[ts.month-1]} ${ts.year}</td>
        <td class="td-muted">${fmtD(ts.submittedAt)}</td>
        <td><span class="pill pill-${ts.status}"><span class="pill-dot dot-${ts.status}"></span>${ts.status}</span></td>
        <td><span class="ot-tag ot-tag-15">${fmt(o15)}h</span></td>
        <td><span class="ot-tag ot-tag-20">${fmt(o20)}h</span></td>
      </tr>`;
    }).join('')}</tbody>
  </table>`;
}

// ═══════════════════════════════════════════════
// TIMESHEET PAGE
// ═══════════════════════════════════════════════
function renderTs(el) {
  el.innerHTML = `
    <div class="sec-header">
      <div class="sec-title"><h1>My Timesheet</h1><p>Log your daily hours for the selected month</p></div>
    </div>
    <div class="ts-toolbar">
      <div class="ts-period-selector">
        <label>Month</label>
        <select id="ts-m" onchange="reloadTs()">
          ${MONTHS.map((m,i)=>`<option value="${i+1}" ${i+1===tsMonth?'selected':''}>${m}</option>`).join('')}
        </select>
        <div class="ts-sep"></div>
        <label>Year</label>
        <select id="ts-y" onchange="reloadTs()">
          ${[2024,2025,2026,2027].map(y=>`<option value="${y}" ${y===tsYear?'selected':''}>${y}</option>`).join('')}
        </select>
      </div>
      <div class="ts-summary" id="ts-summary"></div>
    </div>
    <div id="ts-alerts"></div>
    <div class="card">
      <div class="card-head">
        <h3 id="ts-title">Timesheet</h3>
        <div id="ts-actions" style="display:flex;gap:0.5rem;flex-wrap:wrap"></div>
      </div>
      <div class="ts-table-wrap">
        <table class="apple-table ts-table" id="ts-tbl">
          <thead><tr>
            <th>Date</th>
            <th>Work Location</th>
            <th>Working Hrs</th>
            <th>Standby / Leave</th>
            <th>Description</th>
            <th>Country</th>
            <th>Equipment</th>
            <th>Allowances</th>
            <th>OT 1.5×</th>
            <th>OT 2.0×</th>
            <th></th>
          </tr></thead>
          <tbody id="ts-body"></tbody>
        </table>
      </div>
      <div id="ts-add-row-wrap"></div>
      <div id="ts-footer" style="padding:1rem 1.4rem;border-top:1px solid var(--border)"></div>
    </div>
  `;
  loadTs();
}

function reloadTs() {
  tsYear  = parseInt($('ts-y').value);
  tsMonth = parseInt($('ts-m').value);
  loadTs();
}

function loadTs() {
  let ts = getTsFor(me.id, tsYear, tsMonth);
  const editable = !ts || ts.status==='draft' || ts.status==='rejected';
  const locked   = ts && (ts.status==='submitted' || ts.status==='approved');

  $('ts-title').textContent = `${MONTHS[tsMonth-1]} ${tsYear}`;
  renderTsActions(ts, editable);
  renderTsSummary(ts);
  renderTsAlerts(ts);
  renderTsRows(ts, editable);
  renderTsFooter(ts);

  // Add row button
  const wrap = $('ts-add-row-wrap');
  wrap.innerHTML = editable
    ? `<button class="add-row-trigger" onclick="addRow(${ts?.id||'null'})">＋ Add Row</button>`
    : '';
}

function renderTsActions(ts, editable) {
  const el = $('ts-actions');
  el.innerHTML = '';
  const mkBtn = (cls,txt,fn) => { const b=document.createElement('button'); b.className=`btn btn-sm ${cls}`; b.textContent=txt; b.onclick=fn; el.appendChild(b); };
  if (editable && ts?.entries.length) mkBtn('btn-primary','Submit for Approval',()=>submitTs(ts.id));
  if (ts) mkBtn('btn-ghost','Print / PDF',()=>window.print());
}

function renderTsSummary(ts) {
  const el = $('ts-summary');
  if (!ts || !ts.entries.length) { el.innerHTML=''; return; }
  const totalWork = ts.entries.reduce((s,e)=>s+(e.workHrs||0),0);
  const totalSb   = ts.entries.reduce((s,e)=>s+(e.sbHrs||0),0);
  const ot15      = ts.entries.reduce((s,e)=>s+(e.ot15||0),0);
  const ot20      = ts.entries.reduce((s,e)=>s+(e.ot20||0),0);
  const totalOT   = ot15+ot20;
  
  // Count allowance entries
  const countAllowance = (name) => ts.entries.filter(e => Array.isArray(e.allowances) && e.allowances.includes(name)).length;
  const mealCount = countAllowance('Meal Allowance');
  const transportCount = countAllowance('Transport Allowance');
  const shiftCount = countAllowance('Shift Allowance');
  const projectCount = countAllowance('Project Allowance');
  
  el.innerHTML = `
    <div class="sum-item"><span class="sum-label">Working</span><span class="sum-value">${fmt(totalWork)}h</span></div>
    <div class="sum-div"></div>
    <div class="sum-item"><span class="sum-label">Standby/Leave</span><span class="sum-value">${fmt(totalSb)}h</span></div>
    <div class="sum-div"></div>
    <div class="sum-item"><span class="sum-label">OT 1.5×</span><span class="sum-value">${fmt(ot15)}h</span></div>
    <div class="sum-div"></div>
    <div class="sum-item"><span class="sum-label">OT 2.0×</span><span class="sum-value">${fmt(ot20)}h</span></div>
    <div class="sum-div"></div>
    <div class="sum-item"><span class="sum-label">Total OT</span><span class="sum-value ${totalOT>72?'danger':totalOT>60?'warn':''}">${fmt(totalOT)}h${totalOT>72?' ⚠️':''}</span></div>
    <div class="sum-div"></div>
    <div class="sum-item"><span class="sum-label">Meal</span><span class="sum-value">${mealCount}</span></div>
    <div class="sum-div"></div>
    <div class="sum-item"><span class="sum-label">Transport</span><span class="sum-value">${transportCount}</span></div>
    <div class="sum-div"></div>
    <div class="sum-item"><span class="sum-label">Shift</span><span class="sum-value">${shiftCount}</span></div>
    <div class="sum-div"></div>
    <div class="sum-item"><span class="sum-label">Project</span><span class="sum-value">${projectCount}</span></div>
  `;
}

function renderTsAlerts(ts) {
  const el = $('ts-alerts');
  el.innerHTML = '';
  if (!ts) return;
  if (ts.status==='rejected' && ts.rejectionComment) {
    el.innerHTML = `<div class="alert-banner alert-danger show"><div class="alert-icon">❌</div><div class="alert-body"><strong>Rejected by Manager</strong>${ts.rejectionComment}<br><small>Please correct and resubmit.</small></div></div>`;
    return;
  }
  const warnings = [];
  const totalOT = ts.entries.reduce((s,e)=>s+(e.ot15||0)+(e.ot20||0),0);
  if (totalOT>72) warnings.push(`Total OT (${fmt(totalOT)}h) exceeds the 72-hour monthly limit.`);
  // Daily minimum check
  const dayHrs = {};
  ts.entries.forEach(e=>{ if(e.date) dayHrs[e.date]=(dayHrs[e.date]||0)+(e.workHrs||0)+(e.sbHrs||0); });
  Object.entries(dayHrs).forEach(([d,h])=>{ if(h<8&&h>0) warnings.push(`${fmtD(d)}: only ${fmt(h)}h entered (minimum 8h/day required).`); });
  // Weekly minimum
  const weekHrs = {};
  ts.entries.forEach(e=>{
    if(!e.date) return;
    const dt=new Date(e.date+'T00:00:00');
    const wk=`W${Math.ceil((dt.getDate()+new Date(dt.getFullYear(),dt.getMonth(),1).getDay())/7)}`;
    weekHrs[wk]=(weekHrs[wk]||0)+(e.workHrs||0)+(e.sbHrs||0);
  });
  Object.entries(weekHrs).forEach(([w,h])=>{ if(h<44&&h>0) warnings.push(`${w}: ${fmt(h)}h total (minimum 44h/week required).`); });
  if (warnings.length) {
    el.innerHTML = `<div class="alert-banner alert-warn show"><div class="alert-icon">⚠️</div><div class="alert-body"><strong>Validation Warnings</strong><ul>${warnings.map(w=>`<li>${w}</li>`).join('')}</ul><small>You may still submit — manager will review.</small></div></div>`;
  }
}

function renderTsRows(ts, editable) {
  const body = $('ts-body');
  body.innerHTML = '';
  if (!ts || !ts.entries.length) {
    body.innerHTML = `<tr><td colspan="11"><div class="empty"><div class="empty-ico">📋</div><p>No entries yet — click "Add Row" to begin</p></div></td></tr>`;
    return;
  }
  ts.entries.forEach(e => buildRow(e, ts, editable));
}

function buildRow(e, ts, editable) {
  const body = $('ts-body');
  const tr = document.createElement('tr');
  if (isHol(e.date)) tr.classList.add('row-holiday');
  const dayInfo = e.date ? `${DAYS[dow(e.date)]}${isHol(e.date)?` · 🔴 ${holNm(e.date)}`:''}` : '';

  if (!editable) {
    tr.innerHTML = `
      <td><strong>${fmtD(e.date)}</strong><br><small class="td-muted" style="font-size:0.75rem">${dayInfo}</small></td>
      <td>${e.customer||'–'}</td>
      <td class="td-mono"><strong>${e.workHrs||0}h</strong></td>
      <td class="td-muted">${e.sbHrs||0}h <span style="font-size:0.75rem">(${e.sbType||'Standby'})</span></td>
      <td>${e.description||'–'}</td>
      <td>${e.country||'–'}</td>
      <td>${e.equipment||'–'}</td>
      <td class="allow-cell">${allowanceBadges(e.allowances)}</td>
      <td>${e.ot15>0?`<span class="ot-tag ot-tag-15">${fmt(e.ot15)}h</span>`:'<span class="ot-tag-none">–</span>'}</td>
      <td>${e.ot20>0?`<span class="ot-tag ot-tag-20">${fmt(e.ot20)}h</span>`:'<span class="ot-tag-none">–</span>'}</td>
      <td></td>`;
  } else {
    tr.innerHTML = `
      <td>
        <input class="ts-input" type="date" value="${e.date}" onchange="upd(${ts.id},${e.id},'date',this.value)">
        <small class="td-muted" id="dl-${e.id}" style="font-size:0.73rem;display:block;margin-top:0.2rem">${dayInfo}</small>
      </td>
      <td>
        <select class="ts-input" onchange="upd(${ts.id},${e.id},'customer',this.value)">
          <option value="">Select…</option>
          ${Store.customers.map(c=>`<option value="${c}" ${e.customer===c?'selected':''}>${c}</option>`).join('')}
        </select>
      </td>
      <td>
        <input class="ts-input ts-input-num" type="number" min="0" max="24" step="0.5" value="${e.workHrs||0}"
          onchange="upd(${ts.id},${e.id},'workHrs',parseFloat(this.value)||0)">
      </td>
      <td>
        <div class="ts-standby-cell">
          <input class="ts-input ts-input-num ts-standby-hrs" type="number" min="0" max="24" step="0.5" value="${e.sbHrs||0}"
            onchange="upd(${ts.id},${e.id},'sbHrs',parseFloat(this.value)||0)">
          <select class="ts-input ts-standby-type" onchange="upd(${ts.id},${e.id},'sbType',this.value)">
            ${Store.standbyTypes.map(t=>`<option value="${t}" ${e.sbType===t?'selected':''}>${t}</option>`).join('')}
          </select>
        </div>
      </td>
      <td>
        <input class="ts-input" type="text" value="${e.description||''}" placeholder="Job description…"
          onchange="upd(${ts.id},${e.id},'description',this.value)">
      </td>
      <td>
        <select class="ts-input" onchange="upd(${ts.id},${e.id},'country',this.value)">
          <option value="">Select…</option>
          ${Store.countries.map(c=>`<option value="${c}" ${e.country===c?'selected':''}>${c}</option>`).join('')}
        </select>
      </td>
      <td>
        <select class="ts-input" onchange="upd(${ts.id},${e.id},'equipment',this.value)">
          <option value="">Select…</option>
          ${Store.equipment.map(t=>`<option value="${t}" ${e.equipment===t?'selected':''}>${t}</option>`).join('')}
        </select>
      </td>
      <td class="allow-cell">
        <div class="allowance-dd" id="alw-${e.id}">
          <button type="button" class="allowance-dd-toggle" id="alw-toggle-${e.id}"
            onclick="toggleAllowanceDD(event, ${ts.id}, ${e.id})">
            <span class="allowance-dd-label">${allowanceLabel(e.allowances)}</span>
            <span class="allowance-dd-caret">▾</span>
          </button>
        </div>
      </td>
      <td><div class="ts-ro ot-tag-15" id="ot15-${e.id}">${e.ot15>0?fmt(e.ot15)+'h':'–'}</div></td>
      <td><div class="ts-ro ot-tag-20" id="ot20-${e.id}">${e.ot20>0?fmt(e.ot20)+'h':'–'}</div></td>
      <td><button class="del-row-btn" onclick="delRow(${ts.id},${e.id})" title="Delete">✕</button></td>`;
  }
  body.appendChild(tr);
}

// ── Allowances (multi-select) ────────────────────────────────
// Read-only badges shown in the table cell.
function allowanceBadges(list) {
  const arr = Array.isArray(list) ? list : [];
  if (!arr.length) return '<span class="allowance-badge allow-no">–</span>';
  return arr.map(a => `<span class="allowance-badge allow-yes">${a}</span>`).join(' ');
}

// Compact label shown on the dropdown toggle button.
function allowanceLabel(list) {
  const arr = Array.isArray(list) ? list : [];
  if (!arr.length) return 'None';
  if (arr.length === 1) return arr[0];
  return `${arr.length} selected`;
}

// Open/close the floating multi-select panel for an entry.
function toggleAllowanceDD(ev, tsId, entryId) {
  ev.stopPropagation();
  const existing = document.getElementById('allowance-panel');
  const wasForThis = existing && existing.dataset.entry === String(entryId);
  closeAllowanceDD();
  if (wasForThis) return;

  const ts = Store.timesheets.find(t => t.id === tsId);
  const e  = ts?.entries.find(x => x.id === entryId);
  if (!e) return;
  if (!Array.isArray(e.allowances)) e.allowances = [];

  const toggleBtn = document.getElementById(`alw-toggle-${entryId}`);
  const rect = toggleBtn.getBoundingClientRect();

  const panel = document.createElement('div');
  panel.id = 'allowance-panel';
  panel.className = 'allowance-dd-panel';
  panel.dataset.entry = String(entryId);
  panel.dataset.ts = String(tsId);

  const noneActive = e.allowances.length === 0;
  let html = `<div class="allowance-dd-option allowance-dd-none ${noneActive ? 'is-active' : ''}"
       onclick="clearAllowances(${tsId}, ${entryId})">
       <span class="allowance-dd-check">${noneActive ? '✓' : ''}</span>
       <span>None</span>
     </div>`;
  html += Store.allowanceTypes.map(name => {
    const on = e.allowances.includes(name);
    return `<label class="allowance-dd-option">
        <input type="checkbox" ${on ? 'checked' : ''}
          onchange="setAllowance(${tsId}, ${entryId}, '${name}', this.checked)">
        <span class="allowance-dd-check">${on ? '✓' : ''}</span>
        <span>${name}</span>
      </label>`;
  }).join('');
  panel.innerHTML = html;

  document.body.appendChild(panel);
  // Position (fixed) just under the toggle so the table's overflow can't clip it.
  const pw = panel.offsetWidth;
  let left = rect.left;
  if (left + pw > window.innerWidth - 8) left = window.innerWidth - pw - 8;
  panel.style.top  = `${rect.bottom + 4}px`;
  panel.style.left = `${Math.max(8, left)}px`;

  setTimeout(() => {
    document.addEventListener('click', outsideAllowanceClick);
    window.addEventListener('scroll', closeAllowanceDD, true);
    window.addEventListener('resize', closeAllowanceDD);
  }, 0);
}

function outsideAllowanceClick(ev) {
  const panel = document.getElementById('allowance-panel');
  if (panel && !panel.contains(ev.target)) closeAllowanceDD();
}

function closeAllowanceDD() {
  const panel = document.getElementById('allowance-panel');
  if (panel) panel.remove();
  document.removeEventListener('click', outsideAllowanceClick);
  window.removeEventListener('scroll', closeAllowanceDD, true);
  window.removeEventListener('resize', closeAllowanceDD);
}

function setAllowance(tsId, entryId, name, checked) {
  const ts = Store.timesheets.find(t => t.id === tsId);
  const e  = ts?.entries.find(x => x.id === entryId);
  if (!e) return;
  if (!Array.isArray(e.allowances)) e.allowances = [];
  if (checked) {
    if (!e.allowances.includes(name)) e.allowances.push(name);
  } else {
    e.allowances = e.allowances.filter(a => a !== name);
  }
  // Keep stored order consistent with the defined list.
  e.allowances = Store.allowanceTypes.filter(a => e.allowances.includes(a));
  refreshAllowanceUI(tsId, entryId);
}

function clearAllowances(tsId, entryId) {
  const ts = Store.timesheets.find(t => t.id === tsId);
  const e  = ts?.entries.find(x => x.id === entryId);
  if (!e) return;
  e.allowances = [];
  refreshAllowanceUI(tsId, entryId);
}

// Update the toggle label, the panel ticks, and the summary counts in place.
function refreshAllowanceUI(tsId, entryId) {
  const ts = Store.timesheets.find(t => t.id === tsId);
  const e  = ts?.entries.find(x => x.id === entryId);
  if (!e) return;
  const lbl = document.querySelector(`#alw-toggle-${entryId} .allowance-dd-label`);
  if (lbl) lbl.textContent = allowanceLabel(e.allowances);

  const panel = document.getElementById('allowance-panel');
  if (panel && panel.dataset.entry === String(entryId)) {
    const noneActive = e.allowances.length === 0;
    const noneEl = panel.querySelector('.allowance-dd-none');
    if (noneEl) {
      noneEl.classList.toggle('is-active', noneActive);
      const c = noneEl.querySelector('.allowance-dd-check');
      if (c) c.textContent = noneActive ? '✓' : '';
    }
    panel.querySelectorAll('label.allowance-dd-option').forEach((lab, i) => {
      const name = Store.allowanceTypes[i];
      if (name === undefined) return;
      const on = e.allowances.includes(name);
      const cb = lab.querySelector('input[type=checkbox]');
      const tick = lab.querySelector('.allowance-dd-check');
      if (cb) cb.checked = on;
      if (tick) tick.textContent = on ? '✓' : '';
    });
  }
  renderTsSummary(ts);
}

function upd(tsId, entryId, field, val) {
  const ts = Store.timesheets.find(t=>t.id===tsId);
  const e  = ts?.entries.find(x=>x.id===entryId);
  if (!e) return;
  e[field] = val;
  recalcTs(ts);
  // Refresh OT display
  const o15=$(`ot15-${entryId}`), o20=$(`ot20-${entryId}`);
  if (o15) o15.textContent = e.ot15>0?fmt(e.ot15)+'h':'–';
  if (o20) o20.textContent = e.ot20>0?fmt(e.ot20)+'h':'–';
  // Refresh day label
  if (field==='date') {
    const lbl=$(`dl-${entryId}`);
    if (lbl) lbl.textContent = val?`${DAYS[dow(val)]}${isHol(val)?` · 🔴 ${holNm(val)}`:''}`: '';
  }
  renderTsSummary(ts);
  renderTsAlerts(ts);
}

function addRow(tsId) {
  let ts = Store.timesheets.find(t=>t.id===tsId);
  if (!ts) {
    ts = { id:Store.nextId.ts++, userId:me.id, year:tsYear, month:tsMonth, status:'draft', submittedAt:null, approvedAt:null, approvedBy:null, rejectionComment:'', entries:[] };
    Store.timesheets.push(ts);
  }
  const defDate = `${tsYear}-${String(tsMonth).padStart(2,'0')}-01`;
  ts.entries.push({ id:Store.nextId.entry++, date:defDate, customer:'', workHrs:8, sbHrs:0, sbType:'Standby', description:'', country:'', equipment:'', allowances:[], ot15:0, ot20:0 });
  recalcTs(ts);
  loadTs();
}

function delRow(tsId, entryId) {
  const ts = Store.timesheets.find(t=>t.id===tsId);
  if (!ts) return;
  ts.entries = ts.entries.filter(e=>e.id!==entryId);
  recalcTs(ts);
  loadTs();
}

function renderTsFooter(ts) {
  const el = $('ts-footer');
  if (!ts) { el.innerHTML=''; return; }
  el.innerHTML = `<span class="pill pill-${ts.status}"><span class="pill-dot dot-${ts.status}"></span>${ts.status.toUpperCase()}</span>
    ${ts.submittedAt?`<span style="font-size:0.8rem;color:var(--text-secondary);margin-left:1rem">Submitted ${fmtD(ts.submittedAt)}</span>`:''}`;
}

function submitTs(tsId) {
  const ts = Store.timesheets.find(t=>t.id===tsId);
  if (!ts?.entries.length) { toast('Add at least one entry first.','error'); return; }
  ts.status='submitted';
  ts.submittedAt=new Date().toISOString().slice(0,10);
  ts.rejectionComment='';
  toast('Timesheet submitted for approval ✅','success');
  loadTs();
}

// ═══════════════════════════════════════════════
// APPROVALS
// ═══════════════════════════════════════════════
function renderApprovals(el) {
  el.innerHTML = `
    <div class="sec-header">
      <div class="sec-title"><h1>Approvals</h1><p>Review and action team timesheet submissions</p></div>
    </div>
    <div class="filter-row">
      <input class="f-input" id="fl-search" placeholder="🔍  Search employee…" oninput="filterApl()">
      <select class="f-select" id="fl-status" onchange="filterApl()">
        <option value="">All Statuses</option>
        <option value="submitted">Submitted</option>
        <option value="approved">Approved</option>
        <option value="rejected">Rejected</option>
        <option value="draft">Draft</option>
      </select>
      <select class="f-select" id="fl-month" onchange="filterApl()">
        <option value="">All Months</option>
        ${MONTHS.map((m,i)=>`<option value="${i+1}">${m}</option>`).join('')}
      </select>
      <select class="f-select" id="fl-country" onchange="filterApl()">
        <option value="">All Countries</option>
        ${Store.countries.map(c=>`<option value="${c}">${c}</option>`).join('')}
      </select>
    </div>
    <div class="card"><div class="table-scroll" id="apl-wrap">${buildAplTable()}</div></div>

    <!-- Timesheet Detail Modal -->
    <div class="overlay" id="ts-modal">
      <div class="modal modal-lg">
        <div class="modal-head"><h3 id="ts-modal-title">Timesheet Review</h3><button class="modal-x" onclick="closeOverlay('ts-modal')">✕</button></div>
        <div class="modal-body" id="ts-modal-body"></div>
        <div class="modal-foot" id="ts-modal-foot"></div>
      </div>
    </div>

    <!-- Reject Modal -->
    <div class="overlay" id="rej-modal">
      <div class="modal">
        <div class="modal-head"><h3>Reject Timesheet</h3><button class="modal-x" onclick="closeOverlay('rej-modal')">✕</button></div>
        <div class="modal-body">
          <div class="f-group">
            <label>Reason for Rejection <span style="color:var(--red)">*</span></label>
            <textarea id="rej-comment" placeholder="Explain what needs to be corrected…" rows="4"></textarea>
          </div>
        </div>
        <div class="modal-foot">
          <button class="btn btn-ghost" onclick="closeOverlay('rej-modal')">Cancel</button>
          <button class="btn btn-danger" onclick="confirmReject()">Confirm Rejection</button>
        </div>
      </div>
    </div>
  `;
}

function getAplTs() {
  let all = Store.timesheets;
  if (me.role==='manager') {
    const team = Store.users.filter(u=>u.managerId===me.id).map(u=>u.id);
    all = all.filter(t=>team.includes(t.userId));
  }
  return all;
}

function buildAplTable(search='',status='',month='',country='') {
  let list = getAplTs();
  if (search) list=list.filter(t=>userBy(t.userId)?.name.toLowerCase().includes(search.toLowerCase()));
  if (status) list=list.filter(t=>t.status===status);
  if (month)  list=list.filter(t=>t.month===parseInt(month));
  if (country) list=list.filter(t=>t.entries.some(e=>e.country===country));
  if (!list.length) return '<div class="empty"><div class="empty-ico">📭</div><p>No timesheets found</p></div>';
  return `<table class="apple-table">
    <thead><tr><th>Employee</th><th>Period</th><th>Submitted</th><th>Status</th><th>OT 1.5×</th><th>OT 2.0×</th><th></th></tr></thead>
    <tbody>${list.map(ts=>{
      const u=userBy(ts.userId);
      const o15=ts.entries.reduce((s,e)=>s+(e.ot15||0),0);
      const o20=ts.entries.reduce((s,e)=>s+(e.ot20||0),0);
      return `<tr>
        <td><strong>${u?.name}</strong><br><small class="td-muted" style="font-size:0.75rem">${u?.role}</small></td>
        <td class="td-muted">${MONTHS[ts.month-1]} ${ts.year}</td>
        <td class="td-muted">${fmtD(ts.submittedAt)}</td>
        <td><span class="pill pill-${ts.status}"><span class="pill-dot dot-${ts.status}"></span>${ts.status}</span></td>
        <td><span class="ot-tag ot-tag-15">${fmt(o15)}h</span></td>
        <td><span class="ot-tag ot-tag-20">${fmt(o20)}h</span></td>
        <td><button class="btn btn-sm btn-ghost" onclick="openTsDetail(${ts.id})">Review →</button></td>
      </tr>`;
    }).join('')}</tbody>
  </table>`;
}

function filterApl() {
  $('apl-wrap').innerHTML = buildAplTable(
    $('fl-search')?.value||'',
    $('fl-status')?.value||'',
    $('fl-month')?.value||'',
    $('fl-country')?.value||''
  );
}

function openTsDetail(tsId) {
  viewingTs = tsId;
  const ts = Store.timesheets.find(t=>t.id===tsId);
  if (!ts) return;
  const u=userBy(ts.userId);
  const o15=ts.entries.reduce((s,e)=>s+(e.ot15||0),0);
  const o20=ts.entries.reduce((s,e)=>s+(e.ot20||0),0);
  const totalW=ts.entries.reduce((s,e)=>s+(e.workHrs||0),0);
  const totalS=ts.entries.reduce((s,e)=>s+(e.sbHrs||0),0);
  const canApprove=(me.role==='admin'||me.role==='manager')&&ts.status==='submitted';
  const canOverride=me.role==='admin'||me.role==='manager';

  $('ts-modal-title').textContent = `${u?.name} · ${MONTHS[ts.month-1]} ${ts.year}`;
  $('ts-modal-body').innerHTML = `
    <div class="ts-meta-row">
      <div class="ts-meta-item"><div class="ts-meta-val">${u?.name}</div><div class="ts-meta-lbl">Employee</div></div>
      <div class="ts-meta-item"><div class="ts-meta-val">${MONTHS[ts.month-1]} ${ts.year}</div><div class="ts-meta-lbl">Period</div></div>
      <div class="ts-meta-item"><div class="ts-meta-val">${fmt(totalW)}h</div><div class="ts-meta-lbl">Working Hrs</div></div>
      <div class="ts-meta-item"><div class="ts-meta-val">${fmt(totalS)}h</div><div class="ts-meta-lbl">Standby/Leave</div></div>
      <div class="ts-meta-item"><div class="ts-meta-val" style="color:var(--ot15)">${fmt(o15)}h</div><div class="ts-meta-lbl">OT 1.5×</div></div>
      <div class="ts-meta-item"><div class="ts-meta-val" style="color:var(--ot20)">${fmt(o20)}h</div><div class="ts-meta-lbl">OT 2.0×</div></div>
      <div class="ts-meta-item"><span class="pill pill-${ts.status}"><span class="pill-dot dot-${ts.status}"></span>${ts.status}</span><div class="ts-meta-lbl" style="margin-top:0.4rem">Status</div></div>
    </div>
    ${ts.rejectionComment?`<div style="padding:0.85rem 1rem;background:var(--red-bg);border:1px solid rgba(239,68,68,0.2);border-radius:var(--r-md);color:var(--red-text);font-size:0.85rem;margin-bottom:1rem"><strong>Previous rejection:</strong> ${ts.rejectionComment}</div>`:''}
    <div class="table-scroll">
      <table class="apple-table">
        <thead><tr>
          <th>Date</th><th>Work Location</th><th>Working</th><th>Standby/Leave</th><th>Description</th><th>Country</th><th>Equipment</th><th>Allowances</th><th>OT 1.5×</th><th>OT 2.0×</th>
          ${canOverride?'<th>Override</th>':''}
        </tr></thead>
        <tbody>
          ${ts.entries.map(e=>{
            const h=isHol(e.date);
            return `<tr class="${h?'row-holiday':''}">
              <td><strong>${fmtD(e.date)}</strong><br><small class="td-muted" style="font-size:0.73rem">${DAYS[dow(e.date)]}${h?` · 🔴 ${holNm(e.date)}`:''}</small></td>
              <td>${e.customer||'–'}</td>
              <td class="td-mono"><strong>${e.workHrs||0}h</strong></td>
              <td class="td-muted">${e.sbHrs||0}h <small>(${e.sbType||'Standby'})</small></td>
              <td>${e.description||'–'}</td>
              <td>${e.country||'–'}</td>
              <td>${e.equipment||'–'}</td>
              <td class="allow-cell">${allowanceBadges(e.allowances)}</td>
              <td>${e.ot15>0?`<span class="ot-tag ot-tag-15">${fmt(e.ot15)}h</span>`:'<span class="ot-tag-none">–</span>'}</td>
              <td>${e.ot20>0?`<span class="ot-tag ot-tag-20">${fmt(e.ot20)}h</span>`:'<span class="ot-tag-none">–</span>'}</td>
              ${canOverride?`<td><button class="btn btn-sm btn-ghost" onclick="showOverride(${ts.id},${e.id})" style="font-size:0.75rem">✏️ Edit</button></td>`:''}
            </tr>`;
          }).join('')}
        </tbody>
      </table>
    </div>
    <div id="override-panel"></div>
  `;

  const foot = $('ts-modal-foot');
  foot.innerHTML = '';
  if (canApprove) {
    const rb=document.createElement('button'); rb.className='btn btn-danger'; rb.textContent='❌ Reject';
    rb.onclick=()=>{ closeOverlay('ts-modal'); $('rej-comment').value=''; openOverlay('rej-modal'); };
    const ab=document.createElement('button'); ab.className='btn btn-success'; ab.textContent='✅ Approve';
    ab.onclick=()=>approveTs(ts.id);
    foot.appendChild(rb); foot.appendChild(ab);
  } else {
    const cb=document.createElement('button'); cb.className='btn btn-secondary'; cb.textContent='Close';
    cb.onclick=()=>closeOverlay('ts-modal');
    foot.appendChild(cb);
  }

  if (page!=='approvals') goTo('approvals');
  setTimeout(()=>openOverlay('ts-modal'),30);
}

function approveTs(tsId) {
  const ts=Store.timesheets.find(t=>t.id===tsId);
  if (!ts) return;
  ts.status='approved'; ts.approvedAt=new Date().toISOString().slice(0,10); ts.approvedBy=me.id;
  toast('Timesheet approved ✅','success');
  closeOverlay('ts-modal');
  filterApl();
}

function confirmReject() {
  const comment=$('rej-comment')?.value.trim();
  if (!comment) { toast('Please enter a rejection reason.','error'); return; }
  const ts=Store.timesheets.find(t=>t.id===viewingTs);
  if (!ts) return;
  ts.status='rejected'; ts.rejectionComment=comment; ts.approvedBy=me.id;
  toast('Timesheet rejected with comments.','info');
  closeOverlay('rej-modal');
  filterApl();
}

function showOverride(tsId, entryId) {
  overrideTsId=tsId; overrideEntryId=entryId;
  const ts=Store.timesheets.find(t=>t.id===tsId);
  const e=ts?.entries.find(x=>x.id===entryId);
  if (!e) return;
  const panel=$('override-panel');
  panel.innerHTML = `
    <div style="margin-top:1.1rem;padding:1.1rem;background:var(--bg);border:1.5px solid rgba(37,99,235,0.2);border-radius:var(--r-md)">
      <h4 style="font-size:0.9rem;font-weight:700;margin-bottom:0.9rem;color:var(--text-primary)">✏️ Override — ${fmtD(e.date)}</h4>
      <div class="f-grid-3">
        <div class="f-group"><label>Working Hrs</label><input type="number" id="ov-w" value="${e.workHrs}" min="0" max="24" step="0.5"></div>
        <div class="f-group"><label>Standby Hrs</label><input type="number" id="ov-s" value="${e.sbHrs}" min="0" max="24" step="0.5"></div>
        <div class="f-group"><label>Standby Type</label>
          <select id="ov-st">${Store.standbyTypes.map(t=>`<option value="${t}" ${e.sbType===t?'selected':''}>${t}</option>`).join('')}</select>
        </div>
      </div>
      <div class="f-grid-2" style="margin-top:0.5rem">
        <div class="f-group"><label>OT 1.5× Override</label><input type="number" id="ov-15" value="${e.ot15}" min="0" max="24" step="0.5"></div>
        <div class="f-group"><label>OT 2.0× Override</label><input type="number" id="ov-20" value="${e.ot20}" min="0" max="24" step="0.5"></div>
      </div>
      <div class="f-group"><label>Description</label><input type="text" id="ov-d" value="${e.description}"></div>
      <div style="display:flex;gap:0.5rem;margin-top:0.5rem">
        <button class="btn btn-primary btn-sm" onclick="saveOverride()">Save</button>
        <button class="btn btn-ghost btn-sm" onclick="document.getElementById('override-panel').innerHTML=''">Cancel</button>
      </div>
    </div>
  `;
  panel.scrollIntoView({ behavior:'smooth' });
}

function saveOverride() {
  const ts=Store.timesheets.find(t=>t.id===overrideTsId);
  const e=ts?.entries.find(x=>x.id===overrideEntryId);
  if (!e) return;
  e.workHrs=parseFloat($('ov-w').value)||0;
  e.sbHrs=parseFloat($('ov-s').value)||0;
  e.sbType=$('ov-st').value;
  e.ot15=parseFloat($('ov-15').value)||0;
  e.ot20=parseFloat($('ov-20').value)||0;
  e.description=$('ov-d').value||e.description;
  toast('Entry overridden ✅','success');
  openTsDetail(overrideTsId);
}

// ═══════════════════════════════════════════════
// ANALYTICS
// ═══════════════════════════════════════════════
function renderAnalytics(el) {
  el.innerHTML = `
    <div class="sec-header">
      <div class="sec-title"><h1>Analytics</h1><p>OT hours breakdown across teams, countries and work locations</p></div>
      <div class="sec-actions">
        <select class="f-select" id="an-m" onchange="redrawAnalytics()">
          <option value="">All Months</option>
          ${MONTHS.map((m,i)=>`<option value="${i+1}" ${i+1===tsMonth?'selected':''}>${m}</option>`).join('')}
        </select>
        <select class="f-select" id="an-y" onchange="redrawAnalytics()">
          ${[2024,2025,2026,2027].map(y=>`<option value="${y}" ${y===tsYear?'selected':''}>${y}</option>`).join('')}
        </select>
        <button class="btn btn-ghost" onclick="window.print()">Export PDF</button>
      </div>
    </div>
    <div id="an-body"></div>
  `;
  redrawAnalytics();
}

function redrawAnalytics() {
  const mF=parseInt($('an-m')?.value)||null;
  const yF=parseInt($('an-y')?.value)||null;
  let all=Store.timesheets.filter(t=>t.status!=='draft');
  if (me.role==='manager') { const team=Store.users.filter(u=>u.managerId===me.id).map(u=>u.id); all=all.filter(t=>team.includes(t.userId)); }
  if (mF) all=all.filter(t=>t.month===mF);
  if (yF) all=all.filter(t=>t.year===yF);
  const entries=all.flatMap(t=>t.entries.map(e=>({...e,userId:t.userId})));

  const byCountry={}, byCustomer={}, byEmp={};
  entries.forEach(e=>{
    if(e.country){ if(!byCountry[e.country]) byCountry[e.country]={ot15:0,ot20:0}; byCountry[e.country].ot15+=e.ot15||0; byCountry[e.country].ot20+=e.ot20||0; }
    if(e.customer){ if(!byCustomer[e.customer]) byCustomer[e.customer]={ot15:0,ot20:0}; byCustomer[e.customer].ot15+=e.ot15||0; byCustomer[e.customer].ot20+=e.ot20||0; }
    const nm=userBy(e.userId)?.name||'Unknown';
    if(!byEmp[nm]) byEmp[nm]={ot15:0,ot20:0};
    byEmp[nm].ot15+=e.ot15||0; byEmp[nm].ot20+=e.ot20||0;
  });

  const maxC=Math.max(...Object.values(byCountry).map(v=>v.ot15+v.ot20),1);
  const maxCu=Math.max(...Object.values(byCustomer).map(v=>v.ot15+v.ot20),1);
  const tot15=entries.reduce((s,e)=>s+(e.ot15||0),0);
  const tot20=entries.reduce((s,e)=>s+(e.ot20||0),0);

  $('an-body').innerHTML = `
    <div class="stats-row" style="margin-bottom:1.5rem">
      <div class="stat-card"><div class="stat-accent acc-orange"></div><div class="stat-chip chip-orange">⚡</div><div class="stat-num">${fmt(tot15)}<span style="font-size:1rem;font-weight:500">h</span></div><div class="stat-lbl">Total OT 1.5×</div></div>
      <div class="stat-card"><div class="stat-accent acc-red"></div><div class="stat-chip chip-red">🔴</div><div class="stat-num">${fmt(tot20)}<span style="font-size:1rem;font-weight:500">h</span></div><div class="stat-lbl">Total OT 2.0×</div></div>
      <div class="stat-card"><div class="stat-accent acc-blue"></div><div class="stat-chip chip-blue">📊</div><div class="stat-num">${fmt(tot15+tot20)}<span style="font-size:1rem;font-weight:500">h</span></div><div class="stat-lbl">Combined OT</div></div>
    </div>
    <div class="an-grid">
      <div class="card">
        <div class="card-head"><h3>By Country</h3></div>
        <div class="card-body">
          <div class="an-legend"><div class="an-legend-item"><div class="an-legend-dot" style="background:var(--ot15)"></div>OT 1.5×</div><div class="an-legend-item"><div class="an-legend-dot" style="background:var(--ot20)"></div>OT 2.0×</div></div>
          ${Object.entries(byCountry).sort((a,b)=>(b[1].ot15+b[1].ot20)-(a[1].ot15+a[1].ot20)).map(([c,v])=>`
            <div class="an-bar-item">
              <div class="an-bar-label-row"><span class="an-bar-name">${c}</span><div class="an-bar-vals"><span class="ot-tag ot-tag-15" style="font-size:0.73rem">${fmt(v.ot15)}h</span><span class="ot-tag ot-tag-20" style="font-size:0.73rem">${fmt(v.ot20)}h</span></div></div>
              <div class="an-track"><div class="an-fill an-fill-15" style="width:${(v.ot15/maxC)*100}%"></div><div class="an-fill an-fill-20" style="width:${(v.ot20/maxC)*100}%"></div></div>
            </div>`).join('')||'<p class="td-muted" style="font-size:0.85rem">No data</p>'}
        </div>
      </div>
      <div class="card">
        <div class="card-head"><h3>By Work Location</h3></div>
        <div class="card-body">
          <div class="an-legend"><div class="an-legend-item"><div class="an-legend-dot" style="background:var(--ot15)"></div>OT 1.5×</div><div class="an-legend-item"><div class="an-legend-dot" style="background:var(--ot20)"></div>OT 2.0×</div></div>
          ${Object.entries(byCustomer).sort((a,b)=>(b[1].ot15+b[1].ot20)-(a[1].ot15+a[1].ot20)).map(([c,v])=>`
            <div class="an-bar-item">
              <div class="an-bar-label-row"><span class="an-bar-name">${c}</span><div class="an-bar-vals"><span class="ot-tag ot-tag-15" style="font-size:0.73rem">${fmt(v.ot15)}h</span><span class="ot-tag ot-tag-20" style="font-size:0.73rem">${fmt(v.ot20)}h</span></div></div>
              <div class="an-track"><div class="an-fill an-fill-15" style="width:${(v.ot15/maxCu)*100}%"></div><div class="an-fill an-fill-20" style="width:${(v.ot20/maxCu)*100}%"></div></div>
            </div>`).join('')||'<p class="td-muted" style="font-size:0.85rem">No data</p>'}
        </div>
      </div>
    </div>
    <div class="card">
      <div class="card-head"><h3>Employee OT Summary</h3></div>
      <div class="table-scroll">
        <table class="apple-table">
          <thead><tr><th>Employee</th><th>Role</th><th>Manager</th><th>OT 1.5× Hrs</th><th>OT 2.0× Hrs</th><th>Total OT</th></tr></thead>
          <tbody>${Object.entries(byEmp).map(([nm,v])=>{
            const u=Store.users.find(x=>x.name===nm);
            const mgr=u?userBy(u.managerId):null;
            return `<tr>
              <td><strong>${nm}</strong></td>
              <td><span class="pill pill-${u?.role==='admin'?'approved':u?.role==='manager'?'submitted':'draft'}" style="font-size:0.7rem">${u?.role||'–'}</span></td>
              <td class="td-muted">${mgr?.name||'–'}</td>
              <td><span class="ot-tag ot-tag-15">${fmt(v.ot15)}h</span></td>
              <td><span class="ot-tag ot-tag-20">${fmt(v.ot20)}h</span></td>
              <td><strong>${fmt(v.ot15+v.ot20)}h</strong></td>
            </tr>`;
          }).join('')}</tbody>
        </table>
      </div>
    </div>
  `;
}

// ═══════════════════════════════════════════════
// ADMIN PANEL
// ═══════════════════════════════════════════════
function renderAdmin(el) {
  el.innerHTML = `
    <div class="sec-header">
      <div class="sec-title"><h1>Admin Panel</h1><p>Manage users, master data and system configuration</p></div>
    </div>
    <div class="sub-tabs">
      <button class="sub-tab active" onclick="adminTab('users',this)">Users</button>
      <button class="sub-tab" onclick="adminTab('master',this)">Master Data</button>
      <button class="sub-tab" onclick="adminTab('holidays',this)">Public Holidays</button>
    </div>
    <div id="admin-body"></div>

    <!-- Add User Modal -->
    <div class="overlay" id="add-user-ov">
      <div class="modal">
        <div class="modal-head"><h3>Add New User</h3><button class="modal-x" onclick="closeOverlay('add-user-ov')">✕</button></div>
        <div class="modal-body">
          <div class="f-group"><label>Full Name</label><input type="text" id="nu-name" placeholder="Full name"></div>
          <div class="f-grid-2">
            <div class="f-group"><label>Username</label><input type="text" id="nu-user" placeholder="username"></div>
            <div class="f-group"><label>Password</label><input type="password" id="nu-pass" placeholder="password"></div>
          </div>
          <div class="f-grid-2">
            <div class="f-group"><label>Role</label>
              <select id="nu-role"><option value="tech">Tech</option><option value="manager">Manager</option><option value="admin">Admin</option></select>
            </div>
            <div class="f-group"><label>Reports To</label>
              <select id="nu-mgr"><option value="">None</option>${Store.users.filter(u=>u.role==='manager').map(m=>`<option value="${m.id}">${m.name}</option>`).join('')}</select>
            </div>
          </div>
        </div>
        <div class="modal-foot">
          <button class="btn btn-ghost" onclick="closeOverlay('add-user-ov')">Cancel</button>
          <button class="btn btn-primary" onclick="saveUser()">Add User</button>
        </div>
      </div>
    </div>

    <!-- Add Holiday Modal -->
    <div class="overlay" id="add-hol-ov">
      <div class="modal">
        <div class="modal-head"><h3>Add Public Holiday</h3><button class="modal-x" onclick="closeOverlay('add-hol-ov')">✕</button></div>
        <div class="modal-body">
          <div class="f-group"><label>Date</label><input type="date" id="hd"></div>
          <div class="f-group"><label>Holiday Name</label><input type="text" id="hn" placeholder="e.g. National Day"></div>
          <div class="f-group"><label>Country</label><select id="hc">${Store.countries.map(c=>`<option value="${c}">${c}</option>`).join('')}</select></div>
        </div>
        <div class="modal-foot">
          <button class="btn btn-ghost" onclick="closeOverlay('add-hol-ov')">Cancel</button>
          <button class="btn btn-primary" onclick="saveHoliday()">Add Holiday</button>
        </div>
      </div>
    </div>
  `;
  adminTab('users', el.querySelector('.sub-tab'));
}

function adminTab(tab, btn) {
  document.querySelectorAll('.sub-tab').forEach(t=>t.classList.remove('active'));
  btn.classList.add('active');
  const body=$('admin-body');
  if (tab==='users') {
    body.innerHTML=`
      <div class="card">
        <div class="card-head"><h3>All Users (${Store.users.length})</h3><button class="btn btn-primary btn-sm" onclick="openOverlay('add-user-ov')">+ Add User</button></div>
        <div class="table-scroll">
          <table class="apple-table"><thead><tr><th>#</th><th>Name</th><th>Username</th><th>Role</th><th>Reports To</th><th>Status</th><th>Action</th></tr></thead>
          <tbody id="utbody">${usersBody()}</tbody></table>
        </div>
      </div>`;
  } else if (tab==='master') {
    body.innerHTML=`
      <div class="admin-cols">
        <div class="card"><div class="card-head"><h3>Countries</h3></div><div class="card-body">
          <ul class="master-items" id="ml-countries">${masterList('countries')}</ul>
          <div class="add-item-bar"><input type="text" id="mi-countries" placeholder="Add country…"><button class="btn btn-primary btn-sm" onclick="addMI('countries','mi-countries','ml-countries')">Add</button></div>
        </div></div>
        <div class="card"><div class="card-head"><h3>Work Locations</h3></div><div class="card-body">
          <ul class="master-items" id="ml-customers">${masterList('customers')}</ul>
          <div class="add-item-bar"><input type="text" id="mi-customers" placeholder="Add work location…"><button class="btn btn-primary btn-sm" onclick="addMI('customers','mi-customers','ml-customers')">Add</button></div>
        </div></div>
        <div class="card"><div class="card-head"><h3>Equipment Names</h3></div><div class="card-body">
          <ul class="master-items" id="ml-equipment">${masterList('equipment')}</ul>
          <div class="add-item-bar"><input type="text" id="mi-equipment" placeholder="Add equipment…"><button class="btn btn-primary btn-sm" onclick="addMI('equipment','mi-equipment','ml-equipment')">Add</button></div>
        </div></div>
      </div>`;
  } else {
    body.innerHTML=`
      <div class="card">
        <div class="card-head"><h3>Public Holidays</h3><button class="btn btn-primary btn-sm" onclick="openOverlay('add-hol-ov')">+ Add Holiday</button></div>
        <div class="table-scroll">
          <table class="apple-table"><thead><tr><th>Date</th><th>Day</th><th>Name</th><th>Country</th><th></th></tr></thead>
          <tbody id="hol-body">${holBody()}</tbody></table>
        </div>
      </div>`;
  }
}

function usersBody() {
  return Store.users.map(u=>{
    const mgr=userBy(u.managerId);
    return `<tr>
      <td class="td-muted" style="font-size:0.8rem">${u.id}</td>
      <td><strong>${u.name}</strong></td>
      <td class="td-muted">${u.username}</td>
      <td>
        <select class="inline-select" onchange="updateRole(${u.id},this.value)">
          <option value="tech" ${u.role==='tech'?'selected':''}>Tech</option>
          <option value="manager" ${u.role==='manager'?'selected':''}>Manager</option>
          <option value="admin" ${u.role==='admin'?'selected':''}>Admin</option>
        </select>
      </td>
      <td>
        <select class="inline-select" onchange="updateMgr(${u.id},this.value)">
          <option value="">None</option>
          ${Store.users.filter(x=>x.role==='manager'&&x.id!==u.id).map(m=>`<option value="${m.id}" ${u.managerId===m.id?'selected':''}>${m.name}</option>`).join('')}
        </select>
      </td>
      <td><span class="pill ${u.active?'pill-approved':'pill-rejected'}">${u.active?'Active':'Inactive'}</span></td>
      <td><button class="btn btn-sm ${u.active?'btn-danger':'btn-success'}" onclick="toggleUser(${u.id})">${u.active?'Deactivate':'Activate'}</button></td>
    </tr>`;
  }).join('');
}
function updateRole(id,r){ const u=Store.users.find(x=>x.id===id); if(u){ u.role=r; toast(`Role updated`,'success'); } }
function updateMgr(id,m){ const u=Store.users.find(x=>x.id===id); if(u){ u.managerId=m?parseInt(m):null; toast(`Manager updated`,'success'); } }
function toggleUser(id){ const u=Store.users.find(x=>x.id===id); if(u){ u.active=!u.active; toast(`User ${u.active?'activated':'deactivated'}`,'info'); $('utbody').innerHTML=usersBody(); } }
function saveUser(){
  const name=$('nu-name').value.trim(), uname=$('nu-user').value.trim(), pass=$('nu-pass').value.trim();
  const role=$('nu-role').value, mgr=$('nu-mgr').value;
  if(!name||!uname||!pass){ toast('Fill all fields.','error'); return; }
  if(Store.users.some(u=>u.username===uname)){ toast('Username taken.','error'); return; }
  Store.users.push({id:Store.nextId.user++,name,username:uname,password:pass,role,managerId:mgr?parseInt(mgr):null,active:true});
  toast(`${name} added ✅`,'success');
  closeOverlay('add-user-ov');
  adminTab('users',document.querySelector('.sub-tab.active'));
}
function masterList(key){ return Store[key].map((v,i)=>`<li class="master-item"><span>${v}</span><button class="btn btn-sm btn-ghost" style="color:var(--red);border:none" onclick="delMI('${key}',${i},'ml-${key}')">✕</button></li>`).join(''); }
function addMI(key,inputId,listId){ const v=$(inputId)?.value.trim(); if(!v) return; if(Store[key].includes(v)){ toast('Already exists.','error'); return; } Store[key].push(v); $(inputId).value=''; $(listId).innerHTML=masterList(key); toast(`"${v}" added`,'success'); }
function delMI(key,idx,listId){ Store[key].splice(idx,1); $(listId).innerHTML=masterList(key); toast('Removed.','info'); }
function holBody(){ return Store.publicHolidays.sort((a,b)=>a.date.localeCompare(b.date)).map((h,i)=>`<tr><td><strong>${fmtD(h.date)}</strong></td><td class="td-muted">${DAYS[dow(h.date)]}</td><td>${h.name}</td><td>${h.country}</td><td><button class="btn btn-sm btn-ghost" style="color:var(--red)" onclick="delHol(${i})">Remove</button></td></tr>`).join(''); }
function saveHoliday(){ const d=$('hd').value,n=$('hn').value.trim(),c=$('hc').value; if(!d||!n){ toast('Fill all fields.','error'); return; } Store.publicHolidays.push({date:d,name:n,country:c}); toast('Holiday added ✅','success'); closeOverlay('add-hol-ov'); $('hol-body').innerHTML=holBody(); }
function delHol(i){ Store.publicHolidays.splice(i,1); $('hol-body').innerHTML=holBody(); toast('Removed.','info'); }

// ── Bootstrap ────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', ()=>{
  $('lform').addEventListener('submit', e=>{ e.preventDefault(); tryLogin($('lu').value.trim(),$('lp').value.trim()); });
});

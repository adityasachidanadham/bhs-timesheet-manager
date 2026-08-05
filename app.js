// ============================================================
// BHS KINETICS – TIMESHEET MANAGEMENT SYSTEM v2
// app.js – Refined with Apple-style UI + updated business rules
// ============================================================

// ── Data Store ──────────────────────────────────────────────
const Store = {
  users: [
    { id:1, empId:'0871', name:'Marlina Binte Ahmad', username:'0871', password:'0871', role:'tech', team:'AMHS', managerIds:[3,4], active:true },
    { id:5, empId:'0000', name:'HR', username:'0000', password:'0000', role:'admin', team:null, managerIds:[], active:true },
    { id:6, empId:'1111', name:'Mike', username:'1111', password:'1111', role:'admin', team:null, managerIds:[], active:true },
    { id:7, empId:'3333', name:'Admin 3333', username:'3333', password:'3333', role:'admin', team:null, managerIds:[], active:true },
    { id:2, empId:'1188', name:'Sachidanandham Aditya', username:'1188', password:'1188', role:'admin', team:null, managerIds:[], active:true },
    { id:3, empId:'0061', name:'Kevin Lee Kok Meng', username:'0061', password:'0061', role:'manager', team:null, managerIds:[], active:true },
    { id:4, empId:'0044', name:'Lim Khan Yee', username:'0044', password:'0044', role:'manager', team:null, managerIds:[], active:true },
    { id:10, empId:'0021', name:'Khoo Gim Soon Adrian', username:'0021', password:'0021', role:'tech', team:'AMHS', managerIds:[3,4], active:true },
    { id:11, empId:'0056', name:'Cho Yong Kiong', username:'0056', password:'0056', role:'tech', team:'AMHS', managerIds:[3,4], active:true },
    { id:12, empId:'0496', name:'Langh Biak Lian', username:'0496', password:'0496', role:'tech', team:'AMHS', managerIds:[3,4], active:true },
    { id:13, empId:'0518', name:'Koh Keng Boon', username:'0518', password:'0518', role:'tech', team:'AMHS', managerIds:[3,4], active:true },
    { id:14, empId:'0553', name:'Chong Han Kiang', username:'0553', password:'0553', role:'tech', team:'AMHS', managerIds:[3,4], active:true },
    { id:15, empId:'0651', name:'Ravikumar Rajesh Kumar', username:'0651', password:'0651', role:'tech', team:'AMHS', managerIds:[3,4], active:true },
    { id:16, empId:'0002', name:'Imran Gazi', username:'0002', password:'0002', role:'tech', team:'AMHS', managerIds:[3,4], active:true },
    { id:17, empId:'0003', name:'Alam Shahin', username:'0003', password:'0003', role:'tech', team:'AMHS', managerIds:[3,4], active:true },
    { id:18, empId:'0885', name:'Yan Qingqing', username:'0885', password:'0885', role:'tech', team:'AMHS', managerIds:[3,4], active:true },
    { id:19, empId:'0474', name:'Chan Maw', username:'0474', password:'0474', role:'tech', team:'ATTACHMENT', managerIds:[3,4], active:true },
    { id:20, empId:'783', name:'Kyi Soe Han', username:'783', password:'783', role:'tech', team:'ATTACHMENT', managerIds:[3,4], active:true },
    { id:21, empId:'1216', name:'Aung Ko Ko', username:'1216', password:'1216', role:'tech', team:'ATTACHMENT', managerIds:[3,4], active:true },
    { id:22, empId:'0640', name:'Nguyen Hoang Minh Cuong', username:'0640', password:'0640', role:'tech', team:'ATTACHMENT', managerIds:[3,4], active:true },
    { id:23, empId:'0641', name:'Nguyen Huu Tam', username:'0641', password:'0641', role:'tech', team:'ATTACHMENT', managerIds:[3,4], active:true },
    { id:24, empId:'0022', name:'Tam Wee Chor', username:'0022', password:'0022', role:'tech', team:'ASML', managerIds:[3,4], active:true },
    { id:25, empId:'0028', name:'Zhang Hanfeng', username:'0028', password:'0028', role:'tech', team:'ASML', managerIds:[3,4], active:true },
    { id:26, empId:'0035', name:'Quek Wei Lian', username:'0035', password:'0035', role:'tech', team:'ASML', managerIds:[3,4], active:true },
    { id:27, empId:'0037', name:'Asyraf Muhammad Bin Saidi', username:'0037', password:'0037', role:'tech', team:'ASML', managerIds:[3,4], active:true },
    { id:28, empId:'0045', name:'Lai Yin Teck', username:'0045', password:'0045', role:'tech', team:'ASML', managerIds:[3,4], active:true },
    { id:29, empId:'0054', name:'Pang Gee Yng', username:'0054', password:'0054', role:'tech', team:'ASML', managerIds:[3,4], active:true },
    { id:30, empId:'0055', name:'Soo Tong Ee', username:'0055', password:'0055', role:'tech', team:'ASML', managerIds:[3,4], active:true },
    { id:31, empId:'0092', name:'Yong Kok Fong', username:'0092', password:'0092', role:'tech', team:'ASML', managerIds:[3,4], active:true },
    { id:32, empId:'0137', name:'Tasmin Chandran', username:'0137', password:'0137', role:'tech', team:'ASML', managerIds:[3,4], active:true },
    { id:33, empId:'0139', name:'Seah Wen Hong', username:'0139', password:'0139', role:'tech', team:'ASML', managerIds:[3,4], active:true },
    { id:34, empId:'0144', name:'Ho Siew Chang', username:'0144', password:'0144', role:'tech', team:'ASML', managerIds:[3,4], active:true },
    { id:35, empId:'0162', name:'Koh Goon Seng', username:'0162', password:'0162', role:'tech', team:'ASML', managerIds:[3,4], active:true },
    { id:36, empId:'0279', name:'Lee Shang Cheng', username:'0279', password:'0279', role:'tech', team:'ASML', managerIds:[3,4], active:true },
    { id:37, empId:'0280', name:'John Michael Pamintuan Torres', username:'0280', password:'0280', role:'tech', team:'ASML', managerIds:[3,4], active:true },
    { id:38, empId:'0375', name:'Ho Wei Siong', username:'0375', password:'0375', role:'tech', team:'ASML', managerIds:[3,4], active:true },
    { id:39, empId:'0452', name:'Goh Wei Xiang, Matthias', username:'0452', password:'0452', role:'tech', team:'ASML', managerIds:[3,4], active:true },
    { id:40, empId:'0470', name:'Pavithran Palaniandy', username:'0470', password:'0470', role:'tech', team:'ASML', managerIds:[3,4], active:true },
    { id:41, empId:'0479', name:'Luisito Castro Dela Cruz', username:'0479', password:'0479', role:'tech', team:'ASML', managerIds:[3,4], active:true },
    { id:42, empId:'0093', name:'Ji Peng Li', username:'0093', password:'0093', role:'tech', team:'ASML', managerIds:[3,4], active:true },
    { id:43, empId:'0560', name:'Tan Woon Ter', username:'0560', password:'0560', role:'tech', team:'ASML', managerIds:[3,4], active:true },
    { id:44, empId:'0669', name:'Fong Chen Kiong', username:'0669', password:'0669', role:'tech', team:'ASML', managerIds:[3,4], active:true },
    { id:45, empId:'0694', name:'Ram Kumar Asythamby', username:'0694', password:'0694', role:'tech', team:'ASML', managerIds:[3,4], active:true },
    { id:46, empId:'0712', name:'Lo Kim Poh', username:'0712', password:'0712', role:'tech', team:'ASML', managerIds:[3,4], active:true },
    { id:47, empId:'0713', name:'Liang Jiachun', username:'0713', password:'0713', role:'tech', team:'ASML', managerIds:[3,4], active:true },
    { id:48, empId:'0726', name:'Fan Wei', username:'0726', password:'0726', role:'tech', team:'ASML', managerIds:[3,4], active:true },
    { id:49, empId:'0736', name:'Sih Tian Shi', username:'0736', password:'0736', role:'tech', team:'ASML', managerIds:[3,4], active:true },
    { id:50, empId:'0747', name:'Mohammed Shafiq Bin Md Sultan', username:'0747', password:'0747', role:'tech', team:'ASML', managerIds:[3,4], active:true },
    { id:51, empId:'0742', name:'Benny Tan Beng Teck', username:'0742', password:'0742', role:'tech', team:'ASML', managerIds:[3,4], active:true },
    { id:52, empId:'0757', name:'Chan Ding Xuan', username:'0757', password:'0757', role:'tech', team:'ASML', managerIds:[3,4], active:true },
    { id:53, empId:'0779', name:'Faris Sharyl Bin Ismail', username:'0779', password:'0779', role:'tech', team:'ASML', managerIds:[3,4], active:true },
    { id:54, empId:'0778', name:'Eugene Ng', username:'0778', password:'0778', role:'tech', team:'ASML', managerIds:[3,4], active:true },
    { id:55, empId:'0780', name:'Kho Yiap Wei', username:'0780', password:'0780', role:'tech', team:'ASML', managerIds:[3,4], active:true },
    { id:56, empId:'0781', name:'Chin Wai Keat', username:'0781', password:'0781', role:'tech', team:'ASML', managerIds:[3,4], active:true },
    { id:57, empId:'0822', name:'Muhammad Eidrus Bin Abdul Wahab', username:'0822', password:'0822', role:'tech', team:'ASML', managerIds:[3,4], active:true },
    { id:58, empId:'0825', name:'Muhammad Hairil Bin Samsuri', username:'0825', password:'0825', role:'tech', team:'ASML', managerIds:[3,4], active:true },
    { id:59, empId:'0821', name:'Gangeswaran Manikam', username:'0821', password:'0821', role:'tech', team:'ASML', managerIds:[3,4], active:true },
    { id:60, empId:'0835', name:'Loganathan Naderajan', username:'0835', password:'0835', role:'tech', team:'ASML', managerIds:[3,4], active:true },
    { id:61, empId:'0828', name:'Muhammad Taufiq Bin Leisah', username:'0828', password:'0828', role:'tech', team:'ASML', managerIds:[3,4], active:true },
    { id:62, empId:'844', name:'Jeft Liang Jia Ching', username:'844', password:'844', role:'tech', team:'ASML', managerIds:[3,4], active:true },
    { id:63, empId:'848', name:'Sia Jian Fatt', username:'848', password:'848', role:'tech', team:'ASML', managerIds:[3,4], active:true },
    { id:64, empId:'858', name:'Huai Gin Seng (Jason)', username:'858', password:'858', role:'tech', team:'ASML', managerIds:[3,4], active:true },
    { id:65, empId:'859', name:'Onn Yi Xun', username:'859', password:'859', role:'tech', team:'ASML', managerIds:[3,4], active:true },
    { id:66, empId:'0632', name:'Pham Tien Khanh', username:'0632', password:'0632', role:'tech', team:'ASML', managerIds:[3,4], active:true },
    { id:67, empId:'0634', name:'Ho Nguyen Cuong', username:'0634', password:'0634', role:'tech', team:'ASML', managerIds:[3,4], active:true },
    { id:68, empId:'0870', name:'Prabahar Gunasegaran', username:'0870', password:'0870', role:'tech', team:'ASML', managerIds:[3,4], active:true },
    { id:69, empId:'0878', name:'Lodganath Sandaran', username:'0878', password:'0878', role:'tech', team:'ASML', managerIds:[3,4], active:true },
    { id:70, empId:'860', name:'Muhammad Hasif Bin Abdul Rahman', username:'860', password:'860', role:'tech', team:'ASML', managerIds:[3,4], active:true },
    { id:71, empId:'907', name:'Saranraj Ravi Sankar', username:'907', password:'907', role:'tech', team:'ASML', managerIds:[3,4], active:true },
  ],
  teams: ['AMHS','ATTACHMENT','ASML'],
  countries:  ['Singapore','USA','Netherlands','China','Japan','Ireland','Taiwan','Korea','Israel'],
  customers:  ['HQ','Micron','GF','SSW','UMC','SOITEC','VSMC','STM','TSMC','Nearfield','Intel','ASML','Sony','YMTC','Samsung'],
  equipment:  ['SRC','G Series','Stocker','EUV','Cannon','Photo','Metrology'],
  standbyTypes: ['Standby','Annual Leave','Medical','Off in Lieu','Carry Forward Leave','Birthday Leave','Unpaid Leave'],
  leaveTypes: ['Annual Leave','Medical','Off in Lieu','Carry Forward Leave','Birthday Leave','Unpaid Leave'],
  allowanceTypes: ['Meal Allowance','Transport Allowance','Shift Allowance','Project Allowance'],
  publicHolidays: [
    { date:'2026-01-01', name:"New Year's Day",           country:'Singapore' },
    { date:'2026-02-17', name:'Chinese New Year',          country:'Singapore' },
    { date:'2026-02-18', name:'Chinese New Year (day 2)',  country:'Singapore' },
    { date:'2026-03-21', name:'Hari Raya Puasa',           country:'Singapore' },
    { date:'2026-04-03', name:'Good Friday',               country:'Singapore' },
    { date:'2026-05-01', name:'Labour Day',                country:'Singapore' },
    { date:'2026-05-27', name:'Hari Raya Haji',            country:'Singapore' },
    { date:'2026-05-31', name:'Vesak Day',                 country:'Singapore' },
    { date:'2026-06-01', name:'Vesak Day (Observed)',      country:'Singapore' },
    { date:'2026-08-09', name:'National Day',              country:'Singapore' },
    { date:'2026-08-10', name:'National Day (Observed)',   country:'Singapore' },
    { date:'2026-11-08', name:'Deepavali',                 country:'Singapore' },
    { date:'2026-11-09', name:'Deepavali (Observed)',      country:'Singapore' },
    { date:'2026-12-25', name:'Christmas Day',             country:'Singapore' },
  ],
  timesheets: [],
  nextId: { user:72, ts:200, entry:1000 }
};

// ── State ────────────────────────────────────────────────────
let me = null;
let page = 'timesheet';
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

// Country dropdown for timesheet rows
function countryOptions(sel) {
  return `<option value="">–</option>` + Store.countries.map(c=>`<option value="${c}" ${sel===c?'selected':''}>${c}</option>`).join('');
}

// Customer dropdown for timesheet rows
function customerOptions(sel) {
  return `<option value="">–</option>` + Store.customers.map(c=>`<option value="${c}" ${sel===c?'selected':''}>${c}</option>`).join('');
}

// Numeric hours dropdown (0–16 in 0.5 steps)
const HOUR_OPTS = Array.from({length:33},(_,i)=>i/2);
function hourOptions(sel) {
  return HOUR_OPTS.map(h=>`<option value="${h}" ${(sel||0)===h?'selected':''}>${h===0?'0':fmt(h)}</option>`).join('');
}

function calcOT(date, workHrs) {
  // OT is based on WORKING hours only; leave/standby hours excluded from OT
  const d = dow(date);
  const h = isHol(date);
  let reg=0, ot15=0, ot20=0;
  if (h || d===0) { ot20 = workHrs; }           // PH or Sunday → all OT2.0
  else if (d===6) { reg=Math.min(workHrs,4); ot15=Math.max(0,workHrs-4); } // Saturday → 4h normal, rest OT1.5
  else            { reg=Math.min(workHrs,8); ot15=Math.max(0,workHrs-8); } // Mon–Fri  → 8h normal, rest OT1.5
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
  roleTag.textContent = roleLabel(me.role);
  roleTag.className = `nav-role-tag ${me.role}`;
  buildNav();
  goTo(me.role==='tech' ? 'timesheet' : 'approvals');
}

function roleLabel(role) {
  return { tech:'Level 1 · Tech', manager:'Level 2 · Manager', assistant:'Level 3 · Admin Assistant', admin:'Level 4 · Administrator' }[role] || role;
}

function buildNav() {
  let tabs;
  if (me.role==='manager') {
    tabs = [
      { id:'approvals', label:'Approvals' },
      { id:'analytics', label:'Analytics' },
      { id:'timesheet', label:'My Timesheet' },
    ];
  } else if (me.role==='admin') {
    tabs = [
      { id:'approvals', label:'Approvals' },
      { id:'analytics', label:'Analytics' },
      { id:'timesheet', label:'My Timesheet' },
      { id:'admin',     label:'Admin Panel' },
    ];
  } else if (me.role==='assistant') {
    tabs = [
      { id:'approvals', label:'Approvals' },
      { id:'analytics', label:'Analytics' },
      { id:'timesheet', label:'My Timesheet' },
    ];
  } else {
    tabs = [ { id:'timesheet', label:'My Timesheet' } ];
  }
  $('nav-tabs').innerHTML = tabs
    .map(t => `<button class="nav-tab" data-p="${t.id}" onclick="goTo('${t.id}')">${t.label}</button>`)
    .join('');
}

function goTo(p) {
  page = p;
  document.querySelectorAll('.nav-tab').forEach(t => t.classList.toggle('active', t.dataset.p===p));
  const el = $('content');
  el.innerHTML = '';
  ({ timesheet:renderTs, approvals:renderApprovals, analytics:renderAnalytics, admin:renderAdmin })[p]?.(el);
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
      <div class="ts-ph-legend" id="ts-ph-legend"></div>
    </div>
    <div id="ts-alerts"></div>
    <div class="card">
      <div class="card-head">
        <h3 id="ts-title">Timesheet</h3>
        <div id="ts-actions" style="display:flex;gap:0.5rem;flex-wrap:wrap"></div>
      </div>
      <div class="ts-table-wrap">
        <table class="apple-table ts-table ${usesDayGrid()?'ts-table-tech':''}" id="ts-tbl">
          <thead>${usesDayGrid()?`
          <tr>
            <th rowspan="2">Date</th>
            <th rowspan="2">Deployed<br>Hrs</th>
            <th rowspan="2">Standby<br>Hrs</th>
            <th rowspan="2">Country</th>
            <th rowspan="2">Customer</th>
            <th rowspan="2">EQ</th>
            <th rowspan="2">Activity</th>
            <th rowspan="2">Night<br>Shift Hrs</th>
            <th rowspan="2">Night<br>Shift OT</th>
            <th rowspan="2">OT<br>1.5×</th>
            <th rowspan="2">OT<br>2.0×</th>
            <th rowspan="2">Meal<br>Lunch</th>
            <th rowspan="2">Meal<br>Dinner</th>
            <th colspan="3">Transport Claim</th>
            <th rowspan="2">Shift<br>Allowance</th>
            <th rowspan="2">Remarks</th>
          </tr>
          <tr>
            <th>From</th>
            <th>To</th>
            <th>Preapproved</th>
          </tr>`:`
          <tr>
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
          </tr>`}</thead>
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


// All roles use the day-grid "My Timesheet" layout
function usesDayGrid() { return true; }

// Guarantee one row per calendar day of the selected month
function ensureTechMonth() {
  let ts = getTsFor(me.id, tsYear, tsMonth);
  if (ts && ts.status!=='draft' && ts.status!=='rejected') return ts; // never touch submitted/approved
  if (!ts) {
    ts = { id:Store.nextId.ts++, userId:me.id, year:tsYear, month:tsMonth, status:'draft', submittedAt:null, approvedAt:null, approvedBy:null, rejectionComment:'', entries:[] };
    Store.timesheets.push(ts);
  }
  const daysInMonth = new Date(tsYear, tsMonth, 0).getDate();
  for (let d=1; d<=daysInMonth; d++) {
    const dateStr = `${tsYear}-${String(tsMonth).padStart(2,'0')}-${String(d).padStart(2,'0')}`;
    if (!ts.entries.some(e => e.date === dateStr)) {
      ts.entries.push({ id:Store.nextId.entry++, date:dateStr, customer:'', workHrs:0, sbHrs:0, sbType:'Standby', description:'', country:'', equipment:'', allowances:[], ot15:0, ot20:0, nightHrs:0, nightOtHrs:0, mealLunch:0, mealDinner:0, tpFrom:'', tpTo:'', tpPre:'', shiftAllowance:'', remarks:'' });
    }
  }
  ts.entries.sort((a,b) => (a.date||'').localeCompare(b.date||''));
  recalcTs(ts);
  return ts;
}

// Public holiday legend for the selected month
function renderPhLegend() {
  const el = $('ts-ph-legend');
  if (!el) return;
  const mm = String(tsMonth).padStart(2,'0');
  const hols = Store.publicHolidays
    .filter(h => h.date.startsWith(`${tsYear}-${mm}`))
    .sort((a,b)=>a.date.localeCompare(b.date));
  if (!hols.length) { el.innerHTML=''; return; }
  el.innerHTML = `<span class="ts-ph-legend-title">Public Holidays</span>` +
    hols.map(h=>`<span class="ts-ph-item"><span class="ts-ph-dot"></span>${fmtD(h.date)} · ${h.name}</span>`).join('');
}

function loadTs() {
  let ts = usesDayGrid() ? ensureTechMonth() : getTsFor(me.id, tsYear, tsMonth);
  const editable = !ts || ts.status==='draft' || ts.status==='rejected';
  const locked   = ts && (ts.status==='submitted' || ts.status==='approved');

  $('ts-title').textContent = `${MONTHS[tsMonth-1]} ${tsYear}`;
  renderPhLegend();
  renderTsActions(ts, editable);
  renderTsSummary(ts);
  renderTsAlerts(ts);
  renderTsRows(ts, editable);
  renderTsFooter(ts);

  // Add row button (not for tech — their month is auto-generated day by day)
  const wrap = $('ts-add-row-wrap');
  wrap.innerHTML = (editable && !usesDayGrid())
    ? `<button class="add-row-trigger" onclick="addRow(${ts?.id||'null'})">＋ Add Row</button>`
    : '';
}

function renderTsActions(ts, editable) {
  const el = $('ts-actions');
  el.innerHTML = '';
  const mkBtn = (cls,txt,fn) => { const b=document.createElement('button'); b.className=`btn btn-sm ${cls}`; b.textContent=txt; b.onclick=fn; el.appendChild(b); };
  if (editable && ts?.entries.length) mkBtn('btn-primary','Submit for Approval',()=>submitTs(ts.id));
  if (ts && (me.role==='manager' || me.role==='admin')) {
    mkBtn('btn-ghost','📊 Export Excel',()=>exportExcel(ts.id));
    mkBtn('btn-ghost','🖨 Print',()=>openPrintTab(ts.id));
  }
}

function renderTsSummary(ts) {
  const el = $('ts-summary');
  if (!el) return;
  if (usesDayGrid()) { el.innerHTML=''; return; }
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
  // Only the manager-rejection notice stays on the page; validation warnings open in a popup on submit.
  if (ts.status==='rejected' && ts.rejectionComment) {
    el.innerHTML = `<div class="alert-banner alert-danger show"><div class="alert-icon">❌</div><div class="alert-body"><strong>Rejected by Manager</strong>${ts.rejectionComment}<br><small>Please correct and resubmit.</small></div></div>`;
  }
}

let _errPopTimer = null;
function showErrorPopup(msg) {
  let ov = $('err-modal');
  if (!ov) {
    ov = document.createElement('div');
    ov.className = 'overlay'; ov.id = 'err-modal';
    ov.innerHTML = `
      <div class="modal" style="max-width:420px">
        <div class="modal-head"><h3>❌ Not Allowed</h3><button class="modal-x" onclick="closeOverlay('err-modal')">✕</button></div>
        <div class="modal-body"><p id="err-msg" style="font-size:0.9rem;line-height:1.5"></p></div>
      </div>`;
    document.body.appendChild(ov);
  }
  $('err-msg').textContent = msg;
  openOverlay('err-modal');
  clearTimeout(_errPopTimer);
  _errPopTimer = setTimeout(()=>closeOverlay('err-modal'), 10000);
}

function collectWarnings(ts) {
  const warnings = [];
  if (!ts) return warnings;
  // Deployed/Standby split rule
  ts.entries.forEach(e=>{ const err=splitRuleError(e); if (err) warnings.push(err); });
  const totalOT = ts.entries.reduce((s,e)=>s+(e.ot15||0)+(e.ot20||0),0);
  if (totalOT>72) warnings.push(`Total OT ${fmt(totalOT)}h — over the 72h monthly limit.`);
  // Daily minimum check
  const dayHrs = {};
  ts.entries.forEach(e=>{ if(e.date) dayHrs[e.date]=(dayHrs[e.date]||0)+(e.workHrs||0)+(e.sbHrs||0); });
  Object.entries(dayHrs).forEach(([d,h])=>{ if(h<8&&h>0) warnings.push(`${fmtD(d)}: only ${fmt(h)}h (min 8h/day).`); });
  // Weekly minimum
  const weekHrs = {};
  ts.entries.forEach(e=>{
    if(!e.date) return;
    const dt=new Date(e.date+'T00:00:00');
    const wk=`W${Math.ceil((dt.getDate()+new Date(dt.getFullYear(),dt.getMonth(),1).getDay())/7)}`;
    weekHrs[wk]=(weekHrs[wk]||0)+(e.workHrs||0)+(e.sbHrs||0);
  });
  Object.entries(weekHrs).forEach(([w,h])=>{ if(h<44&&h>0) warnings.push(`${w}: ${fmt(h)}h (min 44h/week).`); });
  return warnings;
}

function showWarningsModal(warnings, tsId) {
  let ov = $('warn-modal');
  if (!ov) {
    ov = document.createElement('div');
    ov.className = 'overlay'; ov.id = 'warn-modal';
    ov.innerHTML = `
      <div class="modal">
        <div class="modal-head"><h3>⚠️ Please Check Your Timesheet</h3><button class="modal-x" onclick="closeOverlay('warn-modal')">✕</button></div>
        <div class="modal-body"><ul id="warn-list" style="padding-left:1.1rem;display:flex;flex-direction:column;gap:0.5rem;font-size:0.88rem"></ul></div>
        <div class="modal-foot" id="warn-foot"></div>
      </div>`;
    document.body.appendChild(ov);
  }
  $('warn-list').innerHTML = warnings.map(w=>`<li>${w}</li>`).join('');
  const foot = $('warn-foot');
  foot.innerHTML = '';
  const back=document.createElement('button'); back.className='btn btn-secondary'; back.textContent='Go Back & Fix';
  back.onclick=()=>closeOverlay('warn-modal');
  const anyway=document.createElement('button'); anyway.className='btn btn-primary'; anyway.textContent='Submit Anyway';
  anyway.onclick=()=>{ closeOverlay('warn-modal'); doSubmitTs(tsId); };
  foot.appendChild(back); foot.appendChild(anyway);
  openOverlay('warn-modal');
}

function renderTsRows(ts, editable) {
  const body = $('ts-body');
  body.innerHTML = '';
  if (!ts || !ts.entries.length) {
    body.innerHTML = `<tr><td colspan="${usesDayGrid()?18:11}"><div class="empty"><div class="empty-ico">📋</div><p>No entries yet${me.role==='tech'?'':' — click "Add Row" to begin'}</p></div></td></tr>`;
    return;
  }
  ts.entries.forEach(e => buildRow(e, ts, editable));
}

function buildRow(e, ts, editable) {
  const body = $('ts-body');
  const tr = document.createElement('tr');
  if (isHol(e.date)) tr.classList.add('row-holiday');
  if (e.date && dow(e.date)===0) tr.classList.add('row-sunday');
  const dayInfo = e.date ? `${DAYS[dow(e.date)]}${isHol(e.date)?` · 🔴 ${holNm(e.date)}`:''}` : '';

  if (editable && usesDayGrid()) {
    // Ensure new fields exist (legacy demo rows)
    ['tpFrom','tpTo','tpPre','shiftAllowance','remarks'].forEach(k=>{ if(e[k]===undefined) e[k]=''; });
    ['nightHrs','nightOtHrs','mealLunch','mealDinner'].forEach(k=>{ if(e[k]===undefined) e[k]=0; });
    const dayShort = e.date ? DAYS[dow(e.date)] : '';
    tr.innerHTML = `
      <td class="ts-day-cell"><strong>${fmtD(e.date)}</strong><span class="ts-day-name">${dayShort}</span></td>
      <td>
        <select class="ts-input tsx-hrs" onchange="upd(${ts.id},${e.id},'workHrs',parseFloat(this.value)||0)">${hourOptions(e.workHrs)}</select>
      </td>
      <td>
        <select class="ts-input tsx-hrs" onchange="upd(${ts.id},${e.id},'sbHrs',parseFloat(this.value)||0)">${hourOptions(e.sbHrs)}</select>
      </td>
      <td>
        <select class="ts-input tsx-ctry" onchange="upd(${ts.id},${e.id},'country',this.value)">${countryOptions(e.country)}</select>
      </td>
      <td>
        <select class="ts-input tsx-ctry" onchange="upd(${ts.id},${e.id},'customer',this.value)">${customerOptions(e.customer)}</select>
      </td>
      <td>
        <input class="ts-input tsx-tp" type="text" value="${e.equipment||''}"
          onchange="upd(${ts.id},${e.id},'equipment',this.value)">
      </td>
      <td class="tsx-act-cell">
        <textarea class="ts-input tsx-act" rows="1" placeholder="Activity…"
          onchange="upd(${ts.id},${e.id},'description',this.value)">${e.description||''}</textarea>
      </td>
      <td>
        <input class="ts-input tsx-sm" type="number" min="0" max="24" step="0.5" value="${e.nightHrs||0}"
          onchange="upd(${ts.id},${e.id},'nightHrs',parseFloat(this.value)||0)">
      </td>
      <td>
        <input class="ts-input tsx-sm" type="number" min="0" max="24" step="0.5" value="${e.nightOtHrs||0}"
          onchange="upd(${ts.id},${e.id},'nightOtHrs',parseFloat(this.value)||0)">
      </td>
      <td>
        <div class="tsx-ot ot-tag-15" id="ot15-${e.id}">${e.ot15>0?fmt(e.ot15)+'h':'–'}</div>
      </td>
      <td>
        <div class="tsx-ot ot-tag-20" id="ot20-${e.id}">${e.ot20>0?fmt(e.ot20)+'h':'–'}</div>
      </td>
      <td>
        <select class="ts-input tsx-meal" onchange="upd(${ts.id},${e.id},'mealLunch',parseInt(this.value)||0)">
          <option value="0" ${!e.mealLunch?'selected':''}>–</option>
          <option value="1" ${e.mealLunch===1?'selected':''}>1</option>
        </select>
      </td>
      <td>
        <select class="ts-input tsx-meal" onchange="upd(${ts.id},${e.id},'mealDinner',parseInt(this.value)||0)">
          <option value="0" ${!e.mealDinner?'selected':''}>–</option>
          <option value="1" ${e.mealDinner===1?'selected':''}>1</option>
        </select>
      </td>
      <td>
        <input class="ts-input tsx-tp" type="text" value="${e.tpFrom||''}" placeholder="From"
          onchange="upd(${ts.id},${e.id},'tpFrom',this.value)">
      </td>
      <td>
        <input class="ts-input tsx-tp" type="text" value="${e.tpTo||''}" placeholder="To"
          onchange="upd(${ts.id},${e.id},'tpTo',this.value)">
      </td>
      <td>
        <input class="ts-input tsx-tp" type="text" value="${e.tpPre||''}"
          onchange="upd(${ts.id},${e.id},'tpPre',this.value)">
      </td>
      <td>
        <input class="ts-input tsx-tp" type="text" value="${e.shiftAllowance||''}"
          onchange="upd(${ts.id},${e.id},'shiftAllowance',this.value)">
      </td>
      <td>
        <textarea class="ts-input tsx-rem" rows="1" placeholder="Remarks"
          onchange="upd(${ts.id},${e.id},'remarks',this.value)">${e.remarks||''}</textarea>
      </td>`;
    body.appendChild(tr);
    return;
  }

  if (!editable && usesDayGrid()) {
    tr.innerHTML = `
      <td class="ts-day-cell"><strong>${fmtD(e.date)}</strong><span class="ts-day-name">${e.date?DAYS[dow(e.date)]:''}</span></td>
      <td style="text-align:center">${fmt(e.workHrs||0)}</td>
      <td style="text-align:center">${fmt(e.sbHrs||0)}</td>
      <td>${e.country||'–'}</td>
      <td>${e.customer||'–'}</td>
      <td>${e.equipment||'–'}</td>
      <td class="tsx-act-cell">${e.description||'–'}</td>
      <td style="text-align:center">${e.nightHrs||'–'}</td>
      <td style="text-align:center">${e.nightOtHrs||'–'}</td>
      <td><div class="tsx-ot ot-tag-15">${e.ot15>0?fmt(e.ot15)+'h':'–'}</div></td>
      <td><div class="tsx-ot ot-tag-20">${e.ot20>0?fmt(e.ot20)+'h':'–'}</div></td>
      <td style="text-align:center">${e.mealLunch?'1':'–'}</td>
      <td style="text-align:center">${e.mealDinner?'1':'–'}</td>
      <td>${e.tpFrom||'–'}</td>
      <td>${e.tpTo||'–'}</td>
      <td>${e.tpPre||'–'}</td>
      <td>${e.shiftAllowance||'–'}</td>
      <td>${e.remarks||'–'}</td>`;
    body.appendChild(tr);
    return;
  }

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

// Deployed + Standby split rule: standby only allowed within the 8-hour day.
// Valid: split the 8h across deployed+standby, OR all hours in deployed (OT case).
function splitRuleError(e) {
  const wh = e.workHrs||0, sb = e.sbHrs||0;
  if (sb > 0 && (wh + sb) > 8) {
    return `${fmtD(e.date)}: Deployed + Standby over 8h. Put OT hours in Deployed only.`;
  }
  return null;
}

function upd(tsId, entryId, field, val) {
  const ts = Store.timesheets.find(t=>t.id===tsId);
  const e  = ts?.entries.find(x=>x.id===entryId);
  if (!e) return;
  e[field] = val;
  if (usesDayGrid() && (field==='workHrs' || field==='sbHrs')) {
    const err = splitRuleError(e);
    if (err) {
      e[field] = 0;                 // reset the offending value
      recalcTs(ts);
      showErrorPopup(err);
      loadTs();                     // redraw so the dropdown shows 0 again
      return;
    }
  }
  recalcTs(ts);
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
  if (!ts || ts.status==='draft') { el.innerHTML=''; el.style.display='none'; return; }
  el.style.display='';
  el.innerHTML = `<span class="pill pill-${ts.status}"><span class="pill-dot dot-${ts.status}"></span>${ts.status.toUpperCase()}</span>
    ${ts.submittedAt?`<span style="font-size:0.8rem;color:var(--text-secondary);margin-left:1rem">Submitted ${fmtD(ts.submittedAt)}</span>`:''}`;
}

function submitTs(tsId) {
  const ts = Store.timesheets.find(t=>t.id===tsId);
  if (!ts?.entries.length) { toast('Add at least one entry first.','error'); return; }
  const warnings = collectWarnings(ts);
  if (warnings.length) { showWarningsModal(warnings, tsId); return; }
  doSubmitTs(tsId);
}

function doSubmitTs(tsId) {
  const ts = Store.timesheets.find(t=>t.id===tsId);
  if (!ts) return;
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
      <div class="sec-title"><h1>Approvals</h1><p>Your team's timesheets for the selected period</p></div>
    </div>
    <div class="ts-toolbar">
      <div class="ts-period-selector">
        <label>Month</label>
        <select id="apl-m" onchange="reloadApl()">
          ${MONTHS.map((m,i)=>`<option value="${i+1}" ${i+1===tsMonth?'selected':''}>${m}</option>`).join('')}
        </select>
        <div class="ts-sep"></div>
        <label>Year</label>
        <select id="apl-y" onchange="reloadApl()">
          ${[2024,2025,2026,2027].map(y=>`<option value="${y}" ${y===tsYear?'selected':''}>${y}</option>`).join('')}
        </select>
      </div>
    </div>
    <div class="card"><div class="table-scroll" id="apl-wrap"></div></div>
  `;
  reloadApl();
}

function teamUsers() {
  const techs = Store.users.filter(u=>u.role==='tech' && u.active);
  if (me.role==='manager') return techs.filter(u=>(u.managerIds||[]).includes(me.id));
  return techs; // administrator + admin assistant see everyone
}

function reloadApl() {
  const m = parseInt($('apl-m')?.value)||tsMonth;
  const y = parseInt($('apl-y')?.value)||tsYear;
  $('apl-wrap').innerHTML = buildAplTable(m, y);
}

function buildAplTable(month, year) {
  const team = teamUsers();
  if (!team.length) return '<div class="empty"><div class="empty-ico">👥</div><p>No team members found</p></div>';
  const groups = Store.teams.map(g => ({ name:g, members:team.filter(u=>u.team===g) })).filter(g=>g.members.length);
  return `<table class="apple-table apl-table">
    <thead><tr><th>Employee</th><th>Status</th><th>OT 1.5×</th><th>OT 2.0×</th><th class="apl-actions-h">Actions</th></tr></thead>
    <tbody>${groups.map(g=>`
      <tr class="apl-team-row"><td colspan="5">${g.name} <span class="td-muted" style="font-weight:500">(${g.members.length})</span></td></tr>
      ${g.members.map(u=>{
        const ts = getTsFor(u.id, year, month);
        if (ts) recalcTs(ts);
        const o15 = ts ? ts.entries.reduce((s,e)=>s+(e.ot15||0),0) : 0;
        const o20 = ts ? ts.entries.reduce((s,e)=>s+(e.ot20||0),0) : 0;
        return `<tr>
          <td><strong>${u.name}</strong><br><small class="td-muted" style="font-size:0.72rem">${u.empId}</small></td>
          <td>${ts
            ? `<span class="pill pill-${ts.status}"><span class="pill-dot dot-${ts.status}"></span>${ts.status}</span>`
            : `<span class="pill pill-draft"><span class="pill-dot dot-draft"></span>not started</span>`}</td>
          <td><span class="ot-tag ot-tag-15">${fmt(o15)}h</span></td>
          <td><span class="ot-tag ot-tag-20">${fmt(o20)}h</span></td>
          <td class="apl-actions">${ts ? `
            <button class="btn btn-sm btn-ghost" onclick="openReviewTab(${ts.id})">Review</button>
            <button class="btn btn-sm btn-ghost" onclick="exportExcel(${ts.id})">Excel</button>
            <button class="btn btn-sm btn-ghost" onclick="openPrintTab(${ts.id})">Print</button>` : ''}</td>
        </tr>`;
      }).join('')}`).join('')}</tbody>
  </table>`;
}

// ── Review in a new browser tab (multitask-friendly) ─────────
function reviewHourOptions(sel) {
  return HOUR_OPTS.map(h=>`<option value="${h}" ${(sel||0)===h?'selected':''}>${h===0?'0':fmt(h)}</option>`).join('');
}

function reviewRowHtml(e) {
  const sunday = e.date && dow(e.date)===0;
  const hol = isHol(e.date);
  const cls = [hol?'row-holiday':'', sunday?'row-sunday':''].filter(Boolean).join(' ');
  const dayShort = e.date ? DAYS[dow(e.date)] : '';
  ['tpFrom','tpTo','tpPre','shiftAllowance','remarks'].forEach(k=>{ if(e[k]===undefined) e[k]=''; });
  ['nightHrs','nightOtHrs','mealLunch','mealDinner'].forEach(k=>{ if(e[k]===undefined) e[k]=0; });
  const inp = (f, extra, val) => `<input class="ts-input ${extra}" type="text" data-e="${e.id}" data-f="${f}" value="${val||''}">`;
  return `<tr class="${cls}">
    <td class="ts-day-cell"><strong>${fmtD(e.date)}</strong><span class="ts-day-name">${dayShort}</span></td>
    <td><select class="ts-input tsx-hrs" data-e="${e.id}" data-f="workHrs">${reviewHourOptions(e.workHrs)}</select></td>
    <td><select class="ts-input tsx-hrs" data-e="${e.id}" data-f="sbHrs">${reviewHourOptions(e.sbHrs)}</select></td>
    <td><select class="ts-input tsx-ctry" data-e="${e.id}" data-f="country">${countryOptions(e.country)}</select></td>
    <td><select class="ts-input tsx-ctry" data-e="${e.id}" data-f="customer">${customerOptions(e.customer)}</select></td>
    <td>${inp('equipment','tsx-tp',e.equipment)}</td>
    <td class="tsx-act-cell"><textarea class="ts-input tsx-act" rows="1" data-e="${e.id}" data-f="description">${e.description||''}</textarea></td>
    <td><input class="ts-input tsx-sm" type="number" min="0" max="24" step="0.5" data-e="${e.id}" data-f="nightHrs" value="${e.nightHrs||0}"></td>
    <td><input class="ts-input tsx-sm" type="number" min="0" max="24" step="0.5" data-e="${e.id}" data-f="nightOtHrs" value="${e.nightOtHrs||0}"></td>
    <td><div class="tsx-ot ot-tag-15" id="rv-ot15-${e.id}">${e.ot15>0?fmt(e.ot15)+'h':'–'}</div></td>
    <td><div class="tsx-ot ot-tag-20" id="rv-ot20-${e.id}">${e.ot20>0?fmt(e.ot20)+'h':'–'}</div></td>
    <td><select class="ts-input tsx-meal" data-e="${e.id}" data-f="mealLunch"><option value="0" ${!e.mealLunch?'selected':''}>–</option><option value="1" ${e.mealLunch===1?'selected':''}>1</option></select></td>
    <td><select class="ts-input tsx-meal" data-e="${e.id}" data-f="mealDinner"><option value="0" ${!e.mealDinner?'selected':''}>–</option><option value="1" ${e.mealDinner===1?'selected':''}>1</option></select></td>
    <td>${inp('tpFrom','tsx-tp',e.tpFrom)}</td>
    <td>${inp('tpTo','tsx-tp',e.tpTo)}</td>
    <td>${inp('tpPre','tsx-tp',e.tpPre)}</td>
    <td>${inp('shiftAllowance','tsx-tp',e.shiftAllowance)}</td>
    <td><textarea class="ts-input tsx-rem" rows="1" data-e="${e.id}" data-f="remarks">${e.remarks||''}</textarea></td>
  </tr>`;
}

function reviewTotals(ts) {
  return {
    dep: ts.entries.reduce((s,e)=>s+(e.workHrs||0),0),
    sb:  ts.entries.reduce((s,e)=>s+(e.sbHrs||0),0),
    o15: ts.entries.reduce((s,e)=>s+(e.ot15||0),0),
    o20: ts.entries.reduce((s,e)=>s+(e.ot20||0),0),
  };
}

function exportExcel(tsId) {
  const ts = Store.timesheets.find(t=>t.id===tsId);
  if (!ts) return;
  recalcTs(ts);
  const u = userBy(ts.userId);
  const esc = v => String(v===undefined||v===null?'':v).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
  const head = ['Date','Day','Deployed Hrs','Standby Hrs','Country','Customer','EQ','Activity',
                'Night Shift Hrs','Night Shift OT Hrs','OT 1.5x','OT 2.0x','Meal Lunch','Meal Dinner',
                'Transport From','Transport To','Transport Preapproved','Shift Allowance','Remarks'];
  const rows = ts.entries.map(e=>[
    e.date||'', e.date?DAYS[dow(e.date)]:'', e.workHrs||0, e.sbHrs||0,
    e.country||'', e.customer||'', e.equipment||'', e.description||'',
    e.nightHrs||0, e.nightOtHrs||0, e.ot15||0, e.ot20||0,
    e.mealLunch||0, e.mealDinner||0, e.tpFrom||'', e.tpTo||'', e.tpPre||'', e.shiftAllowance||'', e.remarks||''
  ]);
  const t = reviewTotals(ts);
  let html = `<html xmlns:x="urn:schemas-microsoft-com:office:excel"><head><meta charset="UTF-8"></head><body>`;
  html += `<table border="1">`;
  html += `<tr><td colspan="19"><b>BHS Kinetic — Timesheet · ${esc(u?.name)} (${esc(u?.empId)}) · ${MONTHS[ts.month-1]} ${ts.year} · Status: ${esc(ts.status.toUpperCase())}</b></td></tr>`;
  html += `<tr><td colspan="19">Deployed: ${fmt(t.dep)}h · Standby: ${fmt(t.sb)}h · OT1.5: ${fmt(t.o15)}h · OT2.0: ${fmt(t.o20)}h</td></tr>`;
  html += `<tr>${head.map(h=>`<th><b>${h}</b></th>`).join('')}</tr>`;
  rows.forEach(r=>{ html += `<tr>${r.map(c=>`<td>${esc(c)}</td>`).join('')}</tr>`; });
  html += `</table></body></html>`;
  const blob = new Blob(['\ufeff'+html], {type:'application/vnd.ms-excel'});
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = `Timesheet_${(u?.empId||'')}_${MONTHS[ts.month-1]}_${ts.year}.xls`;
  document.body.appendChild(a);
  a.click();
  setTimeout(()=>{ URL.revokeObjectURL(a.href); a.remove(); }, 500);
  toast('Excel exported 📊','success');
}

function openPrintTab(tsId) {
  const ts = Store.timesheets.find(t=>t.id===tsId);
  if (!ts) return;
  recalcTs(ts);
  const u = userBy(ts.userId);
  const t = reviewTotals(ts);
  const win = window.open('', '_blank');
  if (!win) { toast('Please allow pop-ups to open the print view.','error'); return; }
  const doc = win.document;
  const cell = v => (v===undefined||v===null||v==='') ? '–' : v;
  doc.open();
  doc.write(`<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <base href="${document.baseURI}">
    <title>Timesheet — ${u?.name} · ${MONTHS[ts.month-1]} ${ts.year}</title>
    <link rel="stylesheet" href="styles.css?v=15">
    </head><body style="background:#fff">
    <div class="page-wrap">
      <div class="sec-header">
        <div class="sec-title"><h1>${u?.name} <span style="font-weight:500;font-size:1rem;color:var(--text-secondary)">(${u?.empId})</span></h1>
        <p>${MONTHS[ts.month-1]} ${ts.year} · Status: ${ts.status.toUpperCase()}</p></div>
      </div>
      <div class="ts-meta-row">
        <div class="ts-meta-item"><div class="ts-meta-val">${fmt(t.dep)}h</div><div class="ts-meta-lbl">Deployed</div></div>
        <div class="ts-meta-item"><div class="ts-meta-val">${fmt(t.sb)}h</div><div class="ts-meta-lbl">Standby</div></div>
        <div class="ts-meta-item"><div class="ts-meta-val" style="color:var(--ot15)">${fmt(t.o15)}h</div><div class="ts-meta-lbl">OT 1.5×</div></div>
        <div class="ts-meta-item"><div class="ts-meta-val" style="color:var(--ot20)">${fmt(t.o20)}h</div><div class="ts-meta-lbl">OT 2.0×</div></div>
      </div>
      <div class="card"><div class="ts-table-wrap">
        <table class="apple-table ts-table ts-table-tech">
          <thead>
          <tr>
            <th rowspan="2">Date</th><th rowspan="2">Deployed<br>Hrs</th><th rowspan="2">Standby<br>Hrs</th>
            <th rowspan="2">Country</th><th rowspan="2">Customer</th><th rowspan="2">EQ</th>
            <th rowspan="2">Activity</th><th rowspan="2">Night<br>Shift Hrs</th><th rowspan="2">Night<br>Shift OT</th>
            <th rowspan="2">OT<br>1.5×</th><th rowspan="2">OT<br>2.0×</th>
            <th rowspan="2">Meal<br>Lunch</th><th rowspan="2">Meal<br>Dinner</th>
            <th colspan="3">Transport Claim</th><th rowspan="2">Shift<br>Allowance</th><th rowspan="2">Remarks</th>
          </tr>
          <tr><th>From</th><th>To</th><th>Preapproved</th></tr>
          </thead>
          <tbody>${ts.entries.map(e=>{
            const sunday = e.date && dow(e.date)===0;
            const cls = [isHol(e.date)?'row-holiday':'', sunday?'row-sunday':''].filter(Boolean).join(' ');
            return `<tr class="${cls}">
              <td class="ts-day-cell"><strong>${fmtD(e.date)}</strong><span class="ts-day-name">${e.date?DAYS[dow(e.date)]:''}</span></td>
              <td style="text-align:center">${fmt(e.workHrs||0)}</td>
              <td style="text-align:center">${fmt(e.sbHrs||0)}</td>
              <td>${cell(e.country)}</td><td>${cell(e.customer)}</td><td>${cell(e.equipment)}</td>
              <td>${cell(e.description)}</td>
              <td style="text-align:center">${e.nightHrs||'–'}</td>
              <td style="text-align:center">${e.nightOtHrs||'–'}</td>
              <td style="text-align:center">${e.ot15>0?fmt(e.ot15)+'h':'–'}</td>
              <td style="text-align:center">${e.ot20>0?fmt(e.ot20)+'h':'–'}</td>
              <td style="text-align:center">${e.mealLunch?'1':'–'}</td>
              <td style="text-align:center">${e.mealDinner?'1':'–'}</td>
              <td>${cell(e.tpFrom)}</td><td>${cell(e.tpTo)}</td><td>${cell(e.tpPre)}</td>
              <td>${cell(e.shiftAllowance)}</td><td>${cell(e.remarks)}</td>
            </tr>`;
          }).join('')}</tbody>
        </table>
      </div></div>
    </div></body></html>`);
  doc.close();
  win.onload = () => setTimeout(()=>win.print(), 300);
}

function openReviewTab(tsId) {
  const ts = Store.timesheets.find(t=>t.id===tsId);
  if (!ts) return;
  // Fill any missing days so the review mirrors the tech's full-month grid (any month, any year)
  const daysInMonth = new Date(ts.year, ts.month, 0).getDate();
  for (let d=1; d<=daysInMonth; d++) {
    const dateStr = `${ts.year}-${String(ts.month).padStart(2,'0')}-${String(d).padStart(2,'0')}`;
    if (!ts.entries.some(e => e.date === dateStr)) {
      ts.entries.push({ id:Store.nextId.entry++, date:dateStr, customer:'', workHrs:0, sbHrs:0, sbType:'Standby', description:'', country:'', equipment:'', allowances:[], ot15:0, ot20:0, nightHrs:0, nightOtHrs:0, mealLunch:0, mealDinner:0, tpFrom:'', tpTo:'', tpPre:'', shiftAllowance:'', remarks:'' });
    }
  }
  ts.entries.sort((a,b) => (a.date||'').localeCompare(b.date||''));
  recalcTs(ts);

  const u = userBy(ts.userId);
  const t = reviewTotals(ts);
  const win = window.open('', '_blank');
  if (!win) { toast('Please allow pop-ups to open the review tab.','error'); return; }
  const doc = win.document;
  doc.open();
  doc.write(`<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <base href="${document.baseURI}">
    <title>Review — ${u?.name} · ${MONTHS[ts.month-1]} ${ts.year}</title>
    <link rel="stylesheet" href="styles.css?v=13">
    </head><body style="background:var(--bg)">
    <div class="page-wrap">
      <div class="sec-header">
        <div class="sec-title"><h1>${u?.name}</h1><p>${MONTHS[ts.month-1]} ${ts.year} · Timesheet Review</p></div>
        <div class="sec-actions">
          <button class="btn btn-danger" id="rv-reject">❌ Reject</button>
          <button class="btn btn-success" id="rv-approve">✅ Approve</button>
        </div>
      </div>
      <div class="ts-meta-row">
        <div class="ts-meta-item"><div class="ts-meta-val">${u?.name}</div><div class="ts-meta-lbl">Employee</div></div>
        <div class="ts-meta-item"><div class="ts-meta-val">${MONTHS[ts.month-1]} ${ts.year}</div><div class="ts-meta-lbl">Period</div></div>
        <div class="ts-meta-item"><div class="ts-meta-val" id="rv-t-dep">${fmt(t.dep)}h</div><div class="ts-meta-lbl">Deployed</div></div>
        <div class="ts-meta-item"><div class="ts-meta-val" id="rv-t-sb">${fmt(t.sb)}h</div><div class="ts-meta-lbl">Standby</div></div>
        <div class="ts-meta-item"><div class="ts-meta-val" id="rv-t-15" style="color:var(--ot15)">${fmt(t.o15)}h</div><div class="ts-meta-lbl">OT 1.5×</div></div>
        <div class="ts-meta-item"><div class="ts-meta-val" id="rv-t-20" style="color:var(--ot20)">${fmt(t.o20)}h</div><div class="ts-meta-lbl">OT 2.0×</div></div>
        <div class="ts-meta-item"><span class="pill pill-${ts.status}" id="rv-status"><span class="pill-dot dot-${ts.status}"></span>${ts.status}</span><div class="ts-meta-lbl" style="margin-top:0.4rem">Status</div></div>
      </div>
      <div id="rv-reject-box" style="display:none;margin-bottom:1rem">
        <div class="card" style="padding:1rem">
          <div class="f-group"><label>Reason for Rejection</label>
          <textarea id="rv-reject-comment" rows="3" placeholder="Explain what needs to be corrected…"></textarea></div>
          <div style="display:flex;gap:0.5rem;justify-content:flex-end">
            <button class="btn btn-ghost" id="rv-reject-cancel">Cancel</button>
            <button class="btn btn-danger" id="rv-reject-confirm">Confirm Rejection</button>
          </div>
        </div>
      </div>
      <div class="card"><div class="ts-table-wrap">
        <table class="apple-table ts-table ts-table-tech">
          <thead>
          <tr>
            <th rowspan="2">Date</th>
            <th rowspan="2">Deployed<br>Hrs</th>
            <th rowspan="2">Standby<br>Hrs</th>
            <th rowspan="2">Country</th>
            <th rowspan="2">Customer</th>
            <th rowspan="2">EQ</th>
            <th rowspan="2">Activity</th>
            <th rowspan="2">Night<br>Shift Hrs</th>
            <th rowspan="2">Night<br>Shift OT</th>
            <th rowspan="2">OT<br>1.5×</th>
            <th rowspan="2">OT<br>2.0×</th>
            <th rowspan="2">Meal<br>Lunch</th>
            <th rowspan="2">Meal<br>Dinner</th>
            <th colspan="3">Transport Claim</th>
            <th rowspan="2">Shift<br>Allowance</th>
            <th rowspan="2">Remarks</th>
          </tr>
          <tr><th>From</th><th>To</th><th>Preapproved</th></tr>
          </thead>
          <tbody>${ts.entries.map(e=>reviewRowHtml(e)).join('')}</tbody>
        </table>
      </div></div>
    </div></body></html>`);
  doc.close();

  // Bind override handlers from the parent context (manager/admin full override)
  const numeric = ['workHrs','sbHrs','nightHrs','nightOtHrs','mealLunch','mealDinner'];
  doc.querySelectorAll('[data-e]').forEach(inp=>{
    inp.onchange = () => {
      const e = ts.entries.find(x=>x.id===parseInt(inp.dataset.e));
      if (!e) return;
      const f = inp.dataset.f;
      e[f] = numeric.includes(f) ? (parseFloat(inp.value)||0) : inp.value;
      recalcTs(ts);
      // refresh OT cells + header totals in the review tab
      ts.entries.forEach(x=>{
        const c15 = doc.getElementById(`rv-ot15-${x.id}`), c20 = doc.getElementById(`rv-ot20-${x.id}`);
        if (c15) c15.textContent = x.ot15>0?fmt(x.ot15)+'h':'–';
        if (c20) c20.textContent = x.ot20>0?fmt(x.ot20)+'h':'–';
      });
      const tt = reviewTotals(ts);
      doc.getElementById('rv-t-dep').textContent = fmt(tt.dep)+'h';
      doc.getElementById('rv-t-sb').textContent  = fmt(tt.sb)+'h';
      doc.getElementById('rv-t-15').textContent  = fmt(tt.o15)+'h';
      doc.getElementById('rv-t-20').textContent  = fmt(tt.o20)+'h';
    };
  });

  const setStatus = (status) => {
    const pill = doc.getElementById('rv-status');
    pill.className = `pill pill-${status}`;
    pill.innerHTML = `<span class="pill-dot dot-${status}"></span>${status}`;
    if (page==='approvals') reloadApl();
  };
  doc.getElementById('rv-approve').onclick = () => {
    ts.status='approved'; ts.approvedAt=new Date().toISOString().slice(0,10); ts.approvedBy=me.id;
    setStatus('approved');
    win.close();
    toast(`${u?.name} — timesheet approved ✅`,'success');
  };
  doc.getElementById('rv-reject').onclick = () => { doc.getElementById('rv-reject-box').style.display='block'; };
  doc.getElementById('rv-reject-cancel').onclick = () => { doc.getElementById('rv-reject-box').style.display='none'; };
  doc.getElementById('rv-reject-confirm').onclick = () => {
    const comment = doc.getElementById('rv-reject-comment').value.trim();
    if (!comment) { win.alert('Please enter a rejection reason.'); return; }
    ts.status='rejected'; ts.rejectionComment=comment; ts.approvedBy=me.id;
    setStatus('rejected');
    win.close();
    toast(`${u?.name} — timesheet rejected.`,'info');
  };
}

// ═══════════════════════════════════════════════
// ANALYTICS
// ═══════════════════════════════════════════════
function renderAnalytics(el) {
  el.innerHTML = `
    <div class="sec-header">
      <div class="sec-title"><h1>Analytics</h1><p>OT clocked — by country, employee and customer</p></div>
      <div class="sec-actions">
        <select class="f-select" id="an-m" onchange="anMonthChanged()">
          <option value="">All Months</option>
          ${MONTHS.map((m,i)=>`<option value="${i+1}" ${i+1===tsMonth?'selected':''}>${m}</option>`).join('')}
        </select>
        <select class="f-select" id="an-y" onchange="redrawAnalytics()">
          ${[2024,2025,2026,2027].map(y=>`<option value="${y}" ${y===tsYear?'selected':''}>${y}</option>`).join('')}
        </select>
        <select class="f-select" id="an-w" onchange="redrawAnalytics()"></select>
        <button class="btn btn-ghost" onclick="window.print()">Export PDF</button>
      </div>
    </div>
    <div id="an-body"></div>
  `;
  anMonthChanged();
}

// Week-of-month for a date string (W1 = 1st–7th, W2 = 8th–14th, …)
function weekOfMonth(dateStr) {
  const day = parseInt(dateStr.slice(8,10), 10);
  return Math.ceil(day / 7);
}

function anMonthChanged() {
  const mF = parseInt($('an-m')?.value)||null;
  const wSel = $('an-w');
  if (!mF) {
    wSel.innerHTML = '<option value="">All Weeks</option>';
    wSel.style.display = 'none';
  } else {
    wSel.style.display = '';
    const yF = parseInt($('an-y')?.value)||tsYear;
    const daysInMonth = new Date(yF, mF, 0).getDate();
    const nWeeks = Math.ceil(daysInMonth / 7);
    let opts = '<option value="">All Weeks</option>';
    for (let w=1; w<=nWeeks; w++) {
      const from = (w-1)*7+1, to = Math.min(w*7, daysInMonth);
      opts += `<option value="${w}">Week ${w} (${from}–${to})</option>`;
    }
    wSel.innerHTML = opts;
  }
  redrawAnalytics();
}

function redrawAnalytics() {
  const mF=parseInt($('an-m')?.value)||null;
  const yF=parseInt($('an-y')?.value)||null;
  const wF=parseInt($('an-w')?.value)||null;
  let all=Store.timesheets.filter(t=>t.status!=='draft');
  // Managers: only their assigned employees
  if (me.role==='manager') { const team=teamUsers().map(u=>u.id); all=all.filter(t=>team.includes(t.userId)); }
  if (mF) all=all.filter(t=>t.month===mF);
  if (yF) all=all.filter(t=>t.year===yF);
  let entries=all.flatMap(t=>t.entries.map(e=>({...e,userId:t.userId})));
  if (mF && wF) entries = entries.filter(e=>e.date && weekOfMonth(e.date)===wF);

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
  const wLbl = (mF && wF) ? ` · Week ${wF}` : '';

  $('an-body').innerHTML = `
    <div class="stats-row" style="margin-bottom:1.5rem">
      <div class="stat-card"><div class="stat-accent acc-orange"></div><div class="stat-chip chip-orange">⚡</div><div class="stat-num">${fmt(tot15)}<span style="font-size:1rem;font-weight:500">h</span></div><div class="stat-lbl">Total OT 1.5×${wLbl}</div></div>
      <div class="stat-card"><div class="stat-accent acc-red"></div><div class="stat-chip chip-red">🔴</div><div class="stat-num">${fmt(tot20)}<span style="font-size:1rem;font-weight:500">h</span></div><div class="stat-lbl">Total OT 2.0×${wLbl}</div></div>
      <div class="stat-card"><div class="stat-accent acc-blue"></div><div class="stat-chip chip-blue">📊</div><div class="stat-num">${fmt(tot15+tot20)}<span style="font-size:1rem;font-weight:500">h</span></div><div class="stat-lbl">Combined OT${wLbl}</div></div>
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
        <div class="card-head"><h3>By Customer</h3></div>
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
          <thead><tr><th>Employee</th><th>Team</th><th>OT 1.5× Hrs</th><th>OT 2.0× Hrs</th><th>Total OT</th></tr></thead>
          <tbody>${Object.entries(byEmp).sort((a,b)=>(b[1].ot15+b[1].ot20)-(a[1].ot15+a[1].ot20)).map(([nm,v])=>{
            const u=Store.users.find(x=>x.name===nm);
            return `<tr>
              <td><strong>${nm}</strong></td>
              <td class="td-muted">${u?.team||'–'}</td>
              <td><span class="ot-tag ot-tag-15">${fmt(v.ot15)}h</span></td>
              <td><span class="ot-tag ot-tag-20">${fmt(v.ot20)}h</span></td>
              <td><strong>${fmt(v.ot15+v.ot20)}h</strong></td>
            </tr>`;
          }).join('')||'<tr><td colspan="5" class="td-muted" style="text-align:center;padding:1.5rem">No data</td></tr>'}</tbody>
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
            <div class="f-group"><label>User Level</label>
              <select id="nu-role">
                <option value="tech">Level 1 · Tech</option>
                <option value="manager">Level 2 · Manager</option>
                <option value="assistant">Level 3 · Admin Assistant</option>
                <option value="admin">Level 4 · Administrator</option>
              </select>
            </div>
            <div class="f-group"><label>Team</label>
              <select id="nu-team"><option value="">None</option>${Store.teams.map(t=>`<option value="${t}">${t}</option>`).join('')}</select>
            </div>
          </div>
          <div class="f-group"><label>Assigned Managers (for Level 1)</label>
            <div id="nu-mgrs" style="display:flex;flex-wrap:wrap;gap:0.4rem 1rem;padding:0.5rem 0.2rem">
              ${Store.users.filter(u=>u.role==='manager').map(m=>`<label style="display:inline-flex;align-items:center;gap:0.35rem;font-size:0.85rem;cursor:pointer"><input type="checkbox" class="nu-mgr-cb" value="${m.id}"> ${m.name}</label>`).join('')}
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
          <table class="apple-table"><thead><tr><th>ID</th><th>Name</th><th>Username</th><th>User Level</th><th>Team</th><th>Assigned Managers</th><th>Status</th><th>Actions</th></tr></thead>
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
    const mgrs = Store.users.filter(x=>x.role==='manager');
    return `<tr>
      <td class="td-muted" style="font-size:0.8rem">${u.empId||u.id}</td>
      <td><strong>${u.name}</strong></td>
      <td class="td-muted">${u.username}</td>
      <td>
        <select class="inline-select" onchange="updateRole(${u.id},this.value)">
          <option value="tech" ${u.role==='tech'?'selected':''}>Level 1 · Tech</option>
          <option value="manager" ${u.role==='manager'?'selected':''}>Level 2 · Manager</option>
          <option value="assistant" ${u.role==='assistant'?'selected':''}>Level 3 · Admin Asst</option>
          <option value="admin" ${u.role==='admin'?'selected':''}>Level 4 · Administrator</option>
        </select>
      </td>
      <td>
        <select class="inline-select" onchange="updateTeam(${u.id},this.value)">
          <option value="">–</option>
          ${Store.teams.map(t=>`<option value="${t}" ${u.team===t?'selected':''}>${t}</option>`).join('')}
        </select>
      </td>
      <td>${u.role==='tech'
        ? mgrs.map(m=>`<label style="display:inline-flex;align-items:center;gap:0.25rem;font-size:0.75rem;margin-right:0.6rem;cursor:pointer;white-space:nowrap">
            <input type="checkbox" ${(u.managerIds||[]).includes(m.id)?'checked':''} onchange="toggleUserMgr(${u.id},${m.id},this.checked)"> ${m.name.split(' ')[0]}</label>`).join('')
        : '<span class="td-muted" style="font-size:0.78rem">–</span>'}</td>
      <td><span class="pill ${u.active?'pill-approved':'pill-rejected'}">${u.active?'Active':'Inactive'}</span></td>
      <td style="white-space:nowrap">
        <button class="btn btn-sm btn-ghost" onclick="resetPassword(${u.id})">Reset PW</button>
        <button class="btn btn-sm ${u.active?'btn-danger':'btn-success'}" onclick="toggleUser(${u.id})">${u.active?'Deactivate':'Activate'}</button>
      </td>
    </tr>`;
  }).join('');
}
function updateRole(id,r){ const u=Store.users.find(x=>x.id===id); if(u){ u.role=r; toast(`${u.name} → ${roleLabel(r)}`,'success'); $('utbody').innerHTML=usersBody(); } }
function updateTeam(id,t){ const u=Store.users.find(x=>x.id===id); if(u){ u.team=t||null; toast(`Team updated`,'success'); } }
function toggleUserMgr(id, mgrId, on){
  const u=Store.users.find(x=>x.id===id); if(!u) return;
  if (!Array.isArray(u.managerIds)) u.managerIds=[];
  if (on) { if(!u.managerIds.includes(mgrId)) u.managerIds.push(mgrId); }
  else { u.managerIds=u.managerIds.filter(m=>m!==mgrId); }
  const mgr=userBy(mgrId);
  toast(`${u.name} ${on?'assigned to':'removed from'} ${mgr?.name}`,'success');
}
function resetPassword(id){
  const u=Store.users.find(x=>x.id===id); if(!u) return;
  const np = prompt(`New password for ${u.name}:`, u.empId||u.username);
  if (np===null) return;
  if (!np.trim()) { toast('Password cannot be empty.','error'); return; }
  u.password = np.trim();
  toast(`Password reset for ${u.name} 🔑`,'success');
}
function toggleUser(id){ const u=Store.users.find(x=>x.id===id); if(u){ u.active=!u.active; toast(`User ${u.active?'activated':'deactivated'}`,'info'); $('utbody').innerHTML=usersBody(); } }
function saveUser(){
  const name=$('nu-name').value.trim(), uname=$('nu-user').value.trim(), pass=$('nu-pass').value.trim();
  const role=$('nu-role').value, team=$('nu-team').value;
  const mgrIds=[...document.querySelectorAll('.nu-mgr-cb:checked')].map(cb=>parseInt(cb.value));
  if(!name||!uname||!pass){ toast('Fill all fields.','error'); return; }
  if(Store.users.some(u=>u.username===uname)){ toast('Username taken.','error'); return; }
  Store.users.push({id:Store.nextId.user++,empId:uname,name,username:uname,password:pass,role,team:team||null,managerIds:role==='tech'?mgrIds:[],active:true});
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

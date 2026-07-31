/* ============================================================
   SURAKSHA NEPAL — Citizen ⇄ Government Platform
   Prototype build. Single-file logic, mock data, no backend.

   This file contains the React component tree. It is loaded by
   index.html, which supplies React, ReactDOM, Babel, Tailwind,
   lucide-react and recharts via CDN <script> tags.
   ============================================================ */

const { useState, useEffect, useRef } = React;
const {
  Siren, MapPin, FileText, Cloud, Wind, ShieldAlert, Home, User, Bell,
  Search, Users, Heart, GraduationCap, Wheat, Briefcase, FileCheck,
  LayoutDashboard, Map as MapIcon, Phone, Camera, Mic, QrCode, Award,
  Globe, Moon, Sun, ChevronRight, Plus, CheckCircle2, Clock, AlertTriangle,
  Ambulance, Flame, Building2, Landmark, TrendingUp, LogOut, Menu, X,
  ShieldCheck, Droplets, Navigation, Star, Camera as CameraIcon, ChevronLeft,
  Fingerprint, Mail, KeyRound, UserRound, Stethoscope, Bus, Wallet,
  BarChart3, Eye, Send, PhoneCall, Zap
} = LucideReact;
const {
  ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, LineChart,
  Line, PieChart, Pie, Cell, CartesianGrid, AreaChart, Area
} = Recharts;

const RED = "#E53935";
const BLUE = "#1E3A8A";

const T = {
  en: {
    tagline: "One Nation. One Platform. Every Citizen Connected.",
    sos: "Emergency SOS",
    sosHold: "Press and hold for 2 seconds to alert responders",
    home: "Home", complaints: "Complaints", disaster: "Disaster",
    documents: "Documents", dashboard: "Dashboard", services: "Services",
    login: "Login", welcome: "Welcome back",
  },
  np: {
    tagline: "एक राष्ट्र। एक प्लेटफर्म। हरेक नागरिक जोडिएको।",
    sos: "आपतकालीन SOS",
    sosHold: "प्रतिक्रियाकर्तालाई सूचित गर्न २ सेकेन्ड थिच्नुहोस्",
    home: "गृह", complaints: "उजुरी", disaster: "विपद्",
    documents: "कागजात", dashboard: "ड्यासबोर्ड", services: "सेवाहरू",
    login: "लगइन", welcome: "फेरि स्वागत छ",
  },
};

const roles = [
  { id: "citizen", label: "Citizen", icon: UserRound },
  { id: "officer", label: "Govt. Officer", icon: Landmark },
  { id: "police", label: "Police", icon: ShieldCheck },
  { id: "hospital", label: "Hospital", icon: Stethoscope },
  { id: "fire", label: "Fire Brigade", icon: Flame },
  { id: "municipality", label: "Municipality", icon: Building2 },
  { id: "admin", label: "Admin Portal", icon: KeyRound },
];

const quickServices = [
  { icon: FileCheck, label: "Documents", view: "documents", color: BLUE },
  { icon: ShieldAlert, label: "Complaints", view: "complaints", color: RED },
  { icon: Ambulance, label: "Health", view: "health", color: "#059669" },
  { icon: GraduationCap, label: "Education", view: "education", color: "#7C3AED" },
  { icon: Wheat, label: "Agriculture", view: "agriculture", color: "#CA8A04" },
  { icon: Briefcase, label: "Employment", view: "employment", color: "#0891B2" },
  { icon: Heart, label: "Women's Safety", view: "women", color: "#DB2777" },
  { icon: Users, label: "Missing Persons", view: "missing", color: "#475569" },
  { icon: Bus, label: "Transport", view: "transport", color: "#EA580C" },
  { icon: Wallet, label: "Payments", view: "payments", color: "#16A34A" },
  { icon: BarChart3, label: "Transparency", view: "transparency", color: "#4338CA" },
  { icon: MapIcon, label: "Smart Map", view: "map", color: "#0D9488" },
];

const alerts = [
  { id: 1, type: "Flood", severity: "high", place: "Bardiya District", time: "12 min ago", icon: Droplets, color: "#2563EB" },
  { id: 2, type: "Landslide", severity: "medium", place: "Sindhupalchok", time: "1 hr ago", icon: AlertTriangle, color: "#CA8A04" },
  { id: 3, type: "Earthquake", severity: "low", place: "Gorkha (M 3.2)", time: "3 hr ago", icon: Zap, color: "#059669" },
  { id: 4, type: "Air Quality", severity: "medium", place: "Kathmandu Valley", time: "Today", icon: Wind, color: "#CA8A04" },
];

const complaintsSeed = [
  { id: "CMP-58213", title: "Broken streetlight near Ratna Park", dept: "Municipality", status: "In Progress", date: "Jul 28", priority: "Medium" },
  { id: "CMP-58190", title: "Illegal waste dumping in Bagmati", dept: "Environment", status: "Under Review", date: "Jul 25", priority: "High" },
  { id: "CMP-58104", title: "Water supply disruption, Ward 9", dept: "Water Supply", status: "Resolved", date: "Jul 18", priority: "High" },
  { id: "CMP-58022", title: "Pothole causing accidents, Ring Road", dept: "Roads", status: "Submitted", date: "Jul 30", priority: "High" },
];

const deptData = [
  { dept: "Roads", complaints: 412 }, { dept: "Water", complaints: 268 },
  { dept: "Health", complaints: 190 }, { dept: "Municipality", complaints: 356 },
  { dept: "Electricity", complaints: 145 }, { dept: "Environment", complaints: 203 },
];

const trendData = [
  { month: "Feb", filed: 320, resolved: 260 }, { month: "Mar", filed: 380, resolved: 310 },
  { month: "Apr", filed: 340, resolved: 300 }, { month: "May", filed: 410, resolved: 350 },
  { month: "Jun", filed: 460, resolved: 400 }, { month: "Jul", filed: 505, resolved: 430 },
];

const resolutionPie = [
  { name: "Resolved", value: 68, color: "#059669" },
  { name: "In Progress", value: 20, color: RED },
  { name: "Pending", value: 12, color: "#94A3B8" },
];

const documents = [
  { name: "Citizenship Certificate", verified: true, icon: FileCheck },
  { name: "Passport", verified: true, icon: FileCheck },
  { name: "Driving License", verified: true, icon: FileCheck },
  { name: "PAN Card", verified: false, icon: FileCheck },
  { name: "Voter ID", verified: true, icon: FileCheck },
  { name: "Birth Certificate", verified: true, icon: FileCheck },
];

function cx(...a) { return a.filter(Boolean).join(" "); }

/* ---------- Glass Card primitive ---------- */
function GlassCard({ children, className = "", dark }) {
  return (
    <div
      className={cx(
        "rounded-3xl border backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.08)]",
        dark ? "bg-white/[0.06] border-white/10" : "bg-white/70 border-white/60",
        className
      )}
    >
      {children}
    </div>
  );
}

function Badge({ children, tone = "neutral" }) {
  const tones = {
    high: "bg-red-100 text-red-700 border-red-200",
    medium: "bg-amber-100 text-amber-700 border-amber-200",
    low: "bg-emerald-100 text-emerald-700 border-emerald-200",
    neutral: "bg-slate-100 text-slate-600 border-slate-200",
    blue: "bg-blue-100 text-blue-700 border-blue-200",
  };
  return (
    <span className={cx("px-2.5 py-1 rounded-full text-[11px] font-semibold border", tones[tone])}>
      {children}
    </span>
  );
}

function statusTone(s) {
  if (s === "Resolved") return "low";
  if (s === "In Progress") return "medium";
  if (s === "Under Review") return "blue";
  return "neutral";
}

/* ============================================================
   LOGIN SCREEN
   ============================================================ */
function LoginScreen({ onLogin, lang, setLang, dark, setDark }) {
  const [role, setRole] = useState("citizen");
  const [method, setMethod] = useState("phone");

  return (
    <div className={cx("min-h-screen flex flex-col relative overflow-hidden", dark ? "bg-[#0B1120]" : "bg-gradient-to-br from-[#FEF2F2] via-white to-[#EFF4FF]")}>
      {/* ambient shapes */}
      <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full opacity-20 blur-3xl" style={{ background: RED }} />
      <div className="absolute -bottom-40 -right-24 w-[28rem] h-[28rem] rounded-full opacity-20 blur-3xl" style={{ background: BLUE }} />

      <div className="relative z-10 flex justify-between items-center px-6 py-5 md:px-12">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg" style={{ background: `linear-gradient(135deg, ${RED}, ${BLUE})` }}>सु</div>
          <div>
            <p className={cx("font-bold text-sm tracking-tight", dark ? "text-white" : "text-slate-900")}>Suraksha Nepal</p>
            <p className="text-[10px] text-slate-500 -mt-0.5">सुरक्षा नेपाल</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button onClick={() => setLang(lang === "en" ? "np" : "en")} className={cx("flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-semibold border", dark ? "border-white/20 text-white" : "border-slate-200 text-slate-700 bg-white/60")}>
            <Globe size={13} /> {lang === "en" ? "EN" : "NP"}
          </button>
          <button onClick={() => setDark(!dark)} className={cx("p-2 rounded-full border", dark ? "border-white/20 text-white" : "border-slate-200 text-slate-700 bg-white/60")}>
            {dark ? <Sun size={14} /> : <Moon size={14} />}
          </button>
        </div>
      </div>

      <div className="relative z-10 flex-1 flex flex-col md:flex-row items-center justify-center gap-10 px-6 pb-12 md:px-16">
        {/* left copy */}
        <div className="max-w-md text-center md:text-left">
          <span className="inline-block mb-4 px-3 py-1 rounded-full text-[11px] font-bold border" style={{ color: RED, borderColor: "#FCA5A5", background: "#FEF2F2" }}>🇳🇵 GOVERNMENT OF NEPAL · CITIZEN PLATFORM</span>
          <h1 className={cx("text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.05]", dark ? "text-white" : "text-slate-900")} style={{ fontFamily: "Poppins, sans-serif" }}>
            Every emergency,<br /> every service, <span style={{ color: RED }}>one tap</span> away.
          </h1>
          <p className={cx("mt-4 text-base leading-relaxed", dark ? "text-slate-300" : "text-slate-600")}>{T[lang].tagline}</p>
          <div className="mt-8 flex gap-6 justify-center md:justify-start">
            {[["4.2M+", "Citizens Served"], ["77", "Districts Live"], ["<90s", "Avg. SOS Response"]].map(([n, l]) => (
              <div key={l}>
                <p className="text-2xl font-extrabold" style={{ color: BLUE }}>{n}</p>
                <p className={cx("text-xs mt-0.5", dark ? "text-slate-400" : "text-slate-500")}>{l}</p>
              </div>
            ))}
          </div>
        </div>

        {/* login card */}
        <GlassCard dark={dark} className="w-full max-w-sm p-6 md:p-7">
          <h2 className={cx("text-lg font-bold", dark ? "text-white" : "text-slate-900")}>{T[lang].welcome}</h2>
          <p className={cx("text-xs mb-4", dark ? "text-slate-400" : "text-slate-500")}>Sign in to continue to your portal</p>

          <div className="grid grid-cols-2 gap-2 mb-4">
            {roles.map((r) => (
              <button key={r.id} onClick={() => setRole(r.id)}
                className={cx("flex items-center gap-2 px-3 py-2.5 rounded-xl border text-xs font-semibold transition-all",
                  role === r.id ? "text-white shadow-md" : dark ? "border-white/10 text-slate-300 hover:bg-white/5" : "border-slate-200 text-slate-600 hover:bg-slate-50")}
                style={role === r.id ? { background: `linear-gradient(135deg, ${RED}, ${BLUE})`, borderColor: "transparent" } : {}}>
                <r.icon size={14} /> {r.label}
              </button>
            ))}
          </div>

          <div className={cx("flex rounded-xl p-1 mb-4", dark ? "bg-white/5" : "bg-slate-100")}>
            {[["phone", "OTP", Phone], ["email", "Email", Mail], ["google", "Google", Globe]].map(([id, label, Ic]) => (
              <button key={id} onClick={() => setMethod(id)}
                className={cx("flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg text-xs font-semibold transition-all",
                  method === id ? "bg-white shadow text-slate-900" : "text-slate-500")}>
                <Ic size={13} /> {label}
              </button>
            ))}
          </div>

          {method !== "google" ? (
            <div className="space-y-3">
              <input placeholder={method === "phone" ? "+977 98XXXXXXXX" : "you@example.com"}
                className={cx("w-full px-4 py-3 rounded-xl border text-sm outline-none focus:ring-2", dark ? "bg-white/5 border-white/10 text-white placeholder-slate-500 focus:ring-blue-400/30" : "bg-white border-slate-200 text-slate-800 focus:ring-blue-200")} />
              <button onClick={() => onLogin(role)} className="w-full py-3 rounded-xl text-white font-semibold text-sm shadow-lg hover:opacity-90 transition-all" style={{ background: `linear-gradient(135deg, ${RED}, ${BLUE})` }}>
                Send OTP & Continue
              </button>
            </div>
          ) : (
            <button onClick={() => onLogin(role)} className={cx("w-full py-3 rounded-xl font-semibold text-sm border flex items-center justify-center gap-2", dark ? "border-white/20 text-white" : "border-slate-200 text-slate-700 bg-white")}>
              <Globe size={16} /> Continue with Google
            </button>
          )}

          <div className="flex items-center gap-2 mt-4 justify-center">
            <Fingerprint size={13} className="text-slate-400" />
            <p className="text-[11px] text-slate-400">Biometric login ready · AES-256 encrypted</p>
          </div>
        </GlassCard>
      </div>
    </div>
  );
}

/* ============================================================
   SOS OVERLAY
   ============================================================ */
function SosOverlay({ onClose }) {
  const [stage, setStage] = useState("sending"); // sending -> sent
  useEffect(() => { const t = setTimeout(() => setStage("sent"), 1600); return () => clearTimeout(t); }, []);
  return (
    <div className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-sm flex items-center justify-center p-6">
      <div className="bg-white rounded-3xl w-full max-w-sm p-7 text-center relative shadow-2xl">
        <button onClick={onClose} className="absolute top-4 right-4 text-slate-400 hover:text-slate-600"><X size={20} /></button>
        <div className="relative w-24 h-24 mx-auto mb-5">
          <div className="absolute inset-0 rounded-full animate-ping opacity-30" style={{ background: RED }} />
          <div className="absolute inset-2 rounded-full animate-ping opacity-40 [animation-delay:200ms]" style={{ background: RED }} />
          <div className="relative w-24 h-24 rounded-full flex items-center justify-center text-white shadow-xl" style={{ background: RED }}>
            <Siren size={38} />
          </div>
        </div>
        {stage === "sending" ? (
          <>
            <h3 className="text-lg font-bold text-slate-900">Sending your alert…</h3>
            <p className="text-sm text-slate-500 mt-1">Sharing GPS location, medical info & photo</p>
          </>
        ) : (
          <>
            <h3 className="text-lg font-bold text-emerald-600">Help is on the way</h3>
            <p className="text-sm text-slate-500 mt-1 mb-4">Nearest police & hospital notified · ETA 8–12 min</p>
            <div className="space-y-2 text-left">
              {[["Nepal Police, Ward 9", ShieldCheck], ["Bir Hospital Ambulance", Ambulance], ["Emergency Contact: Sita R.", Phone]].map(([l, Ic], i) => (
                <div key={i} className="flex items-center gap-3 bg-slate-50 rounded-xl px-3 py-2.5">
                  <Ic size={16} className="text-emerald-600" /><span className="text-xs font-semibold text-slate-700">{l}</span>
                  <CheckCircle2 size={14} className="ml-auto text-emerald-500" />
                </div>
              ))}
            </div>
          </>
        )}
        <button onClick={onClose} className="mt-5 w-full py-3 rounded-xl font-semibold text-sm text-white" style={{ background: BLUE }}>
          {stage === "sending" ? "Cancel Alert" : "Close"}
        </button>
      </div>
    </div>
  );
}

function SosButton({ onTrigger, size = "lg" }) {
  const [holding, setHolding] = useState(false);
  const [progress, setProgress] = useState(0);
  const ref = useRef(null);
  useEffect(() => {
    if (!holding) { setProgress(0); return; }
    const start = Date.now();
    ref.current = setInterval(() => {
      const p = Math.min(100, ((Date.now() - start) / 2000) * 100);
      setProgress(p);
      if (p >= 100) { clearInterval(ref.current); setHolding(false); onTrigger(); }
    }, 30);
    return () => clearInterval(ref.current);
  }, [holding]);

  const dim = size === "lg" ? 168 : 96;
  return (
    <div className="flex flex-col items-center select-none">
      <button
        onMouseDown={() => setHolding(true)} onMouseUp={() => setHolding(false)} onMouseLeave={() => setHolding(false)}
        onTouchStart={() => setHolding(true)} onTouchEnd={() => setHolding(false)}
        style={{ width: dim, height: dim }}
        className="relative rounded-full flex items-center justify-center text-white shadow-2xl active:scale-95 transition-transform"
      >
        <span className="absolute inset-0 rounded-full animate-ping opacity-20" style={{ background: RED }} />
        <svg className="absolute inset-0 -rotate-90" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="46" fill="none" stroke="#FCA5A5" strokeWidth="4" />
          <circle cx="50" cy="50" r="46" fill="none" stroke="#fff" strokeWidth="4"
            strokeDasharray={2 * Math.PI * 46} strokeDashoffset={2 * Math.PI * 46 * (1 - progress / 100)} strokeLinecap="round" />
        </svg>
        <div className="absolute inset-2 rounded-full flex flex-col items-center justify-center" style={{ background: `radial-gradient(circle at 35% 30%, #FF5A54, ${RED})` }}>
          <Siren size={size === "lg" ? 40 : 24} />
          <span className={cx("font-extrabold mt-1", size === "lg" ? "text-base" : "text-[10px]")}>SOS</span>
        </div>
      </button>
      {size === "lg" && <p className="text-xs text-slate-500 mt-3 text-center max-w-[180px]">{T.en.sosHold}</p>}
    </div>
  );
}

/* ============================================================
   SHARED SHELL (Sidebar / Topbar / Bottom nav)
   ============================================================ */
const navItems = [
  { id: "home", label: "Home", icon: Home },
  { id: "complaints", label: "Complaints", icon: ShieldAlert },
  { id: "disaster", label: "Disaster", icon: AlertTriangle },
  { id: "documents", label: "Documents", icon: FileCheck },
  { id: "dashboard", label: "My Dashboard", icon: LayoutDashboard },
  { id: "govdashboard", label: "Gov Analytics", icon: BarChart3 },
];

function Shell({ view, setView, dark, setDark, lang, setLang, role, onLogout, onSos, children }) {
  const [mobileNav, setMobileNav] = useState(false);
  return (
    <div className={cx("min-h-screen flex", dark ? "bg-[#0B1120] text-white" : "bg-[#F8FAFC] text-slate-900")}>
      {/* Sidebar (desktop) */}
      <aside className={cx("hidden md:flex flex-col w-64 shrink-0 border-r px-4 py-6", dark ? "border-white/10 bg-[#0D1424]" : "border-slate-200 bg-white")}>
        <div className="flex items-center gap-2 px-2 mb-8">
          <div className="w-9 h-9 rounded-xl flex items-center justify-center text-white font-bold text-sm shadow" style={{ background: `linear-gradient(135deg, ${RED}, ${BLUE})` }}>सु</div>
          <div>
            <p className="font-bold text-sm leading-tight">Suraksha Nepal</p>
            <p className="text-[10px] text-slate-400 capitalize">{role} portal</p>
          </div>
        </div>
        <nav className="flex-1 space-y-1">
          {navItems.map((n) => (
            <button key={n.id} onClick={() => setView(n.id)}
              className={cx("w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all",
                view === n.id ? "text-white shadow-md" : dark ? "text-slate-300 hover:bg-white/5" : "text-slate-600 hover:bg-slate-100")}
              style={view === n.id ? { background: `linear-gradient(135deg, ${RED}, ${BLUE})` } : {}}>
              <n.icon size={17} /> {n.label}
            </button>
          ))}
        </nav>
        <button onClick={() => setDark(!dark)} className={cx("flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium mb-1", dark ? "text-slate-300 hover:bg-white/5" : "text-slate-600 hover:bg-slate-100")}>
          {dark ? <Sun size={17} /> : <Moon size={17} />} {dark ? "Light Mode" : "Dark Mode"}
        </button>
        <button onClick={onLogout} className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-red-500 hover:bg-red-50">
          <LogOut size={17} /> Log out
        </button>
      </aside>

      <div className="flex-1 flex flex-col min-w-0">
        {/* Topbar */}
        <header className={cx("flex items-center justify-between gap-3 px-4 md:px-8 py-4 border-b sticky top-0 z-30 backdrop-blur-xl", dark ? "border-white/10 bg-[#0B1120]/80" : "border-slate-200 bg-white/80")}>
          <button className="md:hidden" onClick={() => setMobileNav(true)}><Menu size={22} /></button>
          <div className={cx("hidden sm:flex items-center gap-2 px-3 py-2 rounded-xl flex-1 max-w-md", dark ? "bg-white/5" : "bg-slate-100")}>
            <Search size={15} className="text-slate-400" />
            <input placeholder="Search services, complaints, documents…" className="bg-transparent outline-none text-sm w-full placeholder-slate-400" />
          </div>
          <div className="flex items-center gap-2 md:gap-3 ml-auto">
            <button onClick={() => setLang(lang === "en" ? "np" : "en")} className={cx("flex items-center gap-1 px-2.5 py-1.5 rounded-full text-xs font-semibold border", dark ? "border-white/20" : "border-slate-200")}>
              <Globe size={13} /> {lang === "en" ? "EN" : "NP"}
            </button>
            <button className="relative p-2"><Bell size={18} /><span className="absolute top-1 right-1 w-2 h-2 rounded-full" style={{ background: RED }} /></button>
            <button onClick={onSos} className="hidden sm:flex items-center gap-1.5 px-3 py-2 rounded-full text-white text-xs font-bold shadow" style={{ background: RED }}>
              <Siren size={14} /> SOS
            </button>
            <div className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold" style={{ background: BLUE }}>RK</div>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto pb-24 md:pb-8">{children}</main>
      </div>

      {/* Mobile bottom nav */}
      <div className={cx("md:hidden fixed bottom-0 inset-x-0 z-30 border-t backdrop-blur-xl flex items-center justify-around py-2", dark ? "border-white/10 bg-[#0B1120]/90" : "border-slate-200 bg-white/90")}>
        {navItems.slice(0, 4).map((n) => (
          <button key={n.id} onClick={() => setView(n.id)} className="flex flex-col items-center gap-0.5 px-2 py-1">
            <n.icon size={19} color={view === n.id ? RED : "#94A3B8"} />
            <span className={cx("text-[10px] font-medium", view === n.id ? "text-red-500" : "text-slate-400")}>{n.label}</span>
          </button>
        ))}
        <button onClick={onSos} className="w-11 h-11 -mt-6 rounded-full flex items-center justify-center text-white shadow-lg" style={{ background: RED }}>
          <Siren size={20} />
        </button>
      </div>

      {mobileNav && (
        <div className="fixed inset-0 z-40 bg-black/50 md:hidden" onClick={() => setMobileNav(false)}>
          <div className={cx("w-64 h-full p-5", dark ? "bg-[#0D1424]" : "bg-white")} onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setMobileNav(false)} className="mb-6"><X size={20} /></button>
            {navItems.map((n) => (
              <button key={n.id} onClick={() => { setView(n.id); setMobileNav(false); }} className="w-full flex items-center gap-3 px-3 py-3 rounded-xl text-sm font-medium mb-1">
                <n.icon size={17} /> {n.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

/* ============================================================
   HOME VIEW
   ============================================================ */
function HomeView({ dark, setView, onSos }) {
  return (
    <div className="px-4 md:px-8 pt-6 space-y-6 max-w-7xl mx-auto">
      {/* Hero */}
      <GlassCard dark={dark} className="p-6 md:p-10 relative overflow-hidden">
        <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full opacity-10 blur-3xl" style={{ background: RED }} />
        <div className="relative flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1">
            <Badge tone="high">🔴 Live · 3 active advisories</Badge>
            <h1 className="text-2xl md:text-3xl font-extrabold mt-3 tracking-tight" style={{ fontFamily: "Poppins, sans-serif" }}>
              Namaste, Rita 🙏 <br className="hidden md:block" /> How can we help you today?
            </h1>
            <p className={cx("text-sm mt-2 max-w-md", dark ? "text-slate-400" : "text-slate-500")}>Real-time alerts, government services and emergency response — all from one place.</p>
            <div className="flex gap-3 mt-5">
              <button onClick={() => setView("complaints")} className="px-4 py-2.5 rounded-xl text-white text-sm font-semibold shadow" style={{ background: BLUE }}>File a Complaint</button>
              <button onClick={() => setView("disaster")} className={cx("px-4 py-2.5 rounded-xl text-sm font-semibold border", dark ? "border-white/20" : "border-slate-200")}>View Alerts</button>
            </div>
          </div>
          <SosButton onTrigger={onSos} />
        </div>
      </GlassCard>

      {/* Condition strip */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {[
          { l: "Weather, Kathmandu", v: "28°C · Partly Cloudy", icon: Cloud, c: "#2563EB" },
          { l: "Air Quality Index", v: "162 · Unhealthy", icon: Wind, c: "#CA8A04" },
          { l: "Road Conditions", v: "3 closures nearby", icon: Navigation, c: RED },
          { l: "Flood Watch", v: "Bardiya · High risk", icon: Droplets, c: "#2563EB" },
        ].map((c, i) => (
          <GlassCard dark={dark} key={i} className="p-4">
            <c.icon size={18} style={{ color: c.c }} />
            <p className="text-xs text-slate-400 mt-2">{c.l}</p>
            <p className="text-sm font-bold mt-0.5">{c.v}</p>
          </GlassCard>
        ))}
      </div>

      {/* Quick services */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-base font-bold">Quick Services</h2>
          <button className="text-xs font-semibold flex items-center gap-1" style={{ color: BLUE }}>View all <ChevronRight size={13} /></button>
        </div>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
          {quickServices.map((s, i) => (
            <button key={i} onClick={() => setView(s.view === "documents" || s.view === "complaints" || s.view === "disaster" ? s.view : "home")}
              className={cx("flex flex-col items-center gap-2 p-3 rounded-2xl border transition-all hover:-translate-y-0.5", dark ? "border-white/10 bg-white/[0.03] hover:bg-white/[0.06]" : "border-slate-100 bg-white hover:shadow-md")}>
              <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: `${s.color}1A` }}>
                <s.icon size={18} style={{ color: s.color }} />
              </div>
              <span className="text-[11px] font-semibold text-center leading-tight">{s.label}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-5">
        {/* Alerts feed */}
        <GlassCard dark={dark} className="p-5 md:col-span-2">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-bold flex items-center gap-2"><AlertTriangle size={15} style={{ color: RED }} /> Latest Disaster Alerts</h3>
            <Badge tone="high">Live</Badge>
          </div>
          <div className="space-y-2.5">
            {alerts.map((a) => (
              <div key={a.id} className={cx("flex items-center gap-3 p-3 rounded-xl", dark ? "bg-white/[0.03]" : "bg-slate-50")}>
                <div className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0" style={{ background: `${a.color}1A` }}>
                  <a.icon size={16} style={{ color: a.color }} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold">{a.type} — {a.place}</p>
                  <p className="text-xs text-slate-400">{a.time}</p>
                </div>
                <Badge tone={a.severity}>{a.severity}</Badge>
              </div>
            ))}
          </div>
        </GlassCard>

        {/* Stats */}
        <GlassCard dark={dark} className="p-5">
          <h3 className="text-sm font-bold mb-3 flex items-center gap-2"><TrendingUp size={15} style={{ color: BLUE }} /> Citizen Statistics</h3>
          <div className="space-y-3">
            {[["Complaints resolved today", "1,204"], ["Active SOS responders", "312"], ["Documents verified", "48,902"], ["Volunteers online", "926"]].map(([l, v]) => (
              <div key={l} className="flex items-center justify-between">
                <span className="text-xs text-slate-400">{l}</span>
                <span className="text-sm font-extrabold" style={{ color: BLUE }}>{v}</span>
              </div>
            ))}
          </div>
        </GlassCard>
      </div>

      {/* News + notices */}
      <div className="grid md:grid-cols-2 gap-5">
        <GlassCard dark={dark} className="p-5">
          <h3 className="text-sm font-bold mb-3">Government Notices</h3>
          {["New PAN registration portal launched for small businesses", "Scholarship applications open for 2026 academic session", "Monsoon safety guidelines issued for 12 districts"].map((n, i) => (
            <div key={i} className="flex items-start gap-2 py-2 border-b last:border-0 border-slate-100/10">
              <Landmark size={13} className="mt-0.5 text-slate-400 shrink-0" />
              <p className="text-xs leading-relaxed">{n}</p>
            </div>
          ))}
        </GlassCard>
        <GlassCard dark={dark} className="p-5">
          <h3 className="text-sm font-bold mb-3">News Feed</h3>
          {["Kathmandu-Terai expressway 60% complete, officials say", "Nepal's digital ID enrollment crosses 10 million citizens", "Nationwide vaccination drive begins next week"].map((n, i) => (
            <div key={i} className="flex items-start gap-2 py-2 border-b last:border-0 border-slate-100/10">
              <FileText size={13} className="mt-0.5 text-slate-400 shrink-0" />
              <p className="text-xs leading-relaxed">{n}</p>
            </div>
          ))}
        </GlassCard>
      </div>
    </div>
  );
}

/* ============================================================
   COMPLAINTS VIEW
   ============================================================ */
function ComplaintsView({ dark }) {
  const [showForm, setShowForm] = useState(false);
  const [filed, setFiled] = useState(complaintsSeed);
  const steps = ["Submitted", "Under Review", "In Progress", "Resolved"];

  return (
    <div className="px-4 md:px-8 pt-6 max-w-6xl mx-auto space-y-5">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-extrabold">Citizen Complaints Portal</h1>
          <p className="text-xs text-slate-400 mt-0.5">Track, submit and follow up on civic issues</p>
        </div>
        <button onClick={() => setShowForm(!showForm)} className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-white text-sm font-semibold shadow" style={{ background: RED }}>
          <Plus size={15} /> New Complaint
        </button>
      </div>

      {showForm && (
        <GlassCard dark={dark} className="p-5 space-y-3">
          <input placeholder="Complaint title" className={cx("w-full px-4 py-3 rounded-xl border text-sm outline-none", dark ? "bg-white/5 border-white/10" : "bg-white border-slate-200")} />
          <textarea placeholder="Describe the issue…" rows={3} className={cx("w-full px-4 py-3 rounded-xl border text-sm outline-none resize-none", dark ? "bg-white/5 border-white/10" : "bg-white border-slate-200")} />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            <select className={cx("px-3 py-2.5 rounded-xl border text-xs", dark ? "bg-white/5 border-white/10" : "bg-white border-slate-200")}>
              <option>Roads</option><option>Water Supply</option><option>Electricity</option><option>Municipality</option><option>Environment</option>
            </select>
            <select className={cx("px-3 py-2.5 rounded-xl border text-xs", dark ? "bg-white/5 border-white/10" : "bg-white border-slate-200")}>
              <option>Low Priority</option><option>Medium Priority</option><option>High Priority</option>
            </select>
            <button className={cx("flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl border text-xs font-semibold", dark ? "border-white/10" : "border-slate-200")}><Camera size={13} /> Add Photo</button>
            <label className="flex items-center gap-1.5 px-3 py-2.5 text-xs">
              <input type="checkbox" /> Submit anonymously
            </label>
          </div>
          <button onClick={() => { setFiled([{ id: `CMP-${Math.floor(Math.random()*90000+10000)}`, title: "New civic issue report", dept: "Municipality", status: "Submitted", date: "Today", priority: "Medium" }, ...filed]); setShowForm(false); }}
            className="px-5 py-2.5 rounded-xl text-white text-sm font-semibold" style={{ background: BLUE }}>
            Submit Complaint
          </button>
        </GlassCard>
      )}

      <div className="space-y-3">
        {filed.map((c) => (
          <GlassCard dark={dark} key={c.id} className="p-4 md:p-5">
            <div className="flex flex-wrap items-start justify-between gap-2">
              <div>
                <p className="text-[11px] font-mono text-slate-400">{c.id}</p>
                <p className="text-sm font-bold mt-0.5">{c.title}</p>
                <p className="text-xs text-slate-400 mt-1">{c.dept} · Filed {c.date}</p>
              </div>
              <div className="flex gap-2">
                <Badge tone={c.priority === "High" ? "high" : c.priority === "Medium" ? "medium" : "low"}>{c.priority}</Badge>
                <Badge tone={statusTone(c.status)}>{c.status}</Badge>
              </div>
            </div>
            {/* timeline */}
            <div className="flex items-center mt-4">
              {steps.map((s, i) => {
                const active = steps.indexOf(c.status) >= i;
                return (
                  <React.Fragment key={s}>
                    <div className="flex flex-col items-center gap-1">
                      <div className={cx("w-5 h-5 rounded-full flex items-center justify-center", active ? "text-white" : dark ? "bg-white/10" : "bg-slate-200")}
                        style={active ? { background: BLUE } : {}}>
                        {active && <CheckCircle2 size={12} />}
                      </div>
                      <span className="text-[9px] text-slate-400 hidden sm:block">{s}</span>
                    </div>
                    {i < steps.length - 1 && <div className={cx("flex-1 h-0.5 mx-1", steps.indexOf(c.status) > i ? "" : dark ? "bg-white/10" : "bg-slate-200")} style={steps.indexOf(c.status) > i ? { background: BLUE } : {}} />}
                  </React.Fragment>
                );
              })}
            </div>
          </GlassCard>
        ))}
      </div>
    </div>
  );
}

/* ============================================================
   DISASTER VIEW
   ============================================================ */
function DisasterView({ dark }) {
  const shelters = [
    { name: "Tundikhel Relief Camp", cap: "820 / 1000", dist: "1.2 km" },
    { name: "Ward 9 Community Hall", cap: "140 / 200", dist: "2.4 km" },
    { name: "Shanti Higher Secondary School", cap: "310 / 500", dist: "3.7 km" },
  ];
  return (
    <div className="px-4 md:px-8 pt-6 max-w-6xl mx-auto space-y-5">
      <h1 className="text-xl font-extrabold">Disaster Management Center</h1>
      <div className="grid md:grid-cols-3 gap-5">
        <GlassCard dark={dark} className="p-5 md:col-span-2">
          <h3 className="text-sm font-bold mb-3">Active Alerts</h3>
          <div className="space-y-2.5">
            {alerts.map((a) => (
              <div key={a.id} className={cx("flex items-center gap-3 p-3 rounded-xl", dark ? "bg-white/[0.03]" : "bg-slate-50")}>
                <div className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0" style={{ background: `${a.color}1A` }}><a.icon size={16} style={{ color: a.color }} /></div>
                <div className="flex-1"><p className="text-sm font-semibold">{a.type} — {a.place}</p><p className="text-xs text-slate-400">{a.time}</p></div>
                <button className="text-xs font-semibold px-3 py-1.5 rounded-lg border" style={{ borderColor: BLUE, color: BLUE }}>Safe Route</button>
              </div>
            ))}
          </div>
          <div className={cx("mt-4 rounded-2xl h-56 flex items-center justify-center border-2 border-dashed", dark ? "border-white/10" : "border-slate-200")}>
            <div className="text-center">
              <MapIcon size={28} className="mx-auto text-slate-400" />
              <p className="text-xs text-slate-400 mt-2">Live disaster map — hospitals, shelters, flood zones</p>
            </div>
          </div>
        </GlassCard>
        <GlassCard dark={dark} className="p-5">
          <h3 className="text-sm font-bold mb-3">Nearby Shelters</h3>
          <div className="space-y-2.5">
            {shelters.map((s) => (
              <div key={s.name} className={cx("p-3 rounded-xl", dark ? "bg-white/[0.03]" : "bg-slate-50")}>
                <p className="text-xs font-bold">{s.name}</p>
                <div className="flex justify-between mt-1"><span className="text-[11px] text-slate-400">Capacity {s.cap}</span><span className="text-[11px] font-semibold" style={{ color: BLUE }}>{s.dist}</span></div>
              </div>
            ))}
          </div>
          <button className="w-full mt-4 py-2.5 rounded-xl text-white text-xs font-bold" style={{ background: RED }}>Request Volunteer Support</button>
        </GlassCard>
      </div>
    </div>
  );
}

/* ============================================================
   DOCUMENTS VIEW
   ============================================================ */
function DocumentsView({ dark }) {
  return (
    <div className="px-4 md:px-8 pt-6 max-w-6xl mx-auto space-y-5">
      <h1 className="text-xl font-extrabold">Digital Document Vault</h1>
      <p className="text-xs text-slate-400">AES-256 encrypted · QR verifiable · Government issued</p>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        {documents.map((d) => (
          <GlassCard dark={dark} key={d.name} className="p-5">
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: `${BLUE}1A` }}><d.icon size={18} style={{ color: BLUE }} /></div>
              {d.verified ? <Badge tone="low">Verified</Badge> : <Badge tone="medium">Pending</Badge>}
            </div>
            <p className="text-sm font-bold mt-3">{d.name}</p>
            <p className="text-[11px] text-slate-400 mt-0.5">Issued · Govt. of Nepal</p>
            <div className="flex items-center justify-between mt-4">
              <button className="text-xs font-semibold flex items-center gap-1" style={{ color: BLUE }}><Eye size={13} /> View</button>
              <QrCode size={20} className="text-slate-400" />
            </div>
          </GlassCard>
        ))}
      </div>
    </div>
  );
}

/* ============================================================
   CITIZEN DASHBOARD
   ============================================================ */
function CitizenDashboard({ dark }) {
  return (
    <div className="px-4 md:px-8 pt-6 max-w-6xl mx-auto space-y-5">
      <GlassCard dark={dark} className="p-6 flex flex-col md:flex-row items-center gap-5">
        <div className="w-20 h-20 rounded-full flex items-center justify-center text-white text-2xl font-bold" style={{ background: `linear-gradient(135deg, ${RED}, ${BLUE})` }}>RK</div>
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-lg font-bold">Rita Karki</h2>
          <p className="text-xs text-slate-400">Citizenship No. 24-01-77-XXXXX · Kathmandu-9</p>
          <div className="flex gap-2 mt-2 justify-center md:justify-start">
            <Badge tone="low">Verified Citizen</Badge>
            <Badge tone="blue">Level 4 Contributor</Badge>
          </div>
        </div>
        <div className="text-center">
          <p className="text-2xl font-extrabold" style={{ color: RED }}>1,240</p>
          <p className="text-[11px] text-slate-400">Reward Points</p>
        </div>
      </GlassCard>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {[["Complaints Filed", "12", ShieldAlert], ["SOS Used", "1", Siren], ["Volunteer Hours", "38", Users], ["Badges Earned", "6", Award]].map(([l, v, Ic]) => (
          <GlassCard dark={dark} key={l} className="p-4">
            <Ic size={17} style={{ color: BLUE }} />
            <p className="text-xl font-extrabold mt-2">{v}</p>
            <p className="text-[11px] text-slate-400">{l}</p>
          </GlassCard>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        <GlassCard dark={dark} className="p-5">
          <h3 className="text-sm font-bold mb-3">Activity Timeline</h3>
          {[
            ["Complaint CMP-58213 moved to In Progress", "2h ago", ShieldAlert],
            ["Earned badge: Community Guardian", "1d ago", Award],
            ["Document verified: Driving License", "3d ago", FileCheck],
            ["Volunteered at Ward 9 flood relief", "1w ago", Heart],
          ].map(([t, time, Ic], i) => (
            <div key={i} className="flex items-start gap-3 py-2.5 border-b last:border-0 border-slate-100/10">
              <Ic size={14} className="mt-0.5" style={{ color: BLUE }} />
              <div className="flex-1"><p className="text-xs font-semibold">{t}</p><p className="text-[10px] text-slate-400">{time}</p></div>
            </div>
          ))}
        </GlassCard>
        <GlassCard dark={dark} className="p-5">
          <h3 className="text-sm font-bold mb-3">Achievement Badges</h3>
          <div className="grid grid-cols-3 gap-3">
            {["Guardian", "First Responder", "Volunteer", "Verified", "Reporter", "Streak 30"].map((b, i) => (
              <div key={b} className="flex flex-col items-center gap-1.5">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center" style={{ background: `linear-gradient(135deg, ${RED}22, ${BLUE}22)` }}>
                  <Star size={18} style={{ color: i % 2 ? BLUE : RED }} />
                </div>
                <span className="text-[9px] text-center text-slate-400 leading-tight">{b}</span>
              </div>
            ))}
          </div>
        </GlassCard>
      </div>
    </div>
  );
}

/* ============================================================
   GOVERNMENT DASHBOARD
   ============================================================ */
function GovDashboard({ dark }) {
  const axisColor = dark ? "#94A3B8" : "#64748B";
  return (
    <div className="px-4 md:px-8 pt-6 max-w-6xl mx-auto space-y-5">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-extrabold">Government Analytics</h1>
        <Badge tone="blue">Ministry of Home Affairs</Badge>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {[["Total Complaints", "2,140", "+12%"], ["Active SOS", "38", "live"], ["Avg. Resolution", "4.2 days", "-8%"], ["Citizen Satisfaction", "86%", "+3%"]].map(([l, v, d]) => (
          <GlassCard dark={dark} key={l} className="p-4">
            <p className="text-[11px] text-slate-400">{l}</p>
            <p className="text-xl font-extrabold mt-1">{v}</p>
            <p className="text-[10px] font-semibold mt-0.5" style={{ color: d.startsWith("+") ? "#059669" : d === "live" ? RED : "#059669" }}>{d}</p>
          </GlassCard>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        <GlassCard dark={dark} className="p-5">
          <h3 className="text-sm font-bold mb-4">Complaints by Department</h3>
          <ResponsiveContainer width="100%" height={220}>
            <BarChart data={deptData}>
              <CartesianGrid strokeDasharray="3 3" stroke={dark ? "#ffffff10" : "#e2e8f0"} vertical={false} />
              <XAxis dataKey="dept" tick={{ fontSize: 10, fill: axisColor }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fontSize: 10, fill: axisColor }} axisLine={false} tickLine={false} />
              <Tooltip contentStyle={{ fontSize: 12, borderRadius: 10 }} />
              <Bar dataKey="complaints" fill={BLUE} radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </GlassCard>
        <GlassCard dark={dark} className="p-5">
          <h3 className="text-sm font-bold mb-4">Filed vs Resolved (6 mo)</h3>
          <ResponsiveContainer width="100%" height={220}>
            <AreaChart data={trendData}>
              <CartesianGrid strokeDasharray="3 3" stroke={dark ? "#ffffff10" : "#e2e8f0"} vertical={false} />
              <XAxis dataKey="month" tick={{ fontSize: 10, fill: axisColor }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fontSize: 10, fill: axisColor }} axisLine={false} tickLine={false} />
              <Tooltip contentStyle={{ fontSize: 12, borderRadius: 10 }} />
              <Area type="monotone" dataKey="filed" stroke={RED} fill={`${RED}22`} strokeWidth={2} />
              <Area type="monotone" dataKey="resolved" stroke={BLUE} fill={`${BLUE}22`} strokeWidth={2} />
            </AreaChart>
          </ResponsiveContainer>
        </GlassCard>
      </div>

      <div className="grid md:grid-cols-3 gap-5">
        <GlassCard dark={dark} className="p-5">
          <h3 className="text-sm font-bold mb-4">Resolution Rate</h3>
          <ResponsiveContainer width="100%" height={180}>
            <PieChart>
              <Pie data={resolutionPie} dataKey="value" innerRadius={45} outerRadius={70} paddingAngle={3}>
                {resolutionPie.map((e, i) => <Cell key={i} fill={e.color} />)}
              </Pie>
              <Tooltip contentStyle={{ fontSize: 12, borderRadius: 10 }} />
            </PieChart>
          </ResponsiveContainer>
          <div className="flex flex-wrap gap-3 justify-center mt-2">
            {resolutionPie.map((e) => (
              <div key={e.name} className="flex items-center gap-1.5 text-[11px]"><span className="w-2 h-2 rounded-full" style={{ background: e.color }} />{e.name}</div>
            ))}
          </div>
        </GlassCard>

        <GlassCard dark={dark} className="p-5 md:col-span-2">
          <h3 className="text-sm font-bold mb-3">Complaint Management</h3>
          <div className="space-y-2 max-h-56 overflow-y-auto pr-1">
            {complaintsSeed.map((c) => (
              <div key={c.id} className={cx("flex items-center justify-between p-2.5 rounded-xl", dark ? "bg-white/[0.03]" : "bg-slate-50")}>
                <div className="min-w-0">
                  <p className="text-xs font-semibold truncate">{c.title}</p>
                  <p className="text-[10px] text-slate-400">{c.id} · {c.dept}</p>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <Badge tone={statusTone(c.status)}>{c.status}</Badge>
                  <button className="text-[11px] font-semibold" style={{ color: BLUE }}>Assign</button>
                </div>
              </div>
            ))}
          </div>
        </GlassCard>
      </div>
    </div>
  );
}

/* ============================================================
   ROOT APP
   ============================================================ */
function App() {
  const [authed, setAuthed] = useState(false);
  const [role, setRole] = useState("citizen");
  const [view, setView] = useState("home");
  const [dark, setDark] = useState(false);
  const [lang, setLang] = useState("en");
  const [sosOpen, setSosOpen] = useState(false);

  if (!authed) {
    return <LoginScreen onLogin={(r) => { setRole(r); setAuthed(true); }} lang={lang} setLang={setLang} dark={dark} setDark={setDark} />;
  }

  return (
    <div className={dark ? "dark" : ""} style={{ fontFamily: "Inter, sans-serif" }}>
      <Shell view={view} setView={setView} dark={dark} setDark={setDark} lang={lang} setLang={setLang} role={role}
        onLogout={() => setAuthed(false)} onSos={() => setSosOpen(true)}>
        {view === "home" && <HomeView dark={dark} setView={setView} onSos={() => setSosOpen(true)} />}
        {view === "complaints" && <ComplaintsView dark={dark} />}
        {view === "disaster" && <DisasterView dark={dark} />}
        {view === "documents" && <DocumentsView dark={dark} />}
        {view === "dashboard" && <CitizenDashboard dark={dark} />}
        {view === "govdashboard" && <GovDashboard dark={dark} />}
      </Shell>
      {sosOpen && <SosOverlay onClose={() => setSosOpen(false)} />}
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

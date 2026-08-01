const { useState, useEffect } = React;

function EmojiIcon({ emoji, size = 16, className, style }) {
  return (
    <span
      aria-hidden="true"
      className={className}
      style={{ ...style, fontSize: `${size}px`, lineHeight: 1 }}
    >
      {emoji}
    </span>
  );
}

const icons = {
  AlertTriangle: (props) => <EmojiIcon emoji="⚠️" {...props} />,
  Ambulance: (props) => <EmojiIcon emoji="🚑" {...props} />,
  ArrowRight: (props) => <EmojiIcon emoji="→" {...props} />,
  BarChart3: (props) => <EmojiIcon emoji="📊" {...props} />,
  Bell: (props) => <EmojiIcon emoji="🔔" {...props} />,
  Briefcase: (props) => <EmojiIcon emoji="💼" {...props} />,
  Building2: (props) => <EmojiIcon emoji="🏢" {...props} />,
  Camera: (props) => <EmojiIcon emoji="📷" {...props} />,
  CheckCircle2: (props) => <EmojiIcon emoji="✅" {...props} />,
  ChevronRight: (props) => <EmojiIcon emoji="›" {...props} />,
  CircleDashed: (props) => <EmojiIcon emoji="◌" {...props} />,
  Clock: (props) => <EmojiIcon emoji="🕒" {...props} />,
  Cloud: (props) => <EmojiIcon emoji="☁️" {...props} />,
  Droplets: (props) => <EmojiIcon emoji="💧" {...props} />,
  FileText: (props) => <EmojiIcon emoji="📄" {...props} />,
  Flame: (props) => <EmojiIcon emoji="🔥" {...props} />,
  Globe: (props) => <EmojiIcon emoji="🌐" {...props} />,
  Heart: (props) => <EmojiIcon emoji="❤️" {...props} />,
  Home: (props) => <EmojiIcon emoji="🏠" {...props} />,
  KeyRound: (props) => <EmojiIcon emoji="🔑" {...props} />,
  Landmark: (props) => <EmojiIcon emoji="🏛️" {...props} />,
  LayoutDashboard: (props) => <EmojiIcon emoji="📱" {...props} />,
  LogOut: (props) => <EmojiIcon emoji="↩️" {...props} />,
  Mail: (props) => <EmojiIcon emoji="✉️" {...props} />,
  MapPin: (props) => <EmojiIcon emoji="📍" {...props} />,
  Menu: (props) => <EmojiIcon emoji="☰" {...props} />,
  Mic: (props) => <EmojiIcon emoji="🎤" {...props} />,
  Moon: (props) => <EmojiIcon emoji="🌙" {...props} />,
  Navigation: (props) => <EmojiIcon emoji="🧭" {...props} />,
  Phone: (props) => <EmojiIcon emoji="📞" {...props} />,
  Plus: (props) => <EmojiIcon emoji="＋" {...props} />,
  QrCode: (props) => <EmojiIcon emoji="📱" {...props} />,
  Search: (props) => <EmojiIcon emoji="🔎" {...props} />,
  ShieldAlert: (props) => <EmojiIcon emoji="🛡️" {...props} />,
  ShieldCheck: (props) => <EmojiIcon emoji="✅" {...props} />,
  Siren: (props) => <EmojiIcon emoji="🚨" {...props} />,
  Star: (props) => <EmojiIcon emoji="⭐" {...props} />,
  Stethoscope: (props) => <EmojiIcon emoji="🩺" {...props} />,
  Sun: (props) => <EmojiIcon emoji="☀️" {...props} />,
  TrendingUp: (props) => <EmojiIcon emoji="📈" {...props} />,
  User: (props) => <EmojiIcon emoji="👤" {...props} />,
  Users: (props) => <EmojiIcon emoji="👥" {...props} />,
  Wallet: (props) => <EmojiIcon emoji="💳" {...props} />,
  Wheat: (props) => <EmojiIcon emoji="🌾" {...props} />,
  Wind: (props) => <EmojiIcon emoji="🌬️" {...props} />,
  X: (props) => <EmojiIcon emoji="✕" {...props} />,
  Zap: (props) => <EmojiIcon emoji="⚡" {...props} />,
  Eye: (props) => <EmojiIcon emoji="👁️" {...props} />,
  Fingerprint: (props) => <EmojiIcon emoji="👆" {...props} />,
  GraduationCap: (props) => <EmojiIcon emoji="🎓" {...props} />,
  Send: (props) => <EmojiIcon emoji="📤" {...props} />,
  UserRound: (props) => <EmojiIcon emoji="👤" {...props} />,
  CheckSquare2: (props) => <EmojiIcon emoji="☑️" {...props} />,
  Map: (props) => <EmojiIcon emoji="🗺️" {...props} />
};

const {
  AlertTriangle,
  Ambulance,
  ArrowRight,
  BarChart3,
  Bell,
  Briefcase,
  Building2,
  Camera,
  CheckCircle2,
  ChevronRight,
  CircleDashed,
  Clock,
  Cloud,
  Droplets,
  FileText,
  Flame,
  Globe,
  Heart,
  Home,
  KeyRound,
  Landmark,
  LayoutDashboard,
  LogOut,
  Mail,
  MapPin,
  Menu,
  Mic,
  Moon,
  Navigation,
  Phone,
  Plus,
  QrCode,
  Search,
  ShieldAlert,
  ShieldCheck,
  Siren,
  Star,
  Stethoscope,
  Sun,
  TrendingUp,
  User,
  Users,
  Wallet,
  Wheat,
  Wind,
  X,
  Zap,
  Eye,
  Fingerprint,
  GraduationCap,
  Send,
  UserRound,
  CheckSquare2,
  Map
} = icons;

const MapIcon = Map;

const RED = "#DC143C";
const BLUE = "#003893";

const authorityOptions = [
  { id: "citizen", label: "Citizen", icon: UserRound },
  { id: "police", label: "Police", icon: ShieldCheck },
  { id: "municipality", label: "Municipality", icon: Building2 },
  { id: "hospital", label: "Hospital", icon: Stethoscope },
  { id: "admin", label: "Administrator", icon: KeyRound }
];

const featureCards = [
  {
    title: "Report Nepal",
    description: "Submit incidents, track live status and route them to the right department.",
    icon: ShieldAlert,
    accent: RED
  },
  {
    title: "Hospital Live Info",
    description: "View real-time bed availability, ICU, ambulances and emergency contacts.",
    icon: Stethoscope,
    accent: BLUE
  },
  {
    title: "Employment Portal",
    description: "Post jobs, apply for roles and verify payments with a secure workflow.",
    icon: Briefcase,
    accent: "#0F766E"
  },
  {
    title: "SOS Emergency",
    description: "Free, instant emergency alerts with live location sharing and responders.",
    icon: Siren,
    accent: "#D97706"
  }
];

const upcomingFeatures = [
  "Disaster Early Warning System",
  "Missing Person Tracking",
  "Lost & Found Portal",
  "Traffic Live Updates",
  "Citizen Rewards Program",
  "Blood Donation Network",
  "AI Virtual Assistant",
  "Public Transport Tracking"
];

const hospitals = [
  { name: "Bir Hospital", district: "Kathmandu", beds: 24, icu: 8, ambulances: 6, status: "Open", emergency: true },
  { name: "Bheri Hospital", district: "Nepalgunj", beds: 18, icu: 4, ambulances: 4, status: "Busy", emergency: true },
  { name: "Dhulikhel Hospital", district: "Kavre", beds: 31, icu: 9, ambulances: 5, status: "Open", emergency: false }
];

const jobPosts = [
  { title: "Field Officer", company: "Ministry of Health", salary: "Rs. 45,000", deadline: "Sep 18" },
  { title: "Data Analyst", company: "Municipal IT Cell", salary: "Rs. 60,000", deadline: "Sep 22" },
  { title: "Emergency Dispatcher", company: "National Emergency Center", salary: "Rs. 38,000", deadline: "Sep 15" }
];

function cx(...items) {
  return items.filter(Boolean).join(" ");
}

function Badge({ children, tone = "neutral" }) {
  const tones = {
    high: "bg-red-100 text-red-700 border-red-200",
    medium: "bg-amber-100 text-amber-700 border-amber-200",
    low: "bg-emerald-100 text-emerald-700 border-emerald-200",
    neutral: "bg-slate-100 text-slate-600 border-slate-200",
    blue: "bg-blue-100 text-blue-700 border-blue-200"
  };
  return <span className={cx("border px-2.5 py-1 rounded-full text-[11px] font-semibold", tones[tone])}>{children}</span>;
}

function GlassCard({ children, className = "", dark }) {
  return (
    <div className={cx(
      "rounded-[28px] border backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.08)]",
      dark ? "bg-white/10 border-white/10" : "bg-white/80 border-white/70",
      className
    )}>
      {children}
    </div>
  );
}

function SplashScreen({ onFinish }) {
  useEffect(() => {
    const timer = setTimeout(onFinish, 3200);
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className="min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#fff5f5] via-white to-[#eef4ff]">
      <div className="absolute inset-0">
        <div className="absolute top-[-120px] left-[-120px] h-64 w-64 rounded-full bg-[#DC143C] opacity-20 blur-3xl" />
        <div className="absolute bottom-[-140px] right-[-120px] h-72 w-72 rounded-full bg-[#003893] opacity-20 blur-3xl" />
      </div>
      <div className="relative z-10 flex flex-col items-center text-center px-6">
        <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-[30px] text-3xl font-black text-white shadow-2xl" style={{ background: `linear-gradient(135deg, ${RED}, ${BLUE})` }}>
          सु
        </div>
        <div className="mb-4 h-2 w-48 overflow-hidden rounded-full bg-slate-200">
          <div className="h-full rounded-full" style={{ width: "100%", background: `linear-gradient(90deg, ${RED}, ${BLUE})`, animation: "loadingPulse 2.4s ease-in-out infinite" }} />
        </div>
        <h1 className="text-4xl font-black tracking-[0.2em] text-slate-900 sm:text-5xl" style={{ fontFamily: "Poppins, sans-serif" }}>
          SURAKSHYA NEPAL
        </h1>
        <p className="mt-3 text-lg font-semibold text-slate-600">Your Safety, Our Priority</p>
        <p className="mt-2 max-w-md text-sm text-slate-500">Connecting citizens with hospitals, emergency support, public services and employment in one secure platform.</p>
      </div>
    </div>
  );
}

function AuthScreen({ onLogin, dark, setDark, lang, setLang }) {
  const [mode, setMode] = useState("choice");
  const [step, setStep] = useState(1);
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [role, setRole] = useState("citizen");
  const [mobile, setMobile] = useState("");

  const updateOtp = (index, value) => {
    const next = [...otp];
    next[index] = value.slice(-1);
    setOtp(next);
  };

  const handleContinue = () => {
    if (mode === "choice") {
      setMode("signup");
    } else if (mode === "signup") {
      setMode("otp");
    } else if (mode === "otp") {
      setMode("form");
    } else if (mode === "login") {
      onLogin(role);
    }
  };

  const handleAuthorityLogin = (selectedRole) => {
    setRole(selectedRole);
    onLogin(selectedRole);
  };

  return (
    <div className={cx("min-h-screen overflow-hidden", dark ? "bg-[#071119] text-white" : "bg-gradient-to-br from-[#fff7f7] via-white to-[#eef5ff] text-slate-900")}> 
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 left-[-80px] h-60 w-60 rounded-full opacity-20 blur-3xl" style={{ background: RED }} />
        <div className="absolute bottom-[-120px] right-[-80px] h-72 w-72 rounded-full opacity-20 blur-3xl" style={{ background: BLUE }} />
      </div>
      <div className="relative z-10 flex min-h-screen flex-col">
        <header className="flex items-center justify-between px-5 py-5 sm:px-8">
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl text-lg font-black text-white shadow-lg" style={{ background: `linear-gradient(135deg, ${RED}, ${BLUE})` }}>सु</div>
            <div>
              <div className="text-sm font-bold">Suraksha Nepal</div>
              <div className="text-[10px] text-slate-500">सुरक्षा नेपाल</div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button onClick={() => setLang(lang === "en" ? "np" : "en")} className={cx("rounded-full border px-3 py-1.5 text-xs font-semibold", dark ? "border-white/20 text-white" : "border-slate-200 text-slate-700")}>{lang === "en" ? "EN" : "NP"}</button>
            <button onClick={() => setDark(!dark)} className={cx("rounded-full border p-2", dark ? "border-white/20 text-white" : "border-slate-200 text-slate-700")}>{dark ? <Sun size={15} /> : <Moon size={15} />}</button>
          </div>
        </header>

        <main className="flex flex-1 items-center justify-center px-4 pb-10 sm:px-8">
          <div className="grid w-full max-w-6xl gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <section className="flex flex-col justify-center">
              <div className="mb-4 inline-flex w-fit items-center rounded-full border border-red-200 bg-red-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-red-700">
                🇳🇵 Government of Nepal · Secure Digital Platform
              </div>
              <h1 className="text-4xl font-black leading-tight sm:text-5xl" style={{ fontFamily: "Poppins, sans-serif" }}>
                Modern government services for every citizen, every district.
              </h1>
              <p className={cx("mt-4 max-w-xl text-base leading-relaxed", dark ? "text-slate-300" : "text-slate-600")}>From emergency SOS and public reporting to hospitals, jobs and multilingual support, Suraksha Nepal brings public services into a single trusted experience.</p>
              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {[
                  ["4.2M+", "citizens served"],
                  ["77", "districts live"],
                  ["<90s", "avg. SOS response"]
                ].map(([value, label]) => (
                  <div key={label} className={cx("rounded-2xl border p-4", dark ? "border-white/10 bg-white/5" : "border-slate-200 bg-white/70")}> 
                    <div className="text-2xl font-black" style={{ color: BLUE }}>{value}</div>
                    <div className={cx("text-xs uppercase tracking-[0.2em]", dark ? "text-slate-400" : "text-slate-500")}>{label}</div>
                  </div>
                ))}
              </div>
            </section>

            <GlassCard dark={dark} className="p-6 sm:p-8">
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-black">Welcome to Suraksha Nepal</h2>
                  <p className={cx("text-sm", dark ? "text-slate-400" : "text-slate-500")}>Choose the best way to continue.</p>
                </div>
                <div className="rounded-2xl bg-slate-100 p-2 text-slate-500">
                  <ShieldCheck size={18} />
                </div>
              </div>

              {mode === "choice" && (
                <div className="space-y-3">
                  <button onClick={() => setMode("signup")} className="flex w-full items-center justify-between rounded-2xl border border-slate-200 bg-white px-4 py-4 text-left shadow-sm transition hover:-translate-y-0.5">
                    <div>
                      <div className="font-semibold">Create Account</div>
                      <div className="text-sm text-slate-500">Register with mobile, OTP and profile details.</div>
                    </div>
                    <ChevronRight size={18} />
                  </button>
                  <button onClick={() => setMode("login")} className="flex w-full items-center justify-between rounded-2xl border border-slate-200 bg-white px-4 py-4 text-left shadow-sm transition hover:-translate-y-0.5">
                    <div>
                      <div className="font-semibold">Already have an account?</div>
                      <div className="text-sm text-slate-500">Sign in with your credentials.</div>
                    </div>
                    <ChevronRight size={18} />
                  </button>
                  <div className="rounded-2xl border border-dashed border-slate-300 p-4">
                    <div className="mb-3 text-sm font-semibold">Authority Login</div>
                    <div className="grid grid-cols-2 gap-2">
                      {authorityOptions.filter((item) => item.id !== "citizen").map((item) => (
                        <button key={item.id} onClick={() => handleAuthorityLogin(item.id)} className={cx("flex items-center justify-center gap-2 rounded-xl border px-3 py-2 text-sm font-semibold", dark ? "border-white/10 bg-white/5 text-white" : "border-slate-200 bg-slate-50 text-slate-700")}> 
                          <item.icon size={14} /> {item.label}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {mode === "signup" && (
                <div className="space-y-4">
                  <div className="rounded-2xl bg-slate-50 p-4 text-sm text-slate-600">
                    Step 1 · Enter your mobile number to begin verification.
                  </div>
                  <label className="block text-sm font-semibold">Mobile Number</label>
                  <input value={mobile} onChange={(e) => setMobile(e.target.value)} placeholder="+977 98XXXXXXXX" className={cx("w-full rounded-2xl border px-4 py-3 outline-none", dark ? "border-white/10 bg-white/5 text-white placeholder-slate-500" : "border-slate-200 bg-white text-slate-900")} />
                  <button onClick={handleContinue} className="w-full rounded-2xl px-4 py-3 text-sm font-semibold text-white" style={{ background: `linear-gradient(135deg, ${RED}, ${BLUE})` }}>Continue</button>
                </div>
              )}

              {mode === "otp" && (
                <div className="space-y-4">
                  <div className="rounded-2xl bg-slate-50 p-4 text-sm text-slate-600">Step 2 · Enter the 4-digit OTP sent to {mobile || "your device"}.</div>
                  <div className="flex gap-2">
                    {otp.map((digit, index) => (
                      <input key={index} value={digit} maxLength={1} onChange={(e) => updateOtp(index, e.target.value)} className={cx("h-12 w-full rounded-2xl border text-center text-lg font-semibold", dark ? "border-white/10 bg-white/5 text-white" : "border-slate-200 bg-white text-slate-900")} />
                    ))}
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <button className="font-semibold" style={{ color: BLUE }}>Resend OTP</button>
                    <button onClick={() => setMode("form")} className="font-semibold text-red-600">Verify</button>
                  </div>
                </div>
              )}

              {mode === "form" && (
                <div className="space-y-3">
                  <div className="rounded-2xl bg-slate-50 p-4 text-sm text-slate-600">Step 3 · Complete your citizen profile and create your account.</div>
                  <input placeholder="Full Name" className={cx("w-full rounded-2xl border px-4 py-3 outline-none", dark ? "border-white/10 bg-white/5 text-white placeholder-slate-500" : "border-slate-200 bg-white text-slate-900")} />
                  <input placeholder="Permanent Address" className={cx("w-full rounded-2xl border px-4 py-3 outline-none", dark ? "border-white/10 bg-white/5 text-white placeholder-slate-500" : "border-slate-200 bg-white text-slate-900")} />
                  <div className="grid gap-3 sm:grid-cols-2">
                    <input placeholder="District" className={cx("w-full rounded-2xl border px-4 py-3 outline-none", dark ? "border-white/10 bg-white/5 text-white placeholder-slate-500" : "border-slate-200 bg-white text-slate-900")} />
                    <input placeholder="Municipality" className={cx("w-full rounded-2xl border px-4 py-3 outline-none", dark ? "border-white/10 bg-white/5 text-white placeholder-slate-500" : "border-slate-200 bg-white text-slate-900")} />
                  </div>
                  <div className="grid gap-3 sm:grid-cols-2">
                    <input placeholder="Ward Number" className={cx("w-full rounded-2xl border px-4 py-3 outline-none", dark ? "border-white/10 bg-white/5 text-white placeholder-slate-500" : "border-slate-200 bg-white text-slate-900")} />
                    <input placeholder="Email (Optional)" className={cx("w-full rounded-2xl border px-4 py-3 outline-none", dark ? "border-white/10 bg-white/5 text-white placeholder-slate-500" : "border-slate-200 bg-white text-slate-900")} />
                  </div>
                  <input placeholder="Password" type="password" className={cx("w-full rounded-2xl border px-4 py-3 outline-none", dark ? "border-white/10 bg-white/5 text-white placeholder-slate-500" : "border-slate-200 bg-white text-slate-900")} />
                  <div className="flex items-center gap-2 text-sm">
                    <input type="checkbox" />
                    <span>I agree to the Terms & Conditions</span>
                  </div>
                  <button onClick={() => onLogin(role)} className="w-full rounded-2xl px-4 py-3 text-sm font-semibold text-white" style={{ background: `linear-gradient(135deg, ${RED}, ${BLUE})` }}>Create Account</button>
                </div>
              )}

              {mode === "login" && (
                <div className="space-y-3">
                  <div className="rounded-2xl bg-slate-50 p-4 text-sm text-slate-600">Sign in with your registered mobile number and password.</div>
                  <input placeholder="Mobile Number" className={cx("w-full rounded-2xl border px-4 py-3 outline-none", dark ? "border-white/10 bg-white/5 text-white placeholder-slate-500" : "border-slate-200 bg-white text-slate-900")} />
                  <input placeholder="Password" type="password" className={cx("w-full rounded-2xl border px-4 py-3 outline-none", dark ? "border-white/10 bg-white/5 text-white placeholder-slate-500" : "border-slate-200 bg-white text-slate-900")} />
                  <button onClick={() => onLogin(role)} className="w-full rounded-2xl px-4 py-3 text-sm font-semibold text-white" style={{ background: `linear-gradient(135deg, ${RED}, ${BLUE})` }}>Continue</button>
                  <div className="flex items-center justify-between text-sm">
                    <button className="font-semibold text-blue-600">Forgot Password?</button>
                    <button onClick={() => setMode("choice")} className="font-semibold text-red-600">Back</button>
                  </div>
                </div>
              )}
            </GlassCard>
          </div>
        </main>
      </div>
    </div>
  );
}

function Shell({ view, setView, role, dark, setDark, lang, setLang, onLogout, onSos, children }) {
  const [mobileNav, setMobileNav] = useState(false);
  const navItems = [
    { id: "home", label: "Dashboard", icon: LayoutDashboard },
    { id: "reports", label: "Report Nepal", icon: ShieldAlert },
    { id: "hospitals", label: "Hospitals", icon: Stethoscope },
    { id: "employment", label: "Employment", icon: Briefcase },
    { id: "authorities", label: "Authorities", icon: Landmark }
  ];

  return (
    <div className={cx("min-h-screen flex", dark ? "bg-[#071119] text-white" : "bg-[#f8fafc] text-slate-900")}> 
      <aside className={cx("hidden w-72 shrink-0 border-r px-4 py-6 md:flex", dark ? "border-white/10 bg-[#0c1724]" : "border-slate-200 bg-white")}> 
        <div className="flex w-full flex-col">
          <div className="mb-8 flex items-center gap-2 px-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl text-sm font-black text-white shadow" style={{ background: `linear-gradient(135deg, ${RED}, ${BLUE})` }}>सु</div>
            <div>
              <div className="text-sm font-bold">Suraksha Nepal</div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-slate-400">{role} portal</div>
            </div>
          </div>
          <nav className="flex-1 space-y-1">
            {navItems.map((item) => (
              <button key={item.id} onClick={() => setView(item.id)} className={cx("flex w-full items-center gap-3 rounded-2xl px-3 py-2.5 text-sm font-medium transition", view === item.id ? "text-white shadow" : dark ? "text-slate-300 hover:bg-white/10" : "text-slate-600 hover:bg-slate-100")} style={view === item.id ? { background: `linear-gradient(135deg, ${RED}, ${BLUE})` } : {}}>
                <item.icon size={17} /> {item.label}
              </button>
            ))}
          </nav>
          <div className="space-y-2">
            <button onClick={() => setDark(!dark)} className={cx("flex w-full items-center gap-3 rounded-2xl px-3 py-2.5 text-sm font-medium", dark ? "text-slate-300 hover:bg-white/10" : "text-slate-600 hover:bg-slate-100")}> {dark ? <Sun size={17} /> : <Moon size={17} />} {dark ? "Light Mode" : "Dark Mode"}</button>
            <button onClick={onLogout} className="flex w-full items-center gap-3 rounded-2xl px-3 py-2.5 text-sm font-medium text-red-500 hover:bg-red-50"> <LogOut size={17} /> Log out</button>
          </div>
        </div>
      </aside>

      <div className="flex min-w-0 flex-1 flex-col">
        <header className={cx("sticky top-0 z-30 flex items-center justify-between border-b px-4 py-4 backdrop-blur-xl md:px-8", dark ? "border-white/10 bg-[#071119]/80" : "border-slate-200 bg-white/80")}>
          <button className="md:hidden" onClick={() => setMobileNav(true)}><Menu size={20} /></button>
          <div className={cx("hidden flex-1 items-center gap-2 rounded-2xl px-3 py-2 sm:flex", dark ? "bg-white/5" : "bg-slate-100")}> 
            <Search size={15} className="text-slate-400" />
            <input placeholder="Search reports, hospitals, jobs..." className="w-full bg-transparent text-sm outline-none placeholder-slate-400" />
          </div>
          <div className="ml-auto flex items-center gap-2 md:gap-3">
            <button onClick={() => setLang(lang === "en" ? "np" : "en")} className={cx("rounded-full border px-2.5 py-1.5 text-xs font-semibold", dark ? "border-white/20 text-white" : "border-slate-200 text-slate-700")}>{lang === "en" ? "EN" : "NP"}</button>
            <button className="relative rounded-full border p-2" style={{ borderColor: dark ? "rgba(255,255,255,0.15)" : "#e2e8f0" }}><Bell size={16} /></button>
            <button onClick={onSos} className="hidden items-center gap-1.5 rounded-full px-3 py-2 text-xs font-bold text-white sm:flex" style={{ background: RED }}><Siren size={14} /> SOS</button>
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-700 text-xs font-bold text-white">RK</div>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto pb-24 md:pb-8">{children}</main>
      </div>

      {mobileNav && (
        <div className="fixed inset-0 z-40 bg-black/50 md:hidden" onClick={() => setMobileNav(false)}>
          <div className={cx("h-full w-72 p-5", dark ? "bg-[#0c1724]" : "bg-white")} onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setMobileNav(false)} className="mb-6"><X size={20} /></button>
            {navItems.map((item) => (
              <button key={item.id} onClick={() => { setView(item.id); setMobileNav(false); }} className="mb-2 flex w-full items-center gap-3 rounded-2xl px-3 py-3 text-sm font-medium"> <item.icon size={17} /> {item.label}</button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function HomeView({ dark, setView, onSos }) {
  return (
    <div className="mx-auto max-w-7xl space-y-6 px-4 pt-6 md:px-8">
      <GlassCard dark={dark} className="relative overflow-hidden p-6 md:p-8">
        <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full opacity-20 blur-3xl" style={{ background: RED }} />
        <div className="relative flex flex-col gap-8 md:flex-row md:items-center">
          <div className="max-w-2xl">
            <Badge tone="high">🔴 Live · 3 active advisories</Badge>
            <h1 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl" style={{ fontFamily: "Poppins, sans-serif" }}>Good morning, Ram Sharma. Your safety, our priority.</h1>
            <p className={cx("mt-3 max-w-xl text-sm leading-relaxed", dark ? "text-slate-300" : "text-slate-600")}>Report issues, reach emergency responders, find hospitals and manage public services from one secure portal designed for Nepal.</p>
            <div className="mt-5 flex flex-wrap gap-3">
              <button onClick={() => setView("reports")} className="rounded-2xl px-4 py-2.5 text-sm font-semibold text-white shadow" style={{ background: `linear-gradient(135deg, ${RED}, ${BLUE})` }}>Report an Issue</button>
              <button onClick={onSos} className="rounded-2xl border border-slate-200 px-4 py-2.5 text-sm font-semibold">Trigger SOS</button>
            </div>
          </div>
          <div className="rounded-[32px] border border-white/30 bg-gradient-to-br from-[#fff5f5] to-[#eef4ff] p-6 shadow-inner">
            <div className="mb-4 flex items-center justify-between">
              <div>
                <div className="text-sm font-semibold text-slate-500">Today at a glance</div>
                <div className="text-xl font-black text-slate-900">14 active cases</div>
              </div>
              <div className="rounded-2xl p-3 text-white" style={{ background: RED }}><ShieldAlert size={18} /></div>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                ["Hospitals open", "12"],
                ["Emergency contacts", "24"],
                ["Jobs posted", "38"],
                ["Resolved today", "91%"]
              ].map(([label, value]) => (
                <div key={label} className="rounded-2xl border border-slate-200 bg-white/70 p-3">
                  <div className="text-lg font-black text-slate-900">{value}</div>
                  <div className="text-[11px] uppercase tracking-[0.2em] text-slate-500">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </GlassCard>

      <div className="grid gap-4 md:grid-cols-4">
        {[
          { label: "Weather", value: "28°C · Partly Cloudy", icon: Cloud, color: BLUE },
          { label: "Air Quality", value: "162 · Unhealthy", icon: Wind, color: RED },
          { label: "Road Conditions", value: "3 closures near you", icon: Navigation, color: "#0F766E" },
          { label: "Flood Watch", value: "Bardiya · High risk", icon: Droplets, color: "#D97706" }
        ].map((item) => (
          <GlassCard dark={dark} key={item.label} className="p-4">
            <item.icon size={18} style={{ color: item.color }} />
            <div className="mt-3 text-[11px] uppercase tracking-[0.2em] text-slate-400">{item.label}</div>
            <div className="text-sm font-semibold text-slate-800">{item.value}</div>
          </GlassCard>
        ))}
      </div>

      <section>
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-black">Core Services</h2>
          <button className="text-sm font-semibold" style={{ color: BLUE }}>Everything in one secure portal</button>
        </div>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {featureCards.map((item) => (
            <GlassCard dark={dark} key={item.title} className="p-5">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl" style={{ background: `${item.accent}20` }}>
                <item.icon size={20} style={{ color: item.accent }} />
              </div>
              <h3 className="mt-4 text-lg font-black">{item.title}</h3>
              <p className={cx("mt-2 text-sm leading-relaxed", dark ? "text-slate-300" : "text-slate-600")}>{item.description}</p>
              <button onClick={() => setView(item.title === "Report Nepal" ? "reports" : item.title === "Hospital Live Info" ? "hospitals" : item.title === "Employment Portal" ? "employment" : "home")} className="mt-4 flex items-center gap-1 text-sm font-semibold" style={{ color: BLUE }}>Discover <ChevronRight size={14} /></button>
            </GlassCard>
          ))}
        </div>
      </section>

      <section className="grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
        <GlassCard dark={dark} className="p-5">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-lg font-black">Latest Alerts</h3>
            <Badge tone="high">Live</Badge>
          </div>
          {[{ title: "Flood advisory", detail: "Bardiya district — evacuation route updated" }, { title: "Medical support", detail: "Bir Hospital · 8 ICU beds available" }, { title: "Road report", detail: "Ring Road — potholes reported near Kalanki" }].map((alert) => (
            <div key={alert.title} className={cx("flex items-start gap-3 rounded-2xl p-3", dark ? "bg-white/5" : "bg-slate-50")}> 
              <div className="rounded-xl p-2" style={{ background: `${RED}20` }}><AlertTriangle size={16} style={{ color: RED }} /></div>
              <div>
                <div className="text-sm font-semibold">{alert.title}</div>
                <div className={cx("text-sm", dark ? "text-slate-400" : "text-slate-500")}>{alert.detail}</div>
              </div>
            </div>
          ))}
        </GlassCard>

        <GlassCard dark={dark} className="p-5">
          <h3 className="text-lg font-black">Upcoming Features</h3>
          <div className="mt-4 grid gap-3">
            {upcomingFeatures.map((feature) => (
              <div key={feature} className={cx("flex items-center justify-between rounded-2xl border px-3 py-3 text-sm", dark ? "border-white/10 bg-white/5" : "border-slate-200 bg-white")}> 
                <span>{feature}</span>
                <Badge tone="medium">Coming Soon</Badge>
              </div>
            ))}
          </div>
        </GlassCard>
      </section>

      <GlassCard dark={dark} className="p-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <h3 className="text-lg font-black">Government-style footer</h3>
            <p className={cx("text-sm", dark ? "text-slate-400" : "text-slate-500")}>Emergency contacts, privacy, terms, FAQs and social channels are built into the experience.</p>
          </div>
          <div className="flex flex-wrap gap-3 text-sm font-semibold" style={{ color: BLUE }}>
            <span>Emergency Contacts</span>
            <span>Privacy Policy</span>
            <span>Terms & Conditions</span>
            <span>About Us</span>
          </div>
        </div>
      </GlassCard>
    </div>
  );
}

function ReportView({ dark }) {
  const [submitted, setSubmitted] = useState(false);
  const categories = ["Police Incident", "Crime", "Road Accident", "Garbage", "Water Supply", "Road Damage", "Electricity", "Street Lights", "Drainage", "Fire", "Natural Disaster", "Others"];

  return (
    <div className="mx-auto max-w-6xl space-y-5 px-4 pt-6 md:px-8">
      <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <h1 className="text-2xl font-black">Report Nepal</h1>
          <p className={cx("text-sm", dark ? "text-slate-400" : "text-slate-500")}>Submit high-priority civic issues, attach media and track progress in real time.</p>
        </div>
        <Badge tone="blue">Tracking ID generated after submission</Badge>
      </div>

      <GlassCard dark={dark} className="p-5">
        <div className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-4">
            <div>
              <label className="mb-2 block text-sm font-semibold">Category</label>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <span key={category} className={cx("rounded-full border px-3 py-2 text-xs font-semibold", dark ? "border-white/10 bg-white/5 text-slate-300" : "border-slate-200 bg-white text-slate-700")}>{category}</span>
                ))}
              </div>
            </div>
            <input placeholder="Title" className={cx("w-full rounded-2xl border px-4 py-3 outline-none", dark ? "border-white/10 bg-white/5 text-white placeholder-slate-500" : "border-slate-200 bg-white text-slate-900")} />
            <textarea rows={4} placeholder="Describe the issue in detail" className={cx("w-full resize-none rounded-2xl border px-4 py-3 outline-none", dark ? "border-white/10 bg-white/5 text-white placeholder-slate-500" : "border-slate-200 bg-white text-slate-900")} />
            <div className="grid gap-3 sm:grid-cols-2">
              <input placeholder="Location" className={cx("w-full rounded-2xl border px-4 py-3 outline-none", dark ? "border-white/10 bg-white/5 text-white placeholder-slate-500" : "border-slate-200 bg-white text-slate-900")} />
              <select className={cx("w-full rounded-2xl border px-4 py-3 outline-none", dark ? "border-white/10 bg-white/5 text-white" : "border-slate-200 bg-white text-slate-900")}>
                <option>High Priority</option>
                <option>Medium Priority</option>
                <option>Low Priority</option>
              </select>
            </div>
            <div className="flex flex-wrap gap-2">
              <button className={cx("flex items-center gap-2 rounded-2xl border px-3 py-2.5 text-sm font-semibold", dark ? "border-white/10 bg-white/5" : "border-slate-200 bg-white")}> <Camera size={15} /> Upload Photos</button>
              <button className={cx("flex items-center gap-2 rounded-2xl border px-3 py-2.5 text-sm font-semibold", dark ? "border-white/10 bg-white/5" : "border-slate-200 bg-white")}> <Mic size={15} /> Voice Note</button>
              <button className={cx("flex items-center gap-2 rounded-2xl border px-3 py-2.5 text-sm font-semibold", dark ? "border-white/10 bg-white/5" : "border-slate-200 bg-white")}> <CheckSquare2 size={15} /> Anonymous Report</button>
            </div>
            <button onClick={() => setSubmitted(true)} className="rounded-2xl px-4 py-3 text-sm font-semibold text-white" style={{ background: `linear-gradient(135deg, ${RED}, ${BLUE})` }}>Submit Report</button>
          </div>

          <div className="space-y-4">
            <GlassCard dark={dark} className="p-4">
              <h3 className="text-sm font-black">Report Timeline</h3>
              <div className="mt-3 space-y-3">
                {['Received','Under Review','Assigned','In Progress','Resolved'].map((step, index) => (
                  <div key={step} className="flex items-center gap-3">
                    <div className="flex h-7 w-7 items-center justify-center rounded-full" style={{ background: index === 0 ? RED : BLUE }}><CheckCircle2 size={14} className="text-white" /></div>
                    <div className="text-sm font-semibold">{step}</div>
                  </div>
                ))}
              </div>
            </GlassCard>
            {submitted && <GlassCard dark={dark} className="p-4">
              <div className="flex items-center gap-2 text-emerald-600"><CheckCircle2 size={16} /> Report submitted successfully</div>
              <div className="mt-3 text-sm font-semibold">Tracking ID: SN-742891</div>
              <div className="mt-1 text-sm text-slate-500">Authorities will update your case status shortly.</div>
            </GlassCard>}
          </div>
        </div>
      </GlassCard>
    </div>
  );
}

function HospitalsView({ dark }) {
  return (
    <div className="mx-auto max-w-7xl space-y-5 px-4 pt-6 md:px-8">
      <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <h1 className="text-2xl font-black">Hospital Live Information</h1>
          <p className={cx("text-sm", dark ? "text-slate-400" : "text-slate-500")}>Search by district, specialty and emergency readiness.</p>
        </div>
        <div className="flex gap-2">
          <select className={cx("rounded-2xl border px-3 py-2.5 text-sm", dark ? "border-white/10 bg-white/5" : "border-slate-200 bg-white")}><option>All Districts</option></select>
          <select className={cx("rounded-2xl border px-3 py-2.5 text-sm", dark ? "border-white/10 bg-white/5" : "border-slate-200 bg-white")}><option>Emergency</option></select>
        </div>
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        {hospitals.map((hospital) => (
          <GlassCard dark={dark} key={hospital.name} className="p-5">
            <div className="flex items-start justify-between gap-3">
              <div>
                <h3 className="text-lg font-black">{hospital.name}</h3>
                <p className={cx("text-sm", dark ? "text-slate-400" : "text-slate-500")}>{hospital.district}</p>
              </div>
              <Badge tone={hospital.status === "Open" ? "low" : "medium"}>{hospital.status}</Badge>
            </div>
            <div className="mt-4 grid gap-3 text-sm">
              <div className="flex items-center justify-between"><span>Available Beds</span><span className="font-semibold">{hospital.beds}</span></div>
              <div className="flex items-center justify-between"><span>ICU Beds</span><span className="font-semibold">{hospital.icu}</span></div>
              <div className="flex items-center justify-between"><span>Ambulances</span><span className="font-semibold">{hospital.ambulances}</span></div>
              <div className="flex items-center justify-between"><span>Emergency</span><span className="font-semibold">{hospital.emergency ? "Yes" : "No"}</span></div>
            </div>
            <button className="mt-4 w-full rounded-2xl px-3 py-2.5 text-sm font-semibold text-white" style={{ background: BLUE }}>View on Map</button>
          </GlassCard>
        ))}
      </div>
    </div>
  );
}

function EmploymentView({ dark }) {
  const [mode, setMode] = useState("seeker");
  return (
    <div className="mx-auto max-w-7xl space-y-5 px-4 pt-6 md:px-8">
      <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <h1 className="text-2xl font-black">Employment Portal</h1>
          <p className={cx("text-sm", dark ? "text-slate-400" : "text-slate-500")}>Find roles or post opportunities with secure verification and payments.</p>
        </div>
        <div className="flex gap-2 rounded-2xl border border-slate-200 bg-white p-1">
          <button onClick={() => setMode("seeker")} className={cx("rounded-xl px-3 py-2 text-sm font-semibold", mode === "seeker" ? "text-white" : "text-slate-600")} style={mode === "seeker" ? { background: BLUE } : {}}>Job Seeker</button>
          <button onClick={() => setMode("employer")} className={cx("rounded-xl px-3 py-2 text-sm font-semibold", mode === "employer" ? "text-white" : "text-slate-600")} style={mode === "employer" ? { background: RED } : {}}>Employer</button>
        </div>
      </div>

      {mode === "seeker" ? (
        <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
          <GlassCard dark={dark} className="p-5">
            <div className="mb-4 text-lg font-black">Create Your Profile</div>
            <div className="grid gap-3 sm:grid-cols-2">
              <input placeholder="Full Name" className={cx("w-full rounded-2xl border px-4 py-3 outline-none", dark ? "border-white/10 bg-white/5 text-white placeholder-slate-500" : "border-slate-200 bg-white text-slate-900")} />
              <input placeholder="Skills" className={cx("w-full rounded-2xl border px-4 py-3 outline-none", dark ? "border-white/10 bg-white/5 text-white placeholder-slate-500" : "border-slate-200 bg-white text-slate-900")} />
            </div>
            <textarea rows={3} placeholder="Brief description" className={cx("mt-3 w-full resize-none rounded-2xl border px-4 py-3 outline-none", dark ? "border-white/10 bg-white/5 text-white placeholder-slate-500" : "border-slate-200 bg-white text-slate-900")} />
            <div className="mt-3 flex flex-wrap gap-2">
              <button className={cx("flex items-center gap-2 rounded-2xl border px-3 py-2.5 text-sm font-semibold", dark ? "border-white/10 bg-white/5" : "border-slate-200 bg-white")}> <FileText size={15} /> Upload CV</button>
              <button className={cx("flex items-center gap-2 rounded-2xl border px-3 py-2.5 text-sm font-semibold", dark ? "border-white/10 bg-white/5" : "border-slate-200 bg-white")}> <Camera size={15} /> Upload Certificates</button>
            </div>
            <div className="mt-4 rounded-2xl border border-amber-200 bg-amber-50 p-3 text-sm text-amber-700">I agree to pay 5% of my first month's salary only after successfully getting hired.</div>
            <button className="mt-4 rounded-2xl px-4 py-3 text-sm font-semibold text-white" style={{ background: BLUE }}>Submit Application</button>
          </GlassCard>

          <GlassCard dark={dark} className="p-5">
            <div className="mb-4 text-lg font-black">Open Roles</div>
            <div className="space-y-3">
              {jobPosts.map((job) => (
                <div key={job.title} className={cx("rounded-2xl border p-3", dark ? "border-white/10 bg-white/5" : "border-slate-200 bg-white")}> 
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="font-semibold">{job.title}</div>
                      <div className="text-sm text-slate-500">{job.company}</div>
                    </div>
                    <Badge tone="blue">{job.salary}</Badge>
                  </div>
                  <div className="mt-3 flex items-center justify-between text-sm text-slate-500">
                    <span>Deadline {job.deadline}</span>
                    <button className="font-semibold" style={{ color: BLUE }}>Apply</button>
                  </div>
                </div>
              ))}
            </div>
          </GlassCard>
        </div>
      ) : (
        <GlassCard dark={dark} className="p-5">
          <div className="mb-4 text-lg font-black">Employer Dashboard</div>
          <div className="grid gap-3 md:grid-cols-2">
            <input placeholder="Company Name" className={cx("w-full rounded-2xl border px-4 py-3 outline-none", dark ? "border-white/10 bg-white/5 text-white placeholder-slate-500" : "border-slate-200 bg-white text-slate-900")} />
            <input placeholder="Contact Email" className={cx("w-full rounded-2xl border px-4 py-3 outline-none", dark ? "border-white/10 bg-white/5 text-white placeholder-slate-500" : "border-slate-200 bg-white text-slate-900")} />
            <input placeholder="Job Title" className={cx("w-full rounded-2xl border px-4 py-3 outline-none", dark ? "border-white/10 bg-white/5 text-white placeholder-slate-500" : "border-slate-200 bg-white text-slate-900")} />
            <input placeholder="Vacancy" className={cx("w-full rounded-2xl border px-4 py-3 outline-none", dark ? "border-white/10 bg-white/5 text-white placeholder-slate-500" : "border-slate-200 bg-white text-slate-900")} />
            <input placeholder="Salary" className={cx("w-full rounded-2xl border px-4 py-3 outline-none", dark ? "border-white/10 bg-white/5 text-white placeholder-slate-500" : "border-slate-200 bg-white text-slate-900")} />
            <input placeholder="Deadline" className={cx("w-full rounded-2xl border px-4 py-3 outline-none", dark ? "border-white/10 bg-white/5 text-white placeholder-slate-500" : "border-slate-200 bg-white text-slate-900")} />
          </div>
          <textarea rows={3} placeholder="Requirements and experience" className={cx("mt-3 w-full resize-none rounded-2xl border px-4 py-3 outline-none", dark ? "border-white/10 bg-white/5 text-white placeholder-slate-500" : "border-slate-200 bg-white text-slate-900")} />
          <button className="mt-4 rounded-2xl px-4 py-3 text-sm font-semibold text-white" style={{ background: RED }}>Post Job</button>
        </GlassCard>
      )}
    </div>
  );
}

function AuthoritiesView({ dark, role }) {
  const authorityCards = [
    { title: "Police Dashboard", detail: "Crime reports, SOS alerts and officer assignments", icon: ShieldCheck },
    { title: "Municipality Dashboard", detail: "Garbage, roads, water and public complaints", icon: Building2 },
    { title: "Hospital Dashboard", detail: "Beds, doctors, ambulances and emergency operations", icon: Stethoscope },
    { title: "Admin Dashboard", detail: "Statistics, audits, permissions and revenue", icon: KeyRound }
  ];

  return (
    <div className="mx-auto max-w-7xl space-y-5 px-4 pt-6 md:px-8">
      <div>
        <h1 className="text-2xl font-black">Authority Access</h1>
        <p className={cx("text-sm", dark ? "text-slate-400" : "text-slate-500")}>Role-based permissions for public safety teams and administrators.</p>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {authorityCards.map((card) => (
          <GlassCard dark={dark} key={card.title} className="p-5">
            <div className="flex items-center gap-3">
              <div className="rounded-2xl p-3" style={{ background: `${BLUE}20` }}><card.icon size={18} style={{ color: BLUE }} /></div>
              <div>
                <div className="text-lg font-black">{card.title}</div>
                <div className={cx("text-sm", dark ? "text-slate-400" : "text-slate-500")}>{card.detail}</div>
              </div>
            </div>
            <div className="mt-4 flex items-center justify-between rounded-2xl border border-slate-200 bg-white/70 p-3 text-sm">
              <span>Current role</span>
              <span className="font-semibold capitalize">{role}</span>
            </div>
          </GlassCard>
        ))}
      </div>
    </div>
  );
}

function SosOverlay({ onClose }) {
  const [stage, setStage] = useState("sending");
  useEffect(() => {
    const timer = setTimeout(() => setStage("sent"), 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-6 backdrop-blur-sm">
      <div className="w-full max-w-sm rounded-[32px] bg-white p-7 text-center shadow-2xl">
        <button className="absolute right-4 top-4 text-slate-400" onClick={onClose}><X size={20} /></button>
        <div className="relative mx-auto mb-5 flex h-24 w-24 items-center justify-center rounded-full bg-red-600 text-white shadow-xl">
          <div className="absolute inset-0 rounded-full animate-ping opacity-30" style={{ background: RED }} />
          <Siren size={38} />
        </div>
        {stage === "sending" ? (
          <>
            <h3 className="text-lg font-black text-slate-900">Sending your alert…</h3>
            <p className="mt-2 text-sm text-slate-500">Sharing live location, emergency contact and nearby responders.</p>
          </>
        ) : (
          <>
            <h3 className="text-lg font-black text-emerald-600">Help is on the way</h3>
            <p className="mt-2 text-sm text-slate-500">Police, ambulance and your emergency contact have been notified.</p>
            <div className="mt-4 space-y-2 text-left text-sm text-slate-700">
              <div className="flex items-center justify-between rounded-2xl bg-slate-50 px-3 py-2"><span>Nepal Police</span><span className="font-semibold text-emerald-600">ETA 8 min</span></div>
              <div className="flex items-center justify-between rounded-2xl bg-slate-50 px-3 py-2"><span>Bir Hospital Ambulance</span><span className="font-semibold text-emerald-600">Assigned</span></div>
            </div>
          </>
        )}
        <button onClick={onClose} className="mt-5 w-full rounded-2xl px-4 py-3 text-sm font-semibold text-white" style={{ background: BLUE }}>{stage === "sending" ? "Cancel Alert" : "Close"}</button>
      </div>
    </div>
  );
}

function App() {
  const [screen, setScreen] = useState("splash");
  const [authed, setAuthed] = useState(false);
  const [role, setRole] = useState("citizen");
  const [view, setView] = useState("home");
  const [dark, setDark] = useState(false);
  const [lang, setLang] = useState("en");
  const [sosOpen, setSosOpen] = useState(false);

  if (screen === "splash") {
    return <SplashScreen onFinish={() => setScreen("auth")} />;
  }

  if (!authed) {
    return <AuthScreen onLogin={(selectedRole) => { setRole(selectedRole); setAuthed(true); }} dark={dark} setDark={setDark} lang={lang} setLang={setLang} />;
  }

  return (
    <div style={{ fontFamily: "Inter, sans-serif" }}>
      <Shell view={view} setView={setView} role={role} dark={dark} setDark={setDark} lang={lang} setLang={setLang} onLogout={() => { setAuthed(false); setScreen("auth"); }} onSos={() => setSosOpen(true)}>
        {view === "home" && <HomeView dark={dark} setView={setView} onSos={() => setSosOpen(true)} />}
        {view === "reports" && <ReportView dark={dark} />}
        {view === "hospitals" && <HospitalsView dark={dark} />}
        {view === "employment" && <EmploymentView dark={dark} />}
        {view === "authorities" && <AuthoritiesView dark={dark} role={role} />}
      </Shell>
      {sosOpen && <SosOverlay onClose={() => setSosOpen(false)} />}
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

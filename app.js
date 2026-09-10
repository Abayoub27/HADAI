const {
  useState,
  useEffect,
  useRef,
  useCallback,
  useContext,
  createContext
} = React;
const Ic = ({
  d,
  size = 20,
  color = "currentColor",
  fill = "none"
}) => /*#__PURE__*/React.createElement("svg", {
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: fill,
  stroke: color,
  strokeWidth: "1.8",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, Array.isArray(d) ? d.map((p, i) => /*#__PURE__*/React.createElement("path", {
  key: i,
  d: p
})) : /*#__PURE__*/React.createElement("path", {
  d: d
}));
const I = {
  heart: "M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z",
  chat: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",
  video: ["M23 7l-7 5 7 5V7z", "M1 5h15a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1z"],
  clip: ["M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2", "M9 5a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2", "M9 5a2 2 0 0 0 2-2h2a2 2 0 0 0 2 2"],
  drop: "M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z",
  activity: "M22 12h-4l-3 9L9 3l-3 9H2",
  book: ["M4 19.5A2.5 2.5 0 0 1 6.5 17H20", "M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"],
  play: "M5 3l14 9-14 9V3z",
  upload: ["M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", "M17 8l-5-5-5 5", "M12 3v12"],
  user: ["M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2", "M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"],
  stetho: ["M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3", "M8 15v1a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6v-4"],
  send: ["M22 2L11 13", "M22 2L15 22l-4-9-9-4 22-7z"],
  phone: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 11.5a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.6a16 16 0 0 0 6.29 6.29l.91-1.83a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z",
  logout: ["M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4", "M16 17l5-5-5-5", "M21 12H9"],
  check: "M20 6L9 17l-5-5",
  bell: ["M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9", "M13.73 21a2 2 0 0 1-3.46 0"],
  bellOff: ["M13.73 21a2 2 0 0 1-3.46 0", "M18.63 13A17.89 17.89 0 0 1 18 8", "M6.26 6.26A5.86 5.86 0 0 0 6 8c0 7-3 9-3 9h14", "M18 8a6 6 0 0 0-9.33-5", "M1 1l22 22"],
  home: ["M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z", "M9 22V12h6v10"],
  alert: ["M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z", "M12 9v4", "M12 17h.01"],
  shield: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",
  brain: ["M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96-.46 2.5 2.5 0 0 1-1.07-4.68A3 3 0 0 1 4.5 10a3 3 0 0 1 1-5.77A2.5 2.5 0 0 1 9.5 2z", "M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96-.46 2.5 2.5 0 0 0 1.07-4.68A3 3 0 0 0 19.5 10a3 3 0 0 0-1-5.77A2.5 2.5 0 0 0 14.5 2z"],
  menu: ["M3 12h18", "M3 6h18", "M3 18h18"],
  x: ["M18 6L6 18", "M6 6l12 12"],
  sparkle: "M12 3l1.88 5.76L20 9l-5 4.5 1.88 5.76L12 16l-4.88 3.26L9 13.5 4 9l6.12-.24z",
  map: ["M1 6v16l7-4 8 4 7-4V2l-7 4-8-4-7 4z", "M8 2v16", "M16 6v16"],
  pin: ["M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z", "M12 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"],
  clock: ["M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20z", "M12 6v6l4 2"],
  refresh: ["M23 4v6h-6", "M1 20v-6h6", "M3.51 9a9 9 0 0 1 14.85-3.36L23 10", "M1 14l4.64 4.36A9 9 0 0 0 20.49 15"],
  nav: "M3 11l19-9-9 19-2-8-8-2z",
  filter: "M22 3H2l8 9.46V19l4 2v-8.54L22 3z",
  download: ["M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", "M7 10l5 5 5-5", "M12 15V3"],
  pdf: ["M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z", "M14 2v6h6", "M16 13H8", "M16 17H8", "M10 9H8"],
  plus: ["M12 5v14", "M5 12h14"],
  edit: ["M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7", "M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"],
  trash: ["M3 6h18", "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6", "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"],
  users: ["M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2", "M23 21v-2a4 4 0 0 0-3-3.87", "M16 3.13a4 4 0 0 1 0 7.75", "M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"],
  camera: ["M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z", "M12 17a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"],
  pill: ["M10.5 20H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h6.5", "M20 4H13a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2H20a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z", "M6 12v8"],
  chart: ["M18 20V10", "M12 20V4", "M6 20v-6"],
  calendar: ["M3 4h18v18H3z", "M16 2v4", "M8 2v4", "M3 10h18"],
  family: ["M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2", "M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z", "M23 21v-2a4 4 0 0 0-3-3.87", "M16 3.13a4 4 0 0 1 0 7.75"],
  eye: ["M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z", "M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6z"],
  star: "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z",
  trend: ["M23 6l-9.5 9.5-5-5L1 18", "M17 6h6v6"]
};
const C = {
  pri: "#1A6B8A",
  priL: "#E8F4F8",
  priD: "#0D4A62",
  ok: "#2D9B6F",
  okL: "#E6F7F2",
  warn: "#E07A3A",
  warnL: "#FEF3E8",
  crit: "#9B1C1C",
  critL: "#FEE2E2",
  danger: "#D64545",
  ai: "#6D28D9",
  aiL: "#EDE9FE",
  acc: "#F4A261",
  w: "#FFFFFF",
  g50: "#F8FAFB",
  g100: "#EEF2F5",
  g200: "#DDE3EA",
  g400: "#8A9AB0",
  g600: "#4A5A6E",
  g800: "#1E2D3D",
  tx: "#1E2D3D",
  txL: "#4A5A6E"
};
const DARK = {
  w: "#1E2D3D",
  g50: "#131E2B",
  g100: "#1A2637",
  g200: "#243447",
  g400: "#5A7080",
  g600: "#90A8B5",
  g800: "#D8E8F0",
  tx: "#E0EEF5",
  txL: "#90A8B5",
  priL: "#0D2030"
};
const FontCtx = createContext(1);
function useIsMobile() {
  const [m, setM] = useState(window.innerWidth < 768);
  useEffect(() => {
    const h = () => setM(window.innerWidth < 768);
    window.addEventListener("resize", h);
    return () => window.removeEventListener("resize", h);
  }, []);
  return m;
}
const RANGES = {
  sat: {
    cL: 88,
    lo: 92,
    hi: null,
    cH: null,
    u: "%",
    label: "Sat O₂"
  },
  fc: {
    cL: 40,
    lo: 50,
    hi: 100,
    cH: 130,
    u: " lpm",
    label: "Frec. Cardíaca"
  },
  temp: {
    cL: 35,
    lo: 36,
    hi: 38,
    cH: 39,
    u: "°C",
    label: "Temperatura"
  },
  fr: {
    cL: 8,
    lo: 12,
    hi: 20,
    cH: 25,
    u: " rpm",
    label: "Frec. Resp."
  },
  taS: {
    cL: 80,
    lo: 90,
    hi: 140,
    cH: 180,
    u: " mmHg",
    label: "T.A. Sistólica"
  },
  taD: {
    cL: 50,
    lo: 60,
    hi: 90,
    cH: 110,
    u: " mmHg",
    label: "T.A. Diastólica"
  }
};
const evalV = (k, v) => {
  const r = RANGES[k];
  if (!r || v === "" || isNaN(+v)) return "normal";
  const n = +v;
  if (r.cL !== null && n <= r.cL || r.cH !== null && n >= r.cH) return "critical";
  if (r.lo !== null && n < r.lo || r.hi !== null && n > r.hi) return "warning";
  return "normal";
};
const evalTA = ta => {
  if (!ta || !ta.includes("/")) return "normal";
  const [s, d] = ta.split("/").map(Number);
  const sl = evalV("taS", s),
    dl = evalV("taD", d);
  return sl === "critical" || dl === "critical" ? "critical" : sl === "warning" || dl === "warning" ? "warning" : "normal";
};
const aC = l => l === "critical" ? C.crit : l === "warning" ? C.warn : C.ok;
const aBg = l => l === "critical" ? C.critL : l === "warning" ? C.warnL : C.okL;
const aL = l => l === "critical" ? "🔴 CRÍTICO" : l === "warning" ? "🟡 ALERTA" : "🟢 Normal";
const PATIENTS = [{
  id: 1,
  name: "María García López",
  age: 78,
  dx: "EPOC agudizado",
  room: "HAD-001",
  contact: "Carmen García (hija) · 612 345 678"
}, {
  id: 2,
  name: "Antonio Fernández Ruiz",
  age: 82,
  dx: "ICC descompensada",
  room: "HAD-002",
  contact: "Rosa Fernández (esposa) · 623 456 789"
}, {
  id: 3,
  name: "Carmen Martínez Soto",
  age: 71,
  dx: "Neumonía comunitaria",
  room: "HAD-003",
  contact: "Luis Martínez (hijo) · 634 567 890"
}];
const INIT_VISITS = [{
  id: 1,
  pid: 1,
  patName: "María García López",
  addr: "C/ Verdi 45, 1ºB, Gràcia",
  zone: "norte",
  time: "09:00",
  duration: 30,
  priority: "alta",
  status: "completada",
  type: "Médico",
  notes: "Revisión post-agudización EPOC",
  professional: "Dr. Pérez",
  lat: 41.3979,
  lng: 2.1600
}, {
  id: 2,
  pid: 2,
  patName: "Antonio Fernández Ruiz",
  addr: "Av. Gaudí 12, 3ºA, Sagrada Família",
  zone: "norte",
  time: "10:00",
  duration: 45,
  priority: "urgente",
  status: "en_curso",
  type: "Médico",
  notes: "Control ICC. Ajuste diurético",
  professional: "Dr. Pérez",
  lat: 41.4034,
  lng: 2.1738
}, {
  id: 3,
  pid: 3,
  patName: "Carmen Martínez Soto",
  addr: "C/ Galileu 88, 2ºC, Sants",
  zone: "izq",
  time: "11:30",
  duration: 25,
  priority: "normal",
  status: "pendiente",
  type: "Enfermería",
  notes: "Extracción analítica + constantes",
  professional: "Enf. Rodríguez",
  lat: 41.3780,
  lng: 2.1400
}, {
  id: 4,
  pid: 1,
  patName: "María García López",
  addr: "C/ Verdi 45, 1ºB, Gràcia",
  zone: "norte",
  time: "14:00",
  duration: 20,
  priority: "normal",
  status: "pendiente",
  type: "Enfermería",
  notes: "Constantes tarde + medicación",
  professional: "Enf. Rodríguez",
  lat: 41.3979,
  lng: 2.1600
}, {
  id: 5,
  pid: 2,
  patName: "Antonio Fernández Ruiz",
  addr: "Av. Gaudí 12, 3ºA, Sagrada Família",
  zone: "norte",
  time: "16:00",
  duration: 30,
  priority: "alta",
  status: "pendiente",
  type: "Médico",
  notes: "Reevaluación tras ajuste de diurético",
  professional: "Dr. Pérez",
  lat: 41.4034,
  lng: 2.1738
}];
const INIT_ALERTS = [{
  id: 1,
  pid: 1,
  time: "09:32",
  vital: "Saturación O₂",
  value: "89%",
  level: "critical",
  msg: "Saturación por debajo del umbral crítico (≤88%). Revisar oxigenoterapia urgente.",
  read: false
}, {
  id: 2,
  pid: 2,
  time: "08:15",
  vital: "T.A. Sistólica",
  value: "185 mmHg",
  level: "critical",
  msg: "Tensión arterial sistólica muy elevada. Valorar medicación de rescate.",
  read: false
}, {
  id: 3,
  pid: 2,
  time: "07:50",
  vital: "Frec. Cardíaca",
  value: "118 lpm",
  level: "warning",
  msg: "Taquicardia moderada. Monitorizar evolución.",
  read: true
}, {
  id: 4,
  pid: 1,
  time: "06:20",
  vital: "Temperatura",
  value: "38.7°C",
  level: "warning",
  msg: "Febrícula elevada. Considerar antitérmico.",
  read: true
}];
const HIST = [{
  id: 1,
  date: "18/04 09:32",
  ta: "128/78",
  fc: "72",
  sat: "89",
  temp: "38.7",
  fr: "18"
}, {
  id: 2,
  date: "17/04 14:00",
  ta: "132/82",
  fc: "76",
  sat: "95",
  temp: "37.1",
  fr: "20"
}, {
  id: 3,
  date: "17/04 09:00",
  ta: "125/76",
  fc: "70",
  sat: "97",
  temp: "36.8",
  fr: "17"
}];
const MSGS0 = [{
  id: 1,
  text: "Buenos días María, ¿cómo se encuentra hoy?",
  own: false,
  sender: "Dr. Pérez",
  time: "09:05"
}, {
  id: 2,
  text: "Algo mejor, aunque todavía con un poco de ahogo al caminar.",
  own: true,
  sender: "Yo",
  time: "09:08"
}, {
  id: 3,
  text: "Bien, eso es normal. Siga con el oxígeno y descanse.",
  own: false,
  sender: "Dr. Pérez",
  time: "09:10"
}];
const NOTES = [{
  date: "18/04/2026",
  author: "Dr. Pérez",
  text: "⚠️ Caída de saturación a 89%. Se refuerza oxigenoterapia a 3 L/min. Febrícula 38.7°C, se inicia antitérmico. Vigilancia estrecha.",
  signed: true
}, {
  date: "17/04/2026",
  author: "Enf. Rodríguez",
  text: "Signos vitales dentro de límites. Buena tolerancia a medicación. Buen descanso nocturno.",
  signed: true
}];
const INIT_ALL_HIST = {
  1: HIST,
  2: [{
    id: 1,
    date: "18/04 09:00",
    ta: "185/110",
    fc: "118",
    sat: "94",
    temp: "36.8",
    fr: "22",
    peso: "78",
    gluc: "",
    sat_noc: ""
  }],
  3: [{
    id: 1,
    date: "18/04 11:00",
    ta: "125/78",
    fc: "88",
    sat: "96",
    temp: "38.2",
    fr: "22",
    peso: "65",
    gluc: "",
    sat_noc: ""
  }]
};
const INIT_ALL_MEDS = {
  1: [{
    id: 1,
    name: "Salbutamol 100mcg",
    dose: "2 pulsaciones",
    freq: "Cada 6h",
    type: "broncodilatador",
    times: ["08:00", "14:00", "20:00", "02:00"],
    active: true,
    color: "#1A6B8A"
  }, {
    id: 2,
    name: "Prednisona 30mg",
    dose: "1 comprimido",
    freq: "En el desayuno",
    type: "corticoide",
    times: ["08:00"],
    active: true,
    color: "#2D9B6F"
  }, {
    id: 3,
    name: "Amoxicilina 875mg",
    dose: "1 comprimido",
    freq: "Cada 8h",
    type: "antibiótico",
    times: ["08:00", "16:00", "00:00"],
    active: true,
    color: "#E07A3A"
  }, {
    id: 4,
    name: "Omeprazol 20mg",
    dose: "1 cápsula",
    freq: "En ayunas",
    type: "protector",
    times: ["07:30"],
    active: true,
    color: "#6D28D9"
  }],
  2: [{
    id: 10,
    name: "Furosemida 40mg",
    dose: "1 comprimido",
    freq: "En el desayuno",
    type: "diurético",
    times: ["08:00"],
    active: true,
    color: "#1A6B8A"
  }, {
    id: 11,
    name: "Enalapril 10mg",
    dose: "1 comprimido",
    freq: "Cada 12h",
    type: "IECA",
    times: ["08:00", "20:00"],
    active: true,
    color: "#2D9B6F"
  }],
  3: [{
    id: 20,
    name: "Amoxicilina-Clavulánico 875mg",
    dose: "1 comprimido",
    freq: "Cada 8h",
    type: "antibiótico",
    times: ["08:00", "16:00", "00:00"],
    active: true,
    color: "#2D9B6F"
  }, {
    id: 21,
    name: "Paracetamol 1g",
    dose: "1 comprimido",
    freq: "Cada 8h si fiebre",
    type: "analgésico",
    times: ["08:00", "16:00", "00:00"],
    active: true,
    color: "#E07A3A"
  }]
};
const MEDICATIONS = INIT_ALL_MEDS?.[1] || [];
const ZONES = [{
  id: "norte",
  label: "Zona Norte",
  color: "#1A6B8A",
  light: "#E8F4F8",
  emoji: "🔵"
}, {
  id: "izq",
  label: "Zona Izquierda",
  color: "#2D9B6F",
  light: "#E6F7F2",
  emoji: "🟢"
}, {
  id: "c2",
  label: "Zona Centro 2",
  color: "#E07A3A",
  light: "#FEF3E8",
  emoji: "🟠"
}, {
  id: "centro",
  label: "Zona Centro",
  color: "#6D28D9",
  light: "#EDE9FE",
  emoji: "🟣"
}];
const PROFS = [{
  name: "Dr. Pérez",
  role: "Médico",
  color: "#1A6B8A"
}, {
  name: "Enf. Rodríguez",
  role: "Enfermería",
  color: "#2D9B6F"
}, {
  name: "Dr. Martín",
  role: "Médico",
  color: "#E07A3A"
}, {
  name: "Enf. García",
  role: "Enfermería",
  color: "#6D28D9"
}, {
  name: "T.O. Sánchez",
  role: "Terapeuta Ocupacional",
  color: "#0D9488"
}, {
  name: "Fisio. Navarro",
  role: "Fisioterapeuta",
  color: "#D97706"
}, {
  name: "T.S. Morales",
  role: "Trabajadora Social",
  color: "#BE185D"
}];
const PR = {
  urgente: {
    label: "🔴 Urgente",
    color: "#9B1C1C",
    bg: "#FEE2E2"
  },
  alta: {
    label: "🟠 Alta",
    color: "#E07A3A",
    bg: "#FEF3E8"
  },
  normal: {
    label: "🟢 Normal",
    color: "#2D9B6F",
    bg: "#E6F7F2"
  }
};
const ST = {
  completada: {
    label: "✓ Completada",
    color: "#2D9B6F",
    bg: "#E6F7F2"
  },
  en_curso: {
    label: "▶ En curso",
    color: "#1A6B8A",
    bg: "#E8F4F8"
  },
  pendiente: {
    label: "○ Pendiente",
    color: "#8A9AB0",
    bg: "#EEF2F5"
  }
};
const VIDEOS = [{
  title: "Técnica de inhaladores",
  dur: "4:32",
  cat: "Medicación"
}, {
  title: "Ejercicios de respiración",
  dur: "6:15",
  cat: "Fisioterapia"
}, {
  title: "Dieta baja en sodio",
  dur: "5:48",
  cat: "Nutrición"
}, {
  title: "Signos de alarma: cuándo llamar",
  dur: "3:20",
  cat: "Urgencias"
}];
const WEEK_VISITS = ["Lun", "Mar", "Mié", "Jue", "Vie", "Sáb", "Dom"].map((day, i) => ({
  day,
  visits: i < 5 ? Math.floor(Math.random() * 4 + 2) : Math.floor(Math.random() * 2),
  completed: i < 2 ? Math.floor(Math.random() * 4 + 2) : 0
}));
const Chip = ({
  val,
  level,
  unit = ""
}) => /*#__PURE__*/React.createElement("span", {
  style: {
    background: aBg(level),
    color: aC(level),
    border: `1px solid ${aC(level)}40`,
    borderRadius: "8px",
    padding: "3px 8px",
    fontWeight: "700",
    fontSize: "12px",
    display: "inline-block"
  }
}, level === "critical" ? "🔴 " : level === "warning" ? "🟡 " : "🟢 ", val, unit);
const Badge = ({
  label,
  color,
  bg
}) => /*#__PURE__*/React.createElement("span", {
  style: {
    display: "inline-block",
    padding: "3px 10px",
    borderRadius: "20px",
    fontSize: "12px",
    fontWeight: "700",
    background: bg || color + "20",
    color
  }
}, label);
const Btn = ({
  children,
  onClick,
  color = C.pri,
  style = {}
}) => /*#__PURE__*/React.createElement("button", {
  onClick: onClick,
  style: {
    padding: "11px 20px",
    borderRadius: "12px",
    background: color,
    color: "white",
    fontSize: "14px",
    fontWeight: "700",
    border: "none",
    cursor: "pointer",
    display: "inline-flex",
    alignItems: "center",
    gap: "7px",
    ...style
  }
}, children);
const Card = ({
  children,
  style = {}
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    background: C.w,
    borderRadius: "16px",
    padding: "20px",
    boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
    marginBottom: "16px",
    ...style
  }
}, children);
const CTitle = ({
  icon,
  children,
  extra
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "16px"
  }
}, /*#__PURE__*/React.createElement("p", {
  style: {
    fontSize: "16px",
    fontWeight: "700",
    color: C.priD,
    margin: 0,
    display: "flex",
    alignItems: "center",
    gap: "8px"
  }
}, /*#__PURE__*/React.createElement(Ic, {
  d: icon,
  size: 18,
  color: C.pri
}), children), extra);
const OkBox = ({
  msg
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    background: C.okL,
    border: `1px solid ${C.ok}`,
    borderRadius: "10px",
    padding: "10px 14px",
    color: C.ok,
    fontSize: "13px",
    fontWeight: "600",
    marginBottom: "12px",
    display: "flex",
    alignItems: "center",
    gap: "7px"
  }
}, /*#__PURE__*/React.createElement(Ic, {
  d: I.check,
  size: 14,
  color: C.ok
}), msg);
const Inp = ({
  label,
  style = {},
  ...p
}) => /*#__PURE__*/React.createElement("div", null, label && /*#__PURE__*/React.createElement("label", {
  style: {
    display: "block",
    fontSize: "12px",
    fontWeight: "600",
    color: C.g600,
    marginBottom: "4px"
  }
}, label), /*#__PURE__*/React.createElement("input", {
  style: {
    width: "100%",
    padding: "10px 12px",
    borderRadius: "10px",
    border: `2px solid ${C.g200}`,
    fontSize: "14px",
    outline: "none",
    boxSizing: "border-box",
    color: C.tx,
    background: C.w,
    ...style
  },
  ...p
}));
const Sel = ({
  label,
  children,
  ...p
}) => /*#__PURE__*/React.createElement("div", null, label && /*#__PURE__*/React.createElement("label", {
  style: {
    display: "block",
    fontSize: "12px",
    fontWeight: "600",
    color: C.g600,
    marginBottom: "4px"
  }
}, label), /*#__PURE__*/React.createElement("select", {
  style: {
    width: "100%",
    padding: "10px 12px",
    borderRadius: "10px",
    border: `2px solid ${C.g200}`,
    fontSize: "14px",
    outline: "none",
    background: C.w,
    boxSizing: "border-box",
    color: C.tx
  },
  ...p
}, children));
const GlobalStyle = ({
  dark
}) => /*#__PURE__*/React.createElement("style", null, `
 *,*::before,*::after{box-sizing:border-box}
 html{font-size:16px}
 body{margin:0;font-family:'Georgia','Times New Roman',serif;background:${dark ? "#131E2B" : C.g50};color:${dark ? "#E0EEF5" : C.tx};-webkit-font-smoothing:antialiased}
 button{font-family:inherit;-webkit-appearance:none;appearance:none;cursor:pointer;outline:none}
 button:focus-visible{outline:2px solid ${C.pri};outline-offset:2px}
 input,select,textarea{font-family:inherit;color:${dark ? "#E0EEF5" : C.tx};background:${dark ? "#1A2637" : C.w}}
 a{color:inherit;text-decoration:none}
 @keyframes sosPulse{0%,100%{transform:scale(1);box-shadow:0 0 0 0 rgba(155,28,28,0.5)}50%{transform:scale(1.07);box-shadow:0 0 0 16px rgba(155,28,28,0)}}
 @keyframes fadeIn{from{opacity:0}to{opacity:1}}
 @keyframes slideDown{from{transform:translateY(-12px);opacity:0}to{transform:translateY(0);opacity:1}}
 @keyframes spin{to{transform:rotate(360deg)}}
 .had-popup .leaflet-popup-content-wrapper{border-radius:14px!important;padding:0!important;overflow:hidden;box-shadow:0 8px 30px rgba(0,0,0,0.18)!important}
 .had-popup .leaflet-popup-content{margin:0!important}
 .route-tip{background:white;border:1px solid #ddd;border-radius:8px;font-size:12px;font-weight:700;padding:4px 8px}
 `);
function injectPWAManifest() {
  try {
    const existing = document.querySelector("link[rel='manifest']");
    if (existing) existing.remove();
    const svgIcon = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 192"><rect width="192" height="192" rx="36" fill="#1A6B8A"/><rect x="82" y="36" width="28" height="120" rx="8" fill="white"/><rect x="36" y="82" width="120" height="28" rx="8" fill="white"/></svg>';
    const manifest = {
      name: "CuidaEnCasa HAD",
      short_name: "CuidaEnCasa",
      description: "Plataforma digital de Hospitalizacion a Domicilio",
      start_url: "/",
      display: "standalone",
      orientation: "portrait-primary",
      background_color: "#0D4A62",
      theme_color: "#1A6B8A",
      lang: "es",
      icons: [{
        src: "data:image/svg+xml," + encodeURIComponent(svgIcon),
        sizes: "192x192",
        type: "image/svg+xml",
        purpose: "any maskable"
      }],
      shortcuts: [{
        name: "Mis Constantes",
        short_name: "Constantes",
        url: "/?section=constantes"
      }, {
        name: "Chat Medico",
        short_name: "Chat",
        url: "/?section=chat"
      }, {
        name: "Alertas",
        short_name: "Alertas",
        url: "/?section=alertas"
      }],
      prefer_related_applications: false
    };
    const blob = new Blob([JSON.stringify(manifest)], {
      type: "application/json"
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("link");
    link.rel = "manifest";
    link.href = url;
    document.head.appendChild(link);
    const setMeta = (name, content) => {
      let m = document.querySelector("meta[name='" + name + "']");
      if (!m) {
        m = document.createElement("meta");
        m.name = name;
        document.head.appendChild(m);
      }
      m.content = content;
    };
    setMeta("theme-color", "#1A6B8A");
    setMeta("apple-mobile-web-app-capable", "yes");
    setMeta("apple-mobile-web-app-title", "CuidaEnCasa");
    setMeta("apple-mobile-web-app-status-bar-style", "black-translucent");
    setMeta("mobile-web-app-capable", "yes");
    return () => URL.revokeObjectURL(url);
  } catch (e) {
    return () => {};
  }
}
function registerServiceWorker() {
  if (!("serviceWorker" in navigator)) return;
  try {
    const sw = ["const CACHE='had-v1';", "self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(['https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.css','https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.js']).catch(()=>{})).then(()=>self.skipWaiting())));", "self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));", "self.addEventListener('fetch',e=>{if(e.request.method!=='GET')return;const u=new URL(e.request.url);if(u.hostname.includes('openstreetmap')||u.hostname.includes('cloudflare')){e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request).then(resp=>{const cl=resp.clone();caches.open(CACHE).then(c=>c.put(e.request,cl));return resp;}).catch(()=>new Response('',{status:503}))));return;}e.respondWith(fetch(e.request).catch(()=>caches.match(e.request)));});", "self.addEventListener('push',e=>{const d=e.data?e.data.json():{title:'CuidaEnCasa HAD',body:'Nueva notificacion'};e.waitUntil(self.registration.showNotification(d.title,{body:d.body,tag:'had'}));});", "self.addEventListener('notificationclick',e=>{e.notification.close();e.waitUntil(clients.matchAll({type:'window'}).then(l=>l.length?l[0].focus():clients.openWindow('/')));});"].join("\\n");
    const blob = new Blob([sw], {
      type: "application/javascript"
    });
    const url = URL.createObjectURL(blob);
    navigator.serviceWorker.register(url, {
      scope: "/"
    }).then(r => console.log("[PWA] SW registrado:", r.scope)).catch(e => console.warn("[PWA] SW no disponible:", e.message));
  } catch (e) {
    console.warn("[PWA]", e.message);
  }
}
function usePWAInstall() {
  const [prompt, setPrompt] = useState(null);
  const [installed, setInstalled] = useState(false);
  const [isIOS, setIsIOS] = useState(false);
  const [showGuide, setShowGuide] = useState(false);
  useEffect(() => {
    const ios = /iphone|ipad|ipod/i.test(navigator.userAgent);
    setIsIOS(ios);
    if (window.matchMedia("(display-mode: standalone)").matches || window.navigator.standalone) {
      setInstalled(true);
      return;
    }
    const handler = e => {
      e.preventDefault();
      setPrompt(e);
    };
    window.addEventListener("beforeinstallprompt", handler);
    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, []);
  const install = async () => {
    if (isIOS) {
      setShowGuide(true);
      return;
    }
    if (!prompt) return;
    prompt.prompt();
    const {
      outcome
    } = await prompt.userChoice;
    if (outcome === "accepted") setInstalled(true);
    setPrompt(null);
  };
  return {
    prompt,
    installed,
    isIOS,
    install,
    showGuide,
    setShowGuide
  };
}
function PWAInstallButton() {
  const {
    prompt,
    installed,
    isIOS,
    install,
    showGuide,
    setShowGuide
  } = usePWAInstall();
  if (installed) return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "6px",
      padding: "5px 11px",
      borderRadius: "20px",
      background: C.okL,
      border: "1px solid #2D9B6F30"
    }
  }, /*#__PURE__*/React.createElement(Ic, {
    d: I.check,
    size: 13,
    color: C.ok
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "12px",
      fontWeight: "700",
      color: C.ok
    }
  }, "App instalada"));
  if (!prompt && !isIOS) return null;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("button", {
    onClick: install,
    style: {
      display: "flex",
      alignItems: "center",
      gap: "7px",
      padding: "7px 13px",
      borderRadius: "20px",
      background: "linear-gradient(135deg,#1A6B8A,#0D4A62)",
      border: "none",
      color: "white",
      fontWeight: "700",
      fontSize: "12px",
      cursor: "pointer",
      boxShadow: "0 3px 10px rgba(26,107,138,0.35)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "14px"
    }
  }, "📲"), isIOS ? "Añadir al inicio" : "Instalar app"), showGuide && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "fixed",
      inset: 0,
      background: "rgba(0,0,0,0.65)",
      zIndex: 3000,
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "center",
      padding: "16px",
      animation: "fadeIn 0.2s"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: C.w,
      borderRadius: "20px",
      maxWidth: "420px",
      width: "100%",
      padding: "24px",
      boxShadow: "0 -8px 40px rgba(0,0,0,0.2)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      marginBottom: "18px"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "36px",
      margin: "0 0 8px"
    }
  }, "📲"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "0 0 4px",
      fontWeight: "800",
      fontSize: "16px",
      color: C.priD
    }
  }, "Instalar en iPhone / iPad"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: "12px",
      color: C.txL
    }
  }, "Sigue estos pasos en Safari")), [{
    n: "1",
    e: "⬆️",
    t: "Pulsa el boton Compartir (cuadrado con flecha arriba)"
  }, {
    n: "2",
    e: "➕",
    t: "Pulsa 'Añadir a pantalla de inicio'"
  }, {
    n: "3",
    e: "✅",
    t: "Pulsa 'Añadir' arriba a la derecha"
  }].map(s => /*#__PURE__*/React.createElement("div", {
    key: s.n,
    style: {
      display: "flex",
      gap: "12px",
      alignItems: "center",
      padding: "10px",
      background: C.g50,
      borderRadius: "10px",
      marginBottom: "8px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: "28px",
      height: "28px",
      borderRadius: "50%",
      background: C.pri,
      color: "white",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontWeight: "800",
      fontSize: "12px",
      flexShrink: 0
    }
  }, s.n), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: "13px",
      color: C.tx
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "15px"
    }
  }, s.e), " ", s.t))), /*#__PURE__*/React.createElement("button", {
    onClick: () => setShowGuide(false),
    style: {
      width: "100%",
      padding: "12px",
      borderRadius: "12px",
      background: C.pri,
      color: "white",
      fontWeight: "700",
      fontSize: "14px",
      border: "none",
      cursor: "pointer",
      marginTop: "10px"
    }
  }, "Entendido"))));
}
const STORAGE_PREFIX = "cuidaencasa_had_";
const SYNC_QUEUE_KEY = "cuidaencasa_had_sync_queue";
function storageSave(key, value) {
  try {
    localStorage.setItem(STORAGE_PREFIX + key, JSON.stringify(value));
  } catch (e) {}
}
function storageLoad(key) {
  try {
    const v = localStorage.getItem(STORAGE_PREFIX + key);
    return v ? JSON.parse(v) : null;
  } catch (e) {
    return null;
  }
}
function storageDel(key) {
  try {
    localStorage.removeItem(STORAGE_PREFIX + key);
  } catch (e) {}
}
function resetAllData() {
  ["had_visits", "had_alerts", "had_patients", "had_users", "had_notes", "had_hist", "had_msgs", "had_meds", "had_alerts_patient", SYNC_QUEUE_KEY.replace(STORAGE_PREFIX, "")].forEach(k => storageDel(k));
  window.location.reload();
}
function getSyncQueue() {
  try {
    return JSON.parse(localStorage.getItem(SYNC_QUEUE_KEY) || "[]");
  } catch {
    return [];
  }
}
function addToSyncQueue(entry) {
  const q = getSyncQueue();
  q.push({
    ...entry,
    id: Date.now(),
    ts: new Date().toISOString()
  });
  localStorage.setItem(SYNC_QUEUE_KEY, JSON.stringify(q));
}
function clearSyncQueue() {
  localStorage.setItem(SYNC_QUEUE_KEY, "[]");
}
function getSyncQueueCount() {
  return getSyncQueue().length;
}
function useNetworkStatus() {
  const [online, setOnline] = useState(navigator.onLine);
  const [wasOffline, setWasOffline] = useState(false);
  const [syncCount, setSyncCount] = useState(getSyncQueueCount());
  const [syncing, setSyncing] = useState(false);
  const [lastSync, setLastSync] = useState(storageLoad("last_sync") || null);
  useEffect(() => {
    const goOnline = () => {
      setOnline(true);
      setWasOffline(true);
      setTimeout(() => doSync(), 800);
    };
    const goOffline = () => {
      setOnline(false);
      setWasOffline(false);
    };
    window.addEventListener("online", goOnline);
    window.addEventListener("offline", goOffline);
    return () => {
      window.removeEventListener("online", goOnline);
      window.removeEventListener("offline", goOffline);
    };
  }, []);
  const doSync = async () => {
    const q = getSyncQueue();
    if (!q.length) {
      setWasOffline(false);
      return;
    }
    setSyncing(true);
    await new Promise(r => setTimeout(r, 1200));
    clearSyncQueue();
    setSyncCount(0);
    const now = new Date().toLocaleTimeString("es-ES", {
      hour: "2-digit",
      minute: "2-digit"
    });
    setLastSync(now);
    storageSave("last_sync", now);
    setSyncing(false);
    setWasOffline(false);
  };
  const trackChange = (action, data) => {
    if (!navigator.onLine) {
      addToSyncQueue({
        action,
        data
      });
      setSyncCount(c => c + 1);
    }
  };
  return {
    online,
    wasOffline,
    syncCount,
    syncing,
    lastSync,
    doSync,
    trackChange
  };
}
function OfflineBanner({
  online,
  wasOffline,
  syncCount,
  syncing,
  lastSync,
  onSync
}) {
  if (online && !wasOffline && !syncing) return null;
  if (syncing) return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "fixed",
      top: "56px",
      left: 0,
      right: 0,
      zIndex: 500,
      background: "#1A6B8A",
      color: "white",
      padding: "8px 16px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "10px",
      fontSize: "13px",
      fontWeight: "600",
      animation: "slideDown 0.2s"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: "16px",
      height: "16px",
      border: "2px solid rgba(255,255,255,0.3)",
      borderTop: "2px solid white",
      borderRadius: "50%",
      animation: "spin 0.8s linear infinite",
      flexShrink: 0
    }
  }), "Sincronizando ", syncCount, " cambio", syncCount !== 1 ? "s" : "", "...");
  if (wasOffline && online) return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "fixed",
      top: "56px",
      left: 0,
      right: 0,
      zIndex: 500,
      background: C.ok,
      color: "white",
      padding: "8px 16px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "10px",
      fontSize: "13px",
      fontWeight: "600",
      animation: "slideDown 0.2s"
    }
  }, /*#__PURE__*/React.createElement(Ic, {
    d: I.check,
    size: 15,
    color: "white"
  }), "✅ Conexión recuperada — datos sincronizados correctamente");
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "fixed",
      top: "56px",
      left: 0,
      right: 0,
      zIndex: 500,
      background: "#1E2D3D",
      color: "white",
      padding: "8px 16px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "10px",
      fontSize: "13px",
      fontWeight: "600",
      animation: "slideDown 0.2s"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "8px",
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: "8px",
      height: "8px",
      borderRadius: "50%",
      background: C.warn,
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("span", null, "Sin conexión — trabajando en modo offline"), syncCount > 0 && /*#__PURE__*/React.createElement("span", {
    style: {
      background: "rgba(255,255,255,0.15)",
      borderRadius: "20px",
      padding: "2px 8px",
      fontSize: "11px"
    }
  }, syncCount, " cambio", syncCount !== 1 ? "s" : "", " pendiente", syncCount !== 1 ? "s" : "")), lastSync && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "11px",
      opacity: 0.7,
      flexShrink: 0
    }
  }, "Última sync: ", lastSync));
}
function NetworkDot({
  online
}) {
  return /*#__PURE__*/React.createElement("div", {
    title: online ? "Conectado" : "Sin conexión — modo offline",
    style: {
      width: "8px",
      height: "8px",
      borderRadius: "50%",
      background: online ? C.ok : C.warn,
      boxShadow: online ? `0 0 0 2px ${C.ok}40` : `0 0 0 2px ${C.warn}40`,
      flexShrink: 0,
      cursor: "default"
    }
  });
}
function useOfflineAction(trackChange) {
  return (action, fn) => (...args) => {
    fn(...args);
    trackChange(action, args[0]);
  };
}
function useNotifications() {
  const [perm, setPerm] = useState("default");
  const [toasts, setToasts] = useState([]);
  const [history, setHistory] = useState([{
    id: 1,
    title: "⚠️ Alerta crítica",
    body: "María García — Sat O₂: 89%",
    time: "09:32",
    read: false,
    type: "urgente"
  }, {
    id: 2,
    title: "✅ Visita completada",
    body: "María García López — 09:00 completada.",
    time: "09:45",
    read: true,
    type: "ok"
  }]);
  useEffect(() => {
    if ("Notification" in window) setPerm(Notification.permission);
  }, []);
  const reqPerm = async () => {
    if ("Notification" in window) {
      const p = await Notification.requestPermission();
      setPerm(p);
      return p;
    }
    return "denied";
  };
  const send = useCallback(async (title, body, type = "info") => {
    const id = Date.now();
    const time = new Date().toLocaleTimeString("es-ES", {
      hour: "2-digit",
      minute: "2-digit"
    });
    setToasts(p => [...p, {
      id,
      title,
      body,
      type,
      time
    }]);
    setHistory(p => [{
      id,
      title,
      body,
      type,
      time,
      read: false
    }, ...p]);
    setTimeout(() => setToasts(p => p.filter(t => t.id !== id)), 5000);
    if (perm === "granted" && "Notification" in window) new Notification(title, {
      body
    });
  }, [perm]);
  const markRead = id => setHistory(p => p.map(n => n.id === id ? {
    ...n,
    read: true
  } : n));
  const markAll = () => setHistory(p => p.map(n => ({
    ...n,
    read: true
  })));
  const dismiss = id => setToasts(p => p.filter(t => t.id !== id));
  return {
    perm,
    toasts,
    history,
    reqPerm,
    send,
    markRead,
    markAll,
    dismiss
  };
}
const typeColor = {
  urgente: C.crit,
  ok: C.ok,
  info: C.pri,
  warn: C.warn
};
function Toasts({
  toasts,
  onDismiss
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "fixed",
      top: "68px",
      right: "14px",
      zIndex: 1000,
      display: "flex",
      flexDirection: "column",
      gap: "10px",
      maxWidth: "320px",
      pointerEvents: "none"
    }
  }, toasts.map(t => /*#__PURE__*/React.createElement("div", {
    key: t.id,
    style: {
      background: C.w,
      borderRadius: "14px",
      padding: "13px 15px",
      boxShadow: "0 8px 28px rgba(0,0,0,0.15)",
      borderLeft: `4px solid ${typeColor[t.type] || C.pri}`,
      animation: "slideDown 0.3s ease",
      display: "flex",
      gap: "10px",
      pointerEvents: "auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "0 0 2px",
      fontWeight: "800",
      fontSize: "13px",
      color: typeColor[t.type] || C.pri
    }
  }, t.title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: "12px",
      color: C.txL
    }
  }, t.body)), /*#__PURE__*/React.createElement("button", {
    onClick: () => onDismiss(t.id),
    style: {
      color: C.g400,
      padding: "0",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(Ic, {
    d: I.x,
    size: 15,
    color: C.g400
  })))));
}
function SOSButton() {
  const [open, setOpen] = useState(false);
  const handle = () => {
    setOpen(true);
    if ("vibrate" in navigator) navigator.vibrate([200, 100, 200]);
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("button", {
    onClick: handle,
    style: {
      position: "fixed",
      bottom: "88px",
      right: "14px",
      zIndex: 200,
      width: "62px",
      height: "62px",
      borderRadius: "50%",
      background: C.crit,
      color: "white",
      fontSize: "10px",
      fontWeight: "800",
      border: "3px solid white",
      boxShadow: "0 4px 20px rgba(155,28,28,0.45)",
      animation: "sosPulse 2s infinite",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: "1px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "17px"
    }
  }, "🆘"), /*#__PURE__*/React.createElement("span", null, "SOS")), open && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "fixed",
      inset: 0,
      background: "rgba(155,28,28,0.93)",
      zIndex: 500,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "24px",
      animation: "fadeIn 0.2s"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "56px",
      marginBottom: "20px"
    }
  }, "🆘"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "white",
      fontSize: "22px",
      fontWeight: "800",
      margin: "0 0 8px",
      textAlign: "center"
    }
  }, "Llamando al equipo médico"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "rgba(255,255,255,0.85)",
      fontSize: "14px",
      margin: "0 0 28px",
      textAlign: "center"
    }
  }, "Su médico será avisado inmediatamente. Mantenga la calma."), /*#__PURE__*/React.createElement("a", {
    href: "tel:112",
    style: {
      background: "white",
      color: C.crit,
      padding: "15px 40px",
      borderRadius: "50px",
      fontSize: "17px",
      fontWeight: "800",
      marginBottom: "12px",
      display: "block",
      textAlign: "center"
    }
  }, "📞 Llamar al 112"), /*#__PURE__*/React.createElement("button", {
    onClick: () => setOpen(false),
    style: {
      color: "rgba(255,255,255,0.8)",
      fontSize: "14px",
      padding: "11px 24px",
      border: "1px solid rgba(255,255,255,0.4)",
      borderRadius: "50px",
      background: "transparent"
    }
  }, "Cancelar")));
}
function AccessBar({
  fs,
  setFs,
  dark,
  setDark
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: dark ? "#1A2637" : C.g100,
      borderBottom: `1px solid ${dark ? "#243447" : C.g200}`,
      padding: "5px 16px",
      display: "flex",
      gap: "10px",
      alignItems: "center",
      justifyContent: "flex-end",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "11px",
      color: dark ? "#90A8B5" : C.g600
    }
  }, "Accesibilidad:"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "3px"
    }
  }, [{
    s: 0.85,
    l: "A-"
  }, {
    s: 1,
    l: "A"
  }, {
    s: 1.2,
    l: "A+"
  }, {
    s: 1.4,
    l: "A++"
  }].map(({
    s,
    l
  }) => /*#__PURE__*/React.createElement("button", {
    key: s,
    onClick: () => setFs(s),
    style: {
      padding: "3px 9px",
      borderRadius: "7px",
      background: fs === s ? C.pri : dark ? "#243447" : C.w,
      color: fs === s ? "white" : dark ? "#90A8B5" : C.g600,
      border: `1px solid ${fs === s ? C.pri : dark ? "#2A3D52" : C.g200}`,
      fontSize: `${11 * s}px`,
      fontWeight: fs === s ? "800" : "500"
    }
  }, l))), /*#__PURE__*/React.createElement("button", {
    onClick: () => setDark(d => !d),
    style: {
      padding: "4px 11px",
      borderRadius: "8px",
      background: dark ? C.pri : C.w,
      color: dark ? "white" : C.g600,
      border: `1px solid ${dark ? C.pri : C.g200}`,
      fontSize: "12px",
      fontWeight: "600"
    }
  }, dark ? "☀️ Día" : "🌙 Noche"));
}
function VitalsTable({
  rows,
  onEdit,
  role
}) {
  const headers = ["Fecha", "T.A.", "F.C.", "Sat O₂", "Temp", "F.R.", "Peso", "Glucosa", "Estado"];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      overflowX: "auto"
    }
  }, /*#__PURE__*/React.createElement("table", {
    style: {
      width: "100%",
      borderCollapse: "collapse",
      fontSize: "12px"
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", {
    style: {
      background: C.g50
    }
  }, headers.map(h => /*#__PURE__*/React.createElement("th", {
    key: h,
    style: {
      padding: "9px 8px",
      textAlign: "left",
      color: C.g600,
      fontWeight: "700",
      borderBottom: `2px solid ${C.g100}`,
      whiteSpace: "nowrap"
    }
  }, h)), role === "staff" && /*#__PURE__*/React.createElement("th", {
    style: {
      padding: "9px 8px",
      color: C.g600,
      fontWeight: "700",
      borderBottom: `2px solid ${C.g100}`
    }
  }, "Acciones"))), /*#__PURE__*/React.createElement("tbody", null, rows.map((r, i) => {
    const lv = {
      ta: evalTA(r.ta),
      fc: evalV("fc", r.fc),
      sat: evalV("sat", r.sat),
      temp: evalV("temp", r.temp),
      fr: evalV("fr", r.fr),
      peso: r.peso ? evalV("peso", r.peso) : "normal",
      gluc: r.gluc ? evalV("gluc", r.gluc) : "normal"
    };
    const worst = Object.values(lv).includes("critical") ? "critical" : Object.values(lv).includes("warning") ? "warning" : "normal";
    return /*#__PURE__*/React.createElement("tr", {
      key: r.id,
      style: {
        borderBottom: `1px solid ${C.g100}`,
        background: i === 0 && worst !== "normal" ? aBg(worst) + "50" : "transparent"
      }
    }, /*#__PURE__*/React.createElement("td", {
      style: {
        padding: "9px 8px",
        color: C.txL,
        whiteSpace: "nowrap",
        fontWeight: i === 0 ? "700" : "400"
      }
    }, r.date), /*#__PURE__*/React.createElement("td", {
      style: {
        padding: "9px 8px"
      }
    }, /*#__PURE__*/React.createElement(Chip, {
      val: r.ta,
      level: lv.ta
    })), /*#__PURE__*/React.createElement("td", {
      style: {
        padding: "9px 8px"
      }
    }, /*#__PURE__*/React.createElement(Chip, {
      val: r.fc,
      level: lv.fc,
      unit: " lpm"
    })), /*#__PURE__*/React.createElement("td", {
      style: {
        padding: "9px 8px"
      }
    }, /*#__PURE__*/React.createElement(Chip, {
      val: r.sat,
      level: lv.sat,
      unit: "%"
    })), /*#__PURE__*/React.createElement("td", {
      style: {
        padding: "9px 8px"
      }
    }, /*#__PURE__*/React.createElement(Chip, {
      val: r.temp,
      level: lv.temp,
      unit: "°C"
    })), /*#__PURE__*/React.createElement("td", {
      style: {
        padding: "9px 8px"
      }
    }, /*#__PURE__*/React.createElement(Chip, {
      val: r.fr,
      level: lv.fr,
      unit: " rpm"
    })), /*#__PURE__*/React.createElement("td", {
      style: {
        padding: "9px 8px"
      }
    }, r.peso ? /*#__PURE__*/React.createElement(Chip, {
      val: r.peso,
      level: lv.peso,
      unit: " kg"
    }) : /*#__PURE__*/React.createElement("span", {
      style: {
        color: C.g400
      }
    }, "—")), /*#__PURE__*/React.createElement("td", {
      style: {
        padding: "9px 8px"
      }
    }, r.gluc ? /*#__PURE__*/React.createElement(Chip, {
      val: r.gluc,
      level: lv.gluc,
      unit: " mg/dL"
    }) : /*#__PURE__*/React.createElement("span", {
      style: {
        color: C.g400
      }
    }, "—")), /*#__PURE__*/React.createElement("td", {
      style: {
        padding: "9px 8px"
      }
    }, /*#__PURE__*/React.createElement(Badge, {
      label: aL(worst),
      color: aC(worst)
    })), role === "staff" && /*#__PURE__*/React.createElement("td", {
      style: {
        padding: "9px 8px"
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => onEdit && onEdit(r),
      style: {
        width: "28px",
        height: "28px",
        borderRadius: "7px",
        background: C.priL,
        border: `1px solid ${C.pri}30`,
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }
    }, /*#__PURE__*/React.createElement(Ic, {
      d: I.edit,
      size: 13,
      color: C.pri
    }))));
  }))));
}
function VitalsModule({
  role,
  patientId: propPatId,
  patients,
  onAlert
}) {
  const patList = patients || PATIENTS;
  const [selPatId, setSelPatId] = useState(propPatId || patList[0]?.id || 1);
  const patId = role === "staff" ? selPatId : propPatId || 1;
  const [allHist, setAllHist] = useSyncedState("had_hist_all", INIT_ALL_HIST);
  const rows = allHist[patId] || [];
  const setRows = updater => setAllHist(prev => ({
    ...prev,
    [patId]: typeof updater === "function" ? updater(prev[patId] || []) : updater
  }));
  const EMPTY = {
    ta: "",
    fc: "",
    sat: "",
    temp: "",
    fr: "",
    peso: "",
    gluc: "",
    sat_noc: ""
  };
  const [v, setV] = useState(EMPTY);
  const [editId, setEditId] = useState(null);
  const [saved, setSaved] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [tab, setTab] = useState("historial"); // historial | nuevo

  const FIELDS = [{
    k: "ta",
    label: "Tensión Arterial",
    ph: "120/80",
    unit: "mmHg",
    hint: "90–140/60–90",
    required: true
  }, {
    k: "fc",
    label: "Frec. Cardíaca",
    ph: "72",
    unit: "lpm",
    hint: "50–100",
    required: true
  }, {
    k: "sat",
    label: "Saturación O₂",
    ph: "96",
    unit: "%",
    hint: "≥92%",
    required: true
  }, {
    k: "temp",
    label: "Temperatura",
    ph: "36.5",
    unit: "°C",
    hint: "36–38°C",
    required: true
  }, {
    k: "fr",
    label: "Frec. Respiratoria",
    ph: "18",
    unit: "rpm",
    hint: "12–20",
    required: true
  }, {
    k: "peso",
    label: "Peso",
    ph: "70",
    unit: "kg",
    hint: "Valor actual",
    required: false
  }, {
    k: "gluc",
    label: "Glucosa",
    ph: "100",
    unit: "mg/dL",
    hint: "70–140",
    required: false
  }, {
    k: "sat_noc",
    label: "Sat. Nocturna",
    ph: "94",
    unit: "%",
    hint: "≥90%",
    required: false
  }];
  const lv = {
    ta: evalTA(v.ta),
    fc: evalV("fc", v.fc),
    sat: evalV("sat", v.sat),
    temp: evalV("temp", v.temp),
    fr: evalV("fr", v.fr),
    peso: v.peso ? evalV("peso", v.peso) : "normal",
    gluc: v.gluc ? evalV("gluc", v.gluc) : "normal"
  };
  const hasAlert = Object.values(lv).some(l => l !== "normal");
  const hasCrit = Object.values(lv).includes("critical");
  const openNew = () => {
    setV(EMPTY);
    setEditId(null);
    setTab("nuevo");
    setShowForm(true);
  };
  const openEdit = row => {
    setV({
      ta: row.ta || "",
      fc: row.fc || "",
      sat: row.sat || "",
      temp: row.temp || "",
      fr: row.fr || "",
      peso: row.peso || "",
      gluc: row.gluc || "",
      sat_noc: row.sat_noc || ""
    });
    setEditId(row.id);
    setTab("nuevo");
    setShowForm(true);
  };
  const saveVitals = () => {
    const required = FIELDS.filter(f => f.required);
    const missing = required.filter(f => !v[f.k]?.trim());
    if (missing.length) {
      alert(`Complete los campos obligatorios: ${missing.map(f => f.label).join(", ")}`);
      return;
    }
    const now = new Date();
    const date = `${now.getDate().toString().padStart(2, "0")}/${(now.getMonth() + 1).toString().padStart(2, "0")} ${now.toLocaleTimeString("es-ES", {
      hour: "2-digit",
      minute: "2-digit"
    })}`;
    if (editId) {
      setRows(p => p.map(r => r.id === editId ? {
        ...r,
        ...v
      } : r));
    } else {
      setRows(p => [{
        id: Date.now(),
        date,
        ...v
      }, ...p]);
      if (hasCrit && onAlert) onAlert(v, patId);
    }
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
    setShowForm(false);
    setTab("historial");
    setV(EMPTY);
    setEditId(null);
  };
  const deleteRow = id => {
    if (!window.confirm("¿Eliminar este registro de constantes?")) return;
    setRows(p => p.filter(r => r.id !== id));
  };
  return /*#__PURE__*/React.createElement("div", null, role === "staff" && /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: "16px"
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: {
      display: "block",
      fontSize: "12px",
      fontWeight: "700",
      color: C.g600,
      marginBottom: "6px",
      textTransform: "uppercase",
      letterSpacing: "0.4px"
    }
  }, "Paciente"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill,minmax(175px,1fr))",
      gap: "8px"
    }
  }, patList.map(p => /*#__PURE__*/React.createElement("button", {
    key: p.id,
    onClick: () => setSelPatId(p.id),
    style: {
      padding: "10px 12px",
      borderRadius: "12px",
      border: `2px solid ${selPatId === p.id ? C.pri : C.g200}`,
      background: selPatId === p.id ? C.priL : C.w,
      cursor: "pointer",
      textAlign: "left",
      transition: "all 0.15s"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "0 0 2px",
      fontWeight: "800",
      fontSize: "13px",
      color: selPatId === p.id ? C.pri : C.tx
    }
  }, p.name.split(" ").slice(0, 2).join(" ")), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: "11px",
      color: selPatId === p.id ? C.pri : C.txL
    }
  }, p.room || "", " · ", p.dx))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: "14px",
      flexWrap: "wrap",
      gap: "10px"
    }
  }, /*#__PURE__*/React.createElement("div", null, role === "staff" && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "0 0 2px",
      fontWeight: "800",
      fontSize: "15px",
      color: C.priD
    }
  }, patList.find(p => p.id === patId)?.name), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: "12px",
      color: C.txL
    }
  }, rows.length, " registro", rows.length !== 1 ? "s" : "", " · Último: ", rows[0]?.date || "—")), /*#__PURE__*/React.createElement(Btn, {
    onClick: openNew,
    style: {
      fontSize: "13px",
      padding: "9px 16px"
    }
  }, /*#__PURE__*/React.createElement(Ic, {
    d: I.plus,
    size: 15,
    color: "white"
  }), " ", role === "staff" ? "Registrar constantes" : "Añadir mis constantes")), saved && /*#__PURE__*/React.createElement(SavedBanner, {
    msg: editId ? "✅ Registro actualizado correctamente" : "✅ Constantes guardadas. Equipo médico notificado."
  }), hasAlert && showForm && /*#__PURE__*/React.createElement("div", {
    style: {
      background: hasCrit ? C.critL : C.warnL,
      border: `2px solid ${hasCrit ? C.crit : C.warn}`,
      borderRadius: "12px",
      padding: "12px 15px",
      marginBottom: "14px"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "0 0 3px",
      fontWeight: "800",
      color: hasCrit ? C.crit : C.warn,
      fontSize: "13px"
    }
  }, hasCrit ? "🔴 VALOR CRÍTICO detectado" : "🟡 Valor fuera de rango"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: "12px",
      color: C.tx
    }
  }, hasCrit ? "Se notificará automáticamente al médico." : "El equipo recibirá un aviso.")), showForm && /*#__PURE__*/React.createElement(Card, {
    style: {
      marginBottom: "16px",
      border: `2px solid ${hasCrit ? C.crit : C.pri}`
    }
  }, /*#__PURE__*/React.createElement(CTitle, {
    icon: I.activity
  }, editId ? "✏️ Editar registro" : "➕ Nuevo registro de constantes"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "12px",
      marginBottom: "14px"
    }
  }, FIELDS.map(f => {
    const col = aC(lv[f.k] || "normal");
    const bg = aBg(lv[f.k] || "normal");
    const isAlert = (lv[f.k] || "normal") !== "normal";
    return /*#__PURE__*/React.createElement("div", {
      key: f.k
    }, /*#__PURE__*/React.createElement("label", {
      style: {
        display: "block",
        fontSize: "12px",
        fontWeight: "600",
        color: isAlert ? col : C.g600,
        marginBottom: "4px"
      }
    }, f.label, " ", /*#__PURE__*/React.createElement("span", {
      style: {
        color: C.g400
      }
    }, "(", f.unit, ")"), f.required && /*#__PURE__*/React.createElement("span", {
      style: {
        color: C.crit
      }
    }, " *")), /*#__PURE__*/React.createElement("input", {
      style: {
        width: "100%",
        padding: "10px 12px",
        borderRadius: "10px",
        border: `2px solid ${isAlert ? col : C.g200}`,
        background: isAlert ? bg : C.w,
        fontSize: "14px",
        outline: "none",
        boxSizing: "border-box",
        color: C.tx
      },
      placeholder: f.ph,
      value: v[f.k],
      onChange: e => setV({
        ...v,
        [f.k]: e.target.value
      })
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        marginTop: "3px"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: "10px",
        color: C.g400
      }
    }, "Normal: ", f.hint), v[f.k] && isAlert && /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: "10px",
        fontWeight: "700",
        color: col
      }
    }, aL(lv[f.k]))));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "10px",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(Btn, {
    onClick: saveVitals,
    color: hasCrit ? C.crit : C.pri,
    style: {
      fontSize: "13px"
    }
  }, hasCrit ? "⚠️ Guardar y Notificar" : "💾 Guardar constantes"), /*#__PURE__*/React.createElement("button", {
    onClick: () => {
      setShowForm(false);
      setV(EMPTY);
      setEditId(null);
    },
    style: {
      padding: "11px 18px",
      borderRadius: "12px",
      border: `1px solid ${C.g200}`,
      background: C.w,
      cursor: "pointer",
      fontWeight: "600",
      fontSize: "13px",
      color: C.g800
    }
  }, "Cancelar"))), rows.length > 0 && (() => {
    const last = rows[0];
    const lv2 = {
      ta: evalTA(last.ta),
      fc: evalV("fc", last.fc),
      sat: evalV("sat", last.sat),
      temp: evalV("temp", last.temp)
    };
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(4,1fr)",
        gap: "8px",
        marginBottom: "14px"
      }
    }, [{
      l: "T.A.",
      v: last.ta,
      k: "ta"
    }, {
      l: "F.C.",
      v: last.fc + "lpm",
      k: "fc"
    }, {
      l: "Sat O₂",
      v: last.sat + "%",
      k: "sat"
    }, {
      l: "Temp",
      v: last.temp + "°C",
      k: "temp"
    }].map((s, i) => {
      const lev = lv2[s.k];
      const col = aC(lev);
      return /*#__PURE__*/React.createElement("div", {
        key: i,
        style: {
          background: col + "12",
          borderRadius: "10px",
          padding: "10px",
          borderLeft: `3px solid ${col}`,
          textAlign: "center"
        }
      }, /*#__PURE__*/React.createElement("p", {
        style: {
          margin: "0 0 2px",
          fontSize: "14px",
          fontWeight: "800",
          color: col
        }
      }, s.v), /*#__PURE__*/React.createElement("p", {
        style: {
          margin: 0,
          fontSize: "10px",
          color: C.txL
        }
      }, s.l));
    }));
  })(), rows.length === 0 ? /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      padding: "30px 0",
      color: C.g400
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "14px",
      margin: "0 0 10px"
    }
  }, "Sin registros de constantes"), /*#__PURE__*/React.createElement("button", {
    onClick: openNew,
    style: {
      padding: "8px 16px",
      borderRadius: "10px",
      background: C.priL,
      border: `1px solid ${C.pri}40`,
      color: C.pri,
      fontWeight: "700",
      fontSize: "13px",
      cursor: "pointer"
    }
  }, "+ Añadir primer registro")) : /*#__PURE__*/React.createElement(VitalsTable, {
    rows: rows,
    role: role,
    onEdit: role === "staff" ? openEdit : undefined
  }), role === "staff" && rows.length > 0 && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "8px 0 0",
      fontSize: "11px",
      color: C.g400
    }
  }, "💡 Pulse el icono ✏️ en cualquier fila para editar ese registro"));
}
function VitalsForm({
  onSave,
  saved
}) {
  return /*#__PURE__*/React.createElement(VitalsModule, {
    role: "patient",
    patientId: 1,
    onAlert: onSave
  });
}
const MED_COLORS = ["#1A6B8A", "#2D9B6F", "#E07A3A", "#6D28D9", "#9B1C1C", "#0D4A62"];
const MED_TYPES = ["broncodilatador", "corticoide", "antibiótico", "diurético", "IECA", "analgésico", "protector gástrico", "cardiotónico", "insulina", "anticoagulante", "antihipertensivo", "otro"];
const FREQ_OPTS = ["En ayunas", "En el desayuno", "Cada 6 horas", "Cada 8 horas", "Cada 12 horas", "Cada 24 horas", "Si precisa", "Al acostarse"];
function PrescriptionScanner({
  onMedsExtracted
}) {
  const [scanning, setScanning] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const [preview, setPreview] = useState(null);
  const fileRef = useRef(null);
  const handleFile = async file => {
    if (!file) return;
    setScanning(true);
    setResult(null);
    setError(null);
    const reader = new FileReader();
    reader.onload = e => setPreview(e.target.result);
    reader.readAsDataURL(file);
    try {
      const base64 = await new Promise((res, rej) => {
        const r = new FileReader();
        r.onload = () => res(r.result.split(",")[1]);
        r.onerror = rej;
        r.readAsDataURL(file);
      });
      const resp = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          model: "claude-sonnet-4-6",
          max_tokens: 1000,
          messages: [{
            role: "user",
            content: [{
              type: "image",
              source: {
                type: "base64",
                media_type: file.type || "image/jpeg",
                data: base64
              }
            }, {
              type: "text",
              text: "Analiza esta receta medica y extrae todos los medicamentos. Devuelve SOLO un JSON array sin texto adicional: [{\"name\":\"Nombre+dosis\",\"dose\":\"posologia\",\"freq\":\"frecuencia\",\"times\":[\"08:00\"],\"type\":\"tipo farmacologico\",\"notes\":\"instrucciones\"}]. Si no hay medicamentos devuelve []."
            }]
          }]
        })
      });
      const data = await resp.json();
      const text = (data.content || []).map(b => b.text || "").join("");
      const match = text.match(/\[[\s\S]*\]/);
      if (!match) throw new Error("No se pudieron extraer medicamentos");
      const extracted = JSON.parse(match[0]);
      if (!extracted.length) throw new Error("No se encontraron medicamentos en la imagen");
      setResult(extracted);
    } catch (e) {
      setError(e.message || "Error al procesar la imagen");
    } finally {
      setScanning(false);
    }
  };
  const confirmMeds = () => {
    const withIds = result.map(m => ({
      ...m,
      id: Date.now() + Math.random(),
      active: true,
      color: ["#1A6B8A", "#2D9B6F", "#E07A3A", "#6D28D9", "#0D9488", "#D97706"][Math.floor(Math.random() * 6)]
    }));
    onMedsExtracted(withIds);
    setResult(null);
    setPreview(null);
  };
  return /*#__PURE__*/React.createElement(Card, {
    style: {
      border: `2px dashed ${C.pri}`,
      background: C.priL,
      marginBottom: "16px"
    }
  }, /*#__PURE__*/React.createElement(CTitle, {
    icon: I.upload
  }, "📸 Escanear receta médica"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "0 0 12px",
      fontSize: "13px",
      color: C.txL
    }
  }, "Haga una foto de la receta y la IA extraerá automáticamente todos los medicamentos."), /*#__PURE__*/React.createElement("input", {
    ref: fileRef,
    type: "file",
    accept: "image/*",
    capture: "environment",
    style: {
      display: "none"
    },
    onChange: e => handleFile(e.target.files[0])
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "10px",
      marginBottom: "12px",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(Btn, {
    onClick: () => fileRef.current?.click(),
    style: {
      fontSize: "13px"
    }
  }, "📷 Foto de receta"), /*#__PURE__*/React.createElement("button", {
    onClick: () => fileRef.current?.click(),
    style: {
      padding: "11px 18px",
      borderRadius: "12px",
      border: `1px solid ${C.g200}`,
      background: C.w,
      color: C.g600,
      fontWeight: "600",
      fontSize: "13px",
      cursor: "pointer"
    }
  }, "🖼️ Subir imagen")), preview && /*#__PURE__*/React.createElement("img", {
    src: preview,
    alt: "Receta",
    style: {
      width: "100%",
      maxHeight: "180px",
      objectFit: "contain",
      borderRadius: "10px",
      border: `1px solid ${C.g200}`,
      marginBottom: "10px"
    }
  }), scanning && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "10px",
      padding: "12px",
      background: C.w,
      borderRadius: "10px",
      marginBottom: "10px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: "20px",
      height: "20px",
      border: `3px solid ${C.g200}`,
      borderTop: `3px solid ${C.pri}`,
      borderRadius: "50%",
      animation: "spin 0.8s linear infinite",
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: "13px",
      color: C.pri,
      fontWeight: "600"
    }
  }, "Analizando receta con IA...")), error && /*#__PURE__*/React.createElement("div", {
    style: {
      background: C.critL,
      border: `1px solid ${C.crit}30`,
      borderRadius: "10px",
      padding: "10px 14px",
      marginBottom: "10px"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: "13px",
      color: C.crit,
      fontWeight: "600"
    }
  }, "⚠️ ", error)), result && result.length > 0 && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "0 0 8px",
      fontSize: "13px",
      fontWeight: "800",
      color: C.ok
    }
  }, "✅ ", result.length, " medicamento", result.length > 1 ? "s" : "", " extraído", result.length > 1 ? "s" : "", ":"), result.map((m, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      background: C.w,
      borderRadius: "10px",
      padding: "11px 13px",
      marginBottom: "7px",
      border: `1px solid ${C.g200}`,
      borderLeft: `4px solid ${C.ok}`
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "0 0 3px",
      fontWeight: "800",
      fontSize: "13px",
      color: C.priD
    }
  }, m.name), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "0 0 3px",
      fontSize: "12px",
      color: C.txL
    }
  }, m.dose, " · ", m.freq), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "5px",
      flexWrap: "wrap"
    }
  }, m.times?.map(t => /*#__PURE__*/React.createElement(Badge, {
    key: t,
    label: t,
    color: C.pri
  })), m.type && /*#__PURE__*/React.createElement(Badge, {
    label: m.type,
    color: C.g400
  })), m.notes && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "4px 0 0",
      fontSize: "11px",
      color: C.txL,
      fontStyle: "italic"
    }
  }, "📝 ", m.notes))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "10px",
      marginTop: "10px"
    }
  }, /*#__PURE__*/React.createElement(Btn, {
    onClick: confirmMeds,
    color: C.ok,
    style: {
      fontSize: "13px"
    }
  }, "✅ Añadir todos a la medicación"), /*#__PURE__*/React.createElement("button", {
    onClick: () => {
      setResult(null);
      setPreview(null);
    },
    style: {
      padding: "10px 16px",
      borderRadius: "10px",
      border: `1px solid ${C.g200}`,
      background: C.w,
      cursor: "pointer",
      fontWeight: "600",
      fontSize: "13px",
      color: C.g600
    }
  }, "Descartar"))));
}
function MedicationModule({
  role,
  patientId: propPatId,
  meds: propMeds,
  setMeds: propSetMeds,
  onSave,
  patients
}) {
  const [allMeds, setAllMeds] = propMeds && propSetMeds ? [propMeds, propSetMeds] : useState(INIT_ALL_MEDS);
  const patList = patients || PATIENTS;
  const [selPatId, setSelPatId] = useState(propPatId || patList[0]?.id || 1);
  const patId = role === "staff" ? selPatId : propPatId || 1;
  const meds = allMeds[patId] || [];
  const setMeds = updater => {
    setAllMeds(prev => {
      const next = typeof updater === "function" ? updater(prev[patId] || []) : updater;
      return {
        ...prev,
        [patId]: next
      };
    });
  };
  const [taken, setTaken] = useState({});
  const [saved, setSaved] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [editMed, setEditMed] = useState(null);
  const [formErr, setFormErr] = useState({});
  const EMPTY_MED = {
    name: "",
    dose: "",
    freq: "Cada 8 horas",
    type: "otro",
    times: ["08:00"],
    active: true,
    color: MED_COLORS[0],
    notes: ""
  };
  const [form, setForm] = useState(EMPTY_MED);
  const now = new Date();
  const curHour = now.getHours();
  const toggleTaken = (medId, time) => {
    const key = `${medId}-${time}`;
    const wasTaken = taken[key];
    setTaken(p => ({
      ...p,
      [key]: !p[key]
    }));
    if (!wasTaken) {
      try {
        const med = meds.find(m => m.id === medId);
        const log = JSON.parse(localStorage.getItem("cuidaencasa_had_adherence") || "[]");
        log.unshift({
          id: Date.now(),
          medId,
          medName: med?.name || "",
          time,
          takenAt: new Date().toISOString(),
          patientId: patId,
          status: "taken"
        });
        localStorage.setItem("cuidaencasa_had_adherence", JSON.stringify(log.slice(0, 500)));
      } catch (e) {}
    }
  };
  useEffect(() => {
    if (role !== "patient") return;
    const now = new Date();
    const curHour = now.getHours();
    const curMin = now.getMinutes();
    meds.filter(m => m.active).forEach(med => {
      med.times?.forEach(time => {
        const [h, mi] = time.split(":").map(Number);
        const key = `${med.id}-${time}`;
        const isPast = h < curHour || h === curHour && mi + 30 < curMin;
        const wasTaken = taken[key];
        if (isPast && !wasTaken) {
          try {
            const alerts = JSON.parse(localStorage.getItem("cuidaencasa_had_had_alerts") || "[]");
            const alreadyExists = alerts.some(a => a.missedKey === key && a.date === now.toLocaleDateString("es-ES"));
            if (!alreadyExists) {
              alerts.unshift({
                id: Date.now(),
                pid: patId,
                time: now.toLocaleTimeString("es-ES", {
                  hour: "2-digit",
                  minute: "2-digit"
                }),
                date: now.toLocaleDateString("es-ES"),
                vital: "Adherencia medicación",
                value: `${med.name} ${time}`,
                level: "warning",
                msg: `Toma de ${med.name} (${time}h) no confirmada por el paciente. Verificar adherencia.`,
                read: false,
                missedKey: key
              });
              localStorage.setItem("cuidaencasa_had_had_alerts", JSON.stringify(alerts.slice(0, 200)));
            }
          } catch (e) {}
        }
      });
    });
  }, []);
  const openAdd = () => {
    setForm(EMPTY_MED);
    setEditMed(null);
    setFormErr({});
    setShowForm(true);
  };
  const openEdit = med => {
    setForm({
      ...med,
      times: [...med.times]
    });
    setEditMed(med.id);
    setFormErr({});
    setShowForm(true);
  };
  const saveMed = () => {
    const errs = {};
    if (!form.name?.trim()) errs.name = "El nombre es obligatorio";
    if (!form.dose?.trim()) errs.dose = "La dosis es obligatoria";
    if (!form.times?.length) errs.times = "Añada al menos un horario";
    if (Object.keys(errs).length) {
      setFormErr(errs);
      return;
    }
    if (editMed) {
      setMeds(p => p.map(m => m.id === editMed ? {
        ...form,
        id: editMed
      } : m));
    } else {
      setMeds(p => [...p, {
        ...form,
        id: Date.now()
      }]);
    }
    setShowForm(false);
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
    onSave && onSave();
  };
  const deleteMed = id => {
    if (!window.confirm("¿Eliminar este medicamento del tratamiento?")) return;
    setMeds(p => p.filter(m => m.id !== id));
    onSave && onSave();
  };
  const toggleActive = id => {
    setMeds(p => p.map(m => m.id === id ? {
      ...m,
      active: !m.active
    } : m));
    onSave && onSave();
  };
  const addTime = () => {
    const t = prompt("Hora de toma (ej: 14:00)");
    if (t && /^\d{2}:\d{2}$/.test(t)) setForm(f => ({
      ...f,
      times: [...f.times, t].sort()
    }));
  };
  const removeTime = t => setForm(f => ({
    ...f,
    times: f.times.filter(x => x !== t)
  }));
  const nextDose = meds.filter(m => m.active).flatMap(m => m.times.map(t => ({
    ...m,
    t
  }))).filter(x => parseInt(x.t) > curHour).sort((a, b) => a.t.localeCompare(b.t))[0];
  return /*#__PURE__*/React.createElement("div", null, showForm && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "fixed",
      inset: 0,
      background: "rgba(0,0,0,0.55)",
      zIndex: 999,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "16px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: C.w,
      borderRadius: "20px",
      maxWidth: "540px",
      width: "100%",
      maxHeight: "92vh",
      overflowY: "auto",
      boxShadow: "0 20px 60px rgba(0,0,0,0.25)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: `linear-gradient(135deg,${C.priD},${C.pri})`,
      padding: "18px 22px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      borderRadius: "20px 20px 0 0"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      color: "white",
      fontWeight: "800",
      fontSize: "16px"
    }
  }, editMed ? "✏️ Editar medicamento" : "➕ Añadir medicamento"), /*#__PURE__*/React.createElement("button", {
    onClick: () => setShowForm(false),
    style: {
      background: "rgba(255,255,255,0.2)",
      border: "none",
      borderRadius: "8px",
      width: "30px",
      height: "30px",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(Ic, {
    d: I.x,
    size: 15,
    color: "white"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "20px"
    }
  }, Object.keys(formErr).length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      background: C.critL,
      border: `1px solid ${C.crit}30`,
      borderRadius: "10px",
      padding: "10px 14px",
      marginBottom: "12px"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: "12px",
      color: C.crit,
      fontWeight: "700"
    }
  }, "⚠️ Corrija los campos marcados antes de guardar.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "12px",
      marginBottom: "14px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: "1/-1"
    }
  }, /*#__PURE__*/React.createElement(VInp, {
    label: "Nombre del medicamento",
    required: true,
    error: formErr.name,
    placeholder: "Ej: Amoxicilina 875mg",
    value: form.name,
    onChange: e => {
      setForm({
        ...form,
        name: e.target.value
      });
      setFormErr(p => ({
        ...p,
        name: undefined
      }));
    }
  })), /*#__PURE__*/React.createElement(VInp, {
    label: "Dosis",
    required: true,
    error: formErr.dose,
    placeholder: "Ej: 1 comprimido",
    value: form.dose,
    onChange: e => {
      setForm({
        ...form,
        dose: e.target.value
      });
      setFormErr(p => ({
        ...p,
        dose: undefined
      }));
    }
  }), /*#__PURE__*/React.createElement(VSel, {
    label: "Frecuencia",
    value: form.freq,
    onChange: e => setForm({
      ...form,
      freq: e.target.value
    })
  }, FREQ_OPTS.map(f => /*#__PURE__*/React.createElement("option", {
    key: f
  }, f))), /*#__PURE__*/React.createElement(VSel, {
    label: "Tipo",
    value: form.type,
    onChange: e => setForm({
      ...form,
      type: e.target.value
    })
  }, MED_TYPES.map(t => /*#__PURE__*/React.createElement("option", {
    key: t
  }, t))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: {
      display: "block",
      fontSize: "12px",
      fontWeight: "600",
      color: C.g600,
      marginBottom: "4px"
    }
  }, "Color identificador"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "8px",
      flexWrap: "wrap"
    }
  }, MED_COLORS.map(col => /*#__PURE__*/React.createElement("div", {
    key: col,
    onClick: () => setForm({
      ...form,
      color: col
    }),
    style: {
      width: "28px",
      height: "28px",
      borderRadius: "50%",
      background: col,
      cursor: "pointer",
      border: `3px solid ${form.color === col ? "white" : "transparent"}`,
      boxShadow: form.color === col ? `0 0 0 2px ${col}` : "none",
      transition: "all 0.15s"
    }
  })))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: {
      display: "block",
      fontSize: "12px",
      fontWeight: "600",
      color: formErr.times ? C.crit : C.g600,
      marginBottom: "4px"
    }
  }, "Horarios de toma ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: C.crit
    }
  }, "*")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "6px",
      flexWrap: "wrap",
      marginBottom: "6px"
    }
  }, form.times.map(t => /*#__PURE__*/React.createElement("span", {
    key: t,
    style: {
      background: C.priL,
      color: C.pri,
      borderRadius: "20px",
      padding: "4px 10px",
      fontSize: "13px",
      fontWeight: "700",
      display: "flex",
      alignItems: "center",
      gap: "5px"
    }
  }, t, /*#__PURE__*/React.createElement("button", {
    onClick: () => removeTime(t),
    style: {
      background: "transparent",
      border: "none",
      color: C.pri,
      cursor: "pointer",
      padding: "0",
      fontSize: "12px",
      lineHeight: "1"
    }
  }, "✕"))), /*#__PURE__*/React.createElement("button", {
    onClick: addTime,
    style: {
      background: C.g100,
      border: `1px dashed ${C.g400}`,
      borderRadius: "20px",
      padding: "4px 10px",
      fontSize: "12px",
      color: C.g600,
      cursor: "pointer"
    }
  }, "+ Añadir hora")), formErr.times && /*#__PURE__*/React.createElement(FieldError, {
    msg: formErr.times
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: "1/-1"
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: {
      display: "block",
      fontSize: "12px",
      fontWeight: "600",
      color: C.g600,
      marginBottom: "4px"
    }
  }, "Notas / instrucciones especiales"), /*#__PURE__*/React.createElement("textarea", {
    value: form.notes || "",
    onChange: e => setForm({
      ...form,
      notes: e.target.value
    }),
    placeholder: "Ej: Tomar con comida, evitar con antiácidos...",
    style: {
      width: "100%",
      padding: "10px 12px",
      borderRadius: "10px",
      border: `2px solid ${C.g200}`,
      fontSize: "13px",
      outline: "none",
      resize: "vertical",
      minHeight: "60px",
      boxSizing: "border-box",
      color: C.tx,
      background: C.w,
      fontFamily: "inherit"
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "10px",
      justifyContent: "flex-end",
      borderTop: `1px solid ${C.g100}`,
      paddingTop: "14px"
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setShowForm(false),
    style: {
      padding: "10px 20px",
      borderRadius: "10px",
      border: `1px solid ${C.g200}`,
      background: C.w,
      cursor: "pointer",
      fontWeight: "600",
      fontSize: "13px",
      color: C.g800
    }
  }, "Cancelar"), /*#__PURE__*/React.createElement(Btn, {
    onClick: saveMed,
    style: {
      fontSize: "13px",
      padding: "10px 22px"
    }
  }, "💾 ", editMed ? "Guardar cambios" : "Añadir medicamento"))))), role === "staff" && /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: "16px"
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: {
      display: "block",
      fontSize: "12px",
      fontWeight: "700",
      color: C.g600,
      marginBottom: "6px",
      textTransform: "uppercase",
      letterSpacing: "0.4px"
    }
  }, "Paciente"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill,minmax(180px,1fr))",
      gap: "8px"
    }
  }, patList.map(p => /*#__PURE__*/React.createElement("button", {
    key: p.id,
    onClick: () => setSelPatId(p.id),
    style: {
      padding: "10px 12px",
      borderRadius: "12px",
      border: `2px solid ${selPatId === p.id ? C.pri : C.g200}`,
      background: selPatId === p.id ? C.priL : C.w,
      color: selPatId === p.id ? C.pri : C.g600,
      fontWeight: selPatId === p.id ? "700" : "500",
      fontSize: "13px",
      cursor: "pointer",
      textAlign: "left",
      transition: "all 0.15s"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "0 0 2px",
      fontWeight: selPatId === p.id ? "800" : "600",
      fontSize: "13px",
      color: selPatId === p.id ? C.pri : C.tx
    }
  }, p.name.split(" ").slice(0, 2).join(" ")), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: "11px",
      color: selPatId === p.id ? C.pri : C.txL
    }
  }, p.room || p.dx))))), role === "staff" && /*#__PURE__*/React.createElement(PrescriptionScanner, {
    onMedsExtracted: extracted => {
      setMeds(p => [...p, ...extracted]);
      setSaved(true);
      setTimeout(() => setSaved(false), 3000);
      onSave && onSave();
    }
  }), role === "staff" && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: "14px",
      flexWrap: "wrap",
      gap: "10px"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "0 0 2px",
      fontWeight: "800",
      fontSize: "15px",
      color: C.priD
    }
  }, patList.find(p => p.id === patId)?.name, " · ", meds.filter(m => m.active).length, " medicamentos activos"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: "12px",
      color: C.txL
    }
  }, meds.filter(m => !m.active).length > 0 ? `${meds.filter(m => !m.active).length} pausados` : "Todos activos")), /*#__PURE__*/React.createElement(Btn, {
    onClick: openAdd,
    style: {
      fontSize: "13px",
      padding: "9px 16px"
    }
  }, /*#__PURE__*/React.createElement(Ic, {
    d: I.plus,
    size: 15,
    color: "white"
  }), " Añadir medicamento")), saved && /*#__PURE__*/React.createElement(SavedBanner, {
    msg: "✅ Medicación actualizada y sincronizada con el paciente"
  }), role === "patient" && (() => {
    try {
      const log = JSON.parse(localStorage.getItem("cuidaencasa_had_adherence") || "[]");
      const today = new Date().toLocaleDateString("es-ES");
      const todayLog = log.filter(l => l.date && new Date(l.takenAt).toLocaleDateString("es-ES") === today);
      const totalDoses = meds.filter(m => m.active).reduce((s, m) => s + (m.times?.length || 0), 0);
      if (!totalDoses) return null;
      const pct = Math.round(todayLog.length / totalDoses * 100);
      return /*#__PURE__*/React.createElement("div", {
        style: {
          background: pct >= 80 ? C.okL : pct >= 50 ? C.warnL : C.critL,
          border: `1px solid ${pct >= 80 ? C.ok : pct >= 50 ? C.warn : C.crit}30`,
          borderRadius: "12px",
          padding: "12px 15px",
          marginBottom: "14px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }
      }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
        style: {
          margin: "0 0 2px",
          fontWeight: "800",
          fontSize: "13px",
          color: pct >= 80 ? C.ok : pct >= 50 ? C.warn : C.crit
        }
      }, pct >= 80 ? "✅" : "⚠️", " Adherencia hoy: ", pct, "%"), /*#__PURE__*/React.createElement("p", {
        style: {
          margin: 0,
          fontSize: "11px",
          color: C.txL
        }
      }, todayLog.length, " de ", totalDoses, " tomas confirmadas")), /*#__PURE__*/React.createElement("span", {
        style: {
          fontSize: "28px"
        }
      }, pct >= 80 ? "🌟" : pct >= 50 ? "📋" : "❗"));
    } catch (e) {
      return null;
    }
  })(), role === "patient" && nextDose && /*#__PURE__*/React.createElement(Card, {
    style: {
      background: `linear-gradient(135deg,${C.pri},${C.priD})`,
      color: "white",
      marginBottom: "16px"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "0 0 4px",
      fontSize: "13px",
      opacity: 0.85
    }
  }, "Próxima toma"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "0 0 8px",
      fontSize: "20px",
      fontWeight: "800"
    }
  }, nextDose.name, " · ", nextDose.t), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: "12px",
      opacity: 0.8
    }
  }, nextDose.dose, " · ", nextDose.freq)), meds.length === 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      padding: "36px 0",
      color: C.g400
    }
  }, /*#__PURE__*/React.createElement(Ic, {
    d: I.pill,
    size: 36,
    color: C.g300
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "14px",
      margin: "12px 0 8px"
    }
  }, "Sin medicación registrada para este paciente"), role === "staff" && /*#__PURE__*/React.createElement("button", {
    onClick: openAdd,
    style: {
      padding: "8px 16px",
      borderRadius: "10px",
      background: C.priL,
      border: `1px solid ${C.pri}40`,
      color: C.pri,
      fontWeight: "700",
      fontSize: "13px",
      cursor: "pointer"
    }
  }, "+ Añadir primer medicamento")), meds.map(med => /*#__PURE__*/React.createElement(Card, {
    key: med.id,
    style: {
      borderLeft: `4px solid ${med.color}`,
      marginBottom: "12px",
      opacity: med.active ? 1 : 0.65
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start",
      marginBottom: "10px",
      flexWrap: "wrap",
      gap: "8px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "10px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: "38px",
      height: "38px",
      borderRadius: "10px",
      background: med.color + "20",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(Ic, {
    d: I.pill,
    size: 18,
    color: med.color
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "0 0 2px",
      fontWeight: "800",
      fontSize: "14px",
      color: C.tx
    }
  }, med.name), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "0 0 4px",
      fontSize: "12px",
      color: C.txL
    }
  }, med.dose, " · ", med.freq), /*#__PURE__*/React.createElement(Badge, {
    label: med.type,
    color: med.color
  }))), role === "staff" && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "6px",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => openEdit(med),
    style: {
      width: "32px",
      height: "32px",
      borderRadius: "8px",
      background: C.priL,
      border: `1px solid ${C.pri}30`,
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    },
    title: "Editar"
  }, /*#__PURE__*/React.createElement(Ic, {
    d: I.edit,
    size: 14,
    color: C.pri
  })), /*#__PURE__*/React.createElement("button", {
    onClick: () => toggleActive(med.id),
    style: {
      padding: "6px 11px",
      borderRadius: "8px",
      background: med.active ? C.okL : C.critL,
      color: med.active ? C.ok : C.crit,
      border: `1px solid ${med.active ? C.ok : C.crit}30`,
      fontWeight: "700",
      fontSize: "12px",
      cursor: "pointer"
    },
    title: med.active ? "Pausar" : "Reactivar"
  }, med.active ? "✓ Activo" : "✕ Pausado"), /*#__PURE__*/React.createElement("button", {
    onClick: () => deleteMed(med.id),
    style: {
      width: "32px",
      height: "32px",
      borderRadius: "8px",
      background: C.critL,
      border: `1px solid ${C.crit}30`,
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    },
    title: "Eliminar"
  }, /*#__PURE__*/React.createElement(Ic, {
    d: I.trash,
    size: 14,
    color: C.crit
  })))), med.notes && /*#__PURE__*/React.createElement("div", {
    style: {
      background: C.g50,
      borderRadius: "8px",
      padding: "7px 10px",
      marginBottom: "10px"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: "12px",
      color: C.g600,
      fontStyle: "italic"
    }
  }, "📝 ", med.notes)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "8px",
      flexWrap: "wrap"
    }
  }, med.times.map(time => {
    const key = `${med.id}-${time}`;
    const done = taken[key];
    const isPast = parseInt(time) < curHour;
    return /*#__PURE__*/React.createElement("button", {
      key: time,
      onClick: () => role === "patient" && med.active && toggleTaken(med.id, time),
      style: {
        padding: "8px 14px",
        borderRadius: "10px",
        background: done ? C.ok : isPast && !done ? "#FEE2E2" : C.g100,
        color: done ? "white" : isPast && !done ? C.crit : C.g600,
        border: `2px solid ${done ? C.ok : isPast && !done ? C.crit : C.g200}`,
        fontWeight: "700",
        fontSize: "13px",
        cursor: role === "patient" && med.active ? "pointer" : "default",
        display: "flex",
        alignItems: "center",
        gap: "5px"
      }
    }, done ? "✓ " : isPast && !done ? "⚠ " : "", time);
  })))), role === "staff" && meds.length > 0 && /*#__PURE__*/React.createElement(Btn, {
    onClick: () => {
      setSaved(true);
      setTimeout(() => setSaved(false), 2500);
      onSave && onSave();
    },
    style: {
      marginTop: "4px"
    }
  }, "💾 Guardar cambios de medicación"));
}
function DigSign({
  professional,
  onSign
}) {
  const ref = useRef(null);
  const [signing, setSigning] = useState(false);
  const [signed, setSigned] = useState(false);
  const [drawing, setDrawing] = useState(false);
  const last = useRef(null);
  const getPos = (e, canvas) => {
    const r = canvas.getBoundingClientRect();
    const src = e.touches ? e.touches[0] : e;
    return {
      x: src.clientX - r.left,
      y: src.clientY - r.top
    };
  };
  const start = e => {
    e.preventDefault();
    setDrawing(true);
    last.current = getPos(e, ref.current);
  };
  const draw = e => {
    e.preventDefault();
    if (!drawing) return;
    const c = ref.current;
    const ctx = c.getContext("2d");
    const p = getPos(e, c);
    ctx.beginPath();
    ctx.moveTo(last.current.x, last.current.y);
    ctx.lineTo(p.x, p.y);
    ctx.strokeStyle = C.priD;
    ctx.lineWidth = 2.5;
    ctx.lineCap = "round";
    ctx.stroke();
    last.current = p;
  };
  const end = () => setDrawing(false);
  const clear = () => {
    ref.current.getContext("2d").clearRect(0, 0, ref.current.width, ref.current.height);
    setSigned(false);
  };
  const confirm = () => {
    setSigned(true);
    setSigning(false);
    onSign && onSign({
      professional,
      timestamp: new Date().toLocaleString("es-ES"),
      data: ref.current.toDataURL()
    });
  };
  if (signed) return /*#__PURE__*/React.createElement("div", {
    style: {
      background: C.okL,
      border: `1px solid ${C.ok}`,
      borderRadius: "12px",
      padding: "13px 16px",
      display: "flex",
      alignItems: "center",
      gap: "10px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: "36px",
      height: "36px",
      borderRadius: "50%",
      background: C.ok,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(Ic, {
    d: I.check,
    size: 18,
    color: "white"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "0 0 2px",
      fontWeight: "800",
      color: C.ok,
      fontSize: "13px"
    }
  }, "✅ Nota firmada digitalmente"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: "11px",
      color: C.g600
    }
  }, professional, " · ", new Date().toLocaleString("es-ES"))));
  if (!signing) return /*#__PURE__*/React.createElement("button", {
    onClick: () => setSigning(true),
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "7px",
      padding: "9px 16px",
      borderRadius: "10px",
      background: C.priL,
      border: `1px solid ${C.pri}40`,
      color: C.pri,
      fontWeight: "700",
      fontSize: "13px",
      cursor: "pointer"
    }
  }, "✍️ Firmar digitalmente");
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: C.g50,
      border: `2px solid ${C.g200}`,
      borderRadius: "14px",
      padding: "14px",
      marginTop: "10px",
      animation: "fadeIn 0.2s"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "0 0 8px",
      fontSize: "12px",
      fontWeight: "700",
      color: C.g600
    }
  }, "Firme en el recuadro:"), /*#__PURE__*/React.createElement("canvas", {
    ref: ref,
    width: 400,
    height: 90,
    style: {
      width: "100%",
      height: "90px",
      background: C.w,
      borderRadius: "10px",
      border: `1px solid ${C.g200}`,
      cursor: "crosshair",
      display: "block",
      touchAction: "none"
    },
    onMouseDown: start,
    onMouseMove: draw,
    onMouseUp: end,
    onMouseLeave: end,
    onTouchStart: start,
    onTouchMove: draw,
    onTouchEnd: end
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "5px 0 10px",
      fontSize: "11px",
      color: C.g400
    }
  }, professional, " · ", new Date().toLocaleString("es-ES")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "8px",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(Btn, {
    onClick: confirm,
    color: C.ok,
    style: {
      fontSize: "13px",
      padding: "8px 16px"
    }
  }, "✅ Confirmar"), /*#__PURE__*/React.createElement("button", {
    onClick: clear,
    style: {
      padding: "8px 14px",
      borderRadius: "10px",
      background: C.g100,
      color: C.g800,
      fontWeight: "600",
      fontSize: "13px",
      border: `1px solid ${C.g200}`,
      cursor: "pointer"
    }
  }, "🗑 Borrar"), /*#__PURE__*/React.createElement("button", {
    onClick: () => setSigning(false),
    style: {
      padding: "8px 14px",
      borderRadius: "10px",
      background: C.g100,
      color: C.g800,
      fontWeight: "600",
      fontSize: "13px",
      border: `1px solid ${C.g200}`,
      cursor: "pointer"
    }
  }, "Cancelar")));
}
function StatsDashboard({
  visits: propVisits,
  alerts: propAlerts,
  patients: propPatients
}) {
  const [storedVisits] = useSyncedState("had_visits", INIT_VISITS);
  const [storedAlerts] = useSyncedState("had_alerts", INIT_ALERTS);
  const INIT_PATIENTS_REG = [{
    id: 1,
    name: "María García López",
    age: 78,
    dx: "EPOC agudizado",
    room: "HAD-001",
    doctor: "Dr. Pérez",
    nurse: "Enf. Rodríguez",
    zone: "north",
    priority: "urgente",
    status: "activo",
    access: true,
    familyAccess: true,
    contact: "612 345 678",
    addr: "C/ Balmes 45, Barcelona"
  }, {
    id: 2,
    name: "Josep Martínez Puig",
    age: 65,
    dx: "Insuficiencia cardíaca",
    room: "HAD-002",
    doctor: "Dr. Martín",
    nurse: "Enf. García",
    zone: "left",
    priority: "alta",
    status: "activo",
    access: true,
    familyAccess: false,
    contact: "934 567 890",
    addr: "Av. Diagonal 123, Barcelona"
  }, {
    id: 3,
    name: "Carmen Ruiz Soler",
    age: 71,
    dx: "Neumonía bacteriana",
    room: "HAD-003",
    doctor: "Dr. Pérez",
    nurse: "Enf. Rodríguez",
    zone: "center2",
    priority: "normal",
    status: "activo",
    access: false,
    familyAccess: false,
    contact: "678 901 234",
    addr: "C/ Aragón 78, Barcelona"
  }];
  const [storedPatients] = useSyncedState("had_patients", INIT_PATIENTS_REG);
  const [storedHist] = useSyncedState("had_hist_all", INIT_ALL_HIST);
  const visits = propVisits || storedVisits;
  const alerts = propAlerts || storedAlerts;
  const patients = propPatients || storedPatients;
  const activePats = patients.filter(p => p.status === "activo");
  const urgentPats = activePats.filter(p => p.priority === "urgente");
  const doneVisits = visits.filter(v => v.status === "completada");
  const pendVisits = visits.filter(v => v.status === "pendiente");
  const critAlerts = alerts.filter(a => a.level === "critical");
  const resolvedAlerts = alerts.filter(a => a.read);
  const avgDuration = visits.length ? Math.round(visits.reduce((s, v) => s + Number(v.duration || 30), 0) / visits.length) : 0;
  const byZone = ZONES.map(z => ({
    ...z,
    total: visits.filter(v => v.zone === z.id).length,
    done: visits.filter(v => v.zone === z.id && v.status === "completada").length
  })).filter(z => z.total > 0);
  const byProf = PROFS.map(p => ({
    ...p,
    total: visits.filter(v => v.professional === p.name).length,
    done: visits.filter(v => v.professional === p.name && v.status === "completada").length,
    urgent: visits.filter(v => v.professional === p.name && v.priority === "urgente").length,
    minutes: visits.filter(v => v.professional === p.name).reduce((s, v) => s + Number(v.duration || 30), 0)
  })).filter(p => p.total > 0);
  const visitTypes = [...new Set(visits.map(v => v.type || "Médico"))];
  const byType = visitTypes.map(t => ({
    type: t,
    count: visits.filter(v => (v.type || "Médico") === t).length
  })).sort((a, b) => b.count - a.count);
  const alertsByLevel = [{
    l: "Críticas",
    v: critAlerts.length,
    c: C.crit
  }, {
    l: "Alertas",
    v: alerts.filter(a => a.level === "warning").length,
    c: C.warn
  }, {
    l: "Normales",
    v: alerts.filter(a => a.level === "normal").length,
    c: C.ok
  }, {
    l: "Resueltas",
    v: resolvedAlerts.length,
    c: C.g400
  }];
  const allRows = Object.values(storedHist).flat();
  const avgSat = allRows.filter(r => r.sat).length ? (allRows.filter(r => r.sat).reduce((s, r) => s + parseFloat(r.sat || 0), 0) / allRows.filter(r => r.sat).length).toFixed(1) : "—";
  const avgTemp = allRows.filter(r => r.temp).length ? (allRows.filter(r => r.temp).reduce((s, r) => s + parseFloat(r.temp || 0), 0) / allRows.filter(r => r.temp).length).toFixed(1) : "—";
  const byPriority = [{
    l: "🔴 Urgente",
    v: urgentPats.length,
    c: C.crit
  }, {
    l: "🟠 Alta",
    v: activePats.filter(p => p.priority === "alta").length,
    c: C.warn
  }, {
    l: "🟢 Normal",
    v: activePats.filter(p => p.priority === "normal").length,
    c: C.ok
  }];
  const maxVisits = Math.max(...byProf.map(p => p.total), 1);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      background: C.okL,
      border: `1px solid ${C.ok}30`,
      borderRadius: "10px",
      padding: "9px 14px",
      marginBottom: "16px",
      display: "flex",
      alignItems: "center",
      gap: "8px"
    }
  }, /*#__PURE__*/React.createElement(Ic, {
    d: I.check,
    size: 14,
    color: C.ok
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: "12px",
      color: C.ok,
      fontWeight: "600"
    }
  }, "Datos en tiempo real — basados en ", visits.length, " visitas, ", alerts.length, " alertas y ", patients.length, " pacientes registrados")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: "10px",
      marginBottom: "16px"
    }
  }, [{
    label: "Pacientes activos",
    val: activePats.length,
    color: C.pri,
    icon: "👥"
  }, {
    label: "Urgentes",
    val: urgentPats.length,
    color: C.crit,
    icon: "🔴"
  }, {
    label: "Visitas totales",
    val: visits.length,
    color: C.ok,
    icon: "📋"
  }, {
    label: "Completadas",
    val: doneVisits.length,
    color: C.ok,
    icon: "✅"
  }, {
    label: "Alertas críticas",
    val: critAlerts.length,
    color: C.crit,
    icon: "🔔"
  }, {
    label: "Duración media",
    val: avgDuration + "min",
    color: C.ai,
    icon: "⏱"
  }, {
    label: "Sat O₂ media",
    val: avgSat + "%",
    color: C.ok,
    icon: "💙"
  }, {
    label: "Temp. media",
    val: avgTemp + "°C",
    color: C.pri,
    icon: "🌡️"
  }, {
    label: "Alertas resueltas",
    val: resolvedAlerts.length,
    color: C.g400,
    icon: "✓"
  }].map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      background: s.color + "12",
      borderRadius: "12px",
      padding: "12px",
      borderLeft: `4px solid ${s.color}`
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "0 0 2px",
      fontSize: "18px"
    }
  }, s.icon), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "0 0 2px",
      fontSize: "22px",
      fontWeight: "800",
      color: s.color
    }
  }, s.val), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: "10px",
      color: C.txL
    }
  }, s.label)))), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(CTitle, {
    icon: I.users
  }, "Visitas por profesional"), byProf.length === 0 ? /*#__PURE__*/React.createElement("p", {
    style: {
      color: C.g400,
      textAlign: "center",
      padding: "16px 0"
    }
  }, "Sin visitas registradas") : byProf.map((p, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      marginBottom: "12px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      marginBottom: "4px",
      flexWrap: "wrap",
      gap: "5px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "7px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: "10px",
      height: "10px",
      borderRadius: "50%",
      background: p.color,
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "12px",
      fontWeight: "700"
    }
  }, p.name), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "11px",
      color: C.txL
    }
  }, p.role)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "6px",
      alignItems: "center"
    }
  }, p.urgent > 0 && /*#__PURE__*/React.createElement(Badge, {
    label: `🔴 ${p.urgent}`,
    color: C.crit
  }), /*#__PURE__*/React.createElement(Badge, {
    label: `⏱ ${p.minutes}min`,
    color: C.g400
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "12px",
      fontWeight: "800",
      color: p.color
    }
  }, p.done, "/", p.total))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: "10px",
      background: C.g100,
      borderRadius: "5px",
      overflow: "hidden",
      display: "flex"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: `${p.done / Math.max(p.total, 1) * 100}%`,
      height: "100%",
      background: p.color,
      borderRadius: "5px",
      transition: "width 0.5s"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      width: `${(p.total - p.done) / Math.max(p.total, 1) * 100}%`,
      height: "100%",
      background: p.color + "40"
    }
  })))), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "8px 0 0",
      fontSize: "11px",
      color: C.g400
    }
  }, "Barra completa = total visitas · Sólido = completadas · Transparente = pendientes")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "14px",
      marginBottom: "0"
    }
  }, /*#__PURE__*/React.createElement(Card, {
    style: {
      marginBottom: 0
    }
  }, /*#__PURE__*/React.createElement(CTitle, {
    icon: I.map
  }, "Visitas por zona"), byZone.length === 0 ? /*#__PURE__*/React.createElement("p", {
    style: {
      color: C.g400,
      fontSize: "13px"
    }
  }, "Sin datos") : byZone.map((z, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      marginBottom: "10px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      marginBottom: "4px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "13px",
      fontWeight: "600"
    }
  }, z.emoji, " ", z.label), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "13px",
      fontWeight: "800",
      color: z.color
    }
  }, z.done, "/", z.total)), /*#__PURE__*/React.createElement("div", {
    style: {
      height: "8px",
      background: C.g200,
      borderRadius: "4px",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: `${z.done / Math.max(z.total, 1) * 100}%`,
      height: "100%",
      background: z.color,
      borderRadius: "4px",
      transition: "width 0.5s"
    }
  }))))), /*#__PURE__*/React.createElement(Card, {
    style: {
      marginBottom: 0
    }
  }, /*#__PURE__*/React.createElement(CTitle, {
    icon: I.activity
  }, "Alertas por nivel"), alertsByLevel.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      marginBottom: "10px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      marginBottom: "4px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "13px",
      fontWeight: "600"
    }
  }, s.l), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "13px",
      fontWeight: "800",
      color: s.c
    }
  }, s.v)), /*#__PURE__*/React.createElement("div", {
    style: {
      height: "8px",
      background: C.g200,
      borderRadius: "4px",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: `${s.v / Math.max(alerts.length, 1) * 100}%`,
      height: "100%",
      background: s.c,
      borderRadius: "4px",
      transition: "width 0.5s"
    }
  })))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "14px",
      marginTop: "14px"
    }
  }, /*#__PURE__*/React.createElement(Card, {
    style: {
      marginBottom: 0
    }
  }, /*#__PURE__*/React.createElement(CTitle, {
    icon: I.alert
  }, "Pacientes por prioridad"), byPriority.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "9px 0",
      borderBottom: i < byPriority.length - 1 ? `1px solid ${C.g100}` : "none"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "13px",
      fontWeight: "600"
    }
  }, s.l), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "8px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: "60px",
      height: "8px",
      background: C.g200,
      borderRadius: "4px",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: `${s.v / Math.max(activePats.length, 1) * 100}%`,
      height: "100%",
      background: s.c,
      borderRadius: "4px"
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "14px",
      fontWeight: "800",
      color: s.c,
      minWidth: "20px"
    }
  }, s.v))))), /*#__PURE__*/React.createElement(Card, {
    style: {
      marginBottom: 0
    }
  }, /*#__PURE__*/React.createElement(CTitle, {
    icon: I.clip
  }, "Tipos de visita"), byType.length === 0 ? /*#__PURE__*/React.createElement("p", {
    style: {
      color: C.g400,
      fontSize: "13px"
    }
  }, "Sin visitas") : byType.map((t, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "9px 0",
      borderBottom: i < byType.length - 1 ? `1px solid ${C.g100}` : "none"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "13px",
      fontWeight: "600"
    }
  }, t.type), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "8px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: "60px",
      height: "8px",
      background: C.g200,
      borderRadius: "4px",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: `${t.count / Math.max(visits.length, 1) * 100}%`,
      height: "100%",
      background: C.pri,
      borderRadius: "4px"
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "14px",
      fontWeight: "800",
      color: C.pri,
      minWidth: "20px"
    }
  }, t.count)))))));
}
function PhotoCapture({
  onCapture
}) {
  const [photos, setPhotos] = useState([]);
  const fileRef = useRef(null);
  const handleFile = e => {
    const files = Array.from(e.target.files || []);
    files.forEach(f => {
      const reader = new FileReader();
      reader.onload = ev => setPhotos(p => [...p, {
        id: Date.now() + Math.random(),
        src: ev.target.result,
        date: new Date().toLocaleString("es-ES"),
        caption: ""
      }]);
      reader.readAsDataURL(f);
    });
  };
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("input", {
    ref: fileRef,
    type: "file",
    accept: "image/*",
    capture: "environment",
    multiple: true,
    onChange: handleFile,
    style: {
      display: "none"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "10px",
      marginBottom: "14px",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(Btn, {
    onClick: () => fileRef.current.click(),
    color: C.pri,
    style: {
      fontSize: "13px",
      padding: "9px 16px"
    }
  }, /*#__PURE__*/React.createElement(Ic, {
    d: I.camera,
    size: 16,
    color: "white"
  }), " Adjuntar foto"), photos.length > 0 && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "13px",
      color: C.txL,
      alignSelf: "center"
    }
  }, photos.length, " foto", photos.length > 1 ? "s" : "", " adjunta", photos.length > 1 ? "s" : "")), photos.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill,minmax(120px,1fr))",
      gap: "10px"
    }
  }, photos.map(ph => /*#__PURE__*/React.createElement("div", {
    key: ph.id,
    style: {
      borderRadius: "10px",
      overflow: "hidden",
      position: "relative",
      border: `2px solid ${C.g200}`
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: ph.src,
    alt: "Foto clínica",
    style: {
      width: "100%",
      height: "90px",
      objectFit: "cover",
      display: "block"
    }
  }), /*#__PURE__*/React.createElement("button", {
    onClick: () => setPhotos(p => p.filter(x => x.id !== ph.id)),
    style: {
      position: "absolute",
      top: "4px",
      right: "4px",
      width: "20px",
      height: "20px",
      borderRadius: "50%",
      background: "rgba(155,28,28,0.85)",
      color: "white",
      fontSize: "10px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      border: "none",
      cursor: "pointer"
    }
  }, "✕"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "4px 6px",
      fontSize: "10px",
      color: C.g600
    }
  }, ph.date)))));
}
function WeeklyCalendar({
  visits,
  onAdd,
  onVisitClick
}) {
  const days = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];
  const today = new Date();
  const [weekOffset, setWeekOffset] = useState(0); // 0=this week, -1=last, +1=next
  const [selectedDay, setSelectedDay] = useState(today.getDay() === 0 ? 6 : today.getDay() - 1);
  const startOfWeek = new Date(today);
  startOfWeek.setDate(today.getDate() - today.getDay() + 1 + weekOffset * 7);
  const getDateForDay = i => {
    const d = new Date(startOfWeek);
    d.setDate(d.getDate() + i);
    return d;
  };
  const isToday = i => {
    const d = getDateForDay(i);
    return d.toDateString() === today.toDateString();
  };
  const visitsByDay = days.map((day, i) => {
    const dayDate = getDateForDay(i);
    const dayStr = dayDate.toISOString().split("T")[0];
    const todayStr = today.toISOString().split("T")[0];
    return visits.filter(v => {
      if (v.date) return v.date === dayStr;
      return dayStr === todayStr;
    }).sort((a, b) => a.time.localeCompare(b.time));
  });
  const todayStr = today.toISOString().split("T")[0];
  const todayVisits = visits.filter(v => !v.date || v.date === todayStr).sort((a, b) => a.time.localeCompare(b.time));
  const selectedVisits = visitsByDay[selectedDay] || [];
  const totalThisWeek = weekOffset === 0 ? visits.length : 0;
  const doneThisWeek = weekOffset === 0 ? visits.filter(v => v.status === "completada").length : 0;
  const urgentThisWeek = weekOffset === 0 ? visits.filter(v => v.priority === "urgente" && v.status !== "completada").length : 0;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: "16px",
      flexWrap: "wrap",
      gap: "10px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "10px"
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setWeekOffset(w => w - 1),
    style: {
      width: "32px",
      height: "32px",
      borderRadius: "8px",
      border: `1px solid ${C.g200}`,
      background: C.w,
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "16px"
    }
  }, "‹"), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontSize: "15px",
      color: C.priD,
      fontWeight: "700"
    }
  }, weekOffset === 0 ? "Esta semana" : weekOffset === -1 ? "Semana pasada" : weekOffset === 1 ? "Próxima semana" : `Semana del ${startOfWeek.toLocaleDateString("es-ES", {
    day: "numeric",
    month: "short"
  })}`), /*#__PURE__*/React.createElement("button", {
    onClick: () => setWeekOffset(w => w + 1),
    style: {
      width: "32px",
      height: "32px",
      borderRadius: "8px",
      border: `1px solid ${C.g200}`,
      background: C.w,
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "16px"
    }
  }, "›"), weekOffset !== 0 && /*#__PURE__*/React.createElement("button", {
    onClick: () => setWeekOffset(0),
    style: {
      padding: "5px 10px",
      borderRadius: "8px",
      border: `1px solid ${C.pri}`,
      background: C.priL,
      color: C.pri,
      cursor: "pointer",
      fontSize: "12px",
      fontWeight: "700"
    }
  }, "Hoy")), /*#__PURE__*/React.createElement(Btn, {
    onClick: onAdd,
    style: {
      fontSize: "13px",
      padding: "8px 14px"
    }
  }, /*#__PURE__*/React.createElement(Ic, {
    d: I.plus,
    size: 15,
    color: "white"
  }), " Nueva visita")), weekOffset === 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr 1fr",
      gap: "10px",
      marginBottom: "14px"
    }
  }, [{
    l: "Visitas totales",
    v: totalThisWeek,
    c: C.pri
  }, {
    l: "Completadas",
    v: doneThisWeek,
    c: C.ok
  }, {
    l: "Urgentes",
    v: urgentThisWeek,
    c: urgentThisWeek > 0 ? C.crit : C.g400
  }].map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      background: s.c + "12",
      borderRadius: "12px",
      padding: "10px 12px",
      borderLeft: `4px solid ${s.c}`,
      display: "flex",
      gap: "10px",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "20px",
      fontWeight: "800",
      color: s.c
    }
  }, s.v), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "11px",
      color: C.txL
    }
  }, s.l)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(7,1fr)",
      gap: "6px",
      marginBottom: "16px"
    }
  }, days.map((day, i) => {
    const date = getDateForDay(i);
    const dayVisits = weekOffset === 0 && date.toDateString() === today.toDateString() ? visits : visitsByDay[i];
    const urgent = dayVisits.filter(v => v.priority === "urgente" && v.status !== "completada").length;
    const done = dayVisits.filter(v => v.status === "completada").length;
    const isSelected = selectedDay === i;
    const isTod = isToday(i);
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      onClick: () => setSelectedDay(i),
      style: {
        borderRadius: "12px",
        padding: "9px 6px",
        background: isTod ? C.pri : isSelected ? C.priL : C.g50,
        border: `2px solid ${isTod ? C.pri : isSelected ? C.pri : C.g200}`,
        textAlign: "center",
        minHeight: "76px",
        cursor: "pointer",
        transition: "all 0.15s"
      }
    }, /*#__PURE__*/React.createElement("p", {
      style: {
        margin: "0 0 2px",
        fontSize: "10px",
        fontWeight: "700",
        color: isTod ? "rgba(255,255,255,0.85)" : isSelected ? C.pri : C.g600
      }
    }, day.slice(0, 3).toUpperCase()), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: "0 0 5px",
        fontSize: "16px",
        fontWeight: "800",
        color: isTod ? "white" : isSelected ? C.pri : C.tx
      }
    }, date.getDate()), dayVisits.length > 0 ? /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: "2px"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: "10px",
        fontWeight: "700",
        color: isTod ? "white" : C.pri
      }
    }, dayVisits.length, "v"), done > 0 && /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: "9px",
        color: isTod ? "rgba(255,255,255,0.8)" : C.ok
      }
    }, "✓", done), urgent > 0 && /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: "9px",
        color: isTod ? "rgba(255,150,150,1)" : C.crit
      }
    }, "🔴", urgent)) : /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: "10px",
        color: isTod ? "rgba(255,255,255,0.5)" : C.g400
      }
    }, "—"));
  })), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(CTitle, {
    icon: I.calendar
  }, isToday(selectedDay) ? `Hoy — ${today.toLocaleDateString("es-ES", {
    weekday: "long",
    day: "numeric",
    month: "long"
  })}` : `${days[selectedDay]} ${getDateForDay(selectedDay).toLocaleDateString("es-ES", {
    day: "numeric",
    month: "long"
  })}`), selectedVisits.length === 0 ? /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      padding: "24px 0"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      color: C.g400,
      margin: "0 0 12px"
    }
  }, "Sin visitas para este día"), /*#__PURE__*/React.createElement(Btn, {
    onClick: onAdd,
    style: {
      fontSize: "12px",
      padding: "8px 16px"
    }
  }, /*#__PURE__*/React.createElement(Ic, {
    d: I.plus,
    size: 14,
    color: "white"
  }), " Añadir visita")) : selectedVisits.map(v => {
    const pr = PR[v.priority] || PR.normal;
    const st = ST[v.status] || ST.pendiente;
    const zone = ZONES.find(z => z.id === v.zone);
    return /*#__PURE__*/React.createElement("div", {
      key: v.id,
      onClick: () => onVisitClick && onVisitClick(v),
      style: {
        display: "flex",
        gap: "12px",
        alignItems: "flex-start",
        padding: "12px",
        borderRadius: "12px",
        background: pr.bg,
        marginBottom: "8px",
        borderLeft: `4px solid ${pr.color}`,
        cursor: onVisitClick ? "pointer" : "default",
        transition: "opacity 0.15s"
      },
      onMouseEnter: e => onVisitClick && (e.currentTarget.style.opacity = "0.85"),
      onMouseLeave: e => e.currentTarget.style.opacity = "1"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: "42px",
        height: "42px",
        borderRadius: "10px",
        background: pr.color,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: "9px",
        color: "rgba(255,255,255,0.8)",
        fontWeight: "700"
      }
    }, "⏰"), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: "12px",
        color: "white",
        fontWeight: "800"
      }
    }, v.time)), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: "7px",
        marginBottom: "4px",
        flexWrap: "wrap",
        alignItems: "center"
      }
    }, /*#__PURE__*/React.createElement(Badge, {
      label: pr.label,
      color: pr.color,
      bg: pr.bg
    }), /*#__PURE__*/React.createElement(Badge, {
      label: st.label,
      color: st.color,
      bg: st.bg
    }), zone && /*#__PURE__*/React.createElement(Badge, {
      label: `${zone.emoji} ${zone.label}`,
      color: zone.color
    })), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: "0 0 2px",
        fontWeight: "700",
        fontSize: "13px"
      }
    }, v.patName), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: "10px",
        fontSize: "12px",
        color: C.txL,
        flexWrap: "wrap"
      }
    }, /*#__PURE__*/React.createElement("span", null, "📍 ", v.addr), /*#__PURE__*/React.createElement("span", null, "⏱ ", v.duration, "min"), /*#__PURE__*/React.createElement("span", null, "👤 ", v.professional)), v.notes && /*#__PURE__*/React.createElement("p", {
      style: {
        margin: "4px 0 0",
        fontSize: "11px",
        color: C.txL,
        fontStyle: "italic"
      }
    }, "📝 ", v.notes)));
  })));
}
function FamilyPortal() {
  const [tab, setTab] = useState("resumen");
  const tabs = [{
    id: "resumen",
    label: "📋 Resumen"
  }, {
    id: "constantes",
    label: "📊 Constantes"
  }, {
    id: "medicacion",
    label: "💊 Medicación"
  }, {
    id: "evolucion",
    label: "📝 Notas"
  }];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Card, {
    style: {
      background: `linear-gradient(135deg,${C.pri},${C.priD})`,
      color: "white"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "0 0 4px",
      fontSize: "13px",
      opacity: 0.8
    }
  }, "Vista familiar de"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: "0 0 6px",
      fontSize: "20px",
      fontWeight: "800"
    }
  }, "María García López"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "16px",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "0 0 2px",
      opacity: 0.7,
      fontSize: "11px"
    }
  }, "DIAGNÓSTICO"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontWeight: "700",
      fontSize: "13px"
    }
  }, "EPOC agudizado")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "0 0 2px",
      opacity: 0.7,
      fontSize: "11px"
    }
  }, "MÉDICO"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontWeight: "700",
      fontSize: "13px"
    }
  }, "Dr. Pérez González")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "0 0 2px",
      opacity: 0.7,
      fontSize: "11px"
    }
  }, "ESTADO"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontWeight: "700",
      fontSize: "13px"
    }
  }, "🟡 En vigilancia")))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "6px",
      marginBottom: "16px",
      flexWrap: "wrap"
    }
  }, tabs.map(t => /*#__PURE__*/React.createElement("button", {
    key: t.id,
    onClick: () => setTab(t.id),
    style: {
      padding: "8px 14px",
      borderRadius: "10px",
      border: `2px solid ${tab === t.id ? C.pri : C.g200}`,
      background: tab === t.id ? C.priL : C.w,
      color: tab === t.id ? C.pri : C.g600,
      fontWeight: tab === t.id ? "700" : "500",
      fontSize: "13px",
      cursor: "pointer"
    }
  }, t.label))), tab === "resumen" && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "12px",
      marginBottom: "16px"
    }
  }, [{
    label: "Sat. O₂",
    val: "89%",
    k: "sat",
    v: "89"
  }, {
    label: "Temp.",
    val: "38.7°C",
    k: "temp",
    v: "38.7"
  }, {
    label: "Tensión",
    val: "128/78",
    k: "ta",
    v: "128/78"
  }, {
    label: "F. Cardíaca",
    val: "72 lpm",
    k: "fc",
    v: "72"
  }].map((s, i) => {
    const lv = s.k === "ta" ? evalTA(s.v) : evalV(s.k, s.v);
    const col = aC(lv);
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        background: col + "12",
        borderRadius: "14px",
        padding: "14px",
        borderLeft: `4px solid ${col}`
      }
    }, /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: "20px",
        fontWeight: "800",
        color: col,
        margin: "0 0 3px"
      }
    }, s.val), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: "12px",
        color: C.txL,
        margin: "0 0 5px"
      }
    }, s.label), /*#__PURE__*/React.createElement(Badge, {
      label: aL(lv),
      color: col
    }));
  })), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(CTitle, {
    icon: I.calendar
  }, "Próxima visita médica"), /*#__PURE__*/React.createElement("div", {
    style: {
      background: C.priL,
      borderRadius: "12px",
      padding: "14px",
      display: "flex",
      gap: "14px",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: "48px",
      height: "48px",
      background: C.pri,
      borderRadius: "12px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(Ic, {
    d: I.calendar,
    size: 22,
    color: "white"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "0 0 2px",
      fontWeight: "800",
      fontSize: "15px"
    }
  }, "Mañana, 19/04/2026"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "0 0 2px",
      fontSize: "13px",
      color: C.txL
    }
  }, "Dr. Pérez González · 10:00 AM"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: "12px",
      color: C.txL
    }
  }, "Revisión y ajuste de medicación")))), /*#__PURE__*/React.createElement(Card, {
    style: {
      background: C.okL,
      border: `1px solid ${C.ok}30`
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "0 0 8px",
      fontWeight: "800",
      color: C.ok,
      fontSize: "14px"
    }
  }, "💬 Última nota del médico"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "0 0 6px",
      fontSize: "14px",
      lineHeight: "1.6",
      color: C.tx
    }
  }, "\"Paciente con mejoría progresiva. Saturación estable. Continuar con oxigenoterapia 3 L/min.\""), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: "11px",
      color: C.g600
    }
  }, "Dr. Pérez · 18/04/2026 · 09:00")), /*#__PURE__*/React.createElement(Card, {
    style: {
      background: C.critL,
      border: `1px solid ${C.crit}30`
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "0 0 8px",
      fontWeight: "800",
      color: C.crit,
      fontSize: "14px"
    }
  }, "🔴 Cuándo llamar al 112"), /*#__PURE__*/React.createElement("ul", {
    style: {
      margin: 0,
      paddingLeft: "20px",
      lineHeight: "2.1",
      fontSize: "13px",
      color: C.tx
    }
  }, /*#__PURE__*/React.createElement("li", null, "Saturación por debajo del 88%"), /*#__PURE__*/React.createElement("li", null, "Fiebre superior a 39°C"), /*#__PURE__*/React.createElement("li", null, "Dificultad grave para hablar o respirar"), /*#__PURE__*/React.createElement("li", null, "Confusión o desorientación")))), tab === "constantes" && /*#__PURE__*/React.createElement(VitalsModule, {
    role: "patient",
    patientId: 1
  }), tab === "medicacion" && /*#__PURE__*/React.createElement(MedicationModule, {
    role: "patient",
    patientId: 1,
    meds: INIT_ALL_MEDS
  }), tab === "evolucion" && /*#__PURE__*/React.createElement("div", null, NOTES.map((n, i) => /*#__PURE__*/React.createElement(Card, {
    key: i,
    style: {
      borderLeft: `4px solid ${i === 0 ? C.pri : C.g200}`,
      marginBottom: "10px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "8px",
      marginBottom: "6px",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: "700",
      fontSize: "13px",
      color: C.pri
    }
  }, n.date), /*#__PURE__*/React.createElement(Badge, {
    label: n.author,
    color: C.pri
  }), n.signed && /*#__PURE__*/React.createElement(Badge, {
    label: "✅ Firmada",
    color: C.ok
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: "14px",
      lineHeight: "1.7"
    }
  }, n.text)))));
}
function LeafletMap({
  visits,
  selected,
  onSelect
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: C.g50,
      borderRadius: "12px",
      padding: "16px",
      textAlign: "center",
      border: `2px dashed ${C.g200}`
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "0 0 8px",
      fontSize: "13px",
      color: C.g600
    }
  }, "🗺️ Mapa de rutas — ", visits.length, " visitas"), visits.map((v, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    onClick: () => onSelect && onSelect(v),
    style: {
      padding: "8px 10px",
      borderRadius: "8px",
      background: selected?.id === v.id ? C.priL : C.w,
      border: `1px solid ${selected?.id === v.id ? C.pri : C.g200}`,
      marginBottom: "5px",
      cursor: "pointer",
      textAlign: "left",
      fontSize: "12px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: "700",
      color: C.pri
    }
  }, v.time), " · ", v.patName, " · ", v.addr)));
}
function RouteModule({
  visits,
  setVisits,
  sendNotif,
  regPats = INIT_PATIENTS_REG
}) {
  const [view, setView] = useState("dia");
  const [filterZone, setFilterZone] = useState("todas");
  const [filterProf, setFilterProf] = useState("todos");
  const [showForm, setShowForm] = useState(false);
  const [editId, setEditId] = useState(null);
  const [saved, setSaved] = useState(false);
  const TODAY_DATE = new Date().toISOString().split("T")[0];
  const EMPTY = {
    pid: null,
    patName: "",
    addr: "",
    zone: "norte",
    date: TODAY_DATE,
    time: "",
    duration: 30,
    priority: "normal",
    type: "Médico",
    notes: "",
    professional: "Dr. Pérez",
    status: "pendiente",
    lat: 41.39,
    lng: 2.17
  };
  const [form, setForm] = useState(EMPTY);
  const selectPatient = pid => {
    const pat = regPats.find(p => p.id === +pid);
    if (!pat) {
      setForm({
        ...EMPTY,
        pid: null
      });
      return;
    }
    const existingVisit = visits.find(v => v.pid === pat.id);
    setForm(f => ({
      ...f,
      pid: pat.id,
      patName: pat.name,
      addr: pat.addr,
      zone: pat.zone,
      priority: pat.priority,
      professional: pat.doctor,
      // default to assigned doctor
      lat: existingVisit?.lat || 41.39,
      lng: existingVisit?.lng || 2.17
    }));
  };
  const filtered = visits.filter(v => (filterZone === "todas" || v.zone === filterZone) && (filterProf === "todos" || v.professional === filterProf)).sort((a, b) => a.time.localeCompare(b.time));
  const byZone = ZONES.map(z => ({
    ...z,
    visits: visits.filter(v => v.zone === z.id).sort((a, b) => a.time.localeCompare(b.time))
  }));
  const stats = {
    total: visits.length,
    done: visits.filter(v => v.status === "completada").length,
    pending: visits.filter(v => v.status === "pendiente").length,
    urgent: visits.filter(v => v.priority === "urgente" && v.status !== "completada").length
  };
  const openNew = () => {
    setForm(EMPTY);
    setEditId(null);
    setShowForm(true);
  };
  const openEdit = v => {
    setForm({
      ...v
    });
    setEditId(v.id);
    setShowForm(true);
  };
  const [formErrors, setFormErrors] = useState({});
  const saveForm = () => {
    const errors = validateVisit(form);
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }
    setFormErrors({});
    if (editId) setVisits(p => p.map(v => v.id === editId ? {
      ...form,
      id: editId
    } : v));else setVisits(p => [...p, {
      ...form,
      id: Date.now()
    }]);
    try {
      const auditQ = JSON.parse(localStorage.getItem("cuidaencasa_had_had_audit") || "[]");
      auditQ.unshift({
        id: Date.now(),
        ts: new Date().toISOString(),
        user: "Dr. Pérez",
        role: "medico",
        type: editId ? "edit_patient" : "visit_create",
        patient: form.patName,
        detail: `${editId ? "Visita actualizada" : "Nueva visita"}: ${form.patName} a las ${form.time}`,
        read: false
      });
      localStorage.setItem("cuidaencasa_had_had_audit", JSON.stringify(auditQ.slice(0, 500)));
    } catch (e) {}
    setShowForm(false);
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
    sendNotif && sendNotif("💾 Visita guardada", (editId ? "Actualizada: " : "Nueva: ") + form.patName + " a las " + form.time, "ok");
  };
  const delVisit = id => {
    const v = visits.find(x => x.id === id);
    if (!window.confirm(`¿Eliminar la visita de ${v?.patName} a las ${v?.time}?`)) return;
    setVisits(p => p.filter(v => v.id !== id));
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };
  const cycleStatus = id => setVisits(p => p.map(v => {
    if (v.id !== id) return v;
    const order = ["pendiente", "en_curso", "completada"];
    const next = order[(order.indexOf(v.status) + 1) % order.length];
    if (next === "completada") sendNotif && sendNotif("✅ Visita completada", v.patName + " — " + v.time, "ok");
    return {
      ...v,
      status: next
    };
  }));
  const selPat = form.pid ? regPats.find(p => p.id === form.pid) : null;
  const VC = ({
    v
  }) => {
    const pr = PR[v.priority] || PR.normal;
    const st = ST[v.status] || ST.pendiente;
    const zone = ZONES.find(z => z.id === v.zone);
    return /*#__PURE__*/React.createElement("div", {
      style: {
        background: C.w,
        borderRadius: "14px",
        padding: "14px",
        boxShadow: "0 2px 10px rgba(0,0,0,0.06)",
        marginBottom: "10px",
        borderLeft: `5px solid ${pr.color}`
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
        gap: "8px",
        flexWrap: "wrap",
        marginBottom: "8px"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: "8px",
        flexWrap: "wrap",
        alignItems: "center"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontWeight: "800",
        color: C.priD,
        fontSize: "15px"
      }
    }, v.time), /*#__PURE__*/React.createElement(Badge, {
      label: pr.label,
      color: pr.color,
      bg: pr.bg
    }), /*#__PURE__*/React.createElement(Badge, {
      label: st.label,
      color: st.color,
      bg: st.bg
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: "6px"
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => cycleStatus(v.id),
      style: {
        padding: "5px 10px",
        borderRadius: "8px",
        background: C.priL,
        border: "none",
        cursor: "pointer",
        fontSize: "11px",
        fontWeight: "700",
        color: C.pri
      }
    }, "▶ Avanzar"), /*#__PURE__*/React.createElement("button", {
      onClick: () => openEdit(v),
      style: {
        width: "28px",
        height: "28px",
        borderRadius: "8px",
        background: C.g100,
        border: "none",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }
    }, /*#__PURE__*/React.createElement(Ic, {
      d: I.edit,
      size: 13,
      color: C.g600
    })), /*#__PURE__*/React.createElement("button", {
      onClick: () => delVisit(v.id),
      style: {
        width: "28px",
        height: "28px",
        borderRadius: "8px",
        background: C.critL,
        border: "none",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }
    }, /*#__PURE__*/React.createElement(Ic, {
      d: I.trash,
      size: 13,
      color: C.crit
    })))), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: "0 0 3px",
        fontWeight: "700",
        fontSize: "13px",
        color: C.tx
      }
    }, v.patName), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: "5px",
        alignItems: "center",
        marginBottom: "5px"
      }
    }, /*#__PURE__*/React.createElement(Ic, {
      d: I.pin,
      size: 12,
      color: C.g400
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: "12px",
        color: C.txL
      }
    }, v.addr)), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: "10px",
        fontSize: "12px",
        color: C.g600,
        flexWrap: "wrap"
      }
    }, v.date && /*#__PURE__*/React.createElement("span", {
      style: {
        background: C.priL,
        color: C.pri,
        borderRadius: "6px",
        padding: "1px 7px",
        fontWeight: "700"
      }
    }, "📅 ", new Date(v.date).toLocaleDateString("es-ES", {
      weekday: "short",
      day: "numeric",
      month: "short"
    })), /*#__PURE__*/React.createElement("span", null, "⏱ ", v.duration, "min"), /*#__PURE__*/React.createElement("span", null, zone?.emoji, " ", zone?.label), /*#__PURE__*/React.createElement("span", {
      style: {
        background: C.g100,
        borderRadius: "6px",
        padding: "1px 6px"
      }
    }, v.type), /*#__PURE__*/React.createElement("span", null, "👤 ", v.professional)), v.notes && /*#__PURE__*/React.createElement("p", {
      style: {
        margin: "6px 0 0",
        fontSize: "11px",
        color: C.txL,
        fontStyle: "italic"
      }
    }, "📝 ", v.notes));
  };
  return /*#__PURE__*/React.createElement("div", null, showForm && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "fixed",
      inset: 0,
      background: "rgba(0,0,0,0.5)",
      zIndex: 999,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "16px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: C.w,
      borderRadius: "20px",
      maxWidth: "520px",
      width: "100%",
      maxHeight: "92vh",
      overflowY: "auto",
      boxShadow: "0 20px 60px rgba(0,0,0,0.25)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: `linear-gradient(135deg,${C.priD},${C.pri})`,
      padding: "18px 22px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      borderRadius: "20px 20px 0 0"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      color: "white",
      fontWeight: "800",
      fontSize: "16px"
    }
  }, editId ? "✏️ Editar Visita" : "➕ Nueva Visita", form.date && /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: "8px",
      background: "rgba(255,255,255,0.2)",
      borderRadius: "8px",
      padding: "2px 8px",
      fontSize: "12px",
      fontWeight: "600"
    }
  }, "📅 ", new Date(form.date).toLocaleDateString("es-ES", {
    weekday: "short",
    day: "numeric",
    month: "short"
  }))), /*#__PURE__*/React.createElement("button", {
    onClick: () => setShowForm(false),
    style: {
      background: "rgba(255,255,255,0.2)",
      border: "none",
      borderRadius: "8px",
      width: "30px",
      height: "30px",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(Ic, {
    d: I.x,
    size: 15,
    color: "white"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "20px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: "16px"
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: {
      display: "block",
      fontSize: "12px",
      fontWeight: "700",
      color: C.g600,
      marginBottom: "6px",
      textTransform: "uppercase",
      letterSpacing: "0.4px"
    }
  }, "1️⃣ Seleccionar paciente *"), /*#__PURE__*/React.createElement("select", {
    value: form.pid || "",
    onChange: e => {
      selectPatient(e.target.value);
      setFormErrors(p => ({
        ...p,
        pid: undefined
      }));
    },
    style: {
      width: "100%",
      padding: "12px 14px",
      borderRadius: "12px",
      border: `2px solid ${formErrors.pid ? C.crit : form.pid ? C.pri : C.g200}`,
      fontSize: "14px",
      outline: "none",
      background: C.w,
      color: C.tx,
      boxSizing: "border-box",
      fontFamily: "inherit",
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement("option", {
    value: ""
  }, "— Seleccionar paciente del servicio —"), regPats.filter(p => p.status === "activo").map(p => {
    const pr = PR[p.priority] || PR.normal;
    return /*#__PURE__*/React.createElement("option", {
      key: p.id,
      value: p.id
    }, pr.label.slice(0, 2), " ", p.name, " · ", p.room, " · ", p.dx);
  })), /*#__PURE__*/React.createElement(FieldError, {
    msg: formErrors.pid
  }), editId && !form.pid && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "4px 0 0",
      fontSize: "11px",
      color: C.g400
    }
  }, "Editando visita existente — datos del paciente ya cargados")), (selPat || editId) && /*#__PURE__*/React.createElement("div", {
    style: {
      background: C.priL,
      border: `1px solid ${C.pri}30`,
      borderRadius: "12px",
      padding: "13px 15px",
      marginBottom: "16px"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "0 0 8px",
      fontSize: "12px",
      fontWeight: "700",
      color: C.pri
    }
  }, "✅ Datos del paciente cargados automáticamente:"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "6px",
      fontSize: "12px",
      color: C.tx
    }
  }, [["👤 Nombre", form.patName], ["📍 Dirección", form.addr], ["🩺 Médico", selPat?.doctor || form.professional], ["💉 Enfermero", selPat?.nurse || "—"], ["📍 Zona", ZONES.find(z => z.id === form.zone)?.label || form.zone], ["🔴 Prioridad", PR[form.priority]?.label || form.priority]].map(([k, v], i) => /*#__PURE__*/React.createElement("div", {
    key: i
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: C.g600,
      fontWeight: "600"
    }
  }, k, ": "), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: "700"
    }
  }, v)))), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "8px 0 0",
      fontSize: "11px",
      color: C.g400
    }
  }, "📞 Familiar: ", selPat?.contact || "—")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: "14px"
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: {
      display: "block",
      fontSize: "12px",
      fontWeight: "700",
      color: C.g600,
      marginBottom: "10px",
      textTransform: "uppercase",
      letterSpacing: "0.4px"
    }
  }, "2️⃣ Detalles de la visita"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "12px"
    }
  }, /*#__PURE__*/React.createElement(VInp, {
    label: "Fecha",
    required: true,
    error: formErrors.date,
    type: "date",
    value: form.date,
    onChange: e => {
      setForm({
        ...form,
        date: e.target.value
      });
      setFormErrors(p => ({
        ...p,
        date: undefined
      }));
    }
  }), /*#__PURE__*/React.createElement(VInp, {
    label: "Hora",
    required: true,
    error: formErrors.time,
    type: "time",
    value: form.time,
    onChange: e => {
      setForm({
        ...form,
        time: e.target.value
      });
      setFormErrors(p => ({
        ...p,
        time: undefined
      }));
    }
  }), /*#__PURE__*/React.createElement(VInp, {
    label: "Duración (min)",
    required: true,
    error: formErrors.duration,
    type: "number",
    value: form.duration,
    onChange: e => {
      setForm({
        ...form,
        duration: e.target.value
      });
      setFormErrors(p => ({
        ...p,
        duration: undefined
      }));
    }
  }), /*#__PURE__*/React.createElement(Sel, {
    label: "Tipo de visita",
    value: form.type,
    onChange: e => setForm({
      ...form,
      type: e.target.value
    })
  }, ["Médico", "Enfermería", "Fisioterapia", "Terapia Ocupacional", "Trabajo Social"].map(t => /*#__PURE__*/React.createElement("option", {
    key: t
  }, t))), /*#__PURE__*/React.createElement(Sel, {
    label: "Profesional asignado",
    value: form.professional,
    onChange: e => setForm({
      ...form,
      professional: e.target.value
    })
  }, PROFS.map(p => /*#__PURE__*/React.createElement("option", {
    key: p.name
  }, p.name))), /*#__PURE__*/React.createElement(Sel, {
    label: "Prioridad visita",
    value: form.priority,
    onChange: e => setForm({
      ...form,
      priority: e.target.value
    })
  }, /*#__PURE__*/React.createElement("option", {
    value: "urgente"
  }, "🔴 Urgente"), /*#__PURE__*/React.createElement("option", {
    value: "alta"
  }, "🟠 Alta"), /*#__PURE__*/React.createElement("option", {
    value: "normal"
  }, "🟢 Normal")), editId && /*#__PURE__*/React.createElement(Sel, {
    label: "Estado",
    value: form.status,
    onChange: e => setForm({
      ...form,
      status: e.target.value
    })
  }, /*#__PURE__*/React.createElement("option", {
    value: "pendiente"
  }, "○ Pendiente"), /*#__PURE__*/React.createElement("option", {
    value: "en_curso"
  }, "▶ En curso"), /*#__PURE__*/React.createElement("option", {
    value: "completada"
  }, "✓ Completada")), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: "1/-1"
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: {
      display: "block",
      fontSize: "12px",
      fontWeight: "600",
      color: C.g600,
      marginBottom: "4px"
    }
  }, "Notas / motivo de la visita"), /*#__PURE__*/React.createElement("textarea", {
    style: {
      width: "100%",
      padding: "10px 12px",
      borderRadius: "10px",
      border: `2px solid ${C.g200}`,
      fontSize: "13px",
      outline: "none",
      resize: "vertical",
      minHeight: "68px",
      boxSizing: "border-box",
      color: C.tx,
      background: C.w,
      fontFamily: "inherit"
    },
    placeholder: "Ej: Revisión post-alta, control de tensión, cura de herida...",
    value: form.notes,
    onChange: e => setForm({
      ...form,
      notes: e.target.value
    })
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "10px",
      justifyContent: "flex-end",
      borderTop: `1px solid ${C.g100}`,
      paddingTop: "14px"
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setShowForm(false),
    style: {
      padding: "10px 20px",
      borderRadius: "10px",
      border: `1px solid ${C.g200}`,
      background: C.w,
      cursor: "pointer",
      fontWeight: "600",
      fontSize: "13px",
      color: C.g800
    }
  }, "Cancelar"), /*#__PURE__*/React.createElement(Btn, {
    onClick: saveForm,
    style: {
      fontSize: "13px",
      padding: "10px 22px"
    },
    color: !form.pid && !editId ? C.g400 : C.pri
  }, editId ? "💾 Guardar cambios" : "✅ Añadir visita"))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: "14px",
      flexWrap: "wrap",
      gap: "10px"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontSize: "18px",
      color: C.priD
    }
  }, "🗺️ Rutas y Visitas"), /*#__PURE__*/React.createElement(Btn, {
    onClick: openNew,
    style: {
      fontSize: "13px",
      padding: "9px 16px"
    }
  }, /*#__PURE__*/React.createElement(Ic, {
    d: I.plus,
    size: 15,
    color: "white"
  }), " Nueva Visita")), saved && /*#__PURE__*/React.createElement(SavedBanner, {
    msg: "✅ Visita guardada correctamente"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill,minmax(130px,1fr))",
      gap: "10px",
      marginBottom: "16px"
    }
  }, [{
    l: "Total",
    v: stats.total,
    c: C.pri
  }, {
    l: "Completadas",
    v: stats.done,
    c: C.ok
  }, {
    l: "Pendientes",
    v: stats.pending,
    c: C.g400
  }, {
    l: "Urgentes",
    v: stats.urgent,
    c: C.crit
  }].map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      background: s.c + "12",
      borderRadius: "12px",
      padding: "13px",
      borderLeft: `4px solid ${s.c}`
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "24px",
      fontWeight: "800",
      color: s.c,
      margin: "0 0 3px"
    }
  }, s.v), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "11px",
      color: C.txL,
      margin: 0
    }
  }, s.l)))), /*#__PURE__*/React.createElement(Card, {
    style: {
      marginBottom: "16px",
      padding: "14px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      marginBottom: "6px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "13px",
      fontWeight: "700",
      color: C.g600
    }
  }, "Progreso del día"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "13px",
      fontWeight: "800",
      color: C.ok
    }
  }, stats.done, "/", stats.total)), /*#__PURE__*/React.createElement("div", {
    style: {
      height: "10px",
      background: C.g200,
      borderRadius: "5px",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: `${stats.total ? Math.round(stats.done / stats.total * 100) : 0}%`,
      height: "100%",
      background: `linear-gradient(90deg,${C.ok},#38D989)`,
      borderRadius: "5px",
      transition: "width 0.4s"
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "6px",
      marginBottom: "14px",
      flexWrap: "wrap"
    }
  }, [{
    id: "dia",
    l: "📋 Lista"
  }, {
    id: "zonas",
    l: "📍 Zonas"
  }, {
    id: "rutas",
    l: "👤 Por profesional"
  }].map(v => /*#__PURE__*/React.createElement("button", {
    key: v.id,
    onClick: () => setView(v.id),
    style: {
      padding: "8px 14px",
      borderRadius: "10px",
      border: `2px solid ${view === v.id ? C.pri : C.g200}`,
      background: view === v.id ? C.priL : C.w,
      color: view === v.id ? C.pri : C.g600,
      fontWeight: view === v.id ? "700" : "500",
      fontSize: "13px",
      cursor: "pointer"
    }
  }, v.l))), view === "dia" && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "10px",
      marginBottom: "14px",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("select", {
    style: {
      padding: "8px 12px",
      borderRadius: "10px",
      border: `2px solid ${C.g200}`,
      fontSize: "13px",
      outline: "none",
      background: C.w,
      color: C.tx
    },
    value: filterZone,
    onChange: e => setFilterZone(e.target.value)
  }, /*#__PURE__*/React.createElement("option", {
    value: "todas"
  }, "🗺️ Todas las zonas"), ZONES.map(z => /*#__PURE__*/React.createElement("option", {
    key: z.id,
    value: z.id
  }, z.emoji, " ", z.label))), /*#__PURE__*/React.createElement("select", {
    style: {
      padding: "8px 12px",
      borderRadius: "10px",
      border: `2px solid ${C.g200}`,
      fontSize: "13px",
      outline: "none",
      background: C.w,
      color: C.tx
    },
    value: filterProf,
    onChange: e => setFilterProf(e.target.value)
  }, /*#__PURE__*/React.createElement("option", {
    value: "todos"
  }, "👥 Todos"), PROFS.map(p => /*#__PURE__*/React.createElement("option", {
    key: p.name
  }, p.name)))), view === "dia" && (filtered.length === 0 ? /*#__PURE__*/React.createElement("p", {
    style: {
      color: C.g400,
      textAlign: "center",
      padding: "40px 0"
    }
  }, "Sin visitas para los filtros seleccionados") : filtered.map(v => /*#__PURE__*/React.createElement(VC, {
    key: v.id,
    v: v
  }))), view === "zonas" && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill,minmax(280px,1fr))",
      gap: "14px"
    }
  }, byZone.map(z => /*#__PURE__*/React.createElement("div", {
    key: z.id,
    style: {
      background: C.w,
      borderRadius: "16px",
      overflow: "hidden",
      boxShadow: "0 2px 12px rgba(0,0,0,0.06)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: z.color,
      padding: "14px 16px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      color: "white",
      fontWeight: "800",
      fontSize: "14px"
    }
  }, z.emoji, " ", z.label), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "2px 0 0",
      color: "rgba(255,255,255,0.8)",
      fontSize: "12px"
    }
  }, z.visits.length, " visita", z.visits.length !== 1 ? "s" : "")), /*#__PURE__*/React.createElement(Ic, {
    d: I.pin,
    size: 20,
    color: "white"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "12px"
    }
  }, z.visits.length === 0 ? /*#__PURE__*/React.createElement("p", {
    style: {
      color: C.g400,
      textAlign: "center",
      fontSize: "12px",
      padding: "14px 0"
    }
  }, "Sin visitas") : z.visits.map(v => {
    const pr = PR[v.priority] || PR.normal;
    const st = ST[v.status] || ST.pendiente;
    return /*#__PURE__*/React.createElement("div", {
      key: v.id,
      style: {
        borderLeft: `3px solid ${pr.color}`,
        paddingLeft: "10px",
        marginBottom: "10px"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        marginBottom: "3px",
        gap: "6px",
        flexWrap: "wrap"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontWeight: "700",
        fontSize: "13px"
      }
    }, v.time, " · ", v.patName.split(" ")[0]), /*#__PURE__*/React.createElement("span", {
      style: {
        background: st.bg,
        color: st.color,
        borderRadius: "20px",
        padding: "1px 7px",
        fontSize: "10px",
        fontWeight: "700"
      }
    }, st.label)), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: "0 0 4px",
        fontSize: "11px",
        color: C.txL
      }
    }, v.addr), /*#__PURE__*/React.createElement("button", {
      onClick: () => cycleStatus(v.id),
      style: {
        padding: "3px 8px",
        borderRadius: "6px",
        background: C.priL,
        border: "none",
        cursor: "pointer",
        fontSize: "10px",
        fontWeight: "700",
        color: C.pri
      }
    }, "▶ Avanzar"));
  }))))), view === "rutas" && /*#__PURE__*/React.createElement("div", null, PROFS.map(prof => {
    const pv = visits.filter(v => v.professional === prof.name).sort((a, b) => a.time.localeCompare(b.time));
    if (!pv.length) return null;
    const done = pv.filter(v => v.status === "completada").length;
    const pct = Math.round(done / pv.length * 100);
    return /*#__PURE__*/React.createElement(Card, {
      key: prof.name
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "12px",
        flexWrap: "wrap",
        gap: "8px"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: "10px"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: "38px",
        height: "38px",
        borderRadius: "50%",
        background: prof.color + "20",
        border: `2px solid ${prof.color}`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }
    }, /*#__PURE__*/React.createElement(Ic, {
      d: I.user,
      size: 18,
      color: prof.color
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        fontWeight: "700",
        fontSize: "14px"
      }
    }, prof.name), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        fontSize: "11px",
        color: C.txL
      }
    }, prof.role, " · ", pv.length, " visitas · ", pv.reduce((s, v) => s + Number(v.duration), 0), "min"))), /*#__PURE__*/React.createElement("div", {
      style: {
        textAlign: "right"
      }
    }, /*#__PURE__*/React.createElement("p", {
      style: {
        margin: "0 0 3px",
        fontSize: "12px",
        color: C.g600
      }
    }, done, "/", pv.length, " · ", pct, "%"), /*#__PURE__*/React.createElement("div", {
      style: {
        width: "100px",
        height: "7px",
        background: C.g200,
        borderRadius: "4px",
        overflow: "hidden"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: `${pct}%`,
        height: "100%",
        background: prof.color,
        borderRadius: "4px"
      }
    })))), /*#__PURE__*/React.createElement("div", {
      style: {
        position: "relative"
      }
    }, pv.map((v, i) => {
      const pr = PR[v.priority] || PR.normal;
      const st = ST[v.status] || ST.pendiente;
      const zone = ZONES.find(z => z.id === v.zone);
      return /*#__PURE__*/React.createElement("div", {
        key: v.id,
        style: {
          display: "flex",
          gap: "0",
          marginBottom: "4px"
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "30px",
          flexShrink: 0
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          width: "26px",
          height: "26px",
          borderRadius: "50%",
          background: v.status === "completada" ? C.ok : v.status === "en_curso" ? C.pri : C.g200,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 1
        }
      }, v.status === "completada" ? /*#__PURE__*/React.createElement(Ic, {
        d: I.check,
        size: 12,
        color: "white"
      }) : /*#__PURE__*/React.createElement("span", {
        style: {
          fontSize: "11px",
          fontWeight: "800",
          color: v.status === "en_curso" ? "white" : C.g400
        }
      }, i + 1)), i < pv.length - 1 && /*#__PURE__*/React.createElement("div", {
        style: {
          width: "2px",
          flex: 1,
          background: C.g200,
          minHeight: "24px"
        }
      })), /*#__PURE__*/React.createElement("div", {
        style: {
          flex: 1,
          paddingLeft: "10px",
          paddingBottom: "12px"
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          background: pr.bg,
          border: `1px solid ${pr.color}30`,
          borderRadius: "12px",
          padding: "11px 13px"
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "5px",
          marginBottom: "4px"
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          display: "flex",
          gap: "6px",
          flexWrap: "wrap"
        }
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          fontWeight: "800",
          fontSize: "13px",
          color: C.priD
        }
      }, v.time), /*#__PURE__*/React.createElement(Badge, {
        label: st.label,
        color: st.color,
        bg: st.bg
      }), /*#__PURE__*/React.createElement(Badge, {
        label: pr.label,
        color: pr.color,
        bg: pr.bg
      })), /*#__PURE__*/React.createElement("button", {
        onClick: () => cycleStatus(v.id),
        style: {
          padding: "4px 9px",
          borderRadius: "8px",
          background: C.priL,
          border: "none",
          cursor: "pointer",
          fontSize: "11px",
          fontWeight: "700",
          color: C.pri
        }
      }, "▶")), /*#__PURE__*/React.createElement("p", {
        style: {
          margin: "0 0 2px",
          fontWeight: "700",
          fontSize: "13px"
        }
      }, v.patName), /*#__PURE__*/React.createElement("div", {
        style: {
          display: "flex",
          gap: "5px",
          alignItems: "center",
          marginBottom: "3px"
        }
      }, /*#__PURE__*/React.createElement(Ic, {
        d: I.pin,
        size: 11,
        color: C.g400
      }), /*#__PURE__*/React.createElement("span", {
        style: {
          fontSize: "11px",
          color: C.txL
        }
      }, v.addr)), /*#__PURE__*/React.createElement("div", {
        style: {
          display: "flex",
          gap: "8px",
          fontSize: "11px",
          color: C.g600,
          flexWrap: "wrap"
        }
      }, v.date && /*#__PURE__*/React.createElement("span", {
        style: {
          background: C.priL,
          color: C.pri,
          borderRadius: "6px",
          padding: "1px 5px",
          fontWeight: "700"
        }
      }, "📅 ", new Date(v.date).toLocaleDateString("es-ES", {
        day: "numeric",
        month: "short"
      })), /*#__PURE__*/React.createElement("span", null, "⏱ ", v.duration, "min"), /*#__PURE__*/React.createElement("span", null, zone?.emoji, " ", zone?.label), /*#__PURE__*/React.createElement("span", null, v.type)), v.notes && /*#__PURE__*/React.createElement("p", {
        style: {
          margin: "5px 0 0",
          fontSize: "11px",
          color: C.txL,
          fontStyle: "italic"
        }
      }, "📝 ", v.notes))));
    })));
  })));
}
function NotifPanel({
  notifs,
  perm,
  onReq,
  onRead,
  onReadAll,
  onTest
}) {
  const tCol = {
    urgente: C.crit,
    ok: C.ok,
    info: C.pri,
    warn: C.warn
  };
  const tIcon = {
    urgente: "🔴",
    ok: "✅",
    info: "🔔",
    warn: "⚠️"
  };
  const unread = notifs.filter(n => !n.read).length;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Card, {
    style: {
      background: perm === "granted" ? C.okL : C.warnL,
      border: `1px solid ${perm === "granted" ? C.ok : C.warn}30`
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "12px",
      alignItems: "center",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: "44px",
      height: "44px",
      borderRadius: "50%",
      background: perm === "granted" ? C.ok : C.warn,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(Ic, {
    d: perm === "granted" ? I.bell : I.bellOff,
    size: 20,
    color: "white"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "0 0 2px",
      fontWeight: "800",
      fontSize: "14px",
      color: perm === "granted" ? C.ok : C.warn
    }
  }, perm === "granted" ? "✅ Notificaciones activadas" : perm === "denied" ? "🚫 Notificaciones bloqueadas" : "🔔 Activar notificaciones push"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: "12px",
      color: C.tx
    }
  }, perm === "granted" ? "Recibirá alertas aunque la app esté minimizada." : perm === "denied" ? "Actívelas desde la configuración del navegador." : "Active las alertas para recibir avisos de visitas urgentes.")), perm !== "granted" && perm !== "denied" && /*#__PURE__*/React.createElement(Btn, {
    onClick: onReq,
    color: C.warn,
    style: {
      fontSize: "13px",
      padding: "9px 16px",
      flexShrink: 0
    }
  }, "Activar"))), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "0 0 12px",
      fontWeight: "700",
      fontSize: "14px",
      color: C.priD
    }
  }, "🧪 Probar notificaciones"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "8px",
      flexWrap: "wrap"
    }
  }, [{
    l: "Alerta urgente",
    t: "urgente",
    ti: "⚠️ Visita urgente",
    b: "Rafael Torres — Dolor agudo."
  }, {
    l: "Recordatorio",
    t: "info",
    ti: "🕐 En 15 minutos",
    b: "Carmen Martínez — C/ Galileu 88"
  }, {
    l: "Completada",
    t: "ok",
    ti: "✅ Completada",
    b: "Antonio Fernández — 10:00 registrada."
  }].map((n, i) => /*#__PURE__*/React.createElement("button", {
    key: i,
    onClick: () => onTest(n.ti, n.b, n.t),
    style: {
      padding: "8px 13px",
      borderRadius: "10px",
      background: tCol[n.t] + "15",
      border: `1px solid ${tCol[n.t]}40`,
      color: tCol[n.t],
      fontWeight: "700",
      fontSize: "12px",
      cursor: "pointer"
    }
  }, tIcon[n.t], " ", n.l)))), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: "12px"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontWeight: "700",
      fontSize: "14px",
      color: C.priD,
      display: "flex",
      alignItems: "center",
      gap: "7px"
    }
  }, /*#__PURE__*/React.createElement(Ic, {
    d: I.bell,
    size: 16,
    color: C.pri
  }), " Historial", unread > 0 && /*#__PURE__*/React.createElement("span", {
    style: {
      background: C.crit,
      color: "white",
      borderRadius: "12px",
      padding: "1px 8px",
      fontSize: "11px",
      fontWeight: "800"
    }
  }, unread)), unread > 0 && /*#__PURE__*/React.createElement("button", {
    onClick: onReadAll,
    style: {
      padding: "5px 12px",
      borderRadius: "8px",
      background: C.priL,
      border: "none",
      cursor: "pointer",
      fontSize: "12px",
      fontWeight: "700",
      color: C.pri
    }
  }, "Marcar leídas")), notifs.map(n => /*#__PURE__*/React.createElement("div", {
    key: n.id,
    onClick: () => onRead(n.id),
    style: {
      display: "flex",
      gap: "10px",
      padding: "12px",
      borderRadius: "12px",
      marginBottom: "8px",
      background: n.read ? C.g50 : C.priL,
      cursor: "pointer",
      border: `1px solid ${n.read ? C.g200 : C.pri + "30"}`,
      opacity: n.read ? 0.75 : 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: "34px",
      height: "34px",
      borderRadius: "50%",
      background: tCol[n.type] || C.pri,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "15px"
    }
  }, tIcon[n.type] || "🔔")), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      marginBottom: "2px"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontWeight: n.read ? "600" : "800",
      fontSize: "13px",
      color: C.tx
    }
  }, n.title), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "11px",
      color: C.g400,
      flexShrink: 0,
      marginLeft: "8px"
    }
  }, n.time)), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: "12px",
      color: C.txL
    }
  }, n.body)), !n.read && /*#__PURE__*/React.createElement("div", {
    style: {
      width: "8px",
      height: "8px",
      borderRadius: "50%",
      background: C.pri,
      flexShrink: 0,
      marginTop: "4px"
    }
  })))));
}
function Sidebar({
  nav,
  section,
  setSection,
  criticals,
  dark
}) {
  const bg = dark ? DARK.w : C.w;
  const border = dark ? DARK.g200 : C.g200;
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      width: "210px",
      background: bg,
      borderRight: `1px solid ${border}`,
      padding: "14px 10px",
      display: "flex",
      flexDirection: "column",
      gap: "2px",
      overflowY: "auto",
      flexShrink: 0
    }
  }, nav.map(item => /*#__PURE__*/React.createElement("button", {
    key: item.id,
    onClick: () => setSection(item.id),
    style: {
      display: "flex",
      alignItems: "center",
      gap: "9px",
      padding: "10px 11px",
      borderRadius: "12px",
      cursor: "pointer",
      background: section === item.id ? C.priL : "transparent",
      color: section === item.id ? C.pri : dark ? DARK.g600 : C.g600,
      fontSize: "13px",
      fontWeight: section === item.id ? "700" : "500",
      border: `1px solid ${section === item.id ? C.pri + "40" : "transparent"}`,
      width: "100%",
      textAlign: "left",
      transition: "all 0.15s"
    }
  }, /*#__PURE__*/React.createElement(Ic, {
    d: item.icon,
    size: 16,
    color: section === item.id ? C.pri : dark ? DARK.g400 : C.g400
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      color: section === item.id ? C.pri : dark ? DARK.g600 : C.g600
    }
  }, item.label), item.badge > 0 && /*#__PURE__*/React.createElement("span", {
    style: {
      background: criticals > 0 ? C.crit : C.warn,
      color: "white",
      borderRadius: "10px",
      padding: "2px 6px",
      fontSize: "10px",
      fontWeight: "800",
      minWidth: "18px",
      textAlign: "center"
    }
  }, item.badge))));
}
function BottomNav({
  nav,
  section,
  setSection,
  criticals
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "fixed",
      bottom: 0,
      left: 0,
      right: 0,
      background: C.w,
      borderTop: `1px solid ${C.g200}`,
      display: "flex",
      zIndex: 50,
      boxShadow: "0 -4px 20px rgba(0,0,0,0.1)"
    }
  }, nav.slice(0, 5).map(item => /*#__PURE__*/React.createElement("button", {
    key: item.id,
    onClick: () => setSection(item.id),
    style: {
      flex: 1,
      padding: "9px 4px 11px",
      border: "none",
      background: section === item.id ? C.priL : C.w,
      cursor: "pointer",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "3px",
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement(Ic, {
    d: item.icon,
    size: 21,
    color: section === item.id ? C.pri : C.g400
  }), item.badge > 0 && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: "-5px",
      right: "-6px",
      background: criticals > 0 ? C.crit : C.warn,
      color: "white",
      borderRadius: "10px",
      padding: "1px 4px",
      fontSize: "9px",
      fontWeight: "800"
    }
  }, item.badge)), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "10px",
      fontWeight: section === item.id ? "700" : "500",
      color: section === item.id ? C.pri : C.g600
    }
  }, item.label.split(" ")[0]))));
}
function Shell({
  title,
  sub,
  nav,
  section,
  setSection,
  onLogout,
  unread,
  criticals,
  children,
  dark,
  setDark,
  extra
}) {
  const mobile = useIsMobile();
  const [menuOpen, setMenuOpen] = useState(false);
  const bg = dark ? DARK.g50 : C.g50;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Georgia','Times New Roman',serif",
      background: bg,
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      color: dark ? DARK.tx : C.tx
    }
  }, /*#__PURE__*/React.createElement("header", {
    style: {
      background: `linear-gradient(90deg,${C.priD},${C.pri})`,
      padding: `0 ${mobile ? "12px" : "22px"}`,
      height: "56px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      boxShadow: "0 2px 12px rgba(0,0,0,0.2)",
      position: "sticky",
      top: 0,
      zIndex: 60,
      gap: "10px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "10px",
      flexShrink: 0
    }
  }, mobile && /*#__PURE__*/React.createElement("button", {
    onClick: () => setMenuOpen(o => !o),
    style: {
      background: "rgba(255,255,255,0.15)",
      border: "none",
      borderRadius: "8px",
      padding: "6px",
      cursor: "pointer",
      display: "flex"
    }
  }, /*#__PURE__*/React.createElement(Ic, {
    d: menuOpen ? I.x : I.menu,
    size: 19,
    color: "white"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: {
      color: "white",
      fontSize: mobile ? "14px" : "16px",
      fontWeight: "700",
      margin: 0,
      lineHeight: "1.2"
    }
  }, title), !mobile && /*#__PURE__*/React.createElement("p", {
    style: {
      color: "rgba(255,255,255,0.7)",
      fontSize: "11px",
      margin: 0
    }
  }, sub))), extra && !mobile && /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      maxWidth: "320px"
    }
  }, extra), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "7px",
      alignItems: "center",
      flexShrink: 0
    }
  }, unread > 0 && /*#__PURE__*/React.createElement("button", {
    onClick: () => setSection(nav.find(n => n.badge > 0)?.id || nav[0].id),
    style: {
      background: criticals > 0 ? C.crit : C.warn,
      border: "none",
      borderRadius: "10px",
      padding: "6px 11px",
      color: "white",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      gap: "4px",
      fontSize: "13px",
      fontWeight: "700"
    }
  }, /*#__PURE__*/React.createElement(Ic, {
    d: I.bell,
    size: 14,
    color: "white",
    fill: "rgba(255,255,255,0.4)"
  }), unread), setDark && !mobile && /*#__PURE__*/React.createElement("button", {
    onClick: () => setDark(d => !d),
    style: {
      background: "rgba(255,255,255,0.15)",
      border: "1px solid rgba(255,255,255,0.25)",
      borderRadius: "10px",
      padding: "6px 10px",
      color: "white",
      cursor: "pointer",
      fontSize: "13px"
    }
  }, dark ? "☀️" : "🌙"), !mobile && /*#__PURE__*/React.createElement("button", {
    onClick: onLogout,
    style: {
      background: "rgba(255,255,255,0.15)",
      border: "1px solid rgba(255,255,255,0.3)",
      borderRadius: "10px",
      padding: "6px 12px",
      color: "white",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      gap: "4px",
      fontSize: "12px"
    }
  }, /*#__PURE__*/React.createElement(Ic, {
    d: I.logout,
    size: 14,
    color: "white"
  }), " Salir"))), mobile && menuOpen && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "fixed",
      inset: 0,
      zIndex: 55
    },
    onClick: () => setMenuOpen(false)
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: "56px",
      left: 0,
      bottom: 0,
      width: "240px",
      background: dark ? DARK.w : C.w,
      boxShadow: "4px 0 20px rgba(0,0,0,0.15)",
      padding: "14px 10px",
      display: "flex",
      flexDirection: "column",
      gap: "2px",
      overflowY: "auto"
    },
    onClick: e => e.stopPropagation()
  }, extra && /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: "10px",
      padding: "0 2px"
    }
  }, extra), nav.map(item => /*#__PURE__*/React.createElement("button", {
    key: item.id,
    onClick: () => {
      setSection(item.id);
      setMenuOpen(false);
    },
    style: {
      display: "flex",
      alignItems: "center",
      gap: "10px",
      padding: "12px 11px",
      borderRadius: "12px",
      cursor: "pointer",
      background: section === item.id ? C.priL : "transparent",
      color: section === item.id ? C.pri : dark ? DARK.g600 : C.g600,
      fontSize: "14px",
      fontWeight: section === item.id ? "700" : "500",
      border: `1px solid ${section === item.id ? C.pri + "30" : "transparent"}`,
      width: "100%",
      textAlign: "left"
    }
  }, /*#__PURE__*/React.createElement(Ic, {
    d: item.icon,
    size: 17,
    color: section === item.id ? C.pri : dark ? DARK.g400 : C.g400
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      color: section === item.id ? C.pri : dark ? DARK.g600 : C.g600
    }
  }, item.label), item.badge > 0 && /*#__PURE__*/React.createElement("span", {
    style: {
      background: criticals > 0 ? C.crit : C.warn,
      color: "white",
      borderRadius: "10px",
      padding: "2px 7px",
      fontSize: "11px",
      fontWeight: "800"
    }
  }, item.badge))), setDark && /*#__PURE__*/React.createElement("button", {
    onClick: () => setDark(d => !d),
    style: {
      display: "flex",
      alignItems: "center",
      gap: "10px",
      padding: "12px 11px",
      borderRadius: "12px",
      cursor: "pointer",
      background: "transparent",
      color: dark ? DARK.g600 : C.g600,
      fontSize: "14px",
      fontWeight: "600",
      border: "none",
      width: "100%",
      textAlign: "left"
    }
  }, dark ? "☀️ Modo día" : "🌙 Modo noche"), /*#__PURE__*/React.createElement("button", {
    onClick: onLogout,
    style: {
      marginTop: "auto",
      display: "flex",
      alignItems: "center",
      gap: "10px",
      padding: "12px 11px",
      borderRadius: "12px",
      cursor: "pointer",
      background: "#FEE2E2",
      color: C.crit,
      fontSize: "14px",
      fontWeight: "600",
      border: `1px solid ${C.crit}30`,
      width: "100%",
      textAlign: "left"
    }
  }, /*#__PURE__*/React.createElement(Ic, {
    d: I.logout,
    size: 17,
    color: C.crit
  }), " Cerrar sesión"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flex: 1,
      overflow: "hidden"
    }
  }, !mobile && /*#__PURE__*/React.createElement(Sidebar, {
    nav: nav,
    section: section,
    setSection: setSection,
    criticals: criticals,
    dark: dark
  }), /*#__PURE__*/React.createElement("main", {
    style: {
      flex: 1,
      overflow: "auto",
      padding: mobile ? "13px 12px 80px" : "22px",
      background: bg
    }
  }, children)), mobile && /*#__PURE__*/React.createElement(BottomNav, {
    nav: nav,
    section: section,
    setSection: setSection,
    criticals: criticals
  }));
}
function QuickSearch({
  visits,
  alerts,
  onNavigate
}) {
  const [q, setQ] = useState("");
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const h = e => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", h);
    return () => document.removeEventListener("mousedown", h);
  }, []);
  const results = q.trim().length < 2 ? [] : [...PATIENTS.filter(p => p.name.toLowerCase().includes(q.toLowerCase())).map(p => ({
    icon: "👤",
    label: p.name,
    sub: p.dx,
    action: "pacientes"
  })), ...visits.filter(v => v.patName.toLowerCase().includes(q.toLowerCase()) || v.addr.toLowerCase().includes(q.toLowerCase())).slice(0, 3).map(v => ({
    icon: "📍",
    label: v.patName,
    sub: v.time + " · " + v.addr,
    action: "rutas"
  })), ...alerts.filter(a => !a.read).slice(0, 2).map(a => ({
    icon: "🔴",
    label: PATIENTS.find(p => p.id === a.pid)?.name || "",
    sub: a.vital + ": " + a.value,
    action: "alertas"
  }))];
  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      background: "rgba(255,255,255,0.15)",
      borderRadius: "10px",
      padding: "6px 12px",
      gap: "7px"
    }
  }, /*#__PURE__*/React.createElement(Ic, {
    d: I.filter,
    size: 14,
    color: "rgba(255,255,255,0.7)"
  }), /*#__PURE__*/React.createElement("input", {
    value: q,
    onChange: e => {
      setQ(e.target.value);
      setOpen(true);
    },
    onFocus: () => setOpen(true),
    placeholder: "Buscar paciente, visita...",
    style: {
      background: "transparent",
      border: "none",
      outline: "none",
      color: "white",
      fontSize: "13px",
      width: "100%"
    }
  }), q && /*#__PURE__*/React.createElement("button", {
    onClick: () => {
      setQ("");
      setOpen(false);
    },
    style: {
      color: "rgba(255,255,255,0.7)",
      fontSize: "13px"
    }
  }, "✕")), open && results.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: "calc(100% + 6px)",
      left: 0,
      right: 0,
      background: C.w,
      borderRadius: "12px",
      boxShadow: "0 8px 28px rgba(0,0,0,0.16)",
      zIndex: 200,
      overflow: "hidden",
      animation: "slideDown 0.15s"
    }
  }, results.map((r, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    onClick: () => {
      onNavigate(r.action);
      setQ("");
      setOpen(false);
    },
    style: {
      display: "flex",
      gap: "10px",
      alignItems: "center",
      padding: "10px 13px",
      borderBottom: i < results.length - 1 ? `1px solid ${C.g100}` : "none",
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "16px"
    }
  }, r.icon), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontWeight: "700",
      fontSize: "13px",
      color: C.tx
    }
  }, r.label), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: "11px",
      color: C.txL
    }
  }, r.sub))))));
}
function StaffDashboard({
  alerts,
  visits,
  onNavigate
}) {
  const crits = alerts.filter(a => !a.read && a.level === "critical");
  const pending = visits.filter(v => v.status === "pendiente").sort((a, b) => a.time.localeCompare(b.time));
  const done = visits.filter(v => v.status === "completada").length;
  const pct = visits.length ? Math.round(done / visits.length * 100) : 0;
  const h = new Date().getHours();
  const greeting = h < 12 ? "Buenos días" : h < 18 ? "Buenas tardes" : "Buenas noches";
  const byProf = PROFS.map(p => ({
    ...p,
    total: visits.filter(v => v.professional === p.name).length,
    done: visits.filter(v => v.professional === p.name && v.status === "completada").length,
    urgent: visits.filter(v => v.professional === p.name && v.priority === "urgente" && v.status !== "completada").length,
    minutes: visits.filter(v => v.professional === p.name).reduce((s, v) => s + Number(v.duration), 0)
  })).filter(p => p.total > 0);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      animation: "fadeIn 0.3s"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: `linear-gradient(135deg,${C.priD},${C.pri})`,
      borderRadius: "18px",
      padding: "20px 22px",
      marginBottom: "16px",
      color: "white"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "0 0 3px",
      fontSize: "13px",
      opacity: 0.8
    }
  }, greeting, ","), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: "0 0 6px",
      fontSize: "21px",
      fontWeight: "800"
    }
  }, "Dr. Pérez González 👋"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "0 0 14px",
      fontSize: "12px",
      opacity: 0.75
    }
  }, new Date().toLocaleDateString("es-ES", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "rgba(255,255,255,0.15)",
      borderRadius: "12px",
      padding: "12px 14px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      marginBottom: "6px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "12px",
      fontWeight: "700"
    }
  }, "Progreso del día"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "12px",
      fontWeight: "800"
    }
  }, done, "/", visits.length, " visitas · ", pct, "%")), /*#__PURE__*/React.createElement("div", {
    style: {
      height: "9px",
      background: "rgba(255,255,255,0.2)",
      borderRadius: "5px",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: `${pct}%`,
      height: "100%",
      background: "white",
      borderRadius: "5px",
      transition: "width 0.5s"
    }
  })))), crits.length > 0 && /*#__PURE__*/React.createElement("div", {
    onClick: () => onNavigate("alertas"),
    style: {
      background: C.critL,
      border: `2px solid ${C.crit}`,
      borderRadius: "14px",
      padding: "13px 16px",
      marginBottom: "14px",
      cursor: "pointer",
      display: "flex",
      gap: "12px",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: "42px",
      height: "42px",
      background: C.crit,
      borderRadius: "50%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(Ic, {
    d: I.alert,
    size: 20,
    color: "white"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "0 0 2px",
      fontWeight: "800",
      color: C.crit,
      fontSize: "14px"
    }
  }, "🔴 ", crits.length, " alerta", crits.length > 1 ? "s" : "", " crítica", crits.length > 1 ? "s" : "", " sin revisar"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: "12px",
      color: C.tx
    }
  }, crits.map(a => a.vital).join(" · ")))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill,minmax(120px,1fr))",
      gap: "10px",
      marginBottom: "16px"
    }
  }, [{
    l: "Pendientes",
    v: pending.length,
    c: C.pri,
    a: "rutas"
  }, {
    l: "Urgentes",
    v: visits.filter(v => v.priority === "urgente" && v.status !== "completada").length,
    c: C.crit,
    a: "rutas"
  }, {
    l: "Completadas",
    v: done,
    c: C.ok,
    a: "rutas"
  }, {
    l: "Pacientes",
    v: PATIENTS.length,
    c: C.pri,
    a: "pacientes"
  }, {
    l: "Alertas",
    v: alerts.filter(a => !a.read).length,
    c: C.warn,
    a: "alertas"
  }].map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    onClick: () => onNavigate(s.a),
    style: {
      background: s.c + "12",
      borderRadius: "12px",
      padding: "12px",
      borderLeft: `4px solid ${s.c}`,
      cursor: "pointer",
      transition: "transform 0.15s"
    },
    onMouseEnter: e => e.currentTarget.style.transform = "translateY(-2px)",
    onMouseLeave: e => e.currentTarget.style.transform = "translateY(0)"
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "24px",
      fontWeight: "800",
      color: s.c,
      margin: "0 0 3px"
    }
  }, s.v), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "11px",
      color: C.txL,
      margin: 0
    }
  }, s.l)))), pending[0] && /*#__PURE__*/React.createElement(Card, {
    style: {
      borderLeft: `4px solid ${PR[pending[0].priority]?.color || C.pri}`,
      marginBottom: "16px"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "0 0 10px",
      fontWeight: "700",
      fontSize: "13px",
      color: C.g600,
      display: "flex",
      alignItems: "center",
      gap: "6px"
    }
  }, /*#__PURE__*/React.createElement(Ic, {
    d: I.clock,
    size: 14,
    color: C.pri
  }), " Próxima visita"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start",
      flexWrap: "wrap",
      gap: "10px"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "8px",
      marginBottom: "5px",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: "800",
      fontSize: "20px",
      color: C.priD
    }
  }, pending[0].time), /*#__PURE__*/React.createElement(Badge, {
    label: PR[pending[0].priority]?.label,
    color: PR[pending[0].priority]?.color
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "0 0 2px",
      fontWeight: "700",
      fontSize: "14px"
    }
  }, pending[0].patName), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "0 0 4px",
      fontSize: "12px",
      color: C.txL
    }
  }, "📍 ", pending[0].addr), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: "11px",
      color: C.g600
    }
  }, "⏱ ", pending[0].duration, "min · 👤 ", pending[0].professional)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "7px"
    }
  }, /*#__PURE__*/React.createElement(Btn, {
    onClick: () => onNavigate("rutas"),
    style: {
      fontSize: "12px",
      padding: "8px 14px"
    }
  }, "🗺️ Ver en mapa"), /*#__PURE__*/React.createElement("a", {
    href: `https://www.google.com/maps/dir/?api=1&destination=${pending[0].lat},${pending[0].lng}&travelmode=driving`,
    target: "_blank",
    rel: "noopener noreferrer",
    style: {
      padding: "8px 14px",
      borderRadius: "10px",
      background: C.ok,
      color: "white",
      fontWeight: "700",
      fontSize: "12px",
      textDecoration: "none",
      textAlign: "center",
      whiteSpace: "nowrap"
    }
  }, "🚗 Navegar")))), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(CTitle, {
    icon: I.users
  }, "Carga de trabajo hoy"), byProf.map((p, i) => {
    const pct = p.total ? Math.round(p.done / p.total * 100) : 0;
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        marginBottom: i < byProf.length - 1 ? "16px" : "0"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "5px",
        flexWrap: "wrap",
        gap: "6px"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: "7px"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: "30px",
        height: "30px",
        borderRadius: "50%",
        background: p.color + "20",
        border: `2px solid ${p.color}`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }
    }, /*#__PURE__*/React.createElement(Ic, {
      d: I.user,
      size: 14,
      color: p.color
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        fontWeight: "700",
        fontSize: "13px"
      }
    }, p.name), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        fontSize: "10px",
        color: C.txL
      }
    }, p.role))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: "5px",
        alignItems: "center",
        flexWrap: "wrap"
      }
    }, p.urgent > 0 && /*#__PURE__*/React.createElement(Badge, {
      label: `🔴 ${p.urgent}`,
      color: C.crit
    }), /*#__PURE__*/React.createElement(Badge, {
      label: `⏱ ${p.minutes}min`,
      color: C.g400
    }), /*#__PURE__*/React.createElement(Badge, {
      label: `${p.done}/${p.total} · ${pct}%`,
      color: p.color
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        height: "7px",
        background: C.g200,
        borderRadius: "4px",
        overflow: "hidden"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: `${pct}%`,
        height: "100%",
        background: p.color,
        borderRadius: "4px",
        transition: "width 0.5s"
      }
    })));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "10px"
    }
  }, [{
    l: "📋 Curso clínico",
    a: "evolucion",
    c: C.pri
  }, {
    l: "🗺️ Rutas del día",
    a: "rutas",
    c: C.ok
  }, {
    l: "💊 Medicación",
    a: "medicacion",
    c: C.warn
  }, {
    l: "📊 Estadísticas",
    a: "estadisticas",
    c: C.ai
  }].map((a, i) => /*#__PURE__*/React.createElement("button", {
    key: i,
    onClick: () => onNavigate(a.a),
    style: {
      padding: "14px",
      borderRadius: "14px",
      background: a.c + "12",
      border: `1px solid ${a.c}30`,
      color: a.c,
      fontWeight: "700",
      fontSize: "14px",
      cursor: "pointer",
      textAlign: "left",
      display: "flex",
      alignItems: "center",
      gap: "8px",
      transition: "transform 0.15s"
    },
    onMouseEnter: e => e.currentTarget.style.transform = "translateY(-2px)",
    onMouseLeave: e => e.currentTarget.style.transform = "translateY(0)"
  }, a.l))));
}
function AIAssistant({
  role,
  ctx
}) {
  const [msgs, setMsgs] = useState([{
    role: "assistant",
    text: role === "staff" ? "Hola Dr. Pérez 👋 Soy su asistente clínico IA. Puedo ayudarle a interpretar constantes, redactar notas de evolución o responder preguntas clínicas. ¿En qué le ayudo?" : "Hola María 👋 Soy su asistente de salud. Puede preguntarme sobre sus medicamentos, síntomas o cómo tomarse las constantes. ¿Qué necesita?"
  }]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef(null);
  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth"
    });
  }, [msgs]);
  const send = async () => {
    if (!input.trim() || loading) return;
    const txt = input.trim();
    setInput("");
    setMsgs(p => [...p, {
      role: "user",
      text: txt
    }]);
    setLoading(true);
    const sys = role === "staff" ? `Eres un asistente clínico IA para Hospitalización a Domicilio. Contexto: ${JSON.stringify(ctx)}. Responde de forma concisa y profesional en español. Máx 200 palabras. Siempre recuerda que eres un apoyo, no reemplazas el juicio clínico.` : `Eres un asistente de salud amigable para pacientes mayores en HAD. Contexto: María García López, 78 años, EPOC agudizado. Habla con palabras sencillas. Para urgencias indica siempre llamar al 112. Máx 150 palabras.`;
    try {
      const history = msgs.map(m => ({
        role: m.role === "assistant" ? "assistant" : "user",
        content: m.text
      }));
      const res = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          model: "claude-sonnet-4-20250514",
          max_tokens: 300,
          system: sys,
          messages: [...history, {
            role: "user",
            content: txt
          }]
        })
      });
      const data = await res.json();
      const text = data.content?.find(c => c.type === "text")?.text || "Lo siento, no pude procesar la respuesta.";
      setMsgs(p => [...p, {
        role: "assistant",
        text
      }]);
    } catch {
      setMsgs(p => [...p, {
        role: "assistant",
        text: "Error de conexión. Por favor, inténtelo de nuevo."
      }]);
    }
    setLoading(false);
  };
  const sugs = role === "staff" ? ["Interpreta sat 89%", "Redacta nota de evolución EPOC", "Signos de descompensación ICC", "Pauta oxigenoterapia"] : ["¿Para qué sirve mi inhalador?", "¿Qué hago si me falta el aire?", "¿Cuándo llamar al médico?", "¿Cómo me tomo la tensión?"];
  return /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(CTitle, {
    icon: I.brain
  }, "Asistente IA ", /*#__PURE__*/React.createElement("span", {
    style: {
      background: C.ai + "20",
      color: C.ai,
      borderRadius: "20px",
      padding: "2px 9px",
      fontSize: "11px",
      fontWeight: "700"
    }
  }, "✨ Activo")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "7px",
      flexWrap: "wrap",
      marginBottom: "14px"
    }
  }, sugs.map((s, i) => /*#__PURE__*/React.createElement("button", {
    key: i,
    onClick: () => setInput(s),
    style: {
      padding: "6px 11px",
      borderRadius: "20px",
      border: `1px solid ${C.ai}40`,
      background: C.aiL,
      color: C.ai,
      fontSize: "12px",
      fontWeight: "600",
      cursor: "pointer"
    }
  }, s))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: "300px",
      overflowY: "auto",
      padding: "12px",
      background: C.g50,
      borderRadius: "12px",
      marginBottom: "12px",
      display: "flex",
      flexDirection: "column",
      gap: "10px"
    }
  }, msgs.map((m, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: m.role === "user" ? "flex-end" : "flex-start"
    }
  }, m.role === "assistant" && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "5px",
      marginBottom: "3px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: "20px",
      height: "20px",
      borderRadius: "50%",
      background: C.ai,
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(Ic, {
    d: I.sparkle,
    size: 11,
    color: "white",
    fill: "white"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "10px",
      fontWeight: "700",
      color: C.ai
    }
  }, "Asistente IA")), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "85%",
      padding: "11px 14px",
      borderRadius: m.role === "user" ? "18px 18px 4px 18px" : "18px 18px 18px 4px",
      background: m.role === "user" ? C.pri : C.w,
      color: m.role === "user" ? "white" : C.tx,
      fontSize: "14px",
      lineHeight: "1.6",
      boxShadow: "0 2px 8px rgba(0,0,0,0.07)"
    }
  }, m.text))), loading && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "7px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: "20px",
      height: "20px",
      borderRadius: "50%",
      background: C.ai,
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(Ic, {
    d: I.sparkle,
    size: 11,
    color: "white",
    fill: "white"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      background: C.w,
      borderRadius: "18px",
      padding: "11px 15px",
      boxShadow: "0 2px 8px rgba(0,0,0,0.07)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: C.ai,
      fontSize: "17px",
      letterSpacing: "2px"
    }
  }, "···"))), /*#__PURE__*/React.createElement("div", {
    ref: bottomRef
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "8px",
      alignItems: "flex-end"
    }
  }, /*#__PURE__*/React.createElement("textarea", {
    style: {
      flex: 1,
      padding: "10px 13px",
      borderRadius: "12px",
      border: `2px solid ${C.g200}`,
      fontSize: "14px",
      fontFamily: "inherit",
      resize: "none",
      outline: "none",
      minHeight: "42px",
      maxHeight: "90px",
      color: C.tx,
      background: C.w
    },
    placeholder: role === "staff" ? "Consulta clínica, nota de evolución..." : "¿Tiene alguna pregunta sobre su salud?",
    value: input,
    onChange: e => setInput(e.target.value),
    rows: 2,
    onKeyDown: e => e.key === "Enter" && !e.shiftKey && (e.preventDefault(), send())
  }), /*#__PURE__*/React.createElement("button", {
    onClick: send,
    disabled: loading,
    style: {
      width: "44px",
      height: "44px",
      borderRadius: "12px",
      background: loading ? C.g200 : C.ai,
      border: "none",
      cursor: loading ? "not-allowed" : "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(Ic, {
    d: I.send,
    size: 17,
    color: "white"
  }))), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "11px",
      color: C.g400,
      marginTop: "6px",
      textAlign: "center"
    }
  }, role === "staff" ? "Apoyo clínico · No reemplaza el juicio médico" : "Las respuestas son orientativas · Consulte siempre a su médico"));
}
function RangesRef() {
  const rows = [["Tensión Arterial", "≤80/50", "<90/60", "90–140/60–90", ">140/90", "≥180/110"], ["Frec. Cardíaca", "≤40 lpm", "<50 lpm", "50–100 lpm", ">100 lpm", "≥130 lpm"], ["Saturación O₂", "≤88%", "<92%", "92–100%", "—", "—"], ["Temperatura", "≤35°C", "<36°C", "36–38°C", ">38°C", "≥39°C"], ["Frec. Resp.", "≤8 rpm", "<12 rpm", "12–20 rpm", ">20 rpm", "≥25 rpm"]];
  return /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(CTitle, {
    icon: I.shield
  }, "Rangos de Referencia Clínica"), /*#__PURE__*/React.createElement("div", {
    style: {
      overflowX: "auto"
    }
  }, /*#__PURE__*/React.createElement("table", {
    style: {
      width: "100%",
      borderCollapse: "collapse",
      fontSize: "12px"
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", {
    style: {
      background: C.g50
    }
  }, ["Constante", "🔴 Crítico bajo", "🟡 Bajo", "🟢 Normal", "🟡 Alto", "🔴 Crítico alto"].map(h => /*#__PURE__*/React.createElement("th", {
    key: h,
    style: {
      padding: "8px",
      textAlign: "left",
      color: C.g600,
      fontWeight: "700",
      borderBottom: `2px solid ${C.g100}`
    }
  }, h)))), /*#__PURE__*/React.createElement("tbody", null, rows.map((r, i) => /*#__PURE__*/React.createElement("tr", {
    key: i,
    style: {
      borderBottom: `1px solid ${C.g100}`
    }
  }, [{
    c: C.tx
  }, {
    c: C.crit
  }, {
    c: C.warn
  }, {
    c: C.ok
  }, {
    c: C.warn
  }, {
    c: C.crit
  }].map((s, j) => /*#__PURE__*/React.createElement("td", {
    key: j,
    style: {
      padding: "8px",
      color: s.c,
      fontWeight: j > 0 ? "600" : "700"
    }
  }, r[j]))))))));
}
function DiuresisModule({
  fs,
  onSave
}) {
  const [dRecs, setDRecs] = usePersistedState("had_diuresis", []);
  const [hRecs, setHRecs] = usePersistedState("had_heces", []);
  const [dForm, setDForm] = useState({
    qty: "",
    color: "Amarillo claro (normal)",
    obs: ""
  });
  const [hForm, setHForm] = useState({
    tipo: "Normal (3-4)",
    obs: ""
  });
  const [dSaved, setDSaved] = useState(false);
  const [hSaved, setHSaved] = useState(false);
  const [tab, setTab] = useState("diuresis");
  const saveDiuresis = () => {
    if (!dForm.qty.trim()) {
      alert("Introduzca la cantidad en ml");
      return;
    }
    const entry = {
      id: Date.now(),
      date: new Date().toLocaleDateString("es-ES"),
      time: new Date().toLocaleTimeString("es-ES", {
        hour: "2-digit",
        minute: "2-digit"
      }),
      ...dForm
    };
    setDRecs(p => [entry, ...p]);
    setDForm({
      qty: "",
      color: "Amarillo claro (normal)",
      obs: ""
    });
    setDSaved(true);
    setTimeout(() => setDSaved(false), 2000);
    onSave && onSave();
  };
  const saveHeces = () => {
    const entry = {
      id: Date.now(),
      date: new Date().toLocaleDateString("es-ES"),
      time: new Date().toLocaleTimeString("es-ES", {
        hour: "2-digit",
        minute: "2-digit"
      }),
      ...hForm
    };
    setHRecs(p => [entry, ...p]);
    setHForm({
      tipo: "Normal (3-4)",
      obs: ""
    });
    setHSaved(true);
    setTimeout(() => setHSaved(false), 2000);
    onSave && onSave();
  };
  const colorBadge = color => {
    const col = color.includes("sangre") || color.includes("Negras") ? C.crit : color.includes("oscuro") || color.includes("Naranja") || color.includes("Turbia") ? C.warn : C.ok;
    return /*#__PURE__*/React.createElement(Badge, {
      label: color.split(" (")[0],
      color: col
    });
  };
  const bristolBadge = tipo => {
    const col = tipo.includes("sangre") || tipo.includes("Negras") || tipo.includes("Diarrea") ? C.crit : tipo.includes("Estreñ") || tipo.includes("Blandas") ? C.warn : C.ok;
    return /*#__PURE__*/React.createElement(Badge, {
      label: tipo.split(" (")[0],
      color: col
    });
  };
  const today = new Date().toLocaleDateString("es-ES");
  const todayDiuresis = dRecs.filter(r => r.date === today).reduce((s, r) => s + parseInt(r.qty || 0), 0);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "8px",
      marginBottom: "16px"
    }
  }, [{
    id: "diuresis",
    l: "💧 Diuresis"
  }, {
    id: "deposiciones",
    l: "🔴 Deposiciones"
  }].map(t => /*#__PURE__*/React.createElement("button", {
    key: t.id,
    onClick: () => setTab(t.id),
    style: {
      padding: "9px 18px",
      borderRadius: "20px",
      border: `2px solid ${tab === t.id ? C.pri : C.g200}`,
      background: tab === t.id ? C.priL : C.w,
      color: tab === t.id ? C.pri : C.g600,
      fontWeight: tab === t.id ? "700" : "500",
      fontSize: "13px",
      cursor: "pointer"
    }
  }, t.l))), tab === "diuresis" && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      background: `linear-gradient(135deg,${C.pri},${C.priD})`,
      borderRadius: "14px",
      padding: "16px",
      marginBottom: "14px",
      color: "white",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "0 0 3px",
      fontSize: "13px",
      opacity: 0.85
    }
  }, "Total diuresis hoy"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: "28px",
      fontWeight: "800"
    }
  }, todayDiuresis, " ml"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "4px 0 0",
      fontSize: "11px",
      opacity: 0.75
    }
  }, dRecs.filter(r => r.date === today).length, " registro", dRecs.filter(r => r.date === today).length !== 1 ? "s" : "", " · Objetivo: 1500-2000ml/día")), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "right"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: "60px",
      height: "60px",
      borderRadius: "50%",
      border: "4px solid rgba(255,255,255,0.3)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "26px"
    }
  }, todayDiuresis < 500 ? "🔴" : todayDiuresis < 1000 ? "🟡" : "🟢"))), /*#__PURE__*/React.createElement(Card, {
    style: {
      marginBottom: "14px"
    }
  }, /*#__PURE__*/React.createElement(CTitle, {
    icon: I.drop
  }, "Nuevo registro de diuresis"), dSaved && /*#__PURE__*/React.createElement(SavedBanner, {
    msg: "✅ Diuresis registrada correctamente"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "12px",
      marginBottom: "12px"
    }
  }, /*#__PURE__*/React.createElement(VInp, {
    label: "Cantidad (ml)",
    required: true,
    type: "number",
    placeholder: "Ej: 350",
    value: dForm.qty,
    onChange: e => setDForm({
      ...dForm,
      qty: e.target.value
    })
  }), /*#__PURE__*/React.createElement(VSel, {
    label: "Color",
    value: dForm.color,
    onChange: e => setDForm({
      ...dForm,
      color: e.target.value
    })
  }, /*#__PURE__*/React.createElement("option", null, "Amarillo claro (normal)"), /*#__PURE__*/React.createElement("option", null, "Transparente"), /*#__PURE__*/React.createElement("option", null, "Amarillo oscuro"), /*#__PURE__*/React.createElement("option", null, "Naranja/marrón"), /*#__PURE__*/React.createElement("option", null, "Con sangre"), /*#__PURE__*/React.createElement("option", null, "Turbia")), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: "1/-1"
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: {
      display: "block",
      fontSize: "12px",
      fontWeight: "600",
      color: C.g600,
      marginBottom: "4px"
    }
  }, "Observaciones"), /*#__PURE__*/React.createElement("textarea", {
    value: dForm.obs,
    onChange: e => setDForm({
      ...dForm,
      obs: e.target.value
    }),
    placeholder: "Ardor, urgencia, dolor, olor especial...",
    style: {
      width: "100%",
      padding: "10px 12px",
      borderRadius: "10px",
      border: `2px solid ${C.g200}`,
      fontSize: "13px",
      outline: "none",
      minHeight: "64px",
      resize: "vertical",
      boxSizing: "border-box",
      color: C.tx,
      background: C.w,
      fontFamily: "inherit"
    }
  }))), /*#__PURE__*/React.createElement(Btn, {
    onClick: saveDiuresis
  }, "💾 Guardar diuresis")), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(CTitle, {
    icon: I.book
  }, "Historial de diuresis (", dRecs.length, " registros)"), dRecs.length === 0 ? /*#__PURE__*/React.createElement("p", {
    style: {
      color: C.g400,
      textAlign: "center",
      padding: "20px 0"
    }
  }, "Sin registros") : dRecs.map((r, i) => /*#__PURE__*/React.createElement("div", {
    key: r.id,
    style: {
      display: "flex",
      gap: "12px",
      alignItems: "center",
      padding: "10px 0",
      borderBottom: i < dRecs.length - 1 ? `1px solid ${C.g100}` : "none"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: "42px",
      height: "42px",
      borderRadius: "10px",
      background: C.priL,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "9px",
      color: C.pri,
      fontWeight: "700"
    }
  }, r.date), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "12px",
      color: C.pri,
      fontWeight: "800"
    }
  }, r.time)), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "7px",
      alignItems: "center",
      marginBottom: "3px",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: "800",
      fontSize: "15px",
      color: C.pri
    }
  }, r.qty, " ml"), colorBadge(r.color)), r.obs && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: "12px",
      color: C.txL,
      fontStyle: "italic"
    }
  }, r.obs)), /*#__PURE__*/React.createElement("button", {
    onClick: () => setDRecs(p => p.filter(x => x.id !== r.id)),
    style: {
      width: "28px",
      height: "28px",
      borderRadius: "7px",
      background: C.critL,
      border: "none",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(Ic, {
    d: I.trash,
    size: 13,
    color: C.crit
  })))))), tab === "deposiciones" && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Card, {
    style: {
      marginBottom: "14px"
    }
  }, /*#__PURE__*/React.createElement(CTitle, {
    icon: I.drop
  }, "Nuevo registro de deposición"), hSaved && /*#__PURE__*/React.createElement(SavedBanner, {
    msg: "✅ Deposición registrada correctamente"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "12px",
      marginBottom: "12px"
    }
  }, /*#__PURE__*/React.createElement(VSel, {
    label: "Tipo (Escala Bristol)",
    value: hForm.tipo,
    onChange: e => setHForm({
      ...hForm,
      tipo: e.target.value
    })
  }, /*#__PURE__*/React.createElement("option", null, "Normal (3-4)"), /*#__PURE__*/React.createElement("option", null, "Duras / Estreñimiento (1-2)"), /*#__PURE__*/React.createElement("option", null, "Blandas (5-6)"), /*#__PURE__*/React.createElement("option", null, "Líquidas / Diarrea (7)"), /*#__PURE__*/React.createElement("option", null, "Con sangre"), /*#__PURE__*/React.createElement("option", null, "Negras / Melenas")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: {
      display: "block",
      fontSize: "12px",
      fontWeight: "600",
      color: C.g600,
      marginBottom: "4px"
    }
  }, "Observaciones"), /*#__PURE__*/React.createElement("textarea", {
    value: hForm.obs,
    onChange: e => setHForm({
      ...hForm,
      obs: e.target.value
    }),
    placeholder: "Dolor, náuseas, esfuerzo...",
    style: {
      width: "100%",
      padding: "10px 12px",
      borderRadius: "10px",
      border: `2px solid ${C.g200}`,
      fontSize: "13px",
      outline: "none",
      minHeight: "64px",
      resize: "vertical",
      boxSizing: "border-box",
      color: C.tx,
      background: C.w,
      fontFamily: "inherit"
    }
  }))), /*#__PURE__*/React.createElement(Btn, {
    onClick: saveHeces
  }, "💾 Guardar deposición")), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(CTitle, {
    icon: I.book
  }, "Historial de deposiciones (", hRecs.length, " registros)"), hRecs.length === 0 ? /*#__PURE__*/React.createElement("p", {
    style: {
      color: C.g400,
      textAlign: "center",
      padding: "20px 0"
    }
  }, "Sin registros") : hRecs.map((r, i) => /*#__PURE__*/React.createElement("div", {
    key: r.id,
    style: {
      display: "flex",
      gap: "12px",
      alignItems: "center",
      padding: "10px 0",
      borderBottom: i < hRecs.length - 1 ? `1px solid ${C.g100}` : "none"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: "42px",
      height: "42px",
      borderRadius: "10px",
      background: C.g50,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "9px",
      color: C.g600,
      fontWeight: "700"
    }
  }, r.date), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "12px",
      color: C.g600,
      fontWeight: "800"
    }
  }, r.time)), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "7px",
      alignItems: "center",
      marginBottom: "3px",
      flexWrap: "wrap"
    }
  }, bristolBadge(r.tipo)), r.obs && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: "12px",
      color: C.txL,
      fontStyle: "italic"
    }
  }, r.obs)), /*#__PURE__*/React.createElement("button", {
    onClick: () => setHRecs(p => p.filter(x => x.id !== r.id)),
    style: {
      width: "28px",
      height: "28px",
      borderRadius: "7px",
      background: C.critL,
      border: "none",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(Ic, {
    d: I.trash,
    size: 13,
    color: C.crit
  })))))));
}
function PDFExportPatient({
  patientName,
  hist,
  notes,
  meds,
  alerts,
  recs
}) {
  const [generating, setGenerating] = useState(false);
  const exportPDF = () => {
    setGenerating(true);
    const lines = [];
    const now = new Date().toLocaleDateString("es-ES", {
      day: "numeric",
      month: "long",
      year: "numeric"
    });
    lines.push("HISTORIA CLÍNICA PERSONAL — CUIDAENCASA HAD");
    lines.push("=".repeat(50));
    lines.push(`Paciente: ${patientName}`);
    lines.push(`Fecha de exportación: ${now}`);
    lines.push(`Generado conforme al Art. 20 RGPD — Derecho a la portabilidad de datos`);
    lines.push("");
    lines.push("CONSTANTES VITALES");
    lines.push("-".repeat(30));
    (hist || []).forEach(r => {
      lines.push(`${r.date} | T.A.: ${r.ta} | F.C.: ${r.fc} lpm | Sat: ${r.sat}% | Temp: ${r.temp}°C | F.R.: ${r.fr} rpm${r.peso ? " | Peso: " + r.peso + "kg" : ""}${r.gluc ? " | Glucosa: " + r.gluc + " mg/dL" : ""}`);
    });
    if (!hist?.length) lines.push("Sin registros de constantes");
    lines.push("");
    lines.push("MEDICACIÓN ACTIVA");
    lines.push("-".repeat(30));
    (meds || []).filter(m => m.active).forEach(m => {
      lines.push(`• ${m.name} — ${m.dose} — ${m.freq} — Horarios: ${m.times?.join(", ")}`);
    });
    if (!(meds || []).filter(m => m.active).length) lines.push("Sin medicación activa");
    lines.push("");
    lines.push("EVOLUCIÓN CLÍNICA");
    lines.push("-".repeat(30));
    (notes || []).forEach(n => {
      lines.push(`${n.date} — ${n.author}${n.signed ? " (Firmada)" : ""}`);
      lines.push(n.text);
      lines.push("");
    });
    if (!notes?.length) lines.push("Sin notas clínicas");
    lines.push("");
    lines.push("ALERTAS CLÍNICAS");
    lines.push("-".repeat(30));
    (alerts || []).forEach(a => {
      lines.push(`${a.time} | ${a.vital} | Valor: ${a.value} | Nivel: ${a.level} | ${a.read ? "Revisada" : "Pendiente"}`);
    });
    if (!alerts?.length) lines.push("Sin alertas registradas");
    lines.push("");
    lines.push("RECOMENDACIONES MÉDICAS");
    lines.push("-".repeat(30));
    (recs || []).forEach(r => {
      lines.push(`${new Date(r.sentAt).toLocaleDateString("es-ES")} — ${r.typeLabel} — ${r.sentBy}`);
      lines.push(r.text);
      lines.push("");
    });
    if (!recs?.length) lines.push("Sin recomendaciones registradas");
    const content = lines.join("\n");
    const blob = new Blob([content], {
      type: "text/plain;charset=utf-8"
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `historia_clinica_${patientName.replace(/ /g, "_")}_${new Date().toISOString().split("T")[0]}.txt`;
    a.click();
    URL.revokeObjectURL(url);
    setTimeout(() => setGenerating(false), 1000);
  };
  return /*#__PURE__*/React.createElement("button", {
    onClick: exportPDF,
    disabled: generating,
    style: {
      display: "flex",
      alignItems: "center",
      gap: "8px",
      padding: "11px 18px",
      borderRadius: "12px",
      background: generating ? C.g200 : `linear-gradient(135deg,${C.pri},${C.priD})`,
      border: "none",
      color: "white",
      fontWeight: "700",
      fontSize: "13px",
      cursor: generating ? "not-allowed" : "pointer",
      transition: "all 0.2s"
    }
  }, generating ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      width: "14px",
      height: "14px",
      border: "2px solid rgba(255,255,255,0.3)",
      borderTop: "2px solid white",
      borderRadius: "50%",
      animation: "spin 0.8s linear infinite"
    }
  }), " Generando...") : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Ic, {
    d: I.download,
    size: 15,
    color: "white"
  }), " Descargar mi historia clínica"));
}
function AIClinicialRecs({
  patient,
  vitals,
  meds,
  alerts,
  notes
}) {
  const [loading, setLoading] = useState(false);
  const [recs, setRecs] = useState(null);
  const [error, setError] = useState(null);
  const [shown, setShown] = useState(false);
  const analyze = async () => {
    setLoading(true);
    setError(null);
    setRecs(null);
    setShown(true);
    const lastVitals = vitals?.slice(0, 5) || [];
    const activeMeds = meds?.filter(m => m.active) || [];
    const unresolvedAlerts = alerts?.filter(a => !a.read) || [];
    const prompt = `Eres un sistema de apoyo a la decisión clínica para un servicio de Hospitalización a Domicilio (HAD).
Analiza el siguiente perfil clínico del paciente y genera recomendaciones concretas para el equipo sanitario.

PACIENTE: ${patient?.name || "Paciente HAD"}
DIAGNÓSTICO: ${patient?.dx || "No especificado"}
EDAD: ${patient?.age || "?"} años
PRIORIDAD: ${patient?.priority || "normal"}

ÚLTIMAS CONSTANTES VITALES:
${lastVitals.map(v => `- ${v.date}: T.A.${v.ta} FC:${v.fc}lpm Sat:${v.sat}% Temp:${v.temp}°C`).join("\n") || "Sin registros recientes"}

MEDICACIÓN ACTIVA (${activeMeds.length} fármacos):
${activeMeds.map(m => `- ${m.name}: ${m.dose}, ${m.freq}`).join("\n") || "Sin medicación registrada"}

ALERTAS SIN RESOLVER (${unresolvedAlerts.length}):
${unresolvedAlerts.map(a => `- ${a.vital}: ${a.value} (${a.level})`).join("\n") || "Sin alertas pendientes"}

NOTAS CLÍNICAS RECIENTES:
${notes?.slice(0, 3).map(n => `- ${n.date} (${n.author}): ${n.text?.slice(0, 100)}`).join("\n") || "Sin notas recientes"}

Genera un JSON con este formato exacto, sin texto adicional:
{
 "resumen": "Valoración global del estado del paciente en 2 frases",
 "recomendaciones": [
 {
 "tipo": "medicacion|seguimiento|derivacion|constantes|higiene|nutricion",
 "prioridad": "alta|media|baja",
 "titulo": "Título breve de la recomendación",
 "detalle": "Explicación clínica detallada con justificación basada en los datos",
 "accion": "Acción concreta que debe tomar el sanitario"
 }
 ],
 "alertas_ia": ["Observación importante 1", "Observación importante 2"]
}`;
    try {
      const response = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          model: "claude-sonnet-4-6",
          max_tokens: 1500,
          messages: [{
            role: "user",
            content: prompt
          }]
        })
      });
      const data = await response.json();
      const text = data.content?.map(b => b.text || "").join("") || "";
      const jsonMatch = text.match(/\{[\s\S]*\}/);
      if (!jsonMatch) throw new Error("No se pudo generar el análisis");
      setRecs(JSON.parse(jsonMatch[0]));
    } catch (e) {
      setError(e.message || "Error al generar recomendaciones");
    } finally {
      setLoading(false);
    }
  };
  const TIPO_CFG = {
    medicacion: {
      emoji: "💊",
      color: C.warn
    },
    seguimiento: {
      emoji: "📊",
      color: C.pri
    },
    derivacion: {
      emoji: "🏥",
      color: C.crit
    },
    constantes: {
      emoji: "❤️",
      color: C.ok
    },
    higiene: {
      emoji: "🧼",
      color: C.ai
    },
    nutricion: {
      emoji: "🥗",
      color: C.ok
    }
  };
  const PRIO_CFG = {
    alta: {
      color: C.crit,
      label: "🔴 Alta"
    },
    media: {
      color: C.warn,
      label: "🟡 Media"
    },
    baja: {
      color: C.ok,
      label: "🟢 Baja"
    }
  };
  return /*#__PURE__*/React.createElement(Card, {
    style: {
      border: `2px solid ${C.ai}`,
      marginBottom: "16px"
    }
  }, /*#__PURE__*/React.createElement(CTitle, {
    icon: I.ai
  }, "🤖 Análisis clínico con IA"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "0 0 12px",
      fontSize: "13px",
      color: C.txL
    }
  }, "El asistente IA analiza el perfil completo del paciente y genera recomendaciones clínicas personalizadas para el equipo sanitario."), !shown && /*#__PURE__*/React.createElement(Btn, {
    onClick: analyze,
    color: C.ai,
    style: {
      fontSize: "13px"
    }
  }, "🔍 Analizar perfil y generar recomendaciones"), loading && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "12px",
      padding: "16px",
      background: C.aiL || C.priL,
      borderRadius: "12px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: "24px",
      height: "24px",
      border: `3px solid ${C.g200}`,
      borderTop: `3px solid ${C.ai}`,
      borderRadius: "50%",
      animation: "spin 0.8s linear infinite",
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "0 0 2px",
      fontWeight: "700",
      color: C.ai,
      fontSize: "13px"
    }
  }, "Analizando perfil clínico..."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: "11px",
      color: C.txL
    }
  }, "Revisando constantes, medicación, alertas y notas"))), error && /*#__PURE__*/React.createElement("div", {
    style: {
      background: C.critL,
      border: `1px solid ${C.crit}30`,
      borderRadius: "10px",
      padding: "10px 14px"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: "13px",
      color: C.crit,
      fontWeight: "600"
    }
  }, "⚠️ ", error)), recs && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      background: C.aiL || C.priL,
      borderRadius: "12px",
      padding: "14px",
      marginBottom: "14px",
      border: `1px solid ${C.ai}30`
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "0 0 4px",
      fontWeight: "800",
      fontSize: "13px",
      color: C.ai
    }
  }, "🧠 Valoración global"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: "13px",
      color: C.tx,
      lineHeight: "1.6"
    }
  }, recs.resumen)), recs.alertas_ia?.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      background: C.warnL,
      border: `1px solid ${C.warn}30`,
      borderLeft: `4px solid ${C.warn}`,
      borderRadius: "10px",
      padding: "10px 14px",
      marginBottom: "12px"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "0 0 6px",
      fontWeight: "700",
      color: C.warn,
      fontSize: "12px"
    }
  }, "⚠️ Observaciones importantes"), recs.alertas_ia.map((a, i) => /*#__PURE__*/React.createElement("p", {
    key: i,
    style: {
      margin: "0 0 2px",
      fontSize: "12px",
      color: C.tx
    }
  }, "• ", a))), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "0 0 8px",
      fontWeight: "800",
      fontSize: "13px",
      color: C.priD
    }
  }, "📋 ", recs.recomendaciones?.length, " recomendación", recs.recomendaciones?.length !== 1 ? "es" : "", " generada", recs.recomendaciones?.length !== 1 ? "s" : "", ":"), recs.recomendaciones?.map((r, i) => {
    const tc = TIPO_CFG[r.tipo] || {
      emoji: "📌",
      color: C.pri
    };
    const pc = PRIO_CFG[r.prioridad] || PRIO_CFG.media;
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        background: C.w,
        borderRadius: "12px",
        padding: "14px",
        marginBottom: "10px",
        border: `1px solid ${C.g200}`,
        borderLeft: `4px solid ${tc.color}`
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: "7px",
        marginBottom: "6px",
        flexWrap: "wrap",
        alignItems: "center"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: "18px"
      }
    }, tc.emoji), /*#__PURE__*/React.createElement("span", {
      style: {
        fontWeight: "800",
        fontSize: "13px",
        color: tc.color
      }
    }, r.titulo), /*#__PURE__*/React.createElement(Badge, {
      label: pc.label,
      color: pc.color
    })), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: "0 0 6px",
        fontSize: "12px",
        color: C.tx,
        lineHeight: "1.6"
      }
    }, r.detalle), /*#__PURE__*/React.createElement("div", {
      style: {
        background: tc.color + "10",
        borderRadius: "8px",
        padding: "8px 10px",
        display: "flex",
        gap: "7px",
        alignItems: "flex-start"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: "13px",
        flexShrink: 0
      }
    }, "→"), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        fontSize: "12px",
        color: tc.color,
        fontWeight: "700"
      }
    }, r.accion)));
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      background: C.g50,
      borderRadius: "8px",
      padding: "9px 12px",
      marginTop: "8px"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: "10px",
      color: C.g400,
      lineHeight: "1.5"
    }
  }, "⚕️ Estas recomendaciones son generadas por IA como apoyo a la decisión clínica y no sustituyen el criterio médico profesional. Siempre debe ser validado por el médico o enfermero responsable del paciente.")), /*#__PURE__*/React.createElement("button", {
    onClick: () => {
      setRecs(null);
      setShown(false);
    },
    style: {
      marginTop: "10px",
      padding: "8px 14px",
      borderRadius: "9px",
      background: C.g100,
      border: `1px solid ${C.g200}`,
      color: C.g600,
      fontWeight: "600",
      fontSize: "12px",
      cursor: "pointer"
    }
  }, "🔄 Nuevo análisis")));
}
function PatientHistoryPanel({
  patients,
  alerts,
  visits,
  notes,
  selPat,
  setSelPat,
  setSection
}) {
  const [viewPat, setViewPat] = useState(null); // null = list, patient = detail
  const [detailTab, setDetailTab] = useState("resumen");
  const [storedHist] = useSyncedState("had_hist_all", INIT_ALL_HIST);
  const [storedMeds] = useSyncedState("had_meds", INIT_ALL_MEDS);
  const [storedRecs] = useSyncedState("had_recs", []);
  if (!viewPat) return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr 1fr",
      gap: "11px",
      marginBottom: "16px"
    }
  }, [{
    l: "Pacientes",
    v: patients.length,
    c: C.pri
  }, {
    l: "Con alertas",
    v: [...new Set(alerts.filter(a => !a.read).map(a => a.pid))].length,
    c: C.crit
  }, {
    l: "Sin alertas",
    v: patients.length - [...new Set(alerts.filter(a => !a.read).map(a => a.pid))].length,
    c: C.ok
  }].map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      background: s.c + "12",
      borderRadius: "12px",
      padding: "13px",
      borderLeft: `4px solid ${s.c}`
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "26px",
      fontWeight: "800",
      color: s.c,
      margin: "0 0 2px"
    }
  }, s.v), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "11px",
      color: C.txL,
      margin: 0
    }
  }, s.l)))), patients.map(p => {
    const pa = alerts.filter(a => a.pid === p.id && !a.read);
    const worst = pa.some(a => a.level === "critical") ? "critical" : pa.some(a => a.level === "warning") ? "warning" : null;
    const patVisits = visits.filter(v => v.pid === p.id || v.patName === p.name);
    const lastHist = (storedHist[p.id] || [])[0];
    return /*#__PURE__*/React.createElement("div", {
      key: p.id,
      onClick: () => {
        setViewPat(p);
        setSelPat(p);
        setDetailTab("resumen");
      },
      style: {
        background: C.w,
        borderRadius: "14px",
        padding: "14px",
        boxShadow: "0 2px 9px rgba(0,0,0,0.06)",
        marginBottom: "10px",
        cursor: "pointer",
        border: `2px solid ${selPat?.id === p.id ? C.pri : worst ? aC(worst) + "40" : "transparent"}`,
        transition: "all 0.15s"
      },
      onMouseEnter: e => e.currentTarget.style.borderColor = C.pri,
      onMouseLeave: e => e.currentTarget.style.borderColor = selPat?.id === p.id ? C.pri : worst ? aC(worst) + "40" : "transparent"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: "12px"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: "46px",
        height: "46px",
        borderRadius: "50%",
        background: worst ? aBg(worst) : C.priL,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        border: `2px solid ${worst ? aC(worst) : C.pri}`
      }
    }, /*#__PURE__*/React.createElement(Ic, {
      d: I.user,
      size: 22,
      color: worst ? aC(worst) : C.pri
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: "8px",
        alignItems: "center",
        marginBottom: "3px",
        flexWrap: "wrap"
      }
    }, /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        fontWeight: "800",
        fontSize: "14px"
      }
    }, p.name), /*#__PURE__*/React.createElement(Badge, {
      label: p.room,
      color: C.g400
    }), worst && /*#__PURE__*/React.createElement(Badge, {
      label: `${aL(worst)} · ${pa.length} alerta${pa.length > 1 ? "s" : ""}`,
      color: aC(worst)
    })), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: "0 0 3px",
        color: C.txL,
        fontSize: "12px"
      }
    }, p.age, " años · ", p.dx), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: "10px",
        fontSize: "11px",
        color: C.g600,
        flexWrap: "wrap"
      }
    }, lastHist && /*#__PURE__*/React.createElement("span", null, "📊 Últ. constantes: ", lastHist.date), /*#__PURE__*/React.createElement("span", null, "📋 ", patVisits.length, " visita", patVisits.length !== 1 ? "s" : ""), /*#__PURE__*/React.createElement("span", null, "📞 ", p.contact))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
        gap: "5px",
        flexShrink: 0
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: "12px",
        color: C.pri,
        fontWeight: "700"
      }
    }, "Ver historial →"), /*#__PURE__*/React.createElement(Badge, {
      label: PR[p.priority]?.label || p.priority,
      color: PR[p.priority]?.color || C.g400
    }))));
  }));
  const p = viewPat;
  const patAlerts = alerts.filter(a => a.pid === p.id);
  const patVisits = visits.filter(v => v.pid === p.id || v.patName === p.name).sort((a, b) => a.time?.localeCompare(b.time));
  const patHist = storedHist[p.id] || [];
  const patMeds = (storedMeds[p.id] || []).filter(m => m.active);
  const patNotes = notes.filter(n => n.author) || notes;
  const patRecs = storedRecs.filter(r => r.patientId === p.id);
  const lastVitals = patHist[0];
  const worst = patAlerts.some(a => !a.read && a.level === "critical") ? "critical" : patAlerts.some(a => !a.read && a.level === "warning") ? "warning" : null;
  const TABS = [{
    id: "resumen",
    l: "📋 Resumen"
  }, {
    id: "constantes",
    l: "📊 Constantes"
  }, {
    id: "medicacion",
    l: "💊 Medicación"
  }, {
    id: "visitas",
    l: "🗓 Visitas"
  }, {
    id: "notas",
    l: "📝 Notas"
  }, {
    id: "alertas",
    l: `🔔 Alertas${patAlerts.filter(a => !a.read).length > 0 ? " (" + patAlerts.filter(a => !a.read).length + ")" : ""}`
  }, {
    id: "recomendaciones",
    l: "📤 Recs."
  }];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("button", {
    onClick: () => setViewPat(null),
    style: {
      display: "flex",
      alignItems: "center",
      gap: "7px",
      padding: "8px 14px",
      borderRadius: "10px",
      border: `1px solid ${C.g200}`,
      background: C.w,
      cursor: "pointer",
      fontWeight: "600",
      fontSize: "13px",
      color: C.g800,
      marginBottom: "14px"
    }
  }, "← Volver a la lista"), /*#__PURE__*/React.createElement("div", {
    style: {
      background: `linear-gradient(135deg,${worst ? aC(worst) : C.pri},${worst ? aC(worst) + "cc" : C.priD})`,
      borderRadius: "16px",
      padding: "18px",
      marginBottom: "14px",
      color: "white"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "14px",
      alignItems: "center",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: "56px",
      height: "56px",
      borderRadius: "50%",
      background: "rgba(255,255,255,0.2)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(Ic, {
    d: I.user,
    size: 28,
    color: "white"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "0 0 4px",
      fontWeight: "800",
      fontSize: "18px"
    }
  }, p.name), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "0 0 4px",
      fontSize: "13px",
      opacity: 0.9
    }
  }, p.age, " años · ", p.dx, " · ", p.room), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "8px",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    label: `🩺 ${p.doctor}`,
    color: "rgba(255,255,255,0.3)"
  }), /*#__PURE__*/React.createElement(Badge, {
    label: `💉 ${p.nurse}`,
    color: "rgba(255,255,255,0.3)"
  }), worst && /*#__PURE__*/React.createElement(Badge, {
    label: `${aL(worst)} · ${patAlerts.filter(a => !a.read).length} alertas`,
    color: aC(worst)
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "8px",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => {
      setSelPat(p);
      setSection("evolucion");
    },
    style: {
      padding: "8px 12px",
      borderRadius: "10px",
      background: "rgba(255,255,255,0.2)",
      border: "none",
      color: "white",
      fontWeight: "700",
      fontSize: "12px",
      cursor: "pointer"
    }
  }, "📝 Añadir nota"), /*#__PURE__*/React.createElement("button", {
    onClick: () => {
      setSelPat(p);
      setSection("constantes");
    },
    style: {
      padding: "8px 12px",
      borderRadius: "10px",
      background: "rgba(255,255,255,0.2)",
      border: "none",
      color: "white",
      fontWeight: "700",
      fontSize: "12px",
      cursor: "pointer"
    }
  }, "📊 Constantes"), /*#__PURE__*/React.createElement("button", {
    onClick: () => {
      setSelPat(p);
      setSection("teleconsulta");
    },
    style: {
      padding: "8px 12px",
      borderRadius: "10px",
      background: "rgba(255,255,255,0.2)",
      border: "none",
      color: "white",
      fontWeight: "700",
      fontSize: "12px",
      cursor: "pointer"
    }
  }, "📹 Teleconsulta")))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      overflowX: "auto",
      gap: "6px",
      marginBottom: "14px",
      paddingBottom: "4px"
    }
  }, TABS.map(t => /*#__PURE__*/React.createElement("button", {
    key: t.id,
    onClick: () => setDetailTab(t.id),
    style: {
      padding: "8px 13px",
      borderRadius: "20px",
      border: `1.5px solid ${detailTab === t.id ? C.pri : C.g200}`,
      background: detailTab === t.id ? C.priL : C.w,
      color: detailTab === t.id ? C.pri : C.g600,
      fontWeight: detailTab === t.id ? "700" : "500",
      fontSize: "12px",
      cursor: "pointer",
      whiteSpace: "nowrap",
      flexShrink: 0
    }
  }, t.l))), detailTab === "resumen" && /*#__PURE__*/React.createElement("div", null, lastVitals && /*#__PURE__*/React.createElement(Card, {
    style: {
      marginBottom: "12px"
    }
  }, /*#__PURE__*/React.createElement(CTitle, {
    icon: I.activity
  }, "Últimas constantes — ", lastVitals.date), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4,1fr)",
      gap: "8px"
    }
  }, [{
    l: "T.A.",
    v: lastVitals.ta,
    k: "ta"
  }, {
    l: "F.C.",
    v: lastVitals.fc + " lpm",
    k: "fc"
  }, {
    l: "Sat O₂",
    v: lastVitals.sat + "%",
    k: "sat"
  }, {
    l: "Temp",
    v: lastVitals.temp + "°C",
    k: "temp"
  }].map((s, i) => {
    const col = aC(s.k === "ta" ? evalTA(lastVitals.ta) : evalV(s.k, lastVitals[s.k]));
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        background: col + "12",
        borderRadius: "10px",
        padding: "10px",
        textAlign: "center"
      }
    }, /*#__PURE__*/React.createElement("p", {
      style: {
        margin: "0 0 2px",
        fontSize: "16px",
        fontWeight: "800",
        color: col
      }
    }, s.v), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        fontSize: "10px",
        color: C.txL
      }
    }, s.l));
  }))), /*#__PURE__*/React.createElement(Card, {
    style: {
      marginBottom: "12px"
    }
  }, /*#__PURE__*/React.createElement(CTitle, {
    icon: I.user
  }, "Datos del paciente"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "8px",
      fontSize: "13px"
    }
  }, [["📋 Diagnóstico", p.dx], ["🏠 Dirección", p.addr], ["📞 Contacto", p.contact], ["📅 Ingreso HAD", p.admDate || "—"], ["🩺 Médico", p.doctor], ["💉 Enfermero", p.nurse], ["📍 Zona", ZONES.find(z => z.id === p.zone)?.label || p.zone || "—"], ["🔑 Acceso app", p.access ? "✅ Activado" : "❌ Sin acceso"]].map(([k, v], i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      padding: "8px 10px",
      background: C.g50,
      borderRadius: "8px"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "0 0 2px",
      fontSize: "11px",
      fontWeight: "700",
      color: C.g600
    }
  }, k), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontWeight: "600",
      color: C.tx
    }
  }, v))))), /*#__PURE__*/React.createElement(AIClinicialRecs, {
    patient: p,
    vitals: patHist,
    meds: storedMeds[p.id] || [],
    alerts: patAlerts,
    notes: patNotes
  }), patMeds.length > 0 && /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(CTitle, {
    icon: I.pill
  }, "Medicación activa (", patMeds.length, ")"), patMeds.map((m, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: "flex",
      gap: "8px",
      alignItems: "center",
      padding: "8px 0",
      borderBottom: i < patMeds.length - 1 ? `1px solid ${C.g100}` : "none"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: "8px",
      height: "8px",
      borderRadius: "50%",
      background: m.color,
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: "600",
      fontSize: "13px",
      flex: 1
    }
  }, m.name), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "12px",
      color: C.txL
    }
  }, m.dose), /*#__PURE__*/React.createElement(Badge, {
    label: m.times.join(" · "),
    color: m.color
  }))))), detailTab === "constantes" && /*#__PURE__*/React.createElement(VitalsModule, {
    role: "staff",
    patients: [p],
    patientId: p.id
  }), detailTab === "medicacion" && /*#__PURE__*/React.createElement(MedicationModule, {
    role: "staff",
    patients: [p],
    patientId: p.id
  }), detailTab === "visitas" && /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(CTitle, {
    icon: I.calendar
  }, "Visitas (", patVisits.length, ")"), patVisits.length === 0 ? /*#__PURE__*/React.createElement("p", {
    style: {
      color: C.g400,
      textAlign: "center",
      padding: "20px 0"
    }
  }, "Sin visitas registradas") : patVisits.map((v, i) => {
    const pr = PR[v.priority] || PR.normal;
    const st = ST[v.status] || ST.pendiente;
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        padding: "11px",
        borderRadius: "12px",
        background: pr.bg,
        marginBottom: "8px",
        borderLeft: `4px solid ${pr.color}`
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: "8px",
        marginBottom: "4px",
        flexWrap: "wrap",
        alignItems: "center"
      }
    }, v.date && /*#__PURE__*/React.createElement(Badge, {
      label: `📅 ${new Date(v.date).toLocaleDateString("es-ES", {
        day: "numeric",
        month: "short"
      })}`,
      color: C.pri
    }), /*#__PURE__*/React.createElement(Badge, {
      label: `⏰ ${v.time}`,
      color: C.g400
    }), /*#__PURE__*/React.createElement(Badge, {
      label: pr.label,
      color: pr.color
    }), /*#__PURE__*/React.createElement(Badge, {
      label: st.label,
      color: st.color
    })), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: "0 0 2px",
        fontSize: "12px",
        color: C.txL
      }
    }, "👤 ", v.professional, " · ⏱ ", v.duration, "min · ", v.type), v.notes && /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        fontSize: "11px",
        color: C.txL,
        fontStyle: "italic"
      }
    }, "📝 ", v.notes));
  })), detailTab === "notas" && /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(CTitle, {
    icon: I.book
  }, "Curso clínico (", patNotes.length, " notas)"), patNotes.length === 0 ? /*#__PURE__*/React.createElement("p", {
    style: {
      color: C.g400,
      textAlign: "center",
      padding: "20px 0"
    }
  }, "Sin notas clínicas") : patNotes.map((n, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      borderLeft: `4px solid ${i === 0 ? C.pri : C.g200}`,
      paddingLeft: "13px",
      marginBottom: "14px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "8px",
      marginBottom: "4px",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "12px",
      fontWeight: "700",
      color: C.pri
    }
  }, n.date), /*#__PURE__*/React.createElement(Badge, {
    label: n.author,
    color: C.pri
  }), n.signed && /*#__PURE__*/React.createElement(Badge, {
    label: "✅ Firmada",
    color: C.ok
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: "13px",
      lineHeight: "1.7",
      color: C.tx
    }
  }, n.text)))), detailTab === "alertas" && /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(CTitle, {
    icon: I.bell
  }, "Alertas (", patAlerts.length, ")"), patAlerts.length === 0 ? /*#__PURE__*/React.createElement("p", {
    style: {
      color: C.g400,
      textAlign: "center",
      padding: "20px 0"
    }
  }, "Sin alertas registradas") : patAlerts.map((a, i) => {
    const col = aC(a.level);
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        padding: "12px",
        borderRadius: "12px",
        background: C.w,
        border: `1px solid ${C.g200}`,
        borderLeft: `4px solid ${col}`,
        marginBottom: "8px",
        opacity: a.read ? 0.6 : 1
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: "7px",
        marginBottom: "4px",
        flexWrap: "wrap",
        alignItems: "center"
      }
    }, /*#__PURE__*/React.createElement(Badge, {
      label: aL(a.level),
      color: col
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontWeight: "700",
        fontSize: "13px"
      }
    }, a.vital), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: "11px",
        color: C.g400
      }
    }, "· ", a.time), a.read && /*#__PURE__*/React.createElement(Badge, {
      label: "✓ Revisada",
      color: C.ok
    })), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: "0 0 3px",
        fontSize: "12px",
        color: C.txL
      }
    }, a.msg), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        fontSize: "12px"
      }
    }, "Valor: ", /*#__PURE__*/React.createElement("strong", {
      style: {
        color: col
      }
    }, a.value)), a.note && /*#__PURE__*/React.createElement("p", {
      style: {
        margin: "6px 0 0",
        fontSize: "12px",
        color: C.priD,
        fontStyle: "italic"
      }
    }, "📝 ", a.note));
  })), detailTab === "recomendaciones" && /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(CTitle, {
    icon: I.upload
  }, "Recomendaciones enviadas (", patRecs.length, ")"), patRecs.length === 0 ? /*#__PURE__*/React.createElement("p", {
    style: {
      color: C.g400,
      textAlign: "center",
      padding: "20px 0"
    }
  }, "Sin recomendaciones enviadas") : patRecs.map((r, i) => {
    const rt = REC_TYPES.find(x => x.v === r.type) || {
      l: r.typeLabel,
      color: C.pri
    };
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        padding: "12px",
        borderRadius: "12px",
        background: C.g50,
        border: `1px solid ${C.g200}`,
        borderLeft: `4px solid ${rt.color}`,
        marginBottom: "8px"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: "7px",
        marginBottom: "5px",
        flexWrap: "wrap",
        alignItems: "center"
      }
    }, /*#__PURE__*/React.createElement(Badge, {
      label: rt.l,
      color: rt.color
    }), r.read ? /*#__PURE__*/React.createElement(Badge, {
      label: "✓ Leída",
      color: C.ok
    }) : /*#__PURE__*/React.createElement(Badge, {
      label: "⏳ Sin leer",
      color: C.warn
    })), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: "0 0 4px",
        fontSize: "13px",
        color: C.tx,
        lineHeight: "1.6"
      }
    }, r.text), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        fontSize: "11px",
        color: C.g400
      }
    }, new Date(r.sentAt).toLocaleDateString("es-ES", {
      day: "numeric",
      month: "long"
    }), " · ", r.sentBy));
  })));
}
const REC_TYPES = [{
  v: "indicacion",
  l: "📋 Indicaciones médicas",
  color: C.pri
}, {
  v: "medicacion",
  l: "💊 Pauta de medicación",
  color: C.warn
}, {
  v: "dieta",
  l: "🥗 Dieta y nutrición",
  color: C.ok
}, {
  v: "fisio",
  l: "🏃 Fisioterapia",
  color: C.ai
}, {
  v: "alarma",
  l: "🚨 Signos de alarma",
  color: C.crit
}, {
  v: "educacion",
  l: "📚 Educación sanitaria",
  color: C.g600
}];
function StaffRecsPanel({
  recs,
  setRecs,
  selPat,
  saved,
  setSaved,
  onSend
}) {
  const [type, setType] = useState("indicacion");
  const [text, setText] = useState("");
  const [textErr, setTextErr] = useState(null);
  const [tab, setTab] = useState("nueva"); // nueva | historial

  const patRecs = recs.filter(r => r.patientId === selPat?.id).sort((a, b) => new Date(b.sentAt) - new Date(a.sentAt));
  const send = () => {
    if (!text.trim() || text.trim().length < 10) {
      setTextErr("El texto debe tener al menos 10 caracteres");
      return;
    }
    setTextErr(null);
    const rec = {
      id: Date.now(),
      patientId: selPat?.id,
      patName: selPat?.name,
      type,
      typeLabel: REC_TYPES.find(r => r.v === type)?.l || type,
      text: text.trim(),
      sentAt: new Date().toISOString(),
      sentBy: "Dr. Pérez González",
      read: false
    };
    setRecs(p => [rec, ...p]);
    setText("");
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
    onSend && onSend(rec);
    setTab("historial");
  };
  const deleteRec = id => setRecs(p => p.filter(r => r.id !== id));
  return /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(CTitle, {
    icon: I.upload,
    extra: /*#__PURE__*/React.createElement(Badge, {
      label: selPat?.name,
      color: C.pri
    })
  }, "Recomendaciones"), saved && /*#__PURE__*/React.createElement(SavedBanner, {
    msg: "✅ Recomendación enviada al paciente correctamente"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "6px",
      marginBottom: "18px"
    }
  }, [{
    id: "nueva",
    l: "✏️ Nueva recomendación"
  }, {
    id: "historial",
    l: `📋 Historial (${patRecs.length})`
  }].map(t => /*#__PURE__*/React.createElement("button", {
    key: t.id,
    onClick: () => setTab(t.id),
    style: {
      padding: "8px 16px",
      borderRadius: "10px",
      border: `2px solid ${tab === t.id ? C.pri : C.g200}`,
      background: tab === t.id ? C.priL : C.w,
      color: tab === t.id ? C.pri : C.g600,
      fontWeight: tab === t.id ? "700" : "500",
      fontSize: "13px",
      cursor: "pointer"
    }
  }, t.l))), tab === "nueva" && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: "14px"
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: {
      display: "block",
      fontSize: "12px",
      fontWeight: "700",
      color: C.g600,
      marginBottom: "8px",
      textTransform: "uppercase",
      letterSpacing: "0.4px"
    }
  }, "Tipo de recomendación"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr 1fr",
      gap: "8px"
    }
  }, REC_TYPES.map(rt => /*#__PURE__*/React.createElement("button", {
    key: rt.v,
    onClick: () => setType(rt.v),
    style: {
      padding: "9px 8px",
      borderRadius: "10px",
      border: `2px solid ${type === rt.v ? rt.color : C.g200}`,
      background: type === rt.v ? rt.color + "15" : C.g50,
      color: type === rt.v ? rt.color : C.g600,
      fontWeight: type === rt.v ? "700" : "500",
      fontSize: "12px",
      cursor: "pointer",
      textAlign: "center"
    }
  }, rt.l)))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: "14px"
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: {
      display: "block",
      fontSize: "12px",
      fontWeight: "700",
      color: textErr ? C.crit : C.g600,
      marginBottom: "5px",
      textTransform: "uppercase",
      letterSpacing: "0.4px"
    }
  }, "Texto de la recomendación ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: C.crit
    }
  }, "*")), /*#__PURE__*/React.createElement("textarea", {
    value: text,
    onChange: e => {
      setText(e.target.value);
      setTextErr(null);
    },
    placeholder: `Escriba las indicaciones para ${selPat?.name?.split(" ")[0]}...`,
    style: {
      width: "100%",
      padding: "11px 13px",
      borderRadius: "10px",
      border: `2px solid ${textErr ? C.crit : C.g200}`,
      fontSize: "14px",
      fontFamily: "inherit",
      outline: "none",
      minHeight: "110px",
      resize: "vertical",
      boxSizing: "border-box",
      color: C.tx,
      background: C.w
    }
  }), textErr && /*#__PURE__*/React.createElement(FieldError, {
    msg: textErr
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "4px 0 0",
      fontSize: "11px",
      color: C.g400,
      textAlign: "right"
    }
  }, text.length, " caracteres")), text.trim().length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      background: C.g50,
      border: `1px solid ${C.g200}`,
      borderRadius: "12px",
      padding: "13px",
      marginBottom: "14px"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "0 0 6px",
      fontSize: "11px",
      fontWeight: "700",
      color: C.g600,
      textTransform: "uppercase"
    }
  }, "Vista previa — así lo verá ", selPat?.name?.split(" ")[0], ":"), /*#__PURE__*/React.createElement("div", {
    style: {
      background: C.w,
      borderRadius: "10px",
      padding: "12px",
      borderLeft: `4px solid ${REC_TYPES.find(r => r.v === type)?.color || C.pri}`
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "0 0 4px",
      fontSize: "12px",
      fontWeight: "700",
      color: REC_TYPES.find(r => r.v === type)?.color || C.pri
    }
  }, REC_TYPES.find(r => r.v === type)?.l), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "0 0 4px",
      fontSize: "13px",
      color: C.tx,
      lineHeight: "1.6"
    }
  }, text), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: "11px",
      color: C.g400
    }
  }, "Dr. Pérez González · ", new Date().toLocaleDateString("es-ES")))), /*#__PURE__*/React.createElement(Btn, {
    onClick: send,
    style: {
      width: "100%",
      justifyContent: "center",
      padding: "13px"
    }
  }, "📤 Enviar recomendación a ", selPat?.name?.split(" ")[0])), tab === "historial" && /*#__PURE__*/React.createElement("div", null, patRecs.length === 0 ? /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      padding: "30px 0",
      color: C.g400
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "14px",
      margin: "0 0 10px"
    }
  }, "Sin recomendaciones enviadas a este paciente"), /*#__PURE__*/React.createElement("button", {
    onClick: () => setTab("nueva"),
    style: {
      padding: "8px 16px",
      borderRadius: "10px",
      background: C.priL,
      border: `1px solid ${C.pri}40`,
      color: C.pri,
      fontWeight: "700",
      fontSize: "13px",
      cursor: "pointer"
    }
  }, "✏️ Crear la primera recomendación")) : patRecs.map(r => {
    const rt = REC_TYPES.find(x => x.v === r.type) || {
      l: r.typeLabel,
      color: C.pri
    };
    return /*#__PURE__*/React.createElement("div", {
      key: r.id,
      style: {
        background: C.w,
        border: `1px solid ${C.g200}`,
        borderRadius: "12px",
        padding: "14px",
        marginBottom: "10px",
        borderLeft: `4px solid ${rt.color}`
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
        gap: "8px"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: "7px",
        marginBottom: "5px",
        flexWrap: "wrap",
        alignItems: "center"
      }
    }, /*#__PURE__*/React.createElement(Badge, {
      label: rt.l,
      color: rt.color
    }), r.read ? /*#__PURE__*/React.createElement(Badge, {
      label: "✓ Leída por el paciente",
      color: C.ok
    }) : /*#__PURE__*/React.createElement(Badge, {
      label: "⏳ Sin leer",
      color: C.warn
    })), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: "0 0 4px",
        fontSize: "13px",
        color: C.tx,
        lineHeight: "1.6"
      }
    }, r.text), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        fontSize: "11px",
        color: C.g400
      }
    }, "Enviada el ", new Date(r.sentAt).toLocaleDateString("es-ES", {
      day: "numeric",
      month: "long",
      year: "numeric"
    }), " a las ", new Date(r.sentAt).toLocaleTimeString("es-ES", {
      hour: "2-digit",
      minute: "2-digit"
    }))), /*#__PURE__*/React.createElement("button", {
      onClick: () => deleteRec(r.id),
      style: {
        width: "28px",
        height: "28px",
        borderRadius: "8px",
        background: C.critL,
        border: "none",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0
      }
    }, /*#__PURE__*/React.createElement(Ic, {
      d: I.trash,
      size: 13,
      color: C.crit
    }))));
  })));
}
function PatientRecsPanel({
  recs,
  fs,
  patientId
}) {
  const patRecs = recs.filter(r => r.patientId === patientId).sort((a, b) => new Date(b.sentAt) - new Date(a.sentAt));
  const [readIds, setReadIds] = useState([]);
  const unread = patRecs.filter(r => !r.read && !readIds.includes(r.id)).length;
  const markRead = id => {
    setReadIds(p => [...p, id]);
  };
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Card, {
    style: {
      background: `linear-gradient(135deg,${C.priD},${C.pri})`,
      color: "white",
      marginBottom: "16px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "14px",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: "48px",
      height: "48px",
      background: "rgba(255,255,255,0.15)",
      borderRadius: "14px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0,
      fontSize: "22px"
    }
  }, "📲"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "0 0 4px",
      fontWeight: "800",
      fontSize: `${15 * fs}px`
    }
  }, "Instalar la app en su móvil"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "0 0 10px",
      fontSize: `${12 * fs}px`,
      opacity: 0.85
    }
  }, "Acceda más rápido y reciba alertas aunque la app esté cerrada."), /*#__PURE__*/React.createElement(PWAInstallButton, null)))), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(CTitle, {
    icon: I.upload
  }, "Recomendaciones de su médico", unread > 0 && /*#__PURE__*/React.createElement("span", {
    style: {
      background: C.crit,
      color: "white",
      borderRadius: "20px",
      padding: "2px 8px",
      fontSize: "11px",
      fontWeight: "800",
      marginLeft: "8px"
    }
  }, unread, " nuevas")), patRecs.length === 0 ? /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      padding: "24px 0"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: `${14 * fs}px`,
      color: C.g400,
      margin: "0 0 6px"
    }
  }, "Aún no ha recibido recomendaciones de su equipo médico"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: `${12 * fs}px`,
      color: C.g400,
      margin: 0
    }
  }, "Aparecerán aquí cuando su médico le envíe indicaciones")) : patRecs.map(r => {
    const rt = REC_TYPES.find(x => x.v === r.type) || {
      l: r.typeLabel || "Indicación",
      color: C.pri
    };
    const isNew = !r.read && !readIds.includes(r.id);
    return /*#__PURE__*/React.createElement("div", {
      key: r.id,
      onClick: () => markRead(r.id),
      style: {
        background: isNew ? rt.color + "08" : C.g50,
        border: `1.5px solid ${isNew ? rt.color + "50" : C.g200}`,
        borderRadius: "14px",
        padding: "14px",
        marginBottom: "10px",
        borderLeft: `5px solid ${rt.color}`,
        cursor: "pointer",
        transition: "all 0.2s"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
        gap: "8px",
        marginBottom: "8px"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: "7px",
        flexWrap: "wrap",
        alignItems: "center"
      }
    }, /*#__PURE__*/React.createElement(Badge, {
      label: rt.l,
      color: rt.color
    }), isNew && /*#__PURE__*/React.createElement("span", {
      style: {
        background: C.crit,
        color: "white",
        borderRadius: "20px",
        padding: "2px 7px",
        fontSize: "10px",
        fontWeight: "800"
      }
    }, "¡NUEVO!")), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: "11px",
        color: C.g400,
        flexShrink: 0
      }
    }, new Date(r.sentAt).toLocaleDateString("es-ES", {
      day: "numeric",
      month: "short"
    }))), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: "0 0 6px",
        fontSize: `${14 * fs}px`,
        color: C.tx,
        lineHeight: "1.7"
      }
    }, r.text), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        fontSize: `${11 * fs}px`,
        color: C.g600
      }
    }, "🩺 ", r.sentBy, " ", isNew ? "· Pulse para marcar como leída" : "· Leída"));
  })), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(CTitle, {
    icon: I.clip
  }, "Indicaciones permanentes"), /*#__PURE__*/React.createElement("div", {
    style: {
      background: C.priL,
      borderRadius: "12px",
      padding: "14px",
      marginBottom: "12px"
    }
  }, /*#__PURE__*/React.createElement("ul", {
    style: {
      margin: 0,
      paddingLeft: "20px",
      lineHeight: "2.1",
      fontSize: `${14 * fs}px`
    }
  }, /*#__PURE__*/React.createElement("li", null, "Salbutamol inhalador: 2 pulsaciones cada 6 horas"), /*#__PURE__*/React.createElement("li", null, "Prednisona 30mg: 1 comprimido en el desayuno"), /*#__PURE__*/React.createElement("li", null, "Amoxicilina 875mg: 1 comprimido cada 8 horas"), /*#__PURE__*/React.createElement("li", null, "Oxigenoterapia: 3 L/min mínimo 16h/día"))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: C.critL,
      border: `1px solid ${C.crit}30`,
      borderRadius: "12px",
      padding: "14px"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontWeight: "700",
      color: C.crit,
      marginTop: 0,
      fontSize: `${14 * fs}px`
    }
  }, "🔴 Llame al 112 si nota:"), /*#__PURE__*/React.createElement("ul", {
    style: {
      margin: 0,
      paddingLeft: "20px",
      lineHeight: "2",
      fontSize: `${13 * fs}px`
    }
  }, /*#__PURE__*/React.createElement("li", null, "Saturación por debajo del 88%"), /*#__PURE__*/React.createElement("li", null, "Fiebre superior a 39°C"), /*#__PURE__*/React.createElement("li", null, "Dificultad grave para hablar"), /*#__PURE__*/React.createElement("li", null, "Confusión o desorientación")))), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(CTitle, {
    icon: I.play
  }, "Vídeos Educativos"), VIDEOS.map((v, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: "flex",
      alignItems: "center",
      gap: "12px",
      padding: "12px",
      background: C.g50,
      borderRadius: "12px",
      cursor: "pointer",
      marginBottom: "9px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: "44px",
      height: "44px",
      borderRadius: "12px",
      background: C.pri,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(Ic, {
    d: I.play,
    size: 19,
    color: "white",
    fill: "white"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "0 0 3px",
      fontWeight: "700",
      fontSize: `${14 * fs}px`
    }
  }, v.title), /*#__PURE__*/React.createElement(Badge, {
    label: v.cat,
    color: C.pri
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      color: C.g400,
      fontSize: "12px"
    }
  }, v.dur)))));
}
function AlertsPanel({
  alerts,
  setAlerts,
  unread,
  onAck,
  onAckAll,
  onNotif
}) {
  const [editId, setEditId] = useState(null);
  const [editForm, setEditForm] = useState({});
  const [filterLev, setFilterLev] = useState("todos");
  const [filterRead, setFilterRead] = useState("todos");
  const [saved, setSaved] = useState(false);
  const openEdit = a => {
    setEditId(a.id);
    setEditForm({
      level: a.level,
      value: a.value,
      msg: a.msg,
      note: a.note || ""
    });
  };
  const saveEdit = () => {
    setAlerts(p => p.map(a => a.id === editId ? {
      ...a,
      level: editForm.level,
      value: editForm.value,
      msg: editForm.msg,
      note: editForm.note,
      editedAt: new Date().toLocaleTimeString("es-ES", {
        hour: "2-digit",
        minute: "2-digit"
      })
    } : a));
    setEditId(null);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
    onNotif && onNotif("✏️ Alerta actualizada", "Los datos de la alerta han sido modificados.", "info");
  };
  const deleteAlert = async id => {
    const a = alerts.find(x => x.id === id);
    if (!window.confirm(`¿Eliminar la alerta "${a?.vital}" de ${PATIENTS.find(p => p.id === a?.pid)?.name}?`)) return;
    setAlerts(p => p.filter(x => x.id !== id));
    onNotif && onNotif("🗑️ Alerta eliminada", "La alerta ha sido eliminada del sistema.", "info");
  };
  const filtered = alerts.filter(a => {
    if (filterLev !== "todos" && a.level !== filterLev) return false;
    if (filterRead === "unread" && a.read) return false;
    if (filterRead === "read" && !a.read) return false;
    return true;
  });
  return /*#__PURE__*/React.createElement("div", null, editId && (() => {
    const a = alerts.find(x => x.id === editId);
    const pat = PATIENTS.find(p => p.id === a?.pid);
    return /*#__PURE__*/React.createElement("div", {
      style: {
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.55)",
        zIndex: 999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "16px"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        background: C.w,
        borderRadius: "20px",
        maxWidth: "500px",
        width: "100%",
        boxShadow: "0 20px 60px rgba(0,0,0,0.25)",
        overflow: "hidden"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        background: `linear-gradient(135deg,${C.crit},#C53030)`,
        padding: "18px 22px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
      style: {
        margin: "0 0 2px",
        color: "white",
        fontWeight: "800",
        fontSize: "16px"
      }
    }, "✏️ Editar Alerta Clínica"), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        color: "rgba(255,255,255,0.8)",
        fontSize: "12px"
      }
    }, pat?.name, " · ", a?.vital, " · ", a?.time)), /*#__PURE__*/React.createElement("button", {
      onClick: () => setEditId(null),
      style: {
        background: "rgba(255,255,255,0.2)",
        border: "none",
        borderRadius: "8px",
        width: "30px",
        height: "30px",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }
    }, /*#__PURE__*/React.createElement(Ic, {
      d: I.x,
      size: 15,
      color: "white"
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "22px"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        marginBottom: "14px"
      }
    }, /*#__PURE__*/React.createElement("label", {
      style: {
        display: "block",
        fontSize: "12px",
        fontWeight: "700",
        color: C.g600,
        marginBottom: "8px",
        textTransform: "uppercase",
        letterSpacing: "0.4px"
      }
    }, "Nivel de severidad"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: "8px"
      }
    }, [{
      v: "critical",
      l: "🔴 Crítico",
      c: C.crit
    }, {
      v: "warning",
      l: "🟡 Alerta",
      c: C.warn
    }, {
      v: "normal",
      l: "🟢 Normal",
      c: C.ok
    }].map(opt => /*#__PURE__*/React.createElement("button", {
      key: opt.v,
      onClick: () => setEditForm({
        ...editForm,
        level: opt.v
      }),
      style: {
        flex: 1,
        padding: "10px 8px",
        borderRadius: "10px",
        border: `2px solid ${editForm.level === opt.v ? opt.c : C.g200}`,
        background: editForm.level === opt.v ? opt.c + "15" : C.g50,
        color: editForm.level === opt.v ? opt.c : C.g600,
        fontWeight: editForm.level === opt.v ? "800" : "500",
        fontSize: "13px",
        cursor: "pointer"
      }
    }, opt.l)))), /*#__PURE__*/React.createElement("div", {
      style: {
        marginBottom: "14px"
      }
    }, /*#__PURE__*/React.createElement("label", {
      style: {
        display: "block",
        fontSize: "12px",
        fontWeight: "700",
        color: C.g600,
        marginBottom: "5px",
        textTransform: "uppercase",
        letterSpacing: "0.4px"
      }
    }, "Valor registrado"), /*#__PURE__*/React.createElement("input", {
      value: editForm.value,
      onChange: e => setEditForm({
        ...editForm,
        value: e.target.value
      }),
      style: {
        width: "100%",
        padding: "10px 12px",
        borderRadius: "10px",
        border: `2px solid ${C.g200}`,
        fontSize: "14px",
        outline: "none",
        boxSizing: "border-box",
        color: C.tx,
        background: C.w
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        marginBottom: "14px"
      }
    }, /*#__PURE__*/React.createElement("label", {
      style: {
        display: "block",
        fontSize: "12px",
        fontWeight: "700",
        color: C.g600,
        marginBottom: "5px",
        textTransform: "uppercase",
        letterSpacing: "0.4px"
      }
    }, "Mensaje clínico"), /*#__PURE__*/React.createElement("textarea", {
      value: editForm.msg,
      onChange: e => setEditForm({
        ...editForm,
        msg: e.target.value
      }),
      style: {
        width: "100%",
        padding: "10px 12px",
        borderRadius: "10px",
        border: `2px solid ${C.g200}`,
        fontSize: "13px",
        outline: "none",
        resize: "vertical",
        minHeight: "72px",
        boxSizing: "border-box",
        color: C.tx,
        background: C.w,
        fontFamily: "inherit"
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        marginBottom: "18px"
      }
    }, /*#__PURE__*/React.createElement("label", {
      style: {
        display: "block",
        fontSize: "12px",
        fontWeight: "700",
        color: C.g600,
        marginBottom: "5px",
        textTransform: "uppercase",
        letterSpacing: "0.4px"
      }
    }, "Nota del médico (opcional)"), /*#__PURE__*/React.createElement("textarea", {
      value: editForm.note,
      onChange: e => setEditForm({
        ...editForm,
        note: e.target.value
      }),
      placeholder: "Añada su valoración clínica, actuación tomada, próximos pasos...",
      style: {
        width: "100%",
        padding: "10px 12px",
        borderRadius: "10px",
        border: `2px solid ${C.g200}`,
        fontSize: "13px",
        outline: "none",
        resize: "vertical",
        minHeight: "72px",
        boxSizing: "border-box",
        color: C.tx,
        background: C.w,
        fontFamily: "inherit"
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: "10px",
        justifyContent: "flex-end",
        borderTop: `1px solid ${C.g100}`,
        paddingTop: "14px"
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => setEditId(null),
      style: {
        padding: "10px 20px",
        borderRadius: "10px",
        border: `1px solid ${C.g200}`,
        background: C.w,
        cursor: "pointer",
        fontWeight: "600",
        fontSize: "13px",
        color: C.g800
      }
    }, "Cancelar"), /*#__PURE__*/React.createElement(Btn, {
      onClick: saveEdit,
      color: C.pri,
      style: {
        fontSize: "13px",
        padding: "10px 22px"
      }
    }, "💾 Guardar cambios")))));
  })(), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: "14px",
      flexWrap: "wrap",
      gap: "10px"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontSize: "18px",
      color: C.priD
    }
  }, "🔔 Centro de Alertas Clínicas"), unread > 0 && /*#__PURE__*/React.createElement(Btn, {
    onClick: onAckAll,
    style: {
      fontSize: "12px",
      padding: "8px 14px"
    }
  }, "✓ Marcar todas revisadas")), saved && /*#__PURE__*/React.createElement(SavedBanner, {
    msg: "✅ Alerta actualizada correctamente"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr 1fr",
      gap: "11px",
      marginBottom: "16px"
    }
  }, [{
    l: "Críticas",
    v: alerts.filter(a => !a.read && a.level === "critical").length,
    c: C.crit
  }, {
    l: "Alertas",
    v: alerts.filter(a => !a.read && a.level === "warning").length,
    c: C.warn
  }, {
    l: "Revisadas",
    v: alerts.filter(a => a.read).length,
    c: C.ok
  }].map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      background: s.c + "12",
      borderRadius: "12px",
      padding: "13px",
      borderLeft: `4px solid ${s.c}`
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "26px",
      fontWeight: "800",
      color: s.c,
      margin: "0 0 2px"
    }
  }, s.v), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "11px",
      color: C.txL,
      margin: 0
    }
  }, s.l)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "8px",
      marginBottom: "14px",
      flexWrap: "wrap"
    }
  }, [{
    v: "todos",
    l: "Todas"
  }, {
    v: "critical",
    l: "🔴 Críticas"
  }, {
    v: "warning",
    l: "🟡 Alertas"
  }, {
    v: "normal",
    l: "🟢 Normales"
  }].map(f => /*#__PURE__*/React.createElement("button", {
    key: f.v,
    onClick: () => setFilterLev(f.v),
    style: {
      padding: "7px 13px",
      borderRadius: "20px",
      border: `1.5px solid ${filterLev === f.v ? C.pri : C.g200}`,
      background: filterLev === f.v ? C.priL : C.w,
      color: filterLev === f.v ? C.pri : C.g600,
      fontWeight: filterLev === f.v ? "700" : "500",
      fontSize: "12px",
      cursor: "pointer"
    }
  }, f.l)), /*#__PURE__*/React.createElement("div", {
    style: {
      width: "1px",
      background: C.g200,
      margin: "0 4px"
    }
  }), [{
    v: "todos",
    l: "Todas"
  }, {
    v: "unread",
    l: "Sin revisar"
  }, {
    v: "read",
    l: "Revisadas"
  }].map(f => /*#__PURE__*/React.createElement("button", {
    key: f.v,
    onClick: () => setFilterRead(f.v),
    style: {
      padding: "7px 13px",
      borderRadius: "20px",
      border: `1.5px solid ${filterRead === f.v ? C.ai : C.g200}`,
      background: filterRead === f.v ? C.aiL : C.w,
      color: filterRead === f.v ? C.ai : C.g600,
      fontWeight: filterRead === f.v ? "700" : "500",
      fontSize: "12px",
      cursor: "pointer"
    }
  }, f.l))), filtered.length === 0 ? /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      padding: "40px 0",
      color: C.g400
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "14px",
      margin: 0
    }
  }, "Sin alertas para los filtros seleccionados")) : filtered.map(a => {
    const pat = PATIENTS.find(p => p.id === a.pid);
    const col = aC(a.level);
    return /*#__PURE__*/React.createElement("div", {
      key: a.id,
      style: {
        background: C.w,
        borderRadius: "14px",
        padding: "14px",
        boxShadow: "0 2px 9px rgba(0,0,0,0.06)",
        marginBottom: "10px",
        borderLeft: `5px solid ${col}`,
        opacity: a.read ? 0.65 : 1,
        transition: "opacity 0.2s"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: "10px",
        alignItems: "flex-start"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: "7px",
        alignItems: "center",
        marginBottom: "5px",
        flexWrap: "wrap"
      }
    }, /*#__PURE__*/React.createElement(Badge, {
      label: aL(a.level),
      color: col
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontWeight: "700",
        fontSize: "13px",
        color: C.priD
      }
    }, a.vital), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: "11px",
        color: C.g400
      }
    }, "· ", a.time), a.read && /*#__PURE__*/React.createElement(Badge, {
      label: "✓ Revisada",
      color: C.ok
    }), a.editedAt && /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: "10px",
        color: C.g400,
        fontStyle: "italic"
      }
    }, "Editada ", a.editedAt)), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: "0 0 3px",
        fontWeight: "700",
        fontSize: "14px"
      }
    }, pat?.name), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: "0 0 3px",
        fontSize: "12px",
        color: C.txL
      }
    }, a.msg), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: "0 0 4px",
        fontSize: "12px"
      }
    }, "Valor registrado: ", /*#__PURE__*/React.createElement("strong", {
      style: {
        color: col
      }
    }, a.value)), a.note && /*#__PURE__*/React.createElement("div", {
      style: {
        background: C.priL,
        borderRadius: "8px",
        padding: "8px 10px",
        marginTop: "6px",
        display: "flex",
        gap: "6px",
        alignItems: "flex-start"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: "14px",
        flexShrink: 0
      }
    }, "📝"), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        fontSize: "12px",
        color: C.priD,
        fontStyle: "italic"
      }
    }, a.note))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: "6px",
        flexShrink: 0
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => openEdit(a),
      style: {
        width: "32px",
        height: "32px",
        borderRadius: "8px",
        background: C.priL,
        border: `1px solid ${C.pri}40`,
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      },
      title: "Editar alerta"
    }, /*#__PURE__*/React.createElement(Ic, {
      d: I.edit,
      size: 14,
      color: C.pri
    })), !a.read && /*#__PURE__*/React.createElement("button", {
      onClick: () => onAck(a.id),
      style: {
        width: "32px",
        height: "32px",
        borderRadius: "8px",
        background: C.okL,
        border: `1px solid ${C.ok}`,
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      },
      title: "Marcar como revisada"
    }, /*#__PURE__*/React.createElement(Ic, {
      d: I.check,
      size: 14,
      color: C.ok
    })), /*#__PURE__*/React.createElement("button", {
      onClick: () => deleteAlert(a.id),
      style: {
        width: "32px",
        height: "32px",
        borderRadius: "8px",
        background: C.critL,
        border: `1px solid ${C.crit}30`,
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      },
      title: "Eliminar alerta"
    }, /*#__PURE__*/React.createElement(Ic, {
      d: I.trash,
      size: 14,
      color: C.crit
    })))));
  }));
}
function AlertModal({
  alerts,
  onClose,
  onAck
}) {
  const unread = alerts.filter(a => !a.read);
  if (!unread.length) return null;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "fixed",
      inset: 0,
      background: "rgba(0,0,0,0.6)",
      zIndex: 999,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "16px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: C.w,
      borderRadius: "20px",
      maxWidth: "500px",
      width: "100%",
      boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: `linear-gradient(135deg,${C.crit},#C53030)`,
      padding: "18px 22px",
      display: "flex",
      gap: "12px",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: "42px",
      height: "42px",
      background: "rgba(255,255,255,0.2)",
      borderRadius: "50%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(Ic, {
    d: I.alert,
    size: 21,
    color: "white",
    fill: "rgba(255,255,255,0.3)"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      color: "white",
      fontWeight: "800",
      fontSize: "17px"
    }
  }, "⚠️ Alertas Clínicas Activas"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      color: "rgba(255,255,255,0.8)",
      fontSize: "12px"
    }
  }, unread.length, " alerta", unread.length > 1 ? "s" : "", " sin revisar"))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "18px 22px",
      maxHeight: "380px",
      overflowY: "auto"
    }
  }, unread.map(a => {
    const p = PATIENTS.find(x => x.id === a.pid);
    const c = aC(a.level);
    return /*#__PURE__*/React.createElement("div", {
      key: a.id,
      style: {
        background: aBg(a.level),
        border: `1px solid ${c}40`,
        borderRadius: "12px",
        padding: "13px",
        marginBottom: "10px"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        marginBottom: "4px"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontWeight: "800",
        color: c,
        fontSize: "12px"
      }
    }, aL(a.level), " · ", a.vital), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: "11px",
        color: C.g400
      }
    }, a.time)), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: "0 0 2px",
        fontWeight: "700",
        fontSize: "14px"
      }
    }, p?.name), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: "0 0 7px",
        fontSize: "13px",
        color: C.tx
      }
    }, a.msg), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: "0 0 9px",
        fontSize: "12px"
      }
    }, "Valor: ", /*#__PURE__*/React.createElement("strong", {
      style: {
        color: c
      }
    }, a.value)), /*#__PURE__*/React.createElement("button", {
      onClick: () => onAck(a.id),
      style: {
        padding: "6px 14px",
        borderRadius: "8px",
        background: c,
        color: "white",
        border: "none",
        cursor: "pointer",
        fontWeight: "700",
        fontSize: "12px"
      }
    }, "✓ Revisada"));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "12px 22px",
      borderTop: `1px solid ${C.g100}`,
      display: "flex",
      justifyContent: "flex-end"
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    style: {
      padding: "9px 20px",
      borderRadius: "10px",
      border: `1px solid ${C.g200}`,
      background: C.w,
      cursor: "pointer",
      fontWeight: "600",
      fontSize: "13px",
      color: C.g800
    }
  }, "Cerrar"))));
}
const SCHEDULED_CALLS = [{
  id: 1,
  patientId: 1,
  patName: "María García López",
  time: "10:00",
  date: "Mañana 19/04",
  type: "individual",
  participants: ["Dr. Pérez González"],
  room: "had-maria-garcia-001",
  status: "programada"
}, {
  id: 2,
  patientId: 2,
  patName: "Antonio Fernández Ruiz",
  time: "11:30",
  date: "Mañana 19/04",
  type: "grupo",
  participants: ["Dr. Pérez", "Enf. Rodríguez"],
  room: "had-antonio-fernandez-002",
  status: "programada"
}, {
  id: 3,
  patientId: 3,
  patName: "Carmen Martínez Soto",
  time: "09:00",
  date: "Hoy 18/04",
  type: "individual",
  participants: ["Dr. Martín"],
  room: "had-carmen-martinez-003",
  status: "completada"
}];
function JitsiCall({
  roomName,
  displayName,
  onLeave,
  role
}) {
  const [joined, setJoined] = useState(false);
  useEffect(() => {
    setTimeout(() => setJoined(true), 2000);
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "fixed",
      inset: 0,
      background: "#0D1117",
      zIndex: 300,
      display: "flex",
      flexDirection: "column"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "rgba(0,0,0,0.7)",
      padding: "12px 20px",
      display: "flex",
      alignItems: "center",
      gap: "12px",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: "10px",
      height: "10px",
      borderRadius: "50%",
      background: joined ? "#2D9B6F" : "#E07A3A"
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      color: "white",
      fontWeight: "700",
      fontSize: "14px"
    }
  }, "🏥 CuidaEnCasa · Teleconsulta")), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
      gap: "16px"
    }
  }, !joined ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      width: "56px",
      height: "56px",
      border: "5px solid rgba(255,255,255,0.2)",
      borderTop: "5px solid white",
      borderRadius: "50%",
      animation: "spin 0.9s linear infinite"
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "white",
      fontSize: "16px"
    }
  }, "Conectando...")) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      width: "120px",
      height: "120px",
      borderRadius: "50%",
      background: "#1A6B8A",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "48px"
    }
  }, "👤"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "white",
      fontSize: "16px",
      fontWeight: "700"
    }
  }, displayName), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "rgba(255,255,255,0.6)",
      fontSize: "13px"
    }
  }, "Sala: ", roomName))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "rgba(0,0,0,0.8)",
      padding: "16px",
      display: "flex",
      justifyContent: "center",
      gap: "14px",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onLeave,
    style: {
      width: "64px",
      height: "64px",
      borderRadius: "50%",
      background: "#D64545",
      border: "none",
      cursor: "pointer",
      color: "white",
      fontSize: "22px"
    }
  }, "📵")));
}
function TeleconsultaModule({
  role,
  patientName,
  patientId,
  selPat,
  sendNotif
}) {
  const [inCall, setInCall] = useState(false);
  const myName = role === "staff" ? "Dr. Pérez González" : patientName || "Paciente";
  const room = `cuidaencasa-${(selPat?.room || "had-001").toLowerCase().replace(/[^a-z0-9-]/g, "")}`;
  if (inCall) return /*#__PURE__*/React.createElement(JitsiCall, {
    roomName: room,
    displayName: myName,
    role: role,
    onLeave: () => {
      setInCall(false);
      sendNotif && sendNotif("📵 Llamada finalizada", "Teleconsulta finalizada", "ok");
    }
  });
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Card, {
    style: {
      background: `linear-gradient(135deg,${C.priD},${C.pri})`,
      color: "white",
      marginBottom: "16px"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "0 0 4px",
      fontWeight: "800",
      fontSize: "18px"
    }
  }, "📹 Teleconsulta en Vídeo"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "0 0 10px",
      fontSize: "13px",
      opacity: 0.85
    }
  }, "🔒 Cifrado E2E · Jitsi Meet · Sin instalación"), /*#__PURE__*/React.createElement(Btn, {
    onClick: () => {
      setInCall(true);
      sendNotif && sendNotif("📹 Teleconsulta iniciada", `Sala: ${room}`, "info");
    },
    style: {
      background: "rgba(255,255,255,0.2)",
      border: "2px solid rgba(255,255,255,0.3)"
    }
  }, role === "staff" ? `📹 Llamar a ${selPat?.name?.split(" ")[0] || "Paciente"}` : "📹 Iniciar teleconsulta")), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(CTitle, {
    icon: I.video
  }, "Información de la sala"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "13px",
      color: C.txL
    }
  }, "🔗 Sala asignada: ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: C.pri,
      fontFamily: "monospace"
    }
  }, room)), /*#__PURE__*/React.createElement("button", {
    onClick: () => navigator.clipboard?.writeText(`https://meet.jit.si/${room}`).then(() => alert("✅ Enlace copiado")).catch(() => alert(`https://meet.jit.si/${room}`)),
    style: {
      padding: "8px 14px",
      borderRadius: "9px",
      background: C.ok,
      color: "white",
      border: "none",
      cursor: "pointer",
      fontWeight: "700",
      fontSize: "12px",
      marginTop: "8px"
    }
  }, "📋 Copiar enlace")));
}
function PatientApp({
  onLogout
}) {
  const mobile = useIsMobile();
  const [section, setSection] = useState("inicio");
  const [chatText, setChatText] = useState("");
  const [saved, setSaved] = useState(false);
  const [inCall, setInCall] = useState(false);
  const [fs, setFs] = useState(1);
  const [dark, setDark] = useState(false);
  const [msgs, setMsgs] = usePersistedState("had_msgs", MSGS0);
  const [hist, setHist] = usePersistedState("had_hist", HIST);
  const [myAlerts, setMyAlerts] = usePersistedState("had_alerts_patient", INIT_ALERTS.filter(a => a.pid === 1));
  const [meds, setMeds] = usePersistedState("had_meds", MEDICATIONS);
  const [recs] = useSyncedState("had_recs", []);
  const [sharedPatMeds] = useSyncedState("had_meds", INIT_ALL_MEDS);
  const {
    online: patOnline
  } = useNetworkStatus();
  const unread = myAlerts.filter(a => !a.read).length;
  const crits = myAlerts.filter(a => !a.read && a.level === "critical").length;
  const saveVitals = v => {
    const now = new Date().toLocaleTimeString("es-ES", {
      hour: "2-digit",
      minute: "2-digit"
    });
    setHist(p => [{
      id: Date.now(),
      date: "18/04 " + now,
      ...v
    }, ...p]);
    const na = [];
    if (evalV("sat", v.sat) !== "normal") na.push({
      id: Date.now() + 1,
      pid: 1,
      time: now,
      vital: "Saturación O₂",
      value: v.sat + "%",
      level: evalV("sat", v.sat),
      msg: "Saturación fuera de rango. Su médico ha sido notificado.",
      read: false
    });
    if (evalTA(v.ta) !== "normal") na.push({
      id: Date.now() + 2,
      pid: 1,
      time: now,
      vital: "Tensión Arterial",
      value: v.ta + " mmHg",
      level: evalTA(v.ta),
      msg: "Tensión fuera de rango. Su equipo ha sido avisado.",
      read: false
    });
    if (evalV("temp", v.temp) !== "normal") na.push({
      id: Date.now() + 3,
      pid: 1,
      time: now,
      vital: "Temperatura",
      value: v.temp + "°C",
      level: evalV("temp", v.temp),
      msg: "Temperatura fuera de rango. Su médico ha sido notificado.",
      read: false
    });
    if (na.length) setMyAlerts(p => [...na, ...p]);
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };
  const sendMsg = () => {
    if (!chatText.trim()) return;
    setMsgs(p => [...p, {
      id: Date.now(),
      text: chatText,
      own: true,
      sender: "Yo",
      time: new Date().toLocaleTimeString("es-ES", {
        hour: "2-digit",
        minute: "2-digit"
      })
    }]);
    setChatText("");
  };
  const patNav = [{
    id: "inicio",
    label: "Inicio",
    icon: I.home
  }, {
    id: "asistente",
    label: "Asistente IA",
    icon: I.brain
  }, {
    id: "constantes",
    label: "Constantes",
    icon: I.activity
  }, {
    id: "chat",
    label: "Chat Médico",
    icon: I.chat
  }, {
    id: "medicacion",
    label: "Medicación",
    icon: I.pill
  }, {
    id: "diuresis",
    label: "Diuresis y Heces",
    icon: I.drop
  }, {
    id: "evolucion",
    label: "Mi Evolución",
    icon: I.book
  }, {
    id: "recomendaciones",
    label: "Recomendaciones",
    icon: I.clip
  }, {
    id: "familia",
    label: "Vista Familiar",
    icon: I.family
  }, {
    id: "teleconsulta",
    label: "Teleconsulta",
    icon: I.video
  }, {
    id: "alertas",
    label: "Mis Alertas",
    icon: I.bell,
    badge: unread
  }, {
    id: "perfil",
    label: "Mi Perfil",
    icon: I.user
  }];
  const content = () => {
    if (section === "inicio") return /*#__PURE__*/React.createElement("div", null, crits > 0 && /*#__PURE__*/React.createElement("div", {
      onClick: () => setSection("alertas"),
      style: {
        background: C.critL,
        border: `2px solid ${C.crit}`,
        borderRadius: "14px",
        padding: "13px 16px",
        marginBottom: "14px",
        display: "flex",
        gap: "12px",
        alignItems: "center",
        cursor: "pointer"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: "40px",
        height: "40px",
        background: C.crit,
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0
      }
    }, /*#__PURE__*/React.createElement(Ic, {
      d: I.bell,
      size: 19,
      color: "white",
      fill: "rgba(255,255,255,0.3)"
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
      style: {
        margin: "0 0 2px",
        fontWeight: "800",
        color: C.crit,
        fontSize: `${15 * fs}px`
      }
    }, "🔴 ", crits, " alerta", crits > 1 ? "s" : "", " crítica", crits > 1 ? "s" : ""), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        color: C.tx,
        fontSize: `${12 * fs}px`
      }
    }, "Su médico ya ha sido notificado automáticamente"))), !patOnline && /*#__PURE__*/React.createElement("div", {
      style: {
        background: "#1E2D3D",
        borderRadius: "12px",
        padding: "11px 14px",
        marginBottom: "12px",
        display: "flex",
        alignItems: "center",
        gap: "10px"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: "8px",
        height: "8px",
        borderRadius: "50%",
        background: C.warn,
        flexShrink: 0
      }
    }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        fontWeight: "700",
        color: "white",
        fontSize: "13px"
      }
    }, "📶 Sin conexión — modo offline"), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        fontSize: "11px",
        color: "rgba(255,255,255,0.65)"
      }
    }, "Sus datos están guardados localmente. Se sincronizarán al recuperar la conexión."))), /*#__PURE__*/React.createElement(Card, {
      style: {
        background: `linear-gradient(135deg,${C.pri},${C.priD})`,
        color: "white"
      }
    }, /*#__PURE__*/React.createElement("p", {
      style: {
        margin: "0 0 3px",
        fontSize: `${13 * fs}px`,
        opacity: 0.85
      }
    }, "Buenos días,"), /*#__PURE__*/React.createElement("h2", {
      style: {
        margin: "0 0 7px",
        fontSize: `${22 * fs}px`
      }
    }, "María García López"), /*#__PURE__*/React.createElement("span", {
      style: {
        background: "rgba(255,255,255,0.2)",
        color: "white",
        borderRadius: "20px",
        padding: "4px 12px",
        fontSize: `${11 * fs}px`,
        fontWeight: "700"
      }
    }, "HAD-001 · EPOC agudizado"), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: "14px",
        display: "flex",
        gap: "18px",
        flexWrap: "wrap"
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
      style: {
        margin: "0 0 1px",
        opacity: 0.7,
        fontSize: `${10 * fs}px`
      }
    }, "MÉDICO"), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        fontWeight: "700",
        fontSize: `${13 * fs}px`
      }
    }, "Dr. Pérez González")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
      style: {
        margin: "0 0 1px",
        opacity: 0.7,
        fontSize: `${10 * fs}px`
      }
    }, "ENFERMERÍA"), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        fontWeight: "700",
        fontSize: `${13 * fs}px`
      }
    }, "Enf. Rodríguez")))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "11px",
        marginBottom: "14px"
      }
    }, [{
      label: "Sat. O₂",
      val: "89",
      k: "sat",
      u: "%"
    }, {
      label: "Temperatura",
      val: "38.7",
      k: "temp",
      u: "°C"
    }, {
      label: "Tensión",
      val: "128/78",
      k: "ta",
      u: ""
    }, {
      label: "F. Cardíaca",
      val: "72",
      k: "fc",
      u: " lpm"
    }].map((s, i) => {
      const lv = s.k === "ta" ? evalTA(s.val) : evalV(s.k, s.val);
      const col = aC(lv);
      return /*#__PURE__*/React.createElement("div", {
        key: i,
        style: {
          background: col + "12",
          borderRadius: "14px",
          padding: "13px",
          borderLeft: `4px solid ${col}`
        }
      }, /*#__PURE__*/React.createElement("p", {
        style: {
          fontSize: `${20 * fs}px`,
          fontWeight: "800",
          color: col,
          margin: "0 0 2px"
        }
      }, s.val, s.u), /*#__PURE__*/React.createElement("p", {
        style: {
          fontSize: `${11 * fs}px`,
          color: C.txL,
          margin: "0 0 4px"
        }
      }, s.label), /*#__PURE__*/React.createElement(Badge, {
        label: aL(lv),
        color: col
      }));
    })), /*#__PURE__*/React.createElement(Card, {
      style: {
        background: C.aiL,
        border: `1px solid ${C.ai}30`,
        cursor: "pointer"
      },
      onClick: () => setSection("asistente")
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: "12px",
        alignItems: "center"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: "42px",
        height: "42px",
        background: C.ai,
        borderRadius: "12px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0
      }
    }, /*#__PURE__*/React.createElement(Ic, {
      d: I.sparkle,
      size: 20,
      color: "white",
      fill: "rgba(255,255,255,0.4)"
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
      style: {
        margin: "0 0 2px",
        fontWeight: "700",
        color: C.ai,
        fontSize: `${14 * fs}px`
      }
    }, "✨ Asistente IA disponible"), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        fontSize: `${12 * fs}px`,
        color: C.g600
      }
    }, "Pregunte sobre síntomas, medicamentos o constantes")))));
    if (section === "asistente") return /*#__PURE__*/React.createElement(AIAssistant, {
      role: "patient",
      ctx: {
        name: "María García López",
        age: 78,
        dx: "EPOC agudizado",
        vitals: hist[0]
      }
    });
    if (section === "familia") return /*#__PURE__*/React.createElement(FamilyPortal, null);
    if (section === "medicacion") return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(CTitle, {
      icon: I.pill
    }, "Mi Medicación"), /*#__PURE__*/React.createElement(MedicationModule, {
      role: "patient",
      patientId: 1,
      meds: sharedPatMeds,
      setMeds: () => {}
    })));
    if (section === "constantes") return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(CTitle, {
      icon: I.activity
    }, "Mis Constantes Vitales"), /*#__PURE__*/React.createElement(VitalsModule, {
      role: "patient",
      patientId: 1,
      onAlert: v => {
        setMyAlerts(p => [{
          id: Date.now(),
          pid: 1,
          time: new Date().toLocaleTimeString("es-ES", {
            hour: "2-digit",
            minute: "2-digit"
          }),
          vital: "Constantes",
          value: "Valor crítico",
          level: "critical",
          msg: "Valor crítico detectado. Su médico será avisado.",
          read: false
        }, ...p]);
        setSaved(true);
        setTimeout(() => setSaved(false), 3000);
      }
    })));
    if (section === "alertas") return /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(CTitle, {
      icon: I.bell
    }, "Mis Alertas"), myAlerts.length === 0 ? /*#__PURE__*/React.createElement("p", {
      style: {
        color: C.g400,
        textAlign: "center",
        padding: "36px 0"
      }
    }, "🟢 No hay alertas. Todo en orden.") : myAlerts.map(a => {
      const col = aC(a.level);
      return /*#__PURE__*/React.createElement("div", {
        key: a.id,
        style: {
          borderLeft: `5px solid ${col}`,
          background: aBg(a.level),
          borderRadius: "12px",
          padding: "12px 14px",
          marginBottom: "10px",
          opacity: a.read ? 0.55 : 1
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "4px"
        }
      }, /*#__PURE__*/React.createElement(Badge, {
        label: aL(a.level),
        color: col
      }), /*#__PURE__*/React.createElement("span", {
        style: {
          fontSize: "11px",
          color: C.g400
        }
      }, a.time)), /*#__PURE__*/React.createElement("p", {
        style: {
          margin: "0 0 3px",
          fontWeight: "700",
          fontSize: `${14 * fs}px`
        }
      }, a.vital, ": ", /*#__PURE__*/React.createElement("strong", {
        style: {
          color: col
        }
      }, a.value)), /*#__PURE__*/React.createElement("p", {
        style: {
          margin: 0,
          fontSize: `${12 * fs}px`,
          color: C.txL
        }
      }, a.msg), a.read && /*#__PURE__*/React.createElement("p", {
        style: {
          margin: "5px 0 0",
          fontSize: "11px",
          color: C.ok,
          fontWeight: "600"
        }
      }, "✓ Revisada por su médico"));
    }));
    if (section === "chat") return /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(CTitle, {
      icon: I.chat
    }, "Chat con su Equipo Médico"), /*#__PURE__*/React.createElement("div", {
      style: {
        height: "320px",
        overflowY: "auto",
        padding: "12px",
        background: C.g50,
        borderRadius: "12px",
        marginBottom: "12px",
        display: "flex",
        flexDirection: "column",
        gap: "9px"
      }
    }, msgs.map(m => /*#__PURE__*/React.createElement("div", {
      key: m.id,
      style: {
        display: "flex",
        flexDirection: "column"
      }
    }, !m.own && /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: "11px",
        color: C.g400,
        margin: "0 0 3px 12px",
        fontWeight: "600"
      }
    }, m.sender), /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: "78%",
        padding: "11px 14px",
        borderRadius: m.own ? "18px 18px 4px 18px" : "18px 18px 18px 4px",
        background: m.own ? C.pri : C.w,
        color: m.own ? "white" : C.tx,
        alignSelf: m.own ? "flex-end" : "flex-start",
        fontSize: `${14 * fs}px`,
        boxShadow: "0 2px 7px rgba(0,0,0,0.07)"
      }
    }, m.text)))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: "9px",
        alignItems: "flex-end"
      }
    }, /*#__PURE__*/React.createElement("textarea", {
      style: {
        flex: 1,
        padding: "10px 13px",
        borderRadius: "12px",
        border: `2px solid ${C.g200}`,
        fontSize: `${14 * fs}px`,
        fontFamily: "inherit",
        resize: "none",
        outline: "none",
        minHeight: "42px",
        color: C.tx,
        background: C.w
      },
      placeholder: "Escriba su mensaje...",
      value: chatText,
      onChange: e => setChatText(e.target.value),
      rows: 2,
      onKeyDown: e => e.key === "Enter" && !e.shiftKey && (e.preventDefault(), sendMsg())
    }), /*#__PURE__*/React.createElement("button", {
      style: {
        width: "44px",
        height: "44px",
        borderRadius: "12px",
        background: C.pri,
        border: "none",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0
      },
      onClick: sendMsg
    }, /*#__PURE__*/React.createElement(Ic, {
      d: I.send,
      size: 17,
      color: "white"
    }))));
    if (section === "diuresis") return /*#__PURE__*/React.createElement(DiuresisModule, {
      fs: fs,
      onSave: () => {
        setSaved(true);
        setTimeout(() => setSaved(false), 2000);
      }
    });
    if (section === "evolucion") return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Card, {
      style: {
        marginBottom: "14px"
      }
    }, /*#__PURE__*/React.createElement(CTitle, {
      icon: I.book
    }, "Mi Evolución Clínica"), notes.length === 0 ? /*#__PURE__*/React.createElement("p", {
      style: {
        color: C.g400,
        textAlign: "center",
        padding: "24px 0",
        fontSize: `${13 * fs}px`
      }
    }, "Su médico aún no ha añadido notas de evolución") : /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: "16px"
      }
    }, notes.map((n, i) => /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        borderLeft: `4px solid ${i === 0 ? C.pri : C.g200}`,
        paddingLeft: "14px",
        paddingBottom: i < notes.length - 1 ? "16px" : "0",
        borderBottom: i < notes.length - 1 ? `1px solid ${C.g100}` : "none"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: "8px",
        marginBottom: "6px",
        flexWrap: "wrap",
        alignItems: "center"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: "12px",
        fontWeight: "700",
        color: C.pri
      }
    }, n.date), /*#__PURE__*/React.createElement(Badge, {
      label: n.author,
      color: C.pri
    }), n.signed && /*#__PURE__*/React.createElement(Badge, {
      label: "✅ Firmada digitalmente",
      color: C.ok
    })), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        fontSize: `${14 * fs}px`,
        lineHeight: "1.8",
        color: C.tx
      }
    }, n.text))))), /*#__PURE__*/React.createElement("div", {
      style: {
        background: C.g50,
        border: `1px solid ${C.g200}`,
        borderRadius: "12px",
        padding: "12px 15px"
      }
    }, /*#__PURE__*/React.createElement("p", {
      style: {
        margin: "0 0 4px",
        fontSize: "12px",
        fontWeight: "700",
        color: C.g600
      }
    }, "ℹ️ Sobre su historial clínico"), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        fontSize: "11px",
        color: C.g400,
        lineHeight: "1.6"
      }
    }, "Estas notas han sido redactadas por su equipo médico. Conforme a la Ley 41/2002, tiene derecho a acceder a su historia clínica completa. Para solicitar una copia, contacte con su médico o escriba a dpo@cuidaencasa.es")));
    if (section === "perfil") return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Card, {
      style: {
        marginBottom: "14px"
      }
    }, /*#__PURE__*/React.createElement(CTitle, {
      icon: I.user
    }, "Mi Perfil"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: "16px",
        marginBottom: "18px"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: "64px",
        height: "64px",
        borderRadius: "50%",
        background: C.priL,
        border: `3px solid ${C.pri}`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0
      }
    }, /*#__PURE__*/React.createElement(Ic, {
      d: I.user,
      size: 30,
      color: C.pri
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
      style: {
        margin: "0 0 3px",
        fontWeight: "800",
        fontSize: `${18 * fs}px`,
        color: C.priD
      }
    }, "María García López"), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: "0 0 3px",
        fontSize: `${13 * fs}px`,
        color: C.txL
      }
    }, "Paciente HAD · Habitación HAD-001"), /*#__PURE__*/React.createElement(Badge, {
      label: "🟢 En servicio activo",
      color: C.ok
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "10px"
      }
    }, [["📋 Diagnóstico principal", "EPOC agudizado + Insuficiencia respiratoria"], ["🎂 Fecha de nacimiento", "15/03/1948 · 78 años"], ["🪪 DNI", "12345678A"], ["📅 Ingreso HAD", "01/04/2026"], ["🩺 Médico responsable", "Dr. Pérez González"], ["💉 Enfermero/a", "Enf. Rodríguez"], ["📍 Dirección", "C/ Balmes 45, 2ºA, Barcelona"], ["📞 Contacto familiar", "Ana García (hija) · 612 345 678"], ["🔑 Acceso a la app", "✅ Activado"], ["👨‍👩‍👧 Vista familiar", "✅ Habilitada"]].map(([k, v], i) => /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        padding: "10px 12px",
        background: C.g50,
        borderRadius: "10px"
      }
    }, /*#__PURE__*/React.createElement("p", {
      style: {
        margin: "0 0 2px",
        fontSize: "11px",
        fontWeight: "700",
        color: C.g600
      }
    }, k), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        fontSize: `${13 * fs}px`,
        fontWeight: "600",
        color: C.tx
      }
    }, v))))), /*#__PURE__*/React.createElement(Card, {
      style: {
        marginBottom: "14px"
      }
    }, /*#__PURE__*/React.createElement(CTitle, {
      icon: I.shield
    }, "Estado del Consentimiento RGPD"), (() => {
      try {
        const consent = JSON.parse(localStorage.getItem("had_consented") || "null");
        if (!consent) return /*#__PURE__*/React.createElement("div", {
          style: {
            background: C.warnL,
            borderRadius: "10px",
            padding: "12px 14px"
          }
        }, /*#__PURE__*/React.createElement("p", {
          style: {
            margin: 0,
            fontWeight: "700",
            color: C.warn,
            fontSize: "13px"
          }
        }, "⚠️ No se ha registrado consentimiento en este dispositivo"));
        return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
          style: {
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: "8px",
            marginBottom: "12px"
          }
        }, [{
          l: "Política de privacidad",
          v: consent.privacyPolicy,
          req: true
        }, {
          l: "Acceso familiar",
          v: consent.familyAccess,
          req: false
        }, {
          l: "Notificaciones push",
          v: consent.pushNotifications,
          req: false
        }].map((s, i) => /*#__PURE__*/React.createElement("div", {
          key: i,
          style: {
            padding: "10px",
            background: s.v ? C.okL : C.g50,
            borderRadius: "10px",
            textAlign: "center",
            border: `1px solid ${s.v ? C.ok : C.g200}`
          }
        }, /*#__PURE__*/React.createElement("p", {
          style: {
            margin: "0 0 3px",
            fontSize: "18px"
          }
        }, s.v ? "✅" : "—"), /*#__PURE__*/React.createElement("p", {
          style: {
            margin: 0,
            fontSize: "11px",
            fontWeight: "600",
            color: s.v ? C.ok : C.g400
          }
        }, s.l), s.req && /*#__PURE__*/React.createElement("p", {
          style: {
            margin: "2px 0 0",
            fontSize: "10px",
            color: C.g400
          }
        }, "Obligatorio")))), /*#__PURE__*/React.createElement("p", {
          style: {
            margin: 0,
            fontSize: "11px",
            color: C.g400
          }
        }, "✓ Consentimiento registrado el ", consent.tsLocal, " · Versión ", consent.consentVersion, " · Base legal: ", consent.legalBasis));
      } catch (e) {
        return null;
      }
    })(), /*#__PURE__*/React.createElement("button", {
      onClick: () => {
        if (window.confirm("¿Desea revocar su consentimiento? Esto puede limitar el funcionamiento del servicio.")) {
          localStorage.removeItem("had_consented");
          alert("Consentimiento revocado. Por favor contacte con su equipo médico en dpo@cuidaencasa.es");
        }
      },
      style: {
        marginTop: "12px",
        padding: "8px 14px",
        borderRadius: "9px",
        background: C.critL,
        border: `1px solid ${C.crit}30`,
        color: C.crit,
        fontWeight: "700",
        fontSize: "12px",
        cursor: "pointer"
      }
    }, "Revocar consentimiento")), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(CTitle, {
      icon: I.shield
    }, "Sus derechos RGPD"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: "8px"
      }
    }, [{
      icon: "👁️",
      right: "Acceso",
      desc: "Ver todos sus datos clínicos y personales",
      action: "Ver datos"
    }, {
      icon: "✏️",
      right: "Rectificación",
      desc: "Corregir datos incorrectos",
      action: "Solicitar"
    }, {
      icon: "📤",
      right: "Portabilidad",
      desc: "Exportar sus datos en formato estándar (FHIR)",
      action: "Exportar"
    }, {
      icon: "🚫",
      right: "Supresión",
      desc: "Solicitar la eliminación de sus datos",
      action: "Solicitar"
    }].map((r, i) => /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        display: "flex",
        gap: "12px",
        alignItems: "center",
        padding: "11px",
        background: C.g50,
        borderRadius: "10px"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: "22px",
        flexShrink: 0
      }
    }, r.icon), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("p", {
      style: {
        margin: "0 0 2px",
        fontWeight: "700",
        fontSize: "13px"
      }
    }, r.right), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        fontSize: "11px",
        color: C.txL
      }
    }, r.desc)), /*#__PURE__*/React.createElement("button", {
      style: {
        padding: "6px 12px",
        borderRadius: "8px",
        background: C.priL,
        border: `1px solid ${C.pri}30`,
        color: C.pri,
        fontWeight: "700",
        fontSize: "11px",
        cursor: "pointer",
        flexShrink: 0
      },
      onClick: () => alert("Para ejercer este derecho, contacte con nuestro DPO en dpo@cuidaencasa.es")
    }, r.action))))));
    if (section === "recomendaciones") return /*#__PURE__*/React.createElement(PatientRecsPanel, {
      recs: recs,
      fs: fs,
      patientId: 1
    });
    if (section === "teleconsulta") return /*#__PURE__*/React.createElement(TeleconsultaModule, {
      role: "patient",
      patientName: "María García López",
      patientId: 1,
      selPat: {
        name: "María García López",
        room: "HAD-001"
      }
    });
    return null;
  };
  return /*#__PURE__*/React.createElement(FontCtx.Provider, {
    value: fs
  }, /*#__PURE__*/React.createElement(GlobalStyle, {
    dark: dark
  }), /*#__PURE__*/React.createElement(AccessBar, {
    fs: fs,
    setFs: setFs,
    dark: dark,
    setDark: setDark
  }), /*#__PURE__*/React.createElement(OfflineBanner, {
    online: patOnline,
    wasOffline: false,
    syncCount: 0,
    syncing: false,
    lastSync: null
  }), /*#__PURE__*/React.createElement(Shell, {
    title: "🏥 CuidaEnCasa",
    sub: "María García López · HAD-001",
    nav: patNav,
    section: section,
    setSection: setSection,
    onLogout: onLogout,
    unread: unread,
    criticals: crits,
    dark: dark,
    setDark: setDark,
    extra: /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: "8px"
      }
    }, /*#__PURE__*/React.createElement(NetworkDot, {
      online: patOnline
    }), !patOnline && /*#__PURE__*/React.createElement("span", {
      style: {
        color: "rgba(255,255,255,0.75)",
        fontSize: "11px"
      }
    }, "Offline"), /*#__PURE__*/React.createElement(PWAInstallButton, null))
  }, content()), /*#__PURE__*/React.createElement(SavedFloat, {
    show: saved,
    msg: "✅ Datos guardados"
  }), /*#__PURE__*/React.createElement(SOSButton, null));
}
function StaffApp({
  onLogout
}) {
  const [section, setSection] = useState("dashboard");
  const [selPat, setSelPat] = useState(PATIENTS[0]);
  const [showModal, setShowModal] = useState(true);
  const [newNote, setNewNote] = useState("");
  const [noteError, setNoteError] = useState(null);
  const [saved, setSaved] = useState(false);
  const [inCall, setInCall] = useState(false);
  const [selVisitId, setSelVisitId] = useState(null);
  const [routeTab, setRouteTab] = useState("lista");
  const [dark, setDark] = useState(false);
  const [alerts, setAlerts] = useSyncedState("had_alerts", INIT_ALERTS);
  const [visits, setVisits] = useSyncedState("had_visits", INIT_VISITS);
  const [notes, setNotes] = useSyncedState("had_notes", NOTES);
  const [regPats] = useSyncedState("had_patients", INIT_PATIENTS_REG);
  const [sharedMeds, setSharedMeds] = useSyncedState("had_meds", INIT_ALL_MEDS);
  const [recs, setRecs] = useSyncedState("had_recs", []);
  const {
    online,
    wasOffline,
    syncCount,
    syncing,
    lastSync,
    doSync,
    trackChange
  } = useNetworkStatus();
  const setVisitsOffline = useCallback(u => {
    setVisits(u);
    trackChange("update_visits", typeof u === "function" ? "fn" : u);
  }, [trackChange]);
  const setAlertsOffline = useCallback(u => {
    setAlerts(u);
    trackChange("update_alerts", typeof u === "function" ? "fn" : u);
  }, [trackChange]);
  const setNotesOffline = useCallback(u => {
    setNotes(u);
    trackChange("update_notes", typeof u === "function" ? "fn" : u);
  }, [trackChange]);
  const {
    perm,
    toasts,
    history: notifHist,
    reqPerm,
    send,
    markRead,
    markAll,
    dismiss
  } = useNotifications();
  const unreadN = notifHist.filter(n => !n.read).length;
  const unread = alerts.filter(a => !a.read).length;
  const crits = alerts.filter(a => !a.read && a.level === "critical").length;
  const ack = id => {
    setAlertsOffline(p => p.map(a => a.id === id ? {
      ...a,
      read: true
    } : a));
    send("✅ Alerta revisada", "Marcada como revisada.", "ok");
  };
  const ackAll = () => setAlertsOffline(p => p.map(a => ({
    ...a,
    read: true
  })));
  const staffNav = [{
    id: "dashboard",
    label: "Dashboard",
    icon: I.home
  }, {
    id: "alertas",
    label: "Centro Alertas",
    icon: I.alert,
    badge: unread
  }, {
    id: "rutas",
    label: "Rutas y Visitas",
    icon: I.map,
    badge: visits.filter(v => v.priority === "urgente" && v.status !== "completada").length || 0
  }, {
    id: "calendario",
    label: "Calendario",
    icon: I.calendar
  }, {
    id: "asistente",
    label: "Asistente IA",
    icon: I.brain
  }, {
    id: "pacientes",
    label: "Mis Pacientes",
    icon: I.user
  }, {
    id: "evolucion",
    label: "Curso Clínico",
    icon: I.book
  }, {
    id: "constantes",
    label: "Constantes",
    icon: I.activity
  }, {
    id: "medicacion",
    label: "Medicación",
    icon: I.pill
  }, {
    id: "estadisticas",
    label: "Estadísticas",
    icon: I.chart
  }, {
    id: "chat",
    label: "Chat Paciente",
    icon: I.chat
  }, {
    id: "recomendaciones",
    label: "Recomendaciones",
    icon: I.upload
  }, {
    id: "teleconsulta",
    label: "Teleconsulta",
    icon: I.video
  }, {
    id: "notificaciones",
    label: "Notificaciones",
    icon: I.bell,
    badge: unreadN
  }, {
    id: "rangos",
    label: "Rangos Referencia",
    icon: I.shield
  }];
  const ctx = {
    patient: selPat,
    vitals: HIST[0],
    alerts: alerts.filter(a => a.pid === selPat.id && !a.read)
  };
  const content = () => {
    if (section === "dashboard") return /*#__PURE__*/React.createElement(StaffDashboard, {
      alerts: alerts,
      visits: visits,
      onNavigate: setSection
    });
    if (section === "alertas") return /*#__PURE__*/React.createElement(AlertsPanel, {
      alerts: alerts,
      setAlerts: setAlertsOffline,
      unread: unread,
      onAck: ack,
      onAckAll: ackAll,
      onNotif: send
    });
    if (section === "rutas") return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "14px",
        flexWrap: "wrap",
        gap: "10px"
      }
    }, /*#__PURE__*/React.createElement("h2", {
      style: {
        margin: 0,
        fontSize: "18px",
        color: C.priD
      }
    }, "🗺️ Rutas y Visitas"), /*#__PURE__*/React.createElement("button", {
      onClick: () => send("🗺️ Ruta actualizada", "La ruta del día ha sido recalculada.", "info"),
      style: {
        padding: "7px 13px",
        borderRadius: "10px",
        background: C.priL,
        border: `1px solid ${C.pri}40`,
        color: C.pri,
        fontWeight: "700",
        fontSize: "12px",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        gap: "5px"
      }
    }, /*#__PURE__*/React.createElement(Ic, {
      d: I.refresh,
      size: 13,
      color: C.pri
    }), " Actualizar")), /*#__PURE__*/React.createElement("div", {
      style: {
        background: C.w,
        borderRadius: "12px",
        padding: "4px",
        display: "flex",
        gap: "3px",
        marginBottom: "16px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.06)"
      }
    }, [{
      id: "lista",
      l: "📋 Lista"
    }, {
      id: "mapa",
      l: "🗺️ Mapa"
    }, {
      id: "pdf",
      l: "📄 PDF"
    }].map(t => /*#__PURE__*/React.createElement("button", {
      key: t.id,
      onClick: () => setRouteTab(t.id),
      style: {
        flex: 1,
        padding: "9px 7px",
        borderRadius: "10px",
        border: "none",
        background: routeTab === t.id ? C.pri : "transparent",
        color: routeTab === t.id ? "white" : C.g600,
        fontWeight: routeTab === t.id ? "700" : "500",
        fontSize: "13px",
        cursor: "pointer"
      }
    }, t.l))), routeTab === "lista" && /*#__PURE__*/React.createElement(RouteModule, {
      visits: visits,
      setVisits: setVisitsOffline,
      sendNotif: send,
      regPats: regPats
    }), routeTab === "mapa" && /*#__PURE__*/React.createElement(LeafletMap, {
      visits: visits,
      onVisitClick: v => {
        setSelVisitId(p => p === v.id ? null : v.id);
        if (v.priority === "urgente" && v.status !== "completada") send("⚠️ Visita urgente", v.patName + " — " + v.addr, "urgente");
      },
      selectedId: selVisitId
    }), routeTab === "pdf" && /*#__PURE__*/React.createElement(PDFExportSimple, {
      visits: visits
    }));
    if (section === "calendario") return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
      style: {
        margin: "0 0 16px",
        fontSize: "18px",
        color: C.priD
      }
    }, "📅 Calendario de Visitas"), /*#__PURE__*/React.createElement(WeeklyCalendar, {
      visits: visits,
      onAdd: () => {
        setSection("rutas");
        setRouteTab("lista");
      },
      onVisitClick: v => {
        setSection("rutas");
        setRouteTab("mapa");
      }
    }));
    if (section === "asistente") return /*#__PURE__*/React.createElement(AIAssistant, {
      role: "staff",
      ctx: ctx
    });
    if (section === "estadisticas") return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
      style: {
        margin: "0 0 16px",
        fontSize: "18px",
        color: C.priD
      }
    }, "📊 Estadísticas del Servicio"), /*#__PURE__*/React.createElement(StatsDashboard, null));
    if (section === "pacientes") return /*#__PURE__*/React.createElement(PatientHistoryPanel, {
      patients: PATIENTS,
      alerts: alerts,
      visits: visits,
      notes: notes,
      selPat: selPat,
      setSelPat: setSelPat,
      setSection: setSection
    });
    if (section === "evolucion") return /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(CTitle, {
      icon: I.book,
      extra: /*#__PURE__*/React.createElement(Badge, {
        label: selPat.name,
        color: C.pri
      })
    }, "Curso Clínico"), saved && /*#__PURE__*/React.createElement(SavedBanner, {
      msg: "✅ Nota guardada y añadida al historial clínico"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        marginBottom: "12px"
      }
    }, /*#__PURE__*/React.createElement("label", {
      style: {
        display: "block",
        fontSize: "12px",
        fontWeight: "600",
        color: C.g600,
        marginBottom: "4px"
      }
    }, "Nueva nota de evolución"), /*#__PURE__*/React.createElement("textarea", {
      style: {
        width: "100%",
        padding: "10px 12px",
        borderRadius: "10px",
        border: `2px solid ${C.g200}`,
        fontSize: "14px",
        fontFamily: "inherit",
        outline: "none",
        minHeight: "100px",
        resize: "vertical",
        boxSizing: "border-box",
        color: C.tx,
        background: C.w
      },
      placeholder: "Evolución clínica del paciente...",
      value: newNote,
      onChange: e => setNewNote(e.target.value)
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: "10px",
        flexWrap: "wrap",
        marginBottom: "20px"
      }
    }, noteError && /*#__PURE__*/React.createElement("div", {
      style: {
        background: C.critL,
        border: `1px solid ${C.crit}30`,
        borderRadius: "8px",
        padding: "8px 12px",
        marginBottom: "8px"
      }
    }, /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        fontSize: "12px",
        color: C.crit,
        fontWeight: "700"
      }
    }, "⚠️ ", noteError)), /*#__PURE__*/React.createElement(Btn, {
      onClick: () => {
        const err = validateNote(newNote);
        if (err) {
          setNoteError(err);
          return;
        }
        setNoteError(null);
        const newEntry = {
          date: new Date().toLocaleDateString("es-ES"),
          author: "Dr. Pérez",
          text: newNote,
          signed: false
        };
        setNotesOffline(p => [newEntry, ...p]);
        setSaved(true);
        setTimeout(() => setSaved(false), 2500);
        setNewNote("");
        send("📋 Nota guardada", `Nueva evolución: ${selPat.name}`, "ok");
      }
    }, "Guardar Nota"), /*#__PURE__*/React.createElement(DigSign, {
      professional: "Dr. Pérez",
      onSign: () => {}
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        marginBottom: "12px"
      }
    }, /*#__PURE__*/React.createElement(PhotoCapture, null)), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: "14px"
      }
    }, notes.map((n, i) => /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        borderLeft: `4px solid ${i === 0 ? C.pri : C.g200}`,
        paddingLeft: "13px"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: "8px",
        marginBottom: "4px",
        flexWrap: "wrap"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: "12px",
        fontWeight: "700",
        color: C.pri
      }
    }, n.date), /*#__PURE__*/React.createElement(Badge, {
      label: n.author,
      color: C.pri
    }), n.signed && /*#__PURE__*/React.createElement(Badge, {
      label: "✅ Firmada",
      color: C.ok
    })), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        fontSize: "13px",
        lineHeight: "1.7"
      }
    }, n.text)))));
    if (section === "constantes") return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
      style: {
        margin: "0 0 16px",
        fontSize: "18px",
        color: C.priD
      }
    }, "📊 Constantes Vitales"), /*#__PURE__*/React.createElement(VitalsModule, {
      role: "staff",
      patients: PATIENTS,
      onAlert: (v, pid) => {
        setAlertsOffline(p => [{
          id: Date.now(),
          pid,
          time: new Date().toLocaleTimeString("es-ES", {
            hour: "2-digit",
            minute: "2-digit"
          }),
          vital: "Constantes",
          value: JSON.stringify(v),
          level: "critical",
          msg: "Valores críticos registrados. Revisar urgente.",
          read: false
        }, ...p]);
        send("🔴 Alerta crítica", "Constantes críticas registradas", "urgente");
      }
    }));
    if (section === "medicacion") return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
      style: {
        margin: "0 0 16px",
        fontSize: "18px",
        color: C.priD
      }
    }, "💊 Gestión de Medicación"), /*#__PURE__*/React.createElement(MedicationModule, {
      role: "staff",
      meds: sharedMeds,
      setMeds: setSharedMeds,
      patients: PATIENTS,
      onSave: () => send("💊 Medicación actualizada", "Cambios guardados y sincronizados con el paciente", "ok")
    }));
    if (section === "chat") return /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(CTitle, {
      icon: I.chat,
      extra: /*#__PURE__*/React.createElement(Badge, {
        label: selPat.name,
        color: C.pri
      })
    }, "Chat"), /*#__PURE__*/React.createElement("div", {
      style: {
        height: "290px",
        overflowY: "auto",
        padding: "12px",
        background: C.g50,
        borderRadius: "12px",
        marginBottom: "12px",
        display: "flex",
        flexDirection: "column",
        gap: "9px"
      }
    }, MSGS0.map(m => /*#__PURE__*/React.createElement("div", {
      key: m.id,
      style: {
        display: "flex",
        flexDirection: "column"
      }
    }, m.own && /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: "11px",
        color: C.g400,
        margin: "0 0 3px 12px",
        fontWeight: "600"
      }
    }, "Paciente"), /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: "78%",
        padding: "10px 13px",
        borderRadius: !m.own ? "18px 18px 4px 18px" : "18px 18px 18px 4px",
        background: !m.own ? C.pri : C.w,
        color: !m.own ? "white" : C.tx,
        alignSelf: !m.own ? "flex-end" : "flex-start",
        fontSize: "14px",
        boxShadow: "0 2px 7px rgba(0,0,0,0.07)"
      }
    }, m.text)))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: "9px",
        alignItems: "flex-end"
      }
    }, /*#__PURE__*/React.createElement("textarea", {
      style: {
        flex: 1,
        padding: "10px 13px",
        borderRadius: "12px",
        border: `2px solid ${C.g200}`,
        fontSize: "14px",
        fontFamily: "inherit",
        resize: "none",
        outline: "none",
        minHeight: "42px",
        color: C.tx,
        background: C.w
      },
      placeholder: "Escriba al paciente...",
      rows: 2
    }), /*#__PURE__*/React.createElement("button", {
      style: {
        width: "44px",
        height: "44px",
        borderRadius: "12px",
        background: C.pri,
        border: "none",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0
      }
    }, /*#__PURE__*/React.createElement(Ic, {
      d: I.send,
      size: 17,
      color: "white"
    }))));
    if (section === "recomendaciones") return /*#__PURE__*/React.createElement(StaffRecsPanel, {
      recs: recs,
      setRecs: setRecs,
      selPat: selPat,
      saved: saved,
      setSaved: setSaved,
      onSend: rec => {
        send("📋 Recomendación enviada", `Nueva indicación enviada a ${selPat.name}`, "ok");
      }
    });
    if (section === "teleconsulta") return /*#__PURE__*/React.createElement(TeleconsultaModule, {
      role: "staff",
      patientName: selPat.name,
      patientId: selPat.id,
      selPat: selPat,
      sendNotif: send
    });
    if (section === "notificaciones") return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
      style: {
        margin: "0 0 16px",
        fontSize: "18px",
        color: C.priD
      }
    }, "🔔 Centro de Notificaciones"), /*#__PURE__*/React.createElement(NotifPanel, {
      notifs: notifHist,
      perm: perm,
      onReq: reqPerm,
      onRead: markRead,
      onReadAll: markAll,
      onTest: send
    }));
    if (section === "rangos") return /*#__PURE__*/React.createElement(RangesRef, null);
    return null;
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(GlobalStyle, {
    dark: dark
  }), /*#__PURE__*/React.createElement(Toasts, {
    toasts: toasts,
    onDismiss: dismiss
  }), /*#__PURE__*/React.createElement(SavedFloat, {
    show: saved,
    msg: "✅ Guardado"
  }), /*#__PURE__*/React.createElement(OfflineBanner, {
    online: online,
    wasOffline: wasOffline,
    syncCount: syncCount,
    syncing: syncing,
    lastSync: lastSync,
    onSync: doSync
  }), showModal && crits > 0 && /*#__PURE__*/React.createElement(AlertModal, {
    alerts: alerts,
    onClose: () => setShowModal(false),
    onAck: ack
  }), /*#__PURE__*/React.createElement(Shell, {
    title: "🏥 CuidaEnCasa · Sanitario",
    sub: `Dr. Pérez González · ${selPat.name}`,
    nav: staffNav,
    section: section,
    setSection: setSection,
    onLogout: onLogout,
    unread: unread,
    criticals: crits,
    dark: dark,
    setDark: setDark,
    extra: /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: "10px",
        flex: 1
      }
    }, /*#__PURE__*/React.createElement(QuickSearch, {
      visits: visits,
      alerts: alerts,
      onNavigate: setSection
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: "6px",
        flexShrink: 0
      }
    }, /*#__PURE__*/React.createElement(NetworkDot, {
      online: online
    }), !online && syncCount > 0 && /*#__PURE__*/React.createElement("span", {
      style: {
        background: "rgba(255,255,255,0.15)",
        color: "white",
        borderRadius: "20px",
        padding: "3px 9px",
        fontSize: "11px",
        fontWeight: "700"
      }
    }, syncCount, " pendiente", syncCount !== 1 ? "s" : ""), online && syncCount > 0 && /*#__PURE__*/React.createElement("button", {
      onClick: doSync,
      style: {
        background: "rgba(255,255,255,0.15)",
        border: "none",
        borderRadius: "8px",
        padding: "5px 10px",
        color: "white",
        fontSize: "11px",
        fontWeight: "700",
        cursor: "pointer"
      }
    }, "🔄 Sync")))
  }, content()));
}
function validatePatient(form) {
  const errors = {};
  if (!form.name?.trim()) errors.name = "El nombre es obligatorio";
  if (!form.age || isNaN(+form.age) || +form.age < 0 || +form.age > 130) errors.age = "Edad no válida (0-130)";
  if (!form.dni?.trim()) errors.dni = "El DNI/NIE es obligatorio";
  if (!form.dx?.trim()) errors.dx = "El diagnóstico es obligatorio";
  if (!form.addr?.trim()) errors.addr = "La dirección es obligatoria";
  if (!form.contact?.trim()) errors.contact = "El contacto familiar es obligatorio";
  return errors;
}
function validateVisit(form) {
  const errors = {};
  if (!form.pid && !form.patName?.trim()) errors.pid = "Seleccione un paciente";
  if (!form.date) errors.date = "La fecha es obligatoria";
  if (!form.time) errors.time = "La hora es obligatoria";
  if (!form.duration || +form.duration <= 0) errors.duration = "Duración no válida";
  return errors;
}
function validateUser(form) {
  const errors = {};
  if (!form.name?.trim()) errors.name = "El nombre es obligatorio";
  if (!form.email?.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errors.email = "Email no válido";
  return errors;
}
function validateNote(text) {
  if (!text?.trim()) return "La nota no puede estar vacía";
  if (text.trim().length < 10) return "La nota debe tener al menos 10 caracteres";
  return null;
}
const FieldError = ({
  msg
}) => msg ? /*#__PURE__*/React.createElement("p", {
  style: {
    margin: "3px 0 0",
    fontSize: "11px",
    color: C.crit,
    fontWeight: "600",
    display: "flex",
    alignItems: "center",
    gap: "4px"
  }
}, "⚠ ", msg) : null;
const VInp = ({
  label,
  error,
  required,
  style = {},
  ...props
}) => /*#__PURE__*/React.createElement("div", null, label && /*#__PURE__*/React.createElement("label", {
  style: {
    display: "block",
    fontSize: "12px",
    fontWeight: "600",
    color: error ? C.crit : C.g600,
    marginBottom: "4px"
  }
}, label, required && /*#__PURE__*/React.createElement("span", {
  style: {
    color: C.crit
  }
}, " *")), /*#__PURE__*/React.createElement("input", {
  style: {
    width: "100%",
    padding: "10px 12px",
    borderRadius: "10px",
    border: `2px solid ${error ? C.crit : C.g200}`,
    fontSize: "14px",
    outline: "none",
    boxSizing: "border-box",
    color: C.tx,
    background: error ? "#FFF8F8" : C.w,
    ...style
  },
  ...props
}), /*#__PURE__*/React.createElement(FieldError, {
  msg: error
}));
const VSel = ({
  label,
  error,
  required,
  children,
  ...props
}) => /*#__PURE__*/React.createElement("div", null, label && /*#__PURE__*/React.createElement("label", {
  style: {
    display: "block",
    fontSize: "12px",
    fontWeight: "600",
    color: error ? C.crit : C.g600,
    marginBottom: "4px"
  }
}, label, required && /*#__PURE__*/React.createElement("span", {
  style: {
    color: C.crit
  }
}, " *")), /*#__PURE__*/React.createElement("select", {
  style: {
    width: "100%",
    padding: "10px 12px",
    borderRadius: "10px",
    border: `2px solid ${error ? C.crit : C.g200}`,
    fontSize: "14px",
    outline: "none",
    background: C.w,
    boxSizing: "border-box",
    color: C.tx
  },
  ...props
}, children), /*#__PURE__*/React.createElement(FieldError, {
  msg: error
}));
function ConfirmModal({
  title,
  message,
  confirmLabel = "Confirmar",
  confirmColor = C.crit,
  onConfirm,
  onCancel,
  icon = "⚠️"
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "fixed",
      inset: 0,
      background: "rgba(0,0,0,0.55)",
      zIndex: 3000,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "16px",
      animation: "fadeIn 0.15s"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: C.w,
      borderRadius: "20px",
      maxWidth: "400px",
      width: "100%",
      boxShadow: "0 20px 60px rgba(0,0,0,0.25)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "24px 24px 0",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: "56px",
      height: "56px",
      borderRadius: "50%",
      background: confirmColor + "15",
      border: `2px solid ${confirmColor}30`,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      margin: "0 auto 14px",
      fontSize: "24px"
    }
  }, icon), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "0 0 8px",
      fontWeight: "800",
      fontSize: "17px",
      color: C.tx
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "0 0 20px",
      fontSize: "13px",
      color: C.txL,
      lineHeight: "1.6"
    }
  }, message)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "10px",
      padding: "0 24px 24px"
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onCancel,
    style: {
      flex: 1,
      padding: "11px",
      borderRadius: "12px",
      border: `1px solid ${C.g200}`,
      background: C.w,
      color: C.g800,
      fontWeight: "600",
      fontSize: "14px",
      cursor: "pointer"
    }
  }, "Cancelar"), /*#__PURE__*/React.createElement("button", {
    onClick: onConfirm,
    style: {
      flex: 1,
      padding: "11px",
      borderRadius: "12px",
      border: "none",
      background: confirmColor,
      color: "white",
      fontWeight: "700",
      fontSize: "14px",
      cursor: "pointer"
    }
  }, confirmLabel))));
}
function useConfirm() {
  const [state, setState] = useState(null);
  const confirm = opts => new Promise(resolve => {
    setState({
      ...opts,
      resolve
    });
  });
  const handleConfirm = () => {
    state.resolve(true);
    setState(null);
  };
  const handleCancel = () => {
    state.resolve(false);
    setState(null);
  };
  const modal = state ? /*#__PURE__*/React.createElement(ConfirmModal, {
    ...state,
    onConfirm: handleConfirm,
    onCancel: handleCancel
  }) : null;
  return {
    confirm,
    modal
  };
}
function SavedBanner({
  msg = "✅ Guardado correctamente"
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "8px",
      background: C.okL,
      border: `1px solid ${C.ok}30`,
      borderRadius: "10px",
      padding: "10px 14px",
      marginBottom: "12px",
      animation: "slideDown 0.25s"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: "24px",
      height: "24px",
      borderRadius: "50%",
      background: C.ok,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(Ic, {
    d: I.check,
    size: 13,
    color: "white"
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontWeight: "700",
      fontSize: "13px",
      color: C.ok
    }
  }, msg));
}
function SavedFloat({
  msg = "✅ Guardado",
  show
}) {
  if (!show) return null;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "fixed",
      bottom: "80px",
      right: "14px",
      zIndex: 500,
      background: C.ok,
      color: "white",
      borderRadius: "12px",
      padding: "10px 16px",
      fontWeight: "700",
      fontSize: "13px",
      boxShadow: "0 4px 16px rgba(45,155,111,0.4)",
      display: "flex",
      alignItems: "center",
      gap: "7px",
      animation: "slideDown 0.2s"
    }
  }, /*#__PURE__*/React.createElement(Ic, {
    d: I.check,
    size: 15,
    color: "white"
  }), " ", msg);
}
function usePersistedState(key, defaultValue) {
  const [value, setValueRaw] = useState(() => {
    const saved = storageLoad(key);
    return saved !== null ? saved : defaultValue;
  });
  const setValue = useCallback(updater => {
    setValueRaw(prev => {
      const next = typeof updater === "function" ? updater(prev) : updater;
      storageSave(key, next);
      return next;
    });
  }, [key]);
  return [value, setValue];
}
// (new patient, access activation) are instantly visible when Staff/Patient
// portals reload. For same-session real-time sync, we use the storage event.
function useSyncedState(key, defaultValue) {
  const [value, setValue] = usePersistedState(key, defaultValue);
  useEffect(() => {
    const handler = e => {
      if (e.key === STORAGE_PREFIX + key && e.newValue) {
        try {
          setValue(JSON.parse(e.newValue));
        } catch {}
      }
    };
    window.addEventListener("storage", handler);
    return () => window.removeEventListener("storage", handler);
  }, [key]);
  return [value, setValue];
}
function LoadingScreen() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: "100vh",
      background: `linear-gradient(135deg,${C.priD},${C.pri})`,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: "20px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: "56px",
      height: "56px",
      border: "5px solid rgba(255,255,255,0.2)",
      borderTop: "5px solid white",
      borderRadius: "50%",
      animation: "spin 0.9s linear infinite"
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "white",
      fontSize: "16px",
      fontWeight: "700",
      margin: 0
    }
  }, "Cargando datos del servicio..."), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "rgba(255,255,255,0.65)",
      fontSize: "13px",
      margin: 0
    }
  }, "🔒 Recuperando historial cifrado"), /*#__PURE__*/React.createElement("style", null, `@keyframes spin{to{transform:rotate(360deg)}}`));
}
const AUDIT_TYPES = {
  login: {
    label: "Inicio de sesión",
    icon: "🔑",
    color: "#1A6B8A",
    severity: "info"
  },
  logout: {
    label: "Cierre de sesión",
    icon: "🚪",
    color: "#4A5A6E",
    severity: "info"
  },
  view_patient: {
    label: "Acceso a paciente",
    icon: "👁️",
    color: "#6D28D9",
    severity: "info"
  },
  edit_patient: {
    label: "Edición de paciente",
    icon: "✏️",
    color: "#E07A3A",
    severity: "medium"
  },
  new_patient: {
    label: "Alta de paciente",
    icon: "➕",
    color: "#2D9B6F",
    severity: "medium"
  },
  discharge: {
    label: "Alta médica",
    icon: "🏠",
    color: "#E07A3A",
    severity: "high"
  },
  view_vitals: {
    label: "Acceso a constantes",
    icon: "📊",
    color: "#1A6B8A",
    severity: "info"
  },
  save_vitals: {
    label: "Registro de constantes",
    icon: "💾",
    color: "#2D9B6F",
    severity: "medium"
  },
  save_note: {
    label: "Nota clínica añadida",
    icon: "📝",
    color: "#2D9B6F",
    severity: "medium"
  },
  sign_note: {
    label: "Nota firmada",
    icon: "✍️",
    color: "#6D28D9",
    severity: "high"
  },
  alert_critical: {
    label: "Alerta crítica",
    icon: "🔴",
    color: "#9B1C1C",
    severity: "critical"
  },
  alert_ack: {
    label: "Alerta revisada",
    icon: "✅",
    color: "#2D9B6F",
    severity: "medium"
  },
  access_grant: {
    label: "Acceso activado",
    icon: "🔓",
    color: "#2D9B6F",
    severity: "high"
  },
  access_revoke: {
    label: "Acceso revocado",
    icon: "🔒",
    color: "#9B1C1C",
    severity: "high"
  },
  teleconsult: {
    label: "Teleconsulta iniciada",
    icon: "📹",
    color: "#1A6B8A",
    severity: "medium"
  },
  export_pdf: {
    label: "Exportación PDF",
    icon: "📄",
    color: "#E07A3A",
    severity: "medium"
  },
  user_create: {
    label: "Usuario creado",
    icon: "👤",
    color: "#2D9B6F",
    severity: "high"
  },
  user_disable: {
    label: "Usuario desactivado",
    icon: "⛔",
    color: "#9B1C1C",
    severity: "high"
  },
  visit_create: {
    label: "Visita creada",
    icon: "📋",
    color: "#2D9B6F",
    severity: "medium"
  },
  visit_complete: {
    label: "Visita completada",
    icon: "✓",
    color: "#2D9B6F",
    severity: "medium"
  },
  visit_delete: {
    label: "Visita eliminada",
    icon: "🗑️",
    color: "#9B1C1C",
    severity: "high"
  },
  data_export: {
    label: "Exportación de datos",
    icon: "📤",
    color: "#E07A3A",
    severity: "high"
  },
  offhours: {
    label: "Acceso fuera de horario",
    icon: "⚠️",
    color: "#9B1C1C",
    severity: "critical"
  }
};
const SEVERITY_CFG = {
  info: {
    label: "Informativo",
    color: "#4A5A6E",
    bg: "#F8FAFB"
  },
  medium: {
    label: "Medio",
    color: "#E07A3A",
    bg: "#FEF3E8"
  },
  high: {
    label: "Alto",
    color: "#6D28D9",
    bg: "#EDE9FE"
  },
  critical: {
    label: "Crítico",
    color: "#9B1C1C",
    bg: "#FEE2E2"
  }
};
const INIT_AUDIT = [{
  id: 1,
  ts: "2026-04-18T09:02:11",
  user: "Dr. Pérez",
  role: "medico",
  type: "login",
  patient: null,
  detail: "Acceso desde dispositivo conocido · IP 192.168.1.45",
  read: true
}, {
  id: 2,
  ts: "2026-04-18T09:05:33",
  user: "Dr. Pérez",
  role: "medico",
  type: "view_patient",
  patient: "María García López",
  detail: "Acceso a historia clínica completa · HAD-001",
  read: true
}, {
  id: 3,
  ts: "2026-04-18T09:12:08",
  user: "Dr. Pérez",
  role: "medico",
  type: "alert_critical",
  patient: "María García López",
  detail: "Alerta generada: Saturación O₂ 89% (crítico)",
  read: false
}, {
  id: 4,
  ts: "2026-04-18T09:15:44",
  user: "Enf. Rodríguez",
  role: "enfermero",
  type: "save_vitals",
  patient: "María García López",
  detail: "Constantes registradas: T.A. 128/78 · FC 72 · Sat 89%",
  read: true
}, {
  id: 5,
  ts: "2026-04-18T09:32:17",
  user: "Dr. Pérez",
  role: "medico",
  type: "save_note",
  patient: "Antonio Fernández",
  detail: "Nota de evolución registrada (143 palabras)",
  read: true
}];
function useAuditLog() {
  const [log, setLog] = usePersistedState("had_audit", INIT_AUDIT);
  const addEntry = useCallback((type, detail, patient = null, user = "Sistema") => {
    const entry = {
      id: Date.now(),
      ts: new Date().toISOString(),
      user,
      role: "sistema",
      type,
      patient,
      detail,
      read: false
    };
    setLog(p => [entry, ...p].slice(0, 500)); // keep last 500 entries
  }, [setLog]);
  const markRead = id => setLog(p => p.map(e => e.id === id ? {
    ...e,
    read: true
  } : e));
  const markAllRead = () => setLog(p => p.map(e => ({
    ...e,
    read: true
  })));
  const unread = log.filter(e => !e.read).length;
  return {
    log,
    addEntry,
    markRead,
    markAllRead,
    unread
  };
}
function AuditPanel({
  log,
  onMarkRead,
  onMarkAll,
  unread
}) {
  const [filterType, setFilterType] = useState("todos");
  const [filterSeverity, setFilterSeverity] = useState("todos");
  const [filterUser, setFilterUser] = useState("todos");
  const [filterDate, setFilterDate] = useState("");
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState(null);
  const users = [...new Set(log.map(e => e.user))];
  const types = [...new Set(log.map(e => e.type))];
  const filtered = log.filter(e => {
    if (filterType !== "todos" && e.type !== filterType) return false;
    if (filterSeverity !== "todos" && AUDIT_TYPES[e.type]?.severity !== filterSeverity) return false;
    if (filterUser !== "todos" && e.user !== filterUser) return false;
    if (filterDate && !e.ts.startsWith(filterDate)) return false;
    if (search && !e.detail?.toLowerCase().includes(search.toLowerCase()) && !e.patient?.toLowerCase().includes(search.toLowerCase()) && !e.user?.toLowerCase().includes(search.toLowerCase())) return false;
    return true;
  });
  const criticalCount = filtered.filter(e => AUDIT_TYPES[e.type]?.severity === "critical").length;
  const fmt = ts => {
    const d = new Date(ts);
    return d.toLocaleDateString("es-ES", {
      day: "numeric",
      month: "short"
    }) + " " + d.toLocaleTimeString("es-ES", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
    });
  };
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr 1fr 1fr",
      gap: "10px",
      marginBottom: "16px"
    }
  }, [{
    l: "Total registros",
    v: log.length,
    c: C.pri
  }, {
    l: "Sin revisar",
    v: unread,
    c: unread > 0 ? C.warn : C.g400
  }, {
    l: "Críticos hoy",
    v: criticalCount,
    c: criticalCount > 0 ? C.crit : C.g400
  }, {
    l: "Retención",
    v: "5 años",
    c: C.ok
  }].map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      background: s.c + "12",
      borderRadius: "12px",
      padding: "12px",
      borderLeft: `4px solid ${s.c}`
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "22px",
      fontWeight: "800",
      color: s.c,
      margin: "0 0 2px"
    }
  }, s.v), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "11px",
      color: C.txL,
      margin: 0
    }
  }, s.l)))), log.filter(e => !e.read && AUDIT_TYPES[e.type]?.severity === "critical").length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      background: C.critL,
      border: `2px solid ${C.crit}`,
      borderRadius: "12px",
      padding: "12px 16px",
      marginBottom: "14px",
      display: "flex",
      gap: "10px",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "20px"
    }
  }, "🚨"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "0 0 2px",
      fontWeight: "800",
      color: C.crit,
      fontSize: "14px"
    }
  }, log.filter(e => !e.read && AUDIT_TYPES[e.type]?.severity === "critical").length, " evento", log.filter(e => !e.read && AUDIT_TYPES[e.type]?.severity === "critical").length > 1 ? "s" : "", " crítico", log.filter(e => !e.read && AUDIT_TYPES[e.type]?.severity === "critical").length > 1 ? "s" : "", " sin revisar"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: "12px",
      color: C.tx
    }
  }, log.filter(e => !e.read && AUDIT_TYPES[e.type]?.severity === "critical").map(e => AUDIT_TYPES[e.type]?.label).join(" · "))), /*#__PURE__*/React.createElement("button", {
    onClick: onMarkAll,
    style: {
      padding: "7px 14px",
      borderRadius: "8px",
      background: C.crit,
      color: "white",
      border: "none",
      cursor: "pointer",
      fontWeight: "700",
      fontSize: "12px",
      flexShrink: 0
    }
  }, "Revisar todos")), /*#__PURE__*/React.createElement(Card, {
    style: {
      marginBottom: "14px",
      padding: "14px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr 1fr",
      gap: "10px",
      marginBottom: "10px"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: {
      display: "block",
      fontSize: "11px",
      fontWeight: "600",
      color: C.g600,
      marginBottom: "3px"
    }
  }, "Tipo de evento"), /*#__PURE__*/React.createElement("select", {
    value: filterType,
    onChange: e => setFilterType(e.target.value),
    style: {
      width: "100%",
      padding: "8px 10px",
      borderRadius: "8px",
      border: `1px solid ${C.g200}`,
      fontSize: "12px",
      outline: "none",
      background: C.w,
      color: C.tx
    }
  }, /*#__PURE__*/React.createElement("option", {
    value: "todos"
  }, "Todos los tipos"), Object.entries(AUDIT_TYPES).map(([k, v]) => /*#__PURE__*/React.createElement("option", {
    key: k,
    value: k
  }, v.icon, " ", v.label)))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: {
      display: "block",
      fontSize: "11px",
      fontWeight: "600",
      color: C.g600,
      marginBottom: "3px"
    }
  }, "Severidad"), /*#__PURE__*/React.createElement("select", {
    value: filterSeverity,
    onChange: e => setFilterSeverity(e.target.value),
    style: {
      width: "100%",
      padding: "8px 10px",
      borderRadius: "8px",
      border: `1px solid ${C.g200}`,
      fontSize: "12px",
      outline: "none",
      background: C.w,
      color: C.tx
    }
  }, /*#__PURE__*/React.createElement("option", {
    value: "todos"
  }, "Todas"), Object.entries(SEVERITY_CFG).map(([k, v]) => /*#__PURE__*/React.createElement("option", {
    key: k,
    value: k
  }, v.label)))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: {
      display: "block",
      fontSize: "11px",
      fontWeight: "600",
      color: C.g600,
      marginBottom: "3px"
    }
  }, "Usuario"), /*#__PURE__*/React.createElement("select", {
    value: filterUser,
    onChange: e => setFilterUser(e.target.value),
    style: {
      width: "100%",
      padding: "8px 10px",
      borderRadius: "8px",
      border: `1px solid ${C.g200}`,
      fontSize: "12px",
      outline: "none",
      background: C.w,
      color: C.tx
    }
  }, /*#__PURE__*/React.createElement("option", {
    value: "todos"
  }, "Todos los usuarios"), users.map(u => /*#__PURE__*/React.createElement("option", {
    key: u
  }, u))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "10px"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: {
      display: "block",
      fontSize: "11px",
      fontWeight: "600",
      color: C.g600,
      marginBottom: "3px"
    }
  }, "Fecha"), /*#__PURE__*/React.createElement("input", {
    type: "date",
    value: filterDate,
    onChange: e => setFilterDate(e.target.value),
    style: {
      width: "100%",
      padding: "8px 10px",
      borderRadius: "8px",
      border: `1px solid ${C.g200}`,
      fontSize: "12px",
      outline: "none",
      boxSizing: "border-box",
      color: C.tx,
      background: C.w
    }
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: {
      display: "block",
      fontSize: "11px",
      fontWeight: "600",
      color: C.g600,
      marginBottom: "3px"
    }
  }, "Buscar"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      background: C.w,
      border: `1px solid ${C.g200}`,
      borderRadius: "8px",
      padding: "0 10px",
      gap: "6px"
    }
  }, /*#__PURE__*/React.createElement(Ic, {
    d: I.filter,
    size: 13,
    color: C.g400
  }), /*#__PURE__*/React.createElement("input", {
    value: search,
    onChange: e => setSearch(e.target.value),
    placeholder: "Paciente, usuario, detalle...",
    style: {
      flex: 1,
      border: "none",
      outline: "none",
      fontSize: "12px",
      padding: "8px 0",
      color: C.tx,
      background: "transparent"
    }
  }), search && /*#__PURE__*/React.createElement("button", {
    onClick: () => setSearch(""),
    style: {
      color: C.g400,
      fontSize: "13px",
      background: "transparent",
      border: "none",
      cursor: "pointer"
    }
  }, "✕")))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginTop: "10px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "12px",
      color: C.g600
    }
  }, filtered.length, " registro", filtered.length !== 1 ? "s" : "", " encontrado", filtered.length !== 1 ? "s" : ""), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "8px"
    }
  }, unread > 0 && /*#__PURE__*/React.createElement("button", {
    onClick: onMarkAll,
    style: {
      padding: "6px 12px",
      borderRadius: "8px",
      background: C.priL,
      border: `1px solid ${C.pri}40`,
      color: C.pri,
      fontWeight: "700",
      fontSize: "12px",
      cursor: "pointer"
    }
  }, "✓ Marcar todos leídos"), /*#__PURE__*/React.createElement("button", {
    onClick: () => {
      setFilterType("todos");
      setFilterSeverity("todos");
      setFilterUser("todos");
      setFilterDate("");
      setSearch("");
    },
    style: {
      padding: "6px 12px",
      borderRadius: "8px",
      background: C.g100,
      border: `1px solid ${C.g200}`,
      color: C.g800,
      fontWeight: "600",
      fontSize: "12px",
      cursor: "pointer"
    }
  }, "Limpiar filtros")))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "6px"
    }
  }, filtered.length === 0 ? /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      padding: "40px 0",
      color: C.g400
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "14px",
      margin: 0
    }
  }, "No hay registros para los filtros seleccionados")) : filtered.map(e => {
    const at = AUDIT_TYPES[e.type] || {
      label: e.type,
      icon: "•",
      color: C.g400,
      severity: "info"
    };
    const sv = SEVERITY_CFG[at.severity] || SEVERITY_CFG.info;
    const isSelected = selected === e.id;
    return /*#__PURE__*/React.createElement("div", {
      key: e.id,
      onClick: () => {
        setSelected(isSelected ? null : e.id);
        if (!e.read) onMarkRead(e.id);
      },
      style: {
        background: e.read ? C.w : at.color + "08",
        borderRadius: "12px",
        padding: "12px 14px",
        border: `1px solid ${e.read ? C.g200 : at.color + "40"}`,
        cursor: "pointer",
        transition: "all 0.15s",
        borderLeft: `4px solid ${at.color}`
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: "10px",
        alignItems: "flex-start"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: "36px",
        height: "36px",
        borderRadius: "10px",
        background: at.color + "15",
        border: `1px solid ${at.color}30`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        fontSize: "16px"
      }
    }, at.icon), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
        gap: "8px",
        marginBottom: "3px",
        flexWrap: "wrap"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: "6px",
        alignItems: "center",
        flexWrap: "wrap"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontWeight: "800",
        fontSize: "13px",
        color: C.tx
      }
    }, at.label), /*#__PURE__*/React.createElement("span", {
      style: {
        background: sv.bg,
        color: sv.color,
        borderRadius: "20px",
        padding: "1px 7px",
        fontSize: "10px",
        fontWeight: "700"
      }
    }, sv.label), !e.read && /*#__PURE__*/React.createElement("span", {
      style: {
        width: "7px",
        height: "7px",
        borderRadius: "50%",
        background: at.color,
        display: "inline-block"
      }
    })), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: "11px",
        color: C.g400,
        flexShrink: 0,
        fontFamily: "monospace"
      }
    }, fmt(e.ts))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: "10px",
        flexWrap: "wrap",
        marginBottom: "3px"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: "12px",
        color: C.txL
      }
    }, "👤 ", /*#__PURE__*/React.createElement("strong", null, e.user)), e.patient && /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: "12px",
        color: C.txL
      }
    }, "🏥 ", e.patient)), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        fontSize: "12px",
        color: C.g600,
        lineHeight: "1.5"
      }
    }, e.detail), isSelected && /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: "10px",
        padding: "10px 12px",
        background: C.g50,
        borderRadius: "8px",
        animation: "fadeIn 0.2s"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "8px",
        fontSize: "12px"
      }
    }, [["ID del evento", `#${e.id}`], ["Timestamp UTC", new Date(e.ts).toUTCString()], ["Usuario", e.user], ["Rol", e.role], ["Tipo de evento", e.type], ["Severidad", sv.label], ["Paciente", e.patient || "—"], ["Estado", e.read ? "Leído" : "Pendiente de revisión"]].map(([k, v], i) => /*#__PURE__*/React.createElement("div", {
      key: i
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: C.g600,
        fontWeight: "600"
      }
    }, k, ": "), /*#__PURE__*/React.createElement("span", {
      style: {
        color: C.tx,
        fontFamily: k.includes("ID") || k.includes("UTC") ? "monospace" : "inherit"
      }
    }, v))))))));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "16px",
      padding: "14px 16px",
      background: C.priL,
      border: `1px solid ${C.pri}30`,
      borderRadius: "12px"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "0 0 10px",
      fontWeight: "800",
      fontSize: "13px",
      color: C.priD
    }
  }, "📜 Registro de Consentimientos RGPD"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "0 0 10px",
      fontSize: "12px",
      color: C.g600
    }
  }, "Conforme al Art. 7.1 RGPD — el responsable debe poder demostrar el consentimiento prestado. Retención: duración del servicio + 5 años adicionales."), (() => {
    try {
      const log = JSON.parse(localStorage.getItem("cuidaencasa_had_consent_log") || "[]");
      if (!log.length) return /*#__PURE__*/React.createElement("p", {
        style: {
          margin: 0,
          fontSize: "12px",
          color: C.g400
        }
      }, "Sin consentimientos registrados todavía.");
      return log.map((r, i) => /*#__PURE__*/React.createElement("div", {
        key: i,
        style: {
          background: C.w,
          borderRadius: "10px",
          padding: "12px",
          marginBottom: "8px",
          border: `1px solid ${C.g200}`
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "6px",
          marginBottom: "6px"
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          display: "flex",
          gap: "6px",
          alignItems: "center",
          flexWrap: "wrap"
        }
      }, /*#__PURE__*/React.createElement(Badge, {
        label: "✅ Consentido",
        color: C.ok
      }), /*#__PURE__*/React.createElement("span", {
        style: {
          fontWeight: "700",
          fontSize: "13px"
        }
      }, r.patientName), /*#__PURE__*/React.createElement(Badge, {
        label: `v${r.consentVersion}`,
        color: C.pri
      })), /*#__PURE__*/React.createElement("span", {
        style: {
          fontSize: "11px",
          color: C.g400,
          fontFamily: "monospace"
        }
      }, r.tsLocal)), /*#__PURE__*/React.createElement("div", {
        style: {
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: "6px",
          fontSize: "11px",
          marginBottom: "6px"
        }
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          color: r.privacyPolicy ? C.ok : C.crit,
          fontWeight: "600"
        }
      }, r.privacyPolicy ? "✅" : "❌", " Política privacidad"), /*#__PURE__*/React.createElement("span", {
        style: {
          color: r.familyAccess ? C.ok : C.g400,
          fontWeight: "600"
        }
      }, r.familyAccess ? "✅" : "—", " Acceso familiar"), /*#__PURE__*/React.createElement("span", {
        style: {
          color: r.pushNotifications ? C.ok : C.g400,
          fontWeight: "600"
        }
      }, r.pushNotifications ? "✅" : "—", " Notificaciones push")), /*#__PURE__*/React.createElement("div", {
        style: {
          fontSize: "11px",
          color: C.g600
        }
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          marginRight: "10px"
        }
      }, "⚖️ ", r.legalBasis), /*#__PURE__*/React.createElement("span", null, "📅 Retención: ", r.retentionPeriod))));
    } catch (e) {
      return /*#__PURE__*/React.createElement("p", {
        style: {
          margin: 0,
          fontSize: "12px",
          color: C.crit
        }
      }, "Error al cargar el registro.");
    }
  })(), /*#__PURE__*/React.createElement("button", {
    onClick: () => {
      try {
        const log = JSON.parse(localStorage.getItem("cuidaencasa_had_consent_log") || "[]");
        const csv = ["Timestamp,Paciente,Version,Privacidad,Familiar,Push,Base Legal,Retencion", ...log.map(r => `"${r.ts}","${r.patientName}","${r.consentVersion}","${r.privacyPolicy}","${r.familyAccess}","${r.pushNotifications}","${r.legalBasis}","${r.retentionPeriod}"`)].join("\n");
        const blob = new Blob([csv], {
          type: "text/csv"
        });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `consentimientos_rgpd_${new Date().toISOString().split("T")[0]}.csv`;
        a.click();
      } catch (e) {}
    },
    style: {
      marginTop: "6px",
      padding: "7px 14px",
      borderRadius: "9px",
      background: C.pri,
      color: "white",
      border: "none",
      cursor: "pointer",
      fontWeight: "700",
      fontSize: "12px",
      display: "flex",
      alignItems: "center",
      gap: "5px"
    }
  }, /*#__PURE__*/React.createElement(Ic, {
    d: I.download,
    size: 13,
    color: "white"
  }), " Exportar registro de consentimientos CSV")), filtered.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "14px",
      padding: "12px 16px",
      background: C.g50,
      borderRadius: "12px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "wrap",
      gap: "10px"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: "12px",
      color: C.g600
    }
  }, "📋 ", filtered.length, " registros · Retención legal: 5 años (ENS Nivel Alto · RGPD Art. 5.1.f)"), /*#__PURE__*/React.createElement("button", {
    onClick: () => {
      const csv = ["Timestamp,Usuario,Rol,Tipo,Severidad,Paciente,Detalle", ...filtered.map(e => `"${e.ts}","${e.user}","${e.role}","${AUDIT_TYPES[e.type]?.label || e.type}","${AUDIT_TYPES[e.type]?.severity || ""}","${e.patient || ""}","${e.detail}"`)].join("\n");
      const blob = new Blob([csv], {
        type: "text/csv"
      });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `auditoria_had_${new Date().toISOString().split("T")[0]}.csv`;
      a.click();
    },
    style: {
      padding: "8px 14px",
      borderRadius: "9px",
      background: C.pri,
      color: "white",
      border: "none",
      cursor: "pointer",
      fontWeight: "700",
      fontSize: "12px",
      display: "flex",
      alignItems: "center",
      gap: "5px"
    }
  }, /*#__PURE__*/React.createElement(Ic, {
    d: I.download,
    size: 13,
    color: "white"
  }), " Exportar CSV")));
}
function AdminApp({
  onLogout
}) {
  const mobile = useIsMobile();
  const [section, setSection] = useState("dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [saved, setSaved] = useState(false);
  const [patients, setPatients] = useSyncedState("had_patients", INIT_PATIENTS_REG);
  const [users, setUsers] = useSyncedState("had_users", INIT_USERS);
  const [storedVisits] = useSyncedState("had_visits", INIT_VISITS);
  const [storedAlerts] = useSyncedState("had_alerts", INIT_ALERTS);
  const {
    confirm,
    modal: confirmModal
  } = useConfirm();
  const {
    auditAdd
  } = useAuditLog();
  const [autoCredentials, setAutoCredentials] = useState(null);
  const [showCredentials, setShowCredentials] = useState(false);
  const activePats = patients.filter(p => p.status === "activo");
  const urgentPats = activePats.filter(p => p.priority === "urgente");
  const noAccess = activePats.filter(p => !p.access);
  const altaPats = patients.filter(p => p.status === "alta");
  const critAlerts = storedAlerts.filter(a => a.level === "critical" && !a.read).length;
  const adminNav = [{
    id: "dashboard",
    label: "Dashboard",
    icon: I.home,
    badge: 0
  }, {
    id: "pacientes",
    label: "Pacientes",
    icon: I.users,
    badge: 0
  }, {
    id: "alta",
    label: "Alta Paciente",
    icon: I.plus,
    badge: 0
  }, {
    id: "equipos",
    label: "Equipos",
    icon: I.user,
    badge: 0
  }, {
    id: "usuarios",
    label: "Usuarios",
    icon: I.shield,
    badge: 0
  }, {
    id: "auditoria",
    label: "Auditoría",
    icon: I.book,
    badge: critAlerts
  }, {
    id: "incidencias",
    label: "Incidencias",
    icon: I.alert,
    badge: 0
  }, {
    id: "reportes",
    label: "Reportes",
    icon: I.chart,
    badge: 0
  }];
  const resetAllData = () => {
    ["had_visits", "had_alerts", "had_patients", "had_users", "had_notes", "had_hist_all", "had_meds", "had_msgs", "had_recs", "had_audit", "had_alerts_patient", "had_diuresis", "had_heces", "had_adherence", "cuidaencasa_had_consent_log", "cuidaencasa_had_had_audit"].forEach(k => {
      try {
        localStorage.removeItem(k);
      } catch (e) {}
    });
    window.location.reload();
  };
  const dischargePatient = async id => {
    const pat = patients.find(p => p.id === id);
    const ok = await confirm(`¿Dar de alta médica a ${pat?.name}? Se desactivará su acceso a la app.`);
    if (!ok) return;
    setPatients(p => p.map(x => x.id === id ? {
      ...x,
      status: "alta",
      access: false,
      familyAccess: false
    } : x));
    auditAdd("access_revoke", `Alta médica: ${pat?.name}`, pat?.name);
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };
  const content = () => {
    if (section === "dashboard") return /*#__PURE__*/React.createElement(AdminDashboard, {
      activePats: activePats,
      urgentPats: urgentPats,
      noAccess: noAccess,
      altaPats: altaPats,
      patients: patients,
      users: users,
      storedVisits: storedVisits,
      storedAlerts: storedAlerts,
      setSection: setSection
    });
    if (section === "pacientes" || section === "alta") return /*#__PURE__*/React.createElement(AdminPatientsPanel, {
      patients: patients,
      setPatients: setPatients,
      users: users,
      section: section,
      setSection: setSection,
      dischargePatient: dischargePatient,
      onCredentials: creds => {
        setAutoCredentials(creds);
        setShowCredentials(true);
      },
      auditAdd: auditAdd,
      saved: saved,
      setSaved: setSaved
    });
    if (section === "equipos") return /*#__PURE__*/React.createElement(AdminTeamsPanel, {
      patients: patients,
      setPatients: setPatients,
      users: users,
      auditAdd: auditAdd,
      saved: saved,
      setSaved: setSaved
    });
    if (section === "usuarios") return /*#__PURE__*/React.createElement(AdminUsersPanel, {
      users: users,
      setUsers: setUsers,
      auditAdd: auditAdd,
      saved: saved,
      setSaved: setSaved
    });
    if (section === "auditoria") return /*#__PURE__*/React.createElement(AuditPanel, null);
    if (section === "incidencias") return /*#__PURE__*/React.createElement(AdminIncidentsPanel, null);
    if (section === "reportes") return /*#__PURE__*/React.createElement(StatsDashboard, {
      visits: storedVisits,
      alerts: storedAlerts,
      patients: patients
    });
    return null;
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(GlobalStyle, {
    dark: false
  }), confirmModal, showCredentials && autoCredentials && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "fixed",
      inset: 0,
      background: "rgba(0,0,0,0.6)",
      zIndex: 3000,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "16px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: C.w,
      borderRadius: "20px",
      maxWidth: "420px",
      width: "100%",
      padding: "28px",
      boxShadow: "0 20px 60px rgba(0,0,0,0.3)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      marginBottom: "20px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "48px",
      marginBottom: "8px"
    }
  }, "🔑"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "0 0 4px",
      fontWeight: "800",
      fontSize: "17px",
      color: C.priD
    }
  }, "Acceso generado"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: "13px",
      color: C.txL
    }
  }, "Comparta con ", autoCredentials.name)), /*#__PURE__*/React.createElement("div", {
    style: {
      background: C.priL,
      borderRadius: "14px",
      padding: "18px",
      marginBottom: "18px"
    }
  }, [["👤 Usuario", autoCredentials.user], ["🔒 Contraseña", autoCredentials.pass]].map(([k, v], i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "10px 0",
      borderBottom: i === 0 ? `1px solid ${C.g200}` : "none"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "13px",
      fontWeight: "700",
      color: C.g600
    }
  }, k), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "monospace",
      fontSize: "16px",
      fontWeight: "800",
      color: C.priD
    }
  }, v)))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: C.warnL,
      borderRadius: "10px",
      padding: "10px 14px",
      marginBottom: "16px"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: "12px",
      color: C.warn,
      fontWeight: "600"
    }
  }, "⚠️ Guarde estas credenciales. No se volverán a mostrar.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "10px"
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => {
      try {
        navigator.clipboard.writeText(`Usuario: ${autoCredentials.user}\nContraseña: ${autoCredentials.pass}`);
      } catch (e) {}
    },
    style: {
      flex: 1,
      padding: "11px",
      borderRadius: "12px",
      background: C.priL,
      border: `1px solid ${C.pri}40`,
      color: C.pri,
      fontWeight: "700",
      fontSize: "13px",
      cursor: "pointer"
    }
  }, "📋 Copiar"), /*#__PURE__*/React.createElement("button", {
    onClick: () => setShowCredentials(false),
    style: {
      flex: 1,
      padding: "11px",
      borderRadius: "12px",
      background: C.pri,
      border: "none",
      color: "white",
      fontWeight: "700",
      fontSize: "13px",
      cursor: "pointer"
    }
  }, "✅ Entendido")))), /*#__PURE__*/React.createElement(SavedFloat, {
    show: saved,
    msg: "✅ Cambios guardados"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "Arial,sans-serif",
      background: C.g50,
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("header", {
    style: {
      background: "linear-gradient(135deg,#0D4A62,#1A6B8A)",
      padding: "0 20px",
      display: "flex",
      alignItems: "center",
      gap: "12px",
      flexShrink: 0,
      height: "56px"
    }
  }, mobile && /*#__PURE__*/React.createElement("button", {
    onClick: () => setSidebarOpen(true),
    style: {
      background: "rgba(255,255,255,0.12)",
      border: "1px solid rgba(255,255,255,0.2)",
      borderRadius: "8px",
      width: "36px",
      height: "36px",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(Ic, {
    d: I.menu,
    size: 20,
    color: "white"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      width: "36px",
      height: "36px",
      background: "rgba(255,255,255,0.15)",
      borderRadius: "10px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "18px"
    }
  }, "🛡️"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      color: "white",
      fontWeight: "800",
      fontSize: "15px"
    }
  }, "CuidaEnCasa HAD"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      color: "rgba(255,255,255,0.7)",
      fontSize: "11px"
    }
  }, "Portal de Administración")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "10px"
    }
  }, critAlerts > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      background: C.crit,
      color: "white",
      borderRadius: "20px",
      padding: "4px 10px",
      fontSize: "12px",
      fontWeight: "800"
    }
  }, "🔴 ", critAlerts), /*#__PURE__*/React.createElement("button", {
    onClick: onLogout,
    style: {
      padding: "7px 14px",
      borderRadius: "10px",
      background: "rgba(255,255,255,0.1)",
      border: "1px solid rgba(255,255,255,0.2)",
      color: "white",
      fontWeight: "600",
      fontSize: "12px",
      cursor: "pointer"
    }
  }, "Cerrar sesión"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flex: 1,
      minHeight: 0
    }
  }, (!mobile || sidebarOpen) && /*#__PURE__*/React.createElement("nav", {
    style: {
      width: "210px",
      background: "#16213e",
      padding: "14px 10px",
      display: "flex",
      flexDirection: "column",
      gap: "2px",
      overflowY: "auto",
      flexShrink: 0,
      position: mobile ? "fixed" : "relative",
      inset: mobile ? "0 auto 0 0" : "auto",
      zIndex: mobile ? 200 : "auto",
      boxShadow: mobile ? "4px 0 20px rgba(0,0,0,0.4)" : "none"
    }
  }, mobile && /*#__PURE__*/React.createElement("button", {
    onClick: () => setSidebarOpen(false),
    style: {
      alignSelf: "flex-end",
      background: "rgba(255,255,255,0.1)",
      border: "none",
      borderRadius: "8px",
      width: "30px",
      height: "30px",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginBottom: "8px"
    }
  }, /*#__PURE__*/React.createElement(Ic, {
    d: I.x,
    size: 15,
    color: "white"
  })), adminNav.map(item => /*#__PURE__*/React.createElement("button", {
    key: item.id,
    onClick: () => {
      setSection(item.id);
      if (mobile) setSidebarOpen(false);
    },
    style: {
      display: "flex",
      alignItems: "center",
      gap: "9px",
      padding: "10px 12px",
      borderRadius: "12px",
      cursor: "pointer",
      background: section === item.id ? "rgba(26,107,138,0.4)" : "transparent",
      color: section === item.id ? "white" : "rgba(255,255,255,0.65)",
      fontSize: "13px",
      fontWeight: section === item.id ? "700" : "500",
      border: `1px solid ${section === item.id ? "rgba(26,107,138,0.6)" : "transparent"}`,
      width: "100%",
      textAlign: "left"
    }
  }, /*#__PURE__*/React.createElement(Ic, {
    d: item.icon,
    size: 16,
    color: section === item.id ? "white" : "rgba(255,255,255,0.45)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }, item.label), item.badge > 0 && /*#__PURE__*/React.createElement("span", {
    style: {
      background: C.crit,
      color: "white",
      borderRadius: "10px",
      padding: "2px 6px",
      fontSize: "10px",
      fontWeight: "800"
    }
  }, item.badge)))), mobile && sidebarOpen && /*#__PURE__*/React.createElement("div", {
    onClick: () => setSidebarOpen(false),
    style: {
      position: "fixed",
      inset: 0,
      background: "rgba(0,0,0,0.5)",
      zIndex: 199
    }
  }), /*#__PURE__*/React.createElement("main", {
    style: {
      flex: 1,
      overflow: "auto",
      padding: mobile ? "13px" : "24px",
      paddingBottom: mobile ? "80px" : "24px",
      background: C.g50
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "960px",
      margin: "0 auto"
    }
  }, content()))), mobile && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "fixed",
      bottom: 0,
      left: 0,
      right: 0,
      background: "#16213e",
      borderTop: "1px solid rgba(255,255,255,0.1)",
      display: "flex",
      zIndex: 50
    }
  }, adminNav.slice(0, 5).map(item => /*#__PURE__*/React.createElement("button", {
    key: item.id,
    onClick: () => setSection(item.id),
    style: {
      flex: 1,
      padding: "9px 4px 11px",
      border: "none",
      background: "transparent",
      cursor: "pointer",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "3px"
    }
  }, /*#__PURE__*/React.createElement(Ic, {
    d: item.icon,
    size: 20,
    color: section === item.id ? "white" : "rgba(255,255,255,0.45)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "10px",
      color: section === item.id ? "white" : "rgba(255,255,255,0.45)",
      fontWeight: section === item.id ? "700" : "400"
    }
  }, item.label.split(" ")[0]), item.badge > 0 && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: "4px",
      right: "4px",
      background: C.crit,
      color: "white",
      borderRadius: "10px",
      padding: "1px 4px",
      fontSize: "9px",
      fontWeight: "800"
    }
  }, item.badge))))));
}

// ─── ADMIN SECTION COMPONENTS ─────────────────────────────────────────────────
function AdminDashboard({
  activePats,
  urgentPats,
  noAccess,
  altaPats,
  patients,
  users,
  storedVisits,
  storedAlerts,
  setSection
}) {
  const ZONES_DATA = ZONES.map(z => ({
    ...z,
    count: activePats.filter(p => p.zone === z.id).length
  })).filter(z => z.count > 0);
  const PR_counts = {
    urgente: urgentPats.length,
    alta: activePats.filter(p => p.priority === "alta").length,
    normal: activePats.filter(p => p.priority === "normal").length
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "14px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: `linear-gradient(135deg,${C.priD},${C.pri})`,
      borderRadius: "16px",
      padding: "18px 20px",
      color: "white"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: "14px"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "0 0 2px",
      fontSize: "12px",
      opacity: 0.8
    }
  }, "Panel de Administración"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontSize: "18px",
      fontWeight: "800"
    }
  }, "CuidaEnCasa HAD · Barcelona 🏥")), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: "11px",
      opacity: 0.7
    }
  }, new Date().toLocaleDateString("es-ES", {
    weekday: "short",
    day: "numeric",
    month: "short"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(5,1fr)",
      gap: "8px"
    }
  }, [{
    l: "Activos",
    v: activePats.length,
    e: "👥"
  }, {
    l: "Urgentes",
    v: urgentPats.length,
    e: "🔴"
  }, {
    l: "Sin acceso",
    v: noAccess.length,
    e: "🔑"
  }, {
    l: "Altas",
    v: altaPats.length,
    e: "✅"
  }, {
    l: "Profesionales",
    v: users.filter(u => u.status === "activo" && u.role !== "admin").length,
    e: "🩺"
  }].map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      background: "rgba(255,255,255,0.15)",
      borderRadius: "10px",
      padding: "10px 6px",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "0 0 2px",
      fontSize: "18px"
    }
  }, s.e), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "0 0 1px",
      fontSize: "20px",
      fontWeight: "800"
    }
  }, s.v), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: "10px",
      opacity: 0.85
    }
  }, s.l))))), noAccess.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      background: C.warnL,
      border: `1px solid ${C.warn}30`,
      borderLeft: `4px solid ${C.warn}`,
      borderRadius: "12px",
      padding: "11px 16px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontWeight: "700",
      color: C.warn,
      fontSize: "13px"
    }
  }, "⚠️ ", noAccess.length, " paciente", noAccess.length > 1 ? "s" : "", " sin acceso a la app"), /*#__PURE__*/React.createElement(Btn, {
    onClick: () => setSection("pacientes"),
    color: C.warn,
    style: {
      fontSize: "12px",
      padding: "6px 12px"
    }
  }, "Gestionar")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "12px"
    }
  }, /*#__PURE__*/React.createElement(Card, {
    style: {
      marginBottom: 0
    }
  }, /*#__PURE__*/React.createElement(CTitle, {
    icon: I.map
  }, "Pacientes por zona"), ZONES_DATA.map(z => /*#__PURE__*/React.createElement("div", {
    key: z.id,
    style: {
      marginBottom: "10px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      marginBottom: "3px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "12px",
      fontWeight: "600"
    }
  }, z.emoji, " ", z.label), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "12px",
      fontWeight: "800",
      color: z.color
    }
  }, z.count)), /*#__PURE__*/React.createElement("div", {
    style: {
      height: "6px",
      background: C.g200,
      borderRadius: "3px",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: `${z.count / Math.max(activePats.length, 1) * 100}%`,
      height: "100%",
      background: z.color,
      borderRadius: "3px"
    }
  }))))), /*#__PURE__*/React.createElement(Card, {
    style: {
      marginBottom: 0
    }
  }, /*#__PURE__*/React.createElement(CTitle, {
    icon: I.alert
  }, "Por prioridad"), [{
    l: "🔴 Urgente",
    v: PR_counts.urgente,
    c: C.crit
  }, {
    l: "🟠 Alta",
    v: PR_counts.alta,
    c: C.warn
  }, {
    l: "🟢 Normal",
    v: PR_counts.normal,
    c: C.ok
  }].map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "9px 0",
      borderBottom: i < 2 ? `1px solid ${C.g100}` : "none"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "13px",
      fontWeight: "600"
    }
  }, s.l), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "8px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: "60px",
      height: "7px",
      background: C.g200,
      borderRadius: "4px",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: `${s.v / Math.max(activePats.length, 1) * 100}%`,
      height: "100%",
      background: s.c
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "14px",
      fontWeight: "800",
      color: s.c,
      minWidth: "20px"
    }
  }, s.v)))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "10px"
    }
  }, [{
    l: "➕ Alta de paciente",
    a: "alta",
    c: C.ok
  }, {
    l: "👥 Gestionar pacientes",
    a: "pacientes",
    c: C.pri
  }, {
    l: "🔍 Auditoría",
    a: "auditoria",
    c: C.ai
  }, {
    l: "📊 Reportes",
    a: "reportes",
    c: C.warn
  }].map((a, i) => /*#__PURE__*/React.createElement("button", {
    key: i,
    onClick: () => setSection(a.a),
    style: {
      padding: "13px",
      borderRadius: "12px",
      background: `${a.c}12`,
      border: `1px solid ${a.c}30`,
      color: a.c,
      fontWeight: "700",
      fontSize: "13px",
      cursor: "pointer",
      textAlign: "left"
    }
  }, a.l))));
}
function AdminPatientsPanel({
  patients,
  setPatients,
  users,
  section,
  setSection,
  dischargePatient,
  onCredentials,
  auditAdd,
  saved,
  setSaved
}) {
  const [showForm, setShowForm] = useState(section === "alta");
  const [editId, setEditId] = useState(null);
  const [filter, setFilter] = useState("");
  const [patForm, setPatForm] = useState({
    name: "",
    age: "",
    dx: "",
    addr: "",
    contact: "",
    doctor: "",
    nurse: "",
    zone: "north",
    priority: "normal",
    room: ""
  });
  const [errors, setErrors] = useState({});
  const savePatient = () => {
    const errs = {};
    if (!patForm.name.trim()) errs.name = "Nombre obligatorio";
    if (!patForm.dx.trim()) errs.dx = "Diagnóstico obligatorio";
    if (!patForm.doctor) errs.doctor = "Seleccione médico";
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    if (editId) {
      setPatients(p => p.map(x => x.id === editId ? {
        ...x,
        ...patForm
      } : x));
      auditAdd("edit_patient", `Datos actualizados: ${patForm.name}`, patForm.name);
    } else {
      const newPat = {
        ...patForm,
        id: Date.now(),
        status: "activo",
        access: true,
        familyAccess: false,
        admDate: new Date().toLocaleDateString("es-ES")
      };
      setPatients(p => [...p, newPat]);
      auditAdd("new_patient", `Alta de paciente: ${patForm.name}`, patForm.name);
      const user = patForm.name.split(" ")[0].toLowerCase() + Math.floor(Math.random() * 900 + 100);
      const pass = Math.random().toString(36).slice(2, 8).toUpperCase() + Math.floor(Math.random() * 90 + 10);
      onCredentials({
        user,
        pass,
        name: patForm.name
      });
    }
    setShowForm(false);
    setEditId(null);
    setErrors({});
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
    setSection("pacientes");
  };
  const filtered = patients.filter(p => !filter || p.name.toLowerCase().includes(filter.toLowerCase()) || p.dx.toLowerCase().includes(filter.toLowerCase()));
  const activeDocs = users.filter(u => u.role === "medico" && u.status === "activo");
  const activeNurses = users.filter(u => ["enfermero", "t_ocupacional", "fisioterapeuta", "trabajo_social"].includes(u.role) && u.status === "activo");
  return /*#__PURE__*/React.createElement("div", null, saved && /*#__PURE__*/React.createElement(SavedBanner, {
    msg: "✅ Paciente guardado correctamente"
  }), !showForm && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: "14px",
      flexWrap: "wrap",
      gap: "10px"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontSize: "18px",
      color: C.priD
    }
  }, "👥 Gestión de Pacientes"), /*#__PURE__*/React.createElement(Btn, {
    onClick: () => {
      setShowForm(true);
      setEditId(null);
      setPatForm({
        name: "",
        age: "",
        dx: "",
        addr: "",
        contact: "",
        doctor: "",
        nurse: "",
        zone: "north",
        priority: "normal",
        room: ""
      });
      setErrors({});
    }
  }, "➕ Nuevo paciente")), showForm && /*#__PURE__*/React.createElement(Card, {
    style: {
      marginBottom: "16px"
    }
  }, /*#__PURE__*/React.createElement(CTitle, {
    icon: I.user
  }, editId ? "✏️ Editar paciente" : "➕ Alta de paciente"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "12px",
      marginBottom: "14px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: "1/-1"
    }
  }, /*#__PURE__*/React.createElement(VInp, {
    label: "Nombre completo",
    required: true,
    error: errors.name,
    value: patForm.name,
    onChange: e => setPatForm({
      ...patForm,
      name: e.target.value
    })
  })), /*#__PURE__*/React.createElement(VInp, {
    label: "Edad",
    type: "number",
    value: patForm.age,
    onChange: e => setPatForm({
      ...patForm,
      age: e.target.value
    })
  }), /*#__PURE__*/React.createElement(VInp, {
    label: "Habitación HAD",
    value: patForm.room,
    onChange: e => setPatForm({
      ...patForm,
      room: e.target.value
    })
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: "1/-1"
    }
  }, /*#__PURE__*/React.createElement(VInp, {
    label: "Diagnóstico principal",
    required: true,
    error: errors.dx,
    value: patForm.dx,
    onChange: e => setPatForm({
      ...patForm,
      dx: e.target.value
    })
  })), /*#__PURE__*/React.createElement(VInp, {
    label: "Dirección",
    value: patForm.addr,
    onChange: e => setPatForm({
      ...patForm,
      addr: e.target.value
    })
  }), /*#__PURE__*/React.createElement(VInp, {
    label: "Contacto familiar",
    value: patForm.contact,
    onChange: e => setPatForm({
      ...patForm,
      contact: e.target.value
    })
  }), /*#__PURE__*/React.createElement(VSel, {
    label: "Médico responsable",
    required: true,
    error: errors.doctor,
    value: patForm.doctor,
    onChange: e => setPatForm({
      ...patForm,
      doctor: e.target.value
    })
  }, /*#__PURE__*/React.createElement("option", {
    value: ""
  }, "Seleccionar..."), activeDocs.map(d => /*#__PURE__*/React.createElement("option", {
    key: d.id
  }, d.name))), /*#__PURE__*/React.createElement(VSel, {
    label: "Profesional referencia",
    value: patForm.nurse,
    onChange: e => setPatForm({
      ...patForm,
      nurse: e.target.value
    })
  }, /*#__PURE__*/React.createElement("option", {
    value: ""
  }, "Seleccionar..."), activeNurses.map(n => /*#__PURE__*/React.createElement("option", {
    key: n.id
  }, n.name))), /*#__PURE__*/React.createElement(VSel, {
    label: "Zona",
    value: patForm.zone,
    onChange: e => setPatForm({
      ...patForm,
      zone: e.target.value
    })
  }, ZONES.map(z => /*#__PURE__*/React.createElement("option", {
    key: z.id,
    value: z.id
  }, z.label))), /*#__PURE__*/React.createElement(VSel, {
    label: "Prioridad",
    value: patForm.priority,
    onChange: e => setPatForm({
      ...patForm,
      priority: e.target.value
    })
  }, /*#__PURE__*/React.createElement("option", {
    value: "normal"
  }, "Normal"), /*#__PURE__*/React.createElement("option", {
    value: "alta"
  }, "Alta"), /*#__PURE__*/React.createElement("option", {
    value: "urgente"
  }, "Urgente"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "10px"
    }
  }, /*#__PURE__*/React.createElement(Btn, {
    onClick: savePatient
  }, "💾 ", editId ? "Guardar cambios" : "Dar de alta"), /*#__PURE__*/React.createElement("button", {
    onClick: () => {
      setShowForm(false);
      setEditId(null);
      setErrors({});
    },
    style: {
      padding: "11px 18px",
      borderRadius: "12px",
      border: `1px solid ${C.g200}`,
      background: C.w,
      cursor: "pointer",
      fontWeight: "600",
      fontSize: "13px"
    }
  }, "Cancelar"))), !showForm && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("input", {
    placeholder: "Buscar paciente...",
    value: filter,
    onChange: e => setFilter(e.target.value),
    style: {
      width: "100%",
      padding: "10px 14px",
      borderRadius: "12px",
      border: `2px solid ${C.g200}`,
      fontSize: "14px",
      outline: "none",
      marginBottom: "14px",
      boxSizing: "border-box"
    }
  }), filtered.map(p => {
    const pr = PR[p.priority] || PR.normal;
    const isAlta = p.status === "alta";
    return /*#__PURE__*/React.createElement("div", {
      key: p.id,
      style: {
        background: C.w,
        borderRadius: "14px",
        padding: "14px",
        boxShadow: "0 2px 9px rgba(0,0,0,0.06)",
        marginBottom: "10px",
        borderLeft: `4px solid ${pr.color}`,
        opacity: isAlta ? 0.65 : 1
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: "8px",
        marginBottom: "8px"
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
      style: {
        margin: "0 0 3px",
        fontWeight: "800",
        fontSize: "14px"
      }
    }, p.name), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: "0 0 4px",
        fontSize: "12px",
        color: C.txL
      }
    }, p.age, " años · ", p.dx), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: "6px",
        flexWrap: "wrap"
      }
    }, /*#__PURE__*/React.createElement(Badge, {
      label: pr.label,
      color: pr.color
    }), /*#__PURE__*/React.createElement(Badge, {
      label: p.room || "—",
      color: C.g400
    }), /*#__PURE__*/React.createElement(Badge, {
      label: p.access ? "✅ App" : "❌ Sin app",
      color: p.access ? C.ok : C.crit
    }), isAlta && /*#__PURE__*/React.createElement(Badge, {
      label: "Alta médica",
      color: C.g400
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: "7px",
        flexShrink: 0,
        flexWrap: "wrap"
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => {
        setPatForm({
          name: p.name,
          age: p.age || "",
          dx: p.dx || "",
          addr: p.addr || "",
          contact: p.contact || "",
          doctor: p.doctor || "",
          nurse: p.nurse || "",
          zone: p.zone || "north",
          priority: p.priority || "normal",
          room: p.room || ""
        });
        setEditId(p.id);
        setShowForm(true);
        setErrors({});
      },
      style: {
        padding: "7px 12px",
        borderRadius: "9px",
        background: C.g100,
        color: C.g800,
        border: `1px solid ${C.g200}`,
        fontWeight: "700",
        fontSize: "12px",
        cursor: "pointer"
      }
    }, "✏️ Editar"), !isAlta && /*#__PURE__*/React.createElement("button", {
      onClick: () => dischargePatient(p.id),
      style: {
        padding: "7px 12px",
        borderRadius: "9px",
        background: C.critL,
        color: C.crit,
        border: `1px solid ${C.crit}30`,
        fontWeight: "700",
        fontSize: "12px",
        cursor: "pointer"
      }
    }, "🏠 Dar de alta"), /*#__PURE__*/React.createElement("button", {
      onClick: () => {
        setPatients(prev => prev.map(x => x.id === p.id ? {
          ...x,
          access: !x.access
        } : x));
        auditAdd(p.access ? "access_revoke" : "access_grant", `Acceso ${p.access ? "revocado" : "activado"}: ${p.name}`, p.name);
      },
      style: {
        padding: "7px 12px",
        borderRadius: "9px",
        background: p.access ? C.critL : C.okL,
        color: p.access ? C.crit : C.ok,
        border: `1px solid ${p.access ? C.crit : C.ok}30`,
        fontWeight: "700",
        fontSize: "12px",
        cursor: "pointer"
      }
    }, p.access ? "🔒 Revocar" : "🔓 Activar"))), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        fontSize: "12px",
        color: C.txL
      }
    }, "🩺 ", p.doctor || "—", " · 💉 ", p.nurse || "—", " · 📞 ", p.contact || "—"));
  })));
}
function AdminTeamsPanel({
  patients,
  setPatients,
  users,
  auditAdd,
  saved,
  setSaved
}) {
  const activePats = patients.filter(p => p.status === "activo");
  const docs = users.filter(u => u.role === "medico" && u.status === "activo");
  const nurses = users.filter(u => ["enfermero", "t_ocupacional", "fisioterapeuta", "trabajo_social"].includes(u.role) && u.status === "activo");
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: "0 0 16px",
      fontSize: "18px",
      color: C.priD
    }
  }, "👥 Asignación de Equipos"), saved && /*#__PURE__*/React.createElement(SavedBanner, {
    msg: "✅ Asignación guardada y sincronizada correctamente"
  }), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("div", {
    style: {
      overflowX: "auto"
    }
  }, /*#__PURE__*/React.createElement("table", {
    style: {
      width: "100%",
      borderCollapse: "collapse",
      fontSize: "13px"
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", {
    style: {
      background: C.g50
    }
  }, ["Paciente", "Prioridad", "Médico responsable", "Profesional referencia"].map(h => /*#__PURE__*/React.createElement("th", {
    key: h,
    style: {
      padding: "10px 8px",
      textAlign: "left",
      color: C.g600,
      fontWeight: "700",
      borderBottom: `2px solid ${C.g100}`,
      whiteSpace: "nowrap"
    }
  }, h)))), /*#__PURE__*/React.createElement("tbody", null, activePats.map((p, i) => {
    const pr = PR[p.priority] || PR.normal;
    return /*#__PURE__*/React.createElement("tr", {
      key: p.id,
      style: {
        borderBottom: `1px solid ${C.g100}`
      }
    }, /*#__PURE__*/React.createElement("td", {
      style: {
        padding: "10px 8px"
      }
    }, /*#__PURE__*/React.createElement("p", {
      style: {
        margin: "0 0 2px",
        fontWeight: "700"
      }
    }, p.name), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        fontSize: "11px",
        color: C.txL
      }
    }, p.dx)), /*#__PURE__*/React.createElement("td", {
      style: {
        padding: "10px 8px"
      }
    }, /*#__PURE__*/React.createElement(Badge, {
      label: pr.label,
      color: pr.color
    })), /*#__PURE__*/React.createElement("td", {
      style: {
        padding: "10px 8px"
      }
    }, /*#__PURE__*/React.createElement("select", {
      value: p.doctor || "",
      onChange: e => {
        setPatients(prev => prev.map(x => x.id === p.id ? {
          ...x,
          doctor: e.target.value
        } : x));
        auditAdd("edit_patient", `Médico cambiado a ${e.target.value}`, p.name);
        setSaved(true);
        setTimeout(() => setSaved(false), 2500);
      },
      style: {
        padding: "6px 8px",
        borderRadius: "8px",
        border: `1px solid ${C.g200}`,
        fontSize: "12px",
        outline: "none",
        background: C.w
      }
    }, /*#__PURE__*/React.createElement("option", {
      value: ""
    }, "Sin asignar"), docs.map(d => /*#__PURE__*/React.createElement("option", {
      key: d.id
    }, d.name)))), /*#__PURE__*/React.createElement("td", {
      style: {
        padding: "10px 8px"
      }
    }, /*#__PURE__*/React.createElement("select", {
      value: p.nurse || "",
      onChange: e => {
        setPatients(prev => prev.map(x => x.id === p.id ? {
          ...x,
          nurse: e.target.value
        } : x));
        auditAdd("edit_patient", `Profesional cambiado a ${e.target.value}`, p.name);
        setSaved(true);
        setTimeout(() => setSaved(false), 2500);
      },
      style: {
        padding: "6px 8px",
        borderRadius: "8px",
        border: `1px solid ${C.g200}`,
        fontSize: "12px",
        outline: "none",
        background: C.w
      }
    }, /*#__PURE__*/React.createElement("option", {
      value: ""
    }, "Sin asignar"), nurses.map(n => /*#__PURE__*/React.createElement("option", {
      key: n.id
    }, n.name, " (", (ROLE_CFG[n.role] || {
      label: n.role
    }).label, ")")))));
  }))))));
}
function AdminUsersPanel({
  users,
  setUsers,
  auditAdd,
  saved,
  setSaved
}) {
  const [showForm, setShowForm] = useState(false);
  const [editId, setEditId] = useState(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    role: "enfermero",
    zone: "norte",
    status: "activo"
  });
  const saveUser = () => {
    if (!form.name.trim() || !form.email.trim()) return;
    if (editId) {
      setUsers(p => p.map(x => x.id === editId ? {
        ...x,
        ...form
      } : x));
    } else {
      setUsers(p => [...p, {
        ...form,
        id: Date.now(),
        patients: 0,
        lastLogin: "Nunca"
      }]);
      auditAdd("new_user", `Usuario creado: ${form.name}`, form.name);
    }
    setShowForm(false);
    setEditId(null);
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: "14px",
      flexWrap: "wrap",
      gap: "10px"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontSize: "18px",
      color: C.priD
    }
  }, "👤 Usuarios y Roles"), /*#__PURE__*/React.createElement(Btn, {
    onClick: () => {
      setShowForm(true);
      setEditId(null);
      setForm({
        name: "",
        email: "",
        role: "enfermero",
        zone: "norte",
        status: "activo"
      });
    }
  }, "➕ Nuevo usuario")), saved && /*#__PURE__*/React.createElement(SavedBanner, {
    msg: "✅ Usuario guardado"
  }), showForm && /*#__PURE__*/React.createElement(Card, {
    style: {
      marginBottom: "16px"
    }
  }, /*#__PURE__*/React.createElement(CTitle, {
    icon: I.user
  }, editId ? "✏️ Editar usuario" : "➕ Nuevo usuario"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "12px",
      marginBottom: "14px"
    }
  }, /*#__PURE__*/React.createElement(VInp, {
    label: "Nombre completo",
    required: true,
    value: form.name,
    onChange: e => setForm({
      ...form,
      name: e.target.value
    })
  }), /*#__PURE__*/React.createElement(VInp, {
    label: "Email",
    type: "email",
    required: true,
    value: form.email,
    onChange: e => setForm({
      ...form,
      email: e.target.value
    })
  }), /*#__PURE__*/React.createElement(VSel, {
    label: "Rol",
    value: form.role,
    onChange: e => setForm({
      ...form,
      role: e.target.value
    })
  }, /*#__PURE__*/React.createElement("option", {
    value: "admin"
  }, "🛡️ Administrador"), /*#__PURE__*/React.createElement("option", {
    value: "coordinador"
  }, "📋 Coordinador"), /*#__PURE__*/React.createElement("option", {
    value: "medico"
  }, "🩺 Médico"), /*#__PURE__*/React.createElement("option", {
    value: "enfermero"
  }, "💉 Enfermero/a"), /*#__PURE__*/React.createElement("option", {
    value: "t_ocupacional"
  }, "🧩 Terapeuta Ocupacional"), /*#__PURE__*/React.createElement("option", {
    value: "fisioterapeuta"
  }, "🏃 Fisioterapeuta"), /*#__PURE__*/React.createElement("option", {
    value: "trabajo_social"
  }, "🤝 Trabajadora Social")), /*#__PURE__*/React.createElement(VSel, {
    label: "Zona",
    value: form.zone,
    onChange: e => setForm({
      ...form,
      zone: e.target.value
    })
  }, ZONES.map(z => /*#__PURE__*/React.createElement("option", {
    key: z.id,
    value: z.id
  }, z.label)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "10px"
    }
  }, /*#__PURE__*/React.createElement(Btn, {
    onClick: saveUser
  }, "💾 Guardar"), /*#__PURE__*/React.createElement("button", {
    onClick: () => {
      setShowForm(false);
      setEditId(null);
    },
    style: {
      padding: "11px 18px",
      borderRadius: "12px",
      border: `1px solid ${C.g200}`,
      background: C.w,
      cursor: "pointer",
      fontWeight: "600",
      fontSize: "13px"
    }
  }, "Cancelar"))), users.map(u => {
    const rc = ROLE_CFG[u.role] || {
      label: u.role,
      color: C.g400,
      bg: C.g100,
      icon: "👤"
    };
    return /*#__PURE__*/React.createElement("div", {
      key: u.id,
      style: {
        background: C.w,
        borderRadius: "14px",
        padding: "14px",
        boxShadow: "0 2px 9px rgba(0,0,0,0.06)",
        marginBottom: "10px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "8px"
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: "8px",
        alignItems: "center",
        marginBottom: "4px"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: "18px"
      }
    }, rc.icon), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        fontWeight: "700",
        fontSize: "14px"
      }
    }, u.name), /*#__PURE__*/React.createElement(Badge, {
      label: rc.label,
      color: rc.color
    }), /*#__PURE__*/React.createElement(Badge, {
      label: u.status === "activo" ? "✅ Activo" : "❌ Inactivo",
      color: u.status === "activo" ? C.ok : C.crit
    })), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        fontSize: "12px",
        color: C.txL
      }
    }, u.email, " · Último acceso: ", u.lastLogin)), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: "7px"
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => {
        setForm({
          name: u.name,
          email: u.email,
          role: u.role,
          zone: u.zone || "norte",
          status: u.status
        });
        setEditId(u.id);
        setShowForm(true);
      },
      style: {
        padding: "7px 12px",
        borderRadius: "9px",
        background: C.g100,
        color: C.g800,
        border: `1px solid ${C.g200}`,
        fontWeight: "700",
        fontSize: "12px",
        cursor: "pointer"
      }
    }, "✏️ Editar"), /*#__PURE__*/React.createElement("button", {
      onClick: () => {
        setUsers(p => p.map(x => x.id === u.id ? {
          ...x,
          status: x.status === "activo" ? "inactivo" : "activo"
        } : x));
        auditAdd(u.status === "activo" ? "access_revoke" : "access_grant", `Usuario ${u.status === "activo" ? "desactivado" : "activado"}: ${u.name}`, u.name);
      },
      style: {
        padding: "7px 12px",
        borderRadius: "9px",
        background: u.status === "activo" ? C.critL : C.okL,
        color: u.status === "activo" ? C.crit : C.ok,
        border: `1px solid ${u.status === "activo" ? C.crit : C.ok}30`,
        fontWeight: "700",
        fontSize: "12px",
        cursor: "pointer"
      }
    }, u.status === "activo" ? "🔒 Desactivar" : "🔓 Activar")));
  }));
}
function AdminIncidentsPanel() {
  const [incidents, setIncidents] = useState([{
    id: 1,
    type: "Técnica",
    desc: "App lenta en móvil Android",
    status: "abierta",
    date: "18/04",
    priority: "media"
  }, {
    id: 2,
    type: "Clínica",
    desc: "Alerta no notificada a tiempo",
    status: "resuelta",
    date: "17/04",
    priority: "alta"
  }]);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({
    type: "Técnica",
    desc: "",
    priority: "media"
  });
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: "14px",
      flexWrap: "wrap",
      gap: "10px"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontSize: "18px",
      color: C.priD
    }
  }, "⚠️ Gestión de Incidencias"), /*#__PURE__*/React.createElement(Btn, {
    onClick: () => setShowForm(s => !s)
  }, "➕ Nueva incidencia")), showForm && /*#__PURE__*/React.createElement(Card, {
    style: {
      marginBottom: "14px"
    }
  }, /*#__PURE__*/React.createElement(CTitle, {
    icon: I.alert
  }, "Nueva incidencia"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "12px",
      marginBottom: "12px"
    }
  }, /*#__PURE__*/React.createElement(VSel, {
    label: "Tipo",
    value: form.type,
    onChange: e => setForm({
      ...form,
      type: e.target.value
    })
  }, ["Técnica", "Clínica", "Seguridad", "Comunicación", "Otro"].map(t => /*#__PURE__*/React.createElement("option", {
    key: t
  }, t))), /*#__PURE__*/React.createElement(VSel, {
    label: "Prioridad",
    value: form.priority,
    onChange: e => setForm({
      ...form,
      priority: e.target.value
    })
  }, /*#__PURE__*/React.createElement("option", {
    value: "alta"
  }, "Alta"), /*#__PURE__*/React.createElement("option", {
    value: "media"
  }, "Media"), /*#__PURE__*/React.createElement("option", {
    value: "baja"
  }, "Baja")), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: "1/-1"
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: {
      display: "block",
      fontSize: "12px",
      fontWeight: "600",
      color: C.g600,
      marginBottom: "4px"
    }
  }, "Descripción"), /*#__PURE__*/React.createElement("textarea", {
    value: form.desc,
    onChange: e => setForm({
      ...form,
      desc: e.target.value
    }),
    style: {
      width: "100%",
      padding: "10px",
      borderRadius: "10px",
      border: `2px solid ${C.g200}`,
      fontSize: "13px",
      outline: "none",
      minHeight: "80px",
      boxSizing: "border-box",
      resize: "vertical",
      fontFamily: "inherit"
    }
  }))), /*#__PURE__*/React.createElement(Btn, {
    onClick: () => {
      if (!form.desc.trim()) return;
      setIncidents(p => [{
        id: Date.now(),
        type: form.type,
        desc: form.desc,
        status: "abierta",
        date: new Date().toLocaleDateString("es-ES", {
          day: "2-digit",
          month: "2-digit"
        }),
        priority: form.priority
      }, ...p]);
      setShowForm(false);
      setForm({
        type: "Técnica",
        desc: "",
        priority: "media"
      });
    }
  }, "Registrar incidencia")), incidents.map(inc => {
    const col = inc.priority === "alta" ? C.crit : inc.priority === "media" ? C.warn : C.ok;
    return /*#__PURE__*/React.createElement("div", {
      key: inc.id,
      style: {
        background: C.w,
        borderRadius: "12px",
        padding: "13px",
        boxShadow: "0 2px 9px rgba(0,0,0,0.06)",
        marginBottom: "9px",
        borderLeft: `4px solid ${col}`,
        opacity: inc.status === "resuelta" ? 0.6 : 1
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: "6px",
        marginBottom: "5px"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: "7px",
        alignItems: "center"
      }
    }, /*#__PURE__*/React.createElement(Badge, {
      label: inc.type,
      color: col
    }), /*#__PURE__*/React.createElement(Badge, {
      label: inc.priority === "alta" ? "🔴 Alta" : inc.priority === "media" ? "🟡 Media" : "🟢 Baja",
      color: col
    }), /*#__PURE__*/React.createElement(Badge, {
      label: inc.status === "resuelta" ? "✅ Resuelta" : "🔓 Abierta",
      color: inc.status === "resuelta" ? C.ok : C.warn
    })), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: "11px",
        color: C.g400
      }
    }, inc.date)), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: "0 0 8px",
        fontSize: "13px",
        color: C.tx
      }
    }, inc.desc), inc.status !== "resuelta" && /*#__PURE__*/React.createElement("button", {
      onClick: () => setIncidents(p => p.map(x => x.id === inc.id ? {
        ...x,
        status: "resuelta"
      } : x)),
      style: {
        padding: "6px 12px",
        borderRadius: "8px",
        background: C.okL,
        color: C.ok,
        border: `1px solid ${C.ok}30`,
        fontWeight: "700",
        fontSize: "12px",
        cursor: "pointer"
      }
    }, "✅ Marcar resuelta"));
  }));
}
const LSection = ({
  title,
  children
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    marginBottom: "20px"
  }
}, /*#__PURE__*/React.createElement("p", {
  style: {
    margin: "0 0 8px",
    fontWeight: "800",
    fontSize: "15px",
    color: C.priD,
    borderBottom: `2px solid ${C.priL}`,
    paddingBottom: "6px"
  }
}, title), children);
const LBody = ({
  children
}) => /*#__PURE__*/React.createElement("p", {
  style: {
    margin: "0 0 8px",
    fontSize: "13px",
    color: C.tx,
    lineHeight: "1.7",
    textAlign: "justify"
  }
}, children);
const LBullet = ({
  children
}) => /*#__PURE__*/React.createElement("p", {
  style: {
    margin: "0 0 5px",
    fontSize: "13px",
    color: C.tx,
    lineHeight: "1.6",
    paddingLeft: "16px"
  }
}, "• ", children);
const LBold = ({
  children
}) => /*#__PURE__*/React.createElement("strong", {
  style: {
    color: C.priD
  }
}, children);
const LHigh = ({
  children,
  col = C.pri
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    background: col + "12",
    border: `1px solid ${col}30`,
    borderLeft: `4px solid ${col}`,
    borderRadius: "8px",
    padding: "10px 14px",
    marginBottom: "10px"
  }
}, /*#__PURE__*/React.createElement("p", {
  style: {
    margin: 0,
    fontSize: "12px",
    color: C.tx,
    lineHeight: "1.6"
  }
}, children));
const LTbl = ({
  rows
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    overflowX: "auto",
    marginBottom: "12px"
  }
}, /*#__PURE__*/React.createElement("table", {
  style: {
    width: "100%",
    borderCollapse: "collapse",
    fontSize: "12px"
  }
}, /*#__PURE__*/React.createElement("tbody", null, rows.map((row, i) => /*#__PURE__*/React.createElement("tr", {
  key: i,
  style: {
    background: i % 2 === 0 ? C.g50 : C.w
  }
}, row.map((cell, j) => /*#__PURE__*/React.createElement("td", {
  key: j,
  style: {
    padding: "8px 10px",
    border: `1px solid ${C.g200}`,
    verticalAlign: "top",
    fontWeight: j === 0 ? "700" : "400",
    color: j === 0 ? C.priD : C.tx
  }
}, cell)))))));
function PrivacyTab() {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(LHigh, {
    col: C.ok
  }, "✅ Política conforme al RGPD (UE 2016/679), LOPDGDD y Ley 41/2002 de Autonomía del Paciente."), /*#__PURE__*/React.createElement(LSection, {
    title: "¿Quién trata sus datos?"
  }, /*#__PURE__*/React.createElement(LBody, null, /*#__PURE__*/React.createElement(LBold, null, "CuidaEnCasa HAD, S.L."), " — Carrer de la Salut 1, 08001 Barcelona. DPO: ", /*#__PURE__*/React.createElement(LBold, null, "dpo@cuidaencasa.es"))), /*#__PURE__*/React.createElement(LSection, {
    title: "¿Qué datos y para qué?"
  }, /*#__PURE__*/React.createElement(LTbl, {
    rows: [["Datos identificativos", "Identificación del paciente en el sistema", "10 años (Ley 41/2002)"], ["Datos de salud (diagnósticos, constantes, medicación)", "Prestación de asistencia sanitaria domiciliaria", "10-20 años (historia clínica)"], ["Datos de contacto", "Gestión de visitas y comunicación", "5 años desde la baja"], ["Geolocalización del sanitario", "Gestión de rutas de visitas", "3 meses"], ["Logs de auditoría", "Seguridad y trazabilidad", "5 años (ENS)"], ["Token push notifications", "Alertas clínicas urgentes", "Hasta revocación"]]
  }), /*#__PURE__*/React.createElement(LBody, null, "Base legal principal: ", /*#__PURE__*/React.createElement(LBold, null, "Art. 9.2.h RGPD"), " (asistencia sanitaria).")), /*#__PURE__*/React.createElement(LSection, {
    title: "¿Con quién compartimos sus datos?"
  }, /*#__PURE__*/React.createElement(LHigh, {
    col: C.crit
  }, "⚠️ Sus datos de salud NO se venden ni ceden a terceros con fines comerciales."), /*#__PURE__*/React.createElement(LBullet, null, /*#__PURE__*/React.createElement(LBold, null, "Centro hospitalario de referencia:"), " continuidad asistencial al alta HAD."), /*#__PURE__*/React.createElement(LBullet, null, /*#__PURE__*/React.createElement(LBold, null, "Médico de Atención Primaria:"), " informe de evolución y alta."), /*#__PURE__*/React.createElement(LBullet, null, /*#__PURE__*/React.createElement(LBold, null, "Proveedores tecnológicos (Microsoft Azure):"), " como encargados con DPA firmado. Datos solo en la UE."), /*#__PURE__*/React.createElement(LBullet, null, /*#__PURE__*/React.createElement(LBold, null, "Autoridades competentes:"), " solo ante requerimiento judicial o administrativo.")), /*#__PURE__*/React.createElement(LSection, {
    title: "Transferencias internacionales"
  }, /*#__PURE__*/React.createElement(LBody, null, "No realizamos transferencias fuera del EEE. Datos alojados en España e Irlanda con garantía ", /*#__PURE__*/React.createElement(LBold, null, "EU Data Boundary"), " de Azure activada.")), /*#__PURE__*/React.createElement(LSection, {
    title: "Seguridad"
  }, /*#__PURE__*/React.createElement(LBullet, null, "Cifrado TLS 1.3 en tránsito y AES-256 en reposo."), /*#__PURE__*/React.createElement(LBullet, null, "MFA obligatoria para todos los profesionales sanitarios."), /*#__PURE__*/React.createElement(LBullet, null, "RBAC: solo su equipo asignado accede a sus datos."), /*#__PURE__*/React.createElement(LBullet, null, "Audit trail inmutable de todos los accesos."), /*#__PURE__*/React.createElement(LBullet, null, "Backups cifrados con prueba de restauración trimestral.")), /*#__PURE__*/React.createElement(LSection, {
    title: "Modificaciones"
  }, /*#__PURE__*/React.createElement(LBody, null, "Notificaremos cualquier cambio relevante con ", /*#__PURE__*/React.createElement(LBold, null, "30 días de antelación"), ". Si afecta a la base legal, se solicitará nueva aceptación.")));
}
function AvisoTab() {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(LSection, {
    title: "Datos del Responsable"
  }, /*#__PURE__*/React.createElement(LTbl, {
    rows: [["Denominación social", "CuidaEnCasa HAD, S.L."], ["CIF", "B-XXXXXXXXX"], ["Domicilio", "Carrer de la Salut 1, 08001 Barcelona"], ["Actividad", "Plataforma digital de Hospitalización a Domicilio (HAD)"], ["Contacto", "legal@cuidaencasa.es · 900 100 200"], ["DPO", "dpo@cuidaencasa.es"]]
  })), /*#__PURE__*/React.createElement(LSection, {
    title: "Objeto"
  }, /*#__PURE__*/React.createElement(LBody, null, "CuidaEnCasa HAD es una plataforma para la gestión de servicios de Hospitalización a Domicilio de atención intermedia, dirigida a pacientes, cuidadores y profesionales sanitarios."), /*#__PURE__*/React.createElement(LHigh, {
    col: C.crit
  }, "⚠️ Esta plataforma es complementaria a la asistencia presencial y nunca la sustituye. Ante urgencia médica llame al ", /*#__PURE__*/React.createElement(LBold, null, "112"), ".")), /*#__PURE__*/React.createElement(LSection, {
    title: "Propiedad intelectual"
  }, /*#__PURE__*/React.createElement(LBody, null, "Todos los contenidos, diseño, software e interfaces son propiedad de CuidaEnCasa HAD, S.L. Prohibida su reproducción sin autorización expresa.")), /*#__PURE__*/React.createElement(LSection, {
    title: "Ley aplicable"
  }, /*#__PURE__*/React.createElement(LBody, null, "Legislación española. Jurisdicción: Juzgados y Tribunales de Barcelona.")));
}
function CookiesTab() {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(LBody, null, "La versión web usa cookies conforme a la Ley 34/2002 (LSSI) y el RGPD."), /*#__PURE__*/React.createElement(LSection, {
    title: "Cookies utilizadas"
  }, /*#__PURE__*/React.createElement(LTbl, {
    rows: [["had_session", "Técnica", "Sesión", "Mantiene la sesión. No requiere consentimiento."], ["had_csrf", "Técnica", "Sesión", "Protección CSRF. No requiere consentimiento."], ["had_lang", "Preferencia", "1 año", "Idioma. Requiere consentimiento."], ["_ga, _gid", "Analítica (opcional)", "2 años", "Analítica anonimizada. Puede desactivarse."]]
  })), /*#__PURE__*/React.createElement(LSection, {
    title: "Gestión"
  }, /*#__PURE__*/React.createElement(LBody, null, "Desde ", /*#__PURE__*/React.createElement(LBold, null, "Ajustes → Privacidad → Gestionar cookies"), ". Las cookies técnicas no pueden desactivarse sin afectar al servicio.")));
}
function TermsTab() {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(LSection, {
    title: "Acceso y registro"
  }, /*#__PURE__*/React.createElement(LBullet, null, "Requiere validación previa por el administrador del servicio HAD."), /*#__PURE__*/React.createElement(LBullet, null, "Es responsable de mantener confidenciales sus credenciales."), /*#__PURE__*/React.createElement(LBullet, null, "Prohibido el acceso de menores de 14 años sin consentimiento de tutores legales.")), /*#__PURE__*/React.createElement(LSection, {
    title: "Uso aceptable"
  }, /*#__PURE__*/React.createElement(LBullet, null, "Introducir únicamente datos verídicos y actualizados."), /*#__PURE__*/React.createElement(LBullet, null, "No acceder a información de otros pacientes sin autorización."), /*#__PURE__*/React.createElement(LBullet, null, "No realizar ingeniería inversa ni modificar el software."), /*#__PURE__*/React.createElement(LBullet, null, "No compartir credenciales con terceros.")), /*#__PURE__*/React.createElement(LSection, {
    title: "Responsabilidad del personal sanitario"
  }, /*#__PURE__*/React.createElement(LHigh, {
    col: C.crit
  }, "⚠️ El acceso a datos de pacientes no asignados sin justificación clínica es infracción grave del RGPD — multa hasta 10M€ o 2% de la facturación global."), /*#__PURE__*/React.createElement(LBullet, null, "Actúa bajo responsabilidad profesional y deontológica propia."), /*#__PURE__*/React.createElement(LBullet, null, "Sujeto al secreto médico (Art. 7, Ley 44/2003 de Profesiones Sanitarias).")), /*#__PURE__*/React.createElement(LSection, {
    title: "Teleconsulta"
  }, /*#__PURE__*/React.createElement(LBullet, null, "Apoyo asistencial — no sustituye urgencias. Emergencias: ", /*#__PURE__*/React.createElement(LBold, null, "112"), "."), /*#__PURE__*/React.createElement(LBullet, null, "No se graba por defecto. La grabación requiere consentimiento explícito.")), /*#__PURE__*/React.createElement(LSection, {
    title: "Disponibilidad"
  }, /*#__PURE__*/React.createElement(LBody, null, "SLA ", /*#__PURE__*/React.createElement(LBold, null, "99,9%"), " — máximo 8,7 h de inactividad no planificada al año. Mantenimientos avisados con 48h de antelación.")));
}
function RightsTab() {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(LHigh, {
    col: C.ok
  }, "✅ Puede ejercer sus derechos desde la app o escribiendo a dpo@cuidaencasa.es. Respuesta en máximo 1 mes."), /*#__PURE__*/React.createElement(LSection, {
    title: "Sus derechos bajo el RGPD"
  }, /*#__PURE__*/React.createElement(LTbl, {
    rows: [["Acceso (Art. 15)", "Ver y descargar todos sus datos en PDF y HL7 FHIR desde 'Mi perfil'", "1 mes"], ["Rectificación (Art. 16)", "Corregir datos incorrectos desde la app o solicitando al DPO", "1 mes"], ["Supresión (Art. 17)", "Eliminación de datos (limitada por obligación legal de la historia clínica)", "Sin demora"], ["Portabilidad (Art. 20)", "Exportación en HL7 FHIR R4 desde 'Mi perfil'", "1 mes"], ["Limitación (Art. 18)", "Restringir determinados tratamientos", "Sin demora"], ["Oposición (Art. 21)", "Para analítica e investigación (no asistencial)", "Sin demora"], ["No decisión automatizada (Art. 22)", "Las alertas siempre son revisadas por un profesional", "—"]]
  })), /*#__PURE__*/React.createElement(LSection, {
    title: "Derechos bajo la Ley 41/2002"
  }, /*#__PURE__*/React.createElement(LBullet, null, /*#__PURE__*/React.createElement(LBold, null, "Información asistencial:"), " sección 'Mi evolución' en lenguaje comprensible."), /*#__PURE__*/React.createElement(LBullet, null, /*#__PURE__*/React.createElement(LBold, null, "Confidencialidad:"), " solo su equipo asignado accede a sus datos."), /*#__PURE__*/React.createElement(LBullet, null, /*#__PURE__*/React.createElement(LBold, null, "Consentimiento informado:"), " granular y revocable en cualquier momento."), /*#__PURE__*/React.createElement(LBullet, null, /*#__PURE__*/React.createElement(LBold, null, "Designar representante:"), " familiar/cuidador con acceso 'Vista Familiar'.")), /*#__PURE__*/React.createElement(LSection, {
    title: "¿Cómo reclamar?"
  }, /*#__PURE__*/React.createElement(LBullet, null, "DPO: dpo@cuidaencasa.es"), /*#__PURE__*/React.createElement(LBullet, null, "En app: Ajustes → Privacidad → Contactar con el DPO"), /*#__PURE__*/React.createElement(LBullet, null, "AEPD: www.aepd.es · 901 100 099"), /*#__PURE__*/React.createElement(LBullet, null, "APDCAT (Cataluña): www.apdcat.cat")));
}
function LegalModal({
  onClose,
  initialTab = "privacidad"
}) {
  const [tab, setTab] = useState(initialTab);
  const tabs = [{
    id: "privacidad",
    label: "🔒 Privacidad"
  }, {
    id: "aviso",
    label: "⚖️ Aviso Legal"
  }, {
    id: "cookies",
    label: "🍪 Cookies"
  }, {
    id: "terminos",
    label: "📋 Términos"
  }, {
    id: "derechos",
    label: "👤 Derechos"
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "fixed",
      inset: 0,
      background: "rgba(0,0,0,0.65)",
      zIndex: 2000,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "16px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: C.w,
      borderRadius: "20px",
      maxWidth: "660px",
      width: "100%",
      maxHeight: "90vh",
      display: "flex",
      flexDirection: "column",
      boxShadow: "0 24px 60px rgba(0,0,0,0.3)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: `linear-gradient(135deg,${C.priD},${C.pri})`,
      padding: "18px 22px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "0 0 2px",
      color: "white",
      fontWeight: "800",
      fontSize: "16px"
    }
  }, "🏥 CuidaEnCasa HAD · Información Legal"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      color: "rgba(255,255,255,0.75)",
      fontSize: "12px"
    }
  }, "RGPD · LOPDGDD · Ley 41/2002 · LSSI")), /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    style: {
      background: "rgba(255,255,255,0.2)",
      border: "none",
      borderRadius: "8px",
      width: "32px",
      height: "32px",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(Ic, {
    d: I.x,
    size: 16,
    color: "white"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      overflowX: "auto",
      borderBottom: `1px solid ${C.g200}`,
      flexShrink: 0,
      background: C.g50
    }
  }, tabs.map(t => /*#__PURE__*/React.createElement("button", {
    key: t.id,
    onClick: () => setTab(t.id),
    style: {
      padding: "11px 14px",
      border: "none",
      borderBottom: `3px solid ${tab === t.id ? C.pri : "transparent"}`,
      background: "transparent",
      color: tab === t.id ? C.pri : C.g600,
      fontWeight: tab === t.id ? "700" : "500",
      fontSize: "12px",
      cursor: "pointer",
      whiteSpace: "nowrap"
    }
  }, t.label))), /*#__PURE__*/React.createElement("div", {
    style: {
      overflowY: "auto",
      padding: "22px",
      flex: 1
    }
  }, tab === "privacidad" && /*#__PURE__*/React.createElement(PrivacyTab, null), tab === "aviso" && /*#__PURE__*/React.createElement(AvisoTab, null), tab === "cookies" && /*#__PURE__*/React.createElement(CookiesTab, null), tab === "terminos" && /*#__PURE__*/React.createElement(TermsTab, null), tab === "derechos" && /*#__PURE__*/React.createElement(RightsTab, null)), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "12px 22px",
      borderTop: `1px solid ${C.g100}`,
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      flexShrink: 0,
      background: C.g50
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: "11px",
      color: C.g400
    }
  }, "v1.0 · ", new Date().toLocaleDateString("es-ES", {
    day: "numeric",
    month: "long",
    year: "numeric"
  })), /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    style: {
      padding: "8px 20px",
      borderRadius: "10px",
      background: C.pri,
      color: "white",
      border: "none",
      cursor: "pointer",
      fontWeight: "700",
      fontSize: "13px"
    }
  }, "Cerrar"))));
}
function ConsentScreen({
  onAccept
}) {
  const [checks, setChecks] = useState({
    privacy: false,
    family: false,
    notifs: false
  });
  const [showLegal, setShowLegal] = useState(false);
  const ok = checks.privacy;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: "100vh",
      background: `linear-gradient(135deg,${C.priD},${C.pri})`,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "20px",
      fontFamily: "'Georgia','Times New Roman',serif"
    }
  }, showLegal && /*#__PURE__*/React.createElement(LegalModal, {
    onClose: () => setShowLegal(false)
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      background: C.w,
      borderRadius: "24px",
      maxWidth: "500px",
      width: "100%",
      boxShadow: "0 24px 60px rgba(0,0,0,0.3)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: `linear-gradient(135deg,${C.priD},${C.pri})`,
      padding: "24px",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: "60px",
      height: "60px",
      background: "rgba(255,255,255,0.15)",
      borderRadius: "16px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      margin: "0 auto 12px",
      fontSize: "26px"
    }
  }, "🔒"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "0 0 4px",
      color: "white",
      fontWeight: "800",
      fontSize: "19px"
    }
  }, "Consentimiento informado"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      color: "rgba(255,255,255,0.8)",
      fontSize: "12px"
    }
  }, "Tratamiento de datos de salud · RGPD Art. 9.2.h · v1.0")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "22px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: C.priL,
      border: `1px solid ${C.pri}30`,
      borderRadius: "12px",
      padding: "13px 15px",
      marginBottom: "18px"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "0 0 6px",
      fontWeight: "800",
      fontSize: "13px",
      color: C.priD
    }
  }, "ℹ️ Antes de continuar necesitamos su autorización"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: "12px",
      color: C.tx,
      lineHeight: "1.7"
    }
  }, /*#__PURE__*/React.createElement("strong", null, "CuidaEnCasa HAD"), " tratará sus datos de salud (diagnósticos, constantes vitales, medicación y notas clínicas) para prestarle el servicio de Hospitalización a Domicilio. Base legal: Art. 9.2.h RGPD. Datos conservados mínimo 10 años (Ley 41/2002) en servidores UE.")), [{
    key: "privacy",
    req: true,
    col: C.pri,
    text: "He leído y acepto la Política de Privacidad y consiento expresamente el tratamiento de mis datos de salud para la prestación del servicio HAD."
  }, {
    key: "family",
    req: false,
    col: C.ok,
    text: "Autorizo el acceso de mi familiar/cuidador designado a mi información clínica (opcional)."
  }, {
    key: "notifs",
    req: false,
    col: C.ok,
    text: "Acepto recibir notificaciones push sobre alertas clínicas urgentes (opcional pero recomendado)."
  }].map(opt => /*#__PURE__*/React.createElement("div", {
    key: opt.key,
    onClick: () => setChecks(p => ({
      ...p,
      [opt.key]: !p[opt.key]
    })),
    style: {
      display: "flex",
      gap: "11px",
      alignItems: "flex-start",
      padding: "12px",
      borderRadius: "12px",
      marginBottom: "9px",
      background: checks[opt.key] ? opt.col + "10" : C.g50,
      border: `1.5px solid ${checks[opt.key] ? opt.col : C.g200}`,
      cursor: "pointer",
      transition: "all 0.15s"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: "22px",
      height: "22px",
      borderRadius: "6px",
      border: `2px solid ${checks[opt.key] ? opt.col : C.g200}`,
      background: checks[opt.key] ? opt.col : C.w,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0,
      marginTop: "1px"
    }
  }, checks[opt.key] && /*#__PURE__*/React.createElement(Ic, {
    d: I.check,
    size: 13,
    color: "white"
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: "12px",
      color: C.tx,
      lineHeight: "1.6"
    }
  }, opt.req && /*#__PURE__*/React.createElement("span", {
    style: {
      color: opt.col,
      fontWeight: "700"
    }
  }, "* "), opt.text))), /*#__PURE__*/React.createElement("button", {
    onClick: () => setShowLegal(true),
    style: {
      background: "transparent",
      border: "none",
      color: C.pri,
      fontSize: "12px",
      fontWeight: "700",
      cursor: "pointer",
      padding: "0 0 14px",
      textDecoration: "underline"
    }
  }, "📄 Leer Política de Privacidad completa →"), !ok && /*#__PURE__*/React.createElement("div", {
    style: {
      background: C.critL,
      border: `1px solid ${C.crit}30`,
      borderRadius: "8px",
      padding: "8px 12px",
      marginBottom: "12px"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: "12px",
      color: C.crit,
      fontWeight: "600"
    }
  }, "⚠️ Debe aceptar la Política de Privacidad para continuar (campo obligatorio *).")), /*#__PURE__*/React.createElement("button", {
    onClick: () => ok && onAccept(checks),
    disabled: !ok,
    style: {
      width: "100%",
      padding: "13px",
      borderRadius: "12px",
      background: ok ? `linear-gradient(135deg,${C.pri},${C.priD})` : C.g200,
      color: "white",
      fontWeight: "700",
      fontSize: "14px",
      border: "none",
      cursor: ok ? "pointer" : "not-allowed",
      marginBottom: "10px"
    }
  }, "✅ Aceptar y entrar"), /*#__PURE__*/React.createElement("p", {
    style: {
      textAlign: "center",
      fontSize: "11px",
      color: C.g400,
      margin: "0 0 4px"
    }
  }, "Puede revocar su consentimiento en Ajustes → Privacidad"), /*#__PURE__*/React.createElement("p", {
    style: {
      textAlign: "center",
      fontSize: "10px",
      color: C.g400,
      margin: 0
    }
  }, "Su consentimiento queda registrado conforme al Art. 7.1 RGPD · Retención: duración del servicio + 5 años"))));
}
function LoginScreen({
  onLogin
}) {
  const [role, setRole] = useState("patient");
  const [legalTab, setLegalTab] = useState(null);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: "100vh",
      background: `linear-gradient(135deg,${C.priD},${C.pri} 50%,#2A8BB0)`,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "20px"
    }
  }, legalTab && /*#__PURE__*/React.createElement(LegalModal, {
    onClose: () => setLegalTab(null),
    initialTab: legalTab
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      background: C.w,
      borderRadius: "24px",
      maxWidth: "420px",
      width: "100%",
      boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: `linear-gradient(135deg,${C.priD},${C.pri})`,
      padding: "28px 24px",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: "72px",
      height: "72px",
      background: "rgba(255,255,255,0.15)",
      borderRadius: "20px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      margin: "0 auto 14px",
      fontSize: "32px"
    }
  }, "🏥"), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: "0 0 6px",
      color: "white",
      fontSize: "24px",
      fontWeight: "800"
    }
  }, "CuidaEnCasa HAD"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      color: "rgba(255,255,255,0.8)",
      fontSize: "13px"
    }
  }, "Hospitalización a Domicilio")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "24px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr 1fr",
      gap: "8px",
      marginBottom: "20px"
    }
  }, [["patient", "👤", "Paciente"], ["staff", "🩺", "Sanitario"], ["admin", "🛡️", "Admin"]].map(([r, e, l]) => /*#__PURE__*/React.createElement("button", {
    key: r,
    onClick: () => setRole(r),
    style: {
      padding: "12px 8px",
      borderRadius: "12px",
      border: `2px solid ${role === r ? C.pri : C.g200}`,
      background: role === r ? C.priL : C.g50,
      cursor: "pointer",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "0 0 4px",
      fontSize: "20px"
    }
  }, e), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: "12px",
      fontWeight: "700",
      color: role === r ? C.pri : C.g600
    }
  }, l)))), /*#__PURE__*/React.createElement(Btn, {
    onClick: () => onLogin(role),
    style: {
      width: "100%",
      justifyContent: "center",
      padding: "14px",
      fontSize: "16px"
    }
  }, "Entrar como ", ["patient", "staff", "admin"].indexOf(role) >= 0 ? ["Paciente", "Sanitario", "Administrador"][["patient", "staff", "admin"].indexOf(role)] : role), /*#__PURE__*/React.createElement("p", {
    style: {
      textAlign: "center",
      fontSize: "12px",
      color: C.g400,
      marginTop: "12px"
    }
  }, "Demo · Sin contraseña requerida"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "12px",
      justifyContent: "center",
      marginTop: "8px"
    }
  }, ["privacidad", "aviso", "terminos"].map((t, i) => /*#__PURE__*/React.createElement("button", {
    key: i,
    onClick: () => setLegalTab(t),
    style: {
      background: "transparent",
      border: "none",
      color: C.g400,
      fontSize: "11px",
      cursor: "pointer",
      textDecoration: "underline",
      padding: 0
    }
  }, ["Privacidad", "Aviso Legal", "Términos"][i]))))));
}
export default function App() {
  const [session, setSession] = useState(null);
  const [needConsent, setNeedConsent] = useState(false);
  const [pendingRole, setPendingRole] = useState(null);
  useEffect(() => {
    const cleanup = injectPWAManifest();
    registerServiceWorker();
    return cleanup;
  }, []);
  const handleLogin = role => {
    if (role === "patient") {
      const consented = localStorage.getItem("had_consented");
      if (!consented) {
        setPendingRole(role);
        setNeedConsent(true);
        return;
      }
    }
    setSession(role);
  };
  const handleConsent = checks => {
    try {
      localStorage.setItem("had_consented", JSON.stringify({
        ...checks,
        ts: new Date().toISOString(),
        consentVersion: "1.0",
        legalBasis: "Art. 9.2.h RGPD",
        retentionPeriod: "Duración del servicio + 5 años"
      }));
    } catch (e) {}
    setNeedConsent(false);
    setSession(pendingRole);
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, needConsent && /*#__PURE__*/React.createElement(ConsentScreen, {
    onAccept: handleConsent
  }), !needConsent && !session && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(GlobalStyle, {
    dark: false
  }), /*#__PURE__*/React.createElement(LoginScreen, {
    onLogin: handleLogin
  })), !needConsent && session === "patient" && /*#__PURE__*/React.createElement(PatientApp, {
    onLogout: () => setSession(null)
  }), !needConsent && session === "staff" && /*#__PURE__*/React.createElement(StaffApp, {
    onLogout: () => setSession(null)
  }), !needConsent && session === "admin" && /*#__PURE__*/React.createElement(AdminApp, {
    onLogout: () => setSession(null)
  }));
}

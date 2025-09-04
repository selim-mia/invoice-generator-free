// src/InvoiceGenerator.jsx
import React, { useMemo, useRef, useState, useEffect } from "react";
import { Download, Plus, Trash2, Printer, FileSignature, Upload, RefreshCw, History } from "lucide-react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import QRCode from "qrcode.react";
/* JsBarcode ডায়নামিক ইমপোর্ট করব */
//
// import JsBarcode from "jsbarcode";

/* ========== Countries & Currencies (ISO-like; common use) ========== */
const COUNTRY_CURRENCY = [
  { country: "Afghanistan", code: "AF", currency: "AFN" },
  { country: "Albania", code: "AL", currency: "ALL" },
  { country: "Algeria", code: "DZ", currency: "DZD" },
  { country: "Andorra", code: "AD", currency: "EUR" },
  { country: "Angola", code: "AO", currency: "AOA" },
  { country: "Antigua and Barbuda", code: "AG", currency: "XCD" },
  { country: "Argentina", code: "AR", currency: "ARS" },
  { country: "Armenia", code: "AM", currency: "AMD" },
  { country: "Australia", code: "AU", currency: "AUD" },
  { country: "Austria", code: "AT", currency: "EUR" },
  { country: "Azerbaijan", code: "AZ", currency: "AZN" },
  { country: "Bahamas", code: "BS", currency: "BSD" },
  { country: "Bahrain", code: "BH", currency: "BHD" },
  { country: "Bangladesh", code: "BD", currency: "BDT" },
  { country: "Barbados", code: "BB", currency: "BBD" },
  { country: "Belarus", code: "BY", currency: "BYN" },
  { country: "Belgium", code: "BE", currency: "EUR" },
  { country: "Belize", code: "BZ", currency: "BZD" },
  { country: "Benin", code: "BJ", currency: "XOF" },
  { country: "Bhutan", code: "BT", currency: "BTN" },
  { country: "Bolivia", code: "BO", currency: "BOB" },
  { country: "Bosnia and Herzegovina", code: "BA", currency: "BAM" },
  { country: "Botswana", code: "BW", currency: "BWP" },
  { country: "Brazil", code: "BR", currency: "BRL" },
  { country: "Brunei", code: "BN", currency: "BND" },
  { country: "Bulgaria", code: "BG", currency: "BGN" },
  { country: "Burkina Faso", code: "BF", currency: "XOF" },
  { country: "Burundi", code: "BI", currency: "BIF" },
  { country: "Cabo Verde", code: "CV", currency: "CVE" },
  { country: "Cambodia", code: "KH", currency: "KHR" },
  { country: "Cameroon", code: "CM", currency: "XAF" },
  { country: "Canada", code: "CA", currency: "CAD" },
  { country: "Central African Republic", code: "CF", currency: "XAF" },
  { country: "Chad", code: "TD", currency: "XAF" },
  { country: "Chile", code: "CL", currency: "CLP" },
  { country: "China", code: "CN", currency: "CNY" },
  { country: "Colombia", code: "CO", currency: "COP" },
  { country: "Comoros", code: "KM", currency: "KMF" },
  { country: "Congo (Republic)", code: "CG", currency: "XAF" },
  { country: "Congo (DRC)", code: "CD", currency: "CDF" },
  { country: "Costa Rica", code: "CR", currency: "CRC" },
  { country: "Côte d’Ivoire", code: "CI", currency: "XOF" },
  { country: "Croatia", code: "HR", currency: "EUR" },
  { country: "Cuba", code: "CU", currency: "CUP" },
  { country: "Cyprus", code: "CY", currency: "EUR" },
  { country: "Czechia", code: "CZ", currency: "CZK" },
  { country: "Denmark", code: "DK", currency: "DKK" },
  { country: "Djibouti", code: "DJ", currency: "DJF" },
  { country: "Dominica", code: "DM", currency: "XCD" },
  { country: "Dominican Republic", code: "DO", currency: "DOP" },
  { country: "Ecuador", code: "EC", currency: "USD" },
  { country: "Egypt", code: "EG", currency: "EGP" },
  { country: "El Salvador", code: "SV", currency: "USD" },
  { country: "Equatorial Guinea", code: "GQ", currency: "XAF" },
  { country: "Eritrea", code: "ER", currency: "ERN" },
  { country: "Estonia", code: "EE", currency: "EUR" },
  { country: "Eswatini", code: "SZ", currency: "SZL" },
  { country: "Ethiopia", code: "ET", currency: "ETB" },
  { country: "Fiji", code: "FJ", currency: "FJD" },
  { country: "Finland", code: "FI", currency: "EUR" },
  { country: "France", code: "FR", currency: "EUR" },
  { country: "Gabon", code: "GA", currency: "XAF" },
  { country: "Gambia", code: "GM", currency: "GMD" },
  { country: "Georgia", code: "GE", currency: "GEL" },
  { country: "Germany", code: "DE", currency: "EUR" },
  { country: "Ghana", code: "GH", currency: "GHS" },
  { country: "Greece", code: "GR", currency: "EUR" },
  { country: "Grenada", code: "GD", currency: "XCD" },
  { country: "Guatemala", code: "GT", currency: "GTQ" },
  { country: "Guinea", code: "GN", currency: "GNF" },
  { country: "Guinea-Bissau", code: "GW", currency: "XOF" },
  { country: "Guyana", code: "GY", currency: "GYD" },
  { country: "Haiti", code: "HT", currency: "HTG" },
  { country: "Honduras", code: "HN", currency: "HNL" },
  { country: "Hungary", code: "HU", currency: "HUF" },
  { country: "Iceland", code: "IS", currency: "ISK" },
  { country: "India", code: "IN", currency: "INR" },
  { country: "Indonesia", code: "ID", currency: "IDR" },
  { country: "Iran", code: "IR", currency: "IRR" },
  { country: "Iraq", code: "IQ", currency: "IQD" },
  { country: "Ireland", code: "IE", currency: "EUR" },
  { country: "Israel", code: "IL", currency: "ILS" },
  { country: "Italy", code: "IT", currency: "EUR" },
  { country: "Jamaica", code: "JM", currency: "JMD" },
  { country: "Japan", code: "JP", currency: "JPY" },
  { country: "Jordan", code: "JO", currency: "JOD" },
  { country: "Kazakhstan", code: "KZ", currency: "KZT" },
  { country: "Kenya", code: "KE", currency: "KES" },
  { country: "Kiribati", code: "KI", currency: "AUD" },
  { country: "Kuwait", code: "KW", currency: "KWD" },
  { country: "Kyrgyzstan", code: "KG", currency: "KGS" },
  { country: "Laos", code: "LA", currency: "LAK" },
  { country: "Latvia", code: "LV", currency: "EUR" },
  { country: "Lebanon", code: "LB", currency: "LBP" },
  { country: "Lesotho", code: "LS", currency: "LSL" },
  { country: "Liberia", code: "LR", currency: "LRD" },
  { country: "Libya", code: "LY", currency: "LYD" },
  { country: "Liechtenstein", code: "LI", currency: "CHF" },
  { country: "Lithuania", code: "LT", currency: "EUR" },
  { country: "Luxembourg", code: "LU", currency: "EUR" },
  { country: "Madagascar", code: "MG", currency: "MGA" },
  { country: "Malawi", code: "MW", currency: "MWK" },
  { country: "Malaysia", code: "MY", currency: "MYR" },
  { country: "Maldives", code: "MV", currency: "MVR" },
  { country: "Mali", code: "ML", currency: "XOF" },
  { country: "Malta", code: "MT", currency: "EUR" },
  { country: "Marshall Islands", code: "MH", currency: "USD" },
  { country: "Mauritania", code: "MR", currency: "MRU" },
  { country: "Mauritius", code: "MU", currency: "MUR" },
  { country: "Mexico", code: "MX", currency: "MXN" },
  { country: "Micronesia", code: "FM", currency: "USD" },
  { country: "Moldova", code: "MD", currency: "MDL" },
  { country: "Monaco", code: "MC", currency: "EUR" },
  { country: "Mongolia", code: "MN", currency: "MNT" },
  { country: "Montenegro", code: "ME", currency: "EUR" },
  { country: "Morocco", code: "MA", currency: "MAD" },
  { country: "Mozambique", code: "MZ", currency: "MZN" },
  { country: "Myanmar", code: "MM", currency: "MMK" },
  { country: "Namibia", code: "NA", currency: "NAD" },
  { country: "Nauru", code: "NR", currency: "AUD" },
  { country: "Nepal", code: "NP", currency: "NPR" },
  { country: "Netherlands", code: "NL", currency: "EUR" },
  { country: "New Zealand", code: "NZ", currency: "NZD" },
  { country: "Nicaragua", code: "NI", currency: "NIO" },
  { country: "Niger", code: "NE", currency: "XOF" },
  { country: "Nigeria", code: "NG", currency: "NGN" },
  { country: "North Macedonia", code: "MK", currency: "MKD" },
  { country: "Norway", code: "NO", currency: "NOK" },
  { country: "Oman", code: "OM", currency: "OMR" },
  { country: "Pakistan", code: "PK", currency: "PKR" },
  { country: "Palau", code: "PW", currency: "USD" },
  { country: "Panama", code: "PA", currency: "PAB" },
  { country: "Papua New Guinea", code: "PG", currency: "PGK" },
  { country: "Paraguay", code: "PY", currency: "PYG" },
  { country: "Peru", code: "PE", currency: "PEN" },
  { country: "Philippines", code: "PH", currency: "PHP" },
  { country: "Poland", code: "PL", currency: "PLN" },
  { country: "Portugal", code: "PT", currency: "EUR" },
  { country: "Qatar", code: "QA", currency: "QAR" },
  { country: "Romania", code: "RO", currency: "RON" },
  { country: "Russia", code: "RU", currency: "RUB" },
  { country: "Rwanda", code: "RW", currency: "RWF" },
  { country: "Saint Kitts and Nevis", code: "KN", currency: "XCD" },
  { country: "Saint Lucia", code: "LC", currency: "XCD" },
  { country: "Saint Vincent and the Grenadines", code: "VC", currency: "XCD" },
  { country: "Samoa", code: "WS", currency: "WST" },
  { country: "San Marino", code: "SM", currency: "EUR" },
  { country: "Sao Tome and Principe", code: "ST", currency: "STN" },
  { country: "Saudi Arabia", code: "SA", currency: "SAR" },
  { country: "Senegal", code: "SN", currency: "XOF" },
  { country: "Serbia", code: "RS", currency: "RSD" },
  { country: "Seychelles", code: "SC", currency: "SCR" },
  { country: "Sierra Leone", code: "SL", currency: "SLE" },
  { country: "Singapore", code: "SG", currency: "SGD" },
  { country: "Slovakia", code: "SK", currency: "EUR" },
  { country: "Slovenia", code: "SI", currency: "EUR" },
  { country: "Solomon Islands", code: "SB", currency: "SBD" },
  { country: "Somalia", code: "SO", currency: "SOS" },
  { country: "South Africa", code: "ZA", currency: "ZAR" },
  { country: "South Korea", code: "KR", currency: "KRW" },
  { country: "South Sudan", code: "SS", currency: "SSP" },
  { country: "Spain", code: "ES", currency: "EUR" },
  { country: "Sri Lanka", code: "LK", currency: "LKR" },
  { country: "Sudan", code: "SD", currency: "SDG" },
  { country: "Suriname", code: "SR", currency: "SRD" },
  { country: "Sweden", code: "SE", currency: "SEK" },
  { country: "Switzerland", code: "CH", currency: "CHF" },
  { country: "Syria", code: "SY", currency: "SYP" },
  { country: "Taiwan", code: "TW", currency: "TWD" },
  { country: "Tajikistan", code: "TJ", currency: "TJS" },
  { country: "Tanzania", code: "TZ", currency: "TZS" },
  { country: "Thailand", code: "TH", currency: "THB" },
  { country: "Timor-Leste", code: "TL", currency: "USD" },
  { country: "Togo", code: "TG", currency: "XOF" },
  { country: "Tonga", code: "TO", currency: "TOP" },
  { country: "Trinidad and Tobago", code: "TT", currency: "TTD" },
  { country: "Tunisia", code: "TN", currency: "TND" },
  { country: "Turkey", code: "TR", currency: "TRY" },
  { country: "Turkmenistan", code: "TM", currency: "TMT" },
  { country: "Tuvalu", code: "TV", currency: "AUD" },
  { country: "Uganda", code: "UG", currency: "UGX" },
  { country: "Ukraine", code: "UA", currency: "UAH" },
  { country: "United Arab Emirates", code: "AE", currency: "AED" },
  { country: "United Kingdom", code: "GB", currency: "GBP" },
  { country: "United States", code: "US", currency: "USD" },
  { country: "Uruguay", code: "UY", currency: "UYU" },
  { country: "Uzbekistan", code: "UZ", currency: "UZS" },
  { country: "Vanuatu", code: "VU", currency: "VUV" },
  { country: "Vatican City", code: "VA", currency: "EUR" },
  { country: "Venezuela", code: "VE", currency: "VES" },
  { country: "Vietnam", code: "VN", currency: "VND" },
  { country: "Yemen", code: "YE", currency: "YER" },
  { country: "Zambia", code: "ZM", currency: "ZMW" },
  { country: "Zimbabwe", code: "ZW", currency: "ZWL" }
];
const ALL_CURRENCIES = Array.from(new Set(COUNTRY_CURRENCY.map(c => c.currency)));

/* ========== Helpers ========== */
const emptyItem = () => ({ description: "", quantity: 1, unitPrice: 0, taxPct: 0 });

const toDateTimeLocalString = (d = new Date()) => {
  const pad = (n) => String(n).padStart(2, "0");
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}T${pad(d.getHours())}:${pad(d.getMinutes())}`;
};

const formatHumanDate = (dateStr) => {
  if (!dateStr) return "—";
  const d = new Date(dateStr);
  if (Number.isNaN(d.getTime())) return dateStr;
  return d.toLocaleString("en-US", { dateStyle: "medium", timeStyle: "short" });
};

const formatMoney = (value, currency = "USD") => {
  const n = Number(value) || 0;
  try {
    return new Intl.NumberFormat(undefined, { style: "currency", currency, maximumFractionDigits: 2 }).format(n);
  } catch {
    return `${currency} ${n.toFixed(2)}`;
  }
};

const numberToWordsEn = (numIn) => {
  let num = Math.round(Number(numIn) || 0);
  const a = ["","one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"];
  const b = ["","","twenty","thirty","forty","fifty","sixty","seventy","eighty","ninety"];
  const g = ["","thousand","million","billion","trillion"];
  if (num === 0) return "zero";
  let words = "", grp = 0;
  while (num > 0) {
    let chunk = num % 1000;
    if (chunk) {
      let cw = "";
      let h = Math.floor(chunk/100), r = chunk%100;
      if (h) cw += a[h] + " hundred" + (r ? " " : "");
      if (r < 20) cw += a[r];
      else cw += b[Math.floor(r/10)] + (r%10 ? " " + a[r%10] : "");
      words = cw + (g[grp] ? " " + g[grp] : "") + (words ? " " + words : "");
    }
    num = Math.floor(num/1000); grp++;
  }
  return words.trim();
};

/* ========== Component ========== */
export default function InvoiceGenerator() {
  /* Parties */
  const [seller, setSeller] = useState({ name: "Company Name", email: "hello@email.com", phone: "+XXX-0000000000", address: "NYC, United States" });
  const [buyer, setBuyer] = useState({ name: "Client Co.", email: "client@example.com", phone: "", address: "" });

  /* Meta */
  const [meta, setMeta] = useState({
    invoiceNo: localStorage.getItem("invoiceNo") || "INV-1001",
    issueDate: toDateTimeLocalString(),
    dueDate: new Date(Date.now() + 7 * 86400000).toISOString().slice(0, 10),
    poNumber: "",
    currency: localStorage.getItem("currency") || "USD",
    billToWho: "",
    notes: "Thank you for your business!",
    terms: "Payment due within 7 days via bank transfer or card.",
  });

  /* Localization */
  const [country, setCountry] = useState(localStorage.getItem("country") || "United States");
  useEffect(() => {
    const found = COUNTRY_CURRENCY.find(c => c.country === country);
    if (found && found.currency !== meta.currency) {
      setMeta(prev => ({ ...prev, currency: found.currency }));
    }
    localStorage.setItem("country", country);
  }, [country]);
  useEffect(() => {
    localStorage.setItem("currency", meta.currency);
  }, [meta.currency]);

  /* Barcode unique value (invoiceNo + issueDate) */
  const barcodeValue = useMemo(() => {
    const base = (meta.invoiceNo || "INV") + "|" + (meta.issueDate || "");
    return base.replace(/\s+/g, "");
  }, [meta.invoiceNo, meta.issueDate]);
  const barcodeRef = useRef(null);

  // Dynamically import JsBarcode to avoid ESM default-export errors
  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const mod = await import("jsbarcode");
        const JB = mod.default || mod;
        if (!cancelled && barcodeRef.current && typeof JB === "function") {
          JB(barcodeRef.current, barcodeValue, {
            format: "CODE128",
            displayValue: false,
            margin: 0,
            height: 56,
            width: 2
          });
        }
      } catch (e) {
        // console.warn(e);
      }
    })();
    return () => { cancelled = true; };
  }, [barcodeValue]);

  /* Items & totals */
  const [items, setItems] = useState(() =>
    JSON.parse(localStorage.getItem("items") || "null") || [
      { description: "", quantity: 1, unitPrice: 0, taxPct: 0 },
      { description: "", quantity: 1, unitPrice: 0, taxPct: 0 },
    ]
  );
  const [discountPct, setDiscountPct] = useState(Number(localStorage.getItem("discountPct")) || 0);
  const [shipping, setShipping] = useState(Number(localStorage.getItem("shipping")) || 0);
  const [rounding, setRounding] = useState(Number(localStorage.getItem("rounding")) || 0);

  /* Logo */
  // const [logoDataUrl, setLogoDataUrl] = useState(localStorage.getItem("logo") || null);

        // Logo — default to favicon
    const [logoDataUrl, setLogoDataUrl] = useState(
      localStorage.getItem("logo") ||
      document.querySelector("link[rel~='icon']")?.href ||
      "/favicon.ico"
    );


  /* Optional sections (defaults tuned) */
  const getStoredBool = (key, defVal) => {
    const v = localStorage.getItem(key);
    return v === null ? defVal : v === "true";
  };
  const [showNotes, setShowNotes] = useState(() => getStoredBool("showNotes", false));
  const [showTerms, setShowTerms] = useState(() => getStoredBool("showTerms", false));
  const [showSignature, setShowSignature] = useState(() => getStoredBool("showSignature", true));
  const [showQR, setShowQR] = useState(() => getStoredBool("showQR", true));
  const [enableDiscount, setEnableDiscount] = useState(() => getStoredBool("enableDiscount", false));

  /* Payment (PayPal / Stripe) */
  const [paymentMethod, setPaymentMethod] = useState(localStorage.getItem("paymentMethod") || "PayPal");
  const [paymentDetails, setPaymentDetails] = useState(() =>
    JSON.parse(localStorage.getItem("paymentDetails") || "null") || {
      paypal: { link: "https://www.paypal.com/paypalme/yourid" },
      stripe: { link: "https://buy.stripe.com/test_XXXXXXXXXXXX" },
    }
  );

  /* History */
  const [historyOpen, setHistoryOpen] = useState(false);
  const [history, setHistory] = useState(() => JSON.parse(localStorage.getItem("invoiceHistory") || "[]"));

  /* Exporting flag to hide UI elements during print/PDF */
  const [exporting, setExporting] = useState(false);

  const invoiceRef = useRef(null);

  /* Persist */
  useEffect(() => localStorage.setItem("invoiceNo", meta.invoiceNo), [meta.invoiceNo]);
  useEffect(() => localStorage.setItem("items", JSON.stringify(items)), [items]);
  useEffect(() => localStorage.setItem("discountPct", String(discountPct)), [discountPct]);
  useEffect(() => localStorage.setItem("shipping", String(shipping)), [shipping]);
  useEffect(() => localStorage.setItem("rounding", String(rounding)), [rounding]);
  useEffect(() => { if (logoDataUrl) localStorage.setItem("logo", logoDataUrl); }, [logoDataUrl]);
  useEffect(() => localStorage.setItem("showNotes", String(showNotes)), [showNotes]);
  useEffect(() => localStorage.setItem("showTerms", String(showTerms)), [showTerms]);
  useEffect(() => localStorage.setItem("showSignature", String(showSignature)), [showSignature]);
  useEffect(() => localStorage.setItem("showQR", String(showQR)), [showQR]);
  useEffect(() => localStorage.setItem("enableDiscount", String(enableDiscount)), [enableDiscount]);
  useEffect(() => {
    localStorage.setItem("paymentMethod", paymentMethod);
    localStorage.setItem("paymentDetails", JSON.stringify(paymentDetails));
  }, [paymentMethod, paymentDetails]);

  /* Calc */
  const calc = useMemo(() => {
    const rows = items.map((it) => {
      const qty = Math.max(0, Math.round(Number(it.quantity) || 0));
      const price = Math.max(0, Math.round(Number(it.unitPrice) || 0));
      const taxPct = Number(it.taxPct) || 0;
      const line = qty * price;
      const tax = line * (taxPct / 100);
      const total = line + tax;
      return { ...it, quantity: qty, unitPrice: price, line, tax, total };
    });
    const subtotal = rows.reduce((s, r) => s + r.line, 0);
    const taxTotal = rows.reduce((s, r) => s + r.tax, 0);
    const discount = enableDiscount ? subtotal * (Number(discountPct) / 100) : 0;
    const grand = subtotal - discount + taxTotal + Number(shipping || 0) + Number(rounding || 0);
    return { rows, subtotal, taxTotal, discount, grand };
  }, [items, discountPct, shipping, rounding, enableDiscount]);

  /* Item ops */
  const addItem = () => setItems((x) => [...x, emptyItem()]);
  const removeItem = (idx) => setItems((x) => x.filter((_, i) => i !== idx));
  const updateItem = (idx, key, value) => setItems((x) => x.map((it, i) => (i === idx ? { ...it, [key]: value } : it)));

  /* Logo upload */
  const handleLogoUpload = (e) => {
    const f = e.target.files?.[0];
    if (!f) return;
    const fr = new FileReader();
    fr.onload = (ev) => setLogoDataUrl(ev.target?.result);
    fr.readAsDataURL(f);
  };

  /* Reset + auto-increment invoice no */
  const resetForm = () => {
    const prev = meta.invoiceNo;
    const n = parseInt(prev.split("-")[1] || "1000", 10);
    const next = isNaN(n) ? 1001 : n + 1;
    setSeller({ name: "Company Name", email: "hello@email.com", phone: "+XXX-0000000000", address: "NYC, United States" });
    setBuyer({ name: "Client Co.", email: "client@example.com", phone: "", address: "" });
    setMeta((m) => ({
      ...m,
      invoiceNo: `INV-${next}`,
      issueDate: toDateTimeLocalString(),
      dueDate: new Date(Date.now() + 7 * 86400000).toISOString().slice(0, 10),
      poNumber: "",
      billToWho: "",
    }));
    setItems([
      { description: "", quantity: 1, unitPrice: 0, taxPct: 0 },
      { description: "", quantity: 1, unitPrice: 0, taxPct: 0 },
    ]);
    setDiscountPct(0);
    setShipping(0);
    setRounding(0);
    setLogoDataUrl(null);
  };

  /* History save on PDF */
  const pushHistory = () => {
    const entry = { invoiceNo: meta.invoiceNo, date: new Date().toISOString(), buyer: buyer.name || "", total: calc.grand, currency: meta.currency };
    const list = [entry, ...history].slice(0, 200);
    setHistory(list);
    localStorage.setItem("invoiceHistory", JSON.stringify(list));
  };

  /* PDF fit-to-page (hide UI bits during capture) */
  const downloadPDF = async () => {
    const node = invoiceRef.current;
    if (!node) return;
    setExporting(true);
    // DOM update অপেক্ষা
    await new Promise((r) => setTimeout(r, 0));

    const canvas = await html2canvas(node, {
      scale: 2,
      backgroundColor: "#ffffff",
      useCORS: true,
      willReadFrequently: true
    });
    const img = canvas.toDataURL("image/png");
    const pdf = new jsPDF({ unit: "pt", format: "a4" });
    const pageW = pdf.internal.pageSize.getWidth();
    const pageH = pdf.internal.pageSize.getHeight();
    const ratio = Math.min((pageW - 40) / canvas.width, (pageH - 40) / canvas.height);
    const w = canvas.width * ratio, h = canvas.height * ratio;
    const x = (pageW - w) / 2, y = (pageH - h) / 2;
    pdf.addImage(img, "PNG", x, y, w, h);
    pdf.save(`${meta.invoiceNo || "invoice"}.pdf`);

    setExporting(false);
    pushHistory();
  };

  return (
    <div className={`min-h-screen bg-gray-50 ${exporting ? "exporting" : ""}`}>
      {/* Header */}
      <header className="sticky top-0 z-10 bg-white/80 backdrop-blur border-b">
        <div className="max-w-6xl mx-auto px-4 py-3 flex flex-wrap items-center gap-3 justify-between">
          <h1 className="text-xl md:text-2xl font-bold tracking-tight">Invoice Generator</h1>
          <div className="flex gap-2">
            <button onClick={() => setHistoryOpen((s) => !s)} className="inline-flex items-center gap-2 px-3 py-2 rounded-2xl bg-white border hover:bg-gray-50 shadow-sm text-sm">
              <History className="w-4 h-4" /> History
            </button>
            <button onClick={resetForm} className="inline-flex items-center gap-2 px-3 py-2 rounded-2xl bg-white border hover:bg-gray-50 shadow-sm text-sm">
              <RefreshCw className="w-4 h-4" /> Reset
            </button>
            <button onClick={window.print} className="inline-flex items-center gap-2 px-3 py-2 rounded-2xl bg-white border hover:bg-gray-50 shadow-sm text-sm">
              <Printer className="w-4 h-4" /> Print
            </button>
            <button onClick={downloadPDF} className="inline-flex items-center gap-2 px-3 py-2 rounded-2xl bg-black text-white hover:opacity-90 shadow-sm text-sm">
              <Download className="w-4 h-4" /> Download PDF
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto p-4 grid md:grid-cols-5 gap-6">
        {/* Controls */}
        <section className="md:col-span-2 space-y-6">
          <div className="bg-white rounded-2xl shadow p-4">
            <h2 className="font-semibold mb-3">Settings</h2>

            {/* Country & Currency */}
            <div className="grid grid-cols-2 gap-2 mb-3 border rounded-xl p-3 bg-gray-50">
              <div>
                <label className="block text-xs font-medium mb-1">Country</label>
                <select
                  className="w-full border rounded-lg px-2 py-2 text-sm"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                >
                  {COUNTRY_CURRENCY.map((c) => (
                    <option key={c.code} value={c.country}>{c.country}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-xs font-medium mb-1">Currency</label>
                <select
                  className="w-full border rounded-lg px-2 py-2 text-sm"
                  value={meta.currency}
                  onChange={(e) => setMeta((prev) => ({ ...prev, currency: e.target.value }))}
                >
                  {Array.from(new Set(COUNTRY_CURRENCY.map(c => c.currency))).map((cur) => (
                    <option key={cur} value={cur}>{cur}</option>
                  ))}
                </select>
                <p className="text-[11px] text-gray-500 mt-1">Changing Country auto-sets Currency. You can override here.</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="col-span-2 grid grid-cols-2 gap-2">
                <label className="inline-flex items-center gap-2 text-sm">
                  <input type="checkbox" checked={enableDiscount} onChange={(e) => setEnableDiscount(e.target.checked)} />
                  Discount
                </label>
                <label className="inline-flex items-center gap-2 text-sm">
                  <input type="checkbox" checked={showNotes} onChange={(e) => setShowNotes(e.target.checked)} />
                  Notes
                </label>
                <label className="inline-flex items-center gap-2 text-sm">
                  <input type="checkbox" checked={showTerms} onChange={(e) => setShowTerms(e.target.checked)} />
                  Terms
                </label>
                <label className="inline-flex items-center gap-2 text-sm">
                  <input type="checkbox" checked={showSignature} onChange={(e) => setShowSignature(e.target.checked)} />
                  Signature
                </label>
                <label className="inline-flex items-center gap-2 text-sm">
                  <input type="checkbox" checked={showQR} onChange={(e) => setShowQR(e.target.checked)} />
                  Payment QR
                </label>
              </div>

              {enableDiscount && (
                <label className="text-sm text-gray-600 col-span-1">
                  Discount (%)
                  <input type="number" className="mt-1 w-full rounded-xl border px-3 py-2" value={discountPct} onChange={(e) => setDiscountPct(Number(e.target.value))} min={0} max={100} step="1" />
                </label>
              )}
              <label className="text-sm text-gray-600 col-span-1">
                Shipping
                <input type="number" className="mt-1 w-full rounded-xl border px-3 py-2" value={shipping} onChange={(e) => setShipping(Number(e.target.value))} step="1" />
              </label>
              <label className="text-sm text-gray-600 col-span-1">
                Rounding (+/-)
                <input type="number" className="mt-1 w-full rounded-xl border px-3 py-2" value={rounding} onChange={(e) => setRounding(Number(e.target.value))} step="1" />
              </label>

              <label className="text-sm text-gray-600 col-span-1">
                Payment Method
                <select className="mt-1 w-full rounded-xl border px-3 py-2" value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)}>
                  <option value="PayPal">PayPal</option>
                  <option value="Stripe">Stripe</option>
                </select>
              </label>
              {paymentMethod === "PayPal" ? (
                <label className="text-sm text-gray-600 col-span-1">
                  PayPal Link
                  <input className="mt-1 w-full rounded-xl border px-3 py-2" value={paymentDetails.paypal.link} onChange={(e) => setPaymentDetails({ ...paymentDetails, paypal: { ...paymentDetails.paypal, link: e.target.value } })} placeholder="https://www.paypal.com/paypalme/yourid" />
                </label>
              ) : (
                <label className="text-sm text-gray-600 col-span-1">
                  Stripe Payment Link
                  <input className="mt-1 w-full rounded-xl border px-3 py-2" value={paymentDetails.stripe.link} onChange={(e) => setPaymentDetails({ ...paymentDetails, stripe: { ...paymentDetails.stripe, link: e.target.value } })} placeholder="https://buy.stripe.com/..." />
                </label>
              )}

              {/* Logo */}
              <div className="col-span-2">
                <label className="text-sm text-gray-600">Upload Logo</label>
                <div className="mt-1 flex items-center gap-3">
                  <input type="file" accept="image/*" onChange={handleLogoUpload} className="hidden" id="logoUpload" />
                  <label htmlFor="logoUpload" className="inline-flex items-center gap-2 px-3 py-2 rounded-2xl bg-white border hover:bg-gray-50 shadow-sm text-sm cursor-pointer">
                    <Upload className="w-4 h-4" /> Choose Image
                  </label>
                  {logoDataUrl && <img src={logoDataUrl} alt="logo" className="h-10 object-contain" />}
                </div>
              </div>
            </div>
          </div>

          {/* Seller / Buyer */}
          <div className="bg-white rounded-2xl shadow p-4 space-y-3">
            <h2 className="font-semibold">Seller (From)</h2>
            <input className="w-full rounded-xl border px-3 py-2" placeholder="Company / Name" value={seller.name} onChange={(e) => setSeller({ ...seller, name: e.target.value })} />
            <input className="w-full rounded-xl border px-3 py-2" placeholder="Email" value={seller.email} onChange={(e) => setSeller({ ...seller, email: e.target.value })} />
            <input className="w-full rounded-xl border px-3 py-2" placeholder="Phone" value={seller.phone} onChange={(e) => setSeller({ ...seller, phone: e.target.value })} />
            <textarea className="w-full rounded-xl border px-3 py-2" placeholder="Address" value={seller.address} onChange={(e) => setSeller({ ...seller, address: e.target.value })} />
          </div>

          <div className="bg-white rounded-2xl shadow p-4 space-y-3">
            <h2 className="font-semibold">Buyer (Bill To)</h2>
            <input className="w-full rounded-xl border px-3 py-2" placeholder="Company / Name" value={buyer.name} onChange={(e) => setBuyer({ ...buyer, name: e.target.value })} />
            <input className="w-full rounded-xl border px-3 py-2" placeholder="Email" value={buyer.email} onChange={(e) => setBuyer({ ...buyer, email: e.target.value })} />
            <input className="w-full rounded-xl border px-3 py-2" placeholder="Phone" value={buyer.phone} onChange={(e) => setBuyer({ ...buyer, phone: e.target.value })} />
            <textarea className="w-full rounded-xl border px-3 py-2" placeholder="Address" value={buyer.address} onChange={(e) => setBuyer({ ...buyer, address: e.target.value })} />
          </div>

          <div className="bg-white rounded-2xl shadow p-4 space-y-3">
            <h2 className="font-semibold">Invoice Meta</h2>
            <div className="grid grid-cols-2 gap-3">
              <input className="rounded-xl border px-3 py-2" placeholder="Invoice No" value={meta.invoiceNo} onChange={(e) => setMeta({ ...meta, invoiceNo: e.target.value })} />
              <input className="rounded-xl border px-3 py-2" placeholder="PO Number" value={meta.poNumber} onChange={(e) => setMeta({ ...meta, poNumber: e.target.value })} />
              <label className="text-sm text-gray-600">
                Issue Date
                <input type="datetime-local" className="mt-1 w-full rounded-xl border px-3 py-2" value={meta.issueDate} onChange={(e) => setMeta({ ...meta, issueDate: e.target.value })} />
              </label>
              <label className="text-sm text-gray-600">
                Due Date
                <input type="date" className="mt-1 w-full rounded-xl border px-3 py-2" value={meta.dueDate} onChange={(e) => setMeta({ ...meta, dueDate: e.target.value })} />
              </label>
            </div>
            {/* Bill To Who */}
            <input className="w-full rounded-xl border px-3 py-2" placeholder="Bill To Who (e.g., Accounts Dept / Attn: John)" value={meta.billToWho} onChange={(e) => setMeta({ ...meta, billToWho: e.target.value })} />
          </div>

              {/* Site-only info block (SEO/marketing). Keep outside `invoiceRef` so it won't appear in PDF/Print. Uses `export-hide` to hide on print. */}

            
                <div className="export-hide bg-white rounded-2xl shadow p-4 text-sm text-gray-600">
                  <h2 className="text-base font-semibold mb-2">Online Invoice Generator</h2>
                  <p>
                    InvoiceNotepad lets you create professional invoices in your browser:
                    editable line items, tax & discounts, QR payment, barcode, print-ready layout,
                    and one-click PDF export—no sign-up required.
                  </p>
                </div>           
        </section>

        {/* Preview */}
        <section className="md:col-span-3">
          <div className="preview-root sheet" ref={invoiceRef}>
            {/* Barcode INSIDE the capture area */}
            <div className="no-break mb-4 flex justify-center">
              <div className="inline-flex flex-col items-center">
                <svg ref={barcodeRef} className="h-14 w-[360px]" />
                <div className="text-[10px] text-gray-500 mt-1 tracking-wider">
                  {barcodeValue}
                </div>
              </div>
            </div>

            {/* Top */}
            <div className="flex items-start justify-between gap-6">
              <div className="flex items-center gap-4">
                {logoDataUrl ? (
                  <img src={logoDataUrl} alt="Logo" className="w-16 h-16 object-contain" />
                ) : (
                  <div className="w-16 h-16 rounded-2xl bg-gray-100 grid place-items-center text-gray-400">LOGO</div>
                )}
                <div>
                  <h2 className="text-2xl font-bold">{seller.name || "Company"}</h2>
                  <p className="text-sm text-gray-600">{seller.email}</p>
                  <p className="text-sm text-gray-600">{seller.phone}</p>
                  <p className="text-sm text-gray-600 whitespace-pre-line">{seller.address}</p>
                </div>
              </div>
              <div className="text-right">
                <h3 className="text-3xl font-extrabold tracking-tight">INVOICE</h3>
                <p className="text-sm text-gray-600">No: {meta.invoiceNo || "—"}</p>
                <p className="text-sm text-gray-600">PO: {meta.poNumber || "—"}</p>
                <p className="text-sm text-gray-600">Issue: {formatHumanDate(meta.issueDate)}</p>
                <p className="text-sm text-gray-600">Due: {formatHumanDate(meta.dueDate)}</p>
                {meta.billToWho && <p className="text-sm text-gray-700 mt-2"><span className="font-semibold">Bill To Who:</span> {meta.billToWho}</p>}
              </div>
            </div>

            {/* Bill To (under Seller) */}
            <div className="md:w-1/2">
              {(buyer?.name || buyer?.email || buyer?.phone || buyer?.address) && (
                <div className="mt-4 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm print:border-0 print:shadow-none">
                  <h3 className="text-base font-semibold tracking-tight">Bill To</h3>
                  <div className="mt-2 text-sm space-y-1">
                    {buyer?.name && (<p><span className="font-medium">Name:</span> {buyer.name}</p>)}
                    {buyer?.email && (<p><span className="font-medium">Email:</span> {buyer.email}</p>)}
                    {buyer?.phone && (<p><span className="font-medium">Phone:</span> {buyer.phone}</p>)}
                    {buyer?.address && (
                      <p className="whitespace-pre-line">
                        <span className="font-medium">Address:</span> {buyer.address}
                      </p>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Items */}
            <div className="mt-6">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-gray-50 text-left">
                      <th className="p-3 rounded-l-xl">Description</th>
                      <th className="p-3 w-28">Qty</th>
                      <th className="p-3 w-36">Unit Price</th>
                      <th className="p-3 w-24">Tax %</th>
                      <th className="p-3 w-32 text-right rounded-r-xl">Line Total</th>
                      <th className="p-3 w-10 export-hide"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {calc.rows.map((row, idx) => (
                      <tr key={idx} className="border-b last:border-none align-top">
                        <td className="p-2">
                          {exporting ? (
                            <div className="print-cell description">{row.description || "\u00A0"}</div>
                          ) : (
                            <textarea
                              className="px-3 py-2 rounded-xl border min-h-[64px]"
                              value={row.description}
                              onChange={(e) => updateItem(idx, "description", e.target.value)}
                              placeholder="Service or item description"
                            />
                          )}
                        </td>
                        <td className="p-2">
                          {exporting ? (
                            <div className="print-cell justify-end">{row.quantity}</div>
                          ) : (
                            <input
                              type="number"
                              min={0}
                              step="1"
                              className="w-20 px-2 py-2 rounded-xl border text-right"
                              value={row.quantity}
                              onChange={(e) => updateItem(idx, "quantity", Number(e.target.value))}
                            />
                          )}
                        </td>
                        <td className="p-2">
                          {exporting ? (
                            <div className="print-cell justify-end">{row.unitPrice}</div>
                          ) : (
                            <input
                              type="number"
                              min={0}
                              step="1"
                              className="w-28 px-2 py-2 rounded-xl border text-right"
                              value={row.unitPrice}
                              onChange={(e) => updateItem(idx, "unitPrice", Number(e.target.value))}
                            />
                          )}
                        </td>
                        <td className="p-2">
                          {exporting ? (
                            <div className="print-cell justify-end">{row.taxPct}</div>
                          ) : (
                            <input
                              type="number"
                              min={0}
                              max={100}
                              step="0.01"
                              className="w-20 px-3 py-2 rounded-xl border text-right"
                              value={row.taxPct}
                              onChange={(e) => updateItem(idx, "taxPct", Number(e.target.value))}
                            />
                          )}
                        </td>
                        <td className="p-2 text-right font-medium">{formatMoney(row.total, meta.currency)}</td>
                        <td className="p-2 text-right export-hide">
                          <button onClick={() => removeItem(idx)} className="p-2 rounded-xl hover:bg-red-50 text-red-600" title="Remove">
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Hide this button in print and during PDF export */}
              <button onClick={addItem} className="export-hide mt-3 inline-flex items-center gap-2 px-3 py-2 rounded-2xl bg-white border hover:bg-gray-50 shadow-sm text-sm">
                <Plus className="w-4 h-4" /> Add Item
              </button>
            </div>

            {/* Totals & Optional sections */}
            <div className="mt-6 grid md:grid-cols-2 gap-6 items-start">
              <div className="space-y-3">
                {showNotes && (
                  <div>
                    <h4 className="font-semibold flex items-center gap-2"><FileSignature className="w-4 h-4" /> Notes</h4>
                    <p className="text-sm text-gray-700 whitespace-pre-line min-h-[3rem] bg-gray-50 rounded-xl p-3">{meta.notes}</p>
                  </div>
                )}
                {showTerms && (
                  <div>
                    <h4 className="font-semibold">Terms</h4>
                    <p className="text-sm text-gray-700 whitespace-pre-line bg-gray-50 rounded-xl p-3">{meta.terms}</p>
                  </div>
                )}
                {showSignature && (
                  <div>
                    <h4 className="font-semibold">Signature / Stamp</h4>
                    <div className="h-16 border border-dashed rounded-xl flex items-center justify-center text-gray-400">Sign / Stamp Here</div>
                  </div>
                )}
                {showQR && (
                  <div>
                    <h4 className="font-semibold">Payment</h4>
                    <div className="flex items-center gap-3">
                      <QRCode
                        value={paymentMethod === "PayPal" ? (paymentDetails.paypal.link || "https://paypal.com") : (paymentDetails.stripe.link || "https://stripe.com")}
                        size={96}
                      />
                      <div className="text-xs text-gray-600 break-all max-w-[240px]">
                        <div className="font-medium">{paymentMethod}</div>
                        {paymentMethod === "PayPal" ? paymentDetails.paypal.link : paymentDetails.stripe.link}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div>
                <div className="bg-gray-50 rounded-2xl p-4">
                  <div className="flex justify-between py-1"><span>Subtotal</span><span>{formatMoney(calc.subtotal, meta.currency)}</span></div>
                  {enableDiscount && <div className="flex justify-between py-1"><span>Discount ({discountPct || 0}%)</span><span>- {formatMoney(calc.discount, meta.currency)}</span></div>}
                  <div className="flex justify-between py-1"><span>Tax</span><span>{formatMoney(calc.taxTotal, meta.currency)}</span></div>
                  <div className="flex justify-between py-1"><span>Shipping</span><span>{formatMoney(Number(shipping || 0), meta.currency)}</span></div>
                  <div className="flex justify-between py-1 border-t mt-2 pt-2 font-semibold text-lg"><span>Total</span><span>{formatMoney(calc.grand, meta.currency)}</span></div>
                  <p className="text-xs text-gray-600 mt-2 italic">{`${numberToWordsEn(calc.grand)} only`}</p>
                </div>
              </div>
            </div>

            <div className="mt-6 text-center text-xs text-gray-500">Thank you for your Business</div>
          </div>
        </section>
      </main>

      {/* History Drawer */}
      {historyOpen && (
        <div className="fixed inset-0 bg-black/30 z-20" onClick={() => setHistoryOpen(false)}>
          <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-xl p-4 overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-lg font-semibold flex items-center gap-2"><History className="w-4 h-4" /> History</h3>
              <button className="text-sm underline" onClick={() => { setHistory([]); localStorage.removeItem("invoiceHistory"); }}>Clear</button>
            </div>
            {Object.entries(history.reduce((acc, h) => {
              const d = new Date(h.date);
              const key = d.toLocaleString("en-US", { month: "long", year: "numeric" });
              (acc[key] = acc[key] || []).push(h);
              return acc;
            }, {})).map(([month, list]) => (
              <div key={month} className="mb-4">
                <h4 className="font-medium mb-2">{month}</h4>
                <div className="divide-y border rounded-xl">
                  {list.map((h, i) => (
                    <div key={i} className="p-3 flex items-center justify-between">
                      <div>
                        <div className="font-medium">{h.invoiceNo}</div>
                        <div className="text-xs text-gray-500">{new Date(h.date).toLocaleString()}</div>
                        {h.buyer && <div className="text-xs text-gray-600">Buyer: {h.buyer}</div>}
                      </div>
                      <div className="text-sm font-medium">{formatMoney(h.total, h.currency)}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      <style>{`
  @page { size: A4; margin: 0; }

  /* Screen */
  .preview-root { width: 100%; }

  /* Export-view static cell style */
  .print-cell{
    border: 1px solid #e5e7eb;
    border-radius: 0.75rem;
    padding: 0.5rem 0.75rem;
    min-height: 40px;
    display: flex;
    align-items: center;
    background: #fff;
  }
  .print-cell.description{
    min-height: 64px;
    white-space: pre-wrap;
    align-items: flex-start;
  }
  .print-cell.justify-end{ justify-content: flex-end; }

  /* Hide certain controls while exporting to PDF */
  .exporting .export-hide { display: none !important; }

  @page { size: A4; margin: 0; }

/* Screen */
.preview-root { width: 100%; }

/* Export টাইমে কিছু UI লুকাও */
.exporting .export-hide { display: none !important; }

/* ===== PRINT ONLY ONE A4 SHEET ===== */
@media print {
  html, body {
    width: 210mm; height: 297mm; margin: 0; padding: 0;
    -webkit-print-color-adjust: exact; print-color-adjust: exact; background: #fff !important;
  }

  /* পেজে শুধু .sheet-টাই দেখাবে, বাকি সব হাইড */
  body * { visibility: hidden !important; }
  .sheet, .sheet * { visibility: visible !important; }

  /* .sheet কে পেজের টপে ফিক্সড করে দাও, ফলে একটাই পেজ হবে */
  .sheet {
    position: fixed;               /* <-- কন্টেন্ট লেআউট আর পেজ গুনতি ঠিক থাকবে */
    left: 50%;
    top: 0;
    width: 210mm;
    height: 297mm;                 /* একেবারে A4 */
    padding: 10mm 12mm;
    box-sizing: border-box;
    overflow: hidden;
    background: #fff !important;

    /* প্রিন্ট স্কেল */
    transform: translateX(-50%) scale(var(--print-scale, 0.96));
    transform-origin: top center;

    page-break-inside: avoid; break-inside: avoid;
  }

  /* কন্ট্রোল/সাইড UI সরিয়ে দাও */
  header,
  footer,
  main > section:first-child,
  .export-hide { display: none !important; }

  /* কোন অতিরিক্ত প্যাডিং/গ্যাপ যেন না লাগে */
  main { padding: 0 !important; margin: 0 !important; }
  table { width: 100%; border-collapse: collapse; }
  .no-break { page-break-inside: avoid; break-inside: avoid; }  
}
`}</style>
    </div>
  );
}

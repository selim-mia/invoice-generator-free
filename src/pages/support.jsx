// src/pages/support.jsx
import { SEO } from "../components/SEO";

export default function SupportPage() {
  const title = "Support & Help Center | InvoiceNotepad";
  const description =
    "Find answers for InvoiceNotepad: create invoices, taxes, currency, barcode, payment QR, print-ready PDF, and local history. Contact support for help.";

  const faq = [
    {
      q: "Is InvoiceNotepad free?",
      a: "Yes. You can create invoices and export print-ready PDFs for free.",
    },
    {
      q: "Do I need to sign up?",
      a: "No. There is no account creation. Your invoices are stored locally in your browser.",
    },
    {
      q: "Where are my invoices saved?",
      a: "After you Print or Download PDF, invoices are saved to your browser’s localStorage. Clearing site data or switching devices will remove them.",
    },
    {
      q: "How do I add taxes, discounts, and shipping?",
      a: "Use per-line Tax %, optional Discount, and Shipping in Settings. Totals update automatically.",
    },
    {
      q: "How do I change the currency?",
      a: "Choose a Country to auto-map Currency, or override it manually at any time.",
    },
    {
      q: "PDF looks different from the screen—how do I fix it?",
      a: "Use default margins and 100% scale in your Print dialog. Prefer system fonts or ensure custom fonts are embedded.",
    },
    {
      q: "Can I add a logo, signature, and payment QR?",
      a: "Yes. Upload a logo, add a signature/stamp, and toggle Payment QR to embed a scannable payment link.",
    },
    {
      q: "How do I contact support?",
      a: "Email support@invoicenotepad.com or use the form on the Contact page.",
    },
  ];

  return (
    <main className="container mx-auto px-4 py-8 max-w-3xl">
      <SEO
        title={title}
        description={description}
        canonical="https://invoicenotepad.com/support"
        jsonLd={[
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Support & Help Center",
            url: "https://invoicenotepad.com/support",
          },
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://invoicenotepad.com/" },
              { "@type": "ListItem", position: 2, name: "Support", item: "https://invoicenotepad.com/support" },
            ],
          },
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faq.map(({ q, a }) => ({
              "@type": "Question",
              name: q,
              acceptedAnswer: { "@type": "Answer", text: a },
            })),
          },
        ]}
      />

      <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Support & Help Center</h1>
      <p className="mt-3 text-slate-600">
        Quick answers to common questions about the online invoice generator. For step-by-step guides, see the{" "}
        <a className="underline" href="/docs">Documentation</a>. If you still need help,{" "}
        <a className="underline" href="/contact">contact us</a>.
      </p>

      <section className="mt-8">
        <h2 className="text-xl font-semibold">Popular Topics</h2>
        <ul className="list-disc ml-6 mt-3 space-y-2 text-slate-700">
          <li>Create invoice online (free PDF, A4 print)</li>
          <li>Taxes, discounts, shipping, and rounding</li>
          <li>Country → currency mapping (and manual override)</li>
          <li>Payment QR and invoice barcode</li>
          <li>Local history (browser storage) and privacy</li>
        </ul>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold">Troubleshooting</h2>
        <details className="mt-3">
          <summary className="font-medium cursor-pointer">PDF doesn’t match the on-screen layout</summary>
          <p className="mt-2 text-slate-700">
            In the Print dialog, set scale to 100% and margins to default. Use system fonts or embed custom fonts.
          </p>
        </details>
        <details className="mt-3">
          <summary className="font-medium cursor-pointer">Invoice missing from History</summary>
          <p className="mt-2 text-slate-700">
            Invoices save after a successful Print/PDF. Clearing site data or switching devices removes local history.
          </p>
        </details>
      </section>

      <section className="mt-8 grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border p-5">
          <h2 className="text-lg font-semibold">Contact Support</h2>
          <p className="mt-2">Email <strong>support@invoicenotepad.com</strong></p>
          <p className="mt-2 text-sm text-slate-600">Typical response time: 1–2 business days</p>
          <p className="mt-3 text-sm">
            Or use the <a className="underline" href="/contact">Contact</a> page.
          </p>
        </div>
        <div className="rounded-2xl border p-5">
          <h2 className="text-lg font-semibold">Bug Report Checklist</h2>
          <ul className="mt-2 list-disc ml-5 space-y-1 text-sm">
            <li>Steps to reproduce</li>
            <li>Expected vs actual behavior</li>
            <li>Browser & OS</li>
            <li>Screenshot (no sensitive data)</li>
          </ul>
        </div>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold">FAQ</h2>
        <div className="mt-4 divide-y rounded-2xl border">
          {faq.map((item, i) => (
            <details key={i} className="p-4">
              <summary className="font-medium cursor-pointer">{item.q}</summary>
              <p className="mt-2 text-slate-700">{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      <nav className="mt-10 text-sm text-slate-600">
        <a className="underline mr-4" href="/">Home</a>
        <a className="underline mr-4" href="/docs">Docs</a>
        <a className="underline" href="/contact">Contact</a>
      </nav>
    </main>
  );
}
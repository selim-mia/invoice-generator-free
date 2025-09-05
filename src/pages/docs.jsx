// src/pages/Docs.jsx
// Keywords to naturally cover in copy (for reference only):
// online invoice generator, create invoice online, free invoice PDF,
// invoice template, barcode invoice, payment QR, A4 print invoice,
// taxes, discounts, shipping, currency, local storage, no sign-up invoice

import { SEO } from "../components/SEO";

export default function Docs() {
  const title = "InvoiceNotepad Documentation";
  const description =
    "Learn how to create professional invoices online: items, taxes, discounts, shipping, currency, barcode, payment QR, and print-ready PDF—no sign-up required.";

  const faq = [
    {
      q: "Do you store my invoices on a server?",
      a: "No. Everything is processed client-side and saved locally in your browser (localStorage) after you Print or Download PDF.",
    },
    {
      q: "Can I change currency?",
      a: "Yes. Selecting a Country auto-maps the Currency, and you can override it manually anytime.",
    },
    {
      q: "How do I contact support?",
      a: "Email support@invoicenotepad.com or visit the Contact page.",
    },
    {
      q: "Is InvoiceNotepad free?",
      a: "Yes. You can create invoices and export print-ready PDFs for free.",
    },
    {
      q: "Can I add a logo, signature, and payment QR?",
      a: "Yes. Upload your logo, sign/stamp, and toggle Payment QR to embed a scannable payment link on your invoice.",
    },
    {
      q: "What about taxes, discounts, and shipping?",
      a: "Use per-line Tax %, optional Discount, and Shipping in Settings. Totals update automatically.",
    },
  ];

  return (
    <main className="container mx-auto px-4 py-8 max-w-4xl">
      <SEO
        title={title}
        description={description}
        canonical="https://invoicenotepad.com/docs"
        jsonLd={[
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "InvoiceNotepad Documentation",
            url: "https://invoicenotepad.com/docs",
          },
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://invoicenotepad.com/",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Documentation",
                item: "https://invoicenotepad.com/docs",
              },
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

      <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
        InvoiceNotepad Documentation
      </h1>
      <p className="mt-3 text-slate-600">
        Use this guide to create invoices online in minutes—no sign-up required.
        Add items, taxes, discounts, and shipping; auto-map the correct currency
        by country; include a payment QR and a unique barcode; and export a
        clean, print-ready PDF (A4). Your work persists locally via browser
        storage, so you can reopen invoices from <strong>History</strong> anytime.
      </p>

      {/* Quick Start */}
      <section className="mt-8">
        <h2 className="text-xl font-semibold">Quick Start</h2>
        <ol className="list-decimal ml-6 mt-3 space-y-2">
          <li>
            Open <a className="underline" href="/">InvoiceNotepad</a> and set{" "}
            <strong>Country</strong>; <em>Currency auto-maps</em> (you can override).
          </li>
          <li>Fill in <strong>Seller</strong> and <strong>Bill To (Buyer)</strong> details.</li>
          <li>
            Add line items: <strong>Description</strong>, <strong>Qty</strong>, <strong>Unit Price</strong>,
            and <strong>Tax %</strong> (optional).
          </li>
          <li>
            Toggle <strong>Payment QR</strong> and paste your payment link (PayPal/UPI/Stripe/etc.).
          </li>
          <li>Optionally upload a <strong>Logo</strong> and add a <strong>Signature/Stamp</strong>.</li>
          <li>
            Click <strong>Download PDF</strong> or <strong>Print</strong>. The invoice is saved to{" "}
            <strong>History</strong> automatically.
          </li>
        </ol>
      </section>

      {/* Detailed Guide */}
      <section className="mt-10">
        <h2 className="text-xl font-semibold">Detailed Guide</h2>

        <h3 className="mt-5 font-medium">Seller & Buyer</h3>
        <p className="mt-2 text-slate-700">
          Enter company name, email, phone, and address for both sides. Clear
          labels and consistent formatting improve professional appearance and
          on-time payments.
        </p>

        <h3 className="mt-5 font-medium">Items, Taxes, Discounts & Shipping</h3>
        <ul className="list-disc ml-6 mt-2 space-y-2 text-slate-700">
          <li>
            <strong>Items:</strong> Add rows as needed. Unit Price defaults to 0—enter your values.
          </li>
          <li>
            <strong>Taxes:</strong> Apply per-line <em>Tax %</em> or leave at 0 for exempt items.
          </li>
          <li>
            <strong>Discount:</strong> Use flat/percent (if enabled) to show savings clearly.
          </li>
          <li>
            <strong>Shipping:</strong> Add your shipping cost; totals update live.
          </li>
          <li>
            <strong>Rounding:</strong> Adjust small discrepancies using the Rounding (+/−) field.
          </li>
        </ul>

        <h3 className="mt-5 font-medium">Country & Currency</h3>
        <p className="mt-2 text-slate-700">
          Selecting a <strong>Country</strong> auto-sets the <strong>Currency</strong> for that market.
          You can manually override currency anytime for cross-border invoices.
        </p>

        <h3 className="mt-5 font-medium">Payment QR & Barcode</h3>
        <p className="mt-2 text-slate-700">
          Add a scannable <strong>Payment QR</strong> that opens your payment URL instantly.
          A unique <strong>barcode</strong> appears at the top (based on the invoice ID) for quick lookup and filing.
        </p>

        <h3 className="mt-5 font-medium">Print & PDF Export (A4)</h3>
        <ul className="list-disc ml-6 mt-2 space-y-2 text-slate-700">
          <li>Use default margins and 100% scale in the Print dialog for best fidelity.</li>
          <li>Prefer system fonts or ensure custom fonts are embedded.</li>
          <li>Header/footer elements are optimized for a clean, client-ready layout.</li>
        </ul>

        <h3 className="mt-5 font-medium">Saving & History</h3>
        <p className="mt-2 text-slate-700">
          After you <strong>Print</strong> or <strong>Download PDF</strong>, the invoice is saved to your
          browser (<em>localStorage</em>). Visit <strong>History</strong> to browse by month, preview, and re-print.
          Clearing site data or switching devices will remove local history.
        </p>
      </section>

      {/* Tips */}
      <section className="mt-10">
        <h2 className="text-xl font-semibold">Tips & Shortcuts</h2>
        <ul className="list-disc ml-6 mt-3 space-y-2 text-slate-700">
          <li>Use <strong>Tab</strong> to move quickly through fields.</li>
          <li>
            Keep item names consistent across invoices to simplify bookkeeping and client recognition.
          </li>
          <li>
            Add clear notes and payment terms (e.g., <em>Net 7 / Net 15</em>) to avoid disputes.
          </li>
        </ul>
      </section>

      {/* Troubleshooting */}
      <section className="mt-10">
        <h2 className="text-xl font-semibold">Troubleshooting</h2>
        <details className="mt-3">
          <summary className="font-medium cursor-pointer">
            PDF looks different from the screen
          </summary>
          <p className="mt-2 text-slate-700">
            In your Print dialog, use 100% scale and default margins. If using custom fonts,
            ensure they are embedded or switch to system-safe fonts.
          </p>
        </details>
        <details className="mt-3">
          <summary className="font-medium cursor-pointer">
            History does not show my invoice
          </summary>
          <p className="mt-2 text-slate-700">
            Invoices save after a successful Print/PDF. If you cleared site data or changed
            devices/browsers, the local history will be empty.
          </p>
        </details>
        <p className="mt-3">
          Still need help? Visit <a className="underline" href="/support">Support</a> or{" "}
          <a className="underline" href="/contact">Contact</a>.
        </p>
      </section>

      {/* FAQ */}
      <section className="mt-10">
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

      {/* Internal links */}
      <nav className="mt-10 text-sm text-slate-600">
        <a className="underline mr-4" href="/">Home</a>
        <a className="underline mr-4" href="/support">Support</a>
        <a className="underline" href="/contact">Contact</a>
      </nav>
    </main>
  );
}
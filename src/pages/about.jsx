// src/pages/about.jsx
import { SEO } from "../components/SEO";

export default function AboutPage() {
  const title = "About InvoiceNotepad — Fast, Privacy-Friendly Online Invoice Generator";
  const description =
    "What is InvoiceNotepad? A free online invoice generator with PDF export, payment QR, barcode, local history, and no sign-up.";

  return (
    <main className="container mx-auto px-4 py-8 max-w-3xl">
      <SEO
        title={title}
        description={description}
        canonical="https://invoicenotepad.com/about"
        jsonLd={[
          {
            "@context": "https://schema.org",
            "@type": "AboutPage",
            name: "About InvoiceNotepad",
            url: "https://invoicenotepad.com/about",
          },
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://invoicenotepad.com/" },
              { "@type": "ListItem", position: 2, name: "About", item: "https://invoicenotepad.com/about" },
            ],
          },
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "InvoiceNotepad",
            url: "https://invoicenotepad.com/",
            logo: "https://invoicenotepad.com/public/logo.png"
          },
        ]}
      />

      <h1 className="text-3xl md:text-4xl font-bold tracking-tight">About InvoiceNotepad</h1>
      <p className="mt-3 text-slate-600">
        InvoiceNotepad helps freelancers, agencies, and small businesses create professional invoices online—fast. No
        sign-up, no friction: fill in your details, add items and taxes, include a payment QR and barcode, and export a
        clean, print-ready PDF.
      </p>

      <section className="mt-8 grid md:grid-cols-2 gap-6">
        <div className="rounded-2xl border p-5">
          <h2 className="text-lg font-semibold">Principles</h2>
          <ul className="mt-3 list-disc ml-5 space-y-2">
            <li><strong>Privacy-first:</strong> Invoices are saved locally on your device (no server storage).</li>
            <li><strong>Speed:</strong> Minimal UI, instant calculations, A4 print-optimized layout.</li>
            <li><strong>Clarity:</strong> Clean design with barcode and optional payment QR for faster payments.</li>
          </ul>
        </div>
        <div className="rounded-2xl border p-5">
          <h2 className="text-lg font-semibold">Key Features</h2>
          <ul className="mt-3 list-disc ml-5 space-y-2">
            <li>Country → Currency auto-selection (overridable)</li>
            <li>Per-line tax %, discounts, shipping, and rounding</li>
            <li>Local history saved after Print/PDF</li>
            <li>Unique barcode + optional payment QR</li>
          </ul>
        </div>
      </section>

      <section className="mt-8">
        <h2 className="text-lg font-semibold">Who It’s For</h2>
        <ul className="mt-3 list-disc ml-5 space-y-2">
          <li>Freelancers and consultants who need quick, clean invoices</li>
          <li>Agencies and small businesses that want a free invoice generator</li>
          <li>Anyone who prefers no sign-up and local privacy</li>
        </ul>
      </section>

      <section className="mt-8">
        <h2 className="text-lg font-semibold">Roadmap</h2>
        <ul className="mt-3 list-disc ml-5 space-y-2">
          <li>More templates: Proforma, Estimate/Quote, Receipt</li>
          <li>Localization & i18n (currencies, formats)</li>
          <li>Optional export to image formats</li>
        </ul>
      </section>

      <section className="mt-8">
        <h2 className="text-lg font-semibold">Trust & Privacy</h2>
        <p className="mt-2 text-slate-700">
          We keep things simple and transparent. Invoices are generated in your browser, and your history is stored
          locally. For details, read our <a className="underline" href="/privacy">Privacy Policy</a>.
        </p>
      </section>

      <nav className="mt-10 text-sm text-slate-600">
        <a className="underline mr-4" href="/">Home</a>
        <a className="underline mr-4" href="/docs">Docs</a>
        <a className="underline" href="/contact">Contact</a>
      </nav>
    </main>
  );
}
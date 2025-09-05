// src/pages/contact.jsx
import { SEO } from "../components/SEO";

export default function ContactPage() {
  const title = "Contact Us | InvoiceNotepad";
  const description =
    "Get in touch with the InvoiceNotepad team for support, feedback, and partnership inquiries. Typical response time: 1–2 business days.";

  return (
    <main className="container mx-auto px-4 py-8 max-w-3xl">
      <SEO
        title={title}
        description={description}
        canonical="https://invoicenotepad.com/contact"
        jsonLd={[
          {
            "@context": "https://schema.org",
            "@type": "ContactPage",
            name: "Contact InvoiceNotepad",
            url: "https://invoicenotepad.com/contact",
          },
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://invoicenotepad.com/" },
              { "@type": "ListItem", position: 2, name: "Contact", item: "https://invoicenotepad.com/contact" },
            ],
          },
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "InvoiceNotepad",
            url: "https://invoicenotepad.com/",
            logo: "https://invoicenotepad.com/public/logo.png",
            contactPoint: [
              {
                "@type": "ContactPoint",
                contactType: "customer support",
                email: "support@invoicenotepad.com",
                availableLanguage: ["en"],
              },
            ],
          },
        ]}
      />

      <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Contact Us</h1>
      <p className="mt-3 text-slate-600">
        We’d love to hear from you. For quick answers, see the{" "}
        <a className="underline" href="/support">Help Center</a> and{" "}
        <a className="underline" href="/docs">Documentation</a>.
      </p>

      <section className="mt-6 grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border p-5">
          <h2 className="text-lg font-semibold">Email</h2>
          <p className="mt-2">
            <a className="underline" href="mailto:support@invoicenotepad.com">support@invoicenotepad.com</a>
          </p>
          <p className="mt-2 text-sm text-slate-600">Typical response time: 1–2 business days</p>
          <p className="mt-3 text-sm">
            Include your browser, OS, and steps to reproduce if reporting a bug.
          </p>
        </div>

        <div className="rounded-2xl border p-5">
          <h2 className="text-lg font-semibold">Bug Report Checklist</h2>
          <ul className="mt-2 list-disc ml-5 space-y-1 text-sm">
            <li>Steps to reproduce</li>
            <li>Expected vs. actual behavior</li>
            <li>Browser & OS</li>
            <li>Screenshot (no sensitive data)</li>
          </ul>
        </div>
      </section>

      <section className="mt-8">
        <h2 className="text-lg font-semibold">Feedback & Features</h2>
        <p className="mt-2 text-slate-700">
          Suggest improvements or request new templates (Proforma, Estimate/Quote, Receipt). Your feedback helps us
          build better tools.
        </p>
      </section>

      <nav className="mt-10 text-sm text-slate-600">
        <a className="underline mr-4" href="/">Home</a>
        <a className="underline mr-4" href="/support">Support</a>
        <a className="underline" href="/docs">Docs</a>
      </nav>
    </main>
  );
}

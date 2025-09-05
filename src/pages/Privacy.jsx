// src/pages/privacy.jsx
import { SEO } from "../components/SEO";

export default function PrivacyPage() {
  const title = "Privacy Policy | InvoiceNotepad";
  const description =
    "Learn how InvoiceNotepad handles your data. Invoices are generated client-side and stored locally in your browser—no sign-up required.";
  const updated = "Sep 5, 2025";

  return (
    <main className="container mx-auto px-4 py-8 max-w-3xl">
      <SEO
        title={title}
        description={description}
        canonical="https://invoicenotepad.com/privacy"
        jsonLd={[
          {
            "@context": "https://schema.org",
            "@type": "PrivacyPolicy",
            name: "Privacy Policy",
            url: "https://invoicenotepad.com/privacy",
          },
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://invoicenotepad.com/" },
              { "@type": "ListItem", position: 2, name: "Privacy", item: "https://invoicenotepad.com/privacy" },
            ],
          },
        ]}
      />

      <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Privacy Policy</h1>
      <p className="mt-3 text-slate-600">Last updated: {updated}</p>

      <section className="mt-6 space-y-4 text-slate-700 leading-7">
        <h2 className="text-lg font-semibold">1. Overview</h2>
        <p>
          InvoiceNotepad is designed to be privacy-friendly. You can create invoices online and export print-ready PDFs
          without creating an account. By using the Service, you consent to this Privacy Policy.
        </p>

        <h2 className="text-lg font-semibold">2. Data We Process</h2>
        <ul className="list-disc ml-6 space-y-2">
          <li>
            <strong>Invoice data:</strong> Entered by you and processed client-side. After you Print or Download PDF,
            invoices are saved to your browser’s localStorage. We do not transmit invoice content to our servers.
          </li>
          <li>
            <strong>Technical logs:</strong> Basic operational data (e.g., error logs, performance) may be processed to
            maintain and secure the Service.
          </li>
          <li>
            <strong>Analytics:</strong> We may use privacy-aware analytics to understand aggregated usage. Where
            supported, IPs may be truncated or anonymized.
          </li>
        </ul>

        <h2 className="text-lg font-semibold">3. Cookies & Local Storage</h2>
        <p>
          Cookies may be used for essential functionality and analytics. Invoice history is stored in localStorage on
          your device. Clearing site data or switching browsers/devices removes your local history.
        </p>

        <h2 className="text-lg font-semibold">4. Data Sharing</h2>
        <p>
          We do not sell your personal information. Limited service providers (hosting, analytics) may process technical
          data under contractual safeguards and only as necessary to operate the Service.
        </p>

        <h2 className="text-lg font-semibold">5. Data Security</h2>
        <p>
          We apply reasonable technical and organizational measures. No internet service is 100% secure—please keep your
          browser and device up to date and avoid sharing sensitive information inside invoice notes.
        </p>

        <h2 className="text-lg font-semibold">6. Your Choices</h2>
        <ul className="list-disc ml-6 space-y-2">
          <li>Clear localStorage to remove saved invoices.</li>
          <li>Use private browsing or a separate browser profile for isolation.</li>
          <li>Adjust cookie/analytics preferences via your browser settings.</li>
        </ul>

        <h2 className="text-lg font-semibold">7. International Users</h2>
        <p>
          Your data may be processed in locations where we or our providers operate. We take steps to protect data in
          accordance with applicable laws.
        </p>

        <h2 className="text-lg font-semibold">8. Children</h2>
        <p>The Service is not directed to children under 13. If you believe a child used the Service, please contact us.</p>

        <h2 className="text-lg font-semibold">9. Changes to this Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. Material changes will be reflected by the “Last updated”
          date above.
        </p>

        <h2 className="text-lg font-semibold">10. Contact</h2>
        <p>
          Privacy questions? Email <a className="underline" href="mailto:support@invoicenotepad.com">support@invoicenotepad.com</a> or visit our{" "}
          <a className="underline" href="/contact">Contact</a> page.
        </p>
      </section>

      <nav className="mt-10 text-sm text-slate-600">
        <a className="underline mr-4" href="/">Home</a>
        <a className="underline mr-4" href="/docs">Docs</a>
        <a className="underline" href="/support">Support</a>
      </nav>
    </main>
  );
}
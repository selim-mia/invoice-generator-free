// src/pages/terms.jsx
import { SEO } from "../components/SEO";

export default function TermsPage() {
  const title = "Terms of Service | InvoiceNotepad";
  const description =
    "Read the terms that govern your use of InvoiceNotepad, a free online invoice generator with print-ready PDF export.";
  const updated = "Sep 5, 2025";

  return (
    <main className="container mx-auto px-4 py-8 max-w-3xl">
      <SEO
        title={title}
        description={description}
        canonical="https://invoicenotepad.com/terms"
        jsonLd={[
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Terms of Service",
            url: "https://invoicenotepad.com/terms",
          },
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://invoicenotepad.com/" },
              { "@type": "ListItem", position: 2, name: "Terms", item: "https://invoicenotepad.com/terms" },
            ],
          },
        ]}
      />

      <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Terms of Service</h1>
      <p className="mt-3 text-slate-600">Last updated: {updated}</p>

      <section className="mt-6 space-y-4 text-slate-700 leading-7">
        <p>
          By accessing or using InvoiceNotepad (the “Service”), you agree to these Terms. If you do not agree, do not
          use the Service.
        </p>

        <h2 className="text-lg font-semibold">1. Use of the Service</h2>
        <p>
          The Service provides tools to create invoices and export print-ready PDFs. You agree to use the Service only
          for lawful purposes and in accordance with applicable laws and regulations.
        </p>

        <h2 className="text-lg font-semibold">2. Accounts</h2>
        <p>
          No sign-up is required to use the Service. If optional accounts are introduced in the future, additional terms
          may apply and will be provided at that time.
        </p>

        <h2 className="text-lg font-semibold">3. Content & Data</h2>
        <p>
          Invoice content is entered by you. After printing or exporting to PDF, a copy may be stored locally in your
          browser. You are responsible for the accuracy, legality, and backup of your data.
        </p>

        <h2 className="text-lg font-semibold">4. Acceptable Use</h2>
        <ul className="list-disc ml-6 space-y-2">
          <li>No attempts to disrupt, overload, reverse-engineer, or bypass security of the Service.</li>
          <li>No use of the Service to create or transmit unlawful, harmful, or infringing content.</li>
        </ul>

        <h2 className="text-lg font-semibold">5. Intellectual Property</h2>
        <p>
          The Service, including its design and code, is protected by intellectual property laws. You retain rights to
          the invoice content you create.
        </p>

        <h2 className="text-lg font-semibold">6. Warranty Disclaimer</h2>
        <p>
          The Service is provided “AS IS” and “AS AVAILABLE,” without warranties of any kind, express or implied,
          including merchantability, fitness for a particular purpose, and non-infringement.
        </p>

        <h2 className="text-lg font-semibold">7. Limitation of Liability</h2>
        <p>
          To the maximum extent permitted by law, we will not be liable for any indirect, incidental, special,
          consequential, or punitive damages, or any loss of profits, data, or goodwill arising from your use of the
          Service.
        </p>

        <h2 className="text-lg font-semibold">8. Indemnification</h2>
        <p>
          You agree to indemnify and hold harmless the Service and its operators from any claims arising out of your use
          of the Service or your violation of these Terms.
        </p>

        <h2 className="text-lg font-semibold">9. Termination</h2>
        <p>
          We may suspend or terminate access to the Service at any time for any reason, including violation of these
          Terms.
        </p>

        <h2 className="text-lg font-semibold">10. Changes to the Terms</h2>
        <p>
          We may modify these Terms at any time. Continued use of the Service after changes become effective constitutes
          acceptance of the revised Terms.
        </p>

        <h2 className="text-lg font-semibold">11. Governing Law</h2>
        <p>
          These Terms will be governed by and construed in accordance with applicable laws of your jurisdiction, without
          regard to conflict of laws principles.
        </p>

        <h2 className="text-lg font-semibold">12. Contact</h2>
        <p>
          Questions about these Terms? Email{" "}
          <a className="underline" href="mailto:support@invoicenotepad.com">support@invoicenotepad.com</a> or visit{" "}
          <a className="underline" href="/contact">Contact</a>.
        </p>
      </section>

      <nav className="mt-10 text-sm text-slate-600">
        <a className="underline mr-4" href="/">Home</a>
        <a className="underline mr-4" href="/privacy">Privacy</a>
        <a className="underline" href="/contact">Contact</a>
      </nav>
    </main>
  );
}
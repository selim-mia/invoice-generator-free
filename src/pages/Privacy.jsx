export default function Privacy() {
  return (
    <main className="max-w-3xl mx-auto p-6 space-y-6">
      <h1 className="text-2xl font-bold">Privacy Policy</h1>
      <p><strong>Last updated:</strong> {new Date().toLocaleDateString()}</p>

      <section>
        <h2 className="text-lg font-semibold">Overview</h2>
        <p>InvoiceNotepad processes data locally in your browser. We do not collect or store your invoices on our servers.</p>
      </section>

      <section>
        <h2 className="text-lg font-semibold">Information We Process</h2>
        <ul className="list-disc pl-5 space-y-1">
          <li>Invoice inputs (seller/buyer/items) — stored in your browser’s localStorage.</li>
          <li>Optional logo image — stored locally.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-lg font-semibold">Cookies & Analytics</h2>
        <p>We aim to avoid tracking. If analytics are enabled in the future, we will update this page and request consent where required.</p>
      </section>

      <section>
        <h2 className="text-lg font-semibold">Data Retention</h2>
        <p>Data persists in your localStorage until you clear it or reset within the app.</p>
      </section>

      <section>
        <h2 className="text-lg font-semibold">Contact</h2>
        <p>Questions? Email <a href="mailto:privacy@invoicenotepad.com" className="underline">privacy@invoicenotepad.com</a>.</p>
      </section>
    </main>
  );
}
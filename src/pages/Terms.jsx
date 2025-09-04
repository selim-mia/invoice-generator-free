export default function Terms() {
  return (
    <main className="max-w-3xl mx-auto p-6 space-y-6">
      <h1 className="text-2xl font-bold">Terms of Use</h1>
      <p><strong>Last updated:</strong> {new Date().toLocaleDateString()}</p>

      <section>
        <h2 className="text-lg font-semibold">Acceptance</h2>
        <p>By using InvoiceNotepad, you agree to these Terms. If you do not agree, do not use the service.</p>
      </section>

      <section>
        <h2 className="text-lg font-semibold">License</h2>
        <p>InvoiceNotepad is provided “as is” for creating invoices. You are responsible for verifying accuracy and compliance with local laws.</p>
      </section>

      <section>
        <h2 className="text-lg font-semibold">Limitation of Liability</h2>
        <p>We are not liable for lost data, damages, or business losses arising from your use of the app.</p>
      </section>

      <section>
        <h2 className="text-lg font-semibold">Changes</h2>
        <p>We may update these Terms. Continued use means you accept the changes.</p>
      </section>

      <section>
        <h2 className="text-lg font-semibold">Contact</h2>
        <p>Email <a href="mailto:legal@invoicenotepad.com" className="underline">legal@invoicenotepad.com</a>.</p>
      </section>
    </main>
  );
}
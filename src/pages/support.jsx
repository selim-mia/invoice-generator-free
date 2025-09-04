export default function Support() {
  return (
    <main className="max-w-3xl mx-auto p-6 space-y-6">
      <h1 className="text-2xl font-bold">Support</h1>
      <p>Need help with InvoiceNotepad? We’re here.</p>

      <section>
        <h2 className="text-lg font-semibold">Contact</h2>
        <p>Email: <a className="underline" href="mailto:support@invoicenotepad.com">support@invoicenotepad.com</a></p>
        <p>Typical response time: 1–2 business days.</p>
      </section>

      <section>
        <h2 className="text-lg font-semibold">Troubleshooting</h2>
        <ul className="list-disc pl-5 space-y-1">
          <li>Refresh the page and try again.</li>
          <li>Clear browser cache if totals look off.</li>
          <li>For print issues, use A4 size and 100% scale.</li>
        </ul>
      </section>
    </main>
  );
}
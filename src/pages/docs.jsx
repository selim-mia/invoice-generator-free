export default function Docs() {
  return (
    <main className="max-w-3xl mx-auto p-6 space-y-6">
      <h1 className="text-2xl font-bold">Documentation</h1>

      <section>
        <h2 className="text-lg font-semibold">Quick Start</h2>
        <ol className="list-decimal pl-5 space-y-1">
          <li>Fill in Seller and Buyer details.</li>
          <li>Add items, taxes, discounts, shipping as needed.</li>
          <li>Choose currency and country (auto-maps currency).</li>
          <li>Optionally add a logo, signature, and payment QR.</li>
          <li>Print or export as PDF.</li>
        </ol>
      </section>

      <section>
        <h2 className="text-lg font-semibold">Features</h2>
        <ul className="list-disc pl-5 space-y-1">
          <li>Live totals with tax/discount calculations.</li>
          <li>Barcode + QR code for quick scanning and payment links.</li>
          <li>LocalStorage persistence—your work stays in the browser.</li>
          <li>Print-optimized layout for A4.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-lg font-semibold">FAQ</h2>
        <p className="font-medium">Do you store my invoices on a server?</p>
        <p>No. Everything is processed client-side and saved locally in your browser.</p>
        <p className="font-medium mt-3">Can I change currency?</p>
        <p>Yes. Set your country (auto-sets currency) or override it manually.</p>
        <p className="font-medium mt-3">How do I contact support?</p>
        <p>Email <a href="mailto:support@invoicenotepad.com" className="underline">support@invoicenotepad.com</a>.</p>
      </section>
    </main>
  );
}
export default function About() {
  return (
    <main className="max-w-3xl mx-auto p-6 space-y-6">
      <h1 className="text-2xl font-bold">About InvoiceNotepad</h1>
      <p>InvoiceNotepad is a lightweight, privacy-friendly invoice builder that runs entirely in your browser.</p>
      <h2 className="text-lg font-semibold">Why InvoiceNotepad?</h2>
      <ul className="list-disc pl-5 space-y-1">
        <li>No sign-up, no server storage—your data stays on your device.</li>
        <li>Clean design, fast workflow, print-ready PDFs.</li>
        <li>Barcode & QR for modern billing flows.</li>
      </ul>
    </main>
  );
}
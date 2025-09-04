export default function Contact() {
  return (
    <main className="max-w-3xl mx-auto p-6 space-y-6">
      <h1 className="text-2xl font-bold">Contact</h1>
      <p>We’d love to hear from you.</p>
      <ul className="list-disc pl-5">
        <li>Email: <a className="underline" href="mailto:support@invoicenotepad.com">support@invoicenotepad.com</a></li>
        <li>Press: <a className="underline" href="mailto:press@invoicenotepad.com">press@invoicenotepad.com</a></li>
        <li>Legal: <a className="underline" href="mailto:legal@invoicenotepad.com">legal@invoicenotepad.com</a></li>
      </ul>
    </main>
  );
}
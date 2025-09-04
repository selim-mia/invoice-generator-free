import { Link } from "react-router-dom";

export default function SiteFooter() {
  return (
    <footer className="border-t mt-10">
      <div className="max-w-6xl mx-auto px-4 py-6 text-sm text-gray-600 flex flex-col md:flex-row items-center justify-between gap-3">
        <div>© {new Date().getFullYear()} InvoiceNotepad All Right reserved</div>
        <nav className="flex flex-wrap gap-3">
          {/* <Link to="/about" className="hover:underline">About</Link>
          <Link to="/docs" className="hover:underline">Docs</Link>
          <Link to="/support" className="hover:underline">Support</Link> */}
          <Link to="/privacy" className="hover:underline">Privacy</Link>
          <Link to="/terms" className="hover:underline">Terms</Link>
          <Link to="/contact" className="hover:underline">Contact</Link>
        </nav>
      </div>
    </footer>
  );
}

import { Link, NavLink } from "react-router-dom";

const navLink =
  "px-3 py-2 rounded-lg text-sm hover:bg-gray-100 transition";
const active =
  "bg-gray-900 text-white hover:bg-gray-900";

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-20 bg-white/80 backdrop-blur border-b">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between gap-3">
        <Link to="/" className="font-bold tracking-tight text-lg">
          InvoiceNotepad
        </Link>
        <nav className="flex flex-wrap gap-2">
          <NavLink to="/" className={({isActive}) => `${navLink} ${isActive ? active : ""}`}>Home</NavLink>
          <NavLink to="/docs" className={({isActive}) => `${navLink} ${isActive ? active : ""}`}>Docs</NavLink>
          <NavLink to="/support" className={({isActive}) => `${navLink} ${isActive ? active : ""}`}>Support</NavLink>
          <NavLink to="/about" className={({isActive}) => `${navLink} ${isActive ? active : ""}`}>About</NavLink>
          {/* <NavLink to="/privacy" className={({isActive}) => `${navLink} ${isActive ? active : ""}`}>Privacy</NavLink> */}
          {/* <NavLink to="/terms" className={({isActive}) => `${navLink} ${isActive ? active : ""}`}>Terms</NavLink>
          <NavLink to="/contact" className={({isActive}) => `${navLink} ${isActive ? active : ""}`}>Contact</NavLink> */}
        </nav>
      </div>
    </header>
  );
}

// src/components/SiteFooter.jsx
import React from "react";

export default function SiteFooter() {
  return (
    <footer className="site-footer border-t bg-white">
      <div className="max-w-6xl mx-auto px-4 py-6 grid gap-4 md:grid-cols-3 text-sm text-gray-600">
        <div>
          <div className="font-semibold text-gray-800">Invoice Generator</div>
          <p className="mt-1">Simple, fast invoicing right in your browser.</p>
        </div>
        <div className="space-y-1">
          <div className="font-medium text-gray-800">Links</div>
          <a href="#" className="block hover:text-black">Privacy</a>
          <a href="#" className="block hover:text-black">Terms</a>
          <a href="#" className="block hover:text-black">Contact</a>
        </div>
        <div className="md:text-right">
          <div>Made with ❤️</div>
          <div className="mt-1">© {new Date().getFullYear()} Your Company</div>
        </div>
      </div>
    </footer>
  );
}

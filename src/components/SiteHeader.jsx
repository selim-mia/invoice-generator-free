// src/components/SiteHeader.jsx
import React from "react";
import { ReceiptText } from "lucide-react";

export default function SiteHeader() {
  return (
    <header className="site-header sticky top-0 z-20 bg-white/80 backdrop-blur border-b">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <ReceiptText className="w-6 h-6 text-black"/>
          <span className="text-lg font-semibold"></span>
        </div>
        <nav className="hidden md:flex items-center gap-5 text-sm text-gray-600">
          <a href="#" className="hover:text-black">Docs</a>
          <a href="#" className="hover:text-black">Support</a>
          <a href="#" className="hover:text-black">About</a>
        </nav>
      </div>
    </header>
  );
}

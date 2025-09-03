import React from "react";
import SiteHeader from "./components/SiteHeader";
import SiteFooter from "./components/SiteFooter";
import InvoiceGenerator from "./InvoiceGenerator";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Project-level header */}
      <SiteHeader />

      {/* উপরের স্টিকি হেডারের নিচে কনটেন্ট যেন ঢুকে না যায় তাই padding-top */}
      <main className="flex-1 pt-4 md:pt-4">
        <InvoiceGenerator />
      </main>

      {/* Project-level footer */}
      <SiteFooter />
    </div>
  );
}

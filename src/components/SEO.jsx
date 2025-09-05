// src/components/SEO.jsx
import { useEffect } from "react";

export function SEO({ title, description, canonical, jsonLd }) {
  useEffect(() => {
    if (title) document.title = title;

    if (description) {
      let m = document.querySelector('meta[name="description"]');
      if (!m) {
        m = document.createElement("meta");
        m.setAttribute("name", "description");
        document.head.appendChild(m);
      }
      m.setAttribute("content", description);
    }

    if (canonical) {
      let l = document.querySelector('link[rel="canonical"]');
      if (!l) {
        l = document.createElement("link");
        l.setAttribute("rel", "canonical");
        document.head.appendChild(l);
      }
      l.setAttribute("href", canonical);
    }

    const existing = document.getElementById("jsonld-page");
    if (existing) existing.remove();
    if (jsonLd) {
      const s = document.createElement("script");
      s.type = "application/ld+json";
      s.id = "jsonld-page";
      s.text = JSON.stringify(jsonLd);
      document.head.appendChild(s);
    }
  }, [title, description, canonical, jsonLd]);

  return null;
}
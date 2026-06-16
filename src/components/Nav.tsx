"use client";

import { useState } from "react";

const links = [
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#currently-exploring", label: "Exploring" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#F8F6F1] border-b border-[#e8e4dc]">
        <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
          <span className="font-semibold text-[#1e3a5f] text-sm tracking-wide">
            Ade Sembiring
          </span>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-6 text-sm text-[#666666]">
            {links.slice(0, -1).map((l) => (
              <a key={l.href} href={l.href} className="hover:text-[#1e3a5f] transition-colors">
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              className="px-4 py-1.5 bg-[#1e3a5f] text-white rounded text-sm hover:bg-[#162d4a] transition-colors"
            >
              Contact
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <span
              className={`block w-5 h-0.5 bg-[#1e3a5f] transition-all duration-200 ${
                open ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`block w-5 h-0.5 bg-[#1e3a5f] transition-all duration-200 ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-5 h-0.5 bg-[#1e3a5f] transition-all duration-200 ${
                open ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </button>
        </div>

        {/* Mobile dropdown */}
        {open && (
          <div className="md:hidden border-t border-[#e8e4dc] bg-[#F8F6F1]">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block px-6 py-3.5 text-sm text-[#1a1a1a] hover:text-[#1e3a5f] hover:bg-[#f0ece4] border-b border-[#e8e4dc] last:border-b-0 transition-colors"
              >
                {l.label}
              </a>
            ))}
          </div>
        )}
      </nav>
    </>
  );
}


"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "For Employers", href: "/employers" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-taupe/70 bg-ivory/95 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">

        {/* Brand logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl font-semibold text-gold">↗</span>
          <span className="font-display text-3xl font-semibold tracking-tight text-charcoal">
            CareerFlow
          </span>
        </Link>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-sage transition-colors hover:text-gold"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <Link
          href="/contact"
          className="hidden border border-charcoal px-5 py-3 text-sm font-medium text-charcoal transition-colors hover:bg-charcoal hover:text-white md:inline-flex"
        >
          Get Started
        </Link>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          className="text-2xl text-charcoal md:hidden"
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </nav>

      {/* Mobile navigation */}
      {isOpen && (
        <div className="border-t border-taupe px-6 py-5 md:hidden">
          <div className="flex flex-col gap-5">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-sm font-medium text-charcoal hover:text-gold"
              >
                {link.label}
              </Link>
            ))}

            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="w-fit bg-charcoal px-5 py-3 text-sm text-white"
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

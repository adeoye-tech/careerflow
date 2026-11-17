"use client"
import Link from "next/link";

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "For Employers", href: "/employers" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-charcoal px-6 pb-8 pt-16 text-white lg:px-10">
      <div className="mx-auto max-w-7xl">

        <div className="grid gap-12 border-b border-white/15 pb-12 md:grid-cols-2 lg:grid-cols-3">

          {/* Brand */}
          <div>
            <Link href="/" className="inline-flex items-center gap-2">
              <span className="text-2xl text-gold">↗</span>
              <span className="font-display text-3xl font-semibold">
                CareerFlow
              </span>
            </Link>

            <p className="mt-5 max-w-xs text-sm leading-7 text-white/60">
              Building careers. Creating possibilities.
              Empowering people and connecting talent with opportunity.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              Explore
            </h3>

            <ul className="mt-6 space-y-4">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/65 transition-colors hover:text-gold"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              Get in Touch
            </h3>

            <p className="mt-6 max-w-xs text-sm leading-7 text-white/65">
              Have a question or want to explore how CareerFlow can
              support your next step?
            </p>

            <Link
              href="/contact"
              className="mt-5 inline-flex items-center gap-2 border-b border-gold pb-2 text-sm font-medium text-white transition-colors hover:text-gold"
            >
              Contact Us
              <span aria-hidden="true">↗</span>
            </Link>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="flex flex-col gap-4 pt-8 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between">
         <p>
  © 2026 CareerFlow. All rights reserved.
</p>
          <p>
            Building careers. Creating possibilities.
          </p>
        </div>

      </div>
    </footer>
  );
}

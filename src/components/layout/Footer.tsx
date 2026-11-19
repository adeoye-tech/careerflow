
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

        <div className="grid gap-12 border-b border-white/10 pb-12 md:grid-cols-2 lg:grid-cols-3">

          {/* Brand */}
          <div>
            <Link href="/" className="inline-flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-gold text-lg font-bold text-white">
                C
              </span>

              <span className="text-2xl font-extrabold tracking-tight">
                CareerFlow
              </span>
            </Link>

            <p className="mt-5 max-w-xs text-sm leading-7 text-slate-300">
              Building careers. Creating possibilities.
              Empowering people and connecting talent with opportunity.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-sm font-bold">
              Explore
            </h3>

            <ul className="mt-6 space-y-4">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-300 transition-colors hover:text-blue-400"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-bold">
              Let's Connect
            </h3>

            <p className="mt-6 max-w-xs text-sm leading-7 text-slate-300">
              Have a question or want to explore how CareerFlow can
              support your next step?
            </p>

            <Link
              href="/contact"
              className="mt-6 inline-flex items-center gap-2 rounded-lg bg-gold px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-500"
            >
              Contact Us
              <span aria-hidden="true">→</span>
            </Link>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="flex flex-col gap-4 pt-8 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">
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

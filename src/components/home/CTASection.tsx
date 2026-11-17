
import Link from "next/link";

export default function CTASection() {
  return (
    <section className="bg-white px-6 py-24 md:py-32 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden bg-charcoal px-8 py-16 text-center sm:px-16 md:py-24">

          {/* Decorative elements */}
          <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full border border-white/10" />
          <div className="absolute -bottom-24 -left-16 h-72 w-72 rounded-full border border-gold/20" />

          {/* Content */}
          <div className="relative mx-auto max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
              Your Next Chapter Awaits
            </p>

            <h2 className="mt-6 font-display text-4xl font-medium leading-tight text-white sm:text-5xl lg:text-6xl">
              Ready to move
              <span className="block italic text-gold">
                forward?
              </span>
            </h2>

            <p className="mx-auto mt-7 max-w-xl text-sm leading-8 text-white/65 sm:text-base">
              Whether you are building your career or growing your team,
              CareerFlow is here to help you explore what is possible.
            </p>

            {/* Action buttons */}
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="w-full bg-gold px-8 py-4 text-sm font-semibold text-charcoal transition-colors hover:bg-white sm:w-auto"
              >
                Start Your Journey
              </Link>

              <Link
                href="/employers"
                className="w-full border border-white/40 px-8 py-4 text-sm font-semibold text-white transition-colors hover:border-gold hover:text-gold sm:w-auto"
              >
                Find Talent for Your Team
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

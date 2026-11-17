
import Link from "next/link";

export default function IntroSection() {
  return (
    <section className="bg-white px-6 py-24 md:py-32 lg:px-10">
      <div className="mx-auto max-w-7xl">

        <div className="grid gap-12 md:grid-cols-2 md:items-start">

          {/* Section label */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
              Who We Are
            </p>

            <div className="mt-8 h-px w-16 bg-gold" />
          </div>

          {/* Introduction content */}
          <div>
            <h2 className="font-display text-4xl font-medium leading-tight text-charcoal sm:text-5xl lg:text-6xl">
              Your career journey deserves
              <span className="italic text-gold">
                {" "}more possibilities.
              </span>
            </h2>

            <p className="mt-8 text-base leading-8 text-sage">
              At CareerFlow, we believe everyone deserves the opportunity
              to build a meaningful and fulfilling career. We bring together
              career guidance, professional development and talent solutions
              to help individuals and businesses move forward.
            </p>

            <p className="mt-5 text-base leading-8 text-sage">
              Whether you are taking your first career steps, seeking your
              next opportunity or looking for the right talent, we provide
              the support and resources to help you make progress.
            </p>

            <Link
              href="/about"
              className="mt-9 inline-flex items-center gap-3 border-b border-gold pb-2 text-sm font-semibold text-charcoal transition-colors hover:text-gold"
            >
              Discover CareerFlow
              <span aria-hidden="true">↗</span>
            </Link>
          </div>

        </div>

        {/* Brand statement */}
        <div className="mt-24 border-t border-taupe pt-8">
          <p className="font-display text-2xl italic text-charcoal sm:text-3xl">
            Building careers. Creating possibilities.
          </p>
        </div>

      </div>
    </section>
  );
}

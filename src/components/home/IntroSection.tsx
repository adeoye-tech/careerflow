
import Link from "next/link";
import Reveal from "@/components/ui/Reveal";

export default function IntroSection() {
  return (
    <section className="bg-ivory px-6 py-24 md:py-32 lg:px-10">
      <div className="mx-auto max-w-7xl">

        <Reveal className="grid gap-12 md:grid-cols-2 md:items-center">

          {/* Section label */}
          <div>
            <span className="inline-flex rounded-full bg-pale-blue px-4 py-2 text-xs font-semibold text-blue-700">
              WHO WE ARE
            </span>

            <h2 className="mt-7 max-w-lg text-4xl font-extrabold leading-tight tracking-tight text-charcoal sm:text-5xl lg:text-6xl">
              Your next career move
              <span className="text-gold"> starts with the right support.</span>
            </h2>
          </div>

          {/* Introduction content */}
          <div>
            <p className="text-base leading-8 text-sage sm:text-lg">
              At CareerFlow, we believe everyone deserves the opportunity
              to build a meaningful and fulfilling career. We bring together
              career guidance, professional development and talent solutions
              to help individuals and businesses move forward.
            </p>

            <p className="mt-6 text-base leading-8 text-sage sm:text-lg">
              Whether you are taking your first career steps, seeking your
              next opportunity or looking for the right talent, we provide
              the support and resources to help you make progress.
            </p>

            <Link
              href="/about"
              className="mt-9 inline-flex items-center gap-3 rounded-lg bg-charcoal px-6 py-4 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-gold"
            >
              Discover CareerFlow
              <span aria-hidden="true">→</span>
            </Link>
          </div>

        </Reveal>

        {/* Brand statement */}
        <Reveal delay={0.2} className="mt-24 border-t border-taupe pt-8">
          <p className="text-sm font-semibold tracking-wide text-sage">
            BUILDING CAREERS. CREATING POSSIBILITIES.
          </p>
        </Reveal>

      </div>
    </section>
  );
}

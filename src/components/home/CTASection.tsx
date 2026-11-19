
import Link from "next/link";
import Reveal from "@/components/ui/Reveal";

export default function CTASection() {
  return (
    <section className="bg-ivory px-6 py-24 md:py-32 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <Reveal className="relative overflow-hidden rounded-3xl bg-charcoal px-8 py-20 text-center sm:px-16 md:py-28">

          {/* Decorative elements */}
          <div className="absolute -right-20 -top-24 h-72 w-72 rounded-full border border-blue-400/20" />
          <div className="absolute -bottom-32 -left-20 h-80 w-80 rounded-full border border-blue-400/20" />
          <div className="absolute right-1/4 top-0 h-40 w-40 rounded-full bg-blue-500/10 blur-3xl" />

          {/* Content */}
          <div className="relative mx-auto max-w-3xl">
            <span className="inline-flex rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-2 text-xs font-semibold text-blue-300">
              YOUR NEXT CHAPTER AWAITS
            </span>

            <h2 className="mt-7 text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Ready to move
              <span className="block text-blue-400">
                forward?
              </span>
            </h2>

            <p className="mx-auto mt-7 max-w-xl text-base leading-8 text-slate-300">
              Whether you are building your career or growing your team,
              CareerFlow is here to help you explore what is possible.
            </p>

            {/* Action buttons */}
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="w-full rounded-lg bg-gold px-8 py-4 text-sm font-semibold text-white shadow-sm transition-all hover:-translate-y-0.5 hover:bg-blue-500 hover:shadow-lg sm:w-auto"
              >
                Start Your Journey
                <span className="ml-2" aria-hidden="true">→</span>
              </Link>

              <Link
                href="/employers"
                className="w-full rounded-lg border border-white/20 px-8 py-4 text-sm font-semibold text-white transition-colors hover:border-blue-400 hover:bg-white/5 sm:w-auto"
              >
                Find Talent for Your Team
              </Link>
            </div>
          </div>

        </Reveal>
      </div>
    </section>
  );
}

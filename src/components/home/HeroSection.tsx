
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/ui/Reveal";

export default function HeroSection() {
  return (
    <section className="overflow-hidden bg-white">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 py-20 md:grid-cols-2 md:gap-12 md:py-28 lg:px-10">

        {/* Hero content */}
        <Reveal className="max-w-xl">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-pale-blue px-4 py-2">
            <span className="h-2 w-2 rounded-full bg-gold" />
            <p className="text-xs font-semibold tracking-wide text-blue-700">
              Career Development & Talent Solutions
            </p>
          </div>

          <h1 className="text-5xl font-extrabold leading-[1.1] tracking-tight text-charcoal sm:text-6xl lg:text-7xl">
            Build a career
            <span className="block text-gold">
              without limits.
            </span>
          </h1>

          <p className="mt-7 max-w-lg text-base leading-8 text-sage sm:text-lg">
            Discover opportunities, develop your professional skills
            and take confident steps towards the career you want.
            We're here to help you move forward.
          </p>

          <p className="mt-5 text-sm font-semibold text-charcoal">
            Building careers. Creating possibilities.
          </p>

          {/* Call-to-action buttons */}
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-3 rounded-lg bg-gold px-7 py-4 text-sm font-semibold text-white shadow-sm transition-all hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-md"
            >
              Explore Our Services
              <span aria-hidden="true">→</span>
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg border border-taupe px-7 py-4 text-sm font-semibold text-charcoal transition-colors hover:border-gold hover:bg-pale-blue"
            >
              Get in Touch
            </Link>
          </div>

          <p className="mt-9 text-xs font-medium text-sage">
            Career growth starts with the right opportunity.
          </p>
        </Reveal>

        {/* Hero photograph */}
        <Reveal
          delay={0.2}
          className="relative mx-auto w-full max-w-lg"
        >
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-pale-blue shadow-xl shadow-slate-200/60">
            <Image
              src="/images/careerflow-hero.jpg"
              alt="Professional woman working on a laptop"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover object-center"
            />
          </div>

          {/* Floating information card */}
          <div className="absolute -bottom-5 -left-5 max-w-[230px] rounded-xl border border-taupe bg-white p-5 shadow-lg sm:-left-8">
            <p className="text-xs font-medium text-sage">
              Your next chapter
            </p>

            <p className="mt-2 text-lg font-bold leading-snug text-charcoal">
              Starts with a possibility.
            </p>
          </div>
        </Reveal>

      </div>
    </section>
  );
}

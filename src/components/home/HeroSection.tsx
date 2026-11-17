
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="overflow-hidden bg-ivory">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 md:grid-cols-2 md:py-28 lg:px-10">

        {/* Hero content */}
        <div className="max-w-xl">
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.25em] text-gold">
            Career Development & Talent Solutions
          </p>

          <h1 className="font-display text-5xl font-medium leading-[1.05] tracking-tight text-charcoal sm:text-6xl lg:text-7xl">
            Your next chapter
            <span className="block italic text-gold">
              starts here.
            </span>
          </h1>

          <p className="mt-7 max-w-lg text-base leading-8 text-sage sm:text-lg">
            We connect ambitious professionals with the guidance,
            opportunities and resources they need to build meaningful
            careers.
          </p>

          <p className="mt-5 font-display text-2xl italic text-charcoal">
            Building careers. Creating possibilities.
          </p>

          {/* Call-to-action buttons */}
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Link
              href="/services"
              className="bg-charcoal px-7 py-4 text-sm font-medium text-white transition-colors hover:bg-gold"
            >
              Explore Our Services
            </Link>

            <Link
              href="/contact"
              className="border border-taupe px-7 py-4 text-sm font-medium text-charcoal transition-colors hover:border-charcoal"
            >
              Get in Touch
            </Link>
          </div>

          <p className="mt-10 text-xs tracking-wide text-sage">
            Empowering people. Connecting possibilities.
          </p>
        </div>

        {/* Hero photograph */}
        <div className="relative mx-auto w-full max-w-lg">
          <div className="relative aspect-[4/5] overflow-hidden">
            <Image
              src="/images/careerflow-hero.jpg"
              alt="Professional woman working on a laptop"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover object-center"
            />

            {/* Image information overlay */}
            <div className="absolute bottom-8 left-8 right-8 border border-white/60 bg-white/85 p-6 backdrop-blur-sm">
              <p className="text-xs uppercase tracking-[0.2em] text-sage">
                Your potential, our purpose
              </p>

              <p className="mt-2 font-display text-3xl text-charcoal">
                A future full of possibilities.
              </p>
            </div>
          </div>

          {/* Decorative border */}
          <div className="absolute -bottom-4 -left-4 -z-10 h-full w-full border border-gold/50" />
        </div>

      </div>
    </section>
  );
}

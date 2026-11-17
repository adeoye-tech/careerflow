
import Link from "next/link";

const values = [
  {
    number: "01",
    title: "People First",
    description:
      "We believe meaningful career growth begins with understanding people, their ambitions and their potential.",
  },
  {
    number: "02",
    title: "Continuous Growth",
    description:
      "We encourage learning, improvement and the courage to pursue new possibilities at every career stage.",
  },
  {
    number: "03",
    title: "Purposeful Connections",
    description:
      "We believe the right connections between people and opportunities can create lasting professional value.",
  },
  {
    number: "04",
    title: "Integrity",
    description:
      "We value honesty, transparency and responsible support in every professional relationship.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* About hero */}
      <section className="bg-ivory px-6 py-24 md:py-32 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
            About CareerFlow
          </p>

          <h1 className="mt-6 max-w-4xl font-display text-5xl font-medium leading-tight text-charcoal sm:text-6xl lg:text-7xl">
            We believe every career
            <span className="italic text-gold"> has possibilities.</span>
          </h1>

          <p className="mt-8 max-w-2xl text-base leading-8 text-sage sm:text-lg">
            CareerFlow is a career development and talent solutions
            concept built around one simple belief: people deserve
            the guidance, resources and opportunities to build
            meaningful professional lives.
          </p>
        </div>
      </section>

      {/* Our story */}
      <section className="bg-white px-6 py-24 md:py-32 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
              Our Story
            </p>

            <h2 className="mt-6 font-display text-4xl font-medium leading-tight text-charcoal sm:text-5xl">
              Creating a clearer path to professional growth.
            </h2>
          </div>

          <div>
            <p className="text-base leading-8 text-sage">
              Navigating the world of work can be challenging.
              Finding opportunities, preparing for interviews
              and presenting professional skills all require
              direction and preparation.
            </p>

            <p className="mt-6 text-base leading-8 text-sage">
              CareerFlow brings career development, opportunity
              discovery and talent solutions together in one
              vision. We aim to support individuals as they grow
              and help organisations connect with talent.
            </p>
          </div>
        </div>
      </section>

      {/* Mission and vision */}
      <section className="bg-charcoal px-6 py-24 md:py-32 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-16 md:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
              Our Mission
            </p>

            <h2 className="mt-6 font-display text-4xl leading-tight text-white sm:text-5xl">
              Empowering people to build meaningful careers.
            </h2>

            <p className="mt-6 text-sm leading-8 text-white/65">
              To empower individuals with access to tools, guidance
              and opportunities that help them make progress in
              their professional journeys.
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
              Our Vision
            </p>

            <h2 className="mt-6 font-display text-4xl leading-tight text-white sm:text-5xl">
              Connecting ambition with possibility.
            </h2>

            <p className="mt-6 text-sm leading-8 text-white/65">
              To become a trusted career development and talent
              solutions platform connecting ambitious professionals
              with opportunities around the world.
            </p>
          </div>
        </div>
      </section>

      {/* Our values */}
      <section className="bg-ivory px-6 py-24 md:py-32 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
              What Guides Us
            </p>

            <h2 className="mt-5 font-display text-4xl font-medium leading-tight text-charcoal sm:text-5xl lg:text-6xl">
              Values that shape
              <span className="italic text-gold"> every step.</span>
            </h2>
          </div>

          <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <article
                key={value.number}
                className="border border-taupe bg-white p-7"
              >
                <span className="font-display text-4xl text-gold">
                  {value.number}
                </span>

                <h3 className="mt-10 font-display text-2xl text-charcoal">
                  {value.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-sage">
                  {value.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* About CTA */}
      <section className="bg-white px-6 py-20 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div>
            <h2 className="font-display text-4xl text-charcoal sm:text-5xl">
              Let's create possibilities.
            </h2>

            <p className="mt-4 text-sm leading-7 text-sage">
              Take the next step towards your professional goals.
            </p>
          </div>

          <Link
            href="/contact"
            className="bg-charcoal px-7 py-4 text-sm font-medium text-white transition-colors hover:bg-gold"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}

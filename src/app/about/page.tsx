
import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "About Us",

  description:
    "Learn about CareerFlow, our mission, vision and values. Discover our approach to career development, professional growth and talent solutions.",

  openGraph: {
    title: "About CareerFlow | Our Mission and Vision",
    description:
      "Discover the ideas, values and vision behind CareerFlow and our commitment to connecting ambition with opportunity.",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "About CareerFlow | Our Mission and Vision",
    description:
      "Learn about CareerFlow's vision for career development, professional growth and meaningful opportunities.",
  },
};

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
      <section className="overflow-hidden bg-white px-6 py-24 md:py-32 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <span className="inline-flex rounded-full bg-pale-blue px-4 py-2 text-xs font-semibold text-blue-700">
              ABOUT CAREERFLOW
            </span>

            <h1 className="mt-8 max-w-4xl text-5xl font-extrabold leading-[1.1] tracking-tight text-charcoal sm:text-6xl lg:text-7xl">
              We believe every career
              <span className="block text-gold">
                has possibilities.
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-base leading-8 text-sage sm:text-lg">
              CareerFlow is a career development and talent solutions
              concept built around one simple belief: people deserve
              the guidance, resources and opportunities to build
              meaningful professional lives.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Our story */}
      <section className="bg-ivory px-6 py-24 md:py-32 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2 md:items-center">
          <Reveal>
            <span className="inline-flex rounded-full bg-pale-blue px-4 py-2 text-xs font-semibold text-blue-700">
              OUR STORY
            </span>

            <h2 className="mt-7 max-w-xl text-4xl font-extrabold leading-tight tracking-tight text-charcoal sm:text-5xl">
              Creating a clearer path to professional growth.
            </h2>
          </Reveal>

          <Reveal delay={0.15}>
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
          </Reveal>
        </div>
      </section>

      {/* Mission and vision */}
      <section className="bg-charcoal px-6 py-24 text-white md:py-32 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2">
          <Reveal className="rounded-2xl border border-white/10 bg-white/[0.04] p-8 sm:p-10">
            <span className="text-xs font-bold tracking-widest text-blue-400">
              OUR MISSION
            </span>

            <h2 className="mt-7 text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl">
              Empowering people to build meaningful careers.
            </h2>

            <p className="mt-6 text-sm leading-8 text-slate-300">
              To empower individuals with access to tools, guidance
              and opportunities that help them make progress in
              their professional journeys.
            </p>

            <div className="mt-9 h-1 w-12 rounded-full bg-blue-500" />
          </Reveal>

          <Reveal delay={0.15} className="rounded-2xl border border-white/10 bg-white/[0.04] p-8 sm:p-10">
            <span className="text-xs font-bold tracking-widest text-blue-400">
              OUR VISION
            </span>

            <h2 className="mt-7 text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl">
              Connecting ambition with possibility.
            </h2>

            <p className="mt-6 text-sm leading-8 text-slate-300">
              To become a trusted career development and talent
              solutions platform connecting ambitious professionals
              with opportunities around the world.
            </p>

            <div className="mt-9 h-1 w-12 rounded-full bg-blue-500" />
          </Reveal>
        </div>
      </section>

      {/* Our values */}
      <section className="bg-white px-6 py-24 md:py-32 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <Reveal className="max-w-2xl">
            <span className="inline-flex rounded-full bg-pale-blue px-4 py-2 text-xs font-semibold text-blue-700">
              WHAT GUIDES US
            </span>

            <h2 className="mt-7 text-4xl font-extrabold leading-tight tracking-tight text-charcoal sm:text-5xl lg:text-6xl">
              Values that shape
              <span className="block text-gold">
                every step.
              </span>
            </h2>
          </Reveal>

          <Reveal
            delay={0.15}
            className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
          >
            {values.map((value) => (
              <article
                key={value.number}
                className="group flex min-h-[300px] flex-col rounded-2xl border border-taupe bg-white p-7 transition-all duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-900/5"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-pale-blue text-sm font-bold text-gold transition-colors group-hover:bg-gold group-hover:text-white">
                  {value.number}
                </span>

                <h3 className="mt-9 text-xl font-bold tracking-tight text-charcoal">
                  {value.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-sage">
                  {value.description}
                </p>
              </article>
            ))}
          </Reveal>
        </div>
      </section>

      {/* About CTA */}
      <section className="bg-ivory px-6 py-20 md:py-24 lg:px-10">
        <Reveal className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 rounded-2xl border border-taupe bg-white p-8 sm:p-12 md:flex-row md:items-center">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight text-charcoal sm:text-4xl">
              Let's create possibilities.
            </h2>

            <p className="mt-4 text-sm leading-7 text-sage">
              Take the next step towards your professional goals.
            </p>
          </div>

          <Link
            href="/contact"
            className="inline-flex items-center gap-3 rounded-lg bg-gold px-7 py-4 text-sm font-semibold text-white shadow-sm transition-all hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-md"
          >
            Get in Touch
            <span aria-hidden="true">→</span>
          </Link>
        </Reveal>
      </section>
    </>
  );
}

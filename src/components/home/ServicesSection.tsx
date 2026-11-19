
import Link from "next/link";
import Reveal from "@/components/ui/Reveal";

const services = [
  {
    number: "01",
    title: "Career Development",
    description:
      "Build a stronger professional presence with CV reviews, LinkedIn profile optimisation and practical career guidance.",
    link: "/services#career-development",
  },
  {
    number: "02",
    title: "Job Opportunities",
    description:
      "Discover curated job openings, internships, graduate programmes and remote opportunities that match your ambitions.",
    link: "/services#job-opportunities",
  },
  {
    number: "03",
    title: "Interview Preparation",
    description:
      "Approach your next interview with confidence through preparation resources, practice questions and coaching.",
    link: "/services#interview-preparation",
  },
  {
    number: "04",
    title: "Talent Solutions",
    description:
      "Find the right people for your organisation through talent sourcing, recruitment support and candidate matching.",
    link: "/services#talent-solutions",
  },
];

export default function ServicesSection() {
  return (
    <section className="bg-white px-6 py-24 md:py-32 lg:px-10">
      <div className="mx-auto max-w-7xl">

        {/* Section heading */}
        <Reveal className="max-w-2xl">
          <span className="inline-flex rounded-full bg-pale-blue px-4 py-2 text-xs font-semibold text-blue-700">
            WHAT WE DO
          </span>

          <h2 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-charcoal sm:text-5xl lg:text-6xl">
            Everything you need to
            <span className="text-gold"> move forward.</span>
          </h2>

          <p className="mt-6 max-w-xl text-base leading-8 text-sage sm:text-lg">
            From career guidance to talent solutions, discover
            the support individuals and businesses need to grow.
          </p>
        </Reveal>

        {/* Service cards */}
        <Reveal
          delay={0.15}
          className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {services.map((service) => (
            <article
              key={service.number}
              className="group flex min-h-[330px] flex-col rounded-2xl border border-taupe bg-white p-7 transition-all duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-900/5"
            >
              {/* Number indicator */}
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-pale-blue text-sm font-bold text-gold transition-colors group-hover:bg-gold group-hover:text-white">
                {service.number}
              </div>

              <h3 className="mt-9 text-xl font-bold leading-snug tracking-tight text-charcoal">
                {service.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-sage">
                {service.description}
              </p>

              <Link
                href={service.link}
                className="mt-auto inline-flex items-center gap-2 pt-8 text-sm font-semibold text-gold transition-all group-hover:gap-3"
              >
                Learn more
                <span aria-hidden="true">→</span>
              </Link>
            </article>
          ))}
        </Reveal>

        {/* Bottom link */}
        <Reveal delay={0.2} className="mt-12">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 rounded-lg border border-taupe px-6 py-3 text-sm font-semibold text-charcoal transition-colors hover:border-gold hover:bg-pale-blue"
          >
            Explore all services
            <span aria-hidden="true">→</span>
          </Link>
        </Reveal>

      </div>
    </section>
  );
}

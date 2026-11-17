
import Link from "next/link";

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
    <section className="bg-ivory px-6 py-24 md:py-32 lg:px-10">
      <div className="mx-auto max-w-7xl">

        {/* Section heading */}
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
            What We Do
          </p>

          <h2 className="mt-5 font-display text-4xl font-medium leading-tight text-charcoal sm:text-5xl lg:text-6xl">
            Opportunities and support
            <span className="italic text-gold">
              {" "}for every next step.
            </span>
          </h2>

          <p className="mt-6 max-w-xl text-base leading-8 text-sage">
            From career guidance to talent solutions, we provide the
            support individuals and businesses need to move forward.
          </p>
        </div>

        {/* Service cards */}
        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <article
              key={service.number}
              className="group flex min-h-[340px] flex-col border border-taupe bg-white p-7 transition-all duration-300 hover:-translate-y-2 hover:border-gold hover:shadow-lg"
            >
              <span className="text-sm font-medium tracking-widest text-gold">
                {service.number}
              </span>

              <h3 className="mt-12 font-display text-3xl font-medium leading-tight text-charcoal">
                {service.title}
              </h3>

              <p className="mt-5 text-sm leading-7 text-sage">
                {service.description}
              </p>

              <Link
                href={service.link}
                className="mt-auto inline-flex items-center gap-2 pt-8 text-sm font-semibold text-charcoal transition-colors group-hover:text-gold"
              >
                Learn more
                <span aria-hidden="true">↗</span>
              </Link>
            </article>
          ))}
        </div>

        {/* Bottom link */}
        <div className="mt-12 flex justify-start">
          <Link
            href="/services"
            className="border-b border-gold pb-2 text-sm font-semibold text-charcoal transition-colors hover:text-gold"
          >
            Explore all services
          </Link>
        </div>

      </div>
    </section>
  );
}

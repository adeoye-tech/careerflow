
import Link from "next/link";

const services = [
  {
    id: "career-development",
    number: "01",
    title: "Career Development",
    subtitle: "Build your professional identity.",
    description:
      "Take control of your professional journey with practical support designed to help you present your skills, communicate your value and make informed career decisions.",
    offerings: [
      "CV writing and review",
      "LinkedIn profile optimisation",
      "Career guidance and direction",
      "Professional development resources",
    ],
  },
  {
    id: "job-opportunities",
    number: "02",
    title: "Job Opportunities",
    subtitle: "Discover where your potential can take you.",
    description:
      "Explore opportunities that align with your skills, interests and career ambitions, from entry-level positions to internships and remote roles.",
    offerings: [
      "Graduate opportunities",
      "Internship programmes",
      "Remote job opportunities",
      "Curated job resources",
    ],
  },
  {
    id: "interview-preparation",
    number: "03",
    title: "Interview Preparation",
    subtitle: "Walk into your next interview with confidence.",
    description:
      "Prepare to communicate your experience and strengths through practical interview resources and structured preparation.",
    offerings: [
      "Common interview questions",
      "Interview practice resources",
      "Preparation guidance",
      "Career assessment resources",
    ],
  },
  {
    id: "talent-solutions",
    number: "04",
    title: "Talent Solutions",
    subtitle: "Connect the right people with the right opportunities.",
    description:
      "Support organisations in identifying suitable candidates and making more informed talent decisions.",
    offerings: [
      "Talent sourcing",
      "Recruitment support",
      "Candidate matching",
      "Talent discovery resources",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Services hero */}
      <section className="bg-ivory px-6 py-24 md:py-32 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
            Our Services
          </p>

          <h1 className="mt-6 max-w-4xl font-display text-5xl font-medium leading-tight text-charcoal sm:text-6xl lg:text-7xl">
            The support you need.
            <span className="block italic text-gold">
              The possibilities ahead.
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-base leading-8 text-sage sm:text-lg">
            From professional development to talent solutions,
            discover how CareerFlow aims to support individuals
            and organisations at every stage of their journey.
          </p>
        </div>
      </section>

      {/* Services list */}
      <section className="bg-white px-6 py-24 md:py-32 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="space-y-8">
            {services.map((service) => (
              <article
                id={service.id}
                key={service.id}
                className="grid gap-8 border-b border-taupe py-12 first:pt-0 last:border-b-0 md:grid-cols-[1fr_1.2fr] md:gap-16"
              >
                {/* Service heading */}
                <div>
                  <span className="font-display text-5xl text-gold">
                    {service.number}
                  </span>

                  <h2 className="mt-6 font-display text-3xl font-medium text-charcoal sm:text-4xl">
                    {service.title}
                  </h2>

                  <p className="mt-3 font-display text-xl italic text-sage">
                    {service.subtitle}
                  </p>
                </div>

                {/* Service details */}
                <div>
                  <p className="text-sm leading-8 text-sage sm:text-base">
                    {service.description}
                  </p>

                  <h3 className="mt-8 text-xs font-semibold uppercase tracking-[0.2em] text-charcoal">
                    What it includes
                  </h3>

                  <ul className="mt-5 grid gap-4 sm:grid-cols-2">
                    {service.offerings.map((offering) => (
                      <li
                        key={offering}
                        className="flex items-start gap-3 text-sm text-sage"
                      >
                        <span className="text-gold">↗</span>
                        {offering}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Services CTA */}
      <section className="bg-charcoal px-6 py-24 text-center md:py-28 lg:px-10">
        <div className="mx-auto max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
            Take the Next Step
          </p>

          <h2 className="mt-6 font-display text-4xl leading-tight text-white sm:text-5xl">
            Your next opportunity could start with a conversation.
          </h2>

          <p className="mt-6 text-sm leading-8 text-white/65">
            Let's explore how CareerFlow can support your professional
            journey or your organisation's talent needs.
          </p>

          <Link
            href="/contact"
            className="mt-9 inline-flex bg-gold px-8 py-4 text-sm font-semibold text-charcoal transition-colors hover:bg-white"
          >
            Contact CareerFlow
          </Link>
        </div>
      </section>
    </>
  );
}

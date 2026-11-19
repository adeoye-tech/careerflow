
import Link from "next/link";
import Reveal from "@/components/ui/Reveal";

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
      <section className="bg-white px-6 py-24 md:py-32 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <span className="inline-flex rounded-full bg-pale-blue px-4 py-2 text-xs font-semibold text-blue-700">
              OUR SERVICES
            </span>

            <h1 className="mt-8 max-w-4xl text-5xl font-extrabold leading-[1.1] tracking-tight text-charcoal sm:text-6xl lg:text-7xl">
              The support you need.
              <span className="block text-gold">
                The possibilities ahead.
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-base leading-8 text-sage sm:text-lg">
              From professional development to talent solutions,
              discover how CareerFlow aims to support individuals
              and organisations at every stage of their journey.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Services list */}
      <section className="bg-ivory px-6 py-24 md:py-32 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <Reveal className="mb-14 max-w-2xl">
            <h2 className="text-3xl font-extrabold tracking-tight text-charcoal sm:text-4xl">
              How we help you move forward
            </h2>

            <p className="mt-4 text-sm leading-7 text-sage sm:text-base">
              Explore the areas where our proposed services can
              make a difference.
            </p>
          </Reveal>

          <div className="space-y-6">
            {services.map((service, index) => (
              <Reveal key={service.id} delay={index * 0.05}>
                <article
                  id={service.id}
                  className="scroll-mt-28 grid gap-10 rounded-2xl border border-taupe bg-white p-7 sm:p-10 md:grid-cols-[0.9fr_1.1fr] md:gap-16 lg:p-12"
                >
                  {/* Service heading */}
                  <div>
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-pale-blue text-sm font-bold text-gold">
                      {service.number}
                    </span>

                    <h2 className="mt-7 text-3xl font-extrabold leading-tight tracking-tight text-charcoal sm:text-4xl">
                      {service.title}
                    </h2>

                    <p className="mt-4 text-base font-medium leading-7 text-blue-700">
                      {service.subtitle}
                    </p>
                  </div>

                  {/* Service details */}
                  <div>
                    <p className="text-sm leading-8 text-sage sm:text-base">
                      {service.description}
                    </p>

                    <h3 className="mt-9 text-xs font-bold tracking-widest text-charcoal">
                      WHAT IT INCLUDES
                    </h3>

                    <ul className="mt-5 grid gap-4 sm:grid-cols-2">
                      {service.offerings.map((offering) => (
                        <li
                          key={offering}
                          className="flex items-start gap-3 text-sm leading-6 text-sage"
                        >
                          <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-pale-blue text-xs font-bold text-blue-700">
                            ✓
                          </span>

                          {offering}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Services CTA */}
      <section className="bg-charcoal px-6 py-24 text-center md:py-28 lg:px-10">
        <Reveal className="mx-auto max-w-3xl">
          <span className="inline-flex rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-2 text-xs font-semibold text-blue-300">
            TAKE THE NEXT STEP
          </span>

          <h2 className="mt-7 text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl">
            Your next opportunity could start with a conversation.
          </h2>

          <p className="mt-6 text-sm leading-8 text-slate-300 sm:text-base">
            Let's explore how CareerFlow can support your professional
            journey or your organisation's talent needs.
          </p>

          <Link
            href="/contact"
            className="mt-9 inline-flex items-center gap-3 rounded-lg bg-gold px-8 py-4 text-sm font-semibold text-white shadow-sm transition-all hover:-translate-y-0.5 hover:bg-blue-500 hover:shadow-lg"
          >
            Contact CareerFlow
            <span aria-hidden="true">→</span>
          </Link>
        </Reveal>
      </section>
    </>
  );
}

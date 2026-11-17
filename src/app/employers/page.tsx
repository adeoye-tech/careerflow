
import Link from "next/link";

const benefits = [
  {
    number: "01",
    title: "Talent Sourcing",
    description:
      "Identify potential candidates whose skills and professional interests align with your organisation's needs.",
  },
  {
    number: "02",
    title: "Recruitment Support",
    description:
      "Get support throughout the recruitment process, from defining candidate requirements to identifying suitable talent.",
  },
  {
    number: "03",
    title: "Candidate Matching",
    description:
      "Make more informed hiring decisions by considering candidates' skills, experience and potential.",
  },
];

const steps = [
  {
    number: "01",
    title: "Share Your Needs",
    description:
      "Tell us about your organisation, the role and the kind of talent you are looking for.",
  },
  {
    number: "02",
    title: "Explore Talent Solutions",
    description:
      "We explore suitable sourcing and recruitment support options based on your requirements.",
  },
  {
    number: "03",
    title: "Move Forward",
    description:
      "Work towards connecting your organisation with candidates who fit your needs.",
  },
];

export default function EmployersPage() {
  return (
    <>
      {/* Employers hero */}
      <section className="bg-ivory px-6 py-24 md:py-32 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
            For Employers
          </p>

          <h1 className="mt-6 max-w-4xl font-display text-5xl font-medium leading-tight text-charcoal sm:text-6xl lg:text-7xl">
            Find the talent
            <span className="block italic text-gold">
              that moves you forward.
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-base leading-8 text-sage sm:text-lg">
            Great organisations are built by great people.
            CareerFlow aims to help businesses discover talent
            and explore recruitment support that aligns with
            their goals.
          </p>

          <Link
            href="/contact"
            className="mt-9 inline-flex bg-charcoal px-7 py-4 text-sm font-medium text-white transition-colors hover:bg-gold"
          >
            Discuss Your Hiring Needs
          </Link>
        </div>
      </section>

      {/* Employer benefits */}
      <section className="bg-white px-6 py-24 md:py-32 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
              Talent Solutions
            </p>

            <h2 className="mt-5 font-display text-4xl font-medium leading-tight text-charcoal sm:text-5xl lg:text-6xl">
              Helping organisations
              <span className="italic text-gold">
                {" "}find their people.
              </span>
            </h2>

            <p className="mt-6 text-base leading-8 text-sage">
              Finding suitable talent takes time, direction and
              an understanding of what an organisation needs.
              Our proposed talent solutions are designed to
              support that process.
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {benefits.map((benefit) => (
              <article
                key={benefit.number}
                className="border border-taupe p-8 transition-colors hover:border-gold"
              >
                <span className="font-display text-4xl text-gold">
                  {benefit.number}
                </span>

                <h3 className="mt-10 font-display text-3xl text-charcoal">
                  {benefit.title}
                </h3>

                <p className="mt-5 text-sm leading-7 text-sage">
                  {benefit.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-charcoal px-6 py-24 md:py-32 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
              Our Process
            </p>

            <h2 className="mt-5 font-display text-4xl font-medium leading-tight text-white sm:text-5xl lg:text-6xl">
              A thoughtful approach
              <span className="italic text-gold">
                {" "}to finding talent.
              </span>
            </h2>
          </div>

          <div className="mt-16 grid gap-10 md:grid-cols-3">
            {steps.map((step) => (
              <article
                key={step.number}
                className="border-t border-white/20 pt-8"
              >
                <span className="font-display text-5xl text-gold">
                  {step.number}
                </span>

                <h3 className="mt-8 font-display text-3xl text-white">
                  {step.title}
                </h3>

                <p className="mt-5 text-sm leading-7 text-white/65">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Employers CTA */}
      <section className="bg-ivory px-6 py-24 text-center md:py-28 lg:px-10">
        <div className="mx-auto max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
            Let's Work Together
          </p>

          <h2 className="mt-6 font-display text-4xl leading-tight text-charcoal sm:text-5xl">
            Let's find the right talent for your next chapter.
          </h2>

          <p className="mt-6 text-sm leading-8 text-sage">
            Tell us what your organisation needs and let's start
            a conversation.
          </p>

          <Link
            href="/contact"
            className="mt-9 inline-flex bg-charcoal px-8 py-4 text-sm font-medium text-white transition-colors hover:bg-gold"
          >
            Contact Our Team
          </Link>
        </div>
      </section>
    </>
  );
}

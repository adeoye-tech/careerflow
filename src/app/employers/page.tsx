
import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "For Employers",

  description:
    "Explore CareerFlow's proposed talent sourcing, recruitment support and candidate matching solutions designed to help organisations discover suitable talent.",

  openGraph: {
    title: "For Employers | CareerFlow Talent Solutions",
    description:
      "Discover proposed talent sourcing, recruitment support and candidate matching solutions with CareerFlow.",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "For Employers | CareerFlow Talent Solutions",
    description:
      "Explore talent sourcing, recruitment support and candidate matching solutions for organisations.",
  },
};

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
      <section className="bg-white px-6 py-24 md:py-32 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <span className="inline-flex rounded-full bg-pale-blue px-4 py-2 text-xs font-semibold text-blue-700">
              FOR EMPLOYERS
            </span>

            <h1 className="mt-8 max-w-4xl text-5xl font-extrabold leading-[1.1] tracking-tight text-charcoal sm:text-6xl lg:text-7xl">
              Find the talent
              <span className="block text-gold">
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
              className="mt-9 inline-flex items-center gap-3 rounded-lg bg-gold px-7 py-4 text-sm font-semibold text-white shadow-sm transition-all hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-md"
            >
              Discuss Your Hiring Needs
              <span aria-hidden="true">→</span>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Employer benefits */}
      <section className="bg-ivory px-6 py-24 md:py-32 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <Reveal className="max-w-2xl">
            <span className="inline-flex rounded-full bg-pale-blue px-4 py-2 text-xs font-semibold text-blue-700">
              TALENT SOLUTIONS
            </span>

            <h2 className="mt-7 text-4xl font-extrabold leading-tight tracking-tight text-charcoal sm:text-5xl lg:text-6xl">
              Helping organisations
              <span className="block text-gold">
                find their people.
              </span>
            </h2>

            <p className="mt-6 text-base leading-8 text-sage">
              Finding suitable talent takes time, direction and
              an understanding of what an organisation needs.
              Our proposed talent solutions are designed to
              support that process.
            </p>
          </Reveal>

          <Reveal
            delay={0.15}
            className="mt-16 grid gap-6 md:grid-cols-3"
          >
            {benefits.map((benefit) => (
              <article
                key={benefit.number}
                className="group min-h-[300px] rounded-2xl border border-taupe bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-900/5"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-pale-blue text-sm font-bold text-gold transition-colors group-hover:bg-gold group-hover:text-white">
                  {benefit.number}
                </span>

                <h3 className="mt-9 text-2xl font-bold tracking-tight text-charcoal">
                  {benefit.title}
                </h3>

                <p className="mt-5 text-sm leading-7 text-sage">
                  {benefit.description}
                </p>
              </article>
            ))}
          </Reveal>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-charcoal px-6 py-24 text-white md:py-32 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <Reveal className="max-w-2xl">
            <span className="inline-flex rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-2 text-xs font-semibold text-blue-300">
              OUR PROCESS
            </span>

            <h2 className="mt-7 text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              A thoughtful approach
              <span className="block text-blue-400">
                to finding talent.
              </span>
            </h2>
          </Reveal>

          <Reveal
            delay={0.15}
            className="mt-16 grid gap-6 md:grid-cols-3"
          >
            {steps.map((step) => (
              <article
                key={step.number}
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-8 transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/40 hover:bg-white/[0.07]"
              >
                <span className="text-sm font-bold tracking-widest text-blue-400">
                  {step.number}
                </span>

                <h3 className="mt-8 text-2xl font-bold tracking-tight text-white">
                  {step.title}
                </h3>

                <p className="mt-5 text-sm leading-7 text-slate-300">
                  {step.description}
                </p>

                <div className="mt-8 h-1 w-10 rounded-full bg-blue-500" />
              </article>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Employers CTA */}
      <section className="bg-white px-6 py-24 text-center md:py-28 lg:px-10">
        <Reveal className="mx-auto max-w-3xl rounded-2xl border border-taupe bg-ivory px-7 py-14 sm:px-12 sm:py-16">
          <span className="inline-flex rounded-full bg-pale-blue px-4 py-2 text-xs font-semibold text-blue-700">
            LET'S WORK TOGETHER
          </span>

          <h2 className="mt-7 text-4xl font-extrabold leading-tight tracking-tight text-charcoal sm:text-5xl">
            Let's find the right talent for your next chapter.
          </h2>

          <p className="mt-6 text-sm leading-8 text-sage sm:text-base">
            Tell us what your organisation needs and let's start
            a conversation.
          </p>

          <Link
            href="/contact"
            className="mt-9 inline-flex items-center gap-3 rounded-lg bg-gold px-8 py-4 text-sm font-semibold text-white shadow-sm transition-all hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-md"
          >
            Contact Our Team
            <span aria-hidden="true">→</span>
          </Link>
        </Reveal>
      </section>
    </>
  );
}

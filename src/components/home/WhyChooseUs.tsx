const reasons = [
  {
    number: "01",
    title: "People Come First",
    description:
      "Every career journey is different. We focus on understanding individual goals and providing support that helps people move forward with confidence.",
  },
  {
    number: "02",
    title: "Practical Career Support",
    description:
      "From CV development to interview preparation, we bring together useful resources that help professionals prepare for real career opportunities.",
  },
  {
    number: "03",
    title: "Talent Meets Opportunity",
    description:
      "We support businesses in finding suitable talent while helping ambitious professionals connect with opportunities that match their aspirations.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-charcoal px-6 py-24 text-white md:py-32 lg:px-10">
      <div className="mx-auto max-w-7xl">

        {/* Section heading */}
        <div className="grid gap-8 md:grid-cols-2 md:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
              The CareerFlow Difference
            </p>

            <h2 className="mt-5 font-display text-4xl font-medium leading-tight sm:text-5xl lg:text-6xl">
              More than opportunities.
              <span className="block italic text-gold">
                A partner in progress.
              </span>
            </h2>
          </div>

          <p className="max-w-lg text-sm leading-8 text-white/65 md:justify-self-end">
            Building a meaningful career takes more than finding a job.
            It takes preparation, direction and access to the right
            opportunities. That is where CareerFlow comes in.
          </p>
        </div>

        {/* Reasons */}
        <div className="mt-20 grid gap-10 border-t border-white/20 pt-10 md:grid-cols-3 md:gap-8">
          {reasons.map((reason) => (
            <article key={reason.number}>
              <span className="font-display text-4xl text-gold">
                {reason.number}
              </span>

              <h3 className="mt-8 font-display text-3xl font-medium">
                {reason.title}
              </h3>

              <p className="mt-5 text-sm leading-7 text-white/65">
                {reason.description}
              </p>

              <div className="mt-8 h-px w-12 bg-gold" />
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}

const steps = [
  {
    number: "01",
    title: "Discover",
    description:
      "Explore career resources, job opportunities and professional development services that align with your goals.",
  },
  {
    number: "02",
    title: "Prepare",
    description:
      "Strengthen your CV, improve your professional presence and develop the confidence to pursue new opportunities.",
  },
  {
    number: "03",
    title: "Move Forward",
    description:
      "Take informed steps towards your next opportunity with guidance, preparation and access to relevant resources.",
  },
];

export default function ProcessSection() {
  return (
    <section className="bg-white px-6 py-24 md:py-32 lg:px-10">
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
            Our Approach
          </p>

          <h2 className="mt-5 font-display text-4xl font-medium leading-tight text-charcoal sm:text-5xl lg:text-6xl">
            Every great career
            <span className="italic text-gold">
              {" "}starts with a step.
            </span>
          </h2>

          <p className="mt-6 max-w-xl text-base leading-8 text-sage">
            Progress looks different for everyone. Our approach helps
            you identify your goals, prepare for opportunities and
            move towards the future you want.
          </p>
        </div>

        {/* Process steps */}
        <div className="mt-20 grid gap-12 md:grid-cols-3">
          {steps.map((step, index) => (
            <article key={step.number} className="relative">

              {/* Step number */}
              <div className="flex items-center gap-5">
                <span className="font-display text-5xl font-medium text-gold">
                  {step.number}
                </span>

                {index !== steps.length - 1 && (
                  <div className="hidden h-px flex-1 bg-taupe md:block" />
                )}
              </div>

              {/* Step content */}
              <h3 className="mt-8 font-display text-3xl font-medium text-charcoal">
                {step.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-sage">
                {step.description}
              </p>

            </article>
          ))}
        </div>

      </div>
    </section>
  );
}

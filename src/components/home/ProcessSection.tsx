
import Reveal from "@/components/ui/Reveal";

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
    <section className="bg-ivory px-6 py-24 md:py-32 lg:px-10">
      <div className="mx-auto max-w-7xl">

        {/* Section heading */}
        <Reveal className="max-w-2xl">
          <span className="inline-flex rounded-full bg-pale-blue px-4 py-2 text-xs font-semibold text-blue-700">
            HOW IT WORKS
          </span>

          <h2 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-charcoal sm:text-5xl lg:text-6xl">
            A clearer path to
            <span className="text-gold"> your next step.</span>
          </h2>

          <p className="mt-6 max-w-xl text-base leading-8 text-sage sm:text-lg">
            Career growth doesn't happen all at once. We help you
            break the journey into practical steps that move you
            closer to your goals.
          </p>
        </Reveal>

        {/* Process cards */}
        <Reveal
          delay={0.15}
          className="mt-16 grid gap-6 md:grid-cols-3"
        >
          {steps.map((step) => (
            <article
              key={step.number}
              className="rounded-2xl border border-taupe bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-900/5"
            >
              {/* Step number */}
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-pale-blue text-lg font-extrabold text-gold">
                {step.number}
              </div>

              {/* Step content */}
              <h3 className="mt-9 text-2xl font-bold tracking-tight text-charcoal">
                {step.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-sage">
                {step.description}
              </p>
            </article>
          ))}
        </Reveal>

      </div>
    </section>
  );
}

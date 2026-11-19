
import Reveal from "@/components/ui/Reveal";

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
        <Reveal className="grid gap-8 md:grid-cols-2 md:items-end">
          <div>
            <span className="inline-flex rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-2 text-xs font-semibold text-blue-300">
              THE CAREERFLOW DIFFERENCE
            </span>

            <h2 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              More than opportunities.
              <span className="block text-blue-400">
                A partner in progress.
              </span>
            </h2>
          </div>

          <p className="max-w-lg text-sm leading-8 text-slate-300 md:justify-self-end sm:text-base">
            Building a meaningful career takes more than finding a job.
            It takes preparation, direction and access to the right
            opportunities. That is where CareerFlow comes in.
          </p>
        </Reveal>

        {/* Reasons */}
        <Reveal
          delay={0.15}
          className="mt-20 grid gap-6 md:grid-cols-3"
        >
          {reasons.map((reason) => (
            <article
              key={reason.number}
              className="rounded-2xl border border-white/10 bg-white/[0.04] p-8 transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/40 hover:bg-white/[0.07]"
            >
              <span className="text-sm font-bold tracking-widest text-blue-400">
                {reason.number}
              </span>

              <h3 className="mt-8 text-2xl font-bold tracking-tight text-white">
                {reason.title}
              </h3>

              <p className="mt-5 text-sm leading-7 text-slate-300">
                {reason.description}
              </p>

              <div className="mt-8 h-1 w-10 rounded-full bg-blue-500" />
            </article>
          ))}
        </Reveal>

      </div>
    </section>
  );
}

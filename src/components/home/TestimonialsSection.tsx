
import Reveal from "@/components/ui/Reveal";

const testimonials = [
  {
    quote:
      "A meaningful career journey begins with the right direction, the right preparation and the confidence to take the next step.",
    name: "Career Seeker",
    role: "Illustrative profile",
    number: "01",
  },
  {
    quote:
      "Finding the right opportunity is not just about qualifications. It is about discovering where your skills and ambitions can make a difference.",
    name: "Young Professional",
    role: "Illustrative profile",
    number: "02",
  },
  {
    quote:
      "Building a strong team starts with recognising potential and connecting the right people with the right opportunities.",
    name: "Hiring Partner",
    role: "Illustrative profile",
    number: "03",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="bg-white px-6 py-24 md:py-32 lg:px-10">
      <div className="mx-auto max-w-7xl">

        {/* Section heading */}
        <Reveal className="max-w-2xl">
          <span className="inline-flex rounded-full bg-pale-blue px-4 py-2 text-xs font-semibold text-blue-700">
            VOICES & PERSPECTIVES
          </span>

          <h2 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-charcoal sm:text-5xl lg:text-6xl">
            Every journey has
            <span className="text-gold"> a story.</span>
          </h2>

          <p className="mt-6 text-base leading-8 text-sage sm:text-lg">
            Different ambitions. Different journeys. One shared desire
            to grow, discover possibilities and move forward.
          </p>
        </Reveal>

        {/* Testimonial cards */}
        <Reveal
          delay={0.15}
          className="mt-16 grid gap-6 md:grid-cols-3"
        >
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.number}
              className="flex min-h-[340px] flex-col rounded-2xl border border-taupe bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-900/5"
            >
              <span
                aria-hidden="true"
                className="text-6xl font-extrabold leading-none text-gold"
              >
                “
              </span>

              <blockquote className="mt-5 flex-1 text-lg font-medium leading-8 text-charcoal">
                {testimonial.quote}
              </blockquote>

              <div className="mt-8 border-t border-taupe pt-5">
                <p className="text-sm font-bold text-charcoal">
                  {testimonial.name}
                </p>

                <p className="mt-1 text-xs text-sage">
                  {testimonial.role}
                </p>
              </div>
            </article>
          ))}
        </Reveal>

        {/* Transparency note */}
        <Reveal delay={0.2}>
          <p className="mt-6 text-xs leading-6 text-sage">
           
          </p>
        </Reveal>

      </div>
    </section>
  );
}

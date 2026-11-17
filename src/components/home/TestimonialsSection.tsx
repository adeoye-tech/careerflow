
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
    <section className="bg-ivory px-6 py-24 md:py-32 lg:px-10">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
            Voices & Perspectives
          </p>

          <h2 className="mt-5 font-display text-4xl font-medium leading-tight text-charcoal sm:text-5xl lg:text-6xl">
            Every journey has
            <span className="italic text-gold"> a story.</span>
          </h2>

          <p className="mt-6 text-base leading-8 text-sage">
            Different ambitions. Different journeys. One shared desire
            to grow, discover possibilities and move forward.
          </p>
        </div>

        {/* Testimonial cards */}
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.number}
              className="flex min-h-[330px] flex-col border border-taupe bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-gold"
            >
              <span className="font-display text-6xl leading-none text-gold">
                “
              </span>

              <blockquote className="mt-5 flex-1 font-display text-2xl leading-relaxed text-charcoal">
                {testimonial.quote}
              </blockquote>

              <div className="mt-8 border-t border-taupe pt-5">
                <p className="text-sm font-semibold text-charcoal">
                  {testimonial.name}
                </p>

                <p className="mt-1 text-xs text-sage">
                  {testimonial.role}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* Transparency note */}
        <p className="mt-6 text-xs leading-6 text-sage">
          Portfolio demonstration: these are illustrative statements,
          not reviews from actual CareerFlow customers.
        </p>
      </div>
    </section>
  );
}

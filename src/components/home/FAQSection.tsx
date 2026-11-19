
"use client";

import { useState } from "react";
import Reveal from "@/components/ui/Reveal";

const faqs = [
  {
    question: "What is CareerFlow?",
    answer:
      "CareerFlow is a career development and talent solutions concept designed to connect professionals with career resources and opportunities while supporting organisations with talent needs.",
  },
  {
    question: "Who can use CareerFlow?",
    answer:
      "CareerFlow is designed for graduates, job seekers, young professionals and organisations looking for recruitment and talent support.",
  },
  {
    question: "What career services do you offer?",
    answer:
      "Our proposed services include CV reviews, LinkedIn profile optimisation, career guidance, job opportunity discovery and interview preparation.",
  },
  {
    question: "Can employers use CareerFlow?",
    answer:
      "Yes. Our employer-focused offering is designed to support organisations with talent sourcing, recruitment support and candidate matching.",
  },
  {
    question: "Does CareerFlow guarantee employment?",
    answer:
      "No. CareerFlow aims to provide resources, guidance and access to opportunities, but employment decisions depend on individual qualifications and employer requirements.",
  },
];

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section className="bg-ivory px-6 py-24 md:py-32 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-14 md:grid-cols-2">

        {/* Heading */}
        <Reveal>
          <span className="inline-flex rounded-full bg-pale-blue px-4 py-2 text-xs font-semibold text-blue-700">
            FREQUENTLY ASKED QUESTIONS
          </span>

          <h2 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-charcoal sm:text-5xl lg:text-6xl">
            Got questions?
            <span className="block text-gold">
              We've got answers.
            </span>
          </h2>

          <p className="mt-6 max-w-md text-base leading-8 text-sage">
            Find answers to common questions about CareerFlow,
            our services and how we aim to support your career journey.
          </p>
        </Reveal>

        {/* Accordion */}
        <Reveal delay={0.15} className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;

            return (
              <article
                key={faq.question}
                className={`rounded-xl border bg-white px-6 transition-colors ${
                  isOpen
                    ? "border-blue-200 shadow-sm"
                    : "border-taupe hover:border-blue-200"
                }`}
              >
                <button
                  type="button"
                  onClick={() =>
                    setActiveIndex(isOpen ? null : index)
                  }
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-6 py-6 text-left"
                >
                  <span className="text-base font-bold text-charcoal sm:text-lg">
                    {faq.question}
                  </span>

                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-pale-blue text-xl font-medium text-gold">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {isOpen && (
                  <div className="border-t border-taupe pb-6 pt-5">
                    <p className="max-w-lg text-sm leading-8 text-sage">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </article>
            );
          })}
        </Reveal>

      </div>
    </section>
  );
}

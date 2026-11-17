
"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your full name."),
  email: z.string().trim().email("Please enter a valid email address."),
  enquiry: z.string().min(1, "Please select an enquiry type."),
  subject: z.string().trim().min(3, "Please enter a subject."),
  message: z
    .string()
    .trim()
    .min(10, "Your message must contain at least 10 characters."),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  function onSubmit(data: ContactFormData) {
    // Temporary demonstration only.
    // We will connect this form to a real backend later.
    console.log("Contact form submission:", data);

    setSubmitted(true);
    reset();
  }

  return (
    <>
      {/* Contact hero */}
      <section className="bg-ivory px-6 py-24 md:py-28 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
            Contact Us
          </p>

          <h1 className="mt-6 max-w-4xl font-display text-5xl font-medium leading-tight text-charcoal sm:text-6xl lg:text-7xl">
            Let's start a
            <span className="italic text-gold"> conversation.</span>
          </h1>

          <p className="mt-8 max-w-2xl text-base leading-8 text-sage sm:text-lg">
            Have a question, need career support or want to explore
            talent solutions? We'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact content */}
      <section className="bg-white px-6 py-24 md:py-32 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[0.8fr_1.2fr]">

          {/* Contact information */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
              Get in Touch
            </p>

            <h2 className="mt-5 font-display text-4xl leading-tight text-charcoal sm:text-5xl">
              We're here to help you move forward.
            </h2>

            <p className="mt-6 text-sm leading-8 text-sage">
              Whether you're an individual exploring your next
              career opportunity or an organisation looking for
              talent, send us a message.
            </p>

            <div className="mt-12 border-t border-taupe pt-7">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                Enquiries
              </p>

              <p className="mt-4 text-sm leading-7 text-sage">
                Use the contact form to tell us what you need.
                We'll use your enquiry to understand how CareerFlow
                could support you.
              </p>
            </div>

            <div className="mt-8 border-t border-taupe pt-7">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                Our Promise
              </p>

              <p className="mt-4 font-display text-2xl italic text-charcoal">
                Building careers. Creating possibilities.
              </p>
            </div>
          </div>

          {/* Contact form */}
          <div className="bg-ivory p-7 sm:p-10">
            <h2 className="font-display text-3xl text-charcoal sm:text-4xl">
              Send us a message
            </h2>

            <p className="mt-3 text-sm leading-7 text-sage">
              Fill in the details below and tell us how we can help.
            </p>

            {submitted && (
              <div
                role="status"
                className="mt-8 border border-green-700/30 bg-green-700/10 p-4 text-sm text-green-800"
              >
                Your form passed validation! This is a demonstration;
                your message has not been sent yet.
              </div>
            )}

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="mt-9 space-y-6"
              noValidate
            >
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-charcoal"
                >
                  Full Name
                </label>

                <input
                  id="name"
                  type="text"
                  placeholder="Enter your full name"
                  {...register("name")}
                  className="w-full border border-taupe bg-white px-4 py-4 text-sm text-charcoal outline-none transition-colors focus:border-gold"
                />

                {errors.name && (
                  <p className="mt-2 text-xs text-red-600">
                    {errors.name.message}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-charcoal"
                >
                  Email Address
                </label>

                <input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  {...register("email")}
                  className="w-full border border-taupe bg-white px-4 py-4 text-sm text-charcoal outline-none transition-colors focus:border-gold"
                />

                {errors.email && (
                  <p className="mt-2 text-xs text-red-600">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Enquiry type */}
              <div>
                <label
                  htmlFor="enquiry"
                  className="mb-2 block text-sm font-medium text-charcoal"
                >
                  What are you enquiring about?
                </label>

                <select
                  id="enquiry"
                  {...register("enquiry")}
                  defaultValue=""
                  className="w-full border border-taupe bg-white px-4 py-4 text-sm text-charcoal outline-none focus:border-gold"
                >
                  <option value="" disabled>
                    Select an enquiry type
                  </option>
                  <option value="career-support">
                    Career Development
                  </option>
                  <option value="job-opportunities">
                    Job Opportunities
                  </option>
                  <option value="interview-preparation">
                    Interview Preparation
                  </option>
                  <option value="employer">
                    Employer / Talent Solutions
                  </option>
                  <option value="other">Other</option>
                </select>

                {errors.enquiry && (
                  <p className="mt-2 text-xs text-red-600">
                    {errors.enquiry.message}
                  </p>
                )}
              </div>

              {/* Subject */}
              <div>
                <label
                  htmlFor="subject"
                  className="mb-2 block text-sm font-medium text-charcoal"
                >
                  Subject
                </label>

                <input
                  id="subject"
                  type="text"
                  placeholder="What is your message about?"
                  {...register("subject")}
                  className="w-full border border-taupe bg-white px-4 py-4 text-sm text-charcoal outline-none transition-colors focus:border-gold"
                />

                {errors.subject && (
                  <p className="mt-2 text-xs text-red-600">
                    {errors.subject.message}
                  </p>
                )}
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-charcoal"
                >
                  Your Message
                </label>

                <textarea
                  id="message"
                  rows={5}
                  placeholder="Tell us how we can help..."
                  {...register("message")}
                  className="w-full resize-y border border-taupe bg-white px-4 py-4 text-sm text-charcoal outline-none transition-colors focus:border-gold"
                />

                {errors.message && (
                  <p className="mt-2 text-xs text-red-600">
                    {errors.message.message}
                  </p>
                )}
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-charcoal px-7 py-4 text-sm font-semibold text-white transition-colors hover:bg-gold disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSubmitting ? "Submitting..." : "Send Message"}
              </button>

              <p className="text-xs leading-6 text-sage">
                This demonstration form currently validates your details
                in the browser. It does not send or store messages.
              </p>
            </form>
          </div>

        </div>
      </section>
    </>
  );
}

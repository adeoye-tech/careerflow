
"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Reveal from "@/components/ui/Reveal";

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
  const [submitError, setSubmitError] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  async function onSubmit(data: ContactFormData) {
    setSubmitted(false);
    setSubmitError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          result.error || "Unable to send your message. Please try again."
        );
      }

      setSubmitted(true);
      reset();
    } catch (error) {
      console.error("Contact form submission error:", error);

      setSubmitError(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again later."
      );
    }
  }

  const inputClasses =
    "w-full rounded-lg border border-taupe bg-white px-4 py-4 text-sm text-charcoal outline-none transition-all placeholder:text-slate-400 focus:border-gold focus:ring-4 focus:ring-blue-500/10";

  const labelClasses =
    "mb-2 block text-sm font-semibold text-charcoal";

  return (
    <>
      {/* Contact hero */}
      <section className="bg-white px-6 py-24 md:py-28 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <span className="inline-flex rounded-full bg-pale-blue px-4 py-2 text-xs font-semibold text-blue-700">
              CONTACT US
            </span>

            <h1 className="mt-8 max-w-4xl text-5xl font-extrabold leading-[1.1] tracking-tight text-charcoal sm:text-6xl lg:text-7xl">
              Let's start a
              <span className="block text-gold">
                conversation.
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-base leading-8 text-sage sm:text-lg">
              Have a question, need career support or want to explore
              talent solutions? We'd love to hear from you.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Contact content */}
      <section className="bg-ivory px-6 py-24 md:py-32 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">

          {/* Contact information */}
          <Reveal>
            <span className="inline-flex rounded-full bg-pale-blue px-4 py-2 text-xs font-semibold text-blue-700">
              GET IN TOUCH
            </span>

            <h2 className="mt-7 text-4xl font-extrabold leading-tight tracking-tight text-charcoal sm:text-5xl">
              We're here to help you move forward.
            </h2>

            <p className="mt-6 text-sm leading-8 text-sage sm:text-base">
              Whether you're an individual exploring your next
              career opportunity or an organisation looking for
              talent, send us a message.
            </p>

            <div className="mt-12 border-t border-taupe pt-7">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-white text-lg text-gold">
                  ↗
                </span>

                <h3 className="text-sm font-bold text-charcoal">
                  Enquiries
                </h3>
              </div>

              <p className="mt-4 text-sm leading-7 text-sage">
                Use the contact form to tell us what you need.
                We'll use your enquiry to understand how CareerFlow
                could support you.
              </p>
            </div>

            <div className="mt-8 border-t border-taupe pt-7">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-white text-lg text-gold">
                  ✦
                </span>

                <h3 className="text-sm font-bold text-charcoal">
                  Our Promise
                </h3>
              </div>

              <p className="mt-4 text-xl font-bold leading-relaxed tracking-tight text-charcoal">
                Building careers. Creating possibilities.
              </p>
            </div>
          </Reveal>

          {/* Contact form */}
          <Reveal
            delay={0.15}
            className="rounded-2xl border border-taupe bg-white p-7 shadow-sm sm:p-10"
          >
            <h2 className="text-3xl font-extrabold tracking-tight text-charcoal sm:text-4xl">
              Send us a message
            </h2>

            <p className="mt-3 text-sm leading-7 text-sage">
              Fill in the details below and tell us how we can help.
            </p>

            {/* Success message */}
            {submitted && (
              <div
                role="status"
                aria-live="polite"
                className="mt-8 rounded-lg border border-green-700/20 bg-green-50 p-4 text-sm leading-7 text-green-800"
              >
                Your message has been sent successfully!
                Thank you for contacting CareerFlow. We'll get back
                to you as soon as possible.
              </div>
            )}

            {/* Error message */}
            {submitError && (
              <div
                role="alert"
                className="mt-8 rounded-lg border border-red-700/20 bg-red-50 p-4 text-sm leading-7 text-red-700"
              >
                {submitError}
              </div>
            )}

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="mt-9 space-y-6"
              noValidate
            >
              {/* Name */}
              <div>
                <label htmlFor="name" className={labelClasses}>
                  Full Name
                </label>

                <input
                  id="name"
                  type="text"
                  placeholder="Enter your full name"
                  {...register("name")}
                  aria-invalid={!!errors.name}
                  className={inputClasses}
                />

                {errors.name && (
                  <p className="mt-2 text-xs text-red-600">
                    {errors.name.message}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className={labelClasses}>
                  Email Address
                </label>

                <input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  {...register("email")}
                  aria-invalid={!!errors.email}
                  className={inputClasses}
                />

                {errors.email && (
                  <p className="mt-2 text-xs text-red-600">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Enquiry type */}
              <div>
                <label htmlFor="enquiry" className={labelClasses}>
                  What are you enquiring about?
                </label>

                <select
                  id="enquiry"
                  {...register("enquiry")}
                  defaultValue=""
                  aria-invalid={!!errors.enquiry}
                  className={inputClasses}
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

                  <option value="other">
                    Other
                  </option>
                </select>

                {errors.enquiry && (
                  <p className="mt-2 text-xs text-red-600">
                    {errors.enquiry.message}
                  </p>
                )}
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="subject" className={labelClasses}>
                  Subject
                </label>

                <input
                  id="subject"
                  type="text"
                  placeholder="What is your message about?"
                  {...register("subject")}
                  aria-invalid={!!errors.subject}
                  className={inputClasses}
                />

                {errors.subject && (
                  <p className="mt-2 text-xs text-red-600">
                    {errors.subject.message}
                  </p>
                )}
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className={labelClasses}>
                  Your Message
                </label>

                <textarea
                  id="message"
                  rows={5}
                  placeholder="Tell us how we can help..."
                  {...register("message")}
                  aria-invalid={!!errors.message}
                  className={`${inputClasses} resize-y`}
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
                className="w-full rounded-lg bg-gold px-7 py-4 text-sm font-semibold text-white shadow-sm transition-all hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-md disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSubmitting
                  ? "Sending Message..."
                  : "Send Message"}

                <span className="ml-2" aria-hidden="true">
                  →
                </span>
              </button>

              <p className="text-xs leading-6 text-sage">
                Your information will be used to respond to your
                enquiry. Please do not include sensitive personal
                information in your message.
              </p>
            </form>
          </Reveal>
        </div>
      </section>
    </>
  );
}

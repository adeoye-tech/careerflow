
import type { Metadata } from "next";

import HeroSection from "@/components/home/HeroSection";
import IntroSection from "@/components/home/IntroSection";
import ServicesSection from "@/components/home/ServicesSection";
import ProcessSection from "@/components/home/ProcessSection";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import CTASection from "@/components/home/CTASection";
import FAQSection from "@/components/home/FAQSection";

export const metadata: Metadata = {
  title: "Building Careers. Creating Possibilities.",

  description:
    "Explore career development resources, job opportunities, interview preparation and talent solutions designed to help professionals grow with CareerFlow.",

  openGraph: {
    title: "Building Careers. Creating Possibilities. | CareerFlow",
    description:
      "Discover career opportunities, develop your skills and explore new possibilities with CareerFlow.",
    siteName: "CareerFlow",
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Building Careers. Creating Possibilities. | CareerFlow",
    description:
      "Explore career development, job opportunities and professional growth with CareerFlow.",
  },
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <IntroSection />
      <ServicesSection />
      <ProcessSection />
      <WhyChooseUs />
      <TestimonialsSection />
      <CTASection />
      <FAQSection />
    </>
  );
}


import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Contact Us",

  description:
    "Get in touch with CareerFlow about career development, job opportunities, interview preparation and talent solutions.",

  openGraph: {
    title: "Contact CareerFlow | Let's Start a Conversation",
    description:
      "Have a question or want to explore career support and talent solutions? Get in touch with CareerFlow.",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Contact CareerFlow | Let's Start a Conversation",
    description:
      "Contact CareerFlow about career opportunities, professional development and talent solutions.",
  },
};

export default function ContactLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return <>{children}</>;
}

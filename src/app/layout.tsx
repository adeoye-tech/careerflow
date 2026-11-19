
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Manrope, DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
 metadataBase: new URL("https://careerflow-self.vercel.app"),

  title: {
    default: "CareerFlow | Building Careers. Creating Possibilities.",
    template: "%s | CareerFlow",
  },

  description:
    "Explore career development resources, job opportunities, interview preparation and talent solutions with CareerFlow.",

  applicationName: "CareerFlow",

  keywords: [
    "Career development",
    "Job opportunities",
    "Interview preparation",
    "Talent solutions",
    "Career growth",
    "Recruitment",
  ],

  openGraph: {
    title: "CareerFlow | Building Careers. Creating Possibilities.",
    description:
      "Discover career opportunities, develop your skills and take the next step in your professional journey with CareerFlow.",
    siteName: "CareerFlow",
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "CareerFlow | Building Careers. Creating Possibilities.",
    description:
      "Building careers and creating possibilities through career development, job opportunities and talent solutions.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${dmSans.variable}`}
    >
      <body className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

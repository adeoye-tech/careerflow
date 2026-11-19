
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-[75vh] items-center justify-center bg-[#F8FAFC] px-6 py-20">
      <div className="mx-auto max-w-2xl text-center">
        <div className="mb-8 flex justify-center">
          <div className="flex h-28 w-28 items-center justify-center rounded-3xl bg-[#EFF6FF]">
            <span className="text-5xl font-bold tracking-tight text-[#2563EB]">
              404
            </span>
          </div>
        </div>

        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#2563EB]">
          Page not found
        </p>

        <h1 className="mb-5 text-4xl font-bold leading-tight text-[#0F172A] sm:text-5xl">
          Looks like you've taken a wrong turn.
        </h1>

        <p className="mx-auto mb-9 max-w-lg text-base leading-7 text-[#64748B] sm:text-lg">
          The page you're looking for may have been moved, deleted,
          or never existed. Don't worry, there's still plenty to
          explore at CareerFlow.
        </p>

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/"
            className="inline-flex w-full items-center justify-center rounded-xl bg-[#2563EB] px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#1D4ED8] hover:shadow-lg sm:w-auto"
          >
            Back to Homepage
          </Link>

          <Link
            href="/services"
            className="inline-flex w-full items-center justify-center rounded-xl border border-[#E2E8F0] bg-white px-7 py-3.5 text-sm font-semibold text-[#0F172A] transition-all duration-300 hover:border-[#2563EB] hover:text-[#2563EB] sm:w-auto"
          >
            Explore Our Services
          </Link>
        </div>

        <p className="mt-12 text-sm text-[#94A3B8]">
          Need help?{" "}
          <Link
            href="/contact"
            className="font-medium text-[#2563EB] transition-colors hover:text-[#1D4ED8]"
          >
            Contact our team
          </Link>
        </p>
      </div>
    </main>
  );
}

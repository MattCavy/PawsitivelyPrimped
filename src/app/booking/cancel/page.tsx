import Link from "next/link";
import { XCircle } from "lucide-react";

export default function BookingCancelPage() {
  return (
    <div className="mx-auto max-w-xl px-5 py-24 text-center">
      <XCircle className="mx-auto h-16 w-16 text-coral" />
      <h1 className="mt-6 font-display text-3xl font-extrabold sm:text-4xl">
        Checkout Cancelled
      </h1>
      <p className="mt-4 text-ink/70">
        No charge was made and your appointment wasn&apos;t reserved. You can
        try again whenever you&apos;re ready.
      </p>
      <Link
        href="/booking"
        className="mt-8 inline-block rounded-full bg-coral px-7 py-3.5 font-bold text-white shadow-lg transition-transform hover:scale-105"
      >
        Try Again
      </Link>
    </div>
  );
}

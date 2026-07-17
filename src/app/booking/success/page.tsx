import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { businessInfo } from "@/lib/services";

export default function BookingSuccessPage() {
  return (
    <div className="mx-auto max-w-xl px-5 py-24 text-center">
      <CheckCircle2 className="mx-auto h-16 w-16 text-teal" />
      <h1 className="mt-6 font-display text-3xl font-extrabold sm:text-4xl">
        You&apos;re All Set!
      </h1>
      <p className="mt-4 text-ink/70">
        Your deposit was received and your appointment request is in.
        We&apos;ll reach out shortly to confirm the exact time — keep an eye
        on your phone and email.
      </p>
      <p className="mt-2 text-sm text-ink/50">
        Questions in the meantime? Call or text {businessInfo.phone}.
      </p>
      <Link
        href="/"
        className="mt-8 inline-block rounded-full bg-coral px-7 py-3.5 font-bold text-white shadow-lg transition-transform hover:scale-105"
      >
        Back to Home
      </Link>
    </div>
  );
}

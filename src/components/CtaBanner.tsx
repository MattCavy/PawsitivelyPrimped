import Link from "next/link";
import { PawPrint } from "lucide-react";

export default function CtaBanner() {
  return (
    <section className="mx-auto max-w-6xl px-5 pb-16">
      <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-r from-coral to-teal px-8 py-14 text-center text-white shadow-xl">
        <PawPrint className="absolute -left-6 -top-6 h-32 w-32 rotate-12 text-white/10" />
        <PawPrint className="absolute -bottom-8 -right-8 h-40 w-40 -rotate-12 text-white/10" />
        <h2 className="font-display text-3xl font-extrabold sm:text-4xl">
          Ready for a Pawsitively Primped Pet?
        </h2>
        <p className="mx-auto mt-3 max-w-lg text-white/90">
          Book online in minutes and reserve your spot with a small deposit —
          it&apos;s that easy.
        </p>
        <Link
          href="/booking"
          className="mt-7 inline-block rounded-full bg-white px-8 py-3.5 font-bold text-coral-dark shadow-lg transition-transform hover:scale-105"
        >
          Book Your Appointment
        </Link>
      </div>
    </section>
  );
}

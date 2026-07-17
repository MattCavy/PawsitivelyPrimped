import type { Metadata } from "next";
import Link from "next/link";
import { HeartHandshake, ShieldCheck, Sparkles } from "lucide-react";
import { businessInfo } from "@/lib/services";

export const metadata: Metadata = {
  title: "About Us | Pawsitively Primped",
  description: "Meet the team behind Pawsitively Primped, boutique pet grooming in Lafayette, CA.",
};

export default function AboutPage() {
  return (
    <div>
      <section className="bg-blush/60 px-5 py-14 text-center">
        <h1 className="font-display text-4xl font-extrabold sm:text-5xl">About Us</h1>
        <p className="mx-auto mt-4 max-w-2xl text-ink/70">
          Boutique, appointment-only grooming rooted in patience and care.
        </p>
      </section>

      <section className="mx-auto grid max-w-5xl gap-10 px-5 py-16 md:grid-cols-2 md:items-center">
        <div className="mx-auto aspect-square w-full max-w-sm rounded-[2.5rem] bg-gradient-to-br from-teal via-sunny to-coral p-2 shadow-xl">
          <div className="flex h-full w-full items-center justify-center rounded-[2.2rem] bg-white/90">
            <Sparkles className="h-20 w-20 text-teal-dark" strokeWidth={1.5} />
          </div>
        </div>
        <div>
          <h2 className="font-display text-3xl font-extrabold">
            Hi, I&apos;m {businessInfo.owner}
          </h2>
          <p className="mt-4 text-ink/70">
            {businessInfo.name} was built on a simple idea: grooming should
            feel safe and calm for every pet, no matter their size, coat, or
            temperament. We take our time with each appointment, working at a
            pace that keeps dogs, cats, and small animals comfortable from
            start to finish.
          </p>
          <p className="mt-4 text-ink/70">
            Based in Lafayette, California, we&apos;re appointment-only —
            which means your pet gets our full attention, not a rushed slot
            on a crowded schedule.
          </p>
        </div>
      </section>

      <section className="bg-teal/5 py-16">
        <div className="mx-auto max-w-5xl px-5">
          <div className="grid gap-6 sm:grid-cols-3">
            <div className="rounded-3xl bg-white p-6 text-center shadow-sm">
              <HeartHandshake className="mx-auto h-8 w-8 text-coral" />
              <h3 className="mt-3 font-display text-lg font-extrabold">Patient & Gentle</h3>
              <p className="mt-1.5 text-sm text-ink/70">
                Every pet is treated with kindness, at their own pace.
              </p>
            </div>
            <div className="rounded-3xl bg-white p-6 text-center shadow-sm">
              <ShieldCheck className="mx-auto h-8 w-8 text-teal" />
              <h3 className="mt-3 font-display text-lg font-extrabold">Safety Checked</h3>
              <p className="mt-1.5 text-sm text-ink/70">
                Health and temperament assessed at every single visit.
              </p>
            </div>
            <div className="rounded-3xl bg-white p-6 text-center shadow-sm">
              <Sparkles className="mx-auto h-8 w-8 text-sunny" />
              <h3 className="mt-3 font-display text-lg font-extrabold">Detail Oriented</h3>
              <p className="mt-1.5 text-sm text-ink/70">
                From the first bath to the final finishing touches.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-5 py-16 text-center">
        <h2 className="font-display text-2xl font-extrabold sm:text-3xl">
          Our Policies
        </h2>
        <ul className="mx-auto mt-6 max-w-xl space-y-3 text-left text-ink/70">
          <li>• 24 business-hours notice required to cancel or reschedule.</li>
          <li>• Please call or text ahead — no drop-ins or early pickups.</li>
          <li>• Excessive matting is shaved out for your pet&apos;s safety and comfort.</li>
          <li>• New clients: please share your pet&apos;s health & temperament info at drop-off.</li>
          <li>• Puppies&apos; first grooms are done in gentle stages.</li>
        </ul>
        <Link
          href="/booking"
          className="mt-8 inline-block rounded-full bg-coral px-7 py-3.5 font-bold text-white shadow-lg transition-transform hover:scale-105"
        >
          Book an Appointment
        </Link>
      </section>
    </div>
  );
}

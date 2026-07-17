import type { Metadata } from "next";
import Link from "next/link";
import { Clock, ArrowRight } from "lucide-react";
import { serviceCategories } from "@/lib/services";

export const metadata: Metadata = {
  title: "Services & Pricing | Pawsitively Primped",
  description:
    "Full grooming services and pricing for dogs, cats, and small animals in Lafayette, CA.",
};

const accentBar = ["bg-coral", "bg-teal", "bg-sunny", "bg-coral", "bg-teal"];

export default function ServicesPage() {
  return (
    <div>
      <section className="bg-blush/60 px-5 py-14 text-center">
        <h1 className="font-display text-4xl font-extrabold sm:text-5xl">
          Services & Pricing
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-ink/70">
          All prices are starting rates — your pet&apos;s final price
          depends on size, coat condition, and complexity. We&apos;ll always
          confirm the total with you before we begin.
        </p>
        <Link
          href="/booking"
          className="mt-6 inline-block rounded-full bg-coral px-7 py-3.5 font-bold text-white shadow-lg transition-transform hover:scale-105"
        >
          Book an Appointment
        </Link>
      </section>

      <div className="mx-auto max-w-5xl px-5 py-14">
        {/* quick nav */}
        <nav className="mb-12 flex flex-wrap justify-center gap-2">
          {serviceCategories.map((cat) => (
            <a
              key={cat.id}
              href={`#${cat.id}`}
              className="rounded-full border-2 border-ink/10 bg-white px-4 py-2 text-sm font-bold text-ink/80 transition-colors hover:border-coral hover:text-coral-dark"
            >
              {cat.title}
            </a>
          ))}
        </nav>

        <div className="space-y-16">
          {serviceCategories.map((cat, i) => (
            <section key={cat.id} id={cat.id} className="scroll-mt-24">
              <div className="mb-6">
                <span
                  className={`inline-block h-1.5 w-12 rounded-full ${accentBar[i % accentBar.length]}`}
                />
                <h2 className="mt-3 font-display text-2xl font-extrabold sm:text-3xl">
                  {cat.title}
                </h2>
                <p className="mt-1.5 max-w-2xl text-ink/70">{cat.description}</p>
              </div>

              <ul className="overflow-hidden rounded-3xl border-2 border-ink/5 bg-white shadow-sm">
                {cat.services.map((s, idx) => (
                  <li
                    key={s.name}
                    className={`flex flex-col gap-2 px-6 py-5 sm:flex-row sm:items-center sm:justify-between ${
                      idx !== cat.services.length - 1 ? "border-b border-ink/5" : ""
                    }`}
                  >
                    <div>
                      <p className="font-bold text-ink">{s.name}</p>
                      <div className="mt-1 flex flex-wrap items-center gap-3 text-xs text-ink/50">
                        <span className="inline-flex items-center gap-1">
                          <Clock className="h-3.5 w-3.5" /> {s.duration}
                        </span>
                        {s.note && (
                          <span className="rounded-full bg-sunny/30 px-2 py-0.5 font-bold text-ink/70">
                            {s.note}
                          </span>
                        )}
                      </div>
                    </div>
                    <span className="whitespace-nowrap font-display text-lg font-extrabold text-coral-dark">
                      {s.price}
                    </span>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        <div className="mt-16 rounded-3xl bg-teal/10 p-8 text-center">
          <h3 className="font-display text-2xl font-extrabold text-teal-dark">
            Not sure what your pet needs?
          </h3>
          <p className="mx-auto mt-2 max-w-lg text-ink/70">
            Reach out and we&apos;ll help you pick the right service before you book.
          </p>
          <Link
            href="/booking"
            className="mt-5 inline-flex items-center gap-2 rounded-full bg-teal px-6 py-3 font-bold text-white shadow-md transition-transform hover:scale-105 hover:bg-teal-dark"
          >
            Get in Touch <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}

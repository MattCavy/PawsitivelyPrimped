import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { serviceCategories } from "@/lib/services";

const cardColors = ["bg-coral", "bg-teal", "bg-sunny", "bg-coral", "bg-teal"];

export default function ServicesPreview() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-16">
      <div className="mb-10 flex flex-col items-center gap-3 text-center">
        <h2 className="font-display text-3xl font-extrabold sm:text-4xl">
          Services for Every Coat & Companion
        </h2>
        <p className="max-w-xl text-ink/70">
          From a quick nail trim to a full spa day, here&apos;s what we offer —
          full pricing on every service below.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {serviceCategories.map((cat, i) => (
          <Link
            key={cat.id}
            href={`/services#${cat.id}`}
            className="group relative overflow-hidden rounded-3xl bg-white p-6 shadow-sm ring-1 ring-ink/5 transition-transform hover:-translate-y-1 hover:shadow-lg"
          >
            <span
              className={`inline-block h-1.5 w-10 rounded-full ${cardColors[i % cardColors.length]}`}
            />
            <h3 className="mt-4 font-display text-xl font-extrabold">{cat.title}</h3>
            <p className="mt-2 text-sm text-ink/70">{cat.description}</p>
            <p className="mt-2 text-xs font-bold uppercase tracking-wide text-ink/40">
              {cat.services.length} services
            </p>
            <span className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-coral-dark">
              See pricing <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </span>
          </Link>
        ))}
      </div>

      <div className="mt-10 text-center">
        <Link
          href="/services"
          className="inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3.5 font-bold text-white shadow-md transition-transform hover:scale-105"
        >
          View Full Price List <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}

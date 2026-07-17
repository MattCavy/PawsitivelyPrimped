"use client";

import { useState } from "react";
import { CalendarCheck, Loader2, PawPrint } from "lucide-react";
import { serviceCategories, businessInfo } from "@/lib/services";

export default function BookingPage() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const form = new FormData(e.currentTarget);
    const payload = {
      ownerName: form.get("ownerName"),
      email: form.get("email"),
      phone: form.get("phone"),
      petName: form.get("petName"),
      service: form.get("service"),
      preferredDate: form.get("preferredDate"),
      notes: form.get("notes"),
    };

    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();

      if (!res.ok) {
        setError(data.error ?? "Something went wrong. Please call or email us instead.");
        setLoading(false);
        return;
      }

      window.location.href = data.url;
    } catch {
      setError("Something went wrong. Please call or email us instead.");
      setLoading(false);
    }
  }

  return (
    <div>
      <section className="bg-blush/60 px-5 py-14 text-center">
        <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-sm font-bold text-coral-dark shadow-sm">
          <CalendarCheck className="h-4 w-4" /> Reserve Your Spot
        </span>
        <h1 className="mt-4 font-display text-4xl font-extrabold sm:text-5xl">
          Book an Appointment
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-ink/70">
          Tell us about your pet and pick a service. A refundable $25
          deposit — applied toward your final price — holds your appointment.
        </p>
      </section>

      <section className="mx-auto max-w-2xl px-5 py-14">
        <form
          onSubmit={handleSubmit}
          className="space-y-5 rounded-3xl border-2 border-ink/5 bg-white p-6 shadow-sm sm:p-8"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="Your Name" name="ownerName" required />
            <Field label="Phone" name="phone" type="tel" required />
          </div>
          <Field label="Email" name="email" type="email" required />
          <Field label="Pet's Name" name="petName" required icon={<PawPrint className="h-4 w-4" />} />

          <div>
            <label htmlFor="service" className="mb-1.5 block text-sm font-bold text-ink">
              Service
            </label>
            <select
              id="service"
              name="service"
              required
              className="w-full rounded-xl border-2 border-ink/10 bg-cream px-4 py-3 text-sm font-medium outline-none transition-colors focus:border-teal"
            >
              <option value="">Select a service…</option>
              {serviceCategories.map((cat) => (
                <optgroup key={cat.id} label={cat.title}>
                  {cat.services.map((s) => (
                    <option key={s.name} value={`${s.name} (${s.price})`}>
                      {s.name} — {s.price}
                    </option>
                  ))}
                </optgroup>
              ))}
            </select>
          </div>

          <Field
            label="Preferred Date & Time"
            name="preferredDate"
            type="datetime-local"
            required
          />

          <div>
            <label htmlFor="notes" className="mb-1.5 block text-sm font-bold text-ink">
              Notes for your groomer (optional)
            </label>
            <textarea
              id="notes"
              name="notes"
              rows={3}
              placeholder="Breed, temperament, matting, medical notes…"
              className="w-full rounded-xl border-2 border-ink/10 bg-cream px-4 py-3 text-sm font-medium outline-none transition-colors focus:border-teal"
            />
          </div>

          {error && (
            <p className="rounded-xl bg-coral/10 px-4 py-3 text-sm font-bold text-coral-dark">
              {error} You can also reach us at{" "}
              <a href={`tel:${businessInfo.phone}`} className="underline">
                {businessInfo.phone}
              </a>{" "}
              or{" "}
              <a href={`mailto:${businessInfo.email}`} className="underline">
                {businessInfo.email}
              </a>
              .
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="flex w-full items-center justify-center gap-2 rounded-full bg-coral px-7 py-4 font-bold text-white shadow-lg shadow-coral/30 transition-transform hover:scale-[1.02] hover:bg-coral-dark disabled:opacity-60 disabled:hover:scale-100"
          >
            {loading ? (
              <>
                <Loader2 className="h-5 w-5 animate-spin" /> Redirecting to checkout…
              </>
            ) : (
              "Continue to $25 Deposit"
            )}
          </button>
          <p className="text-center text-xs text-ink/50">
            Secure checkout powered by Stripe. Deposit is applied toward your
            final grooming total and refundable with 24 hours&apos; notice.
          </p>
        </form>
      </section>
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  icon,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  icon?: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 flex items-center gap-1.5 text-sm font-bold text-ink">
        {icon}
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="w-full rounded-xl border-2 border-ink/10 bg-cream px-4 py-3 text-sm font-medium outline-none transition-colors focus:border-teal"
      />
    </div>
  );
}

import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "Melissa is amazing with my anxious rescue pup. She's patient, gentle, and he actually looks forward to his grooming days now.",
    name: "Sarah T.",
    pet: "Charlie, Goldendoodle",
  },
  {
    quote:
      "Best groomer in Lafayette, hands down. My Shih Tzu always comes home happy and looking fabulous.",
    name: "Michael R.",
    pet: "Biscuit, Shih Tzu",
  },
  {
    quote:
      "Booking is so easy and Pawsitively Primped always fits us in. The attention to detail is incredible.",
    name: "Jenna L.",
    pet: "Miso, Cat",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-blush/60 py-16">
      <div className="mx-auto max-w-6xl px-5">
        <div className="mb-10 text-center">
          <h2 className="font-display text-3xl font-extrabold sm:text-4xl">
            Happy Pets, Happy Parents
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-ink/70">
            Don&apos;t just take our word for it.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col rounded-3xl bg-white p-6 shadow-sm"
            >
              <Quote className="h-8 w-8 text-sunny" />
              <blockquote className="mt-3 flex-1 text-ink/80">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <div className="mt-4 flex items-center gap-1 text-sunny">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <figcaption className="mt-2 text-sm font-bold text-ink">
                {t.name}{" "}
                <span className="font-normal text-ink/50">— {t.pet}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

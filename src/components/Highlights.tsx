import { HeartHandshake, ShieldCheck, CalendarClock, Dog } from "lucide-react";

const items = [
  {
    icon: HeartHandshake,
    title: "Gentle & Patient",
    text: "Every groom is paced to your pet's comfort — no rushing, no stress.",
    color: "bg-coral",
  },
  {
    icon: ShieldCheck,
    title: "Safety First",
    text: "Health and temperament checked at every visit to keep pets safe.",
    color: "bg-teal",
  },
  {
    icon: CalendarClock,
    title: "Easy Scheduling",
    text: "Book online in minutes and get reminders before your appointment.",
    color: "bg-sunny",
  },
  {
    icon: Dog,
    title: "All Breeds Welcome",
    text: "Dogs, cats, and small animals of every size and coat type.",
    color: "bg-coral",
  },
];

export default function Highlights() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-16">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {items.map(({ icon: Icon, title, text, color }) => (
          <div
            key={title}
            className="rounded-3xl border-2 border-ink/5 bg-white p-6 shadow-sm transition-transform hover:-translate-y-1 hover:shadow-lg"
          >
            <span
              className={`grid h-12 w-12 place-items-center rounded-2xl ${color} text-white`}
            >
              <Icon className="h-6 w-6" />
            </span>
            <h3 className="mt-4 font-display text-lg font-extrabold">{title}</h3>
            <p className="mt-1.5 text-sm text-ink/70">{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

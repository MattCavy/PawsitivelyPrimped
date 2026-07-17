"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, PawPrint } from "lucide-react";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services & Pricing" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-cream/90 backdrop-blur-sm border-b-4 border-coral/20">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
        <Link href="/" className="flex items-center gap-2 group" onClick={() => setOpen(false)}>
          <span className="grid h-11 w-11 place-items-center rounded-full bg-coral text-white shadow-md transition-transform group-hover:-rotate-12">
            <PawPrint className="h-6 w-6" />
          </span>
          <span className="font-display text-xl font-extrabold tracking-tight text-coral-dark sm:text-2xl">
            Pawsitively Primped
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="rounded-full px-4 py-2 text-sm font-bold text-ink/80 transition-colors hover:bg-blush hover:text-coral-dark"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/booking"
            className="ml-2 rounded-full bg-teal px-5 py-2.5 text-sm font-bold text-white shadow-md transition-transform hover:scale-105 hover:bg-teal-dark"
          >
            Book Now
          </Link>
        </nav>

        <button
          className="rounded-full p-2 text-coral-dark md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t-2 border-coral/10 bg-cream px-5 pb-4 md:hidden">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="rounded-xl px-3 py-3 text-base font-bold text-ink/80 hover:bg-blush hover:text-coral-dark"
            >
              {l.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}

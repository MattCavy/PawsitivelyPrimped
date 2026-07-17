"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Sparkles, Star } from "lucide-react";
import InstagramEmbed from "@/components/InstagramEmbed";

const heroReelUrl = "https://www.instagram.com/p/B_Jj_7kJi96/";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blush via-cream to-cream">
      <div className="pointer-events-none absolute -left-10 top-10 h-40 w-40 rounded-full bg-sunny/30 blur-2xl" />
      <div className="pointer-events-none absolute right-0 top-32 h-56 w-56 rounded-full bg-teal/20 blur-3xl" />

      <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 pb-20 pt-14 md:grid-cols-2 md:pt-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-sm font-bold text-coral-dark shadow-sm">
            <Sparkles className="h-4 w-4" /> Lafayette, California
          </span>
          <h1 className="mt-5 font-display text-4xl font-extrabold leading-tight text-ink sm:text-5xl lg:text-6xl">
            Compassionate care for your{" "}
            <span className="text-coral-dark">cute companions</span>
          </h1>
          <p className="mt-5 max-w-md text-lg text-ink/70">
            Boutique dog & cat grooming with a gentle touch. Baths, haircuts,
            nail trims and more — every appointment tailored to your pet.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/booking"
              className="rounded-full bg-coral px-7 py-3.5 font-bold text-white shadow-lg shadow-coral/30 transition-transform hover:scale-105 hover:bg-coral-dark"
            >
              Book an Appointment
            </Link>
            <Link
              href="/services"
              className="rounded-full border-2 border-ink/10 bg-white px-7 py-3.5 font-bold text-ink transition-colors hover:border-teal hover:text-teal-dark"
            >
              View Services & Pricing
            </Link>
          </div>
          <div className="mt-8 flex items-center gap-1 text-sunny">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-current" />
            ))}
            <span className="ml-2 text-sm font-bold text-ink/70">
              Loved by Lafayette pet parents
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: -3 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <div className="mx-auto w-full max-w-md rounded-[2.5rem] bg-gradient-to-br from-coral via-sunny to-teal p-2 pb-4 shadow-2xl">
            <div className="max-h-[500px] overflow-hidden rounded-[2.2rem] bg-white/90">
              <InstagramEmbed url={heroReelUrl} className="w-full max-w-none" />
            </div>
            <div className="mt-4 flex justify-center gap-4">
              <div className="rounded-2xl bg-white px-4 py-2.5 text-center shadow-lg">
                <p className="font-display text-xl font-extrabold text-teal-dark">6 wks</p>
                <p className="text-[0.65rem] font-bold text-ink/60">typical maintenance</p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-2.5 text-center shadow-lg">
                <p className="font-display text-xl font-extrabold text-coral-dark">30+</p>
                <p className="text-[0.65rem] font-bold text-ink/60">grooming services</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { useEffect } from "react";
import InstagramIcon from "@/components/icons/InstagramIcon";
import InstagramEmbed, { loadInstagramEmbedScript } from "@/components/InstagramEmbed";
import { businessInfo } from "@/lib/services";

// Add reel/post permalinks here — paste any public Instagram reel or post URL
// from the @pawsitivelyprimped account and it will render as a live embed.
export const reelUrls: string[] = [
  "https://www.instagram.com/p/B_JkW_eJh_5/",
];

export default function InstagramReels() {
  useEffect(() => {
    loadInstagramEmbedScript();
  }, []);

  return (
    <section className="mx-auto max-w-6xl px-5 py-16">
      <div className="mb-10 text-center">
        <span className="inline-flex items-center gap-2 rounded-full bg-blush px-4 py-1.5 text-sm font-bold text-coral-dark">
          <InstagramIcon className="h-4 w-4" /> Fresh Off the Grooming Table
        </span>
        <h2 className="mt-4 font-display text-3xl font-extrabold sm:text-4xl">
          Follow Along on Instagram
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-ink/70">
          Real grooms, real transformations, straight from{" "}
          <a
            href={`https://instagram.com/${businessInfo.instagramHandle}`}
            target="_blank"
            rel="noreferrer"
            className="font-bold text-coral-dark underline decoration-sunny decoration-2 underline-offset-2"
          >
            @{businessInfo.instagramHandle}
          </a>
          .
        </p>
      </div>

      {reelUrls.length > 0 ? (
        <div className="flex flex-wrap justify-center gap-8">
          {reelUrls.map((url) => (
            <InstagramEmbed key={url} url={url} className="w-full max-w-[360px]" />
          ))}
        </div>
      ) : (
        <p className="text-center text-ink/60">Reels coming soon — check back!</p>
      )}

      <div className="mt-10 text-center">
        <a
          href={`https://instagram.com/${businessInfo.instagramHandle}`}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-coral to-sunny px-6 py-3 font-bold text-white shadow-md transition-transform hover:scale-105"
        >
          <InstagramIcon className="h-5 w-5" /> See More on Instagram
        </a>
      </div>
    </section>
  );
}

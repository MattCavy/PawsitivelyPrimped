"use client";

import { useEffect, useRef } from "react";
import InstagramIcon from "@/components/icons/InstagramIcon";
import { businessInfo } from "@/lib/services";

// Add reel/post permalinks here — paste any public Instagram reel or post URL
// from the @pawsitivelyprimped account and it will render as a live embed.
export const reelUrls: string[] = [
  "https://www.instagram.com/p/Da0WFZIlu4X/",
];

declare global {
  interface Window {
    instgrm?: {
      Embeds: { process: () => void };
    };
  }
}

function InstagramEmbed({ url }: { url: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.instgrm) {
      window.instgrm.Embeds.process();
    }
  }, []);

  return (
    <div ref={ref} className="mx-auto w-full max-w-[360px]">
      <blockquote
        className="instagram-media"
        data-instgrm-permalink={url}
        data-instgrm-version="14"
        style={{ margin: "0 auto", width: "100%" }}
      />
    </div>
  );
}

export default function InstagramReels() {
  useEffect(() => {
    if (window.instgrm) {
      window.instgrm.Embeds.process();
      return;
    }

    const existing = document.getElementById(
      "ig-embed-script"
    ) as HTMLScriptElement | null;

    if (existing) {
      existing.addEventListener("load", () => window.instgrm?.Embeds.process(), {
        once: true,
      });
      return;
    }

    const script = document.createElement("script");
    script.id = "ig-embed-script";
    script.src = "https://www.instagram.com/embed.js";
    script.async = true;
    script.onload = () => window.instgrm?.Embeds.process();
    document.body.appendChild(script);
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
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {reelUrls.map((url) => (
            <InstagramEmbed key={url} url={url} />
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

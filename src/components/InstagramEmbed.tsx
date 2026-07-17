"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    instgrm?: {
      Embeds: { process: () => void };
    };
  }
}

export function loadInstagramEmbedScript() {
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
}

export default function InstagramEmbed({
  url,
  className = "mx-auto w-full max-w-[360px]",
}: {
  url: string;
  className?: string;
}) {
  useEffect(() => {
    loadInstagramEmbedScript();
  }, []);

  return (
    <div className={className}>
      <blockquote
        className="instagram-media"
        data-instgrm-permalink={url}
        data-instgrm-version="14"
        style={{ margin: "0 auto", width: "100%" }}
      />
    </div>
  );
}

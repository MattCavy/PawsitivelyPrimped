import type { Metadata } from "next";
import InstagramReels from "@/components/InstagramReels";

export const metadata: Metadata = {
  title: "Gallery | Pawsitively Primped",
  description: "See real grooming transformations from Pawsitively Primped on Instagram.",
};

export default function GalleryPage() {
  return (
    <div>
      <section className="bg-blush/60 px-5 py-14 text-center">
        <h1 className="font-display text-4xl font-extrabold sm:text-5xl">
          Gallery
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-ink/70">
          Every groom is a little transformation. Here&apos;s a peek at
          recent work — straight from our Instagram.
        </p>
      </section>
      <InstagramReels />
    </div>
  );
}

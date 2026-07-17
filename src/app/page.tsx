import Hero from "@/components/Hero";
import Highlights from "@/components/Highlights";
import ServicesPreview from "@/components/ServicesPreview";
import InstagramReels from "@/components/InstagramReels";
import Testimonials from "@/components/Testimonials";
import CtaBanner from "@/components/CtaBanner";

export default function Home() {
  return (
    <>
      <Hero />
      <Highlights />
      <ServicesPreview />
      <InstagramReels />
      <Testimonials />
      <CtaBanner />
    </>
  );
}

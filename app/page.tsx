import { Navbar } from "@/components/site/navbar";
import { Hero } from "@/components/site/hero";
import { Logos } from "@/components/site/logos";
import { Features } from "@/components/site/features";
import { Stats } from "@/components/site/stats";
import { Pricing } from "@/components/site/pricing";
import { Testimonials } from "@/components/site/testimonials";
import { CTA } from "@/components/site/cta";
import { Footer } from "@/components/site/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Logos />
        <Features />
        <Stats />
        <Pricing />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </>
  );
}

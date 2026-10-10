import { Features } from "@/components/sections/Features";
import { FinalCta, Footer } from "@/components/sections/Footer";
import { BetaBar, Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Plans } from "@/components/sections/Plans";
import { Story } from "@/components/sections/Story";

export default function Home() {
  return (
    <div data-theme="light" className="min-h-screen bg-bg text-text">
      <BetaBar />
      <Header />
      <main>
        <Hero />
        <Story />
        <HowItWorks />
        <Features />
        <Plans />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}

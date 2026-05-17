import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { YellowRibbon } from "./components/YellowRibbon";
import { Uniqueness } from "./components/Uniqueness";
import { Products } from "./components/Products";
import { CtaBanner } from "./components/CtaBanner";
import { TechSpecs } from "./components/TechSpecs";
import { B2B } from "./components/B2B";
import { DualCta } from "./components/DualCta";
import { About } from "./components/About";
import { Faq } from "./components/Faq";
import { FinalBanner } from "./components/FinalBanner";
import { Footer } from "./components/Footer";
import { FloatingButtons } from "./components/FloatingButtons";

export default function Home() {
  return (
    <div className="relative flex flex-1 flex-col bg-fls-black overflow-x-hidden">
      <Header />
      <main className="flex flex-1 flex-col overflow-x-hidden">
        <Hero />
        <YellowRibbon />
        <Uniqueness />
        <Products />
        <CtaBanner />
        <TechSpecs />
        <B2B />
        <DualCta />
        <About />
        <Faq />
        <FinalBanner />
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
}

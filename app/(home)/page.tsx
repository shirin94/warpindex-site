import { Hero } from "@/components/ui/hero";
import FaqMain from "@/components/ui/faq-main";
import Cta1 from "@/components/ui/cta-1";
import PricingCards from "@/components/ui/pricing-cards";
import { FeatureZigZag } from "@/components/ui/feature-zigzag";
import { FeatureHighlights } from "@/components/ui/feature-highlights";

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col">
      <Hero />
      <FeatureHighlights />
      <FeatureZigZag />
      <PricingCards />
      <FaqMain />
      <Cta1 />
    </main>
  );
}

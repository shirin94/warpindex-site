import PricingCards from "@/components/ui/pricing-cards";
import FaqPricing from "@/components/ui/faq-pricing";
import Cta1 from "@/components/ui/cta-1";

export const metadata = {
  title: "Pricing - Warpindex",
  description: "Simple, flat pricing. Value you can't beat!",
};

export default function PricingPage() {
  return (
    <>
      <PricingCards />
      <FaqPricing />
      <Cta1 />
    </>
  );
}

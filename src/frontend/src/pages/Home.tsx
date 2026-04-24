import { ContactSection } from "@/components/ContactSection";
import { CtaSection } from "@/components/CtaSection";
import { HeroSection } from "@/components/HeroSection";
import { PortfolioSection } from "@/components/PortfolioSection";
import { ServicesSection } from "@/components/ServicesSection";
import { StatsSection } from "@/components/StatsSection";

export function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <PortfolioSection />
      <StatsSection />
      <CtaSection />
      <ContactSection />
    </>
  );
}

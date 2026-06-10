"use client";

import { CareerHeroSection } from "../sections/CareerHeroSection";
import { CareerManifestoSection } from "../sections/CareerManifestoSection";
import { CareerCultureSection } from "../sections/CareerCultureSection";
import { CareerMarketPositionSection } from "../sections/CareerMarketPositionSection";
import { CareerBenefitsSection } from "../sections/CareerBenefitsSection";
import { CareerLocationsSection } from "../sections/CareerLocationsSection";
import { CareerJobPostingsSection } from "../sections/CareerJobPostingsSection";
import { CareerHiringProcessSection } from "../sections/CareerHiringProcessSection";
import { CareerFAQSection } from "../sections/CareerFAQSection";
import { CareerCTASection } from "../sections/CareerCTASection";

export default function CareerClient() {
  return (
    <main className="min-h-screen bg-white">
      <CareerHeroSection />
      <CareerManifestoSection />
      <CareerCultureSection />
      <CareerMarketPositionSection />
      <CareerBenefitsSection />
      <CareerLocationsSection />
      <CareerJobPostingsSection />
      <CareerHiringProcessSection />
      <CareerFAQSection />
      <CareerCTASection />
    </main>
  );
}

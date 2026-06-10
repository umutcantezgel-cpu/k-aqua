"use client";

import React from 'react';

// Import all 10 modular sections
import AboutHeroSection from '@/components/sections/AboutHeroSection';
import AboutCompanyHeritageSection from '@/components/sections/AboutCompanyHeritageSection';
import AboutKesselPartnershipSection from '@/components/sections/AboutKesselPartnershipSection';
import AboutManufacturingInnovationSection from '@/components/sections/AboutManufacturingInnovationSection';
import AboutSymbiosisCultureSection from '@/components/sections/AboutSymbiosisCultureSection';
import AboutQualityDynamicsSection from '@/components/sections/AboutQualityDynamicsSection';
import AboutGenauSystemSection from '@/components/sections/AboutGenauSystemSection';
import AboutSustainabilityProtocolSection from '@/components/sections/AboutSustainabilityProtocolSection';
import AboutGlobalStandardsSection from '@/components/sections/AboutGlobalStandardsSection';
import AboutGlobalPresenceCtaSection from '@/components/sections/AboutGlobalPresenceCtaSection';

export default function AboutClient() {
  return (
    <article className="flex flex-col min-h-screen bg-white text-slate-900 selection:bg-blue-900 selection:text-white overflow-hidden">
      <AboutHeroSection />
      <AboutCompanyHeritageSection />
      <AboutKesselPartnershipSection />
      <AboutManufacturingInnovationSection />
      <AboutSymbiosisCultureSection />
      <AboutQualityDynamicsSection />
      <AboutGenauSystemSection />
      <AboutSustainabilityProtocolSection />
      <AboutGlobalStandardsSection />
      <AboutGlobalPresenceCtaSection />
    </article>
  );
}

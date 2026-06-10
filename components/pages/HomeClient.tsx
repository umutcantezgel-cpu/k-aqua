"use client";

import React from 'react';
import HomeHeroSection from '@/components/sections/HomeHeroSection';
import HomeFeaturesSection from '@/components/sections/HomeFeaturesSection';
import HomeProductEcosystemSection from '@/components/sections/HomeProductEcosystemSection';
import HomeApplicationsSection from '@/components/sections/HomeApplicationsSection';
import HomePartnershipSection from '@/components/sections/HomePartnershipSection';
import HomeMaterialsScienceSection from '@/components/sections/HomeMaterialsScienceSection';
import HomeCertificationsSection from '@/components/sections/HomeCertificationsSection';
import HomeSustainabilitySection from '@/components/sections/HomeSustainabilitySection';
import HomeFAQSection from '@/components/sections/HomeFAQSection';
import HomeCTASection from '@/components/sections/HomeCTASection';

export default function HomeClient() {
  return (
    <main className="bg-white text-slate-900 selection:bg-[#5B2D8C]/20">
      <HomeHeroSection />
      <HomeFeaturesSection />
      <HomeProductEcosystemSection />
      <HomeApplicationsSection />
      <HomePartnershipSection />
      <HomeMaterialsScienceSection />
      <HomeCertificationsSection />
      <HomeSustainabilitySection />
      <HomeFAQSection />
      <HomeCTASection />
    </main>
  );
}

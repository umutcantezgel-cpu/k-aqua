"use client";

import React, { useRef } from 'react';
import { useScroll, useTransform } from 'framer-motion';

import AboutHeroSection from '@/components/sections/AboutHeroSection';
import AboutCompanyHeritageSection from '@/components/sections/AboutCompanyHeritageSection';
import AboutManufacturingInnovationSection from '@/components/sections/AboutManufacturingInnovationSection';
import AboutGenauSystemSection from '@/components/sections/AboutGenauSystemSection';
import AboutKesselPartnershipSection from '@/components/sections/AboutKesselPartnershipSection';
import AboutQualityDynamicsSection from '@/components/sections/AboutQualityDynamicsSection';
import AboutSustainabilityProtocolSection from '@/components/sections/AboutSustainabilityProtocolSection';
import AboutSymbiosisCultureSection from '@/components/sections/AboutSymbiosisCultureSection';
import AboutGlobalStandardsSection from '@/components/sections/AboutGlobalStandardsSection';
import AboutGlobalPresenceCtaSection from '@/components/sections/AboutGlobalPresenceCtaSection';

export default function AboutClient() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  
  

  return (
    <div ref={containerRef} className="relative w-full bg-[#fafafa]">
      <AboutHeroSection />
      
      <div className="relative z-20 bg-[#fafafa]">
        <AboutCompanyHeritageSection />
        <AboutManufacturingInnovationSection />
        <AboutGenauSystemSection />
        <AboutKesselPartnershipSection />
        <AboutQualityDynamicsSection />
        <AboutSustainabilityProtocolSection />
        <AboutSymbiosisCultureSection />
        <AboutGlobalStandardsSection />
        <AboutGlobalPresenceCtaSection />
      </div>
    </div>
  );
}

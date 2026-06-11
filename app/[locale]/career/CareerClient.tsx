"use client";

import React, { useRef } from 'react';
import { useScroll, useTransform } from 'framer-motion';

import { CareerHeroSection } from '@/components/sections/CareerHeroSection';
import { CareerManifestoSection } from '@/components/sections/CareerManifestoSection';
import { CareerMarketPositionSection } from '@/components/sections/CareerMarketPositionSection';
import { CareerCultureSection } from '@/components/sections/CareerCultureSection';
import { CareerBenefitsSection } from '@/components/sections/CareerBenefitsSection';
import { CareerLocationsSection } from '@/components/sections/CareerLocationsSection';
import { CareerHiringProcessSection } from '@/components/sections/CareerHiringProcessSection';
import { CareerJobPostingsSection } from '@/components/sections/CareerJobPostingsSection';
import { CareerFAQSection } from '@/components/sections/CareerFAQSection';
import { CareerCTASection } from '@/components/sections/CareerCTASection';

export default function CareerClient() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  
  

  return (
    <div ref={containerRef} className="relative w-full bg-[#fafafa]">
      <CareerHeroSection />
      
      <div className="relative z-20 bg-[#fafafa]">
        <CareerManifestoSection />
        <CareerMarketPositionSection />
        <CareerCultureSection />
        <CareerBenefitsSection />
        <CareerLocationsSection />
        <CareerHiringProcessSection />
        <CareerJobPostingsSection />
        <CareerFAQSection />
        <CareerCTASection />
      </div>
    </div>
  );
}

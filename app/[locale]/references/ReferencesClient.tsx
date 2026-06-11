"use client";

import React, { useRef } from 'react';
import { useScroll, useTransform } from 'framer-motion';

import ReferencesHeroSection from '@/components/sections/ReferencesHeroSection';
import ReferencesStatsSection from '@/components/sections/ReferencesStatsSection';
import ReferencesLegacySection from '@/components/sections/ReferencesLegacySection';
import ReferencesSectorsSection from '@/components/sections/ReferencesSectorsSection';
import ReferencesTechnicalSection from '@/components/sections/ReferencesTechnicalSection';
import ReferencesCaseStudiesSection from '@/components/sections/ReferencesCaseStudiesSection';
import ReferencesFAQSection from '@/components/sections/ReferencesFAQSection';
import ReferencesCTASection from '@/components/sections/ReferencesCTASection';

export default function ReferencesClient() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  
  

  return (
    <div ref={containerRef} className="relative w-full bg-[#fafafa]">
      <ReferencesHeroSection />
      
      <div className="relative z-20 bg-[#fafafa]">
        <ReferencesStatsSection />
        <ReferencesLegacySection />
        <ReferencesSectorsSection />
        <ReferencesTechnicalSection />
        <ReferencesCaseStudiesSection />
        <ReferencesFAQSection />
        <ReferencesCTASection />
      </div>
    </div>
  );
}

"use client";

import React, { useRef } from 'react';
import { useScroll, useTransform } from 'framer-motion';

import SolutionsHeroSection from '@/components/sections/SolutionsHeroSection';
import SolutionsMaterialScience from '@/components/sections/SolutionsMaterialScience';
import SolutionsDurability from '@/components/sections/SolutionsDurability';
import SolutionsHealthSafety from '@/components/sections/SolutionsHealthSafety';
import SolutionsApplications from '@/components/sections/SolutionsApplications';
import SolutionsEnvironment from '@/components/sections/SolutionsEnvironment';
import SolutionsRecyclability from '@/components/sections/SolutionsRecyclability';
import SolutionsComparative from '@/components/sections/SolutionsComparative';
import SolutionsCertifications from '@/components/sections/SolutionsCertifications';
import SolutionsEconomicROI from '@/components/sections/SolutionsEconomicROI';
import SolutionsCtaSection from '@/components/sections/SolutionsCtaSection';

export default function SolutionsClient() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  
  

  return (
    <div ref={containerRef} className="relative w-full bg-[#fafafa]">
      <SolutionsHeroSection />
      
      <div className="relative z-20 bg-[#fafafa]">
        <SolutionsMaterialScience />
        <SolutionsDurability />
        <SolutionsHealthSafety />
        <SolutionsApplications />
        <SolutionsEnvironment />
        <SolutionsRecyclability />
        <SolutionsComparative />
        <SolutionsCertifications />
        <SolutionsEconomicROI />
        <SolutionsCtaSection />
      </div>
    </div>
  );
}

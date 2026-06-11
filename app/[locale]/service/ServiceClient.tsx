"use client";

import React, { useRef } from 'react';
import { useScroll, useTransform } from 'framer-motion';

import ServiceHeroSection from '@/components/sections/ServiceHeroSection';
import ServiceOverviewSection from '@/components/sections/ServiceOverviewSection';
import ServiceDocumentLibrarySection from '@/components/sections/ServiceDocumentLibrarySection';
import ServiceInstallationProtocolsSection from '@/components/sections/ServiceInstallationProtocolsSection';
import ServiceTrainingAcademySection from '@/components/sections/ServiceTrainingAcademySection';
import ServiceQualityAssuranceSection from '@/components/sections/ServiceQualityAssuranceSection';
import ServiceMaterialScienceSection from '@/components/sections/ServiceMaterialScienceSection';
import ServiceFAQSection from '@/components/sections/ServiceFAQSection';
import ServiceCTASection from '@/components/sections/ServiceCTASection';

export default function ServiceClient() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  
  

  return (
    <div ref={containerRef} className="relative w-full bg-[#fafafa]">
      <ServiceHeroSection />
      
      <div className="relative z-20 bg-[#fafafa]">
        <ServiceOverviewSection />
        <ServiceDocumentLibrarySection />
        <ServiceInstallationProtocolsSection />
        <ServiceTrainingAcademySection />
        <ServiceQualityAssuranceSection />
        <ServiceMaterialScienceSection />
        <ServiceFAQSection />
        <ServiceCTASection />
      </div>
    </div>
  );
}

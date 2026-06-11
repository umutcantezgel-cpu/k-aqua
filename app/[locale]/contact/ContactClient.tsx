"use client";

import React, { useRef } from 'react';
import { useScroll, useTransform } from 'framer-motion';

import ContactHeroSection from '@/components/sections/ContactHeroSection';
import ContactGlobalOperationsSection from '@/components/sections/ContactGlobalOperationsSection';
import ContactDepartmentsSection from '@/components/sections/ContactDepartmentsSection';
import ContactRegionalOfficesSection from '@/components/sections/ContactRegionalOfficesSection';
import ContactProcurementProcessSection from '@/components/sections/ContactProcurementProcessSection';
import ContactSalesFormSection from '@/components/sections/ContactSalesFormSection';
import ContactFAQSection from '@/components/sections/ContactFAQSection';
import ContactLegalSection from '@/components/sections/ContactLegalSection';

export default function ContactClient() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  
  

  return (
    <div ref={containerRef} className="relative w-full bg-[#fafafa]">
      <ContactHeroSection />
      
      <div className="relative z-20 bg-[#fafafa]">
        <ContactGlobalOperationsSection />
        <ContactDepartmentsSection />
        <ContactRegionalOfficesSection />
        <ContactProcurementProcessSection />
        <ContactSalesFormSection />
        <ContactFAQSection />
        <ContactLegalSection />
      </div>
    </div>
  );
}

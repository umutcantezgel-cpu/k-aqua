"use client";

import React, { useRef } from 'react';

import HomeHeroSection from '@/components/sections/HomeHeroSection';
import dynamic from 'next/dynamic';

const HomeFeaturesSection = dynamic(() => import('@/components/sections/HomeFeaturesSection'), { ssr: false });
const HomeMaterialsScienceSection = dynamic(() => import('@/components/sections/HomeMaterialsScienceSection'), { ssr: false });
const HomeProductEcosystemSection = dynamic(() => import('@/components/sections/HomeProductEcosystemSection'), { ssr: false });
const HomeApplicationsSection = dynamic(() => import('@/components/sections/HomeApplicationsSection'), { ssr: false });
const HomeSustainabilitySection = dynamic(() => import('@/components/sections/HomeSustainabilitySection'), { ssr: false });
const HomeCertificationsSection = dynamic(() => import('@/components/sections/HomeCertificationsSection'), { ssr: false });
const HomePartnershipSection = dynamic(() => import('@/components/sections/HomePartnershipSection'), { ssr: false });
const HomeFAQSection = dynamic(() => import('@/components/sections/HomeFAQSection'), { ssr: false });
const HomeCTASection = dynamic(() => import('@/components/sections/HomeCTASection'), { ssr: false });

export default function HomeClient() {
  return (
    <div className="relative w-full bg-[#fafafa]">
      <HomeHeroSection />
      
      <div className="relative z-20 bg-[#fafafa]">
        <HomeFeaturesSection />
        <HomeMaterialsScienceSection />
        <HomeProductEcosystemSection />
        <HomeApplicationsSection />
        <HomeSustainabilitySection />
        <HomeCertificationsSection />
        <HomePartnershipSection />
        <HomeFAQSection />
        <HomeCTASection />
      </div>
    </div>
  );
}

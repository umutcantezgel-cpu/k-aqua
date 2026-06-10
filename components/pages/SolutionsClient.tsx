"use client";

import React from 'react';
import SolutionsHeroSection from '@/components/sections/SolutionsHeroSection';
import SolutionsMaterialScience from '@/components/sections/SolutionsMaterialScience';
import SolutionsEnvironment from '@/components/sections/SolutionsEnvironment';
import SolutionsRecyclability from '@/components/sections/SolutionsRecyclability';
import SolutionsComparative from '@/components/sections/SolutionsComparative';
import SolutionsDurability from '@/components/sections/SolutionsDurability';
import SolutionsHealthSafety from '@/components/sections/SolutionsHealthSafety';
import SolutionsApplications from '@/components/sections/SolutionsApplications';
import SolutionsEconomicROI from '@/components/sections/SolutionsEconomicROI';
import SolutionsCertifications from '@/components/sections/SolutionsCertifications';
import SolutionsCtaSection from '@/components/sections/SolutionsCtaSection';

export default function SolutionsClient() {
  return (
    <main className="flex flex-col min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-[#5b2d8c]/50">
      <SolutionsHeroSection />
      <SolutionsMaterialScience />
      <SolutionsEnvironment />
      <SolutionsRecyclability />
      <SolutionsComparative />
      <SolutionsDurability />
      <SolutionsHealthSafety />
      <SolutionsApplications />
      <SolutionsEconomicROI />
      <SolutionsCertifications />
      <SolutionsCtaSection />
    </main>
  );
}

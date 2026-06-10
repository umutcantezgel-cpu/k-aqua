"use client";

import React from 'react';

import ReferencesHeroSection from '@/components/sections/ReferencesHeroSection';
import ReferencesStatsSection from '@/components/sections/ReferencesStatsSection';
import ReferencesLegacySection from '@/components/sections/ReferencesLegacySection';
import ReferencesSectorsSection from '@/components/sections/ReferencesSectorsSection';
import ReferencesCaseStudiesSection from '@/components/sections/ReferencesCaseStudiesSection';
import ReferencesTechnicalSection from '@/components/sections/ReferencesTechnicalSection';
import ReferencesFAQSection from '@/components/sections/ReferencesFAQSection';
import ReferencesCTASection from '@/components/sections/ReferencesCTASection';

export default function ReferencesClient() {
  return (
    <main className="relative bg-slate-50 text-slate-900 overflow-hidden font-sans selection:bg-blue-600 selection:text-white">
      <ReferencesHeroSection />
      <ReferencesStatsSection />
      <ReferencesLegacySection />
      <ReferencesSectorsSection />
      <ReferencesCaseStudiesSection />
      <ReferencesTechnicalSection />
      <ReferencesFAQSection />
      <ReferencesCTASection />
    </main>
  );
}

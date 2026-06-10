"use client";

import React from 'react';
import ServiceHeroSection from '../sections/ServiceHeroSection';
import ServiceOverviewSection from '../sections/ServiceOverviewSection';
import ServiceDocumentLibrarySection from '../sections/ServiceDocumentLibrarySection';
import ServiceMaterialScienceSection from '../sections/ServiceMaterialScienceSection';
import ServiceInstallationProtocolsSection from '../sections/ServiceInstallationProtocolsSection';
import ServiceQualityAssuranceSection from '../sections/ServiceQualityAssuranceSection';
import ServiceTrainingAcademySection from '../sections/ServiceTrainingAcademySection';
import ServiceFAQSection from '../sections/ServiceFAQSection';
import ServiceCTASection from '../sections/ServiceCTASection';

export default function ServiceClient() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-slate-900 selection:bg-slate-200 selection:text-slate-900 font-sans">
      <ServiceHeroSection />
      <ServiceOverviewSection />
      <ServiceDocumentLibrarySection />
      <ServiceMaterialScienceSection />
      <ServiceInstallationProtocolsSection />
      <ServiceQualityAssuranceSection />
      <ServiceTrainingAcademySection />
      <ServiceFAQSection />
      <ServiceCTASection />
    </div>
  );
}

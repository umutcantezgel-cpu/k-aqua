"use client";

import React from 'react';
import ContactHeroSection from '@/components/sections/ContactHeroSection';
import ContactGlobalOperationsSection from '@/components/sections/ContactGlobalOperationsSection';
import ContactDepartmentsSection from '@/components/sections/ContactDepartmentsSection';
import ContactRegionalOfficesSection from '@/components/sections/ContactRegionalOfficesSection';
import ContactProcurementProcessSection from '@/components/sections/ContactProcurementProcessSection';
import ContactFAQSection from '@/components/sections/ContactFAQSection';
import ContactSalesFormSection from '@/components/sections/ContactSalesFormSection';
import ContactLegalSection from '@/components/sections/ContactLegalSection';

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://k-aqua.de/#organization",
      "name": "KWT GmbH (K-Aqua)",
      "url": "https://k-aqua.de",
      "logo": "https://k-aqua.de/logo.png",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Auweg 3",
        "addressLocality": "Waldsolms-Brandoberndorf",
        "postalCode": "35647",
        "addressCountry": "DE"
      },
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "telephone": "+49-60-85-9868-410",
          "contactType": "sales",
          "email": "info@k-aqua.de",
          "availableLanguage": ["English", "German"]
        },
        {
          "@type": "ContactPoint",
          "telephone": "+49-60-85-9868-410",
          "contactType": "technical support",
          "email": "support@k-aqua.de",
          "availableLanguage": ["English", "German"]
        }
      ]
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://k-aqua.de/#localbusiness",
      "name": "KWT GmbH (K-Aqua)",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Auweg 3",
        "addressLocality": "Waldsolms-Brandoberndorf",
        "postalCode": "35647",
        "addressCountry": "DE"
      },
      "telephone": "+49 60 85 / 9868-410"
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How do I become an official K-Aqua B2B distributor?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Becoming an authorized K-Aqua distributor requires a preliminary market capability assessment. We partner with established logistics and plumbing supply enterprises capable of maintaining regional inventory and supporting large-scale infrastructure projects. Please contact our Enterprise Commercial Division to initiate the vendor vetting protocol."
          }
        },
        {
          "@type": "Question",
          "name": "What are the minimum order quantities (MOQ) for enterprise shipments?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Due to the logistical scale of international freight, standard enterprise shipments are optimized for 20ft and 40ft containers. However, project-specific requirements can dictate mixed-container loads. For exact MOQ thresholds based on your required pipe diameters and fitting ratios, please request a volume quotation."
          }
        },
        {
          "@type": "Question",
          "name": "Does K-Aqua provide on-site technical training for installation crews?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. For massive infrastructure deployments, our technical engineering team can be dispatched to your project site to conduct certified training on precise PPR welding techniques, extrusion protocols, and thermal expansion management. We ensure your crews are operating to exact German DIN standards."
          }
        },
        {
          "@type": "Question",
          "name": "What guarantees and warranties apply to your PPR systems?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our PPR pipeline systems are backed by an industry-leading, comprehensive 10-year warranty when installed by certified professionals according to our technical guidelines. Due to our rigorous manufacturing and thermographic QA processes, K-Aqua systems are engineered to exceed a 50-year operational lifecycle."
          }
        },
        {
          "@type": "Question",
          "name": "Can you manufacture custom PPR solutions for specialized industrial applications?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Our advanced manufacturing facility in Germany is equipped to handle custom tooling and specialized polymer blends for unique enterprise requirements, including ultra-pure water transport for semiconductor fabs or highly specific chemical processing lines. Custom engineering requires direct consultation with our technical department."
          }
        }
      ]
    }
  ]
};

export default function ContactClient() {
  return (
    <div className="flex flex-col bg-white selection:bg-blue-600 selection:text-white min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <ContactHeroSection />
      <ContactGlobalOperationsSection />
      <ContactDepartmentsSection />
      <ContactRegionalOfficesSection />
      <ContactProcurementProcessSection />
      <ContactSalesFormSection />
      <ContactFAQSection />
      <ContactLegalSection />
    </div>
  );
}

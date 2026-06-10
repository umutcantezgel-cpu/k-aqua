"use client";

import React, { useRef } from 'react';
import { useScroll, useTransform, useSpring } from 'framer-motion';

import ProductsHeroSection from '@/components/sections/ProductsHeroSection';
import ProductsTechnologyCore from '@/components/sections/ProductsTechnologyCore';
import ProductsMaterialScience from '@/components/sections/ProductsMaterialScience';
import ProductsApplicationAreas from '@/components/sections/ProductsApplicationAreas';
import ProductsTechnicalSpecifications from '@/components/sections/ProductsTechnicalSpecifications';
import ProductsCompetitiveAdvantage from '@/components/sections/ProductsCompetitiveAdvantage';
import ProductsSDRRatings from '@/components/sections/ProductsSDRRatings';
import ProductsFittingsArsenal from '@/components/sections/ProductsFittingsArsenal';
import ProductsInstallationProcess from '@/components/sections/ProductsInstallationProcess';
import ProductsSustainability from '@/components/sections/ProductsSustainability';
import ProductsQualityAssurance from '@/components/sections/ProductsQualityAssurance';
import ProductsFAQSection from '@/components/sections/ProductsFAQSection';
import ProductsCTA from '@/components/sections/ProductsCTA';

export default function ProductsClient() {
  const mainRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: mainRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, { damping: 20, stiffness: 100 });
  
  // Hero transforms
  const heroY = useTransform(smoothProgress, [0, 0.2], ["0%", "30%"]);
  const heroOpacity = useTransform(smoothProgress, [0, 0.15], [1, 0]);

  return (
    <main 
      ref={mainRef}
      className="relative bg-slate-50 text-slate-900 overflow-hidden font-sans selection:bg-[#6c5194] selection:text-white"
    >
      {/* Background ambient noise/gradient */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-200 via-slate-50 to-slate-50 opacity-50" />

      <ProductsHeroSection heroY={heroY} heroOpacity={heroOpacity} />
      <ProductsTechnologyCore />
      <ProductsMaterialScience />
      <ProductsApplicationAreas />
      <ProductsTechnicalSpecifications />
      <ProductsCompetitiveAdvantage />
      <ProductsSDRRatings />
      <ProductsFittingsArsenal />
      <ProductsInstallationProcess />
      <ProductsSustainability />
      <ProductsQualityAssurance />
      <ProductsFAQSection />
      <ProductsCTA />
    </main>
  );
}

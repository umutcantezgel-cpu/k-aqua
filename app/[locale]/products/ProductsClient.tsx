"use client";

import React, { useRef } from 'react';
import { useScroll, useTransform } from 'framer-motion';

import ProductsHeroSection from '@/components/sections/ProductsHeroSection';
import ProductsTechnologyCore from '@/components/sections/ProductsTechnologyCore';
import ProductsSDRRatings from '@/components/sections/ProductsSDRRatings';
import ProductsApplicationAreas from '@/components/sections/ProductsApplicationAreas';
import ProductsCompetitiveAdvantage from '@/components/sections/ProductsCompetitiveAdvantage';
import ProductsFittingsArsenal from '@/components/sections/ProductsFittingsArsenal';
import ProductsMaterialScience from '@/components/sections/ProductsMaterialScience';
import ProductsInstallationProcess from '@/components/sections/ProductsInstallationProcess';
import ProductsQualityAssurance from '@/components/sections/ProductsQualityAssurance';
import ProductsTechnicalSpecifications from '@/components/sections/ProductsTechnicalSpecifications';
import ProductsSustainability from '@/components/sections/ProductsSustainability';
import ProductsFAQSection from '@/components/sections/ProductsFAQSection';
import ProductsCTA from '@/components/sections/ProductsCTA';

export default function ProductsClient() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <div ref={containerRef} className="relative w-full bg-[#fafafa]">
      <ProductsHeroSection heroY={heroY} heroOpacity={heroOpacity} />
      
      <div className="relative z-20 bg-[#fafafa]">
        <ProductsTechnologyCore />
        <ProductsSDRRatings />
        <ProductsApplicationAreas />
        <ProductsCompetitiveAdvantage />
        <ProductsFittingsArsenal />
        <ProductsMaterialScience />
        <ProductsInstallationProcess />
        <ProductsQualityAssurance />
        <ProductsTechnicalSpecifications />
        <ProductsSustainability />
        <ProductsFAQSection />
        <ProductsCTA />
      </div>
    </div>
  );
}

"use client";

import React, { useRef } from 'react';
import { useScroll, useTransform } from 'framer-motion';

import NewsHeroSection from '@/components/sections/NewsHeroSection';
import NewsFeaturedArticleSection from '@/components/sections/NewsFeaturedArticleSection';
import NewsGridSection from '@/components/sections/NewsGridSection';
import NewsNewsletterSection from '@/components/sections/NewsNewsletterSection';
import NewsPressKitSection from '@/components/sections/NewsPressKitSection';

export default function NewsClient() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  
  

  return (
    <div ref={containerRef} className="relative w-full bg-[#fafafa]">
      <NewsHeroSection />
      
      <div className="relative z-20 bg-[#fafafa]">
        <NewsFeaturedArticleSection />
        <NewsGridSection />
        <NewsNewsletterSection />
        <NewsPressKitSection />
      </div>
    </div>
  );
}

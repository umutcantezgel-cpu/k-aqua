"use client";

import React from 'react';

import NewsHeroSection from '@/components/sections/NewsHeroSection';
import NewsFeaturedArticleSection from '@/components/sections/NewsFeaturedArticleSection';
import NewsGridSection from '@/components/sections/NewsGridSection';
import NewsPressKitSection from '@/components/sections/NewsPressKitSection';
import NewsNewsletterSection from '@/components/sections/NewsNewsletterSection';

export default function NewsClient() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-[#5b2d8c] selection:text-slate-900">
      <main className="w-full flex flex-col">
        <NewsHeroSection />
        <NewsFeaturedArticleSection />
        <NewsGridSection />
        <NewsPressKitSection />
        <NewsNewsletterSection />
      </main>
    </div>
  );
}

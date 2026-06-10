'use client';

import React, { useState, useEffect } from 'react';
import { Icon } from '@/components/ui/Icon';

export function BackToTop() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Trigger on mount
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 z-30 flex h-12 w-12 items-center justify-center rounded-full bg-[#1A6FD4] text-white shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1A6FD4] focus-visible:ring-offset-2 ${
        showButton 
          ? 'translate-y-0 opacity-100' 
          : 'pointer-events-none translate-y-4 opacity-0'
      }`}
      aria-label="Zurück nach oben"
      aria-hidden={!showButton}
    >
      <Icon name="arrow_upward" className="transition-transform group-hover:-translate-y-1" />
    </button>
  );
}

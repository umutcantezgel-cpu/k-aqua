'use client';

import React, { useEffect, useState } from 'react';
import { Icon } from '@/components/ui/Icon';

interface TOCItem {
  id: string;
  text: string;
  level: number;
}

export function TableOfContents() {
  const [headings, setHeadings] = useState<TOCItem[]>([]);
  const [activeId, setActiveId] = useState<string>('');
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    // Collect specific headings from DOM (excluding header/footer parts if any)
    const elements = Array.from(document.querySelectorAll('main h2[id], main h3[id]'));
    
    if (elements.length < 3) return; // Only show TOC if there are 3+ headings

    const items = elements.map((el) => ({
      id: el.id,
      text: el.textContent || '',
      level: Number(el.tagName.substring(1)),
    }));
    
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setHeadings(items);

    // Intersection Observer for scroll spy
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '-100px 0px -60% 0px' }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  if (headings.length < 3) return null;

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 100; // offset for fixed header
      window.scrollTo({ top, behavior: 'smooth' });
    }
    setIsMobileOpen(false);
  };

  const contentList = (
    <ul className="space-y-3 font-medium text-sm">
      {headings.map((item) => (
        <li 
          key={item.id} 
          className={`${item.level === 3 ? 'ml-4' : 'font-semibold'} transition-colors`}
        >
          <a
            href={`#${item.id}`}
            onClick={(e) => handleScroll(e, item.id)}
            className={`block hover:text-[#1A6FD4] focus:outline-none focus:ring-2 focus:ring-[#1A6FD4] rounded-sm ${
              activeId === item.id ? 'text-[#1A6FD4]' : 'text-[#4A7299]'
            }`}
          >
            {item.text}
          </a>
        </li>
      ))}
    </ul>
  );

  return (
    <>
      {/* Desktop TOC (Sticky Sidebar) */}
      <div className="hidden lg:block sticky top-32 max-h-[calc(100vh-10rem)] overflow-y-auto w-64 p-6 bg-[#EEF5FF] rounded-xl border border-[#D4E5F7] shadow-sm">
        <h4 className="text-sm font-bold text-[#0C1929] uppercase tracking-wider mb-4">Inhaltsverzeichnis</h4>
        {contentList}
      </div>

      {/* Mobile TOC (Accordion) */}
      <div className="lg:hidden mb-8 rounded-xl border border-[#D4E5F7] bg-white overflow-hidden shadow-sm">
        <button 
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="w-full px-5 py-4 flex items-center justify-between text-left font-semibold text-[#0C1929] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#1A6FD4]"
          aria-expanded={isMobileOpen}
        >
          <span className="flex items-center gap-2">
            <Icon name="format_list_bulleted" size="sm" className="text-[#4A7299]" />
            Inhaltsverzeichnis
          </span>
          <Icon 
            name="expand_more" 
            size="sm" 
            className={`text-[#4A7299] transition-transform ${isMobileOpen ? 'rotate-180' : ''}`} 
          />
        </button>
        <div className={`transition-all duration-300 ease-in-out ${isMobileOpen ? 'max-h-[500px] opacity-100 border-t border-[#D4E5F7]' : 'max-h-0 opacity-0'}`}>
          <div className="p-5 bg-[#EEF5FF]">
            {contentList}
          </div>
        </div>
      </div>
    </>
  );
}

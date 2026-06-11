'use client';

import React, { useState, useRef, useEffect } from 'react';
import { usePathname, useRouter } from '@/i18n/routing';
import { useLocale } from 'next-intl';
import { Globe, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const locales = [
  { code: 'de', label: 'Deutsch' },
  { code: 'en', label: 'English' },
  { code: 'fr', label: 'Français' },
  { code: 'es', label: 'Español' },
  { code: 'it', label: 'Italiano' },
  { code: 'tr', label: 'Türkçe' },
  { code: 'pl', label: 'Polski' },
  { code: 'ru', label: 'Русский' },
  { code: 'ar', label: 'العربية' },
  { code: 'zh', label: '中文' },
];

export default function LanguageSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentLocale = locales.find(l => l.code === locale) || locales[0];

  const switchLocale = (newLocale: string) => {
    setIsOpen(false);
    router.replace(pathname, { locale: newLocale });
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center space-x-2 px-4 py-2.5 rounded-full text-[14px] font-bold tracking-widest transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary min-h-[44px] ${
          isOpen ? 'bg-primary/10 text-primary' : 'bg-white border border-slate-200 text-slate-700 hover:text-primary hover:bg-slate-50 hover:border-primary/30 shadow-sm'
        }`}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <Globe className="w-4 h-4 text-primary" strokeWidth={2.5} />
        <span className="uppercase">{currentLocale.code}</span>
        <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform duration-300 ease-[cubic-bezier(0.87,0,0.13,1)] ${isOpen ? 'rotate-180 text-primary' : ''}`} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.96 }}
            transition={{ duration: 0.25, ease: [0.23, 1, 0.32, 1] }}
            className="absolute right-0 lg:right-auto lg:left-1/2 lg:-translate-x-1/2 mt-3 w-40 bg-white border border-slate-200 rounded-2xl shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1)] overflow-hidden z-[100]"
          >
            <ul className="p-2 flex flex-col space-y-1 max-h-[300px] overflow-y-auto custom-scrollbar bg-white">
              {locales.map((l) => (
                <li key={l.code}>
                  <button
                    onClick={() => switchLocale(l.code)}
                    className={`block w-full text-left px-3 py-2.5 rounded-xl text-sm transition-all duration-200 ${
                      locale === l.code
                        ? 'bg-primary/10 text-primary font-bold'
                        : 'text-slate-600 hover:bg-slate-50 hover:text-primary font-medium'
                    }`}
                  >
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

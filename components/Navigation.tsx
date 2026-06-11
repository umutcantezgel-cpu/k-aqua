"use client";

import React, { useState, useEffect } from 'react';
import { Link } from '@/i18n/routing';
import { usePathname } from 'next/navigation';
import { Droplet, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import LanguageSwitcher from '@/components/LanguageSwitcher';
const NAV_PAGES = [
  { id: '/', label: 'Start' },
  { id: '/products', label: 'Produkte' },
  { id: '/solutions', label: 'Lösungen' },
  { id: '/service', label: 'Service' },
  { id: '/references', label: 'Referenzen' },
  { id: '/about', label: 'Über uns' },
  { id: '/news', label: 'News' },
  { id: '/career', label: 'Karriere' },
];

export default function Navigation() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { 
    setMenuOpen(false); 
  }, [pathname]);


  return (
    <React.Fragment>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
          scrolled || menuOpen 
            ? 'bg-white/70 backdrop-blur-xl border-slate-200/50 shadow-sm' 
            : 'bg-transparent border-transparent'
        }`}
      >
        <div className="max-w-[1200px] mx-auto px-6 h-[72px] flex items-center justify-between">
          
          <Link href="/" aria-label="K-Aqua Startseite" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
              <Droplet size={16} className="text-white" strokeWidth={2.5} />
            </div>
            <span className="text-[20px] font-bold tracking-tight text-slate-900">K-Aqua</span>
          </Link>

          <nav className="hidden lg:flex items-center gap-1" aria-label="Hauptnavigation">
            {NAV_PAGES.map((p) => {
              const isActive = pathname === p.id || (pathname.startsWith(p.id) && p.id !== '/');
              return (
                <Link 
                  key={p.id} 
                  href={p.id as any}
                  className={`px-4 h-11 flex items-center rounded-full text-[15px] transition-all font-medium ${
                    isActive 
                      ? 'text-primary font-bold bg-primary/5' 
                      : 'text-slate-500 hover:text-slate-900 hover:bg-slate-50'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {p.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">

            <div className="hidden lg:block">
              <LanguageSwitcher />
            </div>
            
            <div className="hidden lg:block">
              <Link href="/contact" className="focus:outline-none">
                <Button variant="primary" size="sm" className="font-semibold px-5 rounded-full">
                  Kontakt
                </Button>
              </Link>
            </div>

            <button 
              type="button" 
              className="lg:hidden w-11 h-11 rounded-full flex items-center justify-center text-slate-600 hover:bg-slate-100 transition-colors" 
              aria-label="Menü öffnen" 
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed inset-0 top-[72px] z-40 bg-white/95 backdrop-blur-3xl border-b border-slate-200 flex flex-col px-6 py-6 gap-2 h-max max-h-[calc(100vh-72px)] overflow-y-auto">
          {NAV_PAGES.concat([{ id: '/contact', label: 'Kontakt' }]).map((p) => {
            const isActive = pathname === p.id || (pathname.startsWith(p.id) && p.id !== '/');
            return (
              <Link 
                key={p.id} 
                href={p.id as any} 
                className={`flex items-center h-14 px-4 rounded-xl text-lg transition-colors ${
                  isActive 
                    ? 'bg-primary/10 text-primary font-bold' 
                    : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900 font-medium'
                }`}
              >
                {p.label}
              </Link>
            );
          })}
          <div className="mt-6 pt-6 border-t border-slate-200/60 flex justify-center">
            <LanguageSwitcher />
          </div>
        </div>
      )}
    </React.Fragment>
  );
}

'use client';

import React, { useState, useEffect } from 'react';
import { Link } from '@/i18n/routing';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/Button';
import { MobileNav } from './MobileNav';
import { Icon } from '@/components/ui/Icon';
import { getNavigationConfig } from '@/lib/data/navigation';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  const navConfig = getNavigationConfig();
  const desktopNavItems = navConfig.main.filter(item => item.label !== 'Startseite');

  // Handle Scroll State for Sticky effects
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus when route changes
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header 
        className={`sticky top-0 z-40 bg-white transition-all duration-300 border-b ${
          isScrolled ? 'border-[#D4E5F7] shadow-[0_1px_3px_rgba(13,73,153,0.08)] py-0' : 'border-transparent py-1'
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20 relative">
            
            {/* 1. Left Zone: Explicit Logo Reservation (flex-1) */}
            <div className="flex-1 flex items-center justify-start min-w-[200px]">
              {/* === PLATZHALTER FÜR DAS LOGO === */}
              {/* Hier Logo-Image einfügen, flex-1 drückt Navigation in die perfekte Mitte */}
              <Link href="/" className="text-2xl font-black text-[#0D4999] tracking-tighter" aria-label="Startseite">
                K-AQUA<span className="text-[#00B4D8]">.</span>
              </Link>
            </div>

            {/* 2. Center Zone: Desktop Navigation (flex-none) */}
            <nav className="flex-none hidden lg:flex gap-8 items-center h-full justify-center" aria-label="Hauptnavigation">
              {desktopNavItems.map((item) => {
                const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));
                const hasChildren = item.children && item.children.length > 0;

                return (
                  <div key={item.label} className="group relative flex items-center h-full">
                    
                    {hasChildren ? (
                      <button
                        className={`flex items-center gap-1.5 font-semibold py-2 transition-all duration-200 border-b-2 outline-none ${
                          isActive 
                            ? 'text-[#1A6FD4] border-[#1A6FD4]' 
                            : 'text-[#1E3A5C] hover:text-[#1A6FD4] border-transparent'
                        }`}
                        aria-expanded="false"
                        aria-haspopup="true"
                      >
                        {item.label}
                        <Icon 
                          name="expand_more" 
                          size="sm" 
                          className="transform transition-transform duration-300 group-hover:rotate-180 text-[#8BAABF] group-hover:text-[#1A6FD4]" 
                        />
                      </button>
                    ) : (
                      <Link
                        href={item.href}
                        className={`font-semibold py-2 transition-all duration-200 border-b-2 outline-none ${
                          isActive 
                            ? 'text-[#1A6FD4] border-[#1A6FD4]' 
                            : 'text-[#1E3A5C] hover:text-[#1A6FD4] border-transparent'
                        }`}
                        aria-current={isActive ? 'page' : undefined}
                      >
                        {item.label}
                      </Link>
                    )}

                    {/* Mega Dropdown Panel - Pure CSS Hover Engine */}
                    {hasChildren && (
                      <div 
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-0 w-max max-w-5xl bg-white shadow-[0_8px_24px_rgba(13,73,153,0.12)] rounded-b-xl border border-t-0 border-[#D4E5F7] overflow-hidden transition-all duration-300 origin-top transform opacity-0 invisible scale-y-95 group-hover:opacity-100 group-hover:visible group-hover:scale-y-100 z-50 pointer-events-none group-hover:pointer-events-auto"
                        role="menu"
                      >
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#1A6FD4] to-[#3A8FE8]"></div>
                        <div className="p-8 grid grid-cols-3 gap-x-12 gap-y-6 min-w-[850px]">
                          {item.children!.map((child, idx) => (
                            <Link 
                              key={idx}
                              href={child.href}
                              className="group/link flex items-start gap-5 p-4 rounded-xl hover:bg-[#EAF3FF] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1A6FD4]"
                              role="menuitem"
                            >
                              {child.icon && (
                                <div className="w-12 h-12 rounded-lg bg-[#EAF3FF] text-[#1A6FD4] flex items-center justify-center shrink-0 group-hover/link:bg-[#1A6FD4] group-hover/link:text-white transition-all shadow-sm">
                                  <Icon name={child.icon} />
                                </div>
                              )}
                              <div>
                                <p className="font-bold text-[#0C1929] group-hover/link:text-[#1A6FD4] transition-colors">{child.label}</p>
                                {child.description && (
                                  <p className="text-sm text-[#4A7299] mt-1 leading-relaxed line-clamp-2">{child.description}</p>
                                )}
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </nav>

            {/* 3. Right Zone: CTA & Mobile Toggle (flex-1) */}
            <div className="flex-1 flex items-center justify-end">
              <div className="hidden lg:flex items-center pl-6 ml-6 border-l border-[#D4E5F7]">
                <Link href="/kontakt" className="inline-flex items-center justify-center rounded-lg font-semibold px-5 py-2.5 text-[15px] tracking-[0.01em] bg-[#1A6FD4] text-white hover:bg-[#0D4999] shadow-[0_4px_12px_rgba(13,73,153,0.20)] hover:shadow-[0_8px_24px_rgba(13,73,153,0.25)] hover:-translate-y-0.5 transition-all" data-cta="header-nav" aria-label="Kontaktanfrage öffnen">
                  Jetzt Anfragen
                </Link>
              </div>

              {/* Mobile menu button */}
              <div className="flex lg:hidden items-center ml-4">
                <button
                  onClick={() => setMobileMenuOpen(true)}
                  className="p-2 text-[#1E3A5C] hover:text-[#1A6FD4] hover:bg-[#EAF3FF] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1A6FD4] rounded-lg transition-colors"
                  aria-expanded={mobileMenuOpen}
                  aria-label="Menü öffnen"
                >
                  <Icon name="menu" size="lg" />
                </button>
              </div>
            </div>

          </div>
        </div>
      </header>

      {/* Backdrop for Mega Dropdown - Handled implicitly by the dropdown architecture, but keeping body clean */}
      {/* Mobile Drawer */}
      <MobileNav isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </>
  );
}

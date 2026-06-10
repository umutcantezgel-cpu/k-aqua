"use client";

import React, { useState, useEffect } from 'react';
import { Link } from '@/i18n/routing';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Droplet, Menu, X } from 'lucide-react';
import { useTranslations } from 'next-intl';
import LanguageSwitcher from './LanguageSwitcher';

const getNavItems = (t: any) => [
  { id: '/', label: t('home') },
  { id: '/products', label: t('products') },
  { id: '/solutions', label: t('solutions') },
  { id: '/about', label: t('about') },
  { id: '/service', label: t('service') },
  { id: '/news', label: t('news') },
  { id: '/career', label: t('career') },
  { id: '/contact', label: t('contact') },
];

export default function Navigation() {
  const pathname = usePathname();
  const t = useTranslations('Global.Navigation');
  const navItems = getNavItems(t);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-surface/90 backdrop-blur-md border-b border-border-subtle shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex justify-between items-center h-20">
          <Link 
            href="/"
            className="flex items-center cursor-pointer group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-md p-1"
          >
            <div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center">
              <Droplet className="w-5 h-5 text-on-primary group-hover:scale-105 transition-transform duration-300" strokeWidth={2} />
            </div>
            <span className="ml-3 text-xl font-bold text-on-surface tracking-tight break-words hyphens-auto">K-Aqua</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-1">
            {navItems.map((item) => {
              const isActive = pathname === item.id || (pathname.startsWith(item.id) && item.id !== '/');
              return (
                <Link
                  key={item.id}
                  href={item.id}
                  className={`px-4 py-2 rounded-md text-[13px] font-semibold uppercase tracking-wider transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary min-h-[44px] flex items-center justify-center ${
                    isActive 
                      ? 'text-primary' 
                      : 'text-on-surface-variant hover:text-on-surface active:scale-[0.98]'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
            {/* Language Switcher for Desktop */}
            <div className="ml-4 flex items-center border-l border-border-subtle pl-4">
              <LanguageSwitcher />
            </div>
          </nav>

          {/* Mobile Menu Button & Language Switcher */}
          <div className="md:hidden flex items-center space-x-2">
            <LanguageSwitcher />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-md text-on-surface-variant hover:bg-surface-muted hover:text-on-surface transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary min-h-[44px] min-w-[44px] flex items-center justify-center"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-surface-base border-b border-border-subtle overflow-hidden shadow-flat-plus"
          >
            <div className="px-4 sm:px-6 py-4 space-y-1">
              {navItems.map((item) => {
                const isActive = pathname === item.id || (pathname.startsWith(item.id) && item.id !== '/');
                return (
                  <Link
                    key={item.id}
                    href={item.id}
                    className={`block w-full text-left px-4 py-4 rounded-md text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary min-h-[44px] ${
                      isActive 
                        ? 'bg-surface-muted text-primary' 
                        : 'text-on-surface-variant hover:bg-surface-muted hover:text-on-surface'
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

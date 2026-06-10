'use client';

import React, { useEffect, useState } from 'react';
import { Link } from '@/i18n/routing';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/Button';
import { Icon } from '@/components/ui/Icon';
import { getNavigationConfig, NavigationItem } from '@/lib/data/navigation';

import { motion, AnimatePresence } from 'framer-motion';

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileNav({ isOpen, onClose }: MobileNavProps) {
  const [expandedItems, setExpandedItems] = useState<string[]>([]);
  const pathname = usePathname();
  const navConfig = getNavigationConfig();

  // Prevent scrolling when mobile nav is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const toggleAccordion = (label: string) => {
    setExpandedItems(prev => 
      prev.includes(label) ? prev.filter(item => item !== label) : [...prev, label]
    );
  };

  const renderNavItem = (item: NavigationItem, depth = 0) => {
    const hasChildren = item.children && item.children.length > 0;
    const isExpanded = expandedItems.includes(item.label);
    const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));

    const paddingLeft = depth === 0 ? 'pl-4' : 'pl-8';
    const bgColor = depth > 0 ? 'bg-[#EEF5FF]' : 'bg-white';

    if (hasChildren) {
      return (
        <div key={item.label} className={`flex flex-col border-b border-[#EEF5FF] ${bgColor}`}>
          <button 
            onClick={() => toggleAccordion(item.label)}
            className={`py-4 pr-4 ${paddingLeft} flex items-center justify-between w-full font-medium focus:outline-none focus-visible:bg-[#EAF3FF] ${isActive || isExpanded ? 'text-[#1A6FD4]' : 'text-[#0C1929]'}`}
            aria-expanded={isExpanded}
          >
            <span className="flex items-center gap-2">
              {item.icon && depth > 0 && <Icon name={item.icon} size="sm" className="text-[#1A6FD4]" />}
              {item.label}
            </span>
            <Icon 
              name="expand_more" 
              size="sm" 
              className={`transform transition-transform text-[#8BAABF] duration-300 ${isExpanded ? 'rotate-180' : ''}`} 
            />
          </button>
          
          <AnimatePresence>
            {isExpanded && (
              <motion.div 
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="flex flex-col pb-2">
                  {item.children!.map((child) => renderNavItem(child, depth + 1))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      );
    }

    return (
      <Link 
        key={item.label}
        href={item.href} 
        onClick={onClose}
        className={`py-4 pr-4 ${paddingLeft} border-b border-[#EEF5FF] flex items-center w-full font-medium transition-colors focus:outline-none focus-visible:bg-[#EAF3FF] ${
          isActive 
            ? 'text-[#1A6FD4] bg-[#EAF3FF] border-l-4 border-l-[#1A6FD4]' 
            : 'text-[#0C1929] hover:text-[#1A6FD4] hover:bg-[#EEF5FF] border-l-4 border-l-transparent'
        }`}
        aria-current={isActive ? 'page' : undefined}
      >
        <span className="flex items-center gap-2">
          {item.icon && depth > 0 && <Icon name={item.icon} size="sm" className="text-[#8BAABF]" />}
          {item.label}
        </span>
      </Link>
    );
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex lg:hidden">
          {/* Overlay with fade-in transition */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm" 
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Drawer */}
          <motion.div 
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", bounce: 0, duration: 0.4 }}
            className="relative flex-1 flex flex-col max-w-sm w-[85vw] bg-white overflow-y-auto transform h-full shadow-2xl"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile Navigation"
          >
            <div className="p-4 border-b border-[#D4E5F7] flex items-center justify-between sticky top-0 bg-white z-10 min-h-[5rem]">
              <Link href="/" onClick={onClose} className="text-xl font-black text-[#0D4999] tracking-tighter" aria-label="Startseite">
                K-AQUA<span className="text-[#00B4D8]">.</span>
              </Link>
              <button 
                onClick={onClose}
                className="p-3 -mr-1 text-[#4A7299] hover:text-[#0C1929] rounded-lg hover:bg-[#EAF3FF] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1A6FD4]"
                aria-label="Navigation schließen"
              >
                <Icon name="close" size="md" />
              </button>
            </div>

            <nav className="flex-1 flex flex-col pt-2" aria-label="Mobile Hauptnavigation">
              {navConfig.main.map((item) => renderNavItem(item, 0))}
            </nav>

            <div className="p-6 pb-8 border-t border-[#D4E5F7] bg-[#EEF5FF] flex-shrink-0">
              <Link href="/kontakt" onClick={onClose} className="inline-flex items-center justify-center w-full rounded-lg font-medium py-4 text-lg bg-[#1A6FD4] text-white hover:bg-[#0D4999] shadow-lg shadow-[#1A6FD4]/20 transition-all" data-cta="mobile-nav">
                Jetzt Anfragen
              </Link>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

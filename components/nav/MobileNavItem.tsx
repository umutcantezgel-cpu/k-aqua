'use client';

import React, { useState } from 'react';
import { Link } from '@/i18n/routing';
import { usePathname } from 'next/navigation';
import { Icon } from '@/components/ui/Icon';

interface SubmenuItem {
  label: string;
  href: string;
}

interface MobileNavItemProps {
  label: string;
  href?: string;
  submenu?: SubmenuItem[];
  onClick?: () => void;
}

export function MobileNavItem({ label, href, submenu, onClick }: MobileNavItemProps) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const handleToggle = () => setIsOpen(!isOpen);

  // If there's a submenu, render an accordion item
  if (submenu && submenu.length > 0) {
    const isAnyChildActive = submenu.some(item => pathname === item.href || pathname.startsWith(item.href));
    
    return (
      <div className="flex flex-col border-b border-[#EEF5FF]">
        <button 
          onClick={handleToggle}
          className={`py-3 px-4 flex items-center justify-between w-full font-medium ${isAnyChildActive ? 'text-[#1A6FD4]' : 'text-[#0C1929]'}`}
        >
          {label}
          <Icon name="expand_more" size="sm" className={`transform transition-transform ${isOpen ? 'rotate-180' : ''}`} />
        </button>
        
        {isOpen && (
          <div className="bg-[#EEF5FF] flex flex-col py-2 px-4 space-y-2">
            {submenu.map((item, index) => {
              const isActive = pathname === item.href || pathname.startsWith(item.href);
              return (
                <Link 
                  key={index}
                  href={item.href}
                  onClick={onClick}
                  className={`py-2 pl-4 border-l-2 ${isActive ? 'text-[#1A6FD4] border-[#1A6FD4] font-medium' : 'text-[#4A7299] border-[#D4E5F7] hover:text-[#1A6FD4]'}`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        )}
      </div>
    );
  }

  // Without submenu, render a normal link
  if (!href) return null;

  const isActive = pathname === href || (href !== '/' && pathname.startsWith(href));
  
  return (
    <Link 
      href={href} 
      onClick={onClick}
      className={`py-3 px-4 border-b border-[#EEF5FF] flex items-center w-full font-medium ${isActive ? 'text-[#1A6FD4] bg-[#EAF3FF]/50' : 'text-[#0C1929]'}`}
    >
      {label}
    </Link>
  );
}

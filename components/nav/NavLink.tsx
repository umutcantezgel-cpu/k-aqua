'use client';

import React from 'react';
import { Link } from '@/i18n/routing';
import { usePathname } from 'next/navigation';

interface NavLinkProps {
  href: string;
  label: string;
  onClick?: () => void;
  className?: string;
}

export function NavLink({ href, label, onClick, className = '' }: NavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href || (href !== '/' && pathname.startsWith(href));

  const activeStyles = isActive 
    ? 'text-[#1A6FD4] border-b-2 border-[#1A6FD4]' 
    : 'text-[#1E3A5C] hover:text-[#1A6FD4] border-b-2 border-transparent';

  return (
    <Link 
      href={href} 
      onClick={onClick}
      className={`font-medium py-2 transition-colors duration-200 ${activeStyles} ${className}`.trim()}
      aria-current={isActive ? 'page' : undefined}
    >
      {label}
    </Link>
  );
}

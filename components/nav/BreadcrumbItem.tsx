import React from 'react';
import { Link } from '@/i18n/routing';

interface BreadcrumbItemProps {
  label: string;
  href?: string;
  active?: boolean;
}

export function BreadcrumbItem({ label, href, active = false }: BreadcrumbItemProps) {
  return (
    <li className="flex items-center">
      {href && !active ? (
        <Link href={href} className="text-sm text-[#4A7299] hover:text-[#1A6FD4] transition-colors">
          {label}
        </Link>
      ) : (
        <span className={`text-sm ${active ? 'text-[#0C1929] font-medium' : 'text-[#4A7299]'}`} aria-current={active ? 'page' : undefined}>
          {label}
        </span>
      )}
    </li>
  );
}

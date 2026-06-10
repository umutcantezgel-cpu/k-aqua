import React from 'react';
import { Link } from '@/i18n/routing';
import { Heading } from '@/components/ui/Heading';
import { Stack } from '@/components/layout/Stack';

interface FooterLink {
  label: string;
  href: string;
}

interface FooterLinkGroupProps {
  title: string;
  links: FooterLink[];
}

export function FooterLinkGroup({ title, links }: FooterLinkGroupProps) {
  return (
    <div>
      <Heading variant="h4" responsive={false} className="mb-6 text-white tracking-wide">
        {title}
      </Heading>
      <ul className="flex flex-col gap-2">
        {links.map((link, index) => (
          <li key={index}>
            <Link href={link.href} className="text-[#4A7299] hover:text-[#1A6FD4] transition-colors duration-200 text-sm">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

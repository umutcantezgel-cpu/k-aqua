import React from 'react';
import { Link } from '@/i18n/routing';
import { Service } from '@/lib/types';
import { Heading } from '@/components/ui/Heading';
import { Paragraph } from '@/components/ui/Paragraph';
import { Button } from '@/components/ui/Button';
import { Icon } from '@/components/ui/Icon';

interface ServiceCardProps {
  service: Service;
}

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <div className="flex flex-col h-full bg-white border border-[#D4E5F7] rounded-xl p-6 hover:shadow-[0_8px_24px_rgba(13,73,153,0.12)] hover:border-[#B8D1EE] transition-all duration-300 group">
      <div className="w-12 h-12 rounded-lg bg-[#EAF3FF] text-[#1A6FD4] flex items-center justify-center mb-6 group-hover:bg-[#1A6FD4] group-hover:text-white transition-colors">
        <Icon name={service.icon} size="md" />
      </div>
      <Heading variant="h3" responsive={false} className="mb-3">
        {service.title}
      </Heading>
      <Paragraph size="base" muted className="flex-grow mb-6">
        {service.shortDescription}
      </Paragraph>
      <Link href={`/leistungen/${service.slug}`} className="inline-flex items-center justify-center w-full rounded-lg font-semibold px-4 py-2 text-[15px] border-[1.5px] border-[#1A6FD4] hover:bg-[#EAF3FF] text-[#1A6FD4] transition-colors">
        Mehr erfahren
      </Link>
    </div>
  );
}

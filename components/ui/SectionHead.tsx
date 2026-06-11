import React from 'react';
import { Heading } from './Heading';
import { Paragraph } from './Paragraph';

export function SectionHead({ eyebrow, title, lead, align = 'left', className = '' }: any) {
  const alignClass = align === 'center' ? 'text-center mx-auto' : 'text-left';
  
  return (
    <div className={`mb-12 ${alignClass} ${className}`}>
      {eyebrow && <p className="text-[#1A6FD4] font-semibold tracking-wide uppercase text-sm mb-3">{eyebrow}</p>}
      <Heading variant="h2" className="mb-4">
        {title}
      </Heading>
      {lead && <Paragraph className="text-lg text-slate-600 max-w-2xl mt-4" style={align === 'center' ? { marginInline: 'auto' } : {}}>{lead}</Paragraph>}
    </div>
  );
}

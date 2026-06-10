import React from 'react';
import { Testimonial } from '@/lib/types';
import { Paragraph } from '@/components/ui/Paragraph';
import { Icon } from '@/components/ui/Icon';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  // Generate 5 stars based on rating
  const stars = Array.from({ length: 5 }).map((_, i) => (
    <Icon 
      key={i} 
      name="star" 
      size="sm" 
      filled={i < testimonial.rating}
      className={i < testimonial.rating ? "text-yellow-400" : "text-[#D4E5F7]"} 
    />
  ));

  return (
    <div className="flex flex-col h-full bg-[#EEF5FF] border-l-4 border-[#1A6FD4] pl-6 pr-4 py-6 rounded-r-xl">
      <div className="flex items-center gap-1 mb-4">
        {stars}
      </div>
      
      <p className="text-[#1E3A5C] italic flex-grow mb-6">&quot;{testimonial.quote}&quot;</p>
      
      <div>
        <Paragraph size="base" className="font-bold mb-0.5">
          {testimonial.clientName}
        </Paragraph>
        <Paragraph size="sm" muted>
          {testimonial.clientRole}, {testimonial.company}
        </Paragraph>
      </div>
    </div>
  );
}

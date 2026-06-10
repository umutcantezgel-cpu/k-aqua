import React from 'react';
import { Testimonial } from '@/lib/types';
import { Grid } from '@/components/layout/Grid';
import { TestimonialCard } from '@/components/cards/TestimonialCard';
import { getAllTestimonials } from '@/lib/data/testimonials';

interface TestimonialSliderProps {
  testimonials?: Testimonial[];
  limit?: number;
}

export function TestimonialSlider({ testimonials, limit = 3 }: TestimonialSliderProps) {
  // Use passed testimonials or fall back to data layer
  const data = testimonials || getAllTestimonials();
  const displayData = data.slice(0, limit);

  return (
    <div className="w-full">
      <Grid columns={3} responsive gap="md">
        {displayData.map((testimonial) => (
          <div key={testimonial.id} className="h-full">
            <TestimonialCard testimonial={testimonial} />
          </div>
        ))}
      </Grid>
      
      {/* Placeholder Carousel dots wrapper for Phase 5 */}
      {data.length > limit && (
        <div className="flex justify-center gap-2 mt-8 opacity-50">
          <span className="w-3 h-3 rounded-full bg-[#1A6FD4]"></span>
          <span className="w-3 h-3 rounded-full bg-[#D4E5F7]"></span>
          <span className="w-3 h-3 rounded-full bg-[#D4E5F7]"></span>
        </div>
      )}
    </div>
  );
}

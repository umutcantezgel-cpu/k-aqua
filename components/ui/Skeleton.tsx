import React from 'react';

interface SkeletonProps {
  width?: string | number;
  height?: string | number;
  className?: string;
  circle?: boolean;
}

export function Skeleton({ width, height, className = '', circle = false }: SkeletonProps) {
  const radiusClass = circle ? 'rounded-full' : 'rounded-lg';
  
  return (
    <div 
      className={`bg-[#D4E5F7] animate-pulse ${radiusClass} ${className}`.trim()}
      style={{ width, height: height || '1em' }}
      aria-hidden="true"
    />
  );
}

import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  spacing?: 'sm' | 'md' | 'lg' | 'none';
  background?: 'white' | 'gray' | 'blue' | 'transparent';
  id?: string;
}

export function Section({ 
  children, 
  className = '', 
  spacing = 'md', 
  background = 'white', 
  id 
}: SectionProps) {
  let spacingClass = '';
  switch (spacing) {
    case 'sm':
      spacingClass = 'py-8';
      break;
    case 'md':
      spacingClass = 'py-16';
      break;
    case 'lg':
      spacingClass = 'py-24';
      break;
    case 'none':
      spacingClass = 'py-0';
      break;
  }

  let bgClass = '';
  switch (background) {
    case 'white':
      bgClass = 'bg-white';
      break;
    case 'gray':
      bgClass = 'bg-[#EEF5FF]';
      break;
    case 'blue':
      bgClass = 'bg-[#1A6FD4] text-white';
      break;
    case 'transparent':
      bgClass = 'bg-transparent';
      break;
  }

  return (
    <section id={id} className={`w-full ${bgClass} ${spacingClass} ${className}`.trim()}>
      {children}
    </section>
  );
}

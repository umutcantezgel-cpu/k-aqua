import React from 'react';

interface DividerProps {
  orientation?: 'horizontal' | 'vertical';
  spacing?: 'sm' | 'md' | 'lg' | 'none';
  className?: string;
}

export function Divider({ orientation = 'horizontal', spacing = 'md', className = '' }: DividerProps) {
  const isHorizontal = orientation === 'horizontal';
  
  let marginStyles = '';
  switch (spacing) {
    case 'sm':
      marginStyles = isHorizontal ? 'my-2' : 'mx-2';
      break;
    case 'md':
      marginStyles = isHorizontal ? 'my-4' : 'mx-4';
      break;
    case 'lg':
      marginStyles = isHorizontal ? 'my-8' : 'mx-8';
      break;
    case 'none':
      marginStyles = 'm-0';
      break;
  }

  const orientationStyles = isHorizontal 
    ? `h-px w-full bg-[#D4E5F7]` 
    : `w-px h-full bg-[#D4E5F7]`;

  const Tag = isHorizontal ? 'hr' : 'div';

  return (
    <Tag 
      className={`${orientationStyles} ${marginStyles} ${className}`.trim()} 
      role="separator" 
      aria-orientation={orientation}
    />
  );
}

import React from 'react';

interface StackProps {
  children: React.ReactNode;
  direction?: 'vertical' | 'horizontal';
  gap?: 'none' | 'sm' | 'md' | 'lg';
  className?: string;
  align?: 'start' | 'center' | 'end' | 'stretch';
  justify?: 'start' | 'center' | 'end' | 'between' | 'around';
}

export function Stack({
  children,
  direction = 'vertical',
  gap = 'md',
  className = '',
  align,
  justify,
}: StackProps) {
  const isVert = direction === 'vertical';
  
  let flexClass = isVert ? 'flex-col' : 'flex-row';
  
  let gapClass = '';
  switch (gap) {
    case 'sm': gapClass = 'gap-2'; break;
    case 'md': gapClass = 'gap-4'; break;
    case 'lg': gapClass = 'gap-8'; break;
    case 'none': gapClass = 'gap-0'; break;
  }

  let alignClass = '';
  switch (align) {
    case 'start': alignClass = 'items-start'; break;
    case 'center': alignClass = 'items-center'; break;
    case 'end': alignClass = 'items-end'; break;
    case 'stretch': alignClass = 'items-stretch'; break;
  }

  let justifyClass = '';
  switch (justify) {
    case 'start': justifyClass = 'justify-start'; break;
    case 'center': justifyClass = 'justify-center'; break;
    case 'end': justifyClass = 'justify-end'; break;
    case 'between': justifyClass = 'justify-between'; break;
    case 'around': justifyClass = 'justify-around'; break;
  }

  return (
    <div className={`flex ${flexClass} ${gapClass} ${alignClass} ${justifyClass} ${className}`.trim()}>
      {children}
    </div>
  );
}

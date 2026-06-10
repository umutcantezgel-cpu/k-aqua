import React from 'react';

interface GridProps {
  children: React.ReactNode;
  columns?: 1 | 2 | 3 | 4;
  gap?: 'sm' | 'md' | 'lg';
  className?: string;
  responsive?: boolean;
}

export function Grid({ 
  children, 
  columns = 3, 
  gap = 'md', 
  className = '', 
  responsive = true 
}: GridProps) {
  let gapClass = '';
  switch (gap) {
    case 'sm': gapClass = 'gap-4'; break;
    case 'md': gapClass = 'gap-6'; break;
    case 'lg': gapClass = 'gap-8'; break;
  }

  let colsClass = '';
  if (responsive) {
    switch (columns) {
      case 1: colsClass = 'grid-cols-1'; break;
      case 2: colsClass = 'grid-cols-1 md:grid-cols-2'; break;
      case 3: colsClass = 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'; break;
      case 4: colsClass = 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4'; break;
    }
  } else {
    switch (columns) {
      case 1: colsClass = 'grid-cols-1'; break;
      case 2: colsClass = 'grid-cols-2'; break;
      case 3: colsClass = 'grid-cols-3'; break;
      case 4: colsClass = 'grid-cols-4'; break;
    }
  }

  return (
    <div className={`grid ${colsClass} ${gapClass} ${className}`.trim()}>
      {children}
    </div>
  );
}

import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'full';
}

export function Container({ children, className = '', size = 'lg' }: ContainerProps) {
  let sizeClass = '';
  switch (size) {
    case 'sm':
      sizeClass = 'max-w-2xl';
      break;
    case 'md':
      sizeClass = 'max-w-4xl';
      break;
    case 'lg':
      sizeClass = 'max-w-7xl';
      break;
    case 'full':
      sizeClass = 'max-w-full';
      break;
  }

  return (
    <div className={`mx-auto px-4 sm:px-6 lg:px-8 w-full ${sizeClass} ${className}`.trim()}>
      {children}
    </div>
  );
}

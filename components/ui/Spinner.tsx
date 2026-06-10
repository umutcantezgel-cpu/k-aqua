'use client';

import React from 'react';

interface SpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function Spinner({ size = 'md', className = '' }: SpinnerProps) {
  let sizeStyles = '';
  switch (size) {
    case 'sm':
      sizeStyles = 'w-4 h-4 border-2';
      break;
    case 'md':
      sizeStyles = 'w-6 h-6 border-2';
      break;
    case 'lg':
      sizeStyles = 'w-8 h-8 border-4';
      break;
  }

  return (
    <div
      className={`inline-block animate-spin border-[#D4E5F7] border-t-[#1A6FD4] rounded-full ${sizeStyles} ${className}`.trim()}
      role="status"
      aria-label="Loading"
    />
  );
}

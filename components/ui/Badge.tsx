import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'error';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function Badge({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
}: BadgeProps) {
  let variantStyles = '';
  switch (variant) {
    case 'primary':
      variantStyles = 'bg-[#EAF3FF] text-[#0D4999]';
      break;
    case 'secondary':
      variantStyles = 'bg-[#EEF5FF] text-[#1E3A5C]';
      break;
    case 'success':
      variantStyles = 'bg-[#E6F4EE] text-[#004D34]';
      break;
    case 'warning':
      variantStyles = 'bg-[#FFF4E5] text-[#7A3D00]';
      break;
    case 'error':
      variantStyles = 'bg-[#FDEEED] text-[#6B1500]';
      break;
  }

  let sizeStyles = '';
  switch (size) {
    case 'sm':
      sizeStyles = 'px-2 py-1 text-xs';
      break;
    case 'md':
      sizeStyles = 'px-3 py-1.5 text-sm';
      break;
    case 'lg':
      sizeStyles = 'px-4 py-2 text-base';
      break;
  }

  return (
    <span className={`inline-block rounded-full font-medium ${variantStyles} ${sizeStyles} ${className}`.trim()}>
      {children}
    </span>
  );
}

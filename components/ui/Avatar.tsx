import React from 'react';

interface AvatarProps {
  src?: string;
  initials?: string;
  alt?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

export function Avatar({ src, initials, alt = 'Avatar', size = 'md', className = '' }: AvatarProps) {
  let sizeStyles = '';
  switch (size) {
    case 'sm':
      sizeStyles = 'w-6 h-6 text-xs';
      break;
    case 'md':
      sizeStyles = 'w-8 h-8 text-sm';
      break;
    case 'lg':
      sizeStyles = 'w-12 h-12 text-lg';
      break;
    case 'xl':
      sizeStyles = 'w-16 h-16 text-xl';
      break;
  }

  const baseStyles = `rounded-full shrink-0 flex items-center justify-center ${sizeStyles} ${className}`.trim();

  if (src) {
    return (
      <img 
        src={src} 
        alt={alt} 
        className={`${baseStyles} object-cover`} 
      />
    );
  }

  return (
    <div className={`${baseStyles} bg-[#1A6FD4] text-white font-bold`}>
      {initials ? initials.substring(0, 2).toUpperCase() : '?'}
    </div>
  );
}

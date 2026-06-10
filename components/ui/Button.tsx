'use client';

import React, { forwardRef } from 'react';
import { Spinner } from './Spinner';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'link';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  loading?: boolean;
  asChild?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = 'primary',
      size = 'md',
      loading = false,
      disabled,
      className = '',
      type = 'button',
      asChild: _asChild,
      ...props
    },
    ref
  ) => {
    let variantStyles = '';
    switch (variant) {
      case 'primary':
        variantStyles = 'bg-[#1A6FD4] hover:bg-[#0D4999] text-white border border-transparent';
        break;
      case 'secondary':
        variantStyles = 'bg-[#4A7299] hover:bg-[#1E3A5C] text-white border border-transparent';
        break;
      case 'outline':
        variantStyles = 'border-[1.5px] border-[#1A6FD4] hover:bg-[#EAF3FF] text-[#1A6FD4]';
        break;
      case 'ghost':
        variantStyles = 'hover:bg-[#EAF3FF] text-[#0C1929] border border-transparent';
        break;
      case 'link':
        variantStyles = 'text-[#1A6FD4] hover:text-[#0D4999] hover:underline border border-transparent p-0 bg-transparent';
        break;
    }

    let sizeStyles = '';
    if (variant !== 'link') {
      switch (size) {
        case 'sm':
          sizeStyles = 'px-3 py-1.5 text-sm';
          break;
        case 'md':
          sizeStyles = 'px-4 py-2 text-base';
          break;
        case 'lg':
          sizeStyles = 'px-6 py-3 text-lg';
          break;
        case 'xl':
          sizeStyles = 'px-8 py-4 text-xl';
          break;
      }
    }

    const disabledStyles = disabled || loading ? 'opacity-50 cursor-not-allowed' : '';

    return (
      <button
        ref={ref}
        type={type}
        disabled={disabled || loading}
        className={`inline-flex items-center justify-center rounded-lg transition-colors font-medium ${variantStyles} ${sizeStyles} ${disabledStyles} ${className}`.trim()}
        {...props}
      >
        {loading && (
          <span className="mr-2">
            <Spinner size={size === 'sm' ? 'sm' : 'md'} />
          </span>
        )}
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

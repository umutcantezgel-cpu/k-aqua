'use client';

import React, { forwardRef } from 'react';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
  helperText?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ type = 'text', error = false, helperText, className = '', disabled, ...props }, ref) => {
    const errorStyles = error
      ? 'border-[#DE350B] focus:border-[#DE350B] focus:ring-[#DE350B]/20'
      : 'border-[#D4E5F7] focus:border-[#1A6FD4] focus:ring-[#1A6FD4]/20';
    
    const disabledStyles = disabled ? 'opacity-50 cursor-not-allowed bg-[#EEF5FF]' : 'bg-white';

    return (
      <div className={`w-full ${className}`}>
        <input
          ref={ref}
          type={type}
          disabled={disabled}
          className={`w-full border-[1.5px] rounded-lg px-3 py-2 text-[#0C1929] placeholder:text-[#8BAABF] focus:outline-none focus:ring-2 transition-colors ${errorStyles} ${disabledStyles}`.trim()}
          {...props}
        />
        {helperText && (
          <p className={`text-sm mt-1 ${error ? 'text-[#DE350B]' : 'text-[#4A7299]'}`}>
            {helperText}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

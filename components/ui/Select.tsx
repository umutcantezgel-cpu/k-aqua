'use client';

import React, { forwardRef } from 'react';

export interface SelectOption {
  label: string;
  value: string;
}

export interface SelectProps extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'onChange'> {
  options: SelectOption[];
  error?: boolean;
  helperText?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ options, error = false, helperText, className = '', disabled, onChange, placeholder, value, ...props }, ref) => {
    const errorStyles = error
      ? 'border-[#DE350B] focus:border-[#DE350B] focus:ring-[#DE350B]/20'
      : 'border-[#D4E5F7] focus:border-[#1A6FD4] focus:ring-[#1A6FD4]/20';
    
    const disabledStyles = disabled ? 'opacity-50 cursor-not-allowed bg-[#EEF5FF]' : 'bg-white';

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
      if (onChange) {
        onChange(e.target.value);
      }
    };

    return (
      <div className={`w-full ${className}`}>
        <div className="relative">
          <select
            ref={ref}
            disabled={disabled}
            value={value}
            onChange={handleChange}
            className={`w-full pr-10 border-[1.5px] rounded-lg px-3 py-2 text-[#0C1929] appearance-none cursor-pointer focus:outline-none focus:ring-2 transition-colors ${errorStyles} ${disabledStyles}`.trim()}
            {...props}
          >
            {placeholder && (
              <option value="" disabled hidden>
                {placeholder}
              </option>
            )}
            {options.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none text-[#4A7299]">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
        {helperText && (
          <p className={`text-sm mt-1 ${error ? 'text-[#DE350B]' : 'text-[#4A7299]'}`}>
            {helperText}
          </p>
        )}
      </div>
    );
  }
);

Select.displayName = 'Select';
